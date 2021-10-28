import { useState } from 'react'
import Tile from '../Tile/Tile'
import './Chessboard.css'
import { 
  VERTICAL_AXIS, 
  HORIZONTAL_AXIS,
  currentGame
} from '../../config/chessboard-config'
import { pieceService } from '../../services/pieceService'

const Chessboard = () => {
  let tiles = [];
  let colorCounter = 0;
  const [selectedTile, setSelectedTile] = useState('');

  for (let j = VERTICAL_AXIS.length - 1; j >= 0; j--) {
    for (let i = 0; i < HORIZONTAL_AXIS.length; i++) {
      let coord = `${HORIZONTAL_AXIS[i]}${VERTICAL_AXIS[j]}`;

      tiles.push(
        <Tile 
          key={`${HORIZONTAL_AXIS[i]}${VERTICAL_AXIS[j]}`} 
          isDark={colorCounter % 2 !== 0} 
          isSelected={coord === selectedTile}
          movementPossible={Math.random() > 0.9}
          coordinate={coord}
          piece={pieceService.getPiece(coord, currentGame)}
          pieceImage={pieceService.getPieceImageLocation(coord, currentGame)}
          onTileClick={(piece, coordinate) => {
            let result = pieceService.handlePieceClick(piece, coordinate);
            if(result){
              setSelectedTile(result.coordinate);
            }else{
              setSelectedTile('');
            }
          }} />
      );
      colorCounter++;
    }
    colorCounter--;
  }

  return (
    <div id="chessboard">
      {tiles}
    </div>
  )
}

export default Chessboard
