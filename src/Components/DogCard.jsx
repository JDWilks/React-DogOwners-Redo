function DogCard({ dog }) {
  return (
    <section class="main__dog-section">
      <h2>{dog.name}</h2>
      <img src={dog.image} alt={dog.name} />
      <div class="main__dog-section__desc">
        <h3>Bio</h3>
        <p>{dog.bio}</p>
      </div>
      <div class="main__dog-section__btn">
        <p>
          <em>Is naughty?</em> {dog.isGoodDog ? "Yes" : "No"}
        </p>
        <button>{dog.isGoodDog ? "No" : "Yes"}</button>
      </div>
    </section>
  );
}

export default DogCard;
