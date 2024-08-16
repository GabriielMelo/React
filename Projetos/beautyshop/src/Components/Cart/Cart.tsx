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

  const totalCart = cart.reduce((total, product) => {
    return total + product.price;
  }, 0);

  return (
    <s.CartContainer>
      <s.CloseCartButton>
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
        <s.TotalPrice>Total : R${totalCart.toFixed(2)}</s.TotalPrice>
      )}

      <s.btnBuy>Finalizar Compra</s.btnBuy>
    </s.CartContainer>
  );
};
