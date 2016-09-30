/**
 *
 * @name Chef Schema
 *
 * Query count of chefs
 *  curl -XPOST -H "Content-Type:application/graphql"  -d 'query RotQueryType { count }' http://localhost:3000/chef
 *
 * Query all chefs
 *  curl -XPOST -H "Content-Type:application/graphql"  -d 'query RotQueryType { all { id, firstName, lastName, fullName, avatar, biography } }' http://localhost:3000/chef
 *
 */

// Import Graph QL methods / props
const graphQl = require('graphql/type');
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLInt,
    GraphQLList
} = graphQl;

// Import the chef type
const Chef = require('../types/chef.type');

// Import mock data
const chefs = require('../data/chefs.json');
const count = chefs.length;

// Create the chef schema
const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            count: {
                type: GraphQLInt,
                resolve () {
                    return count;
                }
            },
            all: {
                type: new GraphQLList(Chef),
                resolve () {
                    return chefs;
                }
            }
        }
    })
});

// Export chef schema
module.exports = schema;
