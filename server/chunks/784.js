"use strict";
exports.id = 784;
exports.ids = [784];
exports.modules = {

/***/ 6969:
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
/* harmony import */ var _LiIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(482);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _LiIcon__WEBPACK_IMPORTED_MODULE_3__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _LiIcon__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Details = ({ type , time , address , info  })=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        ref: ref,
        className: "my-8 first:mt-0 last:mb-0 w-[90%] mx-auto flex flex-col items-center justify-between",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LiIcon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                reference: ref
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                initial: {
                    y: 50
                },
                whileInView: {
                    y: 0
                },
                transition: {
                    duration: 0.5,
                    type: "spring"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "capitalize font-bold text-2xl sm:text-xl xs:text-lg",
                        children: type
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "capitalize font-medium text-dark/75 dark:text-light xs:text-sm",
                        children: [
                            time,
                            " | ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-primary dark:text-primaryDark",
                                children: address
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "font-medium w-full md:text-sm",
                        children: info
                    })
                ]
            })
        ]
    });
};
const Education = ()=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { scrollYProgress  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll)({
        target: ref,
        offset: [
            "start end",
            "center start"
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "my-8",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "font-bold text-4xl mb-8 w-full text-center dark:text-light md:text-6xl xs:text-4xl md:mb-16",
                children: "Education"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ref: ref,
                className: "w-[100%] mx-auto relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                        style: {
                            scaleY: scrollYProgress
                        },
                        className: "absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light   md:w-[2px] md:left-[30px] xs:left-[20px]"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "w-full flex flex-col items-start justify-between ml-10 xs:ml-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Details, {
                            type: "Bachelor Of Science In SoftWare Engineering",
                            time: "2016-2020 ",
                            address: "Bahirdar Institute Of Technology (MIT)",
                            info: "Relevant courses included programming languages, algorithms,    data structures, database systems, software design, and project management. These courses provided    me with the skills needed to develop software solutions that meet business requirements, are    scalable, and maintainable. In addition,courses in    user experience design, software testing, and software security, which are critical for producing    high-quality software that is secure and easy to use. i am    prepared for a range of careers in the software industry, including software developer, software   engineer, and project manager."
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Education);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 808:
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
/* harmony import */ var _LiIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(482);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _LiIcon__WEBPACK_IMPORTED_MODULE_3__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _LiIcon__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Details = ({ position , company , companyLink , time , address , work  })=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
        ref: ref,
        className: "my-8 first:mt-0 last:mb-0 w-[85%] mx-auto flex flex-col items-center justify-between",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_LiIcon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                reference: ref
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                initial: {
                    y: 50
                },
                whileInView: {
                    y: 0
                },
                transition: {
                    duration: 0.5,
                    type: "spring"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                        className: "capitalize font-bold text-xl xs:text-lg",
                        children: [
                            position,
                            "\xa0 ",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                className: "text-primary dark:text-primaryDark capitalize",
                                href: companyLink,
                                target: "_blank",
                                children: [
                                    "@",
                                    company
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm",
                        children: [
                            time,
                            " | ",
                            address
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "font-medium w-full md:text-sm",
                        children: work
                    })
                ]
            })
        ]
    });
};
const Experience = ()=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { scrollYProgress  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll)({
        target: ref,
        offset: [
            "start end",
            "center start"
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "my-8",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "font-bold text-4xl mb-8 w-full text-center dark:text-light md:text-6xl xs:text-4xl md:mb-16",
                children: "Experience"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ref: ref,
                className: "w-full relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                        style: {
                            scaleY: scrollYProgress
                        },
                        className: "absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light   md:w-[2px] md:left-[30px] xs:left-[20px]    "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "w-full flex flex-col items-start justify-between ml-8 xs:ml-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Details, {
                                position: "Intern",
                                companyLink: "http://www.aii.et/",
                                company: "ethiopian artificial intelligence institute",
                                time: "2022-Present",
                                address: "Addis Ababa, eT",
                                work: "As an intern at one of the country's leading research institutions on AI, I had the opportunity    to work alongside brilliant minds in the field. I gained hands-on experience with cutting-edge technology   and contributed to projects with real-world applications. This experience opened doors to exciting    career opportunities."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Details, {
                                position: "Co Founder Ceo",
                                companyLink: "http://www.DaguEthioED.com",
                                company: "DaguEthioED",
                                time: "2023-present",
                                address: "Addis Ababa, eT",
                                work: "Our company envisions a future where the next generation is empowered    with information to shape the world of technology. We aim to host informative events that spark curiosity    and promote learning, featuring prominent speakers in the tech industry. Our slogan, Empowering the Next    Generation with Information, reflects our commitment to providing valuable insights and knowledge that    will enable young people to make informed decisions about their future in tech."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Details, {
                                position: "Founder & Team Leader",
                                companyLink: "/",
                                company: "BIT AI and Cybersecurity Club",
                                time: "2022-present",
                                address: "Addis Ababa, eT",
                                work: "As the founder and team leader of the AI and Cybersecurity Club at Bahir Dar Institute of    Technology, I gained valuable leadership and technical skills. By organizing events, workshops,    and projects, I fostered a culture of innovation and learning among members. my passion for AI and cybersecurity and inspired me to pursue a career in the field."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Details, {
                                position: "CTO",
                                companyLink: "/",
                                company: "BroLine INC",
                                time: "2020-2022",
                                address: "Addis Ababa, eT",
                                work: "Develop technical aspects of the Company's Strategy Lead New Projects From Conceptualization to deployment Create Overall Technology Standards and Practices"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Details, {
                                position: "Software Engineer",
                                companyLink: "/",
                                company: "Telet Tech",
                                time: "2022-Present",
                                address: "Addis Ababa, eT",
                                work: "As a founder and CEO of a software start-up, Telet Tech  is a visionary leader who inspires    innovation and fosters a collaborative culture. Telet Tech'S strategic decisions and leadership    have propelled the company to success, creating jobs and driving growth in the tech industry."
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Experience);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 482:
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



const LiIcon = ({ reference  })=>{
    const { scrollYProgress  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll)({
        target: reference,
        offset: [
            "center end",
            "center center"
        ]
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
        className: "absolute left-0 stroke-dark dark:stroke-light",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
            className: "-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]",
            width: "75",
            height: "75",
            viewBox: "0 0 100 100",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    cx: "75",
                    cy: "50",
                    r: "20",
                    className: "stroke-primary dark:stroke-primaryDark stroke-1 fill-none"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.circle, {
                    style: {
                        pathLength: scrollYProgress
                    },
                    cx: "75",
                    cy: "50",
                    r: "20",
                    className: " stroke-[5px] fill-light dark:fill-dark"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                    cx: "75",
                    cy: "50",
                    r: "10",
                    className: "animate-pulse stroke-1 fill-primary dark:fill-primaryDark"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LiIcon);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;