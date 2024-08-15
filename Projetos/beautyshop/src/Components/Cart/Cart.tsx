import { CiCircleRemove } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Products } from "../../data/products";
import { removeProduct } from "../../redux/CartReducer/Cart-Slice";
import { RootReducer } from "../../redux/root/rootReducer";
import * as s from "./cartStyle";

interface CartProps {
  product: Products[];
  showCart: boolean;
}

export const Cart: React.FC<CartProps> = ({ product, showCart }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );
  const dispatch = useDispatch();

  function handleRemoveProductFromCart() {
    dispatch(removeProduct(product));
  }

  return (
    <s.CartContainer>
      <s.CloseCartButton>
        <CiCircleRemove />
      </s.CloseCartButton>
      <s.Title>Products in your bag</s.Title>
      {cart.map((product) => {
        return (
          <s.Product key={product.id}>
            <img src={product.thumbnail} alt="" />
            <div>
              <s.ProductTitle>{product.title}</s.ProductTitle>
              <s.ProductPrice>${product.price}</s.ProductPrice>
            </div>
            <s.RemoveButton onClick={handleRemoveProductFromCart}>
              <CiCircleRemove />
            </s.RemoveButton>
          </s.Product>
        );
      })}
    </s.CartContainer>
  );
};
