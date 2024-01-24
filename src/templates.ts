import { BasePallette } from './pallettes.d';

export default class Pallette implements BasePallette {
  name: string = '$name';
  type: string = '$type';

  setColorPallette() {
    document.documentElement.style.setProperty('--rp-plt-base', '$base');
    document.documentElement.style.setProperty('--rp-plt-surface', '$surface');
    document.documentElement.style.setProperty('--rp-plt-overlay', '$overlay');
    document.documentElement.style.setProperty('--rp-plt-muted', '$muted');
    document.documentElement.style.setProperty('--rp-plt-subtle', '$subtle');
    document.documentElement.style.setProperty('--rp-plt-text', '$text');
    document.documentElement.style.setProperty('--rp-plt-love', '$love');
    document.documentElement.style.setProperty('--rp-plt-gold', '$gold');
    document.documentElement.style.setProperty('--rp-plt-rose', '$rose');
    document.documentElement.style.setProperty('--rp-plt-pine', '$pine');
    document.documentElement.style.setProperty('--rp-plt-foam', '$foam');
    document.documentElement.style.setProperty('--rp-plt-iris', '$iris');
    document.documentElement.style.setProperty(
      '--rp-plt-highlight-low',
      '$highlightLow'
    );
    document.documentElement.style.setProperty(
      '--rp-plt-highlight-med',
      '$highlightMed'
    );
    document.documentElement.style.setProperty(
      '--rp-plt-highlight-high',
      '$highlightHigh'
    );
  }
}
