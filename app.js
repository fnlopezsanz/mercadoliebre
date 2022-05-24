const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const publicFolderPath = path.resolve(__dirname, './public');

app.use( express.static(publicFolderPath) );

app.listen(PORT, () => {
  console.log('Servidor corriendo en puerto '+ PORT);
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/views/home.html'));
})

app.get('/register.html', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/views/register.html'));
})

app.get('/login.html', (req, res) => {
  res.sendFile(path.resolve(__dirname, '/views/login.html'));
})