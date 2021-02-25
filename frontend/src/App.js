import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { signout } from "./actions/userActions";
import CarScreen from "./screens/CarScreen";
import HomeScreen from "./screens/HomeScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import ProductScreen from "./screens/ProductScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SigninScreen from "./screens/SigninScreen";

function App() {
  const car = useSelector((state) => state.car);
  const { carItems } = car;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const singoutHandler = () => {
    dispatch(signout());
  };

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
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <Link to="#signout" onClick={singoutHandler}>
                    Sign Out
                  </Link>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
          </div>
        </header>
        <main>
          <Route path="/car/:id?" component={CarScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/signin" component={SigninScreen} />
          <Route path="/shipping" component={ShippingAddressScreen} />
          <Route path="/payment" component={PaymentMethodScreen} />
          <Route path="/" exact component={HomeScreen} />
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </Router>
  );
}

export default App;
