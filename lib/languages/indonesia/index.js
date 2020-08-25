'use strict'

const { SingleInteger, NumberList } = require("./const.js")
const LanguageBaseConverter = require("../language")

class IndonesiaConverter extends LanguageBaseConverter {
  Spelling() {
    let comma = super.GetCommaSeparator()
    let separated = super.GetDigitSeparator(Math.floor(Number(this.number)))
    let array = separated.split('.')
    let length = array.length
    let spelledNumber = []

    for(let i = 0; i < length; i++) {
      spelledNumber.push(this.GetSpellingNumber(i, array[i]))
    }

    spelledNumber = spelledNumber.reverse().join(' ')

    if (!comma) {
      return this.CheckZeroValue(spelledNumber)[0]
    }

    return `${this.CheckZeroValue(spelledNumber)[0]} ${this.SpellingComma(comma)}`
  }

  SpellingComma(value) {
    let data = []
    data.push('koma')
    let temp = value.toString().split('')
    temp.forEach(num => {
      data.push(SingleInteger[Number(num)])
    })

    return data.join(' ')
  }

  GetSpellingNumber(block, definedNumber) {
    let arrayNumber = definedNumber.split('').map(i => { return Number(i) })

    const blocks = {
      0: arrayNumber => {
        return this.GetHundreds(arrayNumber)
      },
      1: arrayNumber => {
        return this.GetThousands(arrayNumber)
      },
      2: arrayNumber => {
        return this.GetMillions(arrayNumber)
      },
      3: arrayNumber => {
        return this.GetBillions(arrayNumber)
      },
      4: arrayNumber => {
        return this.GetTrillions(arrayNumber)
      }
    }

    const definedBlock = blocks[block]

    if (!definedBlock) {
      throw new Error('Exceeds the calculation function')
    }

    return definedBlock(arrayNumber)
  }

  GetHundreds(arrayNumber) {
    const data = []
    let temp = arrayNumber[0]

    if (arrayNumber.length === 1) {
      return data.concat(SingleInteger[temp])
    } else if (arrayNumber.length === 2) {
      if (arrayNumber[1] === 1) {
        if (temp === 1 || temp === 0) {
          return data.concat(NumberList[10 + temp])
        } else {
          return data.concat(SingleInteger[temp]).concat('belas')
        }
      } else {
        if (temp !== 0) {
          return data.concat(
            SingleInteger[arrayNumber[1]]
          ).concat('puluh').concat(SingleInteger[temp])
        } else {
          return data.concat(
            SingleInteger[arrayNumber[1]]
          ).concat('puluh')
        }
      }
    }
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
    if (num[0] === 'nol' || num === 'nol') {
      return ['nol']
    }

    let check = num.split(SingleInteger[0])

    if (check.length < 1) {
      return check
    }

    return check.map(idx => {
      return idx.replace('nol', '').replace(/[\s|\,]/g, ' ')
    })
  }
}

module.exports = IndonesiaConverter
