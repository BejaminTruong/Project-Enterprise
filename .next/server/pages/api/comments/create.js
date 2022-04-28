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
exports.id = "pages/api/comments/create";
exports.ids = ["pages/api/comments/create"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ "(api)/./pages/api/comments/create.js":
/*!**************************************!*\
  !*** ./pages/api/comments/create.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ create)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ \"date-fns\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function create(req, res) {\n    try {\n        const { content , userId , ideaId , anonymous  } = req.body;\n        if (req.method === \"POST\") {\n            if (req.body.commentId) {\n                const foundedComment = await prisma.comment.findFirst({\n                    where: {\n                        id: req.body.commentId,\n                        deleted: false\n                    }\n                });\n                if (!foundedComment) return res.status(400).send({\n                    message: \"Comment not found to reply\"\n                });\n            }\n            console.log(1);\n            const newComment = await prisma.comment.create({\n                data: {\n                    content,\n                    userId,\n                    ideaId,\n                    lastModifiedDate: new Date((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(Date.now(), \"yyyy-MM-dd\")),\n                    commentId: req.body.commentId ? req.body.commentId : null,\n                    anonymous\n                }\n            });\n            console.log(2);\n            res.status(200).send(newComment);\n        }\n    } catch (error) {\n        res.status(500).send(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tbWVudHMvY3JlYXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZDO0FBQ1o7QUFDakMsS0FBSyxDQUFDRSxNQUFNLEdBQUcsR0FBRyxDQUFDRix3REFBWTtBQUNoQixlQUFlRyxNQUFNLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDOUMsR0FBRyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUMsQ0FBQyxDQUFDQyxPQUFPLEdBQUVDLE1BQU0sR0FBRUMsTUFBTSxHQUFFQyxTQUFTLEVBQUMsQ0FBQyxHQUFHTCxHQUFHLENBQUNNLElBQUk7UUFDdkQsRUFBRSxFQUFFTixHQUFHLENBQUNPLE1BQU0sS0FBSyxDQUFNLE9BQUUsQ0FBQztZQUMxQixFQUFFLEVBQUVQLEdBQUcsQ0FBQ00sSUFBSSxDQUFDRSxTQUFTLEVBQUUsQ0FBQztnQkFDdkIsS0FBSyxDQUFDQyxjQUFjLEdBQUcsS0FBSyxDQUFDWCxNQUFNLENBQUNZLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLENBQUM7b0JBQ3JEQyxLQUFLLEVBQUUsQ0FBQzt3QkFBQ0MsRUFBRSxFQUFFYixHQUFHLENBQUNNLElBQUksQ0FBQ0UsU0FBUzt3QkFBRU0sT0FBTyxFQUFFLEtBQUs7b0JBQUMsQ0FBQztnQkFDbkQsQ0FBQztnQkFDRCxFQUFFLEdBQUdMLGNBQWMsRUFDakIsTUFBTSxDQUFDUixHQUFHLENBQ1BjLE1BQU0sQ0FBQyxHQUFHLEVBQ1ZDLElBQUksQ0FBQyxDQUFDO29CQUFDQyxPQUFPLEVBQUUsQ0FBNEI7Z0JBQUMsQ0FBQztZQUNyRCxDQUFDO1lBQ0RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUM7WUFDYixLQUFLLENBQUNDLFVBQVUsR0FBRyxLQUFLLENBQUN0QixNQUFNLENBQUNZLE9BQU8sQ0FBQ1gsTUFBTSxDQUFDLENBQUM7Z0JBQzlDc0IsSUFBSSxFQUFFLENBQUM7b0JBQ0xuQixPQUFPO29CQUNQQyxNQUFNO29CQUNOQyxNQUFNO29CQUNOa0IsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDQyxJQUFJLENBQUMxQixnREFBTSxDQUFDMEIsSUFBSSxDQUFDQyxHQUFHLElBQUksQ0FBWTtvQkFDMURoQixTQUFTLEVBQUVSLEdBQUcsQ0FBQ00sSUFBSSxDQUFDRSxTQUFTLEdBQUdSLEdBQUcsQ0FBQ00sSUFBSSxDQUFDRSxTQUFTLEdBQUcsSUFBSTtvQkFDekRILFNBQVM7Z0JBQ1gsQ0FBQztZQUNILENBQUM7WUFDRGEsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQztZQUNibEIsR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUNJLFVBQVU7UUFDakMsQ0FBQztJQUNILENBQUMsQ0FBQyxLQUFLLEVBQUVLLEtBQUssRUFBRSxDQUFDO1FBQ2Z4QixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ1MsS0FBSztJQUM1QixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VudGVycHJpc2UvLi9wYWdlcy9hcGkvY29tbWVudHMvY3JlYXRlLmpzP2MxMjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZShyZXEsIHJlcykge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGNvbnRlbnQsIHVzZXJJZCwgaWRlYUlkLCBhbm9ueW1vdXMgfSA9IHJlcS5ib2R5O1xyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICAgIGlmIChyZXEuYm9keS5jb21tZW50SWQpIHtcclxuICAgICAgICBjb25zdCBmb3VuZGVkQ29tbWVudCA9IGF3YWl0IHByaXNtYS5jb21tZW50LmZpbmRGaXJzdCh7XHJcbiAgICAgICAgICB3aGVyZTogeyBpZDogcmVxLmJvZHkuY29tbWVudElkLCBkZWxldGVkOiBmYWxzZSB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghZm91bmRlZENvbW1lbnQpXHJcbiAgICAgICAgICByZXR1cm4gcmVzXHJcbiAgICAgICAgICAgIC5zdGF0dXMoNDAwKVxyXG4gICAgICAgICAgICAuc2VuZCh7IG1lc3NhZ2U6IFwiQ29tbWVudCBub3QgZm91bmQgdG8gcmVwbHlcIiB9KTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZygxKVxyXG4gICAgICBjb25zdCBuZXdDb21tZW50ID0gYXdhaXQgcHJpc21hLmNvbW1lbnQuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgdXNlcklkLFxyXG4gICAgICAgICAgaWRlYUlkLFxyXG4gICAgICAgICAgbGFzdE1vZGlmaWVkRGF0ZTogbmV3IERhdGUoZm9ybWF0KERhdGUubm93KCksIFwieXl5eS1NTS1kZFwiKSksXHJcbiAgICAgICAgICBjb21tZW50SWQ6IHJlcS5ib2R5LmNvbW1lbnRJZCA/IHJlcS5ib2R5LmNvbW1lbnRJZCA6IG51bGwsXHJcbiAgICAgICAgICBhbm9ueW1vdXMsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKDIpXHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKG5ld0NvbW1lbnQpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXMuc3RhdHVzKDUwMCkuc2VuZChlcnJvcik7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJmb3JtYXQiLCJwcmlzbWEiLCJjcmVhdGUiLCJyZXEiLCJyZXMiLCJjb250ZW50IiwidXNlcklkIiwiaWRlYUlkIiwiYW5vbnltb3VzIiwiYm9keSIsIm1ldGhvZCIsImNvbW1lbnRJZCIsImZvdW5kZWRDb21tZW50IiwiY29tbWVudCIsImZpbmRGaXJzdCIsIndoZXJlIiwiaWQiLCJkZWxldGVkIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwibmV3Q29tbWVudCIsImRhdGEiLCJsYXN0TW9kaWZpZWREYXRlIiwiRGF0ZSIsIm5vdyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/comments/create.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/comments/create.js"));
module.exports = __webpack_exports__;

})();