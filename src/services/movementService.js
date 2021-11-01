import { bishop } from './pieces/bishop'
import { king } from './pieces/king'
import { knight } from './pieces/knight'
import { pawn } from './pieces/pawn'
import { queen } from './pieces/queen'
import { rook } from './pieces/rook'

export const movementService = {
  movePiece(oldCoordinate, newCoordinate, gameState) {
    let pieceName = gameState[oldCoordinate];
    gameState[newCoordinate] = pieceName;
    delete gameState[oldCoordinate];

    return gameState;
  },
  ...bishop,
  ...king,
  ...knight,
  ...pawn,
  ...queen,
  ...rook
}