export default function minify(val: string): string {
  return val.replace(/(\n+|\r+)\s+/g, ' ').trim();
}
