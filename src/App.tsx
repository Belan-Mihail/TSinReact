import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageForPostsList from './pages/PageForPostsList';
import PageForParentAndChild from './pages/PageForParentAndChild';
import Navbar from './components/Navbar';
import PageEventExample from './pages/PageEventExample';



function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <PageForPostsList /> */}
      {/* <PageForParentAndChild /> */}
      <PageEventExample />
    </div>
  );
}

export default App;
