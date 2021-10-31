export const playerTurnService = {
  playerTurn: 'white',

  isWhiteTurn() {
    return this.playerTurn === 'white';
  },

  isBlackTurn() {
    return this.playerTurn === 'black';
  },

  changeTurn() {
    if (this.isWhiteTurn()) {
      this.playerTurn = 'black';
    } else if (this.isBlackTurn()) {
      this.playerTurn = 'white';
    }
  },

  isWrongTurn(piece) {
    return piece.color !== this.playerTurn;
  }
}