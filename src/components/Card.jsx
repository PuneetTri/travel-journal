import React from "react";
import Pin from "../assets/pin.svg";

export default function Card(props) {
  return (
    <section className="card">
      <img className="card-img" src={props.item.imageUrl} />

      <div className="card-details">
        <div className="card-location">
          <img className="card-pin" src={Pin} />
          <p className="card-country">{props.item.location}</p>
          <a href={props.item.googleMapsUrl}>
            <p className="card-map-link">View on Google Maps</p>
          </a>
        </div>

        <h3 className="card-pointOfInetrest">{props.item.title}</h3>

        <p className="card-date">{`${props.item.startDate} - ${props.item.startDate}`}</p>

        <p className="card-about">{props.item.description}</p>
      </div>
    </section>
  );
}
