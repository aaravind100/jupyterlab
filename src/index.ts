import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

import palettes from './palettes';

/**
 * Initialization data for the rose_pine_jupyterlab extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'rose_pine_jupyterlab:plugin',
  description: 'Soho Vibes for JupyterLab',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    // console.log('JupyterLab extension rose_pine_jupyterlab is activated!');
    const style = 'rose_pine_jupyterlab/index.css';

    palettes.forEach(palette => {
      manager.register({
        name: palette.name,
        isLight: palette.type === 'light',
        themeScrollbars: true,
        load: () => {
          palette.setColorPalette();
          return manager.loadCSS(style);
        },
        unload: () => Promise.resolve(undefined)
      });
    });
  }
};

export default plugin;
