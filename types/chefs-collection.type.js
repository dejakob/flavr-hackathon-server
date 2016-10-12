/**
 * @name ChefsCollection
 * @property {GraphQLList.<Chef>} chefs
 * @property {GraphQLInt} count
 */

// Import GraphQL
const graphQl = require('graphql/type');
const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList
} = graphQl;

// Import Meal type
const Chef = require('./chef.type');

// Create a ChefsCollection GraphQL Object type
const ChefsCollectionType = new GraphQLObjectType({
    name: 'ChefsCollection',
    fields: {
        chefs: { type: new GraphQLList(Chef) },
        count: { type: GraphQLInt }
    }
});

// Export the type
module.exports = ChefsCollectionType;
