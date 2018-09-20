import React from "react";
import Card from "./Card";
const CardList = props => {
  return (
    <div>
      {props.cards.map(card => (
        <Card key={card.id} {...card} />
        // {...card} will "spread" the properties from the card data
        // to the card properties
      ))}
    </div>
  );
};

export default CardList;
