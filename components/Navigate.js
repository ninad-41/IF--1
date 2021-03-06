import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ItemDonate from '../screens/itemDonate';

import { NavigationContainer } from '@react-navigation/native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default class Switch extends React.Component {
  render(){
  return (
    <View>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Donate Item" component={ItemDonate} />
          </Tab.Navigator>
        </NavigationContainer>
        </View>
  );
  }
}
