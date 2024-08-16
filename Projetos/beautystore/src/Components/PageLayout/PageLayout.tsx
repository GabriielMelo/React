import { products } from "../../data/products";
import { ProductCard } from "../ProductCard/ProductCard";
import * as s from "./pageLayoutStyle";

export const PageLayout: React.FC = () => {
  return (
    <s.PageContainer>
       <s.CardContainer>
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
      </s.CardContainer>
    </s.PageContainer>
  );
};
