import React from 'react';
import { StyleSheet } from 'react-nativescript';
import { RouteProp } from '@react-navigation/native';
import Header from '../../components/Header';

type NFTIDProps = {
  route: RouteProp<{ params: { id: string } }, 'params'>;
};

const NFTID: React.FC<NFTIDProps> = ({ route }) => {
  const { id } = route.params;

  return (
    <flexboxLayout style={styles.container}>
      <Header title={`NFT ${id}`} />
      <label className="text-xl mb-4">Details for NFT {id}</label>
      {/* Add more NFT details here */}
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

export default NFTID;