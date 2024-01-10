import { useState } from 'react';
import './App.css';
import Content from './components/content/Content';
import Header from './components/header/Header';

function App() {
  const [sunOn, setSunOn] = useState(false);

  return (
    <div className={`App ${sunOn ? 'lightModeBackground' : ''}`}>
      <Header sunOn={sunOn} setSunOn={setSunOn} />
      <Content sunOn={sunOn} />
    </div>
  );
}

export default App;