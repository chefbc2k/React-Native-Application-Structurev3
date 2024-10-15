import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-nativescript';
import Header from '../../components/Header';
import CustomButton from '../../components/CustomButton';
import { apiService } from '../../services/apiService';

interface NFT {
  id: string;
  name: string;
  imageUrl: string;
}

const ProfileMyNFTs: React.FC = () => {
  const [myNfts, setMyNfts] = useState<NFT[]>([]);

  useEffect(() => {
    const fetchMyNFTs = async () => {
      try {
        const fetchedNFTs = await apiService.getMyNFTs();
        setMyNfts(fetchedNFTs);
      } catch (error) {
        console.error('Failed to fetch my NFTs:', error);
      }
    };

    fetchMyNFTs();
  }, []);

  return (
    <flexboxLayout style={styles.container}>
      <Header title="My NFTs" />
      <scrollView>
        {myNfts.map((nft) => (
          <gridLayout key={nft.id} columns="auto, *" rows="auto" style={styles.nftItem}>
            <image src={nft.imageUrl} width="50" height="50" row="0" col="0" />
            <label text={nft.name} row="0" col="1" style={styles.nftName} />
            <CustomButton
              text="View Details"
              onTap={() => console.log('Navigate to NFT Details', nft.id)}
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

export default ProfileMyNFTs;