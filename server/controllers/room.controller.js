var Room = require('../models/Room.js');

function getAll(req, res, next) {
  Room.find(function (err, rooms) {
    if (err) return next(err);
    res.json(rooms);
  });
}
function getById(req, res, next) {
  Room.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}

function post(req, res, next) {
  Room.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}

function put(req, res, next) {
  Room.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}

function del(req, res, next) {
  Room.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
}

module.exports = {
  getAll,
  getById,
  post,
  put,
  del
}

