import React from 'react';
import './index.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import NoResults from './components/NoResults';
import ImgList from './components/ImgList';


const App = ({match}) => {

return (
<BrowserRouter>
    <Switch>
      <Route exact path="/" render={(props)=><ImgList {...props}  />} />
      <Route path={`${match.path}cats`} render={(props)=><ImgList data="cats" {...props}/>} />
      <Route path={`${match.path}dogs`} render={(props)=><ImgList data="dogs" {...props}/>} />
      <Route path={`${match.path}computers`} render={(props)=><ImgList data="computers" {...props}/>} />
      <Route path='*' exact={true} component={NoResults} />
      </Switch>
</BrowserRouter>
  )
  }



export default App;