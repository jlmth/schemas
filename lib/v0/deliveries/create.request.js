const items = require('./items').create

const address = {
  type: 'object',
  additionalProperties: false,
  properties: {
    lines: {
      oneOf: [
        {
          type: 'array',
          minItems: 1,
          maxItems: 4,
          items: {
            type: 'string',
            minLength: 1
          }
        },
        {
          type: 'null'
        }
      ]
    },
    street: {
      oneOf: [
        {
          type: 'string'
        },
        {
          type: 'null'
        }
      ]
    },
    street_number: {
      oneOf: [
        {
          type: 'string'
        },
        {
          type: 'null'
        }
      ]
    },
    locality: {
      oneOf: [
        {
          type: 'string'
        },
        {
          type: 'null'
        }
      ]
    },
    region: {
      oneOf: [
        {
          type: 'string'
        },
        {
          type: 'null'
        }
      ]
    },
    postal_code: {
      oneOf: [
        {
          type: 'string',
          maxLength: 10
        },
        {
          type: 'null'
        }
      ]
    },
    country: {
      oneOf: [
        {
          type: 'string',
          minLength: 2,
          maxLength: 2,
          pattern: '^[A-Z]{2}$'
        },
        {
          type: 'null'
        }
      ],
      'default': null
    },
    type: {
      oneOf: [
        {
          type: 'string',
          'enum': [
            'delivery',
            'billing'
          ]
        },
        {
          type: 'null'
        }
      ]
    }
  },
  required: [
    'lines',
    'street',
    'street_number',
    'locality',
    'region',
    'postal_code',
    'country',
    'type'
  ]
}

module.exports = {
  $id: 'https://schemas.tillhub.com/v0/deliveries.create.request.schema.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  required: [
    'items'
  ],
  properties: {
    order: {
      description: 'the reference to a Tillhub order',
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
    open: {
      desciption: 'the \'open\' status flag',
      type: 'boolean',
      default: 'true'
    },
    deleted: {
      desciption: 'the \'deleted\' status flag',
      type: 'boolean',
      default: 'false'
    },
    ordered_at: {
      oneOf: [
        {
          type: 'string',
          format: 'date-time'
        },
        {
          type: 'null'
        }
      ]
    },
    received: {
      desciption: 'the \'received\' status flag',
      type: 'boolean',
      default: 'false'
    },
    delivered: {
      desciption: 'the \'delivered\' status flag',
      type: 'boolean',
      default: 'false'
    },
    dispatched: {
      desciption: 'the \'delivered\' status flag',
      type: 'boolean',
      default: 'false'
    },
    revoked: {
      desciption: 'the \'revoked\' status flag',
      type: 'boolean',
      default: 'false'
    },
    received_at: {
      oneOf: [
        {
          type: 'string',
          format: 'date-time'
        },
        {
          type: 'null'
        }
      ]
    },
    dispatched_at: {
      oneOf: [
        {
          type: 'string',
          format: 'date-time'
        },
        {
          type: 'null'
        }
      ]
    },
    delivered_at: {
      oneOf: [
        {
          type: 'string',
          format: 'date-time'
        },
        {
          type: 'null'
        }
      ]
    },
    revoked_at: {
      description: 'time when a delivery has been rejected or cancelled',
      oneOf: [
        {
          type: 'string',
          format: 'date-time'
        },
        {
          type: 'null'
        }
      ]
    },
    comments: {
      oneOf: [
        {
          type: 'string',
          minLength: 1,
          maxLength: 4096
        },
        {
          type: 'null'
        }
      ]
    },
    from: {
      descrption: 'from which Tillhub resource, that is able to handle stock, a delivery is coming from. E.g. branch, warehouse, shelve, client',
      oneOf: [
        {
          type: 'string',
          minLength: 1,
          maxLength: 4096
        },
        {
          type: 'null'
        }
      ]
    },
    to: {
      descrption: 'from which Tillhub resource, that is able to handle stock, a delivery is going to. E.g. branch, warehouse, shelve, client',
      oneOf: [
        {
          type: 'string',
          minLength: 1,
          maxLength: 4096
        },
        {
          type: 'null'
        }
      ]
    },
    recipient: {
      type: 'object',
      additionalProperties: false,
      properties: {
        address
      }
    },
    sender: {
      type: 'object',
      properties: {
        address
      }
    },
    metadata: {
      type: 'object'
    },
    orders: {
      description: 'a list of references to a number of orders',
      type: 'array',
      minItems: 1,
      items: {
        additionalProperties: false,
        type: 'object',
        required: [
          'id'
        ],
        properties: {
          id: {
            type: 'string',
            format: 'uuid'
          }
        }
      }
    },
    issuer: {
      type: 'object'
    },
    items
  }
}