import { useDispatch } from "react-redux";
import { Products } from "../../data/products";
import { addProduct } from "../../redux/CartReducer/Cart-Slice";
import * as s from "./pageLayoutStyle";

interface ProductsProps {
  product: Products[];
}

export const PageLayout: React.FC<ProductsProps> = ({ product }) => {
  const dispatch = useDispatch();

  function handleAddProductToCart() {
    dispatch(addProduct(product));
  }

  return (
    <div>
      <s.PageContainer>
        <s.CardContainer>
          {product.map((product) => {
            return (
              <s.Card key={product.id}>
                <img src={product.thumbnail} alt="" />
                <s.ProductTitle>{product.title}</s.ProductTitle>
                <s.Category>
                  {product.tags.tag1} - {product.tags.tag2}
                </s.Category>
                <s.btnAddCart onClick={handleAddProductToCart}>
                  Add to Cart
                </s.btnAddCart>
              </s.Card>
            );
          })}
        </s.CardContainer>
      </s.PageContainer>
    </div>
  );
};
