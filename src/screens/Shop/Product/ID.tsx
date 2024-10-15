import React from 'react';
import { StyleSheet } from 'react-nativescript';
import { RouteProp } from '@react-navigation/native';
import Header from '../../../components/Header';
import CustomButton from '../../../components/CustomButton';

type ProductIDProps = {
  route: RouteProp<{ params: { id: string } }, 'params'>;
};

const ProductID: React.FC<ProductIDProps> = ({ route }) => {
  const { id } = route.params;

  return (
    <flexboxLayout style={styles.container}>
      <Header title={`Product ${id}`} />
      <label className="text-xl mb-4">Details for Product {id}</label>
      {/* Add more product details here */}
      <CustomButton text="Add to Cart" onTap={() => console.log('Add to Cart', id)} />
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

export default ProductID;