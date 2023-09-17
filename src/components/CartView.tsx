import type { Course } from "~/utils/types";

const CartView = ({ cart }: { cart: Course[] }) => {
  return (
    <div className="flex justify-end gap-3">
      <div className="flex w-full flex-col md:w-1/2">
        <h3>Your cart</h3>
        <div className="rounded-md bg-gray-200 p-4">{cart.length}</div>
      </div>
    </div>
  );
};

export default CartView;
