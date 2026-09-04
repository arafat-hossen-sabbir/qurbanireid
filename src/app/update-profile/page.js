"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { auth } from "../firebase/firebase.config";

export default function UpdateProfilePage() {
  const router = useRouter();

  const [authUser, setAuthUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setAuthUser(currentUser);
        setName(currentUser.displayName || "");
        setPhotoURL(currentUser.photoURL || "");
      } else {
        setAuthUser(null);
        router.push("/login");
      }
      setAuthLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });
      toast.success("Profile updated successfully!");
      router.push("/my-profile");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-4">
        <p className="text-gray-500">Loading...</p>
      </main>
    );
  }

  if (!authUser) {
    return null;
  }

  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-sm md:p-10">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
          Update Information
        </h2>

        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className=" text-black w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none"
              placeholder="Photo URL"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" text-black w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-green-500 focus:outline-none"
              placeholder="Your Name"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700 disabled:opacity-60"
          >
            {loading ? "Updating..." : "Update Information"}
          </button>
        </form>
      </div>
    </main>
  );
}
