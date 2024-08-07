import { FaRegStar, FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../data/products";
import { addProduct, removeProduct } from "../../redux/Cart/Cart-Slice";
import { RootReducer } from "../../redux/root-reducer";
import * as S from "./productCardStyle";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );

  const dispatch = useDispatch();
  const isProductOnCart =
    cart.find((productOnCart) => product.id === productOnCart.id) !== undefined;

  function handleAddProductToCart() {
    dispatch(addProduct(product));
  }

  function handleRemoveProductFromCart() {
    dispatch(removeProduct(product));
  }

  return (
    <S.Card>
      <S.ProductImage src={product.image} alt={product.description} />
      <S.ProductTitle>{product.title}</S.ProductTitle>
      <S.ReviewPriceContainer>
        <S.Review>
          {Array.from({ length: 5 }).map((_, index) =>
            index < Math.round(product.rating.rate) ? (
              <FaStar key={index} />
            ) : (
              <FaRegStar key={index} />
            )
          )}
          {`  ${product.rating.rate}`}
        </S.Review>
        <S.Price>${product.price}</S.Price>
      </S.ReviewPriceContainer>
      <S.WrapperButton>
        {isProductOnCart ? (
          <S.RemoveFromCartButton onClick={handleRemoveProductFromCart}>
            Remover do Carriho <FiShoppingCart />
          </S.RemoveFromCartButton>
        ) : (
          <S.AddToCartButton onClick={handleAddProductToCart}>
            Adicionar ao Carrinho <FiShoppingCart />
          </S.AddToCartButton>
        )}
      </S.WrapperButton>
    </S.Card>
  );
};
