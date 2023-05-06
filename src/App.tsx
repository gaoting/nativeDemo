import React, {useCallback} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingsScreen from './page/SettingsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './page/Login';
import Index from './page/Index';
import List from './page/List';


function EmptyScreen() {
  return <View />;
}

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Stack.Navigator>
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Home" component={EmptyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
