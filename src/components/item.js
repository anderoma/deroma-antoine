import React, { useState } from "react";
import { useGrid } from "muuri-react";

// Item component.
export const Item = ({ id }) => {
  // State is manteined when an item change parent.


  // Simple example. This effect could also be done only with css rules.
  const tabClass = useGrid().id.toLowerCase() + "-tab-item";

  return (
    <div className="board-item">
      <div className="board-item-content">
        <span>Item </span>
        {id}
        {" - "}
        
        <div className={"tab-item " + tabClass} />
      </div>
    </div>
  );
};