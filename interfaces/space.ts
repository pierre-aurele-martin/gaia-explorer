
export interface ISpaceData{
  ag: string
  age: string
  alphafe: string;
  av: string;
  barycentric_distance: string;
  dec: string;
  eccentricity: string;
  feh: string;
  has_photocenter_motion: boolean
  inclination: string;
  logg: string;
  longitude_ascending_node: string;
  mag_bp: string;
  mag_g: string;
  mag_rp: string;
  mag_rvs: string;
  mass: string;
  mbol: string;
  mean_absolute_v: string;
  nc: string;
  nt: string;
  orbit_period: string;
  periastron_argument: string;
  periastron_date: string;
  pmdec: string;
  pmra: string;
  population: string;
  r_env_r_star: string;
  ra: string;
  radial_velocity: string;
  radius: string;
  semimajor_axis: string;
  solution_id: string;
  source_extended_id: string;
  source_id: number;
  spectral_type: string;
  teff: string;
  v_i: string;
  variability_amplitude: string;
  variability_period: string;
  variability_phase: string;
  variability_type: string;
  vsini: string;
}

// Not typed so I'll have to do a partial one
export interface ISpaceKit {
  start: () => void;
  stop: () => void;
  createObject: (id: string, obj: ISpaceObjectArgs ) => any;
  removeObject: (obj: any) => void;
}

interface ISpaceEphemArgs {
  epoch: number, // orbit_period radial_velocity
  a: number, // semimajor_axis
  e: number, // eccentricity
  i: number, // inclination
  om: number, // longitude_ascending_node
  w: number, // periastron_date
  ma: number, // mag_g
}

type ISpaceEphem = (args: ISpaceEphemArgs, ang: string) => any;

export interface ISpaceObjectArgs {
  particleSize: number;
  labelText: string;
  ephem: ISpaceEphem,
  // textureUrl: '/path/to/spriteTexture.png',
  // basePath: '/base',
  theme: {
    color: number, // V_I
    orbitColor: number,
  },
}
