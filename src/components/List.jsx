import React, { useContext } from "react";
import { Item } from "./Item";

import { GlobalContext } from "../context/GlobalState";

export const List = () => {
  const { items } = useContext(GlobalContext);

  return (
    <>
      <h3 className="aligner">Transactions list</h3>
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};
