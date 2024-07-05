import React from 'react';
import './main.css';
import Schedule from './Schedule';
import Trend from './Trend';
import Blog from './Blog';
import NewOn from './NewOn';

function Main() {
  return (
    <main>

      <NewOn />
    <Schedule />
    <Trend />
    <Blog />
    </main>
  )
}

export default Main
