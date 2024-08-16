import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Products } from "../../data/products";
import {
  addProduct,
  localStorageProducts,
  removeProduct,
} from "../../redux/CartReducer/Cart-Slice";
import { RootReducer } from "../../redux/root/rootReducer";
import * as s from "./productCardstyles";

interface ProductProps {
  product: Products;
}

export const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector(
    (rootReducer: RootReducer) => rootReducer.cartReducer
  );

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      dispatch(localStorageProducts(JSON.parse(storedProducts)));
    }
  }, [dispatch]);

  function handleAddProduct() {
    dispatch(addProduct(product));
  }
  function handleRemoveProduct() {
    dispatch(removeProduct(product));
  }
  const isProductInCart =
    cart.find((productOnCart) => product.id === productOnCart.id) !== undefined;
  return (
    <s.Card>
      <img src={product.thumbnail} alt="" />
      <s.ProductTitle>{product.title}</s.ProductTitle>
      <s.PriceInfo>R$ {product.price}</s.PriceInfo>
      <s.Category>
        {product.tags.tag1} - {product.tags.tag2}
      </s.Category>

      {isProductInCart ? (
        <s.BtnRemoveCart onClick={handleRemoveProduct}>
          Remove Product
        </s.BtnRemoveCart>
      ) : (
        <s.BtnAddCart onClick={handleAddProduct}>Add to Cart</s.BtnAddCart>
      )}
    </s.Card>
  );
};
