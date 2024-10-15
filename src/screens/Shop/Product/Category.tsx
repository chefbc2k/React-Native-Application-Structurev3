import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-nativescript';
import Header from '../../../components/Header';
import CustomButton from '../../../components/CustomButton';
import { apiService } from '../../../services/apiService';

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}

const ProductCategory: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await apiService.getProductsByCategory('example-category');
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <flexboxLayout style={styles.container}>
      <Header title="Product Category" />
      <scrollView>
        {products.map((product) => (
          <gridLayout key={product.id} columns="auto, *, auto" rows="auto" style={styles.productItem}>
            <image src={product.imageUrl} width="50" height="50" row="0" col="0" />
            <stackLayout row="0" col="1">
              <label text={product.name} style={styles.productName} />
              <label text={`$${product.price}`} style={styles.productPrice} />
            </stackLayout>
            <CustomButton
              text="View"
              onTap={() => console.log('Navigate to Product Details', product.id)}
              style={styles.viewButton}
            />
          </gridLayout>
        ))}
      </scrollView>
    </flexboxLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
  },
  productItem: {
    padding: 10,
    margin: 5,
    backgroundColor: '#f0f0f0',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#666',
  },
  viewButton: {
    fontSize: 14,
    padding: 5,
  },
});

export default ProductCategory;