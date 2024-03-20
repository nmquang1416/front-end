import React, { createContext } from 'react';
import all_product_cellinfo from "../Components/Assets/DataofCellinfo/all_product_cellinfo"


export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

  const contextValue = {all_product_cellinfo};

  return(
    <ShopContext.Provider value={contextValue}>
        {props.Shop}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;
