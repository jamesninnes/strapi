'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = {
  async find(ctx) {
    try {
      const data = await strapi.service('api::clothing-item.clothing-item').find(ctx.query);
      return data;
    } catch (error) {
      ctx.throw(500, error);
    }
  },

  async findOne(ctx) {
    try {
      const { id } = ctx.params;
      const data = await strapi.service('api::clothing-item.clothing-item').findOne(id, ctx.query);
      return data;
    } catch (error) {
      ctx.throw(500, error);
    }
  }
}; 