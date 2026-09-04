import AnimalCard from "./components/AnimalCard";
import animals from "./data/animals";

const Home = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-green-700">
          QurbaniHat Animals
        </h1>

        <p className="mt-3 text-gray-600">
          Find healthy and trusted livestock for your Qurbani.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </section>
  );
};

export default Home;
