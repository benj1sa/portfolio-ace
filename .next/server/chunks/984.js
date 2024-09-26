"use strict";
exports.id = 984;
exports.ids = [984];
exports.modules = {

/***/ 6414:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Products: () => (/* binding */ Products)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./src/components/Heading.tsx
var Heading = __webpack_require__(6150);
// EXTERNAL MODULE: ./public/images/aether-astra.png
var aether_astra = __webpack_require__(1555);
// EXTERNAL MODULE: ./public/images/aether-astra-2.png
var aether_astra_2 = __webpack_require__(175);
// EXTERNAL MODULE: ./public/images/aether-astra-3.png
var aether_astra_3 = __webpack_require__(6637);
;// CONCATENATED MODULE: ./src/constants/products.tsx




const products = [
    {
        href: "https://aetherumd.github.io/aether-astra/",
        title: "Aether Gravitational Lensing",
        description: "Unveiling the Origins of the Universe with Cutting-Edge Simulations.",
        thumbnail: aether_astra["default"],
        images: [
            aether_astra_2["default"],
            aether_astra_3["default"]
        ],
        stack: [
            "Nextjs",
            "Tailwindcss",
            "Aceternity UI",
            "React.js"
        ],
        slug: "aceternity",
        content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    children: [
                        "Our team is working on a groundbreaking project aimed at uncovering the mysteries behind the formation of the first stars and galaxies in the universe. While this research may not have a direct societal impact, its contributions to the field of astrophysics could have far-reaching implications for humanity's understanding of our cosmic origins.",
                        " "
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "Leveraging the power of supercomputers and the unprecedented capabilities of the James Webb Space Telescope (JWST), we are developing a model that will simulate the universe's earliest star clusters and galaxies. A key challenge lies in replicating the complex phenomenon of gravitational lensing, which distorts light from distant galaxies, a feature the JWST is primed to observe."
                }),
                " ",
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "Our software pipeline, which applies these gravitational distortions to simulated galaxies, will allow astronomers to compare our synthetic observations with real data from JWST. Once complete, our work will be open source, providing a valuable tool for the global astronomy community. Scientists, space agencies, and students alike will benefit from our research as it unlocks new avenues for understanding the universe's origins."
                }),
                " ",
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    children: [
                        "Why Is This Important?",
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                            children: "Advancing Astronomy:"
                                        }),
                                        " This project provides deeper insights into galaxy formation, answering questions about the early universe that were previously out of reach."
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                            children: "Global Collaboration:"
                                        }),
                                        " By making our tools publicly available, we support the broader astronomy community in advancing research on cosmic evolution."
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                            children: "Inspiring Future Generations:"
                                        }),
                                        " Students and budding astronomers can use our research not only as a model for future scientific inquiry but as an example of what collaborative, high-tech projects can achieve in astrophysics."
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                " ",
                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "Our project combines synthetic simulations and gravitational lensing effects in a novel way, allowing us to simulate the distorted observations seen by the JWST. Unlike past research, we aim to create highly detailed models of the universe, factoring in these lensing phenomena to accurately mimic JWST's data."
                }),
                " "
            ]
        })
    }
];

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/Paragraph.tsx
var Paragraph = __webpack_require__(4611);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 192 modules
var motion = __webpack_require__(1691);
;// CONCATENATED MODULE: ./src/components/Products.tsx
/* __next_internal_client_entry_do_not_use__ Products auto */ 







const Products = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "grid grid-cols-1  gap-10",
            children: products.map((product, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(motion/* motion */.E.div, {
                    initial: {
                        opacity: 0,
                        x: -50
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    transition: {
                        duration: 0.2,
                        delay: idx * 0.1
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: product.slug ? `/projects/${product.slug}` : product.href,
                        className: "group flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 hover:bg-gray-50 rounded-2xl transition duration-200 pt-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: product.thumbnail,
                                alt: "thumbnail",
                                height: "200",
                                width: "200",
                                className: "rounded-md"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col justify-between",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(Heading/* Heading */.X, {
                                                as: "h4",
                                                className: "font-black text-lg md:text-lg lg:text-lg ",
                                                children: product.title
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Paragraph/* Paragraph */.n, {
                                                className: "text-sm md:text-sm lg:text-sm mt-2 max-w-xl",
                                                children: product.description
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex space-x-2 md:mb-1 mt-2 md:mt-0",
                                        children: product.stack?.map((stack)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-xs  md:text-xs lg:text-xs bg-gray-50 px-2 py-1 rounded-sm text-secondary",
                                                children: stack
                                            }, stack))
                                    })
                                ]
                            })
                        ]
                    }, product.href)
                }, product.href))
        })
    });
};


/***/ }),

/***/ 2623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/ben/Documents/develop/portfolio-ace/src/components/Products.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Products"];


/***/ })

};
;