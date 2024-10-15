import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/Authorization/Login';
import RegisterScreen from '../screens/Authorization/Register';
import ExploreScreen from '../screens/Explore/Index';
import AdminDashboard from '../screens/Admin/Dashboard';
import CreateNFT from '../screens/NFT/Create';
import ExploreNFTs from '../screens/Marketplace/ExploreNFTs';
import ShopIndex from '../screens/Shop/Index';
import ProfileIndex from '../screens/Profile/Index';
import ProfileMyNFTs from '../screens/Profile/MyNFTs';
import ManageNFTs from '../screens/Admin/ManageNFTs';
import ManageProducts from '../screens/Admin/ManageProducts';
import ManageUsers from '../screens/Admin/ManageUsers';
import Orders from '../screens/Admin/Orders';
import AdminProfile from '../screens/Admin/Profile';
import UnauthorizedScreen from '../screens/Unauthorized';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Explore" component={ExploreScreen} />
      <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
      <Stack.Screen name="CreateNFT" component={CreateNFT} />
      <Stack.Screen name="ExploreNFTs" component={ExploreNFTs} />
      <Stack.Screen name="Shop" component={ShopIndex} />
      <Stack.Screen name="Profile" component={ProfileIndex} />
      <Stack.Screen name="ProfileMyNFTs" component={ProfileMyNFTs} />
      <Stack.Screen name="ManageNFTs" component={ManageNFTs} />
      <Stack.Screen name="ManageProducts" component={ManageProducts} />
      <Stack.Screen name="ManageUsers" component={ManageUsers} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="AdminProfile" component={AdminProfile} />
      <Stack.Screen name="Unauthorized" component={UnauthorizedScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;