type Thumbnail = {
  width: number | null | undefined;
  height: number | null | undefined;
};

export const calculateHWRatio = (thumbnail: Thumbnail): number | null => {
  if (thumbnail.height && thumbnail.width) {
    let hwRatio = thumbnail.height / thumbnail.width;
    return hwRatio;
  }
  return null;
};

export const calculateFinalHeight = (hwRatio: number | null): {finalHeight: number | null, isImageWide: boolean} => {
  let finalHeight = hwRatio != null ? 200 * hwRatio : null;
  const isImageWide = !!(hwRatio && hwRatio < 0.7);
  if (isImageWide && hwRatio ) {
    finalHeight = 415 * hwRatio
    return {finalHeight,isImageWide};
  }
  return {finalHeight,isImageWide};
};

