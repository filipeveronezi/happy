// lib import
const express = require('express');
const path = require('path');
const pages = require('./pages');
// express initialize
const server = express();


server
    // adding static files
    .use(express.static(path.join('public')))

    // setup template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // routes
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)


    // server up
    .listen(5500);