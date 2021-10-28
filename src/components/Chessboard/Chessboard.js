import Tile from '../Tile/Tile'
import './Chessboard.css'
import { 
  VERTICAL_AXIS, 
  HORIZONTAL_AXIS,
  INITIAL_GAME
} from '../../config/chessboard-config'
import { drawPiecesService } from '../../services/drawPiecesService'

const Chessboard = () => {
  let board = [];
  let colorCounter = 0;

  for (let j = VERTICAL_AXIS.length - 1; j >= 0; j--) {
    for (let i = 0; i < HORIZONTAL_AXIS.length; i++) {
      board.push(
        <Tile 
          key={`${HORIZONTAL_AXIS[i]}${VERTICAL_AXIS[j]}`} 
          isDark={colorCounter % 2 !== 0} 
          coordinate={`${HORIZONTAL_AXIS[i]}${VERTICAL_AXIS[j]}`}
          pieceImage={drawPiecesService.getPieceImageLocation(`${HORIZONTAL_AXIS[i]}${VERTICAL_AXIS[j]}`, INITIAL_GAME)} />
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
