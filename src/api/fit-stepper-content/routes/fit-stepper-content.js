module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/fit-stepper-content',
      handler: 'fit-stepper-content.find',
      config: {
        policies: [],
        auth: false
      }
    },
    {
      method: 'PUT',
      path: '/fit-stepper-content',
      handler: 'fit-stepper-content.update',
      config: {
        policies: [],
        auth: false // You might want to protect this route in production
      }
    }
  ]
}; 