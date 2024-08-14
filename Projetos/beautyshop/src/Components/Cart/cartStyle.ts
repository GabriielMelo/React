import styled from "styled-components";



export const CartContainer = styled.aside`
  position: fixed;
  top: 0;
  right: 0px;
  height: 100vh;
  width: 250px;
  background-color: white;
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
  font-size: 30px;
  margin-top: 10px;
  color: red;
  cursor: pointer;
  position: absolute;
  right: 236px;
  background-color: transparent;
  
  svg {
    background-color: red;
    border-radius: 50%;
    
    color: white;
  }
`;
