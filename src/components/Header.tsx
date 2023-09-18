import { useState } from "react";
import type { Course } from "~/utils/types";
import CartView from "./CartView";

const Header = ({ cart }: { cart: Course[] }) => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="fixed w-full">
      <header className="flex flex-col space-y-4 border-b border-black/10 bg-gray-50 px-8 py-3">
        <div className="flex justify-between">
          <nav className="flex items-center space-x-6">
            <a
              href="/#"
              className="flex items-center space-x-2 hover:underline"
            >
              <img
                src="/logo.png"
                width="23"
              />
              <h2 className="align-top text-xl font-semibold">
                Penn Course Cart
              </h2>
            </a>
            <a
              href="https://github.com/aczw"
              className="text-zinc-700 hover:underline"
              target="_blank"
            >
              @aczw
            </a>
          </nav>
          <button
            id="sex"
            className="rounded-full bg-sky-500 px-3 py-1.5 font-bold text-white hover:bg-sky-600 hover:underline"
            onClick={() => setCartOpen(!cartOpen)}
          >
            Your cart ({cart.length})
          </button>
        </div>
      </header>
      {cartOpen ? (
        <div className="border-b border-black/10 bg-gray-100 px-8 py-5 drop-shadow">
          <CartView cart={cart} />
        </div>
      ) : null}
    </div>
  );
};

export default Header;
