import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet } from 'react-nativescript';
import analytics from '@react-native-firebase/analytics';
import Header from '../../components/Header';
import CustomButton from '../../components/CustomButton';
import NFTCard from '../../components/NFTCard';
import withAuthorization from '../../hoc/withAuthorization';
import { generateImage } from '../../services/dalleService';
import { createNFT, updateNFT, deleteNFT, fetchNFTs } from '../../services/nftService';
import { colors } from '../../styles/colors';

const ManageNFTs: React.FC = () => {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [selectedNFT, setSelectedNFT] = useState<NFT | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadNFTs = useCallback(async (loadMore = false) => {
    if (loading || (!loadMore && !hasMore)) return;

    setLoading(true);
    try {
      const newPage = loadMore ? page + 1 : 1;
      const fetchedNFTs = await fetchNFTs(newPage);
      if (loadMore) {
        setNfts([...nfts, ...fetchedNFTs]);
      } else {
        setNfts(fetchedNFTs);
      }
      setPage(newPage);
      setHasMore(fetchedNFTs.length > 0);
    } catch (error) {
      console.error('Error fetching NFTs:', error);
      alert('Failed to load NFTs. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, page, nfts]);

  useEffect(() => {
    loadNFTs();
    analytics().logEvent('ManageNFTsView', {
      screen: 'ManageNFTs',
      purpose: 'User is managing NFTs',
    });
  }, []);

  const handleCreateNFT = () => {
    setSelectedNFT(null);
    setIsEditing(true);
  };

  const handleEditNFT = (nft: NFT) => {
    setSelectedNFT(nft);
    setIsEditing(true);
  };

  const handleSaveNFT = async (formData: NFTFormData) => {
    try {
      if (selectedNFT) {
        await updateNFT(selectedNFT.id, formData);
      } else {
        await createNFT(formData);
      }
      await loadNFTs();
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving NFT:', error);
      alert('Failed to save NFT. Please try again.');
    }
  };

  const handleDeleteNFT = async (id: string) => {
    try {
      await deleteNFT(id);
      await loadNFTs();
    } catch (error) {
      console.error('Error deleting NFT:', error);
      alert('Failed to delete NFT. Please try again.');
    }
  };

  return (
    <flexboxLayout style={styles.container}>
      <Header title="Manage NFTs" />
      <scrollView onScrollToBottom={() => loadNFTs(true)}>
        {isEditing ? (
          <NFTForm
            onSubmit={handleSaveNFT}
            initialData={selectedNFT}
            onCancel={() => setIsEditing(false)}
          />
        ) : (
          <>
            <CustomButton text="Create New NFT" onTap={handleCreateNFT} variant="primary" />
            {nfts.map((nft) => (
              <NFTCard
                key={nft.id}
                nft={nft}
                onEdit={() => handleEditNFT(nft)}
                onDelete={() => handleDeleteNFT(nft.id)}
              />
            ))}
            {loading && <activityIndicator busy={true} color={colors.primary} />}
            {hasMore && (
              <CustomButton
                text="Load More"
                onTap={() => loadNFTs(true)}
                variant="secondary"
                disabled={loading}
              />
            )}
          </>
        )}
      </scrollView>
    </flexboxLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    backgroundColor: colors.background,
  },
});

export default withAuthorization(ManageNFTs, ['admin', 'employee']);