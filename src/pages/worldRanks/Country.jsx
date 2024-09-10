import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchCountry from "../../utils/worldRanks/fetchCountry.js";
import MainLayout from "../../layouts/worldRanks/MainLayout.jsx";
import "./Country.css";
function Country() {
  let params = useParams();

  const countryResult = useQuery({
    queryKey: [params],
    queryFn: () => fetchCountry(params.name),
    retry: false,
  });

  if (countryResult.isLoading) {
    return <div> Loading...</div>;
  }

  if (countryResult.isError) {
    return <div> Error fetching data</div>;
  }

  function printMultiple(object) {
    const arrayString = [];
    Object.values(object).map((item) => {
      arrayString.push(item.name);
    });

    return arrayString.join(",");
  }
  return (
    <MainLayout>
      <div className="wr__country-container">
        <div className="wr__country-top">
          <span className="wr__country-flag">{countryResult.data[0].flag}</span>
          <h1 className="wr__country-name-common">
            {countryResult.data[0].name.common}
          </h1>
          <span>{countryResult.data[0].name.official}</span>
        </div>
        <div className="wr__country-top-row">
          <div className="wr__country-info-container">
            <div>Population</div>
            <span className="wr__country-divider">|</span>
            <div>{countryResult.data[0].population}</div>
          </div>
          <div className="wr__country-info-container">
            <div>
              Area(km<sup>2</sup>)
            </div>
            <span className="wr__country-divider">|</span>
            <div>{countryResult.data[0].area}</div>
          </div>
        </div>
        <ul className="wr__country-list">
          <li className="wr__country-list-item">
            <div className="wr__country-list-title">Capital</div>
            <div>
              {countryResult.data[0].capital
                ? countryResult.data[0].capital
                : "none"}
            </div>
          </li>
          <li className="wr__country-list-item">
            <div className="wr__country-list-title">Subregion</div>
            <div>
              {countryResult.data[0].subregion
                ? countryResult.data[0].subregion
                : "none"}
            </div>
          </li>
          <li className="wr__country-list-item">
            <div className="wr__country-list-title">Language</div>
            <div>
              {countryResult.data[0].language
                ? countryResult.data[0].language
                : "none"}
            </div>
          </li>
          <li className="wr__country-list-item">
            <div className="wr__country-list-title">Currencies</div>
            <div>
              {countryResult.data[0].currencies
                ? printMultiple(countryResult.data[0].currencies)
                : "none"}
            </div>
          </li>{" "}
          <li className="wr__country-list-item">
            <div className="wr__country-list-title">Continents</div>
            <div>
              {countryResult.data[0].region
                ? countryResult.data[0].region
                : "none"}
            </div>
          </li>
        </ul>
      </div>
    </MainLayout>
  );
}
export default Country;
