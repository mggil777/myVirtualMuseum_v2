import React, {memo} from 'react';
import {Pressable, Text, View, Image} from 'react-native';
import {ArtPositionProps} from '../../../types/components/ArtPositionProps';
import {FavouriteButton} from '../../FavouriteButton/FavouriteButton';
import {
  calculateHWRatio,
  calculateFinalHeight,
} from '../../../utils/calculate-dimensions';
import {useDisplayedArtworkIdContext} from '../../../contexts/DisplayedArtworkIdContext';
import {useCurrentModeContext} from '../../../contexts/PresentModeContext';
import ViewModes from '../../../constants/BottomMenuModes';
import {calculateImageHeight} from '../../../utils/image-helpers';
import GlobalStyles from '../../../constants/GlobalStyles';
import styles from '../styles/styles';

export const ArtPosition = memo((data: ArtPositionProps) => {
  const {setArtId} = useDisplayedArtworkIdContext();
  const {setCurrentMode} = useCurrentModeContext();
  const imageUrl = `https://www.artic.edu/iiif/2/${data.imageId}/full/843,/0/default.jpg`;

  const hwRatio = calculateHWRatio(data.thumbnail);
  const {finalHeight, isImageWide} = calculateFinalHeight(hwRatio);

  const displayArtInfo = () => {
    setArtId(data.id);
    setCurrentMode(ViewModes.details);
  };

  return (
    <Pressable
      onPress={() => displayArtInfo()}
      style={[
        styles.artPosition,
        hwRatio && hwRatio < 0.7 ? styles.artPositionWide : {},
        GlobalStyles.lightBorders,
      ]}>
      <Image
        source={{uri: imageUrl}}
        style={[
          styles.artPositionImage,
          isImageWide ? styles.artPositionImageWide : {},
          hwRatio != null ? {height: finalHeight} : {height: '100%'},
        ]}
      />
      <Text style={styles.artPositionTitle}>{data.title}</Text>
      <FavouriteButton entryId={data.id} style={{margin: 2}} />
    </Pressable>
  );
});
