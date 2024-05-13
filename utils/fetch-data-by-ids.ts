

export const fetchDataByIds = (pageIndex: number, idList: number[]) => {
  const startingIdx = pageIndex * 10 - 10; // appropriate slice of IDs based on the page index - to slice 0-9 starting index has to be 0
  const endingIdx = pageIndex * 10; // appropriate slice of IDs based on the page index- to slice 0-9 endingIdx has to be set to 10
  const queryData = idList.slice(startingIdx, endingIdx).toString();
  const queryUrl = `https://api.artic.edu/api/v1/artworks?ids=${queryData}&fields=id,title,image_id,thumbnail,artist_title`;
  return fetch(queryUrl).then(res => res.json());
};
