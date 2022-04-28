"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/categories";
exports.ids = ["pages/api/categories"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/categories/index.js":
/*!***************************************!*\
  !*** ./pages/api/categories/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ categoryList)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function categoryList(req, res) {\n    try {\n        if (req.method === \"GET\") {\n            if (req.query.id) {\n                const foundedCategory = await prisma.category.findFirst({\n                    where: {\n                        id: +req.query.id,\n                        deleted: false\n                    }\n                });\n                if (!foundedCategory) return res.status(400).send({\n                    message: \"Category not found!\"\n                });\n                return res.status(200).send(foundedCategory);\n            }\n            const foundedCategories = await prisma.category.findMany({\n                where: {\n                    deleted: false\n                }\n            });\n            if (foundedCategories.length < 1) return res.status(200).send({\n                message: \"Categories not found\"\n            });\n            res.status(200).send(foundedCategories);\n        }\n    } catch (error) {\n        res.status(500).send(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2F0ZWdvcmllcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFDN0MsS0FBSyxDQUFDQyxNQUFNLEdBQUcsR0FBRyxDQUFDRCx3REFBWTtBQUNoQixlQUFlRSxZQUFZLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDcEQsR0FBRyxDQUFDLENBQUM7UUFDSCxFQUFFLEVBQUVELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLENBQUssTUFBRSxDQUFDO1lBQ3pCLEVBQUUsRUFBRUYsR0FBRyxDQUFDRyxLQUFLLENBQUNDLEVBQUUsRUFBRSxDQUFDO2dCQUNqQixLQUFLLENBQUNDLGVBQWUsR0FBRyxLQUFLLENBQUNQLE1BQU0sQ0FBQ1EsUUFBUSxDQUFDQyxTQUFTLENBQUMsQ0FBQztvQkFDdkRDLEtBQUssRUFBRSxDQUFDO3dCQUNOSixFQUFFLEdBQUdKLEdBQUcsQ0FBQ0csS0FBSyxDQUFDQyxFQUFFO3dCQUNqQkssT0FBTyxFQUFFLEtBQUs7b0JBQ2hCLENBQUM7Z0JBQ0gsQ0FBQztnQkFDRCxFQUFFLEdBQUdKLGVBQWUsRUFDbEIsTUFBTSxDQUFDSixHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO29CQUFDQyxPQUFPLEVBQUUsQ0FBcUI7Z0JBQUMsQ0FBQztnQkFDaEUsTUFBTSxDQUFDWCxHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ04sZUFBZTtZQUM3QyxDQUFDO1lBQ0QsS0FBSyxDQUFDUSxpQkFBaUIsR0FBRyxLQUFLLENBQUNmLE1BQU0sQ0FBQ1EsUUFBUSxDQUFDUSxRQUFRLENBQUMsQ0FBQztnQkFDeEROLEtBQUssRUFBRSxDQUFDO29CQUFDQyxPQUFPLEVBQUUsS0FBSztnQkFBQyxDQUFDO1lBQzNCLENBQUM7WUFDRCxFQUFFLEVBQUVJLGlCQUFpQixDQUFDRSxNQUFNLEdBQUcsQ0FBQyxFQUM5QixNQUFNLENBQUNkLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7Z0JBQUNDLE9BQU8sRUFBRSxDQUFzQjtZQUFDLENBQUM7WUFDakVYLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDRSxpQkFBaUI7UUFDeEMsQ0FBQztJQUNILENBQUMsQ0FBQyxLQUFLLEVBQUVHLEtBQUssRUFBRSxDQUFDO1FBQ2ZmLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDSyxLQUFLO0lBQzVCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZW50ZXJwcmlzZS8uL3BhZ2VzL2FwaS9jYXRlZ29yaWVzL2luZGV4LmpzPzI3YzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY2F0ZWdvcnlMaXN0KHJlcSwgcmVzKSB7XHJcbiAgdHJ5IHtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XHJcbiAgICAgIGlmIChyZXEucXVlcnkuaWQpIHtcclxuICAgICAgICBjb25zdCBmb3VuZGVkQ2F0ZWdvcnkgPSBhd2FpdCBwcmlzbWEuY2F0ZWdvcnkuZmluZEZpcnN0KHtcclxuICAgICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICAgIGlkOiArcmVxLnF1ZXJ5LmlkLFxyXG4gICAgICAgICAgICBkZWxldGVkOiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKCFmb3VuZGVkQ2F0ZWdvcnkpXHJcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBcIkNhdGVnb3J5IG5vdCBmb3VuZCFcIiB9KTtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoZm91bmRlZENhdGVnb3J5KTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBmb3VuZGVkQ2F0ZWdvcmllcyA9IGF3YWl0IHByaXNtYS5jYXRlZ29yeS5maW5kTWFueSh7XHJcbiAgICAgICAgd2hlcmU6IHsgZGVsZXRlZDogZmFsc2UgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChmb3VuZGVkQ2F0ZWdvcmllcy5sZW5ndGggPCAxKVxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IG1lc3NhZ2U6IFwiQ2F0ZWdvcmllcyBub3QgZm91bmRcIiB9KTtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoZm91bmRlZENhdGVnb3JpZXMpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuc2VuZChlcnJvcik7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJjYXRlZ29yeUxpc3QiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJxdWVyeSIsImlkIiwiZm91bmRlZENhdGVnb3J5IiwiY2F0ZWdvcnkiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsImRlbGV0ZWQiLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSIsImZvdW5kZWRDYXRlZ29yaWVzIiwiZmluZE1hbnkiLCJsZW5ndGgiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/categories/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/categories/index.js"));
module.exports = __webpack_exports__;

})();