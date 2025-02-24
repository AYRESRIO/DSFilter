import { useContext } from "react";
import "./styles.css";
import { ContextProductCount } from "../../utils/context-product";

export default function CounterIcon() {
  const { contextProductCount } = useContext(ContextProductCount);
  return (
    <div className="DSF-counter-content">
      <div className="DSF-counting-products">
        <h4>{contextProductCount}</h4>
      </div>

      <div>
        <h2>produto(s)</h2>
      </div>
    </div>
  );
}
