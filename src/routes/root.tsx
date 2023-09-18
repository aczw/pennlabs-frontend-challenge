import { useState } from "react";
import CoursesView from "../components/courses-view";
import HeaderCart from "../components/header-cart";
import type { Course } from "../utils/types";

const Root = () => {
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
      <HeaderCart cart={cart} />
      <CoursesView
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </>
  );
};

export default Root;
