import { baseUrlByIds } from "../shared/apiConfig";

export const fetchDataByIds = (pageIndex: number, idList: number[]) => {
  const startingIdx = pageIndex * 10 - 10;
  const endingIdx = pageIndex * 10;
  const queryData = idList.slice(startingIdx, endingIdx).toString();
  const queryUrl = `${baseUrlByIds}?ids=${queryData}&fields=id,title,image_id,thumbnail,artist_title`;
  return fetch(queryUrl).then(res => res.json());
};
