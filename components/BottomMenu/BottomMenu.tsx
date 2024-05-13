import React, {useEffect} from 'react';
import {StyleSheet, Pressable} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import GlobalStyles from '../../constants/GlobalStyles';
import Colors from '../../constants/GlobalColors';
import BottomMenuModes from '../../constants/BottomMenuModes';
import {useCurrentModeContext} from '../../contexts/PresentModeContext';
import Animated, {FadeInUp, Easing} from 'react-native-reanimated';
import {BottomMenuProps} from '../../types/components/BottomMenuProps';

export const BottomMenu: React.FC<BottomMenuProps> = ({
  currentMode,
  setCurrentMode,
}) => {
  useEffect(() => {}, [currentMode]);

  let modeToColor = (modeIndex: number) => {
    return currentMode == modeIndex
      ? Colors.primaryElement
      : Colors.minorElement;
  };
  let modeToSize = (modeIndex: number) => {
    return currentMode == modeIndex ? 32 : 26;
  };

  return (
    <Animated.View
      entering={FadeInUp.duration(500).easing(Easing.ease)}
      style={styles.viewRoot}>
      <Pressable
        onPress={() => {
          setCurrentMode(BottomMenuModes.home);
        }}
        style={[styles.modeSelector, GlobalStyles.mediumBorders]}>
        <MaterialIcons
          name="home"
          size={modeToSize(BottomMenuModes.home)}
          color={modeToColor(BottomMenuModes.home)}
        />
      </Pressable>
      <Pressable
        onPress={() => {
          setCurrentMode(BottomMenuModes.search);
        }}
        style={[styles.modeSelector, GlobalStyles.mediumBorders]}>
        <MaterialIcons
          name="search"
          size={modeToSize(BottomMenuModes.search)}
          color={modeToColor(BottomMenuModes.search)}
        />
      </Pressable>
      <Pressable
        onPress={() => {
          setCurrentMode(BottomMenuModes.favourites);
        }}
        style={[styles.modeSelector, GlobalStyles.mediumBorders]}>
        <MaterialIcons
          name="star"
          size={modeToSize(BottomMenuModes.favourites)}
          color={modeToColor(BottomMenuModes.favourites)}
        />
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  viewRoot: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    bottom: 0,
    height: 65,
    width: '100%',
    backgroundColor: Colors.primaryBackground,
  },
  modeSelector: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
