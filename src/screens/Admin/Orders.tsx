import React from 'react';
import { StyleSheet } from 'react-nativescript';
import Header from '../../components/Header';
import CustomButton from '../../components/CustomButton';
import withAuthorization from '../../hoc/withAuthorization';

const Orders: React.FC = () => {
  return (
    <flexboxLayout style={styles.container}>
      <Header title="Orders" />
      <label className="text-xl mb-4">Order Management</label>
      <CustomButton text="View Orders" onTap={() => console.log('View Orders')} />
      <CustomButton text="Process Order" onTap={() => console.log('Process Order')} />
      <CustomButton text="Cancel Order" onTap={() => console.log('Cancel Order')} />
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

export default withAuthorization(Orders, ['admin', 'employee']);