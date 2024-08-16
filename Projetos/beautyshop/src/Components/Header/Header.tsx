import { CiShoppingCart } from "react-icons/ci";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleCart } from "../../redux/CartReducer/Cart-Slice";
import * as s from "./headerStyles";

interface LoginStatus {
  name: string;
  logged: boolean;
}

export const Header: React.FC = () => {
  const [login, setLogin] = useState({} as LoginStatus);
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();
  function handleOpenCart() {
    dispatch(toggleCart());
  }

  useEffect(() => {
    const logged = localStorage.getItem("logged");
    if (logged) {
      setLogin(JSON.parse(logged));
    }
  }, [setLogin]);

  return (
    <s.Header>
      <s.HeaderContainer>
        <div>
          {login.logged ? (
            <s.WelcomeText>
              Welcome <strong>{login.name}</strong>{" "}
            </s.WelcomeText>
          ) : (
            ""
          )}
          <s.PageTitle>Beauty Shop</s.PageTitle>
        </div>
        <div>
          <s.CartContainer isLogged={login.logged}>
            <s.CartButton onClick={handleOpenCart}>
              <CiShoppingCart />
            </s.CartButton>
            <s.LogoutButton
              onClick={() => {
                setLogin({
                  name: "",
                  logged: !login.logged,
                });
                localStorage.setItem("logged", JSON.stringify(login));
              }}
            >
              Logout
            </s.LogoutButton>
          </s.CartContainer>
          <s.FormLogin isLogged={login.logged}>
            <s.LabelLogin>Enter with your name</s.LabelLogin>
            <div>
              <s.InputUser
                placeholder="Sophie.."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              ></s.InputUser>
              <s.LoginButton
                onClick={(e) => {
                  e.preventDefault();
                  if (inputValue.length < 3) {
                    window.alert("Invalid User");
                    return;
                  }
                  setLogin({
                    name: inputValue,
                    logged: !login.logged,
                  });
                  setInputValue("");
                  localStorage.setItem("logged", JSON.stringify(login));
                }}
              >
                Acessar
              </s.LoginButton>
            </div>
          </s.FormLogin>
        </div>
      </s.HeaderContainer>
    </s.Header>
  );
};
