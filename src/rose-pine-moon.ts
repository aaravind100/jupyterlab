import { BasePallette } from './pallettes.d';

export default class Pallette implements BasePallette {
  name: string = 'Rosé Pine Moon';
  type: string = 'dark';

  setColorPallette() {
    document.documentElement.style.setProperty('--rp-plt-base', '#232136');
    document.documentElement.style.setProperty('--rp-plt-surface', '#2a273f');
    document.documentElement.style.setProperty('--rp-plt-overlay', '#393552');
    document.documentElement.style.setProperty('--rp-plt-muted', '#6e6a86');
    document.documentElement.style.setProperty('--rp-plt-subtle', '#908caa');
    document.documentElement.style.setProperty('--rp-plt-text', '#e0def4');
    document.documentElement.style.setProperty('--rp-plt-love', '#eb6f92');
    document.documentElement.style.setProperty('--rp-plt-gold', '#f6c177');
    document.documentElement.style.setProperty('--rp-plt-rose', '#ea9a97');
    document.documentElement.style.setProperty('--rp-plt-pine', '#3e8fb0');
    document.documentElement.style.setProperty('--rp-plt-foam', '#9ccfd8');
    document.documentElement.style.setProperty('--rp-plt-iris', '#c4a7e7');
    document.documentElement.style.setProperty(
      '--rp-plt-highlight-low',
      '#2a283e'
    );
    document.documentElement.style.setProperty(
      '—rp-plt-highlight-med',
      '#44415a'
    );
    document.documentElement.style.setProperty(
      '—rp-plt-highlight-high',
      '#56526e'
    );
  }
}
