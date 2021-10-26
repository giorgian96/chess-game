import React from 'react'
import Tile from '../Tile/Tile'
import './Chessboard.css'
import { VERTICAL_AXIS, HORIZONTAL_AXIS } from '../../config/chessboard-config'

const Chessboard = () => {
  let board = [];
  let colorCounter = 0;

  for (let j = VERTICAL_AXIS.length - 1; j >= 0; j--) {
    for (let i = 0; i < HORIZONTAL_AXIS.length; i++) {
      board.push(
        <Tile 
          key={`${HORIZONTAL_AXIS[i]}${VERTICAL_AXIS[j]}`} 
          isColored={colorCounter % 2 !== 0} 
          coordinate={`${HORIZONTAL_AXIS[i]}${VERTICAL_AXIS[j]}`} />
      );
      colorCounter++;
    }
    colorCounter--;
  }

  return (
    <div id="chessboard">
      {board}
    </div>
  )
}

export default Chessboard
