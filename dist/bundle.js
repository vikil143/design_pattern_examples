/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_0__, __WEBPACK_LOCAL_MODULE_0__exports;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_1__, __WEBPACK_LOCAL_MODULE_1__exports;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_2__, __WEBPACK_LOCAL_MODULE_2__exports;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_3__, __WEBPACK_LOCAL_MODULE_3__exports;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_4__, __WEBPACK_LOCAL_MODULE_4__exports;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_5__, __WEBPACK_LOCAL_MODULE_5__exports;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __rest = (this && this.__rest) || function (s, e) {\n    var t = {};\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\n        t[p] = s[p];\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\n                t[p[i]] = s[p[i]];\n        }\n    return t;\n};\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_LOCAL_MODULE_0__ = (function (require, exports) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n    exports.CEO = void 0;\n    exports.CEO = {\n        name: \"Vikil Lakkavatri\",\n        id: 1,\n        salary: 10000000,\n        role: \"CEO\",\n        gender: \"Male\",\n    };\n}).apply(__WEBPACK_LOCAL_MODULE_0__exports = {}, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_LOCAL_MODULE_0__ === undefined && (__WEBPACK_LOCAL_MODULE_0__ = __WEBPACK_LOCAL_MODULE_0__exports));\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'organization/controllers/employees'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_LOCAL_MODULE_1__ = (function (require, exports, employees_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n    exports.Employee = void 0;\n    var Employee = (function () {\n        function Employee(id, name, gender, role, salary) {\n            this.id = id;\n            this.name = name;\n            this.gender = gender;\n            this.role = role;\n            this.salary = salary;\n        }\n        Employee.prototype.doingTask = function () {\n            throw new Error(\"Method not implemented.\");\n        };\n        Employee.prototype.addEmployee = function (employee) {\n            employees_1.employees.addEmployee(employee);\n        };\n        return Employee;\n    }());\n    exports.Employee = Employee;\n}).apply(__WEBPACK_LOCAL_MODULE_1__exports = {}, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_LOCAL_MODULE_1__ === undefined && (__WEBPACK_LOCAL_MODULE_1__ = __WEBPACK_LOCAL_MODULE_1__exports));\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __WEBPACK_LOCAL_MODULE_0__], __WEBPACK_LOCAL_MODULE_2__ = (function (require, exports, types_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n    exports.employees = void 0;\n    var Employees = (function () {\n        function Employees() {\n            this.staff = [types_1.CEO];\n        }\n        Employees.prototype.addEmployee = function (employee) {\n            this.staff.push(employee);\n            console.log(\"Congrates you're hired, \", employee.name);\n        };\n        Employees.prototype.removeEmployee = function (employeeId) {\n            this.staff.filter(function (employee) { return employee.id !== employeeId; });\n        };\n        Employees.prototype.printEmployeelist = function () {\n            this.staff.forEach(function (item, index) {\n                console.log(index + 1, \") \" + item.name, \"has role was \" + item.role, \" has salary was\", item.salary);\n            });\n        };\n        return Employees;\n    }());\n    var employees = new Employees();\n    exports.employees = employees;\n}).apply(__WEBPACK_LOCAL_MODULE_2__exports = {}, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_LOCAL_MODULE_2__ === undefined && (__WEBPACK_LOCAL_MODULE_2__ = __WEBPACK_LOCAL_MODULE_2__exports));\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __WEBPACK_LOCAL_MODULE_1__], __WEBPACK_LOCAL_MODULE_3__ = (function (require, exports, employee_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n    exports.Staff = void 0;\n    var Staff = (function (_super) {\n        __extends(Staff, _super);\n        function Staff() {\n            return _super !== null && _super.apply(this, arguments) || this;\n        }\n        Staff.prototype.doingTask = function () {\n            console.log(\"Lot's of work yes we are doing the task!!! -\", this.name);\n        };\n        return Staff;\n    }(employee_1.Employee));\n    exports.Staff = Staff;\n}).apply(__WEBPACK_LOCAL_MODULE_3__exports = {}, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_LOCAL_MODULE_3__ === undefined && (__WEBPACK_LOCAL_MODULE_3__ = __WEBPACK_LOCAL_MODULE_3__exports));\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __WEBPACK_LOCAL_MODULE_3__], __WEBPACK_LOCAL_MODULE_4__ = (function (require, exports, Staff_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n    exports.createUser = void 0;\n    var createUser = function (_a) {\n        var employee = __rest(_a, []);\n        return new Staff_1.Staff(employee.id, employee.name, employee.gender, employee.role, employee.salary);\n    };\n    exports.createUser = createUser;\n}).apply(__WEBPACK_LOCAL_MODULE_4__exports = {}, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_LOCAL_MODULE_4__ === undefined && (__WEBPACK_LOCAL_MODULE_4__ = __WEBPACK_LOCAL_MODULE_4__exports));\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __WEBPACK_LOCAL_MODULE_2__, __WEBPACK_LOCAL_MODULE_4__], __WEBPACK_LOCAL_MODULE_5__ = (function (require, exports, employees_2, create_user_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n    var Task = (function () {\n        function Task() {\n        }\n        return Task;\n    }());\n    var Salary = (function () {\n        function Salary() {\n        }\n        return Salary;\n    }());\n    function main() {\n        var hrLata = (0, create_user_1.createUser)({\n            id: 2,\n            name: \"Lata\",\n            gender: \"Female\",\n            role: \"HR\",\n            salary: 10000,\n        });\n        employees_2.employees.addEmployee(hrLata);\n        var emMamta = (0, create_user_1.createUser)({\n            id: 1,\n            name: \"Mamta\",\n            gender: \"Female\",\n            role: \"Employee\",\n            salary: 15000,\n        });\n        var emRama = (0, create_user_1.createUser)({\n            id: 1,\n            name: \"Rama\",\n            gender: \"Male\",\n            role: \"Employee\",\n            salary: 15000,\n        });\n        hrLata.addEmployee(emMamta);\n        hrLata.addEmployee(emRama);\n        employees_2.employees.printEmployeelist();\n        emMamta.doingTask();\n        emRama.doingTask();\n    }\n    exports[\"default\"] = main;\n}).apply(__WEBPACK_LOCAL_MODULE_5__exports = {}, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_LOCAL_MODULE_5__ === undefined && (__WEBPACK_LOCAL_MODULE_5__ = __WEBPACK_LOCAL_MODULE_5__exports));\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __WEBPACK_LOCAL_MODULE_5__], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, index_1) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n    (0, index_1.default)();\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack://designpatterns/./index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;