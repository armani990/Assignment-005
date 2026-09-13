import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import TechnologyCard from "./components/TechnologyCard";
import YourStack from "./components/YourStack";
import type { Technology } from "./types/technology";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data))
      .catch((error) => {
        console.error("Failed to load technologies:", error);
      });
  }, []);

  const handleAdd = (tech: Technology) => {
    setStack((prev) => [...prev, tech]);
  };

  const handleRemove = (id: string) => {
    setStack((prev) => prev.filter((t) => t.id !== id));
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <>
      <Navbar />
      <Banner />

      <section id="technologies" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Explore the{" "}
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-500">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            {/* Technology Cards */}
            <div className="lg:col-span-3 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {technologies.map((tech) => (
                <TechnologyCard
                  key={tech.id}
                  tech={tech}
                  isAdded={stack.some((item) => item.id === tech.id)}
                  onAdd={handleAdd}
                />
              ))}
            </div>

            {/* Your Stack Sidebar */}
            <div className="lg:col-span-1">
              <YourStack
                stack={stack}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;