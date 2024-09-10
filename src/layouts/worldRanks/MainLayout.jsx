import Header from "../../components/Header";
import heroImage from "../../assets/worldRanks/hero-image-wr.jpg";
import logoSvg from "../../assets/worldRanks/Logo.svg";
import "./MainLayout.css";

// eslint-disable-next-line react/prop-types
function MainLayout({ children }) {
  document.body.style = "background: #1B1D1F";
  return (
    <div className="wr__container">
      <div className="wr__hero-container">
        <img src={heroImage} className="wr__hero-image" />
        <div className="wr__header-container">
          <Header />
          <div className="wr__header-logo-container">
            <img src={logoSvg} alt="chart company logo" />
          </div>
        </div>
      </div>
      <main className="wr__main-wrapper">
        <div className="wr__main-container">{children}</div>
      </main>
    </div>
  );
}

export default MainLayout;
