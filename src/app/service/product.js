import { API_CONFIG } from "../api/config";

// ✅ Fetch all products (List page)
export async function getProducts() {
  try {
    const response = await fetch(API_CONFIG.PRODUCTS.PRODUCTS_GET, {
      next: { revalidate: 60 }, // ISR every 60 seconds
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

// ✅ Fetch single product by ID (Detail page)
export async function getProductById(id) {
  try {
    const response = await fetch(`${API_CONFIG.PRODUCTS.PRODUCTS_GET}/${id}`, {
      next: { revalidate: 60 }, // ISR every 60 seconds per product
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
