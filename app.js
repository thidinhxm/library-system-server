const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const authRouter = require('./components/auth/authRouter');
const bookRouter = require('./components/book/bookRouter');
const bookTitleRouter = require('./components/bookTitle/bookTitleRouter');
const borrowCardRouter = require('./components/borrowCard/borrowCardRouter');
const categoryRouter = require('./components/category/categoryRouter');
const librarianRouter = require('./components/librarian/librarianRouter');
const readerRouter = require('./components/reader/readerRouter');
const returnCardRouter = require('./components/returnCard/returnCardRouter');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth', authRouter);
app.use('/books', bookRouter);
app.use('/bookTitles', bookTitleRouter);
app.use('/borrowCards', borrowCardRouter);
app.use('/categories', categoryRouter);
app.use('/librarians', librarianRouter);
app.use('/readers', readerRouter);
app.use('/returnCards', returnCardRouter);

module.exports = app;
