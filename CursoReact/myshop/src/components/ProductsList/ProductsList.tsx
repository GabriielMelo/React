import React from "react";
import { products } from "../../data/products";
import { ProductCard } from "../ProductCard/ProductCard";
import * as S from "./productslistStyles";

export const ProductsList: React.FC = () => {
  return (
    <S.Container>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </S.Container>
  );
};
