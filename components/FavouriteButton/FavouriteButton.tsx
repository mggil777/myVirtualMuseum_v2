import React, {useEffect, useState} from 'react';
import {StyleProp, ViewStyle, Pressable, View} from 'react-native';
import {FavouriteButtonProps} from '../../types/components/FavouriteButtonProps';
import {MaterialIcons} from '@expo/vector-icons';
import Colors from '../../constants/GlobalColors';
import {toggleItem, checkItem} from '../../utils/storage';

export const FavouriteButton = ({entryId, style}: FavouriteButtonProps) => {
  const [isItemSaved, setIsItemSaved] = useState(false);

  useEffect(() => {
    const loadSavedData = async () => {
      const entryExists = await checkItem(entryId);
      setIsItemSaved(entryExists);
    };
    loadSavedData();
  }, [entryId]);

  const toggleImage = async () => {
    try {
      await toggleItem(entryId, isItemSaved);
      setIsItemSaved(!isItemSaved);
    } catch (err) {
      console.log('error toggling item:', err);
    }
  };

  return (
    <Pressable style={style} onPress={toggleImage}>
      <MaterialIcons
        name={isItemSaved ? 'star' : 'star-border'}
        size={32}
        color={isItemSaved ? Colors.primaryAccent : Colors.minorElement}
      />
    </Pressable>
  );
};
