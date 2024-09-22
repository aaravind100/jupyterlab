import { IPalette, PaletteType } from './palettes.d';
import rosePinePalette from './rose-pine.json';
import rosePineMoonPalette from './rose-pine-moon.json';
import rosePineDawnPalette from './rose-pine-dawn.json';

/**
 * Implementation of theme variants.
 *
 * @param name - Variant name | theme name
 * @param type - Variant type, light or dark
 * @param palette - Map of css property and the respective color value
 *
 */
class Palette implements IPalette {
  public name: string;
  public type: PaletteType;
  public palette: Map<string, string>;

  constructor(name: string, type: PaletteType, palette: Map<string, string>) {
    this.name = name;
    this.type = type;
    this.palette = palette;
  }

  /**
   * Sets the color palette from the color map. This needs to be called during theme load.
   */
  setColorPalette() {
    this.palette.forEach((value: string, property: string) => {
      document.documentElement.style.setProperty(property, value);
    });
  }
}

const palettes: IPalette[] = [];

[rosePinePalette, rosePineMoonPalette, rosePineDawnPalette].forEach(palette => {
  palettes.push(
    new Palette(
      palette.name,
      palette.type as PaletteType,
      new Map(Object.entries(palette.palette))
    )
  );
});

export default palettes;
