import React from 'react';
import PropTypes from 'prop-types';

const Chart = ({ title, footer, content }) => (
  <div className="chart-container">
    <div className="chart-title">{title}</div>
    <div className="chart-content">
      {content}
    </div>
    <div className="chart-footer">{footer}</div>
  </div>
);

Chart.propTypes = {
  title: PropTypes.string,
  footer: PropTypes.string,
  content: PropTypes.string
};

Chart.defaultProps = {
  title: '',
  footer: '',
  content: ''
};

export default Chart;
