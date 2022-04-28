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
exports.id = "pages/api/ideas/getComments/[id]";
exports.ids = ["pages/api/ideas/getComments/[id]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/ideas/getComments/[id].js":
/*!*********************************************!*\
  !*** ./pages/api/ideas/getComments/[id].js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ commentsOfIdea)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function commentsOfIdea(req, res) {\n    try {\n        if (req.method === \"GET\") {\n            const foundedcommentsOfIdea = await prisma.comment.findMany({\n                where: {\n                    ideaId: +req.query.id,\n                    deleted: false\n                },\n                include: {\n                    user: {\n                        select: {\n                            fullName: true,\n                            avatar: true\n                        }\n                    }\n                }\n            });\n            if (foundedcommentsOfIdea.length === 0) return res.status(200).send({\n                message: \"No comment!\"\n            });\n            return res.status(200).send(foundedcommentsOfIdea);\n        }\n    } catch (error) {\n        res.status(500).send(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaWRlYXMvZ2V0Q29tbWVudHMvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFDN0MsS0FBSyxDQUFDQyxNQUFNLEdBQUcsR0FBRyxDQUFDRCx3REFBWTtBQUNoQixlQUFlRSxjQUFjLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDdEQsR0FBRyxDQUFDLENBQUM7UUFDSCxFQUFFLEVBQUVELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLENBQUssTUFBRSxDQUFDO1lBQ3pCLEtBQUssQ0FBQ0MscUJBQXFCLEdBQUcsS0FBSyxDQUFDTCxNQUFNLENBQUNNLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDLENBQUM7Z0JBQzNEQyxLQUFLLEVBQUUsQ0FBQztvQkFDTkMsTUFBTSxHQUFHUCxHQUFHLENBQUNRLEtBQUssQ0FBQ0MsRUFBRTtvQkFDckJDLE9BQU8sRUFBRSxLQUFLO2dCQUNoQixDQUFDO2dCQUNEQyxPQUFPLEVBQUUsQ0FBQztvQkFDUkMsSUFBSSxFQUFFLENBQUM7d0JBQ0xDLE1BQU0sRUFBRSxDQUFDOzRCQUNQQyxRQUFRLEVBQUUsSUFBSTs0QkFDZEMsTUFBTSxFQUFFLElBQUk7d0JBQ2QsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7WUFDSCxDQUFDO1lBQ0QsRUFBRSxFQUFFWixxQkFBcUIsQ0FBQ2EsTUFBTSxLQUFLLENBQUMsRUFDcEMsTUFBTSxDQUFDZixHQUFHLENBQUNnQixNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztnQkFBQ0MsT0FBTyxFQUFFLENBQWE7WUFBQyxDQUFDO1lBQ3hELE1BQU0sQ0FBQ2xCLEdBQUcsQ0FBQ2dCLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ2YscUJBQXFCO1FBQ25ELENBQUM7SUFDSCxDQUFDLENBQUMsS0FBSyxFQUFFaUIsS0FBSyxFQUFFLENBQUM7UUFDZm5CLEdBQUcsQ0FBQ2dCLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ0UsS0FBSztJQUM1QixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VudGVycHJpc2UvLi9wYWdlcy9hcGkvaWRlYXMvZ2V0Q29tbWVudHMvW2lkXS5qcz8zMjliIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNvbW1lbnRzT2ZJZGVhKHJlcSwgcmVzKSB7XHJcbiAgdHJ5IHtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSBcIkdFVFwiKSB7XHJcbiAgICAgIGNvbnN0IGZvdW5kZWRjb21tZW50c09mSWRlYSA9IGF3YWl0IHByaXNtYS5jb21tZW50LmZpbmRNYW55KHtcclxuICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgaWRlYUlkOiArcmVxLnF1ZXJ5LmlkLFxyXG4gICAgICAgICAgZGVsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbmNsdWRlOiB7XHJcbiAgICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAgIHNlbGVjdDoge1xyXG4gICAgICAgICAgICAgIGZ1bGxOYW1lOiB0cnVlLFxyXG4gICAgICAgICAgICAgIGF2YXRhcjogdHJ1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChmb3VuZGVkY29tbWVudHNPZklkZWEubGVuZ3RoID09PSAwKVxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IG1lc3NhZ2U6IFwiTm8gY29tbWVudCFcIiB9KTtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGZvdW5kZWRjb21tZW50c09mSWRlYSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGVycm9yKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImNvbW1lbnRzT2ZJZGVhIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZm91bmRlZGNvbW1lbnRzT2ZJZGVhIiwiY29tbWVudCIsImZpbmRNYW55Iiwid2hlcmUiLCJpZGVhSWQiLCJxdWVyeSIsImlkIiwiZGVsZXRlZCIsImluY2x1ZGUiLCJ1c2VyIiwic2VsZWN0IiwiZnVsbE5hbWUiLCJhdmF0YXIiLCJsZW5ndGgiLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/ideas/getComments/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/ideas/getComments/[id].js"));
module.exports = __webpack_exports__;

})();