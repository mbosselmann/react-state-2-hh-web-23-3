import { useState } from "react";

export default function SearchForm({ searchTerm, onSearch }) {
  const [searchFieldValue, setSearchFieldValue] = useState("");

  console.log(searchFieldValue);
  function handleSubmit(event) {
    event.preventDefault();
    onSearch(searchFieldValue);
    console.log("submit");
  }

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="searchTerm">Search term:</label>
        <input
          name="searchTerm"
          id="searchTerm"
          type="text"
          value={searchFieldValue}
          onChange={(event) => setSearchFieldValue(event.target.value)}
        />
        <button>
          <span role="img" aria-label="search icon">
            🔍
          </span>{" "}
          Search
        </button>
      </form>
      <h2>
        {searchTerm
          ? `You searched for "${searchTerm}"`
          : "Please enter a search term"}
      </h2>
    </>
  );
}
