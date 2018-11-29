(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["Dialog"] = factory(require("react"));
	else
		root["Dialog"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _Input = __webpack_require__(1);

	module.exports = { Input: _Input.Input, NumericInput: _Input.NumericInput, InterInput: _Input.InterInput, PosInterInput: _Input.PosInterInput, LetterInput: _Input.LetterInput, ThousandInput: _Input.ThousandInput, InputContainer: _Input.InputContainer }; //使用module.exports时，从es6到es5生成的dist不会出现export.default的问题.
	/*
	 * Created with Visual Studio Code.
	 * github: https://github.com/React-Plugin/x-seed
	 * User: 田想兵
	 * Date: 2017-05-14
	 * Time: 20:00:00
	 * Contact: 55342775@qq.com
	 */

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ThousandInput = exports.LetterInput = exports.PosInterInput = exports.InterInput = exports.NumericInput = exports.InputContainer = exports.Input = undefined;

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	    return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	        var source = arguments[i];for (var key in source) {
	            if (Object.prototype.hasOwnProperty.call(source, key)) {
	                target[key] = source[key];
	            }
	        }
	    }return target;
	};

	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}

	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	} /*
	   * Created with Visual Studio Code.
	   * github: https://github.com/React-xui/x-input
	   * User: 田想兵
	   * Date: 2018-11-27
	   * Time: 20:00:00
	   * Contact: 55342775@qq.com
	   */

	//文本输入框
	var Input = exports.Input = function (_Component) {
	    _inherits(Input, _Component);

	    function Input(props) {
	        _classCallCheck(this, Input);

	        var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

	        _this.state = { value: props.value || "" };
	        _this.onChangeHandle = _this.onChangeHandle.bind(_this);
	        return _this;
	    }

	    _createClass(Input, [{
	        key: "onChangeHandle",
	        value: function onChangeHandle(e) {
	            var value = e.target.value;

	            this.setState({ value: value });
	            this.props.onChange && this.props.onChange(e, value);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var cls = (this.props.className || "") + ' x-input';
	            var newProps = _extends({}, this.props);
	            delete newProps['className'];
	            delete newProps['decimals'];
	            delete newProps['onChange'];
	            return _react2.default.createElement("input", _extends({ className: cls, onChange: this.onChangeHandle, value: this.state.value }, newProps));
	        }
	    }]);

	    return Input;
	}(_react.Component);

	// export class NumericInput extends Component{
	//     render(){
	//         let reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
	//         return <Input reg={reg} />
	//     }
	// }


	var InputContainer = function InputContainer(WrappedComponnet) {
	    var reg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
	    return function (_Component2) {
	        _inherits(_class, _Component2);

	        function _class(props) {
	            _classCallCheck(this, _class);

	            var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

	            _this2.state = { value: props.value || "" };
	            _this2.decimals = props.decimals;
	            _this2.onChangeHandle = _this2.onChangeHandle.bind(_this2);
	            return _this2;
	        }

	        _createClass(_class, [{
	            key: "onChangeHandle",
	            value: function onChangeHandle(e) {
	                var _this3 = this;

	                var value = e.target.value;

	                var arr = value.split('.');
	                if (arr.length > 1) {
	                    value = arr[0] + '.' + arr[1].substr(0, this.decimals);
	                }

	                if (!reg || reg.test(value) || value === '') {
	                    this.setState({ value: value }, function () {
	                        _this3.props.onChange && _this3.props.onChange(value);
	                    });
	                }
	            }
	        }, {
	            key: "UNSAFE_componentWillReceiveProps",
	            value: function UNSAFE_componentWillReceiveProps(newProps, newState) {
	                if (newProps.value != this.state.value) {
	                    this.setState({ value: newProps.value });
	                }
	            }
	        }, {
	            key: "render",
	            value: function render() {
	                var newProps = {
	                    onChange: this.onChangeHandle,
	                    value: this.state.value
	                };
	                var props = _extends({}, this.props, newProps);
	                return _react2.default.createElement(WrappedComponnet, props);
	            }
	        }]);

	        return _class;
	    }(_react.Component);
	};
	var NumericInput = InputContainer(Input); //数字
	var InterInput = InputContainer(Input, /^-?(0|[1-9][0-9]*)$/); //整数
	var PosInterInput = InputContainer(Input, /^(0|[1-9][0-9]*)$/); //正整数
	var LetterInput = InputContainer(Input, /^[a-zA-Z]+$/); //正整数

	var setCaretPosition = function setCaretPosition(tObj, sPos) {
	    if (tObj.setSelectionRange) {
	        setTimeout(function () {
	            tObj.setSelectionRange(sPos, sPos);
	            tObj.focus();
	        }, 0);
	    } else if (tObj.createTextRange) {
	        var rng = tObj.createTextRange();
	        rng.move('character', sPos);
	        rng.select();
	    }
	};
	//获取当前光标位置
	var getPosition = function getPosition(element) {
	    var cursorPos = 0;
	    if (document.selection) {
	        //IE
	        var selectRange = document.selection.createRange();
	        selectRange.moveStart('character', -element.value.length);
	        cursorPos = selectRange.text.length;
	    } else if (element.selectionStart || element.selectionStart == '0') {
	        cursorPos = element.selectionStart;
	    }
	    return cursorPos;
	};
	var FormatContainer = function FormatContainer(WrappedComponnet, format) {
	    return function (_NumericInput) {
	        _inherits(_class2, _NumericInput);

	        function _class2() {
	            _classCallCheck(this, _class2);

	            return _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).apply(this, arguments));
	        }

	        _createClass(_class2, [{
	            key: "onChangeHandle",
	            value: function onChangeHandle(e, v) {
	                var _this5 = this;

	                var value = format(e.target.value.replace(/\,/g, ''), this.props);
	                var target = e.target;
	                var len = target.value.length;
	                var pos = getPosition(target);
	                var rightpos = len - pos; //算出从右计算的光标位置
	                this.setState({ value: value }, function () {
	                    var tmp = _this5.state.value.length - rightpos;
	                    setCaretPosition(target, tmp);
	                    _this5.props.onChange && _this5.props.onChange(value);
	                });
	            }
	        }]);

	        return _class2;
	    }(NumericInput);
	};

	var formatThousandthNumber = function formatThousandthNumber(num, _ref) {
	    var decimals = _ref.decimals;

	    // number = number.replace(/\,/g,'');
	    num = String(num);
	    var arr = num.split('.');
	    var number = arr[0];
	    // let decimals  = arr.length>1 ?arr[1].length:0;
	    if ((typeof number === "undefined" ? "undefined" : _typeof(number)) == undefined) return '';
	    if (!number && number !== 0) {
	        return '';
	    } else {
	        number = (number + '').replace(/[^0-9+-Ee.]/g, '');
	        var n = !isFinite(+number) ? 0 : +number,
	            prec = 0,
	            sep = ',',
	            dec = '.',
	            s = '';
	        s = (prec ? n.fromFixed(prec) : '' + Math.round(n)).split('.');
	        var re = /(-?\d+)(\d{3})/;
	        while (re.test(s[0])) {
	            s[0] = s[0].replace(re, "$1" + sep + "$2");
	        }

	        if ((s[1] || '').length < prec) {
	            s[1] = s[1] || '';
	            s[1] += new Array(prec - s[1].length + 1).join('0');
	        }
	        var str = s.join(dec);
	        if (arr.length > 1) {
	            str += '.' + arr[1].substr(0, decimals).replace(/[^0-9]/ig, "");
	        }
	        return str;
	    }
	};
	var ThousandInput = FormatContainer(Input, formatThousandthNumber);
	exports.InputContainer = InputContainer;
	exports.NumericInput = NumericInput;
	exports.InterInput = InterInput;
	exports.PosInterInput = PosInterInput;
	exports.LetterInput = LetterInput;
	exports.ThousandInput = ThousandInput;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ })
/******/ ])
});
;