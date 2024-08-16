import { Provider } from "react-redux";
import { Cart } from "./Components/Cart/Cart";
import { Header } from "./Components/Header/Header";
import { PageLayout } from "./Components/PageLayout/PageLayout";
import { products } from "./data/products";
import { store } from "./redux/store/store";
import { GlobalStyles } from "./styles/globalStyles";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <PageLayout />
      <Cart product={products} />
      <GlobalStyles />
    </Provider>
  );
}

export default App;
