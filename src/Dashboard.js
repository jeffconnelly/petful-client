import React from 'react';

export default function Dashboard(animal) {

  console.log(animal.dogToAdopt);

  console.log(animal.catToAdopt);

  return (
    <div>
    <section>
      <header>{animal.catToAdopt.name}</header>
      <img src={animal.catToAdopt.imageURL} alt=""/>
      <main>
      <h2>More about Cat</h2>
        <dl>
          <dt>Sex:</dt>
          <dd>{animal.catToAdopt.sex}</dd>
          <dt>Age</dt>
          <dd>{animal.catToAdopt.age}</dd>
          <dt>Breed</dt>
          <dd>{animal.catToAdopt.breed}</dd>
          <dt>Story</dt>
          <dd>{animal.catToAdopt.story}</dd>
        </dl>
        <button>Adopt!</button>
      </main>
    </section>

    <section>
    <header>{animal.dogToAdopt.name}</header>
    <img src={animal.dogToAdopt.imageURL} alt=""/>
    <main>
    <h2>More about Dog</h2>
      <dl>
        <dt>Sex:</dt>
        <dd>{animal.dogToAdopt.sex}</dd>
        <dt>Age</dt>
        <dd>{animal.dogToAdopt.age}</dd>
        <dt>Breed</dt>
        <dd>{animal.dogToAdopt.breed}</dd>
        <dt>Story</dt>
        <dd>{animal.dogToAdopt.story}</dd>
      </dl>
    <button>Adopt!</button>
    </main>
  </section>
  </div>
  );
}


