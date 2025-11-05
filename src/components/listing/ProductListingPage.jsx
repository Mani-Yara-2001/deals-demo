import { Suspense } from "react";
import { getProducts } from "@/app/service/product";
import { productcarddetails } from "@/app/transform";
import ProductCardAnimated from "@/components/cards/ProductCardAnimated";
import ProductCardSkeleton from "@/components/cards/ProductCardSkeleton";
import Navbar from "@/components/common/Navbar";


async function ProductsData() {
  try {
    const data = await getProducts();
    const transformedData = data.map(productcarddetails);
    
    return (
      <>
        {transformedData.map((product, index) => (
          <ProductCardAnimated 
            key={product.id} 
            product={product} 
            index={index} 
          />
        ))}
      </>
    );
  } catch (error) {
    return (
      <div className="col-span-full flex items-center justify-center min-h-[600px]">
        <div className="text-white/60">Failed to load products</div>
      </div>
    );
  }
}


export default function ProductListingPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4  py-6 lg:py-16">

        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent" style={{
            textShadow: "0 0 30px rgba(255,255,255,0.3)",
            letterSpacing: "0.05em"
          }}>
            ALL PRODUCTS
          </h1>
          <div className="h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto w-[150px]" style={{ boxShadow: "0 0 10px rgba(255,255,255,0.5)" }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <Suspense fallback={
            <>
              {Array.from({ length: 8 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </>
          }>
            <ProductsData />
          </Suspense>
        </div>
      </div>
    </>
  );
}
