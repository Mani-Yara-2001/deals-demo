import { Suspense } from "react";
import { getSaleProducts } from "@/app/service/salesproduct";
import { saleproductcarddetails } from "@/app/transform";
import ProductCardAnimated from "@/components/cards/ProductCardAnimated";
import ProductCardSkeleton from "@/components/cards/ProductCardSkeleton";

// Server Component (dynamic part)
async function SaleProductsData({ limit = 4 }) {
  const data = await getSaleProducts();
  const transformedData = data.map(saleproductcarddetails);
  const displayedProducts = limit ? transformedData.slice(0, limit) : transformedData;

  return displayedProducts.map((product, index) => (
    <ProductCardAnimated
      key={product.id}
      product={product}
      index={index}
      detailPath={`/sale-product/${product.id}`}
    />
  ));
}


export default function SaleProducts({ limit = 4 }) {
  return (
    <div className="container mx-auto px-4  py-6 lg:py-16">

      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent"
          style={{ textShadow: "0 0 30px rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>
          SALE PRODUCTS
        </h2>
        <div className="h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto w-[100px]"
          style={{ boxShadow: "0 0 10px rgba(255,255,255,0.5)" }} />
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Suspense fallback={
          Array.from({ length: limit }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))
        }>
          <SaleProductsData limit={limit} />
        </Suspense>
      </div>
    </div>
  );
}
