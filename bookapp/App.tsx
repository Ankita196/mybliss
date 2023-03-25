import React from 'react';
import {StyleSheet, View, Text, Image, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/screens/home';
import Search from './src/screens/search';
import User from './src/screens/user';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#00aaff" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = require('./src/images/home.png');
              } else if (route.name === 'Search') {
                iconName = require('./src/images/search.png');
              } else if (route.name === 'You') {
                iconName = require('./src/images/you.png');
              }
              return (
                <Image
                  source={iconName}
                  style={{height: 25, width: 25, tintColor: color}}
                />
              );
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
            tabBarActiveBackgroundColor: 'black',
            tabBarInactiveBackgroundColor: 'black',
          })}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="You"
            component={User}
            options={{headerShown: false}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
