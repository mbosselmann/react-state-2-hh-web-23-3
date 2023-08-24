export default function SearchForm() {
  const searchTerm = "";

  function handleSubmit(event) {
    event.preventDefault();

    console.log("submit");
  }

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="searchTerm">Search term:</label>
        <input name="searchTerm" id="searchTerm" type="text" />
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
