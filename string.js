'use strict'

const isObject = require('is-object')
const otherwise = require('otherwise')
const sbo = require('sbo')

module.exports = sbo(function toString (x, {elseReturn = '', elseThrow} = {}) {
  if (typeof x === 'string') return x
  if (x instanceof String || Number.isFinite(x) || (isObject(x) && x.toString !== Object.prototype.toString)) return String(x)
  return otherwise({elseReturn, elseThrow}, TypeError)
})
