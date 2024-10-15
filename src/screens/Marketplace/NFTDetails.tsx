import React from 'react';
import { StyleSheet } from 'react-nativescript';
import { RouteProp } from '@react-navigation/native';
import Header from '../../components/Header';
import CustomButton from '../../components/CustomButton';

type NFTDetailsProps = {
  route: RouteProp<{ params: { nftId: string } }, 'params'>;
};

const NFTDetails: React.FC<NFTDetailsProps> = ({ route }) => {
  const { nftId } = route.params;

  return (
    <flexboxLayout style={styles.container}>
      <Header title="NFT Details" />
      <label className="text-xl mb-4">Details for NFT {nftId}</label>
      {/* Add NFT details here */}
      <CustomButton text="Buy NFT" onTap={() => console.log('Buy NFT', nftId)} />
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

export default NFTDetails;