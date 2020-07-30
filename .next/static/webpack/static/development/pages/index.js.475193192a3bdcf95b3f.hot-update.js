webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_hook_window_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-hook/window-scroll */ "./node_modules/@react-hook/window-scroll/dist/module/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var _this = undefined,
    _jsxFileName = "E:\\WEB DEV PROJECTS 2020\\Klinger Clinic\\components\\navbar.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Navbar = function Navbar() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      scroll = _useState[0],
      setScroll = _useState[1];

  var scrollY = Object(_react_hook_window_scroll__WEBPACK_IMPORTED_MODULE_2__["default"])(60);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (scrollY > 0) {
      setScroll(false);
    } else setScroll(true);
  }, [scrollY]);
  var navClass = "new-nav navbar navbar-expand-lg navbar-light";
  return __jsx("nav", {
    className: scroll ? "".concat(navClass) : "".concat(navClass, " nav-secondary-scroll "),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "container justify-content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }
  }, __jsx("div", {
    className: "row justify-content-between",
    style: {
      width: "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: " navbar-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 6
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "navbar-brand brand-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 8
    }
  }, __jsx("p", {
    className: "brand-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "Klinger"), __jsx("p", {
    className: "brand-subtitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "Zahnarztpraxis")))), __jsx("div", {
    className: "col-sm-auto d-flex justify-content-center align-items-center navbar-center m-0 mt-lg-0 mt-3 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "d-flex align-items-center justify-content-end ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: " d-md-flex d-none align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "d-flex flex-column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "tel:01753438837",
    className: "link telephone",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 10
    }
  }, "0175 343 88 37"), __jsx("a", {
    href: "tel:01723433209",
    className: "link telephone",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 10
    }
  }, "0172 343 32 09"))), __jsx("div", {
    className: "divider d-md-inline d-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 8
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/leistungen",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "d-flex flex-column justify-content-center align-items-center link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 10
    }
  }, __jsx("i", {
    className: "fas fa-tooth nav-icon mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  })), __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 10
    }
  }, "Leistungen"))), __jsx("div", {
    className: "divider",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 8
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/adresse",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "d-flex flex-column justify-content-center align-items-center link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 10
    }
  }, __jsx("i", {
    className: "fas fa-map-marker-alt nav-icon mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  })), __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 10
    }
  }, "Adresse")))))), __jsx("div", {
    className: "row d-md-none d-flex mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "d-flex  align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "d-flex flex-column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "tel:01753438837",
    className: "link telephone",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 8
    }
  }, "0175 343 88 37"), __jsx("a", {
    href: "tel:01723433209",
    className: "link telephone",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 8
    }
  }, "0172 343 32 09"))))));
};

_s(Navbar, "AOBRvAxNmXrkVEsqd4gOv1JAYVQ=", false, function () {
  return [_react_hook_window_scroll__WEBPACK_IMPORTED_MODULE_2__["default"]];
});

_c = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

$RefreshReg$(_c, "Navbar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhci5qcyJdLCJuYW1lcyI6WyJOYXZiYXIiLCJ1c2VTdGF0ZSIsInNjcm9sbCIsInNldFNjcm9sbCIsInNjcm9sbFkiLCJ1c2VTY3JvbGxQb3NpdGlvbiIsInVzZUVmZmVjdCIsIm5hdkNsYXNzIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNRQyxzREFBUSxDQUFDLElBQUQsQ0FEaEI7QUFBQSxNQUNiQyxNQURhO0FBQUEsTUFDTEMsU0FESzs7QUFHcEIsTUFBTUMsT0FBTyxHQUFHQyx5RUFBaUIsQ0FBQyxFQUFELENBQWpDO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNmLFFBQUlGLE9BQU8sR0FBRyxDQUFkLEVBQWlCO0FBQ2hCRCxlQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0EsS0FGRCxNQUVPQSxTQUFTLENBQUMsSUFBRCxDQUFUO0FBQ1AsR0FKUSxFQUlOLENBQUNDLE9BQUQsQ0FKTSxDQUFUO0FBS0EsTUFBTUcsUUFBUSxHQUFHLDhDQUFqQjtBQUNBLFNBQ0M7QUFDQyxhQUFTLEVBQUVMLE1BQU0sYUFBTUssUUFBTixjQUFzQkEsUUFBdEIsMkJBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHQztBQUFLLGFBQVMsRUFBQyxrQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUMsNkJBQWY7QUFBNkMsU0FBSyxFQUFFO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxn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QTtBQUFBLHNCQUxELENBREQsQ0FERCxDQWhERCxDQUhELENBREQ7QUFvRUEsQ0EvRUQ7O0dBQU1SLE07VUFHV0ssaUU7OztLQUhYTCxNO0FBaUZTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNDc1MTkzMTkyYTNiZGNmOTViM2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgdXNlU2Nyb2xsUG9zaXRpb24gZnJvbSBcIkByZWFjdC1ob29rL3dpbmRvdy1zY3JvbGxcIjtcclxuaW1wb3J0IHsgZmFCZWVyIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcblx0Y29uc3QgW3Njcm9sbCwgc2V0U2Nyb2xsXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuXHRjb25zdCBzY3JvbGxZID0gdXNlU2Nyb2xsUG9zaXRpb24oNjApO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0aWYgKHNjcm9sbFkgPiAwKSB7XHJcblx0XHRcdHNldFNjcm9sbChmYWxzZSk7XHJcblx0XHR9IGVsc2Ugc2V0U2Nyb2xsKHRydWUpO1xyXG5cdH0sIFtzY3JvbGxZXSk7XHJcblx0Y29uc3QgbmF2Q2xhc3MgPSBcIm5ldy1uYXYgbmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0XCI7XHJcblx0cmV0dXJuIChcclxuXHRcdDxuYXZcclxuXHRcdFx0Y2xhc3NOYW1lPXtzY3JvbGwgPyBgJHtuYXZDbGFzc31gIDogYCR7bmF2Q2xhc3N9IG5hdi1zZWNvbmRhcnktc2Nyb2xsIGB9XHJcblx0XHQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIganVzdGlmeS1jb250ZW50LWNlbnRlcic+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbicgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9JyBuYXZiYXItY2VudGVyJz5cclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nLyc+XHJcblx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPSduYXZiYXItYnJhbmQgYnJhbmQtdGl0bGUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdicmFuZC10aXRsZSc+S2xpbmdlcjwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nYnJhbmQtc3VidGl0bGUnPlphaG5hcnp0cHJheGlzPC9wPlxyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLXNtLWF1dG8gZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIG5hdmJhci1jZW50ZXIgbS0wIG10LWxnLTAgbXQtMyAnPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtZW5kICc+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9JyBkLW1kLWZsZXggZC1ub25lIGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGZsZXgtY29sdW1uJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj0ndGVsOjAxNzUzNDM4ODM3JyBjbGFzc05hbWU9J2xpbmsgdGVsZXBob25lJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQwMTc1IDM0MyA4OCAzN1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPSd0ZWw6MDE3MjM0MzMyMDknIGNsYXNzTmFtZT0nbGluayB0ZWxlcGhvbmUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDAxNzIgMzQzIDMyIDA5XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGl2aWRlciBkLW1kLWlubGluZSBkLW5vbmUnPjwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvbGVpc3R1bmdlbic+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGxpbmsnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmFzIGZhLXRvb3RoIG5hdi1pY29uIG1iLTInPjwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhPkxlaXN0dW5nZW48L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkaXZpZGVyJz48L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2FkcmVzc2UnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2QtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciBsaW5rJz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhcyBmYS1tYXAtbWFya2VyLWFsdCBuYXYtaWNvbiBtYi0yJz48L2k+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YT5BZHJlc3NlPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cgZC1tZC1ub25lIGQtZmxleCBtdC0zJz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggIGFsaWduLWl0ZW1zLWNlbnRlcic+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggZmxleC1jb2x1bW4nPlxyXG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9J3RlbDowMTc1MzQzODgzNycgY2xhc3NOYW1lPSdsaW5rIHRlbGVwaG9uZSc+XHJcblx0XHRcdFx0XHRcdFx0XHQwMTc1IDM0MyA4OCAzN1xyXG5cdFx0XHRcdFx0XHRcdDwvYT5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGEgaHJlZj0ndGVsOjAxNzIzNDMzMjA5JyBjbGFzc05hbWU9J2xpbmsgdGVsZXBob25lJz5cclxuXHRcdFx0XHRcdFx0XHRcdDAxNzIgMzQzIDMyIDA5XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvbmF2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=