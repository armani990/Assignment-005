import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import TechnologyCard from "./components/TechnologyCard";
import YourStack from "./components/YourStack";
import type { Technology } from "./types/technology";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 400));
        const res = await fetch("/technologies.json");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setTechnologies(data);
      } catch (error) {
        console.error("Failed to load technologies:", error);
        toast.error("Failed to load technologies");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleAdd = (tech: Technology) => {
    const alreadyAdded = stack.some((item) => item.id === tech.id);

    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }

    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to stack!`);
  };

  const handleRemove = (id: string) => {
    const item = stack.find((t) => t.id === id);
    setStack((prev) => prev.filter((t) => t.id !== id));
    if (item) {
      toast.info(`${item.name} removed from stack`);
    }
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("All technologies removed from stack");
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

          {loading ? (
            <div className="py-20 text-center">
              <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-pink-500 border-t-transparent"></div>
              <p className="mt-4 text-gray-500">Loading technologies...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
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

              <div className="lg:col-span-1">
                <YourStack
                  stack={stack}
                  onRemove={handleRemove}
                  onRemoveAll={handleRemoveAll}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        theme="light"
      />
    </>
  );
}

export default App;