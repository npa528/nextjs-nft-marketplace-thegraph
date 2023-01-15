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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NFTBox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moralis */ \"./node_modules/react-moralis/lib/index.esm.js\");\n/* harmony import */ var _constants_NftMarketplace_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/NftMarketplace.json */ \"./constants/NftMarketplace.json\");\n/* harmony import */ var _constants_BasicNft_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/BasicNft.json */ \"./constants/BasicNft.json\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var web3uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! web3uikit */ \"./node_modules/web3uikit/dist/index.es.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _UpdateListingModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UpdateListingModal */ \"./components/UpdateListingModal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst truncateStr = (fullStr, strLen)=>{\n    if (fullStr.length <= strLen) return fullStr;\n    const separator = \"...\";\n    const seperatorLength = separator.length;\n    const charsToShow = strLen - seperatorLength;\n    const frontChars = Math.ceil(charsToShow / 2);\n    const backChars = Math.floor(charsToShow / 2);\n    return fullStr.substring(0, frontChars) + separator + fullStr.substring(fullStr.length - backChars);\n};\nfunction NFTBox(param) {\n    let { price , nftAddress , tokenId , marketplaceAddress , seller  } = param;\n    _s();\n    const { isWeb3Enabled , account  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useMoralis)();\n    const [imageURI, setImageURI] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [tokenName, setTokenName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [tokenDescription, setTokenDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const hideModal = ()=>setShowModal(false);\n    const dispatch = (0,web3uikit__WEBPACK_IMPORTED_MODULE_7__.useNotification)();\n    const { runContractFunction: getTokenURI  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useWeb3Contract)({\n        abi: _constants_BasicNft_json__WEBPACK_IMPORTED_MODULE_4__,\n        contractAddress: nftAddress,\n        functionName: \"TOKEN_URI\",\n        params: {\n            tokenId: tokenId\n        }\n    });\n    const { runContractFunction: buyItem  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useWeb3Contract)({\n        abi: _constants_NftMarketplace_json__WEBPACK_IMPORTED_MODULE_3__,\n        contractAddress: marketplaceAddress,\n        functionName: \"buyItem\",\n        msgValue: price,\n        params: {\n            nftAddress: nftAddress,\n            tokenId: tokenId\n        }\n    });\n    async function updateUI() {\n        const tokenURI = await getTokenURI();\n        console.log(\"The TokenURI is \".concat(tokenURI));\n        // We are going to cheat a little here...\n        if (tokenURI) {\n            // IPFS Gateway: A server that will return IPFS files from a \"normal\" URL.\n            const requestURL = tokenURI.replace(\"ipfs://\", \"https://ipfs.io/ipfs/\");\n            const tokenURIResponse = await (await fetch(requestURL)).json();\n            const imageURI = tokenURIResponse.image;\n            const imageURIURL = imageURI.replace(\"ipfs://\", \"https://ipfs.io/ipfs/\");\n            setImageURI(imageURIURL);\n            setTokenName(tokenURIResponse.name);\n            setTokenDescription(tokenURIResponse.description);\n        // We could render the Image on our sever, and just call our sever.\n        // For testnets & mainnet -> use moralis server hooks\n        // Have the world adopt IPFS\n        // Build our own IPFS gateway\n        }\n    // get the tokenURI\n    // using the image tag from the tokenURI, get the image\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isWeb3Enabled) {\n            updateUI();\n        }\n    }, [\n        isWeb3Enabled\n    ]);\n    const isOwnedByUser = seller === account || seller === undefined;\n    const formattedSellerAddress = isOwnedByUser ? \"you\" : truncateStr(seller || \"\", 15);\n    const handleCardClick = ()=>{\n        isOwnedByUser ? setShowModal(true) : buyItem({\n            onError: (error)=>console.log(error),\n            onSuccess: ()=>handleBuyItemSuccess()\n        });\n    };\n    const handleBuyItemSuccess = ()=>{\n        dispatch({\n            type: \"success\",\n            message: \"Item bought!\",\n            title: \"Item Bought\",\n            position: \"topR\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: imageURI ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UpdateListingModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        isVisible: showModal,\n                        tokenId: tokenId,\n                        marketplaceAddress: marketplaceAddress,\n                        nftAddress: nftAddress,\n                        onClose: hideModal\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                        lineNumber: 106,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(web3uikit__WEBPACK_IMPORTED_MODULE_7__.Card, {\n                        title: tokenName,\n                        description: tokenDescription,\n                        onClick: handleCardClick,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-end gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            \"#\",\n                                            tokenId\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                                        lineNumber: 120,\n                                        columnNumber: 37\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"italic text-sm\",\n                                        children: [\n                                            \"Owned by \",\n                                            formattedSellerAddress\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                                        lineNumber: 121,\n                                        columnNumber: 37\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        loader: ()=>imageURI,\n                                        src: imageURI,\n                                        height: \"200\",\n                                        width: \"200\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                                        lineNumber: 124,\n                                        columnNumber: 37\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"font-bold\",\n                                        children: [\n                                            ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.formatUnits(price, \"ether\"),\n                                            \" ETH\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                                        lineNumber: 130,\n                                        columnNumber: 37\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                                lineNumber: 119,\n                                columnNumber: 33\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                            lineNumber: 118,\n                            columnNumber: 29\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                        lineNumber: 113,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                lineNumber: 105,\n                columnNumber: 21\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                lineNumber: 138,\n                columnNumber: 21\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n            lineNumber: 103,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n        lineNumber: 102,\n        columnNumber: 9\n    }, this);\n}\n_s(NFTBox, \"ErSVgl4GFCIs7oMvjHtQnmn19g0=\", false, function() {\n    return [\n        react_moralis__WEBPACK_IMPORTED_MODULE_2__.useMoralis,\n        web3uikit__WEBPACK_IMPORTED_MODULE_7__.useNotification,\n        react_moralis__WEBPACK_IMPORTED_MODULE_2__.useWeb3Contract,\n        react_moralis__WEBPACK_IMPORTED_MODULE_2__.useWeb3Contract\n    ];\n});\n_c = NFTBox;\nvar _c;\n$RefreshReg$(_c, \"NFTBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05GVEJveC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTJDO0FBQ2dCO0FBQ0s7QUFDakI7QUFDakI7QUFDbUI7QUFDbEI7QUFDc0I7QUFFckQsTUFBTVcsY0FBYyxDQUFDQyxTQUFTQyxTQUFXO0lBQ3JDLElBQUlELFFBQVFFLE1BQU0sSUFBSUQsUUFBUSxPQUFPRDtJQUVyQyxNQUFNRyxZQUFZO0lBQ2xCLE1BQU1DLGtCQUFrQkQsVUFBVUQsTUFBTTtJQUN4QyxNQUFNRyxjQUFjSixTQUFTRztJQUM3QixNQUFNRSxhQUFhQyxLQUFLQyxJQUFJLENBQUNILGNBQWM7SUFDM0MsTUFBTUksWUFBWUYsS0FBS0csS0FBSyxDQUFDTCxjQUFjO0lBQzNDLE9BQ0lMLFFBQVFXLFNBQVMsQ0FBQyxHQUFHTCxjQUFjSCxZQUFZSCxRQUFRVyxTQUFTLENBQUNYLFFBQVFFLE1BQU0sR0FBR087QUFFMUY7QUFFZSxTQUFTRyxPQUFPLEtBQTBELEVBQUU7UUFBNUQsRUFBRUMsTUFBSyxFQUFFQyxXQUFVLEVBQUVDLFFBQU8sRUFBRUMsbUJBQWtCLEVBQUVDLE9BQU0sRUFBRSxHQUExRDs7SUFDM0IsTUFBTSxFQUFFQyxjQUFhLEVBQUVDLFFBQU8sRUFBRSxHQUFHNUIseURBQVVBO0lBQzdDLE1BQU0sQ0FBQzZCLFVBQVVDLFlBQVksR0FBR2pDLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ2tDLFdBQVdDLGFBQWEsR0FBR25DLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ29DLGtCQUFrQkMsb0JBQW9CLEdBQUdyQywrQ0FBUUEsQ0FBQztJQUN6RCxNQUFNLENBQUNzQyxXQUFXQyxhQUFhLEdBQUd2QywrQ0FBUUEsQ0FBQyxLQUFLO0lBQ2hELE1BQU13QyxZQUFZLElBQU1ELGFBQWEsS0FBSztJQUMxQyxNQUFNRSxXQUFXakMsMERBQWVBO0lBRWhDLE1BQU0sRUFBRWtDLHFCQUFxQkMsWUFBVyxFQUFFLEdBQUd6Qyw4REFBZUEsQ0FBQztRQUN6RDBDLEtBQUt2QyxxREFBTUE7UUFDWHdDLGlCQUFpQm5CO1FBQ2pCb0IsY0FBYztRQUNkQyxRQUFRO1lBQ0pwQixTQUFTQTtRQUNiO0lBQ0o7SUFFQSxNQUFNLEVBQUVlLHFCQUFxQk0sUUFBTyxFQUFFLEdBQUc5Qyw4REFBZUEsQ0FBQztRQUNyRDBDLEtBQUt4QywyREFBaUJBO1FBQ3RCeUMsaUJBQWlCakI7UUFDakJrQixjQUFjO1FBQ2RHLFVBQVV4QjtRQUNWc0IsUUFBUTtZQUNKckIsWUFBWUE7WUFDWkMsU0FBU0E7UUFDYjtJQUNKO0lBRUEsZUFBZXVCLFdBQVc7UUFDdEIsTUFBTUMsV0FBVyxNQUFNUjtRQUN2QlMsUUFBUUMsR0FBRyxDQUFDLG1CQUE0QixPQUFURjtRQUMvQix5Q0FBeUM7UUFDekMsSUFBSUEsVUFBVTtZQUNWLDBFQUEwRTtZQUMxRSxNQUFNRyxhQUFhSCxTQUFTSSxPQUFPLENBQUMsV0FBVztZQUMvQyxNQUFNQyxtQkFBbUIsTUFBTSxDQUFDLE1BQU1DLE1BQU1ILFdBQVUsRUFBR0ksSUFBSTtZQUM3RCxNQUFNMUIsV0FBV3dCLGlCQUFpQkcsS0FBSztZQUN2QyxNQUFNQyxjQUFjNUIsU0FBU3VCLE9BQU8sQ0FBQyxXQUFXO1lBQ2hEdEIsWUFBWTJCO1lBQ1p6QixhQUFhcUIsaUJBQWlCSyxJQUFJO1lBQ2xDeEIsb0JBQW9CbUIsaUJBQWlCTSxXQUFXO1FBQ2hELG1FQUFtRTtRQUNuRSxxREFBcUQ7UUFDckQsNEJBQTRCO1FBQzVCLDZCQUE2QjtRQUNqQyxDQUFDO0lBQ0QsbUJBQW1CO0lBQ25CLHVEQUF1RDtJQUMzRDtJQUVBN0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNaLElBQUk2QixlQUFlO1lBQ2ZvQjtRQUNKLENBQUM7SUFDTCxHQUFHO1FBQUNwQjtLQUFjO0lBRWxCLE1BQU1pQyxnQkFBZ0JsQyxXQUFXRSxXQUFXRixXQUFXbUM7SUFDdkQsTUFBTUMseUJBQXlCRixnQkFBZ0IsUUFBUXBELFlBQVlrQixVQUFVLElBQUksR0FBRztJQUVwRixNQUFNcUMsa0JBQWtCLElBQU07UUFDMUJILGdCQUNNeEIsYUFBYSxJQUFJLElBQ2pCUyxRQUFRO1lBQ0ptQixTQUFTLENBQUNDLFFBQVVoQixRQUFRQyxHQUFHLENBQUNlO1lBQ2hDQyxXQUFXLElBQU1DO1FBQ3JCLEVBQUU7SUFDWjtJQUVBLE1BQU1BLHVCQUF1QixJQUFNO1FBQy9CN0IsU0FBUztZQUNMOEIsTUFBTTtZQUNOQyxTQUFTO1lBQ1RDLE9BQU87WUFDUEMsVUFBVTtRQUNkO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ0M7a0JBQ0csNEVBQUNBO3NCQUNJM0MseUJBQ0csOERBQUMyQzs7a0NBQ0csOERBQUNqRSwyREFBa0JBO3dCQUNma0UsV0FBV3RDO3dCQUNYWCxTQUFTQTt3QkFDVEMsb0JBQW9CQTt3QkFDcEJGLFlBQVlBO3dCQUNabUQsU0FBU3JDOzs7Ozs7a0NBRWIsOERBQUNqQywyQ0FBSUE7d0JBQ0RrRSxPQUFPdkM7d0JBQ1A0QixhQUFhMUI7d0JBQ2IwQyxTQUFTWjtrQ0FFVCw0RUFBQ1M7NEJBQUlJLFdBQVU7c0NBQ1gsNEVBQUNKO2dDQUFJSSxXQUFVOztrREFDWCw4REFBQ0o7OzRDQUFJOzRDQUFFaEQ7Ozs7Ozs7a0RBQ1AsOERBQUNnRDt3Q0FBSUksV0FBVTs7NENBQWlCOzRDQUNsQmQ7Ozs7Ozs7a0RBRWQsOERBQUMzRCxtREFBS0E7d0NBQ0YwRSxRQUFRLElBQU1oRDt3Q0FDZGlELEtBQUtqRDt3Q0FDTGtELFFBQU87d0NBQ1BDLE9BQU07Ozs7OztrREFFViw4REFBQ1I7d0NBQUlJLFdBQVU7OzRDQUNWdEUsNERBQXdCLENBQUNnQixPQUFPOzRDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQU85RCw4REFBQ2tEOzBCQUFJOzs7OztvQkFDUjs7Ozs7Ozs7Ozs7QUFJakIsQ0FBQztHQXhIdUJuRDs7UUFDZXJCLHFEQUFVQTtRQU01Qkssc0RBQWVBO1FBRWFOLDBEQUFlQTtRQVNuQkEsMERBQWVBOzs7S0FsQnBDc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ORlRCb3guanM/M2M2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgdXNlV2ViM0NvbnRyYWN0LCB1c2VNb3JhbGlzIH0gZnJvbSBcInJlYWN0LW1vcmFsaXNcIlxyXG5pbXBvcnQgbmZ0TWFya2V0cGxhY2VBYmkgZnJvbSBcIi4uL2NvbnN0YW50cy9OZnRNYXJrZXRwbGFjZS5qc29uXCJcclxuaW1wb3J0IG5mdEFiaSBmcm9tIFwiLi4vY29uc3RhbnRzL0Jhc2ljTmZ0Lmpzb25cIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxyXG5pbXBvcnQgeyBDYXJkLCB1c2VOb3RpZmljYXRpb24gfSBmcm9tIFwid2ViM3Vpa2l0XCJcclxuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiXHJcbmltcG9ydCBVcGRhdGVMaXN0aW5nTW9kYWwgZnJvbSBcIi4vVXBkYXRlTGlzdGluZ01vZGFsXCJcclxuXHJcbmNvbnN0IHRydW5jYXRlU3RyID0gKGZ1bGxTdHIsIHN0ckxlbikgPT4ge1xyXG4gICAgaWYgKGZ1bGxTdHIubGVuZ3RoIDw9IHN0ckxlbikgcmV0dXJuIGZ1bGxTdHJcclxuXHJcbiAgICBjb25zdCBzZXBhcmF0b3IgPSBcIi4uLlwiXHJcbiAgICBjb25zdCBzZXBlcmF0b3JMZW5ndGggPSBzZXBhcmF0b3IubGVuZ3RoXHJcbiAgICBjb25zdCBjaGFyc1RvU2hvdyA9IHN0ckxlbiAtIHNlcGVyYXRvckxlbmd0aFxyXG4gICAgY29uc3QgZnJvbnRDaGFycyA9IE1hdGguY2VpbChjaGFyc1RvU2hvdyAvIDIpXHJcbiAgICBjb25zdCBiYWNrQ2hhcnMgPSBNYXRoLmZsb29yKGNoYXJzVG9TaG93IC8gMilcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgZnVsbFN0ci5zdWJzdHJpbmcoMCwgZnJvbnRDaGFycykgKyBzZXBhcmF0b3IgKyBmdWxsU3RyLnN1YnN0cmluZyhmdWxsU3RyLmxlbmd0aCAtIGJhY2tDaGFycylcclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTkZUQm94KHsgcHJpY2UsIG5mdEFkZHJlc3MsIHRva2VuSWQsIG1hcmtldHBsYWNlQWRkcmVzcywgc2VsbGVyIH0pIHtcclxuICAgIGNvbnN0IHsgaXNXZWIzRW5hYmxlZCwgYWNjb3VudCB9ID0gdXNlTW9yYWxpcygpXHJcbiAgICBjb25zdCBbaW1hZ2VVUkksIHNldEltYWdlVVJJXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbdG9rZW5OYW1lLCBzZXRUb2tlbk5hbWVdID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFt0b2tlbkRlc2NyaXB0aW9uLCBzZXRUb2tlbkRlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBoaWRlTW9kYWwgPSAoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZU5vdGlmaWNhdGlvbigpXHJcblxyXG4gICAgY29uc3QgeyBydW5Db250cmFjdEZ1bmN0aW9uOiBnZXRUb2tlblVSSSB9ID0gdXNlV2ViM0NvbnRyYWN0KHtcclxuICAgICAgICBhYmk6IG5mdEFiaSxcclxuICAgICAgICBjb250cmFjdEFkZHJlc3M6IG5mdEFkZHJlc3MsXHJcbiAgICAgICAgZnVuY3Rpb25OYW1lOiBcIlRPS0VOX1VSSVwiLFxyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICB0b2tlbklkOiB0b2tlbklkLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHsgcnVuQ29udHJhY3RGdW5jdGlvbjogYnV5SXRlbSB9ID0gdXNlV2ViM0NvbnRyYWN0KHtcclxuICAgICAgICBhYmk6IG5mdE1hcmtldHBsYWNlQWJpLFxyXG4gICAgICAgIGNvbnRyYWN0QWRkcmVzczogbWFya2V0cGxhY2VBZGRyZXNzLFxyXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogXCJidXlJdGVtXCIsXHJcbiAgICAgICAgbXNnVmFsdWU6IHByaWNlLFxyXG4gICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICBuZnRBZGRyZXNzOiBuZnRBZGRyZXNzLFxyXG4gICAgICAgICAgICB0b2tlbklkOiB0b2tlbklkLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVVJKCkge1xyXG4gICAgICAgIGNvbnN0IHRva2VuVVJJID0gYXdhaXQgZ2V0VG9rZW5VUkkoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGBUaGUgVG9rZW5VUkkgaXMgJHt0b2tlblVSSX1gKVxyXG4gICAgICAgIC8vIFdlIGFyZSBnb2luZyB0byBjaGVhdCBhIGxpdHRsZSBoZXJlLi4uXHJcbiAgICAgICAgaWYgKHRva2VuVVJJKSB7XHJcbiAgICAgICAgICAgIC8vIElQRlMgR2F0ZXdheTogQSBzZXJ2ZXIgdGhhdCB3aWxsIHJldHVybiBJUEZTIGZpbGVzIGZyb20gYSBcIm5vcm1hbFwiIFVSTC5cclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdFVSTCA9IHRva2VuVVJJLnJlcGxhY2UoXCJpcGZzOi8vXCIsIFwiaHR0cHM6Ly9pcGZzLmlvL2lwZnMvXCIpXHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuVVJJUmVzcG9uc2UgPSBhd2FpdCAoYXdhaXQgZmV0Y2gocmVxdWVzdFVSTCkpLmpzb24oKVxyXG4gICAgICAgICAgICBjb25zdCBpbWFnZVVSSSA9IHRva2VuVVJJUmVzcG9uc2UuaW1hZ2VcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2VVUklVUkwgPSBpbWFnZVVSSS5yZXBsYWNlKFwiaXBmczovL1wiLCBcImh0dHBzOi8vaXBmcy5pby9pcGZzL1wiKVxyXG4gICAgICAgICAgICBzZXRJbWFnZVVSSShpbWFnZVVSSVVSTClcclxuICAgICAgICAgICAgc2V0VG9rZW5OYW1lKHRva2VuVVJJUmVzcG9uc2UubmFtZSlcclxuICAgICAgICAgICAgc2V0VG9rZW5EZXNjcmlwdGlvbih0b2tlblVSSVJlc3BvbnNlLmRlc2NyaXB0aW9uKVxyXG4gICAgICAgICAgICAvLyBXZSBjb3VsZCByZW5kZXIgdGhlIEltYWdlIG9uIG91ciBzZXZlciwgYW5kIGp1c3QgY2FsbCBvdXIgc2V2ZXIuXHJcbiAgICAgICAgICAgIC8vIEZvciB0ZXN0bmV0cyAmIG1haW5uZXQgLT4gdXNlIG1vcmFsaXMgc2VydmVyIGhvb2tzXHJcbiAgICAgICAgICAgIC8vIEhhdmUgdGhlIHdvcmxkIGFkb3B0IElQRlNcclxuICAgICAgICAgICAgLy8gQnVpbGQgb3VyIG93biBJUEZTIGdhdGV3YXlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZ2V0IHRoZSB0b2tlblVSSVxyXG4gICAgICAgIC8vIHVzaW5nIHRoZSBpbWFnZSB0YWcgZnJvbSB0aGUgdG9rZW5VUkksIGdldCB0aGUgaW1hZ2VcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc1dlYjNFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVVJKClcclxuICAgICAgICB9XHJcbiAgICB9LCBbaXNXZWIzRW5hYmxlZF0pXHJcblxyXG4gICAgY29uc3QgaXNPd25lZEJ5VXNlciA9IHNlbGxlciA9PT0gYWNjb3VudCB8fCBzZWxsZXIgPT09IHVuZGVmaW5lZFxyXG4gICAgY29uc3QgZm9ybWF0dGVkU2VsbGVyQWRkcmVzcyA9IGlzT3duZWRCeVVzZXIgPyBcInlvdVwiIDogdHJ1bmNhdGVTdHIoc2VsbGVyIHx8IFwiXCIsIDE1KVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNhcmRDbGljayA9ICgpID0+IHtcclxuICAgICAgICBpc093bmVkQnlVc2VyXHJcbiAgICAgICAgICAgID8gc2V0U2hvd01vZGFsKHRydWUpXHJcbiAgICAgICAgICAgIDogYnV5SXRlbSh7XHJcbiAgICAgICAgICAgICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IGhhbmRsZUJ1eUl0ZW1TdWNjZXNzKCksXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVCdXlJdGVtU3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkl0ZW0gYm91Z2h0IVwiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJJdGVtIEJvdWdodFwiLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BSXCIsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7aW1hZ2VVUkkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFVwZGF0ZUxpc3RpbmdNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWaXNpYmxlPXtzaG93TW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbklkPXt0b2tlbklkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0cGxhY2VBZGRyZXNzPXttYXJrZXRwbGFjZUFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZnRBZGRyZXNzPXtuZnRBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGlkZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Rva2VuTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0b2tlbkRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2FyZENsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1lbmQgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4je3Rva2VuSWR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRhbGljIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE93bmVkIGJ5IHtmb3JtYXR0ZWRTZWxsZXJBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkZXI9eygpID0+IGltYWdlVVJJfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVVSSX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXRoZXJzLnV0aWxzLmZvcm1hdFVuaXRzKHByaWNlLCBcImV0aGVyXCIpfSBFVEhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVdlYjNDb250cmFjdCIsInVzZU1vcmFsaXMiLCJuZnRNYXJrZXRwbGFjZUFiaSIsIm5mdEFiaSIsIkltYWdlIiwiQ2FyZCIsInVzZU5vdGlmaWNhdGlvbiIsImV0aGVycyIsIlVwZGF0ZUxpc3RpbmdNb2RhbCIsInRydW5jYXRlU3RyIiwiZnVsbFN0ciIsInN0ckxlbiIsImxlbmd0aCIsInNlcGFyYXRvciIsInNlcGVyYXRvckxlbmd0aCIsImNoYXJzVG9TaG93IiwiZnJvbnRDaGFycyIsIk1hdGgiLCJjZWlsIiwiYmFja0NoYXJzIiwiZmxvb3IiLCJzdWJzdHJpbmciLCJORlRCb3giLCJwcmljZSIsIm5mdEFkZHJlc3MiLCJ0b2tlbklkIiwibWFya2V0cGxhY2VBZGRyZXNzIiwic2VsbGVyIiwiaXNXZWIzRW5hYmxlZCIsImFjY291bnQiLCJpbWFnZVVSSSIsInNldEltYWdlVVJJIiwidG9rZW5OYW1lIiwic2V0VG9rZW5OYW1lIiwidG9rZW5EZXNjcmlwdGlvbiIsInNldFRva2VuRGVzY3JpcHRpb24iLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJoaWRlTW9kYWwiLCJkaXNwYXRjaCIsInJ1bkNvbnRyYWN0RnVuY3Rpb24iLCJnZXRUb2tlblVSSSIsImFiaSIsImNvbnRyYWN0QWRkcmVzcyIsImZ1bmN0aW9uTmFtZSIsInBhcmFtcyIsImJ1eUl0ZW0iLCJtc2dWYWx1ZSIsInVwZGF0ZVVJIiwidG9rZW5VUkkiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdFVSTCIsInJlcGxhY2UiLCJ0b2tlblVSSVJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiaW1hZ2UiLCJpbWFnZVVSSVVSTCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImlzT3duZWRCeVVzZXIiLCJ1bmRlZmluZWQiLCJmb3JtYXR0ZWRTZWxsZXJBZGRyZXNzIiwiaGFuZGxlQ2FyZENsaWNrIiwib25FcnJvciIsImVycm9yIiwib25TdWNjZXNzIiwiaGFuZGxlQnV5SXRlbVN1Y2Nlc3MiLCJ0eXBlIiwibWVzc2FnZSIsInRpdGxlIiwicG9zaXRpb24iLCJkaXYiLCJpc1Zpc2libGUiLCJvbkNsb3NlIiwib25DbGljayIsImNsYXNzTmFtZSIsImxvYWRlciIsInNyYyIsImhlaWdodCIsIndpZHRoIiwidXRpbHMiLCJmb3JtYXRVbml0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NFTBox.js\n"));

/***/ })

});