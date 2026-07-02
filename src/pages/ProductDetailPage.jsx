import { useParams, Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import ProductTabs from "../components/ProductTabs";
import BestSellers from "../components/BestSellers";
import Clients from "../components/Clients";

// Şimdilik örnek ürün — sonra id'ye göre gerçek veriyi çekeceğiz
const sampleProduct = {
  id: 1,
  title: "Floating Phone",
  rating: 4,
  reviewCount: 10,
  price: "1,139.33",
  inStock: true,
  description:
    "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
  colors: ["#23A6F0", "#2DC071", "#E77C40", "#252B42"],
  images: ["/product-1.jpg", "/product-2.jpg"],
};

function ProductDetailPage() {
  const { productId } = useParams();
  const product = sampleProduct; // ileride: id === productId olan ürünü bul/çek

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="w-full bg-[#FAFAFA]">
        <div className="flex items-center justify-center md:justify-start gap-2 px-6 py-12 text-sm font-bold md:px-[195px]">
          <Link to="/" className="text-[#252B42]">Home</Link>
          <ChevronRight size={16} className="text-[#BDBDBD]" />
          <Link to="/shop" className="text-[#BDBDBD]">Shop</Link>
        </div>
      </div>

      <div className="flex flex-col bg-[#FAFAFA] gap-8 px-6 pb-8 md:flex-row md:px-[195px] md:pb-12">
        {/* Sol: galeri */}
        <div className="md:w-1/4">
          <ProductGallery images={product.images} />
        </div>

        {/* Sağ: ürün bilgisi (sıradaki adım) */}
        <div className="md:w-3/4">
          <ProductInfo product={product} />
        </div>
      </div>

      <ProductTabs />
      <div className="bg-[#FAFAFA]">
        <BestSellers />
      </div>
      <Clients />
    </div>
  );
}

export default ProductDetailPage;