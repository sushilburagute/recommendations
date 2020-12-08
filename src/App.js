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
          <div className="nav">
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
              <li>
                <div className="list-heading">/ Goal behind this list</div>

                <div className="list-descrip" style={{ marginTop: "10px" }}>
                  Well, Here are the top 3 Books, Movies, (Food?) which I've
                  recently come across and enjoyed and are def worth a share.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
