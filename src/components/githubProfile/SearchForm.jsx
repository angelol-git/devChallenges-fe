import "./SearchForm.css";
import searchSvg from "../../assets/githubProfile/Search.svg";
function SearchForm() {
  return (
    <form className="gh__search-form-container">
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
