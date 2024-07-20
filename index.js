const express = require('express')
const app = express()
const model = require('./models/product.model.js');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
var cors = require('cors');

app.use(cors());
// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/products", productRoute);


app.get('/', (req, res) => {
    res.send('Hello from node API Server updated');
});

mongoose.connect("mongodb+srv://admin:NAHTU05hNNCedvTg@backenddb.cjdygfi.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to the database");
    app.listen(4000, () => {
        console.log('server is running on port 4000');
    });
})
.catch(() => {
    console.log("Connection failed!");
});