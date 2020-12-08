import React, { useState } from "react";
import "./App.css";
import { recomDB } from "./recomDB";

function App() {
  const [categorySelected, setcategorySelected] = useState("food");

  return (
    <div className="App">
      <div className="main">
        <div className="card">
          <h2>🥇Recommendations by Sush</h2>
        </div>

        <div className="card">
          <div>
            {Object.keys(recomDB).map((category) => (
              <button onClick={() => setcategorySelected(category)}>
                {category}
              </button>
            ))}
          </div>

          <div className="lists">
            <ul>
              {recomDB[categorySelected].map((item) => (
                <li>
                  <div className="list-heading">{item.name}</div>
                  <div className="list-rating">{item.rating}</div>
                  <div className="list-descrip">{item.descrip}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
