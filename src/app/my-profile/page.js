"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "../firebase/firebase.config";

const MyProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-4">
        <p className="text-gray-500">Loading profile...</p>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Login Required</h1>

          <p className="mt-3 text-gray-500">
            Please login to view your profile.
          </p>

          <Link
            href="/login"
            className="mt-6 inline-block rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Login
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gray-50 px-4 py-12 md:py-16">
      <div className="mx-auto max-w-3xl">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            My Profile
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your QurbaniHat account information
          </p>
        </div>

        {/* Profile Card */}
        <div className="rounded-2xl bg-white p-6 shadow-sm md:p-10">
          {/* Profile Image */}
          <div className="flex flex-col items-center">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-green-100">
              {user.photoURL ? (
                <Image
                  src={user.photoURL}
                  alt={user.displayName || "Profile"}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-green-100 text-4xl font-bold text-green-700">
                  {user.displayName?.charAt(0)?.toUpperCase() || "U"}
                </div>
              )}
            </div>

            <h2 className="mt-5 text-2xl font-bold text-gray-900">
              {user.displayName || "User"}
            </h2>

            <p className="mt-1 text-gray-500">{user.email}</p>
          </div>

          {/* User Information */}
          <div className="mt-10 space-y-5">
            <div className="rounded-xl bg-gray-50 p-5">
              <p className="text-sm text-gray-500">Full Name</p>

              <p className="mt-1 font-semibold text-gray-900">
                {user.displayName || "Not provided"}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-5">
              <p className="text-sm text-gray-500">Email Address</p>

              <p className="mt-1 font-semibold text-gray-900">{user.email}</p>
            </div>

            <div className="rounded-xl bg-gray-50 p-5">
              <p className="text-sm text-gray-500">Account Status</p>

              <p className="mt-1 font-semibold text-green-600">Active</p>
            </div>
          </div>

          {/* Update Button */}
          <div className="mt-8">
            <Link
              href="/update-profile"
              className="block w-full rounded-lg bg-green-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-green-700"
            >
              Update Information
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyProfilePage;
