import './Tile.css'
import { tileService } from '../../services/tileService';

const Tile = (props) => {
  let img = '';
  if (props.pieceImage) {
    img = <img className="piece" src={props.pieceImage} alt="Chess piece" />;
  }

  return (
    <div className={
      "tile " +
      (props.isDark ? "dark " : "light ") +
      tileService.getTileRoundedClass(props.coordinate) +
      (img ? " has-piece " : "") +
      (props.isSelected ? "selected" : "") +
      (props.movementPossible ? "move" : "")
    } onClick={() => props.onTileClick(props.piece, props.coordinate)} >
      {img}
    </div>
  )
}

export default Tile
