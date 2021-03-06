const base = require('./base')
const defaultResponse = require('./default-response')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/loyalty_values.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  required: [
    'items'
  ],
  properties: base
}

module.exports.response = {
  $id: 'https://schemas.tillhub.com/v0/loyalty_values.create.response.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: true,
  type: 'object',
  required: [
    'id',
    'loyalty_system',
    'loyalty_card',
    'amount',
    'unit',
    'operation'
  ],
  properties: defaultResponse
}
