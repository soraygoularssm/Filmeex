'use strict';
const {
  sanitizeEntity
} = require('strapi-utils');

module.exports = {
  /**
   * Retrieve records.
   *
   * @return {Array}
   */

  async find(ctx) {
    const {
      user
    } = ctx.state
    if (user) {
      const subs_id = user.subscription
      const entity = await strapi.services.subscription.findOne({
        id: subs_id,
        user: user.id
      })
      const subs = sanitizeEntity(entity, {
        model: strapi.models.subscription
      })
      if (subs) {
        const subs_status = subs.status
        const subs_expiration_date = subs.expiration_date
        var now = new Date();

        let entities;
        if (ctx.query._q) {
          entities = await strapi.services.movie.search(ctx.query);
        } else {
          entities = await strapi.services.movie.find(ctx.query);
        }


        var objs = entities.map(entity => sanitizeEntity(entity, {
          model: strapi.models.movie
        }))

        if (subs_status != "paid" && subs_expiration_date < now) {
          objs.forEach(obj => {
            if (obj.free == false) {
              delete obj.sources
            }
          });
          return objs
        } else {
          return objs
        }
      } else {
        let entities;
        if (ctx.query._q) {
          entities = await strapi.services.movie.search(ctx.query);
        } else {
          entities = await strapi.services.movie.find(ctx.query);
        }

        var objs = entities.map(entity => sanitizeEntity(entity, {
          model: strapi.models.movie
        }))

        objs.forEach(obj => {
          if (obj.free == false) {
            delete obj.sources
          }
        });
        return objs
      }
    } else {
      let entities;
      if (ctx.query._q) {
        entities = await strapi.services.movie.search(ctx.query);
      } else {
        entities = await strapi.services.movie.find(ctx.query);
      }

      var objs = entities.map(entity => sanitizeEntity(entity, {
        model: strapi.models.movie
      }))

      objs.forEach(obj => {
        if (obj.free == false) {
          delete obj.sources
        }
      });
      return objs
    }
  },
  //   async findOne(ctx) {
  //       const {id} =  ctx.params
  //       const {user} = ctx.state

  //       const entity = await strapi.services.order.findOne({id, user: user.id})
  //       return sanitizeEntity(entity, {model: strapi.models.subscription})
  //   }
};
