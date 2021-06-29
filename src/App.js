import "./styles.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { useState } from "react";

function App() {

  const [dogs, setDogs] = useState []


  return (
    <>
      <body>
        <Header />
        <Main />
      </body>
    </>
  );
}

export default App;
