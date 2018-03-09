import React from 'react';
import Pet from './components/Pet'

export default class Dashboard extends React.Component {

  dogAdopt() {
    console.log('hello puppers');
  }

  catAdopt() {
    console.log('hello ma kitties');
  }

  render() {
    console.log(this.props.dogToAdopt);
    console.log(this.props.dogToAdopt);
    return (
      <div>
        <Pet petToAdopt={this.props.catToAdopt} onAdoptPet={this.catAdopt}/>
        <Pet petToAdopt={this.props.dogToAdopt} onAdoptPet={this.dogAdopt}/>
      </div>
    );
  }
}

 



