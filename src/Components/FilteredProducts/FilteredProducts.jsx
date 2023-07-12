import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";

const FilteredProducts = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  console.log(products);
  const { type } = useParams();
  console.log(type);

  return (
    <div className="pt-16">
      <div className="pl-14">
        <h1 className="text-gray-600 text-4xl font-inter font-bold tracking-normal leading-none">
          {type}
        </h1>
      </div>

      <div className="grid grid-cols-4 justify-items-center py-8 gap-12">
        {products
          .filter((product) => product.type === type)
          .map((product, index) => {
            return (
              <div key={index}>
                <ProductCard
                  id={product.id}
                  name={product.name}
                  text={product.text}
                  img={product.img}
                  price={product.price}
                  colors={product.color}
                ></ProductCard>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FilteredProducts;
