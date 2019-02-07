const mysql = require('mysql');

const con = {};
con.db = {
    local: {
        host: '127.0.0.1',
        user: 'root',
        password: 'pass1234',
        database: ''
    },
    live: {
        host: '10.0.0.106',
        user: 'fineuser',
        password: 'Pass1234.',
        database: 'alphsms'
    }
}

con.realConnect = mysql.createConnection(con.db.live);
module.exports = con;

//  Database Connection
// con.realConnect.connect((err) => {
//     if (err) throw err;
//     console.log('Server running');
// })