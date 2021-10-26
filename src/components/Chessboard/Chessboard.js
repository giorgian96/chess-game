import React from 'react'
import Tile from '../Tile/Tile'
import './Chessboard.css'

const Chessboard = () => {
  return (
    <div id="chessboard">
      Hello, this is the Chessboard, it will have a bunch of tiles...
      <Tile />
      <Tile />
      <Tile />
      <Tile />
    </div>
  )
}

export default Chessboard
