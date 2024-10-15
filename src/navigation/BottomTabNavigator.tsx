import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ExploreNFTs from '../screens/Marketplace/ExploreNFTs';
import ShopIndex from '../screens/Shop/Index';
import ProfileIndex from '../screens/Profile/Index';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreNFTs} />
      <Tab.Screen name="Shop" component={ShopIndex} />
      <Tab.Screen name="Profile" component={ProfileIndex} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;