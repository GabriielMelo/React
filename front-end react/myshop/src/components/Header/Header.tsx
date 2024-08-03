import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";

import { useState } from "react";
import { Cart } from "../Cart/Cart";
import * as S from "./styledHeader";

export const Header: React.FC = () => {
  const [showCart, setShowCart] = useState(false);

  const [isLogged, setIsLogged] = useState(false);
  return (
    <S.StyledHeader>
      <S.Wraper>
        <S.HeaderTitle>My Shop</S.HeaderTitle>
        <S.ButtonsWraper>
          <S.AuthButton
            isLogged={isLogged}
            onClick={() => setIsLogged(!isLogged)}
          >
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>
          <S.CartButton onClick={() => setShowCart(!showCart)}>
            Carrinho <FiShoppingCart />
          </S.CartButton>
        </S.ButtonsWraper>
      </S.Wraper>
      <Cart showCart={showCart} />
    </S.StyledHeader>
  );
};
