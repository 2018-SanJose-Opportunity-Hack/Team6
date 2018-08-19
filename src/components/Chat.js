import React from 'react';

import firebaseInit from '../firebase.js';

const firebase = firebaseInit.initialize;

export default class Chat extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      messageString: '',
      messages: []
    };

    this.onSubmitMessage = this.onSubmitMessage.bind(this);
    this.onMessageString = this.onMessageString.bind(this);
  }

  componentWillMount() {
    firebase.database().ref('/users').on('value', (snapshot) => {
        console.log(snapshot.val());
        this.setState({ data: snapshot.val()} );
    })
  }

  onSubmitMessage() {
    this.setState({ messages: [...this.state.messages, this.state.messageString] });
  }

  onMessageString(e) {
    this.setState({ messageString: e.target.value });
  }

  render(){
    const users = Object.keys(this.state.data).map((user, i) => {
      return (
        <ul key={i}>{user}</ul>
      );
    });

    const messages = this.state.messages.map((message,i) => {
      let user = "rahul"
      if(i % 2 === 0) {
        user = "sahil"
      }
      return (
        <ul key={i}>{user}: {message}</ul>
      );
    });

    return( <div>
      <div className="container">
        <div className="row">
          <div class="col-lg-6">
            <div className="panel panel-default">
              <div className="panel-heading"> Users </div>
              <div className="panel-body">
                {users}
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div>{messages}</div>
            <div>
            <textarea id='message' onChange={this.onMessageString}> </textarea>
            <button onClick={this.onSubmitMessage}>Submit</button>
          </div>
          </div>
        </div>
      </div>
    </div>
    );

  }
}
