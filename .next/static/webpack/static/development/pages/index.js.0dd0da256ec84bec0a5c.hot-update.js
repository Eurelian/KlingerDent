webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/hero.js":
/*!****************************!*\
  !*** ./components/hero.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var _this = undefined,
    _jsxFileName = "E:\\WEB DEV PROJECTS 2020\\Klinger Clinic\\components\\hero.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Hero = function Hero() {
  return __jsx("div", {
    className: "jumbotron",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "container justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "row align-items-center justify-content-between ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    initial: {
      x: -50
    },
    animate: {
      x: 0
    },
    transition: {
      duration: 0.5
    },
    className: "col-lg-4 pb-4 hero-align-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 6
    }
  }, __jsx("i", {
    className: "fas fa-smile-beam hero-icon mb-4 ml-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx("h1", {
    className: "hero-title mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, "Herzlich willkommen in unserer Praxis"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/praxis",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("button", {
    type: "button",
    className: "btn hero-btn mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 8
    }
  }, "Unser Team"))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    initial: {
      x: 50
    },
    animate: {
      x: 0
    },
    transition: {
      duration: 0.5
    },
    className: "col-lg ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "img-background",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx("img", {
    className: "rounded img-fluid hero-img  ",
    alt: "hero img",
    src: "https://image.freepik.com/free-photo/female-patient-smiling-clinic_107420-65294.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  })))));
};

_c = Hero;
/* harmony default export */ __webpack_exports__["default"] = (Hero);

var _c;

$RefreshReg$(_c, "Hero");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlcm8uanMiXSwibmFtZXMiOlsiSGVybyIsIngiLCJkdXJhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2xCLFNBQ0M7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUMsa0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBUyxFQUFDLGlEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLG9EQUFELENBQVEsR0FBUjtBQUNDLFdBQU8sRUFBRTtBQUFFQyxPQUFDLEVBQUUsQ0FBQztBQUFOLEtBRFY7QUFFQyxXQUFPLEVBQUU7QUFBRUEsT0FBQyxFQUFFO0FBQUwsS0FGVjtBQUdDLGNBQVUsRUFBRTtBQUFFQyxjQUFRLEVBQUU7QUFBWixLQUhiO0FBSUMsYUFBUyxFQUFDLGlDQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNQztBQUFHLGFBQVMsRUFBQyx1Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkQsRUFPQztBQUFJLGFBQVMsRUFBQyxpQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQVBELEVBVUMsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLGFBQVMsRUFBQyxtQkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxDQVZELENBREQsRUFpQkMsTUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDQyxXQUFPLEVBQUU7QUFBRUQsT0FBQyxFQUFFO0FBQUwsS0FEVjtBQUVDLFdBQU8sRUFBRTtBQUFFQSxPQUFDLEVBQUU7QUFBTCxLQUZWO0FBR0MsY0FBVSxFQUFFO0FBQUVDLGNBQVEsRUFBRTtBQUFaLEtBSGI7QUFJQyxhQUFTLEVBQUMsU0FKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUM7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5ELEVBT0M7QUFDQyxhQUFTLEVBQUMsOEJBRFg7QUFFQyxPQUFHLEVBQUMsVUFGTDtBQUdDLE9BQUcsRUFBQyxxRkFITDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEQsQ0FqQkQsQ0FERCxDQURELENBREQ7QUFxQ0EsQ0F0Q0Q7O0tBQU1GLEk7QUF3Q1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4wZGQwZGEyNTZlYzg0YmVjMGE1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBGYVNtaWxlQmVhbSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5cclxuY29uc3QgSGVybyA9ICgpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBjbGFzc05hbWU9J2p1bWJvdHJvbic+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIganVzdGlmeS1jb250ZW50LWNlbnRlcic+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JvdyBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gJz5cclxuXHRcdFx0XHRcdDxtb3Rpb24uZGl2XHJcblx0XHRcdFx0XHRcdGluaXRpYWw9e3sgeDogLTUwIH19XHJcblx0XHRcdFx0XHRcdGFuaW1hdGU9e3sgeDogMCB9fVxyXG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjUgfX1cclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjb2wtbGctNCBwYi00IGhlcm8tYWxpZ24tY2VudGVyJ1xyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhcyBmYS1zbWlsZS1iZWFtIGhlcm8taWNvbiBtYi00IG1sLTInPjwvaT5cclxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT0naGVyby10aXRsZSBtYi01Jz5cclxuXHRcdFx0XHRcdFx0XHRIZXJ6bGljaCB3aWxsa29tbWVuIGluIHVuc2VyZXIgUHJheGlzXHJcblx0XHRcdFx0XHRcdDwvaDE+XHJcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9wcmF4aXMnPlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2J0biBoZXJvLWJ0biBtdC0zJz5cclxuXHRcdFx0XHRcdFx0XHRcdFVuc2VyIFRlYW1cclxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxyXG5cdFx0XHRcdFx0PG1vdGlvbi5kaXZcclxuXHRcdFx0XHRcdFx0aW5pdGlhbD17eyB4OiA1MCB9fVxyXG5cdFx0XHRcdFx0XHRhbmltYXRlPXt7IHg6IDAgfX1cclxuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC41IH19XHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY29sLWxnICdcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ltZy1iYWNrZ3JvdW5kJz48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0ncm91bmRlZCBpbWctZmx1aWQgaGVyby1pbWcgICdcclxuXHRcdFx0XHRcdFx0XHRhbHQ9J2hlcm8gaW1nJ1xyXG5cdFx0XHRcdFx0XHRcdHNyYz0naHR0cHM6Ly9pbWFnZS5mcmVlcGlrLmNvbS9mcmVlLXBob3RvL2ZlbWFsZS1wYXRpZW50LXNtaWxpbmctY2xpbmljXzEwNzQyMC02NTI5NC5qcGcnXHJcblx0XHRcdFx0XHRcdD48L2ltZz5cclxuXHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==