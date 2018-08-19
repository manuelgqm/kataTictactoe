"use strict"

import chai from 'chai';
import spies from 'chai-spies';
const expect = chai.expect;

chai.use(spies);

describe("A Game", () => {
  const Game = require('../lib/Game.js')
  let game

  beforeEach(() => {
    let playerX = { items: new Array(4).fill("")};
    let playerO = { items: new Array(4).fill("")};
    game = new Game(playerX, playerO);
  });

  it("should have cross and circle players", () =>{
    expect(game.playerX).to.be.ok;
    expect(game.playerO).to.be.ok;
  });

  it("should end when one player wins", () => {
    chai.spy.on(game, "checkWinner", () => true);
    expect(game.checkWinner()).to.be.ok;
  });

  it("should end when there is no space left", () =>{
    expect(game.hasSpace()).to.not.be.ok;
  });

  it('should win if three in a row', () => {
    let win_input_1 = "11;12;21;13"
    let win_input_2 = "21;22;;31;32;23"
    let win_input_3 = "31;32;33"
    let input2 = "11;12;23"

    expect(game.checkWinner(win_input_1)).to.be.ok;
    expect(game.checkWinner(win_input_2)).to.be.ok;
    expect(game.checkWinner(win_input_3)).to.be.ok;
    expect(game.checkWinner(input2)).to.not.be.ok;
  });

  it('should return a winner if three in a colummn', () => {
    let win_input_1 = "11;21;31;13"
    let win_input_2 = "21;12;;32;22;23"
    let win_input_3 = "13;23;33"
    let input2 = "11;12;23"

    expect(game.checkWinner(win_input_1)).to.be.ok;
    expect(game.checkWinner(win_input_2)).to.be.ok;
    expect(game.checkWinner(win_input_3)).to.be.ok;
    expect(game.checkWinner(input2)).to.not.be.ok;
  });

  it('should return a winner when three in a diagonal', () => {
    let win_input_1 = "11;22;33;13"
    let win_input_2 = "13;22;;31;22;23"

    expect(game.checkWinner(win_input_1)).to.be.ok;
    expect(game.checkWinner(win_input_2)).to.be.ok;
  })

})

describe('A player', () => {
  const Player = require("../lib/Player");
  let player

  beforeEach (() =>{
    player = new Player();
  })

  it('should start empty', () => {
    expect(player.itemsCount()).to.be.eq(0);
  });

  it('should add one item', () => {
    let item = [];
    player.addItem(item);
    expect(player.containsItem(item)).to.be.ok;
  });

  it('should add two items', () => {
    let item1 = [];
    let item2 = [];

    player.addItem(item1);
    player.addItem(item2);

    expect(player.containsItem(item1)).to.be.ok;
    expect(player.containsItem(item2)).to.be.ok;
  });

});

describe('A player', () => {

})

xdescribe('A Tic Tac Toe Game', () => {
  const Game = require('../lib/Game.js')
  const Player = require("../lib/Player");

  it("should win the X", () => {
    let playerX = new Player();
    let playerO = new Player();
    let game = new Game(playerX, playerO);

    game.playerX.addItem("11");
    game.playerO.addItem("12");
    game.playerX.addItem("22");
    game.playerO.addItem("23");
    game.playerX.addItem("33");

    expect(game.checkWinner()).to.eq("X");
  });
});
