'use strict'

const otherwise = require('otherwise')
const qfn = require('qfn')
const sbo = require('sbo')

module.exports = sbo(function toNumber (x, {elseReturn = 0, elseThrow, finite = true, round = false} = {}) {
  const maybeRound = qfn(n => Math.round(n), round)
  const number = x === null ? NaN : Number(x)
  return maybeRound(Number.isFinite(number) || (!finite && !Number.isNaN(number)) ? number : otherwise({elseReturn, elseThrow}, TypeError))
})
