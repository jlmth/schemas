const locationsAccounts = require('../locations/accounts')

module.exports = {
  name: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  fa_account_number: {
    anyOf: [
      {
        type: 'string',
        maxLength: 128
      },
      {
        type: 'null'
      }
    ]
  },
  type: {
    type: 'string',
    'enum': [
      'vat'
    ]
  },
  account: {
    description: 'DEPRECATED: do not use',
    type: 'string'
  },
  rate: {
    type: 'number',
    minimum: 0
  },
  percentage: {
    type: 'number',
    minimum: 0
  },
  is_fixed: {
    type: 'boolean',
    'default': false
  },
  active: {
    type: 'boolean'
  },
  deleted: {
    type: 'boolean'
  },
  financial_accounts: {
    anyOf: [
      {
        ...locationsAccounts
      },
      {
        type: 'null'
      }
    ]
  },
  jurisdication: {
    type: 'string',
    'enum': [
      'Austria',
      'Czech Republic',
      'France',
      'Germany',
      'Hungary',
      'Italy',
      'Ireland',
      'Jungholz',
      'Mittelberg',
      'Monaco',
      'Spain',
      'Switzerland'
    ]
  },
  rate_class: {
    type: 'string',
    'enum': [
      'normal',
      'reduced',
      'super_reduced'
    ]
  }
}
