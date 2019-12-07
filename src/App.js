import React from 'react';
import BarChart from './components/BarChart';
import data from './data';
import './App.scss';

const App = () => (
  <div className="app">
    <div className="intro">
      <h1>
        {' '}
        Reported measles cases in the WHO European Region (2019)
      </h1>
      <p>
        {' '}
         The ten countries listed below account for about 92% of the
        {' '}
        <a
          href="http://www.euro.who.int/__data/assets/pdf_file/0005/418352/2019-10-Epi_Data_EN_October-2018-September-2019.pdf?ua=1"
          target="_blank"
          rel="noopener noreferrer"
        >
         88,692 measles cases reported in the WHO European Region
        </a>
        {' '}
        between January and September, 2019. Over 60% of the
        cases were reported in Ukraine. Hover the pointer
        over bars for further information.
      </p>
    </div>
    <BarChart data={data} />
  </div>
);

export default App;
