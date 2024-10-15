import React from 'react';
import { StyleSheet } from 'react-nativescript';
import Header from '../../components/Header';
import CustomButton from '../../components/CustomButton';
import withAuthorization from '../../hoc/withAuthorization';

const ManageUsers: React.FC = () => {
  return (
    <flexboxLayout style={styles.container}>
      <Header title="Manage Users" />
      <label className="text-xl mb-4">User Management</label>
      <CustomButton text="Add User" onTap={() => console.log('Add User')} />
      <CustomButton text="Edit User" onTap={() => console.log('Edit User')} />
      <CustomButton text="Delete User" onTap={() => console.log('Delete User')} />
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

export default withAuthorization(ManageUsers, ['admin']);