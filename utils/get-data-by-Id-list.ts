import React, { useState, useEffect }from 'react';
import { fetchDataByIds } from '../API/fetch-data-by-ids';

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

export const getDataByIdList = (page: number, dataList: number[]) => {
  const [pageData, setPageData] = useState([]);

  useEffect(() => {
    fetchDataByIds(page, dataList).then(res => {
      setPageData(
        res.data.map(
          (item: any) =>
            ({
              id: item['id'],
              imageId: item['image_id'],
              title: item['title'],
              thumbnail: {
                height: item['thumbnail'] ? item['thumbnail']['height'] : null,
                width: item['thumbnail'] ? item['thumbnail']['width'] : null,
              },
              artistTitle: item['artist_title'],
            }) as ArtPositionProps,
        ),
      );
    });
  }, [page, dataList]);

  return pageData;
};
