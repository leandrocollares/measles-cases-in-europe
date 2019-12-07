import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({
  hovered, yScale, marginLeft, marginTop, decimalSeparator,
}) => {
  const x = 50 + marginLeft;
  const y = yScale(hovered.country) + marginTop;

  const styles = {
    transform:
      'translate('
       + `calc( -25% + ${x}px),`
       + `calc(-100% + ${y}px)`
       + ')',
  };

  const country = `${hovered.country}`;
  const cases = `measles cases: ${decimalSeparator(hovered.cases)}`;
  const population = `population: ${decimalSeparator(hovered.population)}`;
  const incidenceRate = `incidence rate: ${hovered.incidenceRate}/million`;
  const deaths = `deaths: ${hovered.deaths}`;

  return (
    <div className="tooltip" style={styles}>
      <div className="tooltipCountry">{country}</div>
      <div>{cases}</div>
      <div>{population}</div>
      <div>{incidenceRate}</div>
      <div>{deaths}</div>
    </div>
  );
};

Tooltip.propTypes = {
  hovered: PropTypes.shape({
    country: PropTypes.string,
    cases: PropTypes.number,
    population: PropTypes.number,
    incidenceRate: PropTypes.number,
    deaths: PropTypes.number,
  }),
  yScale: PropTypes.func,
  marginLeft: PropTypes.number,
  marginTop: PropTypes.number,
  decimalSeparator: PropTypes.func,
};

export default Tooltip;
