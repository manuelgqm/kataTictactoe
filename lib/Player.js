"use strict"

class Player {

  constructor () {
    this._items = new Array;
  }

  set items (value){
    this._items = value;
  }

  get items () {
    return this._items;
  }

  get itemsCount () {
    return this._items.length;
  }

  addItem (item) {
    this._items.push(item);
  }

  containsItem (item) {
    return this._items.includes(item);
  }

};

module.exports = Player;
