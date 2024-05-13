import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {HighLights} from './components/HighLights';
import {InfiniteScrollingFlatList} from '../../components/InfiniteScrolling/InfiniteScrollingFlatList/InfiniteScrollingFlatList';

const HomeScreen = () => {
  return (
    <InfiniteScrollingFlatList
      startingPage={2}
      firstPageOverride={
        <View style={styles.infiniteTileContainer}>
          <HighLights />
        </View>
      }
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  rootHomeElement: {
    width: Dimensions.get('window').width,
    flex: 1,
    flexDirection: 'column',
  },
  infiniteTileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
