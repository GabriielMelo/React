import { CiCircleRemove } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Products } from "../../data/products";
import {
  clearCart,
  removeProduct,
  toggleCart,
} from "../../redux/CartReducer/Cart-Slice";
import { RootReducer } from "../../redux/root/rootReducer";
import * as s from "./cartStyle";

interface CartProps {
  product: Products[];
}

export const Cart: React.FC<CartProps> = ({ product }) => {
  const { cart, cartOpen } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );
  const dispatch = useDispatch();

  function handleCloseCart() {
    dispatch(toggleCart());
  }

  const totalCart = cart.reduce((total, product) => {
    return total + product.price;
  }, 0);

  return (
    <s.CartContainer cartOpen={cartOpen}>
      <s.CloseCartButton onClick={handleCloseCart}>
        <CiCircleRemove />
      </s.CloseCartButton>
      <s.Title>Products in your bag</s.Title>
      <s.ProductsInCartContainer>
        {cart.map((product) => {
          return (
            <s.Product key={product.id}>
              <img src={product.thumbnail} alt="" />
              <div>
                <s.ProductTitle>{product.title}</s.ProductTitle>
                <s.ProductPrice>${product.price}</s.ProductPrice>
              </div>
              <s.RemoveButton onClick={() => dispatch(removeProduct(product))}>
                <CiCircleRemove />
              </s.RemoveButton>
            </s.Product>
          );
        })}
      </s.ProductsInCartContainer>
      {totalCart === 0 ? (
        ""
      ) : (
        <s.PaymentWrapper>
          <s.TotalPrice>Total : R${totalCart.toFixed(2)}</s.TotalPrice>
          <s.btnBuy
            onClick={() => {
              window.alert("Thank you for your purchase!");
              dispatch(clearCart(product));
            }}
          >
            Finalize Purchase
          </s.btnBuy>
        </s.PaymentWrapper>
      )}
    </s.CartContainer>
  );
};
