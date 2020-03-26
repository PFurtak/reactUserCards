import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { phone, email, location, name, picture } }) => {
  return (
    <div className='card text-center'>
      <img
        src={picture.thumbnail}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h2>
        {name.title} {name.first} {name.last}
      </h2>
      <h4>Email: {email}</h4>
      <h4>
        Location: {location.city}, {location.country}
      </h4>
      <h4>Phone: {phone}</h4>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
