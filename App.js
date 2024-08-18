import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PlayerDetailsScreen, PlayerSearchScreen, HomeScreen } from './index';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={PlayerSearchScreen} />
        <Stack.Screen name="Player" component={PlayerDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
