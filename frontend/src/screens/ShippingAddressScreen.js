import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/carActions";
import CheckoutSteps from "../components/CheckoutSteps";

export default function ShippingAddressScreen(props) {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const car = useSelector((state) => state.car);
  const { shippingAddress } = car;

  if (!userInfo) {
    props.history.push("/signin ");
  }

  const [fullName, setFullName] = useState(shippingAddress.fullName);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ fullName, address, city, postalCode, country })
    );
    props.history.push("/payment");
  };

  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Shipping Adress</h1>
        </div>
        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            id="fullName"
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter full name"
            required
            type="text"
            value={fullName}
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            id="address"
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter address"
            required
            type="text"
            value={address}
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            id="city"
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city"
            required
            type="text"
            value={city}
          />
        </div>
        <div>
          <label htmlFor="postalCode">Postal Code</label>
          <input
            id="postalCode"
            onChange={(e) => setPostalCode(e.target.value)}
            placeholder="Enter postalCode"
            required
            type="text"
            value={postalCode}
          />
        </div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            id="country"
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Enter country"
            required
            type="text"
            value={country}
          />
        </div>
        <div>
          <label />
          <button type="submit" className="primary">
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
