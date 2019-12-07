import React from 'react';
import PropTypes from 'prop-types';

const BarLabel = (props) => {
  const {
    x, y, dx, dy, text, decimalSeparator,
  } = props;
  const formattedText = decimalSeparator(text);
  return (
    <text
      x={x}
      y={y}
      dx={dx}
      dy={dy}
      className="barLabel"
    >
      {formattedText}
    </text>
  );
};

BarLabel.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  dx: PropTypes.string,
  dy: PropTypes.string,
  text: PropTypes.number,
  decimalSeparator: PropTypes.func,
};

export default BarLabel;
