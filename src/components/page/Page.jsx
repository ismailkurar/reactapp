import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ children }) => (
  <div className="page-container">
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.node,
};

Page.defaultProps = {
  children: null,
};

export default Page;
