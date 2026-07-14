import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { fetchProductById } from "../store/actions/productActions";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import ProductTabs from "../components/ProductTabs";
import BestSellers from "../components/BestSellers";
import Clients from "../components/Clients";
import Spinner from "../components/Spinner";

function ProductDetailPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = useSelector((s) => s.product.product);
  const fetchState = useSelector((s) => s.product.fetchState);

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  if (fetchState === "FETCHING") return <Spinner />;
  if (fetchState === "FAILED" || !product?.id) {
    return <p className="py-20 text-center text-red-500">Product not found.</p>;
  }

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="w-full bg-[#FAFAFA]">
        <div className="flex items-center gap-4 px-6 py-6 md:px-[195px]">
          <div className="flex items-center gap-2 text-sm font-bold">
            <Link to="/" className="text-[#252B42]">Home</Link>
            <ChevronRight size={16} className="text-[#BDBDBD]" />
            <Link to="/shop" className="text-[#BDBDBD]">Shop</Link>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1100px] flex-col gap-10 px-6 py-8 md:flex-row md:py-12">
        <div className="md:w-1/2">
          <ProductGallery images={product.images?.map((i) => i.url) ?? []} />
        </div>
        <div className="md:w-1/2">
          <ProductInfo product={product} />
        </div>
      </div>

      <ProductTabs />
      <BestSellers />
      <Clients />
    </div>
  );
}

export default ProductDetailPage;