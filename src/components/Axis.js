import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

const Axis = ({
  orientation,
  scale,
  xTransform,
  yTransform,
  className,
}) => {
  const axisRef = useRef(null);

  useEffect(() => {
    d3.select(axisRef.current).call(d3[`axis${orientation}`](scale));
  }, [orientation, scale]);

  return (
    <g
      ref={axisRef}
      transform={`translate(${xTransform}, ${yTransform})`}
      className={className}
    />
  );
};

Axis.propTypes = {
  orientation: PropTypes.oneOf(['Top', 'Right', 'Bottom', 'Left']),
  scale: PropTypes.func,
  xTransform: PropTypes.number,
  yTransform: PropTypes.number,
  className: PropTypes.string,
};

export default Axis;
