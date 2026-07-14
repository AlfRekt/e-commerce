import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setFilter, setSort, setOffset } from "../store/actions/productActions";
import ShopHero from "../components/ShopHero";
import ShopCategoryCards from "../components/ShopCategoryCards";
import ShopToolbar from "../components/ShopToolbar";
import Products from "../components/Products";
import Pagination from "../components/Pagination";
import Clients from "../components/Clients";
import Spinner from "../components/Spinner";

function ShopPage() {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const [view, setView] = useState("grid");

  const { productList, total, fetchState, limit, offset, filter, sort } = useSelector(
    (s) => s.product
  );

  useEffect(() => {
    const params = { limit, offset };
    if (categoryId) params.category = categoryId;
    if (filter) params.filter = filter;
    if (sort) params.sort = sort;

    dispatch(fetchProducts(params));
  }, [dispatch, categoryId, filter, sort, limit, offset]);

  const handleApply = ({ filter, sort }) => {
    dispatch(setFilter(filter));
    dispatch(setSort(sort));
    dispatch(setOffset(0));
  };

  const handlePageChange = (page) => {
    dispatch(setOffset((page - 1) * limit));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full">
      <ShopHero />
      <ShopCategoryCards />
      <ShopToolbar
        resultCount={total}
        view={view}
        onViewChange={setView}
        onApply={handleApply}
      />

      <div className="px-8 py-12 md:px-[195px]">
        {(fetchState === "FETCHING" || fetchState === "NOT_FETCHED") && <Spinner />}
        {fetchState === "FAILED" && (
          <p className="text-center text-red-500">Failed to load products.</p>
        )}
        {fetchState === "FETCHED" && <Products products={productList} view={view} />}
      </div>

      <Pagination 
        total={total}
        limit={limit}
        offset={offset}
        onPageChange={handlePageChange}
      />
      <Clients />
    </div>
  );
}

export default ShopPage;