import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";

// Dynamic data fetcher - only this part streams in with PPR
async function DynamicProductData({ productPromise }: { productPromise: Promise<any> }) {
  const product = await productPromise;
  const images: string[] = product.images || [];
  const currentImage = images[0] || "";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Image Section */}
      <div className="space-y-4">
        <div className="relative w-full h-96 bg-black border-2 border-white/20 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)] group hover:border-white/40 transition-all duration-500">
          {currentImage ? (
            <Image
              src={currentImage}
              alt={product.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-white/30 text-lg">
              No Image Available
            </div>
          )}
        </div>


        {/* Thumbnail Images */}
        {images.length > 1 && (
          <div className="flex gap-4 overflow-x-auto">
            {images.map((img: string, index: number) => (
              <div
                key={index}
                className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 border-white/20"
              >
                <Image
                  src={img}
                  alt={`${product.title} ${index + 1}`}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Product Info Section */}
      <div className="space-y-6">
        {/* Category */}
        <div>
          <span className="text-xs text-white/60 uppercase tracking-widest font-medium">
            {product.category?.name || "Category"}
          </span>
        </div>

        {/* Title */}
        <h1
          className="text-3xl md:text-5xl font-black text-white leading-tight"
          style={{
            textShadow: "0 0 30px rgba(255,255,255,0.3)",
          }}
        >
          {product.title}
        </h1>

        {/* Price */}
        <div className="flex items-center gap-4">
          <span className="text-4xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
            ${product.price}
          </span>
        </div>

        {/* Description */}
        <div className="border-t border-white/20 pt-6">
          <h2 className="text-xl font-bold text-white mb-4">Description</h2>
          <p className="text-white/70 leading-relaxed">{product.description}</p>
        </div>

        {/* Availability */}
        <div className="flex items-center gap-4">
          <span className="px-4 py-2 rounded-full border bg-white/10 text-white border-white/30">
            In Stock
          </span>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full py-4 rounded-xl text-lg font-bold transition-all bg-white text-black hover:bg-white/90 shadow-[0_0_30px_rgba(255,255,255,0.4)]">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default function SaleProductDetailPage({
  productPromise
}: {
  productPromise: Promise<any>;
}) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-6 lg:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Static Back Button - renders immediately */}
          <Link
            href="/"
            className="mb-8 inline-block px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300"
          >
            ← Back
          </Link>

          {/* Static Shell - renders immediately with PPR */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Static Image Container */}
            <div className="space-y-4">
              <div className="relative w-full h-96 bg-black border-2 border-white/20 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)] group hover:border-white/40 transition-all duration-500">
                {/* Dynamic content streams in here with Suspense */}
                <Suspense fallback={null}>
                  <DynamicProductData productPromise={productPromise} />
                </Suspense>
              </div>
            </div>

            {/* Static placeholder for dynamic content on right side */}
            <div className="space-y-6">
              <Suspense fallback={null}>
                {/* Dynamic product info streams in - this is handled by DynamicProductData above */}
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
