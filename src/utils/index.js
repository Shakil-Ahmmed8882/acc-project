import axios from "axios";

// Add a new product
export const AddSingleProduct = async (product) => {
  try {
    const response = await axios.post("/api/product", product);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// get all products
export const fetchProducts = async (searchTerm = "") => {
  try {
    const response = await fetch(
      `/api/product${searchTerm ? `?q=${searchTerm}` : ""}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return { products: [] };
  }
};

// get single product
export const fetchSingleProduct = async (id) => {
  try {
    const response = await axios.get(`/api/product?id=${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// get single product
export const updateSingleProduct = async (id, product) => {
  try {
    const response = await axios.patch(`/api/product?id=${id}`, product);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// delete a single product
export const deleteSingleProduct = async (id) => {
  try {
    const response = await axios.delete(`/api/product?id=${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting products:", error);
    throw error;
  }
};

// Get products by product type
export const fetchProductsByType = async (productType) => {
  try {
    const response = await axios.get(`/api/product/${productType}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products by type:", error);
    throw error;
  }
};

//create new admin

export const createNewAdmin = async (userData) => {
  try {
    const response = await axios.post("/api/user", userData);
    return response.data;
  } catch (error) {
    // Log detailed error information
    console.error(
      "Error creating new user:",
      error.response?.data || error.message
    );

    // Throw a new error with a detailed message
    throw new Error(
      error.response?.data?.message ||
        "An error occurred while creating the user"
    );
  }
};

//forgot password link post
export const forgotPassword = async (userData) => {
  try {
    const response = await axios.post("/api/forgot-password", userData);
    return response.data;
  } catch (error) {
    console.error("Error sending forgot password request:", error);
    if (error.response) {
      // Server responded with a status other than 2xx
      return {
        success: false,
        message: error.response.data.message || "An error occurred.",
        status: error.response.status,
      };
    } else if (error.request) {
      // Request was made but no response received
      return {
        success: false,
        message: "No response from server. Please try again later.",
      };
    } else {
      // Something else happened while setting up the request
      return {
        success: false,
        message: error.message,
      };
    }
  }
};


//verifyToken token
export const verifyToken = async (token) => {
  try {
    const response = await axios.post("/api/verify-token",  token );
    return response.data;
  } catch (error) {
    console.error("Error verifying token:", error);

    // Check if there is a response from the server
    if (error.response) {
      return {
        success: false,
        message: error.response.data.message || "An error occurred.",
        status: error.response.status,
      };
    } else if (error.request) {
      // The request was made but no response was received
      return {
        success: false,
        message: "No response from server. Please try again later.",
      };
    } else {
      // Something happened in setting up the request
      return {
        success: false,
        message: error.message,
      };
    }
  }
};

//update password
export const updatePassword = async (userData) => {
  try {
    const response = await axios.post("/api/update-password", userData);
    return response.data;
  } catch (error) {
    console.error("Error updating password:", error);

    // Check if there is a response from the server
    if (error.response) {
      return {
        success: false,
        message: error.response.data.message || "An error occurred.",
        status: error.response.status,
      };
    } else if (error.request) {
      // The request was made but no response was received
      return {
        success: false,
        message: "No response from server. Please try again later.",
      };
    } else {
      // Something happened in setting up the request
      return {
        success: false,
        message: error.message,
      };
    }
  }
};
//sent contact email
export const sendContactEmail = async (userData) => {
  try {
    const response = await axios.post("/api/contact-email", userData);
    return response.data;
  } catch (error) {
    console.error("Error sending error:", error);

    // Check if there is a response from the server
    if (error.response) {
      return {
        success: false,
        message: error.response.data.message || "An error occurred.",
        status: error.response.status,
      };
    } else if (error.request) {
      // The request was made but no response was received
      return {
        success: false,
        message: "No response from server. Please try again later.",
      };
    } else {
      // Something happened in setting up the request
      return {
        success: false,
        message: error.message,
      };
    }
  }
};


// best seller products

import { useState, useEffect } from "react";

export const useBestSellerProducts = () => {
  const [bestSellerProducts, setBestSellerProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBestSellerProducts = async () => {
      try {
        const response = await fetch("/api/product?bestSeller=true");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBestSellerProducts(data.products);
      } catch (error) {
        console.error("Error fetching best seller products:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBestSellerProducts();
  }, []);

  return { bestSellerProducts, loading, error };
};
