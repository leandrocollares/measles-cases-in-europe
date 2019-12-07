import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';
import Axis from './Axis';
import Bar from './Bar';
import BarLabel from './BarLabel';
import Tooltip from './Tooltip';

const margin = {
  top: 30,
  right: 50,
  bottom: 110,
  left: 110,
};
const width = 900 - margin.left - margin.right;
const height = 480 - margin.top - margin.bottom;

const decimalSeparator = d3.format(',');

const BarChart = ({ data }) => {
  const [hoveredBar, setHoveredBar] = useState(null);

  const onBarHover = (bar) => () => {
    setHoveredBar(bar);
  };

  const sortedData = data.sort((a, b) => a.cases - b.cases);

  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(sortedData, (d) => d.cases)])
    .rangeRound([0, width])
    .nice();

  const yScale = d3
    .scaleBand()
    .domain(sortedData.map((d) => d.country))
    .rangeRound([height, 0])
    .padding(0.05);

  return (
    <div className="barChart">
      <svg
        className="chart"
        width={width + margin.left + margin.right}
        height={height + margin.top + margin.bottom}
      >
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          {data.map((d) => (
            <React.Fragment key={d.country}>
              <Bar
                x={0}
                y={yScale(d.country)}
                width={xScale(d.cases)}
                height={yScale.bandwidth()}
                onMouseEnter={onBarHover(d)}
                onMouseLeave={onBarHover(null)}
              />
              <BarLabel
                x={xScale(d.cases) + 10}
                y={yScale(d.country)}
                dx="-.32em"
                dy="1.4em"
                text={d.cases}
                decimalSeparator={decimalSeparator}
              />
            </React.Fragment>
          ))}
          <Axis
            orientation="Bottom"
            scale={xScale}
            xTransform={0}
            yTransform={height}
            className="xAxis"
          />
          <Axis
            orientation="Left"
            scale={yScale}
            xTransform={0}
            yTransform={0}
            className="yAxis"
          />
        </g>
      </svg>
      {hoveredBar ? (
        <Tooltip
          hovered={hoveredBar}
          yScale={yScale}
          marginLeft={margin.left}
          marginTop={margin.top}
          decimalSeparator={decimalSeparator}
        />
      ) : null}
    </div>
  );
};

BarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      country: PropTypes.string,
      cases: PropTypes.number,
      population: PropTypes.number,
      incidenceRate: PropTypes.number,
      deaths: PropTypes.number,
    }),
  ),
};

export default BarChart;
