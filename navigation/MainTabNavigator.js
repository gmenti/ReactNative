import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import LoginScreen from '../screens/Login';
import TestScreen from '../screens/Test';
import SettingsScreen from '../screens/SettingsScreen';
import AnimatedTiming from '../screens/AnimatedTiming';
import AnimatedTimingMultiple from '../screens/AnimatedTimingMultiple';
import AnimatedSpring from '../screens/AnimatedSpring';
import AnimatedParallel from '../screens/AnimatedParallel';
import AnimatedSequence from '../screens/AnimatedSequence';
import AnimatedStagger from '../screens/AnimatedStagger';
import RotationAnimation from '../screens/RotatingAnimation';
import Bouncing from '../screens/Bouncing';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

{/* This is how to make a navigation option on tabNavigator */}
const LoginStack = createStackNavigator(
  {
    Login: LoginScreen,
  },
  config
);

LoginStack.navigationOptions = {
  tabBarLabel:'Login',
  tabBarIcon: ({focused}) => (
    <TabBarIcon focused={focused} name={Platform.OS == 'ios' ? 'ios-menu': 'md-menu'}/>
  ),
};

LoginStack.path = '';

const TestStack = createStackNavigator(
  {
    Test: Bouncing
  },
  config
);

TestStack.navigationOptions = {
  tabBarLabel: 'test',
  tabBarIcon:({focused}) => (
    <TabBarIcon focused={focused} name={Platform.OS == 'ios'? 'ios-menu': 'md-menu'}/>
  ),
};

TestStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

{/* Now we are placing the configured option in the tabNavigator */}
const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  LoginStack,
  TestStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
