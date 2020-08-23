'use strict'

const { SpellingNumber } = require('../lib/converter')
const Spelling = (number, locale = 'ID') => {
  return SpellingNumber(number, locale)
}
