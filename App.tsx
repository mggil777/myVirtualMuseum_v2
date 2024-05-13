import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, ActivityIndicator} from 'react-native';
import {BottomMenu} from './components/BottomMenu/BottomMenu';

import Colors from './constants/GlobalColors';
import {useFonts} from 'expo-font';
import {ScreenControl} from './components/ScreenControl';

import {ContextProvider} from './contexts/ContextProvider';
import BottomMenuModes from './constants/BottomMenuModes';

export default function App() {
  const [currentMode, setCurrentMode] = useState<number>(BottomMenuModes.home);
  // import custom fonts
  const [fontsLoaded] = useFonts({
    'Freeman-Regular': require('./assets/fonts/Freeman-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color={Colors.primaryAccent} />;
  }

  return (
    <SafeAreaView style={styles.viewRoot} testID="App-component">
      <ContextProvider>
        <ScreenControl
          currentMode={currentMode}
          setCurrentMode={setCurrentMode}
        />
        <BottomMenu currentMode={currentMode} setCurrentMode={setCurrentMode} />
      </ContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewRoot: {
    flex: 1,
    backgroundColor: Colors.primaryBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    color: Colors.primaryElement,
  },
});
