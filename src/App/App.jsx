import "./App.css";
import Compteur from "../Compteur/Compteur";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Compteur />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
