import { API_CONFIG } from "../api/config";

export async function getProducts() {
  try {
    const response = await fetch(API_CONFIG.PRODUCTS.PRODUCTS_GET, {
      next: { revalidate: 1 }, // Revalidate every 60 seconds for PPR
      cache: 'force-cache'
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export async function getProductById(id) {
  try {
    const response = await fetch(`${API_CONFIG.PRODUCTS.PRODUCTS_GET}/${id}`, {
      next: { revalidate: 1 },
      cache: 'force-cache'
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch product: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
}

