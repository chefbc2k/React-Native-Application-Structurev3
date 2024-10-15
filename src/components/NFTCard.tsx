import React from 'react';
import { StyleSheet } from 'react-nativescript';
import CustomButton from './CustomButton';
import { colors } from '../styles/colors';

interface NFTCardProps {
  nft: NFT;
  onEdit: () => void;
  onDelete: () => void;
}

const NFTCard: React.FC<NFTCardProps> = ({ nft, onEdit, onDelete }) => {
  return (
    <gridLayout style={styles.card} columns="auto, *, auto, auto" rows="auto, auto">
      <image src={nft.imageUrl} width={50} height={50} row={0} col={0} rowSpan={2} />
      <label text={nft.name} row={0} col={1} style={styles.name} />
      <label text={nft.category} row={1} col={1} style={styles.category} />
      <CustomButton text="Edit" onTap={onEdit} row={0} col={2} variant="secondary" />
      <CustomButton text="Delete" onTap={onDelete} row={0} col={3} variant="danger" />
    </gridLayout>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: colors.surface,
    borderRadius: 5,
    elevation: 2,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },
  category: {
    fontSize: 14,
    color: colors.textSecondary,
  },
});

export default NFTCard;