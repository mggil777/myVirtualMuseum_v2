import React, {memo} from 'react';
import {FlatList} from 'react-native';
import {PageViewProps} from '../../../types/components/PageViewProps';
import GlobalStyles from '../../../constants/GlobalStyles';
import {ArtPosition} from '../ArtPosition/ArtPosition';
import {getDataByIdList} from '../../../utils/get-data-by-Id-list';
import {getDataByPage} from '../../../utils/get-data-by-page';
import styles from '../styles/styles';

export const PageView = memo(
  ({
    searchQuery,
    pageNumber,
    onEndReached,
    enablePopoutMode = true,
    overrideSourceIdList,
  }: PageViewProps) => {
    if (!onEndReached) onEndReached = () => null; //not provided, it is set to an empty function

    return (
      <FlatList
        style={[
          enablePopoutMode ? [GlobalStyles.popoutBorders] : {},
          styles.onePageList,
        ]}
        scrollEnabled={false}
        nestedScrollEnabled={false}
        onEndReached={onEndReached}
        onEndReachedThreshold={50}
        data={
          overrideSourceIdList
            ? getDataByIdList(pageNumber, overrideSourceIdList)
            : getDataByPage(pageNumber, searchQuery)
        }
        renderItem={({item}) => (
          <ArtPosition
            id={item.id}
            imageId={item.imageId}
            title={item.title}
            thumbnail={item.thumbnail}
          />
        )}
      />
    );
  },
);
