import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddItem = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addItem } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    };
    addItem(newItem);
  };

  const [intensity, change] = useState(0.5);

  function mouseOver() {
    change(1);
  }

  function mouseOut() {
    change(0.5);
  }

  return (
    <>
      <h3>Add new Item</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            spellCheck="false"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            required
          />
        </div>
        <button
          className="btn"
          style={{ opacity: intensity }}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
        >
          Add item
        </button>
      </form>
    </>
  );
};
