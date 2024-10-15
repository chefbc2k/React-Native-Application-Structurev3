import axios from 'axios';

const API_BASE_URL = 'YOUR_API_BASE_URL'; // Replace with your actual API base URL

export interface NFT {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  metadata: {
    contractor: string;
    executionDate: string;
    length: string;
    servicesAllowed: string[];
  };
}

export const fetchNFTs = async (page: number = 1, limit: number = 10): Promise<NFT[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/nfts`, {
      params: { page, limit },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching NFTs:', error);
    throw error;
  }
};

export const createNFT = async (nftData: Omit<NFT, 'id'>): Promise<NFT> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/nfts`, nftData);
    return response.data;
  } catch (error) {
    console.error('Error creating NFT:', error);
    throw error;
  }
};

export const updateNFT = async (id: string, nftData: Partial<NFT>): Promise<NFT> => {
  try {
    const response = await axios.put(`${API_BASE_URL}/nfts/${id}`, nftData);
    return response.data;
  } catch (error) {
    console.error('Error updating NFT:', error);
    throw error;
  }
};

export const deleteNFT = async (id: string): Promise<void> => {
  try {
    await axios.delete(`${API_BASE_URL}/nfts/${id}`);
  } catch (error) {
    console.error('Error deleting NFT:', error);
    throw error;
  }
};