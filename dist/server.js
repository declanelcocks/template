require("source-map-support").install();
global.assets = require("./assets.json");
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:3001/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 129);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/diegohaz/arc/wiki/Atomic-Design#do-not-worry
var req = __webpack_require__(88);

req.keys().forEach(function (key) {
  var componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1');
  module.exports[componentName] = req(key).default;
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(req, 'req', '/Users/Declan/coding/template/src/components/index.js');
}();

;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/diegohaz/arc/wiki/Actions
var req = __webpack_require__(91);

req.keys().forEach(function (key) {
  var actions = req(key);

  Object.keys(actions).forEach(function (name) {
    module.exports[name] = actions[name];
  });
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(req, 'req', '/Users/Declan/coding/template/src/store/actions.js');
}();

;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("styled-theme");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/diegohaz/arc/wiki/Containers
var req = __webpack_require__(90);

req.keys().forEach(function (key) {
  var containerName = key.replace(/^\.\/([^.]+)\.js$/, '$1');
  module.exports[containerName] = req(key).default;
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(req, 'req', '/Users/Declan/coding/template/src/containers/index.js');
}();

;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/diegohaz/arc/wiki/Selectors
var upperFirst = __webpack_require__(108);

var req = __webpack_require__(95);

req.keys().forEach(function (key) {
  var storeName = key.replace(/\.\/(.+)\/.+$/, '$1');
  var fromName = 'from' + upperFirst(storeName);
  var selectors = req(key);
  var getState = function getState() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return state[storeName] || {};
  };

  module.exports[fromName] = {};

  Object.keys(selectors).forEach(function (name) {
    var selector = selectors[name];
    if (typeof selector === 'function') {
      module.exports[fromName][name] = function (state) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return selector.apply(undefined, [getState(state)].concat(args));
      };
    }
  });
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(req, 'req', '/Users/Declan/coding/template/src/store/selectors.js');
}();

;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("styled-tools");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(23);

var config = {
  all: {
    env: "development" || 'development',
    isDev: "development" !== 'production',
    basename: "",
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    isBrowser: typeof window !== 'undefined',
    isServer: typeof window === 'undefined',
    apiUrl: 'http://' + (process.env.HOST || 'localhost') + ':' + (process.env.PORT || 3000) + '/api',
    mongo: {
      options: {
        db: {
          safe: true
        }
      }
    }
  },
  test: {
    mongo: {
      uri: 'mongodb://' + (process.env.HOST || 'localhost') + '/arc-test',
      options: {
        debug: false
      }
    }
  },
  development: {
    mongo: {
      uri: 'mongodb://' + (process.env.HOST || 'localhost') + '/arc-dev',
      options: {
        debug: true
      }
    }
  },
  production: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080,
    apiUrl: 'https://jsonplaceholder.typicode.com',
    mongo: {
      uri: process.env.MONGODB_URI || 'mongodb://localhost/arc'
    }
  }
};

module.exports = merge(config.all, config[config.all.env]);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(config, 'config', '/Users/Declan/coding/template/src/config.js');
}();

;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.schema = exports.User = undefined;

var _model = __webpack_require__(34);

Object.defineProperty(exports, 'schema', {
  enumerable: true,
  get: function get() {
    return _model.schema;
  }
});

var _express = __webpack_require__(9);

var _middleware = __webpack_require__(16);

var _controller = __webpack_require__(33);

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _express.Router();

router.get('/users', _middleware.ensureAuth, _controller.currentUser);
router.post('/auth/signup', _controller.signup);
router.post('/auth/login', _controller.login);
router.post('/auth/github', _controller.authGithub);
router.get('/auth/github/callback', _controller.authGithubCallback);
router.post('/auth/facebook', _controller.authFacebook);
router.get('/auth/facebook/callback', _controller.authFacebookCallback);

exports.User = _model2.default;
var _default = router;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(router, 'router', '/Users/Declan/coding/template/src/api/user/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/api/user/index.js');
}();

;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var AUTH_SIGNUP_REQUEST = exports.AUTH_SIGNUP_REQUEST = 'AUTH_SIGNUP_REQUEST';
var AUTH_LOGIN = exports.AUTH_LOGIN = 'AUTH_LOGIN';
var AUTH_LOGIN_PREPARE = exports.AUTH_LOGIN_PREPARE = 'AUTH_LOGIN_PREPARE';
var AUTH_LOGIN_REQUEST = exports.AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST';
var AUTH_LOGIN_SUCCESS = exports.AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
var AUTH_LOGIN_FAILURE = exports.AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE';
var AUTH_USER = exports.AUTH_USER = 'AUTH_USER';
var AUTH_LOGOUT = exports.AUTH_LOGOUT = 'AUTH_LOGOUT';

var authSignupRequest = exports.authSignupRequest = function authSignupRequest(service, options) {
  return {
    type: AUTH_SIGNUP_REQUEST,
    service: service,
    options: options
  };
};

var authLoginPrepare = exports.authLoginPrepare = function authLoginPrepare(service, options) {
  return {
    type: AUTH_LOGIN_PREPARE,
    service: service,
    options: options
  };
};

var authLoginRequest = exports.authLoginRequest = function authLoginRequest(service, options) {
  return {
    type: AUTH_LOGIN_REQUEST,
    service: service,
    options: options
  };
};

var authLoginSuccess = exports.authLoginSuccess = function authLoginSuccess(user) {
  return {
    type: AUTH_LOGIN_SUCCESS,
    user: user
  };
};

var authLoginFailure = exports.authLoginFailure = function authLoginFailure(error) {
  return {
    type: AUTH_LOGIN_FAILURE,
    error: error
  };
};

var authUser = exports.authUser = function authUser() {
  return { type: AUTH_USER };
};

var authLogout = exports.authLogout = function authLogout() {
  return { type: AUTH_LOGOUT };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AUTH_SIGNUP_REQUEST, 'AUTH_SIGNUP_REQUEST', '/Users/Declan/coding/template/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(AUTH_LOGIN, 'AUTH_LOGIN', '/Users/Declan/coding/template/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(AUTH_LOGIN_PREPARE, 'AUTH_LOGIN_PREPARE', '/Users/Declan/coding/template/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(AUTH_LOGIN_REQUEST, 'AUTH_LOGIN_REQUEST', '/Users/Declan/coding/template/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(AUTH_LOGIN_SUCCESS, 'AUTH_LOGIN_SUCCESS', '/Users/Declan/coding/template/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(AUTH_LOGIN_FAILURE, 'AUTH_LOGIN_FAILURE', '/Users/Declan/coding/template/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(AUTH_USER, 'AUTH_USER', '/Users/Declan/coding/template/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(AUTH_LOGOUT, 'AUTH_LOGOUT', '/Users/Declan/coding/template/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(authSignupRequest, 'authSignupRequest', '/Users/Declan/coding/template/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(authLoginPrepare, 'authLoginPrepare', '/Users/Declan/coding/template/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(authLoginRequest, 'authLoginRequest', '/Users/Declan/coding/template/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(authLoginSuccess, 'authLoginSuccess', '/Users/Declan/coding/template/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(authLoginFailure, 'authLoginFailure', '/Users/Declan/coding/template/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(authUser, 'authUser', '/Users/Declan/coding/template/src/store/auth/actions.js');

  __REACT_HOT_LOADER__.register(authLogout, 'authLogout', '/Users/Declan/coding/template/src/store/auth/actions.js');
}();

;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAuthenticated = isAuthenticated;
exports.ensureAuth = ensureAuth;

var _jsonwebtoken = __webpack_require__(22);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _user = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isAuthenticated(req, res, next) {
  req.isAuthenticated = function checkForToken() {
    var token = req.headers.authorization && req.headers.authorization.split(' ')[1] || req.cookies.token;

    try {
      return _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);
    } catch (err) {
      return false;
    }
  };

  if (req.isAuthenticated()) {
    var payload = req.isAuthenticated();

    _user.User.findById(payload.sub, function (err, user) {
      req.user = user;
      next();
    });
  } else {
    next();
  }
}

function ensureAuth(req, res, next) {
  if (req.isAuthenticated()) return next();

  return res.status(401).send({ error: 'Unauthorized' });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(isAuthenticated, 'isAuthenticated', '/Users/Declan/coding/template/src/api/middleware/index.js');

  __REACT_HOT_LOADER__.register(ensureAuth, 'ensureAuth', '/Users/Declan/coding/template/src/api/middleware/index.js');
}();

;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseEndpoint = exports.parseSettings = exports.parseJSON = exports.checkStatus = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

__webpack_require__(106);

var _reactCookie = __webpack_require__(15);

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _queryString = __webpack_require__(112);

var _merge = __webpack_require__(23);

var _merge2 = _interopRequireDefault(_merge);

var _config = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var checkStatus = exports.checkStatus = function checkStatus(response) {
  if (response.ok) return response;

  var error = new Error(response.status + ' ' + response.statusText);
  error.response = response;
  throw error;
};

var parseJSON = exports.parseJSON = function parseJSON(response) {
  return new Promise(function (resolve) {
    return response.json().then(function (json) {
      return resolve({
        status: response.status,
        ok: response.ok,
        json: json
      });
    });
  });
};

var parseSettings = function parseSettings() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref$method = _ref.method,
      method = _ref$method === undefined ? 'get' : _ref$method,
      data = _ref.data,
      locale = _ref.locale,
      authorization = _ref.authorization,
      otherSettings = _objectWithoutProperties(_ref, ['method', 'data', 'locale', 'authorization']);

  var headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Language': locale,
    authorization: authorization ? 'Bearer ' + authorization : undefined
  };

  var settings = (0, _merge2.default)({
    body: data ? JSON.stringify(data) : undefined,
    method: method,
    headers: headers
  }, otherSettings);

  return settings;
};

exports.parseSettings = parseSettings;
var parseEndpoint = exports.parseEndpoint = function parseEndpoint(endpoint, params) {
  var url = endpoint.indexOf('http') === 0 ? endpoint : _config.apiUrl + endpoint;
  var querystring = params ? '?' + (0, _queryString.stringify)(params) : '';
  return '' + url + querystring;
};

var api = {};

api.request = function (endpoint) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var params = _ref2.params,
      settings = _objectWithoutProperties(_ref2, ['params']);

  settings.authorization = _reactCookie2.default.load('token');

  return new Promise(function (resolve, reject) {
    return fetch(parseEndpoint(endpoint, params), parseSettings(settings)).then(parseJSON).then(function (response) {
      if (response.ok) return resolve(response.json);

      return reject(response.json);
    }).catch(function (err) {
      var error = new Error('Network Error: ' + err.message);
      error.response = err;

      return reject(error);
    });
  });
};['delete', 'get'].forEach(function (method) {
  api[method] = function (endpoint, settings) {
    return api.request(endpoint, _extends({ method: method }, settings));
  };
});['post', 'put', 'patch'].forEach(function (method) {
  api[method] = function (endpoint, data, settings) {
    return api.request(endpoint, _extends({ method: method, data: data }, settings));
  };
});

api.create = function () {
  var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    settings: settings,

    setToken: function setToken(token) {
      this.settings.headers = _extends({}, this.settings.headers, {
        Authorization: 'Bearer ' + token
      });
    },
    unsetToken: function unsetToken() {
      this.settings.headers = _extends({}, this.settings.headers, {
        Authorization: undefined
      });
    },
    request: function request(endpoint, settings) {
      return api.request(endpoint, (0, _merge2.default)({}, this.settings, settings));
    },
    post: function post(endpoint, data, settings) {
      return this.request(endpoint, _extends({ method: 'post', data: data }, settings));
    },
    get: function get(endpoint, settings) {
      return this.request(endpoint, _extends({ method: 'get' }, settings));
    },
    put: function put(endpoint, data, settings) {
      return this.request(endpoint, _extends({ method: 'put', data: data }, settings));
    },
    patch: function patch(endpoint, data, settings) {
      return this.request(endpoint, _extends({ method: 'patch', data: data }, settings));
    },
    delete: function _delete(endpoint, settings) {
      return this.request(endpoint, _extends({ method: 'delete' }, settings));
    }
  };
};

var _default = api;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(checkStatus, 'checkStatus', '/Users/Declan/coding/template/src/services/api/index.js');

  __REACT_HOT_LOADER__.register(parseJSON, 'parseJSON', '/Users/Declan/coding/template/src/services/api/index.js');

  __REACT_HOT_LOADER__.register(parseSettings, 'parseSettings', '/Users/Declan/coding/template/src/services/api/index.js');

  __REACT_HOT_LOADER__.register(parseEndpoint, 'parseEndpoint', '/Users/Declan/coding/template/src/services/api/index.js');

  __REACT_HOT_LOADER__.register(api, 'api', '/Users/Declan/coding/template/src/services/api/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/services/api/index.js');
}();

;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createValidator = exports.match = exports.oneOf = exports.integer = exports.maxLength = exports.minLength = exports.required = exports.url = exports.email = undefined;

var _isEmail = __webpack_require__(125);

var _isEmail2 = _interopRequireDefault(_isEmail);

var _isInt = __webpack_require__(127);

var _isInt2 = _interopRequireDefault(_isInt);

var _isIn = __webpack_require__(126);

var _isIn2 = _interopRequireDefault(_isIn);

var _isURL = __webpack_require__(128);

var _isURL2 = _interopRequireDefault(_isURL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isEmpty = function isEmpty(value) {
  return value === undefined || value === null || value === '';
};
var join = function join(rules) {
  return function (value, data) {
    return rules.map(function (rule) {
      return rule(value, data);
    }).filter(function (error) {
      return !!error;
    })[0];
  };
};

var email = exports.email = function email(value) {
  return !isEmpty(value) && !(0, _isEmail2.default)(value) && 'Invalid email address';
};

var url = exports.url = function url(value) {
  return !isEmpty(value) && !(0, _isURL2.default)(value) && 'Invalid URL';
};

var required = exports.required = function required(value) {
  return isEmpty(value) && 'Required field';
};

var minLength = exports.minLength = function minLength(min) {
  return function (value) {
    return !isEmpty(value) && value.length < min && 'Must be at least ' + min + ' characters';
  };
};

var maxLength = exports.maxLength = function maxLength(max) {
  return function (value) {
    return !isEmpty(value) && value.length > max && 'Must be no more than ' + max + ' characters';
  };
};

var integer = exports.integer = function integer(value) {
  return !(0, _isInt2.default)(value) && 'Must be an integer';
};

var oneOf = exports.oneOf = function oneOf(values) {
  return function (value) {
    return !(0, _isIn2.default)(value, values) && 'Must be one of: ' + values.join(', ');
  };
};

var match = exports.match = function match(field) {
  return function (value, data) {
    return data && value !== data[field] && 'Must match';
  };
};

var createValidator = exports.createValidator = function createValidator(rules) {
  return function () {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var errors = {};
    Object.keys(rules).forEach(function (key) {
      var rule = join([].concat(rules[key]));
      var error = rule(data[key], data);
      if (error) {
        errors[key] = error;
      }
    });
    return errors;
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(isEmpty, 'isEmpty', '/Users/Declan/coding/template/src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(join, 'join', '/Users/Declan/coding/template/src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(email, 'email', '/Users/Declan/coding/template/src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(url, 'url', '/Users/Declan/coding/template/src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(required, 'required', '/Users/Declan/coding/template/src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(minLength, 'minLength', '/Users/Declan/coding/template/src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(maxLength, 'maxLength', '/Users/Declan/coding/template/src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(integer, 'integer', '/Users/Declan/coding/template/src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(oneOf, 'oneOf', '/Users/Declan/coding/template/src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(match, 'match', '/Users/Declan/coding/template/src/services/validation/index.js');

  __REACT_HOT_LOADER__.register(createValidator, 'createValidator', '/Users/Declan/coding/template/src/services/validation/index.js');
}();

;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var initialState = exports.initialState = {
  user: null,
  authenticated: false
};

var getUser = exports.getUser = function getUser() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return state.user;
};
var getAuthenticated = exports.getAuthenticated = function getAuthenticated() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return state.authenticated;
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, "initialState", "/Users/Declan/coding/template/src/store/auth/selectors.js");

  __REACT_HOT_LOADER__.register(getUser, "getUser", "/Users/Declan/coding/template/src/store/auth/selectors.js");

  __REACT_HOT_LOADER__.register(getAuthenticated, "getAuthenticated", "/Users/Declan/coding/template/src/store/auth/selectors.js");
}();

;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#modal
var MODAL_SHOW = exports.MODAL_SHOW = 'MODAL_SHOW';
var MODAL_HIDE = exports.MODAL_HIDE = 'MODAL_HIDE';

var modalShow = exports.modalShow = function modalShow(name) {
  return {
    type: MODAL_SHOW,
    payload: {
      name: name
    },
    meta: {
      gtm: name
    }
  };
};

var modalHide = exports.modalHide = function modalHide(name) {
  return {
    type: MODAL_HIDE,
    payload: {
      name: name
    }
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MODAL_SHOW, 'MODAL_SHOW', '/Users/Declan/coding/template/src/store/modal/actions.js');

  __REACT_HOT_LOADER__.register(MODAL_HIDE, 'MODAL_HIDE', '/Users/Declan/coding/template/src/store/modal/actions.js');

  __REACT_HOT_LOADER__.register(modalShow, 'modalShow', '/Users/Declan/coding/template/src/store/modal/actions.js');

  __REACT_HOT_LOADER__.register(modalHide, 'modalHide', '/Users/Declan/coding/template/src/store/modal/actions.js');
}();

;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#modal
var initialState = exports.initialState = {};

var isOpen = exports.isOpen = function isOpen() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var name = arguments[1];
  return !!state[name];
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, "initialState", "/Users/Declan/coding/template/src/store/modal/selectors.js");

  __REACT_HOT_LOADER__.register(isOpen, "isOpen", "/Users/Declan/coding/template/src/store/modal/selectors.js");
}();

;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("lodash/merge");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("redux-saga-thunk");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(96);

var _express = __webpack_require__(65);

var _express2 = _interopRequireDefault(_express);

var _express3 = __webpack_require__(9);

var _cors = __webpack_require__(101);

var _cors2 = _interopRequireDefault(_cors);

var _csurf = __webpack_require__(102);

var _csurf2 = _interopRequireDefault(_csurf);

var _mongoose = __webpack_require__(24);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _api = __webpack_require__(30);

var _api2 = _interopRequireDefault(_api);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCookie = __webpack_require__(15);

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _serializeJavascript = __webpack_require__(122);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _styledComponents = __webpack_require__(3);

var _server = __webpack_require__(114);

var _reactRedux = __webpack_require__(6);

var _reactRouter = __webpack_require__(116);

var _reactRouterServer = __webpack_require__(119);

var _config = __webpack_require__(12);

var _configure = __webpack_require__(68);

var _configure2 = _interopRequireDefault(_configure);

var _actions = __webpack_require__(4);

var _api3 = __webpack_require__(17);

var _api4 = _interopRequireDefault(_api3);

var _routes = __webpack_require__(55);

var _routes2 = _interopRequireDefault(_routes);

var _App = __webpack_require__(35);

var _App2 = _interopRequireDefault(_App);

var _Html = __webpack_require__(37);

var _Html2 = _interopRequireDefault(_Html);

var _Error = __webpack_require__(36);

var _Error2 = _interopRequireDefault(_Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderApp = function renderApp(_ref) {
  var store = _ref.store,
      context = _ref.context,
      location = _ref.location,
      sheet = _ref.sheet;

  var app = sheet.collectStyles(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouter.StaticRouter,
      { basename: _config.basename, context: context, location: location },
      _react2.default.createElement(_App2.default, { routes: _routes2.default })
    )
  ));
  return (0, _reactRouterServer.renderToString)(app);
}; /* eslint-disable no-console */


var renderHtml = function renderHtml(_ref2) {
  var serverState = _ref2.serverState,
      initialState = _ref2.initialState,
      content = _ref2.content,
      sheet = _ref2.sheet;

  var styles = sheet.getStyleElement();
  var _global = global,
      assets = _global.assets;

  var state = '\n    window.__SERVER_STATE__ = ' + (0, _serializeJavascript2.default)(serverState) + ';\n    window.__INITIAL_STATE__ = ' + (0, _serializeJavascript2.default)(initialState) + ';\n  ';
  var props = {
    styles: styles, assets: assets, state: state, content: content
  };
  var html = _react2.default.createElement(_Html2.default, props);
  return '<!doctype html>\n' + (0, _server.renderToStaticMarkup)(html);
};

_mongoose2.default.connect(_config.mongo.uri);

var router = new _express3.Router();

router.use('/api', (0, _cors2.default)(), _api2.default);

router.use((0, _csurf2.default)({ cookie: true }));

router.use(function (req, res, next) {
  var location = req.url;
  var store = (0, _configure2.default)({}, { api: _api4.default.create() });
  var context = {};
  var sheet = new _styledComponents.ServerStyleSheet();

  _reactCookie2.default.plugToRequest(req, res);
  var token = req.cookies.token;


  if (token) store.dispatch((0, _actions.authUser)());

  renderApp({ store: store, context: context, location: location, sheet: sheet }).then(function (_ref3) {
    var serverState = _ref3.state,
        content = _ref3.html;

    if (context.status) {
      res.status(context.status);
    }
    if (context.url) {
      res.redirect(context.url);
    } else {
      var initialState = store.getState();
      res.send(renderHtml({ serverState: serverState, initialState: initialState, content: content, sheet: sheet }));
    }
  }).catch(next);
});

router.use(function (err, req, res, next) {
  var sheet = new _styledComponents.ServerStyleSheet();
  var content = (0, _server.renderToStaticMarkup)(sheet.collectStyles(_react2.default.createElement(_Error2.default, null)));
  res.status(500).send(renderHtml({ content: content, sheet: sheet }));
  console.error(err);
  next(err);
});

var app = (0, _express2.default)(router);

app.listen(_config.port, function (error) {
  var boldBlue = function boldBlue(text) {
    return '\x1B[1m\x1B[34m' + text + '\x1B[39m\x1B[22m';
  };
  if (error) {
    console.error(error);
  } else {
    console.info('Server is running at ' + boldBlue('http://' + _config.host + ':' + _config.port + _config.basename + '/'));
  }
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(renderApp, 'renderApp', '/Users/Declan/coding/template/src/server.js');

  __REACT_HOT_LOADER__.register(renderHtml, 'renderHtml', '/Users/Declan/coding/template/src/server.js');

  __REACT_HOT_LOADER__.register(router, 'router', '/Users/Declan/coding/template/src/server.js');

  __REACT_HOT_LOADER__.register(app, 'app', '/Users/Declan/coding/template/src/server.js');
}();

;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(9);

var _middleware = __webpack_require__(16);

var _test = __webpack_require__(32);

var _test2 = _interopRequireDefault(_test);

var _user = __webpack_require__(13);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _express.Router();

router.use(_middleware.isAuthenticated);
router.use('/test', _test2.default);
router.use('/', _user2.default); // includes `/users` and `/auth` endpoints

var _default = router;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(router, 'router', '/Users/Declan/coding/template/src/api/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/api/index.js');
}();

;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var index = exports.index = function index(req, res) {
  return res.send({ message: 'Welcome to the API!' });
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(index, 'index', '/Users/Declan/coding/template/src/api/test/controller.js');
}();

;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(9);

var _controller = __webpack_require__(31);

var router = new _express.Router();

router.get('/', _controller.index);

var _default = router;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(router, 'router', '/Users/Declan/coding/template/src/api/test/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/api/test/index.js');
}();

;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authFacebookCallback = exports.authFacebook = exports.authGithubCallback = exports.authGithub = exports.login = exports.signup = exports.currentUser = exports.generateToken = undefined;

var _request = __webpack_require__(121);

var _request2 = _interopRequireDefault(_request);

var _jsonwebtoken = __webpack_require__(22);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _moment = __webpack_require__(109);

var _moment2 = _interopRequireDefault(_moment);

var _ = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generateToken = exports.generateToken = function generateToken(user) {
  var payload = {
    iss: 'my.domain.com',
    sub: user.id,
    iat: (0, _moment2.default)().unix(),
    exp: (0, _moment2.default)().add(7, 'days').unix()
  };

  return _jsonwebtoken2.default.sign(payload, process.env.TOKEN_SECRET);
};

var currentUser = exports.currentUser = function currentUser(req, res) {
  if (!req.user) return res.status(401).send({ error: 'Your login has expired.' });

  return _.User.findOne({ _id: req.user._id }, function (err, user) {
    return res.send({ token: generateToken(user), user: user });
  });
};

var signup = exports.signup = function signup(req, res) {
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('email', 'Email cannot be blank').notEmpty();
  req.assert('password', 'Password must be at least 4 characters long').len(4);

  var errors = req.validationErrors();

  if (errors) return res.status(400).send(errors);

  return _.User.findOne({ email: req.body.email }, function (err, user) {
    if (user) {
      return res.status(400).send({ error: 'The email address you have entered is already associated with another account.' });
    }

    var newUser = new _.User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    return newUser.save(function (err) {
      if (err) return res.status(400).send({ error: err });

      return res.send({ token: generateToken(newUser), user: newUser });
    });
  });
};

var login = exports.login = function login(req, res) {
  if (req.isAuthenticated()) {
    // valid token was provided, but the user does not exist
    if (!req.user) return res.status(400).send({ error: 'Invalid token' });
    return res.send({ token: generateToken(req.user), user: req.user });
  }

  req.assert('email', 'Email is not valid').isEmail();
  req.assert('email', 'Email cannot be blank').notEmpty();
  req.assert('password', 'Password cannot be blank').notEmpty();
  req.sanitize('email').normalizeEmail({ remove_dots: false });

  var errors = req.validationErrors();

  if (errors) return res.status(400).send(errors);

  return _.User.findOne({ email: req.body.email }, function (err, user) {
    if (!user) return res.status(401).send({ error: 'The email address ' + req.body.email + ' is not associated with any account.' });

    return user.comparePassword(req.body.password, function (err, isMatch) {
      if (!isMatch) return res.status(401).send({ error: 'Invalid email or password' });

      return res.send({ token: generateToken(user), user: user.toJSON() });
    });
  });
};

var authGithub = exports.authGithub = function authGithub(req, res) {
  var accessTokenUrl = 'https://github.com/login/oauth/access_token';
  var userUrl = 'https://api.github.com/user';

  var params = {
    code: req.body.code,
    client_id: req.body.clientId,
    client_secret: process.env.GITHUB_SECRET,
    redirect_uri: req.body.redirectUri,
    grant_type: 'authorization_code'

    // Step 1. Exchange authorization code for access token.
  };_request2.default.post(accessTokenUrl, { json: true, form: params }, function (err, response, token) {
    var accessToken = token.access_token;
    var headers = {
      Authorization: 'Bearer ' + accessToken,
      'User-Agent': 'template'

      // Step 2. Retrieve user's profile information.
    };return _request2.default.get({ url: userUrl, headers: headers, json: true }, function (err, response, profile) {
      if (profile.error) return res.status(500).send({ error: profile.error.message });

      // Step 3a. Link accounts if user is authenticated.
      if (req.isAuthenticated()) {
        return _.User.findOne({ github: profile.id }, function (err, user) {
          if (user) {
            return res.status(409).send({ error: 'There is already an existing account linked with this Github account.' });
          }

          if (!user) return res.status(401).send({ error: 'Your login has expired.' });

          var userWithGithub = req.user;
          userWithGithub.name = user.name || profile.name;
          userWithGithub.github = profile.id;

          return user.save(function () {
            return res.send({ token: generateToken(userWithGithub), user: userWithGithub });
          });
        });
      }

      // Step 3b. Create a new user account or return an existing one.
      return _.User.findOne({ github: profile.id }, function (err, user) {
        // User exists
        if (user) return res.send({ token: generateToken(user), user: user });

        var newUser = new _.User({
          name: profile.name,
          email: profile.email,
          github: profile.id
        });

        return newUser.save(function (error) {
          if (error) return res.status(400).send({ error: error });

          return res.send({ token: generateToken(newUser), user: newUser });
        });
      });
    });
  });
};

var authGithubCallback = exports.authGithubCallback = function authGithubCallback(_ref) {
  var res = _ref.res;
  return res.send({ msg: 'loading' });
};

var authFacebook = exports.authFacebook = function authFacebook(req, res) {
  var profileFields = ['id', 'name', 'email', 'gender', 'location'];
  var accessTokenUrl = 'https://graph.facebook.com/v2.5/oauth/access_token';
  var graphApiUrl = 'https://graph.facebook.com/v2.5/me?fields=' + profileFields.join(',');

  var params = {
    code: req.body.code,
    client_id: req.body.clientId,
    client_secret: process.env.FACEBOOK_SECRET,
    redirect_uri: req.body.redirectUri

    // Step 1. Exchange authorization code for access token.
  };_request2.default.get({ url: accessTokenUrl, qs: params, json: true }, function (err, response, accessToken) {
    if (accessToken.error) {
      return res.status(500).send({ error: accessToken.error.message });
    }

    // Step 2. Retrieve user's profile information.
    return _request2.default.get({ url: graphApiUrl, qs: accessToken, json: true }, function (err, response, profile) {
      if (profile.error) return res.status(500).send({ error: profile.error.message });

      // Step 3a. Link accounts if user is authenticated.
      if (req.isAuthenticated()) {
        return _.User.findOne({ facebook: profile.id }, function (err, user) {
          if (user) {
            return res.status(409).send({ error: 'There is already an existing account linked with this Github account.' });
          }

          if (!user) return res.status(401).send({ error: 'Your login has expired.' });

          var userWithFacebook = req.user;
          userWithFacebook.name = user.name || profile.name;
          userWithFacebook.facebook = profile.id;

          return user.save(function () {
            return res.send({ token: generateToken(userWithFacebook), user: userWithFacebook });
          });
        });
      }

      // Step 3b. Create a new user account or return an existing one.
      return _.User.findOne({ facebook: profile.id }, function (err, user) {
        // User with Facebook ID exists
        if (user) return res.send({ token: generateToken(user), user: user });

        return _.User.findOne({ email: profile.email }, function (err, user) {
          // User with email exists => Add Facebook ID to user
          if (user) {
            user.name = user.name || profile.name;
            user.facebook = profile.id;

            return user.save(function () {
              return res.send({ token: generateToken(user), user: user });
            });
          }

          // User with email or Facebook ID doesn't exist => Create new User
          var newUser = new _.User({
            name: profile.name,
            email: profile.email,
            facebook: profile.id
          });

          return newUser.save(function (error) {
            if (error) return res.status(400).send({ error: error });

            return res.send({ token: generateToken(newUser), user: newUser });
          });
        });
      });
    });
  });
};

var authFacebookCallback = exports.authFacebookCallback = function authFacebookCallback(_ref2) {
  var res = _ref2.res;
  return res.send({ msg: 'loading' });
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(generateToken, 'generateToken', '/Users/Declan/coding/template/src/api/user/controller.js');

  __REACT_HOT_LOADER__.register(currentUser, 'currentUser', '/Users/Declan/coding/template/src/api/user/controller.js');

  __REACT_HOT_LOADER__.register(signup, 'signup', '/Users/Declan/coding/template/src/api/user/controller.js');

  __REACT_HOT_LOADER__.register(login, 'login', '/Users/Declan/coding/template/src/api/user/controller.js');

  __REACT_HOT_LOADER__.register(authGithub, 'authGithub', '/Users/Declan/coding/template/src/api/user/controller.js');

  __REACT_HOT_LOADER__.register(authGithubCallback, 'authGithubCallback', '/Users/Declan/coding/template/src/api/user/controller.js');

  __REACT_HOT_LOADER__.register(authFacebook, 'authFacebook', '/Users/Declan/coding/template/src/api/user/controller.js');

  __REACT_HOT_LOADER__.register(authFacebookCallback, 'authFacebookCallback', '/Users/Declan/coding/template/src/api/user/controller.js');
}();

;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(24);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcryptNodejs = __webpack_require__(97);

var _bcryptNodejs2 = _interopRequireDefault(_bcryptNodejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = new _mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  passwordResetToken: String,
  passwordResetExpires: Date,
  github: String,
  facebook: String
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

// Password hash middleware
userSchema.pre('save', function encryptNewPassword(next) {
  var user = this;

  if (!user.isModified('password')) return next();

  return _bcryptNodejs2.default.genSalt(10, function (err, salt) {
    _bcryptNodejs2.default.hash(user.password, salt, null, function (err, hash) {
      user.password = hash;
      return next();
    });
  });
});

// Helper method to validate a user's password
userSchema.methods = {
  comparePassword: function comparePassword(password, cb) {
    _bcryptNodejs2.default.compare(password, this.password, function (err, isMatch) {
      cb(err, isMatch);
    });
  }
};

// Clean up the JSON response from User
userSchema.options.toJSON = {
  transform: function sanitizeUserDoc(doc, ret) {
    delete ret.password;
    delete ret.passwordResetToken;
    delete ret.passwordResetExpires;
  }
};

module.exports = _mongoose2.default.model('User', userSchema);
var _default = exports;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(userSchema, 'userSchema', '/Users/Declan/coding/template/src/api/user/model.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/api/user/model.js');
}();

;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  body {\n    margin: 0;\n  }\n'], ['\n  body {\n    margin: 0;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(117);

var _styledComponents = __webpack_require__(3);

var _reactHelmet = __webpack_require__(25);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _default2 = __webpack_require__(56);

var _default3 = _interopRequireDefault(_default2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// https://github.com/diegohaz/arc/wiki/Styling


(0, _styledComponents.injectGlobal)(_templateObject);

var App = function App(_ref) {
  var routes = _ref.routes,
      _ref$initialData = _ref.initialData,
      initialData = _ref$initialData === undefined ? [] : _ref$initialData;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactHelmet2.default,
      { titleTemplate: 'ARc - %s' },
      _react2.default.createElement(
        'title',
        null,
        'Atomic React'
      ),
      _react2.default.createElement('meta', { name: 'description', content: 'React starter kit based on Atomic Design with React Router v4, Webpack, Redux, Server Side Rendering and more.' }),
      _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
      _react2.default.createElement('meta', { property: 'og:site_name', content: 'ARc' }),
      _react2.default.createElement('meta', { property: 'og:image', content: 'https://arc.js.org/thumbnail.png' }),
      _react2.default.createElement('meta', { property: 'og:image:type', content: 'image/png' }),
      _react2.default.createElement('meta', { property: 'og:image:width', content: '1200' }),
      _react2.default.createElement('meta', { property: 'og:image:height', content: '630' }),
      _react2.default.createElement('link', { rel: 'icon', href: 'https://arc.js.org/icon.png' })
    ),
    _react2.default.createElement(
      _styledComponents.ThemeProvider,
      { theme: _default3.default },
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        routes.map(function (route, index) {
          return (
            // pass in the initialData from the server for this specific route
            _react2.default.createElement(_reactRouterDom.Route, _extends({ key: route.path }, route, { initialData: initialData[index] }))
          );
        })
      )
    )
  );
};

App.propTypes = {
  routes: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    path: _propTypes2.default.string.isRequired,
    component: _propTypes2.default.func.isRequired
  })),
  initialData: _propTypes2.default.array
};

var _default = App;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(App, 'App', '/Users/Declan/coding/template/src/components/App.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/components/App.js');
}();

;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ErrorPage = function ErrorPage() {
  return _react2.default.createElement(
    'div',
    null,
    'Oops! A server error occurred'
  );
};

var _default = ErrorPage;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ErrorPage, 'ErrorPage', '/Users/Declan/coding/template/src/components/Error.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/components/Error.js');
}();

;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable react/no-danger */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = __webpack_require__(25);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Html = function Html(_ref) {
  var styles = _ref.styles,
      assets = _ref.assets,
      state = _ref.state,
      content = _ref.content;

  var helmet = _reactHelmet2.default.renderStatic();
  var htmlAttrs = helmet.htmlAttributes.toComponent();
  var bodyAttrs = helmet.bodyAttributes.toComponent();

  return _react2.default.createElement(
    'html',
    _extends({ lang: 'en' }, htmlAttrs),
    _react2.default.createElement(
      'head',
      null,
      helmet.title.toComponent(),
      helmet.meta.toComponent(),
      helmet.link.toComponent(),
      assets.css.map(function (path) {
        return _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', key: path, href: path });
      }),
      styles
    ),
    _react2.default.createElement(
      'body',
      bodyAttrs,
      _react2.default.createElement('main', { id: 'app', dangerouslySetInnerHTML: { __html: content } }),
      _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: state } }),
      assets.js.map(function (path) {
        return _react2.default.createElement('script', { key: path, src: path });
      })
    )
  );
};

Html.propTypes = {
  styles: _propTypes2.default.node.isRequired,
  assets: _propTypes2.default.shape({
    css: _propTypes2.default.array.isRequired,
    js: _propTypes2.default.array.isRequired
  }).isRequired,
  state: _propTypes2.default.string.isRequired,
  content: _propTypes2.default.string.isRequired
};

var _default = Html;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Html, 'Html', '/Users/Declan/coding/template/src/components/Html.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/components/Html.js');
}();

;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(3);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(5);

var _styledTools = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Block = _styledComponents2.default.div.withConfig({
  displayName: 'Block'
})(['\n  font-family: ', ';\n  background-color: ', ';\n  color: ', ';\n'], (0, _styledTheme.font)('primary'), (0, _styledTools.ifProp)('opaque', (0, _styledTheme.palette)(0, true), 'transparent'), (0, _styledTheme.palette)({ grayscale: 0 }, 1));

Block.propTypes = {
  palette: _propTypes2.default.string,
  reverse: _propTypes2.default.bool,
  opaque: _propTypes2.default.bool
};

Block.defaultProps = {
  palette: 'grayscale'
};

var _default = Block;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Block, 'Block', '/Users/Declan/coding/template/src/components/atoms/Block/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/components/atoms/Block/index.js');
}();

;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(3);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Link = __webpack_require__(118);

var _Link2 = _interopRequireDefault(_Link);

var _styledTheme = __webpack_require__(5);

var _styledTools = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var fontSize = function fontSize(_ref) {
  var height = _ref.height;
  return height / 40 + 'rem';
};

var backgroundColor = function backgroundColor(_ref2) {
  var transparent = _ref2.transparent,
      disabled = _ref2.disabled;
  return transparent ? 'transparent' : (0, _styledTheme.palette)(disabled ? 2 : 1);
};

var foregroundColor = function foregroundColor(_ref3) {
  var transparent = _ref3.transparent,
      disabled = _ref3.disabled;
  return transparent ? (0, _styledTheme.palette)(disabled ? 2 : 1) : (0, _styledTheme.palette)('grayscale', 0, true);
};

var hoverBackgroundColor = function hoverBackgroundColor(_ref4) {
  var disabled = _ref4.disabled,
      transparent = _ref4.transparent;
  return !disabled && !transparent && (0, _styledTheme.palette)(0);
};
var hoverForegroundColor = function hoverForegroundColor(_ref5) {
  var disabled = _ref5.disabled,
      transparent = _ref5.transparent;
  return !disabled && transparent && (0, _styledTheme.palette)(0);
};

var styles = (0, _styledComponents.css)(['\n  display: inline-flex;\n  font-family: ', ';\n  align-items: center;\n  white-space: nowrap;\n  font-size: ', ';\n  border: 0.0625em solid ', ';\n  height: 2.5em;\n  justify-content: center;\n  text-decoration: none;\n  cursor: ', ';\n  appearance: none;\n  padding: 0 1em;\n  border-radius: 0.125em;\n  box-sizing: border-box;\n  pointer-events: ', ';\n  transition: background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out;\n  background-color: ', ';\n  color: ', ';\n\n  &:hover, &:focus, &:active {\n    background-color: ', ';\n    color: ', ';\n  }\n\n  &:focus {\n    outline: none\n  }\n'], (0, _styledTheme.font)('primary'), fontSize, (0, _styledTools.ifProp)('transparent', 'currentcolor', 'transparent'), (0, _styledTools.ifProp)('disabled', 'default', 'pointer'), (0, _styledTools.ifProp)('disabled', 'none', 'auto'), backgroundColor, foregroundColor, hoverBackgroundColor, hoverForegroundColor);

var StyledLink = (0, _styledComponents2.default)(function (_ref6) {
  var disabled = _ref6.disabled,
      transparent = _ref6.transparent,
      reverse = _ref6.reverse,
      palette = _ref6.palette,
      height = _ref6.height,
      theme = _ref6.theme,
      props = _objectWithoutProperties(_ref6, ['disabled', 'transparent', 'reverse', 'palette', 'height', 'theme']);

  return _react2.default.createElement(_Link2.default, props);
}).withConfig({
  displayName: 'Button__StyledLink'
})(['', ''], styles);
var Anchor = _styledComponents2.default.a.withConfig({
  displayName: 'Button__Anchor'
})(['', ''], styles);
var StyledButton = _styledComponents2.default.button.withConfig({
  displayName: 'Button__StyledButton'
})(['', ''], styles);

var Button = function Button(_ref7) {
  var type = _ref7.type,
      props = _objectWithoutProperties(_ref7, ['type']);

  if (props.to) {
    return _react2.default.createElement(StyledLink, props);
  } else if (props.href) {
    return _react2.default.createElement(Anchor, props);
  }
  return _react2.default.createElement(StyledButton, _extends({}, props, { type: type }));
};

Button.propTypes = {
  disabled: _propTypes2.default.bool,
  palette: _propTypes2.default.string,
  transparent: _propTypes2.default.bool,
  reverse: _propTypes2.default.bool,
  height: _propTypes2.default.number,
  type: _propTypes2.default.string,
  to: _propTypes2.default.string,
  href: _propTypes2.default.string
};

Button.defaultProps = {
  palette: 'primary',
  type: 'button',
  height: 40
};

var _default = Button;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(fontSize, 'fontSize', '/Users/Declan/coding/template/src/components/atoms/Button/index.js');

  __REACT_HOT_LOADER__.register(backgroundColor, 'backgroundColor', '/Users/Declan/coding/template/src/components/atoms/Button/index.js');

  __REACT_HOT_LOADER__.register(foregroundColor, 'foregroundColor', '/Users/Declan/coding/template/src/components/atoms/Button/index.js');

  __REACT_HOT_LOADER__.register(hoverBackgroundColor, 'hoverBackgroundColor', '/Users/Declan/coding/template/src/components/atoms/Button/index.js');

  __REACT_HOT_LOADER__.register(hoverForegroundColor, 'hoverForegroundColor', '/Users/Declan/coding/template/src/components/atoms/Button/index.js');

  __REACT_HOT_LOADER__.register(styles, 'styles', '/Users/Declan/coding/template/src/components/atoms/Button/index.js');

  __REACT_HOT_LOADER__.register(StyledLink, 'StyledLink', '/Users/Declan/coding/template/src/components/atoms/Button/index.js');

  __REACT_HOT_LOADER__.register(Anchor, 'Anchor', '/Users/Declan/coding/template/src/components/atoms/Button/index.js');

  __REACT_HOT_LOADER__.register(StyledButton, 'StyledButton', '/Users/Declan/coding/template/src/components/atoms/Button/index.js');

  __REACT_HOT_LOADER__.register(Button, 'Button', '/Users/Declan/coding/template/src/components/atoms/Button/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/components/atoms/Button/index.js');
}();

;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(3);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var fontSize = function fontSize(_ref) {
  var level = _ref.level;
  return 0.75 + 1 * (1 / level) + 'rem';
};

var styles = (0, _styledComponents.css)(['\n  font-family: ', ';\n  font-weight: 500;\n  font-size: ', ';\n  margin: 0;\n  margin-top: 0.85714em;\n  margin-bottom: 0.57142em;\n  color: ', ';\n'], (0, _styledTheme.font)('primary'), fontSize, (0, _styledTheme.palette)({ grayscale: 0 }, 1));

var Heading = (0, _styledComponents2.default)(function (_ref2) {
  var level = _ref2.level,
      children = _ref2.children,
      reverse = _ref2.reverse,
      palette = _ref2.palette,
      theme = _ref2.theme,
      props = _objectWithoutProperties(_ref2, ['level', 'children', 'reverse', 'palette', 'theme']);

  return _react2.default.createElement('h' + level, props, children);
}).withConfig({
  displayName: 'Heading'
})(['', ''], styles);

Heading.propTypes = {
  level: _propTypes2.default.number,
  children: _propTypes2.default.node,
  palette: _propTypes2.default.string,
  reverse: _propTypes2.default.bool
};

Heading.defaultProps = {
  level: 1,
  palette: 'grayscale'
};

var _default = Heading;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(fontSize, 'fontSize', '/Users/Declan/coding/template/src/components/atoms/Heading/index.js');

  __REACT_HOT_LOADER__.register(styles, 'styles', '/Users/Declan/coding/template/src/components/atoms/Heading/index.js');

  __REACT_HOT_LOADER__.register(Heading, 'Heading', '/Users/Declan/coding/template/src/components/atoms/Heading/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/components/atoms/Heading/index.js');
}();

;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(3);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(5);

var _styledTools = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // https://github.com/diegohaz/arc/wiki/Example-components#icon


var fontSize = function fontSize(_ref) {
  var width = _ref.width,
      height = _ref.height;

  var size = width || height;
  return size ? size / 16 + 'rem' : '1.25em';
};

var Wrapper = _styledComponents2.default.span.withConfig({
  displayName: 'Icon__Wrapper'
})(['\n  display: inline-block;\n  font-size: ', ';\n  color: ', ';\n  width: 1em;\n  height: 1em;\n  margin: 0.1em;\n  box-sizing: border-box;\n\n  & > svg {\n    width: 100%;\n    height: 100%;\n    fill: currentcolor;\n    stroke: currentcolor;\n  }\n'], fontSize, (0, _styledTools.ifProp)('palette', (0, _styledTheme.palette)({ grayscale: 0 }, 1), 'currentcolor'));

var Icon = function Icon(_ref2) {
  var icon = _ref2.icon,
      props = _objectWithoutProperties(_ref2, ['icon']);

  var svg = __webpack_require__(89)("./" + icon + '.svg');
  return _react2.default.createElement(Wrapper, _extends({}, props, { dangerouslySetInnerHTML: { __html: svg } }));
};

Icon.propTypes = {
  icon: _propTypes2.default.string.isRequired,
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  palette: _propTypes2.default.string,
  reverse: _propTypes2.default.bool
};

var _default = Icon;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(fontSize, 'fontSize', '/Users/Declan/coding/template/src/components/atoms/Icon/index.js');

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', '/Users/Declan/coding/template/src/components/atoms/Icon/index.js');

  __REACT_HOT_LOADER__.register(Icon, 'Icon', '/Users/Declan/coding/template/src/components/atoms/Icon/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/components/atoms/Icon/index.js');
}();

;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(3);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(5);

var _styledTools = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var fontSize = function fontSize(_ref) {
  var height = _ref.height;
  return height / 35.5555555556 + 'rem';
};

var styles = (0, _styledComponents.css)(['\n  font-family: ', ';\n  display: block;\n  width: 100%;\n  margin: 0;\n  box-sizing: border-box;\n  font-size: ', ';\n  padding: ', ';\n  height: ', ';\n  color: ', ';\n  background-color: ', ';\n  border: 1px solid ', ';\n  border-radius: 2px;\n\n  &[type=checkbox], &[type=radio] {\n    display: inline-block;\n    border: 0;\n    border-radius: 0;\n    width: auto;\n    height: auto;\n    margin: 0 0.2rem 0 0;\n  }\n'], (0, _styledTheme.font)('primary'), fontSize, (0, _styledTools.ifProp)({ type: 'textarea' }, '0.4444444444em', '0 0.4444444444em'), (0, _styledTools.ifProp)({ type: 'textarea' }, 'auto', '2.2222222222em'), (0, _styledTheme.palette)('grayscale', 0), (0, _styledTheme.palette)('grayscale', 0, true), (0, _styledTools.ifProp)('invalid', (0, _styledTheme.palette)('danger', 2), (0, _styledTheme.palette)('grayscale', 3)));

var StyledTextarea = _styledComponents2.default.textarea.withConfig({
  displayName: 'Input__StyledTextarea'
})(['', ''], styles);
var StyledSelect = _styledComponents2.default.select.withConfig({
  displayName: 'Input__StyledSelect'
})(['', ''], styles);
var StyledInput = _styledComponents2.default.input.withConfig({
  displayName: 'Input__StyledInput'
})(['', ''], styles);

var Input = function Input(_ref2) {
  var props = _objectWithoutProperties(_ref2, []);

  if (props.type === 'textarea') {
    return _react2.default.createElement(StyledTextarea, props);
  } else if (props.type === 'select') {
    return _react2.default.createElement(StyledSelect, props);
  }
  return _react2.default.createElement(StyledInput, props);
};

Input.propTypes = {
  type: _propTypes2.default.string,
  reverse: _propTypes2.default.bool,
  height: _propTypes2.default.number,
  invalid: _propTypes2.default.bool
};

Input.defaultProps = {
  type: 'text',
  height: 40
};

var _default = Input;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(fontSize, 'fontSize', '/Users/Declan/coding/template/src/components/atoms/Input/index.js');

  __REACT_HOT_LOADER__.register(styles, 'styles', '/Users/Declan/coding/template/src/components/atoms/Input/index.js');

  __REACT_HOT_LOADER__.register(StyledTextarea, 'StyledTextarea', '/Users/Declan/coding/template/src/components/atoms/Input/index.js');

  __REACT_HOT_LOADER__.register(StyledSelect, 'StyledSelect', '/Users/Declan/coding/template/src/components/atoms/Input/index.js');

  __REACT_HOT_LOADER__.register(StyledInput, 'StyledInput', '/Users/Declan/coding/template/src/components/atoms/Input/index.js');

  __REACT_HOT_LOADER__.register(Input, 'Input', '/Users/Declan/coding/template/src/components/atoms/Input/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/components/atoms/Input/index.js');
}();

;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(3);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = _styledComponents2.default.label.withConfig({
  displayName: 'Label'
})(['\n  font-family: ', ';\n  color: ', ';\n  font-size: 1rem;\n  line-height: 2em;\n'], (0, _styledTheme.font)('primary'), (0, _styledTheme.palette)('grayscale', 1));

Label.propTypes = {
  reverse: _propTypes2.default.bool
};

var _default = Label;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Label, 'Label', '/Users/Declan/coding/template/src/components/atoms/Label/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/components/atoms/Label/index.js');
}();

;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(3);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Error = (0, _styledComponents2.default)(_components.Block).withConfig({
  displayName: 'Field__Error'
})(['\n  margin: 0.5rem 0 0;\n']);

var Wrapper = _styledComponents2.default.div.withConfig({
  displayName: 'Field__Wrapper'
})(['\n  margin-bottom: 1rem;\n  input[type="checkbox"],\n  input[type="radio"] {\n    margin-right: 0.5rem;\n  }\n  label {\n    vertical-align: middle;\n  }\n']);

var Field = function Field(_ref) {
  var error = _ref.error,
      name = _ref.name,
      invalid = _ref.invalid,
      label = _ref.label,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ['error', 'name', 'invalid', 'label', 'type']);

  var inputProps = _extends({ id: name, name: name, type: type, invalid: invalid, 'aria-describedby': name + 'Error' }, props);
  var renderInputFirst = type === 'checkbox' || type === 'radio';
  return _react2.default.createElement(
    Wrapper,
    null,
    renderInputFirst && _react2.default.createElement(_components.Input, inputProps),
    label && _react2.default.createElement(
      _components.Label,
      { htmlFor: inputProps.id },
      label
    ),
    renderInputFirst || _react2.default.createElement(_components.Input, inputProps),
    invalid && error && _react2.default.createElement(
      Error,
      { id: name + 'Error', role: 'alert', palette: 'danger' },
      error
    )
  );
};

Field.propTypes = {
  name: _propTypes2.default.string.isRequired,
  invalid: _propTypes2.default.bool,
  error: _propTypes2.default.string,
  label: _propTypes2.default.string,
  type: _propTypes2.default.string
};

Field.defaultProps = {
  type: 'text'
};

var _default = Field;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Error, 'Error', '/Users/Declan/coding/template/src/components/molecules/Field/index.js');

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', '/Users/Declan/coding/template/src/components/molecules/Field/index.js');

  __REACT_HOT_LOADER__.register(Field, 'Field', '/Users/Declan/coding/template/src/components/molecules/Field/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/components/molecules/Field/index.js');
}();

;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(3);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTools = __webpack_require__(11);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var fadeIn = (0, _styledComponents.keyframes)(['\n  0% { display: none; opacity: 0; }\n  1% { display: block: opacity: 0; }\n  100% { display: block; opacity: 1; }\n']);

var StyledButton = (0, _styledComponents2.default)(_components.Button).withConfig({
  displayName: 'IconButton__StyledButton'
})(['\n  max-width: ', ';\n  width: ', ';\n  padding: ', ';\n  flex: 0 0 2.5em;\n  box-sizing: border-box;\n  ', '\n  ', '\n'], function (props) {
  return props.hasText && !props.collapsed ? '100%' : '2.5em';
}, (0, _styledTools.ifProp)('hasText', 'auto', '2.5em'), (0, _styledTools.ifProp)('hasText', '0 0.4375em', 0), (0, _styledTools.ifProp)('collapsed', (0, _styledComponents.css)(['\n    overflow: hidden;\n    transition: max-width 250ms ease-in-out;\n    will-change: max-width;\n    & .text {\n      display: none;\n    }\n    &:hover {\n      max-width: 100%;\n      & .text {\n        display: block;\n        animation: ', ' 250ms;\n      }\n    }\n  '], fadeIn)), (0, _styledTools.ifProp)('responsive', (0, _styledComponents.css)(['\n    @media screen and (max-width: ', 'px) {\n      width: auto;\n      flex: 0 !important;\n    }\n  '], (0, _styledTools.prop)('breakpoint'))));

var Text = _styledComponents2.default.span.withConfig({
  displayName: 'IconButton__Text'
})(['\n  padding: 0.4375em;\n  @media screen and (max-width: ', 'px) {\n    display: ', ';\n  }\n'], (0, _styledTools.prop)('breakpoint'), (0, _styledTools.ifProp)('responsive', 'none !important'));

var Wrapper = _styledComponents2.default.div.withConfig({
  displayName: 'IconButton__Wrapper'
})(['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n']);

var StyledIcon = (0, _styledComponents2.default)(_components.Icon).withConfig({
  displayName: 'IconButton__StyledIcon'
})(['\n  flex: none;\n']);

var IconButton = function IconButton(_ref) {
  var icon = _ref.icon,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['icon', 'children']);

  var breakpoint = props.breakpoint,
      right = props.right,
      responsive = props.responsive,
      height = props.height;

  var iconElement = _react2.default.createElement(StyledIcon, { height: height ? height / 2.5 : undefined, icon: icon });
  return _react2.default.createElement(
    StyledButton,
    _extends({ hasText: !!children }, props),
    _react2.default.createElement(
      Wrapper,
      null,
      right || iconElement,
      children && _react2.default.createElement(
        Text,
        { className: 'text', responsive: responsive, breakpoint: breakpoint },
        children
      ),
      right && iconElement
    )
  );
};

IconButton.propTypes = {
  icon: _propTypes2.default.string.isRequired,
  responsive: _propTypes2.default.bool,
  breakpoint: _propTypes2.default.number,
  collapsed: _propTypes2.default.bool,
  right: _propTypes2.default.bool,
  height: _propTypes2.default.number,
  children: _propTypes2.default.node
};

IconButton.defaultProps = {
  breakpoint: 420
};

var _default = IconButton;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(fadeIn, 'fadeIn', '/Users/Declan/coding/template/src/components/molecules/IconButton/index.js');

  __REACT_HOT_LOADER__.register(StyledButton, 'StyledButton', '/Users/Declan/coding/template/src/components/molecules/IconButton/index.js');

  __REACT_HOT_LOADER__.register(Text, 'Text', '/Users/Declan/coding/template/src/components/molecules/IconButton/index.js');

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', '/Users/Declan/coding/template/src/components/molecules/IconButton/index.js');

  __REACT_HOT_LOADER__.register(StyledIcon, 'StyledIcon', '/Users/Declan/coding/template/src/components/molecules/IconButton/index.js');

  __REACT_HOT_LOADER__.register(IconButton, 'IconButton', '/Users/Declan/coding/template/src/components/molecules/IconButton/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/components/molecules/IconButton/index.js');
}();

;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  body.ReactModal__Body--open {\n    overflow: hidden;\n  }\n'], ['\n  body.ReactModal__Body--open {\n    overflow: hidden;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(3);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactModal = __webpack_require__(115);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _styledTheme = __webpack_require__(5);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _styledComponents.injectGlobal)(_templateObject);

var overlayStyles = (0, _styledComponents.css)(['\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.5);\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 9999;\n  transition: opacity 250ms ease-in-out;\n  opacity: 0;\n  &[class*="after-open"] {\n    opacity: 1;\n  }\n  &[class*="before-close"] {\n    opacity: 0;\n  }\n']);

var ModalBox = (0, _styledComponents2.default)(_reactModal2.default).withConfig({
  displayName: 'Modal__ModalBox'
})(['\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  font-family: ', ';\n  font-size: 1rem;\n  background-color: ', ';\n  border-radius: 0.125em;\n  color: ', ';\n  top: calc(50% - 1rem);\n  left: calc(50% - 1rem);\n  right: auto;\n  bottom: auto;\n  margin: 1rem calc(-50% + 1rem) 1rem 1rem;\n  transform: translate(-50%, 100%);\n  transition: transform 250ms ease-in-out;\n  outline: none;\n  box-sizing: border-box;\n  min-width: 320px;\n  max-width: calc(640px - 1rem);\n  max-height: calc(100% - 1rem);\n  padding-top: ', ';\n  @media screen and (max-width: 640px) {\n    width: calc(100% - 1rem);\n    min-width: 0;\n  }\n  &[class*="after-open"] {\n    transform: translate(-50%, -50%);\n  }\n  &[class*="before-close"] {\n    transform: translate(-50%, 100%);\n  }\n'], (0, _styledTheme.font)('primary'), (0, _styledTheme.palette)('grayscale', 0, true), (0, _styledTheme.palette)('grayscale', 0), function (_ref) {
  var hasHeader = _ref.hasHeader;
  return hasHeader ? 0 : '1rem';
});

var Header = _styledComponents2.default.header.withConfig({
  displayName: 'Modal__Header'
})(['\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  > *:first-child {\n    flex: 1;\n  }\n']);

var StyledHeading = (0, _styledComponents2.default)(_components.Heading).withConfig({
  displayName: 'Modal__StyledHeading'
})(['\n  margin: 0 1rem 0 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n']);

var Content = _styledComponents2.default.div.withConfig({
  displayName: 'Modal__Content'
})(['\n  overflow: auto;\n  padding: 0 1rem;\n  margin-bottom: 1rem;\n']);

var StyledReactModal = (0, _styledComponents2.default)(function (_ref2) {
  var className = _ref2.className,
      props = _objectWithoutProperties(_ref2, ['className']);

  return _react2.default.createElement(ModalBox, _extends({ overlayClassName: className, closeTimeoutMS: 250 }, props));
}).withConfig({
  displayName: 'Modal__StyledReactModal'
})(['', ''], overlayStyles);

var Modal = function Modal(_ref3) {
  var children = _ref3.children,
      title = _ref3.title,
      closeable = _ref3.closeable,
      onClose = _ref3.onClose,
      props = _objectWithoutProperties(_ref3, ['children', 'title', 'closeable', 'onClose']);

  var hasHeader = title || closeable;
  return _react2.default.createElement(
    StyledReactModal,
    _extends({
      contentLabel: title || 'Modal',
      onRequestClose: onClose,
      hasHeader: hasHeader
    }, props),
    hasHeader && _react2.default.createElement(
      Header,
      null,
      _react2.default.createElement(
        StyledHeading,
        { level: 2, reverse: props.reverse },
        title
      ),
      closeable && _react2.default.createElement(_components.IconButton, { icon: 'close', onClick: onClose, palette: 'white', reverse: true })
    ),
    _react2.default.createElement(
      Content,
      null,
      children
    )
  );
};

Modal.propTypes = {
  children: _propTypes2.default.node,
  title: _propTypes2.default.string,
  closeable: _propTypes2.default.bool,
  reverse: _propTypes2.default.bool,
  onClose: _propTypes2.default.func.isRequired
};

var _default = Modal;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(overlayStyles, 'overlayStyles', '/Users/Declan/coding/template/src/components/molecules/Modal/index.js');

  __REACT_HOT_LOADER__.register(ModalBox, 'ModalBox', '/Users/Declan/coding/template/src/components/molecules/Modal/index.js');

  __REACT_HOT_LOADER__.register(Header, 'Header', '/Users/Declan/coding/template/src/components/molecules/Modal/index.js');

  __REACT_HOT_LOADER__.register(StyledHeading, 'StyledHeading', '/Users/Declan/coding/template/src/components/molecules/Modal/index.js');

  __REACT_HOT_LOADER__.register(Content, 'Content', '/Users/Declan/coding/template/src/components/molecules/Modal/index.js');

  __REACT_HOT_LOADER__.register(StyledReactModal, 'StyledReactModal', '/Users/Declan/coding/template/src/components/molecules/Modal/index.js');

  __REACT_HOT_LOADER__.register(Modal, 'Modal', '/Users/Declan/coding/template/src/components/molecules/Modal/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/components/molecules/Modal/index.js');
}();

;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxForm = __webpack_require__(10);

var _styledComponents = __webpack_require__(3);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = _styledComponents2.default.form.withConfig({
  displayName: 'LoginForm__Form'
})(['\n  width: 100%;\n  box-sizing: border-box;\n  padding: 1rem;\n']);

var LoginForm = function LoginForm(_ref) {
  var handleSubmit = _ref.handleSubmit,
      submitting = _ref.submitting;

  return _react2.default.createElement(
    Form,
    { onSubmit: handleSubmit },
    _react2.default.createElement(_reduxForm.Field, { name: 'email', label: 'Email', type: 'email', component: _components.ReduxField }),
    _react2.default.createElement(_reduxForm.Field, { name: 'password', label: 'Password', type: 'password', component: _components.ReduxField }),
    _react2.default.createElement(
      _components.Button,
      { type: 'submit', disabled: submitting },
      'Sign in'
    )
  );
};

LoginForm.propTypes = {
  handleSubmit: _propTypes2.default.func.isRequired,
  submitting: _propTypes2.default.bool
};

var _default = LoginForm;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Form, 'Form', '/Users/Declan/coding/template/src/components/organisms/LoginForm/index.js');

  __REACT_HOT_LOADER__.register(LoginForm, 'LoginForm', '/Users/Declan/coding/template/src/components/organisms/LoginForm/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/components/organisms/LoginForm/index.js');
}();

;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(3);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _components = __webpack_require__(2);

var _containers = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wrapper = _styledComponents2.default.div.withConfig({
  displayName: 'LoginModal__Wrapper'
})(['\n  display: flex;\n  flex-direction: column;\n  > * {\n    margin-bottom: 0.5rem;\n  }\n']);

var LoginModal = function (_Component) {
  _inherits(LoginModal, _Component);

  function LoginModal() {
    _classCallCheck(this, LoginModal);

    return _possibleConstructorReturn(this, (LoginModal.__proto__ || Object.getPrototypeOf(LoginModal)).apply(this, arguments));
  }

  _createClass(LoginModal, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!this.props.user && nextProps.user) {
        this.props.onClose();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          onGithubLogin = _props.onGithubLogin,
          onFacebookLogin = _props.onFacebookLogin,
          props = _objectWithoutProperties(_props, ['onGithubLogin', 'onFacebookLogin']);

      return _react2.default.createElement(
        _containers.Modal,
        _extends({ title: 'Login', name: 'login', closeable: true }, props),
        _react2.default.createElement(
          Wrapper,
          null,
          _react2.default.createElement(_containers.LoginForm, null),
          _react2.default.createElement(
            _components.IconButton,
            { onClick: onGithubLogin, icon: 'github' },
            'Connect with Github'
          ),
          _react2.default.createElement(
            _components.IconButton,
            { onClick: onFacebookLogin, icon: 'facebook' },
            'Connect with Facebook'
          )
        )
      );
    }
  }]);

  return LoginModal;
}(_react.Component);

LoginModal.propTypes = {
  user: _propTypes2.default.object,
  onGithubLogin: _propTypes2.default.func.isRequired,
  onFacebookLogin: _propTypes2.default.func.isRequired,
  onClose: _propTypes2.default.func.isRequired
};
var _default = LoginModal;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', '/Users/Declan/coding/template/src/components/organisms/LoginModal/index.js');

  __REACT_HOT_LOADER__.register(LoginModal, 'LoginModal', '/Users/Declan/coding/template/src/components/organisms/LoginModal/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/components/organisms/LoginModal/index.js');
}();

;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ReduxField = function ReduxField(_ref) {
  var meta = _ref.meta,
      input = _ref.input,
      props = _objectWithoutProperties(_ref, ['meta', 'input']);

  return _react2.default.createElement(_components.Field, _extends({}, props, input, { invalid: meta.touched && !!meta.error, error: meta.error }));
};

ReduxField.propTypes = {
  meta: _propTypes2.default.shape({
    touched: _propTypes2.default.bool,
    error: _propTypes2.default.string
  }).isRequired,
  input: _propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired
  }).isRequired
};

var _default = ReduxField;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ReduxField, 'ReduxField', '/Users/Declan/coding/template/src/components/organisms/ReduxField/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/components/organisms/ReduxField/index.js');
}();

;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(3);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _components = __webpack_require__(2);

var _containers = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var InnerButton = _styledComponents2.default.div.withConfig({
  displayName: 'SignupButton__InnerButton'
})(['\n  display: flex;\n  align-items: center;\n']);

var SignupButton = function SignupButton(_ref) {
  var onSignup = _ref.onSignup,
      props = _objectWithoutProperties(_ref, ['onSignup']);

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _components.Button,
      _extends({}, props, { onClick: onSignup }),
      _react2.default.createElement(
        InnerButton,
        null,
        'Sign up'
      )
    ),
    _react2.default.createElement(_containers.SignupModal, null)
  );
};

SignupButton.propTypes = {
  onSignup: _propTypes2.default.func.isRequired
};

var _default = SignupButton;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(InnerButton, 'InnerButton', '/Users/Declan/coding/template/src/components/organisms/SignupButton/index.js');

  __REACT_HOT_LOADER__.register(SignupButton, 'SignupButton', '/Users/Declan/coding/template/src/components/organisms/SignupButton/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/components/organisms/SignupButton/index.js');
}();

;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reduxForm = __webpack_require__(10);

var _styledComponents = __webpack_require__(3);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = _styledComponents2.default.form.withConfig({
  displayName: 'SignupForm__Form'
})(['\n  width: 100%;\n  box-sizing: border-box;\n  padding: 1rem;\n']);

var SignupForm = function SignupForm(_ref) {
  var handleSubmit = _ref.handleSubmit,
      submitting = _ref.submitting;

  return _react2.default.createElement(
    Form,
    { onSubmit: handleSubmit },
    _react2.default.createElement(_reduxForm.Field, { name: 'email', label: 'Email', type: 'email', component: _components.ReduxField }),
    _react2.default.createElement(_reduxForm.Field, { name: 'password', label: 'Password', type: 'password', component: _components.ReduxField }),
    _react2.default.createElement(
      _components.Button,
      { type: 'submit', disabled: submitting },
      'Sign up'
    )
  );
};

SignupForm.propTypes = {
  handleSubmit: _propTypes2.default.func.isRequired,
  submitting: _propTypes2.default.bool
};

var _default = SignupForm;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Form, 'Form', '/Users/Declan/coding/template/src/components/organisms/SignupForm/index.js');

  __REACT_HOT_LOADER__.register(SignupForm, 'SignupForm', '/Users/Declan/coding/template/src/components/organisms/SignupForm/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/components/organisms/SignupForm/index.js');
}();

;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(3);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _containers = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wrapper = _styledComponents2.default.div.withConfig({
  displayName: 'SignupModal__Wrapper'
})(['\n  display: flex;\n  flex-direction: column;\n  > * {\n    margin-bottom: 0.5rem;\n  }\n']);

var SignupModal = function (_Component) {
  _inherits(SignupModal, _Component);

  function SignupModal() {
    _classCallCheck(this, SignupModal);

    return _possibleConstructorReturn(this, (SignupModal.__proto__ || Object.getPrototypeOf(SignupModal)).apply(this, arguments));
  }

  _createClass(SignupModal, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!this.props.user && nextProps.user) {
        this.props.onClose();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _containers.Modal,
        _extends({ title: 'Sign up', name: 'signup', closeable: true }, this.props),
        _react2.default.createElement(
          Wrapper,
          null,
          _react2.default.createElement(_containers.SignupForm, null)
        )
      );
    }
  }]);

  return SignupModal;
}(_react.Component);

SignupModal.propTypes = {
  user: _propTypes2.default.object,
  onClose: _propTypes2.default.func.isRequired
};
var _default = SignupModal;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Wrapper, 'Wrapper', '/Users/Declan/coding/template/src/components/organisms/SignupModal/index.js');

  __REACT_HOT_LOADER__.register(SignupModal, 'SignupModal', '/Users/Declan/coding/template/src/components/organisms/SignupModal/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/components/organisms/SignupModal/index.js');
}();

;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = __webpack_require__(3);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _components = __webpack_require__(2);

var _containers = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var InnerButton = _styledComponents2.default.div.withConfig({
  displayName: 'UserButton__InnerButton'
})(['\n  display: flex;\n  align-items: center;\n']);

var UserButton = function UserButton(_ref) {
  var authenticated = _ref.authenticated,
      onLogin = _ref.onLogin,
      onLogout = _ref.onLogout,
      props = _objectWithoutProperties(_ref, ['authenticated', 'onLogin', 'onLogout']);

  return _react2.default.createElement(
    'div',
    null,
    authenticated && _react2.default.createElement(
      _components.Button,
      _extends({}, props, { onClick: onLogout }),
      _react2.default.createElement(
        InnerButton,
        null,
        'Sign out'
      )
    ),
    !authenticated && _react2.default.createElement(
      _components.Button,
      _extends({}, props, { onClick: onLogin }),
      'Sign in'
    ),
    _react2.default.createElement(_containers.LoginModal, null)
  );
};

UserButton.propTypes = {
  authenticated: _propTypes2.default.bool,
  onLogin: _propTypes2.default.func.isRequired,
  onLogout: _propTypes2.default.func.isRequired
};

var _default = UserButton;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(InnerButton, 'InnerButton', '/Users/Declan/coding/template/src/components/organisms/UserButton/index.js');

  __REACT_HOT_LOADER__.register(UserButton, 'UserButton', '/Users/Declan/coding/template/src/components/organisms/UserButton/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/components/organisms/UserButton/index.js');
}();

;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _containers = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function HomePage() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_containers.SignupButton, null),
    _react2.default.createElement(_containers.UserButton, null)
  );
};

var _default = HomePage;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(HomePage, 'HomePage', '/Users/Declan/coding/template/src/components/pages/HomePage/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/components/pages/HomePage/index.js');
}();

;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _components = __webpack_require__(2);

var routes = [{
  path: '/',
  component: _components.HomePage,
  exact: true
}];

var _default = routes;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(routes, 'routes', '/Users/Declan/coding/template/src/components/routes.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/components/routes.js');
}();

;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _composer = __webpack_require__(123);

var theme = {}; // https://github.com/diegohaz/arc/wiki/Styling


theme.palette = {
  primary: ['#1976d2', '#2196f3', '#71bcf7', '#c2e2fb'],
  secondary: ['#c2185b', '#e91e63', '#f06292', '#f8bbd0'],
  danger: ['#d32f2f', '#f44336', '#f8877f', '#ffcdd2'],
  alert: ['#ffa000', '#ffc107', '#ffd761', '#ffecb3'],
  success: ['#388e3c', '#4caf50', '#7cc47f', '#c8e6c9'],
  white: ['#fff', '#fff', '#eee'],
  grayscale: ['#212121', '#414141', '#616161', '#9e9e9e', '#bdbdbd', '#e0e0e0', '#eeeeee', '#ffffff']
};

theme.reversePalette = (0, _composer.reversePalette)(theme.palette);

theme.fonts = {
  primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif'
};

theme.sizes = {
  maxWidth: '1100px'
};

var _default = theme;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(theme, 'theme', '/Users/Declan/coding/template/src/components/themes/default.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/components/themes/default.js');
}();

;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(10);

var _actions = __webpack_require__(4);

var _validation = __webpack_require__(18);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginFormContainer = function LoginFormContainer(props) {
  return _react2.default.createElement(_components.LoginForm, props);
};

var onSubmit = function onSubmit(data, dispatch) {
  return dispatch((0, _actions.authLoginRequest)('local', data));
};

var validate = (0, _validation.createValidator)({
  email: [_validation.required],
  password: [_validation.required]
});

var _default = (0, _reduxForm.reduxForm)({
  form: 'LoginForm',
  onSubmit: onSubmit,
  validate: validate
})(LoginFormContainer);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LoginFormContainer, 'LoginFormContainer', '/Users/Declan/coding/template/src/containers/LoginForm.js');

  __REACT_HOT_LOADER__.register(onSubmit, 'onSubmit', '/Users/Declan/coding/template/src/containers/LoginForm.js');

  __REACT_HOT_LOADER__.register(validate, 'validate', '/Users/Declan/coding/template/src/containers/LoginForm.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/containers/LoginForm.js');
}();

;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _selectors = __webpack_require__(8);

var _actions = __webpack_require__(4);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var LoginModalContainer = function LoginModalContainer(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  return _react2.default.createElement(_components.LoginModal, props);
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: _selectors.fromAuth.getUser(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onGithubLogin: function onGithubLogin() {
      return dispatch((0, _actions.authLoginRequest)('github'));
    },
    onFacebookLogin: function onFacebookLogin() {
      return dispatch((0, _actions.authLoginRequest)('facebook'));
    },
    onClose: function onClose() {
      return dispatch((0, _actions.modalHide)('login'));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LoginModalContainer);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LoginModalContainer, 'LoginModalContainer', '/Users/Declan/coding/template/src/containers/LoginModal.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/Declan/coding/template/src/containers/LoginModal.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/Declan/coding/template/src/containers/LoginModal.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/containers/LoginModal.js');
}();

;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(6);

var _selectors = __webpack_require__(8);

var _actions = __webpack_require__(4);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalContainer = function ModalContainer(props) {
  return _react2.default.createElement(_components.Modal, props);
};

ModalContainer.propTypes = {
  name: _propTypes2.default.string.isRequired,
  isOpen: _propTypes2.default.bool
};

var mapStateToProps = function mapStateToProps(state, _ref) {
  var name = _ref.name,
      isOpen = _ref.isOpen;
  return {
    isOpen: isOpen || _selectors.fromModal.isOpen(state, name)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var name = _ref2.name;
  return {
    onClose: function onClose() {
      return dispatch((0, _actions.modalHide)(name));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ModalContainer);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ModalContainer, 'ModalContainer', '/Users/Declan/coding/template/src/containers/Modal.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/Declan/coding/template/src/containers/Modal.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/Declan/coding/template/src/containers/Modal.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/containers/Modal.js');
}();

;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _selectors = __webpack_require__(8);

var _actions = __webpack_require__(4);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignupButtonContainer = function SignupButtonContainer(props) {
  return _react2.default.createElement(_components.SignupButton, props);
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    authenticated: _selectors.fromAuth.getAuthenticated(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSignup: function onSignup() {
      return dispatch((0, _actions.modalShow)('signup'));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SignupButtonContainer);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SignupButtonContainer, 'SignupButtonContainer', '/Users/Declan/coding/template/src/containers/SignupButton.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/Declan/coding/template/src/containers/SignupButton.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/Declan/coding/template/src/containers/SignupButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/containers/SignupButton.js');
}();

;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(10);

var _actions = __webpack_require__(4);

var _validation = __webpack_require__(18);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignupFormContainer = function SignupFormContainer(props) {
  return _react2.default.createElement(_components.SignupForm, props);
};

var onSubmit = function onSubmit(data, dispatch) {
  return dispatch((0, _actions.authSignupRequest)('local', data));
};

var validate = (0, _validation.createValidator)({
  email: [_validation.required],
  password: [_validation.required]
});

var _default = (0, _reduxForm.reduxForm)({
  form: 'SignupForm',
  onSubmit: onSubmit,
  validate: validate
})(SignupFormContainer);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SignupFormContainer, 'SignupFormContainer', '/Users/Declan/coding/template/src/containers/SignupForm.js');

  __REACT_HOT_LOADER__.register(onSubmit, 'onSubmit', '/Users/Declan/coding/template/src/containers/SignupForm.js');

  __REACT_HOT_LOADER__.register(validate, 'validate', '/Users/Declan/coding/template/src/containers/SignupForm.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/containers/SignupForm.js');
}();

;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _selectors = __webpack_require__(8);

var _actions = __webpack_require__(4);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SignupModalContainer = function SignupModalContainer(_ref) {
  var props = _objectWithoutProperties(_ref, []);

  return _react2.default.createElement(_components.SignupModal, props);
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: _selectors.fromAuth.getUser(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onClose: function onClose() {
      return dispatch((0, _actions.modalHide)('signup'));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SignupModalContainer);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SignupModalContainer, 'SignupModalContainer', '/Users/Declan/coding/template/src/containers/SignupModal.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/Declan/coding/template/src/containers/SignupModal.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/Declan/coding/template/src/containers/SignupModal.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/containers/SignupModal.js');
}();

;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _selectors = __webpack_require__(8);

var _actions = __webpack_require__(4);

var _components = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserButtonContainer = function UserButtonContainer(props) {
  return _react2.default.createElement(_components.UserButton, props);
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    authenticated: _selectors.fromAuth.getAuthenticated(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onLogin: function onLogin() {
      return dispatch((0, _actions.modalShow)('login'));
    },
    onLogout: function onLogout() {
      return dispatch((0, _actions.authLogout)());
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserButtonContainer);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(UserButtonContainer, 'UserButtonContainer', '/Users/Declan/coding/template/src/containers/UserButton.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/Declan/coding/template/src/containers/UserButton.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/Declan/coding/template/src/containers/UserButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/containers/UserButton.js');
}();

;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dotenv = __webpack_require__(103);

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(9);

var _express2 = _interopRequireDefault(_express);

var _expressForceSsl = __webpack_require__(104);

var _expressForceSsl2 = _interopRequireDefault(_expressForceSsl);

var _compression = __webpack_require__(99);

var _compression2 = _interopRequireDefault(_compression);

var _morgan = __webpack_require__(110);

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = __webpack_require__(100);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = __webpack_require__(98);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressValidator = __webpack_require__(105);

var _expressValidator2 = _interopRequireDefault(_expressValidator);

var _path = __webpack_require__(111);

var _path2 = _interopRequireDefault(_path);

var _config = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = _path2.default.join(__dirname, '../../..');

var _default = function _default(routes) {
  var app = (0, _express2.default)();

  /* istanbul ignore next */
  if (_config.env === 'production') {
    app.set('forceSSLOptions', {
      enable301Redirects: true,
      trustXFPHeader: true
    });
    app.use(_expressForceSsl2.default);
  }

  if (_config.env === 'development') {
    __webpack_require__(64);
  }

  /* istanbul ignore next */
  if (_config.env === 'production' || _config.env === 'development') {
    app.use((0, _compression2.default)());
    app.use((0, _morgan2.default)('dev'));
    app.use((0, _cookieParser2.default)());
    app.use(_express2.default.static(_path2.default.join(root, _config.env === 'development' ? 'public' : 'dist')));
  }

  app.use(_bodyParser2.default.urlencoded({ extended: false }));
  app.use(_bodyParser2.default.json());
  app.use((0, _expressValidator2.default)());
  app.use(routes);

  return app;
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(root, 'root', '/Users/Declan/coding/template/src/services/express/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/services/express/index.js');
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _selectors = __webpack_require__(19);

var _actions = __webpack_require__(14);

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _selectors.initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actions.AUTH_USER:
      return _extends({}, state, {
        authenticated: true
      });
    case _actions.AUTH_LOGIN_SUCCESS:
      return _extends({}, state, {
        user: action.user,
        authenticated: true
      });
    case _actions.AUTH_LOGOUT:
      return _extends({}, state, {
        user: _selectors.initialState.user,
        authenticated: false
      });
    default:
      return state;
  }
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/store/auth/reducer.js');
}();

;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exchangeCodeForToken = exports.closePopup = exports.pollPopup = exports.openPopup = exports.oauth2 = exports.serviceAction = exports.signupAction = undefined;
exports.loginGithub = loginGithub;
exports.watchAuthLoginGithub = watchAuthLoginGithub;
exports.loginFacebook = loginFacebook;
exports.signupLocal = signupLocal;
exports.watchAuthSignupLocal = watchAuthSignupLocal;
exports.watchAuthLoginFacebook = watchAuthLoginFacebook;
exports.loginLocal = loginLocal;
exports.watchAuthLoginLocal = watchAuthLoginLocal;
exports.watchAuthLogout = watchAuthLogout;

var _effects = __webpack_require__(28);

var _reactCookie = __webpack_require__(15);

var _reactCookie2 = _interopRequireDefault(_reactCookie);

var _url = __webpack_require__(124);

var _querystring = __webpack_require__(113);

var _api = __webpack_require__(17);

var _api2 = _interopRequireDefault(_api);

var _actions = __webpack_require__(14);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/regeneratorRuntime.mark(loginGithub),
    _marked2 = /*#__PURE__*/regeneratorRuntime.mark(watchAuthLoginGithub),
    _marked3 = /*#__PURE__*/regeneratorRuntime.mark(loginFacebook),
    _marked4 = /*#__PURE__*/regeneratorRuntime.mark(signupLocal),
    _marked5 = /*#__PURE__*/regeneratorRuntime.mark(watchAuthSignupLocal),
    _marked6 = /*#__PURE__*/regeneratorRuntime.mark(watchAuthLoginFacebook),
    _marked7 = /*#__PURE__*/regeneratorRuntime.mark(loginLocal),
    _marked8 = /*#__PURE__*/regeneratorRuntime.mark(watchAuthLoginLocal),
    _marked9 = /*#__PURE__*/regeneratorRuntime.mark(watchAuthLogout);

var signupAction = exports.signupAction = function signupAction(suffix, service) {
  return function (action) {
    return action.type === 'AUTH_SIGNUP_' + suffix && action.service === service;
  };
};

var serviceAction = exports.serviceAction = function serviceAction(suffix, service) {
  return function (action) {
    return action.type === 'AUTH_LOGIN_' + suffix && action.service === service;
  };
};

var oauth2 = exports.oauth2 = function oauth2(config) {
  return new Promise(function (resolve) {
    var params = {
      client_id: config.clientId,
      redirect_uri: config.redirectUri,
      scope: config.scope,
      display: 'popup',
      response_type: 'code'
    };

    var url = config.authorizationUrl + '?' + (0, _querystring.stringify)(params);
    resolve({ url: url });
  });
};

var openPopup = exports.openPopup = function openPopup(_ref) {
  var url = _ref.url,
      config = _ref.config;
  return new Promise(function (resolve) {
    var width = config.width || 500;
    var height = config.height || 500;
    var options = {
      width: width,
      height: height,
      top: window.screenY + (window.outerHeight - height) / 2.5,
      left: window.screenX + (window.outerWidth - width) / 2
    };
    var popup = window.open(url, '_blank', (0, _querystring.stringify)(options, ','));

    if (url === 'about:blank') {
      popup.document.body.innerHTML = 'Loading...';
    }

    resolve({ window: popup });
  });
};

var pollPopup = exports.pollPopup = function pollPopup(_ref2) {
  var window = _ref2.window,
      config = _ref2.config,
      requestToken = _ref2.requestToken;
  return new Promise(function (resolve, reject) {
    var redirectUri = (0, _url.parse)(config.redirectUri);
    var redirectUriPath = redirectUri.host + redirectUri.pathname;

    if (requestToken) {
      window.location = config.authorizationUrl + '?' + (0, _querystring.stringify)(requestToken);
    }

    var polling = setInterval(function () {
      if (!window || window.closed) {
        clearInterval(polling);
      }

      try {
        var popupUrlPath = window.location.host + window.location.pathname;

        if (popupUrlPath === redirectUriPath) {
          if (window.location.search || window.location.hash) {
            var query = (0, _querystring.parse)(window.location.search.substring(1).replace(/\/$/, ''));
            var hash = (0, _querystring.parse)(window.location.hash.substring(1).replace(/[/$]/, ''));
            var params = Object.assign({}, query, hash);

            if (params.error) {
              reject(params.error);
            } else {
              resolve({ oauthData: params, window: window, interval: polling });
            }
          } else {
            reject(new Error('OAuth redirect has occurred but no query or hash parameters were found.'));
          }
        }
      } catch (error) {
        // Ignore DOMException: Blocked a frame with origin from accessing a cross-origin frame.
        // A hack to get around same-origin security policy errors in Internet Explorer.
      }
    }, 500);
  });
};

var closePopup = exports.closePopup = function closePopup(_ref3) {
  var window = _ref3.window,
      interval = _ref3.interval;
  return new Promise(function (resolve) {
    clearInterval(interval);
    window.close();
    resolve();
  });
};

var exchangeCodeForToken = exports.exchangeCodeForToken = function exchangeCodeForToken(_ref4) {
  var oauthData = _ref4.oauthData,
      config = _ref4.config,
      window = _ref4.window,
      interval = _ref4.interval;
  return new Promise(function (resolve, reject) {
    var data = Object.assign({}, oauthData, config);

    _api2.default.post(config.url, data).then(function (_ref5) {
      var token = _ref5.token,
          user = _ref5.user;

      return resolve({ token: token, user: user, window: window, interval: interval });
    }).catch(function (err) {
      reject(err);
      closePopup({ window: window, interval: interval });
    });
  });
};

function loginGithub() {
  var config, _ref6, url, _ref7, _window, _ref8, oauthData, ppWindow, interval, _ref9, token, user, exWindow, exInterval;

  return regeneratorRuntime.wrap(function loginGithub$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          config = {
            url: '/auth/github',
            clientId: '8238d57f2bcc4cd3d0c7',
            redirectUri: 'http://localhost:3000/api/auth/github/callback',
            authorizationUrl: 'https://github.com/login/oauth/authorize',
            scope: 'user user:email repo',
            width: 452,
            height: 633
          };
          _context.prev = 1;
          _context.next = 4;
          return oauth2(config);

        case 4:
          _ref6 = _context.sent;
          url = _ref6.url;
          _context.next = 8;
          return openPopup({ url: url, config: config });

        case 8:
          _ref7 = _context.sent;
          _window = _ref7.window;
          _context.next = 12;
          return pollPopup({ window: _window, config: config });

        case 12:
          _ref8 = _context.sent;
          oauthData = _ref8.oauthData;
          ppWindow = _ref8.window;
          interval = _ref8.interval;
          _context.next = 18;
          return exchangeCodeForToken({ oauthData: oauthData, config: config, window: ppWindow, interval: interval });

        case 18:
          _ref9 = _context.sent;
          token = _ref9.token;
          user = _ref9.user;
          exWindow = _ref9.window;
          exInterval = _ref9.interval;


          _reactCookie2.default.save('token', token);

          _context.next = 26;
          return (0, _effects.put)(actions.authLoginSuccess(user));

        case 26:
          _context.next = 28;
          return closePopup({ window: exWindow, interval: exInterval });

        case 28:
          _context.next = 34;
          break;

        case 30:
          _context.prev = 30;
          _context.t0 = _context['catch'](1);
          _context.next = 34;
          return (0, _effects.put)(actions.authLoginFailure(_context.t0));

        case 34:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this, [[1, 30]]);
}

function watchAuthLoginGithub() {
  return regeneratorRuntime.wrap(function watchAuthLoginGithub$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (false) {
            _context2.next = 7;
            break;
          }

          _context2.next = 3;
          return (0, _effects.take)(serviceAction('REQUEST', 'github'));

        case 3:
          _context2.next = 5;
          return (0, _effects.call)(loginGithub);

        case 5:
          _context2.next = 0;
          break;

        case 7:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked2, this);
}

function loginFacebook() {
  var config, _ref10, url, _ref11, _window2, _ref12, oauthData, ppWindow, interval, _ref13, token, user, exWindow, exInterval;

  return regeneratorRuntime.wrap(function loginFacebook$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          config = {
            url: '/auth/facebook',
            clientId: '763079670530508',
            redirectUri: 'http://localhost:3000/api/auth/facebook/callback',
            authorizationUrl: 'https://www.facebook.com/v2.5/dialog/oauth',
            scope: 'email,user_location',
            width: 580,
            height: 400
          };
          _context3.prev = 1;
          _context3.next = 4;
          return oauth2(config);

        case 4:
          _ref10 = _context3.sent;
          url = _ref10.url;
          _context3.next = 8;
          return openPopup({ url: url, config: config });

        case 8:
          _ref11 = _context3.sent;
          _window2 = _ref11.window;
          _context3.next = 12;
          return pollPopup({ window: _window2, config: config });

        case 12:
          _ref12 = _context3.sent;
          oauthData = _ref12.oauthData;
          ppWindow = _ref12.window;
          interval = _ref12.interval;
          _context3.next = 18;
          return exchangeCodeForToken({ oauthData: oauthData, config: config, window: ppWindow, interval: interval });

        case 18:
          _ref13 = _context3.sent;
          token = _ref13.token;
          user = _ref13.user;
          exWindow = _ref13.window;
          exInterval = _ref13.interval;


          _reactCookie2.default.save('token', token);

          _context3.next = 26;
          return (0, _effects.put)(actions.authLoginSuccess(user));

        case 26:
          _context3.next = 28;
          return closePopup({ window: exWindow, interval: exInterval });

        case 28:
          _context3.next = 34;
          break;

        case 30:
          _context3.prev = 30;
          _context3.t0 = _context3['catch'](1);
          _context3.next = 34;
          return (0, _effects.put)(actions.authLoginFailure(_context3.t0));

        case 34:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked3, this, [[1, 30]]);
}

function signupLocal(data) {
  var _ref14, token, user;

  return regeneratorRuntime.wrap(function signupLocal$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return _api2.default.post('/auth/signup', data);

        case 3:
          _ref14 = _context4.sent;
          token = _ref14.token;
          user = _ref14.user;

          _reactCookie2.default.save('token', token);
          _context4.next = 9;
          return (0, _effects.put)(actions.authLoginSuccess(user));

        case 9:
          _context4.next = 15;
          break;

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4['catch'](0);
          _context4.next = 15;
          return (0, _effects.put)(actions.authSignupFailure(_context4.t0));

        case 15:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked4, this, [[0, 11]]);
}

function watchAuthSignupLocal() {
  var _ref15, options;

  return regeneratorRuntime.wrap(function watchAuthSignupLocal$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          if (false) {
            _context5.next = 9;
            break;
          }

          _context5.next = 3;
          return (0, _effects.take)(signupAction('REQUEST', 'local'));

        case 3:
          _ref15 = _context5.sent;
          options = _ref15.options;
          _context5.next = 7;
          return (0, _effects.call)(signupLocal, options);

        case 7:
          _context5.next = 0;
          break;

        case 9:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked5, this);
}

function watchAuthLoginFacebook() {
  return regeneratorRuntime.wrap(function watchAuthLoginFacebook$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          if (false) {
            _context6.next = 7;
            break;
          }

          _context6.next = 3;
          return (0, _effects.take)(serviceAction('REQUEST', 'facebook'));

        case 3:
          _context6.next = 5;
          return (0, _effects.call)(loginFacebook);

        case 5:
          _context6.next = 0;
          break;

        case 7:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked6, this);
}

function loginLocal(data) {
  var _ref16, token, user, _token;

  return regeneratorRuntime.wrap(function loginLocal$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return _api2.default.post('/auth/login', data);

        case 3:
          _ref16 = _context7.sent;
          token = _ref16.token;
          user = _ref16.user;

          _reactCookie2.default.save('token', token);
          _context7.next = 9;
          return (0, _effects.put)(actions.authLoginSuccess(user));

        case 9:
          _context7.next = 21;
          break;

        case 11:
          _context7.prev = 11;
          _context7.t0 = _context7['catch'](0);
          _token = _reactCookie2.default.load('token');

          if (!_token) {
            _context7.next = 19;
            break;
          }

          _context7.next = 17;
          return (0, _effects.put)(actions.authLogout(_context7.t0));

        case 17:
          _context7.next = 21;
          break;

        case 19:
          _context7.next = 21;
          return (0, _effects.put)(actions.authLoginFailure(_context7.t0));

        case 21:
        case 'end':
          return _context7.stop();
      }
    }
  }, _marked7, this, [[0, 11]]);
}

function watchAuthLoginLocal() {
  var _ref17, options;

  return regeneratorRuntime.wrap(function watchAuthLoginLocal$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          if (false) {
            _context8.next = 9;
            break;
          }

          _context8.next = 3;
          return (0, _effects.take)(serviceAction('REQUEST', 'local'));

        case 3:
          _ref17 = _context8.sent;
          options = _ref17.options;
          _context8.next = 7;
          return (0, _effects.call)(loginLocal, options);

        case 7:
          _context8.next = 0;
          break;

        case 9:
        case 'end':
          return _context8.stop();
      }
    }
  }, _marked8, this);
}

function watchAuthLogout() {
  return regeneratorRuntime.wrap(function watchAuthLogout$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          if (false) {
            _context9.next = 6;
            break;
          }

          _context9.next = 3;
          return (0, _effects.take)(actions.AUTH_LOGOUT);

        case 3:
          _reactCookie2.default.remove('token');
          _context9.next = 0;
          break;

        case 6:
        case 'end':
          return _context9.stop();
      }
    }
  }, _marked9, this);
}

var _default = /*#__PURE__*/regeneratorRuntime.mark(function _default() {
  return regeneratorRuntime.wrap(function _default$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return (0, _effects.fork)(watchAuthSignupLocal);

        case 2:
          _context10.next = 4;
          return (0, _effects.fork)(watchAuthLoginLocal);

        case 4:
          _context10.next = 6;
          return (0, _effects.fork)(watchAuthLoginGithub);

        case 6:
          _context10.next = 8;
          return (0, _effects.fork)(watchAuthLoginFacebook);

        case 8:
          _context10.next = 10;
          return (0, _effects.fork)(watchAuthLogout);

        case 10:
        case 'end':
          return _context10.stop();
      }
    }
  }, _default, this);
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(signupAction, 'signupAction', '/Users/Declan/coding/template/src/store/auth/sagas.js');

  __REACT_HOT_LOADER__.register(serviceAction, 'serviceAction', '/Users/Declan/coding/template/src/store/auth/sagas.js');

  __REACT_HOT_LOADER__.register(oauth2, 'oauth2', '/Users/Declan/coding/template/src/store/auth/sagas.js');

  __REACT_HOT_LOADER__.register(openPopup, 'openPopup', '/Users/Declan/coding/template/src/store/auth/sagas.js');

  __REACT_HOT_LOADER__.register(pollPopup, 'pollPopup', '/Users/Declan/coding/template/src/store/auth/sagas.js');

  __REACT_HOT_LOADER__.register(closePopup, 'closePopup', '/Users/Declan/coding/template/src/store/auth/sagas.js');

  __REACT_HOT_LOADER__.register(exchangeCodeForToken, 'exchangeCodeForToken', '/Users/Declan/coding/template/src/store/auth/sagas.js');

  __REACT_HOT_LOADER__.register(loginGithub, 'loginGithub', '/Users/Declan/coding/template/src/store/auth/sagas.js');

  __REACT_HOT_LOADER__.register(watchAuthLoginGithub, 'watchAuthLoginGithub', '/Users/Declan/coding/template/src/store/auth/sagas.js');

  __REACT_HOT_LOADER__.register(loginFacebook, 'loginFacebook', '/Users/Declan/coding/template/src/store/auth/sagas.js');

  __REACT_HOT_LOADER__.register(signupLocal, 'signupLocal', '/Users/Declan/coding/template/src/store/auth/sagas.js');

  __REACT_HOT_LOADER__.register(watchAuthSignupLocal, 'watchAuthSignupLocal', '/Users/Declan/coding/template/src/store/auth/sagas.js');

  __REACT_HOT_LOADER__.register(watchAuthLoginFacebook, 'watchAuthLoginFacebook', '/Users/Declan/coding/template/src/store/auth/sagas.js');

  __REACT_HOT_LOADER__.register(loginLocal, 'loginLocal', '/Users/Declan/coding/template/src/store/auth/sagas.js');

  __REACT_HOT_LOADER__.register(watchAuthLoginLocal, 'watchAuthLoginLocal', '/Users/Declan/coding/template/src/store/auth/sagas.js');

  __REACT_HOT_LOADER__.register(watchAuthLogout, 'watchAuthLogout', '/Users/Declan/coding/template/src/store/auth/sagas.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/store/auth/sagas.js');
}();

;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(26);

var _reduxSaga = __webpack_require__(120);

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _config = __webpack_require__(12);

var _middlewares = __webpack_require__(69);

var _middlewares2 = _interopRequireDefault(_middlewares);

var _reducer = __webpack_require__(71);

var _reducer2 = _interopRequireDefault(_reducer);

var _sagas = __webpack_require__(72);

var _sagas2 = _interopRequireDefault(_sagas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // https://github.com/diegohaz/arc/wiki/Redux-modules


var devtools = _config.isDev && _config.isBrowser && window.devToolsExtension ? window.devToolsExtension : function () {
  return function (fn) {
    return fn;
  };
};

var configureStore = function configureStore(initialState) {
  var services = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var sagaMiddleware = (0, _reduxSaga2.default)();

  var enhancers = [_redux.applyMiddleware.apply(undefined, _toConsumableArray(_middlewares2.default).concat([sagaMiddleware])), devtools()];

  var store = (0, _redux.createStore)(_reducer2.default, initialState, _redux.compose.apply(undefined, enhancers));
  var sagaTask = sagaMiddleware.run(_sagas2.default, services);

  if (false) {
    module.hot.accept('./reducer', function () {
      var nextReducer = require('./reducer').default;
      store.replaceReducer(nextReducer);
    });
    module.hot.accept('./sagas', function () {
      var nextSagas = require('./sagas').default;
      sagaTask.cancel();
      sagaTask.done.then(function () {
        sagaTask = sagaMiddleware.run(nextSagas, services);
      });
    });
  }

  return store;
};

var _default = configureStore;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(devtools, 'devtools', '/Users/Declan/coding/template/src/store/configure.js');

  __REACT_HOT_LOADER__.register(configureStore, 'configureStore', '/Users/Declan/coding/template/src/store/configure.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/store/configure.js');
}();

;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(27),
    thunkMiddleware = _require.middleware;

var req = __webpack_require__(92);

module.exports = req.keys().map(function (key) {
  return req(key).default;
}).concat([thunkMiddleware]);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(req, 'req', '/Users/Declan/coding/template/src/store/middlewares.js');
}();

;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#modal


var _selectors = __webpack_require__(21);

var _actions = __webpack_require__(20);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _selectors.initialState;
  var _ref = arguments[1];
  var type = _ref.type,
      _ref$payload = _ref.payload,
      payload = _ref$payload === undefined ? {} : _ref$payload;

  switch (type) {
    case _actions.MODAL_SHOW:
      return _extends({}, state, _defineProperty({}, payload.name, true));
    case _actions.MODAL_HIDE:
      if (payload.name) {
        return _extends({}, state, _defineProperty({}, payload.name, false));
      }
      return _selectors.initialState;
    default:
      return state;
  }
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/store/modal/reducer.js');
}();

;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _camelCase = __webpack_require__(107);

var _camelCase2 = _interopRequireDefault(_camelCase);

var _redux = __webpack_require__(26);

var _reduxForm = __webpack_require__(10);

var _reduxSagaThunk = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// https://github.com/diegohaz/arc/wiki/Reducers
var reducers = {
  form: _reduxForm.reducer,
  thunk: _reduxSagaThunk.reducer
};

var req = __webpack_require__(93);

req.keys().forEach(function (key) {
  var storeName = (0, _camelCase2.default)(key.replace(/\.\/(.+)\/.+$/, '$1'));
  reducers[storeName] = req(key).default;
});

var _default = (0, _redux.combineReducers)(reducers);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(reducers, 'reducers', '/Users/Declan/coding/template/src/store/reducer.js');

  __REACT_HOT_LOADER__.register(req, 'req', '/Users/Declan/coding/template/src/store/reducer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/store/reducer.js');
}();

;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _effects = __webpack_require__(28);

var req = __webpack_require__(94); // https://github.com/diegohaz/arc/wiki/Sagas


var sagas = req.keys().map(function (key) {
  return req(key).default;
});

var _default = /*#__PURE__*/regeneratorRuntime.mark(function _default() {
  var services = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return regeneratorRuntime.wrap(function _default$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _effects.all)(sagas.map(function (saga) {
            return (0, _effects.fork)(saga, services);
          }));

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _default, this);
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(req, 'req', '/Users/Declan/coding/template/src/store/sagas.js');

  __REACT_HOT_LOADER__.register(sagas, 'sagas', '/Users/Declan/coding/template/src/store/sagas.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/Declan/coding/template/src/store/sagas.js');
}();

;

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 184 164\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;\">\n    <g transform=\"matrix(1,0,0,1,-4.49912,-15.1442)\">\n        <g id=\"Symbol\" transform=\"matrix(0.446036,2.31112e-32,2.31112e-32,0.446036,-1.17751,-11.7517)\">\n            <g transform=\"matrix(0.730839,0,0,0.730839,-428.272,-103.233)\">\n                <path d=\"M738.748,372.292C743.056,377.12 743.923,383.318 741.56,389.234C673.786,404.652 629.197,430.744 629.197,460.312C629.197,507.636 743.42,546.057 884.109,546.057C1024.8,546.057 1139.02,507.636 1139.02,460.312C1139.02,431.943 1097.97,406.773 1034.79,391.162C1031.65,385.195 1031.87,378.745 1035.66,373.578C1039.88,374.479 1044.08,375.435 1048.27,376.451C1056.47,378.44 1064.62,380.658 1072.68,383.17C1078.62,385.021 1084.51,387.033 1090.33,389.247C1094.69,390.909 1099.01,392.685 1103.27,394.6C1106.44,396.026 1109.58,397.529 1112.66,399.123C1114.94,400.295 1117.18,401.516 1119.4,402.791C1121.01,403.719 1122.61,404.675 1124.18,405.663C1125.32,406.378 1126.45,407.109 1127.57,407.858C1135.27,413.023 1142.47,419.041 1148.47,426.135C1149.42,427.248 1150.33,428.386 1151.21,429.549C1152.34,431.045 1153.41,432.582 1154.42,434.16C1155.8,436.295 1157.06,438.504 1158.19,440.777C1159.65,443.716 1160.89,446.763 1161.89,449.89C1163.27,454.209 1164.17,458.676 1164.57,463.192C1165.09,469.111 1164.73,475.1 1163.52,480.916C1162.61,485.23 1161.25,489.443 1159.47,493.475C1157.96,496.89 1156.16,500.174 1154.12,503.298C1153.3,504.554 1152.44,505.785 1151.54,506.989C1145.61,514.961 1138.16,521.699 1130.06,527.412C1124.81,531.117 1119.27,534.408 1113.58,537.386C1107.35,540.646 1100.93,543.534 1094.4,546.147C1086.73,549.218 1078.91,551.912 1071.01,554.33C1062.5,556.937 1053.89,559.222 1045.22,561.261C1034.15,563.866 1022.99,566.067 1011.77,567.954C998.741,570.147 985.637,571.914 972.497,573.33C958.469,574.841 944.397,575.95 930.308,576.703C914.923,577.525 899.516,577.923 884.109,577.923C868.703,577.923 853.295,577.525 837.911,576.703C823.821,575.95 809.75,574.841 795.721,573.33C782.582,571.914 769.478,570.147 756.445,567.954C745.232,566.067 734.069,563.866 722.999,561.261C714.332,559.222 705.72,556.937 697.206,554.33C689.308,551.912 681.489,549.218 673.82,546.147C667.293,543.533 660.871,540.646 654.64,537.387C648.947,534.409 643.411,531.117 638.159,527.412C630.061,521.7 622.611,514.963 616.679,506.992C615.783,505.788 614.923,504.557 614.102,503.301C612.059,500.176 610.26,496.891 608.752,493.475C606.973,489.442 605.603,485.227 604.701,480.911C603.486,475.096 603.126,469.11 603.647,463.192C604.044,458.675 604.953,454.205 606.333,449.885C607.331,446.759 608.575,443.712 610.035,440.773C611.163,438.502 612.421,436.296 613.791,434.163C614.805,432.584 615.881,431.046 617.012,429.549C617.892,428.385 618.804,427.246 619.747,426.133C625.754,419.04 632.945,413.022 640.652,407.858C641.77,407.109 642.9,406.377 644.04,405.662C645.613,404.675 647.207,403.719 648.817,402.792C651.033,401.516 653.281,400.295 655.554,399.123C658.643,397.53 661.779,396.026 664.95,394.6C669.208,392.685 673.528,390.909 677.892,389.247C683.705,387.033 689.595,385.022 695.534,383.17C703.595,380.658 711.746,378.44 719.951,376.451C726.188,374.939 732.456,373.558 738.748,372.292Z\" />\n            </g>\n            <g transform=\"matrix(-0.365419,-0.632925,0.632925,-0.365419,244.419,974.764)\">\n                <path d=\"M738.748,372.292C743.056,377.12 743.923,383.318 741.56,389.234C673.786,404.652 629.197,430.744 629.197,460.312C629.197,507.636 743.42,546.057 884.109,546.057C1024.8,546.057 1139.02,507.636 1139.02,460.312C1139.02,431.943 1097.97,406.773 1034.79,391.162C1031.65,385.195 1031.87,378.745 1035.66,373.578C1039.88,374.479 1044.08,375.435 1048.27,376.451C1056.47,378.44 1064.62,380.658 1072.68,383.17C1078.62,385.021 1084.51,387.033 1090.33,389.247C1094.69,390.909 1099.01,392.685 1103.27,394.6C1106.44,396.026 1109.58,397.529 1112.66,399.123C1114.94,400.295 1117.18,401.516 1119.4,402.791C1121.01,403.719 1122.61,404.675 1124.18,405.663C1125.32,406.378 1126.45,407.109 1127.57,407.858C1135.27,413.023 1142.47,419.041 1148.47,426.135C1149.42,427.248 1150.33,428.386 1151.21,429.549C1152.34,431.045 1153.41,432.582 1154.42,434.16C1155.8,436.295 1157.06,438.504 1158.19,440.777C1159.65,443.716 1160.89,446.763 1161.89,449.89C1163.27,454.209 1164.17,458.676 1164.57,463.192C1165.09,469.111 1164.73,475.1 1163.52,480.916C1162.61,485.23 1161.25,489.443 1159.47,493.475C1157.96,496.89 1156.16,500.174 1154.12,503.298C1153.3,504.554 1152.44,505.785 1151.54,506.989C1145.61,514.961 1138.16,521.699 1130.06,527.412C1124.81,531.117 1119.27,534.408 1113.58,537.386C1107.35,540.646 1100.93,543.534 1094.4,546.147C1086.73,549.218 1078.91,551.912 1071.01,554.33C1062.5,556.937 1053.89,559.222 1045.22,561.261C1034.15,563.866 1022.99,566.067 1011.77,567.954C998.741,570.147 985.637,571.914 972.497,573.33C958.469,574.841 944.397,575.95 930.308,576.703C914.923,577.525 899.516,577.923 884.109,577.923C868.703,577.923 853.295,577.525 837.911,576.703C823.821,575.95 809.75,574.841 795.721,573.33C782.582,571.914 769.478,570.147 756.445,567.954C745.232,566.067 734.069,563.866 722.999,561.261C714.332,559.222 705.72,556.937 697.206,554.33C689.308,551.912 681.489,549.218 673.82,546.147C667.293,543.533 660.871,540.646 654.64,537.387C648.947,534.409 643.411,531.117 638.159,527.412C630.061,521.7 622.611,514.963 616.679,506.992C615.783,505.788 614.923,504.557 614.102,503.301C612.059,500.176 610.26,496.891 608.752,493.475C606.973,489.442 605.603,485.227 604.701,480.911C603.486,475.096 603.126,469.11 603.647,463.192C604.044,458.675 604.953,454.205 606.333,449.885C607.331,446.759 608.575,443.712 610.035,440.773C611.163,438.502 612.421,436.296 613.791,434.163C614.805,432.584 615.881,431.046 617.012,429.549C617.892,428.385 618.804,427.246 619.747,426.133C625.754,419.04 632.945,413.022 640.652,407.858C641.77,407.109 642.9,406.377 644.04,405.662C645.613,404.675 647.207,403.719 648.817,402.792C651.033,401.516 653.281,400.295 655.554,399.123C658.643,397.53 661.779,396.026 664.95,394.6C669.208,392.685 673.528,390.909 677.892,389.247C683.705,387.033 689.595,385.022 695.534,383.17C703.595,380.658 711.746,378.44 719.951,376.451C726.188,374.939 732.456,373.558 738.748,372.292Z\"/>\n            </g>\n            <g transform=\"matrix(0.365419,-0.632925,-0.632925,-0.365419,191.319,974.764)\">\n                <path d=\"M738.748,372.292C743.056,377.12 743.923,383.318 741.56,389.234C673.786,404.652 629.197,430.744 629.197,460.312C629.197,507.636 743.42,546.057 884.109,546.057C1024.8,546.057 1139.02,507.636 1139.02,460.312C1139.02,431.943 1097.97,406.773 1034.79,391.162C1031.65,385.195 1031.87,378.745 1035.66,373.578C1039.88,374.479 1044.08,375.435 1048.27,376.451C1056.47,378.44 1064.62,380.658 1072.68,383.17C1078.62,385.021 1084.51,387.033 1090.33,389.247C1094.69,390.909 1099.01,392.685 1103.27,394.6C1106.44,396.026 1109.58,397.529 1112.66,399.123C1114.94,400.295 1117.18,401.516 1119.4,402.791C1121.01,403.719 1122.61,404.675 1124.18,405.663C1125.32,406.378 1126.45,407.109 1127.57,407.858C1135.27,413.023 1142.47,419.041 1148.47,426.135C1149.42,427.248 1150.33,428.386 1151.21,429.549C1152.34,431.045 1153.41,432.582 1154.42,434.16C1155.8,436.295 1157.06,438.504 1158.19,440.777C1159.65,443.716 1160.89,446.763 1161.89,449.89C1163.27,454.209 1164.17,458.676 1164.57,463.192C1165.09,469.111 1164.73,475.1 1163.52,480.916C1162.61,485.23 1161.25,489.443 1159.47,493.475C1157.96,496.89 1156.16,500.174 1154.12,503.298C1153.3,504.554 1152.44,505.785 1151.54,506.989C1145.61,514.961 1138.16,521.699 1130.06,527.412C1124.81,531.117 1119.27,534.408 1113.58,537.386C1107.35,540.646 1100.93,543.534 1094.4,546.147C1086.73,549.218 1078.91,551.912 1071.01,554.33C1062.5,556.937 1053.89,559.222 1045.22,561.261C1034.15,563.866 1022.99,566.067 1011.77,567.954C998.741,570.147 985.637,571.914 972.497,573.33C958.469,574.841 944.397,575.95 930.308,576.703C914.923,577.525 899.516,577.923 884.109,577.923C868.703,577.923 853.295,577.525 837.911,576.703C823.821,575.95 809.75,574.841 795.721,573.33C782.582,571.914 769.478,570.147 756.445,567.954C745.232,566.067 734.069,563.866 722.999,561.261C714.332,559.222 705.72,556.937 697.206,554.33C689.308,551.912 681.489,549.218 673.82,546.147C667.293,543.533 660.871,540.646 654.64,537.387C648.947,534.409 643.411,531.117 638.159,527.412C630.061,521.7 622.611,514.963 616.679,506.992C615.783,505.788 614.923,504.557 614.102,503.301C612.059,500.176 610.26,496.891 608.752,493.475C606.973,489.442 605.603,485.227 604.701,480.911C603.486,475.096 603.126,469.11 603.647,463.192C604.044,458.675 604.953,454.205 606.333,449.885C607.331,446.759 608.575,443.712 610.035,440.773C611.163,438.502 612.421,436.296 613.791,434.163C614.805,432.584 615.881,431.046 617.012,429.549C617.892,428.385 618.804,427.246 619.747,426.133C625.754,419.04 632.945,413.022 640.652,407.858C641.77,407.109 642.9,406.377 644.04,405.662C645.613,404.675 647.207,403.719 648.817,402.792C651.033,401.516 653.281,400.295 655.554,399.123C658.643,397.53 661.779,396.026 664.95,394.6C669.208,392.685 673.528,390.909 677.892,389.247C683.705,387.033 689.595,385.022 695.534,383.17C703.595,380.658 711.746,378.44 719.951,376.451C726.188,374.939 732.456,373.558 738.748,372.292Z\"/>\n            </g>\n            <g transform=\"matrix(0.849949,0,0,0.849949,-532.408,-149.626)\">\n                <circle cx=\"882.732\" cy=\"463.109\" r=\"40.177\"/>\n            </g>\n        </g>\n    </g>\n</svg>\n"

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"128.1 125.4 49.2 49.2\" enable-background=\"new 128.1 125.4 49.2 49.2\" xml:space=\"preserve\">\n  <g id=\"atom\">\n  \t<g>\n  \t\t<g>\n  \t\t\t<circle fill=\"none\" stroke-width=\"3\" stroke-miterlimit=\"10\" cx=\"152.7\" cy=\"150\" r=\"21.6\"></circle>\n  \t\t\t<circle stroke=\"none\" fill=\"#BE6700\" cx=\"152.7\" cy=\"150\" r=\"12.4\"></circle>\n  \t\t</g>\n  \t\t<path stroke=\"none\" fill=\"#BE6700\" d=\"M175.1,136.6c0,2.9-2.4,5.3-5.3,5.3s-5.3-2.3-5.3-5.3c0-2.9,2.4-5.3,5.3-5.3\n  \t\t\tC172.7,131.3,175.1,133.7,175.1,136.6z\"></path>\n  \t</g>\n  </g>\n</svg>\n"

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32\" xml:space=\"preserve\" fill=\"none\">\n<line style=\"stroke-width:2;stroke-miterlimit:10\" x1=\"8\" y1=\"8\" x2=\"24\" y2=\"24\" fill=\"none\"/>\n<line style=\"stroke-width:2;stroke-miterlimit:10\" x1=\"24\" y1=\"8\" x2=\"8\" y2=\"24\" fill=\"none\"/>\n</svg>\n"

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.0//EN\" \"http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.0\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" enable-background=\"new 0 0 24 24\" xml:space=\"preserve\">\n<g stroke=\"none\">\n\t<path d=\"M18,8v12H9V8H18 M18,6H9C7.9,6,7,6.9,7,8v12c0,1.1,0.9,2,2,2h9c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6L18,6z\" stroke=\"none\"/>\n</g>\n<path d=\"M5,17V4h10V2H5C3.9,2,3,2.9,3,4v13H5z\" stroke=\"none\"/>\n</svg>\n"

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r\n<svg version=\"1.0\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t viewBox=\"0 0 48 48\" enable-background=\"new 0 0 48 48\" xml:space=\"preserve\">\n<polygon stroke=\"none\" fill=\"#CFD8DC\" points=\"35,36 39,36 39,22 26,22 26,13 22,13 22,22 9,22 9,36 13,36 13,26 22,26 22,36 26,36 26,26 35,26\n\t\"/>\r\n<rect x=\"17\" y=\"6\" stroke=\"none\" fill=\"#3F51B5\" width=\"14\" height=\"10\"/>\n<rect x=\"32\" y=\"32\" stroke=\"none\" fill=\"#00BCD4\" width=\"10\" height=\"10\"/>\n<rect x=\"6\" y=\"32\" stroke=\"none\" fill=\"#00BCD4\" width=\"10\" height=\"10\"/>\n<rect x=\"19\" y=\"32\" stroke=\"none\" fill=\"#00BCD4\" width=\"10\" height=\"10\"/>\n</svg>\r\n"

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = "<svg aria-hidden=\"true\" version=\"1.1\" viewBox=\"0 0 16 16\">\n<path fill-rule=\"evenodd\" d=\"M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z\" stroke=\"none\"/>\n</svg>\n"

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Слой_1\" x=\"0px\" y=\"0px\" width=\"50px\" height=\"50px\" viewBox=\"0 0 50 50\" enable-background=\"new 0 0 50 50\" xml:space=\"preserve\">\n<path d=\"M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3  c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z\" stroke=\"none\"/>\n</svg>\n"

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 50 50\" enable-background=\"new 0 0 50 50\" xml:space=\"preserve\" stroke=\"none\">\n<path d=\"M25,1C11.8,1,1,11.8,1,25c0,10.2,6.4,18.9,15.3,22.4c0.9-0.2,1.7-1,1.7-2V41h-2.6c-1.9,0-3.5-0.9-4.3-2.3  c-0.2-0.4-0.4-0.9-0.6-1.4c-0.4-1.1-0.9-2.3-1.9-3C8.2,34,8,33.4,8.1,32.9c0.2-0.5,0.7-0.9,1.6-0.8c1,0.1,2.5,1.2,3.4,2.4  c0.8,1,1.4,1.6,2.6,1.6h0.3c0.9,0,3.1,0,3.5-0.4l0,0c0.3-0.4,0.5-0.7,0.8-1c-6-1.2-9.4-4.7-9.4-10c0-1.8,0.5-3.6,1.6-5.2  c-0.4-1.5-1.3-5.4,0.6-7.1l0.3-0.3h0.4c2.6,0,4.5,1.1,5.7,2c3.5-1.3,7.5-1.3,11,0c1.1-0.9,3-2,5.7-2h0.4l0.3,0.3  c1.9,1.8,1,5.6,0.6,7.1c1,1.6,1.6,3.4,1.6,5.2c0,5.3-3.4,8.8-9.3,10c1.5,1.6,2.3,4,2.3,5.9v4.9c0,1,0.7,1.8,1.7,2  C42.6,43.9,49,35.2,49,25C49,11.8,38.2,1,25,1z\" stroke=\"none\"/>\n</svg>\n"

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24\" xml:space=\"preserve\" stroke=\"none\">\n<path d=\"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032  c0-3.331,2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2  C7.021,2,2.543,6.477,2.543,12c0,5.523,4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z\" stroke=\"none\"/>\n</svg>\n"

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" id=\"Слой_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"48px\" height=\"48px\" viewBox=\"0 0 48 48\" enable-background=\"new 0 0 48 48\" xml:space=\"preserve\">\n<path fill=\"#FF3D00\" stroke=\"none\" d=\"M32.635,8C29.027,8,25.855,9.828,24,12.597C22.145,9.828,18.973,8,15.365,8C9.641,8,5,12.598,5,18.269\n\tC5,28.487,21.15,33.411,24,40c2.85-6.589,19-11.428,19-21.731C43,12.598,38.359,8,32.635,8\"/>\n</svg>\n"

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg width=\"256px\" height=\"283px\" viewBox=\"0 0 256 283\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" preserveAspectRatio=\"xMidYMid\">\n\t<g>\n\t\t<path d=\"M239.972557,139.203 C239.972557,124.669 228.190557,112.887 213.656557,112.887 C212.721557,112.887 211.799557,112.937 210.890557,113.032 L247.035557,6.427 L93.431557,6.427 L129.525557,112.94 C128.996557,112.908 128.464557,112.887 127.926557,112.887 C113.392557,112.887 101.610557,124.669 101.610557,139.203 C101.610557,150.951 109.309557,160.897 119.936557,164.281 C114.323557,174.003 107.261557,182.759 99.243557,190.323 C88.340557,200.609 75.862557,208.408 62.367557,213.214 C46.299557,204.96 38.711557,186.602 45.558557,170.507 C46.331557,168.69 47.120557,166.847 47.875557,165.013 C59.515557,162.296 68.189557,151.86 68.189557,139.392 C68.189557,124.858 56.407557,113.076 41.873557,113.076 C27.338557,113.076 15.556557,124.858 15.556557,139.392 C15.556557,148.305 19.991557,156.176 26.769557,160.937 C20.255557,175.768 10.681557,191.288 7.69855701,209.276 C4.12355701,230.835 7.68755701,253.719 26.332557,266.642 C69.756557,296.738 116.892557,247.985 166.591557,235.729 C184.602557,231.287 204.373557,232.003 220.242557,222.812 C232.159557,215.91 240.015557,204.472 242.245557,191.63 C244.447557,178.944 241.236557,166.313 233.852557,156.071 C237.671557,151.503 239.972557,145.623 239.972557,139.203 L239.972557,139.203 Z M154.240557,139.296 C154.240557,139.265 154.243557,139.234 154.243557,139.203 C154.243557,129.659 149.161557,121.301 141.557557,116.688 L170.285557,58.597 L199.063557,117.304 C191.996557,122.022 187.339557,130.068 187.339557,139.203 C187.339557,139.395 187.350557,139.584 187.354557,139.775 L154.240557,139.296 L154.240557,139.296 Z\" stroke=\"none\" fill=\"#C63D14\"></path>\n\t\t<path d=\"M246.399036,139.203 C246.399036,123.218 234.882036,109.88 219.711036,107.031 L256.000036,0 L84.4660355,0 L120.810036,107.248 C106.167036,110.507 95.1830355,123.593 95.1830355,139.203 C95.1830355,150.926 101.378036,161.223 110.663036,167.009 C106.197036,173.662 100.901036,179.923 94.8320355,185.648 C85.2080355,194.728 74.4850355,201.614 62.9250355,206.144 C51.2820355,198.83 46.3600355,185.038 51.4720355,173.022 L51.8720355,172.082 C52.1220355,171.494 52.3730355,170.904 52.6230355,170.314 C65.4110355,165.855 74.6160355,153.682 74.6160355,139.392 C74.6160355,121.337 59.9270355,106.649 41.8720355,106.649 C23.8170355,106.649 9.12903553,121.337 9.12903553,139.392 C9.12903553,148.505 12.8740355,156.757 18.9020355,162.699 C17.8090355,165.029 16.6600355,167.397 15.4790355,169.823 C9.96703553,181.144 3.72003553,193.976 1.35703553,208.225 C-3.33596447,236.524 4.23303553,259.146 22.6700355,271.924 C33.8580355,279.678 45.2190355,282.728 56.6520355,282.727 C78.1810355,282.726 99.9580355,271.911 121.258036,261.331 C136.599036,253.712 152.461036,245.833 168.130036,241.969 C173.960036,240.531 179.959036,239.666 186.310036,238.75 C198.904036,236.933 211.928036,235.055 223.464036,228.374 C236.835036,220.629 245.989036,207.637 248.577036,192.73 C250.799036,179.933 248.124036,167.117 241.602036,156.247 C244.643036,151.279 246.399036,145.443 246.399036,139.203 L246.399036,139.203 Z M233.545036,139.203 C233.545036,150.17 224.623036,159.093 213.655036,159.093 C202.689036,159.093 193.766036,150.17 193.766036,139.203 C193.766036,128.236 202.689036,119.314 213.655036,119.314 C224.623036,119.314 233.545036,128.236 233.545036,139.203 L233.545036,139.203 Z M238.069036,12.854 L206.024036,107.367 C204.635036,107.7 203.281036,108.12 201.966036,108.625 L170.310036,44.047 L138.562036,108.243 C137.190036,107.77 135.778036,107.381 134.330036,107.093 L102.395036,12.854 L238.069036,12.854 L238.069036,12.854 Z M127.926036,119.314 C138.893036,119.314 147.815036,128.236 147.815036,139.203 C147.815036,150.17 138.893036,159.093 127.926036,159.093 C116.960036,159.093 108.037036,150.17 108.037036,139.203 C108.037036,128.236 116.960036,119.314 127.926036,119.314 L127.926036,119.314 Z M41.8720355,119.503 C52.8400355,119.503 61.7620355,128.425 61.7620355,139.392 C61.7620355,150.359 52.8400355,159.282 41.8720355,159.282 C30.9060355,159.282 21.9830355,150.359 21.9830355,139.392 C21.9830355,128.425 30.9060355,119.503 41.8720355,119.503 L41.8720355,119.503 Z M235.912036,190.531 C233.977036,201.679 227.091036,211.418 217.021036,217.25 C207.634036,222.687 196.385036,224.31 184.475036,226.027 C178.095036,226.947 171.497036,227.899 165.052036,229.489 C148.010036,233.691 131.503036,241.89 115.540036,249.819 C83.5950355,265.686 56.0060355,279.388 29.9930355,261.359 C10.9380355,248.153 11.8180355,223.718 14.0380355,210.328 C16.0950355,197.923 21.6570355,186.498 27.0360355,175.449 C27.9670355,173.537 28.8710355,171.664 29.7580355,169.803 C32.4260355,170.87 35.2630355,171.597 38.2200355,171.927 C32.7450355,189.998 41.3560355,209.646 59.4290355,218.931 L61.9020355,220.202 L64.5220355,219.269 C78.8100355,214.181 91.9750355,206.015 103.653036,194.998 C111.202036,187.877 117.689036,179.998 123.023036,171.579 C124.623036,171.82 126.260036,171.947 127.926036,171.947 C145.981036,171.947 160.670036,157.259 160.670036,139.203 C160.670036,129.493 156.417036,120.761 149.681036,114.759 L170.259036,73.147 L191.046036,115.552 C184.809036,121.518 180.912036,129.911 180.912036,139.203 C180.912036,157.259 195.600036,171.947 213.655036,171.947 C220.592036,171.947 227.027036,169.773 232.327036,166.079 C236.007036,173.612 237.378036,182.088 235.912036,190.531 L235.912036,190.531 Z\" stroke=\"none\" fill=\"#FFFFFF\"></path>\n\t</g>\n</svg>\n"

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg width=\"256px\" height=\"140px\" viewBox=\"0 0 256 140\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" preserveAspectRatio=\"xMidYMid\">\n\t<g>\n\t\t<path d=\"M190.317684,91.214 C185.491684,92.789 180.302684,93.273 175.261684,94.156 C173.889684,94.396 172.442684,94.182 171.056684,94.374 C160.303684,95.866 156.240684,100.173 154.721684,111.623 C153.913684,117.718 152.309684,123.511 148.811684,128.697 C142.901684,137.456 131.420684,141.431 121.594684,138.009 C111.076684,134.346 104.705684,124.759 105.555684,113.874 C106.320684,104.067 114.066684,95.403 124.945684,92.885 C130.038684,91.706 135.323684,91.245 140.549684,90.769 C150.304684,89.882 154.613684,85.605 156.238684,76.013 C157.173684,70.494 156.340684,65.287 155.116684,60.081 C153.247684,52.124 147.453684,48.427 137.726684,47.719 C132.418684,47.332 127.018684,46.562 121.939684,45.036 C111.247684,41.821 105.022684,32.539 105.515684,21.65 C105.947684,12.115 113.712684,2.831 123.039684,0.699 C134.089684,-1.828 145.090684,2.591 149.789684,12.432 C152.255684,17.596 153.610684,23.446 154.575684,29.137 C156.304684,39.341 160.358684,43.3 170.536684,44.406 C177.118684,45.122 183.825684,45.938 190.102684,47.902 C199.634684,50.885 205.360684,59.768 205.358684,69.64 C205.357684,79.297 199.447684,88.235 190.317684,91.214 Z\" stroke=\"none\" fill=\"#CF0920\"></path>\n\t\t<path d=\"M78.0720006,92.782 C65.2940006,92.784 54.8620006,82.355 54.8600006,69.579 C54.8580006,56.802 65.2870006,46.369 78.0630006,46.367 C90.8400006,46.365 101.272001,56.794 101.274001,69.57 C101.276001,82.347 90.8470006,92.78 78.0720006,92.782 Z\" stroke=\"none\" fill=\"#000000\"></path>\n\t\t<path d=\"M23.1300737,139.2 C10.3630737,139.168 -0.0319263159,128.703 7.36840638e-05,115.915 C0.0320736841,103.148 10.4960737,92.753 23.2840737,92.786 C36.0510737,92.817 46.4460737,103.282 46.4140737,116.07 C46.3820737,128.837 35.9180737,139.232 23.1300737,139.2 Z\" stroke=\"none\" fill=\"#000000\"></path>\n\t\t<path d=\"M232.962386,139.2 C220.162386,139.273 209.653386,128.92 209.580386,116.167 C209.507386,103.368 219.860386,92.858 232.613386,92.786 C245.412386,92.712 255.921386,103.064 255.995386,115.818 C256.068386,128.617 245.715386,139.127 232.962386,139.2 Z\" stroke=\"none\" fill=\"#000000\"></path>\n\t</g>\n</svg>\n"

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns=\"http://www.w3.org/2000/svg\" height=\"780.18\" viewBox=\"0 0 875.02936 780.17639\" width=\"875.03\" version=\"1.1\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\">\n <g stroke=\"none\" fill=\"#61dafb\">\n  <path d=\"m512.45 391.21a76.266 77.855 0 0 1 -76.266 77.855 76.266 77.855 0 0 1 -76.266 -77.855 76.266 77.855 0 0 1 76.266 -77.855 76.266 77.855 0 0 1 76.266 77.855z\"/>\n  <g fill-rule=\"evenodd\">\n   <path d=\"m277.8 477.26a437.52 180.08 59.793 0 1 -61.2 -466.18 437.52 180.08 59.793 0 1 376.3 291.6 437.52 180.08 59.793 0 1 61.2 466.18 437.52 180.08 59.793 0 1 -376.3 -291.6zm34.163-17.99a399.46 141.49 59.831 0 1 -75.73 -414.16 399.46 141.49 59.831 0 1 323.72 277.69 399.46 141.49 59.831 0 1 75.73 414.16 399.46 141.49 59.831 0 1 -323.72 -277.69z\"/>\n   <path d=\"m282.04 297.29a180.08 437.52 29.793 0 1 373.12 -286.09 180.08 437.52 29.793 0 1 -64.38 471.69 180.08 437.52 29.793 0 1 -373.12 286.09 180.08 437.52 29.793 0 1 64.38 -471.69zm32.661 20.591a141.49 399.46 29.831 0 1 320.81 -272.66 141.49 399.46 29.831 0 1 -78.63 419.19 141.49 399.46 29.831 0 1 -320.81 272.66 141.49 399.46 29.831 0 1 78.63 -419.19z\"/>\n   <path d=\"m440.7 210.54a180.08 437.52 89.793 0 1 434.32 180.09 180.08 437.52 89.793 0 1 -440.69 180.08 180.08 437.52 89.793 0 1 -434.32 -180.08 180.08 437.52 89.793 0 1 440.69 -180.09zm-1.5016 38.581a141.49 399.46 89.831 0 1 396.53 141.5 141.49 399.46 89.831 0 1 -402.35 141.5 141.49 399.46 89.831 0 1 -396.53 -141.5 141.49 399.46 89.831 0 1 402.35 -141.5z\"/>\n  </g>\n </g>\n</svg>\n"

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\">\n  <g stroke=\"none\" fill=\"#764ABC\">\n    <path d=\"M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z\"/>\n    <path d=\"M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z\"/>\n    <path d=\"M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z\"/>\n  </g>\n</svg>\n"

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 1200\">\n<title>icon-square-big</title>\n<path stroke=\"none\" fill=\"#FFF\" d=\"M600 0l530.3 300v600L600 1200 69.7 900V300z\"/>\n<path stroke=\"none\" fill=\"#8ED6FB\" class=\"st1\" d=\"M1035.6 879.3l-418.1 236.5V931.6L878 788.3l157.6 91zm28.6-25.9V358.8l-153 88.3V765l153 88.4zm-901.5 25.9l418.1 236.5V931.6L320.3 788.3l-157.6 91zm-28.6-25.9V358.8l153 88.3V765l-153 88.4zM152 326.8L580.8 84.2v178.1L306.1 413.4l-2.1 1.2-152-87.8zm894.3 0L617.5 84.2v178.1l274.7 151.1 2.1 1.2 152-87.8z\"/>\n<path stroke=\"none\" fill=\"#1C78C0\" d=\"M580.8 889.7l-257-141.3v-280l257 148.4v272.9zm36.7 0l257-141.3v-280l-257 148.4v272.9zm-18.3-283.6zM341.2 436l258-141.9 258 141.9-258 149-258-149z\"/>\n</svg>\n"

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./atoms/Block/index.js": 38,
	"./atoms/Button/index.js": 39,
	"./atoms/Heading/index.js": 40,
	"./atoms/Icon/index.js": 41,
	"./atoms/Input/index.js": 42,
	"./atoms/Label/index.js": 43,
	"./molecules/Field/index.js": 44,
	"./molecules/IconButton/index.js": 45,
	"./molecules/Modal/index.js": 46,
	"./organisms/LoginForm/index.js": 47,
	"./organisms/LoginModal/index.js": 48,
	"./organisms/ReduxField/index.js": 49,
	"./organisms/SignupButton/index.js": 50,
	"./organisms/SignupForm/index.js": 51,
	"./organisms/SignupModal/index.js": 52,
	"./organisms/UserButton/index.js": 53,
	"./pages/HomePage/index.js": 54
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 88;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./arc.svg": 73,
	"./atomic-design.svg": 74,
	"./close.svg": 75,
	"./copy.svg": 76,
	"./dist.svg": 77,
	"./docs.svg": 78,
	"./facebook.svg": 79,
	"./github.svg": 80,
	"./google.svg": 81,
	"./heart.svg": 82,
	"./jest.svg": 83,
	"./react-router.svg": 84,
	"./react.svg": 85,
	"./redux.svg": 86,
	"./webpack.svg": 87
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 89;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./LoginForm.js": 57,
	"./LoginModal.js": 58,
	"./Modal.js": 59,
	"./SignupButton.js": 60,
	"./SignupForm.js": 61,
	"./SignupModal.js": 62,
	"./UserButton.js": 63
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 90;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/actions.js": 14,
	"./modal/actions.js": 20
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 91;

/***/ }),
/* 92 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 92;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/reducer.js": 66,
	"./modal/reducer.js": 70
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 93;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/sagas.js": 67
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 94;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/selectors.js": 19,
	"./modal/selectors.js": 21
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 95;

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = require("bcrypt-nodejs");

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = require("csurf");

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("express-force-ssl");

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = require("express-validator");

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = require("lodash/camelCase");

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = require("lodash/upperFirst");

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom/Link");

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = require("react-router-server");

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = require("request");

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = require("styled-theme/composer");

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isEmail");

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isIn");

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isInt");

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isURL");

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(29);


/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map