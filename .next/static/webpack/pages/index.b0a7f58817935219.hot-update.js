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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NFTBox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moralis */ \"./node_modules/react-moralis/lib/index.esm.js\");\n/* harmony import */ var _constants_NftMarketplace_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/NftMarketplace.json */ \"./constants/NftMarketplace.json\");\n/* harmony import */ var _constants_BasicNft_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/BasicNft.json */ \"./constants/BasicNft.json\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var web3uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! web3uikit */ \"./node_modules/web3uikit/dist/index.es.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _UpdateListingModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UpdateListingModal */ \"./components/UpdateListingModal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst truncateStr = (fullStr, strLen)=>{\n    if (fullStr.length <= strLen) return fullStr;\n    const separator = \"...\";\n    const seperatorLength = separator.length;\n    const charsToShow = strLen - seperatorLength;\n    const frontChars = Math.ceil(charsToShow / 2);\n    const backChars = Math.floor(charsToShow / 2);\n    return fullStr.substring(0, frontChars) + separator + fullStr.substring(fullStr.length - backChars);\n};\nfunction NFTBox(param) {\n    let { price , nftAddress , tokenId , marketplaceAddress , seller  } = param;\n    _s();\n    const { isWeb3Enabled , account  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useMoralis)();\n    const [imageURI, setImageURI] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [tokenName, setTokenName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [tokenDescription, setTokenDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const hideModal = ()=>setShowModal(false);\n    const dispatch = (0,web3uikit__WEBPACK_IMPORTED_MODULE_7__.useNotification)();\n    const { runContractFunction: getTokenURI  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useWeb3Contract)({\n        abi: _constants_BasicNft_json__WEBPACK_IMPORTED_MODULE_4__,\n        contractAddress: nftAddress,\n        functionName: \"getTokenCounter\",\n        params: {\n        }\n    });\n    const { runContractFunction: buyItem  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useWeb3Contract)({\n        abi: _constants_NftMarketplace_json__WEBPACK_IMPORTED_MODULE_3__,\n        contractAddress: marketplaceAddress,\n        functionName: \"buyItem\",\n        msgValue: price,\n        params: {\n            nftAddress: nftAddress,\n            tokenId: tokenId\n        }\n    });\n    async function updateUI() {\n        const tokenURI = await getTokenURI();\n        console.log(\"tokenURI is \".concat(tokenURI));\n        // We are going to cheat a little here...\n        if (tokenURI) {\n            // IPFS Gateway: A server that will return IPFS files from a \"normal\" URL.\n            const requestURL = tokenURI.replace(\"ipfs://\", \"https://ipfs.io/ipfs/\");\n            const tokenURIResponse = await (await fetch(requestURL)).json();\n            const imageURI = tokenURIResponse.image;\n            const imageURIURL = imageURI.replace(\"ipfs://\", \"https://ipfs.io/ipfs/\");\n            setImageURI(imageURIURL);\n            setTokenName(tokenURIResponse.name);\n            setTokenDescription(tokenURIResponse.description);\n        // We could render the Image on our sever, and just call our sever.\n        // For testnets & mainnet -> use moralis server hooks\n        // Have the world adopt IPFS\n        // Build our own IPFS gateway\n        }\n    // get the tokenURI\n    // using the image tag from the tokenURI, get the image\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isWeb3Enabled) {\n            updateUI();\n        }\n    }, [\n        isWeb3Enabled\n    ]);\n    const isOwnedByUser = seller === account || seller === undefined;\n    const formattedSellerAddress = isOwnedByUser ? \"you\" : truncateStr(seller || \"\", 15);\n    const handleCardClick = ()=>{\n        isOwnedByUser ? setShowModal(true) : buyItem({\n            onError: (error)=>console.log(error),\n            onSuccess: ()=>handleBuyItemSuccess()\n        });\n    };\n    const handleBuyItemSuccess = ()=>{\n        dispatch({\n            type: \"success\",\n            message: \"Item bought!\",\n            title: \"Item Bought\",\n            position: \"topR\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: imageURI ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UpdateListingModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        isVisible: showModal,\n                        tokenId: tokenId,\n                        marketplaceAddress: marketplaceAddress,\n                        nftAddress: nftAddress,\n                        onClose: hideModal\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                        lineNumber: 106,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(web3uikit__WEBPACK_IMPORTED_MODULE_7__.Card, {\n                        title: tokenName,\n                        description: tokenDescription,\n                        onClick: handleCardClick,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-end gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            \"#\",\n                                            tokenId\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                                        lineNumber: 120,\n                                        columnNumber: 37\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"italic text-sm\",\n                                        children: [\n                                            \"Owned by \",\n                                            formattedSellerAddress\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                                        lineNumber: 121,\n                                        columnNumber: 37\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        loader: ()=>imageURI,\n                                        src: imageURI,\n                                        height: \"200\",\n                                        width: \"200\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                                        lineNumber: 124,\n                                        columnNumber: 37\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"font-bold\",\n                                        children: [\n                                            ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.formatUnits(price, \"ether\"),\n                                            \" ETH\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                                        lineNumber: 130,\n                                        columnNumber: 37\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                                lineNumber: 119,\n                                columnNumber: 33\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                            lineNumber: 118,\n                            columnNumber: 29\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                        lineNumber: 113,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                lineNumber: 105,\n                columnNumber: 21\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                lineNumber: 138,\n                columnNumber: 21\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n            lineNumber: 103,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n        lineNumber: 102,\n        columnNumber: 9\n    }, this);\n}\n_s(NFTBox, \"ErSVgl4GFCIs7oMvjHtQnmn19g0=\", false, function() {\n    return [\n        react_moralis__WEBPACK_IMPORTED_MODULE_2__.useMoralis,\n        web3uikit__WEBPACK_IMPORTED_MODULE_7__.useNotification,\n        react_moralis__WEBPACK_IMPORTED_MODULE_2__.useWeb3Contract,\n        react_moralis__WEBPACK_IMPORTED_MODULE_2__.useWeb3Contract\n    ];\n});\n_c = NFTBox;\nvar _c;\n$RefreshReg$(_c, \"NFTBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TkZUQm94LmpzPzNjNmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHVzZVdlYjNDb250cmFjdCwgdXNlTW9yYWxpcyB9IGZyb20gXCJyZWFjdC1tb3JhbGlzXCJcclxuaW1wb3J0IG5mdE1hcmtldHBsYWNlQWJpIGZyb20gXCIuLi9jb25zdGFudHMvTmZ0TWFya2V0cGxhY2UuanNvblwiXHJcbmltcG9ydCBuZnRBYmkgZnJvbSBcIi4uL2NvbnN0YW50cy9CYXNpY05mdC5qc29uXCJcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuaW1wb3J0IHsgQ2FyZCwgdXNlTm90aWZpY2F0aW9uIH0gZnJvbSBcIndlYjN1aWtpdFwiXHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIlxyXG5pbXBvcnQgVXBkYXRlTGlzdGluZ01vZGFsIGZyb20gXCIuL1VwZGF0ZUxpc3RpbmdNb2RhbFwiXHJcblxyXG5jb25zdCB0cnVuY2F0ZVN0ciA9IChmdWxsU3RyLCBzdHJMZW4pID0+IHtcclxuICAgIGlmIChmdWxsU3RyLmxlbmd0aCA8PSBzdHJMZW4pIHJldHVybiBmdWxsU3RyXHJcblxyXG4gICAgY29uc3Qgc2VwYXJhdG9yID0gXCIuLi5cIlxyXG4gICAgY29uc3Qgc2VwZXJhdG9yTGVuZ3RoID0gc2VwYXJhdG9yLmxlbmd0aFxyXG4gICAgY29uc3QgY2hhcnNUb1Nob3cgPSBzdHJMZW4gLSBzZXBlcmF0b3JMZW5ndGhcclxuICAgIGNvbnN0IGZyb250Q2hhcnMgPSBNYXRoLmNlaWwoY2hhcnNUb1Nob3cgLyAyKVxyXG4gICAgY29uc3QgYmFja0NoYXJzID0gTWF0aC5mbG9vcihjaGFyc1RvU2hvdyAvIDIpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIGZ1bGxTdHIuc3Vic3RyaW5nKDAsIGZyb250Q2hhcnMpICsgc2VwYXJhdG9yICsgZnVsbFN0ci5zdWJzdHJpbmcoZnVsbFN0ci5sZW5ndGggLSBiYWNrQ2hhcnMpXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5GVEJveCh7IHByaWNlLCBuZnRBZGRyZXNzLCB0b2tlbklkLCBtYXJrZXRwbGFjZUFkZHJlc3MsIHNlbGxlciB9KSB7XHJcbiAgICBjb25zdCB7IGlzV2ViM0VuYWJsZWQsIGFjY291bnQgfSA9IHVzZU1vcmFsaXMoKVxyXG4gICAgY29uc3QgW2ltYWdlVVJJLCBzZXRJbWFnZVVSSV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3Rva2VuTmFtZSwgc2V0VG9rZW5OYW1lXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbdG9rZW5EZXNjcmlwdGlvbiwgc2V0VG9rZW5EZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgaGlkZU1vZGFsID0gKCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKVxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VOb3RpZmljYXRpb24oKVxyXG5cclxuICAgIGNvbnN0IHsgcnVuQ29udHJhY3RGdW5jdGlvbjogZ2V0VG9rZW5VUkkgfSA9IHVzZVdlYjNDb250cmFjdCh7XHJcbiAgICAgICAgYWJpOiBuZnRBYmksXHJcbiAgICAgICAgY29udHJhY3RBZGRyZXNzOiBuZnRBZGRyZXNzLFxyXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogXCJnZXRUb2tlbkNvdW50ZXJcIixcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgLy90b2tlbklkOiB0b2tlbklkLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHsgcnVuQ29udHJhY3RGdW5jdGlvbjogYnV5SXRlbSB9ID0gdXNlV2ViM0NvbnRyYWN0KHtcclxuICAgICAgICBhYmk6IG5mdE1hcmtldHBsYWNlQWJpLFxyXG4gICAgICAgIGNvbnRyYWN0QWRkcmVzczogbWFya2V0cGxhY2VBZGRyZXNzLFxyXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogXCJidXlJdGVtXCIsXHJcbiAgICAgICAgbXNnVmFsdWU6IHByaWNlLFxyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICBuZnRBZGRyZXNzOiBuZnRBZGRyZXNzLFxyXG4gICAgICAgICAgICB0b2tlbklkOiB0b2tlbklkLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVVJKCkge1xyXG4gICAgICAgIGNvbnN0IHRva2VuVVJJID0gYXdhaXQgZ2V0VG9rZW5VUkkoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGB0b2tlblVSSSBpcyAke3Rva2VuVVJJfWApXHJcbiAgICAgICAgLy8gV2UgYXJlIGdvaW5nIHRvIGNoZWF0IGEgbGl0dGxlIGhlcmUuLi5cclxuICAgICAgICBpZiAodG9rZW5VUkkpIHtcclxuICAgICAgICAgICAgLy8gSVBGUyBHYXRld2F5OiBBIHNlcnZlciB0aGF0IHdpbGwgcmV0dXJuIElQRlMgZmlsZXMgZnJvbSBhIFwibm9ybWFsXCIgVVJMLlxyXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0VVJMID0gdG9rZW5VUkkucmVwbGFjZShcImlwZnM6Ly9cIiwgXCJodHRwczovL2lwZnMuaW8vaXBmcy9cIilcclxuICAgICAgICAgICAgY29uc3QgdG9rZW5VUklSZXNwb25zZSA9IGF3YWl0IChhd2FpdCBmZXRjaChyZXF1ZXN0VVJMKSkuanNvbigpXHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlVVJJID0gdG9rZW5VUklSZXNwb25zZS5pbWFnZVxyXG4gICAgICAgICAgICBjb25zdCBpbWFnZVVSSVVSTCA9IGltYWdlVVJJLnJlcGxhY2UoXCJpcGZzOi8vXCIsIFwiaHR0cHM6Ly9pcGZzLmlvL2lwZnMvXCIpXHJcbiAgICAgICAgICAgIHNldEltYWdlVVJJKGltYWdlVVJJVVJMKVxyXG4gICAgICAgICAgICBzZXRUb2tlbk5hbWUodG9rZW5VUklSZXNwb25zZS5uYW1lKVxyXG4gICAgICAgICAgICBzZXRUb2tlbkRlc2NyaXB0aW9uKHRva2VuVVJJUmVzcG9uc2UuZGVzY3JpcHRpb24pXHJcbiAgICAgICAgICAgIC8vIFdlIGNvdWxkIHJlbmRlciB0aGUgSW1hZ2Ugb24gb3VyIHNldmVyLCBhbmQganVzdCBjYWxsIG91ciBzZXZlci5cclxuICAgICAgICAgICAgLy8gRm9yIHRlc3RuZXRzICYgbWFpbm5ldCAtPiB1c2UgbW9yYWxpcyBzZXJ2ZXIgaG9va3NcclxuICAgICAgICAgICAgLy8gSGF2ZSB0aGUgd29ybGQgYWRvcHQgSVBGU1xyXG4gICAgICAgICAgICAvLyBCdWlsZCBvdXIgb3duIElQRlMgZ2F0ZXdheVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBnZXQgdGhlIHRva2VuVVJJXHJcbiAgICAgICAgLy8gdXNpbmcgdGhlIGltYWdlIHRhZyBmcm9tIHRoZSB0b2tlblVSSSwgZ2V0IHRoZSBpbWFnZVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzV2ViM0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgdXBkYXRlVUkoKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtpc1dlYjNFbmFibGVkXSlcclxuXHJcbiAgICBjb25zdCBpc093bmVkQnlVc2VyID0gc2VsbGVyID09PSBhY2NvdW50IHx8IHNlbGxlciA9PT0gdW5kZWZpbmVkXHJcbiAgICBjb25zdCBmb3JtYXR0ZWRTZWxsZXJBZGRyZXNzID0gaXNPd25lZEJ5VXNlciA/IFwieW91XCIgOiB0cnVuY2F0ZVN0cihzZWxsZXIgfHwgXCJcIiwgMTUpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2FyZENsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGlzT3duZWRCeVVzZXJcclxuICAgICAgICAgICAgPyBzZXRTaG93TW9kYWwodHJ1ZSlcclxuICAgICAgICAgICAgOiBidXlJdGVtKHtcclxuICAgICAgICAgICAgICAgICAgb25FcnJvcjogKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvciksXHJcbiAgICAgICAgICAgICAgICAgIG9uU3VjY2VzczogKCkgPT4gaGFuZGxlQnV5SXRlbVN1Y2Nlc3MoKSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUJ1eUl0ZW1TdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogXCJzdWNjZXNzXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiSXRlbSBib3VnaHQhXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkl0ZW0gQm91Z2h0XCIsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcInRvcFJcIixcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtpbWFnZVVSSSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VXBkYXRlTGlzdGluZ01vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1Zpc2libGU9e3Nob3dNb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuSWQ9e3Rva2VuSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrZXRwbGFjZUFkZHJlc3M9e21hcmtldHBsYWNlQWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5mdEFkZHJlc3M9e25mdEFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoaWRlTW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17dG9rZW5OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3Rva2VuRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDYXJkQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWVuZCBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PiN7dG9rZW5JZH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGFsaWMgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgT3duZWQgYnkge2Zvcm1hdHRlZFNlbGxlckFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlcj17KCkgPT4gaW1hZ2VVUkl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlVVJJfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtldGhlcnMudXRpbHMuZm9ybWF0VW5pdHMocHJpY2UsIFwiZXRoZXJcIil9IEVUSFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlV2ViM0NvbnRyYWN0IiwidXNlTW9yYWxpcyIsIm5mdE1hcmtldHBsYWNlQWJpIiwibmZ0QWJpIiwiSW1hZ2UiLCJDYXJkIiwidXNlTm90aWZpY2F0aW9uIiwiZXRoZXJzIiwiVXBkYXRlTGlzdGluZ01vZGFsIiwidHJ1bmNhdGVTdHIiLCJmdWxsU3RyIiwic3RyTGVuIiwibGVuZ3RoIiwic2VwYXJhdG9yIiwic2VwZXJhdG9yTGVuZ3RoIiwiY2hhcnNUb1Nob3ciLCJmcm9udENoYXJzIiwiTWF0aCIsImNlaWwiLCJiYWNrQ2hhcnMiLCJmbG9vciIsInN1YnN0cmluZyIsIk5GVEJveCIsInByaWNlIiwibmZ0QWRkcmVzcyIsInRva2VuSWQiLCJtYXJrZXRwbGFjZUFkZHJlc3MiLCJzZWxsZXIiLCJpc1dlYjNFbmFibGVkIiwiYWNjb3VudCIsImltYWdlVVJJIiwic2V0SW1hZ2VVUkkiLCJ0b2tlbk5hbWUiLCJzZXRUb2tlbk5hbWUiLCJ0b2tlbkRlc2NyaXB0aW9uIiwic2V0VG9rZW5EZXNjcmlwdGlvbiIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImhpZGVNb2RhbCIsImRpc3BhdGNoIiwicnVuQ29udHJhY3RGdW5jdGlvbiIsImdldFRva2VuVVJJIiwiYWJpIiwiY29udHJhY3RBZGRyZXNzIiwiZnVuY3Rpb25OYW1lIiwicGFyYW1zIiwiYnV5SXRlbSIsIm1zZ1ZhbHVlIiwidXBkYXRlVUkiLCJ0b2tlblVSSSIsImNvbnNvbGUiLCJsb2ciLCJyZXF1ZXN0VVJMIiwicmVwbGFjZSIsInRva2VuVVJJUmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJpbWFnZSIsImltYWdlVVJJVVJMIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaXNPd25lZEJ5VXNlciIsInVuZGVmaW5lZCIsImZvcm1hdHRlZFNlbGxlckFkZHJlc3MiLCJoYW5kbGVDYXJkQ2xpY2siLCJvbkVycm9yIiwiZXJyb3IiLCJvblN1Y2Nlc3MiLCJoYW5kbGVCdXlJdGVtU3VjY2VzcyIsInR5cGUiLCJtZXNzYWdlIiwidGl0bGUiLCJwb3NpdGlvbiIsImRpdiIsImlzVmlzaWJsZSIsIm9uQ2xvc2UiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwibG9hZGVyIiwic3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJ1dGlscyIsImZvcm1hdFVuaXRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NFTBox.js\n"));

/***/ })

});