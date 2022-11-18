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
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/users/index.js":
/*!**********************************!*\
  !*** ./pages/api/users/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ userList)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function userList(req, res) {\n    try {\n        if (req.method === \"GET\") {\n            if (req.query.id) {\n                const foundedUser = await prisma.user.findFirst({\n                    where: {\n                        id: +req.query.id,\n                        deleted: false\n                    },\n                    include: {\n                        roles: {\n                            select: {\n                                name: true\n                            }\n                        },\n                        departments: {\n                            select: {\n                                name: true\n                            }\n                        }\n                    }\n                });\n                if (!foundedUser) return res.status(400).send({\n                    message: \"User not found!\"\n                });\n                return res.status(200).send(foundedUser);\n            }\n            const foundedUsers = await prisma.user.findMany({\n                where: {\n                    deleted: false\n                },\n                include: {\n                    roles: {\n                        select: {\n                            name: true\n                        }\n                    },\n                    departments: {\n                        select: {\n                            name: true\n                        }\n                    }\n                }\n            });\n            if (foundedUsers.length < 1) return res.status(200).send({\n                message: \"Users not found\"\n            });\n            res.status(200).send(foundedUsers);\n        }\n    } catch (error) {\n        res.status(500).send(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBQzdDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEdBQUcsQ0FBQ0Qsd0RBQVk7QUFDaEIsZUFBZUUsUUFBUSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQ2hELEdBQUcsQ0FBQyxDQUFDO1FBQ0gsRUFBRSxFQUFFRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxDQUFLLE1BQUUsQ0FBQztZQUN6QixFQUFFLEVBQUVGLEdBQUcsQ0FBQ0csS0FBSyxDQUFDQyxFQUFFLEVBQUUsQ0FBQztnQkFDakIsS0FBSyxDQUFDQyxXQUFXLEdBQUcsS0FBSyxDQUFDUCxNQUFNLENBQUNRLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7b0JBQy9DQyxLQUFLLEVBQUUsQ0FBQzt3QkFDTkosRUFBRSxHQUFHSixHQUFHLENBQUNHLEtBQUssQ0FBQ0MsRUFBRTt3QkFDakJLLE9BQU8sRUFBRSxLQUFLO29CQUNoQixDQUFDO29CQUNEQyxPQUFPLEVBQUUsQ0FBQzt3QkFDUkMsS0FBSyxFQUFFLENBQUM7NEJBQUNDLE1BQU0sRUFBRSxDQUFDO2dDQUFDQyxJQUFJLEVBQUUsSUFBSTs0QkFBQyxDQUFDO3dCQUFDLENBQUM7d0JBQ2pDQyxXQUFXLEVBQUUsQ0FBQzs0QkFBQ0YsTUFBTSxFQUFFLENBQUM7Z0NBQUNDLElBQUksRUFBRSxJQUFJOzRCQUFDLENBQUM7d0JBQUMsQ0FBQztvQkFDekMsQ0FBQztnQkFDSCxDQUFDO2dCQUNELEVBQUUsR0FBR1IsV0FBVyxFQUNkLE1BQU0sQ0FBQ0osR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztvQkFBQ0MsT0FBTyxFQUFFLENBQWlCO2dCQUFDLENBQUM7Z0JBQzVELE1BQU0sQ0FBQ2hCLEdBQUcsQ0FBQ2MsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDWCxXQUFXO1lBQ3pDLENBQUM7WUFDRCxLQUFLLENBQUNhLFlBQVksR0FBRyxLQUFLLENBQUNwQixNQUFNLENBQUNRLElBQUksQ0FBQ2EsUUFBUSxDQUFDLENBQUM7Z0JBQy9DWCxLQUFLLEVBQUUsQ0FBQztvQkFBQ0MsT0FBTyxFQUFFLEtBQUs7Z0JBQUMsQ0FBQztnQkFDekJDLE9BQU8sRUFBRSxDQUFDO29CQUNSQyxLQUFLLEVBQUUsQ0FBQzt3QkFBQ0MsTUFBTSxFQUFFLENBQUM7NEJBQUNDLElBQUksRUFBRSxJQUFJO3dCQUFDLENBQUM7b0JBQUMsQ0FBQztvQkFDakNDLFdBQVcsRUFBRSxDQUFDO3dCQUFDRixNQUFNLEVBQUUsQ0FBQzs0QkFBQ0MsSUFBSSxFQUFFLElBQUk7d0JBQUMsQ0FBQztvQkFBQyxDQUFDO2dCQUN6QyxDQUFDO1lBQ0gsQ0FBQztZQUNELEVBQUUsRUFBRUssWUFBWSxDQUFDRSxNQUFNLEdBQUcsQ0FBQyxFQUN6QixNQUFNLENBQUNuQixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO2dCQUFDQyxPQUFPLEVBQUUsQ0FBaUI7WUFBQyxDQUFDO1lBQzVEaEIsR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUNFLFlBQVk7UUFDbkMsQ0FBQztJQUNILENBQUMsQ0FBQyxLQUFLLEVBQUVHLEtBQUssRUFBRSxDQUFDO1FBQ2ZwQixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ0ssS0FBSztJQUM1QixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VudGVycHJpc2UvLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXguanM/MWQ4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiB1c2VyTGlzdChyZXEsIHJlcykge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gXCJHRVRcIikge1xyXG4gICAgICBpZiAocmVxLnF1ZXJ5LmlkKSB7XHJcbiAgICAgICAgY29uc3QgZm91bmRlZFVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kRmlyc3Qoe1xyXG4gICAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgICAgaWQ6ICtyZXEucXVlcnkuaWQsXHJcbiAgICAgICAgICAgIGRlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICAgICAgcm9sZXM6IHsgc2VsZWN0OiB7IG5hbWU6IHRydWUgfSB9LFxyXG4gICAgICAgICAgICBkZXBhcnRtZW50czogeyBzZWxlY3Q6IHsgbmFtZTogdHJ1ZSB9IH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghZm91bmRlZFVzZXIpXHJcbiAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiBcIlVzZXIgbm90IGZvdW5kIVwiIH0pO1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZChmb3VuZGVkVXNlcik7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZm91bmRlZFVzZXJzID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZE1hbnkoe1xyXG4gICAgICAgIHdoZXJlOiB7IGRlbGV0ZWQ6IGZhbHNlIH0sXHJcbiAgICAgICAgaW5jbHVkZToge1xyXG4gICAgICAgICAgcm9sZXM6IHsgc2VsZWN0OiB7IG5hbWU6IHRydWUgfSB9LFxyXG4gICAgICAgICAgZGVwYXJ0bWVudHM6IHsgc2VsZWN0OiB7IG5hbWU6IHRydWUgfSB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoZm91bmRlZFVzZXJzLmxlbmd0aCA8IDEpXHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHsgbWVzc2FnZTogXCJVc2VycyBub3QgZm91bmRcIiB9KTtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLnNlbmQoZm91bmRlZFVzZXJzKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmVzLnN0YXR1cyg1MDApLnNlbmQoZXJyb3IpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwidXNlckxpc3QiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJxdWVyeSIsImlkIiwiZm91bmRlZFVzZXIiLCJ1c2VyIiwiZmluZEZpcnN0Iiwid2hlcmUiLCJkZWxldGVkIiwiaW5jbHVkZSIsInJvbGVzIiwic2VsZWN0IiwibmFtZSIsImRlcGFydG1lbnRzIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiLCJmb3VuZGVkVXNlcnMiLCJmaW5kTWFueSIsImxlbmd0aCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/index.js"));
module.exports = __webpack_exports__;

})();