const fs = require('fs');
const path = require('path');
const { graphql } = require('graphql');
const { introspectionQuery, printSchema } = require('graphql/utilities');

// Assume your schema is in ../data/schema
const schema = require('../schemas/meal.schema');
const schemaChefs = require('../schemas/chef.schema');
const yourSchemaPath = path.join(__dirname, '../output/schema');

// Save JSON of full schema introspection for Babel Relay Plugin to use
graphql(schema, introspectionQuery).then(result => {
    fs.writeFileSync(
        `${yourSchemaPath}.json`,
        JSON.stringify(result, null, 2)
    );
});

graphql(schemaChefs, introspectionQuery).then(result => {
    fs.writeFileSync(
        `${yourSchemaPath}-chefs.json`,
        JSON.stringify(result, null, 2)
    );
});

// Save user readable type system shorthand of schema
fs.writeFileSync(
    `${yourSchemaPath}.graphql`,
    printSchema(schema)
);

fs.writeFileSync(
    `${yourSchemaPath}-chefs.graphql`,
    printSchema(schemaChefs)
);