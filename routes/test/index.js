const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

//const service = require('./test.service');

module.exports = router;

//router.get('/', service.index);

//router.get('/:id', service.show);

//router.delete('/:id', service.destroy);

//router.post('/', service.create);

//router.put('/:id', service.update);