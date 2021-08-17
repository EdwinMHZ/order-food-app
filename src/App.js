import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {

  const [cartShown,setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler}/>
      {cartShown && <Cart onClose={hideCartHandler}/>}
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
