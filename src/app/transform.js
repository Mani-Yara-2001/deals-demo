export function productcarddetails(data) {
  return {
    id: data.product_id,
    name: data.name,
    description: data.description,
    price: data.price,
    originalPrice: data.price,
    discount: data.discount || 0,
    discountedPrice: data.discount ? (data.price * (1 - data.discount / 100)).toFixed(2) : data.price,
    image: data.image,
    brand: data.brand,
    category: data.category,
    rating: data.rating,
    unit: data.unit,
    availability: data.availability,
    reviews: data.reviews || []
  };
}

export function saleproductcarddetails(data) {
  return {
    id: data.id || "",
    name: data.title || "",
    description: data.description || "",
    price: data.price || 0,
    originalPrice: data.price || 0,

    discountedPrice: data.price || 0,
    image: data.images && data.images.length > 0 ? data.images[0] : "",
    images: data.images || [],
    brand: data.category?.name || "",
    category: data.category?.name || "",
    categoryId: data.category?.id || "",
    slug: data.slug || "",
    
    unit: "",
    availability: true,
    reviews: []
  };
}

