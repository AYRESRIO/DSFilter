import { useState } from "react";
import "./App.css";
import ListingBody from "./routes/ListingBody";
import { ContextProductCount } from "./utils/context-product";

export default function App() {
  const [contextProductCount, setContextProductCount] = useState<number>(0);
  return (
    <ContextProductCount.Provider
      value={{ contextProductCount, setContextProductCount }}>
      <ListingBody />
    </ContextProductCount.Provider>
  );
}
