'use strict';
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Array}
   */

   async find(ctx) {
    const {user} = ctx.state

    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.subscription.search({...ctx.query , user: user.id});
    } else {
      entities = await strapi.services.subscription.find({...ctx.query , user: user.id});
    }

    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.subscription }));
  },
  async findOne(ctx) {
      const {id} =  ctx.params
      const {user} = ctx.state

      const entity = await strapi.services.subscription.findOne({id, user: user.id});
      return sanitizeEntity(entity, {model: strapi.models.subscription});
  }
};

