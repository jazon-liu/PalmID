import React, { Component } from 'react';
import './../css/page.css'

const fs = require('fs');

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'yeet'
    }
  }

  componentDidMount () {
  }

  render () {
    return (
      // Navbar
      <div class="page">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="/" style={{fontSize: "1.75rem"}}>PalmID</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/" style={{fontSize: "1.35rem"}}>Home</a>
              </li>
            </ul>
          </div>
        </nav>
        <div class="main">
          <div class="video-stream">
            <div>
              Video:
            </div>
          </div>
          <div class="user-selection">
            <div class="user-dropdown">
              <div class="form-group">
               <label for="sel1">Select list:</label>
               <select class="form-control" id="sel1">
                 <option>Brian</option>
                 <option>Jason</option>
                 <option>Nathan</option>
                 <option>Rithvik</option>
               </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
