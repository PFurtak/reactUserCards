import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { thumbnail, title, first, last } }) => {
  return (
    <div className='card text-center'>
      <img
        src={thumbnail}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>
        {title}
        {first}
        {last}
      </h3>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
