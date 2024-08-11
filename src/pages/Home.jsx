import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <main className="main-container">
      <section className="home-container">
        <h1 className="home-header-1">devChallenges.io</h1>
        <h2 className="home-header-2">Frontend Developer</h2>
        <ul className="home-list">
          <li>
            <Link to="./simpleCoffee">Simple Coffee Listing</Link>
            <span className="font-small">
              - React, Creating and styling components
            </span>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Home;
