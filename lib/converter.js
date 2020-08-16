'use strict'

import IndonesiaConverter from './languages/indonesia'
import EnglishConverter from './languages/english'

const CONVERTER = {
  EN: number => {
    return new EnglishConverter(number)
  },
  ID: number => {
    return new IndonesiaConverter(number)
  }
}

export function SpellingNumber(number, locale) {
  const converter = CONVERTER[locale](number)

  if (!converter) throw new Error('Invalid locale!')

  const words = converter.Spelling()

  return words
}
