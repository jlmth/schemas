module.exports = {
  active: {
    type: 'boolean'
  },
  type: {
    type: 'string',
    'enum': [
      'cash',
      'invoice',
      'card_opi',
      'card_concardis',
      'card_tim',
      'card_adyen',
      'gift_card',
      'default',
      'undefined',
      'voucher'
    ]
  },
  metadata: {
    type: 'object'
  },
  name: {
    type: 'string',
    maxLength: 64
  },
  cost_center: {
    type: 'string',
    maxLength: 64
  },
  currency: {
    type: 'string',
    minLength: 3,
    maxLength: 3
  },
  accounts: {
    type: 'array'
  },
  diff_account: {
    type: 'string',
    maxLength: 64
  },
  order_index: {
    type: 'number',
    minimum: 0
  },
  summable: {
    type: 'boolean'
  },
  fa_account_number: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  }
}