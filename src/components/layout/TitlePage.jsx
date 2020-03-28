import React from 'react';
import { Hero, HeroBody, Container, Title } from 'bloomer';

const TitlePage = ({ icon, title }) => {
  return (
    <Hero isColor='primary' isSize='medium'>
      <HeroBody>
        <Container hasTextAlign='centered'>
          <Title>User Cards</Title>
        </Container>
      </HeroBody>
    </Hero>
  );
};

export default TitlePage;
