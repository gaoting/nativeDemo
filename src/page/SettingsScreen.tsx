import React from 'react';
import {View, Button} from 'react-native';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const navigationRef = createNavigationContainerRef();
import Login from './Login';

function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
const RootStack = createNativeStackNavigator();

function Setting() {
  return (
    <View>
      <Button title="login" onPress={() => navigate('Login')} />

      <NavigationContainer ref={navigationRef} independent={true}>
        <RootStack.Navigator>
          <RootStack.Screen name="Login" component={Login} />
        </RootStack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default Setting;
