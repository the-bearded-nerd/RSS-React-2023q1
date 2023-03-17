import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.styles.css';

interface IHeaderProps {
  title: string;
}

export default class Header extends React.Component<IHeaderProps, {}> {
  render() {
    const { title } = this.props;
    return (
      <header>
        <h1>You are on page: {title}</h1>
        <nav>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? 'greenyellow' : 'blue',
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? 'greenyellow' : 'blue',
            })}
          >
            About
          </NavLink>
        </nav>
      </header>
    );
  }
}
