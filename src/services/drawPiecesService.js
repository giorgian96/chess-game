import { PIECES_IMAGES } from "../config/pieces-config";

export const drawPiecesService = {
  getPieceImageLocation(coordinate, gameState){
    const pieceType = gameState[coordinate];
    const pieceImageLocation = PIECES_IMAGES[pieceType];
    return pieceImageLocation;
  }
}