import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { login, logout } from "../../redux/User/User-Slice";
import { Cart } from "../Cart/Cart";
import * as S from "./styledHeader";

export const Header: React.FC = () => {
  const { user } = useSelector(
    (rootReducer: RootReducer) => rootReducer.userReducer
  );

  const [showCart, setShowCart] = useState(false);

  const isLogged = user !== null;

  const dispatch = useDispatch();
  function handleUserAuth() {
    if (user === null) {
      dispatch(
        login({
          name: "Gabriel Melo",
          email: "Gabriel@gmail.com",
        })
      );
    } else {
      dispatch(logout({}));
    }
  }

  // Redux Core (modo antigo)
  // function handleUserAuth() {
  //   if (user === null) {
  //      despachar a action de login
  //     dispatch({
  //       type: "user/login",
  //       payload: {
  //         name: "Gabriel Melo",
  //         email: "Gabriel@gmail.com",
  //       },
  //     });
  //   } else {
  //     dispatch({
  //       type: "user/logout",
  //     });
  //   }
  // }

  return (
    <S.StyledHeader>
      <S.Wraper>
        <S.HeaderTitle>My Shop</S.HeaderTitle>
        <S.ButtonsWraper>
          <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
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
