
//works in strict mode
'use strict'

//require the handler module.
//declaring a constant variable.
const { TransactionHandler } = require('sawtooth-sdk/processor/handler')


const {
  InvalidTransaction,
  InternalError
} = require('sawtooth-sdk/processor/exceptions')
const crypto = require('crypto')
const {TextEncoder, TextDecoder} = require('text-encoding/lib/encoding')

const _hash = (x) => crypto.createHash('sha512').update(x).digest('hex').toLowerCase()
var encoder = new TextEncoder('utf8')
var decoder = new TextDecoder('utf8')
const MIN_VALUE = 0
const CJ_FAMILY = 'match'
const CJ_NAMESPACE = _hash(CJ_FAMILY).substring(0, 6)
var addrList=[];


