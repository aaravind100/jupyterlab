import { BasePallette } from './pallettes.d';

export default class Pallette implements BasePallette {
  name: string = 'Rosé Pine Dawn';
  type: string = 'light';

  setColorPallette() {
    document.documentElement.style.setProperty('--rp-plt-base', '#faf4ed');
    document.documentElement.style.setProperty('--rp-plt-surface', '#fffaf3');
    document.documentElement.style.setProperty('--rp-plt-overlay', '#f2e9e1');
    document.documentElement.style.setProperty('--rp-plt-muted', '#9893a5');
    document.documentElement.style.setProperty('--rp-plt-subtle', '#797593');
    document.documentElement.style.setProperty('--rp-plt-text', '#575279');
    document.documentElement.style.setProperty('--rp-plt-love', '#b4637a');
    document.documentElement.style.setProperty('--rp-plt-gold', '#ea9d34');
    document.documentElement.style.setProperty('--rp-plt-rose', '#d7827e');
    document.documentElement.style.setProperty('--rp-plt-pine', '#286983');
    document.documentElement.style.setProperty('--rp-plt-foam', '#56949f');
    document.documentElement.style.setProperty('--rp-plt-iris', '#907aa9');
    document.documentElement.style.setProperty(
      '--rp-plt-highlight-low',
      '#f4ede8'
    );
    document.documentElement.style.setProperty(
      '—rp-plt-highlight-med',
      '#dfdad9'
    );
    document.documentElement.style.setProperty(
      '—rp-plt-highlight-high',
      '#cecacd'
    );
  }
}
