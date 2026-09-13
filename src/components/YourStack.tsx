import type { Technology } from "../types/technology";

interface Props {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const YourStack = ({ stack, onRemove, onRemoveAll }: Props) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm sticky top-24">
      <h3 className="text-lg font-semibold text-gray-900">Your Stack</h3>
      <p className="text-sm text-gray-500 mt-1">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology Selected`}
      </p>

      <div className="mt-4 space-y-3 min-h-[140px]">
        {stack.length === 0 ? (
          <div className="border-2 border-dashed border-gray-200 rounded-xl py-10 text-center text-gray-400 text-sm">
            Your stack is empty.
          </div>
        ) : (
          stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-gray-50"
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-8 h-8 object-contain"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {item.name}
                </p>
                <p className="text-xs text-gray-500">{item.category}</p>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-gray-400 hover:text-red-500 transition text-xl leading-none"
                aria-label="Remove"
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>

      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-4 w-full py-2.5 rounded-lg border border-red-200 text-red-500 text-sm font-medium hover:bg-red-50 transition"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default YourStack;