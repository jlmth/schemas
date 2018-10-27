module.exports = {
  code: {
    description: 'The chosen or generated voucher code',
    example: '1234 1234 1234',
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  format: {
    description: 'The format this voucher conforms to',
    example: 'xxxx xxxx xxxx',
    type: 'string'
  },
  format_type: {
    description: '',
    type: 'string',
    'enum': [
      'numeric',
      'alphanumeric',
      'alphabetic'
    ]
  },
  amount: {
    description: 'decimal type',
    example: '10.99',
    anyOf: [
      {
        type: 'number',
        minimum: 0
      },
      {
        type: 'null'
      }
    ]
  },
  amount_cents: {
    description: '',
    anyOf: [
      {
        type: 'integer',
        minimum: 0
      },
      {
        type: 'null'
      }
    ]
  },
  amount_max: {
    description: '',
    anyOf: [
      {
        type: 'number',
        minimum: 0
      },
      {
        type: 'null'
      }
    ]
  },
  currency: {
    description: '',
    type: 'string'
  },
  custom: {
    description: '',
    type: 'object'
  },
  metadata: {
    description: '',
    type: 'object'
  },
  issuable: {
    description: '',
    type: 'boolean'
  },
  reissuable: {
    description: '',
    type: 'boolean'
  },
  issuer: {
    description: '',
    type: 'string'
  },
  customer: {
    description: '',
    anyOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  comment: {
    description: '',
    type: 'string',
    maxLength: 1024
  },
  expires_at: {
    description: '',
    type: 'string',
    format: 'date-time'
  },
  barcodes: {
    description: '',
    type: 'object'
  },
  title: {
    description: '',
    type: 'string'
  },
  partial_redemption: {
    description: '',
    type: 'boolean'
  },
  active: {
    description: '',
    type: 'boolean'
  },
  bound_to: {
    description: '',
    type: 'object'
  },
  namespace: {
    description: '',
    type: 'string'
  },
  type: {
    description: '',
    type: 'string',
    'enum': [
      'amount',
      'discount',
      'product'
    ]
  },
  regions: {
    description: '',
    type: 'array',
    minItems: 1,
    maxItems: 1,
    items: {
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
      ]
    }
  },
  limited_to_region: {
    description: '',
    type: 'boolean'
  },
  refundable: {
    description: '',
    type: 'boolean'
  },
  mutable: {
    description: '',
    type: 'boolean'
  },
  exchange_for_cash: {
    description: '',
    type: 'boolean'
  },
  restriction_single_transaction: {
    description: '',
    type: 'boolean'
  }
}