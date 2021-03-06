const key = {
  type: 'object',
  additionalProperties: false,
  properties: {
    mq_account: {
      type: 'object',
      properties: {
        key: {
          type: 'object'
        }
      }
    }
  }
}

module.exports = {
  user: {
    type: 'object',
    additionalProperties: false,
    properties: {
      id: {
        type: 'string',
        minLength: 5,
        maxLength: 64
      },
      email: {
        type: 'string',
        format: 'email'
      }
    },
    oneOf: [
      {
        required: [
          'email'
        ]
      },
      {
        required: [
          'id'
        ]
      }
    ],
    required: []
  },
  description: {
    oneOf: [
      {
        type: 'string',
        minLength: 1,
        maxLength: 32
      },
      {
        type: 'null'
      }
    ]
  },
  blocked: {
    type: 'boolean',
    default: false
  },
  deleted: {
    type: 'boolean',
    default: false
  },
  active: {
    type: 'boolean',
    default: true
  },
  metadata: {
    type: 'object',
    maxProperties: 10
  },
  role: {
    oneOf: [
      {
        type: 'string',
        'enum': [
          'admin',
          'manager',
          'serviceaccount',
          'franchisee'
        ]
      },
      {
        type: 'null'
      }
    ]
  },
  user_id: {
    type: 'string'
  },
  configuration_id: {
    type: 'string'
  },
  groups: {
    oneOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  scopes: {
    oneOf: [
      {
        type: 'array',
        items: {
          type: 'string'
        }
      },
      {
        type: 'null'
      }
    ]
  },
  attributes: {
    oneOf: [
      {
        type: 'array',
        items: {
          type: 'string'
        }
      },
      {
        type: 'null'
      }
    ]
  },
  parents: {
    oneOf: [
      {
        type: 'array',
        items: {
          type: 'string'
        }
      },
      {
        type: 'null'
      }
    ]
  },
  children: {
    oneOf: [
      {
        type: 'array',
        items: {
          type: 'string'
        }
      },
      {
        type: 'null'
      }
    ]
  },
  api_key: {
    oneOf: [
      {
        type: 'string',
        minLength: 1,
        maxLength: 64
      },
      {
        type: 'null'
      }
    ]
  },
  key: {
    oneOf: [
      {
        ...key
      },
      {
        type: 'null'
      }
    ]
  }
}
