import {
  VERTICAL_AXIS,
  HORIZONTAL_AXIS,
  LETTER_TO_NUMBER,
  NUMBER_TO_LETTER
} from "../../config/chessboard-config";

export const bishop = {
  bishopMovement(piece, coordinate, gameState){
    let possibleMovement = [];

    // Verify right and up
    let x = (LETTER_TO_NUMBER[coordinate[0]]) + 1;
    let y = parseInt(coordinate[1]) + 1;

    while(x <= HORIZONTAL_AXIS.length && y <= VERTICAL_AXIS.length){
      let currentCoord = `${NUMBER_TO_LETTER[x]}${y}`;

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

      x++;
      y++;
    }

    // Verify right and down
    x = (LETTER_TO_NUMBER[coordinate[0]]) + 1;
    y = parseInt(coordinate[1]) - 1;

    while(x <= HORIZONTAL_AXIS.length && y >= 1){
      let currentCoord = `${NUMBER_TO_LETTER[x]}${y}`;

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

      x++;
      y--;
    }

    // Verify left and up
    x = (LETTER_TO_NUMBER[coordinate[0]]) - 1;
    y = parseInt(coordinate[1]) + 1;

    while(x >= 1 && y <= VERTICAL_AXIS.length){
      let currentCoord = `${NUMBER_TO_LETTER[x]}${y}`;

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

      x--;
      y++;
    }

    // Verify left and down
    x = (LETTER_TO_NUMBER[coordinate[0]]) - 1;
    y = parseInt(coordinate[1]) - 1;

    while(x >= 1 && y >= 1){
      let currentCoord = `${NUMBER_TO_LETTER[x]}${y}`;

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

      x--;
      y--;
    }

    return possibleMovement;
  }
}