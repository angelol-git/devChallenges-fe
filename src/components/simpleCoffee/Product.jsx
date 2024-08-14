import "./Product.css";
import starSvg from "../../assets/simpleCoffee/Star_fill.svg";
function Product(props) {
  // eslint-disable-next-line react/prop-types
  const { name, image, popular, price, rating, votes, available } = props;

  return (
    <li className="product">
      <div className="product__image-container">
        <img
          src={image}
          className="product__image"
          height={160}
          width={260}
          loading="lazy"
          alt="test test"
        />
        {popular ? <span className="product__popular">Popular</span> : null}
      </div>
      <div className="product__row">
        <h2 className="product__name">{name}</h2>
        <div className="product__price">{price}</div>
      </div>
      <div className="product__row">
        <div className="product__price-row">
          <img src={starSvg} />
          <span className="product__rating">{rating}</span>
          <span className="product__votes">({votes})votes</span>
        </div>
        {available ? null : <span className="product__soldOut">Sold out</span>}
      </div>
    </li>
  );
}

export default Product;
