import { useState } from "react";
import CoursesView from "./components/CoursesView";
import Header from "./components/Header";
import type { Course } from "./utils/types";

const App = () => {
  const [cart, setCart] = useState<Course[]>([]);

  // the user may already have seven courses in their cart. we return a
  // bool to check if the operation succeeded or not.
  const addToCart = (crs: Course) => {
    if (cart.length === 7) {
      alert("You can only have seven courses in your cart at a time!");
      return false;
    }

    const cartCopy = cart.slice();
    cartCopy.push(crs);
    setCart(cartCopy);

    return true;
  };

  const removeFromCart = (crs: Course) => {
    const cartCopy = cart.filter((c) => c.number !== crs.number);
    setCart(cartCopy);
  };

  return (
    <>
      <Header cart={cart} />
      <CoursesView
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </>
  );
};

export default App;
