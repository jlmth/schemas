const searchEntity = {
  type: 'object',
  properties: {
    type: {
      description: 'Searchable entities within the iOS client app',
      type: 'string',
      enum: [
        'transactions',
        'products',
        'customers',
        'vouchers',
        'loyalty_cards',
        'hooks'
      ]
    },
    behavior: {
      description: 'Search behavior within a single entity, limited by availability (e.g. vouchers: only online_first)',
      type: 'string',
      default: 'online_first',
      enum: [
        'online_first', // then offline if available
        'offline_first', // then online if avialable
        'online_only', // e.g. vouchers
        'offline_only', // e.g. optimized product scan
        'race' // in parallel if available
      ]
    }
  }
}

const searchBehavior = {
  type: 'object',
  properties: {
    trigger_action: {
      description: 'Trigger a context specific action (e.g. addToCart, refundSale) on a result condition',
      type: 'string',
      enum: [
        'on_first', // the first usable result will trigger the action immediately
        'on_unique', // a unique final result will trigger the action
        'on_none' // the user always has to manually trigger the action
      ]
    },
    search_entities: {
      description: 'Entities that should be searched in a specific context. Searches will be performed in parallel (within an entity per defined behavior).',
      type: 'array',
      items: {
        ...searchEntity
      }
    }
  }
}

module.exports = {
  type: 'object',
  properties: {
    // additional views must be explicitely defined
    // (only white listing supported by client context switches)
    search_view: {
      description: 'Scan view, should be limited to products/offlineFirst',
      type: 'object',
      ...searchBehavior
    },
    tile_view: {
      description: 'Tile view, no limitations, probably account requirements dependent',
      type: 'object',
      ...searchBehavior
    }
    // history, voucher scan view etc. already come with limited scope and should not be configurable
  }
}