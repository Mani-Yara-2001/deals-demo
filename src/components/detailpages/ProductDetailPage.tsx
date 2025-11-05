import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/common/Navbar";
import { getProductById } from "@/app/service/product";
import { productcarddetails } from "@/app/transform";


async function ProductData({ id }: { id: string }) {
  try {

    const data = await getProductById(id);
    const product = productcarddetails(data);

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        <div className="relative">
          <div className="relative w-full h-96 bg-black border-2 border-white/20 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)] group hover:border-white/40 transition-all duration-500">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-white/30 text-lg">
                No Image Available
              </div>
            )}
          </div>
        </div>


        <div className="space-y-6">
          {/* Brand */}
          <div>
            <span className="text-xs text-white/60 uppercase tracking-widest font-medium">
              {product.brand || "Brand"}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-3xl md:text-5xl font-black text-white leading-tight"
            style={{ textShadow: "0 0 30px rgba(255,255,255,0.3)" }}
          >
            {product.name}
          </h1>

          {/* Price */}
          <div className="flex items-center gap-4">
            {product.discount > 0 ? (
              <>
                <span className="text-4xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                  ${product.discountedPrice}
                </span>
                <span className="text-xl text-white/40 line-through">
                  ${product.originalPrice}
                </span>
                <span className="px-4 py-2 bg-white text-black rounded-full text-sm font-bold shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                  -{product.discount}% OFF
                </span>
              </>
            ) : (
              <span className="text-4xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                ${product.price}
              </span>
            )}
          </div>

          {/* Rating */}
          {product.rating > 0 && (
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "text-white fill-current drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                        : "text-white/20"
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-white/60 ml-2">({product.rating})</span>
            </div>
          )}

     
          <div className="border-t border-white/20 pt-6">
            <h2 className="text-xl font-bold text-white mb-4">Description</h2>
            <p className="text-white/70 leading-relaxed">{product.description}</p>
          </div>


          <div className="border-t border-white/20 pt-6">
            <div className="flex flex-col gap-3">
              {product.category && (
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">Category</h2>
                  <span className="text-white/70">{product.category}</span>
                </div>
              )}
              {product.unit && (
                <div>
                  <h2 className="text-xl font-bold text-white mb-2">Unit</h2>
                  <span className="text-white/70">{product.unit}</span>
                </div>
              )}
            </div>
          </div>

          {/* Reviews */}
          {product.reviews && product.reviews.length > 0 && (
            <div className="border-t border-white/20 pt-6">
              <h2 className="text-xl font-bold text-white mb-4">Reviews</h2>
              <div className="space-y-4">
{product.reviews.map((review: { rating: number; comment: string }, index: number) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-lg p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? "text-white fill-current"
                              : "text-white/20"
                          }`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-white/70 text-sm">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}


          <div className="flex items-center gap-4">
            <span
              className={`px-4 py-2 rounded-full border ${
                product.availability
                  ? "bg-white/10 text-white border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                  : "bg-white/5 text-white/50 border-white/10"
              }`}
            >
              {product.availability ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          {/* Add to Cart */}
          <button
            disabled={!product.availability}
            className={`w-full py-4 rounded-xl text-lg font-bold transition-all ${
              product.availability
                ? "bg-white text-black hover:bg-white/90 shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                : "bg-white/10 text-white/50 cursor-not-allowed"
            }`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  } catch {
    return (
      <div className="flex items-center justify-center min-h-[600px]">
        <div className="text-white/60">Product not found</div>
      </div>
    );
  }
}

function ProductDetailLoading() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="relative w-full h-96 bg-black border-2 border-white/20 rounded-2xl animate-pulse" />
      <div className="space-y-6">
        <div className="h-4 w-20 bg-white/20 rounded animate-pulse" />
        <div className="h-12 w-full bg-white/20 rounded animate-pulse" />
        <div className="h-10 w-48 bg-white/20 rounded animate-pulse" />
        <div className="h-32 w-full bg-white/20 rounded animate-pulse" />
      </div>
    </div>
  );
}

export default function ProductDetailPage({ id }: { id: string }) {
  return (
    <>
      <Navbar />

      <div className="container mx-auto px-4 py-6 lg:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Static Back Button */}
          <Link
            href="/"
            className="mb-8 inline-block px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            ← Back
          </Link>

          {/* Dynamic PPR Section */}
          <Suspense fallback={<ProductDetailLoading />}>
            <ProductData id={id} />
          </Suspense>
        </div>
      </div>
    </>
  );
}
