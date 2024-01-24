import { BasePallette } from './pallettes.d';

export default class Pallette implements BasePallette {
  name: string = 'Rosé Pine';
  type: string = 'dark';

  setColorPallette() {
    document.documentElement.style.setProperty('--rp-plt-base', '#191724');
    document.documentElement.style.setProperty('--rp-plt-surface', '#1f1d2e');
    document.documentElement.style.setProperty('--rp-plt-overlay', '#26233a');
    document.documentElement.style.setProperty('--rp-plt-muted', '#6e6a86');
    document.documentElement.style.setProperty('--rp-plt-subtle', '#908caa');
    document.documentElement.style.setProperty('--rp-plt-text', '#e0def4');
    document.documentElement.style.setProperty('--rp-plt-love', '#eb6f92');
    document.documentElement.style.setProperty('--rp-plt-gold', '#f6c177');
    document.documentElement.style.setProperty('--rp-plt-rose', '#ebbcba');
    document.documentElement.style.setProperty('--rp-plt-pine', '#31748f');
    document.documentElement.style.setProperty('--rp-plt-foam', '#9ccfd8');
    document.documentElement.style.setProperty('--rp-plt-iris', '#c4a7e7');
    document.documentElement.style.setProperty(
      '--rp-plt-highlight-low',
      '#21202e'
    );
    document.documentElement.style.setProperty(
      '—rp-plt-highlight-med',
      '#403d52'
    );
    document.documentElement.style.setProperty(
      '—rp-plt-highlight-high',
      '#524f67'
    );
  }
}
