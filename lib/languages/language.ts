'use strict';

class LanguageBaseConverter {
  number: String

  constructor(number) {
    this.number = number
  }

  public Spelling(block) {
    throw new Error('Not Implemented')
  }
s
  protected GetHundreds(arrayNumber) {
    throw new Error('Not Implemented')
  }

  protected GetThousands(arrayNumber) {
    throw new Error('Not Implemented')
  }

  protected GetMillions(arrayNumber) {
    throw new Error('Not Implemented')
  }

  protected GetBillions(arrayNumber) {
    throw new Error('Not Implemented')
  }

  protected GetTrillions(arrayNumber) {
    throw new Error('Not Implemented')
  }

  protected CheckZeroValue(num) {
    throw new Error('Not Implemented')
  }
}

export default LanguageBaseConverter
