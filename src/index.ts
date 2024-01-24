import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

import RosePinePallette from './rose-pine';
import RosePineMoonPallette from './rose-pine-moon';
import RosePineDawnPallette from './rose-pine-dawn';

/**
 * Initialization data for the rose_pine_jupyterlab extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'rose_pine_jupyterlab:plugin',
  description: 'Soho Vibes for JupyterLab',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension rose_pine_jupyterlab is activated!');
    const style = 'rose_pine_jupyterlab/index.css';

    const pallettes = [
      RosePinePallette,
      RosePineMoonPallette,
      RosePineDawnPallette
    ];

    pallettes.forEach(Pallette => {
      const pallette = new Pallette();
      manager.register({
        name: pallette.name,
        isLight: pallette.type === 'light',
        load: () => {
          pallette.setColorPallette();
          return manager.loadCSS(style);
        },
        unload: () => Promise.resolve(undefined)
      });
    });
  }
};

export default plugin;
