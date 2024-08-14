import { useQuery } from "@tanstack/react-query";
import Product from "./Product";
import "./Products.css";
async function fetchProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const result = await fetch(
          "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
        );

        if (!result.ok) {
          throw new Error("Fetching products error");
        }

        resolve(result.json());
      } catch (error) {
        reject(error);
      }
    }, 2000);
  });
}

// eslint-disable-next-line react/prop-types
function Products({ currentTab }) {
  const results = useQuery({ queryKey: ["products"], queryFn: fetchProducts });

  if (results.isLoading)
    return (
      <div>
        <span className="loader"></span>
      </div>
    );
  if (results.error) return <div>Error</div>;

  let filteredProducts;
  switch (currentTab) {
    case "Available":
      filteredProducts = results.data.filter(
        (product) => product.available === true
      );
      break;
    default:
      filteredProducts = results.data;
  }

  return (
    <ul className="products__grid">
      {filteredProducts.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          image={product.image}
          popular={product.popular}
          price={product.price}
          rating={product.rating}
          votes={product.votes}
          available={product.available}
        />
      ))}
    </ul>
  );
}

export default Products;
