"use client";

import Carousel from "@/components/ui/carousel";
export function CarouselDemo() {
  const slideData = [
    {
      title: "Exclusive Deals",
      button: "Shop Now",
      src: "/images/deals1.jpeg",
    },
    {
      title: "Special Offers",
      button: "Explore",
      src: "/images/deals2.jpeg",
    },
    {
      title: "Best Discounts",
      button: "View More",
      src: "/images/deals3.jpg",
    },
    {
      title: "Limited Time",
      button: "Shop Now",
      src: "/images/deals5.jpg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full pb-10">
      <Carousel slides={slideData} />
    </div>
  );
}
