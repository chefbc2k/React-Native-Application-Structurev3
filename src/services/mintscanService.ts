import axios from 'axios';

// Example base URL for Mintscan API (adjust according to the real API you're using)
const MINTSCAN_BASE_URL = 'https://api.mintscan.io/v1';

/**
 * Fetch token data from Mintscan
 * @param {string} tokenSymbol - Symbol of the token (e.g., 'ATOM')
 * @returns {Promise<Object>} - Token data
 */
export const fetchTokenData = async (tokenSymbol: string): Promise<any> => {
  try {
    const response = await axios.get(`${MINTSCAN_BASE_URL}/tokens/${tokenSymbol}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching token data from Mintscan:', error);
    throw error;
  }
};

/**
 * Fetch transactions for a specific address from Mintscan
 * @param {string} address - Blockchain address
 * @returns {Promise<Object[]>} - Transaction data
 */
export const fetchTransactions = async (address: string): Promise<any[]> => {
  try {
    const response = await axios.get(`${MINTSCAN_BASE_URL}/transactions/${address}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching transactions from Mintscan:', error);
    throw error;
  }
};