"use strict"

class Board {
  constructor () {
    this._items = new Array;
  }

  set items (value){
    this._items = value;
  }

  itemsCount () {
    return this._items.length;
  }

  addItem (item) {
    if (this._items.length === 9) {
      throw new Error("Can't add item; not enought room in board");
    }
    this._items.push(item);
  }

  containsItem (item) {
    return this._items.includes(item);
  }

};

module.exports = Board;
