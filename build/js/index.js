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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libraries_AryJs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _php_actions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _IO_elements_elements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);



var html_registration = `
<h1>Register</h1>
<div class="form-group">
  <label for="login">Login:</label>
  <input type="text" class="form-control" id="login">
</div>
<div class="form-group">
  <label for="pwd">Password:</label>
  <input type="password" class="form-control" id="psw">
</div>
<div class="form-group form-check">
</div>
<button id="submit" type="submit" class="btn btn-primary">Register</button>
`;
var html_logIn = `<h1>Log In</h1>
<div class="form-group">
  <label for="login">Login:</label>
  <input type="email" class="form-control" id="login">
</div>
<div class="form-group">
  <label for="pwd">Password:</label>
  <input type="password" class="form-control" id="psw">
</div>
<div class="form-group form-check">
</div>
<button id="submit" type="submit" class="btn btn-primary">Log In</button>
`;

function register() {
  var login = document.getElementById("login").value;
  var psw = document.getElementById("psw").value;
  _php_actions_js__WEBPACK_IMPORTED_MODULE_1__["default"].register(login, psw);
}

function openRegistration() {
  _libraries_AryJs_js__WEBPACK_IMPORTED_MODULE_0__["default"].showhtml(_IO_elements_elements_js__WEBPACK_IMPORTED_MODULE_2__["default"].html_registration, "display_window");
  document.getElementById("submit").addEventListener("click", register);
}

function openlogin() {
  _libraries_AryJs_js__WEBPACK_IMPORTED_MODULE_0__["default"].showhtml(_IO_elements_elements_js__WEBPACK_IMPORTED_MODULE_2__["default"].html_logIn, "display_window");
  document.getElementById("submit").addEventListener("click", login);
}

function login() {
  var login = document.getElementById("login").value;
  var psw = document.getElementById("psw").value;
  _php_actions_js__WEBPACK_IMPORTED_MODULE_1__["default"].login(login, psw);
}

(function start() {
  document.getElementById("registr_btn").addEventListener("click", openRegistration);
  document.getElementById("login_btn").addEventListener("click", openlogin);
})();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const AryLyb = {
  showhtml: function (htmlObject, id) {
    let object = document.getElementById(id);
    object.innerHTML = htmlObject;
  },
  arrayToHtml: function (arr) {
    var i = 0;
    let htmlCode = "";

    (function () {
      while (arr[i]) {
        htmlCode += arr[i];
        i++;
      }
    })();

    return htmlCode;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AryLyb);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var php = {
  login: function (login, psw) {
    console.log("start");
    var required = new XMLHttpRequest();
    required.open("POST", "/js/php/login/login.php?login=" + login + "&psw=" + psw, true);
    required.send();

    required.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log("Calback LOG"); //cFunction(this);                         
      }
    };
  },
  register: function (login, psw) {
    var required = new XMLHttpRequest();
    required.open("POST", "/js/php/login/register.php?login=" + login + "&psw=" + psw, true);
    required.send();

    required.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log("Calback send r"); //document.getElementById("error").innerHTML = this.responseText;
        //cFunction(this);
      }
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (php);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var IOelements = {
  html_registration: `
<h1>Register</h1>
<div class="form-group">
  <label for="login">Login:</label>
  <input type="text" class="form-control" id="login">
</div>
<div class="form-group">
  <label for="pwd">Password:</label>
  <input type="password" class="form-control" id="psw">
</div>
<div class="form-group form-check">
</div>
<button id="submit" type="submit" class="btn btn-primary">Register</button>
`,
  html_logIn: `<h1>Log In</h1>
<div class="form-group">
  <label for="login">Login:</label>
  <input type="email" class="form-control" id="login">
</div>
<div class="form-group">
  <label for="pwd">Password:</label>
  <input type="password" class="form-control" id="psw">
</div>
<div class="form-group form-check">
</div>
<button id="submit" type="submit" class="btn btn-primary">Log In</button>
`
};
/* harmony default export */ __webpack_exports__["default"] = (IOelements);

/***/ })
/******/ ]);