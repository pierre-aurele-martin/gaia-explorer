// Script for personal use only - straight to the point. Should not be in this repo.
require('dotenv').config({path: '.env.local'});

const xlsx = require('xlsx');
const algoliasearch = require('algoliasearch');

// excel parsing to JSON - full file is <10MB
const workbook = xlsx.readFile('./public/data/GoodGDR3_motiononly.xlsx');
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const JSON = xlsx.utils.sheet_to_json(sheet, { defval: "", blankrows: false, raw: true });
console.log('FILE ===>', JSON);

// MAX 1GB per call - 10MB recommended
const algoliaBatch = [];
for (let d of JSON) {
    /* Parse source_id according to datamodel to create more categories for Algolia
        1 -> 1: Stellar 2: Galaxy
        7294000 -> HTMIndex level12
        0 -> Variability
        0 -> Multiple system
        0912 -> Multi system hierarchy
        50000 -> Objectnumber in region
    */
    let type;
    const sourceId = `${d.source_id}`;
    switch (sourceId[0]) {
        case '1': type = 'Stellar'; break;
        case '2': type = 'Galaxy'; break;
        // I know I have nothing else in my dataset
        default: type = 'Unknow'; break;
    }
    // we reformat most of data - xlsx can be unreliable on datacell format
    // Can't make toggleRefinment be selected on !null ?
    const variability_type = d.variability_type.toLowerCase() === 'null' ? null : d.variability_type;
    const known_variability_type = variability_type ? true : false;
   
    const object = {
        source_extended_id: d.source_extended_id.trim(),
        objectID: d.source_extended_id.trim(), // required for Algolia
        source_id: parseFloat(d.source_id),
        type,
        HTM_12: parseInt(sourceId.slice(1, 8), 10),
        variability: parseInt(sourceId.slice(8, 9),10),
        multiple_system: parseInt(sourceId.slice(9, 10),10),
        multi_system_hierarchy: sourceId.slice(10, 13), // No parseInt as it might start with 0?
        object_number: sourceId.slice(13), // same
        solution_id: parseFloat(d.solution_id),
        ra: parseFloat(d.ra),
        dec: parseFloat(d.dec),
        barycentric_distance: parseFloat(d.barycentric_distance),
        pmra: parseFloat(d.pmra),
        pmdec: parseFloat(d.pmdec),
        radial_velocity: parseFloat(d.radial_velocity),
        mag_g: parseFloat(d.mag_g),
        mag_bp: parseFloat(d.mag_bp),
        mag_rp: parseFloat(d.mag_rp),
        mag_rvs: parseFloat(d.mag_rvs),
        v_i: parseFloat(d.v_i),
        mean_absolute_v: parseFloat(d.mean_absolute_v),
        ag: parseFloat(d.ag),
        av: parseFloat(d.av),
        teff: parseFloat(d.teff),
        spectral_type: d.spectral_type.trim(),
        logg: parseFloat(d.logg),
        feh: parseFloat(d.feh),
        alphafe: parseFloat(d.alphafe),
        mbol: parseFloat(d.mbol),
        age: parseFloat(d.age),
        mass: parseFloat(d.mass),
        radius: parseFloat(d.radius),
        vsini: parseFloat(d.vsini),
        population: parseInt(d.population, 10),
        has_photocenter_motion: d.has_photocenter_motion,
        nc: parseInt(d.nc, 10),
        nt: parseInt(d.nt, 10),
        semimajor_axis: parseFloat(d.semimajor_axis),
        eccentricity: parseFloat(d.eccentricity), // ASK ME ABOUT IT !
        inclination: parseFloat(d.inclination),
        longitude_ascending_node: parseFloat(d.longitude_ascending_node),
        orbit_period: parseFloat(d.orbit_period),
        periastron_date: parseFloat(d.periastron_date),
        periastron_argument: parseFloat(d.periastron_argument),
        variability_type,
        known_variability_type,
        variability_amplitude: parseFloat(d.variability_amplitude),
        variability_period: parseFloat(d.variability_period),
        variability_phase: parseFloat(d.variability_phase),
        r_env_r_star: d.r_env_r_star ? parseFloat(d.r_env_r_star) : 0
    }

   if (object.has_photocenter_motion) {
    algoliaBatch.push(object);
   }
    console.log(object);
}

const client = algoliasearch(process.env.NEXT_PUBLIC_ALGOLIA_APP_ID, process.env.ALGOLIA_PRIVATE_KEY);
const index = client.initIndex(process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME);
index.clearObjects().then(() => {
    console.log('Objects were cleared')
    index.saveObjects(algoliaBatch)
    .then((res) => {
        console.log('Saved - ObjectsIds ==>', res);
    })
})
.catch((err) => console.error(err));

// I let all attributes retrievable on purpose
// I use barycentric_distance as a ranking attributes for showcase
// Facet filteronly on Mass(not searchable)
// RefinementList doesnt work with filterOnly - use Configure ?
index.setSettings({
    disableTypoToleranceOnAttributes: ['source_extended_id', 'HTM_12', 'object_number'],
    searchableAttributes: [
        'source_extended_id', 'HTM_12', 'object_number', 'type', 'spectral_type', 'variability_type'
    ],
    attributesToHighlight: ['type', 'spectral_type', 'HTM_12', 'object_number', 'variability_type'],
    ranking: ["words","filters","proximity","attribute","exact","custom"], // typo and geo won't be relevant here
    customRanking: ['asc(barycentric_distance)', 'desc(radius)'],
    attributesForFaceting: ['known_variability_type', 'mass', 'filterOnly(type)']
}).then((res) => {
    // done
    console.log('Index setSettings ok', res)
})
.catch((err) => console.error(err));