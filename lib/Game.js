"use strict"

class Game {
  constructor(board) {
    this._board = board || {};
  }

  get board (){
    return this._board;
  }

  set board (board){
    this._board = board;
  }

}

module.exports = Game
