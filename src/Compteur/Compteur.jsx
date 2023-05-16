import { useReducer } from "react";
import "./Compteur.css";

function Compteur() {
  const countReducer = (state, action) => {
    if (action === "increment") {
      return state + 1;
    } else if (action === "decrement") {
      return state - 1;
    } else if (action === "double") {
      return state * 2;
    } else if (action === "square") {
      return state * state;
    } else if (action === "divided") {
      return state / 2;
    } else if (action === "random") {
      return (state = Math.floor(Math.random() * 100));
    } else if (action === "reset") {
      return 0;
    }
  };

  const [count, updateCount] = useReducer(countReducer, 0);

  return (
    <div>
      <div className="containerText">
        <p>Count : {count}</p>
      </div>
      <div className="containerBtn">
        <button onClick={() => updateCount("increment")}>Incrémenter</button>
        <button onClick={() => updateCount("decrement")}>Décrémenter</button>
        <button onClick={() => updateCount("double")}>Doubler</button>
        <button onClick={() => updateCount("square")}>Puissance</button>
        <button onClick={() => updateCount("divided")}>Diviser par deux</button>
        <button onClick={() => updateCount("random")}>Aleatoire</button>
        <button onClick={() => updateCount("reset")}>Reset</button>
      </div>
    </div>
  );
}

export default Compteur;
