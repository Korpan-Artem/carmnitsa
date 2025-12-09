import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Banner />
    </>
  );
}

export default App;
