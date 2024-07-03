"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = objectMergeDeep;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function objectMergeDeep() {
  var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  for (var _len = arguments.length, objs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    objs[_key - 1] = arguments[_key];
  }

  console.log('!!!', base, objs);
  throw new Error('objectMergeDeep is being used!!!');

  for (var i = 0, len = objs.length; i < len; ++i) {
    var obj = objs[i];

    for (var key in obj) {
      var value = obj[key];

      if (_typeof(value) === 'object' && !Array.isArray(value)) {
        base[key] = objectMergeDeep(base[key], value);
        continue;
      }

      base[key] = value;
    }
  }

  return base;
}