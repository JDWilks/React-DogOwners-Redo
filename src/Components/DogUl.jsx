import DogLi from "./DogLi";

function DogUl() {
  return (
    <ul className="dogs-list">
      <li className="dogs-list__button dogs-list__button--add">+</li>
      <DogLi />
    </ul>
  );
}
export default DogUl;
