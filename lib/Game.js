"use strict"

class Game {
  constructor(playerX, playerO) {
    this._playerX = playerX || {};
    this._playerO = playerO || {};
  }

  get playerX () {
    return this._playerX;
  }

  get playerO () {
    return this._playerO;
  }

  set playerX (player) {
    this._playerX = playerX;
  }

  set playerO (player) {
    this._playerO = playerO;
  }

  checkWinner (input) {
    let winning_patterns = [
        ["11", "12", "13"],
        ["21", "22", "23"],
        ["31", "32", "33"],
        ["11", "21", "31"],
        ["12", "22", "32"],
        ["13", "23", "33"],
        ["11", "22", "33"],
        ["13", "22", "31"]
    ]
    let max_winning_pattern = winning_patterns.length;

    while (max_winning_pattern--) {
      let matched_count = 0;
      let max_item = input.length;
      let current_pattern = winning_patterns[max_winning_pattern];
      while (max_item-- && matched_count !=3) {
        if (current_pattern.includes(input[max_item])) {
          matched_count += 1;
        }
        if (matched_count === 3) {
          return true;
        }
      }
    }

    return false;
  }

  hasSpace () {
    const MAX_ITEMS = 9;
    return this.playerX.itemsCount + this.playerO.itemsCount < 9;
  };

  resolve (){
    if (this.checkWinner(this._playerX.items)) {
      return "Game over. Result: player X wins the game!!";
    }

    if (this.checkWinner(this._playerO.items)) {
      return "Game over. Result: player O wins the game!!";
    }

    if (this.playerX.itemsCount + this.playerO.itemsCount === 9) {
      return "Game ends in draw. Try again!";
    }
  }

};

module.exports = Game
