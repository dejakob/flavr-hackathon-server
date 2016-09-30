/**
 * @name Chef
 * @property {GraphQLString} id
 * @property {GraphQLString} firstName
 * @property {GraphQLString} lastName
 * @property {GraphQLString} biography
 * @property {GraphQLString} avatar
 * @property {GraphQLInt} dishesSold
 * @property {GraphQLString} fullName
 */

// Import GraphQL
const graphQl = require('graphql/type');
const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} = graphQl;

// Create a Chef GraphQL Object type
const ChefType = new GraphQLObjectType({
    name: 'Chef',
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        biography: { type: GraphQLString },
        avatar: { type: GraphQLString },
        dishesSold: { type: GraphQLInt },
        fullName: {
            type: GraphQLString,
            resolve (chef) {
                return `${chef.firstName} ${chef.lastName}`;
            }
        }
    }
});

// Export the type
module.exports = ChefType;
