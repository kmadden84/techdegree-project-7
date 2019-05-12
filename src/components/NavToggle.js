import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class NavToggle extends Component {
  constructor(props, unlisten) {
    super(props);
  }

  render(props) {
    return (
      <div className="main-nav">
        <ul>
          <li><NavLink to='/cats' className="cats">Cats</NavLink></li>
          <li><NavLink to='/dogs' className="dogs">Dogs</NavLink></li>
          <li><NavLink to='/computers' className="computers">Computers</NavLink></li>
        </ul>
      </div>
    )
  }
}