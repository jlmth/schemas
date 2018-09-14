const test = require('tape')
const validate = require('../helpers/validate-schema')

test('PDFs: create schema validation', function (t) {
  t.plan(2)
  const createRequest = require('../../lib/v0/pdfs').templates.deliveries.create.request
  const { valid, error } = validate(createRequest)
  t.ok(valid, 'create schema is valid')
  t.error(error, 'should not get any error')
  t.end()
})
