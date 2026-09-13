import type { Technology } from "../types/technology";

interface Props {
  tech: Technology;
  isAdded: boolean;
  onAdd: (tech: Technology) => void;
}

const TechnologyCard = ({ tech, isAdded, onAdd }: Props) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-10 h-10 object-contain"
        />

        {tech.badge && (
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-100">
            {tech.badge}
          </span>
        )}
      </div>

      <h3 className="text-lg font-semibold text-gray-900">
        {tech.name}
      </h3>

      <p className="mt-2 text-sm text-gray-500 leading-relaxed flex-1">
        {tech.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
        <span className="px-2.5 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-100">
          {tech.category}
        </span>

        <span className="px-2.5 py-1 rounded-full bg-gray-50 text-gray-600 border border-gray-100">
          {tech.difficulty}
        </span>

        <span className="flex items-center gap-1 text-amber-500 font-medium">
          ★ {tech.rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`mt-5 w-full py-2.5 rounded-lg text-sm font-semibold transition ${
          isAdded
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;