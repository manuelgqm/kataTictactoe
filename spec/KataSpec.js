"use strict"

import install from 'jasmine-es6';
install();

describe("Pacman", () => {
  const Kata = require('../lib/Kata.js')
  var kata

  beforeEach(() => {
    kata = new Kata()
  })

  it("dummy test", () => {
    expect(kata.is_initialized()).toBeFalsy()
  })

})
