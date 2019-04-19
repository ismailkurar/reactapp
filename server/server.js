const path = require('path')
const express = require('express')

const app = express(),
  DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, 'index.html');

app.use(express.static(DIST_DIR));

app
  .get('*', (req, res, next) => {
  res.sendFile(HTML_FILE)

  next();
  })
  .get('*/**', (req, res) => {res.send('404 Not Found')});

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`)
})