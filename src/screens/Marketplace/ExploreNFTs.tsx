import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-nativescript';
import Header from '../../components/Header';
import CustomButton from '../../components/CustomButton';
import { apiService } from '../../services/apiService';

interface NFT {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}

const ExploreNFTs: React.FC = () => {
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
          <gridLayout key={nft.id} columns="auto, *, auto" rows="auto" style={styles.nftItem}>
            <image src={nft.imageUrl} width="50" height="50" row="0" col="0" />
            <stackLayout row="0" col="1">
              <label text={nft.name} style={styles.nftName} />
              <label text={`$${nft.price}`} style={styles.nftPrice} />
            </stackLayout>
            <CustomButton
              text="View"
              onTap={() => console.log('Navigate to NFT Details', nft.id)}
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
  nftItem: {
    padding: 10,
    margin: 5,
    backgroundColor: '#f0f0f0',
  },
  nftName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  nftPrice: {
    fontSize: 14,
    color: '#666',
  },
  viewButton: {
    fontSize: 14,
    padding: 5,
  },
});

export default ExploreNFTs;