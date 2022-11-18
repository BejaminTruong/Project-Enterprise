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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\nconst options = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter)(prisma),\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4___default()({\n            name: \"Email and Password\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\",\n                    placeholder: \"Enter your email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://localhost:3000/api/auth/login\", credentials);\n                let user = res.data;\n                if (res) return user;\n                return null;\n            }\n        }), \n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/auth/signin\"\n    },\n    callbacks: {\n        async jwt ({ token , user  }) {\n            if (user) {\n                token.roles = user.roles;\n                token.name = user.fullName;\n                token.image = user.avatar;\n                token.id = user.id;\n            }\n            return token;\n        },\n        async session ({ session , token  }) {\n            session.user.name = token.name;\n            session.user.image = token.image;\n            session.user.roles = token.roles;\n            session.user.userId = token.id;\n            return session;\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_3___default()(options));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXlEO0FBQ1o7QUFDcEI7QUFDTztBQUNpQztBQUNqRSxLQUFLLENBQUNLLE1BQU0sR0FBRyxHQUFHLENBQUNKLHdEQUFZO0FBQy9CLEtBQUssQ0FBQ0ssT0FBTyxHQUFHLENBQUM7SUFDZkMsT0FBTyxFQUFFUCx3RUFBYSxDQUFDSyxNQUFNO0lBQzdCRyxTQUFTLEVBQUUsQ0FBQztRQUNWSixzRUFBbUIsQ0FBQyxDQUFDO1lBQ25CSyxJQUFJLEVBQUUsQ0FBb0I7WUFDMUJDLFdBQVcsRUFBRSxDQUFDO2dCQUNaQyxLQUFLLEVBQUUsQ0FBQztvQkFDTkMsS0FBSyxFQUFFLENBQU87b0JBQ2RDLElBQUksRUFBRSxDQUFNO29CQUNaQyxXQUFXLEVBQUUsQ0FBa0I7Z0JBQ2pDLENBQUM7Z0JBQ0RDLFFBQVEsRUFBRSxDQUFDO29CQUFDSCxLQUFLLEVBQUUsQ0FBVTtvQkFBRUMsSUFBSSxFQUFFLENBQVU7Z0JBQUMsQ0FBQztZQUNuRCxDQUFDO2tCQUNLRyxTQUFTLEVBQUNOLFdBQVcsRUFBRU8sR0FBRyxFQUFFLENBQUM7Z0JBQ2pDLEtBQUssQ0FBQ0MsR0FBRyxHQUFHLEtBQUssQ0FBQ2hCLGlEQUFVLENBQzFCLENBQXNDLHVDQUN0Q1EsV0FBVztnQkFFYixHQUFHLENBQUNVLElBQUksR0FBR0YsR0FBRyxDQUFDRyxJQUFJO2dCQUNuQixFQUFFLEVBQUVILEdBQUcsRUFBRSxNQUFNLENBQUNFLElBQUk7Z0JBQ3BCLE1BQU0sQ0FBQyxJQUFJO1lBQ2IsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBQ0RFLE9BQU8sRUFBRSxDQUFDO1FBQ1JDLFFBQVEsRUFBRSxDQUFLO0lBQ2pCLENBQUM7SUFDREMsS0FBSyxFQUFFLENBQUM7UUFDTkMsTUFBTSxFQUFFLENBQWM7SUFDeEIsQ0FBQztJQUNEQyxTQUFTLEVBQUUsQ0FBQztjQUNKQyxHQUFHLEVBQUMsQ0FBQyxDQUFDQyxLQUFLLEdBQUVSLElBQUksRUFBQyxDQUFDLEVBQUUsQ0FBQztZQUMxQixFQUFFLEVBQUVBLElBQUksRUFBRSxDQUFDO2dCQUNUUSxLQUFLLENBQUNDLEtBQUssR0FBR1QsSUFBSSxDQUFDUyxLQUFLO2dCQUN4QkQsS0FBSyxDQUFDbkIsSUFBSSxHQUFHVyxJQUFJLENBQUNVLFFBQVE7Z0JBQzFCRixLQUFLLENBQUNHLEtBQUssR0FBR1gsSUFBSSxDQUFDWSxNQUFNO2dCQUN6QkosS0FBSyxDQUFDSyxFQUFFLEdBQUdiLElBQUksQ0FBQ2EsRUFBRTtZQUNwQixDQUFDO1lBQ0QsTUFBTSxDQUFDTCxLQUFLO1FBQ2QsQ0FBQztjQUNLTixPQUFPLEVBQUMsQ0FBQyxDQUFDQSxPQUFPLEdBQUVNLEtBQUssRUFBQyxDQUFDLEVBQUUsQ0FBQztZQUNqQ04sT0FBTyxDQUFDRixJQUFJLENBQUNYLElBQUksR0FBR21CLEtBQUssQ0FBQ25CLElBQUk7WUFDOUJhLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDVyxLQUFLLEdBQUdILEtBQUssQ0FBQ0csS0FBSztZQUNoQ1QsT0FBTyxDQUFDRixJQUFJLENBQUNTLEtBQUssR0FBR0QsS0FBSyxDQUFDQyxLQUFLO1lBQ2hDUCxPQUFPLENBQUNGLElBQUksQ0FBQ2MsTUFBTSxHQUFHTixLQUFLLENBQUNLLEVBQUU7WUFDOUIsTUFBTSxDQUFDWCxPQUFPO1FBQ2hCLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUNELGlFQUFlbkIsZ0RBQVEsQ0FBQ0csT0FBTyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbnRlcnByaXNlLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tIFwiQG5leHQtYXV0aC9wcmlzbWEtYWRhcHRlclwiO1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWEpLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XHJcbiAgICAgIG5hbWU6IFwiRW1haWwgYW5kIFBhc3N3b3JkXCIsXHJcbiAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgZW1haWw6IHtcclxuICAgICAgICAgIGxhYmVsOiBcIkVtYWlsXCIsXHJcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIHlvdXIgZW1haWxcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9LFxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMsIHJlcSkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYXV0aC9sb2dpblwiLFxyXG4gICAgICAgICAgY3JlZGVudGlhbHNcclxuICAgICAgICApO1xyXG4gICAgICAgIGxldCB1c2VyID0gcmVzLmRhdGE7XHJcbiAgICAgICAgaWYgKHJlcykgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHNlc3Npb246IHtcclxuICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxyXG4gIH0sXHJcbiAgcGFnZXM6IHtcclxuICAgIHNpZ25JbjogXCIvYXV0aC9zaWduaW5cIixcclxuICB9LFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIHRva2VuLnJvbGVzID0gdXNlci5yb2xlcztcclxuICAgICAgICB0b2tlbi5uYW1lID0gdXNlci5mdWxsTmFtZTtcclxuICAgICAgICB0b2tlbi5pbWFnZSA9IHVzZXIuYXZhdGFyO1xyXG4gICAgICAgIHRva2VuLmlkID0gdXNlci5pZDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcclxuICAgICAgc2Vzc2lvbi51c2VyLm5hbWUgPSB0b2tlbi5uYW1lO1xyXG4gICAgICBzZXNzaW9uLnVzZXIuaW1hZ2UgPSB0b2tlbi5pbWFnZTtcclxuICAgICAgc2Vzc2lvbi51c2VyLnJvbGVzID0gdG9rZW4ucm9sZXM7XHJcbiAgICAgIHNlc3Npb24udXNlci51c2VySWQgPSB0b2tlbi5pZDtcclxuICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKG9wdGlvbnMpO1xyXG4iXSwibmFtZXMiOlsiUHJpc21hQWRhcHRlciIsIlByaXNtYUNsaWVudCIsImF4aW9zIiwiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwicHJpc21hIiwib3B0aW9ucyIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJyZXEiLCJyZXMiLCJwb3N0IiwidXNlciIsImRhdGEiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJwYWdlcyIsInNpZ25JbiIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwicm9sZXMiLCJmdWxsTmFtZSIsImltYWdlIiwiYXZhdGFyIiwiaWQiLCJ1c2VySWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();