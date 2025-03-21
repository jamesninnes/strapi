'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = {
  async find(ctx) {
    try {
      const data = await strapi.service('api::fit-stepper-content.fit-stepper-content').find(ctx.query);
      return data;
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async update(ctx) {
    try {
      const data = await strapi.service('api::fit-stepper-content.fit-stepper-content').update(ctx.params.id, ctx.request.body);
      return data;
    } catch (error) {
      ctx.throw(500, error);
    }
  }
}; 