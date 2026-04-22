import React, { useState } from "react";
import items from "../data/items.json";
import "../styles/search.css";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  // Filtered results computed dynamically
  const filtered = query
    ? items.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
  <div className="position-relative w-100">
    <input
      type="text"
      className="form-control"
      placeholder="Search for places..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      autoComplete="off"
    />

    {filtered.length > 0 && (
      <div className="search-dropdown shadow-sm">
        {filtered.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="dropdown-item-custom"
          >
            {item.name}
          </a>
        ))}
      </div>
    )}
  </div>
);
}