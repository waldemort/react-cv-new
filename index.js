import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import BasicData from './BasicData';
import Milestones from './Milestones';
import Icon from './location_icon.png';

class App extends Component {
 

  render() {
    return (
      <div>
        

          <BasicData/>
          <Milestones/>

      </div>

    
    );
  }
}

render(<App />, document.getElementById('root'));
