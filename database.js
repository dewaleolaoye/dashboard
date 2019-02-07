const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const con = require('./config');
const http=require('http');
const url = require('url');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
http.createServer(function(req,res){
    console.log(req)
    if(req.method==='POST'){
        console.log('I REC SMF')
    }
}).listen(3000, function(err){
    if(err) throw err;
    console.log('Server running 3000')
})
return
// Registered user's data  
app.post('/', function(req, res){
console.log(req.body)
    return
    // console.log(req.body)
    let fullname = req.body.fullname;
    let username = req.body.username;
    let company = req.body.company;
    let password = req.body.password;

    let origin = url.parse(req.url).search.substr(1);
    async function databaseQuery() {
        if(origin === 'register') {
            let insertRecord = await userInfo.insertNewUser(fullname, username, password, company);
            if (insertRecord.hasOwnProperty('error')){
                console.log(insertRecord);
                return;
            }
            if (insertRecord.hasOwnProperty('status')) {
                console.log(insertRecord.status);
                res.json({'status': insertRecord.status});
                return;
            }
        } 
        if (origin === 'resetPassword') {
            let resetPassword = await userInfo.updatePassword(password, username);
            if (resetPassword.hasOwnProperty('error')){
                console.log(resetPassword);
                return;
            }
            if (resetPassword.hasOwnProperty('status')) {
                console.log(resetPassword.status);
                // let pas = resetPassword.status
                // res.json({'status': pas});
                             return;
            }
        } 
        
    }
    databaseQuery();
    // res.json({'status': 'submitted'});
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.send('wale');
});


// RESET USER'S PASSWORD
// Check user from database
let userInfo = {};
userInfo.checkUsername = (username) => {
    return new Promise ((resolve, reject) => {
        if(username === '' || typeof username === 'undefined') {
            resolve({'status': 'Username is empty'});
            return;
        }
       
    });
}
// reset password

userInfo.updatePassword = (password, username) => {
    return new Promise ((resolve, reject) => {
        if(password === '' || typeof password === 'undefined') {
            resolve({'status': 'Password is empty'});
            return;
        }

        if(username === '' || typeof username === 'undefined') {
            resolve({'status': 'Username is empty'});
            return;
        }
        con.realConnect.query(`UPDATE users SET password='${password}' WHERE username ='${username}'`, (err, done) => {
            if(err) {
                resolve({"error": 'Error' + err});
            } else {
                resolve(done);
                console.log('Password Updated Successful');
            }
        });
    });
}

userInfo.insertNewUser = (fullname,username,password,company) => {
    return new Promise ((resolve, reject) => {
        if(fullname === '' || typeof fullname === 'undefined') {
            resolve({'status': 'Fullname is empty'});
            return;
        }

        if(username === '' || typeof username === 'undefined') {
            resolve({'status': 'Username is empty'});
            return;
        }

        if(password === '' || typeof password === 'undefined') {
            resolve({'status': 'password is empty'});
            return;
        }
    con.realConnect.query(`INSERT INTO users (username, password, fullname, company )VALUES('${username}','${password}', '${fullname}', '${company}')`, (error, done) => {
        if (error) {
            resolve({'error': error});
        } else {
            resolve({'status': 'Successfully registered'})
            console.log('Data Inserted')
        }
        
        
    });
    });
}
app.listen(3000, () => {
    console.log('Server runing on 3000');
})