import "./SearchForm.css";
import searchSvg from "../../assets/githubProfile/Search.svg";
// eslint-disable-next-line react/prop-types
function SearchForm({ handleSubmit }) {
  return (
    <form className="gh__search-form-container" onSubmit={handleSubmit}>
      <div className="gh__search-form-row">
        <img src={searchSvg} className="" alt="magnifying glass"></img>
        <input
          type="text"
          className="gh__username-input"
          placeholder="username"
        />
      </div>
    </form>
  );
}

export default SearchForm;
