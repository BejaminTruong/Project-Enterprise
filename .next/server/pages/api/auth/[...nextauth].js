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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();\nconst options = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter)(prisma),\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4___default()({\n            name: \"Email and Password\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\",\n                    placeholder: \"Enter your email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().post(\"http://localhost:3000/api/auth/login\", credentials);\n                let user = res.data;\n                if (res) return user;\n                return null;\n            }\n        }), \n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/auth/signin\"\n    },\n    callbacks: {\n        async jwt ({ token , user  }) {\n            if (user) {\n                token.roles = user.roles;\n                token.name = user.fullName;\n                token.image = user.avatar;\n                token.id = user.id;\n            }\n            return token;\n        },\n        async session ({ session , token  }) {\n            session.user.name = token.name;\n            session.user.image = token.image;\n            session.user.roles = token.roles;\n            session.user.userId = token.id;\n            return session;\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_3___default()(options));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXlEO0FBQ1o7QUFDcEI7QUFDTztBQUNpQztBQUNqRSxLQUFLLENBQUNLLE1BQU0sR0FBRyxHQUFHLENBQUNKLHdEQUFZO0FBQy9CLEtBQUssQ0FBQ0ssT0FBTyxHQUFHLENBQUM7SUFDZkMsT0FBTyxFQUFFUCx3RUFBYSxDQUFDSyxNQUFNO0lBQzdCRyxTQUFTLEVBQUUsQ0FBQztRQUNWSixzRUFBbUIsQ0FBQyxDQUFDO1lBQ25CSyxJQUFJLEVBQUUsQ0FBb0I7WUFDMUJDLFdBQVcsRUFBRSxDQUFDO2dCQUNaQyxLQUFLLEVBQUUsQ0FBQztvQkFDTkMsS0FBSyxFQUFFLENBQU87b0JBQ2RDLElBQUksRUFBRSxDQUFNO29CQUNaQyxXQUFXLEVBQUUsQ0FBa0I7Z0JBQ2pDLENBQUM7Z0JBQ0RDLFFBQVEsRUFBRSxDQUFDO29CQUFDSCxLQUFLLEVBQUUsQ0FBVTtvQkFBRUMsSUFBSSxFQUFFLENBQVU7Z0JBQUMsQ0FBQztZQUNuRCxDQUFDO2tCQUNLRyxTQUFTLEVBQUNOLFdBQVcsRUFBRU8sR0FBRyxFQUFFLENBQUM7Z0JBQ2pDLEtBQUssQ0FBQ0MsR0FBRyxHQUFHLEtBQUssQ0FBQ2hCLGlEQUFVLENBQzFCLENBQXNDLHVDQUN0Q1EsV0FBVztnQkFFYixHQUFHLENBQUNVLElBQUksR0FBR0YsR0FBRyxDQUFDRyxJQUFJO2dCQUNuQixFQUFFLEVBQUVILEdBQUcsRUFBRSxNQUFNLENBQUNFLElBQUk7Z0JBQ3BCLE1BQU0sQ0FBQyxJQUFJO1lBQ2IsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBQ0RFLE9BQU8sRUFBRSxDQUFDO1FBQ1JDLFFBQVEsRUFBRSxDQUFLO0lBQ2pCLENBQUM7SUFDREMsS0FBSyxFQUFFLENBQUM7UUFDTkMsTUFBTSxFQUFFLENBQWM7SUFDeEIsQ0FBQztJQUNEQyxTQUFTLEVBQUUsQ0FBQztjQUNKQyxHQUFHLEVBQUMsQ0FBQyxDQUFDQyxLQUFLLEdBQUVSLElBQUksRUFBQyxDQUFDLEVBQUUsQ0FBQztZQUMxQixFQUFFLEVBQUVBLElBQUksRUFBRSxDQUFDO2dCQUNUUSxLQUFLLENBQUNDLEtBQUssR0FBR1QsSUFBSSxDQUFDUyxLQUFLO2dCQUN4QkQsS0FBSyxDQUFDbkIsSUFBSSxHQUFHVyxJQUFJLENBQUNVLFFBQVE7Z0JBQzFCRixLQUFLLENBQUNHLEtBQUssR0FBR1gsSUFBSSxDQUFDWSxNQUFNO2dCQUN6QkosS0FBSyxDQUFDSyxFQUFFLEdBQUdiLElBQUksQ0FBQ2EsRUFBRTtZQUNwQixDQUFDO1lBQ0QsTUFBTSxDQUFDTCxLQUFLO1FBQ2QsQ0FBQztjQUNLTixPQUFPLEVBQUMsQ0FBQyxDQUFDQSxPQUFPLEdBQUVNLEtBQUssRUFBQyxDQUFDLEVBQUUsQ0FBQztZQUNqQ04sT0FBTyxDQUFDRixJQUFJLENBQUNYLElBQUksR0FBR21CLEtBQUssQ0FBQ25CLElBQUk7WUFDOUJhLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDVyxLQUFLLEdBQUdILEtBQUssQ0FBQ0csS0FBSztZQUNoQ1QsT0FBTyxDQUFDRixJQUFJLENBQUNTLEtBQUssR0FBR0QsS0FBSyxDQUFDQyxLQUFLO1lBQ2hDUCxPQUFPLENBQUNGLElBQUksQ0FBQ2MsTUFBTSxHQUFHTixLQUFLLENBQUNLLEVBQUU7WUFDOUIsTUFBTSxDQUFDWCxPQUFPO1FBQ2hCLENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUNELGlFQUFlbkIsZ0RBQVEsQ0FBQ0csT0FBTyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbnRlcnByaXNlLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tIFwiQG5leHQtYXV0aC9wcmlzbWEtYWRhcHRlclwiO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbmNvbnN0IG9wdGlvbnMgPSB7XG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICBuYW1lOiBcIkVtYWlsIGFuZCBQYXNzd29yZFwiLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICBsYWJlbDogXCJFbWFpbFwiLFxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIHlvdXIgZW1haWxcIixcbiAgICAgICAgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvYXV0aC9sb2dpblwiLFxuICAgICAgICAgIGNyZWRlbnRpYWxzXG4gICAgICAgICk7XG4gICAgICAgIGxldCB1c2VyID0gcmVzLmRhdGE7XG4gICAgICAgIGlmIChyZXMpIHJldHVybiB1c2VyO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogXCJqd3RcIixcbiAgfSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46IFwiL2F1dGgvc2lnbmluXCIsXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHRva2VuLnJvbGVzID0gdXNlci5yb2xlcztcbiAgICAgICAgdG9rZW4ubmFtZSA9IHVzZXIuZnVsbE5hbWU7XG4gICAgICAgIHRva2VuLmltYWdlID0gdXNlci5hdmF0YXI7XG4gICAgICAgIHRva2VuLmlkID0gdXNlci5pZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBzZXNzaW9uLnVzZXIubmFtZSA9IHRva2VuLm5hbWU7XG4gICAgICBzZXNzaW9uLnVzZXIuaW1hZ2UgPSB0b2tlbi5pbWFnZTtcbiAgICAgIHNlc3Npb24udXNlci5yb2xlcyA9IHRva2VuLnJvbGVzO1xuICAgICAgc2Vzc2lvbi51c2VyLnVzZXJJZCA9IHRva2VuLmlkO1xuICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgfSxcbiAgfSxcbn07XG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChvcHRpb25zKTtcbiJdLCJuYW1lcyI6WyJQcmlzbWFBZGFwdGVyIiwiUHJpc21hQ2xpZW50IiwiYXhpb3MiLCJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJwcmlzbWEiLCJvcHRpb25zIiwiYWRhcHRlciIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInJlcSIsInJlcyIsInBvc3QiLCJ1c2VyIiwiZGF0YSIsInNlc3Npb24iLCJzdHJhdGVneSIsInBhZ2VzIiwic2lnbkluIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJyb2xlcyIsImZ1bGxOYW1lIiwiaW1hZ2UiLCJhdmF0YXIiLCJpZCIsInVzZXJJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

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