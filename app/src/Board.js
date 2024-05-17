import React from 'react';
import PublicBoard from './PublicBoard';
import './Board.css';
import saturn from './saturn.jpeg';


function Board() {
  return (
    <div className="Board">
    <img src={saturn} alt="Logo" className="logo" />
      <h1 className="title">GRAVITY</h1>
      <div className="forms">
        <PublicBoard />
      </div>
    </div>
  );
}
export default Board;
