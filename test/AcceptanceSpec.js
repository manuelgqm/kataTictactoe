"use strict";

import chai from 'chai';
const expect = chai.expect;

context('Acceptance Tic Tac Toe Game test', () => {
  const Game = require("../lib/Game");
  const Player = require("../lib/Player");
  let playerX,
    playerO,
    game;

  beforeEach(() => {
    playerX = new Player();
    playerO = new Player();
    game = new Game(playerX, playerO);
  });

  it("could end with player X as winner", () => {
    game.playerX.addItem("11");
    game.playerO.addItem("12");
    game.playerX.addItem("22");
    game.playerO.addItem("23");
    game.playerX.addItem("33");

    expect(game.resolve()).to.eq("Game over. Result: player X wins the game!!");
  });

  it("could end with player O as winner", () => {
    game.playerX.addItem("11");
    game.playerO.addItem("31");
    game.playerX.addItem("22");
    game.playerO.addItem("32");
    game.playerX.addItem("32");
    game.playerO.addItem("33");

    expect(game.resolve()).to.eq("Game over. Result: player O wins the game!!");
  });

  it("could end with Draw", () => {
    game.playerX.addItem("11");
    game.playerO.addItem("12");
    game.playerX.addItem("13");

    game.playerO.addItem("22");
    game.playerX.addItem("21");
    game.playerO.addItem("23");

    game.playerX.addItem("32");
    game.playerO.addItem("31");
    game.playerX.addItem("33");

    expect(game.resolve()).to.eq("Game ends in draw. Try again!");
  });
});
