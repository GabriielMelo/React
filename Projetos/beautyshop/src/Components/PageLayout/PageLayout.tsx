import { ProductCard } from "../ProductCard/ProductCard";
import * as s from "./pageLayoutStyle";

export const PageLayout: React.FC = () => {
  return (
    <div>
      <s.PageContainer>
        <s.CardContainer>
         <ProductCard/>
        </s.CardContainer>
      </s.PageContainer>
    </div>
  );
};
