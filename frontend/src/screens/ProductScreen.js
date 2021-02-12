import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import data from "../data";

export default function ProductScreen(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  return (
    <div>
      <Link to="/"><i className="fa fa-angle-double-left"></i> Back To Results</Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.type} />
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h2>
                {product.type} {product.brand}
              </h2>
            </li>
            <li>
              <Rating rating={product.rating} numReviews={product.numReviews} />
            </li>
            <li>Price : ${product.price}</li>
            <li>
              Description:
              <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">${product.price}</div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {product.countInStock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="error">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button className="primary block">Add To Car</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
