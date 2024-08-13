// import { CiShoppingCart } from "react-icons/ci";

import * as s from "./headerStyles";

export const Header: React.FC = () => {
  return (
    <s.Header>
      <s.HeaderContainer>
        <div>
          <s.PageTitle>Beauty Shop</s.PageTitle>
          <s.welcomeText>Welcome user! </s.welcomeText>
        </div>
        <div>
          {/* <s.CartButton>
            <CiShoppingCart />
          </s.CartButton> */}
          <s.FormLogin>
            <s.LabelLogin>Login</s.LabelLogin>
            <div>
              <s.InputUser placeholder="Usuario"></s.InputUser>
              <s.LoginButton>Acessar</s.LoginButton>
            </div>
          </s.FormLogin>
        </div>
      </s.HeaderContainer>
    </s.Header>
  );
};
