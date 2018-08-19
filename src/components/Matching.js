import React from 'react';
import { Query } from 'react-apollo';

import { loadComponent } from '../helper';
import Users from './Users';
import { USERS } from '../schema';

export default class Matching extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      school: '',
      majors: '',
      showInfo: false,
      users: []
    };

    this.onSchool = this.onSchool.bind(this);
    this.onMajor = this.onMajor.bind(this);
    this.onMatchMe = this.onMatchMe.bind(this);
  }

  onSchool(e) {
    console.log('e', e.target.value);
    this.setState({ school: e.target.value });
  }

  onMajor(e) {
    this.setState({ majors: e.target.value });
  }

  onMatchMe() {
    return(
    <Query query={USERS}
    variables={{
      in: {
        desiredSchoolName: this.state.school
      }
    }}
    >
     {loadComponent(data => {
      console.log("data", data);
        return (
            <div>
              hello
            </div>
          );
     })}
    </Query>
    );
  }

  render() {
    console.log("users", this.state.users);
    let users = this.state.showInfo ? <Users users={this.state.users}/> : '';
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