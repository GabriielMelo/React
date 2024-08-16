import styled from "styled-components";

interface CartProps {
  cartOpen: boolean;
}

export const CartContainer = styled.aside<CartProps>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.cartOpen ? "0" : "-350px")};
  transition: right 1.5s;
  height: 100vh;
  width: 250px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-left: 3px solid pink;
`;

export const ProductsInCartContainer = styled.div`
  overflow-y: auto;
  flex-grow: 1;
  padding: 10px 0;
  overflow-x: hidden;
`;

export const Product = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  padding: 20px;

  img {
    max-width: 100px;
    max-height: 150px;
  }
`;

export const Title = styled.h1`
  font-size: 27px;
  padding: 20px;
`;

export const ProductTitle = styled.h3`
  font-size: 18px;
  text-align: center;
`;

export const ProductPrice = styled.span`
  font-size: 14px;
  padding: 0px 10px;
`;

export const RemoveButton = styled.button`
  border: none;
  font-size: 30px;
  margin-top: 10px;
  padding: 10px;
  color: red;
  cursor: pointer;
  background-color: transparent;
`;

export const CloseCartButton = styled.button`
  border: none;
  font-size: 25px;
  color: red;
  cursor: pointer;
  position: absolute;
  right: 223px;
  top: 1px;
  background-color: transparent;

  @media (max-width: 480px) {
    font-size: 40px;
  }
  svg {
    background-color: #a82af5;
    border-radius: 50%;
    color: white;
  }
`;

export const TotalPrice = styled.span`
  font-size: 22px;
  font-weight: 600;
  padding: 10px;
  text-align: end;
`;

export const btnBuy = styled.button`
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: #a82af5;
  color: black;
  cursor: pointer;
  color: white;
  margin: 10px;
  text-align: center;
`;

export const PaymentWrapper = styled.div`
  display: flex;
  align-items: end;
  flex-direction: column;
  margin-top: 5px;
  
  button {
    width: 90%;
  }
`;
