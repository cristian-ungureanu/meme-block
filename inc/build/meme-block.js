/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/meme-block.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/helpers/icons.js":
/*!******************************!*\
  !*** ./src/helpers/icons.js ***!
  \******************************/
/*! exports provided: memeBlockIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"memeBlockIcon\", function() { return memeBlockIcon; });\n/**\n * WordPress dependencies\n */\nvar _wp$components = wp.components,\n    Path = _wp$components.Path,\n    SVG = _wp$components.SVG,\n    G = _wp$components.G;\nvar memeBlockIcon = function memeBlockIcon() {\n  return /*#__PURE__*/React.createElement(SVG, {\n    height: \"100px\",\n    width: \"100px\",\n    fill: \"#000000\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    x: \"0px\",\n    y: \"0px\",\n    viewBox: \"0 0 100 100\"\n  }, /*#__PURE__*/React.createElement(G, {\n    transform: \"translate(0,-952.36218)\"\n  }, /*#__PURE__*/React.createElement(Path, {\n    d: \"m 23.815341,1046.6064 c 0.135279,-0.051 0.245994,-0.1238 0.245994,-0.1657 0,-0.042 -0.533355,-0.2426 -1.185215,-0.4464 -2.520145,-0.788 -3.180313,-1.2888 -5.478509,-4.156 -1.366783,-1.7052 -2.90877,-3.3125 -3.112189,-3.2441 -0.13277,0.045 -0.107373,0.281 0.161488,1.5005 0.308696,1.4004 0.773987,2.9959 1.342345,4.6031 0.719108,2.0334 0.726757,1.8337 -0.07023,1.8337 -0.648192,0 -0.673696,0 -0.767779,-0.2459 -0.164388,-0.4155 -0.686174,-2.2702 -1.403041,-4.987 -1.687892,-6.3966 -2.892215,-9.2853 -5.0668109,-12.1536 -0.3358137,-0.443 -0.6105717,-0.8504 -0.6105717,-0.9056 0,-0.2048 -0.3697193,-3.0829 -0.5458788,-4.2494 -0.1003217,-0.6642 -0.4311045,-2.4151 -0.7351122,-3.8911 l -0.5527455,-2.6834 -0.023822,-12.9087 -0.023833,-12.90871 0.2692401,-0.26925 c 0.393813,-0.3938 0.6134249,-0.32407 0.9175896,0.29139 0.4464662,0.9034 0.553952,1.95573 0.5469763,5.35571 -0.00474,2.5092 -0.052513,3.58586 -0.2908095,6.61936 -0.3193226,4.0637 -0.441011,6.7088 -0.3086481,6.7088 0.1291654,0 0.6180642,-0.5426 0.7817775,-0.8677 0.1830416,-0.3633 0.1852993,-1.3326 0.00937,-4.0969 -0.3130367,-4.9233 -0.1797174,-5.83123 1.3660143,-9.30281 0.9231549,-2.07327 1.2167539,-2.98639 1.1431889,-3.55532 -0.06333,-0.48967 -0.358213,-1.23027 -0.4898705,-1.23027 -0.052668,0 -0.1001674,0.39284 -0.1150576,0.95218 -0.024615,0.92556 -0.032449,0.95741 -0.2754786,1.13866 -0.2317921,0.17283 -0.2677977,0.17643 -0.4919872,0.0494 -0.2396294,-0.1359 -0.2418077,-0.14578 -0.2336409,-1.07157 0.011018,-1.23648 0.1723031,-1.92977 1.0803614,-4.64097 0.8946404,-2.67122 1.1544124,-3.74568 1.2881084,-5.32795 0.155343,-1.83868 0.210347,-1.93604 0.543167,-0.96159 0.167397,0.49014 0.206163,0.79322 0.206005,1.61011 -9.4e-5,0.55347 0.0279,1.00631 0.06239,1.00631 0.0765,0 2.652837,-2.71848 4.245831,-4.48 2.430341,-2.68749 5.058238,-5.78997 8.399896,-9.91695 3.144762,-3.88378 4.899729,-5.4736 7.31665,-6.62814 1.070628,-0.51143 1.907991,-0.72342 3.863493,-0.97815 1.939341,-0.25263 2.585073,-0.44306 4.228917,-1.24712 0.773548,-0.37838 1.627855,-0.77469 1.898443,-0.8807 0.980478,-0.38418 3.074237,-0.81876 6.127361,-1.27186 2.216606,-0.32895 4.072821,-0.65603 5.136818,-0.90517 1.585892,-0.37135 2.168687,-0.43429 4.037096,-0.43596 1.821259,-10e-4 1.846041,9.3e-4 2.572595,0.2661 0.403499,0.14719 1.246442,0.39286 1.873221,0.54577 1.282575,0.31291 1.789846,0.50843 2.883877,1.11158 3.214641,1.77227 5.947234,4.33763 10.287477,9.65793 0.762199,0.93431 2.104716,2.44379 2.983383,3.35438 3.193261,3.30937 3.529011,3.94153 4.396157,8.27727 0.444255,2.22132 0.806544,3.36101 1.563194,4.91751 0.671769,1.3819 1.161279,2.18852 3.311359,5.45648 3.420913,5.19951 4.139613,6.91785 4.601771,11.00235 0.255869,2.2615 0.334575,4.8382 0.295073,9.6608 l -0.03887,4.7408 -0.281374,1.8338 c -0.428047,2.7895 -0.3724,4.6698 0.169858,5.7376 0.250649,0.4936 0.419082,0.7119 1.050282,1.3603 l 0.509449,0.5236 0,2.4284 0,2.4284 -0.240711,0.3577 c -0.132457,0.1969 -0.501439,1.1238 -0.820119,2.06 -0.639242,1.8778 -1.357566,3.5782 -2.738723,6.4826 -1.238745,2.6049 -1.903742,4.181 -2.415574,5.7249 l -0.42999,1.297 -0.785086,0.026 c -0.431794,0.015 -0.836312,0 -0.89895,-0.018 -0.08403,-0.033 -0.0094,-0.3406 0.285824,-1.1771 0.219847,-0.6232 0.621685,-1.9638 0.892995,-2.9789 1.163848,-4.3545 1.58815,-5.4372 3.143428,-8.0211 1.063934,-1.7676 1.345182,-2.3381 1.553115,-3.1513 0.230397,-0.9008 0.218734,-1.736 -0.05219,-3.7339 -0.373341,-2.7539 -0.425257,-4.0184 -0.305153,-7.4348 0.147662,-4.202 0.08041,-6.839 -0.218154,-8.5517 -0.534985,-3.0685 -1.112795,-5.1289 -2.992161,-10.6688 -1.387395,-4.08979 -1.642685,-4.91726 -2.692919,-8.72879 -0.84951,-3.08305 -1.325634,-4.45335 -2.064351,-5.94114 -0.66636,-1.34207 -1.284691,-2.2344 -2.727279,-3.93582 -1.293139,-1.52515 -1.972698,-2.4712 -2.432049,-3.38584 -0.385629,-0.76782 -0.744533,-1.90765 -0.744533,-2.36448 0,-0.19804 0.02774,-0.21494 0.272579,-0.16599 0.358198,0.0716 0.985918,0.50906 1.33319,0.92902 0.152678,0.18473 0.484227,0.73839 0.736617,1.23037 0.626294,1.2209 1.096821,1.95076 1.46723,2.27599 0.602153,0.5287 0.606668,0.30921 0.02571,-1.2457 -0.470888,-1.26034 -0.984303,-2.13334 -1.716609,-2.91904 -0.686393,-0.73642 -1.553947,-1.24125 -2.304028,-1.34076 -0.240743,-0.0319 -0.471107,-0.10335 -0.51191,-0.15855 -0.04076,-0.0553 -0.124463,-0.36215 -0.18577,-0.68194 -0.201695,-1.05089 -0.620698,-1.80379 -1.952946,-3.50936 -0.412451,-0.52801 -0.808928,-1.10129 -0.881066,-1.27396 -0.0721,-0.17264 -0.172993,-0.72682 -0.224127,-1.2315 -0.0511,-0.50466 -0.138883,-1.07264 -0.194892,-1.26213 -0.312723,-1.05705 -3.986606,-3.98534 -8.234772,-6.56355 -2.891854,-1.75506 -4.340823,-2.16569 -7.252506,-2.05533 -1.736031,0.0659 -2.992805,0.28028 -6.138443,1.04771 -2.949807,0.71962 -3.534654,0.81951 -6.261541,1.06941 -3.37254,0.30908 -3.77466,0.44115 -5.859014,1.92429 -1.933839,1.37607 -2.554097,1.62406 -4.696152,1.87762 -1.462042,0.17306 -2.116911,0.33046 -2.717074,0.65305 -0.687866,0.36975 -1.869867,1.6047 -3.035143,3.17116 -0.575239,0.77328 -1.518881,1.94067 -2.096988,2.59421 -0.578123,0.65354 -2.518138,2.8989 -4.31118,4.98974 -4.753102,5.5425 -6.694026,7.72709 -8.756983,9.85641 l -0.926413,0.95624 0.06145,1.4142 c 0.100949,2.32584 -0.173668,3.62224 -1.504397,7.10245 -1.4661794,3.83444 -1.5456534,4.19871 -1.979281,9.07111 -0.243,2.7305 -0.335124,6.072 -0.2319332,8.4125 0.115841,2.626 0.1189757,2.6402 0.9963888,4.5131 0.2881133,0.6149 0.5861024,1.3597 0.6621904,1.6548 0.07713,0.299 0.176411,1.2895 0.224268,2.2363 0.114587,2.2664 0.352539,3.1814 1.721515,6.6193 1.416474,3.5573 1.876311,5.0606 2.17027,7.0955 0.08041,0.5571 0.204831,1.1789 0.276357,1.3815 0.237262,0.6724 2.192984,3.106 3.768703,4.6893 2.132916,2.1433 3.644038,3.2572 6.778014,4.9963 0.68876,0.3823 1.3317,0.7491 1.428747,0.8151 0.150484,0.1013 -0.06694,0.1191 -1.47593,0.1128 -1.216894,0 -1.587555,-0.032 -1.406394,-0.097 z m -11.968865,-15.4827 c -0.312786,-0.9471 -0.991482,-3.375 -1.508221,-5.3957 -1.2870734,-5.0328 -2.3124304,-8.3229 -2.6257337,-8.4256 -0.1312027,-0.042 -0.1065911,0.2805 0.1713314,2.2575 0.5767124,4.102 1.5950001,8.3672 2.4906443,10.4322 0.500546,1.1541 1.652529,2.8535 1.934246,2.8535 0.06631,0 -0.108156,-0.6497 -0.462267,-1.7219 z m 78.318793,-29.1321 c 0,-1.3003 -0.378152,-2.97463 -1.064765,-4.71442 -0.459915,-1.16543 -2.1055,-4.5791 -2.365899,-4.90795 -0.137159,-0.17324 -0.141705,-0.17002 -0.144527,0.10269 -0.0031,0.38331 0.565082,2.61848 0.949677,3.73083 0.532022,1.53874 2.455828,6.31905 2.543046,6.31905 0.04531,0 0.08245,-0.2386 0.08245,-0.5302 z m -34.483175,30.9682 c -2.780246,-0.086 -5.084384,-0.7138 -6.753513,-1.8411 -2.82304,-1.9065 -4.4105,-4.7559 -4.03379,-7.2404 0.145469,-0.9597 0.377119,-1.4985 0.644165,-1.4985 0.302738,0 1.000182,0.4901 1.304221,0.9163 0.393734,0.5519 0.498979,0.7836 0.965149,2.1251 0.446277,1.2843 0.694434,1.7824 1.141809,2.2919 0.580646,0.6613 2.127037,1.52 3.422293,1.9004 2.549724,0.7487 6.518163,0.6823 8.900317,-0.1488 1.378335,-0.4813 2.650878,-1.4029 3.036334,-2.1991 0.284304,-0.5872 0.3334,-2.3498 0.142333,-5.109 -0.08982,-1.2979 -0.141862,-2.8867 -0.123679,-3.7867 l 0.03104,-1.5506 0.286764,-0.256 c 0.394753,-0.3524 0.803959,-0.4151 1.294378,-0.1982 0.32191,0.1426 0.443707,0.2705 0.682224,0.7181 0.69086,1.2961 0.803206,2.5713 0.669181,7.5958 l -0.07681,2.8799 -0.431386,0.6313 c -1.433167,2.0975 -3.453346,3.7342 -5.362732,4.3446 -1.018428,0.3256 -3.354497,0.4986 -5.738313,0.4253 z M 27.038746,1009.674 c -1.871342,-0.2322 -3.729328,-1.0009 -5.362717,-2.2183 -0.721145,-0.5376 -2.16726,-1.9786 -2.188782,-2.1811 -0.0063,-0.063 -0.0047,-0.6775 0.0047,-1.3662 0.0221,-1.5739 -0.124776,-2.1739 -0.97468,-3.98066 -0.899734,-1.91273 -1.002188,-2.26115 -1.052145,-3.57796 -0.112863,-2.97713 1.063745,-5.78026 3.339794,-7.95619 4.693675,-4.48717 12.644189,-5.11007 17.999742,-1.41022 0.371051,0.25634 0.97319,0.74784 1.33805,1.09223 0.594927,0.56153 0.684213,0.69079 0.864935,1.25231 0.197479,0.61364 0.211539,0.63101 0.703871,0.86937 0.881661,0.42686 1.312561,1.27522 1.312561,2.58424 0,3.32755 -1.695635,6.48644 -6.292265,11.72238 -2.061233,2.3479 -3.742353,3.8354 -5.048205,4.4668 -1.205467,0.5829 -3.192194,0.8836 -4.64563,0.7033 z m 2.61324,-1.605 c 0.766071,-0.2454 1.580046,-0.6475 2.05736,-1.0162 1.498362,-1.1575 3.825339,-3.4526 5.359895,-5.2867 2.470344,-2.95231 3.813581,-5.09186 4.131635,-6.58089 0.284633,-1.33259 -0.06349,-4.38235 -0.548654,-4.80561 -0.372462,-0.32499 -0.605915,-0.33669 -1.121228,-0.0563 -0.254568,0.13857 -0.482723,0.30364 -0.506972,0.36688 -0.05533,0.14437 0.11004,0.39781 0.694465,1.06386 0.501706,0.57173 0.801748,1.08513 0.801748,1.37189 0,0.24636 -0.107065,0.23127 -0.735426,-0.10357 -0.756336,-0.40311 -1.706232,-1.32567 -2.957032,-2.87188 -1.417711,-1.75254 -1.856481,-2.22569 -2.648714,-2.85629 -1.388696,-1.10539 -2.733063,-1.589 -4.41724,-1.589 -1.67612,0 -3.0353,0.37209 -4.498329,1.23145 -1.256631,0.7381 -2.73565,1.97427 -3.805948,3.18102 -0.740018,0.83435 -0.778533,0.76893 0.57712,0.98002 1.958622,0.30498 3.186489,1.4128 3.482738,3.14227 0.192571,1.12426 -0.126658,2.16474 -0.935914,3.05017 -0.750286,0.82092 -1.81955,1.21285 -3.685106,1.3508 l -0.705063,0.0518 0.05079,1.57888 c 0.05596,1.7424 0.219236,2.6577 0.678509,3.8047 0.852159,2.1281 2.449981,3.4809 4.822667,4.0826 0.97714,0.248 2.999278,0.2013 3.908731,-0.091 z m 39.939662,-8.1114 c -3.111327,-0.198 -6.507457,-0.96289 -8.630671,-1.94386 -2.389098,-1.10384 -4.29353,-3.17067 -6.773733,-7.3514 -1.212365,-2.04362 -1.46038,-3.4998 -0.961762,-5.64678 0.41176,-1.77298 1.164099,-2.87191 3.856312,-5.63279 2.819498,-2.8914 3.508932,-3.86126 4.328502,-6.08915 0.324168,-0.88119 0.35,-0.9205 0.658993,-1.00287 1.288296,-0.34339 3.687003,-0.34879 4.97301,-0.011 1.004305,0.26366 2.201527,0.86579 3.041319,1.52961 2.54151,2.00893 6.940176,7.25754 8.93148,10.65732 0.91505,1.56226 1.558664,3.12983 1.995992,4.86139 0.335844,1.32975 0.397245,3.46178 0.130105,4.51807 -0.595679,2.35558 -2.337541,4.41685 -4.744792,5.61476 l -1.028461,0.51181 -2.642178,0.011 c -1.4532,0 -2.86356,-0.011 -3.134148,-0.0231 z m 4.78561,-1.26711 c 2.37717,-0.50926 3.914108,-1.57317 4.738491,-3.27995 0.499057,-1.03324 0.620494,-1.62718 0.621811,-3.04131 0.0031,-2.70534 -0.961903,-5.60744 -2.764555,-8.31891 -0.660544,-0.99351 -1.774953,-2.37043 -1.91854,-2.37043 -0.0428,0 -0.09312,0.51321 -0.111765,1.1405 -0.0544,1.82387 -0.219063,1.99031 -1.969813,1.99019 -2.98807,0 -4.517719,-0.3781 -5.59711,-1.38282 l -0.50495,-0.47 -0.03401,-1.15328 c -0.04106,-1.39241 0.105655,-2.20648 0.566225,-3.14213 0.478225,-0.9716 1.157815,-1.36021 2.632851,-1.50555 0.747857,-0.0737 0.759488,-0.10544 0.344576,-0.94147 -0.424364,-0.85501 -1.297999,-1.6908 -2.232533,-2.13581 -0.771008,-0.36713 -1.628906,-0.62909 -2.060276,-0.62909 -0.172601,0 -0.4143,0.15018 -0.80863,0.50229 -0.585412,0.52278 -1.683675,1.41273 -3.961572,3.21021 -3.980791,3.14123 -5.781359,5.27317 -6.572259,7.78191 -0.251041,0.79626 -0.342789,2.31967 -0.181034,3.00592 0.390896,1.65844 2.44081,5.0252 4.025026,6.61064 1.20299,1.20392 2.612018,2.07416 4.562003,2.81757 1.667874,0.63586 4.095158,1.19903 5.948456,1.38028 0.541177,0.0529 1.104722,0.11283 1.252321,0.13321 0.674888,0.0937 3.250993,-0.0364 4.025278,-0.20197 z\",\n    fill: \"#000000\"\n  })));\n};\n\n//# sourceURL=webpack:///./src/helpers/icons.js?");

/***/ }),

/***/ "./src/meme-block.js":
/*!***************************!*\
  !*** ./src/meme-block.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_icons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/icons.js */ \"./src/helpers/icons.js\");\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    Icon = _wp$components.Icon,\n    SelectControl = _wp$components.SelectControl,\n    RangeControl = _wp$components.RangeControl;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    AlignmentToolbar = _wp$editor.AlignmentToolbar,\n    BlockControls = _wp$editor.BlockControls,\n    InspectorControls = _wp$editor.InspectorControls;\nvar __ = wp.i18n.__;\nvar icon = /*#__PURE__*/React.createElement(Icon, {\n  icon: _helpers_icons_js__WEBPACK_IMPORTED_MODULE_0__[\"memeBlockIcon\"]\n});\nregisterBlockType('meme-block/meme-block', {\n  title: 'Meme Block',\n  icon: icon,\n  category: 'media',\n  attributes: {\n    memeType: {\n      type: 'string',\n      \"default\": '61579'\n    },\n    topText: {\n      type: 'array',\n      source: 'children',\n      selector: 'h3.meme-block-top-text'\n    },\n    bottomText: {\n      type: 'array',\n      source: 'children',\n      selector: 'h3.meme-block-bottom-text'\n    },\n    topTextAlignment: {\n      type: 'string',\n      \"default\": 'center'\n    },\n    bottomTextAlignment: {\n      type: 'string',\n      \"default\": 'center'\n    },\n    padding: {\n      type: 'int',\n      \"default\": '20'\n    }\n  },\n  example: {\n    attributes: {\n      topText: __('ONE DOES NOT SIMPLY IGNORE', 'meme-block'),\n      bottomText: __('THIS COOL BLOCK', 'meme-block'),\n      topTextAlignment: 'center',\n      bottomTextAlignment: 'center',\n      memeType: '61579',\n      padding: 20\n    }\n  },\n  edit: function edit(props) {\n    var _props$attributes = props.attributes,\n        padding = _props$attributes.padding,\n        topText = _props$attributes.topText,\n        bottomText = _props$attributes.bottomText,\n        topTextAlignment = _props$attributes.topTextAlignment,\n        bottomTextAlignment = _props$attributes.bottomTextAlignment,\n        memeType = _props$attributes.memeType;\n\n    var onChangeMeme = function onChangeMeme(newMeme) {\n      props.setAttributes({\n        memeType: newMeme\n      });\n    };\n\n    var onChangeTopText = function onChangeTopText(newContent) {\n      props.setAttributes({\n        topText: newContent\n      });\n    };\n\n    var onChangeBottomText = function onChangeBottomText(newContent) {\n      props.setAttributes({\n        bottomText: newContent\n      });\n    };\n\n    var onChangeBottomAlignment = function onChangeBottomAlignment(newAlignment) {\n      props.setAttributes({\n        bottomTextAlignment: newAlignment === undefined ? 'none' : newAlignment\n      });\n    };\n\n    var onChangeTopAlignment = function onChangeTopAlignment(newAlignment) {\n      props.setAttributes({\n        topTextAlignment: newAlignment === undefined ? 'none' : newAlignment\n      });\n    };\n\n    var onChangePadding = function onChangePadding(newPadding) {\n      props.setAttributes({\n        padding: newPadding\n      });\n    };\n\n    var memeSrc = memeData.filter(function (obj) {\n      return obj.value === props.attributes.memeType;\n    })[0].url;\n    var modalStyle = {\n      padding: padding\n    };\n    return /*#__PURE__*/React.createElement(\"div\", {\n      className: \"meme-block-wrapper\"\n    }, /*#__PURE__*/React.createElement(\"img\", {\n      className: \"meme-block-image\",\n      src: memeSrc\n    }), /*#__PURE__*/React.createElement(\"div\", {\n      className: \"meme-block-text-wrapper\",\n      style: modalStyle\n    }, /*#__PURE__*/React.createElement(RichText, {\n      className: \"meme-block-top-text\",\n      style: {\n        textAlign: topTextAlignment\n      },\n      tagName: \"h3\",\n      onChange: onChangeTopText,\n      value: topText\n    }), /*#__PURE__*/React.createElement(RichText, {\n      className: \"meme-block-bottom-text\",\n      style: {\n        textAlign: bottomTextAlignment\n      },\n      tagName: \"h3\",\n      onChange: onChangeBottomText,\n      value: bottomText\n    })), /*#__PURE__*/React.createElement(BlockControls, null, /*#__PURE__*/React.createElement(AlignmentToolbar, {\n      value: topTextAlignment,\n      onChange: onChangeTopAlignment\n    }), /*#__PURE__*/React.createElement(AlignmentToolbar, {\n      value: bottomTextAlignment,\n      onChange: onChangeBottomAlignment\n    })), /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {\n      title: __('General settings', 'neve'),\n      intialOpen: true\n    }, /*#__PURE__*/React.createElement(SelectControl, {\n      label: __('Meme type:'),\n      value: memeType // e.g: value = [ 'a', 'c' ]\n      ,\n      onChange: onChangeMeme,\n      options: memeData\n    }), /*#__PURE__*/React.createElement(RangeControl, {\n      label: __('Padding:', 'neve'),\n      value: padding,\n      onChange: onChangePadding,\n      min: 0,\n      max: 300\n    }))));\n  },\n  save: function save(props) {\n    var memeSrc = memeData.filter(function (obj) {\n      return obj.value === props.attributes.memeType;\n    })[0].url;\n    var modalStyle = {\n      padding: props.attributes.padding\n    };\n    return /*#__PURE__*/React.createElement(\"div\", {\n      className: \"meme-block-wrapper\"\n    }, /*#__PURE__*/React.createElement(\"img\", {\n      className: \"meme-block-image\",\n      src: memeSrc\n    }), /*#__PURE__*/React.createElement(\"div\", {\n      className: \"meme-block-text-wrapper\",\n      style: modalStyle\n    }, /*#__PURE__*/React.createElement(RichText.Content, {\n      className: \"meme-block-top-text meme-block-top-align-\".concat(props.attributes.topTextAlignment),\n      tagName: \"h3\",\n      value: props.attributes.topText\n    }), /*#__PURE__*/React.createElement(RichText.Content, {\n      className: \"meme-block-bottom-text meme-block-bottom-align-\".concat(props.attributes.bottomTextAlignment),\n      tagName: \"h3\",\n      value: props.attributes.bottomText\n    })));\n  }\n});\n\n//# sourceURL=webpack:///./src/meme-block.js?");

/***/ })

/******/ });