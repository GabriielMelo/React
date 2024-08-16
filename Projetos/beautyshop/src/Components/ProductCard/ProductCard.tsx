import { useDispatch } from "react-redux";
import { Products } from "../../data/products";
import { addProduct } from "../../redux/CartReducer/Cart-Slice";
import * as s from "./productCardstyles";

interface ProductProps {
  product: Products;
}

export const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();

  function handleAddProductToCart() {
    dispatch(addProduct(product));
  }

  return (
    <s.Card>
      <img src={product.thumbnail} alt="" />
      <s.ProductTitle>{product.title}</s.ProductTitle>
      <s.Category>
        {product.tags.tag1} - {product.tags.tag2}
      </s.Category>
      <s.btnAddCart onClick={handleAddProductToCart}>Add to Cart</s.btnAddCart>
    </s.Card>
  );
};
