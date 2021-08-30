const express = require("express")
const morgan = require('morgan')

const app = express()

app.use(morgan("dev"))
app.use(express.json())

// Add your code here.

// Define our router from Express object
const indexRoute = express.Router();


const middleware1 = function(request, response, nextFunction) {
    console.log('hello world');
    nextFunction();
}

const middleware2 = function(request, response, nextFunction) {
    return response.json({status:200, data:null, message:'this thing is on'});
}

// set our router to respond to /apis path
indexRoute.route('/apis').get(middleware1, middleware2);

// register route to be used by express
app.use(indexRoute);

app.listen(4200, () => {console.log("Express has Started")})