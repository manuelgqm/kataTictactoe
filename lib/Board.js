"use strict"

class Board {
  constructor (){
    this._items = new Array;
  }

  itemsCount (){
    return this._items.length;
  }

  addItem (item){
    this._items.push(item);
  }

};

module.exports = Board;
