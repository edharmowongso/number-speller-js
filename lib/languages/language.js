'use strict';

class LanguageBaseConverter {
  constructor(number) {
    this.number = number
    console.log(number)
  }

  Spelling(block) {
    throw new Error('Not Implemented')
  }

  GetHundreds(arrayNumber) {
    throw new Error('Not Implemented')
  }

  GetThousands(arrayNumber) {
    throw new Error('Not Implemented')
  }

  GetMillions(arrayNumber) {
    throw new Error('Not Implemented')
  }

  GetBillions(arrayNumber) {
    throw new Error('Not Implemented')
  }

  GetTrillions(arrayNumber) {
    throw new Error('Not Implemented')
  }

  CheckZeroValue(num) {
    throw new Error('Not Implemented')
  }
}

module.exports = LanguageBaseConverter
