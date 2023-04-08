import React from 'react';
import { Navigation } from './components/Navigation';
import { About } from './components/About';

function App() {
  return <div className='px-lg-5 bg-dark'>
  <Navigation />
  <About />
  {/* <About /> */}
  </div>
}

export default App;