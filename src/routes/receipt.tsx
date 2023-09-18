import { Link, useLoaderData, type LoaderFunction } from "react-router-dom";
import Header from "../components/header";

export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url);

  // here, we only check for query parameters "1" to "7" inclusive. if we wanted
  // to be even more secure, we would request what courses were checked out from
  // the server so that users can't manipulate the URL.
  const courses: string[] = [];
  for (let i = 1; i < 8; i++) {
    const value = url.searchParams.get(`${i}`);

    if (value) {
      courses.push(value);
    }
  }
  return courses;
};

const Receipt = () => {
  const courses = useLoaderData() as string[];

  return (
    <>
      <Header />
      <main className="flex flex-col items-center space-y-10 p-8">
        <div className="flex flex-col items-center space-y-2">
          <h3 className="text-2xl font-semibold">Checkout complete. 🎉</h3>
          <p>Here's a receipt of the classes you've checked out today.</p>
        </div>
        <div className="flex w-[500px] flex-col rounded-xl bg-gray-200 p-6">
          {courses.map((crs) => (
            <p key={crs}>{crs}</p>
          ))}
        </div>
        <Link to="/">
          <button className="rounded-full bg-sky-500 px-4 py-3 font-semibold text-white hover:bg-sky-600 hover:underline">
            Check out other classes
          </button>
        </Link>
        <p className="italic">Thanks for using Penn Course Cart!</p>
      </main>
    </>
  );
};

export default Receipt;
