'use strict'

import SpellingNumber from '../lib/converter'

export function main(number, locale = 'ID') {
  return SpellingNumber(number, locale)
}
