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
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaPhone"], {
    className: "mr-4 nav-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "d-flex flex-column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "tel:01753438837",
    className: "link telephone",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 10
    }
  }, "0175 343 88 37"), __jsx("a", {
    href: "tel:01723433209",
    className: "link telephone",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 10
    }
  }, "0172 343 32 09"))), __jsx("div", {
    className: "divider d-md-inline d-none",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 8
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/leistungen",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "d-flex flex-column justify-content-center align-items-center link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 10
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaTooth"], {
    className: "nav-icon mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  })), __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 10
    }
  }, "Leistungen"))), __jsx("div", {
    className: "divider",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 8
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/adresse",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: "d-flex flex-column justify-content-center align-items-center link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 10
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaMapMarkerAlt"], {
    className: "nav-icon mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  })), __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 10
    }
  }, "Adresse")))))), __jsx("div", {
    className: "row d-md-none d-flex mt-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "d-flex  align-items-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 6
    }
  }, __jsx("div", {
    className: "d-flex flex-column",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "tel:01753438837",
    className: "link telephone",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 8
    }
  }, "0175 343 88 37"), __jsx("a", {
    href: "tel:01723433209",
    className: "link telephone",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmJhci5qcyJdLCJuYW1lcyI6WyJOYXZiYXIiLCJ1c2VTdGF0ZSIsInNjcm9sbCIsInNldFNjcm9sbCIsInNjcm9sbFkiLCJ1c2VTY3JvbGxQb3NpdGlvbiIsInVzZUVmZmVjdCIsIm5hdkNsYXNzIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNRQyxzREFBUSxDQUFDLElBQUQsQ0FEaEI7QUFBQSxNQUNiQyxNQURhO0FBQUEsTUFDTEMsU0FESzs7QUFHcEIsTUFBTUMsT0FBTyxHQUFHQyx5RUFBaUIsQ0FBQyxFQUFELENBQWpDO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNmLFFBQUlGLE9BQU8sR0FBRyxDQUFkLEVBQWlCO0FBQ2hCRCxlQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0EsS0FGRCxNQUVPQSxTQUFTLENBQUMsSUFBRCxDQUFUO0FBQ1AsR0FKUSxFQUlOLENBQUNDLE9BQUQsQ0FKTSxDQUFUO0FBS0EsTUFBTUcsUUFBUSxHQUFHLDhDQUFqQjtBQUNBLFNBQ0M7QUFDQyxhQUFTLEVBQUVMLE1BQU0sYUFBTUssUUFBTixjQUFzQkEsUUFBdEIsMkJBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHQztBQUFLLGFBQVMsRUFBQyxrQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUMsNkJBQWY7QUFBNkMsU0FBSyxFQUFFO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxn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QUFBO0FBQUE7QUFBQTtBQUFBLHNCQURELEVBS0M7QUFBRyxRQUFJLEVBQUMsaUJBQVI7QUFBMEIsYUFBUyxFQUFDLGdCQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUxELENBREQsQ0FERCxDQWxERCxDQUhELENBREQ7QUFzRUEsQ0FqRkQ7O0dBQU1SLE07VUFHV0ssaUU7OztLQUhYTCxNO0FBbUZTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZWRjMDVjMTlhM2RkMzNmMDYwOTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgdXNlU2Nyb2xsUG9zaXRpb24gZnJvbSBcIkByZWFjdC1ob29rL3dpbmRvdy1zY3JvbGxcIjtcclxuaW1wb3J0IHsgRmFQaG9uZSwgRmFUb290aCwgRmFNYXBNYXJrZXJBbHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuXHRjb25zdCBbc2Nyb2xsLCBzZXRTY3JvbGxdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG5cdGNvbnN0IHNjcm9sbFkgPSB1c2VTY3JvbGxQb3NpdGlvbig2MCk7XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZiAoc2Nyb2xsWSA+IDApIHtcclxuXHRcdFx0c2V0U2Nyb2xsKGZhbHNlKTtcclxuXHRcdH0gZWxzZSBzZXRTY3JvbGwodHJ1ZSk7XHJcblx0fSwgW3Njcm9sbFldKTtcclxuXHRjb25zdCBuYXZDbGFzcyA9IFwibmV3LW5hdiBuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItbGlnaHRcIjtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PG5hdlxyXG5cdFx0XHRjbGFzc05hbWU9e3Njcm9sbCA/IGAke25hdkNsYXNzfWAgOiBgJHtuYXZDbGFzc30gbmF2LXNlY29uZGFyeS1zY3JvbGwgYH1cclxuXHRcdD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuJyBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nIG5hdmJhci1jZW50ZXInPlxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvJz5cclxuXHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9J25hdmJhci1icmFuZCBicmFuZC10aXRsZSc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J2JyYW5kLXRpdGxlJz5LbGluZ2VyPC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSdicmFuZC1zdWJ0aXRsZSc+WmFobmFyenRwcmF4aXM8L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tYXV0byBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgbmF2YmFyLWNlbnRlciBtLTAgbXQtbGctMCBtdC0zICc+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1lbmQgJz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nIGQtbWQtZmxleCBkLW5vbmUgYWxpZ24taXRlbXMtY2VudGVyJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxGYVBob25lIGNsYXNzTmFtZT0nbXItNCBuYXYtaWNvbic+PC9GYVBob25lPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggZmxleC1jb2x1bW4nPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPSd0ZWw6MDE3NTM0Mzg4MzcnIGNsYXNzTmFtZT0nbGluayB0ZWxlcGhvbmUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDAxNzUgMzQzIDg4IDM3XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9J3RlbDowMTcyMzQzMzIwOScgY2xhc3NOYW1lPSdsaW5rIHRlbGVwaG9uZSc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0MDE3MiAzNDMgMzIgMDlcclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkaXZpZGVyIGQtbWQtaW5saW5lIGQtbm9uZSc+PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9sZWlzdHVuZ2VuJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgbGluayc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEZhVG9vdGggY2xhc3NOYW1lPSduYXYtaWNvbiBtYi0yJz48L0ZhVG9vdGg+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8YT5MZWlzdHVuZ2VuPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZGl2aWRlcic+PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9hZHJlc3NlJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgbGluayc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEZhTWFwTWFya2VyQWx0IGNsYXNzTmFtZT0nbmF2LWljb24gbWItMic+PC9GYU1hcE1hcmtlckFsdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxhPkFkcmVzc2U8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JvdyBkLW1kLW5vbmUgZC1mbGV4IG10LTMnPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2QtZmxleCAgYWxpZ24taXRlbXMtY2VudGVyJz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2QtZmxleCBmbGV4LWNvbHVtbic+XHJcblx0XHRcdFx0XHRcdFx0PGEgaHJlZj0ndGVsOjAxNzUzNDM4ODM3JyBjbGFzc05hbWU9J2xpbmsgdGVsZXBob25lJz5cclxuXHRcdFx0XHRcdFx0XHRcdDAxNzUgMzQzIDg4IDM3XHJcblx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPSd0ZWw6MDE3MjM0MzMyMDknIGNsYXNzTmFtZT0nbGluayB0ZWxlcGhvbmUnPlxyXG5cdFx0XHRcdFx0XHRcdFx0MDE3MiAzNDMgMzIgMDlcclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9uYXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==