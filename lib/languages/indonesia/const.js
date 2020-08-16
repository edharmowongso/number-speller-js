'use strict'

const SingleInteger = [
  'nol',
  'satu',
  'dua',
  'tiga',
  'empat',
  'lima',
  'enam',
  'tujuh',
  'delapan',
  'sembilan'
]

const NumberList = {
  10: 'sepuluh',
  11: 'sebelas',
  100: 'seratus',
  1000: 'seribu',
  1000000: 'juta',
  1000000000: 'miliar',
  1000000000000: 'triliun'
}

Object.freeze(SingleInteger)
Object.freeze(NumberList)

export default {
  SingleInteger,
  NumberList
}
