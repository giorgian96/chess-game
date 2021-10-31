import { bishop } from "./bishop";
import { rook } from "./rook";

export const queen = {
  queenMovement(piece, coordinate, gameState){
    let possibleMovement = bishop.bishopMovement(piece, coordinate, gameState);
    possibleMovement.push(...rook.rookMovement(piece, coordinate, gameState));

    return possibleMovement;
  }
}