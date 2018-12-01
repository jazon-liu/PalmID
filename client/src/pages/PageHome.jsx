import React, { Component } from 'react';
import './PageHome.scss'

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
      <div className="page">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/" style={{fontSize: "1.75rem"}}>PalmID</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/" style={{fontSize: "1.35rem"}}>Home</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="main">
          <div className="video-stream">
            <div>
                {/*<video width="320" height="240" controls>*/}
                    {/*<!--ADD THE VIDEO ENDPOINT-->*/}
                {/*</video>*/}
            </div>
          </div>
          <div className="user-selection">
            <div className="user-dropdown">
              <div className="form-group">
               <label for="sel1">Select list:</label>
               <select className="form-control" id="sel1">
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
