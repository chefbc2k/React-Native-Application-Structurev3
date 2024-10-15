import React from 'react';
import { StyleSheet } from 'react-nativescript';
import { StackNavigationProp } from '@react-navigation/stack';
import Header from '../../components/Header';
import CustomButton from '../../components/CustomButton';
import { useAuth } from '../../hooks/useAuth';

type ProfileIndexProps = {
  navigation: StackNavigationProp<any, 'Profile'>;
};

const ProfileIndex: React.FC<ProfileIndexProps> = ({ navigation }) => {
  const { user, logout } = useAuth();

  return (
    <flexboxLayout style={styles.container}>
      <Header title="Profile" />
      <label className="text-xl mb-4">Welcome, {user?.name || 'User'}</label>
      <CustomButton text="Edit Profile" onTap={() => console.log('Edit Profile')} />
      <CustomButton text="My NFTs" onTap={() => navigation.navigate('ProfileMyNFTs')} />
      <CustomButton text="Transaction History" onTap={() => console.log('View Transaction History')} />
      <CustomButton text="Logout" onTap={logout} />
    </flexboxLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
});

export default ProfileIndex;