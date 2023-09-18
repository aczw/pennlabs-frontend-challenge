import { useState } from "react";
import CoursesView from "./components/CoursesView";
import Header from "./components/Header";
import type { Course } from "./utils/types";

const App = () => {
  const [cart, setCart] = useState<Course[]>([]);

  const addToCart = (crs: Course) => {
    const cartCopy = cart.slice();
    cartCopy.push(crs);
    setCart(cartCopy);
  };

  const removeFromCart = (crs: Course) => {
    const cartCopy = cart.filter((c) => c.number !== crs.number);
    setCart(cartCopy);
  };

  return (
    <>
      <Header cart={cart} />
      <CoursesView
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </>
  );
};

export default App;
