import DogUl from "./DogUl";

function Header({ dogs }) {
  return (
    <header className="header">
      <h1>The Show Off Dog Owner's App</h1>
      <DogUl dogs={dogs} />
    </header>
  );
}

export default Header;
