import React from 'react';
import './Pet.css';


export default function Pet(props) {

  if (props.petToAdopt === null) {
    return null;
  }

  return (
  <div className='adopt-section'>
    <section>
      <header>{props.petToAdopt.name}</header>
      <img src={props.petToAdopt.imageURL} alt=""/>
      <main>
      <h2>More about {props.petToAdopt.name}</h2>
        <dl>
          <dt>Sex:</dt>
          <dd>{props.petToAdopt.sex}</dd>
          <dt>Age:</dt>
          <dd>{props.petToAdopt.age} years</dd>
          <dt>Breed:</dt>
          <dd>{props.petToAdopt.breed}</dd>
          <dt>Story:</dt>
          <dd>{props.petToAdopt.story}</dd>
        </dl>
        <button onClick={() => props.onAdoptPet()}>Adopt!</button>
      </main>
    </section>
  </div>
  );
}

