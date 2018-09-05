module.exports = {
  name: {
    description: 'Product name',
    type: 'string'
  },
  description: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  attributes: {
    anyOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  parent: {
    description: 'Only valid for child products (variant and linked)',
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  tags: {
    anyOf: [
      {
        type: 'array'
      },
      {
        type: 'null'
      }
    ]
  },
  linked_products: {
    description: 'Used to store linked_products (existing (can be any type, including `linked` and embedded (`full` product schema)',
    anyOf: [
      {
        type: 'array'
      },
      {
        type: 'null'
      }
    ]
  },
  prices: {
    anyOf: [
      {
        type: 'object',
        properties: {
          branch_prices: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                amount: {
                  type: 'object',
                  properties: {
                    net: {
                      type: 'number'
                    },
                    gross: {
                      type: 'number'
                    }
                  }
                },
                currency: {
                  type: 'string'
                },
                percentage: {
                  type: 'number'
                },
                purchase_price: {
                  type: 'number'
                }
              }
            }
          },
          scaled_prices: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                qty: {
                  type: 'number'
                },
                prices: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      amount: {
                        type: 'object',
                        properties: {
                          net: {
                            type: 'number'
                          },
                          gross: {
                            type: 'number'
                          }
                        }
                      },
                      currency: {
                        type: 'string'
                      },
                      percentage: {
                        type: 'number'
                      },
                      purchase_price: {
                        type: 'number'
                      }
                    }
                  }
                }
              }
            }
          },
          default_prices: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                amount: {
                  type: 'object',
                  properties: {
                    net: {
                      type: 'number'
                    },
                    gross: {
                      type: 'number'
                    }
                  }
                },
                currency: {
                  type: 'string'
                },
                percentage: {
                  type: 'number'
                },
                purchase_price: {
                  type: 'number'
                }
              }
            }
          }
        },
        required: [
          'default_prices'
        ]
      },
      {
        type: 'null'
      }
    ]
  },
  barcode: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  sku: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  stock_minimum: {
    anyOf: [
      {
        type: 'integer'
      },
      {
        type: 'null'
      }
    ]
  },
  stock_maximum: {
    anyOf: [
      {
        type: 'integer'
      },
      {
        type: 'null'
      }
    ]
  },
  stockable: {
    anyOf: [
      {
        type: 'boolean'
      },
      {
        type: 'null'
      }
    ]
  },
  metadata: {
    anyOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  audiences: {
    anyOf: [
      {
        type: 'array'
      },
      {
        type: 'null'
      }
    ]
  },
  keywords: {
    anyOf: [
      {
        type: 'array'
      },
      {
        type: 'null'
      }
    ]
  },
  categories: {
    anyOf: [
      {
        type: 'array'
      },
      {
        type: 'null'
      }
    ]
  },
  custom_ids: {
    anyOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  related_to: {
    anyOf: [
      {
        type: 'array'
      },
      {
        type: 'null'
      }
    ]
  },
  similar_to: {
    anyOf: [
      {
        type: 'array'
      },
      {
        type: 'null'
      }
    ]
  },
  released_at: {
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
  purchased_at: {
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
  produced_at: {
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
  custom_id: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  tax: {
    type: 'string',
    format: 'uuid'
  },
  taxes_options: {
    anyOf: [
      {
        type: 'array'
      },
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  season: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  seasons: {
    anyOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  account: {
    type: 'string',
    format: 'uuid'
  },
  vat_class: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  category: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  brand: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  active: {
    type: 'boolean'
  },
  deleted: {
    type: 'boolean'
  },
  type: {
    type: 'string',
    description: 'variant is a child of variant_product, and has a parent property containing the ID of a variant_product typed parent product',
    'enum': [
      'product',
      'voucher',
      'linked',
      'linked_product',
      'variant',
      'variant_product'
    ]
  },
  manufacturer: {
    anyOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  supplier: {
    anyOf: [
      {
        type: 'object'
      },
      {
        type: 'null'
      }
    ]
  },
  condition: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  images: {
    anyOf: [
      {
        type: 'object',
        additionalProperties: false,
        properties: {
          '1x': {
            type: 'string',
            format: 'uri'
          },
          avatar: {
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
  summary: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  insert_id: {
    type: 'integer'
  },
  product_group: {
    anyOf: [
      {
        type: 'string'
      },
      {
        type: 'null'
      }
    ]
  },
  delegated_to: {
    anyOf: [
      {
        type: 'array',
        minItems: 1,
        items: {
          type: 'string',
          format: 'uuid'
        }
      },
      {
        type: 'null'
      }
    ]
  }
}