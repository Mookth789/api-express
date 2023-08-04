const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const mongoose = require('mongoose');

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

mongoose.connect('mongodb+srv://app-gm:app-gm@app-gm.0c6hzoe.mongodb.net/'),
function checkDB(err)
{
if(err)
{
  console.log("Erroe DB");

}
else
{
  console.log("DB connected")
}
};