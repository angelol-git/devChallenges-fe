import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  document.body.style = "background: #FAFAF9";
  return (
    <main className="main-container">
      <section className="home-container">
        <h1 className="home-header-1">devChallenges.io</h1>
        <a href="https://www.angelol.dev">Home</a>
        <h2 className="home-header-2">Frontend Developer</h2>
        <ul className="home-list">
          <li>
            <Link to="./simpleCoffee">Simple Coffee Listing</Link>
            <span className="font-small">
              - React, Creating and styling components, API and React Query
            </span>
          </li>
          <li>
            <Link to="./Translate">Translate</Link>
            <span className="font-small">
              - React, Text to Speech, Clipboard and modal, React Forms
            </span>
          </li>
          <li>
            <Link to="./gitHubProfile">GitHub Profile</Link>
            <span className="font-small">
              - React, fetch multiple queries and skeleton loading
            </span>
          </li>
          <li>
            <Link to="./countryTable">World Ranks</Link>
            <span className="font-small">
              - Pagination, filtering, multiple pages, url params
            </span>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Home;
