module.exports = {
  type: 'object',
  required: [
    'accounts',
    'expenses',
    'taxes',
    'payment_options',
    'branches_registers',
    'staff'
  ],
  properties: {
    accounts: {
      type: 'string',
      'enum': [
        'de_skr_03',
        'de_skr_04',
        'ch'
      ]
    },
    expenses: {
      type: 'string',
      'enum': [
        'standard_german',
        'standard_english',
        'fleurop'
      ]
    },
    taxes: {
      type: 'string',
      'enum': [
        'de',
        'ch'
      ]
    },
    payment_options: {
      'type': 'array',
      'items': {
        'type': 'string',
        'enum': [
          'voucher',
          'ccvfly',
          'rechnung',
          'amex',
          'concardis',
          'bar',
          'card_circuits'
        ]
      }
    }
  },
  branches_registers: {
    type: 'string',
    'enum': [
      'basic',
      'basic_v1'
    ]
  },
  staff: {
    type: 'string',
    'enum': [
      'default'
    ]
  }
}