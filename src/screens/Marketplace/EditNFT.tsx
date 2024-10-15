import React, { useState } from 'react';
import { StyleSheet } from 'react-nativescript';
import Header from '../../components/Header';
import CustomButton from '../../components/CustomButton';

const EditNFT: React.FC = () => {
  const [nftName, setNftName] = useState('');
  const [nftDescription, setNftDescription] = useState('');

  const handleEditNFT = () => {
    console.log('Editing NFT:', { name: nftName, description: nftDescription });
    // Implement NFT editing logic here
  };

  return (
    <flexboxLayout style={styles.container}>
      <Header title="Edit NFT" />
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
      <CustomButton text="Save Changes" onTap={handleEditNFT} />
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

export default EditNFT;