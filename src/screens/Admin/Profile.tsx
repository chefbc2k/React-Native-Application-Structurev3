import React from 'react';
import { StyleSheet } from 'react-nativescript';
import Header from '../../components/Header';
import CustomButton from '../../components/CustomButton';
import withAuthorization from '../../hoc/withAuthorization';

const AdminProfile: React.FC = () => {
  return (
    <flexboxLayout style={styles.container}>
      <Header title="Admin Profile" />
      <label className="text-xl mb-4">Admin Information</label>
      <CustomButton text="Edit Profile" onTap={() => console.log('Edit Profile')} />
      <CustomButton text="Change Password" onTap={() => console.log('Change Password')} />
      <CustomButton text="Logout" onTap={() => console.log('Logout')} />
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

export default withAuthorization(AdminProfile, ['admin', 'employee']);