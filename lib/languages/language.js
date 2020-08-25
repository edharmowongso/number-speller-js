'use strict';

class LanguageBaseConverter {
  constructor(number) {
    this.number = `${number}`
  }

  Spelling() {
    throw new Error('Not Implemented')
  }

  SpellingComma() {
    throw new Error('Not Implemented')
  }

  GetDigitSeparator(number) {
    const arrayNumber = number.toString().split('')
    const length = arrayNumber.length

    let separated = []
    let idx = length - 1

    for (let i = 0; i < length; i++) {
      if (i != 0 && i % 3 == 0) {
        separated.push(".")
      }

      separated.push(arrayNumber[idx])
      idx -= 1
    }

    return separated.join('')
  }

  GetCommaSeparator() {
    const splitted = this.number.split('.')
    const zero = ['0']
    const lastIdx = splitted.length - 1
    const latestArray = splitted[lastIdx].toString()

    if (splitted.length === 2 && latestArray !== '0') {
      zero.push(latestArray)

      return zero[zero.length - 1]
    }

    return null
  }

  GetSpellingNumber() {
    throw new Error('Not Implemented')
  }

  GetHundreds() {
    throw new Error('Not Implemented')
  }

  GetThousands() {
    throw new Error('Not Implemented')
  }

  GetMillions() {
    throw new Error('Not Implemented')
  }

  GetBillions() {
    throw new Error('Not Implemented')
  }

  GetTrillions() {
    throw new Error('Not Implemented')
  }

  CheckZeroValue() {
    throw new Error('Not Implemented')
  }
}

module.exports = LanguageBaseConverter
