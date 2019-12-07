import React from 'react';
import PropTypes from 'prop-types';

const Bar = (props) => <rect {...props} className="rect" />;

Bar.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Bar;
