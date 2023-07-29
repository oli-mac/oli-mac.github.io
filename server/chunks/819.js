"use strict";
exports.id = 819;
exports.ids = [819];
exports.modules = {

/***/ 2854:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const quote = {
    initial: {
        opacity: 1
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08
        }
    }
};
const eachWord = {
    initial: {
        opacity: 0,
        y: 50
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
};
const AnimatedText = ({ text , className =""  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full mx-auto py-2 flex items-center justify-center text-center    overflow-hidden sm:py-0",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h1, {
            className: `inline-block w-full text-dark font-bold capitalize text-8xl dark:text-light ${className} `,
            variants: quote,
            initial: "initial",
            animate: "animate",
            children: text.split(" ").map((word, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {
                    className: "inline-block",
                    variants: eachWord,
                    children: [
                        word,
                        "\xa0"
                    ]
                }, word + "-" + index))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimatedText);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6934:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const TransitionEffect = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                className: "fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary dark:bg-primaryDark",
                initial: {
                    x: "100%",
                    width: "100%"
                },
                animate: {
                    x: "0%",
                    width: "0%"
                },
                exit: {
                    x: [
                        "0%",
                        "100%"
                    ],
                    width: [
                        "0%",
                        "100%"
                    ]
                },
                transition: {
                    duration: 0.8,
                    ease: "easeInOut"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                className: "fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-dark dark:bg-light",
                initial: {
                    x: "100%",
                    width: "100%"
                },
                animate: {
                    x: "0%",
                    width: "0%"
                },
                exit: {
                    x: [
                        "0%",
                        "100%"
                    ],
                    width: [
                        "0%",
                        "100%"
                    ]
                },
                transition: {
                    delay: 0.2,
                    duration: 0.8,
                    ease: "easeInOut"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                className: "fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-light dark:bg-dark",
                initial: {
                    x: "100%",
                    width: "100%"
                },
                animate: {
                    x: "0%",
                    width: "0%"
                },
                exit: {
                    x: [
                        "0%",
                        "100%"
                    ],
                    width: [
                        "0%",
                        "100%"
                    ]
                },
                transition: {
                    delay: 0.4,
                    duration: 0.8,
                    ease: "easeInOut"
                }
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransitionEffect);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;