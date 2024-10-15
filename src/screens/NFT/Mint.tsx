import React, { useState } from 'react';
import { StyleSheet } from 'react-nativescript';
import Header from '../../components/Header';
import CustomButton from '../../components/CustomButton';

const MintNFT: React.FC = () => {
  const [nftName, setNftName] = useState('');
  const [nftDescription, setNftDescription] = useState('');

  const handleMintNFT = () => {
    console.log('Minting NFT:', { name: nftName, description: nftDescription });
    // Implement NFT minting logic here
  };

  return (
    <flexboxLayout style={styles.container}>
      <Header title="Mint NFT" />
      <textField
        hint="NFT Name"
        style={styles.input}
        onTextChange={(args) => setNftName(args.value)}
      />
      <textView
        hint="NFT Description"
        style={styles.input}
        onTextChange={(args) => setNftDescription(args.value)}
      />
      <CustomButton text="Mint NFT" onTap={handleMintNFT} />
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
  input: {
    width: '80%',
    margin: 10,
  },
});

export default MintNFT;