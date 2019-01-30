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
  abs(alignment?: Alignment): string;
  fixed(alignment?: Alignment): string;
  tl: string;
  tc: string;
  tr: string;
  cl: string;
  cc: string;
  cr: string;
  bl: string;
  bc: string;
  br: string;
  ftl: string;
  ftc: string;
  ftr: string;
  fcl: string;
  fcc: string;
  fcr: string;
  fbl: string;
  fbc: string;
  fbr: string;
}

export interface ContainerHelper {
  flexh(alignment?: Alignment): string;
  flexrh(alignment?: Alignment): string;
  flexv(alignment?: Alignment): string;
  flexrv(alignment?: Alignment): string;
  box: string;
  filled: string;
  cover: string;
  coverImage: string;
  coverVideo: string;
  mask: string;
  fhtl: string;
  fhtc: string;
  fhtr: string;
  fhts: string;
  fhcl: string;
  fhcc: string;
  fhcr: string;
  fhcs: string;
  fhbl: string;
  fhbc: string;
  fhbr: string;
  fhbs: string;
  fhsl: string;
  fhsc: string;
  fhsr: string;
  fhss: string;
  frhtl: string;
  frhtc: string;
  frhtr: string;
  frhts: string;
  frhcl: string;
  frhcc: string;
  frhcr: string;
  frhcs: string;
  frhbl: string;
  frhbc: string;
  frhbr: string;
  frhbs: string;
  frhsl: string;
  frhsc: string;
  frhsr: string;
  frhss: string;
  fvtl: string;
  fvtc: string;
  fvtr: string;
  fvts: string;
  fvcl: string;
  fvcc: string;
  fvcr: string;
  fvcs: string;
  fvbl: string;
  fvbc: string;
  fvbr: string;
  fvbs: string;
  fvsl: string;
  fvsc: string;
  fvsr: string;
  fvss: string;
  frvtl: string;
  frvtc: string;
  frvtr: string;
  frvts: string;
  frvcl: string;
  frvcc: string;
  frvcr: string;
  frvcs: string;
  frvbl: string;
  frvbc: string;
  frvbr: string;
  frvbs: string;
  frvsl: string;
  frvsc: string;
  frvsr: string;
  frvss: string;
}

export interface TypographyHelper {
  getFontFormatFromPath(path: string): string;
  getFontStyleFromPath(path: string): string;
  getFontWeightFromPath(path: string): number | string;
  font(family: string, size: number | string, weight?: FontWeight, style?: FontStyle, lineHeight?: LineHeight, letterSpacing?: LetterSpacing, variant?: FontVariant): string;
  fontFace(family: string, src: string, weight?: FontWeight, style?: FontStyle): string;
  fontWeights: FontWeightDict;
}

export interface MediaHelper {
  breakpoints: MediaBreakpointDict;
  portrait: (...args: any[]) => string;
  landscape: (...args: any[]) => string;
  mobile: (...args: any[]) => string;
  gtmobile: (...args: any[]) => string;
  gtemobile: (...args: any[]) => string;
  tablet: (...args: any[]) => string;
  gttablet: (...args: any[]) => string;
  gtetablet: (...args: any[]) => string;
  lttablet: (...args: any[]) => string;
  ltetablet: (...args: any[]) => string;
  notebook: (...args: any[]) => string;
  gtnotebook: (...args: any[]) => string;
  gtenotebook: (...args: any[]) => string;
  ltnotebook: (...args: any[]) => string;
  ltenotebook: (...args: any[]) => string;
  desktop: (...args: any[]) => string;
  gtdesktop: (...args: any[]) => string;
  gtedesktop: (...args: any[]) => string;
  ltdesktop: (...args: any[]) => string;
  ltedesktop: (...args: any[]) => string;
  tv: (...args: any[]) => string;
  lttv: (...args: any[]) => string;
  ltetv: (...args: any[]) => string;
  gtear(aspectRatio: string): (...args: any[]) => string;
  ltear(aspectRatio: string): (...args: any[]) => string;
  ar(aspectRatio: string): (...args: any[]) => string;
  gtw(minWidth: string | number): (...args: any[]) => string;
  gtew(minWidth: string | number): (...args: any[]) => string;
  ltw(maxWidth: string | number): (...args: any[]) => string;
  ltew(maxWidth: string | number): (...args: any[]) => string;
  clampw(minWidth: string | number, maxWidth: string | number): (...args: any[]) => string;
  gth(minHeight: string | number): (...args: any[]) => string;
  gteh(minHeight: string | number): (...args: any[]) => string;
  lth(maxHeight: string | number): (...args: any[]) => string;
  lteh(maxHeight: string | number): (...args: any[]) => string;
  clamph(minHeight: string | number, maxHeight: string | number): (...args: any[]) => string;
}

export interface NormalizeHelper {
  (): string;
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
