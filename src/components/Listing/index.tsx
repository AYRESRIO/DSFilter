import { ProductDTO } from "../../models/product";
import "./styles.css";

type Props = {
  product: ProductDTO;
};

export default function Listing({ product }: Props) {
  
  return (
    <>
      <div>
        <div className="DSF-listing-item">
          <div className="DSF-listing-fonts">
            <p>{product.name}</p>
          </div>
          <div className="DSF-listing-price">
            <h3>R$ {product.price.toFixed(2)}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
