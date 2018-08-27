import { Styles } from 'styled-components';

export type Alignment = 'tl' | 'tc' | 'tr' | 'cl' | 'cc' | 'cr' | 'bl' | 'bc' | 'br';

export type FontStyle = 'normal' | 'italic' | 'oblique';

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

export interface AlignHelper {
  abs(alignment?: Alignment): string;
  fixed(alignment?: Alignment): string;
}

export interface ContainerHelper {
  box(): Styles;
  filled(): Styles;
  cover(): Styles;
  coverImage(): Styles;
  coverVideo(): Styles;
  mask(): Styles;
  flexh(alignment?: Alignment): Styles;
  flexrh(alignment?: Alignment): Styles;
  flexv(alignment?: Alignment): Styles;
  flexrv(alignment?: Alignment): Styles;
}

export interface TypographyHelper {
  font(family: string, size: number | string, weight?: FontWeight, style?: FontStyle, lineHeight?: LineHeight, letterSpacing?: LetterSpacing, variant?: FontVariant): Styles;
  fontFace(family: string, src: string, weight?: FontWeight, style?: FontStyle): Styles;
  fontWeights: FontWeightDict;
}

export interface MediaHelper {
  breakpoints: MediaBreakpointDict;
  portrait: (...args: any[]) => Styles;
  landscape: (...args: any[]) => Styles;
  mobile: (...args: any[]) => Styles;
  gtmobile: (...args: any[]) => Styles;
  gtemobile: (...args: any[]) => Styles;
  tablet: (...args: any[]) => Styles;
  gttablet: (...args: any[]) => Styles;
  gtetablet: (...args: any[]) => Styles;
  lttablet: (...args: any[]) => Styles;
  ltetablet: (...args: any[]) => Styles;
  notebook: (...args: any[]) => Styles;
  gtnotebook: (...args: any[]) => Styles;
  gtenotebook: (...args: any[]) => Styles;
  ltnotebook: (...args: any[]) => Styles;
  ltenotebook: (...args: any[]) => Styles;
  desktop: (...args: any[]) => Styles;
  gtdesktop: (...args: any[]) => Styles;
  gtedesktop: (...args: any[]) => Styles;
  ltdesktop: (...args: any[]) => Styles;
  ltedesktop: (...args: any[]) => Styles;
  tv: (...args: any[]) => Styles;
  lttv: (...args: any[]) => Styles;
  ltetv: (...args: any[]) => Styles;
  gtw(minWidth: string | number): (...args: any[]) => Styles;
  gtew(minWidth: string | number): (...args: any[]) => Styles;
  ltw(maxWidth: string | number): (...args: any[]) => Styles;
  ltew(maxWidth: string | number): (...args: any[]) => Styles;
  clampw(minWidth: string | number, maxWidth: string | number): (...args: any[]) => Styles;
  gth(minHeight: string | number): (...args: any[]) => Styles;
  gteh(minHeight: string | number): (...args: any[]) => Styles;
  lth(maxHeight: string | number): (...args: any[]) => Styles;
  lteh(maxHeight: string | number): (...args: any[]) => Styles;
  clamph(minHeight: string | number, maxHeight: string | number): (...args: any[]) => Styles;
}

export interface NormalizeHelper {
  (): Styles;
}

export interface UtilityHelper {
  toRGBTuple(val: number | string, prefix?: string): [number, number, number];
  toRGBString(val: number | string, prefix?: string): string;
  toHexString(val: number, prefix?: string): string;
  toHexNumber(val: string, prefix?: string): number;
  isShortHex(val: string, prefix?: string): boolean;
  shortToLongHex(val: string, prefix?: string): string;
  parseUnit(val: number | string, defaultUnit?: string): [number, string];
}

export interface Promptu {
  align: AlignHelper;
  container: ContainerHelper;
  media: MediaHelper;
  normalize: NormalizeHelper;
  typography: TypographyHelper;
  utils: UtilityHelper;
}

declare const promptu: Promptu;

export default promptu;
