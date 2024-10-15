import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet } from 'react-nativescript';
import { useAuth } from '../hooks/useAuth';
import CustomButton from '../components/CustomButton';
import Header from '../components/Header';

type HomeScreenProps = {
  navigation: StackNavigationProp<any, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { isAuthenticated } = useAuth();

  return (
    <flexboxLayout style={styles.container}>
      <Header title="Welcome to MyApp" />
      <label className="text-2xl mb-4 font-bold text-center">
        Discover, Create, and Trade NFTs
      </label>
      <CustomButton
        text="Explore NFTs"
        onTap={() => navigation.navigate('Explore')}
      />
      {!isAuthenticated && (
        <>
          <CustomButton
            text="Login"
            onTap={() => navigation.navigate('Login')}
          />
          <CustomButton
            text="Register"
            onTap={() => navigation.navigate('Register')}
          />
        </>
      )}
      {isAuthenticated && (
        <>
          <CustomButton
            text="My Profile"
            onTap={() => navigation.navigate('Profile')}
          />
          <CustomButton
            text="Admin Dashboard"
            onTap={() => navigation.navigate('AdminDashboard')}
          />
        </>
      )}
    </flexboxLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;