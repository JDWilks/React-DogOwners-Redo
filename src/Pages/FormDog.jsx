function FormDog() {
  return (
    <section className="main__dog-section">
      <h2>Add a new Dog</h2>
      <form className="form">
        <label for="name">Dog's name</label>
        <input type="text" id="name" name="name" />

        <label for="image">Dog's picture</label>
        <input type="url" id="image" name="image" />

        <label for="bio">Dog's bio</label>
        <textarea rows="5" id="bio" name="bio"></textarea>

        <input
          type="submit"
          id="submit"
          name="submit"
          value="Let's add a dog!"
          class="form__button"
        />
      </form>
    </section>
  );
}

export default FormDog;

// we want the form to give us the exact of this :

// {
//     "name": "Mr. Bonkers",
//     "bio": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, minima voluptates libero cumque rerum consequatur optio aliquid sinteum maxime illo laborum omnis quo ab rem cupiditate nulla perspiciatis ipsum!",
//     "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
//     },
