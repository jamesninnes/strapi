'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/fit-stepper-content',
      handler: 'fit-stepper-content.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/fit-stepper-content',
      handler: 'fit-stepper-content.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ]
}; 