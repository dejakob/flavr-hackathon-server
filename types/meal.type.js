/**
 * @name Meal
 * @property {GraphQLString} id
 * @property {GraphQLInt} availableServings
 * @property {GraphQLInt} maxServings
 * @property {GraphQLInt} price
 * @property {Chef} chef
 * @property {GraphQLString} story
 * @property {GraphQLString} description
 * @property {GraphQLString} title
 * @property {GraphQLString} picture
 */

// Import GraphQL
const graphQl = require('graphql/type');
const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} = graphQl;

const Chef = require('./chef.type');

// Create a Meal GraphQL Object type
const MealType = new GraphQLObjectType({
    name: 'Meal',
    fields: {
        id: { type: GraphQLString },
        availableServings: { type: GraphQLInt },
        maxServings: { type: GraphQLInt },
        price: { type: GraphQLInt },
        chef: { type: Chef },
        story: { type: GraphQLString },
        description: { type: GraphQLString },
        title: { type: GraphQLString },
        picture: { type: GraphQLString }
    }
});

// Export the type
module.exports = MealType;
