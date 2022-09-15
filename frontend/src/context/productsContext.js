import React from "react";

const CreateProductsDataContext = React.createContext(undefined);
const CreateProductsDataChangeContext = React.createContext(undefined);

function ProductsDataProvider({ children }) {
  const [productsData, setProductsData] = React.useState("");

  const handleProductsDataChange = (token) => {
    setProductsData(token);
  };

  return (
    <CreateProductsDataContext.Provider value={productsData}>
      <CreateProductsDataChangeContext.Provider
        value={{ handleProductsDataChange }}
      >
        {children}
      </CreateProductsDataChangeContext.Provider>
    </CreateProductsDataContext.Provider>
  );
}

const useCreateProductsDataContext = () => {
  const context = React.useContext(CreateProductsDataContext);

  if (context === undefined) {
    throw Error(
      "useCreateProductsDataContext must be inside ProductsDataProvider"
    );
  }

  return context;
};

const useCreateProductsDataChangeContext = () => {
  const context = React.useContext(CreateProductsDataChangeContext);

  if (context === undefined) {
    throw Error(
      "useCreateProductsDataChangeContext must be inside ProductsDataProvider"
    );
  }

  return context;
};

const useProductsDataContext = () => {
  return [useCreateProductsDataContext(), useCreateProductsDataChangeContext()];
};

export { ProductsDataProvider, useProductsDataContext };
