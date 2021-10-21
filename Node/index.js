const express = require('express');
const request = require('request');
var cors = require('cors')

const app = express();
const port = 8000;
app.use(cors())
app.get('/data', async function (req, res) {
const url = 'https://jsonplaceholder.typicode.com/users'
    const promise =  new Promise((resolve, reject) => {
        request(url, (err, res, body) => {
          if (err){
               reject(err)
          }
          resolve(body)
        });
    })
    promise.then(response => res.send(response))
    promise.catch(err => res.send(err))   
    })

  app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 