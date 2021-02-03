const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const FakeDb = require('./fake-db');
const productRoute = require('./routes/products');
const path = require('path');

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(
  () => {
    if (process.env.NODE_ENV !== 'production') {
      // const fakeDb = new FakeDb()
      // fakeDb.initDb()
    }
  }
)

const app = express();
app.use('/apl/v1/products', productRoute);

if (process.env.NODE_ENV === 'production') {
  const appPath = path.join(__dirname, '..', 'dist', 'reservation-app');
  app.use(express.static(appPath));
  app.get("*", function (req, res) {
    res.sendFile(path, resolve(appPath, 'index.hteml'));
  });
}
// app.get('/product', function (req, res) {
//   res.json({ 'sucess': true })
// })

const PORT = process.env.PORT || '3001'

app.listen(PORT, function () {
  console.log('I am running!!')
})
