import React, { useState } from "react";

export const Search = () => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchText("");
  };

  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
        <p>Search Bar</p>
        <label htmlFor="search"></label>
        <input
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          name="search"
          required
          id="search"
          placeholder="e.g Galaxy"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};
