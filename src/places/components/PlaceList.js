import React from "react";

import Card from "../../shared/components/UIElements/Card/Card";

import "./PlaceList.css";
import PlaceItem from "./PlaceItem";
const PlaceList = props => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found</h2>
          <button>Create Place</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map(place => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creator={place.creator}
          coordinates={place.location}
        ></PlaceItem>
      ))}
    </ul>
  );
};

export default PlaceList;
