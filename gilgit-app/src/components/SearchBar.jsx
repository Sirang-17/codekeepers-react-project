import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="flex gap-2 p-4">
      <input
        type="text"
        placeholder="Search products..."
        className="border p-2 w-full rounded"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 rounded"
      >
        Search
      </button>
    </div>
  );
}
