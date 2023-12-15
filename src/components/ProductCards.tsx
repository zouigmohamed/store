import React from "react";
import { IProduct } from "../interfaces";
import Product from "./Product";


interface IPropsProductCards {
  products: IProduct[];
}

const ProductCards: React.FC<IPropsProductCards> = ({ products }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-col-8 mx-auto w-3/4 gap-6 ">
      {products.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductCards;
