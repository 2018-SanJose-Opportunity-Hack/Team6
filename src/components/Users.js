import React from 'react';

const Users = (props) => {
  const channels = props.data.map((user, i) => {
    return (
      <ul key={i}>{user.title}</ul>
    );
  });

  return (
    <div>
      {channels}
    </div>
  );
};

export default Users;