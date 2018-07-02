
import React from 'react';
import {Route} from 'react-router-dom';
import Home from './home/home.js';
class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>


        <main>
          <Route exact path='/' component={Home} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
