const Book = require('../model/book')

const bookController = {
    index: async (req, res) => {
        const books = await Book.find();
        res.render('index', { books });
    },
    show: async (req, res) => {
        const book = await Book.findById(req.params.id);
        res.render('show', { book });
    },
    createForm: (req, res) => {
        res.render('create');
    },
    create: async (req, res) => {
        await Book.create(req.body);
        res.redirect('/books');
    },
    editForm: async (req, res) => {
        const book = await Book.findById(req.params.id);
        res.render('edit', { book });
    },
    update: async (req, res) => {
        await Book.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/books');
    },
    delete: async (req, res) => {
        await Book.findByIdAndDelete(req.params.id);
        res.redirect('/books');
    }
};

module.exports = {
    bookController
}