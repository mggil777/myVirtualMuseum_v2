import {useEffect, useState} from 'react';
import {useSearchInfoContext} from '../contexts/SearchContext';
import {fetchDataByPage} from '../API/fetch-data-by-page';

type ArtPositionProps = {
  id: number;
  title: string;
  imageId: string;
  thumbnail: {
    width: number | null | undefined;
    height: number | null | undefined;
  };
  artistTitle?: string | null;
  is_public_domain?: boolean;
  is_on_view?: boolean;
};


export const getDataByPage = (
  page: number,
  searchTerm: string,
): ArtPositionProps[] => {
  const [pageData, setPageData] = useState([]); // state holds the data fetched for the current page
  const {isEnabledP_Public, isEnabledV_View} = useSearchInfoContext(); // context values : get the public domain and on view search filters - checks if they are enabled
  const is_public_domain = isEnabledP_Public;
  const is_on_view = isEnabledV_View;
  // useEffect hook to fetch data when the page number, search term, is_public_domain, or is_on_view change
  // updates the pageData state with the fetched data
  useEffect(() => {
    fetchDataByPage(page, searchTerm, is_public_domain, is_on_view).then(
      res => {
        setPageData(
          res.data.map(
            (item: any) =>
              ({
                id: item['id'],
                imageId: item['image_id'],
                title: item['title'],
                thumbnail: {
                  height: item['thumbnail']
                    ? item['thumbnail']['height']
                    : null,
                  width: item['thumbnail'] ? item['thumbnail']['width'] : null,
                },
                artistTitle: item['artist_title'],
              }) as ArtPositionProps,
          ),
        );
      },
    );
  }, [page, searchTerm, is_public_domain, is_on_view]);

  return pageData};
