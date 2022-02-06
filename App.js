import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Navigator from './src/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  
    </SafeAreaProvider>
    );
};

export default App;

const styles = StyleSheet.create({});
