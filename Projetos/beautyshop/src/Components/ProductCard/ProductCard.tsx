import * as s from "./productCardStyles";

export const ProductCard: React.FC = () => {
  return (
    <s.Card>
      <img
        src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
        alt=""
      />
      <s.ProductTitle>Title</s.ProductTitle>
      <s.Category>cat 1 cat 2</s.Category>
      <s.btnAddCart>Add to Cart</s.btnAddCart>
    </s.Card>
  );
};
