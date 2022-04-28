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
exports.id = "pages/api/submissions";
exports.ids = ["pages/api/submissions"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/submissions/index.js":
/*!****************************************!*\
  !*** ./pages/api/submissions/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ submissionList)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function submissionList(req, res) {\n    try {\n        if (req.method === \"GET\") {\n            if (req.query.id) {\n                const foundedSubmission = await prisma.submission.findFirst({\n                    where: {\n                        id: +req.query.id,\n                        deleted: false\n                    }\n                });\n                if (!foundedSubmission) return res.status(400).send({\n                    message: \"Submission not found!\"\n                });\n                return res.status(200).send(foundedSubmission);\n            }\n            const foundedSubmissions = await prisma.submission.findMany({\n                where: {\n                    deleted: false\n                }\n            });\n            if (foundedSubmissions.length < 1) return res.status(200).send({\n                message: \"Submissions not found\"\n            });\n            res.status(200).send(foundedSubmissions);\n        }\n    } catch (error) {\n        res.status(500).send(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3VibWlzc2lvbnMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBQzdDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEdBQUcsQ0FBQ0Qsd0RBQVk7QUFDaEIsZUFBZUUsY0FBYyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQ3RELEdBQUcsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxFQUFFRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxDQUFLLE1BQUUsQ0FBQztZQUN6QixFQUFFLEVBQUVGLEdBQUcsQ0FBQ0csS0FBSyxDQUFDQyxFQUFFLEVBQUUsQ0FBQztnQkFDakIsS0FBSyxDQUFDQyxpQkFBaUIsR0FBRyxLQUFLLENBQUNQLE1BQU0sQ0FBQ1EsVUFBVSxDQUFDQyxTQUFTLENBQUMsQ0FBQztvQkFDM0RDLEtBQUssRUFBRSxDQUFDO3dCQUNOSixFQUFFLEdBQUdKLEdBQUcsQ0FBQ0csS0FBSyxDQUFDQyxFQUFFO3dCQUNqQkssT0FBTyxFQUFFLEtBQUs7b0JBQ2hCLENBQUM7Z0JBQ0gsQ0FBQztnQkFDRCxFQUFFLEdBQUdKLGlCQUFpQixFQUNwQixNQUFNLENBQUNKLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7b0JBQUNDLE9BQU8sRUFBRSxDQUF1QjtnQkFBQyxDQUFDO2dCQUNsRSxNQUFNLENBQUNYLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDTixpQkFBaUI7WUFDL0MsQ0FBQztZQUNELEtBQUssQ0FBQ1Esa0JBQWtCLEdBQUcsS0FBSyxDQUFDZixNQUFNLENBQUNRLFVBQVUsQ0FBQ1EsUUFBUSxDQUFDLENBQUM7Z0JBQzNETixLQUFLLEVBQUUsQ0FBQztvQkFBQ0MsT0FBTyxFQUFFLEtBQUs7Z0JBQUMsQ0FBQztZQUMzQixDQUFDO1lBQ0QsRUFBRSxFQUFFSSxrQkFBa0IsQ0FBQ0UsTUFBTSxHQUFHLENBQUMsRUFDL0IsTUFBTSxDQUFDZCxHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO2dCQUFDQyxPQUFPLEVBQUUsQ0FBdUI7WUFBQyxDQUFDO1lBQ2xFWCxHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ0Usa0JBQWtCO1FBQ3pDLENBQUM7SUFDSCxDQUFDLENBQUMsS0FBSyxFQUFFRyxLQUFLLEVBQUUsQ0FBQztRQUNmZixHQUFHLENBQUNTLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ0ssS0FBSztJQUM1QixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VudGVycHJpc2UvLi9wYWdlcy9hcGkvc3VibWlzc2lvbnMvaW5kZXguanM/Zjc3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzdWJtaXNzaW9uTGlzdChyZXEsIHJlcykge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xyXG4gICAgICBpZiAocmVxLnF1ZXJ5LmlkKSB7XHJcbiAgICAgICAgY29uc3QgZm91bmRlZFN1Ym1pc3Npb24gPSBhd2FpdCBwcmlzbWEuc3VibWlzc2lvbi5maW5kRmlyc3Qoe1xyXG4gICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgaWQ6ICtyZXEucXVlcnkuaWQsXHJcbiAgICAgICAgICAgIGRlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIWZvdW5kZWRTdWJtaXNzaW9uKVxyXG4gICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKHsgbWVzc2FnZTogXCJTdWJtaXNzaW9uIG5vdCBmb3VuZCFcIiB9KTtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQoZm91bmRlZFN1Ym1pc3Npb24pO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGZvdW5kZWRTdWJtaXNzaW9ucyA9IGF3YWl0IHByaXNtYS5zdWJtaXNzaW9uLmZpbmRNYW55KHtcclxuICAgICAgICB3aGVyZTogeyBkZWxldGVkOiBmYWxzZSB9LFxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKGZvdW5kZWRTdWJtaXNzaW9ucy5sZW5ndGggPCAxKVxyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IG1lc3NhZ2U6IFwiU3VibWlzc2lvbnMgbm90IGZvdW5kXCIgfSk7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKGZvdW5kZWRTdWJtaXNzaW9ucyk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGVycm9yKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsInN1Ym1pc3Npb25MaXN0IiwicmVxIiwicmVzIiwibWV0aG9kIiwicXVlcnkiLCJpZCIsImZvdW5kZWRTdWJtaXNzaW9uIiwic3VibWlzc2lvbiIsImZpbmRGaXJzdCIsIndoZXJlIiwiZGVsZXRlZCIsInN0YXR1cyIsInNlbmQiLCJtZXNzYWdlIiwiZm91bmRlZFN1Ym1pc3Npb25zIiwiZmluZE1hbnkiLCJsZW5ndGgiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/submissions/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/submissions/index.js"));
module.exports = __webpack_exports__;

})();