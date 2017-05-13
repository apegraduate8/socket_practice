const r = require('rethinkdb');

const connection = null;

r.connect( {host: 'localhost', port: 28015}, function(err, conn){
    if(err){throw err};
    connection = conn
})

r.db('test').tableCreate('messages').run(connection, function(err, result){
    if(err){throw err}
    console.log(JSON.stringify(result, null, 2))
})

/// https://www.rethinkdb.com/docs/guide/javascript/
// https://www.rethinkdb.com/docs/install/osx/