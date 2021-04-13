import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

//Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split(".");
  return (
    "₹ " +
    (num < 0 ? "-" : "+") +
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

export const Balance = () => {
  const { items } = useContext(GlobalContext);

  const amounts = items.map((item) => item.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>{moneyFormatter(total)}</h1>
    </>
  );
};
