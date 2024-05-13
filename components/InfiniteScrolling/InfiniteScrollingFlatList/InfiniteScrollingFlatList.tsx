import React, {createRef, useState} from 'react';
import {ScrollView, Text, View, StyleProp, ViewStyle} from 'react-native';
import {InfiniteScrollProps} from '../../../types/components/InfiniteScrollProps';
import {useSearchInfoContext} from '../../../contexts/SearchContext';
import {PageView} from '../PageView/PageView';
import {actOnScroll} from '../../../utils/act-on-scroll';
import styles from '../styles/styles';

export const InfiniteScrollingFlatList = ({
  searchTerm = '',
  startingPage = 1,
  style = {},
  overrideStyle = null,
  firstPageOverride,
  overrideSourceIdList,
  pageLimit,
}: InfiniteScrollProps) => {
  const [pageIndex, setPageIndex] = useState(startingPage);
  const {isEnabledP_Public, isEnabledV_View} = useSearchInfoContext();
  const is_public_domain = isEnabledP_Public;
  const is_on_view = isEnabledV_View;

  let scrollViewRef = createRef<ScrollView>();

  return (
    <ScrollView
      ref={scrollViewRef}
      onScroll={({nativeEvent}) => {
        actOnScroll(
          nativeEvent,
          pageIndex,
          startingPage,
          scrollViewRef,
          setPageIndex,
          pageLimit,
        );
      }}
      style={overrideStyle ?? [styles.searchScreenRoot, style]}>
      {/* Display results header if applicable */}
      {pageIndex == startingPage && searchTerm != '' && (
        <View style={styles.resultsHeaderContainer}>
          <Text style={styles.resultsHeader}>
            Displaying results for: {searchTerm}
          </Text>
        </View>
      )}
      {/* Override for first page */}
      {pageIndex == startingPage && firstPageOverride}
      {/* Render current page */}
      <PageView
        pageNumber={pageIndex}
        searchQuery={searchTerm}
        overrideSourceIdList={overrideSourceIdList}
      />
      {/* Render next page if limit not reached */}
      {pageLimit && pageIndex < pageLimit && (
        <PageView
          pageNumber={pageIndex + 1}
          searchQuery={searchTerm}
          overrideSourceIdList={overrideSourceIdList}
        />
      )}
    </ScrollView>
  );
};
