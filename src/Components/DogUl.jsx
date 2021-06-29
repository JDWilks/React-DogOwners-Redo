import DogLi from "./DogLi";

function DogUl({ dogs }) {
  return (
    <ul className="dogs-list">
      <li className="dogs-list__button dogs-list__button--add">+</li>
      {dogs.map((dog) => (
        <DogLi key={dog.id} dogName={dog.name} />
      ))}
    </ul>
  );
}
export default DogUl;
