import type { Course } from "~/utils/types";

const CartView = ({ cart }: { cart: Course[] }) => {
  const cartEmpty = cart.length === 0;

  return (
    <div className="flex justify-end gap-3">
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex flex-col items-center space-y-2 md:items-end">
          <h3 className="text-xl font-semibold leading-none">Current cart</h3>
          <p className="text-center md:text-right">
            When you feel ready, head over to checkout to finalize your courses.
            Note that you can only have seven courses in your cart at a time.
          </p>
          <button
            disabled={cartEmpty}
            className="w-[300px] rounded-full bg-gray-500 py-1.5 font-semibold text-white hover:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-500"
          >
            Checkout!
          </button>
        </div>
        {cartEmpty ? (
          <div className="flex items-center justify-center rounded-md bg-gray-200 p-4 text-gray-500">
            Currently empty! Add some courses from below to checkout.
          </div>
        ) : (
          <div className="flex flex-col rounded-md bg-gray-200 p-4">
            {cart.map((crs) => (
              <p>
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
