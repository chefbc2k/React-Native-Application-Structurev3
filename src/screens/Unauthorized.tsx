import React from 'react';
import { StyleSheet } from 'react-nativescript';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import Header from '../components/Header';

const UnauthorizedScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <flexboxLayout style={styles.container}>
      <Header title="Unauthorized Access" />
      <label className="text-xl mb-4 text-red">You are not authorized to access this page.</label>
      <CustomButton text="Go to Home" onTap={() => navigation.navigate('Home')} />
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

export default UnauthorizedScreen;