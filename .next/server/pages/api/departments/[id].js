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
exports.id = "pages/api/departments/[id]";
exports.ids = ["pages/api/departments/[id]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/departments/[id].js":
/*!***************************************!*\
  !*** ./pages/api/departments/[id].js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ departmentId)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nasync function departmentId(req, res) {\n    try {\n        const foundedDepartment = await prisma.department.findFirst({\n            where: {\n                id: +req.query.id,\n                deleted: false\n            }\n        });\n        if (!foundedDepartment) return res.status(400).send({\n            message: \"Department not found!\"\n        });\n        if (req.method === \"PUT\") {\n            const updatedDepartment = await prisma.department.update({\n                where: {\n                    id: +req.query.id\n                },\n                data: {\n                    name: req.body.name\n                }\n            });\n            return res.status(200).send(updatedDepartment);\n        }\n        if (req.method === \"DELETE\") {\n            const departmentInUsed = await prisma.user.findMany({\n                where: {\n                    departmentId: foundedDepartment.id,\n                    deleted: false\n                }\n            });\n            if (departmentInUsed.length >= 1) return res.send({\n                message: \"Department in used\"\n            });\n            const deletedDepartment = await prisma.department.update({\n                where: {\n                    id: +req.query.id\n                },\n                data: {\n                    deleted: true\n                }\n            });\n            res.status(200).json(deletedDepartment);\n        }\n    } catch (error) {\n        res.status(500).send(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGVwYXJ0bWVudHMvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNkM7QUFDN0MsS0FBSyxDQUFDQyxNQUFNLEdBQUcsR0FBRyxDQUFDRCx3REFBWTtBQUNoQixlQUFlRSxZQUFZLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFLENBQUM7SUFDcEQsR0FBRyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUNDLGlCQUFpQixHQUFHLEtBQUssQ0FBQ0osTUFBTSxDQUFDSyxVQUFVLENBQUNDLFNBQVMsQ0FBQyxDQUFDO1lBQzNEQyxLQUFLLEVBQUUsQ0FBQztnQkFBQ0MsRUFBRSxHQUFHTixHQUFHLENBQUNPLEtBQUssQ0FBQ0QsRUFBRTtnQkFBRUUsT0FBTyxFQUFFLEtBQUs7WUFBQyxDQUFDO1FBQzlDLENBQUM7UUFDRCxFQUFFLEdBQUdOLGlCQUFpQixFQUNwQixNQUFNLENBQUNELEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDLENBQUM7WUFBQ0MsT0FBTyxFQUFFLENBQXVCO1FBQUMsQ0FBQztRQUNsRSxFQUFFLEVBQUVYLEdBQUcsQ0FBQ1ksTUFBTSxLQUFLLENBQUssTUFBRSxDQUFDO1lBQ3pCLEtBQUssQ0FBQ0MsaUJBQWlCLEdBQUcsS0FBSyxDQUFDZixNQUFNLENBQUNLLFVBQVUsQ0FBQ1csTUFBTSxDQUFDLENBQUM7Z0JBQ3hEVCxLQUFLLEVBQUUsQ0FBQztvQkFDTkMsRUFBRSxHQUFHTixHQUFHLENBQUNPLEtBQUssQ0FBQ0QsRUFBRTtnQkFDbkIsQ0FBQztnQkFDRFMsSUFBSSxFQUFFLENBQUM7b0JBQUNDLElBQUksRUFBRWhCLEdBQUcsQ0FBQ2lCLElBQUksQ0FBQ0QsSUFBSTtnQkFBQyxDQUFDO1lBQy9CLENBQUM7WUFDRCxNQUFNLENBQUNmLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDRyxpQkFBaUI7UUFDL0MsQ0FBQztRQUNELEVBQUUsRUFBRWIsR0FBRyxDQUFDWSxNQUFNLEtBQUssQ0FBUSxTQUFFLENBQUM7WUFDNUIsS0FBSyxDQUFDTSxnQkFBZ0IsR0FBRyxLQUFLLENBQUNwQixNQUFNLENBQUNxQixJQUFJLENBQUNDLFFBQVEsQ0FBQyxDQUFDO2dCQUNuRGYsS0FBSyxFQUFFLENBQUM7b0JBQ05OLFlBQVksRUFBRUcsaUJBQWlCLENBQUNJLEVBQUU7b0JBQ2xDRSxPQUFPLEVBQUUsS0FBSztnQkFDaEIsQ0FBQztZQUNILENBQUM7WUFDRCxFQUFFLEVBQUVVLGdCQUFnQixDQUFDRyxNQUFNLElBQUksQ0FBQyxFQUM5QixNQUFNLENBQUNwQixHQUFHLENBQUNTLElBQUksQ0FBQyxDQUFDO2dCQUFDQyxPQUFPLEVBQUUsQ0FBb0I7WUFBQyxDQUFDO1lBQ25ELEtBQUssQ0FBQ1csaUJBQWlCLEdBQUcsS0FBSyxDQUFDeEIsTUFBTSxDQUFDSyxVQUFVLENBQUNXLE1BQU0sQ0FBQyxDQUFDO2dCQUN4RFQsS0FBSyxFQUFFLENBQUM7b0JBQ05DLEVBQUUsR0FBR04sR0FBRyxDQUFDTyxLQUFLLENBQUNELEVBQUU7Z0JBQ25CLENBQUM7Z0JBQ0RTLElBQUksRUFBRSxDQUFDO29CQUFDUCxPQUFPLEVBQUUsSUFBSTtnQkFBQyxDQUFDO1lBQ3pCLENBQUM7WUFDRFAsR0FBRyxDQUFDUSxNQUFNLENBQUMsR0FBRyxFQUFFYyxJQUFJLENBQUNELGlCQUFpQjtRQUN4QyxDQUFDO0lBQ0gsQ0FBQyxDQUFDLEtBQUssRUFBRUUsS0FBSyxFQUFFLENBQUM7UUFDZnZCLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDLEdBQUcsRUFBRUMsSUFBSSxDQUFDYyxLQUFLO0lBQzVCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZW50ZXJwcmlzZS8uL3BhZ2VzL2FwaS9kZXBhcnRtZW50cy9baWRdLmpzP2E4MjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGVwYXJ0bWVudElkKHJlcSwgcmVzKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGZvdW5kZWREZXBhcnRtZW50ID0gYXdhaXQgcHJpc21hLmRlcGFydG1lbnQuZmluZEZpcnN0KHtcclxuICAgICAgd2hlcmU6IHsgaWQ6ICtyZXEucXVlcnkuaWQsIGRlbGV0ZWQ6IGZhbHNlIH0sXHJcbiAgICB9KTtcclxuICAgIGlmICghZm91bmRlZERlcGFydG1lbnQpXHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6IFwiRGVwYXJ0bWVudCBub3QgZm91bmQhXCIgfSk7XHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQVVRcIikge1xyXG4gICAgICBjb25zdCB1cGRhdGVkRGVwYXJ0bWVudCA9IGF3YWl0IHByaXNtYS5kZXBhcnRtZW50LnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgIGlkOiArcmVxLnF1ZXJ5LmlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YTogeyBuYW1lOiByZXEuYm9keS5uYW1lIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQodXBkYXRlZERlcGFydG1lbnQpO1xyXG4gICAgfVxyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09IFwiREVMRVRFXCIpIHtcclxuICAgICAgY29uc3QgZGVwYXJ0bWVudEluVXNlZCA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRNYW55KHtcclxuICAgICAgICB3aGVyZToge1xyXG4gICAgICAgICAgZGVwYXJ0bWVudElkOiBmb3VuZGVkRGVwYXJ0bWVudC5pZCxcclxuICAgICAgICAgIGRlbGV0ZWQ6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoZGVwYXJ0bWVudEluVXNlZC5sZW5ndGggPj0gMSlcclxuICAgICAgICByZXR1cm4gcmVzLnNlbmQoeyBtZXNzYWdlOiBcIkRlcGFydG1lbnQgaW4gdXNlZFwiIH0pO1xyXG4gICAgICBjb25zdCBkZWxldGVkRGVwYXJ0bWVudCA9IGF3YWl0IHByaXNtYS5kZXBhcnRtZW50LnVwZGF0ZSh7XHJcbiAgICAgICAgd2hlcmU6IHtcclxuICAgICAgICAgIGlkOiArcmVxLnF1ZXJ5LmlkLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YTogeyBkZWxldGVkOiB0cnVlIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihkZWxldGVkRGVwYXJ0bWVudCk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGVycm9yKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImRlcGFydG1lbnRJZCIsInJlcSIsInJlcyIsImZvdW5kZWREZXBhcnRtZW50IiwiZGVwYXJ0bWVudCIsImZpbmRGaXJzdCIsIndoZXJlIiwiaWQiLCJxdWVyeSIsImRlbGV0ZWQiLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSIsIm1ldGhvZCIsInVwZGF0ZWREZXBhcnRtZW50IiwidXBkYXRlIiwiZGF0YSIsIm5hbWUiLCJib2R5IiwiZGVwYXJ0bWVudEluVXNlZCIsInVzZXIiLCJmaW5kTWFueSIsImxlbmd0aCIsImRlbGV0ZWREZXBhcnRtZW50IiwianNvbiIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/departments/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/departments/[id].js"));
module.exports = __webpack_exports__;

})();