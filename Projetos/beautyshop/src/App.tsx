import { Provider } from "react-redux";
import { Header } from "./Components/Header/Header";
import { PageLayout } from "./Components/PageLayout/PageLayout";
import { products } from "./data/products";
import { store } from "./redux/store/store";
import { GlobalStyles } from "./styles/globalStyles";
function App() {
  return (
    <Provider store={store}>
      <Header />
      <PageLayout product={products} />
      {/* <Cart /> */}
      <GlobalStyles />
    </Provider>
  );
}

export default App;
