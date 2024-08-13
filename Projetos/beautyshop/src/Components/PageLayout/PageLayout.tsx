import { Products } from "../../data/products";
import * as s from "./pageLayoutStyle";

interface ProductsProps {
  product: Products;
}

export const PageLayout: React.FC<ProductsProps> = ({ product }) => {
  return (
    <div>
      <s.PageContainer>
        <s.CardContainer>
          <s.Card key={product.id}>
            <img src={product.thumbnail} alt="" />
            <s.ProductTitle>{product.title}</s.ProductTitle>
            <s.Category>
              {product.tags.tag1} {product.tags.tag2}
            </s.Category>
            <s.btnAddCart>Add to Cart</s.btnAddCart>
          </s.Card>
        </s.CardContainer>
      </s.PageContainer>
    </div>
  );
};
