import { ISpaceData, ISpaceKit } from "../interfaces/space";
import floatToHex from "../utils/floatToHex";

declare global {
  interface Window { Spacekit: any; }
}

interface IUseSpaceKit {
  initSpaceKit: () => ISpaceKit;
  resetCamera: () => void;
  destroy: () => void;
  createObject: (space: ISpaceKit, id: string, obj: ISpaceData) => any;
  removeObject: (space: ISpaceKit, obj: any) => void;
}

export const useSpaceKit = (containerId: string): IUseSpaceKit => {

  const initSpaceKit = () => {
    const Spacekit = window && window.Spacekit;
    const viz = new Spacekit.Simulation(document.getElementById(containerId), {
      basePath: 'https://typpo.github.io/spacekit/src',
      jdPerSecond: 20 // Slowest the better for CPU
    });

    // Create a skybox using NASA TYCHO artwork.
    viz.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);

    // We want sun and earth in all our simulation - could be done without
    viz.createObject('sun', {...Spacekit.SpaceObjectPresets.SUN, labelText: 'THE SUN'});
    viz.createObject('earth', {...Spacekit.SpaceObjectPresets.EARTH, labelText: 'THE EARTH'});

    return viz;
  }

  const createObject = (space: ISpaceKit, id: string, obj: ISpaceData) => {
    const Spacekit = window && window.Spacekit;
    const color = parseInt(`0x${floatToHex(parseFloat(obj.v_i))}`);

      const ephem = new Spacekit.Ephem({
        epoch: parseFloat(obj.orbit_period), // orbit_period
        a: parseFloat(obj.semimajor_axis), // semimajor_axis
        e: parseFloat(obj.eccentricity), // eccentricity
        i: parseFloat(obj.inclination), // inclination
        om: parseFloat(obj.longitude_ascending_node), // longitude_ascending_node
        w: parseFloat(obj.periastron_date), // periastron_date
        ma: parseFloat(obj.mag_g), // mag_g
      }, 'rad')

      const spaceObj = space.createObject(id, {
      particleSize: (parseFloat(obj.radius) * 100), // radius - multiply * 100 because it's innacurate but prettier
      labelText: `<div style="cursor: pointer">${obj.source_extended_id.trim()}</div>`,
      
      ephem,
      // textureUrl: '/path/to/spriteTexture.png',
      // basePath: '/base',
      theme: {
        color: color, // V_I
        orbitColor: color,
      },
    });

    return spaceObj;
    
  }

  const removeObject = (space: ISpaceKit, obj: any) => {
    space.removeObject(obj);
  }

  const destroy = () => {
    document.getElementById(containerId).innerHTML = '';
  }

  // Doesnt work and spaceKit resetCamera method seems KO
  const resetCamera = () => {
    destroy()
    initSpaceKit();
  }

  return {initSpaceKit, resetCamera, destroy, createObject, removeObject}
  
}

export default useSpaceKit;