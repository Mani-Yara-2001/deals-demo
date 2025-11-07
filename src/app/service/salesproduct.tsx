import { API_CONFIG } from "../api/config";

export async function getSaleProducts() {
  try {
    const response = await fetch(API_CONFIG.SALE_PRODUCTS.SALE_PRODUCTS_GET, {
      next: { revalidate: 60 },
    });

    if (!response.ok) throw new Error(`Failed: ${response.status}`);

    const data = await response.json();
    console.log("🟢 getSaleProducts data:", data); // <--- add this
    return data;
  } catch (error) {
    console.error("Error fetching sale products:", error);
    throw error;
  }
}




export async function getSaleProductById(id: string | number) {
  try {
    // Fetch from the cached getSaleProducts which has ISR enabled
    const products = await getSaleProducts();
    const product = products.find((p: any) => p.id === Number(id));

    if (!product) throw new Error(`Product with id ${id} not found`);
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
}


