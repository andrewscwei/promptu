import { css, InterpolationValue } from 'styled-components';

export type Alignment = 'tl' | 'tc' | 'tr' | 'cl' | 'cc' | 'cr' | 'bl' | 'bc' | 'br';

export type FontStyle = 'normal' | 'italic' | 'oblique';

export type FontWeight = 'normal' | 'bold' | 'bolder' | 'lighter' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export interface FontWeightDict {
  thin: 100;
  extraLight: 200;
  light: 300;
  normal: 400;
  medium: 500;
  semiBold: 600;
  bold: 700;
  extraBold: 800;
  black: 900;
}

export interface MediaBreakpointDict {
  mobile: {
    min: number;
    max: number;
  };

  tablet: {
    min: number;
    max: number;
  };

  notebook: {
    min: number;
    max: number;
  };

  desktop: {
    min: number;
    max: number;
  };

  tv: {
    min: number;
    max: number;
  };
}

export interface AlignHelper {
  abs(alignment?: Alignment): string;
  fixed(alignment?: Alignment): string;
}

export interface BoxHelper {
  default(): InterpolationValue[];
  fill(): InterpolationValue[];
  cover(): InterpolationValue[];
  flexh(alignment?: Alignment): InterpolationValue[];
  flexv(alignment?: Alignment): InterpolationValue[];
}

export interface FontHelper {
  face(family: string, src: string, weight?: FontWeight, style?: FontStyle): InterpolationValue[];
  set(family: string, size: number | string, weight?: FontWeight, style?: FontStyle): InterpolationValue[];
  weights: FontWeightDict;
}

export interface MediaHelper {
  breakpoints: MediaBreakpointDict;
  portrait: typeof css;
  landscape: typeof css;
  mobile: typeof css;
  gtmobile: typeof css;
  gtemobile: typeof css;
  tablet: typeof css;
  gttablet: typeof css;
  gtetablet: typeof css;
  lttablet: typeof css;
  ltetablet: typeof css;
  notebook: typeof css;
  gtnotebook: typeof css;
  gtenotebook: typeof css;
  ltnotebook: typeof css;
  ltenotebook: typeof css;
  desktop: typeof css;
  gtdesktop: typeof css;
  gtedesktop: typeof css;
  ltdesktop: typeof css;
  ltedesktop: typeof css;
  tv: typeof css;
  lttv: typeof css;
  ltetv: typeof css;
  gtw(minWidth: string | number): typeof css;
  gtew(minWidth: string | number): typeof css;
  ltw(maxWidth: string | number): typeof css;
  ltew(maxWidth: string | number): typeof css;
  clampw(minWidth: string | number, maxWidth: string | number): typeof css;
  gth(minHeight: string | number): typeof css;
  gteh(minHeight: string | number): typeof css;
  lth(maxHeight: string | number): typeof css;
  lteh(maxHeight: string | number): typeof css;
  clamph(minHeight: string | number, maxHeight: string | number): typeof css;
}

export interface NormalizeHelper {
  (): InterpolationValue[];
}

export interface UtilityHelper {
  toRGB(val: number): [number, number, number];
  toHexString(val: number, prefix?: string): string;
  parseUnit(val: number | string, defaultUnit?: string): [number, string];
}

export interface Promptu {
  align: AlignHelper;
  box: BoxHelper;
  font: FontHelper;
  media: MediaHelper;
  normalize: NormalizeHelper;
  utils: UtilityHelper;
}

declare const promptu: Promptu;

export default promptu;
