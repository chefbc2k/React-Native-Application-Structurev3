import React from 'react';
import { StyleSheet } from 'react-nativescript';
import Header from '../../components/Header';
import CustomButton from '../../components/CustomButton';
import withAuthorization from '../../hoc/withAuthorization';

const ManageProducts: React.FC = () => {
  return (
    <flexboxLayout style={styles.container}>
      <Header title="Manage Products" />
      <label className="text-xl mb-4">Product Management</label>
      <CustomButton text="Add Product" onTap={() => console.log('Add Product')} />
      <CustomButton text="Edit Product" onTap={() => console.log('Edit Product')} />
      <CustomButton text="Delete Product" onTap={() => console.log('Delete Product')} />
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

export default withAuthorization(ManageProducts, ['admin', 'employee']);