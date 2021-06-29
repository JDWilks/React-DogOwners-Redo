function DogLi({ dogName }) {
  return (
    <li
      onClick={() => {
        console.log(dogName);
      }}
      className="dogs-list__button dogs-list__button--add"
    >
      {dogName}{" "}
    </li>
  );
}

export default DogLi;
