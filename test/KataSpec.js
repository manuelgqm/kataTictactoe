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
  });

  it("has a board", () =>{
    expect(game.board).to.be.ok;
  });

  it("Ends when one player wins", () => {
    chai.spy.on(game, "checkWinner", () => true);
    expect(game.checkWinner()).to.be.ok;
  });

  it("Ends when there is no room on the board", () =>{
    let board = {};
    chai.spy.on(board, "room", () => false);
    game.board = board;
    expect(game.board.room()).to.not.be.ok;
  });

})

describe('A board', () => {
  const Board = require("../lib/Board");
  let board

  beforeEach (() =>{
    board = new Board();
  })

  it('starts empty', () => {
    expect(board.itemsCount()).to.be.eq(0);
  });

  it('adds items', () => {
    let item = {};
    board.addItem(item);
    expect(board.itemsCount()).to.be.eq(1);
  })
})
