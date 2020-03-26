import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { cell, email } }) => {
  return (
    <div className='card text-center'>
      <img src='' alt='' className='round-img' style={{ width: '60px' }} />
      <h3>{cell}</h3>
      <h3>{email}</h3>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
