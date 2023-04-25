const express = require('express');
const campsiteRouter = express.Router();

catRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the cats to you');
})
.post((req, res) => {
    res.end(`Will add the cat: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /cats');
})
.delete((req, res) => {
    res.end('Deleting all cats');
});

module.exports = catRouter;