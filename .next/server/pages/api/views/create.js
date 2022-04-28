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
exports.id = "pages/api/views/create";
exports.ids = ["pages/api/views/create"];
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

/***/ "(api)/./pages/api/views/create.js":
/*!***********************************!*\
  !*** ./pages/api/views/create.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ create)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ \"date-fns\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function create(req, res) {\n    try {\n        const { userId , ideaId  } = req.body;\n        if (req.method === \"POST\") {\n            const viewedIdea = await prisma.view.findFirst({\n                where: {\n                    userId,\n                    ideaId,\n                    deleted: false\n                }\n            });\n            if (viewedIdea) {\n                await prisma.view.update({\n                    where: {\n                        id: viewedIdea.id\n                    },\n                    data: {\n                        userId\n                    }\n                });\n                return res.status(200).send({\n                    message: \"View updated\"\n                });\n            }\n            const newView = await prisma.view.create({\n                data: {\n                    lastVisitedDate: new Date((0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(Date.now(), \"yyyy-MM-dd\")),\n                    userId,\n                    ideaId\n                }\n            });\n            res.status(200).send(newView);\n        }\n    } catch (error) {\n        res.status(500).send(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdmlld3MvY3JlYXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTZDO0FBQ1o7QUFDakMsS0FBSyxDQUFDRSxNQUFNLEdBQUcsR0FBRyxDQUFDRix3REFBWTtBQUNoQixlQUFlRyxNQUFNLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDOUMsR0FBRyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUMsQ0FBQyxDQUFDQyxNQUFNLEdBQUVDLE1BQU0sRUFBQyxDQUFDLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtRQUNuQyxFQUFFLEVBQUVKLEdBQUcsQ0FBQ0ssTUFBTSxLQUFLLENBQU0sT0FBRSxDQUFDO1lBQzFCLEtBQUssQ0FBQ0MsVUFBVSxHQUFHLEtBQUssQ0FBQ1IsTUFBTSxDQUFDUyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO2dCQUM5Q0MsS0FBSyxFQUFFLENBQUM7b0JBQ05QLE1BQU07b0JBQ05DLE1BQU07b0JBQ05PLE9BQU8sRUFBRSxLQUFLO2dCQUNoQixDQUFDO1lBQ0gsQ0FBQztZQUNELEVBQUUsRUFBRUosVUFBVSxFQUFFLENBQUM7Z0JBQ2YsS0FBSyxDQUFDUixNQUFNLENBQUNTLElBQUksQ0FBQ0ksTUFBTSxDQUFDLENBQUM7b0JBQ3hCRixLQUFLLEVBQUUsQ0FBQzt3QkFBQ0csRUFBRSxFQUFFTixVQUFVLENBQUNNLEVBQUU7b0JBQUMsQ0FBQztvQkFDNUJDLElBQUksRUFBRSxDQUFDO3dCQUFDWCxNQUFNO29CQUFDLENBQUM7Z0JBQ2xCLENBQUM7Z0JBQ0QsTUFBTSxDQUFDRCxHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO29CQUFDQyxPQUFPLEVBQUUsQ0FBYztnQkFBQyxDQUFDO1lBQ3pELENBQUM7WUFDRCxLQUFLLENBQUNDLE9BQU8sR0FBRyxLQUFLLENBQUNuQixNQUFNLENBQUNTLElBQUksQ0FBQ1IsTUFBTSxDQUFDLENBQUM7Z0JBQ3hDYyxJQUFJLEVBQUUsQ0FBQztvQkFDTEssZUFBZSxFQUFFLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDdEIsZ0RBQU0sQ0FBQ3NCLElBQUksQ0FBQ0MsR0FBRyxJQUFJLENBQVk7b0JBQ3pEbEIsTUFBTTtvQkFDTkMsTUFBTTtnQkFDUixDQUFDO1lBQ0gsQ0FBQztZQUNERixHQUFHLENBQUNhLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ0UsT0FBTztRQUM5QixDQUFDO0lBQ0gsQ0FBQyxDQUFDLEtBQUssRUFBRUksS0FBSyxFQUFFLENBQUM7UUFDZnBCLEdBQUcsQ0FBQ2EsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDTSxLQUFLO0lBQzVCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZW50ZXJwcmlzZS8uL3BhZ2VzL2FwaS92aWV3cy9jcmVhdGUuanM/NjMzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlKHJlcSwgcmVzKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHsgdXNlcklkLCBpZGVhSWQgfSA9IHJlcS5ib2R5O1xyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICAgIGNvbnN0IHZpZXdlZElkZWEgPSBhd2FpdCBwcmlzbWEudmlldy5maW5kRmlyc3Qoe1xyXG4gICAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgICBpZGVhSWQsXHJcbiAgICAgICAgICBkZWxldGVkOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHZpZXdlZElkZWEpIHtcclxuICAgICAgICBhd2FpdCBwcmlzbWEudmlldy51cGRhdGUoe1xyXG4gICAgICAgICAgd2hlcmU6IHsgaWQ6IHZpZXdlZElkZWEuaWQgfSxcclxuICAgICAgICAgIGRhdGE6IHsgdXNlcklkIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgbWVzc2FnZTogXCJWaWV3IHVwZGF0ZWRcIiB9KTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBuZXdWaWV3ID0gYXdhaXQgcHJpc21hLnZpZXcuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBsYXN0VmlzaXRlZERhdGU6IG5ldyBEYXRlKGZvcm1hdChEYXRlLm5vdygpLCBcInl5eXktTU0tZGRcIikpLFxyXG4gICAgICAgICAgdXNlcklkLFxyXG4gICAgICAgICAgaWRlYUlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChuZXdWaWV3KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoZXJyb3IpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiZm9ybWF0IiwicHJpc21hIiwiY3JlYXRlIiwicmVxIiwicmVzIiwidXNlcklkIiwiaWRlYUlkIiwiYm9keSIsIm1ldGhvZCIsInZpZXdlZElkZWEiLCJ2aWV3IiwiZmluZEZpcnN0Iiwid2hlcmUiLCJkZWxldGVkIiwidXBkYXRlIiwiaWQiLCJkYXRhIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiLCJuZXdWaWV3IiwibGFzdFZpc2l0ZWREYXRlIiwiRGF0ZSIsIm5vdyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/views/create.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/views/create.js"));
module.exports = __webpack_exports__;

})();