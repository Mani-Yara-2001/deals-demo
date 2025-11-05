import { API_CONFIG } from "../api/config";

export async function getSaleProducts() {
  try {
    const response = await fetch(API_CONFIG.SALE_PRODUCTS.SALE_PRODUCTS_GET, {
      next: { revalidate: 1 }, 
   
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch sale products: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching sale products:", error);
    throw error;
  }
}



export async function getSaleProductById(id: string | number) {
  try {
    const response = await fetch(`${API_CONFIG.SALE_PRODUCTS.SALE_PRODUCTS_GET}/${id}`, {
      next: { revalidate: 60 }, 
      cache: "force-cache", 
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


