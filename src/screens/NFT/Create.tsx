import React, { useState } from 'react';
import { StyleSheet } from 'react-nativescript';
import Header from '../../components/Header';
import CustomButton from '../../components/CustomButton';
import CameraView from '../../components/CameraView';

const CreateNFT: React.FC = () => {
  const [nftName, setNftName] = useState('');
  const [nftDescription, setNftDescription] = useState('');

  const handleCreateNFT = () => {
    console.log('Creating NFT:', { name: nftName, description: nftDescription });
    // Implement NFT creation logic here
  };

  return (
    <flexboxLayout style={styles.container}>
      <Header title="Create NFT" />
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
      <CameraView />
      <CustomButton text="Create NFT" onTap={handleCreateNFT} />
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

export default CreateNFT;