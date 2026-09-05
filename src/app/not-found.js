import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <p className="text-7xl font-black text-green-600">404</p>

        <h1 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
          Oops! Page Not Found
        </h1>

        <p className="mt-4 leading-7 text-gray-500">
          The page you are looking for may have been moved, deleted, or does not
          exist.
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Back to Home
          </Link>

          <Link
            href="/animals"
            className="rounded-lg border px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            Browse Animals
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
