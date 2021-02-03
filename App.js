import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import AppNavigator from './src/navigation/AppNavigator';

const loadFonts = () => {
  return Font.loadAsync({
    'Ubuntu': require('./assets/fonts/Ubuntu-Regular.ttf'),
    'Ubuntu-Bold': require('./assets/fonts/Ubuntu-Bold.ttf')
  });
}

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if(!fontLoaded) {
    return (
      <AppLoading 
        startAsync={loadFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return (
    <AppNavigator />
  );
}

const styles = StyleSheet.create({
});
