webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/main_description.js":
/*!****************************************!*\
  !*** ./components/main_description.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.esm.js");


var _this = undefined,
    _jsxFileName = "E:\\WEB DEV PROJECTS 2020\\Klinger Clinic\\components\\main_description.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var MainDescription = function MainDescription() {
  _s();

  var _useInView = Object(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__["useInView"])({
    /* Optional options */
    threshold: 0
  }),
      _useInView2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInView, 3),
      ref = _useInView2[0],
      inView = _useInView2[1],
      entry = _useInView2[2];

  return __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    ref: ref,
    animate: {
      x: inView ? 0 : 200,
      opacity: inView ? 1 : 0
    },
    transition: {
      ease: "easeOut",
      duration: 0.7
    },
    className: "row mb-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "col-lg-6 order-lg-1 order-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "img-background",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 6
    }
  }), __jsx("div", {
    id: "carouselExampleIndicators",
    className: "carousel slide",
    "data-ride": "carousel",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 6
    }
  }, __jsx("ol", {
    className: "carousel-indicators",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("li", {
    "data-target": "#carouselExampleIndicators",
    "data-slide-to": "0",
    className: "active",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 8
    }
  }), __jsx("li", {
    "data-target": "#carouselExampleIndicators",
    "data-slide-to": "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 8
    }
  }), __jsx("li", {
    "data-target": "#carouselExampleIndicators",
    "data-slide-to": "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 8
    }
  })), __jsx("div", {
    className: "carousel-inner hero-img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "carousel-item active",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 8
    }
  }, __jsx("img", {
    className: "d-block w-100 rounded ",
    src: "/slide_1.jpg",
    alt: "first praxis",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "carousel-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 8
    }
  }, __jsx("img", {
    className: "d-block w-100 rounded ",
    src: "/slide_2.jpg",
    alt: "Second praxis",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "carousel-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 8
    }
  }, __jsx("img", {
    className: "d-block w-100 rounded ",
    src: "/slide_3.jpg",
    alt: "Third praxis",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }))), __jsx("a", {
    className: "carousel-control-prev",
    href: "#carouselExampleIndicators",
    role: "button",
    "data-slide": "prev",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "carousel-control-prev-icon",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 8
    }
  }), __jsx("span", {
    className: "sr-only",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 8
    }
  }, "Previous")), __jsx("a", {
    className: "carousel-control-next",
    href: "#carouselExampleIndicators",
    role: "button",
    "data-slide": "next",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: "carousel-control-next-icon",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 8
    }
  }), __jsx("span", {
    className: "sr-only",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 8
    }
  }, "Next")))), __jsx("div", {
    className: "col-lg-6 order-1 mb-5 pl-lg-5 align-self-center ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 6
    }
  }, __jsx("h2", {
    className: "section-title mb-3 d-flex justify-content-lg-start justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, "Unserer Praxis"), __jsx("p", {
    className: "section-text text-lg-left text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, "Mit unserer Website m\xF6chten wir Ihnen einen Einblick in unsere Praxis f\xFCr Oralchirurgie in Schopfheim und L\xF6rrach geben und Sie \xFCber Behandlungsmethoden der modernen Zahnmedizin informieren. Wir freuen uns \xFCber Ihr Vertrauen und geben daf\xFCr unser Bestes"), __jsx("div", {
    className: "d-flex justify-content-lg-start justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, __jsx("button", {
    type: "button",
    className: "btn hero-btn mt-5 mb-0  ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 8
    }
  }, "Mehr erfahren"))))));
};

_s(MainDescription, "xcNnOkK/eOBEx/AJ1BTvf70kBfM=", false, function () {
  return [react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__["useInView"]];
});

_c = MainDescription;
/* harmony default export */ __webpack_exports__["default"] = (MainDescription);

var _c;

$RefreshReg$(_c, "MainDescription");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21haW5fZGVzY3JpcHRpb24uanMiXSwibmFtZXMiOlsiTWFpbkRlc2NyaXB0aW9uIiwidXNlSW5WaWV3IiwidGhyZXNob2xkIiwicmVmIiwiaW5WaWV3IiwiZW50cnkiLCJ4Iiwib3BhY2l0eSIsImVhc2UiLCJkdXJhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFBQSxtQkFDQUMsNkVBQVMsQ0FBQztBQUN0QztBQUNBQyxhQUFTLEVBQUU7QUFGMkIsR0FBRCxDQURUO0FBQUE7QUFBQSxNQUN0QkMsR0FEc0I7QUFBQSxNQUNqQkMsTUFEaUI7QUFBQSxNQUNUQyxLQURTOztBQUs3QixTQUNDO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0MsT0FBRyxFQUFFRixHQUROO0FBRUMsV0FBTyxFQUFFO0FBQUVHLE9BQUMsRUFBRUYsTUFBTSxHQUFHLENBQUgsR0FBTyxHQUFsQjtBQUF1QkcsYUFBTyxFQUFFSCxNQUFNLEdBQUcsQ0FBSCxHQUFPO0FBQTdDLEtBRlY7QUFHQyxjQUFVLEVBQUU7QUFBRUksVUFBSSxFQUFFLFNBQVI7QUFBbUJDLGNBQVEsRUFBRTtBQUE3QixLQUhiO0FBSUMsYUFBUyxFQUFDLFVBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1DO0FBQUssYUFBUyxFQUFDLDhCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFQztBQUNDLE1BQUUsRUFBQywyQkFESjtBQUVDLGFBQVMsRUFBQyxnQkFG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QUFBO0FBQUEsS0FDQztBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLGFBQVMsRUFBQywwQkFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxDQVZELENBREQsQ0E5RUQsQ0FERCxDQUREO0FBcUdBLENBMUdEOztHQUFNVCxlO1VBQ3dCQyxxRTs7O0tBRHhCRCxlO0FBNEdTQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMTg3YmUyNmVkYTZiNzVjNWEyMTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XHJcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIjtcclxuXHJcbmNvbnN0IE1haW5EZXNjcmlwdGlvbiA9ICgpID0+IHtcclxuXHRjb25zdCBbcmVmLCBpblZpZXcsIGVudHJ5XSA9IHVzZUluVmlldyh7XHJcblx0XHQvKiBPcHRpb25hbCBvcHRpb25zICovXHJcblx0XHR0aHJlc2hvbGQ6IDAsXHJcblx0fSk7XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHQ8bW90aW9uLmRpdlxyXG5cdFx0XHRcdHJlZj17cmVmfVxyXG5cdFx0XHRcdGFuaW1hdGU9e3sgeDogaW5WaWV3ID8gMCA6IDIwMCwgb3BhY2l0eTogaW5WaWV3ID8gMSA6IDAgfX1cclxuXHRcdFx0XHR0cmFuc2l0aW9uPXt7IGVhc2U6IFwiZWFzZU91dFwiLCBkdXJhdGlvbjogMC43IH19XHJcblx0XHRcdFx0Y2xhc3NOYW1lPSdyb3cgbWItNSdcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctNiBvcmRlci1sZy0xIG9yZGVyLTEyJz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdpbWctYmFja2dyb3VuZCc+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdGlkPSdjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzJ1xyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Nhcm91c2VsIHNsaWRlJ1xyXG5cdFx0XHRcdFx0XHRkYXRhLXJpZGU9J2Nhcm91c2VsJ1xyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8b2wgY2xhc3NOYW1lPSdjYXJvdXNlbC1pbmRpY2F0b3JzJz5cclxuXHRcdFx0XHRcdFx0XHQ8bGlcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtdGFyZ2V0PScjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9ycydcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtc2xpZGUtdG89JzAnXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2FjdGl2ZSdcclxuXHRcdFx0XHRcdFx0XHQ+PC9saT5cclxuXHRcdFx0XHRcdFx0XHQ8bGlcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtdGFyZ2V0PScjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9ycydcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtc2xpZGUtdG89JzEnXHJcblx0XHRcdFx0XHRcdFx0PjwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpXHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLXRhcmdldD0nI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnMnXHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLXNsaWRlLXRvPScyJ1xyXG5cdFx0XHRcdFx0XHRcdD48L2xpPlxyXG5cdFx0XHRcdFx0XHQ8L29sPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2Fyb3VzZWwtaW5uZXIgaGVyby1pbWcnPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjYXJvdXNlbC1pdGVtIGFjdGl2ZSc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZC1ibG9jayB3LTEwMCByb3VuZGVkICdcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3JjPScvc2xpZGVfMS5qcGcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFsdD0nZmlyc3QgcHJheGlzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY2Fyb3VzZWwtaXRlbSc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZC1ibG9jayB3LTEwMCByb3VuZGVkICdcclxuXHRcdFx0XHRcdFx0XHRcdFx0c3JjPScvc2xpZGVfMi5qcGcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFsdD0nU2Vjb25kIHByYXhpcydcclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2Nhcm91c2VsLWl0ZW0nPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2QtYmxvY2sgdy0xMDAgcm91bmRlZCAnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNyYz0nL3NsaWRlXzMuanBnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhbHQ9J1RoaXJkIHByYXhpcydcclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8YVxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY2Fyb3VzZWwtY29udHJvbC1wcmV2J1xyXG5cdFx0XHRcdFx0XHRcdGhyZWY9JyNjYXJvdXNlbEV4YW1wbGVJbmRpY2F0b3JzJ1xyXG5cdFx0XHRcdFx0XHRcdHJvbGU9J2J1dHRvbidcclxuXHRcdFx0XHRcdFx0XHRkYXRhLXNsaWRlPSdwcmV2J1xyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW5cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24nXHJcblx0XHRcdFx0XHRcdFx0XHRhcmlhLWhpZGRlbj0ndHJ1ZSdcclxuXHRcdFx0XHRcdFx0XHQ+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nc3Itb25seSc+UHJldmlvdXM8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PGFcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Nhcm91c2VsLWNvbnRyb2wtbmV4dCdcclxuXHRcdFx0XHRcdFx0XHRocmVmPScjY2Fyb3VzZWxFeGFtcGxlSW5kaWNhdG9ycydcclxuXHRcdFx0XHRcdFx0XHRyb2xlPSdidXR0b24nXHJcblx0XHRcdFx0XHRcdFx0ZGF0YS1zbGlkZT0nbmV4dCdcclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2Nhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uJ1xyXG5cdFx0XHRcdFx0XHRcdFx0YXJpYS1oaWRkZW49J3RydWUnXHJcblx0XHRcdFx0XHRcdFx0Pjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3NyLW9ubHknPk5leHQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTYgb3JkZXItMSBtYi01IHBsLWxnLTUgYWxpZ24tc2VsZi1jZW50ZXIgJz5cclxuXHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9J3NlY3Rpb24tdGl0bGUgbWItMyBkLWZsZXgganVzdGlmeS1jb250ZW50LWxnLXN0YXJ0IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxyXG5cdFx0XHRcdFx0XHRcdFVuc2VyZXIgUHJheGlzXHJcblx0XHRcdFx0XHRcdDwvaDI+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nc2VjdGlvbi10ZXh0IHRleHQtbGctbGVmdCB0ZXh0LWNlbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0TWl0IHVuc2VyZXIgV2Vic2l0ZSBtw7ZjaHRlbiB3aXIgSWhuZW4gZWluZW4gRWluYmxpY2sgaW4gdW5zZXJlXHJcblx0XHRcdFx0XHRcdFx0UHJheGlzIGbDvHIgT3JhbGNoaXJ1cmdpZSBpbiBTY2hvcGZoZWltIHVuZCBMw7ZycmFjaCBnZWJlbiB1bmQgU2llXHJcblx0XHRcdFx0XHRcdFx0w7xiZXIgQmVoYW5kbHVuZ3NtZXRob2RlbiBkZXIgbW9kZXJuZW4gWmFobm1lZGl6aW4gaW5mb3JtaWVyZW4uIFdpclxyXG5cdFx0XHRcdFx0XHRcdGZyZXVlbiB1bnMgw7xiZXIgSWhyIFZlcnRyYXVlbiB1bmQgZ2ViZW4gZGFmw7xyIHVuc2VyIEJlc3Rlc1xyXG5cdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkLWZsZXgganVzdGlmeS1jb250ZW50LWxnLXN0YXJ0IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2J0biBoZXJvLWJ0biBtdC01IG1iLTAgICc+XHJcblx0XHRcdFx0XHRcdFx0XHRNZWhyIGVyZmFocmVuXHJcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvbW90aW9uLmRpdj5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluRGVzY3JpcHRpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=