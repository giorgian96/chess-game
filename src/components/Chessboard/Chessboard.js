import { useState } from 'react'
import Tile from '../Tile/Tile'
import './Chessboard.css'
import { 
  VERTICAL_AXIS, 
  HORIZONTAL_AXIS,
  INITIAL_GAME
} from '../../config/chessboard-config'
import { pieceService } from '../../services/pieceService'

const Chessboard = () => {
  let tiles = [];
  let colorCounter = 0;
  const [selectedTile, setSelectedTile] = useState('');
  const [movementTiles, setMovementTiles] = useState([]);
  const [gameState, setGameState] = useState(INITIAL_GAME);

  for (let j = VERTICAL_AXIS.length - 1; j >= 0; j--) {
    for (let i = 0; i < HORIZONTAL_AXIS.length; i++) {
      let tileCoordinate = `${HORIZONTAL_AXIS[i]}${VERTICAL_AXIS[j]}`;

      tiles.push(
        <Tile 
          key={tileCoordinate} 
          isDark={colorCounter % 2 !== 0} 
          isSelected={tileCoordinate === selectedTile}
          movementPossible={movementTiles.includes(tileCoordinate)}
          coordinate={tileCoordinate}
          piece={pieceService.getPiece(tileCoordinate, gameState)}
          pieceImage={pieceService.getPieceImageLocation(tileCoordinate, gameState)}
          onTileClick={(piece, coordinate) => {
            let result = pieceService.handlePieceClick(piece, coordinate, gameState);
            if(result){
              setSelectedTile(result.selectedTile);
              setMovementTiles(result.movementTiles);
              setGameState(result.gameState);
            }else{
              setSelectedTile('');
              setMovementTiles([]);
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
