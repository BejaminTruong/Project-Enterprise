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
exports.id = "pages/api/roles";
exports.ids = ["pages/api/roles"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/roles/index.js":
/*!**********************************!*\
  !*** ./pages/api/roles/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ roleList)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function roleList(req, res) {\n    try {\n        if (req.method === \"GET\") {\n            if (req.query.id) {\n                const foundedRole = await prisma.role.findFirst({\n                    where: {\n                        id: +req.query.id,\n                        deleted: false\n                    }\n                });\n                if (!foundedRole) return res.status(400).send({\n                    message: \"Role not found!\"\n                });\n                return res.status(200).send(foundedRole);\n            }\n            const foundedRoles = await prisma.role.findMany({\n                where: {\n                    deleted: false\n                }\n            });\n            if (foundedRoles.length < 1) return res.status(200).send({\n                message: \"Roles not found\"\n            });\n            res.status(200).send(foundedRoles);\n        }\n    } catch (error) {\n        res.status(500).send(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcm9sZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBQzdDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEdBQUcsQ0FBQ0Qsd0RBQVk7QUFDaEIsZUFBZUUsUUFBUSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQ2hELEdBQUcsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxFQUFFRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxDQUFLLE1BQUUsQ0FBQztZQUN6QixFQUFFLEVBQUVGLEdBQUcsQ0FBQ0csS0FBSyxDQUFDQyxFQUFFLEVBQUUsQ0FBQztnQkFDakIsS0FBSyxDQUFDQyxXQUFXLEdBQUcsS0FBSyxDQUFDUCxNQUFNLENBQUNRLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7b0JBQy9DQyxLQUFLLEVBQUUsQ0FBQzt3QkFDTkosRUFBRSxHQUFHSixHQUFHLENBQUNHLEtBQUssQ0FBQ0MsRUFBRTt3QkFDakJLLE9BQU8sRUFBRSxLQUFLO29CQUNoQixDQUFDO2dCQUNILENBQUM7Z0JBQ0QsRUFBRSxHQUFHSixXQUFXLEVBQ2QsTUFBTSxDQUFDSixHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO29CQUFDQyxPQUFPLEVBQUUsQ0FBaUI7Z0JBQUMsQ0FBQztnQkFDNUQsTUFBTSxDQUFDWCxHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ04sV0FBVztZQUN6QyxDQUFDO1lBQ0QsS0FBSyxDQUFDUSxZQUFZLEdBQUcsS0FBSyxDQUFDZixNQUFNLENBQUNRLElBQUksQ0FBQ1EsUUFBUSxDQUFDLENBQUM7Z0JBQy9DTixLQUFLLEVBQUUsQ0FBQztvQkFBQ0MsT0FBTyxFQUFFLEtBQUs7Z0JBQUMsQ0FBQztZQUMzQixDQUFDO1lBQ0QsRUFBRSxFQUFFSSxZQUFZLENBQUNFLE1BQU0sR0FBRyxDQUFDLEVBQ3pCLE1BQU0sQ0FBQ2QsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztnQkFBQ0MsT0FBTyxFQUFFLENBQWlCO1lBQUMsQ0FBQztZQUM1RFgsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUNFLFlBQVk7UUFDbkMsQ0FBQztJQUNILENBQUMsQ0FBQyxLQUFLLEVBQUVHLEtBQUssRUFBRSxDQUFDO1FBQ2ZmLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDSyxLQUFLO0lBQzVCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZW50ZXJwcmlzZS8uL3BhZ2VzL2FwaS9yb2xlcy9pbmRleC5qcz8xOTk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcm9sZUxpc3QocmVxLCByZXMpIHtcbiAgdHJ5IHtcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xuICAgICAgaWYgKHJlcS5xdWVyeS5pZCkge1xuICAgICAgICBjb25zdCBmb3VuZGVkUm9sZSA9IGF3YWl0IHByaXNtYS5yb2xlLmZpbmRGaXJzdCh7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGlkOiArcmVxLnF1ZXJ5LmlkLFxuICAgICAgICAgICAgZGVsZXRlZDogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghZm91bmRlZFJvbGUpXG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogXCJSb2xlIG5vdCBmb3VuZCFcIiB9KTtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGZvdW5kZWRSb2xlKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGZvdW5kZWRSb2xlcyA9IGF3YWl0IHByaXNtYS5yb2xlLmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHsgZGVsZXRlZDogZmFsc2UgfSxcbiAgICAgIH0pO1xuICAgICAgaWYgKGZvdW5kZWRSb2xlcy5sZW5ndGggPCAxKVxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyBtZXNzYWdlOiBcIlJvbGVzIG5vdCBmb3VuZFwiIH0pO1xuICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoZm91bmRlZFJvbGVzKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoZXJyb3IpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwicm9sZUxpc3QiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJxdWVyeSIsImlkIiwiZm91bmRlZFJvbGUiLCJyb2xlIiwiZmluZEZpcnN0Iiwid2hlcmUiLCJkZWxldGVkIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiLCJmb3VuZGVkUm9sZXMiLCJmaW5kTWFueSIsImxlbmd0aCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/roles/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/roles/index.js"));
module.exports = __webpack_exports__;

})();