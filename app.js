const express = require('express');

const app = express();

const cors = require('cors');

const dotenv = require('dotenv');
const { response } = require('express');

dotenv.config();

const dbService = require('./dbservice');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false }));



//it creates a new data

app.post('/insert', (request, response) => {
    console.log(request.body);


});

app.get('/getAll', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.getAllData();
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
})

//it reads the data
app.get('/getAll', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.getAllData();
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
})



app.listen(process.env.PORT, () => console.log('Server is up and running'))
