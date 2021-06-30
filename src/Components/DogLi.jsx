import { Link } from "react-router-dom";

function DogLi({ dogName, id }) {
  return (
    <li className="dogs-list__button dogs-list__button--add">
      <Link to={`/dogscards/${id}`}> {dogName} </Link>
    </li>
  );
}

export default DogLi;
