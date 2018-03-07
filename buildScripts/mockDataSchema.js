/* eslint-disable import/prefer-default-export */
export const schema = {
  type: 'object',
  properties: {
    users: {
      type: 'array',
      minItems: 3,
      maxItems: 7,
      items: {
        type: 'object',
        properties: {
          id: {
            $ref: '#/definitions/positiveInt',
          },
          firstName: {
            type: 'string',
            faker: 'name.firstName',
          },
          lastName: {
            type: 'string',
            faker: 'name.firstName',
          },
          email: {
            type: 'string',
            format: 'email',
            faker: 'internet.email',
          },
        },
        required: ['id', 'firstName', 'lastName', 'email'],
      },
    },
  },
  required: ['users'],
  definitions: {
    positiveInt: {
      type: 'integer',
      minimum: 0,
      exclusiveMinimum: true,
    },
  },
};
