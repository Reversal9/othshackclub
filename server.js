var app = require('express')();
const express = require('express');
app.use(express.static('app'));
app.listen(process.env.PORT);