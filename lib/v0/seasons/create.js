const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/seasons.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  required: [
    'name',
    'from',
    'to'
  ],
  properties: base,
  type: 'object'
}
