import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardImage,
  CardContent,
  Media,
  MediaLeft,
  MediaContent,
  Title,
  Subtitle,
  Content,
  Image
} from 'bloomer';

const UserItem = ({ user: { phone, email, location, name, picture } }) => {
  return (
    <Card>
      <CardHeader></CardHeader>
      <CardImage>
        <Image
          isRatio='4:3'
          src={picture.large}
          alt={`${name.first} headshot`}
        />
      </CardImage>
      <CardContent>
        <Media>
          <MediaLeft>
            <Image isSize='48x48' src={picture.thumbnail} />
          </MediaLeft>
          <MediaContent>
            <Title isSize={4}>
              {name.first} {name.last}
            </Title>
            <Subtitle isSize={6}>
              @{name.first}
              {name.last}
            </Subtitle>
          </MediaContent>
          <h3>
            {location.city} {location.country}
          </h3>
        </Media>
        <Content>
          {email}
          <br />
          {phone}
        </Content>
      </CardContent>
    </Card>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
