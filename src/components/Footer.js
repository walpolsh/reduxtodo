import React from 'react';
import FilterLink from '../containers/FilterLink';

//Footer is where we let the user change currently visible todos.

const Footer = () => (
  <p>
    Show: {' '}
    <FilterLink filter="SHOW_ALL">
      ALL
    </FilterLink>
    <FilterLink filter="SHOW_ACTIVE">
      ACTIVE
    </FilterLink>
    <FilterLink filter="SHOW_COMPLETED">
      COMPLETED
    </FilterLink>

  </p>
);

export default Footer;
