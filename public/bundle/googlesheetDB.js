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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/googlesheetdb.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/googlesheetdb.js":
/*!**********************************!*\
  !*** ./scripts/googlesheetdb.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// ID of the Google Spreadsheet\nvar spreadsheetID = \"1qIfiLcAItVaWwO-HRh_nyMR8vi1FZTtCGK9HASWvRvI\";\n\n// Make sure it is public or set to Anyone with link can view \nvar url = \"https://spreadsheets.google.com/feeds/list/\" + spreadsheetID + \"/od6/public/values?alt=json\";\n//Pure Javascript way to read JSON files\n\nvar xmlhttp = new XMLHttpRequest();\n//Use XMLHttpRequest (XHR) objects to interact with servers. \n//You can retrieve data from a URL without having to do a full page refresh.\n\n//You can retrieve data from a URL without having to do a full page refresh.\nxmlhttp.open('GET', url, true);\nxmlhttp.onreadystatechange = function () {\n    if (xmlhttp.readyState == 4) {\n        //Possible Values are:\n        //XMLHttpRequest.readyState == 0; UNSENT\n        //XMLHttpRequest.readyState == 1; OPENED\n        //XMLHttpRequest.readyState == 2; HEADERS_RECEIVED\n        //XMLHttpRequest.readyState == 3; LOADING\n        //XMLHttpRequest.readyState == 4; DONE\n\n        if (xmlhttp.status == 200) {\n            var data = JSON.parse(xmlhttp.responseText);\n            var entry = data.feed.entry;\n            //Vue.js script to process data\n            var googleSheetApp = new Vue({\n                el: '#googleSheetDB',\n                data: {\n                    googleSheetItems: entry\n                }\n            });\n        }\n    }\n};\nxmlhttp.send(null);\n\n//# sourceURL=webpack:///./scripts/googlesheetdb.js?");

/***/ })

/******/ });