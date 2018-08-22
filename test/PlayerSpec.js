"use strict";

import chai from 'chai';
const expect = chai.expect;

describe('A player', () => {
  const Player = require("../lib/Player");
  let player

  beforeEach (() =>{
    player = new Player();
  });

  it('should start empty', () => {
    expect(player.itemsCount).to.be.eq(0);
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
