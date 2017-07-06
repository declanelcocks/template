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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 90);
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
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/diegohaz/arc/wiki/Atomic-Design#do-not-worry
var req = __webpack_require__(63);

req.keys().forEach(function (key) {
  var componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1');
  module.exports[componentName] = req(key).default;
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var merge = __webpack_require__(16);

var config = {
  all: {
    env: "production" || 'development',
    isDev: "production" !== 'production',
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

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("styled-theme");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/diegohaz/arc/wiki/Containers
var req = __webpack_require__(65);

req.keys().forEach(function (key) {
  var containerName = key.replace(/^\.\/([^.]+)\.js$/, '$1');
  module.exports[containerName] = req(key).default;
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/diegohaz/arc/wiki/Actions
var req = __webpack_require__(66);

req.keys().forEach(function (key) {
  var actions = req(key);

  Object.keys(actions).forEach(function (name) {
    module.exports[name] = actions[name];
  });
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/diegohaz/arc/wiki/Selectors
var upperFirst = __webpack_require__(75);

var req = __webpack_require__(70);

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

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_LOGIN", function() { return SOCIAL_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_LOGIN_PREPARE", function() { return SOCIAL_LOGIN_PREPARE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_LOGIN_REQUEST", function() { return SOCIAL_LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_LOGIN_SUCCESS", function() { return SOCIAL_LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_LOGIN_FAILURE", function() { return SOCIAL_LOGIN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_LOGOUT", function() { return SOCIAL_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socialLoginPrepare", function() { return socialLoginPrepare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socialLoginRequest", function() { return socialLoginRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socialLoginSuccess", function() { return socialLoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socialLoginFailure", function() { return socialLoginFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socialLogout", function() { return socialLogout; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
var SOCIAL_LOGIN = 'SOCIAL_LOGIN';
var SOCIAL_LOGIN_PREPARE = 'SOCIAL_LOGIN_PREPARE';
var SOCIAL_LOGIN_REQUEST = 'SOCIAL_LOGIN_REQUEST';
var SOCIAL_LOGIN_SUCCESS = 'SOCIAL_LOGIN_SUCCESS';
var SOCIAL_LOGIN_FAILURE = 'SOCIAL_LOGIN_FAILURE';
var SOCIAL_LOGOUT = 'SOCIAL_LOGOUT';

var socialLoginPrepare = function socialLoginPrepare(service) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var clientId = _ref.clientId,
      options = _objectWithoutProperties(_ref, ['clientId']);

  return {
    type: SOCIAL_LOGIN_PREPARE,
    payload: _extends({
      service: service,
      clientId: clientId
    }, options)
  };
};


var socialLoginRequest = function socialLoginRequest(service) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var clientId = _ref2.clientId,
      options = _objectWithoutProperties(_ref2, ['clientId']);

  return {
    type: SOCIAL_LOGIN_REQUEST,
    payload: _extends({
      service: service,
      clientId: clientId
    }, options),
    meta: {
      // https://github.com/diegohaz/arc/wiki/Example-redux-modules#gtm
      gtm: service
    }
  };
};


var socialLoginSuccess = function socialLoginSuccess(user, request) {
  return {
    type: SOCIAL_LOGIN_SUCCESS,
    payload: user,
    meta: {
      request: request
    }
  };
};

var socialLoginFailure = function socialLoginFailure(error, request) {
  return {
    type: SOCIAL_LOGIN_FAILURE,
    error: true,
    payload: error,
    meta: {
      request: request
    }
  };
};

var socialLogout = function socialLogout() {
  return { type: SOCIAL_LOGOUT };
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("styled-tools");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODAL_SHOW", function() { return MODAL_SHOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODAL_HIDE", function() { return MODAL_HIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalShow", function() { return modalShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalHide", function() { return modalHide; });
// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#modal
var MODAL_SHOW = 'MODAL_SHOW';
var MODAL_HIDE = 'MODAL_HIDE';

var modalShow = function modalShow(name) {
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

var modalHide = function modalHide(name) {
  return {
    type: MODAL_HIDE,
    payload: {
      name: name
    }
  };
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOpen", function() { return isOpen; });
// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#modal
var initialState = {};

var isOpen = function isOpen() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var name = arguments[1];
  return !!state[name];
};

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
var initialState = {
  user: null
};

var getUser = function getUser() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  return state.user || initialState.user;
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("lodash/merge");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("redux-saga-thunk");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cors__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_api__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_serialize_javascript__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_serialize_javascript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_dom_server__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_router__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_router_server__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_router_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_router_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_store_configure__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_services_api__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_components_App__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_components_Html__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_components_Error__ = __webpack_require__(26);
/* eslint-disable no-console */






















var renderApp = function renderApp(_ref) {
  var store = _ref.store,
      context = _ref.context,
      location = _ref.location,
      sheet = _ref.sheet;

  var app = sheet.collectStyles(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_10_react_redux__["Provider"],
    { store: store },
    __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_11_react_router__["StaticRouter"],
      { basename: __WEBPACK_IMPORTED_MODULE_13_config__["basename"], context: context, location: location },
      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16_components_App__["a" /* default */], null)
    )
  ));
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_react_router_server__["renderToString"])(app);
};

var renderHtml = function renderHtml(_ref2) {
  var serverState = _ref2.serverState,
      initialState = _ref2.initialState,
      content = _ref2.content,
      sheet = _ref2.sheet;

  var styles = sheet.getStyleElement();
  var assets = global.assets;
  var state = '\n    window.__SERVER_STATE__ = ' + __WEBPACK_IMPORTED_MODULE_7_serialize_javascript___default()(serverState) + ';\n    window.__INITIAL_STATE__ = ' + __WEBPACK_IMPORTED_MODULE_7_serialize_javascript___default()(initialState) + ';\n  ';
  var html = __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17_components_Html__["a" /* default */], { styles: styles, assets: assets, state: state, content: content });
  return '<!doctype html>\n' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react_dom_server__["renderToStaticMarkup"])(html);
};

__WEBPACK_IMPORTED_MODULE_4_mongoose___default.a.connect(__WEBPACK_IMPORTED_MODULE_13_config__["mongo"].uri);

var app = __WEBPACK_IMPORTED_MODULE_2_express___default()();

app.use('/api', __WEBPACK_IMPORTED_MODULE_3_cors___default()(), __WEBPACK_IMPORTED_MODULE_5_api__["a" /* default */]);

app.use(__WEBPACK_IMPORTED_MODULE_13_config__["basename"], __WEBPACK_IMPORTED_MODULE_2_express___default.a.static(__WEBPACK_IMPORTED_MODULE_1_path___default.a.resolve(process.cwd(), 'dist/public')));

app.use(function (req, res, next) {
  var location = req.url;
  var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14_store_configure__["a" /* default */])({}, { api: __WEBPACK_IMPORTED_MODULE_15_services_api__["a" /* default */].create() });
  var context = {};
  var sheet = new __WEBPACK_IMPORTED_MODULE_8_styled_components__["ServerStyleSheet"]();

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

app.use(function (err, req, res, next) {
  var sheet = new __WEBPACK_IMPORTED_MODULE_8_styled_components__["ServerStyleSheet"]();
  var content = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react_dom_server__["renderToStaticMarkup"])(sheet.collectStyles(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18_components_Error__["a" /* default */], null)));
  res.status(500).send(renderHtml({ content: content, sheet: sheet }));
  console.error(err);
  next(err);
});

app.listen(__WEBPACK_IMPORTED_MODULE_13_config__["port"], function (error) {
  var boldBlue = function boldBlue(text) {
    return '\x1B[1m\x1B[34m' + text + '\x1B[39m\x1B[22m';
  };
  if (error) {
    console.error(error);
  } else {
    console.info('Server is running at ' + boldBlue('http://' + __WEBPACK_IMPORTED_MODULE_13_config__["host"] + ':' + __WEBPACK_IMPORTED_MODULE_13_config__["port"] + __WEBPACK_IMPORTED_MODULE_13_config__["basename"] + '/'));
  }
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_api_test__ = __webpack_require__(24);



var router = new __WEBPACK_IMPORTED_MODULE_0_express__["Router"]();

router.use('/test', __WEBPACK_IMPORTED_MODULE_1_api_test__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return index; });
var index = function index(req, res) {
  return res.send({ message: 'Welcome to the API!' });
};

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controller__ = __webpack_require__(23);



var router = new __WEBPACK_IMPORTED_MODULE_0_express__["Router"]();

router.get('/', __WEBPACK_IMPORTED_MODULE_1__controller__["a" /* index */]);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__themes_default__ = __webpack_require__(36);
var _templateObject = _taggedTemplateLiteral(['\n  body {\n    margin: 0;\n  }\n'], ['\n  body {\n    margin: 0;\n  }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








// https://github.com/diegohaz/arc/wiki/Styling


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_components__["injectGlobal"])(_templateObject);

var App = function App() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_react_helmet___default.a,
      { titleTemplate: 'ARc - %s' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'title',
        null,
        'Atomic React'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'description', content: 'React starter kit based on Atomic Design with React Router v4, Webpack, Redux, Server Side Rendering and more.' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:site_name', content: 'ARc' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:image', content: 'https://arc.js.org/thumbnail.png' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:image:type', content: 'image/png' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:image:width', content: '1200' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { property: 'og:image:height', content: '630' }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'icon', href: 'https://arc.js.org/icon.png' })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_styled_components__["ThemeProvider"],
      { theme: __WEBPACK_IMPORTED_MODULE_5__themes_default__["a" /* default */] },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Switch"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { path: '/', component: __WEBPACK_IMPORTED_MODULE_4_components__["HomePage"], exact: true })
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var ErrorPage = function ErrorPage() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    'Oops! A server error occurred'
  );
};

/* harmony default export */ __webpack_exports__["a"] = (ErrorPage);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_helmet__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* eslint-disable react/no-danger */




var Html = function Html(_ref) {
  var styles = _ref.styles,
      assets = _ref.assets,
      state = _ref.state,
      content = _ref.content;

  var helmet = __WEBPACK_IMPORTED_MODULE_2_react_helmet___default.a.renderStatic();
  var htmlAttrs = helmet.htmlAttributes.toComponent();
  var bodyAttrs = helmet.bodyAttributes.toComponent();

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'html',
    _extends({ lang: 'en' }, htmlAttrs),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'head',
      null,
      helmet.title.toComponent(),
      helmet.meta.toComponent(),
      helmet.link.toComponent(),
      assets.css.map(function (path) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'stylesheet', type: 'text/css', key: path, href: path });
      }),
      styles
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'body',
      bodyAttrs,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('main', { id: 'app', dangerouslySetInnerHTML: { __html: content } }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { dangerouslySetInnerHTML: { __html: state } }),
      assets.js.map(function (path) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { key: path, src: path });
      })
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Html);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom_Link__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom_Link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom_Link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_theme__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_styled_theme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_styled_tools__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_styled_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_styled_tools__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var fontSize = function fontSize(_ref) {
  var height = _ref.height;
  return height / 40 + 'rem';
};

var backgroundColor = function backgroundColor(_ref2) {
  var transparent = _ref2.transparent,
      disabled = _ref2.disabled;
  return transparent ? 'transparent' : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_styled_theme__["palette"])(disabled ? 2 : 1);
};

var foregroundColor = function foregroundColor(_ref3) {
  var transparent = _ref3.transparent,
      disabled = _ref3.disabled;
  return transparent ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_styled_theme__["palette"])(disabled ? 2 : 1) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_styled_theme__["palette"])('grayscale', 0, true);
};

var hoverBackgroundColor = function hoverBackgroundColor(_ref4) {
  var disabled = _ref4.disabled,
      transparent = _ref4.transparent;
  return !disabled && !transparent && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_styled_theme__["palette"])(0);
};
var hoverForegroundColor = function hoverForegroundColor(_ref5) {
  var disabled = _ref5.disabled,
      transparent = _ref5.transparent;
  return !disabled && transparent && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_styled_theme__["palette"])(0);
};

var styles = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_components__["css"])(['display: inline-flex;font-family: ', ';align-items: center;white-space: nowrap;font-size: ', ';border: 0.0625em solid ', ';height: 2.5em;justify-content: center;text-decoration: none;cursor: ', ';appearance: none;padding: 0 1em;border-radius: 0.125em;box-sizing: border-box;pointer-events: ', ';transition: background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out;background-color: ', ';color: ', ';&:hover, &:focus, &:active {background-color: ', ';color: ', ';}&:focus {outline: none}'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_styled_theme__["font"])('primary'), fontSize, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_styled_tools__["ifProp"])('transparent', 'currentcolor', 'transparent'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_styled_tools__["ifProp"])('disabled', 'default', 'pointer'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_styled_tools__["ifProp"])('disabled', 'none', 'auto'), backgroundColor, foregroundColor, hoverBackgroundColor, hoverForegroundColor);

var StyledLink = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(function (_ref6) {
  var disabled = _ref6.disabled,
      transparent = _ref6.transparent,
      reverse = _ref6.reverse,
      palette = _ref6.palette,
      height = _ref6.height,
      theme = _ref6.theme,
      props = _objectWithoutProperties(_ref6, ['disabled', 'transparent', 'reverse', 'palette', 'height', 'theme']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom_Link___default.a, props);
})(['', ''], styles);
var Anchor = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.a(['', ''], styles);
var StyledButton = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.button(['', ''], styles);

var Button = function Button(_ref7) {
  var type = _ref7.type,
      props = _objectWithoutProperties(_ref7, ['type']);

  if (props.to) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledLink, props);
  } else if (props.href) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Anchor, props);
  }
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledButton, _extends({}, props, { type: type }));
};

Button.defaultProps = {
  palette: 'primary',
  type: 'button',
  height: 40
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_theme__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_theme__);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var fontSize = function fontSize(_ref) {
  var level = _ref.level;
  return 0.75 + 1 * (1 / level) + 'rem';
};

var styles = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_components__["css"])(['font-family: ', ';font-weight: 500;font-size: ', ';margin: 0;margin-top: 0.85714em;margin-bottom: 0.57142em;color: ', ';'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["font"])('primary'), fontSize, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["palette"])({ grayscale: 0 }, 1));

var Heading = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(function (_ref2) {
  var level = _ref2.level,
      children = _ref2.children,
      reverse = _ref2.reverse,
      palette = _ref2.palette,
      theme = _ref2.theme,
      props = _objectWithoutProperties(_ref2, ['level', 'children', 'reverse', 'palette', 'theme']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('h' + level, props, children);
})(['', ''], styles);

Heading.propTypes = {
  level: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  palette: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  reverse: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};

Heading.defaultProps = {
  level: 1,
  palette: 'grayscale'
};

/* harmony default export */ __webpack_exports__["default"] = (Heading);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_theme__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_theme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_tools__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_styled_tools__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// https://github.com/diegohaz/arc/wiki/Example-components#icon






var fontSize = function fontSize(_ref) {
  var width = _ref.width,
      height = _ref.height;

  var size = width || height;
  return size ? size / 16 + 'rem' : '1.25em';
};

var Wrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.span(['display: inline-block;font-size: ', ';color: ', ';width: 1em;height: 1em;margin: 0.1em;box-sizing: border-box;& > svg {width: 100%;height: 100%;fill: currentcolor;stroke: currentcolor;}'], fontSize, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_styled_tools__["ifProp"])('palette', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_theme__["palette"])({ grayscale: 0 }, 1), 'currentcolor'));

var Icon = function Icon(_ref2) {
  var icon = _ref2.icon,
      props = _objectWithoutProperties(_ref2, ['icon']);

  var svg = __webpack_require__(64)("./" + icon + '.svg');
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Wrapper, _extends({}, props, { dangerouslySetInnerHTML: { __html: svg } }));
};

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_tools__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_tools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var fadeIn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_components__["keyframes"])(['0% { display: none; opacity: 0; }1% { display: block: opacity: 0; }100% { display: block; opacity: 1; }']);

var StyledButton = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(__WEBPACK_IMPORTED_MODULE_4_components__["Button"])(['max-width: ', ';width: ', ';padding: ', ';flex: 0 0 2.5em;box-sizing: border-box;', '', ''], function (props) {
  return props.hasText && !props.collapsed ? '100%' : '2.5em';
}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_tools__["ifProp"])('hasText', 'auto', '2.5em'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_tools__["ifProp"])('hasText', '0 0.4375em', 0), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_tools__["ifProp"])('collapsed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_components__["css"])(['overflow: hidden;transition: max-width 250ms ease-in-out;will-change: max-width;& .text {display: none;}&:hover {max-width: 100%;& .text {display: block;animation: ', ' 250ms;}}'], fadeIn)), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_tools__["ifProp"])('responsive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_components__["css"])(['@media screen and (max-width: ', 'px) {width: auto;flex: 0 !important;}'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_tools__["prop"])('breakpoint'))));

var Text = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.span(['padding: 0.4375em;@media screen and (max-width: ', 'px) {display: ', ';}'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_tools__["prop"])('breakpoint'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_styled_tools__["ifProp"])('responsive', 'none !important'));

var Wrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(['display: flex;align-items: center;justify-content: center;width: 100%;height: 100%;']);

var StyledIcon = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(__WEBPACK_IMPORTED_MODULE_4_components__["Icon"])(['flex: none;']);

var IconButton = function IconButton(_ref) {
  var icon = _ref.icon,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['icon', 'children']);

  var breakpoint = props.breakpoint,
      right = props.right,
      responsive = props.responsive,
      height = props.height;

  var iconElement = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(StyledIcon, { height: height / 2.5, icon: icon });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    StyledButton,
    _extends({ hasText: !!children }, props),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Wrapper,
      null,
      right || iconElement,
      children && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        Text,
        { className: 'text', responsive: responsive, breakpoint: breakpoint },
        children
      ),
      right && iconElement
    )
  );
};

IconButton.defaultProps = {
  breakpoint: 420
};

/* harmony default export */ __webpack_exports__["default"] = (IconButton);

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_modal__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_theme__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_styled_theme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_components__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  body.ReactModal__Body--open {\n    overflow: hidden;\n  }\n'], ['\n  body.ReactModal__Body--open {\n    overflow: hidden;\n  }\n']);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_components__["injectGlobal"])(_templateObject);

var overlayStyles = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_styled_components__["css"])(['position: fixed;background-color: rgba(0, 0, 0, 0.5);top: 0;right: 0;left: 0;bottom: 0;z-index: 9999;transition: opacity 250ms ease-in-out;opacity: 0;&[class*="after-open"] {opacity: 1;}&[class*="before-close"] {opacity: 0;}']);

var ModalBox = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(__WEBPACK_IMPORTED_MODULE_3_react_modal___default.a)(['position: absolute;display: flex;flex-direction: column;font-family: ', ';font-size: 1rem;background-color: ', ';border-radius: 0.125em;color: ', ';top: calc(50% - 1rem);left: calc(50% - 1rem);right: auto;bottom: auto;margin: 1rem calc(-50% + 1rem) 1rem 1rem;transform: translate(-50%, 100%);transition: transform 250ms ease-in-out;outline: none;box-sizing: border-box;min-width: 320px;max-width: calc(640px - 1rem);max-height: calc(100% - 1rem);padding-top: ', ';@media screen and (max-width: 640px) {width: calc(100% - 1rem);min-width: 0;}&[class*="after-open"] {transform: translate(-50%, -50%);}&[class*="before-close"] {transform: translate(-50%, 100%);}'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_styled_theme__["font"])('primary'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_styled_theme__["palette"])('grayscale', 0, true), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_styled_theme__["palette"])('grayscale', 0), function (_ref) {
  var hasHeader = _ref.hasHeader;
  return hasHeader ? 0 : '1rem';
});

var Header = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.header(['display: flex;align-items: center;padding: 1rem;> *:first-child {flex: 1;}']);

var StyledHeading = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(__WEBPACK_IMPORTED_MODULE_5_components__["Heading"])(['margin: 0 1rem 0 0;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;']);

var Content = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(['overflow: auto;padding: 0 1rem;margin-bottom: 1rem;']);

var StyledReactModal = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(function (_ref2) {
  var className = _ref2.className,
      props = _objectWithoutProperties(_ref2, ['className']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ModalBox, _extends({ overlayClassName: className, closeTimeoutMS: 250 }, props));
})(['', ''], overlayStyles);

var Modal = function Modal(_ref3) {
  var children = _ref3.children,
      title = _ref3.title,
      closeable = _ref3.closeable,
      onClose = _ref3.onClose,
      props = _objectWithoutProperties(_ref3, ['children', 'title', 'closeable', 'onClose']);

  var hasHeader = title || closeable;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    StyledReactModal,
    _extends({
      contentLabel: title || 'Modal',
      onRequestClose: onClose,
      hasHeader: hasHeader
    }, props),
    hasHeader && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Header,
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        StyledHeading,
        { level: 2, reverse: props.reverse },
        title
      ),
      closeable && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_components__["IconButton"], { icon: 'close', onClick: onClose, palette: 'white', reverse: true })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      Content,
      null,
      children
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_containers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_containers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_containers__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Wrapper = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(['display: flex;flex-direction: column;> * {margin-bottom: 0.5rem;}']);

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
          onFacebookLogin = _props.onFacebookLogin,
          onGoogleLogin = _props.onGoogleLogin,
          props = _objectWithoutProperties(_props, ['onFacebookLogin', 'onGoogleLogin']);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_containers__["Modal"],
        _extends({ title: 'Login', name: 'login', closeable: true }, props),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          Wrapper,
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_components__["IconButton"],
            { onClick: onFacebookLogin, icon: 'facebook' },
            'Connect with Facebook'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3_components__["IconButton"],
            { onClick: onGoogleLogin, icon: 'google' },
            'Connect with Google'
          )
        )
      );
    }
  }]);

  return LoginModal;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LoginModal);

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_containers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_containers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_containers__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var InnerButton = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.div(['display: flex;align-items: center;']);

var Image = __WEBPACK_IMPORTED_MODULE_2_styled_components___default.a.img(['margin-right: 0.5rem;']);

var UserButton = function UserButton(_ref) {
  var user = _ref.user,
      onLogin = _ref.onLogin,
      onLogout = _ref.onLogout,
      props = _objectWithoutProperties(_ref, ['user', 'onLogin', 'onLogout']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    user && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_components__["Button"],
      _extends({}, props, { onClick: onLogout }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        InnerButton,
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Image, { src: user.picture, width: 20, height: 20 }),
        'Sign out'
      )
    ),
    !user && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_components__["Button"],
      _extends({}, props, { onClick: onLogin }),
      'Sign in'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_containers__["LoginModal"], null)
  );
};

/* harmony default export */ __webpack_exports__["default"] = (UserButton);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_containers__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_containers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_containers__);
// https://github.com/diegohaz/arc/wiki/Atomic-Design



var HomePage = function HomePage() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_containers__["UserButton"], null)
  );
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_theme_composer__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_theme_composer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_theme_composer__);
// https://github.com/diegohaz/arc/wiki/Styling


var theme = {};

theme.palette = {
  primary: ['#1976d2', '#2196f3', '#71bcf7', '#c2e2fb'],
  secondary: ['#c2185b', '#e91e63', '#f06292', '#f8bbd0'],
  danger: ['#d32f2f', '#f44336', '#f8877f', '#ffcdd2'],
  alert: ['#ffa000', '#ffc107', '#ffd761', '#ffecb3'],
  success: ['#388e3c', '#4caf50', '#7cc47f', '#c8e6c9'],
  white: ['#fff', '#fff', '#eee'],
  grayscale: ['#212121', '#414141', '#616161', '#9e9e9e', '#bdbdbd', '#e0e0e0', '#eeeeee', '#ffffff']
};

theme.reversePalette = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_styled_theme_composer__["reversePalette"])(theme.palette);

theme.fonts = {
  primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif'
};

theme.sizes = {
  maxWidth: '1100px'
};

/* harmony default export */ __webpack_exports__["a"] = (theme);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_selectors__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_selectors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_store_selectors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_store_actions__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_store_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_store_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_components__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var LoginModalContainer = function (_Component) {
  _inherits(LoginModalContainer, _Component);

  function LoginModalContainer() {
    _classCallCheck(this, LoginModalContainer);

    return _possibleConstructorReturn(this, (LoginModalContainer.__proto__ || Object.getPrototypeOf(LoginModalContainer)).apply(this, arguments));
  }

  _createClass(LoginModalContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.prepareGoogle();
      this.props.prepareFacebook();
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_components__["LoginModal"], this.props);
    }
  }]);

  return LoginModalContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: __WEBPACK_IMPORTED_MODULE_4_store_selectors__["fromSocial"].getUser(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    prepareGoogle: function prepareGoogle() {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_store_actions__["socialLoginPrepare"])('google', { clientId: __WEBPACK_IMPORTED_MODULE_3_config__["googleClientId"] }));
    },
    prepareFacebook: function prepareFacebook() {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_store_actions__["socialLoginPrepare"])('facebook', { clientId: __WEBPACK_IMPORTED_MODULE_3_config__["fbAppId"] }));
    },
    onFacebookLogin: function onFacebookLogin() {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_store_actions__["socialLoginRequest"])('facebook'));
    },
    onGoogleLogin: function onGoogleLogin() {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_store_actions__["socialLoginRequest"])('google'));
    },
    onClose: function onClose() {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_store_actions__["modalHide"])('login'));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(LoginModalContainer));

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_selectors__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_selectors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_store_selectors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_actions__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_store_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_store_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_components__);








var ModalContainer = function ModalContainer(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_components__["Modal"], props);
};

var mapStateToProps = function mapStateToProps(state, _ref) {
  var name = _ref.name,
      isOpen = _ref.isOpen;
  return {
    isOpen: isOpen || __WEBPACK_IMPORTED_MODULE_3_store_selectors__["fromModal"].isOpen(state, name)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var name = _ref2.name;
  return {
    onClose: function onClose() {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_store_actions__["modalHide"])(name));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(ModalContainer));

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_store_selectors__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_store_selectors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_store_selectors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_actions__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_store_actions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_store_actions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_components__);







var UserButtonContainer = function UserButtonContainer(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_components__["UserButton"], props);
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: __WEBPACK_IMPORTED_MODULE_2_store_selectors__["fromSocial"].getUser(state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onLogin: function onLogin() {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_store_actions__["modalShow"])('login'));
    },
    onLogout: function onLogout() {
      return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_store_actions__["socialLogout"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(UserButtonContainer));

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export checkStatus */
/* unused harmony export parseJSON */
/* unused harmony export parseSettings */
/* unused harmony export parseEndpoint */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_query_string__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_query_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_query_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_merge__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_config__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// https://github.com/diegohaz/arc/wiki/API-service





var checkStatus = function checkStatus(response) {
  if (response.ok) {
    return response;
  }
  var error = new Error(response.status + ' ' + response.statusText);
  error.response = response;
  throw error;
};

var parseJSON = function parseJSON(response) {
  return response.json();
};

var parseSettings = function parseSettings() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref$method = _ref.method,
      method = _ref$method === undefined ? 'get' : _ref$method,
      data = _ref.data,
      locale = _ref.locale,
      otherSettings = _objectWithoutProperties(_ref, ['method', 'data', 'locale']);

  var headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Language': locale
  };
  var settings = __WEBPACK_IMPORTED_MODULE_2_lodash_merge___default()({
    body: data ? JSON.stringify(data) : undefined,
    method: method,
    headers: headers
  }, otherSettings);
  return settings;
};


var parseEndpoint = function parseEndpoint(endpoint, params) {
  var url = endpoint.indexOf('http') === 0 ? endpoint : __WEBPACK_IMPORTED_MODULE_3_config__["apiUrl"] + endpoint;
  var querystring = params ? '?' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_query_string__["stringify"])(params) : '';
  return '' + url + querystring;
};

var api = {};

api.request = function (endpoint) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var params = _ref2.params,
      settings = _objectWithoutProperties(_ref2, ['params']);

  return fetch(parseEndpoint(endpoint, params), parseSettings(settings)).then(checkStatus).then(parseJSON);
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
      return api.request(endpoint, __WEBPACK_IMPORTED_MODULE_2_lodash_merge___default()({}, this.settings, settings));
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

/* harmony default export */ __webpack_exports__["a"] = (api);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_saga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__middlewares__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__middlewares___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__middlewares__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducer__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sagas__ = __webpack_require__(45);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// https://github.com/diegohaz/arc/wiki/Redux-modules







var devtools = __WEBPACK_IMPORTED_MODULE_2_config__["isDev"] && __WEBPACK_IMPORTED_MODULE_2_config__["isBrowser"] && window.devToolsExtension ? window.devToolsExtension : function () {
  return function (fn) {
    return fn;
  };
};

var configureStore = function configureStore(initialState) {
  var services = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var sagaMiddleware = __WEBPACK_IMPORTED_MODULE_1_redux_saga___default()();

  var enhancers = [__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"].apply(undefined, _toConsumableArray(__WEBPACK_IMPORTED_MODULE_3__middlewares___default.a).concat([sagaMiddleware])), devtools()];

  var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */], initialState, __WEBPACK_IMPORTED_MODULE_0_redux__["compose"].apply(undefined, enhancers));
  var sagaTask = sagaMiddleware.run(__WEBPACK_IMPORTED_MODULE_5__sagas__["a" /* default */], services);

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

/* harmony default export */ __webpack_exports__["a"] = (configureStore);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(19),
    thunkMiddleware = _require.middleware;

var req = __webpack_require__(67);

module.exports = req.keys().map(function (key) {
  return req(key).default;
}).concat([thunkMiddleware]);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selectors__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(13);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#modal



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__selectors__["initialState"];
  var _ref = arguments[1];
  var type = _ref.type,
      _ref$payload = _ref.payload,
      payload = _ref$payload === undefined ? {} : _ref$payload;

  switch (type) {
    case __WEBPACK_IMPORTED_MODULE_1__actions__["MODAL_SHOW"]:
      return _extends({}, state, _defineProperty({}, payload.name, true));
    case __WEBPACK_IMPORTED_MODULE_1__actions__["MODAL_HIDE"]:
      if (payload.name) {
        return _extends({}, state, _defineProperty({}, payload.name, false));
      }
      return __WEBPACK_IMPORTED_MODULE_0__selectors__["initialState"];
    default:
      return state;
  }
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_camelCase__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_camelCase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_camelCase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_saga_thunk__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_saga_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_saga_thunk__);
// https://github.com/diegohaz/arc/wiki/Reducers





var reducers = {
  form: __WEBPACK_IMPORTED_MODULE_2_redux_form__["reducer"],
  thunk: __WEBPACK_IMPORTED_MODULE_3_redux_saga_thunk__["reducer"]
};

var req = __webpack_require__(68);

req.keys().forEach(function (key) {
  var storeName = __WEBPACK_IMPORTED_MODULE_0_lodash_camelCase___default()(key.replace(/\.\/(.+)\/.+$/, '$1'));
  reducers[storeName] = req(key).default;
});

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["combineReducers"])(reducers));

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _callee;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__);
var _marked = [_callee].map(regeneratorRuntime.mark);

// https://github.com/diegohaz/arc/wiki/Sagas


var req = __webpack_require__(69);

var sagas = req.keys().map(function (key) {
  return req(key).default;
});

function _callee() {
  var services = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["all"])(sagas.map(function (saga) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(saga, services);
          }));

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selectors__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions__ = __webpack_require__(10);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_0__selectors__["initialState"];
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case __WEBPACK_IMPORTED_MODULE_1__actions__["SOCIAL_LOGIN_SUCCESS"]:
      return _extends({}, state, {
        user: payload
      });
    case __WEBPACK_IMPORTED_MODULE_1__actions__["SOCIAL_LOGOUT"]:
      return _extends({}, state, {
        user: __WEBPACK_IMPORTED_MODULE_0__selectors__["initialState"].user
      });
    default:
      return state;
  }
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promises", function() { return promises; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendFbRoot", function() { return appendFbRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviceAction", function() { return serviceAction; });
/* harmony export (immutable) */ __webpack_exports__["loginFacebook"] = loginFacebook;
/* harmony export (immutable) */ __webpack_exports__["prepareFacebook"] = prepareFacebook;
/* harmony export (immutable) */ __webpack_exports__["watchSocialLoginFacebook"] = watchSocialLoginFacebook;
/* harmony export (immutable) */ __webpack_exports__["loginGoogle"] = loginGoogle;
/* harmony export (immutable) */ __webpack_exports__["prepareGoogle"] = prepareGoogle;
/* harmony export (immutable) */ __webpack_exports__["watchSocialLoginGoogle"] = watchSocialLoginGoogle;
/* harmony export (immutable) */ __webpack_exports__["default"] = _callee;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_simple_load_script__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_simple_load_script___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_simple_load_script__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(10);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _marked = [loginFacebook, prepareFacebook, watchSocialLoginFacebook, loginGoogle, prepareGoogle, watchSocialLoginGoogle, _callee].map(regeneratorRuntime.mark);

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// https://github.com/diegohaz/arc/wiki/Sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social




var promises = {
  fbLogin: function fbLogin(options) {
    return new Promise(function (resolve, reject) {
      window.FB.login(function (response) {
        // istanbul ignore else
        if (response.authResponse) {
          resolve(response.authResponse);
        } else {
          reject(response.status);
        }
      }, options);
    });
  },
  fbGetMe: function fbGetMe(options) {
    return new Promise(function (resolve) {
      window.FB.api('/me', options, function (me) {
        return resolve(me);
      });
    });
  },
  loadGoogleAuth2: function loadGoogleAuth2() {
    return new Promise(function (resolve) {
      window.gapi.load('auth2', resolve);
    });
  }
};

var appendFbRoot = function appendFbRoot() {
  var fbRoot = document.createElement('div');
  fbRoot.id = 'fb-root';
  document.body.appendChild(fbRoot);
};

var serviceAction = function serviceAction(suffix, service) {
  return function (_ref) {
    var type = _ref.type,
        payload = _ref.payload;
    return type === 'SOCIAL_LOGIN_' + suffix && payload && payload.service === service;
  };
};

function loginFacebook() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref2$scope = _ref2.scope,
      scope = _ref2$scope === undefined ? 'public_profile' : _ref2$scope,
      _ref2$fields = _ref2.fields,
      fields = _ref2$fields === undefined ? 'id,name' : _ref2$fields,
      options = _objectWithoutProperties(_ref2, ['scope', 'fields']);

  var request, data, picture;
  return regeneratorRuntime.wrap(function loginFacebook$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          request = _extends({ service: 'facebook', scope: scope, fields: fields }, options);
          _context.prev = 1;
          _context.next = 4;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(promises.fbLogin, _extends({ scope: scope }, options));

        case 4:
          _context.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(promises.fbGetMe, { fields: fields });

        case 6:
          data = _context.sent;
          picture = 'https://graph.facebook.com/' + data.id + '/picture?type=normal';
          _context.next = 10;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_2__actions__["socialLoginSuccess"](_extends({}, data, { picture: picture }), request));

        case 10:
          _context.next = 16;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context['catch'](1);
          _context.next = 16;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_2__actions__["socialLoginFailure"](_context.t0, request));

        case 16:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this, [[1, 12]]);
}

function prepareFacebook(_ref3) {
  var clientId = _ref3.clientId,
      _ref3$version = _ref3.version,
      version = _ref3$version === undefined ? 'v2.8' : _ref3$version,
      options = _objectWithoutProperties(_ref3, ['clientId', 'version']);

  var request;
  return regeneratorRuntime.wrap(function prepareFacebook$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          request = _extends({ service: 'facebook', clientId: clientId, version: version }, options);
          _context2.prev = 1;
          _context2.next = 4;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(appendFbRoot);

        case 4:
          _context2.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(__WEBPACK_IMPORTED_MODULE_0_simple_load_script___default.a, '//connect.facebook.net/en_US/sdk.js');

        case 6:
          _context2.next = 8;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])([window.FB, window.FB.init], _extends({ appId: clientId, version: version }, options));

        case 8:
          _context2.next = 14;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2['catch'](1);
          _context2.next = 14;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_2__actions__["socialLoginFailure"](_context2.t0, request));

        case 14:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this, [[1, 10]]);
}

function watchSocialLoginFacebook() {
  var _ref4, payload, _ref5, _payload;

  return regeneratorRuntime.wrap(function watchSocialLoginFacebook$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["take"])(serviceAction('PREPARE', 'facebook'));

        case 2:
          _ref4 = _context3.sent;
          payload = _ref4.payload;
          _context3.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(prepareFacebook, payload);

        case 6:
          if (false) {
            _context3.next = 15;
            break;
          }

          _context3.next = 9;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["take"])(serviceAction('REQUEST', 'facebook'));

        case 9:
          _ref5 = _context3.sent;
          _payload = _ref5.payload;
          _context3.next = 13;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(loginFacebook, _payload);

        case 13:
          _context3.next = 6;
          break;

        case 15:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this);
}

function loginGoogle() {
  var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref6$scope = _ref6.scope,
      scope = _ref6$scope === undefined ? 'profile' : _ref6$scope,
      options = _objectWithoutProperties(_ref6, ['scope']);

  var request, auth2, user, profile, name, picture;
  return regeneratorRuntime.wrap(function loginGoogle$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          request = _extends({ service: 'google', scope: scope }, options);
          _context4.prev = 1;
          _context4.next = 4;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(window.gapi.auth2.getAuthInstance);

        case 4:
          auth2 = _context4.sent;
          _context4.next = 7;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])([auth2, auth2.signIn], _extends({ scope: scope }, options));

        case 7:
          user = _context4.sent;
          _context4.next = 10;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])([user, user.getBasicProfile]);

        case 10:
          profile = _context4.sent;
          _context4.next = 13;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])([profile, profile.getName]);

        case 13:
          name = _context4.sent;
          _context4.next = 16;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])([profile, profile.getImageUrl]);

        case 16:
          picture = _context4.sent;
          _context4.next = 19;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_2__actions__["socialLoginSuccess"]({ name: name, picture: picture }, request));

        case 19:
          _context4.next = 25;
          break;

        case 21:
          _context4.prev = 21;
          _context4.t0 = _context4['catch'](1);
          _context4.next = 25;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_2__actions__["socialLoginFailure"](_context4.t0, request));

        case 25:
        case 'end':
          return _context4.stop();
      }
    }
  }, _marked[3], this, [[1, 21]]);
}

function prepareGoogle(_ref7) {
  var clientId = _ref7.clientId,
      options = _objectWithoutProperties(_ref7, ['clientId']);

  var request;
  return regeneratorRuntime.wrap(function prepareGoogle$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          request = _extends({ service: 'google', clientId: clientId }, options);
          _context5.prev = 1;
          _context5.next = 4;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(__WEBPACK_IMPORTED_MODULE_0_simple_load_script___default.a, '//apis.google.com/js/platform.js');

        case 4:
          _context5.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(promises.loadGoogleAuth2);

        case 6:
          _context5.next = 8;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(window.gapi.auth2.init, _extends({ client_id: clientId }, options));

        case 8:
          _context5.next = 14;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5['catch'](1);
          _context5.next = 14;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_2__actions__["socialLoginFailure"](_context5.t0, request));

        case 14:
        case 'end':
          return _context5.stop();
      }
    }
  }, _marked[4], this, [[1, 10]]);
}

function watchSocialLoginGoogle() {
  var _ref8, payload, _ref9, _payload2;

  return regeneratorRuntime.wrap(function watchSocialLoginGoogle$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["take"])(serviceAction('PREPARE', 'google'));

        case 2:
          _ref8 = _context6.sent;
          payload = _ref8.payload;
          _context6.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(prepareGoogle, payload);

        case 6:
          if (false) {
            _context6.next = 15;
            break;
          }

          _context6.next = 9;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["take"])(serviceAction('REQUEST', 'google'));

        case 9:
          _ref9 = _context6.sent;
          _payload2 = _ref9.payload;
          _context6.next = 13;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(loginGoogle, _payload2);

        case 13:
          _context6.next = 6;
          break;

        case 15:
        case 'end':
          return _context6.stop();
      }
    }
  }, _marked[5], this);
}

function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["fork"])(watchSocialLoginFacebook);

        case 2:
          _context7.next = 4;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["fork"])(watchSocialLoginGoogle);

        case 4:
        case 'end':
          return _context7.stop();
      }
    }
  }, _marked[6], this);
}

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 184 164\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\" style=\"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;\">\n    <g transform=\"matrix(1,0,0,1,-4.49912,-15.1442)\">\n        <g id=\"Symbol\" transform=\"matrix(0.446036,2.31112e-32,2.31112e-32,0.446036,-1.17751,-11.7517)\">\n            <g transform=\"matrix(0.730839,0,0,0.730839,-428.272,-103.233)\">\n                <path d=\"M738.748,372.292C743.056,377.12 743.923,383.318 741.56,389.234C673.786,404.652 629.197,430.744 629.197,460.312C629.197,507.636 743.42,546.057 884.109,546.057C1024.8,546.057 1139.02,507.636 1139.02,460.312C1139.02,431.943 1097.97,406.773 1034.79,391.162C1031.65,385.195 1031.87,378.745 1035.66,373.578C1039.88,374.479 1044.08,375.435 1048.27,376.451C1056.47,378.44 1064.62,380.658 1072.68,383.17C1078.62,385.021 1084.51,387.033 1090.33,389.247C1094.69,390.909 1099.01,392.685 1103.27,394.6C1106.44,396.026 1109.58,397.529 1112.66,399.123C1114.94,400.295 1117.18,401.516 1119.4,402.791C1121.01,403.719 1122.61,404.675 1124.18,405.663C1125.32,406.378 1126.45,407.109 1127.57,407.858C1135.27,413.023 1142.47,419.041 1148.47,426.135C1149.42,427.248 1150.33,428.386 1151.21,429.549C1152.34,431.045 1153.41,432.582 1154.42,434.16C1155.8,436.295 1157.06,438.504 1158.19,440.777C1159.65,443.716 1160.89,446.763 1161.89,449.89C1163.27,454.209 1164.17,458.676 1164.57,463.192C1165.09,469.111 1164.73,475.1 1163.52,480.916C1162.61,485.23 1161.25,489.443 1159.47,493.475C1157.96,496.89 1156.16,500.174 1154.12,503.298C1153.3,504.554 1152.44,505.785 1151.54,506.989C1145.61,514.961 1138.16,521.699 1130.06,527.412C1124.81,531.117 1119.27,534.408 1113.58,537.386C1107.35,540.646 1100.93,543.534 1094.4,546.147C1086.73,549.218 1078.91,551.912 1071.01,554.33C1062.5,556.937 1053.89,559.222 1045.22,561.261C1034.15,563.866 1022.99,566.067 1011.77,567.954C998.741,570.147 985.637,571.914 972.497,573.33C958.469,574.841 944.397,575.95 930.308,576.703C914.923,577.525 899.516,577.923 884.109,577.923C868.703,577.923 853.295,577.525 837.911,576.703C823.821,575.95 809.75,574.841 795.721,573.33C782.582,571.914 769.478,570.147 756.445,567.954C745.232,566.067 734.069,563.866 722.999,561.261C714.332,559.222 705.72,556.937 697.206,554.33C689.308,551.912 681.489,549.218 673.82,546.147C667.293,543.533 660.871,540.646 654.64,537.387C648.947,534.409 643.411,531.117 638.159,527.412C630.061,521.7 622.611,514.963 616.679,506.992C615.783,505.788 614.923,504.557 614.102,503.301C612.059,500.176 610.26,496.891 608.752,493.475C606.973,489.442 605.603,485.227 604.701,480.911C603.486,475.096 603.126,469.11 603.647,463.192C604.044,458.675 604.953,454.205 606.333,449.885C607.331,446.759 608.575,443.712 610.035,440.773C611.163,438.502 612.421,436.296 613.791,434.163C614.805,432.584 615.881,431.046 617.012,429.549C617.892,428.385 618.804,427.246 619.747,426.133C625.754,419.04 632.945,413.022 640.652,407.858C641.77,407.109 642.9,406.377 644.04,405.662C645.613,404.675 647.207,403.719 648.817,402.792C651.033,401.516 653.281,400.295 655.554,399.123C658.643,397.53 661.779,396.026 664.95,394.6C669.208,392.685 673.528,390.909 677.892,389.247C683.705,387.033 689.595,385.022 695.534,383.17C703.595,380.658 711.746,378.44 719.951,376.451C726.188,374.939 732.456,373.558 738.748,372.292Z\" />\n            </g>\n            <g transform=\"matrix(-0.365419,-0.632925,0.632925,-0.365419,244.419,974.764)\">\n                <path d=\"M738.748,372.292C743.056,377.12 743.923,383.318 741.56,389.234C673.786,404.652 629.197,430.744 629.197,460.312C629.197,507.636 743.42,546.057 884.109,546.057C1024.8,546.057 1139.02,507.636 1139.02,460.312C1139.02,431.943 1097.97,406.773 1034.79,391.162C1031.65,385.195 1031.87,378.745 1035.66,373.578C1039.88,374.479 1044.08,375.435 1048.27,376.451C1056.47,378.44 1064.62,380.658 1072.68,383.17C1078.62,385.021 1084.51,387.033 1090.33,389.247C1094.69,390.909 1099.01,392.685 1103.27,394.6C1106.44,396.026 1109.58,397.529 1112.66,399.123C1114.94,400.295 1117.18,401.516 1119.4,402.791C1121.01,403.719 1122.61,404.675 1124.18,405.663C1125.32,406.378 1126.45,407.109 1127.57,407.858C1135.27,413.023 1142.47,419.041 1148.47,426.135C1149.42,427.248 1150.33,428.386 1151.21,429.549C1152.34,431.045 1153.41,432.582 1154.42,434.16C1155.8,436.295 1157.06,438.504 1158.19,440.777C1159.65,443.716 1160.89,446.763 1161.89,449.89C1163.27,454.209 1164.17,458.676 1164.57,463.192C1165.09,469.111 1164.73,475.1 1163.52,480.916C1162.61,485.23 1161.25,489.443 1159.47,493.475C1157.96,496.89 1156.16,500.174 1154.12,503.298C1153.3,504.554 1152.44,505.785 1151.54,506.989C1145.61,514.961 1138.16,521.699 1130.06,527.412C1124.81,531.117 1119.27,534.408 1113.58,537.386C1107.35,540.646 1100.93,543.534 1094.4,546.147C1086.73,549.218 1078.91,551.912 1071.01,554.33C1062.5,556.937 1053.89,559.222 1045.22,561.261C1034.15,563.866 1022.99,566.067 1011.77,567.954C998.741,570.147 985.637,571.914 972.497,573.33C958.469,574.841 944.397,575.95 930.308,576.703C914.923,577.525 899.516,577.923 884.109,577.923C868.703,577.923 853.295,577.525 837.911,576.703C823.821,575.95 809.75,574.841 795.721,573.33C782.582,571.914 769.478,570.147 756.445,567.954C745.232,566.067 734.069,563.866 722.999,561.261C714.332,559.222 705.72,556.937 697.206,554.33C689.308,551.912 681.489,549.218 673.82,546.147C667.293,543.533 660.871,540.646 654.64,537.387C648.947,534.409 643.411,531.117 638.159,527.412C630.061,521.7 622.611,514.963 616.679,506.992C615.783,505.788 614.923,504.557 614.102,503.301C612.059,500.176 610.26,496.891 608.752,493.475C606.973,489.442 605.603,485.227 604.701,480.911C603.486,475.096 603.126,469.11 603.647,463.192C604.044,458.675 604.953,454.205 606.333,449.885C607.331,446.759 608.575,443.712 610.035,440.773C611.163,438.502 612.421,436.296 613.791,434.163C614.805,432.584 615.881,431.046 617.012,429.549C617.892,428.385 618.804,427.246 619.747,426.133C625.754,419.04 632.945,413.022 640.652,407.858C641.77,407.109 642.9,406.377 644.04,405.662C645.613,404.675 647.207,403.719 648.817,402.792C651.033,401.516 653.281,400.295 655.554,399.123C658.643,397.53 661.779,396.026 664.95,394.6C669.208,392.685 673.528,390.909 677.892,389.247C683.705,387.033 689.595,385.022 695.534,383.17C703.595,380.658 711.746,378.44 719.951,376.451C726.188,374.939 732.456,373.558 738.748,372.292Z\"/>\n            </g>\n            <g transform=\"matrix(0.365419,-0.632925,-0.632925,-0.365419,191.319,974.764)\">\n                <path d=\"M738.748,372.292C743.056,377.12 743.923,383.318 741.56,389.234C673.786,404.652 629.197,430.744 629.197,460.312C629.197,507.636 743.42,546.057 884.109,546.057C1024.8,546.057 1139.02,507.636 1139.02,460.312C1139.02,431.943 1097.97,406.773 1034.79,391.162C1031.65,385.195 1031.87,378.745 1035.66,373.578C1039.88,374.479 1044.08,375.435 1048.27,376.451C1056.47,378.44 1064.62,380.658 1072.68,383.17C1078.62,385.021 1084.51,387.033 1090.33,389.247C1094.69,390.909 1099.01,392.685 1103.27,394.6C1106.44,396.026 1109.58,397.529 1112.66,399.123C1114.94,400.295 1117.18,401.516 1119.4,402.791C1121.01,403.719 1122.61,404.675 1124.18,405.663C1125.32,406.378 1126.45,407.109 1127.57,407.858C1135.27,413.023 1142.47,419.041 1148.47,426.135C1149.42,427.248 1150.33,428.386 1151.21,429.549C1152.34,431.045 1153.41,432.582 1154.42,434.16C1155.8,436.295 1157.06,438.504 1158.19,440.777C1159.65,443.716 1160.89,446.763 1161.89,449.89C1163.27,454.209 1164.17,458.676 1164.57,463.192C1165.09,469.111 1164.73,475.1 1163.52,480.916C1162.61,485.23 1161.25,489.443 1159.47,493.475C1157.96,496.89 1156.16,500.174 1154.12,503.298C1153.3,504.554 1152.44,505.785 1151.54,506.989C1145.61,514.961 1138.16,521.699 1130.06,527.412C1124.81,531.117 1119.27,534.408 1113.58,537.386C1107.35,540.646 1100.93,543.534 1094.4,546.147C1086.73,549.218 1078.91,551.912 1071.01,554.33C1062.5,556.937 1053.89,559.222 1045.22,561.261C1034.15,563.866 1022.99,566.067 1011.77,567.954C998.741,570.147 985.637,571.914 972.497,573.33C958.469,574.841 944.397,575.95 930.308,576.703C914.923,577.525 899.516,577.923 884.109,577.923C868.703,577.923 853.295,577.525 837.911,576.703C823.821,575.95 809.75,574.841 795.721,573.33C782.582,571.914 769.478,570.147 756.445,567.954C745.232,566.067 734.069,563.866 722.999,561.261C714.332,559.222 705.72,556.937 697.206,554.33C689.308,551.912 681.489,549.218 673.82,546.147C667.293,543.533 660.871,540.646 654.64,537.387C648.947,534.409 643.411,531.117 638.159,527.412C630.061,521.7 622.611,514.963 616.679,506.992C615.783,505.788 614.923,504.557 614.102,503.301C612.059,500.176 610.26,496.891 608.752,493.475C606.973,489.442 605.603,485.227 604.701,480.911C603.486,475.096 603.126,469.11 603.647,463.192C604.044,458.675 604.953,454.205 606.333,449.885C607.331,446.759 608.575,443.712 610.035,440.773C611.163,438.502 612.421,436.296 613.791,434.163C614.805,432.584 615.881,431.046 617.012,429.549C617.892,428.385 618.804,427.246 619.747,426.133C625.754,419.04 632.945,413.022 640.652,407.858C641.77,407.109 642.9,406.377 644.04,405.662C645.613,404.675 647.207,403.719 648.817,402.792C651.033,401.516 653.281,400.295 655.554,399.123C658.643,397.53 661.779,396.026 664.95,394.6C669.208,392.685 673.528,390.909 677.892,389.247C683.705,387.033 689.595,385.022 695.534,383.17C703.595,380.658 711.746,378.44 719.951,376.451C726.188,374.939 732.456,373.558 738.748,372.292Z\"/>\n            </g>\n            <g transform=\"matrix(0.849949,0,0,0.849949,-532.408,-149.626)\">\n                <circle cx=\"882.732\" cy=\"463.109\" r=\"40.177\"/>\n            </g>\n        </g>\n    </g>\n</svg>\n"

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"128.1 125.4 49.2 49.2\" enable-background=\"new 128.1 125.4 49.2 49.2\" xml:space=\"preserve\">\n  <g id=\"atom\">\n  \t<g>\n  \t\t<g>\n  \t\t\t<circle fill=\"none\" stroke-width=\"3\" stroke-miterlimit=\"10\" cx=\"152.7\" cy=\"150\" r=\"21.6\"></circle>\n  \t\t\t<circle stroke=\"none\" fill=\"#BE6700\" cx=\"152.7\" cy=\"150\" r=\"12.4\"></circle>\n  \t\t</g>\n  \t\t<path stroke=\"none\" fill=\"#BE6700\" d=\"M175.1,136.6c0,2.9-2.4,5.3-5.3,5.3s-5.3-2.3-5.3-5.3c0-2.9,2.4-5.3,5.3-5.3\n  \t\t\tC172.7,131.3,175.1,133.7,175.1,136.6z\"></path>\n  \t</g>\n  </g>\n</svg>\n"

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32\" xml:space=\"preserve\" fill=\"none\">\n<line style=\"stroke-width:2;stroke-miterlimit:10\" x1=\"8\" y1=\"8\" x2=\"24\" y2=\"24\" fill=\"none\"/>\n<line style=\"stroke-width:2;stroke-miterlimit:10\" x1=\"24\" y1=\"8\" x2=\"8\" y2=\"24\" fill=\"none\"/>\n</svg>\n"

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.0//EN\" \"http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.0\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" enable-background=\"new 0 0 24 24\" xml:space=\"preserve\">\n<g stroke=\"none\">\n\t<path d=\"M18,8v12H9V8H18 M18,6H9C7.9,6,7,6.9,7,8v12c0,1.1,0.9,2,2,2h9c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6L18,6z\" stroke=\"none\"/>\n</g>\n<path d=\"M5,17V4h10V2H5C3.9,2,3,2.9,3,4v13H5z\" stroke=\"none\"/>\n</svg>\n"

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\r\n<svg version=\"1.0\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n\t viewBox=\"0 0 48 48\" enable-background=\"new 0 0 48 48\" xml:space=\"preserve\">\n<polygon stroke=\"none\" fill=\"#CFD8DC\" points=\"35,36 39,36 39,22 26,22 26,13 22,13 22,22 9,22 9,36 13,36 13,26 22,26 22,36 26,36 26,26 35,26\n\t\"/>\r\n<rect x=\"17\" y=\"6\" stroke=\"none\" fill=\"#3F51B5\" width=\"14\" height=\"10\"/>\n<rect x=\"32\" y=\"32\" stroke=\"none\" fill=\"#00BCD4\" width=\"10\" height=\"10\"/>\n<rect x=\"6\" y=\"32\" stroke=\"none\" fill=\"#00BCD4\" width=\"10\" height=\"10\"/>\n<rect x=\"19\" y=\"32\" stroke=\"none\" fill=\"#00BCD4\" width=\"10\" height=\"10\"/>\n</svg>\r\n"

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "<svg aria-hidden=\"true\" version=\"1.1\" viewBox=\"0 0 16 16\">\n<path fill-rule=\"evenodd\" d=\"M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z\" stroke=\"none\"/>\n</svg>\n"

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Слой_1\" x=\"0px\" y=\"0px\" width=\"50px\" height=\"50px\" viewBox=\"0 0 50 50\" enable-background=\"new 0 0 50 50\" xml:space=\"preserve\">\n<path d=\"M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3  c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z\" stroke=\"none\"/>\n</svg>\n"

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 50 50\" enable-background=\"new 0 0 50 50\" xml:space=\"preserve\" stroke=\"none\">\n<path d=\"M25,1C11.8,1,1,11.8,1,25c0,10.2,6.4,18.9,15.3,22.4c0.9-0.2,1.7-1,1.7-2V41h-2.6c-1.9,0-3.5-0.9-4.3-2.3  c-0.2-0.4-0.4-0.9-0.6-1.4c-0.4-1.1-0.9-2.3-1.9-3C8.2,34,8,33.4,8.1,32.9c0.2-0.5,0.7-0.9,1.6-0.8c1,0.1,2.5,1.2,3.4,2.4  c0.8,1,1.4,1.6,2.6,1.6h0.3c0.9,0,3.1,0,3.5-0.4l0,0c0.3-0.4,0.5-0.7,0.8-1c-6-1.2-9.4-4.7-9.4-10c0-1.8,0.5-3.6,1.6-5.2  c-0.4-1.5-1.3-5.4,0.6-7.1l0.3-0.3h0.4c2.6,0,4.5,1.1,5.7,2c3.5-1.3,7.5-1.3,11,0c1.1-0.9,3-2,5.7-2h0.4l0.3,0.3  c1.9,1.8,1,5.6,0.6,7.1c1,1.6,1.6,3.4,1.6,5.2c0,5.3-3.4,8.8-9.3,10c1.5,1.6,2.3,4,2.3,5.9v4.9c0,1,0.7,1.8,1.7,2  C42.6,43.9,49,35.2,49,25C49,11.8,38.2,1,25,1z\" stroke=\"none\"/>\n</svg>\n"

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24\" xml:space=\"preserve\" stroke=\"none\">\n<path d=\"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032  c0-3.331,2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2  C7.021,2,2.543,6.477,2.543,12c0,5.523,4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z\" stroke=\"none\"/>\n</svg>\n"

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" id=\"Слой_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t width=\"48px\" height=\"48px\" viewBox=\"0 0 48 48\" enable-background=\"new 0 0 48 48\" xml:space=\"preserve\">\n<path fill=\"#FF3D00\" stroke=\"none\" d=\"M32.635,8C29.027,8,25.855,9.828,24,12.597C22.145,9.828,18.973,8,15.365,8C9.641,8,5,12.598,5,18.269\n\tC5,28.487,21.15,33.411,24,40c2.85-6.589,19-11.428,19-21.731C43,12.598,38.359,8,32.635,8\"/>\n</svg>\n"

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg width=\"256px\" height=\"283px\" viewBox=\"0 0 256 283\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" preserveAspectRatio=\"xMidYMid\">\n\t<g>\n\t\t<path d=\"M239.972557,139.203 C239.972557,124.669 228.190557,112.887 213.656557,112.887 C212.721557,112.887 211.799557,112.937 210.890557,113.032 L247.035557,6.427 L93.431557,6.427 L129.525557,112.94 C128.996557,112.908 128.464557,112.887 127.926557,112.887 C113.392557,112.887 101.610557,124.669 101.610557,139.203 C101.610557,150.951 109.309557,160.897 119.936557,164.281 C114.323557,174.003 107.261557,182.759 99.243557,190.323 C88.340557,200.609 75.862557,208.408 62.367557,213.214 C46.299557,204.96 38.711557,186.602 45.558557,170.507 C46.331557,168.69 47.120557,166.847 47.875557,165.013 C59.515557,162.296 68.189557,151.86 68.189557,139.392 C68.189557,124.858 56.407557,113.076 41.873557,113.076 C27.338557,113.076 15.556557,124.858 15.556557,139.392 C15.556557,148.305 19.991557,156.176 26.769557,160.937 C20.255557,175.768 10.681557,191.288 7.69855701,209.276 C4.12355701,230.835 7.68755701,253.719 26.332557,266.642 C69.756557,296.738 116.892557,247.985 166.591557,235.729 C184.602557,231.287 204.373557,232.003 220.242557,222.812 C232.159557,215.91 240.015557,204.472 242.245557,191.63 C244.447557,178.944 241.236557,166.313 233.852557,156.071 C237.671557,151.503 239.972557,145.623 239.972557,139.203 L239.972557,139.203 Z M154.240557,139.296 C154.240557,139.265 154.243557,139.234 154.243557,139.203 C154.243557,129.659 149.161557,121.301 141.557557,116.688 L170.285557,58.597 L199.063557,117.304 C191.996557,122.022 187.339557,130.068 187.339557,139.203 C187.339557,139.395 187.350557,139.584 187.354557,139.775 L154.240557,139.296 L154.240557,139.296 Z\" stroke=\"none\" fill=\"#C63D14\"></path>\n\t\t<path d=\"M246.399036,139.203 C246.399036,123.218 234.882036,109.88 219.711036,107.031 L256.000036,0 L84.4660355,0 L120.810036,107.248 C106.167036,110.507 95.1830355,123.593 95.1830355,139.203 C95.1830355,150.926 101.378036,161.223 110.663036,167.009 C106.197036,173.662 100.901036,179.923 94.8320355,185.648 C85.2080355,194.728 74.4850355,201.614 62.9250355,206.144 C51.2820355,198.83 46.3600355,185.038 51.4720355,173.022 L51.8720355,172.082 C52.1220355,171.494 52.3730355,170.904 52.6230355,170.314 C65.4110355,165.855 74.6160355,153.682 74.6160355,139.392 C74.6160355,121.337 59.9270355,106.649 41.8720355,106.649 C23.8170355,106.649 9.12903553,121.337 9.12903553,139.392 C9.12903553,148.505 12.8740355,156.757 18.9020355,162.699 C17.8090355,165.029 16.6600355,167.397 15.4790355,169.823 C9.96703553,181.144 3.72003553,193.976 1.35703553,208.225 C-3.33596447,236.524 4.23303553,259.146 22.6700355,271.924 C33.8580355,279.678 45.2190355,282.728 56.6520355,282.727 C78.1810355,282.726 99.9580355,271.911 121.258036,261.331 C136.599036,253.712 152.461036,245.833 168.130036,241.969 C173.960036,240.531 179.959036,239.666 186.310036,238.75 C198.904036,236.933 211.928036,235.055 223.464036,228.374 C236.835036,220.629 245.989036,207.637 248.577036,192.73 C250.799036,179.933 248.124036,167.117 241.602036,156.247 C244.643036,151.279 246.399036,145.443 246.399036,139.203 L246.399036,139.203 Z M233.545036,139.203 C233.545036,150.17 224.623036,159.093 213.655036,159.093 C202.689036,159.093 193.766036,150.17 193.766036,139.203 C193.766036,128.236 202.689036,119.314 213.655036,119.314 C224.623036,119.314 233.545036,128.236 233.545036,139.203 L233.545036,139.203 Z M238.069036,12.854 L206.024036,107.367 C204.635036,107.7 203.281036,108.12 201.966036,108.625 L170.310036,44.047 L138.562036,108.243 C137.190036,107.77 135.778036,107.381 134.330036,107.093 L102.395036,12.854 L238.069036,12.854 L238.069036,12.854 Z M127.926036,119.314 C138.893036,119.314 147.815036,128.236 147.815036,139.203 C147.815036,150.17 138.893036,159.093 127.926036,159.093 C116.960036,159.093 108.037036,150.17 108.037036,139.203 C108.037036,128.236 116.960036,119.314 127.926036,119.314 L127.926036,119.314 Z M41.8720355,119.503 C52.8400355,119.503 61.7620355,128.425 61.7620355,139.392 C61.7620355,150.359 52.8400355,159.282 41.8720355,159.282 C30.9060355,159.282 21.9830355,150.359 21.9830355,139.392 C21.9830355,128.425 30.9060355,119.503 41.8720355,119.503 L41.8720355,119.503 Z M235.912036,190.531 C233.977036,201.679 227.091036,211.418 217.021036,217.25 C207.634036,222.687 196.385036,224.31 184.475036,226.027 C178.095036,226.947 171.497036,227.899 165.052036,229.489 C148.010036,233.691 131.503036,241.89 115.540036,249.819 C83.5950355,265.686 56.0060355,279.388 29.9930355,261.359 C10.9380355,248.153 11.8180355,223.718 14.0380355,210.328 C16.0950355,197.923 21.6570355,186.498 27.0360355,175.449 C27.9670355,173.537 28.8710355,171.664 29.7580355,169.803 C32.4260355,170.87 35.2630355,171.597 38.2200355,171.927 C32.7450355,189.998 41.3560355,209.646 59.4290355,218.931 L61.9020355,220.202 L64.5220355,219.269 C78.8100355,214.181 91.9750355,206.015 103.653036,194.998 C111.202036,187.877 117.689036,179.998 123.023036,171.579 C124.623036,171.82 126.260036,171.947 127.926036,171.947 C145.981036,171.947 160.670036,157.259 160.670036,139.203 C160.670036,129.493 156.417036,120.761 149.681036,114.759 L170.259036,73.147 L191.046036,115.552 C184.809036,121.518 180.912036,129.911 180.912036,139.203 C180.912036,157.259 195.600036,171.947 213.655036,171.947 C220.592036,171.947 227.027036,169.773 232.327036,166.079 C236.007036,173.612 237.378036,182.088 235.912036,190.531 L235.912036,190.531 Z\" stroke=\"none\" fill=\"#FFFFFF\"></path>\n\t</g>\n</svg>\n"

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg width=\"256px\" height=\"140px\" viewBox=\"0 0 256 140\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" preserveAspectRatio=\"xMidYMid\">\n\t<g>\n\t\t<path d=\"M190.317684,91.214 C185.491684,92.789 180.302684,93.273 175.261684,94.156 C173.889684,94.396 172.442684,94.182 171.056684,94.374 C160.303684,95.866 156.240684,100.173 154.721684,111.623 C153.913684,117.718 152.309684,123.511 148.811684,128.697 C142.901684,137.456 131.420684,141.431 121.594684,138.009 C111.076684,134.346 104.705684,124.759 105.555684,113.874 C106.320684,104.067 114.066684,95.403 124.945684,92.885 C130.038684,91.706 135.323684,91.245 140.549684,90.769 C150.304684,89.882 154.613684,85.605 156.238684,76.013 C157.173684,70.494 156.340684,65.287 155.116684,60.081 C153.247684,52.124 147.453684,48.427 137.726684,47.719 C132.418684,47.332 127.018684,46.562 121.939684,45.036 C111.247684,41.821 105.022684,32.539 105.515684,21.65 C105.947684,12.115 113.712684,2.831 123.039684,0.699 C134.089684,-1.828 145.090684,2.591 149.789684,12.432 C152.255684,17.596 153.610684,23.446 154.575684,29.137 C156.304684,39.341 160.358684,43.3 170.536684,44.406 C177.118684,45.122 183.825684,45.938 190.102684,47.902 C199.634684,50.885 205.360684,59.768 205.358684,69.64 C205.357684,79.297 199.447684,88.235 190.317684,91.214 Z\" stroke=\"none\" fill=\"#CF0920\"></path>\n\t\t<path d=\"M78.0720006,92.782 C65.2940006,92.784 54.8620006,82.355 54.8600006,69.579 C54.8580006,56.802 65.2870006,46.369 78.0630006,46.367 C90.8400006,46.365 101.272001,56.794 101.274001,69.57 C101.276001,82.347 90.8470006,92.78 78.0720006,92.782 Z\" stroke=\"none\" fill=\"#000000\"></path>\n\t\t<path d=\"M23.1300737,139.2 C10.3630737,139.168 -0.0319263159,128.703 7.36840638e-05,115.915 C0.0320736841,103.148 10.4960737,92.753 23.2840737,92.786 C36.0510737,92.817 46.4460737,103.282 46.4140737,116.07 C46.3820737,128.837 35.9180737,139.232 23.1300737,139.2 Z\" stroke=\"none\" fill=\"#000000\"></path>\n\t\t<path d=\"M232.962386,139.2 C220.162386,139.273 209.653386,128.92 209.580386,116.167 C209.507386,103.368 219.860386,92.858 232.613386,92.786 C245.412386,92.712 255.921386,103.064 255.995386,115.818 C256.068386,128.617 245.715386,139.127 232.962386,139.2 Z\" stroke=\"none\" fill=\"#000000\"></path>\n\t</g>\n</svg>\n"

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\" xmlns=\"http://www.w3.org/2000/svg\" height=\"780.18\" viewBox=\"0 0 875.02936 780.17639\" width=\"875.03\" version=\"1.1\" xmlns:cc=\"http://creativecommons.org/ns#\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\">\n <g stroke=\"none\" fill=\"#61dafb\">\n  <path d=\"m512.45 391.21a76.266 77.855 0 0 1 -76.266 77.855 76.266 77.855 0 0 1 -76.266 -77.855 76.266 77.855 0 0 1 76.266 -77.855 76.266 77.855 0 0 1 76.266 77.855z\"/>\n  <g fill-rule=\"evenodd\">\n   <path d=\"m277.8 477.26a437.52 180.08 59.793 0 1 -61.2 -466.18 437.52 180.08 59.793 0 1 376.3 291.6 437.52 180.08 59.793 0 1 61.2 466.18 437.52 180.08 59.793 0 1 -376.3 -291.6zm34.163-17.99a399.46 141.49 59.831 0 1 -75.73 -414.16 399.46 141.49 59.831 0 1 323.72 277.69 399.46 141.49 59.831 0 1 75.73 414.16 399.46 141.49 59.831 0 1 -323.72 -277.69z\"/>\n   <path d=\"m282.04 297.29a180.08 437.52 29.793 0 1 373.12 -286.09 180.08 437.52 29.793 0 1 -64.38 471.69 180.08 437.52 29.793 0 1 -373.12 286.09 180.08 437.52 29.793 0 1 64.38 -471.69zm32.661 20.591a141.49 399.46 29.831 0 1 320.81 -272.66 141.49 399.46 29.831 0 1 -78.63 419.19 141.49 399.46 29.831 0 1 -320.81 272.66 141.49 399.46 29.831 0 1 78.63 -419.19z\"/>\n   <path d=\"m440.7 210.54a180.08 437.52 89.793 0 1 434.32 180.09 180.08 437.52 89.793 0 1 -440.69 180.08 180.08 437.52 89.793 0 1 -434.32 -180.08 180.08 437.52 89.793 0 1 440.69 -180.09zm-1.5016 38.581a141.49 399.46 89.831 0 1 396.53 141.5 141.49 399.46 89.831 0 1 -402.35 141.5 141.49 399.46 89.831 0 1 -396.53 -141.5 141.49 399.46 89.831 0 1 402.35 -141.5z\"/>\n  </g>\n </g>\n</svg>\n"

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\">\n  <g stroke=\"none\" fill=\"#764ABC\">\n    <path d=\"M65.6 65.4c2.9-.3 5.1-2.8 5-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 1.5.7 2.8 1.6 3.7-3.4 6.7-8.6 11.6-16.4 15.7-5.3 2.8-10.8 3.8-16.3 3.1-4.5-.6-8-2.6-10.2-5.9-3.2-4.9-3.5-10.2-.8-15.5 1.9-3.8 4.9-6.6 6.8-8-.4-1.3-1-3.5-1.3-5.1-14.5 10.5-13 24.7-8.6 31.4 3.3 5 10 8.1 17.4 8.1 2 0 4-.2 6-.7 12.8-2.5 22.5-10.1 28-21.4z\"/>\n    <path d=\"M83.2 53c-7.6-8.9-18.8-13.8-31.6-13.8H50c-.9-1.8-2.8-3-4.9-3h-.2c-3.1.1-5.5 2.7-5.4 5.8.1 3 2.6 5.4 5.6 5.4h.2c2.2-.1 4.1-1.5 4.9-3.4H52c7.6 0 14.8 2.2 21.3 6.5 5 3.3 8.6 7.6 10.6 12.8 1.7 4.2 1.6 8.3-.2 11.8-2.8 5.3-7.5 8.2-13.7 8.2-4 0-7.8-1.2-9.8-2.1-1.1 1-3.1 2.6-4.5 3.6 4.3 2 8.7 3.1 12.9 3.1 9.6 0 16.7-5.3 19.4-10.6 2.9-5.8 2.7-15.8-4.8-24.3z\"/>\n    <path d=\"M32.4 67.1c.1 3 2.6 5.4 5.6 5.4h.2c3.1-.1 5.5-2.7 5.4-5.8-.1-3-2.6-5.4-5.6-5.4h-.2c-.2 0-.5 0-.7.1-4.1-6.8-5.8-14.2-5.2-22.2.4-6 2.4-11.2 5.9-15.5 2.9-3.7 8.5-5.5 12.3-5.6 10.6-.2 15.1 13 15.4 18.3 1.3.3 3.5 1 5 1.5-1.2-16.2-11.2-24.6-20.8-24.6-9 0-17.3 6.5-20.6 16.1-4.6 12.8-1.6 25.1 4 34.8-.5.7-.8 1.8-.7 2.9z\"/>\n  </g>\n</svg>\n"

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 1200\">\n<title>icon-square-big</title>\n<path stroke=\"none\" fill=\"#FFF\" d=\"M600 0l530.3 300v600L600 1200 69.7 900V300z\"/>\n<path stroke=\"none\" fill=\"#8ED6FB\" class=\"st1\" d=\"M1035.6 879.3l-418.1 236.5V931.6L878 788.3l157.6 91zm28.6-25.9V358.8l-153 88.3V765l153 88.4zm-901.5 25.9l418.1 236.5V931.6L320.3 788.3l-157.6 91zm-28.6-25.9V358.8l153 88.3V765l-153 88.4zM152 326.8L580.8 84.2v178.1L306.1 413.4l-2.1 1.2-152-87.8zm894.3 0L617.5 84.2v178.1l274.7 151.1 2.1 1.2 152-87.8z\"/>\n<path stroke=\"none\" fill=\"#1C78C0\" d=\"M580.8 889.7l-257-141.3v-280l257 148.4v272.9zm36.7 0l257-141.3v-280l-257 148.4v272.9zm-18.3-283.6zM341.2 436l258-141.9 258 141.9-258 149-258-149z\"/>\n</svg>\n"

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./atoms/Button/index.js": 28,
	"./atoms/Heading/index.js": 29,
	"./atoms/Icon/index.js": 30,
	"./molecules/IconButton/index.js": 31,
	"./molecules/Modal/index.js": 32,
	"./organisms/LoginModal/index.js": 33,
	"./organisms/UserButton/index.js": 34,
	"./pages/HomePage/index.js": 35
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
webpackContext.id = 63;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./arc.svg": 48,
	"./atomic-design.svg": 49,
	"./close.svg": 50,
	"./copy.svg": 51,
	"./dist.svg": 52,
	"./docs.svg": 53,
	"./facebook.svg": 54,
	"./github.svg": 55,
	"./google.svg": 56,
	"./heart.svg": 57,
	"./jest.svg": 58,
	"./react-router.svg": 59,
	"./react.svg": 60,
	"./redux.svg": 61,
	"./webpack.svg": 62
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
webpackContext.id = 64;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./LoginModal.js": 37,
	"./Modal.js": 38,
	"./UserButton.js": 39
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
webpackContext.id = 65;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modal/actions.js": 13,
	"./social/actions.js": 10
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
webpackContext.id = 66;

/***/ }),
/* 67 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 67;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modal/reducer.js": 43,
	"./social/reducer.js": 46
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
webpackContext.id = 68;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./social/sagas.js": 47
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
webpackContext.id = 69;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modal/selectors.js": 14,
	"./social/selectors.js": 15
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
webpackContext.id = 70;

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("lodash/camelCase");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("lodash/upperFirst");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom/Link");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("react-router-server");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = require("simple-load-script");

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("styled-theme/composer");

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ })
/******/ ]);