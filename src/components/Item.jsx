import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "₹ " +
    p[0]
      .split("")
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
      }, "") +
    "." +
    p[1]
  );
}

export const Item = ({ item }) => {
  const { deleteItem } = useContext(GlobalContext);

  const sign = item.amount < 0 ? "-" : "+";

  return (
    <li className={item.amount < 0 ? "minus" : "plus"}>
      {item.text}{" "}
      <span>
        {sign}
        {moneyFormatter(item.amount)}
      </span>
      <button onClick={() => deleteItem(item.id)} className="delete-btn">
        x
      </button>
    </li>
  );
};
