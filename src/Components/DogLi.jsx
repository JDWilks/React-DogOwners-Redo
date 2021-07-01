import { Link } from "react-router-dom";

function DogLi({ dogName, id }) {
  return (
    <li>
      <Link
        to={`/dogscards/${id}`}
        className="dogs-list__button dogs-list__button--add"
      >
        {" "}
        {dogName}{" "}
      </Link>
    </li>
  );
}

export default DogLi;
