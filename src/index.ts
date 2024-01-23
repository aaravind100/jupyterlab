import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

import { ISettingRegistry } from '@jupyterlab/settingregistry';

/**
 * Initialization data for the rose_pine_jupyterlab extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'rose_pine_jupyterlab:plugin',
  description: 'Soho Vibes for JupyterLab',
  autoStart: true,
  requires: [IThemeManager],
  optional: [ISettingRegistry],
  activate: (
    app: JupyterFrontEnd,
    manager: IThemeManager,
    settingRegistry: ISettingRegistry | null
  ) => {
    console.log('JupyterLab extension rose_pine_jupyterlab is activated!');
    const style = 'rose_pine_jupyterlab/index.css';

    manager.register({
      name: 'Rosé Pine',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });

    if (settingRegistry) {
      settingRegistry
        .load(plugin.id)
        .then(settings => {
          console.log(
            'rose_pine_jupyterlab settings loaded:',
            settings.composite
          );
        })
        .catch(reason => {
          console.error(
            'Failed to load settings for rose_pine_jupyterlab.',
            reason
          );
        });
    }
  }
};

export default plugin;
