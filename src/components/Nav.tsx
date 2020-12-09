import React from 'react';
import {Link} from 'react-router-dom';
import AppBar from "./AppBar";

const Nav = () => {
  console.log('render nav')
  return (
    <nav>
      <AppBar>
        <Link to={'/'}>
          Home
        </Link>
        <Link to={'/top'}>
          Top
        </Link>
        <Link to={'/popular'}>
          Popular
        </Link>
      </AppBar>
    </nav>
    )
}

export default Nav;
