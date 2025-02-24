import { createContext,  } from "react";

type ContextProductCountType = {
  contextProductCount: number;
  setContextProductCount: (contextProductCount: number) => void;
};

export const ContextProductCount = createContext<ContextProductCountType>({
  contextProductCount: 0,
  setContextProductCount: () => {},
});




  



