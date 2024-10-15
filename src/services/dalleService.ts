import axios from 'axios';

const DALLE_API_KEY = 'YOUR_OPENAI_API_KEY'; // Replace with your actual API key

export const generateImage = async (prompt: string): Promise<string> => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/images/generations',
      {
        prompt,
        n: 1,
        size: '512x512',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${DALLE_API_KEY}`,
        },
      }
    );

    return response.data.data[0].url;
  } catch (error) {
    console.error('Error generating image with DALL·E:', error);
    throw error;
  }
};