import Filter from "../../components/Filter";
import Header from "../../components/Header";
import Listing from "../../components/Listing";
import { ProductDTO } from "../../models/product";
import "./styles.css";
import * as productService from "../../services/product-service"



export default function ListingBody() {
  return (
    <>
      <Header />
      <main>
        <div>
          <Filter />
        </div>
        <div className="DSF-container DSF-ListingBody-container">

          {
            productService.findByPrice(0, 1000000000000).map(product => <Listing 
              key={product.id} product={product} />)
          }

        </div>
      </main>
    </>
  );
}
