import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch, Link } from 'react-router-dom';
import './CustomLink.scss';
CustomLink.propTypes = {
    label: PropTypes.string,
    to: PropTypes.string,
    activeOnlyWhenExact: PropTypes.bool,
};

function CustomLink({ label, to, activeOnlyWhenExact, className }) {
    let match = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact
    });
    return (
        <Link className={`nav-link${match ? " nav-link--active" : ""}`} to={to}>{label}</Link>
    );
  }

export default CustomLink;