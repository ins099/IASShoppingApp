import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN_A, SCREEN_B, SCREEN_C} from '../Constants/ScreenConstant';
import ScreenA from '../Containers/ScreenA';
import ScreenB from '../Containers/ScreenB';
import ScreenC from '../Containers/ScreenC';

const Dashboard = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator  screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREEN_A} component={ScreenA} />
      <Stack.Screen name={SCREEN_B} component={ScreenB} />
      <Stack.Screen name={SCREEN_C} component={ScreenC} />
    </Stack.Navigator>
  );
};

export default Dashboard;
