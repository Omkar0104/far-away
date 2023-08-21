import React from "react";

export default function Stats({ items }) {
  
  if(!items.length){
    return (
      <footer className="stats">
        <em>Start adding Items to your packing list</em>
      </footer>
    );
  }
    let packedItem = items.filter((item) => item.packed).length;
    let totalLength = items.length;
    let packedPercentage = (packedItem*100)/totalLength;
  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You got everything to go! Ready to go✈️"
          : `You have ${totalLength} items on your list, and you already packed ${packedItem}( ${Math.round(packedPercentage)}%)`}
      </em>
    </footer>
  );
}
