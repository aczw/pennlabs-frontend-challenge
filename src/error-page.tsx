import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center space-y-4">
      <img
        src="/logo.png"
        width="80"
      />
      <div className="flex flex-col items-center">
        Oops! An error occurred.
        <a
          href="/"
          className="font-semibold underline"
        >
          Go back?
        </a>
      </div>
    </main>
  );
};

export default ErrorPage;
