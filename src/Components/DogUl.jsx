import DogLi from "./DogLi";
import { Link } from "react-router-dom";

function DogUl({ dogs }) {
  return (
    <ul className="dogs-list">
      <li className="dogs-list__button dogs-list__button--add">
        <Link to={`/formdog`}>+</Link>
      </li>
      {dogs.map((dog) => (
        <DogLi key={dog.id} id={dog.id} dogName={dog.name} />
      ))}
    </ul>
  );
}
export default DogUl;
