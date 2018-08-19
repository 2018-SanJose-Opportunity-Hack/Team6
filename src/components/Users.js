import React from 'react';
import { Link } from 'react-router-dom';

import Chat from './Chat';

const Users = (props) => {
  const channels = Object.keys(props.data).map((user, i) => {
    <Chat data={props.data.messageArray}/>
    return (
      <div key={i}>
         <Link to="/chat"><ul>{user}</ul></Link>
      </div>
    );
  });

  return (
    <div>
      {channels}
    </div>
  );
};

export default Users;
