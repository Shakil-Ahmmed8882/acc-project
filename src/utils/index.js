
// get all data 
// lib/api.js
import axios from 'axios';

export const fetchProducts = async () => {
  try {
    const response = await axios.get('/api/product');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};




