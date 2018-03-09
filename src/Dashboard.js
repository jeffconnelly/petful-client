import React from 'react';

export default function Dashboard(props) {

  console.log(props.dogToAdopt);

  console.log(props.catToAdopt);

  return (
    <div>
      <section>
      <header>{props.catToAdopt.name}</header>
      <img src={props.catToAdopt.imageURL} alt=""/>
      <main>
      <h2>More about Cat</h2>
        <dl>
          <dt>Sex:</dt>
          <dd>{props.catToAdopt.sex}</dd>
          <dt>Age</dt>
          <dd>{props.catToAdopt.age}</dd>
          <dt>Breed</dt>
          <dd>{props.catToAdopt.breed}</dd>
          <dt>Story</dt>
          <dd>{props.catToAdopt.story}</dd>
        </dl>
        <button>Adopt!</button>
      </main>
      </section>

      <section>
      <header>{props.dogToAdopt.name}</header>
      <img src={props.dogToAdopt.imageURL} alt=""/>
      <main>
      <h2>More about Dog</h2>
      <dl>
        <dt>Sex:</dt>
        <dd>{props.dogToAdopt.sex}</dd>
        <dt>Age</dt>
        <dd>{props.dogToAdopt.age}</dd>
        <dt>Breed</dt>
        <dd>{props.dogToAdopt.breed}</dd>
        <dt>Story</dt>
        <dd>{props.dogToAdopt.story}</dd>
      </dl>
      <button>Adopt!</button>
      </main>
      </section>
    </div>
  );
}



