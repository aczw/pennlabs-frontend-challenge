import { Link } from "react-router-dom";
import Header from "../components/header";

const Receipt = () => {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center space-y-10 p-8">
        <div className="flex flex-col items-center space-y-2">
          <h3 className="text-2xl font-semibold">Checkout complete. 🎉</h3>
          <p>Here's a receipt of the classes you've checked out today.</p>
        </div>
        <div className="w-[500px] rounded-xl bg-gray-200 p-10">sex</div>
        <Link to="/">
          <button className="rounded-full bg-sky-500 px-4 py-3 font-semibold text-white hover:bg-sky-600 hover:underline">
            Check out other classes!
          </button>
        </Link>
      </main>
    </>
  );
};

export default Receipt;
