(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2648:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _interopRequireDefault;
    }
}));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ }),

/***/ 2584:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Montserrat_656221', '__Montserrat_Fallback_656221'","fontStyle":"normal"},
	"className": "__className_656221",
	"variable": "__variable_656221"
};


/***/ }),

/***/ 5700:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(497);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




const Footer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "   w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base   ",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            className: "py-8 px-12 flex items-center justify-between lg:flex-col lg:py-6",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    children: [
                        new Date().getFullYear(),
                        " \xa9 All Rights Reserved."
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center lg:py-2",
                    children: [
                        "Made with ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-primary dark:text-primaryDark text-2xl px-1",
                            children: " ♡"
                        }),
                        " by \xa0",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "https://olyadmulugeta.live",
                            className: "underline underline-offset-2",
                            children: "Olyad Mulugeta"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: "https://olyadmulugeta.live",
                    className: "underline underline-offset-2",
                    children: "Say Hello"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 9981:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const MotionLink = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion)((next_link__WEBPACK_IMPORTED_MODULE_1___default()));
const Logo = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex items-center justify-center mt-2",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MotionLink, {
            href: "/",
            className: "   w-16    h-16    bg-dark    text-light    flex    items-center    justify-center    rounded-full    text-2xl    font-bold   border border-solid border-transparent   dark:border-light",
            whileHover: {
                backgroundColor: [
                    "#121212",
                    "rgba(131,58,180,1)",
                    "rgba(253,29,29,1)",
                    "rgba(252,176,69,1)",
                    "rgba(131,58,180,1)",
                    "#121212"
                ],
                transition: {
                    duration: 1,
                    repeat: Infinity
                }
            },
            children: "OM"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 971:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9981);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5444);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6197);
/* harmony import */ var _hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(784);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Logo__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_6__]);
([_Logo__WEBPACK_IMPORTED_MODULE_3__, framer_motion__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const CustomLink = ({ href , title , className =""  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: href,
        className: `${className} relative group`,
        children: [
            title,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: `
                h-[1px] 
                inline-block 
                w-0
                bg-dark 
                absolute 
                left-0 
                bottom-0.5
                group-hover:w-full transition-[width] ease duration-300
                ${router.asPath === href ? "w-full" : "w-0"}
                dark:bg-light
                `,
                children: " \xa0"
            })
        ]
    });
};
const CustomMobileLink = ({ href , title , className ="" , toggle  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const handleClick = ()=>{
        toggle();
        router.push(href);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        href: href,
        className: `${className} relative group text-light dark:text-dark my-2`,
        onClick: handleClick,
        children: [
            title,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: `
                h-[1px] 
                inline-block 
                w-0
                bg-light
                absolute 
                left-0 
                bottom-0.5
                group-hover:w-full transition-[width] ease duration-300
                ${router.asPath === href ? "w-full" : "w-0"}
                dark:bg-dark
                `,
                children: " \xa0"
            })
        ]
    });
};
const NavBar = ()=>{
    const [mode, setMode] = (0,_hooks_useThemeSwitcher__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleClick = ()=>{
        setIsOpen(!isOpen);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative     z-10 lg:px-16 md:px-12 sm:px-8",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: " flex-col justify-center items-center hidden lg:flex",
                onClick: handleClick,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: `bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: `bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: `bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full flex justify-between items-center lg:hidden",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomLink, {
                                href: "/",
                                title: "Home ",
                                className: "mr-4"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomLink, {
                                href: "/About",
                                title: "About ",
                                className: "mx-4"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomLink, {
                                href: "/projects",
                                title: "Projects ",
                                className: "mx-4"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomLink, {
                                href: "/articles",
                                title: "Credentials ",
                                className: "ml-4"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        className: "flex items-center justify-center flex-wrap",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {
                                href: "/",
                                target: "_blank",
                                whileHover: {
                                    y: -2
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                className: "w-6 mr-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__/* .TwitterIcon */ .Zm, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {
                                href: "https://github.com/oli-mac",
                                target: "_blank",
                                whileHover: {
                                    y: -2
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                className: "w-6 mx-3",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__/* .GithubIcon */ .ET, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {
                                whileHover: {
                                    y: -2
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                className: "w-6 mx-3",
                                href: "https://www.linkedin.com/in/olyad-mulugeta-79875621b/",
                                target: "_blank",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__/* .LinkedInIcon */ .nI, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {
                                whileHover: {
                                    y: -2
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                className: "w-6 mx-3",
                                href: "https://www.linkedin.com/in/olyad-mulugeta-79875621b/",
                                target: "_blank",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__/* .PinterestIcon */ .cH, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {
                                whileHover: {
                                    y: -2
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                className: "w-6 ml-3",
                                href: "https://www.facebook.com/profile.php?id=100008821115355",
                                target: "_blank",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__/* .DribbbleIcon */ .uf, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>setMode(mode === "light" ? "dark" : "light"),
                                className: `ml-3 flex items-center justify-center rounded-full p-1
                ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                `,
                                children: mode === "dark" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__/* .SunIcon */ .NW, {
                                    className: "fill-dark"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__/* .MoonIcon */ .kL, {
                                    className: "fill-dark"
                                })
                            })
                        ]
                    })
                ]
            }),
            isOpen ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
                initial: {
                    scale: 0,
                    opacity: 0,
                    x: "-50%",
                    y: "-50%"
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                className: "min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2   bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        className: "flex items-center flex-col justify-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomMobileLink, {
                                href: "/",
                                title: "Home ",
                                className: "",
                                toggle: handleClick
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomMobileLink, {
                                href: "/About",
                                title: "About ",
                                className: "",
                                toggle: handleClick
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomMobileLink, {
                                href: "/projects",
                                title: "Projects ",
                                className: "",
                                toggle: handleClick
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomMobileLink, {
                                href: "/articles",
                                title: "Credentials ",
                                className: "",
                                toggle: handleClick
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                        className: "flex items-center justify-center flex-wrap mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {
                                href: "/",
                                target: "_blank",
                                whileHover: {
                                    y: -2
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                className: "w-6 mr-3 sm:mx-1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__/* .TwitterIcon */ .Zm, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {
                                href: "https://github.com/oli-mac",
                                target: "_blank",
                                whileHover: {
                                    y: -2
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                className: "w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__/* .GithubIcon */ .ET, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {
                                whileHover: {
                                    y: -2
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                className: "w-6 mx-3 sm:mx-1",
                                href: "https://www.linkedin.com/in/olyad-mulugeta-79875621b/",
                                target: "_blank",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__/* .LinkedInIcon */ .nI, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {
                                whileHover: {
                                    y: -2
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                className: "w-6 mx-3 sm:mx-1",
                                href: "https://www.linkedin.com/in/olyad-mulugeta-79875621b/",
                                target: "_blank",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__/* .PinterestIcon */ .cH, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.a, {
                                whileHover: {
                                    y: -2
                                },
                                whileTap: {
                                    scale: 0.9
                                },
                                className: "w-6 ml-3 sm:mx-1",
                                href: "https://www.linkedin.com/in/olyad-mulugeta-79875621b/",
                                target: "_blank",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__/* .DribbbleIcon */ .uf, {})
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>setMode(mode === "light" ? "dark" : "light"),
                                className: `ml-3 flex items-center justify-center rounded-full p-1
                                ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
                                `,
                                children: mode === "dark" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__/* .SunIcon */ .NW, {
                                    className: "fill-dark"
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_5__/* .MoonIcon */ .kL, {
                                    className: "fill-dark"
                                })
                            })
                        ]
                    })
                ]
            }) : null,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute left-[50%] top-2 translate-x-[-50%]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Logo__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useThemeSwitcher = ()=>{
    const preferDarkQuery = "(prefer-color-scheme: dark)";
    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem("theme");
        const handleChange = ()=>{
            if (userPref) {
                let check = userPref === "dark" ? "dark" : "light";
                setMode(check);
                if (check === "dark") {
                    document.documentElement.classList.add("dark");
                } else {
                    document.documentElement.classList.remove("dark");
                }
            } else {
                let check = mediaQuery.matches ? "dark" : "light";
                setMode(check);
                window.localStorage.setItem("theme", check);
                if (check === "dark") {
                    document.documentElement.classList.add("dark");
                } else {
                    document.documentElement.classList.remove("dark");
                }
            }
        };
        handleChange();
        mediaQuery.addEventListener("change", handleChange);
        return ()=>mediaQuery.removeEventListener("change", handleChange);
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (mode === "dark") {
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        }
        if (mode === "light") {
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    }, [
        mode
    ]);
    return [
        mode,
        setMode
    ];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useThemeSwitcher);


/***/ }),

/***/ 8375:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_src_pages_app_js_import_Montserrat_arguments_subsets_latin_variable_font_mont_variableName_montserrat___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2584);
/* harmony import */ var next_font_google_target_css_path_src_pages_app_js_import_Montserrat_arguments_subsets_latin_variable_font_mont_variableName_montserrat___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_pages_app_js_import_Montserrat_arguments_subsets_latin_variable_font_mont_variableName_montserrat___WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5700);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(971);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_NavBar__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
([_components_NavBar__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function App({ Component , pageProps  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
            className: `${(next_font_google_target_css_path_src_pages_app_js_import_Montserrat_arguments_subsets_latin_variable_font_mont_variableName_montserrat___WEBPACK_IMPORTED_MODULE_6___default().variable)} font-mont bg-light dark:bg-dark w-full min-h-screen`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
                    mode: "wait",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    }, router.asPath)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172,664,710], () => (__webpack_exec__(8375)));
module.exports = __webpack_exports__;

})();