const express = require('express')
const {bookController} = require('../controller/bookController')

const bookRouter = express.Router();
bookRouter.get('/', bookController.index);
bookRouter.get('/new', bookController.createForm);
bookRouter.post('/', bookController.create);
bookRouter.get('/:id', bookController.show);
bookRouter.get('/:id/edit', bookController.editForm);
bookRouter.put('/:id', bookController.update);
bookRouter.delete('/:id', bookController.delete);

module.exports = bookRouter