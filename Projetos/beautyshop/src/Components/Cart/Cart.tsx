import { CiCircleRemove } from "react-icons/ci";
import * as s from "./cartStyle";

export const Cart: React.FC = () => {
  return (
    <s.CartContainer>
      <s.CloseCartButton>
        <CiCircleRemove />
      </s.CloseCartButton>
      <s.Title>Products in your bag</s.Title>
      <s.Product>
        <img
          src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
          alt=""
        />
        <div>
          <s.ProductTitle>Batom</s.ProductTitle>
          <s.ProductPrice>4,99</s.ProductPrice>
        </div>
        <s.RemoveButton>
          <CiCircleRemove />
        </s.RemoveButton>
      </s.Product>
    </s.CartContainer>
  );
};
