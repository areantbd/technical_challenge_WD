import React from "react";
import { Link } from "react-router-dom";
import "./PhoneCard.css"

function PhoneCard({id, name, manufacturer, price, imageFileName }) {
  return (
    <div className="card mt-2 col-3">
      <img src={`../../assets/images/${imageFileName}`} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Fabricated by {manufacturer}.<br/>
          Price: {price}€
        </p>
        <Link to={`/phones/${id}`} className="btn btn-primary">
            Details
        </Link>
      </div>
    </div>
  );
}

export default PhoneCard;
