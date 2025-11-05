import Navbar from "@/components/common/Navbar";
import { CarouselDemo } from "@/components/landing/CarouselDemo";
import SaleProducts from "@/components/landing/SaleProducts";
import Products from "@/components/landing/Products";
import Image from "next/image";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
  <>
  <Navbar/>
  <CarouselDemo/>
  <SaleProducts/>
  <Products/>
  <Footer/>
  </>
  );
}
