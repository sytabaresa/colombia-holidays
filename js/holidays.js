var holidays =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

'user strict';
/**
 * @module colombia-holidays
 * @description Días festivos no laborables en Colombia. Calculados con base en la ley 51 de 1983
 * @author      <escatano@bancolombia.com.co>
 * @version     0.0.1                 
 * @since       2017-04-24
 * @lastModified 2017-04-25
 * @example
 * npm install colombia-holidays
 * var module = require('colombia-holidays');
*/

module.exports = {
  /* Las funciones que expone el modulo van aqui   */
  getColombiaHolidaysByYear: getColombiaHolidaysByYear
};

var holidays = __webpack_require__(1);
var MILLISECONDS_DAY = 86400000;

/** 
 * @function
 * @description Devuelve la lista de festivos no laborables en Colombia para un año
 * @param {int} year Año entre 1970 y 99999 para el que se desea obtener la lista de festivos
 * @return {array} Arreglo con la lista de festivos para el año ingresado
 * @example
 * //Invocación
 * var array = module.getColombiaHolidaysByYear(2017);
 * // Lista de retorno
 * [ { holiday: '2017-01-01',
 *   celebrationDay: '2017-01-01',
 *   celebration: 'Año Nuevo' },
 * { holiday: '2017-01-09',
 *   celebrationDay: '2017-01-06',
 *   celebration: 'Día de los Reyes Magos' },
 * { holiday: '2017-03-20',
 *   celebrationDay: '2017-03-19',
 *   celebration: 'Día de San José' },
 * { holiday: '2017-04-13',
 *   celebrationDay: '2017-04-13',
 *   celebration: 'Jueves Santo' },
 * { holiday: '2017-04-14',
 *   celebrationDay: '2017-04-14',
 *   celebration: 'Viernes Santo' },
 * { holiday: '2017-05-01',
 *   celebrationDay: '2017-05-01',
 *   celebration: 'Día del Trabajo' },
 * { holiday: '2017-05-29',
 *   celebrationDay: '2017-05-25',
 *   celebration: 'Ascensión del Señor' },
 * { holiday: '2017-06-19',
 *   celebrationDay: '2017-06-15',
 *   celebration: 'Corphus Christi' },
 * { holiday: '2017-06-26',
 *   celebrationDay: '2017-06-23',
 *   celebration: 'Sagrado Corazón de Jesús' },
 * { holiday: '2017-07-03',
 *   celebrationDay: '2017-06-29',
 *   celebration: 'San Pedro y San Pablo' },
 * { holiday: '2017-07-20',
 *   celebrationDay: '2017-07-20',
 *   celebration: 'Día de la Independencia' },
 * { holiday: '2017-08-07',
 *   celebrationDay: '2017-08-07',
 *   celebration: 'Batalla de Boyacá' },
 * { holiday: '2017-08-21',
 *   celebrationDay: '2017-08-15',
 *   celebration: 'La Asunción de la Virgen' },
 * { holiday: '2017-10-16',
 *   celebrationDay: '2017-10-12',
 *   celebration: 'Día de la Raza' },
 * { holiday: '2017-11-06',
 *   celebrationDay: '2017-11-01',
 *   celebration: 'Todos los Santos' },
 * { holiday: '2017-11-13',
 *   celebrationDay: '2017-11-11',
 *   celebration: 'Independencia de Cartagena' },
 * { holiday: '2017-12-08',
 *   celebrationDay: '2017-12-08',
 *   celebration: 'Día de la Inmaculada Concepción' },
 * { holiday: '2017-12-25',
 *   celebrationDay: '2017-12-25',
 *   celebration: 'Día de Navidad' } ]
*/
function getColombiaHolidaysByYear(year) {
  if (!year) {
    throw 'No year provided';
  } else {
    year = year.toString();
    if (!year.match(/^\d*$/g)) {
      throw 'The year is not a number';
    } else if (year < 1970 || year > 99999) {
      throw 'The year should be greater to 1969 and smaller to 100000';
    } else {
      var normalHolidays = holidays.HOLIDAYS.map(function (element, index, array) {
        return {
          holiday: nextDay(year.toString().concat('-').concat(element.day), element.daysToSum),
          celebrationDay: year.toString().concat('-').concat(element.day),
          celebration: element.celebration
        };
      });
      var sunday = new Date(butcherAlgorithm(year));
      var easterWeekHolidays = holidays.EASTER_WEEK_HOLIDAYS.map(function (element, index, array) {
        var day = new Date(sunday.getTime() + element.day * MILLISECONDS_DAY);
        return {
          holiday: nextDay(getFormattedDate(day.getUTCFullYear(), day.getUTCMonth() + 1, day.getUTCDate()), element.daysToSum),
          celebrationDay: getFormattedDate(day.getUTCFullYear(), day.getUTCMonth() + 1, day.getUTCDate()),
          celebration: element.celebration
        };
      });
      return normalHolidays.concat(easterWeekHolidays).sort(function (a, b) {
        return new Date(a.holiday) - new Date(b.holiday);
      });
      ;
    }
  }
}

function butcherAlgorithm(year) {
  var year = parseInt(year);
  var A = year % 19;
  var B = Math.floor(year / 100);
  var C = year % 100;
  var D = Math.floor(B / 4);
  var E = B % 4;
  var F = Math.floor((B + 8) / 25);
  var G = Math.floor((B - F + 1) / 3);
  var H = (19 * A + B - D - G + 15) % 30;
  var I = Math.floor(C / 4);
  var K = C % 4;
  var L = (32 + 2 * E + 2 * I - H - K) % 7;
  var M = Math.floor((A + 11 * H + 22 * L) / 451);
  var N = H + L - 7 * M + 114;
  var month = Math.floor(N / 31);
  var day = 1 + N % 31;
  return getFormattedDate(year, month, day);
}

function nextDay(day, sum) {
  var date = new Date(day);
  var newDate = sum === 7 ? date : new Date(date.getTime() + (7 + sum - date.getUTCDay()) % 7 * MILLISECONDS_DAY);
  return getFormattedDate(newDate.getUTCFullYear(), newDate.getUTCMonth() + 1, newDate.getUTCDate());
}

function addZero(number) {
  number = number.toString();
  if (number > 0 && number < 10 && !number.startsWith('0')) {
    return '0'.concat(number);
  } else {
    return number;
  }
}

function getFormattedDate(year, month, day) {
  return year.toString().concat('-').concat(addZero(month)).concat('-').concat(addZero(day));
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var NEXT_DAY = __webpack_require__(2);

var EASTER_WEEK_HOLIDAYS = [{ day: -3, daysToSum: NEXT_DAY.NONE, celebration: 'Jueves Santo' }, { day: -2, daysToSum: NEXT_DAY.NONE, celebration: 'Viernes Santo' }, { day: 39, daysToSum: NEXT_DAY.MONDAY, celebration: 'Ascensión del Señor' }, { day: 60, daysToSum: NEXT_DAY.MONDAY, celebration: 'Corphus Christi' }, { day: 68, daysToSum: NEXT_DAY.MONDAY, celebration: 'Sagrado Corazón de Jesús' }];

var HOLIDAYS = [{ day: '01-01', daysToSum: NEXT_DAY.NONE, celebration: 'Año Nuevo' }, { day: '05-01', daysToSum: NEXT_DAY.NONE, celebration: 'Día del Trabajo' }, { day: '07-20', daysToSum: NEXT_DAY.NONE, celebration: 'Día de la Independencia' }, { day: '08-07', daysToSum: NEXT_DAY.NONE, celebration: 'Batalla de Boyacá' }, { day: '12-08', daysToSum: NEXT_DAY.NONE, celebration: 'Día de la Inmaculada Concepción' }, { day: '12-25', daysToSum: NEXT_DAY.NONE, celebration: 'Día de Navidad' }, { day: '01-06', daysToSum: NEXT_DAY.MONDAY, celebration: 'Día de los Reyes Magos' }, { day: '03-19', daysToSum: NEXT_DAY.MONDAY, celebration: 'Día de San José' }, { day: '06-29', daysToSum: NEXT_DAY.MONDAY, celebration: 'San Pedro y San Pablo' }, { day: '08-15', daysToSum: NEXT_DAY.MONDAY, celebration: 'La Asunción de la Virgen' }, { day: '10-12', daysToSum: NEXT_DAY.MONDAY, celebration: 'Día de la Raza' }, { day: '11-01', daysToSum: NEXT_DAY.MONDAY, celebration: 'Todos los Santos' }, { day: '11-11', daysToSum: NEXT_DAY.MONDAY, celebration: 'Independencia de Cartagena' }];

module.exports = {
    EASTER_WEEK_HOLIDAYS: EASTER_WEEK_HOLIDAYS,
    HOLIDAYS: HOLIDAYS
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var NEXT_DAY = {
    SUNDAY: 0,
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
    FRIDAY: 5,
    SATURDAY: 6,
    NONE: 7
};

module.exports = NEXT_DAY;

/***/ })
/******/ ]);