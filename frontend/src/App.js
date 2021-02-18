import { useSelector } from "react-redux";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import CarScreen from "./screens/CarScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import SigninScreen from "./screens/SigninScreen";

function App() {
  const car = useSelector((state) => state.car);
  const { carItems } = car;
  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              E-commerce
            </Link>
          </div>
          <div>
            <Link to="/car">
              Car
              {carItems.length > 0 && (
                <span className="badge">{carItems.length}</span>
              )}
            </Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Route path="/car/:id?" component={CarScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/signin" component={SigninScreen} />
          <Route path="/" exact component={HomeScreen} />
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </Router>
  );
}

export default App;
