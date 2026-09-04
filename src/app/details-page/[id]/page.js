"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { animals } from "../../data/animals";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { useEffect } from "react";


const [user, setUser] = useState(null);
const [authLoading, setAuthLoading] = useState(true);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setAuthLoading(false);
  });

  return () => unsubscribe();
}, []);

const DetailsPage = ({ params }) => {
  const { id } = params;

  const animal = animals.find((item) => item.id === Number(id));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  if (!animal) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Animal Not Found</h1>

          <p className="mt-3 text-gray-500">
            Sorry, the animal you are looking for does not exist.
          </p>

          <Link
            href="/animals"
            className="mt-6 inline-block rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
          >
            Back to Animals
          </Link>
        </div>
      </main>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  if (!user) {
    toast.error("Please login first to book this animal.");
    return;
  }
  const handleBooking = (e) => {
    e.preventDefault();

    toast.success(`Booking request submitted for ${animal.name}!`);


    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  return (
    <main className="bg-gray-50 px-4 py-10 md:py-14">
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:text-green-600">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/animals" className="hover:text-green-600">
            Animals
          </Link>{" "}
          / {animal.name}
        </div>

        {/* Animal Details */}
        <div className="grid gap-8 rounded-2xl bg-white p-5 shadow-sm md:grid-cols-2 md:p-8">
          {/* Image */}
          <div className="relative h-[350px] overflow-hidden rounded-xl md:h-[500px]">
            <Image
              src={animal.image}
              alt={animal.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Information */}
          <div>
            <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
              {animal.category}
            </span>

            <h1 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
              {animal.name}
            </h1>

            <p className="mt-2 text-gray-500">
              {animal.breed} • {animal.location}
            </p>

            <p className="mt-6 text-3xl font-bold text-green-600">
              ৳{animal.price.toLocaleString()}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Animal Type</p>
                <p className="mt-1 font-semibold">{animal.type}</p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Breed</p>
                <p className="mt-1 font-semibold">{animal.breed}</p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Weight</p>
                <p className="mt-1 font-semibold">{animal.weight}</p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Age</p>
                <p className="mt-1 font-semibold">{animal.age}</p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Location</p>
                <p className="mt-1 font-semibold">{animal.location}</p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Category</p>
                <p className="mt-1 font-semibold">{animal.category}</p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900">Description</h2>

              <p className="mt-3 leading-7 text-gray-600">
                {animal.description}
              </p>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <div className="mt-10 rounded-2xl bg-white p-5 shadow-sm md:p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Book This Animal
            </h2>

            <p className="mt-2 text-gray-500">
              Fill in your information to submit a booking request.
            </p>
          </div>

          <form onSubmit={handleBooking} className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="01XXXXXXXXX"
                required
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Address
              </label>

              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                required
                className="w-full rounded-lg border px-4 py-3 outline-none focus:border-green-600"
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                Submit Booking Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default DetailsPage;
