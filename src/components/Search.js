import React, { useState } from "react";

export const Search = () => {
  const [searchText, setSearchText] = useState("");

  // Submit searchText to NASA and clear search input.
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchText("");
  };

  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          name="search"
          required
          id="search"
          placeholder="e.g Galaxy"
        />
        <button className="bg-gray-900 my-2 text-gray-50 px-2 py-1 rounded-md" type="submit">
          Search
        </button>
      </form>
    </section>
  );
};
