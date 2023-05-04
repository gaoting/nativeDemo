import React, {useCallback} from 'react';
import {Text, View, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsScreen from '../page/SettingsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function EmptyScreen() {
  return <View />;
}

function MsgList({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>MsgList Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      initalRouteName="Feed"
      activeColor="blue"
      screenOptions={{headerShown: false}}
      barStyle={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="MsgList"
        component={MsgList}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="List" component={EmptyScreen} />
      <Tab.Screen name="SettingsScreen" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default HomeTabs;
