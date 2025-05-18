/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Components/Common/InfoHotspotInput.js":
/*!***************************************************!*\
  !*** ./src/Components/Common/InfoHotspotInput.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const InfoHotspotInput = ({
  popupData,
  setPopupData
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "infoWrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, " Setup Info Hotspot "), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "infoChildWrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "label",
    htmlFor: "hotspotText"
  }, " Label : "), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    id: "hotspotText",
    type: "text",
    placeholder: "Input type text...",
    value: popupData.text,
    onChange: e => setPopupData({
      ...popupData,
      text: e.target.value
    }),
    className: "infoInput"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, " Enter a label "))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfoHotspotInput);

/***/ }),

/***/ "./src/Components/Common/PopupWrapper.js":
/*!***********************************************!*\
  !*** ./src/Components/Common/PopupWrapper.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TypeSelectionButtons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TypeSelectionButtons */ "./src/Components/Common/TypeSelectionButtons.js");
/* harmony import */ var _InfoHotspotInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InfoHotspotInput */ "./src/Components/Common/InfoHotspotInput.js");
/* harmony import */ var _SceneHotspotInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SceneHotspotInput */ "./src/Components/Common/SceneHotspotInput.js");
/* harmony import */ var _SaveCancelButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SaveCancelButtons */ "./src/Components/Common/SaveCancelButtons.js");





const PopupWrapper = ({
  scenes,
  setAttributes,
  currentScene,
  popupData,
  setPopupData,
  hotspotData,
  isDropdownOpen,
  setIsDropdownOpen,
  setTempHotspot,
  handleSaveHotspot
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "popupWrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "selectSceneOrInfo"
  }, " What do you want to add in this point? "), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_TypeSelectionButtons__WEBPACK_IMPORTED_MODULE_1__["default"], {
    popupData,
    setPopupData
  }), popupData.type === 'info' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_InfoHotspotInput__WEBPACK_IMPORTED_MODULE_2__["default"], {
    popupData,
    setPopupData
  }), popupData.type === 'scene' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SceneHotspotInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    scenes,
    setAttributes,
    currentScene,
    popupData,
    setPopupData,
    hotspotData,
    isDropdownOpen,
    setIsDropdownOpen,
    setTempHotspot
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SaveCancelButtons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onSave: handleSaveHotspot,
    onCancel: () => {
      setPopupData(null);
      setTempHotspot(null);
    },
    popupData: popupData,
    hotspotData: hotspotData
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupWrapper);

/***/ }),

/***/ "./src/Components/Common/SaveCancelButtons.js":
/*!****************************************************!*\
  !*** ./src/Components/Common/SaveCancelButtons.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SaveCancelButtons = ({
  onSave,
  onCancel,
  popupData,
  hotspotData = []
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "saveAndCancelWrap"
  }, popupData.type && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: onSave,
    className: "saveBtn",
    disabled: popupData.type === 'scene' && !popupData.targetHotspot,
    style: {
      display: popupData.type === 'scene' && hotspotData.length === 0 ? 'none' : 'block'
    }
  }, popupData.type === 'scene' ? 'Save Scene' : 'Save Info'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "closeBtn",
    onClick: onCancel
  }, "Cancel"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SaveCancelButtons);

/***/ }),

/***/ "./src/Components/Common/SceneHotspotInput.js":
/*!****************************************************!*\
  !*** ./src/Components/Common/SceneHotspotInput.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SceneSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SceneSelect */ "./src/Components/Common/SceneSelect.js");
/* harmony import */ var _TargetSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TargetSelect */ "./src/Components/Common/TargetSelect.js");




const SceneHotspotInput = ({
  scenes,
  setAttributes,
  currentScene,
  popupData,
  setPopupData,
  hotspotData,
  isDropdownOpen,
  setIsDropdownOpen
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (currentScene.tour_id !== scenes[0].tour_id) {
      setPopupData({
        ...popupData,
        sceneId: scenes[0].tour_id
      });
    }
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, hotspotData.length > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sceneWrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_SceneSelect__WEBPACK_IMPORTED_MODULE_1__["default"], {
    scenes,
    popupData,
    setPopupData,
    setAttributes,
    hotspotData
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_TargetSelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
    scenes,
    popupData,
    setPopupData,
    hotspotData,
    isDropdownOpen,
    setIsDropdownOpen
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "input-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "hotspotText",
    className: "input-label"
  }, "Label : "), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    id: "hotspotText",
    type: "text",
    placeholder: "Input type text...",
    value: popupData.text,
    onChange: e => setPopupData({
      ...popupData,
      text: e.target.value
    }),
    className: "input-field"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "input-description"
  }, " Enter a label ")))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "hotspotAddFirst"
  }, " Please add a hotspot first to continue "));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SceneHotspotInput);

/***/ }),

/***/ "./src/Components/Common/SceneSelect.js":
/*!**********************************************!*\
  !*** ./src/Components/Common/SceneSelect.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const SceneSelect = ({
  scenes,
  popupData,
  setPopupData,
  hotspotData,
  setAttributes
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sceneWrapChild"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "hotspotText",
    className: "label"
  }, "Scene : "), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    className: "sceneSlBtn",
    value: popupData.sceneId || '',
    onChange: val => {
      setPopupData({
        ...popupData,
        sceneId: val,
        type: 'scene'
      });
      const updatedHotspotData = hotspotData.map(spot => {
        if (spot === popupData.targetHotspot) {
          return {
            ...spot,
            sceneId: val,
            type: 'scene'
          };
        }
        return spot;
      });
      setAttributes({
        hotspotData: updatedHotspotData
      });
    },
    options: scenes.map(scene => ({
      label: scene.tour_id,
      value: scene.tour_id
    }))
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "dropdown-label"
  }, "Choose the Scene")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SceneSelect);

/***/ }),

/***/ "./src/Components/Common/Style.js":
/*!****************************************!*\
  !*** ./src/Components/Common/Style.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Style = ({
  attributes,
  id,
  device = "desktop"
}) => {
  const {
    alignSl,
    width,
    height
  } = attributes.layout;
  const mainSl = `#${id}`;
  const blockSl = `${mainSl} .bBlocksTourViewer`;
  const tourContainerSl = `${blockSl} .tourContainer`;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    dangerouslySetInnerHTML: {
      __html: `
			${blockSl} { align-items: ${alignSl[device]}; }
			${tourContainerSl} { width: ${width[device]}; height: ${height[device]}; }
	
			@media only screen and (min-width:641px) and (max-width: 1024px) {
			  ${blockSl} { align-items: ${alignSl.tablet}; }
			  ${tourContainerSl} { width: ${width.tablet}; height: ${height.tablet}; }
			}
	
			@media only screen and (max-width:640px) {
			  ${blockSl} { align-items: ${alignSl.mobile}; }
			  ${tourContainerSl} { width: ${width.mobile}; height: ${height.mobile}; }
			}
		  `
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ }),

/***/ "./src/Components/Common/TargetSelect.js":
/*!***********************************************!*\
  !*** ./src/Components/Common/TargetSelect.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const TargetSelect = ({
  scenes,
  popupData,
  setPopupData,
  hotspotData,
  isDropdownOpen,
  setIsDropdownOpen
}) => {
  const hotspot = scenes.find(scene => scene.tour_id === popupData.sceneId) || scenes[0];
  const targetHotspots = hotspot?.hotSpots || [];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sceneWrapChild"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "hotspotText",
    className: "label"
  }, "Target : "), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dropdown-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: () => setIsDropdownOpen(!isDropdownOpen),
    className: "sceneSlBtn"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-container"
  }, popupData.targetHotspot ? popupData.targetHotspot.text || `Hotspot ${hotspotData.indexOf(popupData.targetHotspot) + 1}` : 'Select a target'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "dropdown-arrow"
  }, "\u25BC")), isDropdownOpen && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dropdown-list"
  }, targetHotspots.map((spot, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    key: index,
    onClick: () => {
      setPopupData({
        ...popupData,
        text: spot.text || `Hotspot ${index + 1}`,
        targetHotspot: spot
      });
      setIsDropdownOpen(false);
    },
    className: `dropdown-item ${spot === popupData.targetHotspot ? 'active' : ''}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `hotspot-icon ${spot.type === 'scene' ? 'scene' : 'info'}`
  }, spot.type === 'scene' ? '↑' : 'i'), spot.text || `Hotspot ${index + 1}`)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "dropdown-label"
  }, "Choose the target")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TargetSelect);

/***/ }),

/***/ "./src/Components/Common/TourViewer.js":
/*!*********************************************!*\
  !*** ./src/Components/Common/TourViewer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/functions */ "./src/utils/functions.js");
/* harmony import */ var _PopupWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PopupWrapper */ "./src/Components/Common/PopupWrapper.js");




const TourViewer = ({
  attributes,
  setAttributes,
  isBackend = false,
  currentScene,
  setCurrentScene
}) => {
  const {
    scenes
  } = attributes;
  const {
    hotSpots: hotspotData = []
  } = currentScene || {};
  const panoRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [tempHotspot, setTempHotspot] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [popupData, setPopupData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [isDraggingHotspot, setIsDraggingHotspot] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const viewerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const clickStartCoords = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const isDraggingRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  const [isDropdownOpen, setIsDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [loaded, setLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (currentScene && viewerRef.current) {
      viewerRef.current.loadScene(currentScene.tour_id);
    }
    if (currentScene) {
      setLoaded(true);
    }
  }, [currentScene]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!window.pannellum || !panoRef.current) return;
    const prevViewer = panoRef.current.viewerInstance;
    let currentPitch = 0;
    let currentYaw = 0;
    let currentHfov = 100;
    if (prevViewer) {
      currentPitch = prevViewer.getPitch();
      currentYaw = prevViewer.getYaw();
      currentHfov = prevViewer.getHfov();
      prevViewer.destroy();
    }
    const modifiedScenes = {};
    scenes.map(scene => {
      modifiedScenes[scene.tour_id] = {
        ...scene,
        hotSpots: scene.hotSpots.map((spot, index) => (0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.createModifiedHotspots)(scenes, currentScene, spot, isBackend, index, setPopupData, setAttributes))
      };
    });
    const viewer = (0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.initializePannellumViewer)(panoRef, modifiedScenes);
    window.viewer = viewer;
    viewer.on('scenechange', sceneId => {
      setCurrentScene(scenes.find(scene => scene.tour_id === sceneId));
    });
    viewerRef.current = viewer;
    if (currentScene && viewerRef.current) {
      viewerRef.current.loadScene(currentScene.tour_id);
    }
    viewer.lookAt(currentPitch, currentYaw, currentHfov);
    panoRef.current.viewerInstance = viewer;
    if (tempHotspot) {
      (0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.addTempHotspot)(viewerRef.current, tempHotspot, isDraggingRef, setIsDraggingHotspot, setPopupData, setTempHotspot);
    }
    viewer.on("mousedown", event => {
      (0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.handleMouseDownEvent)(event, popupData, isDraggingHotspot, clickStartCoords);
    });
    viewer.on("mouseup", event => {
      (0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.handleMouseUpEvent)(event, viewer, clickStartCoords, popupData, isDraggingHotspot, setTempHotspot);
    });
    return () => {
      if (viewer) viewer.destroy();
    };
  }, [scenes, loaded]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isBackend && tempHotspot && viewerRef.current) {
      (0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.addTempHotspot)(viewerRef.current, tempHotspot, isDraggingRef, setIsDraggingHotspot, setPopupData, setTempHotspot);
    }
  }, [tempHotspot]);
  const handleSaveHotspot = () => {
    (0,_utils_functions__WEBPACK_IMPORTED_MODULE_1__.saveHotspot)(popupData, scenes, currentScene, setAttributes, setPopupData, setTempHotspot);
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tourViewerWrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tourViewer",
    ref: panoRef
  }), popupData && isBackend && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_PopupWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    scenes,
    setAttributes,
    currentScene,
    hotspotData,
    popupData,
    setPopupData,
    isDropdownOpen,
    setIsDropdownOpen,
    setTempHotspot,
    handleSaveHotspot
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TourViewer);

/***/ }),

/***/ "./src/Components/Common/TypeSelectionButtons.js":
/*!*******************************************************!*\
  !*** ./src/Components/Common/TypeSelectionButtons.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const TypeSelectionButtons = ({
  popupData,
  setPopupData
}) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "infoAndSceneBtnWrap"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: () => setPopupData({
      ...popupData,
      type: 'info'
    }),
    style: {
      background: popupData.type === 'info' ? '#1e90ff' : '#2a4e6f'
    },
    className: "infoBtn"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, " i "), "Info Hotspot"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: () => setPopupData({
      ...popupData,
      type: 'scene'
    }),
    className: "sceneBtn",
    style: {
      background: popupData.type === 'scene' ? '#1e90ff' : '#2a4e6f'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, " \u2191 "), " Scene"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypeSelectionButtons);

/***/ }),

/***/ "./src/utils/functions.js":
/*!********************************!*\
  !*** ./src/utils/functions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTempHotspot: () => (/* binding */ addTempHotspot),
/* harmony export */   createModifiedHotspots: () => (/* binding */ createModifiedHotspots),
/* harmony export */   editAndDeleteTooltipFunc: () => (/* binding */ editAndDeleteTooltipFunc),
/* harmony export */   handleMouseDownEvent: () => (/* binding */ handleMouseDownEvent),
/* harmony export */   handleMouseUpEvent: () => (/* binding */ handleMouseUpEvent),
/* harmony export */   initializePannellumViewer: () => (/* binding */ initializePannellumViewer),
/* harmony export */   saveHotspot: () => (/* binding */ saveHotspot),
/* harmony export */   updateData: () => (/* binding */ updateData)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.mjs");

const updateData = (attr, value, ...props) => {
  if (props.length === 0) {
    return value;
  }
  const [currentProp, ...remainingProps] = props;
  if (remainingProps.length === 0) {
    return (0,immer__WEBPACK_IMPORTED_MODULE_0__.produce)(attr, draft => {
      draft[currentProp] = value;
    });
  }
  return (0,immer__WEBPACK_IMPORTED_MODULE_0__.produce)(attr, draft => {
    if (!Object.prototype.hasOwnProperty.call(draft, currentProp)) {
      draft[currentProp] = {};
    }
    draft[currentProp] = updateData(draft[currentProp], value, ...remainingProps);
  });
};
const createModifiedHotspots = (scenes, currentScene, spot, isBackend, index, setPopupData, setAttributes) => ({
  ...spot,
  createTooltipFunc: hotSpotDiv => {
    const tooltip = document.createElement('div');
    tooltip.className = 'hotspot-title-tooltip';
    tooltip.innerHTML = spot.text || (spot.type === 'scene' ? 'Scene' : 'Info');
    hotSpotDiv.appendChild(tooltip);
    hotSpotDiv.addEventListener('mouseenter', () => {
      tooltip.style.display = 'block';
    });
    hotSpotDiv.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    });
    isBackend && editAndDeleteTooltipFunc(scenes, currentScene, hotSpotDiv, spot, index, setPopupData, setAttributes);
  },
  clickHandlerFunc: () => {
    if (spot.type === 'scene' && spot.lookAt) {
      window?.viewer.lookAt(spot.lookAt.pitch, spot.lookAt.yaw);
    } else {
      window?.viewer.lookAt(spot.pitch, spot.yaw);
    }
  }
});
const initializePannellumViewer = (panoRef, modifiedScenes) => {
  const viewer = window.pannellum.viewer(panoRef.current, {
    autoLoad: true,
    "default": {
      "firstScene": Object.keys(modifiedScenes)[0],
      "author": "bPlugins"
    },
    scenes: modifiedScenes
  });
  return viewer;
};
const saveHotspot = (popupData, scenes, currentScene, setAttributes, setPopupData, setTempHotspot) => {
  if (!popupData.type) return;
  const newHotspot = {
    pitch: popupData.pitch,
    yaw: popupData.yaw,
    sceneId: popupData.sceneId,
    text: popupData.text,
    type: popupData.type,
    ...(popupData.type === 'scene' && popupData.targetHotspot && {
      lookAt: {
        pitch: popupData.targetHotspot.pitch,
        yaw: popupData.targetHotspot.yaw
      },
      targetPitch: popupData.targetHotspot.pitch,
      targetYaw: popupData.targetHotspot.yaw
    })
  };
  const newScenes = (0,immer__WEBPACK_IMPORTED_MODULE_0__.produce)(scenes, draft => {
    draft.map(scene => {
      if (scene.tour_id === currentScene.tour_id) {
        scene.hotSpots.push(newHotspot);
      }
    });
  });
  setAttributes({
    scenes: newScenes
  });
  setPopupData(null);
  setTempHotspot(null);
};
const addTempHotspot = (viewer, hotspot, isDraggingRef, setIsDraggingHotspot, setPopupData, setTempHotspot) => {
  viewer.removeHotSpot("temp-hotspot");
  viewer.addHotSpot({
    id: "temp-hotspot",
    pitch: hotspot.pitch,
    yaw: hotspot.yaw,
    type: "custom",
    cssClass: "add-hotspot-icon",
    createTooltipFunc: hotSpotDiv => {
      hotSpotDiv.innerHTML = "+";
      hotSpotDiv.style.cursor = "move";
      let startX, startY;
      let startPitch, startYaw;
      const handleMouseDown = e => {
        e.stopPropagation();
        isDraggingRef.current = false;
        startX = e.clientX;
        startY = e.clientY;
        startPitch = hotspot.pitch;
        startYaw = hotspot.yaw;
        setIsDraggingHotspot(false);
      };
      const handleMouseMove = e => {
        const dx = Math.abs(e.clientX - startX);
        const dy = Math.abs(e.clientY - startY);
        if (dx > 5 || dy > 5) {
          isDraggingRef.current = true;
          setIsDraggingHotspot(true);
          const sensitivity = 0.3;
          const moveX = (e.clientX - startX) * sensitivity;
          const moveY = (startY - e.clientY) * sensitivity;
          const newPitch = Math.max(-90, Math.min(90, startPitch + moveY));
          const newYaw = (startYaw + moveX) % 360;
          setTempHotspot({
            pitch: newPitch,
            yaw: newYaw
          });
        }
      };
      const handleMouseUp = () => {
        if (!isDraggingRef.current) {
          setPopupData({
            pitch: hotspot.pitch,
            yaw: hotspot.yaw,
            text: ""
          });
        }
        isDraggingRef.current = false;
        setIsDraggingHotspot(false);
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
      hotSpotDiv.addEventListener("mousedown", e => {
        handleMouseDown(e);
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
      });
    },
    clickHandlerFunc: event => {
      event.stopPropagation();
    }
  });
};
const editAndDeleteTooltipFunc = (scenes, currentScene, hotSpotDiv, spot, index, setPopupData, setAttributes) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'hotspot-tooltip';
  const actionButtons = document.createElement('div');
  actionButtons.className = 'action-buttons';
  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  editBtn.innerHTML = '📝';
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.innerHTML = '❌';
  actionButtons.appendChild(editBtn);
  actionButtons.appendChild(deleteBtn);
  wrapper.appendChild(actionButtons);
  editBtn.addEventListener('click', e => {
    e.stopPropagation();
    setPopupData({
      pitch: spot.pitch,
      yaw: spot.yaw,
      text: spot.text,
      type: spot.type,
      targetHotspot: spot.lookAt
    });
  });
  deleteBtn.addEventListener('click', e => {
    e.stopPropagation();
    if (hotSpotDiv && hotSpotDiv.parentNode) {
      hotSpotDiv.parentNode.removeChild(hotSpotDiv);
    }
    const updatedScenes = (0,immer__WEBPACK_IMPORTED_MODULE_0__.produce)(scenes, draft => {
      draft.map(scene => {
        if (scene?.tour_id === currentScene?.tour_id) {
          scene.hotSpots = scene.hotSpots.filter((_, i) => i !== index);
        }
      });
    });
    setAttributes({
      scenes: updatedScenes
    });
  });
  hotSpotDiv.appendChild(wrapper);
};
const handleMouseDownEvent = (event, popupData, isDraggingHotspot, clickStartCoords) => {
  if (popupData || isDraggingHotspot) return;
  clickStartCoords.current = {
    x: event.clientX,
    y: event.clientY,
    time: Date.now()
  };
};
const handleMouseUpEvent = (event, viewer, clickStartCoords, popupData, isDraggingHotspot, setTempHotspot) => {
  if (!clickStartCoords.current || popupData || isDraggingHotspot) return;
  const isClick = Math.abs(event.clientX - clickStartCoords.current.x) < 5 && Math.abs(event.clientY - clickStartCoords.current.y) < 5 && Date.now() - clickStartCoords.current.time < 200;
  if (isClick) {
    const coords = viewer.mouseEventToCoords(event);
    setTempHotspot({
      pitch: coords[0],
      yaw: coords[1]
    });
  }
  clickStartCoords.current = null;
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/react-dom/client.js":
/*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var m = __webpack_require__(/*! react-dom */ "react-dom");
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  exports.createRoot = function(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
  exports.hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "./node_modules/immer/dist/immer.mjs":
/*!*******************************************!*\
  !*** ./node_modules/immer/dist/immer.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Immer: () => (/* binding */ Immer2),
/* harmony export */   applyPatches: () => (/* binding */ applyPatches),
/* harmony export */   castDraft: () => (/* binding */ castDraft),
/* harmony export */   castImmutable: () => (/* binding */ castImmutable),
/* harmony export */   createDraft: () => (/* binding */ createDraft),
/* harmony export */   current: () => (/* binding */ current),
/* harmony export */   enableMapSet: () => (/* binding */ enableMapSet),
/* harmony export */   enablePatches: () => (/* binding */ enablePatches),
/* harmony export */   finishDraft: () => (/* binding */ finishDraft),
/* harmony export */   freeze: () => (/* binding */ freeze),
/* harmony export */   immerable: () => (/* binding */ DRAFTABLE),
/* harmony export */   isDraft: () => (/* binding */ isDraft),
/* harmony export */   isDraftable: () => (/* binding */ isDraftable),
/* harmony export */   nothing: () => (/* binding */ NOTHING),
/* harmony export */   original: () => (/* binding */ original),
/* harmony export */   produce: () => (/* binding */ produce),
/* harmony export */   produceWithPatches: () => (/* binding */ produceWithPatches),
/* harmony export */   setAutoFreeze: () => (/* binding */ setAutoFreeze),
/* harmony export */   setUseStrictShallowCopy: () => (/* binding */ setUseStrictShallowCopy)
/* harmony export */ });
// src/utils/env.ts
var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");

// src/utils/errors.ts
var errors =  true ? [
  // All error codes, starting by 0:
  function(plugin) {
    return `The plugin for '${plugin}' has not been loaded into Immer. To enable the plugin, import and call \`enable${plugin}()\` when initializing your application.`;
  },
  function(thing) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${thing}'`;
  },
  "This object has been frozen and should not be mutated",
  function(data) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + data;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(thing) {
    return `'current' expects a draft, got: ${thing}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(thing) {
    return `'original' expects a draft, got: ${thing}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : 0;
function die(error, ...args) {
  if (true) {
    const e = errors[error];
    const msg = typeof e === "function" ? e.apply(null, args) : e;
    throw new Error(`[Immer] ${msg}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`
  );
}

// src/utils/common.ts
var getPrototypeOf = Object.getPrototypeOf;
function isDraft(value) {
  return !!value && !!value[DRAFT_STATE];
}
function isDraftable(value) {
  if (!value)
    return false;
  return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!value.constructor?.[DRAFTABLE] || isMap(value) || isSet(value);
}
var objectCtorString = Object.prototype.constructor.toString();
function isPlainObject(value) {
  if (!value || typeof value !== "object")
    return false;
  const proto = getPrototypeOf(value);
  if (proto === null) {
    return true;
  }
  const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  if (Ctor === Object)
    return true;
  return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
}
function original(value) {
  if (!isDraft(value))
    die(15, value);
  return value[DRAFT_STATE].base_;
}
function each(obj, iter) {
  if (getArchtype(obj) === 0 /* Object */) {
    Reflect.ownKeys(obj).forEach((key) => {
      iter(key, obj[key], obj);
    });
  } else {
    obj.forEach((entry, index) => iter(index, entry, obj));
  }
}
function getArchtype(thing) {
  const state = thing[DRAFT_STATE];
  return state ? state.type_ : Array.isArray(thing) ? 1 /* Array */ : isMap(thing) ? 2 /* Map */ : isSet(thing) ? 3 /* Set */ : 0 /* Object */;
}
function has(thing, prop) {
  return getArchtype(thing) === 2 /* Map */ ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
}
function get(thing, prop) {
  return getArchtype(thing) === 2 /* Map */ ? thing.get(prop) : thing[prop];
}
function set(thing, propOrOldValue, value) {
  const t = getArchtype(thing);
  if (t === 2 /* Map */)
    thing.set(propOrOldValue, value);
  else if (t === 3 /* Set */) {
    thing.add(value);
  } else
    thing[propOrOldValue] = value;
}
function is(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function isMap(target) {
  return target instanceof Map;
}
function isSet(target) {
  return target instanceof Set;
}
function latest(state) {
  return state.copy_ || state.base_;
}
function shallowCopy(base, strict) {
  if (isMap(base)) {
    return new Map(base);
  }
  if (isSet(base)) {
    return new Set(base);
  }
  if (Array.isArray(base))
    return Array.prototype.slice.call(base);
  const isPlain = isPlainObject(base);
  if (strict === true || strict === "class_only" && !isPlain) {
    const descriptors = Object.getOwnPropertyDescriptors(base);
    delete descriptors[DRAFT_STATE];
    let keys = Reflect.ownKeys(descriptors);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const desc = descriptors[key];
      if (desc.writable === false) {
        desc.writable = true;
        desc.configurable = true;
      }
      if (desc.get || desc.set)
        descriptors[key] = {
          configurable: true,
          writable: true,
          // could live with !!desc.set as well here...
          enumerable: desc.enumerable,
          value: base[key]
        };
    }
    return Object.create(getPrototypeOf(base), descriptors);
  } else {
    const proto = getPrototypeOf(base);
    if (proto !== null && isPlain) {
      return { ...base };
    }
    const obj = Object.create(proto);
    return Object.assign(obj, base);
  }
}
function freeze(obj, deep = false) {
  if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj))
    return obj;
  if (getArchtype(obj) > 1) {
    obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
  }
  Object.freeze(obj);
  if (deep)
    Object.entries(obj).forEach(([key, value]) => freeze(value, true));
  return obj;
}
function dontMutateFrozenCollections() {
  die(2);
}
function isFrozen(obj) {
  return Object.isFrozen(obj);
}

// src/utils/plugins.ts
var plugins = {};
function getPlugin(pluginKey) {
  const plugin = plugins[pluginKey];
  if (!plugin) {
    die(0, pluginKey);
  }
  return plugin;
}
function loadPlugin(pluginKey, implementation) {
  if (!plugins[pluginKey])
    plugins[pluginKey] = implementation;
}

// src/core/scope.ts
var currentScope;
function getCurrentScope() {
  return currentScope;
}
function createScope(parent_, immer_) {
  return {
    drafts_: [],
    parent_,
    immer_,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0
  };
}
function usePatchesInScope(scope, patchListener) {
  if (patchListener) {
    getPlugin("Patches");
    scope.patches_ = [];
    scope.inversePatches_ = [];
    scope.patchListener_ = patchListener;
  }
}
function revokeScope(scope) {
  leaveScope(scope);
  scope.drafts_.forEach(revokeDraft);
  scope.drafts_ = null;
}
function leaveScope(scope) {
  if (scope === currentScope) {
    currentScope = scope.parent_;
  }
}
function enterScope(immer2) {
  return currentScope = createScope(currentScope, immer2);
}
function revokeDraft(draft) {
  const state = draft[DRAFT_STATE];
  if (state.type_ === 0 /* Object */ || state.type_ === 1 /* Array */)
    state.revoke_();
  else
    state.revoked_ = true;
}

// src/core/finalize.ts
function processResult(result, scope) {
  scope.unfinalizedDrafts_ = scope.drafts_.length;
  const baseDraft = scope.drafts_[0];
  const isReplaced = result !== void 0 && result !== baseDraft;
  if (isReplaced) {
    if (baseDraft[DRAFT_STATE].modified_) {
      revokeScope(scope);
      die(4);
    }
    if (isDraftable(result)) {
      result = finalize(scope, result);
      if (!scope.parent_)
        maybeFreeze(scope, result);
    }
    if (scope.patches_) {
      getPlugin("Patches").generateReplacementPatches_(
        baseDraft[DRAFT_STATE].base_,
        result,
        scope.patches_,
        scope.inversePatches_
      );
    }
  } else {
    result = finalize(scope, baseDraft, []);
  }
  revokeScope(scope);
  if (scope.patches_) {
    scope.patchListener_(scope.patches_, scope.inversePatches_);
  }
  return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value, path) {
  if (isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  if (!state) {
    each(
      value,
      (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path)
    );
    return value;
  }
  if (state.scope_ !== rootScope)
    return value;
  if (!state.modified_) {
    maybeFreeze(rootScope, state.base_, true);
    return state.base_;
  }
  if (!state.finalized_) {
    state.finalized_ = true;
    state.scope_.unfinalizedDrafts_--;
    const result = state.copy_;
    let resultEach = result;
    let isSet2 = false;
    if (state.type_ === 3 /* Set */) {
      resultEach = new Set(result);
      result.clear();
      isSet2 = true;
    }
    each(
      resultEach,
      (key, childValue) => finalizeProperty(rootScope, state, result, key, childValue, path, isSet2)
    );
    maybeFreeze(rootScope, result, false);
    if (path && rootScope.patches_) {
      getPlugin("Patches").generatePatches_(
        state,
        path,
        rootScope.patches_,
        rootScope.inversePatches_
      );
    }
  }
  return state.copy_;
}
function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
  if ( true && childValue === targetObject)
    die(5);
  if (isDraft(childValue)) {
    const path = rootPath && parentState && parentState.type_ !== 3 /* Set */ && // Set objects are atomic since they have no keys.
    !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
    const res = finalize(rootScope, childValue, path);
    set(targetObject, prop, res);
    if (isDraft(res)) {
      rootScope.canAutoFreeze_ = false;
    } else
      return;
  } else if (targetIsSet) {
    targetObject.add(childValue);
  }
  if (isDraftable(childValue) && !isFrozen(childValue)) {
    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
      return;
    }
    finalize(rootScope, childValue);
    if ((!parentState || !parentState.scope_.parent_) && typeof prop !== "symbol" && Object.prototype.propertyIsEnumerable.call(targetObject, prop))
      maybeFreeze(rootScope, childValue);
  }
}
function maybeFreeze(scope, value, deep = false) {
  if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
    freeze(value, deep);
  }
}

// src/core/proxy.ts
function createProxyProxy(base, parent) {
  const isArray = Array.isArray(base);
  const state = {
    type_: isArray ? 1 /* Array */ : 0 /* Object */,
    // Track which produce call this is associated with.
    scope_: parent ? parent.scope_ : getCurrentScope(),
    // True for both shallow and deep changes.
    modified_: false,
    // Used during finalization.
    finalized_: false,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: parent,
    // The base state.
    base_: base,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: false
  };
  let target = state;
  let traps = objectTraps;
  if (isArray) {
    target = [state];
    traps = arrayTraps;
  }
  const { revoke, proxy } = Proxy.revocable(target, traps);
  state.draft_ = proxy;
  state.revoke_ = revoke;
  return proxy;
}
var objectTraps = {
  get(state, prop) {
    if (prop === DRAFT_STATE)
      return state;
    const source = latest(state);
    if (!has(source, prop)) {
      return readPropFromProto(state, source, prop);
    }
    const value = source[prop];
    if (state.finalized_ || !isDraftable(value)) {
      return value;
    }
    if (value === peek(state.base_, prop)) {
      prepareCopy(state);
      return state.copy_[prop] = createProxy(value, state);
    }
    return value;
  },
  has(state, prop) {
    return prop in latest(state);
  },
  ownKeys(state) {
    return Reflect.ownKeys(latest(state));
  },
  set(state, prop, value) {
    const desc = getDescriptorFromProto(latest(state), prop);
    if (desc?.set) {
      desc.set.call(state.draft_, value);
      return true;
    }
    if (!state.modified_) {
      const current2 = peek(latest(state), prop);
      const currentState = current2?.[DRAFT_STATE];
      if (currentState && currentState.base_ === value) {
        state.copy_[prop] = value;
        state.assigned_[prop] = false;
        return true;
      }
      if (is(value, current2) && (value !== void 0 || has(state.base_, prop)))
        return true;
      prepareCopy(state);
      markChanged(state);
    }
    if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
    (value !== void 0 || prop in state.copy_) || // special case: NaN
    Number.isNaN(value) && Number.isNaN(state.copy_[prop]))
      return true;
    state.copy_[prop] = value;
    state.assigned_[prop] = true;
    return true;
  },
  deleteProperty(state, prop) {
    if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
      state.assigned_[prop] = false;
      prepareCopy(state);
      markChanged(state);
    } else {
      delete state.assigned_[prop];
    }
    if (state.copy_) {
      delete state.copy_[prop];
    }
    return true;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(state, prop) {
    const owner = latest(state);
    const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (!desc)
      return desc;
    return {
      writable: true,
      configurable: state.type_ !== 1 /* Array */ || prop !== "length",
      enumerable: desc.enumerable,
      value: owner[prop]
    };
  },
  defineProperty() {
    die(11);
  },
  getPrototypeOf(state) {
    return getPrototypeOf(state.base_);
  },
  setPrototypeOf() {
    die(12);
  }
};
var arrayTraps = {};
each(objectTraps, (key, fn) => {
  arrayTraps[key] = function() {
    arguments[0] = arguments[0][0];
    return fn.apply(this, arguments);
  };
});
arrayTraps.deleteProperty = function(state, prop) {
  if ( true && isNaN(parseInt(prop)))
    die(13);
  return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function(state, prop, value) {
  if ( true && prop !== "length" && isNaN(parseInt(prop)))
    die(14);
  return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek(draft, prop) {
  const state = draft[DRAFT_STATE];
  const source = state ? latest(state) : draft;
  return source[prop];
}
function readPropFromProto(state, source, prop) {
  const desc = getDescriptorFromProto(source, prop);
  return desc ? `value` in desc ? desc.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    desc.get?.call(state.draft_)
  ) : void 0;
}
function getDescriptorFromProto(source, prop) {
  if (!(prop in source))
    return void 0;
  let proto = getPrototypeOf(source);
  while (proto) {
    const desc = Object.getOwnPropertyDescriptor(proto, prop);
    if (desc)
      return desc;
    proto = getPrototypeOf(proto);
  }
  return void 0;
}
function markChanged(state) {
  if (!state.modified_) {
    state.modified_ = true;
    if (state.parent_) {
      markChanged(state.parent_);
    }
  }
}
function prepareCopy(state) {
  if (!state.copy_) {
    state.copy_ = shallowCopy(
      state.base_,
      state.scope_.immer_.useStrictShallowCopy_
    );
  }
}

// src/core/immerClass.ts
var Immer2 = class {
  constructor(config) {
    this.autoFreeze_ = true;
    this.useStrictShallowCopy_ = false;
    /**
     * The `produce` function takes a value and a "recipe function" (whose
     * return value often depends on the base state). The recipe function is
     * free to mutate its first argument however it wants. All mutations are
     * only ever applied to a __copy__ of the base state.
     *
     * Pass only a function to create a "curried producer" which relieves you
     * from passing the recipe function every time.
     *
     * Only plain objects and arrays are made mutable. All other objects are
     * considered uncopyable.
     *
     * Note: This function is __bound__ to its `Immer` instance.
     *
     * @param {any} base - the initial state
     * @param {Function} recipe - function that receives a proxy of the base state as first argument and which can be freely modified
     * @param {Function} patchListener - optional function that will be called with all the patches produced here
     * @returns {any} a new state, or the initial state if nothing was modified
     */
    this.produce = (base, recipe, patchListener) => {
      if (typeof base === "function" && typeof recipe !== "function") {
        const defaultBase = recipe;
        recipe = base;
        const self = this;
        return function curriedProduce(base2 = defaultBase, ...args) {
          return self.produce(base2, (draft) => recipe.call(this, draft, ...args));
        };
      }
      if (typeof recipe !== "function")
        die(6);
      if (patchListener !== void 0 && typeof patchListener !== "function")
        die(7);
      let result;
      if (isDraftable(base)) {
        const scope = enterScope(this);
        const proxy = createProxy(base, void 0);
        let hasError = true;
        try {
          result = recipe(proxy);
          hasError = false;
        } finally {
          if (hasError)
            revokeScope(scope);
          else
            leaveScope(scope);
        }
        usePatchesInScope(scope, patchListener);
        return processResult(result, scope);
      } else if (!base || typeof base !== "object") {
        result = recipe(base);
        if (result === void 0)
          result = base;
        if (result === NOTHING)
          result = void 0;
        if (this.autoFreeze_)
          freeze(result, true);
        if (patchListener) {
          const p = [];
          const ip = [];
          getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
          patchListener(p, ip);
        }
        return result;
      } else
        die(1, base);
    };
    this.produceWithPatches = (base, recipe) => {
      if (typeof base === "function") {
        return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
      }
      let patches, inversePatches;
      const result = this.produce(base, recipe, (p, ip) => {
        patches = p;
        inversePatches = ip;
      });
      return [result, patches, inversePatches];
    };
    if (typeof config?.autoFreeze === "boolean")
      this.setAutoFreeze(config.autoFreeze);
    if (typeof config?.useStrictShallowCopy === "boolean")
      this.setUseStrictShallowCopy(config.useStrictShallowCopy);
  }
  createDraft(base) {
    if (!isDraftable(base))
      die(8);
    if (isDraft(base))
      base = current(base);
    const scope = enterScope(this);
    const proxy = createProxy(base, void 0);
    proxy[DRAFT_STATE].isManual_ = true;
    leaveScope(scope);
    return proxy;
  }
  finishDraft(draft, patchListener) {
    const state = draft && draft[DRAFT_STATE];
    if (!state || !state.isManual_)
      die(9);
    const { scope_: scope } = state;
    usePatchesInScope(scope, patchListener);
    return processResult(void 0, scope);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(value) {
    this.autoFreeze_ = value;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(value) {
    this.useStrictShallowCopy_ = value;
  }
  applyPatches(base, patches) {
    let i;
    for (i = patches.length - 1; i >= 0; i--) {
      const patch = patches[i];
      if (patch.path.length === 0 && patch.op === "replace") {
        base = patch.value;
        break;
      }
    }
    if (i > -1) {
      patches = patches.slice(i + 1);
    }
    const applyPatchesImpl = getPlugin("Patches").applyPatches_;
    if (isDraft(base)) {
      return applyPatchesImpl(base, patches);
    }
    return this.produce(
      base,
      (draft) => applyPatchesImpl(draft, patches)
    );
  }
};
function createProxy(value, parent) {
  const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
  const scope = parent ? parent.scope_ : getCurrentScope();
  scope.drafts_.push(draft);
  return draft;
}

// src/core/current.ts
function current(value) {
  if (!isDraft(value))
    die(10, value);
  return currentImpl(value);
}
function currentImpl(value) {
  if (!isDraftable(value) || isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  let copy;
  if (state) {
    if (!state.modified_)
      return state.base_;
    state.finalized_ = true;
    copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
  } else {
    copy = shallowCopy(value, true);
  }
  each(copy, (key, childValue) => {
    set(copy, key, currentImpl(childValue));
  });
  if (state) {
    state.finalized_ = false;
  }
  return copy;
}

// src/plugins/patches.ts
function enablePatches() {
  const errorOffset = 16;
  if (true) {
    errors.push(
      'Sets cannot have "replace" patches.',
      function(op) {
        return "Unsupported patch operation: " + op;
      },
      function(path) {
        return "Cannot apply patch, path doesn't resolve: " + path;
      },
      "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
    );
  }
  const REPLACE = "replace";
  const ADD = "add";
  const REMOVE = "remove";
  function generatePatches_(state, basePath, patches, inversePatches) {
    switch (state.type_) {
      case 0 /* Object */:
      case 2 /* Map */:
        return generatePatchesFromAssigned(
          state,
          basePath,
          patches,
          inversePatches
        );
      case 1 /* Array */:
        return generateArrayPatches(state, basePath, patches, inversePatches);
      case 3 /* Set */:
        return generateSetPatches(
          state,
          basePath,
          patches,
          inversePatches
        );
    }
  }
  function generateArrayPatches(state, basePath, patches, inversePatches) {
    let { base_, assigned_ } = state;
    let copy_ = state.copy_;
    if (copy_.length < base_.length) {
      ;
      [base_, copy_] = [copy_, base_];
      [patches, inversePatches] = [inversePatches, patches];
    }
    for (let i = 0; i < base_.length; i++) {
      if (assigned_[i] && copy_[i] !== base_[i]) {
        const path = basePath.concat([i]);
        patches.push({
          op: REPLACE,
          path,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: clonePatchValueIfNeeded(copy_[i])
        });
        inversePatches.push({
          op: REPLACE,
          path,
          value: clonePatchValueIfNeeded(base_[i])
        });
      }
    }
    for (let i = base_.length; i < copy_.length; i++) {
      const path = basePath.concat([i]);
      patches.push({
        op: ADD,
        path,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: clonePatchValueIfNeeded(copy_[i])
      });
    }
    for (let i = copy_.length - 1; base_.length <= i; --i) {
      const path = basePath.concat([i]);
      inversePatches.push({
        op: REMOVE,
        path
      });
    }
  }
  function generatePatchesFromAssigned(state, basePath, patches, inversePatches) {
    const { base_, copy_ } = state;
    each(state.assigned_, (key, assignedValue) => {
      const origValue = get(base_, key);
      const value = get(copy_, key);
      const op = !assignedValue ? REMOVE : has(base_, key) ? REPLACE : ADD;
      if (origValue === value && op === REPLACE)
        return;
      const path = basePath.concat(key);
      patches.push(op === REMOVE ? { op, path } : { op, path, value });
      inversePatches.push(
        op === ADD ? { op: REMOVE, path } : op === REMOVE ? { op: ADD, path, value: clonePatchValueIfNeeded(origValue) } : { op: REPLACE, path, value: clonePatchValueIfNeeded(origValue) }
      );
    });
  }
  function generateSetPatches(state, basePath, patches, inversePatches) {
    let { base_, copy_ } = state;
    let i = 0;
    base_.forEach((value) => {
      if (!copy_.has(value)) {
        const path = basePath.concat([i]);
        patches.push({
          op: REMOVE,
          path,
          value
        });
        inversePatches.unshift({
          op: ADD,
          path,
          value
        });
      }
      i++;
    });
    i = 0;
    copy_.forEach((value) => {
      if (!base_.has(value)) {
        const path = basePath.concat([i]);
        patches.push({
          op: ADD,
          path,
          value
        });
        inversePatches.unshift({
          op: REMOVE,
          path,
          value
        });
      }
      i++;
    });
  }
  function generateReplacementPatches_(baseValue, replacement, patches, inversePatches) {
    patches.push({
      op: REPLACE,
      path: [],
      value: replacement === NOTHING ? void 0 : replacement
    });
    inversePatches.push({
      op: REPLACE,
      path: [],
      value: baseValue
    });
  }
  function applyPatches_(draft, patches) {
    patches.forEach((patch) => {
      const { path, op } = patch;
      let base = draft;
      for (let i = 0; i < path.length - 1; i++) {
        const parentType = getArchtype(base);
        let p = path[i];
        if (typeof p !== "string" && typeof p !== "number") {
          p = "" + p;
        }
        if ((parentType === 0 /* Object */ || parentType === 1 /* Array */) && (p === "__proto__" || p === "constructor"))
          die(errorOffset + 3);
        if (typeof base === "function" && p === "prototype")
          die(errorOffset + 3);
        base = get(base, p);
        if (typeof base !== "object")
          die(errorOffset + 2, path.join("/"));
      }
      const type = getArchtype(base);
      const value = deepClonePatchValue(patch.value);
      const key = path[path.length - 1];
      switch (op) {
        case REPLACE:
          switch (type) {
            case 2 /* Map */:
              return base.set(key, value);
            case 3 /* Set */:
              die(errorOffset);
            default:
              return base[key] = value;
          }
        case ADD:
          switch (type) {
            case 1 /* Array */:
              return key === "-" ? base.push(value) : base.splice(key, 0, value);
            case 2 /* Map */:
              return base.set(key, value);
            case 3 /* Set */:
              return base.add(value);
            default:
              return base[key] = value;
          }
        case REMOVE:
          switch (type) {
            case 1 /* Array */:
              return base.splice(key, 1);
            case 2 /* Map */:
              return base.delete(key);
            case 3 /* Set */:
              return base.delete(patch.value);
            default:
              return delete base[key];
          }
        default:
          die(errorOffset + 1, op);
      }
    });
    return draft;
  }
  function deepClonePatchValue(obj) {
    if (!isDraftable(obj))
      return obj;
    if (Array.isArray(obj))
      return obj.map(deepClonePatchValue);
    if (isMap(obj))
      return new Map(
        Array.from(obj.entries()).map(([k, v]) => [k, deepClonePatchValue(v)])
      );
    if (isSet(obj))
      return new Set(Array.from(obj).map(deepClonePatchValue));
    const cloned = Object.create(getPrototypeOf(obj));
    for (const key in obj)
      cloned[key] = deepClonePatchValue(obj[key]);
    if (has(obj, DRAFTABLE))
      cloned[DRAFTABLE] = obj[DRAFTABLE];
    return cloned;
  }
  function clonePatchValueIfNeeded(obj) {
    if (isDraft(obj)) {
      return deepClonePatchValue(obj);
    } else
      return obj;
  }
  loadPlugin("Patches", {
    applyPatches_,
    generatePatches_,
    generateReplacementPatches_
  });
}

// src/plugins/mapset.ts
function enableMapSet() {
  class DraftMap extends Map {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 2 /* Map */,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        assigned_: void 0,
        base_: target,
        draft_: this,
        isManual_: false,
        revoked_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(key) {
      return latest(this[DRAFT_STATE]).has(key);
    }
    set(key, value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!latest(state).has(key) || latest(state).get(key) !== value) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_.set(key, true);
        state.copy_.set(key, value);
        state.assigned_.set(key, true);
      }
      return this;
    }
    delete(key) {
      if (!this.has(key)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareMapCopy(state);
      markChanged(state);
      if (state.base_.has(key)) {
        state.assigned_.set(key, false);
      } else {
        state.assigned_.delete(key);
      }
      state.copy_.delete(key);
      return true;
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_ = /* @__PURE__ */ new Map();
        each(state.base_, (key) => {
          state.assigned_.set(key, false);
        });
        state.copy_.clear();
      }
    }
    forEach(cb, thisArg) {
      const state = this[DRAFT_STATE];
      latest(state).forEach((_value, key, _map) => {
        cb.call(thisArg, this.get(key), key, this);
      });
    }
    get(key) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      const value = latest(state).get(key);
      if (state.finalized_ || !isDraftable(value)) {
        return value;
      }
      if (value !== state.base_.get(key)) {
        return value;
      }
      const draft = createProxy(value, state);
      prepareMapCopy(state);
      state.copy_.set(key, draft);
      return draft;
    }
    keys() {
      return latest(this[DRAFT_STATE]).keys();
    }
    values() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.values(),
        next: () => {
          const r = iterator.next();
          if (r.done)
            return r;
          const value = this.get(r.value);
          return {
            done: false,
            value
          };
        }
      };
    }
    entries() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.entries(),
        next: () => {
          const r = iterator.next();
          if (r.done)
            return r;
          const value = this.get(r.value);
          return {
            done: false,
            value: [r.value, value]
          };
        }
      };
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.entries();
    }
  }
  function proxyMap_(target, parent) {
    return new DraftMap(target, parent);
  }
  function prepareMapCopy(state) {
    if (!state.copy_) {
      state.assigned_ = /* @__PURE__ */ new Map();
      state.copy_ = new Map(state.base_);
    }
  }
  class DraftSet extends Set {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 3 /* Set */,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        base_: target,
        draft_: this,
        drafts_: /* @__PURE__ */ new Map(),
        revoked_: false,
        isManual_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!state.copy_) {
        return state.base_.has(value);
      }
      if (state.copy_.has(value))
        return true;
      if (state.drafts_.has(value) && state.copy_.has(state.drafts_.get(value)))
        return true;
      return false;
    }
    add(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!this.has(value)) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.add(value);
      }
      return this;
    }
    delete(value) {
      if (!this.has(value)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      markChanged(state);
      return state.copy_.delete(value) || (state.drafts_.has(value) ? state.copy_.delete(state.drafts_.get(value)) : (
        /* istanbul ignore next */
        false
      ));
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.clear();
      }
    }
    values() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.values();
    }
    entries() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.entries();
    }
    keys() {
      return this.values();
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.values();
    }
    forEach(cb, thisArg) {
      const iterator = this.values();
      let result = iterator.next();
      while (!result.done) {
        cb.call(thisArg, result.value, result.value, this);
        result = iterator.next();
      }
    }
  }
  function proxySet_(target, parent) {
    return new DraftSet(target, parent);
  }
  function prepareSetCopy(state) {
    if (!state.copy_) {
      state.copy_ = /* @__PURE__ */ new Set();
      state.base_.forEach((value) => {
        if (isDraftable(value)) {
          const draft = createProxy(value, state);
          state.drafts_.set(value, draft);
          state.copy_.add(draft);
        } else {
          state.copy_.add(value);
        }
      });
    }
  }
  function assertUnrevoked(state) {
    if (state.revoked_)
      die(3, JSON.stringify(latest(state)));
  }
  loadPlugin("MapSet", { proxyMap_, proxySet_ });
}

// src/immer.ts
var immer = new Immer2();
var produce = immer.produce;
var produceWithPatches = immer.produceWithPatches.bind(
  immer
);
var setAutoFreeze = immer.setAutoFreeze.bind(immer);
var setUseStrictShallowCopy = immer.setUseStrictShallowCopy.bind(immer);
var applyPatches = immer.applyPatches.bind(immer);
var createDraft = immer.createDraft.bind(immer);
var finishDraft = immer.finishDraft.bind(immer);
function castDraft(value) {
  return value;
}
function castImmutable(value) {
  return value;
}

//# sourceMappingURL=immer.mjs.map

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _Components_Common_Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Common/Style */ "./src/Components/Common/Style.js");
/* harmony import */ var _Components_Common_TourViewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Common/TourViewer */ "./src/Components/Common/TourViewer.js");





document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(".wp-block-b-blocks-virtual-tour");
  blockNameEls.forEach(blockNameEl => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);
    (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(blockNameEl).render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Common_Style__WEBPACK_IMPORTED_MODULE_3__["default"], {
      attributes: attributes,
      id: blockNameEl.id
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Components_Common_TourViewer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      attributes
    })));
    blockNameEl?.removeAttribute("data-attributes");
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map