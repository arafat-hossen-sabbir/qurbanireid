import Image from "next/image";
import Link from "next/link";

const AnimalCard = ({ animal }) => {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

      <div className="relative h-56 w-full">
        <Image
          src={animal.image}
          alt={animal.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-bold text-gray-800">
              {animal.name}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              {animal.breed} • {animal.location}
            </p>
          </div>

          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            {animal.category}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-lg bg-gray-50 p-3">
            <p className="text-gray-500">Weight</p>
            <p className="font-semibold">{animal.weight} kg</p>
          </div>

          <div className="rounded-lg bg-gray-50 p-3">
            <p className="text-gray-500">Age</p>
            <p className="font-semibold">{animal.age}</p>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <p className="text-xl font-bold text-green-700">
            ৳{animal.price.toLocaleString()}
          </p>

          <Link
            href={`/details-page?id=${animal.id}`}
            className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;