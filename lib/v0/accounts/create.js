const base = require('./base')

module.exports.request = {
  $id: 'https://schemas.tillhub.com/v0/accounts.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  required: [
    'type',
    'name'
  ],
  properties: base,
  type: 'object'
}
