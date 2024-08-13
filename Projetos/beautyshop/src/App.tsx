import { Header } from "./Components/Header/Header";
import { PageLayout } from "./Components/PageLayout/PageLayout";
import { products } from "./data/products";
import { GlobalStyles } from "./styles/globalStyles";
function App() {
  return (
    <>
      <Header />
      <PageLayout product={products} />
      <GlobalStyles />
    </>
  );
}

export default App;
