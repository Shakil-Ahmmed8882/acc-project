
import axios from 'axios';

// Add a new product
export const AddSingleProduct = async (product) => {
  try {
    const response = await axios.post('/api/product', product);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// get all products 
export const fetchProducts = async () => {
  try {
    const response = await axios.get('/api/product');
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchSingleProduct = async (id) => {
  try {
    const response = await axios.get(`/api/product?id=${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};




