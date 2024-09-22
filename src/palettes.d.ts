export interface IPalette {
  name: string;
  type: PaletteType;
  palette: Map<string, string>;

  setColorPalette: () => void;
}

export type PaletteType = 'light' | 'dark';
