import React, { useState } from "react";

export const Header = () => {
  var [copyopacity, change] = useState(0);
  var [copyresult, changecontent] = useState();
  function Copyresult(res) {
    if (res) {
      changecontent("Copied to clipboard");
    } else {
      changecontent("Copy failed due to some reason");
    }
    change(0.7);
    setTimeout(() => {
      change(0);
    }, 1000);
  }

  function copy(childern) {
    var Text = childern.currentTarget.lastChild.textContent;
    navigator.clipboard.writeText(Text).then(
      function () {
        Copyresult(true);
      },
      function () {
        Copyresult(false);
      }
    );
  }

  return (
    <nav id="nav-wrap">
      <div>
        <p className="nav-item">Plan your Finance!</p>
      </div>
      <div className="nav-item dropdown">
        <span>Contact us</span>
        <div className="dropdown-content">
          <h5 onClick={copy}>
            Phone(click to copy):<p id="phone">8867953141</p>
          </h5>
          <h5 onClick={copy}>
            email(click to copy):<p id="email">Vishwanathpatil145@gmail.com</p>
          </h5>
        </div>
      </div>
      <div className="copyresult" style={{ opacity: copyopacity }}>
        <p>{copyresult}</p>
      </div>
    </nav>
  );
};
