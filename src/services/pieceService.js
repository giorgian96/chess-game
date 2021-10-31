import { PIECES_IMAGES, PIECE_MOVEMENT_METHODS } from "../config/pieces-config";
import { movementService } from "./movementService";
import { playerTurnService } from "./playerTurnService";

export const pieceService = {
  selectedPiece: {
    piece: {},
    coordinate: '',
    movementTiles: []
  },

  getPiece(coordinate, gameState) {
    return this.getPieceTypeAndColor(gameState[coordinate]);
  },

  getPieceImageLocation(coordinate, gameState) {
    const pieceType = gameState[coordinate];
    const pieceImageLocation = PIECES_IMAGES[pieceType];
    return pieceImageLocation;
  },

  getPieceTypeAndColor(pieceStr) {
    if (pieceStr) {
      let color = pieceStr.substr(0, 5);
      let type = pieceStr.substr(5).toLowerCase();
      return { color, type };
    } else {
      return;
    }
  },

  handlePieceClick(piece, coordinate, gameState) {
    // Check player turn
    if(piece && playerTurnService.isWrongTurn(piece)){
      // Check if we already have a piece selected
      if (this.selectedPiece.piece && Object.keys(this.selectedPiece.piece).length > 0){
        // Do nothing, we already have a piece selected, so this is an attack
      }else{
        // Wrong turn, stop execution
        return null;
      }
    }

    // Check if we already have a piece selected
    if (this.selectedPiece.piece && Object.keys(this.selectedPiece.piece).length > 0) {
      if (this.selectedPiece.coordinate === coordinate) {
        // If we clicked on the same tile as before clear the selected piece
        this.selectedPiece = {
          piece: {},
          coordinate: '',
          movementTiles: []
        };

        return {
          selectedTile: this.selectedPiece.coordinate,
          movementTiles: this.selectedPiece.movementTiles,
          gameState
        }
      } else {
        // If we clicked on a different tile, check if we can move the piece to this coordinate
        let result = this.handlePieceMovement(this.selectedPiece.piece, this.selectedPiece.coordinate, coordinate, gameState);

        if (result.success) {
          // Now that the piece is moved, we can clear the selection
          this.selectedPiece = {
            piece: {},
            coordinate: '',
            movementTiles: []
          };

          // We can change the turn
          playerTurnService.changeTurn();

          // And set the new gamestate
          gameState = result.gameState;
        }

        return {
          selectedTile: this.selectedPiece.coordinate,
          movementTiles: this.selectedPiece.movementTiles,
          gameState
        }
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

        // Get the tiles where we can move the piece
        this.selectedPiece.movementTiles = this.getPossibleMovement(this.selectedPiece.piece, this.selectedPiece.coordinate, gameState);

        return {
          selectedTile: this.selectedPiece.coordinate,
          movementTiles: this.selectedPiece.movementTiles,
          gameState
        }
      }
    }
  },

  getPossibleMovement(piece, coordinate, gameState){
    let result = movementService[PIECE_MOVEMENT_METHODS[piece.type]](
      piece,
      coordinate,
      gameState
    );

    return result;
  },

  handlePieceMovement(piece, oldCoordinate, newCoordinate, gameState) {
    let result = this.getPossibleMovement(piece, oldCoordinate, gameState);
    let success = result.includes(newCoordinate);

    if(success){
      // Move the piece and get the new gamestate
      gameState = movementService.movePiece(oldCoordinate, newCoordinate, gameState);
    }

    return {
      success,
      gameState
    }
  }
}