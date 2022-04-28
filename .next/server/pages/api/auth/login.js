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
exports.id = "pages/api/auth/login";
exports.ids = ["pages/api/auth/login"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "(api)/./pages/api/auth/login.js":
/*!*********************************!*\
  !*** ./pages/api/auth/login.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ login)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function login(req, res) {\n    try {\n        if (req.method === \"POST\") {\n            const { email , password  } = req.body;\n            const foundedUser = await prisma.user.findFirst({\n                where: {\n                    email,\n                    deleted: false\n                },\n                include: {\n                    roles: {\n                        select: {\n                            name: true\n                        }\n                    },\n                    departments: {\n                        select: {\n                            name: true\n                        }\n                    }\n                }\n            });\n            if (!foundedUser) return res.status(400).send({\n                message: \"User not found\"\n            });\n            const confirmPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().compare(password, foundedUser.password);\n            if (!confirmPassword) return res.status(400).send({\n                message: \"Wrong password\"\n            });\n            res.status(200).send(foundedUser);\n        }\n    } catch (error) {\n        res.status(500).send(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9sb2dpbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE2QztBQUNsQjtBQUMzQixLQUFLLENBQUNFLE1BQU0sR0FBRyxHQUFHLENBQUNGLHdEQUFZO0FBQ2hCLGVBQWVHLEtBQUssQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUM3QyxHQUFHLENBQUMsQ0FBQztRQUNILEVBQUUsRUFBRUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssQ0FBTSxPQUFFLENBQUM7WUFDMUIsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxHQUFFQyxRQUFRLEVBQUMsQ0FBQyxHQUFHSixHQUFHLENBQUNLLElBQUk7WUFDcEMsS0FBSyxDQUFDQyxXQUFXLEdBQUcsS0FBSyxDQUFDUixNQUFNLENBQUNTLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7Z0JBQy9DQyxLQUFLLEVBQUUsQ0FBQztvQkFDTk4sS0FBSztvQkFDTE8sT0FBTyxFQUFFLEtBQUs7Z0JBQ2hCLENBQUM7Z0JBQ0RDLE9BQU8sRUFBRSxDQUFDO29CQUNSQyxLQUFLLEVBQUUsQ0FBQzt3QkFBQ0MsTUFBTSxFQUFFLENBQUM7NEJBQUNDLElBQUksRUFBRSxJQUFJO3dCQUFDLENBQUM7b0JBQUMsQ0FBQztvQkFDakNDLFdBQVcsRUFBRSxDQUFDO3dCQUFDRixNQUFNLEVBQUUsQ0FBQzs0QkFBQ0MsSUFBSSxFQUFFLElBQUk7d0JBQUMsQ0FBQztvQkFBQyxDQUFDO2dCQUN6QyxDQUFDO1lBQ0gsQ0FBQztZQUNELEVBQUUsR0FBR1IsV0FBVyxFQUNkLE1BQU0sQ0FBQ0wsR0FBRyxDQUFDZSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztnQkFBQ0MsT0FBTyxFQUFFLENBQWdCO1lBQUMsQ0FBQztZQUMzRCxLQUFLLENBQUNDLGVBQWUsR0FBRyxLQUFLLENBQUN0QixxREFBYyxDQUMxQ08sUUFBUSxFQUNSRSxXQUFXLENBQUNGLFFBQVE7WUFFdEIsRUFBRSxHQUFHZSxlQUFlLEVBQ2xCLE1BQU0sQ0FBQ2xCLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7Z0JBQUNDLE9BQU8sRUFBRSxDQUFnQjtZQUFDLENBQUM7WUFDM0RqQixHQUFHLENBQUNlLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ1gsV0FBVztRQUNsQyxDQUFDO0lBQ0gsQ0FBQyxDQUFDLEtBQUssRUFBRWUsS0FBSyxFQUFFLENBQUM7UUFDZnBCLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDSSxLQUFLO0lBQzVCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZW50ZXJwcmlzZS8uL3BhZ2VzL2FwaS9hdXRoL2xvZ2luLmpzPzEzMTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRcIjtcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luKHJlcSwgcmVzKSB7XG4gIHRyeSB7XG4gICAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcmVxLmJvZHk7XG4gICAgICBjb25zdCBmb3VuZGVkVXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRGaXJzdCh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgZW1haWwsXG4gICAgICAgICAgZGVsZXRlZDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICByb2xlczogeyBzZWxlY3Q6IHsgbmFtZTogdHJ1ZSB9IH0sXG4gICAgICAgICAgZGVwYXJ0bWVudHM6IHsgc2VsZWN0OiB7IG5hbWU6IHRydWUgfSB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBpZiAoIWZvdW5kZWRVc2VyKVxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBcIlVzZXIgbm90IGZvdW5kXCIgfSk7XG4gICAgICBjb25zdCBjb25maXJtUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShcbiAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgIGZvdW5kZWRVc2VyLnBhc3N3b3JkXG4gICAgICApO1xuICAgICAgaWYgKCFjb25maXJtUGFzc3dvcmQpXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IFwiV3JvbmcgcGFzc3dvcmRcIiB9KTtcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGZvdW5kZWRVc2VyKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoZXJyb3IpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiYmNyeXB0IiwicHJpc21hIiwibG9naW4iLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJlbWFpbCIsInBhc3N3b3JkIiwiYm9keSIsImZvdW5kZWRVc2VyIiwidXNlciIsImZpbmRGaXJzdCIsIndoZXJlIiwiZGVsZXRlZCIsImluY2x1ZGUiLCJyb2xlcyIsInNlbGVjdCIsIm5hbWUiLCJkZXBhcnRtZW50cyIsInN0YXR1cyIsInNlbmQiLCJtZXNzYWdlIiwiY29uZmlybVBhc3N3b3JkIiwiY29tcGFyZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/login.js"));
module.exports = __webpack_exports__;

})();