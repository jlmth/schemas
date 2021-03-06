const scanPrefix = require('./scan_prefix')

module.exports = {
  description: 'Define voucher properties that override the voucher template used.',
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    currency: {
      type: 'string',
      description: 'The three letter [ISO currency](https://en.wikipedia.org/wiki/ISO_4217) of this item.',
      example: 'EUR',
      minLength: 3,
      maxLength: 3
    },
    amount: {
      type: 'number',
      description: 'The value as .2-Decimal.',
      example: '47.02',
      minimum: 0,
      multipleOf: 0.01
    },
    scan_prefix: scanPrefix,
    code: {
      description: 'In order to set a custom code, the template attribute "code_generation" must be set to "scan". Otherwise the API will generate a random code according to the provided format from the template.',
      type: 'string',
      maxLength: 128
    }
  }
}
