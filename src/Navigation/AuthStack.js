import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Containers/Login'
import Register from '../Containers/Register'
import { LOGIN, LOGOUT } from '../Constants/ScreenConstant';
const AuthStack = () => {

    const Stack = createNativeStackNavigator()

return (
<Stack.Navigator  screenOptions={{headerShown: false}}>
    <Stack.Screen name={LOGIN} component = {Login}/>
    <Stack.Screen name={LOGOUT} component = {Register}/>
</Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
