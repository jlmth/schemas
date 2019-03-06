module.exports = {
  // additionalProperties: false,
  // properties: {
  firstname: {
    anyOf: [
      {
        type: 'string',
        maxLength: 32,
        minLength: 1
      },
      {
        type: 'null'
      }
    ]
  },
  lastname: {
    anyOf: [
      {
        type: 'string',
        maxLength: 32,
        minLength: 1
      },
      {
        type: 'null'
      }
    ]
  },
  displayname: {
    anyOf: [
      {
        type: 'string',
        maxLength: 32,
        minLength: 3
      },
      {
        type: 'null'
      }
    ]
  },
  phonenumbers: {
    anyOf: [
      {
        type: 'object',
        additionalProperties: false,
        properties: {
          any: {
            type: 'string'
          },
          home: {
            type: 'string'
          },
          mobile: {
            type: 'string'
          },
          work: {
            type: 'string'
          }
        },
        anyOf: [
          {
            required: [
              'any'
            ]
          },
          {
            required: [
              'home'
            ]
          },
          {
            required: [
              'mobile'
            ]
          },
          {
            required: [
              'work'
            ]
          }
        ]
      },
      {
        type: 'null'
      }
    ]
  },
  email: {
    anyOf: [
      {
        type: 'string',
        maxLength: 128,
        format: 'email'
      },
      {
        type: 'null'
      }
    ]
  },
  staff_number: {
    anyOf: [
      {
        type: 'string',
        maxLength: 128,
        minLength: 1
      },
      {
        type: 'null'
      }
    ]
  },
  password: {
    anyOf: [
      {
        type: 'string',
        maxLength: 128,
        minLength: 1
      },
      {
        type: 'null'
      }
    ]
  },
  pin: {
    anyOf: [
      {
        type: 'string',
        maxLength: 128,
        minLength: 1
      },
      {
        type: 'null'
      }
    ]
  },
  date_of_birth: {
    anyOf: [
      {
        type: 'string',
        format: 'date-time'
      },
      {
        type: 'null'
      }
    ]
  },
  images: {
    description: 'A Tillhub image object with URLs to display images this for staff.',
    anyOf: [
      {
        type: 'object',
        additionalProperties: true,
        properties: {
          original: {
            type: 'string',
            format: 'uri'
          },
          gallery: {
            type: 'string',
            format: 'uri'
          },
          avatar: {
            type: 'string',
            format: 'uri'
          },
          '1x': {
            type: 'string',
            format: 'uri'
          },
          '2x': {
            type: 'string',
            format: 'uri'
          },
          '3x': {
            type: 'string',
            format: 'uri'
          }
        }
      },
      {
        type: 'null'
      }
    ]
  },
  scopes: {
    oneOf: [
      {
        type: 'null'
      },
      {
        type: 'array',
        minItems: 1,
        uniqueItems: true,
        items: {
          type: 'string',
          enum: [
            'staff:staff',
            'staff:staff:transactions',
            'staff:staff:transactions:create',
            'staff:staff:transactions:customer',
            'staff:staff:transactions:discounts',
            'staff:staff:transactions:refund',
            'staff:staff:transactions:cancel',
            'staff:staff:transactions:cancel:row',
            'staff:staff:transactions:prices',
            'staff:staff:transactions:qty',
            'staff:staff:transactions:cash_return',
            'staff:staff:transactions:vouchers',
            'staff:staff:transactions:print',
            'staff:staff:transactions:email',
            'staff:staff:transactions:history:print',
            'staff:staff:transactions:history:email',
            'staff:staff:payments',
            'staff:staff:payments:cash',
            'staff:staff:payments:invoice',
            'staff:staff:payments:voucher',
            'staff:staff:payments:card',
            'staff:staff:payments:split',
            'staff:staff:payments:split:cash',
            'staff:staff:payments:split:invoice',
            'staff:staff:payments:split:voucher',
            'staff:staff:payments:split:card',
            'staff:staff:delivery_notes',
            'staff:staff:delivery_notes:create',
            'staff:staff:delivery_notes:update',
            'staff:staff:delivery_notes:read',
            'staff:staff:delivery_notes:delete',
            'staff:staff:carts',
            'staff:staff:carts:create',
            'staff:staff:carts:update',
            'staff:staff:carts:read',
            'staff:staff:carts:delete',
            'staff:staff:selections',
            'staff:staff:selections:create',
            'staff:staff:selections:update',
            'staff:staff:selections:read',
            'staff:staff:selections:delete',
            'staff:staff:registers',
            'staff:staff:registers:cash:read',
            'staff:staff:registers:open',
            'staff:staff:settings',
            'staff:staff:settings:create',
            'staff:staff:settings:update',
            'staff:staff:settings:read',
            'staff:staff:settings:delete',
            'staff:staff:settings:printer',
            'staff:staff:settings:printer:create',
            'staff:staff:settings:printer:update',
            'staff:staff:settings:printer:read',
            'staff:staff:settings:printer:delete',
            'staff:staff:settings:terminal',
            'staff:staff:settings:terminal:create',
            'staff:staff:settings:terminal:update',
            'staff:staff:settings:terminal:read',
            'staff:staff:settings:terminal:delete',
            'staff:staff:settings:concardis',
            'staff:staff:settings:tim',
            'staff:staff:settings:fleurop',
            'staff:staff:settings:dashboard',
            'staff:staff:settings:database',
            'staff:staff:settings:history',
            'staff:staff:analytics',
            'staff:staff:analytics:journals',
            'staff:staff:products',
            'staff:staff:products:create',
            'staff:staff:products:update',
            'staff:staff:products:read',
            'staff:staff:products:delete',
            'staff:staff:products:name',
            'staff:staff:products:summary',
            'staff:staff:products:description',
            'staff:staff:customers',
            'staff:staff:customers:create',
            'staff:staff:customers:update',
            'staff:staff:customers:read',
            'staff:staff:customers:delete',
            'staff:staff:vouchers',
            'staff:staff:vouchers:create',
            'staff:staff:vouchers:update',
            'staff:staff:vouchers:read',
            'staff:staff:vouchers:delete',
            'staff:staff:receipts',
            'staff:staff:login',
            'staff:staff:logout',
            'staff:staff:balance',
            'staff:staff:balances',
            'staff:staff:balances:x',
            'staff:staff:balances:z',
            'staff:staff:balances:x:print',
            'staff:staff:balances:z:print',
            'staff:staff:balances:z:history:print',
            'staff:staff:history',
            'staff:staff:cashier',
            'staff:staff:salesman',
            'staff:staff:stocks',
            'staff:staff:expenses',
            'staff:staff:down_payments',
            'staff:staff:dashboard',
            'staff:staff:logs',
            'staff:staff:deposits',
            'staff:staff:favourites'
          ]
        }
      }
    ]
  },
  active: {
    type: 'boolean'
  },
  deleted: {
    type: 'boolean'
  },
  metadata: {
    type: 'object'
  },
  addresses: {
    anyOf: [
      {
        type: 'array',
        minItems: 1,
        maxItems: 3,
        items: {
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
              ]
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
      },
      {
        type: 'null'
      }
    ]
  },
  comment: {
    anyOf: [
      {
        type: 'string',
        maxLength: 1024
      },
      {
        type: 'null'
      }
    ]
  },
  discounts: {
    anyOf: [
      {
        type: 'array',
        minItems: 1,
        maxItems: 10,
        items: {
          anyOf: [
            {
              type: 'object',
              additionalProperties: false,
              properties: {
                id: {
                  type: 'string',
                  maxLength: 128
                },
                amount: {
                  type: 'number',
                  minimum: 0
                },
                type: {
                  type: 'string',
                  'enum': [
                    'percentage',
                    'value'
                  ]
                },
                account: {
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
                name: {
                  anyOf: [
                    {
                      type: 'string',
                      maxLength: 64
                    },
                    {
                      type: 'null'
                    }
                  ]
                },
                group: {
                  type: 'string',
                  enum: [
                    'cart',
                    'customer',
                    'personal'
                  ]
                }
              },
              required: [
                'id',
                'account',
                'amount',
                'type',
                'name',
                'group'
              ]
            },
            {
              type: 'object',
              additionalProperties: false,
              properties: {
                amount: {
                  type: 'number',
                  minimum: 0
                },
                type: {
                  type: 'string',
                  'enum': [
                    'percent',
                    'value'
                  ]
                },
                group: {
                  type: 'string',
                  'enum': [
                    'personal'
                  ]
                }
              },
              required: [
                'amount',
                'type',
                'group'
              ]
            }
          ]
        }
      },
      {
        type: 'null'
      }
    ]
  },
  short_code: {
    type: 'string',
    maxLength: 10,
    minLength: 1
  },
  default: {
    type: 'boolean'
  }
}