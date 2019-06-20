export type Alignment = 'tl' | 'tc' | 'tr' | 'ts' | 'cl' | 'cc' | 'cr' | 'cs' | 'bl' | 'bc' | 'br' | 'bs' | 'sl' | 'sc' | 'sr' | 'ss';

export type FontStyle = 'normal' | 'italic' | 'oblique';

export type FontDisplay = 'auto' | 'swap' | 'block' | 'fallback' | 'optional';

export type FontWeight = 'normal' | 'bold' | 'bolder' | 'lighter' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type FontVariant = 'normal' | 'small-caps';

export type LineHeight = string | number;

export type LetterSpacing = string | number;

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