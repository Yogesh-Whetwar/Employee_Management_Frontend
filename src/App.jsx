import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ListEmployee from "./components/ListEmployee";
import ShowEmps from "./components/ShowEmps";
import Header from "./components/Header";
import AddEmployee from "./components/AddEmployee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ShowEmps />}></Route>
          <Route path="/employees" element={<ShowEmps />}></Route>
          <Route path="/addemployee" element={<AddEmployee />}></Route>
          <Route path="/updateemployee/:id" element={<AddEmployee />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
