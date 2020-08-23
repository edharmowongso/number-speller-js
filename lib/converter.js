'use strict'

const IndonesiaConverter = require('./languages/indonesia/')
const EnglishConverter = require('./languages/english/')
const CONVERTER = {
  EN: number => {
    return new EnglishConverter(number)
  },
  ID: number => {
    return new IndonesiaConverter(number)
  }
}

module.exports = {
  SpellingNumber: (number, locale) => {
    const converter = CONVERTER[locale](number)

    if (!converter) throw new Error('Invalid locale!')

    const words = converter.Spelling()

    return words
  }
}
