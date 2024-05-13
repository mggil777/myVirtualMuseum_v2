import AsyncStorage from '@react-native-async-storage/async-storage';

const objectFilename = 'savedArtworks.json';

export const checkItem = async (entryId: number): Promise<boolean> => {
  try {
    const file = await AsyncStorage.getItem(objectFilename);

    if (!file) {
      await AsyncStorage.setItem(objectFilename, JSON.stringify([]));
      return false;
    } else {
      const data = JSON.parse(file) as number[];
      return data.includes(entryId);
    }
  } catch (err) {
    console.log('Error checking item:', err);
    return false;
  }
};

export const toggleItem = async (entryId: number, isItemSaved: boolean) => {
  try {
    const existingData = await AsyncStorage.getItem(objectFilename);
    const existingArray = existingData ? JSON.parse(existingData) : [];
    let newData: number[];

    if (isItemSaved) {
      newData = existingArray.filter((item: number) => item !== entryId);
    } else {
      newData = [...existingArray, entryId];
    }

    await AsyncStorage.setItem(objectFilename, JSON.stringify(newData));
  } catch (err) {
    console.log('Error toggling item:', err);
  }
};
