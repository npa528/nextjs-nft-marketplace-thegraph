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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NFTBox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moralis */ \"./node_modules/react-moralis/lib/index.esm.js\");\n/* harmony import */ var _constants_NftMarketplace_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants/NftMarketplace.json */ \"./constants/NftMarketplace.json\");\n/* harmony import */ var _constants_BasicNft_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/BasicNft.json */ \"./constants/BasicNft.json\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var web3uikit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! web3uikit */ \"./node_modules/web3uikit/dist/index.es.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _UpdateListingModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UpdateListingModal */ \"./components/UpdateListingModal.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst truncateStr = (fullStr, strLen)=>{\n    if (fullStr.length <= strLen) return fullStr;\n    const separator = \"...\";\n    const seperatorLength = separator.length;\n    const charsToShow = strLen - seperatorLength;\n    const frontChars = Math.ceil(charsToShow / 2);\n    const backChars = Math.floor(charsToShow / 2);\n    return fullStr.substring(0, frontChars) + separator + fullStr.substring(fullStr.length - backChars);\n};\nfunction NFTBox(param) {\n    let { price , nftAddress , tokenId , marketplaceAddress , seller  } = param;\n    _s();\n    const { isWeb3Enabled , account  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useMoralis)();\n    const [imageURI, setImageURI] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [tokenName, setTokenName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [tokenDescription, setTokenDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const hideModal = ()=>setShowModal(false);\n    const dispatch = (0,web3uikit__WEBPACK_IMPORTED_MODULE_7__.useNotification)();\n    const { runContractFunction: getTokenURI  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useWeb3Contract)({\n        abi: _constants_BasicNft_json__WEBPACK_IMPORTED_MODULE_4__,\n        contractAddress: nftAddress,\n        functionName: \"gettokenURI\",\n        params: {\n            tokenId: tokenId\n        }\n    });\n    const { runContractFunction: buyItem  } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_2__.useWeb3Contract)({\n        abi: _constants_NftMarketplace_json__WEBPACK_IMPORTED_MODULE_3__,\n        contractAddress: marketplaceAddress,\n        functionName: \"buyItem\",\n        msgValue: price,\n        params: {\n            nftAddress: nftAddress,\n            tokenId: tokenId\n        }\n    });\n    async function updateUI() {\n        const tokenURI = await getTokenURI();\n        console.log(\"tokenURI is \".concat(tokenURI));\n        // We are going to cheat a little here...\n        if (tokenURI) {\n            // IPFS Gateway: A server that will return IPFS files from a \"normal\" URL.\n            const requestURL = tokenURI.replace(\"ipfs://\", \"https://ipfs.io/ipfs/\");\n            const tokenURIResponse = await (await fetch(requestURL)).json();\n            const imageURI = tokenURIResponse.image;\n            const imageURIURL = imageURI.replace(\"ipfs://\", \"https://ipfs.io/ipfs/\");\n            setImageURI(imageURIURL);\n            setTokenName(tokenURIResponse.name);\n            setTokenDescription(tokenURIResponse.description);\n        // We could render the Image on our sever, and just call our sever.\n        // For testnets & mainnet -> use moralis server hooks\n        // Have the world adopt IPFS\n        // Build our own IPFS gateway\n        }\n    // get the tokenURI\n    // using the image tag from the tokenURI, get the image\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isWeb3Enabled) {\n            updateUI();\n        }\n    }, [\n        isWeb3Enabled\n    ]);\n    const isOwnedByUser = seller === account || seller === undefined;\n    const formattedSellerAddress = isOwnedByUser ? \"you\" : truncateStr(seller || \"\", 15);\n    const handleCardClick = ()=>{\n        isOwnedByUser ? setShowModal(true) : buyItem({\n            onError: (error)=>console.log(error),\n            onSuccess: ()=>handleBuyItemSuccess()\n        });\n    };\n    const handleBuyItemSuccess = ()=>{\n        dispatch({\n            type: \"success\",\n            message: \"Item bought!\",\n            title: \"Item Bought\",\n            position: \"topR\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: imageURI ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UpdateListingModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        isVisible: showModal,\n                        tokenId: tokenId,\n                        marketplaceAddress: marketplaceAddress,\n                        nftAddress: nftAddress,\n                        onClose: hideModal\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                        lineNumber: 106,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(web3uikit__WEBPACK_IMPORTED_MODULE_7__.Card, {\n                        title: tokenName,\n                        description: tokenDescription,\n                        onClick: handleCardClick,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-col items-end gap-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            \"#\",\n                                            tokenId\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                                        lineNumber: 120,\n                                        columnNumber: 37\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"italic text-sm\",\n                                        children: [\n                                            \"Owned by \",\n                                            formattedSellerAddress\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                                        lineNumber: 121,\n                                        columnNumber: 37\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        loader: ()=>imageURI,\n                                        src: imageURI,\n                                        height: \"200\",\n                                        width: \"200\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                                        lineNumber: 124,\n                                        columnNumber: 37\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"font-bold\",\n                                        children: [\n                                            ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.utils.formatUnits(price, \"ether\"),\n                                            \" ETH\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                                        lineNumber: 130,\n                                        columnNumber: 37\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                                lineNumber: 119,\n                                columnNumber: 33\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                            lineNumber: 118,\n                            columnNumber: 29\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                        lineNumber: 113,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                lineNumber: 105,\n                columnNumber: 21\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n                lineNumber: 138,\n                columnNumber: 21\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n            lineNumber: 103,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Nikos\\\\development_private\\\\crypto training\\\\FreeCodeCamp\\\\nextjs-nft-marketplace-thegraph\\\\components\\\\NFTBox.js\",\n        lineNumber: 102,\n        columnNumber: 9\n    }, this);\n}\n_s(NFTBox, \"ErSVgl4GFCIs7oMvjHtQnmn19g0=\", false, function() {\n    return [\n        react_moralis__WEBPACK_IMPORTED_MODULE_2__.useMoralis,\n        web3uikit__WEBPACK_IMPORTED_MODULE_7__.useNotification,\n        react_moralis__WEBPACK_IMPORTED_MODULE_2__.useWeb3Contract,\n        react_moralis__WEBPACK_IMPORTED_MODULE_2__.useWeb3Contract\n    ];\n});\n_c = NFTBox;\nvar _c;\n$RefreshReg$(_c, \"NFTBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05GVEJveC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTJDO0FBQ2dCO0FBQ0s7QUFDakI7QUFDakI7QUFDbUI7QUFDbEI7QUFDc0I7QUFFckQsTUFBTVcsY0FBYyxDQUFDQyxTQUFTQyxTQUFXO0lBQ3JDLElBQUlELFFBQVFFLE1BQU0sSUFBSUQsUUFBUSxPQUFPRDtJQUVyQyxNQUFNRyxZQUFZO0lBQ2xCLE1BQU1DLGtCQUFrQkQsVUFBVUQsTUFBTTtJQUN4QyxNQUFNRyxjQUFjSixTQUFTRztJQUM3QixNQUFNRSxhQUFhQyxLQUFLQyxJQUFJLENBQUNILGNBQWM7SUFDM0MsTUFBTUksWUFBWUYsS0FBS0csS0FBSyxDQUFDTCxjQUFjO0lBQzNDLE9BQ0lMLFFBQVFXLFNBQVMsQ0FBQyxHQUFHTCxjQUFjSCxZQUFZSCxRQUFRVyxTQUFTLENBQUNYLFFBQVFFLE1BQU0sR0FBR087QUFFMUY7QUFFZSxTQUFTRyxPQUFPLEtBQTBELEVBQUU7UUFBNUQsRUFBRUMsTUFBSyxFQUFFQyxXQUFVLEVBQUVDLFFBQU8sRUFBRUMsbUJBQWtCLEVBQUVDLE9BQU0sRUFBRSxHQUExRDs7SUFDM0IsTUFBTSxFQUFFQyxjQUFhLEVBQUVDLFFBQU8sRUFBRSxHQUFHNUIseURBQVVBO0lBQzdDLE1BQU0sQ0FBQzZCLFVBQVVDLFlBQVksR0FBR2pDLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ2tDLFdBQVdDLGFBQWEsR0FBR25DLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ29DLGtCQUFrQkMsb0JBQW9CLEdBQUdyQywrQ0FBUUEsQ0FBQztJQUN6RCxNQUFNLENBQUNzQyxXQUFXQyxhQUFhLEdBQUd2QywrQ0FBUUEsQ0FBQyxLQUFLO0lBQ2hELE1BQU13QyxZQUFZLElBQU1ELGFBQWEsS0FBSztJQUMxQyxNQUFNRSxXQUFXakMsMERBQWVBO0lBRWhDLE1BQU0sRUFBRWtDLHFCQUFxQkMsWUFBVyxFQUFFLEdBQUd6Qyw4REFBZUEsQ0FBQztRQUN6RDBDLEtBQUt2QyxxREFBTUE7UUFDWHdDLGlCQUFpQm5CO1FBQ2pCb0IsY0FBYztRQUNkQyxRQUFRO1lBQ0pwQixTQUFTQTtRQUNiO0lBQ0o7SUFFQSxNQUFNLEVBQUVlLHFCQUFxQk0sUUFBTyxFQUFFLEdBQUc5Qyw4REFBZUEsQ0FBQztRQUNyRDBDLEtBQUt4QywyREFBaUJBO1FBQ3RCeUMsaUJBQWlCakI7UUFDakJrQixjQUFjO1FBQ2RHLFVBQVV4QjtRQUNWc0IsUUFBUTtZQUNKckIsWUFBWUE7WUFDWkMsU0FBU0E7UUFDYjtJQUNKO0lBRUEsZUFBZXVCLFdBQVc7UUFDdEIsTUFBTUMsV0FBVyxNQUFNUjtRQUN2QlMsUUFBUUMsR0FBRyxDQUFDLGVBQXdCLE9BQVRGO1FBQzNCLHlDQUF5QztRQUN6QyxJQUFJQSxVQUFVO1lBQ1YsMEVBQTBFO1lBQzFFLE1BQU1HLGFBQWFILFNBQVNJLE9BQU8sQ0FBQyxXQUFXO1lBQy9DLE1BQU1DLG1CQUFtQixNQUFNLENBQUMsTUFBTUMsTUFBTUgsV0FBVSxFQUFHSSxJQUFJO1lBQzdELE1BQU0xQixXQUFXd0IsaUJBQWlCRyxLQUFLO1lBQ3ZDLE1BQU1DLGNBQWM1QixTQUFTdUIsT0FBTyxDQUFDLFdBQVc7WUFDaER0QixZQUFZMkI7WUFDWnpCLGFBQWFxQixpQkFBaUJLLElBQUk7WUFDbEN4QixvQkFBb0JtQixpQkFBaUJNLFdBQVc7UUFDaEQsbUVBQW1FO1FBQ25FLHFEQUFxRDtRQUNyRCw0QkFBNEI7UUFDNUIsNkJBQTZCO1FBQ2pDLENBQUM7SUFDRCxtQkFBbUI7SUFDbkIsdURBQXVEO0lBQzNEO0lBRUE3RCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osSUFBSTZCLGVBQWU7WUFDZm9CO1FBQ0osQ0FBQztJQUNMLEdBQUc7UUFBQ3BCO0tBQWM7SUFFbEIsTUFBTWlDLGdCQUFnQmxDLFdBQVdFLFdBQVdGLFdBQVdtQztJQUN2RCxNQUFNQyx5QkFBeUJGLGdCQUFnQixRQUFRcEQsWUFBWWtCLFVBQVUsSUFBSSxHQUFHO0lBRXBGLE1BQU1xQyxrQkFBa0IsSUFBTTtRQUMxQkgsZ0JBQ014QixhQUFhLElBQUksSUFDakJTLFFBQVE7WUFDSm1CLFNBQVMsQ0FBQ0MsUUFBVWhCLFFBQVFDLEdBQUcsQ0FBQ2U7WUFDaENDLFdBQVcsSUFBTUM7UUFDckIsRUFBRTtJQUNaO0lBRUEsTUFBTUEsdUJBQXVCLElBQU07UUFDL0I3QixTQUFTO1lBQ0w4QixNQUFNO1lBQ05DLFNBQVM7WUFDVEMsT0FBTztZQUNQQyxVQUFVO1FBQ2Q7SUFDSjtJQUVBLHFCQUNJLDhEQUFDQztrQkFDRyw0RUFBQ0E7c0JBQ0kzQyx5QkFDRyw4REFBQzJDOztrQ0FDRyw4REFBQ2pFLDJEQUFrQkE7d0JBQ2ZrRSxXQUFXdEM7d0JBQ1hYLFNBQVNBO3dCQUNUQyxvQkFBb0JBO3dCQUNwQkYsWUFBWUE7d0JBQ1ptRCxTQUFTckM7Ozs7OztrQ0FFYiw4REFBQ2pDLDJDQUFJQTt3QkFDRGtFLE9BQU92Qzt3QkFDUDRCLGFBQWExQjt3QkFDYjBDLFNBQVNaO2tDQUVULDRFQUFDUzs0QkFBSUksV0FBVTtzQ0FDWCw0RUFBQ0o7Z0NBQUlJLFdBQVU7O2tEQUNYLDhEQUFDSjs7NENBQUk7NENBQUVoRDs7Ozs7OztrREFDUCw4REFBQ2dEO3dDQUFJSSxXQUFVOzs0Q0FBaUI7NENBQ2xCZDs7Ozs7OztrREFFZCw4REFBQzNELG1EQUFLQTt3Q0FDRjBFLFFBQVEsSUFBTWhEO3dDQUNkaUQsS0FBS2pEO3dDQUNMa0QsUUFBTzt3Q0FDUEMsT0FBTTs7Ozs7O2tEQUVWLDhEQUFDUjt3Q0FBSUksV0FBVTs7NENBQ1Z0RSw0REFBd0IsQ0FBQ2dCLE9BQU87NENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBTzlELDhEQUFDa0Q7MEJBQUk7Ozs7O29CQUNSOzs7Ozs7Ozs7OztBQUlqQixDQUFDO0dBeEh1Qm5EOztRQUNlckIscURBQVVBO1FBTTVCSyxzREFBZUE7UUFFYU4sMERBQWVBO1FBU25CQSwwREFBZUE7OztLQWxCcENzQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05GVEJveC5qcz8zYzZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VXZWIzQ29udHJhY3QsIHVzZU1vcmFsaXMgfSBmcm9tIFwicmVhY3QtbW9yYWxpc1wiXHJcbmltcG9ydCBuZnRNYXJrZXRwbGFjZUFiaSBmcm9tIFwiLi4vY29uc3RhbnRzL05mdE1hcmtldHBsYWNlLmpzb25cIlxyXG5pbXBvcnQgbmZ0QWJpIGZyb20gXCIuLi9jb25zdGFudHMvQmFzaWNOZnQuanNvblwiXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXHJcbmltcG9ydCB7IENhcmQsIHVzZU5vdGlmaWNhdGlvbiB9IGZyb20gXCJ3ZWIzdWlraXRcIlxyXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCJcclxuaW1wb3J0IFVwZGF0ZUxpc3RpbmdNb2RhbCBmcm9tIFwiLi9VcGRhdGVMaXN0aW5nTW9kYWxcIlxyXG5cclxuY29uc3QgdHJ1bmNhdGVTdHIgPSAoZnVsbFN0ciwgc3RyTGVuKSA9PiB7XHJcbiAgICBpZiAoZnVsbFN0ci5sZW5ndGggPD0gc3RyTGVuKSByZXR1cm4gZnVsbFN0clxyXG5cclxuICAgIGNvbnN0IHNlcGFyYXRvciA9IFwiLi4uXCJcclxuICAgIGNvbnN0IHNlcGVyYXRvckxlbmd0aCA9IHNlcGFyYXRvci5sZW5ndGhcclxuICAgIGNvbnN0IGNoYXJzVG9TaG93ID0gc3RyTGVuIC0gc2VwZXJhdG9yTGVuZ3RoXHJcbiAgICBjb25zdCBmcm9udENoYXJzID0gTWF0aC5jZWlsKGNoYXJzVG9TaG93IC8gMilcclxuICAgIGNvbnN0IGJhY2tDaGFycyA9IE1hdGguZmxvb3IoY2hhcnNUb1Nob3cgLyAyKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICBmdWxsU3RyLnN1YnN0cmluZygwLCBmcm9udENoYXJzKSArIHNlcGFyYXRvciArIGZ1bGxTdHIuc3Vic3RyaW5nKGZ1bGxTdHIubGVuZ3RoIC0gYmFja0NoYXJzKVxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBORlRCb3goeyBwcmljZSwgbmZ0QWRkcmVzcywgdG9rZW5JZCwgbWFya2V0cGxhY2VBZGRyZXNzLCBzZWxsZXIgfSkge1xyXG4gICAgY29uc3QgeyBpc1dlYjNFbmFibGVkLCBhY2NvdW50IH0gPSB1c2VNb3JhbGlzKClcclxuICAgIGNvbnN0IFtpbWFnZVVSSSwgc2V0SW1hZ2VVUkldID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFt0b2tlbk5hbWUsIHNldFRva2VuTmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgY29uc3QgW3Rva2VuRGVzY3JpcHRpb24sIHNldFRva2VuRGVzY3JpcHRpb25dID0gdXNlU3RhdGUoXCJcIilcclxuICAgIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IGhpZGVNb2RhbCA9ICgpID0+IHNldFNob3dNb2RhbChmYWxzZSlcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlTm90aWZpY2F0aW9uKClcclxuXHJcbiAgICBjb25zdCB7IHJ1bkNvbnRyYWN0RnVuY3Rpb246IGdldFRva2VuVVJJIH0gPSB1c2VXZWIzQ29udHJhY3Qoe1xyXG4gICAgICAgIGFiaTogbmZ0QWJpLFxyXG4gICAgICAgIGNvbnRyYWN0QWRkcmVzczogbmZ0QWRkcmVzcyxcclxuICAgICAgICBmdW5jdGlvbk5hbWU6IFwiZ2V0dG9rZW5VUklcIixcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgdG9rZW5JZDogdG9rZW5JZCxcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB7IHJ1bkNvbnRyYWN0RnVuY3Rpb246IGJ1eUl0ZW0gfSA9IHVzZVdlYjNDb250cmFjdCh7XHJcbiAgICAgICAgYWJpOiBuZnRNYXJrZXRwbGFjZUFiaSxcclxuICAgICAgICBjb250cmFjdEFkZHJlc3M6IG1hcmtldHBsYWNlQWRkcmVzcyxcclxuICAgICAgICBmdW5jdGlvbk5hbWU6IFwiYnV5SXRlbVwiLFxyXG4gICAgICAgIG1zZ1ZhbHVlOiBwcmljZSxcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgbmZ0QWRkcmVzczogbmZ0QWRkcmVzcyxcclxuICAgICAgICAgICAgdG9rZW5JZDogdG9rZW5JZCxcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiB1cGRhdGVVSSgpIHtcclxuICAgICAgICBjb25zdCB0b2tlblVSSSA9IGF3YWl0IGdldFRva2VuVVJJKClcclxuICAgICAgICBjb25zb2xlLmxvZyhgdG9rZW5VUkkgaXMgJHt0b2tlblVSSX1gKVxyXG4gICAgICAgIC8vIFdlIGFyZSBnb2luZyB0byBjaGVhdCBhIGxpdHRsZSBoZXJlLi4uXHJcbiAgICAgICAgaWYgKHRva2VuVVJJKSB7XHJcbiAgICAgICAgICAgIC8vIElQRlMgR2F0ZXdheTogQSBzZXJ2ZXIgdGhhdCB3aWxsIHJldHVybiBJUEZTIGZpbGVzIGZyb20gYSBcIm5vcm1hbFwiIFVSTC5cclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdFVSTCA9IHRva2VuVVJJLnJlcGxhY2UoXCJpcGZzOi8vXCIsIFwiaHR0cHM6Ly9pcGZzLmlvL2lwZnMvXCIpXHJcbiAgICAgICAgICAgIGNvbnN0IHRva2VuVVJJUmVzcG9uc2UgPSBhd2FpdCAoYXdhaXQgZmV0Y2gocmVxdWVzdFVSTCkpLmpzb24oKVxyXG4gICAgICAgICAgICBjb25zdCBpbWFnZVVSSSA9IHRva2VuVVJJUmVzcG9uc2UuaW1hZ2VcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2VVUklVUkwgPSBpbWFnZVVSSS5yZXBsYWNlKFwiaXBmczovL1wiLCBcImh0dHBzOi8vaXBmcy5pby9pcGZzL1wiKVxyXG4gICAgICAgICAgICBzZXRJbWFnZVVSSShpbWFnZVVSSVVSTClcclxuICAgICAgICAgICAgc2V0VG9rZW5OYW1lKHRva2VuVVJJUmVzcG9uc2UubmFtZSlcclxuICAgICAgICAgICAgc2V0VG9rZW5EZXNjcmlwdGlvbih0b2tlblVSSVJlc3BvbnNlLmRlc2NyaXB0aW9uKVxyXG4gICAgICAgICAgICAvLyBXZSBjb3VsZCByZW5kZXIgdGhlIEltYWdlIG9uIG91ciBzZXZlciwgYW5kIGp1c3QgY2FsbCBvdXIgc2V2ZXIuXHJcbiAgICAgICAgICAgIC8vIEZvciB0ZXN0bmV0cyAmIG1haW5uZXQgLT4gdXNlIG1vcmFsaXMgc2VydmVyIGhvb2tzXHJcbiAgICAgICAgICAgIC8vIEhhdmUgdGhlIHdvcmxkIGFkb3B0IElQRlNcclxuICAgICAgICAgICAgLy8gQnVpbGQgb3VyIG93biBJUEZTIGdhdGV3YXlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZ2V0IHRoZSB0b2tlblVSSVxyXG4gICAgICAgIC8vIHVzaW5nIHRoZSBpbWFnZSB0YWcgZnJvbSB0aGUgdG9rZW5VUkksIGdldCB0aGUgaW1hZ2VcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc1dlYjNFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZVVJKClcclxuICAgICAgICB9XHJcbiAgICB9LCBbaXNXZWIzRW5hYmxlZF0pXHJcblxyXG4gICAgY29uc3QgaXNPd25lZEJ5VXNlciA9IHNlbGxlciA9PT0gYWNjb3VudCB8fCBzZWxsZXIgPT09IHVuZGVmaW5lZFxyXG4gICAgY29uc3QgZm9ybWF0dGVkU2VsbGVyQWRkcmVzcyA9IGlzT3duZWRCeVVzZXIgPyBcInlvdVwiIDogdHJ1bmNhdGVTdHIoc2VsbGVyIHx8IFwiXCIsIDE1KVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNhcmRDbGljayA9ICgpID0+IHtcclxuICAgICAgICBpc093bmVkQnlVc2VyXHJcbiAgICAgICAgICAgID8gc2V0U2hvd01vZGFsKHRydWUpXHJcbiAgICAgICAgICAgIDogYnV5SXRlbSh7XHJcbiAgICAgICAgICAgICAgICAgIG9uRXJyb3I6IChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpLFxyXG4gICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IGhhbmRsZUJ1eUl0ZW1TdWNjZXNzKCksXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVCdXlJdGVtU3VjY2VzcyA9ICgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkl0ZW0gYm91Z2h0IVwiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJJdGVtIEJvdWdodFwiLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogXCJ0b3BSXCIsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7aW1hZ2VVUkkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFVwZGF0ZUxpc3RpbmdNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWaXNpYmxlPXtzaG93TW9kYWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbklkPXt0b2tlbklkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFya2V0cGxhY2VBZGRyZXNzPXttYXJrZXRwbGFjZUFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZnRBZGRyZXNzPXtuZnRBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGlkZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Rva2VuTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0b2tlbkRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2FyZENsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1lbmQgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4je3Rva2VuSWR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRhbGljIHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE93bmVkIGJ5IHtmb3JtYXR0ZWRTZWxsZXJBZGRyZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkZXI9eygpID0+IGltYWdlVVJJfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZVVSSX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXRoZXJzLnV0aWxzLmZvcm1hdFVuaXRzKHByaWNlLCBcImV0aGVyXCIpfSBFVEhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVdlYjNDb250cmFjdCIsInVzZU1vcmFsaXMiLCJuZnRNYXJrZXRwbGFjZUFiaSIsIm5mdEFiaSIsIkltYWdlIiwiQ2FyZCIsInVzZU5vdGlmaWNhdGlvbiIsImV0aGVycyIsIlVwZGF0ZUxpc3RpbmdNb2RhbCIsInRydW5jYXRlU3RyIiwiZnVsbFN0ciIsInN0ckxlbiIsImxlbmd0aCIsInNlcGFyYXRvciIsInNlcGVyYXRvckxlbmd0aCIsImNoYXJzVG9TaG93IiwiZnJvbnRDaGFycyIsIk1hdGgiLCJjZWlsIiwiYmFja0NoYXJzIiwiZmxvb3IiLCJzdWJzdHJpbmciLCJORlRCb3giLCJwcmljZSIsIm5mdEFkZHJlc3MiLCJ0b2tlbklkIiwibWFya2V0cGxhY2VBZGRyZXNzIiwic2VsbGVyIiwiaXNXZWIzRW5hYmxlZCIsImFjY291bnQiLCJpbWFnZVVSSSIsInNldEltYWdlVVJJIiwidG9rZW5OYW1lIiwic2V0VG9rZW5OYW1lIiwidG9rZW5EZXNjcmlwdGlvbiIsInNldFRva2VuRGVzY3JpcHRpb24iLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJoaWRlTW9kYWwiLCJkaXNwYXRjaCIsInJ1bkNvbnRyYWN0RnVuY3Rpb24iLCJnZXRUb2tlblVSSSIsImFiaSIsImNvbnRyYWN0QWRkcmVzcyIsImZ1bmN0aW9uTmFtZSIsInBhcmFtcyIsImJ1eUl0ZW0iLCJtc2dWYWx1ZSIsInVwZGF0ZVVJIiwidG9rZW5VUkkiLCJjb25zb2xlIiwibG9nIiwicmVxdWVzdFVSTCIsInJlcGxhY2UiLCJ0b2tlblVSSVJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiaW1hZ2UiLCJpbWFnZVVSSVVSTCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImlzT3duZWRCeVVzZXIiLCJ1bmRlZmluZWQiLCJmb3JtYXR0ZWRTZWxsZXJBZGRyZXNzIiwiaGFuZGxlQ2FyZENsaWNrIiwib25FcnJvciIsImVycm9yIiwib25TdWNjZXNzIiwiaGFuZGxlQnV5SXRlbVN1Y2Nlc3MiLCJ0eXBlIiwibWVzc2FnZSIsInRpdGxlIiwicG9zaXRpb24iLCJkaXYiLCJpc1Zpc2libGUiLCJvbkNsb3NlIiwib25DbGljayIsImNsYXNzTmFtZSIsImxvYWRlciIsInNyYyIsImhlaWdodCIsIndpZHRoIiwidXRpbHMiLCJmb3JtYXRVbml0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NFTBox.js\n"));

/***/ })

});