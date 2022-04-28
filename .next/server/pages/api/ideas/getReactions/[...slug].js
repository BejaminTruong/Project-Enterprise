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
exports.id = "pages/api/ideas/getReactions/[...slug]";
exports.ids = ["pages/api/ideas/getReactions/[...slug]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/ideas/getReactions/[...slug].js":
/*!***************************************************!*\
  !*** ./pages/api/ideas/getReactions/[...slug].js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ reactionOfIdea)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function reactionOfIdea(req, res) {\n    try {\n        if (req.method === \"GET\") {\n            const { slug  } = req.query;\n            const foundedReactionOfIdea = await prisma.reaction.findFirst({\n                where: {\n                    userId: +slug[0],\n                    ideaId: +slug[1],\n                    deleted: false\n                }\n            });\n            if (!foundedReactionOfIdea) return res.status(200).send({\n                message: \"Reaction not found\"\n            });\n            return res.status(200).send(foundedReactionOfIdea);\n        }\n    } catch (error) {\n        res.status(500).send(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaWRlYXMvZ2V0UmVhY3Rpb25zL1suLi5zbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFDN0MsS0FBSyxDQUFDQyxNQUFNLEdBQUcsR0FBRyxDQUFDRCx3REFBWTtBQUNoQixlQUFlRSxjQUFjLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDdEQsR0FBRyxDQUFDLENBQUM7UUFDSCxFQUFFLEVBQUVELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLENBQUssTUFBRSxDQUFDO1lBQ3pCLEtBQUssQ0FBQyxDQUFDLENBQUNDLElBQUksRUFBQyxDQUFDLEdBQUdILEdBQUcsQ0FBQ0ksS0FBSztZQUMxQixLQUFLLENBQUNDLHFCQUFxQixHQUFHLEtBQUssQ0FBQ1AsTUFBTSxDQUFDUSxRQUFRLENBQUNDLFNBQVMsQ0FBQyxDQUFDO2dCQUM3REMsS0FBSyxFQUFFLENBQUM7b0JBQ05DLE1BQU0sR0FBR04sSUFBSSxDQUFDLENBQUM7b0JBQ2ZPLE1BQU0sR0FBR1AsSUFBSSxDQUFDLENBQUM7b0JBQ2ZRLE9BQU8sRUFBRSxLQUFLO2dCQUNoQixDQUFDO1lBQ0gsQ0FBQztZQUNELEVBQUUsR0FBR04scUJBQXFCLEVBQ3hCLE1BQU0sQ0FBQ0osR0FBRyxDQUFDVyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztnQkFBQ0MsT0FBTyxFQUFFLENBQW9CO1lBQUMsQ0FBQztZQUMvRCxNQUFNLENBQUNiLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDUixxQkFBcUI7UUFDbkQsQ0FBQztJQUNILENBQUMsQ0FBQyxLQUFLLEVBQUVVLEtBQUssRUFBRSxDQUFDO1FBQ2ZkLEdBQUcsQ0FBQ1csTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDRSxLQUFLO0lBQzVCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZW50ZXJwcmlzZS8uL3BhZ2VzL2FwaS9pZGVhcy9nZXRSZWFjdGlvbnMvWy4uLnNsdWddLmpzPzNiZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcmVhY3Rpb25PZklkZWEocmVxLCByZXMpIHtcclxuICB0cnkge1xyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcclxuICAgICAgY29uc3QgeyBzbHVnIH0gPSByZXEucXVlcnk7XHJcbiAgICAgIGNvbnN0IGZvdW5kZWRSZWFjdGlvbk9mSWRlYSA9IGF3YWl0IHByaXNtYS5yZWFjdGlvbi5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICB1c2VySWQ6ICtzbHVnWzBdLFxyXG4gICAgICAgICAgaWRlYUlkOiArc2x1Z1sxXSxcclxuICAgICAgICAgIGRlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoIWZvdW5kZWRSZWFjdGlvbk9mSWRlYSlcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoeyBtZXNzYWdlOiBcIlJlYWN0aW9uIG5vdCBmb3VuZFwiIH0pO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoZm91bmRlZFJlYWN0aW9uT2ZJZGVhKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoZXJyb3IpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwicmVhY3Rpb25PZklkZWEiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzbHVnIiwicXVlcnkiLCJmb3VuZGVkUmVhY3Rpb25PZklkZWEiLCJyZWFjdGlvbiIsImZpbmRGaXJzdCIsIndoZXJlIiwidXNlcklkIiwiaWRlYUlkIiwiZGVsZXRlZCIsInN0YXR1cyIsInNlbmQiLCJtZXNzYWdlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/ideas/getReactions/[...slug].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/ideas/getReactions/[...slug].js"));
module.exports = __webpack_exports__;

})();