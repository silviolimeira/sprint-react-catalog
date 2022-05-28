import ProductCard from "components/ProductCard";
import ProductSearch from "components/ProductSearch";

import "./styles.css";

function Catalog() {
  const product = {
    id: 123,
    title: "Computador Desktop - Intel Core I7",
    price: 2779.0,
  };

  return (
    <>
      <ProductSearch />
      <div className="page-catalog">
        <div className="row">
          <div key={product.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <ProductCard />
          </div>
          <div key={product.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <ProductCard />
          </div>
          <div key={product.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default Catalog;
