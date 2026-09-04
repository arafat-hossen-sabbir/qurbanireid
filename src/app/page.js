import Image from "next/image";
import Link from "next/link";
import AnimalCard from "./components/AnimalCard";
import animals from "./data/animals";

const Home = () => {
  const featuredAnimals = animals.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-green-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">

          <div>
            <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              Trusted Livestock Marketplace
            </span>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
              Find the Perfect
              <span className="block text-green-700">
                Qurbani Animal
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-gray-600">
              Explore healthy and trusted livestock from different locations
              and choose the right animal for your Qurbani.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/animals"
                className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                Browse Animals
              </Link>

              <a
                href="#featured"
                className="rounded-xl border border-green-600 px-6 py-3 font-semibold text-green-700 transition hover:bg-green-100"
              >
                Explore Featured
              </a>
            </div>
          </div>

          <div className="relative h-72 overflow-hidden rounded-3xl shadow-lg md:h-96">
            <Image
              src={animals[0].image}
              alt="Qurbani animal"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute bottom-5 left-5 rounded-xl bg-white/95 px-5 py-3 shadow-lg">
              <p className="text-sm text-gray-500">
                Featured Animal
              </p>

              <p className="font-bold text-gray-800">
                {animals[0].name}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Animals */}
      <section
        id="featured"
        className="mx-auto max-w-7xl px-4 py-16"
      >
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-semibold text-green-600">
              OUR COLLECTION
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Featured Animals
            </h2>

            <p className="mt-2 text-gray-600">
              Carefully selected healthy animals for your Qurbani.
            </p>
          </div>

          <Link
            href="/animals"
            className="font-semibold text-green-700 hover:text-green-800"
          >
            View All →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredAnimals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </section>

      {/* Qurbani Tips */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="font-semibold text-green-600">
              QURBANI GUIDE
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-900">
              Qurbani Tips
            </h2>

            <p className="mt-3 text-gray-600">
              A few simple things to remember when choosing your Qurbani
              animal.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">🐄</div>

              <h3 className="mt-4 text-xl font-bold">
                Check Animal Health
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Choose an animal that looks healthy, active and properly
                maintained.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">⚖️</div>

              <h3 className="mt-4 text-xl font-bold">
                Check Age & Weight
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Consider the animal&apos;s age and weight before making your
                final decision.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-4xl">📍</div>

              <h3 className="mt-4 text-xl font-bold">
                Check Location
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Select an animal from a convenient location and confirm the
                available arrangements.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Top Breeds */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-10 text-center">
          <p className="font-semibold text-green-600">
            POPULAR CHOICES
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Top Breeds
          </h2>

          <p className="mt-3 text-gray-600">
            Explore some popular livestock breeds available on QurbaniHat.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-md">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
              🐄
            </div>

            <h3 className="mt-4 font-bold text-gray-900">
              Deshi Cow
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Hardy and locally popular
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-md">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
              🐄
            </div>

            <h3 className="mt-4 font-bold text-gray-900">
              Red Chittagong
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Famous Bangladeshi breed
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-md">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
              🐄
            </div>

            <h3 className="mt-4 font-bold text-gray-900">
              Friesian
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Large and strong cattle
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-md">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
              🐐
            </div>

            <h3 className="mt-4 font-bold text-gray-900">
              Black Bengal
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Popular goat breed
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-green-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">

            <div>
              <p className="font-semibold text-green-300">
                WHY QURBANIHAT?
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                A simpler way to find your Qurbani animal.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-green-100">
                We bring livestock information together in one convenient
                marketplace so you can compare animals and make an informed
                choice.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl bg-green-800 p-5">
                <h3 className="text-lg font-bold">
                  Healthy Animals
                </h3>

                <p className="mt-2 text-sm leading-6 text-green-100">
                  Browse detailed information about available livestock.
                </p>
              </div>

              <div className="rounded-2xl bg-green-800 p-5">
                <h3 className="text-lg font-bold">
                  Easy Comparison
                </h3>

                <p className="mt-2 text-sm leading-6 text-green-100">
                  Compare price, weight, breed, age and location.
                </p>
              </div>

              <div className="rounded-2xl bg-green-800 p-5">
                <h3 className="text-lg font-bold">
                  Simple Booking
                </h3>

                <p className="mt-2 text-sm leading-6 text-green-100">
                  Choose an animal and submit your booking information.
                </p>
              </div>

              <div className="rounded-2xl bg-green-800 p-5">
                <h3 className="text-lg font-bold">
                  User Friendly
                </h3>

                <p className="mt-2 text-sm leading-6 text-green-100">
                  Designed to work smoothly across different devices.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;