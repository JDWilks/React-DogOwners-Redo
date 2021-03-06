import DogLi from "./DogLi";
import { Link } from "react-router-dom";

function DogUl({ dogs }) {
  return (
    <ul className="dogs-list">
      <li>
        <Link
          to={`/formdog`}
          className="dogs-list__button dogs-list__button--add"
        >
          Add Dog
        </Link>
      </li>
      {dogs.map((dog) => (
        <DogLi key={dog.id} id={dog.id} dogName={dog.name} />
      ))}
    </ul>
  );
}
export default DogUl;
