const express = require('express');
const app = express();
const ejs = require('ejs')
const bodyParser = require('body-parser')
const  http = require('http').Server(app);
const io = require('socket.io')(http);
const Model = require('./model.js');



// app.engine('html', "ejs");
app.set('view engine', 'ejs');
// app.set('view engine', 'pug');  ///// http://expressjs.com/en/guide/using-template-engines.html
app.set('views', __dirname + '/views');
app.use(express.static(__dirname +'/public'));

//app.use(cookiePars());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/', (req, res) => {
    Model.getAll(req, res)

});

app.get('/api/:id', (req, res) => {

    let id = req.params
    console.log('request made!!  ', id)
    Model
    .get(id)
    .then(data => {res.json(data)})
});

app.post('/api', (req, res) => {

    let name = req.body.id;
    let message = req.body.message
    console.log('request made!!  ', name, message)
    Model
    .save(name, message)

});

io.on('connection', function(socket){
    console.log("user connected")

    socket.on('chatMessage', function(msg){
        console.log("user says  ", msg)
        io.emit('chatMessage', msg)
    })

});

http.listen(3000, () => {
    console.log("listening on port 3000 anthony")
    // Model.setup(data => {
    //     if(data){
    //         console.log(data)
    //     }
    // })
});

