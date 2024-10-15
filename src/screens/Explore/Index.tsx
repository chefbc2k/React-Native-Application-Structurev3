import React, { useEffect, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet } from 'react-nativescript';
import Header from '../../components/Header';
import CustomButton from '../../components/CustomButton';
import { apiService } from '../../services/apiService';

type ExploreScreenProps = {
  navigation: StackNavigationProp<any, 'Explore'>;
};

interface NFT {
  id: string;
  name: string;
  imageUrl: string;
}

const ExploreScreen: React.FC<ExploreScreenProps> = ({ navigation }) => {
  const [nfts, setNfts] = useState<NFT[]>([]);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const fetchedNFTs = await apiService.getNFTs();
        setNfts(fetchedNFTs);
      } catch (error) {
        console.error('Failed to fetch NFTs:', error);
      }
    };

    fetchNFTs();
  }, []);

  return (
    <flexboxLayout style={styles.container}>
      <Header title="Explore NFTs" />
      <scrollView>
        {nfts.map((nft) => (
          <gridLayout key={nft.id} columns="auto, *" rows="auto" style={styles.nftItem}>
            <image src={nft.imageUrl} width="50" height="50" row="0" col="0" />
            <label text={nft.name} row="0" col="1" style={styles.nftName} />
            <CustomButton
              text="View Details"
              onTap={() => navigation.navigate('NFTDetails', { nftId: nft.id })}
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
  nftItem: {
    padding: 10,
    margin: 5,
    backgroundColor: '#f0f0f0',
  },
  nftName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ExploreScreen;