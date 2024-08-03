import { Header } from "./components/Header/Header";
import { ProductsList } from "./components/ProductsList/ProductsList";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <div>
      <Header />
      <ProductsList />
      <GlobalStyles />
    </div>
  );
}

export default App;
