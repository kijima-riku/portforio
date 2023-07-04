import React from 'react';
import '../css/App.css';
import photo1 from "../../photo/IMG_2002.jpg";
import Library from '../components2/Library';
import Header from '../../header';

function App2() {
  return (
    <>
      <Header />
      <div className="photo-wrapper">
          <h1 className="name focus-in-expand">Kijima Riku</h1>
          <img src={photo1} alt="photo1" className="back_image"/>
      </div>
      <Library />
    </>
  );
}

export default App2;
