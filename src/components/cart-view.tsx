import { useNavigate } from "react-router-dom";
import type { Course } from "~/utils/types";

const generateUrl = (cart: Course[]) => {
  // here, we turn each course in the cart into a valid URL with the course embedded
  const url = new URLSearchParams(
    cart.map((crs, index) => [
      `${index + 1}`,
      `${crs.dept} ${crs.number}: ${crs.title}`,
    ]),
  );

  return url.toString();
};

const CartView = ({ cart }: { cart: Course[] }) => {
  const navigate = useNavigate();

  const cartEmpty = cart.length === 0;

  return (
    <div className="flex justify-end gap-3">
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex flex-col items-center space-y-4 md:items-end">
          <h3 className="text-xl font-semibold leading-none">Current cart</h3>
          <p className="text-center md:text-right">
            When you feel ready, tap the checkout button below to confirm your
            choices. Note that you can only have seven courses in your cart at a
            time. Happy shopping!
          </p>
          <button
            disabled={cartEmpty}
            className="w-[200px] rounded-full bg-green-500 py-1.5 font-semibold text-white hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-500"
            onClick={() => navigate(`/receipt?${generateUrl(cart)}`)}
          >
            Checkout courses
          </button>
        </div>
        {cartEmpty ? (
          <div className="flex items-center justify-center rounded-md bg-gray-200 p-4 text-gray-500">
            Currently empty. Add some courses from below to checkout.
          </div>
        ) : (
          <div className="flex flex-col rounded-md bg-gray-200 p-4">
            {cart.map((crs) => (
              <p key={`${crs.dept}-${crs.number}`}>
                <span className="font-semibold">
                  {crs.dept} {crs.number}
                </span>
                : {crs.title}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartView;
