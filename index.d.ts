import { Styles } from 'styled-components';

export type Alignment = 'tl' | 'tc' | 'tr' | 'ts' | 'cl' | 'cc' | 'cr' | 'cs' | 'bl' | 'bc' | 'br' | 'bs' | 'sl' | 'sc' | 'sr' | 'ss';

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
  abs(alignment?: Alignment): Styles;
  fixed(alignment?: Alignment): Styles;
  tl: Styles;
  tc: Styles;
  tr: Styles;
  cl: Styles;
  cc: Styles;
  cr: Styles;
  bl: Styles;
  bc: Styles;
  br: Styles;
  ftl: Styles;
  ftc: Styles;
  ftr: Styles;
  fcl: Styles;
  fcc: Styles;
  fcr: Styles;
  fbl: Styles;
  fbc: Styles;
  fbr: Styles;
}

export interface ContainerHelper {
  flexh(alignment?: Alignment): Styles;
  flexrh(alignment?: Alignment): Styles;
  flexv(alignment?: Alignment): Styles;
  flexrv(alignment?: Alignment): Styles;
  box: Styles;
  filled: Styles;
  cover: Styles;
  coverImage: Styles;
  coverVideo: Styles;
  mask: Styles;
  fhtl: Styles;
  fhtc: Styles;
  fhtr: Styles;
  fhts: Styles;
  fhcl: Styles;
  fhcc: Styles;
  fhcr: Styles;
  fhcs: Styles;
  fhbl: Styles;
  fhbc: Styles;
  fhbr: Styles;
  fhbs: Styles;
  fhsl: Styles;
  fhsc: Styles;
  fhsr: Styles;
  fhss: Styles;
  frhtl: Styles;
  frhtc: Styles;
  frhtr: Styles;
  frhts: Styles;
  frhcl: Styles;
  frhcc: Styles;
  frhcr: Styles;
  frhcs: Styles;
  frhbl: Styles;
  frhbc: Styles;
  frhbr: Styles;
  frhbs: Styles;
  frhsl: Styles;
  frhsc: Styles;
  frhsr: Styles;
  frhss: Styles;
  fvtl: Styles;
  fvtc: Styles;
  fvtr: Styles;
  fvts: Styles;
  fvcl: Styles;
  fvcc: Styles;
  fvcr: Styles;
  fvcs: Styles;
  fvbl: Styles;
  fvbc: Styles;
  fvbr: Styles;
  fvbs: Styles;
  fvsl: Styles;
  fvsc: Styles;
  fvsr: Styles;
  fvss: Styles;
  frvtl: Styles;
  frvtc: Styles;
  frvtr: Styles;
  frvts: Styles;
  frvcl: Styles;
  frvcc: Styles;
  frvcr: Styles;
  frvcs: Styles;
  frvbl: Styles;
  frvbc: Styles;
  frvbr: Styles;
  frvbs: Styles;
  frvsl: Styles;
  frvsc: Styles;
  frvsr: Styles;
  frvss: Styles;
}

export interface TypographyHelper {
  getFontFormatFromPath(path: string): string;
  getFontStyleFromPath(path: string): string;
  getFontWeightFromPath(path: string): number | string;
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
  gtear(aspectRatio: string): (...args: any[]) => Styles;
  ltear(aspectRatio: string): (...args: any[]) => Styles;
  ar(aspectRatio: string): (...args: any[]) => Styles;
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
