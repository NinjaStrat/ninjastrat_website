export function getImagePath(src: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/ninjastrat_website' : '';
  return `${basePath}${src}`;
}