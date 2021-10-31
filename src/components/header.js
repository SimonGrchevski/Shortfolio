import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="flex space-between">
    <Link to="/">
      <article>
        <h3>Simon Grcevski</h3>
        <h5 className="sign">SG</h5>
      </article>
    </Link>

    <article className="flex headerLinks">

      <Link to="/projects">
        <section>
          <h5>Projects</h5>
        </section>
      </Link>

      <Link to="/about">
        <section>
          <h5>About me</h5>
        </section>
      </Link>
    </article>
  </header>
);

export default Header;
