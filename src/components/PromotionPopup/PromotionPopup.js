import './PromotionPopup.css'
import { PIECES_IMAGES } from '../../config/pieces-config';

const PromotionPopup = ({ promotion, onPieceClick }) => {
  let promotionPieces = [];

  if (promotion.pieceName.includes("white")) {
    promotionPieces.push(PIECES_IMAGES.whiteBishop, PIECES_IMAGES.whiteKnight, PIECES_IMAGES.whiteRook, PIECES_IMAGES.whiteQueen);
  } else if (promotion.pieceName.includes("black")) {
    promotionPieces.push(PIECES_IMAGES.blackBishop, PIECES_IMAGES.blackKnight, PIECES_IMAGES.blackRook, PIECES_IMAGES.blackQueen);
  }

  const pieces = promotionPieces.map((piece, index) => {
    return <img 
      className="promotion-piece" 
      key={index} 
      src={piece} 
      alt="Chess piece"
      onClick={() => {
        let pieceName = Object.keys(PIECES_IMAGES).find(key => PIECES_IMAGES[key] === piece);
        onPieceClick(promotion.newCoordinate, pieceName);
      }} />;
  });

  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Pawn can be promoted</h2>
        {pieces}
      </div>
    </div>
  )
}

export default PromotionPopup
