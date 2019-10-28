var express = require('express');
var mysql = require('mysql');
const app = express();

//var rows;

var connection = mysql.createPool({
connectionLimit: 50,
host: 'localhost',
user: 'root',
password: '',
database: 'counsel'
});

app.get('/',function(req, resp){

    connection.getConnection(function(error, tempCont){
            if(!error) {
                tempCont.release();
                console.log('Error');
            } else {
                console.log('Connected');

                tempCont.query("SELECT * FROM counsellor", function(error, rows, fields){
                    tempCont.release();
                    if(!error){
                        console.log('Error in the query');
                    } else{
                        resp.json(rows);
                    }
                });
            }

    });
    return resp.json(rows);
});

app.listen(1337);
