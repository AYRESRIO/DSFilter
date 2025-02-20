import Filter from "../../components/Filter";
import Header from "../../components/Header";
import Listing from "../../components/Listing";
import "./styles.css";
import * as productService from "../../services/product-service";
import { useState } from "react";

type ProductPrice = {
  minPrice: number;
  maxPrice: number;
};

export default function ListingBody() {

  const [productPrice, setProductPrice] = useState<ProductPrice>({minPrice:
    0, maxPrice: Number.MAX_VALUE
  });
 
  function handleSearch(formData:{minPrice?: number; maxPrice?:number}) {
    setProductPrice({
      minPrice: formData.minPrice || 0,
      maxPrice: formData.maxPrice || Number.MAX_VALUE,
    });
  }
  
  return (
    <>
      <Header />

      <main>
        <div>
          <Filter onSearch={handleSearch} />
        </div>
        <div className="DSF-container DSF-ListingBody-container">
          {productService.findByPrice(productPrice.minPrice,
           productPrice.maxPrice).map((product) => (
            <Listing key={product.id} product={product} />
          ))}
      
        </div>
      </main>
    </>
  );
}
