import SaleProductDetailPage from "@/components/detailpages/SaleProductDetailPage";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; 
  return <SaleProductDetailPage id={id} />;
}
