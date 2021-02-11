import Product from "./components/Product";
import data from "./data";

function App() {
  return (
    <div class="grid-container">
      <header class="row">
        <div>
          <a class="brand" href="index.html">
            E-commerce
          </a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
        <div class="row center">
          {data.products.map((product) => (
            <Product product={product} />
          ))}
        </div>
      </main>
      <footer class="row center">All rights reserved</footer>
    </div>
  );
}

export default App;
