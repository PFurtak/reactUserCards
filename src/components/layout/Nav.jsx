import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarBurger,
  NavbarMenu,
  NavbarLink,
  NavbarStart,
  NavbarDropdown,
  NavbarDivider,
  NavbarEnd,
  Field,
  Button,
  Control
} from 'bloomer';

const Nav = ({ icon, title }) => {
  return (
    <Navbar style={{ border: 'solid 1px #00D1B2', margin: '0' }}>
      <NavbarBrand>
        <NavbarItem>
          <img src='' alt='' /> User Cards
        </NavbarItem>
        <NavbarItem isHidden='desktop'></NavbarItem>
        <NavbarItem isHidden='desktop'></NavbarItem>
        <NavbarBurger />
      </NavbarBrand>
      <NavbarMenu>
        <NavbarStart>
          <NavbarItem href='#/'>Home</NavbarItem>
          <NavbarItem hasDropdown isHoverable>
            <NavbarLink href='#/documentation'>About Us</NavbarLink>
            <NavbarDropdown>
              <NavbarItem href='#/'>One A</NavbarItem>
              <NavbarItem href='#/'>Two B</NavbarItem>
              <NavbarDivider />
              <NavbarItem href='#/'>Two A</NavbarItem>
            </NavbarDropdown>
          </NavbarItem>
        </NavbarStart>
        <NavbarEnd>
          <NavbarItem
            href='https://github.com/AlgusDark/bloomer'
            isHidden='touch'></NavbarItem>
          <NavbarItem
            href='https://twitter.com/AlgusDark'
            isHidden='touch'></NavbarItem>
          <NavbarItem>
            <Field isGrouped>
              <Control>
                <Button
                  isColor='black'
                  id='twitter'
                  data-social-network='Twitter'
                  data-social-action='tweet'
                  data-social-target='http://bloomer.js.org'
                  target='_blank'
                  href='https://twitter.com/intent/tweet?text=bloomer:
                        a set of React Stateless Components for bulma.io&amp;url=http://bloomer.js.org&amp;via=AlgusDark'>
                  <span>Generate New Users</span>
                </Button>
              </Control>
            </Field>
          </NavbarItem>
        </NavbarEnd>
      </NavbarMenu>
    </Navbar>
  );
};

Nav.defaultProps = {
  title: 'User Cards',
  icon: 'fab fa-github'
};

Nav.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Nav;
