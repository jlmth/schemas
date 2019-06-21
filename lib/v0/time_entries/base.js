
module.exports = {
  type: {
    type: 'string',
    'enum': [
      'day',
      'break'
    ]
  },
  description: {
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
  start: {
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
  end: {
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
  staff_id: {
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