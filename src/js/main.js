/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/akkordeon copy.js":
/*!**********************************!*\
  !*** ./src/js/akkordeon copy.js ***!
  \**********************************/
/***/ (function() {

eval("const boxes = Array.from(document.querySelectorAll(\".box\"));\r\n\r\nboxes.forEach(box => {\r\n  box.addEventListener(\"click\", boxHandler);\r\n  });\r\n\r\n  function boxHandler(ebox) {\r\n    ebox.preventDefault();\r\n    let currentBox = ebox.target.closest(\".box\");\r\n    let currentContent = ebox.target.nextElementSibling;\r\n    currentBox.classList.toggle(\"active\");\r\n    \r\n    if (currentBox.classList.contains(\"active\")) {\r\n      currentContent.style.maxHeight = currentContent.scrollHeight + \"px\";\r\n    } else {\r\n      currentContent.style.maxHeight = 0;\r\n    }\r\n  }\n\n//# sourceURL=webpack://mybuild/./src/js/akkordeon_copy.js?");

/***/ }),

/***/ "./src/js/akkordeon.js":
/*!*****************************!*\
  !*** ./src/js/akkordeon.js ***!
  \*****************************/
/***/ (function() {

eval("const boxes = Array.from(document.querySelectorAll(\".box\"));\r\n\r\nboxes.forEach(box => {\r\n  box.addEventListener(\"click\", boxHandler);\r\n  });\r\n\r\n  function boxHandler(ebox) {\r\n    ebox.preventDefault();\r\n    let currentBox = ebox.target.closest(\".box\");\r\n    let currentContent = ebox.target.nextElementSibling;\r\n    currentBox.classList.toggle(\"active\");\r\n    \r\n    if (currentBox.classList.contains(\"active\")) {\r\n      currentContent.style.maxHeight = currentContent.scrollHeight + \"px\";\r\n    } else {\r\n      currentContent.style.maxHeight = 0;\r\n    }\r\n  }\n\n//# sourceURL=webpack://mybuild/./src/js/akkordeon.js?");

/***/ }),

/***/ "./src/js/main copy.js":
/*!*****************************!*\
  !*** ./src/js/main copy.js ***!
  \*****************************/
/***/ (function() {

eval("/*\n * ATTENTION: The \"eval\" devtool has been used (maybe by default in mode: \"development\").\n * This devtool is neither made for production nor for readable output files.\n * It uses \"eval()\" calls to create a separate source file in the browser devtools.\n * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)\n * or disable the default devtool with \"devtool: false\".\n * If you are looking for production-ready output files, see mode: \"production\" (https://webpack.js.org/configuration/mode/).\n */\n/******/ (function() { // webpackBootstrap\n/******/ \tvar __webpack_modules__ = ({\n\n/***/ \"./src/js/akkordeon.js\":\n/*!*****************************!*\\\n  !*** ./src/js/akkordeon.js ***!\n  \\*****************************/\n/***/ (function() {\n\neval(\"const boxes = Array.from(document.querySelectorAll(\\\".box\\\"));\\r\\n\\r\\nboxes.forEach(box => {\\r\\n  box.addEventListener(\\\"click\\\", boxHandler);\\r\\n  });\\r\\n\\r\\n  function boxHandler(ebox) {\\r\\n    ebox.preventDefault();\\r\\n    let currentBox = ebox.target.closest(\\\".box\\\");\\r\\n    let currentContent = ebox.target.nextElementSibling;\\r\\n    currentBox.classList.toggle(\\\"active\\\");\\r\\n    \\r\\n    if (currentBox.classList.contains(\\\"active\\\")) {\\r\\n      currentContent.style.maxHeight = currentContent.scrollHeight + \\\"px\\\";\\r\\n    } else {\\r\\n      currentContent.style.maxHeight = 0;\\r\\n    }\\r\\n  }\\n\\n//# sourceURL=webpack://mybuild/./src/js/akkordeon.js?\");\n\n/***/ }),\n\n/***/ \"./src/js/main.js\":\n/*!************************!*\\\n  !*** ./src/js/main.js ***!\n  \\************************/\n/***/ (function() {\n\neval(\"\\n\\n//# sourceURL=webpack://mybuild/./src/js/main.js?\");\n\n/***/ }),\n\n/***/ \"./src/js/tabs-jur.js\":\n/*!****************************!*\\\n  !*** ./src/js/tabs-jur.js ***!\n  \\****************************/\n/***/ (function() {\n\neval(\"const tabBtnsbusiness = Array.from(document.querySelectorAll(\\\".tab__btn-business\\\"));\\r\\nconst tabIndicatorbusiness = document.querySelector(\\\"#tab_indicator-business\\\");\\r\\nconst tabSlidebusiness = Array.from(document.querySelectorAll(\\\".tab__slide-business\\\"));\\r\\n\\r\\nconst numTabbusiness = tabBtnsbusiness.length;\\r\\n\\r\\n\\r\\ntabBtnsbusiness[0].classList.add(\\\"active\\\");\\r\\ntabSlidebusiness[0].classList.add(\\\"active\\\");\\r\\n\\r\\nlet activeBtnbusiness = tabBtnsbusiness[0];\\r\\nlet activeSlidebusiness = tabSlidebusiness[0];\\r\\n\\r\\ntabBtnsbusiness.forEach((el1) => {\\r\\n  el1.addEventListener(\\\"click\\\", onTabBtnCllickbusiness);\\r\\n});\\r\\n\\r\\nfunction onTabBtnCllickbusiness(element) {\\r\\n  element.preventDefault();\\r\\n  const btnbusiness = element.target.closest(\\\".tab__btn-business\\\");\\r\\n  changeBtnbusiness(btnbusiness);\\r\\n\\r\\n}\\r\\n\\r\\nfunction changeBtnbusiness(btnbusiness) {\\r\\n  if (btnbusiness.classList.contains(\\\"active\\\")) {\\r\\n    return;\\r\\n  }\\r\\n  activeBtnbusiness.classList.remove(\\\"active\\\");\\r\\n  btnbusiness.classList.add(\\\"active\\\");\\r\\n  activeBtnbusiness = btnbusiness;\\r\\n  changeIndicatorbusiness(btnbusiness);\\r\\n}\\r\\n\\r\\nfunction changeIndicatorbusiness(btnbusiness) {\\r\\n  const indexBtnbusiness = tabBtnsbusiness.indexOf(btnbusiness);\\r\\n  tabIndicatorbusiness.style.left = `calc(${indexBtnbusiness}*100%/3)`;\\r\\n  changeSlidebusiness(indexBtnbusiness);\\r\\n}\\r\\n\\r\\nfunction changeSlidebusiness(index) {\\r\\n  activeSlidebusiness.classList.remove(\\\"active\\\");\\r\\n  tabSlidebusiness[index].classList.add(\\\"active\\\");\\r\\n  activeSlidebusiness = tabSlidebusiness[index];\\r\\n}\\n\\n//# sourceURL=webpack://mybuild/./src/js/tabs-jur.js?\");\n\n/***/ }),\n\n/***/ \"./src/js/tabs.js\":\n/*!************************!*\\\n  !*** ./src/js/tabs.js ***!\n  \\************************/\n/***/ (function() {\n\neval(\"const tabBtns = Array.from(document.querySelectorAll(\\\".tab__btn\\\"));\\r\\nconst tabIndicator = document.querySelector(\\\"#tab_indicator\\\")\\r\\nconst tabSlide = Array.from(document.querySelectorAll(\\\".tab__slide\\\"))\\r\\nconst root = document.querySelector(\\\":root\\\");\\r\\nconst numTab = tabBtns.length;\\r\\n\\r\\nroot.style.setProperty(\\\"--num-tab\\\", numTab);\\r\\ntabBtns[0].classList.add(\\\"active\\\");\\r\\ntabSlide[0].classList.add(\\\"active\\\");\\r\\n\\r\\nlet activeBtn = tabBtns[0];\\r\\nlet activeSlide = tabSlide[0];\\r\\n\\r\\ntabBtns.forEach((el) => {\\r\\n  el.addEventListener(\\\"click\\\", onTabBtnCllick);\\r\\n});\\r\\n\\r\\nfunction onTabBtnCllick(e) {\\r\\n  e.preventDefault();\\r\\n  const btn = e.target.closest(\\\".tab__btn\\\");\\r\\n  changeBtn(btn);\\r\\n\\r\\n}\\r\\n\\r\\nfunction changeBtn(btn) {\\r\\n  if (btn.classList.contains(\\\"active\\\")) {\\r\\n    return;\\r\\n  }\\r\\n  activeBtn.classList.remove(\\\"active\\\");\\r\\n  btn.classList.add(\\\"active\\\");\\r\\n  activeBtn = btn;\\r\\n  changeIndicator(btn);\\r\\n}\\r\\n\\r\\nfunction changeIndicator(btn) {\\r\\n  const indexBtn = tabBtns.indexOf(btn);\\r\\n  tabIndicator.style.left = `calc(${indexBtn}*100%/${numTab})`;\\r\\n  changeSlide(indexBtn);\\r\\n}\\r\\n\\r\\nfunction changeSlide(index) {\\r\\n  activeSlide.classList.remove(\\\"active\\\");\\r\\n  tabSlide[index].classList.add(\\\"active\\\");\\r\\n  activeSlide = tabSlide[index];\\r\\n}\\n\\n//# sourceURL=webpack://mybuild/./src/js/tabs.js?\");\n\n/***/ })\n\n/******/ \t});\n/************************************************************************/\n/******/ \t\n/******/ \t// startup\n/******/ \t// Load entry module and return exports\n/******/ \t// This entry module can't be inlined because the eval devtool is used.\n/******/ \t__webpack_modules__[\"./src/js/akkordeon.js\"]();\n/******/ \t__webpack_modules__[\"./src/js/main.js\"]();\n/******/ \t__webpack_modules__[\"./src/js/tabs-jur.js\"]();\n/******/ \tvar __webpack_exports__ = {};\n/******/ \t__webpack_modules__[\"./src/js/tabs.js\"]();\n/******/ \t\n/******/ })()\n;\n\n//# sourceURL=webpack://mybuild/./src/js/main_copy.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("\n\n//# sourceURL=webpack://mybuild/./src/js/main.js?");

/***/ }),

/***/ "./src/js/tabs copy.js":
/*!*****************************!*\
  !*** ./src/js/tabs copy.js ***!
  \*****************************/
/***/ (function() {

eval("const tabBtns = Array.from(document.querySelectorAll(\".tab__btn\"));\r\nconst tabIndicator = document.querySelector(\"#tab_indicator\")\r\nconst tabSlide = Array.from(document.querySelectorAll(\".tab__slide\"))\r\nconst root = document.querySelector(\":root\");\r\nconst numTab = tabBtns.length;\r\n\r\nroot.style.setProperty(\"--num-tab\", numTab);\r\ntabBtns[0].classList.add(\"active\");\r\ntabSlide[0].classList.add(\"active\");\r\n\r\nlet activeBtn = tabBtns[0];\r\nlet activeSlide = tabSlide[0];\r\n\r\ntabBtns.forEach((el) => {\r\n  el.addEventListener(\"click\", onTabBtnCllick);\r\n});\r\n\r\nfunction onTabBtnCllick(e) {\r\n  e.preventDefault();\r\n  const btn = e.target.closest(\".tab__btn\");\r\n  changeBtn(btn);\r\n\r\n}\r\n\r\nfunction changeBtn(btn) {\r\n  if (btn.classList.contains(\"active\")) {\r\n    return;\r\n  }\r\n  activeBtn.classList.remove(\"active\");\r\n  btn.classList.add(\"active\");\r\n  activeBtn = btn;\r\n  changeIndicator(btn);\r\n}\r\n\r\nfunction changeIndicator(btn) {\r\n  const indexBtn = tabBtns.indexOf(btn);\r\n  tabIndicator.style.left = `calc(${indexBtn}*100%/${numTab})`;\r\n  changeSlide(indexBtn);\r\n}\r\n\r\nfunction changeSlide(index) {\r\n  activeSlide.classList.remove(\"active\");\r\n  tabSlide[index].classList.add(\"active\");\r\n  activeSlide = tabSlide[index];\r\n}\n\n//# sourceURL=webpack://mybuild/./src/js/tabs_copy.js?");

/***/ }),

/***/ "./src/js/tabs-jur copy.js":
/*!*********************************!*\
  !*** ./src/js/tabs-jur copy.js ***!
  \*********************************/
/***/ (function() {

eval("const tabBtnsbusiness = Array.from(document.querySelectorAll(\".tab__btn-business\"));\r\nconst tabIndicatorbusiness = document.querySelector(\"#tab_indicator-business\");\r\nconst tabSlidebusiness = Array.from(document.querySelectorAll(\".tab__slide-business\"));\r\n\r\nconst numTabbusiness = tabBtnsbusiness.length;\r\n\r\n\r\ntabBtnsbusiness[0].classList.add(\"active\");\r\ntabSlidebusiness[0].classList.add(\"active\");\r\n\r\nlet activeBtnbusiness = tabBtnsbusiness[0];\r\nlet activeSlidebusiness = tabSlidebusiness[0];\r\n\r\ntabBtnsbusiness.forEach((el1) => {\r\n  el1.addEventListener(\"click\", onTabBtnCllickbusiness);\r\n});\r\n\r\nfunction onTabBtnCllickbusiness(element) {\r\n  element.preventDefault();\r\n  const btnbusiness = element.target.closest(\".tab__btn-business\");\r\n  changeBtnbusiness(btnbusiness);\r\n\r\n}\r\n\r\nfunction changeBtnbusiness(btnbusiness) {\r\n  if (btnbusiness.classList.contains(\"active\")) {\r\n    return;\r\n  }\r\n  activeBtnbusiness.classList.remove(\"active\");\r\n  btnbusiness.classList.add(\"active\");\r\n  activeBtnbusiness = btnbusiness;\r\n  changeIndicatorbusiness(btnbusiness);\r\n}\r\n\r\nfunction changeIndicatorbusiness(btnbusiness) {\r\n  const indexBtnbusiness = tabBtnsbusiness.indexOf(btnbusiness);\r\n  tabIndicatorbusiness.style.left = `calc(${indexBtnbusiness}*100%/3)`;\r\n  changeSlidebusiness(indexBtnbusiness);\r\n}\r\n\r\nfunction changeSlidebusiness(index) {\r\n  activeSlidebusiness.classList.remove(\"active\");\r\n  tabSlidebusiness[index].classList.add(\"active\");\r\n  activeSlidebusiness = tabSlidebusiness[index];\r\n}\n\n//# sourceURL=webpack://mybuild/./src/js/tabs-jur_copy.js?");

/***/ }),

/***/ "./src/js/tabs-jur.js":
/*!****************************!*\
  !*** ./src/js/tabs-jur.js ***!
  \****************************/
/***/ (function() {

eval("const tabBtnsbusiness = Array.from(document.querySelectorAll(\".tab__btn-business\"));\r\nconst tabIndicatorbusiness = document.querySelector(\"#tab_indicator-business\");\r\nconst tabSlidebusiness = Array.from(document.querySelectorAll(\".tab__slide-business\"));\r\n\r\nconst numTabbusiness = tabBtnsbusiness.length;\r\n\r\n\r\ntabBtnsbusiness[0].classList.add(\"active\");\r\ntabSlidebusiness[0].classList.add(\"active\");\r\n\r\nlet activeBtnbusiness = tabBtnsbusiness[0];\r\nlet activeSlidebusiness = tabSlidebusiness[0];\r\n\r\ntabBtnsbusiness.forEach((el1) => {\r\n  el1.addEventListener(\"click\", onTabBtnCllickbusiness);\r\n});\r\n\r\nfunction onTabBtnCllickbusiness(element) {\r\n  element.preventDefault();\r\n  const btnbusiness = element.target.closest(\".tab__btn-business\");\r\n  changeBtnbusiness(btnbusiness);\r\n\r\n}\r\n\r\nfunction changeBtnbusiness(btnbusiness) {\r\n  if (btnbusiness.classList.contains(\"active\")) {\r\n    return;\r\n  }\r\n  activeBtnbusiness.classList.remove(\"active\");\r\n  btnbusiness.classList.add(\"active\");\r\n  activeBtnbusiness = btnbusiness;\r\n  changeIndicatorbusiness(btnbusiness);\r\n}\r\n\r\nfunction changeIndicatorbusiness(btnbusiness) {\r\n  const indexBtnbusiness = tabBtnsbusiness.indexOf(btnbusiness);\r\n  tabIndicatorbusiness.style.left = `calc(${indexBtnbusiness}*100%/3)`;\r\n  changeSlidebusiness(indexBtnbusiness);\r\n}\r\n\r\nfunction changeSlidebusiness(index) {\r\n  activeSlidebusiness.classList.remove(\"active\");\r\n  tabSlidebusiness[index].classList.add(\"active\");\r\n  activeSlidebusiness = tabSlidebusiness[index];\r\n}\n\n//# sourceURL=webpack://mybuild/./src/js/tabs-jur.js?");

/***/ }),

/***/ "./src/js/tabs.js":
/*!************************!*\
  !*** ./src/js/tabs.js ***!
  \************************/
/***/ (function() {

eval("const tabBtns = Array.from(document.querySelectorAll(\".tab__btn\"));\r\nconst tabIndicator = document.querySelector(\"#tab_indicator\")\r\nconst tabSlide = Array.from(document.querySelectorAll(\".tab__slide\"))\r\nconst root = document.querySelector(\":root\");\r\nconst numTab = tabBtns.length;\r\n\r\nroot.style.setProperty(\"--num-tab\", numTab);\r\ntabBtns[0].classList.add(\"active\");\r\ntabSlide[0].classList.add(\"active\");\r\n\r\nlet activeBtn = tabBtns[0];\r\nlet activeSlide = tabSlide[0];\r\n\r\ntabBtns.forEach((el) => {\r\n  el.addEventListener(\"click\", onTabBtnCllick);\r\n});\r\n\r\nfunction onTabBtnCllick(e) {\r\n  e.preventDefault();\r\n  const btn = e.target.closest(\".tab__btn\");\r\n  changeBtn(btn);\r\n\r\n}\r\n\r\nfunction changeBtn(btn) {\r\n  if (btn.classList.contains(\"active\")) {\r\n    return;\r\n  }\r\n  activeBtn.classList.remove(\"active\");\r\n  btn.classList.add(\"active\");\r\n  activeBtn = btn;\r\n  changeIndicator(btn);\r\n}\r\n\r\nfunction changeIndicator(btn) {\r\n  const indexBtn = tabBtns.indexOf(btn);\r\n  tabIndicator.style.left = `calc(${indexBtn}*100%/${numTab})`;\r\n  changeSlide(indexBtn);\r\n}\r\n\r\nfunction changeSlide(index) {\r\n  activeSlide.classList.remove(\"active\");\r\n  tabSlide[index].classList.add(\"active\");\r\n  activeSlide = tabSlide[index];\r\n}\n\n//# sourceURL=webpack://mybuild/./src/js/tabs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/js/akkordeon copy.js"]();
/******/ 	__webpack_modules__["./src/js/akkordeon.js"]();
/******/ 	__webpack_modules__["./src/js/main copy.js"]();
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	__webpack_modules__["./src/js/tabs copy.js"]();
/******/ 	__webpack_modules__["./src/js/tabs-jur copy.js"]();
/******/ 	__webpack_modules__["./src/js/tabs-jur.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/tabs.js"]();
/******/ 	
/******/ })()
;