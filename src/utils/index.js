
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
export const fetchProducts = async (searchTerm = '') => {
  try {
    const response = await fetch(`/api/product${searchTerm ? `?q=${searchTerm}` : ''}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return { products: [] };
  }
};


// get single product
export const fetchSingleProduct = async (id) => {
  try {
    const response = await axios.get(`/api/product?id=${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// get single product
export const updateSingleProduct = async (id,product) => {
  try {
    const response = await axios.patch(`/api/product?id=${id}`,product);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// delete a single product
export const deleteSingleProduct = async (id) => {
  try {
    const response = await axios.delete(`/api/product?id=${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting products:', error);
    throw error;
  }
};




