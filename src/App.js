import "./styles.css";
import Header from "./Components/Header";
import DogSectionPage from "./Pages/DogSectionPage";
import DogCardPage from "./Pages/DogCardPage";
import { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/dogs")
      .then((response) => response.json())
      .then(setDogs);
  }, []);

  return (
    <>
      <Header dogs={dogs} />
      <main className="main">
        <Switch>
          <Route path="/" exact>
            <DogSectionPage />
          </Route>
          <Route path="/dogscards/:id" exact>
            <DogCardPage />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
