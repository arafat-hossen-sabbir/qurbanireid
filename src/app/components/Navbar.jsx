import Link from "next/link";
import { FaLeaf } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <FaLeaf className="text-green-600" />
          <span className="text-xl font-bold text-green-700">
            QurbaniHat
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="font-medium text-gray-700 hover:text-green-600"
          >
            Home
          </Link>

          <Link
            href="/animals"
            className="font-medium text-gray-700 hover:text-green-600"
          >
            All Animals
          </Link>
        </div>

        {/* Auth buttons */}
        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="rounded-lg border border-green-600 px-4 py-2 text-sm font-medium text-green-600 hover:bg-green-50"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;