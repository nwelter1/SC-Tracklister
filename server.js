let express = require('express');

let app = express();

let cors = require('cors')


const bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false })) // Adding support for form values
app.use(bodyParser.json({ extended: false })) // Adding support for JSON values
app.use(bodyParser.raw({ extended: false })) // Adding Support for raw text values

const trackRoute = require('./src/routes/tracks');

app.use('/', trackRoute)

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server is up at port ${port}`))
