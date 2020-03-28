import React from 'react';
import { Footer, Container, Content, Columns, Column } from 'bloomer';

const Ftr = () => {
  return (
    <Footer id='footer'>
      <Container>
        <Content>
          <Columns>
            <Column isFull>
              <p>Made with Bloomer</p>
            </Column>
          </Columns>
          <Content isSize='small'>
            <p>
              The source code is licensed under <a target='_blank'>MIT</a>.
            </p>
            <p>
              The website content is licensed under{' '}
              <a target='_blank'>CC ANS 4.0</a>.
            </p>
          </Content>
        </Content>
      </Container>
    </Footer>
  );
};

export default Ftr;
