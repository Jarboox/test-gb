"use strict";

var mongoose = require('mongoose');

var User = mongoose.model('users');
var API_URL = '/api/user';
var API_SUM = '/api/sum';
var ID_PREFIX = '/:id';
var BAD_REQUEST = 400;
var OK = 200;
var CREATED = 201;
var ACCEPTED = 202;

module.exports = function (app) {
  app.get(API_URL, function _callee(req, res) {
    var mFilter, tasks;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mFilter = {};
            _context.next = 3;
            return regeneratorRuntime.awrap(User.find(mFilter));

          case 3:
            tasks = _context.sent;
            return _context.abrupt("return", res.status(OK).send(tasks));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  app.post(API_URL, function _callee2(req, res) {
    var user;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(User.create(req.body));

          case 3:
            user = _context2.sent;
            return _context2.abrupt("return", res.status(CREATED).send({
              error: false,
              user: user
            }));

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.status(BAD_REQUEST).send({
              error: true,
              message: _context2.t0.message
            }));

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 7]]);
  });

  function sum(numbers) {
    return numbers.reduce(function (acc, current) {
      return acc + current;
    }, 0);
  }

  app.post(API_SUM, function _callee3(req, res) {
    var mNumbers, numbers, pIndex, i, leftSum, rightSum;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            mNumbers = req.body.array.split(',');
            numbers = mNumbers.map(function (item) {
              return parseInt(item.trim());
            });
            _context3.prev = 2;
            pIndex = -1; //const numbers = [3, 2, 8, 5, 0];

            for (i = 0; i < numbers.length; i++) {
              leftSum = sum(numbers.slice(0, i));
              rightSum = sum(numbers.slice(i + 1));

              if (leftSum === rightSum) {
                pIndex = i;
              }
            }

            return _context3.abrupt("return", res.status(CREATED).send({
              error: false,
              pIndex: pIndex
            }));

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](2);
            return _context3.abrupt("return", res.status(BAD_REQUEST).send({
              error: true,
              message: _context3.t0.message
            }));

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[2, 8]]);
  });
  app.put(API_URL + ID_PREFIX, function _callee4(req, res) {
    var id, data, user;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            data = req.body;
            _context4.prev = 2;
            _context4.next = 5;
            return regeneratorRuntime.awrap(User.findByIdAndUpdate(id, data));

          case 5:
            _ = _context4.sent;
            _context4.next = 8;
            return regeneratorRuntime.awrap(User.findById(id));

          case 8:
            user = _context4.sent;
            return _context4.abrupt("return", res.status(ACCEPTED).send({
              error: false,
              user: user
            }));

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](2);
            return _context4.abrupt("return", res.status(BAD_REQUEST).send({
              error: true,
              message: _context4.t0.message
            }));

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[2, 12]]);
  });
  app["delete"](API_URL + ID_PREFIX, function _callee5(req, res) {
    var id, user;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _context5.prev = 1;
            _context5.next = 4;
            return regeneratorRuntime.awrap(User.findByIdAndDelete(id));

          case 4:
            user = _context5.sent;
            return _context5.abrupt("return", res.status(ACCEPTED).send({
              error: false,
              user: user
            }));

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](1);
            return _context5.abrupt("return", res.status(BAD_REQUEST).send({
              error: true,
              message: _context5.t0.message
            }));

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[1, 8]]);
  });
};