import {
  VERTICAL_AXIS,
  HORIZONTAL_AXIS,
  LETTER_TO_NUMBER,
  NUMBER_TO_LETTER
} from "../../config/chessboard-config";

export const knight = {
  knightMovement(piece, coordinate, gameState){
    let possibleMovement = [];

    // move 2 up 1 right
    let x = (LETTER_TO_NUMBER[coordinate[0]]) + 1;
    let y = parseInt(coordinate[1]) + 2;
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

    // move 1 up 2 right
    x = (LETTER_TO_NUMBER[coordinate[0]]) + 2;
    y = parseInt(coordinate[1]) + 1;
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

    // move 1 down 2 right
    x = (LETTER_TO_NUMBER[coordinate[0]]) + 2;
    y = parseInt(coordinate[1]) - 1;
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

    // move 2 down 1 right
    x = (LETTER_TO_NUMBER[coordinate[0]]) + 1;
    y = parseInt(coordinate[1]) - 2;
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

    // move 2 down 1 left
    x = (LETTER_TO_NUMBER[coordinate[0]]) - 1;
    y = parseInt(coordinate[1]) - 2;
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

    // move 1 down 2 left
    x = (LETTER_TO_NUMBER[coordinate[0]]) - 2;
    y = parseInt(coordinate[1]) - 1;
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

    // move 1 up 2 left
    x = (LETTER_TO_NUMBER[coordinate[0]]) - 2;
    y = parseInt(coordinate[1]) + 1;
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

    // move 2 up 1 left
    x = (LETTER_TO_NUMBER[coordinate[0]]) - 1;
    y = parseInt(coordinate[1]) + 2;
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

    return possibleMovement;
  }
}