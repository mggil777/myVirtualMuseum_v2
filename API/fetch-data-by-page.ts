import { baseUrlByPage } from "../shared/apiConfig";

export const fetchDataByPage = (
  page: number,
  searchTerm: string,
  is_public_domain: boolean,
  is_on_view: boolean,
) => {
  const pageSize = 10;
  const queryTerms: string[] = [];

  if (searchTerm.length > 0) {
    queryTerms.push(`q=${searchTerm}`);
  }

  if (is_public_domain) {
    queryTerms.push(`query[term][is_public_domain]=${is_public_domain}`);
  }

  if (is_on_view) {
    queryTerms.push(`query[term][is_on_view]=${is_on_view}`);
  }

  const queryString = queryTerms.join('&');
  const requestUrl = `${baseUrlByPage}?${queryString}&page=${page}&limit=${pageSize}&fields=id,image_id,title,thumbnail,artist_title,is_public_domain,is_on_view`;
  const results = fetch(requestUrl).then(res => res.json());
  //console.log('fetchDataByPage', results);
  return fetch(requestUrl).then(res => res.json())
};
