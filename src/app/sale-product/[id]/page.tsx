import { Suspense } from "react";
import { getSaleProducts, getSaleProductById } from "@/app/service/salesproduct";
import SaleProductDetailPage from "@/components/detailpages/SaleProductDetailPage";

// Generate static params for ISR - pre-render first 10 products
export async function generateStaticParams() {
  const products = await getSaleProducts();
  return products.slice(0, 10).map((p: any) => ({
    id: p.id.toString(),
  }));
}

// Note: With cacheComponents (PPR), revalidation is handled at the fetch level
// in the service functions (salesproduct.tsx) using next: { revalidate: 60 }

async function SaleProductPageContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const productPromise = getSaleProductById(id);
  return <SaleProductDetailPage productPromise={productPromise} />;
}

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SaleProductPageContent params={params} />
    </Suspense>
  );
}
