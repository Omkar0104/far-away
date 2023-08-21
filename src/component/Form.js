import React, { useState } from 'react'

export default function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);
  function handleAdd(e) {
    e.preventDefault();
    if (!description) {
      return;
    }
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItem(newItem);
    console.log(newItem);
    setDescription("");
  }
  return (
    <form className="add-form" onSubmit={handleAdd}>
      <h3>What do you need for your 😍 trip </h3>

      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value * 1);
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((ele) => (
          <option value={ele} key={ele}>
            {ele}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />

      <button>Add</button>
    </form>
  );
}
