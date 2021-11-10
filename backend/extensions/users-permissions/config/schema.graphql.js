// extensions/users-permissions/config/schema.graphql.js
module.exports = {
  definition: `
      extend type UsersPermissionsMe {
        user: UsersPermissionsUser
      }
    `,
  resolver: {
    UsersPermissionsMe: {
      user: user => user
    },
  },


//   resolver: {
//     Mutation: {
//       updateMe: {
//         description: 'Update an existing user',
//       },
//     },
//   },



}
