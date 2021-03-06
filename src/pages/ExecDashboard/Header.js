import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import logo from '../../common/icons/logo-beta.svg';

export default function Header({ isTv }) {
  return (
    <header
      className={classnames({
        'exec-dash__header': true,
        'header--inverted': !isTv,
      })}
    >
      <Link to="/">
        <img src={logo} alt="refine.bio" className="header__logo" />
      </Link>
      | Executive Dashboard
    </header>
  );
}
