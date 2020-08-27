"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var URL = "http://localhost:4001/api/user";
var URL_INDEX = "http://localhost:4001/api/sum";

var Api =
/*#__PURE__*/
function () {
  function Api() {
    _classCallCheck(this, Api);

    this._axios = _axios["default"].create();
    this._axios.defaults.timeout = 2000;
  }

  _createClass(Api, [{
    key: "register",
    value: function register(form) {
      var _this = this;

      delete form._id;
      return new Promise(function (resolve, reject) {
        _this._axios.post(URL, form).then(function (response) {
          console.log(response);
        })["catch"](function (error) {
          console.log(error);
        });
      });
    }
  }, {
    key: "list",
    value: function list() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2._axios.get(URL).then(function (response) {
          resolve(response);
        })["catch"](function (error) {
          reject(error);
        });
      });
    }
  }, {
    key: "delete",
    value: function _delete(userId) {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        _this3._axios["delete"](URL + '/' + userId).then(function (response) {
          resolve(response);
        })["catch"](function (error) {
          reject(error);
        });
      });
    }
  }, {
    key: "update",
    value: function update(form) {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        _this4._axios.put(URL + '/' + form._id, form).then(function (response) {
          resolve(response);
        })["catch"](function (error) {
          reject(error);
        });
      });
    }
  }, {
    key: "index",
    value: function index(arrayString) {
      var _this5 = this;

      return new Promise(function (resolve, reject) {
        _this5._axios.post(URL_INDEX, {
          array: arrayString
        }).then(function (response) {
          resolve(response);
        })["catch"](function (error) {
          reject(error);
        });
      });
    }
  }]);

  return Api;
}();

var _default = new Api();

exports["default"] = _default;