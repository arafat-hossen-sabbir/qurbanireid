"use client";

import { useState } from "react";
import AnimalCard from "../components/AnimalCard";
import animals from "../data/animals";

const AnimalsPage = () => {
  const [sortOrder, setSortOrder] = useState("default");

  const sortedAnimals = [...animals].sort((a, b) => {
    if (sortOrder === "low-high") {
      return a.price - b.price;
    }

    if (sortOrder === "high-low") {
      return b.price - a.price;
    }

    return 0;
  });

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      {/* Header */}
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="font-semibold text-green-600">OUR LIVESTOCK</p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">All Animals</h1>

          <p className="mt-3 max-w-2xl text-gray-600">
            Explore our collection of healthy livestock and find the right
            animal for your Qurbani.
          </p>
        </div>

        {/* Sorting */}
        <div className="flex items-center gap-3">
          <label htmlFor="sort" className="text-sm font-medium text-gray-700">
            Sort by:
          </label>

          <select
            id="sort"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
          >
            <option value="default">Default</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Animal count */}
      <div className="mt-8 rounded-xl bg-green-50 px-5 py-4">
        <p className="text-sm text-green-800">
          Showing <span className="font-bold">{sortedAnimals.length}</span>{" "}
          available animals
        </p>
      </div>

      {/* Animals */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </main>
  );
};

export default AnimalsPage;
