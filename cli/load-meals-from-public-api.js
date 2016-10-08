const request = require('request');
const fs = require('fs');

const domain = 'https://flavr.be';
const apiUrl = '/api/schedules/search';
const urlParams = `?date=${new Date().toString()}&distance=10000&heatingMethods=MICROWAVE,OVEN,READY_TO_EAT&lat=51.2161343&limit=10&lng=4.3979916000000685&offset=0&priceMax=100&priceMin=1&title=&types=MEAT,FISH,VEGETARIAN,VEGAN,GLUTEN_FREE,LACTOSE_FREE`;

const fullUrl = `${domain}${apiUrl}${urlParams}`;

request
    .get(fullUrl)
    .on('response', function(response) {

        if (response.statusCode === 200) {
            response.body = '';

            response.on('data', function (chunk) {
                response.body += chunk;
            });

            response.on('end', function () {
                handleResponse(response.body);
            });
        }
    });

function handleResponse (responseData) {
    responseData = JSON.parse(responseData);

    const dates = Object.keys(responseData);
    const allMeals = [];

    dates.forEach(date => {
        responseData[date].forEach(schedule => {
            const dish = schedule.dish;
            const meal = {
                id: dish._id,
                availableServings: schedule.availableServings,
                chef: dish.user,
                story: dish.story,
                description: dish.description,
                title: dish.title,
                maxServings: 10,
                price: schedule.price,
                picture: dish.pictures[0].medium
            };

            allMeals.push(meal)
        });
    });

    fs.writeFileSync('./data/meals.json', JSON.stringify(allMeals));
}
