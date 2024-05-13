export const calculateImageHeight = (thumbnail: { width: number | null | undefined, height: number | null | undefined }) => {
  if (!thumbnail.width || !thumbnail.height) return null;
  const hwRatio = thumbnail.height / thumbnail.width;
  return hwRatio < 0.7 ? 415 * hwRatio : 200 * hwRatio;
};
