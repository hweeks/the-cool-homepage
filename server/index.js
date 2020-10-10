const express = require('express');
const helmet = require('helmet');
const path = require('path');

const rootStatic = path.resolve(__dirname, './build');
const rootHtml = path.resolve(rootStatic, './index.html');

const app = express();

app.use(helmet());
app.use(express.static(rootStatic));

app.get('*', (req, res) => res.sendFile(rootHtml));

app.listen(3000);
