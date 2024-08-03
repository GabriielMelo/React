import { FaRegStar, FaStar } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Product } from "../../data/products";
import * as S from "./productCardStyle";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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
        <S.AddToCartButton>
          Adicionar ao Carrinho <FiShoppingCart />
        </S.AddToCartButton>
      </S.WrapperButton>
    </S.Card>
  );
};
