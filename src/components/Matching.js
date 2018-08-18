import React from 'react';
import axios from 'axios';

export default class Matching extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      highSchool: '',
      colleges: '',
      majors: '',
      showChannelsAndUsers: false,
      users: []
    };

    this.onCollege = this.onCollege.bind(this);
    this.onHighSchool = this.onHighSchool.bind(this);
    this.onMajor = this.onMajor.bind(this);
    this.onMatchMe = this.onMatchMe.bind(this);
  }

  onHighSchool(e) {
    this.setState({ highSchool: e.target.value });
  }

  onCollege(e) {
    this.setState({ colleges: e.target.value });
  }

  onMajor(e) {
    this.setState({ majors: e.target.value });
  }

  onMatchMe() {
    console.log("hi");
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(resp => {
        this.setState({ users: resp.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    console.log("state: ", this.state.users);
    return (
      <div>
        High School: <input onChange={this.onHighSchool}/>
        Colleges: <input onChange={this.onCollege}/>
        Majors: <input onChange={this.onMajor}/>
        <button onClick={this.onMatchMe}>Match Me</button>
      </div>
    );
  }
}