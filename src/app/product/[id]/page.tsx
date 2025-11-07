import { Suspense } from "react";
import { getProductById } from "@/app/service/product";
import ProductDetailPage from "@/components/detailpages/ProductDetailPage";

// Note: With cacheComponents (PPR), revalidation is handled at the fetch level
// in the service functions (product.js) using next: { revalidate: 60 }

async function ProductPageContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const productPromise = getProductById(id);
  return <ProductDetailPage productPromise={productPromise} />;
}

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductPageContent params={params} />
    </Suspense>
  );
}
