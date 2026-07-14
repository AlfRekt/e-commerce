import { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";
import Products from "./Products";
import Spinner from "./Spinner";

function BestSellers() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("/products", { params: { sort: "sell_count:desc", limit: 8 } })
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error("Bestseller alınamadı:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="w-full px-10 py-12 md:px-[240px] md:py-24">
      <div className="mb-12 mx-auto flex max-w-[250px] flex-col items-center gap-2.5 text-center md:max-w-none">
        <span className="text-sm font-bold text-[#737373]">Featured Products</span>
        <h2 className="text-2xl font-bold text-[#252B42]">BESTSELLER PRODUCTS</h2>
        <p className="text-sm text-[#737373]">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {loading ? <Spinner /> : <Products products={products} />}
    </section>
  );
}

export default BestSellers;