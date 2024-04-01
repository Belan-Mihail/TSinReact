import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageForPostsList from './pages/PageForPostsList';
import PageForParentAndChild from './pages/PageForParentAndChild';
import Navbar from './components/Navbar';
import PageEventExample from './pages/PageEventExample';
import PageForUseState from './pages/PageForUseState';
import { ThemeProvider } from './context/ThemeContext';
import PageForProvider from './pages/PageForProvider';
import PageForRef from './pages/PageForRef';



function App() {
  return (
    <div className="App">
      <ThemeProvider>
      <Navbar />
      {/* <PageForPostsList /> */}
      {/* <PageForParentAndChild /> */}
      {/* <PageEventExample /> */}
      {/* <PageForUseState /> */}
      {/* <PageForProvider /> */}
      <PageForRef />
      </ThemeProvider>
    </div>
  );
}

export default App;
