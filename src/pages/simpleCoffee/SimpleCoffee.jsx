import { useState } from "react";
import Header from "../../components/Header";
import Products from "../../components/simpleCoffee/Products";
import "./SimpleCoffee.css";
import "../../assets/styles/reset.css";

function SimpleCoffee() {
  const [currentTab, setCurrentTab] = useState("All");

  return (
    <div className="simple__coffee-container">
      <Header />
      <div className="background__image-container">
        <img
          src="./simpleCoffee/bg-cafe.jpg"
          alt="decoration"
          className="background__image"
        ></img>
      </div>

      <main className="main__wrapper">
        <div className="main__container">
          <div className="info__container">
            <h1 className="info__header">Our Collection</h1>
            <p className="info__text">
              Introducing our Coffee Collection, a selection of unique coffees
              from different roast types and origins, expertly roasted in small
              batches and shipped fresh weekly.
            </p>
            <div className="info__button-row">
              <button
                className={`info__button ${
                  currentTab === "All" ? "active" : ""
                }`}
                onClick={() => {
                  setCurrentTab("All");
                }}
              >
                All Products
              </button>
              <button
                className={`info__button ${
                  currentTab === "Available" ? "active" : ""
                }`}
                onClick={() => {
                  setCurrentTab("Available");
                }}
              >
                Available Now
              </button>
            </div>
          </div>
          <div className="product__container">
            <Products currentTab={currentTab} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default SimpleCoffee;
