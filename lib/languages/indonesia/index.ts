'use strict'

import { SingleInteger, NumberList } from "./const";
import LanguageBaseConverter from "../language"

class IndonesiaConverter extends LanguageBaseConverter {
  Spelling(block): void {
    let arrayNumber: Array<number> = this.number.split('').map(i => { return Number(i) })

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

  protected GetHundreds(arrayNumber) {

  }

  protected GetThousands(arrayNumber) {

  }

  protected GetMillions(arrayNumber) {

  }

  protected GetBillions(arrayNumber) {

  }

  protected GetTrillions(arrayNumber) {

  }

  protected CheckZeroValue(num) {
    if (num[0] === 'zero' || num === 'zero') {
      return ['zero']
    }
  }
}

export default IndonesiaConverter
