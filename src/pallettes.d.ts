export interface IPallette {
  name: string;
  type: PalletteType;
  pallette: Map<string, string>;

  setColorPallette: () => void;
}

export type PalletteType = 'light' | 'dark';
