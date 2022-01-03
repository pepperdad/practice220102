var express = require('express');
var router = express.Router();
var Contact = require('../models/Contact');
// Index
router.get('/', (req, res) => {
  // 이미 index.js에서 "/contacts"인 경우에만 이 module이 호출되기 때문에 /contacts 빼고 된다.
  Contact.find({}, (err, data) => {
    if (err) return res.json(err);
    res.render('contacts/index', { contacts: data });
  });
});
// New
router.get('/new', (req, res) => {
  res.render('contacts/new');
});
// Create
router.post('/', (req, res) => {
  Contact.create(req.body, (err, contact) => {
    if (err) return res.json(err);
    res.redirect('/contacts');
  });
});
// Show
router.get('/:id', (req, res) => {
  Contact.findOne({ _id: req.params.id }, (err, data) => {
    if (err) return res.json(err);
    res.render('contacts/show', { contact: data });
  });
});
// edit
router.get('/:id/edit', (req, res) => {
  Contact.findOne({ _id: req.params.id }, (err, data) => {
    if (err) return res.json(err);
    res.render('contacts/edit', { contact: data });
  });
});
// update
router.put('/:id', (req, res) => {
  Contact.findOneAndUpdate({ _id: req.params.id }, req.body, (err, data) => {
    if (err) return res.json(err);
    res.redirect('/contacts/' + req.params.id);
  });
});
// destroy
router.delete('/:id', (req, res) => {
  Contact.deleteOne({ _id: req.params.id }, (err) => {
    if (err) return res.json(err);
    res.redirect('/contacts');
  });
});

module.exports = router;
