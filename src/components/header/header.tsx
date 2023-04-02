import { NavLink } from 'react-router-dom';

import './header.styles.css';

interface IHeaderProps {
  title: string;
}

export default function Header({ title }: IHeaderProps) {
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
        <NavLink
          to="/form"
          style={({ isActive }) => ({
            color: isActive ? 'greenyellow' : 'blue',
          })}
        >
          Form
        </NavLink>
      </nav>
    </header>
  );
}
