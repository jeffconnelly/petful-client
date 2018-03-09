import React from 'react';
import Pet from './components/Pet'
import { connect } from 'react-redux';
import {fetchCat, adoptCat} from './actions/cat';
import {fetchDog, adoptDog} from './actions/dog';
// import {adoptCat} from './actions/cat';
// import {adoptDog} from './actions/dog';

export class Dashboard extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchCat());
    this.props.dispatch(fetchDog());
  }

  catAdopt() {
    this.props.dispatch(adoptCat());
  }

  dogAdopt() {
    this.props.dispatch(adoptDog());
  }

  render() {
    return (
      <div>
        <Pet petToAdopt={this.props.catToAdopt} onAdoptPet={() => this.catAdopt()}/>
        <Pet petToAdopt={this.props.dogToAdopt} onAdoptPet={() => this.dogAdopt()}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catToAdopt: state.catReducer.data,
  dogToAdopt: state.dogReducer.data
});


export default connect (mapStateToProps)(Dashboard);




 



