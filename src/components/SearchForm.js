export default function SearchForm({ searchTerm, onSearch }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formElements = event.target;
    onSearch(formElements.searchTerm.value);
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
