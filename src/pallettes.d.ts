export interface IPallette {
  name: string;
  type: string;
  pallette: Map<string, string>;

  setColorPallette: () => void;
}
