import DogCard from "../Components/DogCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function DogCardPage({ dogs }) {
  const [dog, setDog] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/dogs/${id}`)
      .then((response) => response.json())
      .then(setDog);
  }, [id]);

  if (!dog) return <h1>Not Ready - Wait Init....</h1>;

  return (
    <section className="main__dog-section">
      <DogCard dog={dog} />
    </section>
  );
}
export default DogCardPage;
