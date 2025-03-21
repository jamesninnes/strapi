module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/clothing-items',
      handler: 'clothing-item.find',
      config: {
        policies: [],
        auth: false
      }
    },
    {
      method: 'GET',
      path: '/clothing-items/:id',
      handler: 'clothing-item.findOne',
      config: {
        policies: [],
        auth: false
      }
    }
  ]
}; 