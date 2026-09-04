import Image from "next/image";
import Link from "next/link";
import animals from "../../data/animals";

const DetailsPage = async ({ params }) => {
  const { id } = await params;

  const animal = animals.find((item) => item.id === Number(id));

  if (!animal) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Animal Not Found</h1>

        <p className="mt-4 text-gray-600">
          Sorry, the animal you are looking for does not exist.
        </p>

        <Link
          href="/animals"
          className="mt-6 inline-block rounded-lg bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700"
        >
          Back to Animals
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      {/* Breadcrumb */}
      <div className="mb-8 text-sm text-gray-500">
        <Link href="/" className="hover:text-green-600">
          Home
        </Link>

        <span className="mx-2">/</span>

        <Link href="/animals" className="hover:text-green-600">
          Animals
        </Link>

        <span className="mx-2">/</span>

        <span>{animal.name}</span>
      </div>

      {/* Details */}
      <div className="grid overflow-hidden rounded-3xl border bg-white shadow-sm md:grid-cols-2">
        {/* Image */}
        <div className="relative min-h-[350px] md:min-h-[550px]">
          <Image
            src={animal.image}
            alt={animal.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Information */}
        <div className="p-6 md:p-10">
          <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            {animal.category}
          </span>

          <h1 className="mt-5 text-3xl font-bold text-gray-900 md:text-4xl">
            {animal.name}
          </h1>

          <p className="mt-3 text-gray-500">
            {animal.breed} • {animal.location}
          </p>

          <div className="mt-8">
            <p className="text-sm text-gray-500">Price</p>

            <p className="mt-1 text-4xl font-extrabold text-green-700">
              ৳{animal.price.toLocaleString()}
            </p>
          </div>

          {/* Information Grid */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-sm text-gray-500">Animal Type</p>

              <p className="mt-1 font-bold text-gray-800">{animal.type}</p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-sm text-gray-500">Breed</p>

              <p className="mt-1 font-bold text-gray-800">{animal.breed}</p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-sm text-gray-500">Weight</p>

              <p className="mt-1 font-bold text-gray-800">{animal.weight} kg</p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-sm text-gray-500">Age</p>

              <p className="mt-1 font-bold text-gray-800">{animal.age}</p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-sm text-gray-500">Location</p>

              <p className="mt-1 font-bold text-gray-800">{animal.location}</p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-sm text-gray-500">Category</p>

              <p className="mt-1 font-bold text-gray-800">{animal.category}</p>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-900">
              About This Animal
            </h2>

            <p className="mt-3 leading-7 text-gray-600">{animal.description}</p>
          </div>

          {/* Booking Button */}
          <button
            type="button"
            className="mt-8 w-full rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Book This Animal
          </button>
        </div>
      </div>
    </main>
  );
};

export default DetailsPage;
