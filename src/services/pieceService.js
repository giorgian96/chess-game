import { PIECES_IMAGES, PIECE_MOVEMENT_METHODS } from "../config/pieces-config";
import { movementService } from "./movementService";

export const pieceService = {
  selectedPiece: {
    piece: '',
    coordinate: ''
  },

  getPiece(coordinate, gameState) {
    return gameState[coordinate];
  },

  getPieceImageLocation(coordinate, gameState) {
    const pieceType = gameState[coordinate];
    const pieceImageLocation = PIECES_IMAGES[pieceType];
    return pieceImageLocation;
  },

  handlePieceClick(piece, coordinate) {
    if (this.selectedPiece.piece) {
      // If we already have a piece selected

      if (this.selectedPiece.coordinate === coordinate) {
        // If we clicked on the same tile as before clear the selected piece
        this.selectedPiece = {
          piece: '',
          coordinate: ''
        };

        return this.selectedPiece;
      } else {
        // If we clicked on a different tile, check if we can move the piece to this coordinate
        let success = this.handlePieceMovement(coordinate);

        if(success){
          // Now that the piece is moved, we can clear the selection
          this.selectedPiece = {
            piece: '',
            coordinate: ''
          };
        }

        return this.selectedPiece;
      }
    } else {
      if (!piece) {
        // If there is no piece, stop execution
        return null;
      } else {
        // Set the selected piece
        this.selectedPiece = {
          piece,
          coordinate
        };

        return this.selectedPiece;
      }
    }
  },

  handlePieceMovement(newCoordinate){
    let piece = this.getPieceTypeAndColor(this.selectedPiece.piece);

    movementService[PIECE_MOVEMENT_METHODS[piece.type]](piece, this.selectedPiece.coordinate, newCoordinate);

    return true;
  },

  getPieceTypeAndColor(piece){
    let color = piece.substr(0, 5);
    let type = piece.substr(5).toLowerCase();
    return {color, type};
  }
}