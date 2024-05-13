import React from 'react';
import {ScreenControlProps} from '../types/components/ScreenControlProps';
import ScreenViews from '../constants/BottomMenuModes';
import {useCurrentModeContext} from '../contexts/PresentModeContext';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import FavouritesScreen from '../screens/FavouritesScreen/FavouritesScreen';
import {SearchArtScreen} from '../screens/SearchArtScreen/SearchArtScreen';
import ArtDetailsScreen from '../screens/ArtDetailsScreen/ArtDetailsScreen';

export const ScreenControl: React.FC<ScreenControlProps> = ({
  searchInfo,
  currentMode,
  setCurrentMode,
}) => {
  const screenTranslationTable = new Map([
    [ScreenViews.home, <HomeScreen />],
    [
      ScreenViews.search,
      <SearchArtScreen
        searchInfo={searchInfo}
        currentMode={currentMode}
        setCurrentMode={setCurrentMode}
      />,
    ],
    [ScreenViews.favourites, <FavouritesScreen />],
    [ScreenViews.details, <ArtDetailsScreen />],
  ]);

  if (!screenTranslationTable.has(currentMode)) {
    new Promise(() => setCurrentMode(ScreenViews.home));
    return screenTranslationTable.get(ScreenViews.home);
  }

  return screenTranslationTable.get(currentMode);
};
