
export default function ProductCardSkeleton() {
  return (
    <div className="group relative bg-black border-2 border-white/20 rounded-2xl overflow-hidden h-full flex flex-col">
      {/* Image Skeleton */}
      <div className="relative w-full h-40 bg-gradient-to-br from-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
      </div>

      {/* Content Skeleton */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-1.5 h-3 w-20 bg-white/20 rounded animate-pulse" />
        <div className="mb-2 h-5 w-full bg-white/20 rounded animate-pulse min-h-[2.5rem]" />
        <div className="mb-3 h-4 w-3/4 bg-white/20 rounded animate-pulse min-h-[2.5rem]" />
        <div className="mb-3 h-4 w-1/2 bg-white/20 rounded animate-pulse" />
        <div className="mb-3 h-6 w-24 bg-white/20 rounded animate-pulse" />
        <div className="flex items-center justify-between gap-2 mt-auto">
          <div className="h-5 w-20 bg-white/20 rounded animate-pulse" />
          <div className="h-8 w-24 bg-white/20 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}

