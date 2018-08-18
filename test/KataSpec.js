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

  it("should have a board", () =>{
    expect(game.board).to.be.ok;
  });

  it("should end when one player wins", () => {
    chai.spy.on(game, "checkWinner", () => true);
    expect(game.checkWinner()).to.be.ok;
  });

  it("should end when there is no room on the board", () =>{
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

  it('should start empty', () => {
    expect(board.itemsCount()).to.be.eq(0);
  });

  it('should add one item', () => {
    let item = [];
    board.addItem(item);
    expect(board.containsItem(item)).to.be.ok;
  });

  it('should add two items', () => {
    let item1 = [];
    let item2 = [];

    board.addItem(item1);
    board.addItem(item2);

    expect(board.containsItem(item1)).to.be.ok;
    expect(board.containsItem(item2)).to.be.ok;
  });

  it("should throw a error if try to add more than 9 items", () => {
    let items = new Array(9).fill([]);
    let not_filling_item = [0,0];

    board.items = items;
    expect(board.addItem.bind(board, not_filling_item)).to.throw("Can't add item; not enought room in board");
  });

});

describe('A Item', () => {

})
