import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './NavigationService';

import AppScreen from '../App';
import AuthLoadingScreen from './AuthLoadingScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="AuthLoadingScreen" headerMode="none">
        <Stack.Screen name="AuthLoadingScreen" component={AuthLoadingScreen} />
        {/*        
        <Stack.Screen
          name="SelectNetworkScreen"
          component={SelectNetworkScreen}
        />
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="MainAppStack" component={MainAppStack} />
      */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;