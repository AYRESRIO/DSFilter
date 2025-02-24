import { ProductDTO } from "../models/product";

export function save(products: ProductDTO) {
  const str = JSON.stringify(products);
  localStorage.setItem("com.devsuperior.DSFilter/products", str);
}

export function get(): ProductDTO {
    const str = localStorage.getProduct("com.devsuperior.DSFilter/products")||'{"products"=[]}';
    return JSON.parse(str);
}