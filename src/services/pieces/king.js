import {
  VERTICAL_AXIS,
  HORIZONTAL_AXIS,
  LETTER_TO_NUMBER,
  NUMBER_TO_LETTER
} from "../../config/chessboard-config";

export const king = {
  kingMovement(piece, coordinate, gameState){
    let possibleMovement = [];

    // Verify left
    let x = (LETTER_TO_NUMBER[coordinate[0]]) - 1;
    let y = parseInt(coordinate[1]);
    let currentCoord = `${NUMBER_TO_LETTER[x]}${y}`;

    // Verify if we are within the board
    if((x <= HORIZONTAL_AXIS.length && x >= 1) && (y <= VERTICAL_AXIS.length && y >= 1)){
      if (gameState[currentCoord] === undefined) {
        // If there is no piece on this tile, it is a possible move
        possibleMovement.push(currentCoord);
      } else if (!gameState[currentCoord].includes(piece.color)) {
        // If the piece on this tile is a different color, the move is possible
        possibleMovement.push(currentCoord);
      }
    }

    // Verify right
    x = (LETTER_TO_NUMBER[coordinate[0]]) + 1;
    y = parseInt(coordinate[1]);
    currentCoord = `${NUMBER_TO_LETTER[x]}${y}`;

    // Verify if we are within the board
    if((x <= HORIZONTAL_AXIS.length && x >= 1) && (y <= VERTICAL_AXIS.length && y >= 1)){
      if (gameState[currentCoord] === undefined) {
        // If there is no piece on this tile, it is a possible move
        possibleMovement.push(currentCoord);
      } else if (!gameState[currentCoord].includes(piece.color)) {
        // If the piece on this tile is a different color, the move is possible
        possibleMovement.push(currentCoord);
      }
    }

    // Verify up
    y = parseInt(coordinate[1]) + 1;

    for(x = (LETTER_TO_NUMBER[coordinate[0]]) - 1; x <= (LETTER_TO_NUMBER[coordinate[0]]) + 1; x++){
      currentCoord = `${NUMBER_TO_LETTER[x]}${y}`;

      // Verify if we are within the board
      if((x <= HORIZONTAL_AXIS.length && x >= 1) && (y <= VERTICAL_AXIS.length && y >= 1)){
        if (gameState[currentCoord] === undefined) {
          // If there is no piece on this tile, it is a possible move
          possibleMovement.push(currentCoord);
        } else if (!gameState[currentCoord].includes(piece.color)) {
          // If the piece on this tile is a different color, the move is possible
          possibleMovement.push(currentCoord);
        }
      }
    }

    // Verify down
    y = parseInt(coordinate[1]) - 1;

    for(x = (LETTER_TO_NUMBER[coordinate[0]]) - 1; x <= (LETTER_TO_NUMBER[coordinate[0]]) + 1; x++){
      currentCoord = `${NUMBER_TO_LETTER[x]}${y}`;

      // Verify if we are within the board
      if((x <= HORIZONTAL_AXIS.length && x >= 1) && (y <= VERTICAL_AXIS.length && y >= 1)){
        if (gameState[currentCoord] === undefined) {
          // If there is no piece on this tile, it is a possible move
          possibleMovement.push(currentCoord);
        } else if (!gameState[currentCoord].includes(piece.color)) {
          // If the piece on this tile is a different color, the move is possible
          possibleMovement.push(currentCoord);
        }
      }
    }

    return possibleMovement;
  }
}