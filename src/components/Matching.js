import React from 'react';

import { addUser, updateUser, getUserInfo } from '../db.js'
import firebaseInit from '../firebase.js';
import Users from './Users';

const firebase = firebaseInit.initialize;

export default class Matching extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      school: '',
      majors: '',
      showInfo: false,
      users: [],
    };

    this.onSchool = this.onSchool.bind(this);
    this.onMajor = this.onMajor.bind(this);
    this.onMatchMe = this.onMatchMe.bind(this);
  }

  onSchool(e) {
    this.setState({ school: e.target.value });
  }

  onMajor(e) {
    this.setState({ majors: e.target.value });
  }

  onMatchMe() {
    this.setState({ showInfo: true });
  }

  render() {
    let users = '';
    firebase.database().ref('/users').on('value', (snapshot) => {
      console.log("snapshot", snapshot.val());
      users = this.state.showInfo ? <Users school={this.state.school} majors={this.majors} data={snapshot.val()} /> : '';
    })


    return (

      <div>
        <div className="container-fullwidth">
          <nav class="navbar navbar-dark bg-primary">
            <div className="row">
              <div className="col-lg-3">
                Profile
              </div>
              <div className="col-lg-3">
                Community
              </div>
              <div className="col-lg-3">
                Scholarships
              </div>
              <div className="col-lg-3">
                SignOut
              </div>

            </div>
          </nav>
        </div>
        School: <input onChange={this.onSchool}/>
        Majors: <input onChange={this.onMajor}/>
        <button onClick={this.onMatchMe}>Match Me</button>
        {users}
      </div>
    );
  }
}
