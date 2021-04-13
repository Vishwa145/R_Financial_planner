import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { List } from "./components/List";
import { AddItem } from "./components/AddItem";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="mainlayout">
        <div className="container handler">
          <Balance />
          <IncomeExpenses />
          <AddItem />
        </div>
        <div className="container list">
          <List />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
