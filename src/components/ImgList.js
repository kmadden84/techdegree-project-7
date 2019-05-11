import React, { Component } from 'react';
import Image from './Images';
import NoResults from './NoResults'
import NavToggle from './NavToggle';
import Search from './Search';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';


export default class ImgList extends Component {
  constructor(props) {
    super(props);
    var topic = props.match.path.topic;
    this.state = {
      data: [],
      id: [],
      loader: true,
    }
  }
  componentDidMount(props) {
 
    
    (this.props.data)
      ? this.performSearch(this.props.data)
      : this.performSearch('cats')
  }

  componentDidUpdate(props) {
    console.log(props);
        if (props.data !== this.props.data) {
    (this.props.data)
      ? this.performSearch(this.props.data)
      : this.performSearch('cats')
        }
  }

  performSearch = (query) => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=23df8e0875c3800ea7e3565c00dfa4ad&tags=${query}&format=json&nojsoncallback=1&per_page=20&page=10`)
      .then(response => {
        var imgs = response.data.photos && response.data.photos.photo;
        const results = [];
        const keys = [];
        if (imgs !== null) {
        imgs.map(photo => {
          var farm = photo.farm;
          var server = photo.server;
          var photoID = photo.id;
          var secret = photo.secret;
          var url = `https://farm${farm}.staticflickr.com/${server}/${photoID}_${secret}_m.jpg` 
          results.push(url)
          keys.push(photoID)
        })
        this.setState({
          data: results,
          id: keys,
          loader: false
        })
      } 
      else {
          this.setState({
        data: '',
        id: '',
        loader: false
      })
    }
      })
  }
  onSearchChange = e => {
    this.setState({ 
      searchText: e.target.value 
    })
  }
  render(props) {
    const {data} = this.state;
    let images;

    if (this.state.loader) {
      images = `Loading....`;
    } 
    else if (!this.state.loader) {
      images = data.length ? data.map((data, id) =>
        <Image url={data} key={id} />) : <NoResults />
    } 
    return (
      <div className="container">
        <Search submit={this.performSearch} {...this.props} />
        <NavToggle click={this.performSearch} {...this.props} />
        <div className="photo-container">
          <h2>Results</h2>
          <ul>
            {images}
          </ul>
        </div>
      </div>
    );
  }
}