import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import BasicData from './BasicData';

class App extends Component {
 

  render() {
    return (
      <div>
        <h1> Curriculum Vitae</h1>

          <BasicData/>

      </div>

    
    );
  }
}

render(<App />, document.getElementById('root'));
