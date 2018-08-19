import React from 'react';
import { Link } from 'react-router-dom';



const Users = (props) => {
  const channels = props.data.map((user, i) => {
    if (user.colleges.indexOf(props.school) !== -1 ) {
      return (
        <div key={i}>
          <Link to="/chat"><ul>{user.name}</ul></Link>
        </div>
      );
    }
  });

  return (
    <div>
      {channels}
    </div>
  );
};

export default Users;