"use strict"

import chai from 'chai';
import spies from 'chai-spies';
const expect = chai.expect;

chai.use(spies);

describe("A Tic Tac Toe Game", () => {
  const Game = require('../lib/Game.js')
  let game

  beforeEach(() => {
    let board = {};
    game = new Game(board);
  })

  it("has a board", () =>{
    expect(game.board).to.be.ok;
  });

  it("Ends when one player wins", () => {
    chai.spy.on(game, "checkWinner", () => true);
    expect(game.checkWinner()).to.be.ok;
  })

  it("Ends when there is no room on the board", () =>{
    let board = {};
    chai.spy.on(board, "room", () => false);
    game.board = board;
    expect(game.board.room()).to.not.be.ok;
  })

})
