import React, { Component } from 'react';
import Image from './Images';
import NoResults from './NoResults'
import {NavLink, 
  BrowserRouter, 
  Route, 
  Switch} from 'react-router-dom';

class Navlist extends Component {
  constructor(props) {
    super(props);
  
   this.searchterm = props.match.params.topic
   this.state = {
    images: []
   }
  }
  onSearchChange = (props) => {
    this.props.onSearch(this.searchterm);
  }

render(props) {
  const results = props.data;
  const i_d = props.id;
  let images;

  if (results.length > 0) {
    images = results.map((results, i_d) => 
    <Image url={results} key={i_d}/>)
  } else {
    images = <NoResults />
    }
  return(
    <ul>
      {images}
    </ul> 
  );
}
}

export default Navlist;
