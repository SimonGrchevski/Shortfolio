import React from 'react';
import { Link } from 'react-router-dom';


export const Header = () => {
  return (
    <section>
      <Link  to="/">
      <article>
        <h3>Simon Grcevski</h3>
        <h5>SG</h5>
      </article>
      </Link>

      <article>
        <Link to="/projects">
          <h5>Projects</h5>
        </Link>

        <Link to="/about">
          <h5>About me</h5>
        </Link>
      </article>
    </section>
  )
}
