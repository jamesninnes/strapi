'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/api/clothing-items',
      handler: 'clothing-item.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/api/clothing-items/:id',
      handler: 'clothing-item.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
}; 