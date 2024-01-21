import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

const App = () => {
  return (
    <div>
      <Navbar />
      <News pageSize={9} country="in" category="entertainment" />
    </div>
    
  );
}

export default App;
