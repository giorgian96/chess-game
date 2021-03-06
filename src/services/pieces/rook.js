import {
  VERTICAL_AXIS,
  HORIZONTAL_AXIS,
  LETTER_TO_NUMBER,
  NUMBER_TO_LETTER
} from "../../config/chessboard-config";

export const rook = {
  rookMovement(piece, coordinate, gameState) {
    let possibleMovement = [];

    // Verify right
    for (let x = (LETTER_TO_NUMBER[coordinate[0]] + 1); x <= HORIZONTAL_AXIS.length; x++) {
      let currentCoord = `${NUMBER_TO_LETTER[x]}${coordinate[1]}`;

      if (gameState[currentCoord] === undefined) {
        // If there is no piece on this tile, it is a possible move
        possibleMovement.push(currentCoord);
      } else if (!gameState[currentCoord].includes(piece.color)) {
        // If the piece on this tile is a different color, the move is possible, but we cannot continue
        possibleMovement.push(currentCoord);
        break;
      } else if (gameState[currentCoord].includes(piece.color)) {
        // If the piece on this tile is the same color, we cannot continue
        break;
      }
    }

    // Verify left
    for(let x = (LETTER_TO_NUMBER[coordinate[0]] - 1); x >= 1; x--){
      let currentCoord = `${NUMBER_TO_LETTER[x]}${coordinate[1]}`;

      if (gameState[currentCoord] === undefined) {
        // If there is no piece on this tile, it is a possible move
        possibleMovement.push(currentCoord);
      } else if (!gameState[currentCoord].includes(piece.color)) {
        // If the piece on this tile is a different color, the move is possible, but we cannot continue
        possibleMovement.push(currentCoord);
        break;
      } else if (gameState[currentCoord].includes(piece.color)) {
        // If the piece on this tile is the same color, we cannot continue
        break;
      }
    }

    // Verify up
    for(let y = (parseInt(coordinate[1]) + 1); y <= VERTICAL_AXIS.length; y++){
      let currentCoord = `${coordinate[0]}${y}`;

      if (gameState[currentCoord] === undefined) {
        // If there is no piece on this tile, it is a possible move
        possibleMovement.push(currentCoord);
      } else if (!gameState[currentCoord].includes(piece.color)) {
        // If the piece on this tile is a different color, the move is possible, but we cannot continue
        possibleMovement.push(currentCoord);
        break;
      } else if (gameState[currentCoord].includes(piece.color)) {
        // If the piece on this tile is the same color, we cannot continue
        break;
      }
    }

    // Verify down
    for(let y = (coordinate[1] - 1); y >= 1; y--){
      let currentCoord = `${coordinate[0]}${y}`;

      if (gameState[currentCoord] === undefined) {
        // If there is no piece on this tile, it is a possible move
        possibleMovement.push(currentCoord);
      } else if (!gameState[currentCoord].includes(piece.color)) {
        // If the piece on this tile is a different color, the move is possible, but we cannot continue
        possibleMovement.push(currentCoord);
        break;
      } else if (gameState[currentCoord].includes(piece.color)) {
        // If the piece on this tile is the same color, we cannot continue
        break;
      }
    }

    return possibleMovement;
  }
}