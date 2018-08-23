const address = require('../../common/address')

module.exports = {
  $id: 'https://schemas.tillhub.com/v0/pdfs.templates.deliveries.create.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  additionalProperties: false,
  type: 'object',
  properties: {
    delivery: {
      additionalProperties: false,
      type: 'object',
      properties: {
        id: {
          type: 'string'
        },
        created_at: {
          additionalProperties: false,
          type: 'string',
          format: 'date-time'
        },
        received_token: {
          type: 'string'
        },
        dispatched_token: {
          type: 'string'
        }
      },
      required: [
        'id'
      ]
    },
    img_url: {
      anyof: [
        {
          type: 'string'
        },
        {
          type: 'null'
        }
      ]
    },
    sender: {
      type: 'object',
      additionalProperties: false,
      properties: {
        firstname: {
          oneOf: [
            {
              type: 'string',
              minLength: 1
            },
            {
              type: 'null'
            }
          ]
        },
        lastname: {
          oneOf: [
            {
              type: 'string',
              minLength: 1
            },
            {
              type: 'null'
            }
          ]
        }
      }
    },
    addressee: {
      type: 'object',
      additionalProperties: false,
      properties: {
        firstname: {
          oneOf: [
            {
              type: 'string',
              minLength: 1
            },
            {
              type: 'null'
            }
          ]
        },
        lastname: {
          oneOf: [
            {
              type: 'string',
              minLength: 1
            },
            {
              type: 'null'
            }
          ]
        }
      }
    },
    recipient: {
      ...address
    },
    items: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object'
      }
    },
    text: {
      oneOf: [
        {
          type: 'string',
          minLength: 1
        },
        {
          type: 'null'
        }
      ]
    },
    from: {
      oneOf: [
        {
          type: 'string',
          format: 'uuid'
        },
        {
          type: 'null'
        }
      ]
    },
    to: {
      oneOf: [
        {
          type: 'string',
          format: 'uuid'
        },
        {
          type: 'null'
        }
      ]
    }
  },
  required: [
    'items',
    'delivery'
  ]
}