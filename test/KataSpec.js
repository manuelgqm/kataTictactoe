"use strict"

import expect from 'expect.js';

describe("Kata", () => {
  const Kata = require('../lib/Kata.js')
  var kata

  beforeEach(() => {
    kata = new Kata()
  })

  it("dummy test", () => {
    expect(kata.is_initialized()).to.be.ok();
  })

})
