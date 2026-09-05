"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import toast from "react-hot-toast";

import { auth } from "../firebase/firebase.config";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully!");
      setMenuOpen(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-green-600"
            onClick={() => setMenuOpen(false)}
          >
            QurbaniHat
          </Link>

          {/* Desktop Navigation */}
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

            {user ? (
              <>
                <Link
                  href="/my-profile"
                  className="font-medium text-gray-700 hover:text-green-600"
                >
                  My Profile
                </Link>

                <button
                  onClick={handleLogout}
                  className="rounded-lg bg-red-500 px-4 py-2 font-medium text-white hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="font-medium text-gray-700 hover:text-green-600"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  className="rounded-lg bg-green-600 px-4 py-2 font-medium text-white hover:bg-green-700"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border px-3 py-2 text-gray-700 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t py-4 md:hidden">
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-green-50"
              >
                Home
              </Link>

              <Link
                href="/animals"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-green-50"
              >
                All Animals
              </Link>

              {user ? (
                <>
                  <Link
                    href="/my-profile"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-green-50"
                  >
                    My Profile
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="rounded-lg bg-red-500 px-4 py-3 text-left font-medium text-white hover:bg-red-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg px-4 py-3 font-medium text-gray-700 hover:bg-green-50"
                  >
                    Login
                  </Link>

                  <Link
                    href="/register"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-lg bg-green-600 px-4 py-3 font-medium text-white hover:bg-green-700"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
