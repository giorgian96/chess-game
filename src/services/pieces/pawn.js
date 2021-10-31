import {
  VERTICAL_AXIS,
  HORIZONTAL_AXIS,
  LETTER_TO_NUMBER,
  NUMBER_TO_LETTER
} from "../../config/chessboard-config";

export const pawn = {
  pawnMovement(piece, coordinate, gameState) {
    let possibleMovement = [];
    let startingRow, movementLimit, moveDirection;

    // Verify piece color
    if (piece.color === "white") {
      startingRow = 2;
      movementLimit = parseInt(coordinate[1]) === startingRow ? 2 : 1; // If we are on the starting row, we have double the movement
      moveDirection = 1;
    } else if (piece.color === "black") {
      startingRow = 7;
      movementLimit = parseInt(coordinate[1]) === startingRow ? -2 : -1; // If we are on the starting row, we have double the movement
      moveDirection = -1;
    }

    // Verify attack left
    let x = (LETTER_TO_NUMBER[coordinate[0]]) - 1;
    let y = parseInt(coordinate[1]) + moveDirection;
    let currentCoord = `${NUMBER_TO_LETTER[x]}${y}`;

    // Verify if we are within the board
    if ((x <= HORIZONTAL_AXIS.length && x >= 1) && (y <= VERTICAL_AXIS.length && y >= 1)) {
      if (gameState[currentCoord] && !gameState[currentCoord].includes(piece.color)) {
        // If the piece on this tile is a different color, the move is possible
        possibleMovement.push(currentCoord);
      }
    }

    // Verify attack right
    x = (LETTER_TO_NUMBER[coordinate[0]]) + 1;
    y = parseInt(coordinate[1]) + moveDirection;
    currentCoord = `${NUMBER_TO_LETTER[x]}${y}`;

    // Verify if we are within the board
    if ((x <= HORIZONTAL_AXIS.length && x >= 1) && (y <= VERTICAL_AXIS.length && y >= 1)) {
      if (gameState[currentCoord] && !gameState[currentCoord].includes(piece.color)) {
        // If the piece on this tile is a different color, the move is possible
        possibleMovement.push(currentCoord);
      }
    }

    // Verify move
    x = (LETTER_TO_NUMBER[coordinate[0]]);

    if (piece.color === "white") {
      for (y = parseInt(coordinate[1]) + moveDirection; y <= parseInt(coordinate[1]) + movementLimit; y += moveDirection) {
        currentCoord = `${NUMBER_TO_LETTER[x]}${y}`;

        // Verify if we are within the board
        if ((x <= HORIZONTAL_AXIS.length && x >= 1) && (y <= VERTICAL_AXIS.length && y >= 1)) {
          if (gameState[currentCoord] === undefined) {
            // If there is no piece on this tile, it is a possible move
            possibleMovement.push(currentCoord);
          }
          else {
            break;
          }
        }
      }
    } else if (piece.color === "black") {
      for (y = parseInt(coordinate[1]) + moveDirection; y >= parseInt(coordinate[1]) + movementLimit; y += moveDirection) {
        currentCoord = `${NUMBER_TO_LETTER[x]}${y}`;

        // Verify if we are within the board
        if ((x <= HORIZONTAL_AXIS.length && x >= 1) && (y <= VERTICAL_AXIS.length && y >= 1)) {
          if (gameState[currentCoord] === undefined) {
            // If there is no piece on this tile, it is a possible move
            possibleMovement.push(currentCoord);
          }
          else {
            break;
          }
        }
      }
    }

    return possibleMovement;
  }
}