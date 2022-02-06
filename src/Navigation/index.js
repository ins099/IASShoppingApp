
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from './Dashboard';
import AuthStack from './AuthStack';

const Navigator = () => {
  const [isLogin,setIsLogin] = useState(true);
  const Stack = createNativeStackNavigator();


  if (isLogin) {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'AuthStack'} component={AuthStack} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Dashboard'} component={Dashboard} />
      </Stack.Navigator>
    );
  }
};

export default Navigator;
