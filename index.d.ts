import { toRGB, toHexString } from "./utils";

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
  default(): string;
  fill(): string;
  cover(): string;
  flexh(alignment?: Alignment): string;
  flexv(alignment?: Alignment): string;
}

export interface FontHelper {
  face(family: string, src: string, weight?: FontWeight, style?: FontStyle): string;
  set(family: string, size: number | string, weight?: FontWeight, style?: FontStyle): string;
  weights: FontWeightDict;
}

export interface MediaHelper {
  breakpoints: MediaBreakpointDict;
  portrait(...args: any[]): string;
  landscape(...args: any[]): string;
  gtw(minWidth: string | number): string;
  gtew(minWidth: string | number): string;
  ltw(maxWidth: string | number): string;
  ltew(maxWidth: string | number): string;
  clampw(minWidth: string | number, maxWidth: string | number): string;
  gth(minHeight: string | number): string;
  gteh(minHeight: string | number): string;
  lth(maxHeight: string | number): string;
  lteh(maxHeight: string | number): string;
  clamph(minHeight: string | number, maxHeight: string | number): string;
  mobile(...args: any[]): string;
  gtmobile(...args: any[]): string;
  gtemobile(...args: any[]): string;
  tablet(...args: any[]): string;
  gttablet(...args: any[]): string;
  gtetablet(...args: any[]): string;
  lttablet(...args: any[]): string;
  ltetablet(...args: any[]): string;
  notebook(...args: any[]): string;
  gtnotebook(...args: any[]): string;
  gtenotebook(...args: any[]): string;
  ltnotebook(...args: any[]): string;
  ltenotebook(...args: any[]): string;
  desktop(...args: any[]): string;
  gtdesktop(...args: any[]): string;
  gtedesktop(...args: any[]): string;
  ltdesktop(...args: any[]): string;
  ltedesktop(...args: any[]): string;
  tv(...args: any[]): string;
  lttv(...args: any[]): string;
  ltetv(...args: any[]): string;
}

export interface NormalizeHelper {
  (): string;
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
