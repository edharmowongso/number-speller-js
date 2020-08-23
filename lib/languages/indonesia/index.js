'use strict'

const { SingleInteger, NumberList } = require("./const.js")
const LanguageBaseConverter = require("../language")

class IndonesiaConverter extends LanguageBaseConverter {
  Spelling(block) {
    let arrayNumber = this.number.split('').map(i => { return Number(i) })

    const blocks = {
      0: this.GetHundreds(arrayNumber),
      1: this.GetThousands(arrayNumber),
      2: this.GetMillions(arrayNumber),
      3: this.GetBillions(arrayNumber),
      4: this.GetTrillions(arrayNumber)
    }

    const definedBlock = blocks[block]

    if (!definedBlock) {
      throw new Error('Exceeds the calculation function')
    }

    return definedBlock
  }

  GetHundreds(arrayNumber) {

  }

  GetThousands(arrayNumber) {

  }

  GetMillions(arrayNumber) {

  }

  GetBillions(arrayNumber) {

  }

  GetTrillions(arrayNumber) {

  }

  CheckZeroValue(num) {
    if (num[0] === 'zero' || num === 'zero') {
      return ['zero']
    }
  }
}

module.exports = IndonesiaConverter
