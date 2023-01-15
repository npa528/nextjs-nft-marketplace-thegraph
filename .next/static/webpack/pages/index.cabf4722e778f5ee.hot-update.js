"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/NFTBox.js":
/*!******************************!*\
  !*** ./components/NFTBox.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NFTBox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moralis */ \"./node_modules/react-moralis/lib/index.esm.js\");\n/* harmony import */ var _constants_NftMarketplace_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/NftMarketplace.json */ \"./constants/NftMarketplace.json\");\n/* harmony import */ var _constants_BasicNft_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/BasicNft.json */ \"./constants/BasicNft.json\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var web3uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! web3uikit */ \"./node_modules/web3uikit/dist/index.es.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _UpdateListingModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UpdateListingModal */ \"./components/UpdateListingModal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst truncateStr = (fullStr, strLen)=>{\n    if (fullStr.length <= strLen) return fullStr;\n    const separator = \"...\";\n    const seperatorLength = separator.length;\n    const charsToShow = strLen - seperatorLength;\n    const frontChars = Math.ceil(charsToShow / 2);\n    const backChars = Math.floor(charsToShow / 2);\n    return fullStr.substring(0, frontChars) + separator + fullStr.substring(fullStr.length - backChars);\n};\nfunction NFTBox(param) {\n    let { price , nftAddress , tokenId , marketplaceAddress , seller  } = param;\n    _s();\n    const { isWeb3Enabled , account  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useMoralis)();\n    const [imageURI, setImageURI] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [tokenName, setTokenName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [tokenDescription, setTokenDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const hideModal = ()=>setShowModal(false);\n    const dispatch = (0,web3uikit__WEBPACK_IMPORTED_MODULE_7__.useNotification)();\n    const { runContractFunction: getTokenURI  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useWeb3Contract)({\n        abi: _constants_BasicNft_json__WEBPACK_IMPORTED_MODULE_4__,\n        contractAddress: nftAddress,\n        functionName: \"tokenURI\",\n        params: {\n            tokenId: \"0\"\n        }\n    });\n    const { runContractFunction: buyItem  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useWeb3Contract)({\n        abi: _constants_NftMarketplace_json__WEBPACK_IMPORTED_MODULE_3__,\n        contractAddress: marketplaceAddress,\n        functionName: \"buyItem\",\n        msgValue: price,\n        params: {\n            nftAddress: nftAddress,\n            tokenId: tokenId\n        }\n    });\n    async function updateUI() {\n        // const tokenURI = await getTokenURI()\n        const tokenURI = await getTokenURI({\n            onError: (error)=>console.log(error)\n        });\n        // console.log(`tokenURI is ${tokenURI}`)\n        // We are going to cheat a little here...\n        if (tokenURI) {\n            // IPFS Gateway: A server that will return IPFS files from a \"normal\" URL.\n            const requestURL = tokenURI.replace(\"ipfs://\", \"https://ipfs.io/ipfs/\");\n            const tokenURIResponse = await (await fetch(requestURL)).json();\n            const imageURI = tokenURIResponse.image;\n            const imageURIURL = imageURI.replace(\"ipfs://\", \"https://ipfs.io/ipfs/\");\n            setImageURI(imageURIURL);\n            setTokenName(tokenURIResponse.name);\n            setTokenDescription(tokenURIResponse.description);\n        // We could render the Image on our sever, and just call our sever.\n        // For testnets & mainnet -> use moralis server hooks\n        // Have the world adopt IPFS\n        // Build our own IPFS gateway\n        }\n    // get the tokenURI\n    // using the image tag from the tokenURI, get the image\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isWeb3Enabled) {\n            updateUI();\n        }\n    }, [\n        isWeb3Enabled\n    ]);\n    const isOwnedByUser = seller === account || seller === undefined;\n    const formattedSellerAddress = isOwnedByUser ? \"you\" : truncateStr(seller || \"\", 15);\n    const handleCardClick = ()=>{\n        isOwnedByUser ? setShowModal(true) : buyItem({\n            onError: (error)=>console.log(error),\n            onSuccess: ()=>handleBuyItemSuccess()\n        });\n    };\n    const handleBuyItemSuccess = ()=>{\n        dispatch({\n            type: \"success\",\n            message: \"Item bought!\",\n            title: \"Item Bought\",\n            position: \"topR\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: imageURI ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UpdateListingModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        isVisible: showModal,\n                        tokenId: tokenId,\n                        marketplaceAddress: marketplaceAddress,\n                        nftAddress: nftAddress,\n                        onClose: hideModal\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                        lineNumber: 111,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(web3uikit__WEBPACK_IMPORTED_MODULE_7__.Card, {\n                        title: tokenName,\n                        description: tokenDescription,\n                        onClick: handleCardClick,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-end gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            \"#\",\n                                            tokenId\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                                        lineNumber: 125,\n                                        columnNumber: 37\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"italic text-sm\",\n                                        children: [\n                                            \"Owned by \",\n                                            formattedSellerAddress\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                                        lineNumber: 126,\n                                        columnNumber: 37\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        loader: ()=>imageURI,\n                                        src: imageURI,\n                                        height: \"200\",\n                                        width: \"200\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                                        lineNumber: 129,\n                                        columnNumber: 37\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"font-bold\",\n                                        children: [\n                                            ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.formatUnits(price, \"ether\"),\n                                            \" ETH\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                                        lineNumber: 135,\n                                        columnNumber: 37\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                                lineNumber: 124,\n                                columnNumber: 33\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                            lineNumber: 123,\n                            columnNumber: 29\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                        lineNumber: 118,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                lineNumber: 110,\n                columnNumber: 21\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                lineNumber: 143,\n                columnNumber: 21\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n            lineNumber: 108,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n        lineNumber: 107,\n        columnNumber: 9\n    }, this);\n}\n_s(NFTBox, \"ErSVgl4GFCIs7oMvjHtQnmn19g0=\", false, function() {\n    return [\n        react_moralis__WEBPACK_IMPORTED_MODULE_2__.useMoralis,\n        web3uikit__WEBPACK_IMPORTED_MODULE_7__.useNotification,\n        react_moralis__WEBPACK_IMPORTED_MODULE_2__.useWeb3Contract,\n        react_moralis__WEBPACK_IMPORTED_MODULE_2__.useWeb3Contract\n    ];\n});\n_c = NFTBox;\nvar _c;\n$RefreshReg$(_c, \"NFTBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7S0FsQnBDc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ORlRCb3guanM/M2M2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgdXNlV2ViM0NvbnRyYWN0LCB1c2VNb3JhbGlzIH0gZnJvbSBcInJlYWN0LW1vcmFsaXNcIlxyXG5pbXBvcnQgbmZ0TWFya2V0cGxhY2VBYmkgZnJvbSBcIi4uL2NvbnN0YW50cy9OZnRNYXJrZXRwbGFjZS5qc29uXCJcclxuaW1wb3J0IG5mdEFiaSBmcm9tIFwiLi4vY29uc3RhbnRzL0Jhc2ljTmZ0Lmpzb25cIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxyXG5pbXBvcnQgeyBDYXJkLCB1c2VOb3RpZmljYXRpb24gfSBmcm9tIFwid2ViM3Vpa2l0XCJcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiXHJcbmltcG9ydCBVcGRhdGVMaXN0aW5nTW9kYWwgZnJvbSBcIi4vVXBkYXRlTGlzdGluZ01vZGFsXCJcclxuXHJcbmNvbnN0IHRydW5jYXRlU3RyID0gKGZ1bGxTdHIsIHN0ckxlbikgPT4ge1xyXG4gICAgaWYgKGZ1bGxTdHIubGVuZ3RoIDw9IHN0ckxlbikgcmV0dXJuIGZ1bGxTdHJcclxuXHJcbiAgICBjb25zdCBzZXBhcmF0b3IgPSBcIi4uLlwiXHJcbiAgICBjb25zdCBzZXBlcmF0b3JMZW5ndGggPSBzZXBhcmF0b3IubGVuZ3RoXHJcbiAgICBjb25zdCBjaGFyc1RvU2hvdyA9IHN0ckxlbiAtIHNlcGVyYXRvckxlbmd0aFxyXG4gICAgY29uc3QgZnJvbnRDaGFycyA9IE1hdGguY2VpbChjaGFyc1RvU2hvdyAvIDIpXHJcbiAgICBjb25zdCBiYWNrQ2hhcnMgPSBNYXRoLmZsb29yKGNoYXJzVG9TaG93IC8gMilcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgZnVsbFN0ci5zdWJzdHJpbmcoMCwgZnJvbnRDaGFycykgKyBzZXBhcmF0b3IgKyBmdWxsU3RyLnN1YnN0cmluZyhmdWxsU3RyLmxlbmd0aCAtIGJhY2tDaGFycylcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTkZUQm94KHsgcHJpY2UsIG5mdEFkZHJlc3MsIHRva2VuSWQsIG1hcmtldHBsYWNlQWRkcmVzcywgc2VsbGVyIH0pIHtcclxuICAgIGNvbnN0IHsgaXNXZWIzRW5hYmxlZCwgYWNjb3VudCB9ID0gdXNlTW9yYWxpcygpXHJcbiAgICBjb25zdCBbaW1hZ2VVUkksIHNldEltYWdlVVJJXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbdG9rZW5OYW1lLCBzZXRUb2tlbk5hbWVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFt0b2tlbkRlc2NyaXB0aW9uLCBzZXRUb2tlbkRlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBoaWRlTW9kYWwgPSAoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZU5vdGlmaWNhdGlvbigpXHJcblxyXG4gICAgY29uc3QgeyBydW5Db250cmFjdEZ1bmN0aW9uOiBnZXRUb2tlblVSSSB9ID0gdXNlV2ViM0NvbnRyYWN0KHtcclxuICAgICAgICBhYmk6IG5mdEFiaSxcclxuICAgICAgICBjb250cmFjdEFkZHJlc3M6IG5mdEFkZHJlc3MsXHJcbiAgICAgICAgZnVuY3Rpb25OYW1lOiBcInRva2VuVVJJXCIsXHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIHRva2VuSWQ6IFwiMFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHsgcnVuQ29udHJhY3RGdW5jdGlvbjogYnV5SXRlbSB9ID0gdXNlV2ViM0NvbnRyYWN0KHtcclxuICAgICAgICBhYmk6IG5mdE1hcmtldHBsYWNlQWJpLFxyXG4gICAgICAgIGNvbnRyYWN0QWRkcmVzczogbWFya2V0cGxhY2VBZGRyZXNzLFxyXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogXCJidXlJdGVtXCIsXHJcbiAgICAgICAgbXNnVmFsdWU6IHByaWNlLFxyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICBuZnRBZGRyZXNzOiBuZnRBZGRyZXNzLFxyXG4gICAgICAgICAgICB0b2tlbklkOiB0b2tlbklkLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVVJKCkge1xyXG4gICAgICAgIC8vIGNvbnN0IHRva2VuVVJJID0gYXdhaXQgZ2V0VG9rZW5VUkkoKVxyXG5cclxuICAgICAgICBjb25zdCB0b2tlblVSSSA9IGF3YWl0IGdldFRva2VuVVJJKHtcclxuICAgICAgICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYHRva2VuVVJJIGlzICR7dG9rZW5VUkl9YClcclxuICAgICAgICAvLyBXZSBhcmUgZ29pbmcgdG8gY2hlYXQgYSBsaXR0bGUgaGVyZS4uLlxyXG4gICAgICAgIGlmICh0b2tlblVSSSkge1xyXG4gICAgICAgICAgICAvLyBJUEZTIEdhdGV3YXk6IEEgc2VydmVyIHRoYXQgd2lsbCByZXR1cm4gSVBGUyBmaWxlcyBmcm9tIGEgXCJub3JtYWxcIiBVUkwuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RVUkwgPSB0b2tlblVSSS5yZXBsYWNlKFwiaXBmczovL1wiLCBcImh0dHBzOi8vaXBmcy5pby9pcGZzL1wiKVxyXG4gICAgICAgICAgICBjb25zdCB0b2tlblVSSVJlc3BvbnNlID0gYXdhaXQgKGF3YWl0IGZldGNoKHJlcXVlc3RVUkwpKS5qc29uKClcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2VVUkkgPSB0b2tlblVSSVJlc3BvbnNlLmltYWdlXHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlVVJJVVJMID0gaW1hZ2VVUkkucmVwbGFjZShcImlwZnM6Ly9cIiwgXCJodHRwczovL2lwZnMuaW8vaXBmcy9cIilcclxuICAgICAgICAgICAgc2V0SW1hZ2VVUkkoaW1hZ2VVUklVUkwpXHJcbiAgICAgICAgICAgIHNldFRva2VuTmFtZSh0b2tlblVSSVJlc3BvbnNlLm5hbWUpXHJcbiAgICAgICAgICAgIHNldFRva2VuRGVzY3JpcHRpb24odG9rZW5VUklSZXNwb25zZS5kZXNjcmlwdGlvbilcclxuICAgICAgICAgICAgLy8gV2UgY291bGQgcmVuZGVyIHRoZSBJbWFnZSBvbiBvdXIgc2V2ZXIsIGFuZCBqdXN0IGNhbGwgb3VyIHNldmVyLlxyXG4gICAgICAgICAgICAvLyBGb3IgdGVzdG5ldHMgJiBtYWlubmV0IC0+IHVzZSBtb3JhbGlzIHNlcnZlciBob29rc1xyXG4gICAgICAgICAgICAvLyBIYXZlIHRoZSB3b3JsZCBhZG9wdCBJUEZTXHJcbiAgICAgICAgICAgIC8vIEJ1aWxkIG91ciBvd24gSVBGUyBnYXRld2F5XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGdldCB0aGUgdG9rZW5VUklcclxuICAgICAgICAvLyB1c2luZyB0aGUgaW1hZ2UgdGFnIGZyb20gdGhlIHRva2VuVVJJLCBnZXQgdGhlIGltYWdlXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaXNXZWIzRW5hYmxlZCkge1xyXG4gICAgICAgICAgICB1cGRhdGVVSSgpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lzV2ViM0VuYWJsZWRdKVxyXG5cclxuICAgIGNvbnN0IGlzT3duZWRCeVVzZXIgPSBzZWxsZXIgPT09IGFjY291bnQgfHwgc2VsbGVyID09PSB1bmRlZmluZWRcclxuICAgIGNvbnN0IGZvcm1hdHRlZFNlbGxlckFkZHJlc3MgPSBpc093bmVkQnlVc2VyID8gXCJ5b3VcIiA6IHRydW5jYXRlU3RyKHNlbGxlciB8fCBcIlwiLCAxNSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDYXJkQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgaXNPd25lZEJ5VXNlclxyXG4gICAgICAgICAgICA/IHNldFNob3dNb2RhbCh0cnVlKVxyXG4gICAgICAgICAgICA6IGJ1eUl0ZW0oe1xyXG4gICAgICAgICAgICAgICAgICBvbkVycm9yOiAoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSxcclxuICAgICAgICAgICAgICAgICAgb25TdWNjZXNzOiAoKSA9PiBoYW5kbGVCdXlJdGVtU3VjY2VzcygpLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQnV5SXRlbVN1Y2Nlc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJJdGVtIGJvdWdodCFcIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiSXRlbSBCb3VnaHRcIixcclxuICAgICAgICAgICAgcG9zaXRpb246IFwidG9wUlwiLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2ltYWdlVVJJID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxVcGRhdGVMaXN0aW5nTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmlzaWJsZT17c2hvd01vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5JZD17dG9rZW5JZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtldHBsYWNlQWRkcmVzcz17bWFya2V0cGxhY2VBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmZ0QWRkcmVzcz17bmZ0QWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hpZGVNb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0b2tlbk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17dG9rZW5EZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNhcmRDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtZW5kIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+I3t0b2tlbklkfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0YWxpYyB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPd25lZCBieSB7Zm9ybWF0dGVkU2VsbGVyQWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVyPXsoKSA9PiBpbWFnZVVSSX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VVUkl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2V0aGVycy51dGlscy5mb3JtYXRVbml0cyhwcmljZSwgXCJldGhlclwiKX0gRVRIXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VXZWIzQ29udHJhY3QiLCJ1c2VNb3JhbGlzIiwibmZ0TWFya2V0cGxhY2VBYmkiLCJuZnRBYmkiLCJJbWFnZSIsIkNhcmQiLCJ1c2VOb3RpZmljYXRpb24iLCJldGhlcnMiLCJVcGRhdGVMaXN0aW5nTW9kYWwiLCJ0cnVuY2F0ZVN0ciIsImZ1bGxTdHIiLCJzdHJMZW4iLCJsZW5ndGgiLCJzZXBhcmF0b3IiLCJzZXBlcmF0b3JMZW5ndGgiLCJjaGFyc1RvU2hvdyIsImZyb250Q2hhcnMiLCJNYXRoIiwiY2VpbCIsImJhY2tDaGFycyIsImZsb29yIiwic3Vic3RyaW5nIiwiTkZUQm94IiwicHJpY2UiLCJuZnRBZGRyZXNzIiwidG9rZW5JZCIsIm1hcmtldHBsYWNlQWRkcmVzcyIsInNlbGxlciIsImlzV2ViM0VuYWJsZWQiLCJhY2NvdW50IiwiaW1hZ2VVUkkiLCJzZXRJbWFnZVVSSSIsInRva2VuTmFtZSIsInNldFRva2VuTmFtZSIsInRva2VuRGVzY3JpcHRpb24iLCJzZXRUb2tlbkRlc2NyaXB0aW9uIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiaGlkZU1vZGFsIiwiZGlzcGF0Y2giLCJydW5Db250cmFjdEZ1bmN0aW9uIiwiZ2V0VG9rZW5VUkkiLCJhYmkiLCJjb250cmFjdEFkZHJlc3MiLCJmdW5jdGlvbk5hbWUiLCJwYXJhbXMiLCJidXlJdGVtIiwibXNnVmFsdWUiLCJ1cGRhdGVVSSIsInRva2VuVVJJIiwib25FcnJvciIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3RVUkwiLCJyZXBsYWNlIiwidG9rZW5VUklSZXNwb25zZSIsImZldGNoIiwianNvbiIsImltYWdlIiwiaW1hZ2VVUklVUkwiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJpc093bmVkQnlVc2VyIiwidW5kZWZpbmVkIiwiZm9ybWF0dGVkU2VsbGVyQWRkcmVzcyIsImhhbmRsZUNhcmRDbGljayIsIm9uU3VjY2VzcyIsImhhbmRsZUJ1eUl0ZW1TdWNjZXNzIiwidHlwZSIsIm1lc3NhZ2UiLCJ0aXRsZSIsInBvc2l0aW9uIiwiZGl2IiwiaXNWaXNpYmxlIiwib25DbG9zZSIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJsb2FkZXIiLCJzcmMiLCJoZWlnaHQiLCJ3aWR0aCIsInV0aWxzIiwiZm9ybWF0VW5pdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/NFTBox.js\n"));

/***/ })

});