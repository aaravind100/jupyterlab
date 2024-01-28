import { IPallette } from './pallettes.d';
import rosePinePallette from './rose-pine.json';
import rosePineMoonPallette from './rose-pine-moon.json';
import rosePineDawnPallette from './rose-pine-dawn.json';

const pallettes: IPallette[] = [];

[rosePinePallette, rosePineMoonPallette, rosePineDawnPallette].forEach(
  pallette => {
    class Pallette implements IPallette {
      name: string = pallette.name;
      type: string = pallette.type;
      pallette: Map<string, string> = new Map(
        Object.entries(pallette.pallette)
      );

      setColorPallette() {
        this.pallette.forEach((v: string, k: string) => {
          document.documentElement.style.setProperty(k, v);
        });
      }
    }

    pallettes.push(new Pallette());
  }
);

export default pallettes;
