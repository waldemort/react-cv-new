import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import BasicData from './BasicData';
import Milestones from './Milestones';

class App extends Component {
 

  render() {
    return (
      <div>
        

          <BasicData/>
          <div class="container">
          <div class="boxWe">
          <h3 align="right">Work Experience</h3>
          </div>
          </div>
          <Milestones/>

      </div>

    
    );
  }
}

render(<App />, document.getElementById('root'));
