import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onPacked, onclearAllItems }) {
  const [sortBy, setSortBy] = useState("input");
  let sorted;
  function clearList() {
    if (window.confirm("Do you really want to clear it")) {
    onclearAllItems();
    // sorted={};
    }
  }
  
  if (sortBy === "input") {
    sorted = items;
  }
  if (sortBy === "description") {
    sorted = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sorted = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sorted.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onPacked={onPacked}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort By Input</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort by packed Status</option>
        </select>
        <button onClick={clearList}>Clear List</button>
      </div>
    </div>
  );
}
