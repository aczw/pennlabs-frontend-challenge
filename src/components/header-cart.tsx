import { useState } from "react";
import type { Course } from "~/utils/types";
import CartView from "./cart-view";
import Header from "./header";

const HeaderCart = ({ cart }: { cart: Course[] }) => {
  const [cartOpen, setCartOpen] = useState(false);

  // separate header into separate component so we can reuse it (e.g. for /receipt)
  return (
    <div className="fixed w-full">
      <Header>
        <button
          id="sex"
          className="rounded-full bg-sky-500 px-3 py-1 font-bold text-white hover:bg-sky-600 hover:underline"
          onClick={() => setCartOpen(!cartOpen)}
        >
          Your cart ({cart.length})
        </button>
      </Header>
      {cartOpen ? (
        <div className="border-b border-black/10 bg-gray-100 px-8 py-5 drop-shadow">
          <CartView cart={cart} />
        </div>
      ) : null}
    </div>
  );
};

export default HeaderCart;
