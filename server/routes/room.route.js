var RoomController = require('../controllers/room.controller.js');

//import * as RoomController from '../controllers/room.controller';
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Room = require('../models/Room.js');
router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  res.header('Access-Control-Allow-Origin', '*');
  // Supported HTTP verbs
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  // Other custom headers
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

/* GET ALL ROOMS */
router.get('/', RoomController.getAll);

/* GET SINGLE ROOM BY ID */
router.get('/:id', RoomController.getById);

/* SAVE ROOM */
router.post('/', RoomController.post);

/* UPDATE ROOM */
router.put('/:id', RoomController.put);

/* DELETE ROOM */
router.delete('/:id', RoomController.del);

module.exports = router;
