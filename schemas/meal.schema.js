/**
 *
 * @name Meal Schema
 */

// Import Graph QL methods / props
const graphQl = require('graphql/type');
const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList
} = graphQl;

// Import the meal type
const Meal = require('../types/meal.type');
const MealsCollection = require('../types/meals-collection.type');

// Import mock data
const meals = require('../data/meals.json');

// Create the chef schema
const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            byChef: {
                type: MealsCollection,
                resolve (chef) {
                    const filteredMeals = meals.filter(meal => meal.id === chef);

                    return {
                        meals: filteredMeals,
                        count: filteredMeals.length
                    }
                }
            },
            all: {
                type: MealsCollection,
                resolve () {
                    return {
                        meals,
                        count: meals.length
                    };
                }
            },
            first: {
                type: Meal,
                resolve () {
                    return meals[0];
                }
            }
        }
    })
});

// Export chef schema
module.exports = schema;
