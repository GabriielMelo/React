import { styled } from "styled-components";

export const PageContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 1000px;
  background-color: white;
  min-height: 100vh;
  margin-top: 5px;
  padding: 25px;
  border-radius: 5px;
  
`;

export const Card = styled.article`
  min-width: 230px;
  min-height: 350px;
  background-color: white;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  font-weight: 600;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 2px 2px 12px pink;
  img {
    width: 230px;
    height: 220px;
    background-color: white;
    border-radius: 5px;
  }
`;

export const ProductTitle = styled.h3`
  font-family: "Dancing Script", cursive;
  font-size: 26px;
  margin-top: 5px;
`;
export const Category = styled.span`
  margin-top: -10px;
  font-size: 20px;
  padding: 10px;
`;
export const btnAddCart = styled.button`
  width: 210px;
  padding: 10px 5px;
  border: none;
  background-color: pink;
  color: gray;
  font-weight: 600;
  font-family: inherit;
  font-size: 17px;
  border-radius: 10px;
  cursor: pointer;
`;
