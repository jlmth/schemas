module.exports = {
  name: {
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
  runtime: {
    description: 'Define where this function is runnable.',
    type: 'string',
    'enum': [
      'pos',
      'nodejs8x',
      'python27'
    ]
  },
  type: {
    description: 'Resource type that will drive runtime specific behaviour. Indicates whether this function needs ingress or egress.',
    type: 'string',
    'enum': [
      'pubsub',
      'http',
      'local'
    ]
  },
  'function': {
    description: 'Source code for this function, if applies.',
    oneOf: [
      {
        type: 'string',
        minLength: 1,
        maxLength: 10240
      },
      {
        type: 'null'
      }
    ]
  },
  topic: {
    description: 'Topic for this function, if applies.',
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
  handler: {
    description: 'Define which function specific handler to use, if a function has more than one handler, if applies.',
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
  deps: {
    description: 'Installable dependencies for this function, if applies.',
    oneOf: [
      {
        type: 'string',
        minLength: 1,
        maxLength: 5120
      },
      {
        type: 'null'
      }
    ]
  },
  client_id: {
    type: 'string',
    maxLength: 128
  },
  active: {
    type: 'boolean'
  },
  deleted: {
    type: 'boolean'
  },
  configuration: {
    description: 'Function configuration that e.g. drives specific local client behaviour',
    type: 'object',
    additionalProperties: false,
    properties: {
      class: {
        description: 'Define which e.g. client local function implementation to use.',
        type: 'string',
        enum: [
          'product',
          'discount',
          'voucher_action',
          'custom_function'
        ]
      },
      resource: {
        description: 'Store a static resource e.g. a product that this function will be bound to.',
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
      payload: {
        description: 'Store a static payload that this function will be passed.',
        oneOf: [
          { type: 'string', maxLength: 16384 },
          { type: 'object' },
          { type: 'null' }
        ]
      }
    },
    required: [

    ]
  }
}