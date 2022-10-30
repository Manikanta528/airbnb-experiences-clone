import React from "react";
import Star from "../images/Star.svg";

export default function Card(props) {
  let openSpotsText;
  if (props.item.openSpots === 0) {
    openSpotsText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    openSpotsText = "ONLINE";
  }
  console.log(props);
  return (
    <div className="card">
      {openSpotsText && <div className="card-open-spots">{openSpotsText}</div>}
      <img
        className="card-img"
        src={`../images/${props.item.coverImg}`}
        alt="card-img"
      />
      <div className="card-info">
        <div>
          <img src={Star} alt="star" />
          <span> {props.item.stats.rating} </span>
          <span className="card-info-lite">
            ({props.item.stats.reviewCount}) . {props.item.location}
          </span>
        </div>
        <p className="card-info-text">{props.item.title}</p>
        <p className="card-info-text">
          <b>From ${props.item.price}</b> / person
        </p>
      </div>
    </div>
  );
}
