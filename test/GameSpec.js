"use strict";

import chai from 'chai';
const expect = chai.expect;

describe("A Game", () => {
  const Game = require('../lib/Game.js')
  let game

  beforeEach(() => {
    game = new Game();
  });

  it("should have cross and circle players", () =>{
    expect(game.playerX).to.be.ok;
    expect(game.playerO).to.be.ok;
  });

  context("that applies for a rules", () => {

    it('should check for three in a row', () => {
      let win_input_1 = ["11", "12", "21", "13"]
      let win_input_2 = ["21", "22", "31", "32", "23"]
      let win_input_3 = ["31", "32", "33"]
      let input2 = ["11", "12", "23"]

      expect(game.checkWinner(win_input_1)).to.be.ok;
      expect(game.checkWinner(win_input_2)).to.be.ok;
      expect(game.checkWinner(win_input_3)).to.be.ok;
      expect(game.checkWinner(input2)).to.not.be.ok;
    });

    it('should check for three in a colummn', () => {
      let win_input_1 = ["11", "21", "31", "13"]
      let win_input_2 = ["21", "12", "32", "22", "23"]
      let win_input_3 = ["13", "23", "33"]
      let input2 = ["11", "12", "23"]

      expect(game.checkWinner(win_input_1)).to.be.ok;
      expect(game.checkWinner(win_input_2)).to.be.ok;
      expect(game.checkWinner(win_input_3)).to.be.ok;
      expect(game.checkWinner(input2)).to.not.be.ok;
    });

    it('should check for three in a diagonal', () => {
      let win_input_1 = ["11", "22", "33", "13"]
      let win_input_2 = ["13", "22", "31", "22", "23"]

      expect(game.checkWinner(win_input_1)).to.be.ok;
      expect(game.checkWinner(win_input_2)).to.be.ok;
    })
  });

  context('that resolves', () => {
    const Player = require('../lib/Player.js')
    let game, playerX, playerO;

    beforeEach(() => {
      playerX = new Player();
      playerO = new Player();
      game = new Game(playerX, playerO);
    });

    it("could end with player X as winner", () => {
      let winnig_setup = ["11", "22", "33"];
      let not_winning_setup = ["12", "23"];

      game.playerX.items = winnig_setup
      game.playerO.items = not_winning_setup;

      expect(game.resolve()).to.eq("Game over. Result: player X wins the game!!");
    });

    it("could end with player O as winner", () => {
      let winnig_setup = ["11", "22", "33"];
      let not_winning_setup = ["12", "23"];

      game.playerX.items = not_winning_setup;
      game.playerO.items = winnig_setup;

      expect(game.resolve()).to.eq("Game over. Result: player O wins the game!!");
    });

    it("could end with Draw", () => {
      let not_winning_setup1 = ["11", "13", "21", "32", "33"];
      let not_winning_setup2 = ["12", "22", "23", "31"];

      game.playerX.items = not_winning_setup1;
      game.playerO.items = not_winning_setup2;

      expect(game.resolve()).to.eq("Game ends in draw. Try again!");
    });
  });

});
