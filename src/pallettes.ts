import { IPallette, PalletteType } from './pallettes.d';
import rosePinePallette from './rose-pine.json';
import rosePineMoonPallette from './rose-pine-moon.json';
import rosePineDawnPallette from './rose-pine-dawn.json';

/**
 * Implementation of theme variants.
 *
 * @param name - Variant name | theme name
 * @param type - Variant type, light or dark
 * @param pallette - Map of css property and the respective color value
 *
 */
class Pallette implements IPallette {
  public name: string;
  public type: PalletteType;
  public pallette: Map<string, string>;

  constructor(name: string, type: PalletteType, pallette: Map<string, string>) {
    this.name = name;
    this.type = type;
    this.pallette = pallette;
  }

  /**
   * Sets the color pallette from the color map. This needs to be called during theme load.
   */
  setColorPallette() {
    this.pallette.forEach((value: string, property: string) => {
      document.documentElement.style.setProperty(property, value);
    });
  }
}

const pallettes: IPallette[] = [];

[rosePinePallette, rosePineMoonPallette, rosePineDawnPallette].forEach(
  pallette => {
    pallettes.push(
      new Pallette(
        pallette.name,
        pallette.type as PalletteType,
        new Map(Object.entries(pallette.pallette))
      )
    );
  }
);

export default pallettes;
