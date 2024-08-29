import Header from "../../components/Header";
import CountryList from "../../components/worldRanks/CountryList";
import heroImage from "../../assets/worldRanks/hero-image-wr.jpg";
import logoSvg from "../../assets/worldRanks/Logo.svg";
import "./WorldRanks.css";

function WorldRanks() {
  return (
    <div className="wr__container">
      <div className="wr__hero-image-wrapper">
        <img src={heroImage} className="wr__hero-image" />
      </div>
      <div className="wr__header-container">
        <Header />
        <div className="wr__header-logo-container">
          <img src={logoSvg} alt="chart company logo" />
          <CountryList />
        </div>
      </div>
      <main></main>
    </div>
  );
}

export default WorldRanks;
