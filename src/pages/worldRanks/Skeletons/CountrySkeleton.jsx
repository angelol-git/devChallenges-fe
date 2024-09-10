import { Link, useParams } from "react-router-dom";
import MainLayout from "../../../layouts/worldRanks/MainLayout.jsx";
import "../Country.css";
import "./CountrySkeleton.css";
function CountrySkeleton() {
  const params = useParams();

  return (
    <MainLayout>
      <Link className="wr__country-link" to={"/countryTable"}>
        Back
      </Link>
      <div className="wr__country-container">
        <div className="wr__country-top">
          <span className="wr__country-flag wr__country-flag-skeleton skeleton"></span>
          <h1 className="wr__country-name-common">{params.name}</h1>
          <span className="wr__country-name-official wr__country-name-official-skeleton skeleton"></span>
        </div>
        <div className="wr__country-top-row">
          <div className="wr__country-info-container">
            <div>Population</div>
            <span className="wr__country-divider">|</span>
            <div className="wr__country-name-value-skeleton skeleton"></div>
          </div>
          <div className="wr__country-info-container">
            <div>
              Area(km<sup>2</sup>)
            </div>
            <span className="wr__country-divider">|</span>
            <div className="wr__country-name-value-skeleton skeleton"></div>
          </div>
        </div>
        <ul className="wr__country-list">
          <li className="wr__country-list-item">
            <div className="wr__country-list-title">Capital</div>
            <div className="wr__country-name-value-skeleton skeleton"></div>
          </li>
          <li className="wr__country-list-item">
            <div className="wr__country-list-title">Subregion</div>

            <div className="wr__country-name-value-skeleton skeleton"></div>
          </li>
          <li className="wr__country-list-item">
            <div className="wr__country-list-title">Language</div>

            <div className="wr__country-name-value-skeleton skeleton"></div>
          </li>
          <li className="wr__country-list-item">
            <div className="wr__country-list-title">Currencies</div>

            <div className="wr__country-name-value-skeleton skeleton"></div>
          </li>
          <li className="wr__country-list-item">
            <div className="wr__country-list-title">Continents</div>
            <div className="wr__country-name-value-skeleton skeleton"></div>
          </li>
        </ul>
      </div>
    </MainLayout>
  );
}

export default CountrySkeleton;
