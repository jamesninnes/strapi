'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/clothing-items',
      handler: 'clothing-item.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/clothing-items/:id',
      handler: 'clothing-item.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
}; 