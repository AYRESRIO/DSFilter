import Filter from "../../components/Filter";
import Header from "../../components/Header";
import Listing from "../../components/Listing";
import "./styles.css";
import * as productService from "../../services/product-service";
import { ContextProductCount } from "../../utils/context-product";

import { useState, useContext, useEffect } from "react";
import { ProductDTO } from "../../models/product";

type ProductPrice = {
  minPrice: number;
  maxPrice: number;
};

export default function ListingBody() {
  const { setContextProductCount } = useContext(ContextProductCount);
  const [productPrice, setProductPrice] = useState<ProductPrice>({
    minPrice: 0,
    maxPrice: Number.MAX_VALUE,
  });

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [formData, setFormData] = useState<FormData>({});

  function handleSearch(formData: { minPrice?: number; maxPrice?: number }) {
    setProductPrice({
      minPrice: formData.minPrice || 0,
      maxPrice: formData.maxPrice || Number.MAX_VALUE,
    });
  }
  useEffect(() => {
    const filteredProducts = productService.findByPrice(
      productPrice.minPrice,
      productPrice.maxPrice
    );
    setProducts(filteredProducts);
    setContextProductCount(filteredProducts.length);
  }, [productPrice, setContextProductCount]);

  return (
    <>
      <Header />

      <main>
        <div>
          <Filter onSearch={handleSearch} />
        </div>

        <div className="DSF-container DSF-ListingBody-container">
          {products.map((product) => (
            <Listing key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  );
}
