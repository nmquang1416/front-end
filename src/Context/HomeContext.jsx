import React, { createContext } from 'react';

import all_product_cellinfo from "../Components/Assets/DataofCellinfo/all_product_cellinfo"


export const ProductContext = createContext(null);

const ProductContextProvider = (props) => {

  const contextValue = {all_product_cellinfo};

  return(
    <ProductContext.Provider value={contextValue}>
        {props.aboutUs}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider;
