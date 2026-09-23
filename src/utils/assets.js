export function assetUrl(file) {
  if (!file) return '';
  if (/^(https?:|mailto:|tel:|#)/.test(file)) return file;
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${String(file).replace(/^\//, '')}`;
}
