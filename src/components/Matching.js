import React from 'react';

import Users from './Users';
import { students } from '../data';

export default class Matching extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      school: '',
      majors: '',
      showInfo: false,
      data: []
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
    this.setState({ showInfo: true, data: students });
  }

  render() {
    let users = this.state.showInfo ? <Users school={this.state.school} majors={this.majors} data={this.state.data} /> : '';
    return (
      <div>
        School: <input onChange={this.onSchool}/>
        Majors: <input onChange={this.onMajor}/>
        <button onClick={this.onMatchMe}>Match Me</button>
        {users}
      </div>
    );
  }
}