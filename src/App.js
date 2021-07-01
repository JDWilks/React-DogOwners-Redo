import "./styles.css";
import Header from "./Components/Header";
import DogSectionPage from "./Pages/DogSectionPage";
import DogCardPage from "./Pages/DogCardPage";
import FormDog from "./Pages/FormDog";
import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

function App() {
  const [dogs, setDogs] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:4000/dogs")
      .then((response) => response.json())
      .then(setDogs);
  }, []);

  function addDog(dogdata) {
    fetch("http://localhost:4000/dogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dogdata),
    })
      .then((response) => response.json())
      .then((dog) => {
        setDogs([...dogs, dog]);
      });
  }

  function deleteDog(dogToDelete) {
    fetch(`http://localhost:4000/dogs/${dogToDelete.id}`, {
      method: "DELETE",
    }).then(() => {
      setDogs(dogs.filter((dog) => dog.id !== dogToDelete.id));
      history.push("/");
    });
  }

  return (
    <>
      <Header dogs={dogs} />
      <main className="main">
        <Switch>
          <Route path="/" exact>
            <DogSectionPage />
          </Route>
          <Route path="/dogscards/:id" exact>
            <DogCardPage deleteDog={deleteDog} />
          </Route>
          <Route path="/formdog" exact>
            <FormDog addDog={addDog} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
