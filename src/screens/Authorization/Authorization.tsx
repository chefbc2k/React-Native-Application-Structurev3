import React from 'react';
import { StyleSheet } from 'react-nativescript';
import Header from '../../components/Header';
import CustomButton from '../../components/CustomButton';

const Authorization: React.FC = () => {
  return (
    <flexboxLayout style={styles.container}>
      <Header title="Authorization" />
      <label className="text-xl mb-4">Choose an option</label>
      <CustomButton text="Login" onTap={() => console.log('Navigate to Login')} />
      <CustomButton text="Register" onTap={() => console.log('Navigate to Register')} />
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

export default Authorization;