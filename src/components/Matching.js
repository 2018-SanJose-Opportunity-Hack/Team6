import React from 'react';

export default class Matching extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      highSchool: '',
      colleges: '',
      majors: '',
      showChannelsAndUsers: false
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
  }

  render() {
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