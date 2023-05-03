import React, {useCallback} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingsScreen from './src/page/SettingsScreen';

type RootTabParamList = {
  Home: undefined;
  Settings: undefined;
};

type HomeScreenRouteProp = RouteProp<RootTabParamList, 'Home'>;
type SettingsScreenRouteProp = RouteProp<RootTabParamList, 'Settings'>;

interface TabBarIconProps {
  iconName: string;
  size: number;
  color: string;
}

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator<RootTabParamList>();

const getTabBarIconName = (
  route: HomeScreenRouteProp | SettingsScreenRouteProp,
  focused: boolean,
) => {
  switch (route.name) {
    case 'Home':
      return focused
        ? 'ios-information-circle'
        : 'ios-information-circle-outline';
    case 'Settings':
      return focused ? 'ios-list' : 'ios-list-outline';
    default:
      return '';
  }
};

const TabBarIcon = React.memo<TabBarIconProps>(({iconName, size, color}) => (
  <Ionicons name={iconName} size={size} color={color} />
));

export default function App() {
  const screenOptions = useCallback(
    ({route}) => ({
      tabBarIcon: ({focused, color, size}) => (
        <TabBarIcon
          iconName={getTabBarIconName(route, focused)}
          size={size}
          color={color}
        />
      ),
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    }),
    [],
  );

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
