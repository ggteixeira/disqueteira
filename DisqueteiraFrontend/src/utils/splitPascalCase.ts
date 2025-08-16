export function splitPascalCase(input: string): string {
  return input.replace(/([A-Z])/g, ' $1').trim();
}
