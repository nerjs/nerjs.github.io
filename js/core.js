webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(104);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(5);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var IconBase = function IconBase(_ref, _ref2) {
  var children = _ref.children;
  var color = _ref.color;
  var size = _ref.size;
  var style = _ref.style;
  var width = _ref.width;
  var height = _ref.height;

  var props = _objectWithoutProperties(_ref, ['children', 'color', 'size', 'style', 'width', 'height']);

  var _ref2$reactIconBase = _ref2.reactIconBase;
  var reactIconBase = _ref2$reactIconBase === undefined ? {} : _ref2$reactIconBase;

  var computedSize = size || reactIconBase.size || '1em';
  return _react2.default.createElement('svg', _extends({
    children: children,
    fill: 'currentColor',
    preserveAspectRatio: 'xMidYMid meet',
    height: height || computedSize,
    width: width || computedSize
  }, reactIconBase, props, {
    style: _extends({
      verticalAlign: 'middle',
      color: color || reactIconBase.color
    }, reactIconBase.style || {}, style)
  }));
};

IconBase.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  style: _propTypes2.default.object
};

IconBase.contextTypes = {
  reactIconBase: _propTypes2.default.shape(IconBase.propTypes)
};

exports.default = IconBase;
module.exports = exports['default'];

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(25);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(215), __esModule: true };

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(104);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(182), __esModule: true };

/***/ }),
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.Container = __webpack_require__(214);
exports.modalsReduser = __webpack_require__(230);

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(219), __esModule: true };

/***/ }),
/* 116 */,
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty2 = __webpack_require__(71);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = __webpack_require__(0);

var Form = function (_React$Component) {
	(0, _inherits3.default)(Form, _React$Component);

	function Form(props) {
		(0, _classCallCheck3.default)(this, Form);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Form.__proto__ || (0, _getPrototypeOf2.default)(Form)).call(this, props));

		_this.state = {
			a: _this.props.a,
			b: _this.props.b,
			modal: _this.props.name,
			id: _this.props._id
		};

		_this.openM = _this.openM.bind(_this);
		_this.updateM = _this.updateM.bind(_this);
		_this.upM = _this.upM.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(Form, [{
		key: 'change',
		value: function change(name) {
			this.setState((0, _defineProperty3.default)({}, name, this.refs[name].value));
		}
	}, {
		key: 'openM',
		value: function openM() {
			var _state = this.state,
			    a = _state.a,
			    b = _state.b,
			    modal = _state.modal;

			this.props.dispatch({
				type: 'modal:' + modal,
				payload: { a: a, b: b }
			});
		}
	}, {
		key: 'updateM',
		value: function updateM() {
			var _state2 = this.state,
			    a = _state2.a,
			    b = _state2.b,
			    id = _state2.id;

			this.props.dispatch({
				type: 'modal:update',
				payload: {
					id: Number(id),
					a: a, b: b
				}
			});
		}
	}, {
		key: 'upM',
		value: function upM() {
			this.props.dispatch({
				type: 'modal:up',
				payload: Number(this.state.id)
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var ids = this.props._row.map(function (m) {
				return m.id;
			});
			if (ids.indexOf(this.props._id) < 0) {
				ids.push(this.props._id);
			}

			return React.createElement(
				'div',
				{ className: 'Form' },
				React.createElement(
					'table',
					{ className: 'table table-bordered table-striped table-dark' },
					React.createElement(
						'tbody',
						null,
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								null,
								'name'
							),
							React.createElement(
								'td',
								null,
								this.props.name
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								null,
								'_id'
							),
							React.createElement(
								'td',
								null,
								this.props._id
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								null,
								'_count'
							),
							React.createElement(
								'td',
								null,
								this.props._row.length
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								null,
								'a'
							),
							React.createElement(
								'td',
								null,
								this.props.a
							)
						),
						React.createElement(
							'tr',
							null,
							React.createElement(
								'td',
								null,
								'b'
							),
							React.createElement(
								'td',
								null,
								this.props.b
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'container-fluid' },
					React.createElement(
						'div',
						{ className: 'row' },
						React.createElement(
							'div',
							{ className: 'col' },
							React.createElement(
								'div',
								{ className: 'input-group input-group-sm' },
								React.createElement(
									'div',
									{ className: 'input-group-prepend' },
									React.createElement(
										'span',
										{ className: 'input-group-text' },
										'a'
									)
								),
								React.createElement('input', { onChange: function onChange() {
										return _this2.change('a');
									}, ref: 'a', defaultValue: this.state.a, type: 'text', className: 'form-controll' })
							)
						),
						React.createElement(
							'div',
							{ className: 'col' },
							React.createElement(
								'div',
								{ className: 'input-group input-group-sm' },
								React.createElement(
									'div',
									{ className: 'input-group-prepend' },
									React.createElement(
										'span',
										{ className: 'input-group-text' },
										'b'
									)
								),
								React.createElement('input', { onChange: function onChange() {
										return _this2.change('b');
									}, ref: 'b', defaultValue: this.state.b, type: 'text', className: 'form-controll' })
							)
						),
						React.createElement(
							'div',
							{ className: 'col' },
							React.createElement(
								'div',
								{ className: 'input-group input-group-sm' },
								React.createElement(
									'div',
									{ className: 'input-group-prepend' },
									React.createElement(
										'label',
										{ className: 'input-group-text', htmlFor: 'modal' },
										'modal:'
									)
								),
								React.createElement(
									'select',
									{ defaultValue: this.props.name, ref: 'modal', onChange: function onChange() {
											return _this2.change('modal');
										}, className: 'custom-select', id: 'modal' },
									React.createElement(
										'option',
										{ value: 'test' },
										'test'
									),
									React.createElement(
										'option',
										{ value: 'discussion' },
										'discussion'
									)
								),
								React.createElement(
									'button',
									{ onClick: this.openM, className: 'btn btn-outline-primary' },
									'push'
								)
							)
						),
						React.createElement(
							'div',
							{ className: 'col offset-1' },
							React.createElement(
								'div',
								{ className: 'input-group input-group-sm' },
								React.createElement(
									'button',
									{ onClick: this.updateM, className: 'btn btn-outline-warning' },
									'update'
								),
								React.createElement(
									'select',
									{ defaultValue: this.props._id, ref: 'id', onChange: function onChange() {
											return _this2.change('id');
										}, className: 'custom-select', id: 'modal' },
									ids.map(function (id) {
										return React.createElement(
											'option',
											{ key: id, value: id },
											id
										);
									})
								),
								React.createElement(
									'button',
									{ onClick: this.upM, className: 'btn btn-outline-danger' },
									'push'
								)
							)
						)
					)
				)
			);
		}
	}]);
	return Form;
}(React.Component);

module.exports = Form;

/***/ }),
/* 118 */,
/* 119 */,
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDisplay = function getDisplay() {
	var w = document.documentElement.clientWidth;
	if (w < 545) return 'xs';
	if (w < 767) return 'sm';
	if (w < 993) return 'md';
	if (w < 1201) return 'lg';

	return 'xl';
};

exports = module.exports = function (store) {
	window.addEventListener('resize', function () {
		var o = store.getState().main.display;
		var n = getDisplay();
		if (o != n) {
			store.dispatch({
				type: 'display',
				payload: n
			});
		}
	});
};

exports.getDisplay = getDisplay;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(73);
module.exports = __webpack_require__(122);


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);
var render = __webpack_require__(76).render;

var _require = __webpack_require__(12),
    Provider = _require.Provider;

var _require2 = __webpack_require__(16),
    HashRouter = _require2.HashRouter;

var eId = document.getElementById('app');
__webpack_require__(98);
__webpack_require__(99);

var App = __webpack_require__(178);
var store = __webpack_require__(276);

render(React.createElement(
	Provider,
	{ store: store },
	React.createElement(
		HashRouter,
		{ basename: '/' },
		React.createElement(App, null)
	)
), eId);

/***/ }),
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = __webpack_require__(0);

var _require = __webpack_require__(16),
    Link = _require.Link;

var _require2 = __webpack_require__(12),
    connect = _require2.connect;

__webpack_require__(213);

var _require3 = __webpack_require__(113),
    Container = _require3.Container;

var modals = __webpack_require__(242);
var Header = __webpack_require__(249);
var Page = __webpack_require__(258);
var Footer = __webpack_require__(275);

var App = function (_React$Component) {
	(0, _inherits3.default)(App, _React$Component);

	function App(props) {
		(0, _classCallCheck3.default)(this, App);
		return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));
	}

	(0, _createClass3.default)(App, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				Container,
				{ id: 'root', className: 'root', modals: modals },
				React.createElement(Header, null),
				React.createElement(Page, null),
				React.createElement(Footer, null)
			);
		}
	}]);
	return App;
}(React.Component);

module.exports = App;

/***/ }),
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(183);
var $Object = __webpack_require__(8).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(14);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(18), 'Object', { defineProperty: __webpack_require__(15).f });


/***/ }),
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends2 = __webpack_require__(24);

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__(114);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = __webpack_require__(0);
var Modal = __webpack_require__(218);
var propTypes = __webpack_require__(5);

var _require = __webpack_require__(12),
    connect = _require.connect;

var i = false;

var ContainerForModal = function (_React$Component) {
	(0, _inherits3.default)(ContainerForModal, _React$Component);

	function ContainerForModal(props) {
		(0, _classCallCheck3.default)(this, ContainerForModal);

		var _this = (0, _possibleConstructorReturn3.default)(this, (ContainerForModal.__proto__ || (0, _getPrototypeOf2.default)(ContainerForModal)).call(this, props));

		_this.root = {
			isFixed: false,
			top: 0,
			scroll: 0
		};
		return _this;
	}

	(0, _createClass3.default)(ContainerForModal, [{
		key: 'componentDidUpdate',
		value: function componentDidUpdate(np, ns, s) {
			if (this.root.scroll > 0) {
				window.scrollTo(0, this.root.scroll == 1 ? this.root.top : 0);
				this.root.scroll = 0;
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(np) {
			if (this.props.modalData.open == np.modalData.open) return;

			if (np.modalData.open) {
				this.root = {
					isFixed: true,
					top: window.pageYOffset,
					w: document.documentElement.clientWidth,
					scroll: 2
				};

				if (this.root.pr < 0) this.root.pr = 0;
			} else {
				this.root = {
					isFixed: false,
					top: this.root.top,
					pr: 0,
					scroll: 1
				};
			}
		}
	}, {
		key: 'getStyle',
		value: function getStyle() {
			return {
				position: this.root.isFixed ? 'fixed' : 'relative',
				top: this.root.isFixed ? '-' + this.root.top + 'px' : 0,
				zIndex: 1,
				left: 0,
				width: this.root.isFixed ? this.root.w : '100%'
				// paddingRight : this.root.pr
			};
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    modals = _props.modals,
			    layerOpacity = _props.layerOpacity,
			    layerColor = _props.layerColor,
			    style = _props.style,
			    modalData = _props.modalData,
			    dispatch = _props.dispatch,
			    propsRoot = (0, _objectWithoutProperties3.default)(_props, ['modals', 'layerOpacity', 'layerColor', 'style', 'modalData', 'dispatch']);

			var propsModal = {
				modals: modals,
				layerOpacity: layerOpacity,
				layerColor: layerColor,
				modalData: modalData,
				dispatch: dispatch
			};
			return React.createElement(
				'div',
				{ id: '__root', style: {
						position: 'relative',
						width: '100%',
						zIndex: 1
					} },
				React.createElement(
					'div',
					(0, _extends3.default)({}, propsRoot, { style: this.getStyle() }),
					this.props.children
				),
				React.createElement(Modal, propsModal)
			);
		}
	}]);
	return ContainerForModal;
}(React.Component);

ContainerForModal.defaultProps = {
	layerOpacity: 30,
	layerColor: '#000'
};

ContainerForModal.propTypes = {
	modals: propTypes.object.isRequired,
	layerOpacity: propTypes.number,
	layerColor: propTypes.string
};

module.exports = connect(function (state) {
	return { modalData: state.modals };
})(ContainerForModal);

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(216);
module.exports = __webpack_require__(8).Object.assign;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(14);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(217) });


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(32);
var gOPS = __webpack_require__(69);
var pIE = __webpack_require__(42);
var toObject = __webpack_require__(29);
var IObject = __webpack_require__(109);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(22)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends2 = __webpack_require__(24);

var _extends3 = _interopRequireDefault(_extends2);

var _keys = __webpack_require__(115);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = __webpack_require__(0);

var _require = __webpack_require__(12),
    connect = _require.connect;

var CloseButton = __webpack_require__(221);
var parseSettings = __webpack_require__(222);
var isFunction = __webpack_require__(44);

var RootModal = function (_React$Component) {
	(0, _inherits3.default)(RootModal, _React$Component);

	function RootModal(props) {
		(0, _classCallCheck3.default)(this, RootModal);

		var _this = (0, _possibleConstructorReturn3.default)(this, (RootModal.__proto__ || (0, _getPrototypeOf2.default)(RootModal)).call(this, props));

		_this.state = {
			open: false,
			id: 0,
			name: '',
			options: {},
			myData: null,
			is: false,
			settings: {}
		};

		_this.modals = props.modals;
		_this.modalsSettings = {};
		(0, _keys2.default)(props.modals).forEach(function (key) {
			_this.modalsSettings[key] = parseSettings(props.modals[key]);
			_this.state.settings[key] = parseSettings(props.modals[key]);
		});

		props.dispatch({
			type: 'modal:__list',
			payload: (0, _keys2.default)(props.modals)
		});

		_this.settings = {};
		_this.Component = null;

		_this.close = _this.close.bind(_this);
		_this.closeInn = _this.closeInn.bind(_this);
		_this.getComp();
		return _this;
	}

	(0, _createClass3.default)(RootModal, [{
		key: 'getComp',
		value: function getComp() {
			this.Component = this.modals[this.props.modalData.name];
			this.settings = parseSettings(this.Component);
		}
	}, {
		key: 'close',
		value: function close(e, t) {
			var _this2 = this;

			var type = t ? 'reset' : 'close';
			// console.log(e, e.target === this.refs.layer, e.target === this.refs.modal, e.target === this.refs.test)

			if (this.modalsSettings[this.state.name].closeFn && isFunction(this.modalsSettings[this.state.name].closeFn)) {
				this.modalsSettings[this.state.name].closeFn(type, function (myData) {
					_this2.setState({ myData: myData });
				}, function () {
					_this2.props.dispatch('modal:' + type);
				});
			} else {
				this.props.dispatch('modal:' + type);
			}
		}
	}, {
		key: 'closeInn',
		value: function closeInn(e) {
			if (e.target == this.refs.inner) this.close(e);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(np) {
			var _this3 = this;

			var _np$modalData = np.modalData,
			    open = _np$modalData.open,
			    id = _np$modalData.id,
			    name = _np$modalData.name,
			    options = _np$modalData.options;


			if (np.modalData.open && !this.state.open) {
				this.state.open = true, this.state.is = true;
				this.state.id = id;
				this.state.name = name;
				this.state.myData = this.state.settings[name].myData;
				this.state.options = options;
				return;
			}

			if (!np.modalData.open && this.state.open) {
				this.state.open = false, this.state.is = true;
				this.state.id = id;
				this.state.name = name;
				this.state.options = {};
				this.state.myData = null;
				return;
			}

			if (!np.modalData.open) return;

			if (this.state.id != np.modalData.id) {
				if (np.modalData.row.length > 0 && np.modalData.row[np.modalData.row.length - 1].id == this.state.id && this.state.settings[name].closeFn && isFunction(this.state.settings[name].closeFn)) {
					var t = Date.now();

					this.state.settings[name].closeFn('replace', function (md) {
						if (t == Date.now()) {
							_this3.state.myData = md;
						} else {
							_this3.setState({
								myData: md
							});
						}
					}, function () {
						if (t == Date.now()) {
							_this3.state.is = false;
						} else {
							_this3.setState({ is: false });
						}
					});
					this.state.is = true;
				} else {
					this.state.is = false;
				}
			}
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			if (!this.state.is) {
				this.getComp();
				var _props$modalData = this.props.modalData,
				    id = _props$modalData.id,
				    name = _props$modalData.name,
				    options = _props$modalData.options;

				this.setState({
					myData: this.settings.myData,
					is: true,
					id: id,
					name: name,
					options: options
				});
			}
		}
	}, {
		key: 'getLayer',
		value: function getLayer() {
			var settings = this.modalsSettings[this.props.modalData.name];
			if (!settings.layer) return null;

			var props = {
				id: '_modal-layer',
				style: {
					position: 'fixed',
					top: 0,
					right: 0,
					left: 0,
					bottom: 0,
					backgroundColor: settings.layerColor || this.props.layerColor,
					opacity: (settings.layerOpacity || this.props.layerOpacity) / 100,
					zIndex: 2
				}
			};

			if (settings.layerClose) {
				props.onClick = this.close;
			}

			return React.createElement('div', props);
		}
	}, {
		key: 'getCloseButton',
		value: function getCloseButton() {
			var settings = this.modalsSettings[this.props.modalData.name];
			if (!settings.closeButton) return null;

			var opacity = settings.layerOpacity || this.props.layerOpacity;
			if (opacity > 99) {
				opacity = 100;
			} else {
				opacity = Math.round(opacity + (100 - opacity) / 1.5) / 100;
			}

			return React.createElement(
				'div',
				{ id: '_modal-close',
					className: 'modal-close',
					onClick: this.close,
					style: {
						position: 'fixed',
						top: '0.4em',
						right: '0.4em',
						width: '2.8em',
						height: '2.8em',
						cursor: 'pointer',
						zIndex: 4,
						borderRadius: 7,
						opacity: opacity,
						boxShadow: '0 0 6px rgba(0,0,0,.4)'
					} },
				React.createElement(CloseButton, { style: {
						width: '100%',
						height: '100%',
						fill: settings.layerColor || this.props.layerColor
					} })
			);
		}
	}, {
		key: 'render',
		value: function render() {

			if (!this.state.open) return null;

			var Component = this.modals[this.state.name];
			var innerProps = {
				id: '_modal-inner',
				ref: 'inner',
				style: {
					position: 'relative',
					width: '100%',
					border: '1px solid transparent',
					zIndex: 3
				}
			};

			if (this.modalsSettings[this.props.modalData.name] && this.modalsSettings[this.props.modalData.name].layerClose) {
				innerProps.onClick = this.closeInn;
			}

			return React.createElement(
				React.Fragment,
				null,
				this.getLayer(),
				this.getCloseButton(),
				React.createElement(
					'div',
					innerProps,
					Component && this.state.is ? React.createElement(Component, (0, _extends3.default)({}, this.state.options, {
						_id: this.state.id,
						_row: this.props.modalData.row,
						_myData: this.state.myData,
						dispatch: this.props.dispatch,
						modalClose: this.close
					})) : null
				)
			);
		}
	}]);
	return RootModal;
}(React.Component);

module.exports = RootModal;

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(220);
module.exports = __webpack_require__(8).Object.keys;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(29);
var $keys = __webpack_require__(32);

__webpack_require__(101)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(11);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaClose = function FaClose(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm33.5 29.5q0 0.9-0.7 1.5l-3 3.1q-0.6 0.6-1.5 0.6t-1.5-0.6l-6.6-6.6-6.5 6.6q-0.7 0.6-1.6 0.6t-1.5-0.6l-3-3.1q-0.6-0.6-0.6-1.5t0.6-1.5l6.5-6.6-6.5-6.5q-0.6-0.7-0.6-1.6t0.6-1.5l3-3q0.6-0.6 1.5-0.6t1.6 0.6l6.5 6.6 6.6-6.6q0.6-0.6 1.5-0.6t1.5 0.6l3.1 3q0.6 0.7 0.6 1.5t-0.6 1.6l-6.6 6.5 6.6 6.6q0.6 0.6 0.6 1.5z' })
        )
    );
};

exports.default = FaClose;
module.exports = exports['default'];

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = __webpack_require__(25);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isObject = __webpack_require__(33);
var isFunction = __webpack_require__(44);

var defSettings = {
	closeButton: true,
	layer: true,
	layerClose: true,
	layerColor: null,
	layerOpacity: null,
	myData: null
};

module.exports = function (comp) {
	var settings = void 0;

	if (!comp) {
		settings = {};
	} else if (isFunction(comp.modalSettings)) {
		settings = comp.modalSettings();
	} else if (isObject(comp.modalSettings)) {
		settings = comp.modalSettings;
	}
	return (0, _assign2.default)({}, defSettings, settings);
};

/***/ }),
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _toConsumableArray2 = __webpack_require__(231);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _objectWithoutProperties2 = __webpack_require__(114);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _assign = __webpack_require__(25);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getKey = __webpack_require__(241);

var def = {
	open: false,
	id: null,
	name: 'other',
	options: {},
	modalNames: [],
	row: []
};

var mClose = function mClose(state) {
	if (!state.open) return state;
	if (state.row.length == 0) {
		return (0, _assign2.default)({}, def, {
			modalNames: state.modalNames
		});
	}

	var _state$row = state.row[state.row.length - 1],
	    id = _state$row.id,
	    options = _state$row.options,
	    name = _state$row.name;

	var row = state.row.filter(function (m) {
		return m.id != id;
	});
	return {
		open: true,
		id: id,
		name: name,
		options: options,
		modalNames: state.modalNames,
		row: row
	};
};

var mUpdate = function mUpdate(state, data) {
	if (!data) return state;
	var id = data.id,
	    no = (0, _objectWithoutProperties3.default)(data, ['id']);

	if (!id) return state;
	if (state.id == id) {
		var options = state.options;

		return (0, _assign2.default)({}, state, {
			options: (0, _assign2.default)({}, options, no)
		});
	}
	return (0, _assign2.default)({}, state, {
		row: state.row.map(function (m) {
			if (m.id != id) return m;
			return (0, _assign2.default)({}, m, {
				options: (0, _assign2.default)({}, m.options, no)
			});
		})
	});
};

var mOpen = function mOpen(state, type, options) {
	var nId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

	if (state.modalNames.indexOf(type) < 0) return state;
	var name = type.split(':')[1];
	var id = nId || getKey();
	var row = [];
	if (state.open) {
		row = [].concat((0, _toConsumableArray3.default)(state.row));
		row.push({
			id: state.id,
			name: state.name,
			options: state.options || {}
		});
	}
	var modalNames = state.modalNames;


	return {
		open: true,
		id: id,
		name: name,
		options: options || {},
		modalNames: modalNames,
		row: row
	};
};

var mUp = function mUp(state, id) {
	if (state.id == id || state.row.length == 0) return state;
	var mod = null;
	var row = state.row.filter(function (m) {
		if (m.id != id) return true;
		mod = m;
		return false;
	});

	if (!mod) return state;
	return mOpen((0, _assign2.default)({}, state, { row: row }), 'modal:' + mod.name, mod.options, mod.id);
};

module.exports = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : def;
	var action = arguments[1];

	switch (action.type) {
		case 'modal:__list':
			if (!Array.isArray(action.payload)) return state;
			return (0, _assign2.default)({}, state, {
				modalNames: action.payload.map(function (v) {
					return 'modal:' + v;
				})
			});
			break;
		case 'modal:close':
			return mClose(state);
			break;
		case 'modal:update':
			return mUpdate(state, action.payload);
			break;
		case 'modal:up':
			return mUp(state, action.payload);
			break;
	}

	return mOpen(state, action.type, action.payload);
};

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(232);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(233), __esModule: true };

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(105);
__webpack_require__(234);
module.exports = __webpack_require__(8).Array.from;


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(59);
var $export = __webpack_require__(14);
var toObject = __webpack_require__(29);
var call = __webpack_require__(235);
var isArrayIter = __webpack_require__(236);
var toLength = __webpack_require__(110);
var createProperty = __webpack_require__(237);
var getIterFn = __webpack_require__(238);

$export($export.S + $export.F * !__webpack_require__(240)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(20);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(31);
var ITERATOR = __webpack_require__(10)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(15);
var createDesc = __webpack_require__(30);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(239);
var ITERATOR = __webpack_require__(10)('iterator');
var Iterators = __webpack_require__(31);
module.exports = __webpack_require__(8).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(64);
var TAG = __webpack_require__(10)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(10)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var count = 0;

module.exports = function () {
	count++;
	return count;
};

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	error: __webpack_require__(243),
	discussion: __webpack_require__(245),
	test: __webpack_require__(247)
};

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(115);

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = __webpack_require__(0);
__webpack_require__(244);

var ErrorModal = function (_React$Component) {
	(0, _inherits3.default)(ErrorModal, _React$Component);

	function ErrorModal(props) {
		(0, _classCallCheck3.default)(this, ErrorModal);

		var _this = (0, _possibleConstructorReturn3.default)(this, (ErrorModal.__proto__ || (0, _getPrototypeOf2.default)(ErrorModal)).call(this, props));

		_this.state = {
			is: false
		};
		return _this;
	}

	(0, _createClass3.default)(ErrorModal, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			if (!this.props.err || !this.props.err.name) {
				this.props.dispatch(['modal:close', {
					type: 'modal:error',
					payload: {
						err: new Error('prop err in ErrorModal must be Error')
					}
				}]);

				return;
			}
			setTimeout(function () {
				return _this2.setState({ is: true });
			}, 10);
		}
	}, {
		key: 'render',
		value: function render() {
			if (!this.props.err) return null;
			var err = this.props.err;

			var stack = err.stack.split('\n');
			return React.createElement(
				'div',
				{ className: 'error-modal ' + (this.state.is ? 'err-active' : 'err-no-active') },
				React.createElement(
					'div',
					{ className: 'err-modal-info' },
					React.createElement(
						'h3',
						null,
						err.name
					),
					React.createElement(
						'h4',
						null,
						err.message
					),
					React.createElement('hr', null),
					(0, _keys2.default)(err).length == 0 ? null : React.createElement(
						'table',
						{ cellSpacing: 1 },
						React.createElement(
							'thead',
							null,
							React.createElement(
								'tr',
								null,
								React.createElement(
									'th',
									{ className: 'name' },
									'name'
								),
								React.createElement(
									'th',
									{ className: 'value' },
									'value'
								)
							)
						),
						React.createElement(
							'tbody',
							null,
							(0, _keys2.default)(err).filter(function (key) {
								return key;
							}).map(function (key) {
								return React.createElement(
									'tr',
									{ key: key },
									React.createElement(
										'td',
										{ className: 'name' },
										key
									),
									React.createElement(
										'td',
										{ className: 'value' },
										err[key]
									)
								);
							})
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'err-modal-stack' },
					React.createElement(
						'ul',
						null,
						stack.map(function (v) {
							return React.createElement(
								'li',
								{ key: v },
								v
							);
						})
					)
				)
			);
		}
	}]);
	return ErrorModal;
}(React.Component);

ErrorModal.modalSettings = {
	closeButton: true,
	layer: true,
	layerClose: false,
	// layerColor : '#dc3545',
	layerOpacity: 55
};

module.exports = ErrorModal;

/***/ }),
/* 244 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends2 = __webpack_require__(24);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = __webpack_require__(0);
var Form = __webpack_require__(117);
__webpack_require__(246);

var Discussion = function (_React$Component) {
	(0, _inherits3.default)(Discussion, _React$Component);

	function Discussion(props) {
		(0, _classCallCheck3.default)(this, Discussion);
		return (0, _possibleConstructorReturn3.default)(this, (Discussion.__proto__ || (0, _getPrototypeOf2.default)(Discussion)).call(this, props));
	}

	(0, _createClass3.default)(Discussion, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'Discussion' },
				React.createElement(
					'p',
					null,
					'test'
				),
				React.createElement(Form, (0, _extends3.default)({ name: 'discussion' }, this.props))
			);
		}
	}]);
	return Discussion;
}(React.Component);

module.exports = Discussion;

/***/ }),
/* 246 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends2 = __webpack_require__(24);

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__(71);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = __webpack_require__(0);
var Form = __webpack_require__(117);
__webpack_require__(248);
var cl = __webpack_require__(72);

var TestModal = function (_React$Component) {
	(0, _inherits3.default)(TestModal, _React$Component);

	function TestModal(props) {
		(0, _classCallCheck3.default)(this, TestModal);

		var _this = (0, _possibleConstructorReturn3.default)(this, (TestModal.__proto__ || (0, _getPrototypeOf2.default)(TestModal)).call(this, props));

		_this.state = {
			main: false
		};

		return _this;
	}

	(0, _createClass3.default)(TestModal, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			setTimeout(function () {
				return _this2.setState({ main: true });
			}, 1000);
		}
	}, {
		key: 'render',
		value: function render() {
			var _cl;

			console.log('test', this.props._myData);
			var cls = cl('test', (_cl = {
				start: !this.state.main && this.props._myData == 1,
				main: this.state.main && this.props._myData == 1
			}, (0, _defineProperty3.default)(_cl, 'close-test', this.props._myData == 2), (0, _defineProperty3.default)(_cl, 'reset', this.props._myData == 3), _cl));
			return React.createElement(
				'div',
				{ className: cls },
				React.createElement(Form, (0, _extends3.default)({ name: 'test' }, this.props))
			);
		}
	}]);
	return TestModal;
}(React.Component);

TestModal.modalSettings = function () {
	return {
		myData: 1,
		closeFn: function closeFn(type, ss, close) {
			if (type == 'close') {
				ss(2);
			} else {
				ss(3);
			}

			setTimeout(close, 1000);
		}
	};
};

TestModal.closeFn = function (a, b, c) {
	console.log('tm:ms', a, b, c);
	setTimeout(function () {
		return b(111);
	}, 2000);
	setTimeout(function () {
		return c();
	}, 5000);
};

module.exports = TestModal;

/***/ }),
/* 248 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = __webpack_require__(0);

var _require = __webpack_require__(12),
    connect = _require.connect;

var HomeIco = __webpack_require__(250);
var MenuIco = __webpack_require__(251);

var _require2 = __webpack_require__(16),
    Link = _require2.Link;

var InfoBlock = __webpack_require__(252);
__webpack_require__(257);

var Header = function (_React$Component) {
	(0, _inherits3.default)(Header, _React$Component);

	function Header(props) {
		(0, _classCallCheck3.default)(this, Header);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));

		_this.openSidebar = _this.openSidebar.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(Header, [{
		key: 'openSidebar',
		value: function openSidebar() {
			this.props.dispatch('modal:test');
		}
	}, {
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ id: 'header' },
				React.createElement(
					'div',
					{ className: 'icons-block' },
					React.createElement(
						Link,
						{ className: 'icons-link home-link', to: '/' },
						React.createElement(HomeIco, null)
					),
					React.createElement(
						'div',
						{ className: 'icons-link menu-link', onClick: this.openSidebar },
						React.createElement(MenuIco, null)
					)
				),
				React.createElement(
					'h1',
					{ className: 'title' },
					this.props.title
				),
				React.createElement(InfoBlock, null)
			);
		}
	}]);
	return Header;
}(React.Component);

module.exports = connect(function (state) {
	return {
		title: state.main.title,
		display: state.main.display
	};
})(Header);

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(11);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaHome = function FaHome(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm32.9 22.1v10.8q0 0.5-0.4 1t-1 0.4h-8.6v-8.6h-5.7v8.6h-8.6q-0.5 0-1-0.4t-0.4-1v-10.8q0 0 0 0t0-0.1l12.9-10.6 12.8 10.6q0 0.1 0 0.1z m5-1.5l-1.4 1.7q-0.2 0.2-0.4 0.2h-0.1q-0.3 0-0.5-0.2l-15.4-12.8-15.5 12.8q-0.2 0.2-0.5 0.2-0.3 0-0.5-0.2l-1.4-1.7q-0.1-0.2-0.1-0.5t0.2-0.5l16.1-13.4q0.7-0.6 1.7-0.6t1.7 0.6l5.4 4.6v-4.4q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5v9.1l4.9 4.1q0.2 0.2 0.3 0.5t-0.2 0.5z' })
        )
    );
};

exports.default = FaHome;
module.exports = exports['default'];

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(11);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TiThMenu = function TiThMenu(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm31.7 28.3h-23.4c-1.8 0-3.3 1.5-3.3 3.4s1.5 3.3 3.3 3.3h23.4c1.8 0 3.3-1.5 3.3-3.3s-1.5-3.4-3.3-3.4z m0-11.6h-23.4c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3h23.4c1.8 0 3.3-1.5 3.3-3.3s-1.5-3.3-3.3-3.3z m0-11.7h-23.4c-1.8 0-3.3 1.5-3.3 3.3s1.5 3.4 3.3 3.4h23.4c1.8 0 3.3-1.5 3.3-3.4s-1.5-3.3-3.3-3.3z' })
        )
    );
};

exports.default = TiThMenu;
module.exports = exports['default'];

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = __webpack_require__(0);

var _require = __webpack_require__(16),
    withRouter = _require.withRouter;

var CodeIco = __webpack_require__(253);
var CommentIco = __webpack_require__(254);
var BreadcrambIcoVer = __webpack_require__(255);
var BreadcrambIcoGor = __webpack_require__(256);

var InfoBlockHeader = function (_React$Component) {
	(0, _inherits3.default)(InfoBlockHeader, _React$Component);

	function InfoBlockHeader(props) {
		(0, _classCallCheck3.default)(this, InfoBlockHeader);
		return (0, _possibleConstructorReturn3.default)(this, (InfoBlockHeader.__proto__ || (0, _getPrototypeOf2.default)(InfoBlockHeader)).call(this, props));
	}

	(0, _createClass3.default)(InfoBlockHeader, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'info-block' },
				React.createElement(BreadcrambIcoVer, null),
				React.createElement(BreadcrambIcoGor, null),
				React.createElement(CodeIco, null),
				React.createElement(CommentIco, null)
			);
		}
	}]);
	return InfoBlockHeader;
}(React.Component);

module.exports = withRouter(InfoBlockHeader);

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(11);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IoCodeWorking = function IoCodeWorking(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm10 20c0-1.2 0.6-1.9 1.9-1.9s1.9 0.7 1.9 1.9-0.7 1.9-1.9 1.9-1.9-0.6-1.9-1.9z m5.6 0c0-1.2 0.7-1.9 1.9-1.9s1.9 0.7 1.9 1.9-0.6 1.9-1.9 1.9-1.9-0.6-1.9-1.9z m5.7 0c0-1.2 0.6-1.9 1.8-1.9s1.9 0.7 1.9 1.9-0.6 1.9-1.9 1.9-1.8-0.6-1.8-1.9z m-10.7 10.6c-0.5 0-0.9-0.1-1.3-0.5l-8.8-8.8c-0.3-0.4-0.5-0.8-0.5-1.3s0.2-0.9 0.5-1.3l8.8-8.8c0.4-0.4 0.8-0.5 1.3-0.5s1 0.1 1.4 0.5 0.5 0.8 0.5 1.4-0.2 0.9-0.5 1.3l-7.5 7.4 7.5 7.4c0.3 0.4 0.5 0.8 0.5 1.4s-0.2 0.9-0.5 1.3-0.8 0.5-1.4 0.5z m13.8 0c-0.6 0-1-0.1-1.4-0.5s-0.5-0.8-0.5-1.3 0.2-1 0.5-1.4l7.5-7.4-7.5-7.4c-0.3-0.4-0.5-0.8-0.5-1.3s0.2-1 0.5-1.4 0.8-0.5 1.4-0.5 0.9 0.1 1.3 0.5l8.8 8.8c0.3 0.4 0.5 0.8 0.5 1.3s-0.2 0.9-0.5 1.3l-8.8 8.8c-0.4 0.4-0.8 0.5-1.3 0.5z' })
        )
    );
};

exports.default = IoCodeWorking;
module.exports = exports['default'];

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(11);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaCommenting = function FaCommenting(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm14.3 20q0-1.2-0.9-2t-2-0.9-2 0.9-0.8 2 0.8 2 2 0.9 2-0.9 0.9-2z m8.6 0q0-1.2-0.9-2t-2-0.9-2 0.9-0.9 2 0.9 2 2 0.9 2-0.9 0.9-2z m8.5 0q0-1.2-0.8-2t-2-0.9-2 0.9-0.9 2 0.9 2 2 0.9 2-0.9 0.8-2z m8.6 0q0 3.9-2.7 7.2t-7.3 5.2-10 1.9q-2.5 0-4.7-0.4-3.9 3.8-9.7 5.1-1.2 0.2-1.9 0.3-0.3 0-0.5-0.1t-0.3-0.4q-0.1-0.4 0.4-0.9 0.1-0.1 0.5-0.5t0.6-0.5 0.5-0.5 0.6-0.8 0.4-0.8 0.5-1 0.3-1.3 0.3-1.6q-3.3-2.1-5.1-4.9t-1.9-6q0-3.9 2.7-7.2t7.3-5.2 10-1.9 10 1.9 7.3 5.2 2.7 7.2z' })
        )
    );
};

exports.default = FaCommenting;
module.exports = exports['default'];

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(11);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MdMoreVert = function MdMoreVert(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm20 26.6c1.8 0 3.4 1.6 3.4 3.4s-1.6 3.4-3.4 3.4-3.4-1.6-3.4-3.4 1.6-3.4 3.4-3.4z m0-10c1.8 0 3.4 1.6 3.4 3.4s-1.6 3.4-3.4 3.4-3.4-1.6-3.4-3.4 1.6-3.4 3.4-3.4z m0-3.2c-1.8 0-3.4-1.6-3.4-3.4s1.6-3.4 3.4-3.4 3.4 1.6 3.4 3.4-1.6 3.4-3.4 3.4z' })
        )
    );
};

exports.default = MdMoreVert;
module.exports = exports['default'];

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(11);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MdMoreHoriz = function MdMoreHoriz(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm20 16.6c1.8 0 3.4 1.6 3.4 3.4s-1.6 3.4-3.4 3.4-3.4-1.6-3.4-3.4 1.6-3.4 3.4-3.4z m10 0c1.8 0 3.4 1.6 3.4 3.4s-1.6 3.4-3.4 3.4-3.4-1.6-3.4-3.4 1.6-3.4 3.4-3.4z m-20 0c1.8 0 3.4 1.6 3.4 3.4s-1.6 3.4-3.4 3.4-3.4-1.6-3.4-3.4 1.6-3.4 3.4-3.4z' })
        )
    );
};

exports.default = MdMoreHoriz;
module.exports = exports['default'];

/***/ }),
/* 257 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);
var Sidebar = __webpack_require__(259);
var Content = __webpack_require__(271);

__webpack_require__(274);

var Page = function Page(props) {

	return React.createElement(
		'div',
		{ id: 'page' },
		React.createElement(Sidebar, { type: 'inner' }),
		React.createElement(Content, null)
	);
};

module.exports = Page;

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = __webpack_require__(25);

var _assign2 = _interopRequireDefault(_assign);

var _extends2 = __webpack_require__(24);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = __webpack_require__(0);

var _require = __webpack_require__(12),
    connect = _require.connect;

var Core = __webpack_require__(260);
__webpack_require__(270);

var Sidebar = function (_React$Component) {
	(0, _inherits3.default)(Sidebar, _React$Component);

	function Sidebar(props) {
		(0, _classCallCheck3.default)(this, Sidebar);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Sidebar.__proto__ || (0, _getPrototypeOf2.default)(Sidebar)).call(this, props));

		_this.state = {
			hide: false
		};
		return _this;
	}

	(0, _createClass3.default)(Sidebar, [{
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			if (this.state.hide && this.refs.sc.offsetParent) {
				this.setState({ hide: false });
			} else if (!this.state.hide && !this.refs.sc.offsetParent) {
				this.setState({ hide: true });
			}
		}
	}, {
		key: 'render',
		value: function render() {
			console.log('render');
			return React.createElement(
				'div',
				{ id: 'sidebar-container', ref: 'sc' },
				this.state.hide ? null : React.createElement(Core, (0, _extends3.default)({}, this.props, { type: 'inner' }))
			);
		}
	}]);
	return Sidebar;
}(React.Component);

module.exports = connect(function (_ref) {
	var menu = _ref.menu;

	return (0, _assign2.default)({}, menu);
})(Sidebar);

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends2 = __webpack_require__(24);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = __webpack_require__(0);
var Loader = __webpack_require__(261);
var Item = __webpack_require__(263);

var MenuSidebar = function (_React$Component) {
	(0, _inherits3.default)(MenuSidebar, _React$Component);

	function MenuSidebar(props) {
		(0, _classCallCheck3.default)(this, MenuSidebar);

		var _this = (0, _possibleConstructorReturn3.default)(this, (MenuSidebar.__proto__ || (0, _getPrototypeOf2.default)(MenuSidebar)).call(this, props));

		_this.state = {
			active: null,
			index: -1
		};

		_this.onClick = _this.onClick.bind(_this);
		_this.winCloseItem = _this.winCloseItem.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(MenuSidebar, [{
		key: 'winCloseItem',
		value: function winCloseItem() {
			console.log('wci');
			this.onClick(null);
		}
	}, {
		key: 'onClick',
		value: function onClick(name) {
			var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

			var sn = name && this.props.types[name] ? name : null;
			if (sn == this.state.active) sn = null;

			if (sn && !this.state.active) {
				window.addEventListener('click', this.winCloseItem);
			} else if (!sn && this.state.active) {
				window.removeEventListener('click', this.winCloseItem);
			}

			if (!name) index = this.state.activeIndex;

			this.setState({ active: sn, index: index });
		}
	}, {
		key: 'coreOnClick',
		value: function coreOnClick(e) {
			e.stopPropagation();
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (!this.props.isLoaded) {
				this.props.dispatch('menu:load');
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			if (!this.props.isLoaded) return React.createElement(
				'div',
				{ id: 'sidebar', className: 'core-sidebar' },
				React.createElement(Loader, { size: 100, label: 'menu' })
			);
			return React.createElement(
				'div',
				{ id: 'sidebar', className: 'core-sidebar ' + (this.state.active ? 'has-open' : ''),
					onClick: this.coreOnClick },
				this.props.ctg.map(function (ctg, i) {
					return React.createElement(Item, (0, _extends3.default)({}, ctg, {
						key: ctg.name || i,
						list: ctg.name && _this2.props.types[ctg.name] ? _this2.props.list.filter(function (val) {
							return val.cat.indexOf(ctg.name) >= 0;
						}) : null,
						onClick: _this2.onClick,
						index: i,
						active: !!(_this2.state.active && _this2.state.active == ctg.name),
						activeIndex: _this2.state.index }));
				})
			);
		}
	}]);
	return MenuSidebar;
}(React.Component);

module.exports = MenuSidebar;

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);
__webpack_require__(262);
module.exports = function (props) {

	return React.createElement(
		'div',
		{ id: 'loader' },
		React.createElement(
			'div',
			{ className: 'loader' },
			'Load...'
		)
	);
};

/***/ }),
/* 262 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = __webpack_require__(0);
var cl = __webpack_require__(72);

var _require = __webpack_require__(264),
    LabelCtg = _require.LabelCtg;

var ListItems = __webpack_require__(268);

var MenuItem = function (_React$Component) {
	(0, _inherits3.default)(MenuItem, _React$Component);

	function MenuItem(props) {
		(0, _classCallCheck3.default)(this, MenuItem);
		return (0, _possibleConstructorReturn3.default)(this, (MenuItem.__proto__ || (0, _getPrototypeOf2.default)(MenuItem)).call(this, props));
	}

	(0, _createClass3.default)(MenuItem, [{
		key: 'onClick',
		value: function onClick() {}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			if (this.props.type == 'hr') return React.createElement('hr', { className: 'sidebar-item-hr' });
			if (!this.props.list || !this.props.list.length) return null;

			var _props = this.props,
			    label = _props.label,
			    name = _props.name,
			    ico = _props.ico,
			    active = _props.active;

			var cls = cl('menu-item', {
				active: this.props.active
			});
			var td = this.props.active || this.props.activeIndex < 0 ? 0 : Math.abs(this.props.index - this.props.activeIndex) * 0.1;

			if (!this.props.active) {}

			return React.createElement(
				'section',
				{ className: cls },
				React.createElement(
					'div',
					{ className: 'menu-label', style: {
							transitionDelay: td + 's'
						},
						onClick: function onClick() {
							return _this2.props.onClick(_this2.props.name, _this2.props.index);
						} },
					React.createElement(LabelCtg, { label: label, name: name, ico: ico, active: active })
				),
				React.createElement(ListItems, { active: active, list: this.props.list })
			);
		}
	}]);
	return MenuItem;
}(React.Component);

module.exports = MenuItem;

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty2 = __webpack_require__(71);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = __webpack_require__(0);
var getIco = __webpack_require__(265);
var Right = __webpack_require__(267);
var cl = __webpack_require__(72);

exports.LabelCtg = function (props) {
	var _cl;

	var cls = cl('label-ctg', 'label-ctg-name-' + props.name, (_cl = {}, (0, _defineProperty3.default)(_cl, 'label-ctg-active', !!props.active), (0, _defineProperty3.default)(_cl, 'with-ico', !!props.ico), _cl));

	var ico = props.ico ? React.createElement(
		'div',
		{ className: 'label-ico label-ctg-ico' },
		getIco(props.ico)
	) : null;

	return React.createElement(
		'div',
		{ className: cls, title: props.label || props.name },
		ico,
		React.createElement(
			'div',
			{ className: 'label-ctg-txt' },
			props.label || props.name
		),
		React.createElement(Right, { className: 'caret', size: 25 })
	);
};

exports.LabelList = function (props) {
	var cls = cl('label-list', 'label-list-name-' + props.name, {
		'width-ico': !!props.ico
	});

	var ico = props.ico ? React.createElement(
		'span',
		{ className: 'label-ico label-list-ico' },
		getIco(props.ico)
	) : null;

	return React.createElement(
		'div',
		{ className: cls },
		ico,
		React.createElement(
			'span',
			{ className: 'label-list-txt' },
			props.name
		)
	);
};

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);

var icons = {};

module.exports = function (name) {
	if (!name) return null;
	var Ico = icons[name] || __webpack_require__(266);
	return React.createElement(Ico, null);
};

window.zzz = module.exports;

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(11);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaBookmarkO = function FaBookmarkO(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm31.2 5.7h-22.8v27.7l11.4-10.9 2 1.9 9.4 9v-27.7z m0.3-2.8q0.5 0 1 0.2 0.7 0.2 1.1 0.9t0.5 1.4v28.7q0 0.8-0.5 1.4t-1.1 0.9q-0.5 0.2-1 0.2-1.1 0-1.9-0.7l-9.8-9.5-9.9 9.5q-0.8 0.7-1.8 0.7-0.5 0-1-0.2-0.7-0.3-1.2-0.9t-0.4-1.4v-28.7q0-0.8 0.4-1.4t1.2-0.9q0.5-0.2 1-0.2h23.4z' })
        )
    );
};

exports.default = FaBookmarkO;
module.exports = exports['default'];

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = __webpack_require__(11);

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FaCaretRight = function FaCaretRight(props) {
    return _react2.default.createElement(
        _reactIconBase2.default,
        _extends({ viewBox: '0 0 40 40' }, props),
        _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement('path', { d: 'm26.4 20q0 0.6-0.5 1l-10 10q-0.4 0.4-1 0.4t-1-0.4-0.4-1v-20q0-0.6 0.4-1t1-0.4 1 0.4l10 10q0.5 0.4 0.5 1z' })
        )
    );
};

exports.default = FaCaretRight;
module.exports = exports['default'];

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);
var ListItem = __webpack_require__(269);

var ListItems = function ListItems(_ref) {
	var list = _ref.list,
	    active = _ref.active;

	return React.createElement(
		'ul',
		{ className: 'list-items' },
		list.map(function (l, i) {
			return React.createElement(
				'li',
				{ key: i, onClick: function onClick() {
						return alert(123);
					},
					className: 'list-item',
					style: {
						transitionDelay: i * 0.1 + 's'
					}
				},
				React.createElement(ListItem, { item: l, index: i })
			);
		})
	);
};

module.exports = ListItems;

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);

var ListItem = function ListItem(props) {

	return React.createElement(
		"div",
		{ className: "ListItem" },
		props.item.name
	);
};

module.exports = ListItem;

/***/ }),
/* 270 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = __webpack_require__(0);

var _require = __webpack_require__(12),
    connect = _require.connect;

var _require2 = __webpack_require__(16),
    Route = _require2.Route,
    Switch = _require2.Switch,
    Link = _require2.Link,
    withRouter = _require2.withRouter;

var Routes = __webpack_require__(272);
var errors = __webpack_require__(273);

var c = 0;

var Content = function (_React$Component) {
	(0, _inherits3.default)(Content, _React$Component);

	function Content(props) {
		(0, _classCallCheck3.default)(this, Content);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Content.__proto__ || (0, _getPrototypeOf2.default)(Content)).call(this, props));

		_this.btn = _this.btn.bind(_this);
		_this.err = _this.err.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(Content, [{
		key: 'btn',
		value: function btn(str, ob) {
			var _this2 = this;

			return function () {
				return _this2.props.disp({
					type: 'modal:' + str,
					payload: ob
				});
			};
		}
	}, {
		key: 'err',
		value: function err(type) {
			var _this3 = this;

			return function () {
				return errors[type](_this3.props.disp);
			};
		}
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			return React.createElement(
				'div',
				{ className: 'Content',
					onScroll: function onScroll(e) {
						return console.log('scroll', e);
					} },
				React.createElement(
					'button',
					{ onClick: function onClick() {
							c++;_this4.props.disp({ type: 'title', payload: c });
						} },
					'click'
				),
				React.createElement('hr', null),
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil animi tenetur ex, amet corrupti ab blanditiis reiciendis quibusdam voluptas laudantium magnam numquam eveniet dicta repudiandae quaerat cupiditate doloremque fugit sit praesentium velit pariatur ad eos recusandae mollitia. Impedit fugit non aperiam veritatis! Sint non fuga quas iure, dolor voluptatem odit et! Porro autem molestiae accusantium voluptatum, nemo reiciendis corrupti quisquam unde odio! Dolores, possimus quas, obcaecati nam porro vel in cumque corrupti exercitationem nihil modi iusto ab, accusamus consequatur asperiores ducimus hic laborum error quam. Et, laborum reprehenderit quasi vel cum iusto odit qui, vero neque accusamus atque ea nemo.',
				React.createElement('hr', null),
				React.createElement(
					Link,
					{ to: '/p/test' },
					' /p/test '
				),
				React.createElement('br', null),
				React.createElement(
					Link,
					{ to: '/p/test/bla' },
					' /p/test/bla '
				),
				React.createElement('br', null),
				React.createElement(
					Link,
					{ to: '/p/test/q/w/e/r/t/y?comment=1' },
					' /p/test/q/w/e/r/t/y '
				),
				React.createElement('br', null),
				React.createElement('hr', null),
				React.createElement(
					Switch,
					null,
					React.createElement(Route, { component: Routes, path: '/p/:name/:targets*' }),
					React.createElement(Route, { path: '/p/:name', component: Routes })
				),
				React.createElement('hr', null),
				React.createElement(
					'div',
					{ className: 'container' },
					React.createElement(
						'div',
						{ className: 'row' },
						React.createElement(
							'div',
							{ className: 'col-2 offset-2' },
							React.createElement(
								'button',
								{ className: 'btn btn-primary btn-block', onClick: this.err('simple') },
								'Error'
							)
						),
						React.createElement(
							'div',
							{ className: 'col-2' },
							React.createElement(
								'button',
								{ className: 'btn btn-secondary btn-block', onClick: this.err('type') },
								'TypeError'
							)
						),
						React.createElement(
							'div',
							{ className: 'col-2' },
							React.createElement(
								'button',
								{ className: 'btn btn-danger btn-block', onClick: this.err('custom') },
								'CustomError'
							)
						),
						React.createElement(
							'div',
							{ className: 'col-2' },
							React.createElement(
								'button',
								{ className: 'btn btn-warning btn-block', onClick: this.err('throw') },
								'throw'
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'container' },
					React.createElement(
						'div',
						{ className: 'row' },
						React.createElement(
							'div',
							{ className: 'col-6 offset-3' },
							React.createElement(
								'div',
								{ className: 'alert alert-info' },
								React.createElement(
									'ul',
									null,
									React.createElement(
										'li',
										null,
										'qwerty 1'
									),
									React.createElement(
										'li',
										null,
										'qwerty 2'
									),
									React.createElement(
										'li',
										null,
										'qwerty 3'
									),
									React.createElement(
										'li',
										null,
										'qwerty 4'
									),
									React.createElement(
										'li',
										null,
										'qwerty 5'
									),
									React.createElement(
										'li',
										null,
										'qwerty 6'
									),
									React.createElement(
										'li',
										null,
										'qwerty 7'
									),
									React.createElement(
										'li',
										null,
										'qwerty 8'
									),
									React.createElement(
										'li',
										null,
										'qwerty 9'
									),
									React.createElement(
										'li',
										null,
										'qwerty 10'
									)
								)
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'container' },
					React.createElement(
						'div',
						{ className: 'row' },
						React.createElement(
							'div',
							{ className: 'col-4' },
							React.createElement(
								'div',
								{ className: 'alert alert-success' },
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea quos, vitae iste qui hic voluptatum voluptas natus obcaecati voluptates mollitia ipsam inventore sunt, excepturi error, similique laudantium itaque quam velit.'
							)
						),
						React.createElement('div', { className: 'col-8' }),
						React.createElement(
							'div',
							{ className: 'col-4 offset-4' },
							React.createElement(
								'div',
								{ className: 'alert alert-secondary' },
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores magnam tempora, explicabo accusantium vero, dolore, earum sunt ipsam temporibus non quidem laudantium aliquid quae vitae natus autem perferendis aliquam nemo doloribus corporis quo nisi labore unde debitis. Quos, officiis!'
							)
						),
						React.createElement('div', { className: 'col-4' }),
						React.createElement(
							'div',
							{ className: 'col-4 offset-8' },
							React.createElement(
								'div',
								{ className: 'alert alert-warning' },
								'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ullam natus sunt ea quasi quis beatae enim veritatis nisi laboriosam voluptate perferendis expedita, error obcaecati reprehenderit, animi ipsam eveniet minus accusantium. Sint ratione voluptates molestias, dolorem repellendus. Dolorem officiis optio magni praesentium dolorum. Eos consectetur iure consequuntur, magni. Illo, eius!'
							)
						)
					)
				)
			);
		}
	}]);
	return Content;
}(React.Component);

module.exports = withRouter(connect(function (state) {
	return {};
}, function (disp) {
	return {
		disp: disp
	};
})(Content));

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = __webpack_require__(0);

var _require = __webpack_require__(16),
    withRouter = _require.withRouter;

var Routes = function (_React$Component) {
	(0, _inherits3.default)(Routes, _React$Component);

	function Routes(props) {
		(0, _classCallCheck3.default)(this, Routes);
		return (0, _possibleConstructorReturn3.default)(this, (Routes.__proto__ || (0, _getPrototypeOf2.default)(Routes)).call(this, props));
	}

	(0, _createClass3.default)(Routes, [{
		key: 'render',
		value: function render() {
			console.log(this.props);
			return React.createElement(
				'div',
				{ className: 'Routes' },
				'Routes ',
				Math.random()
			);
		}
	}]);
	return Routes;
}(React.Component);

module.exports = withRouter(Routes);

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomError = function (_Error) {
	(0, _inherits3.default)(CustomError, _Error);

	function CustomError(msg) {
		(0, _classCallCheck3.default)(this, CustomError);

		var _this = (0, _possibleConstructorReturn3.default)(this, (CustomError.__proto__ || (0, _getPrototypeOf2.default)(CustomError)).call(this, msg));

		_this.name = 'CustomError';
		_this.test = Math.random();
		return _this;
	}

	return CustomError;
}(Error);

exports.simple = function (disp) {
	var err = new Error('simple Error');
	disp({
		type: 'modal:error',
		payload: { err: err }
	});
};

exports.type = function (disp) {
	var err = new TypeError('simple TypeError');
	disp({
		type: 'modal:error',
		payload: { err: err }
	});
};

exports.custom = function (disp) {
	var err = new CustomError('my CustomError');
	disp({
		type: 'modal:error',
		payload: { err: err }
	});
};

exports.throw = function (disp) {
	try {
		[].map('qwerty');
	} catch (err) {
		disp({
			type: 'modal:error',
			payload: { err: err }
		});
	}
};

/***/ }),
/* 274 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(1);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(2);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(3);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(4);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = __webpack_require__(0);

var Footer = function (_React$Component) {
	(0, _inherits3.default)(Footer, _React$Component);

	function Footer(props) {
		(0, _classCallCheck3.default)(this, Footer);
		return (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).call(this, props));
	}

	(0, _createClass3.default)(Footer, [{
		key: "geth",
		value: function geth() {
			return React.createElement(
				React.Fragment,
				null,
				React.createElement(
					"z",
					{ qwerty: "" },
					"1"
				),
				React.createElement(
					"z",
					{ qwerty: "" },
					"3"
				),
				React.createElement(
					"z",
					{ qwerty: "" },
					"4"
				),
				React.createElement(
					"z",
					{ qwerty: "" },
					"5"
				),
				React.createElement(
					"z",
					{ qwerty: "" },
					"6"
				),
				React.createElement(
					"z",
					{ qwerty: "" },
					"7"
				),
				React.createElement(
					"z",
					{ qwerty: "" },
					"8"
				),
				React.createElement(
					"z",
					{ qwerty: "" },
					"9"
				),
				React.createElement(
					"z",
					{ qwerty: "" },
					"10"
				),
				React.createElement(
					"z",
					{ qwerty: "" },
					"2"
				)
			);
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"footer",
				{ style: { outline: '1px solid blue' } },
				"footer"
			);
		}
	}]);
	return Footer;
}(React.Component);

module.exports = Footer;

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createReduxStore = __webpack_require__(118);

var _require = __webpack_require__(113),
    modalsReduser = _require.modalsReduser;

var disp = __webpack_require__(120);

var redusers = {
	main: __webpack_require__(285),
	menu: __webpack_require__(286),
	modals: modalsReduser
};

var mdw = [__webpack_require__(287)];

var store = createReduxStore(redusers, mdw);

disp(store);

module.exports = store;

/***/ }),
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = __webpack_require__(25);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = __webpack_require__(120),
    getDisplay = _require.getDisplay;

var display = getDisplay();

var def = {
	title: document.title,
	display: display,
	sidebarOpen: true /*(display == 'xl' || display == 'lg')*/
};

module.exports = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : def;
	var action = arguments[1];


	switch (action.type) {
		case 'title':
			return (0, _assign2.default)({}, state, { title: action.payload });
			break;
		case 'display':
			return (0, _assign2.default)({}, state, { display: action.payload });
			break;
		case 'sidebar:open':
			return (0, _assign2.default)({}, state, { sidebarOpen: true });
			break;
		case 'sidebar:close':
			return (0, _assign2.default)({}, state, { sidebarOpen: false });
			break;
	}

	return state;
};

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(61);

var _typeof3 = _interopRequireDefault(_typeof2);

var _assign = __webpack_require__(25);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var def = {
	isLoaded: false,
	types: {},
	ctg: [],
	list: []
};

module.exports = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : def;
	var action = arguments[1];

	switch (action.type) {
		case 'menu:loaded':
			if (!Array.isArray(action.payload.ctg || !Array.isArray(action.payload.list))) return state;
			var ns = (0, _assign2.default)({}, def, { isLoaded: true, ctg: action.payload.ctg });
			ns.list = action.payload.list.filter(function (val) {
				return (typeof val === 'undefined' ? 'undefined' : (0, _typeof3.default)(val)) == 'object' && val.cat && Array.isArray(val.cat);
			});
			ns.list.forEach(function (val) {
				val.cat.forEach(function (c) {
					if (!ns.types[c]) ns.types[c] = 0;
					ns.types[c]++;
				});
			});
			return ns;
			break;
	}

	return state;
};

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getData = __webpack_require__(288);
var isObject = __webpack_require__(33);

exports.title = function (store, next, title, action) {
	if (!title || !title.toString) return;
	title = title.toString();
	document.title = title;
	next(action);
};

exports['menu:load'] = function (store, next) {
	getData('/data/menu.json?v=' + Math.random()).then(function (data) {

		if (!isObject(data) || !Array.isArray(data.ctg) || !Array.isArray(data.list)) throw new Error('resul for \"/data/menu.json\" must be {\"ctg\":Array(),\"list\":Array()}');
		next({
			type: 'menu:loaded',
			payload: data
		});
	}).catch(function (e) {
		return next({ type: 'modal:error', payload: { err: e } });
	});
};

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (str) {
	return fetch(str).then(function (res) {
		if (res.status == 200) return res.json();
		if (res.status == 404) throw new Error('data Not Found');
		return [];
	});
};

/***/ })
],[121]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWljb24tYmFzZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9jb250YWluZXItZm9yLW1vZGFsL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL2FwcGZpbGVzL21vZGFscy9mb3JtLmpzIiwid2VicGFjazovLy8uL2FwaS9kaXNwLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vY3NzL3Jvb3QuY3NzIiwid2VicGFjazovLy8uL3ZlbmRvci9jb250YWluZXItZm9yLW1vZGFsL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvY29udGFpbmVyLWZvci1tb2RhbC9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWljb25zL2xpYi9mYS9jbG9zZS5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvY29udGFpbmVyLWZvci1tb2RhbC91dGlscy9wYXJzZS1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvY29udGFpbmVyLWZvci1tb2RhbC9yZWR1c2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9jb250YWluZXItZm9yLW1vZGFsL3V0aWxzL2dldC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwZmlsZXMvbW9kYWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcGZpbGVzL21vZGFscy9lcnJvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHBmaWxlcy9tb2RhbHMvZXJyb3IvZXJyb3ItbW9kYWwuY3NzIiwid2VicGFjazovLy8uL2FwcGZpbGVzL21vZGFscy9kaXNjdXNzaW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcGZpbGVzL21vZGFscy9kaXNjdXNzaW9uL2Rpc2MuY3NzIiwid2VicGFjazovLy8uL2FwcGZpbGVzL21vZGFscy90ZXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcGZpbGVzL21vZGFscy90ZXN0L3Rlc3QuY3NzIiwid2VicGFjazovLy8uL2FwcGZpbGVzL2hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWljb25zL2xpYi9mYS9ob21lLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaWNvbnMvbGliL3RpL3RoLW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwZmlsZXMvaGVhZGVyL2luZm8tYmxvY2suanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pY29ucy9saWIvaW8vY29kZS13b3JraW5nLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaWNvbnMvbGliL2ZhL2NvbW1lbnRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pY29ucy9saWIvbWQvbW9yZS12ZXJ0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaWNvbnMvbGliL21kL21vcmUtaG9yaXouanMiLCJ3ZWJwYWNrOi8vLy4vYXBwZmlsZXMvaGVhZGVyL2hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwZmlsZXMvcGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHBmaWxlcy9zaWRlYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcGZpbGVzL3NpZGViYXIvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY3NzIiwid2VicGFjazovLy8uL2FwcGZpbGVzL3NpZGViYXIvdXRpbHMvaXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9hcHBmaWxlcy9zaWRlYmFyL3V0aWxzL2dldC1sYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9hcHBmaWxlcy9zaWRlYmFyL3V0aWxzL2dldC1pY28uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pY29ucy9saWIvZmEvYm9va21hcmstby5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWljb25zL2xpYi9mYS9jYXJldC1yaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9hcHBmaWxlcy9zaWRlYmFyL3V0aWxzL2xpc3QtaXRlbXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwZmlsZXMvc2lkZWJhci91dGlscy9saXN0LWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwZmlsZXMvc2lkZWJhci9zaWRlYmFyLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHBmaWxlcy9jb250ZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcGZpbGVzL2NvbnRlbnQvcm91dGVzLmpzIiwid2VicGFjazovLy8uL2FwcGZpbGVzL2NvbnRlbnQvZXJyb3JzLmpzIiwid2VicGFjazovLy8uL2FwcGZpbGVzL3BhZ2UvcGFnZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwZmlsZXMvZm9vdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwaS9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9hcGkvcmVkdXNlcnMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hcGkvcmVkdXNlcnMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hcGkvbWR3L21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL2dldC1kYXRhLmpzIl0sIm5hbWVzIjpbImV4cG9ydHMiLCJDb250YWluZXIiLCJyZXF1aXJlIiwibW9kYWxzUmVkdXNlciIsIlJlYWN0IiwiRm9ybSIsInByb3BzIiwic3RhdGUiLCJhIiwiYiIsIm1vZGFsIiwibmFtZSIsImlkIiwiX2lkIiwib3Blbk0iLCJiaW5kIiwidXBkYXRlTSIsInVwTSIsInNldFN0YXRlIiwicmVmcyIsInZhbHVlIiwiZGlzcGF0Y2giLCJ0eXBlIiwicGF5bG9hZCIsIk51bWJlciIsImlkcyIsIl9yb3ciLCJtYXAiLCJtIiwiaW5kZXhPZiIsInB1c2giLCJsZW5ndGgiLCJjaGFuZ2UiLCJDb21wb25lbnQiLCJtb2R1bGUiLCJnZXREaXNwbGF5IiwidyIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50V2lkdGgiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwibyIsInN0b3JlIiwiZ2V0U3RhdGUiLCJtYWluIiwiZGlzcGxheSIsIm4iLCJyZW5kZXIiLCJQcm92aWRlciIsIkhhc2hSb3V0ZXIiLCJlSWQiLCJnZXRFbGVtZW50QnlJZCIsIkFwcCIsIkxpbmsiLCJjb25uZWN0IiwibW9kYWxzIiwiSGVhZGVyIiwiUGFnZSIsIkZvb3RlciIsIk1vZGFsIiwicHJvcFR5cGVzIiwiaSIsIkNvbnRhaW5lckZvck1vZGFsIiwicm9vdCIsImlzRml4ZWQiLCJ0b3AiLCJzY3JvbGwiLCJucCIsIm5zIiwicyIsInNjcm9sbFRvIiwibW9kYWxEYXRhIiwib3BlbiIsInBhZ2VZT2Zmc2V0IiwicHIiLCJwb3NpdGlvbiIsInpJbmRleCIsImxlZnQiLCJ3aWR0aCIsImxheWVyT3BhY2l0eSIsImxheWVyQ29sb3IiLCJzdHlsZSIsInByb3BzUm9vdCIsInByb3BzTW9kYWwiLCJnZXRTdHlsZSIsImNoaWxkcmVuIiwiZGVmYXVsdFByb3BzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIm51bWJlciIsInN0cmluZyIsIkNsb3NlQnV0dG9uIiwicGFyc2VTZXR0aW5ncyIsImlzRnVuY3Rpb24iLCJSb290TW9kYWwiLCJvcHRpb25zIiwibXlEYXRhIiwiaXMiLCJzZXR0aW5ncyIsIm1vZGFsc1NldHRpbmdzIiwiZm9yRWFjaCIsImtleSIsImNsb3NlIiwiY2xvc2VJbm4iLCJnZXRDb21wIiwiZSIsInQiLCJjbG9zZUZuIiwidGFyZ2V0IiwiaW5uZXIiLCJyb3ciLCJEYXRlIiwibm93IiwibWQiLCJsYXllciIsInJpZ2h0IiwiYm90dG9tIiwiYmFja2dyb3VuZENvbG9yIiwib3BhY2l0eSIsImxheWVyQ2xvc2UiLCJvbkNsaWNrIiwiY2xvc2VCdXR0b24iLCJNYXRoIiwicm91bmQiLCJoZWlnaHQiLCJjdXJzb3IiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJmaWxsIiwiaW5uZXJQcm9wcyIsInJlZiIsImJvcmRlciIsImdldExheWVyIiwiZ2V0Q2xvc2VCdXR0b24iLCJpc09iamVjdCIsImRlZlNldHRpbmdzIiwiY29tcCIsIm1vZGFsU2V0dGluZ3MiLCJnZXRLZXkiLCJkZWYiLCJtb2RhbE5hbWVzIiwibUNsb3NlIiwiZmlsdGVyIiwibVVwZGF0ZSIsImRhdGEiLCJubyIsIm1PcGVuIiwibklkIiwic3BsaXQiLCJtVXAiLCJtb2QiLCJhY3Rpb24iLCJBcnJheSIsImlzQXJyYXkiLCJ2IiwiY291bnQiLCJlcnJvciIsImRpc2N1c3Npb24iLCJ0ZXN0IiwiRXJyb3JNb2RhbCIsImVyciIsIkVycm9yIiwic2V0VGltZW91dCIsInN0YWNrIiwibWVzc2FnZSIsIkRpc2N1c3Npb24iLCJjbCIsIlRlc3RNb2RhbCIsImNvbnNvbGUiLCJsb2ciLCJfbXlEYXRhIiwiY2xzIiwic3RhcnQiLCJzcyIsImMiLCJIb21lSWNvIiwiTWVudUljbyIsIkluZm9CbG9jayIsIm9wZW5TaWRlYmFyIiwidGl0bGUiLCJ3aXRoUm91dGVyIiwiQ29kZUljbyIsIkNvbW1lbnRJY28iLCJCcmVhZGNyYW1iSWNvVmVyIiwiQnJlYWRjcmFtYkljb0dvciIsIkluZm9CbG9ja0hlYWRlciIsIlNpZGViYXIiLCJDb250ZW50IiwiQ29yZSIsImhpZGUiLCJzYyIsIm9mZnNldFBhcmVudCIsIm1lbnUiLCJMb2FkZXIiLCJJdGVtIiwiTWVudVNpZGViYXIiLCJhY3RpdmUiLCJpbmRleCIsIndpbkNsb3NlSXRlbSIsInNuIiwidHlwZXMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYWN0aXZlSW5kZXgiLCJzdG9wUHJvcGFnYXRpb24iLCJpc0xvYWRlZCIsImNvcmVPbkNsaWNrIiwiY3RnIiwibGlzdCIsInZhbCIsImNhdCIsIkxhYmVsQ3RnIiwiTGlzdEl0ZW1zIiwiTWVudUl0ZW0iLCJsYWJlbCIsImljbyIsInRkIiwiYWJzIiwidHJhbnNpdGlvbkRlbGF5IiwiZ2V0SWNvIiwiUmlnaHQiLCJMYWJlbExpc3QiLCJpY29ucyIsIkljbyIsInp6eiIsIkxpc3RJdGVtIiwibCIsImFsZXJ0IiwiaXRlbSIsIlJvdXRlIiwiU3dpdGNoIiwiUm91dGVzIiwiZXJyb3JzIiwiYnRuIiwic3RyIiwib2IiLCJkaXNwIiwicmFuZG9tIiwiQ3VzdG9tRXJyb3IiLCJtc2ciLCJzaW1wbGUiLCJUeXBlRXJyb3IiLCJjdXN0b20iLCJ0aHJvdyIsIm91dGxpbmUiLCJjcmVhdGVSZWR1eFN0b3JlIiwicmVkdXNlcnMiLCJtZHciLCJzaWRlYmFyT3BlbiIsImdldERhdGEiLCJuZXh0IiwidG9TdHJpbmciLCJ0aGVuIiwiY2F0Y2giLCJmZXRjaCIsInJlcyIsInN0YXR1cyIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxHOzs7Ozs7Ozs7O0FDMUJEOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVELG1EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3Riw4Q0FBOEMsaUJBQWlCLHFCQUFxQixvQ0FBb0MsNkRBQTZELG9CQUFvQixFQUFFLGVBQWU7O0FBRTFOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsNERBQTREOztBQUU1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLLDJCQUEyQjtBQUNoQyxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7QUN0QkEsa0JBQWtCLHlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWxCOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFBQTtBQUNILEVBQUU7QUFDRjtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0Qsa0JBQWtCLHlEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FsQkEsUUFBUUMsU0FBUixHQUFvQixtQkFBQUMsQ0FBUSxHQUFSLENBQXBCO0FBQ0FGLFFBQVFHLGFBQVIsR0FBd0IsbUJBQUFELENBQVEsR0FBUixDQUF4QixDOzs7Ozs7O0FDREE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7O0FDZEEsa0JBQWtCLHlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBbEIsSUFBTUUsUUFBUSxtQkFBQUYsQ0FBUSxDQUFSLENBQWQ7O0lBRU1HLEk7OztBQUNMLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxnSUFDWkEsS0FEWTs7QUFFbEIsUUFBS0MsS0FBTCxHQUFhO0FBQ1pDLE1BQUksTUFBS0YsS0FBTCxDQUFXRSxDQURIO0FBRVpDLE1BQUksTUFBS0gsS0FBTCxDQUFXRyxDQUZIO0FBR1pDLFVBQU8sTUFBS0osS0FBTCxDQUFXSyxJQUhOO0FBSVpDLE9BQUssTUFBS04sS0FBTCxDQUFXTztBQUpKLEdBQWI7O0FBT0EsUUFBS0MsS0FBTCxHQUFhLE1BQUtBLEtBQUwsQ0FBV0MsSUFBWCxPQUFiO0FBQ0EsUUFBS0MsT0FBTCxHQUFlLE1BQUtBLE9BQUwsQ0FBYUQsSUFBYixPQUFmO0FBQ0EsUUFBS0UsR0FBTCxHQUFXLE1BQUtBLEdBQUwsQ0FBU0YsSUFBVCxPQUFYO0FBWGtCO0FBWWxCOzs7O3lCQUVNSixJLEVBQU07QUFDWixRQUFLTyxRQUFMLG1DQUNFUCxJQURGLEVBQ1UsS0FBS1EsSUFBTCxDQUFVUixJQUFWLEVBQWdCUyxLQUQxQjtBQUdBOzs7MEJBRU87QUFBQSxnQkFDVyxLQUFLYixLQURoQjtBQUFBLE9BQ0ZDLENBREUsVUFDRkEsQ0FERTtBQUFBLE9BQ0FDLENBREEsVUFDQUEsQ0FEQTtBQUFBLE9BQ0VDLEtBREYsVUFDRUEsS0FERjs7QUFFUCxRQUFLSixLQUFMLENBQVdlLFFBQVgsQ0FBb0I7QUFDbkJDLHFCQUFnQlosS0FERztBQUVuQmEsYUFBVSxFQUFDZixJQUFELEVBQUdDLElBQUg7QUFGUyxJQUFwQjtBQUlBOzs7NEJBRVM7QUFBQSxpQkFDTSxLQUFLRixLQURYO0FBQUEsT0FDSkMsQ0FESSxXQUNKQSxDQURJO0FBQUEsT0FDRkMsQ0FERSxXQUNGQSxDQURFO0FBQUEsT0FDQUcsRUFEQSxXQUNBQSxFQURBOztBQUVULFFBQUtOLEtBQUwsQ0FBV2UsUUFBWCxDQUFvQjtBQUNuQkMsVUFBTyxjQURZO0FBRW5CQyxhQUFVO0FBQ1RYLFNBQUtZLE9BQU9aLEVBQVAsQ0FESTtBQUVUSixTQUZTLEVBRVBDO0FBRk87QUFGUyxJQUFwQjtBQU9BOzs7d0JBRUs7QUFDTCxRQUFLSCxLQUFMLENBQVdlLFFBQVgsQ0FBb0I7QUFDbkJDLFVBQU8sVUFEWTtBQUVuQkMsYUFBVUMsT0FBTyxLQUFLakIsS0FBTCxDQUFXSyxFQUFsQjtBQUZTLElBQXBCO0FBSUE7OzsyQkFFUTtBQUFBOztBQUVSLE9BQUlhLE1BQU0sS0FBS25CLEtBQUwsQ0FBV29CLElBQVgsQ0FBZ0JDLEdBQWhCLENBQW9CO0FBQUEsV0FBS0MsRUFBRWhCLEVBQVA7QUFBQSxJQUFwQixDQUFWO0FBQ0EsT0FBSWEsSUFBSUksT0FBSixDQUFZLEtBQUt2QixLQUFMLENBQVdPLEdBQXZCLElBQThCLENBQWxDLEVBQXFDO0FBQ3BDWSxRQUFJSyxJQUFKLENBQVMsS0FBS3hCLEtBQUwsQ0FBV08sR0FBcEI7QUFDQTs7QUFFRCxVQUNDO0FBQUE7QUFBQSxNQUFLLFdBQVUsTUFBZjtBQUNDO0FBQUE7QUFBQSxPQUFPLFdBQVUsK0NBQWpCO0FBQ0M7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUREO0FBRUM7QUFBQTtBQUFBO0FBQUssYUFBS1AsS0FBTCxDQUFXSztBQUFoQjtBQUZELE9BREQ7QUFLQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREQ7QUFFQztBQUFBO0FBQUE7QUFBSyxhQUFLTCxLQUFMLENBQVdPO0FBQWhCO0FBRkQsT0FMRDtBQVNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERDtBQUVDO0FBQUE7QUFBQTtBQUFLLGFBQUtQLEtBQUwsQ0FBV29CLElBQVgsQ0FBZ0JLO0FBQXJCO0FBRkQsT0FURDtBQWFDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERDtBQUVDO0FBQUE7QUFBQTtBQUFLLGFBQUt6QixLQUFMLENBQVdFO0FBQWhCO0FBRkQsT0FiRDtBQWlCQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREQ7QUFFQztBQUFBO0FBQUE7QUFBSyxhQUFLRixLQUFMLENBQVdHO0FBQWhCO0FBRkQ7QUFqQkQ7QUFERCxLQUREO0FBMEJDO0FBQUE7QUFBQSxPQUFLLFdBQVUsaUJBQWY7QUFDQztBQUFBO0FBQUEsUUFBSyxXQUFVLEtBQWY7QUFJQztBQUFBO0FBQUEsU0FBSyxXQUFVLEtBQWY7QUFDQztBQUFBO0FBQUEsVUFBSyxXQUFVLDRCQUFmO0FBQ0M7QUFBQTtBQUFBLFdBQUssV0FBVSxxQkFBZjtBQUNDO0FBQUE7QUFBQSxZQUFNLFdBQVUsa0JBQWhCO0FBQUE7QUFBQTtBQURELFNBREQ7QUFJQyx1Q0FBTyxVQUFVO0FBQUEsaUJBQUksT0FBS3VCLE1BQUwsQ0FBWSxHQUFaLENBQUo7QUFBQSxVQUFqQixFQUF1QyxLQUFJLEdBQTNDLEVBQStDLGNBQWMsS0FBS3pCLEtBQUwsQ0FBV0MsQ0FBeEUsRUFBMkUsTUFBSyxNQUFoRixFQUF1RixXQUFVLGVBQWpHO0FBSkQ7QUFERCxPQUpEO0FBWUM7QUFBQTtBQUFBLFNBQUssV0FBVSxLQUFmO0FBQ0M7QUFBQTtBQUFBLFVBQUssV0FBVSw0QkFBZjtBQUNDO0FBQUE7QUFBQSxXQUFLLFdBQVUscUJBQWY7QUFDQztBQUFBO0FBQUEsWUFBTSxXQUFVLGtCQUFoQjtBQUFBO0FBQUE7QUFERCxTQUREO0FBSUMsdUNBQU8sVUFBVTtBQUFBLGlCQUFJLE9BQUt3QixNQUFMLENBQVksR0FBWixDQUFKO0FBQUEsVUFBakIsRUFBdUMsS0FBSSxHQUEzQyxFQUErQyxjQUFjLEtBQUt6QixLQUFMLENBQVdFLENBQXhFLEVBQTJFLE1BQUssTUFBaEYsRUFBdUYsV0FBVSxlQUFqRztBQUpEO0FBREQsT0FaRDtBQXVCQztBQUFBO0FBQUEsU0FBSyxXQUFVLEtBQWY7QUFDQztBQUFBO0FBQUEsVUFBSyxXQUFVLDRCQUFmO0FBQ0M7QUFBQTtBQUFBLFdBQUssV0FBVSxxQkFBZjtBQUNJO0FBQUE7QUFBQSxZQUFPLFdBQVUsa0JBQWpCLEVBQW9DLFNBQVEsT0FBNUM7QUFBQTtBQUFBO0FBREosU0FERDtBQUlFO0FBQUE7QUFBQSxXQUFRLGNBQWMsS0FBS0gsS0FBTCxDQUFXSyxJQUFqQyxFQUF1QyxLQUFJLE9BQTNDLEVBQW1ELFVBQVU7QUFBQSxrQkFBSSxPQUFLcUIsTUFBTCxDQUFZLE9BQVosQ0FBSjtBQUFBLFdBQTdELEVBQXVGLFdBQVUsZUFBakcsRUFBaUgsSUFBRyxPQUFwSDtBQUNFO0FBQUE7QUFBQSxZQUFRLE9BQU0sTUFBZDtBQUFBO0FBQUEsVUFERjtBQUVFO0FBQUE7QUFBQSxZQUFRLE9BQU0sWUFBZDtBQUFBO0FBQUE7QUFGRixTQUpGO0FBUUU7QUFBQTtBQUFBLFdBQVEsU0FBUyxLQUFLbEIsS0FBdEIsRUFBNkIsV0FBVSx5QkFBdkM7QUFBQTtBQUFBO0FBUkY7QUFERCxPQXZCRDtBQXFDQztBQUFBO0FBQUEsU0FBSyxXQUFVLGNBQWY7QUFDQztBQUFBO0FBQUEsVUFBSyxXQUFVLDRCQUFmO0FBQ0U7QUFBQTtBQUFBLFdBQVEsU0FBUyxLQUFLRSxPQUF0QixFQUErQixXQUFVLHlCQUF6QztBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQSxXQUFRLGNBQWMsS0FBS1YsS0FBTCxDQUFXTyxHQUFqQyxFQUFzQyxLQUFJLElBQTFDLEVBQStDLFVBQVU7QUFBQSxrQkFBSSxPQUFLbUIsTUFBTCxDQUFZLElBQVosQ0FBSjtBQUFBLFdBQXpELEVBQWdGLFdBQVUsZUFBMUYsRUFBMEcsSUFBRyxPQUE3RztBQUNHUCxhQUFJRSxHQUFKLENBQVE7QUFBQSxpQkFBTTtBQUFBO0FBQUEsYUFBUSxLQUFLZixFQUFiLEVBQWlCLE9BQU9BLEVBQXhCO0FBQTZCQTtBQUE3QixXQUFOO0FBQUEsVUFBUjtBQURILFNBRkY7QUFLRTtBQUFBO0FBQUEsV0FBUSxTQUFTLEtBQUtLLEdBQXRCLEVBQTJCLFdBQVUsd0JBQXJDO0FBQUE7QUFBQTtBQUxGO0FBREQ7QUFyQ0Q7QUFERDtBQTFCRCxJQUREO0FBK0VBOzs7RUFySWlCYixNQUFNNkIsUzs7QUF3SXpCQyxPQUFPbEMsT0FBUCxHQUFpQkssSUFBakIsQzs7Ozs7Ozs7Ozs7QUMxSUEsSUFBTThCLGFBQWEsU0FBYkEsVUFBYSxHQUFNO0FBQ3hCLEtBQUlDLElBQUlDLFNBQVNDLGVBQVQsQ0FBeUJDLFdBQWpDO0FBQ0EsS0FBSUgsSUFBSSxHQUFSLEVBQWEsT0FBTyxJQUFQO0FBQ2IsS0FBSUEsSUFBSSxHQUFSLEVBQWEsT0FBTyxJQUFQO0FBQ2IsS0FBSUEsSUFBSSxHQUFSLEVBQWEsT0FBTyxJQUFQO0FBQ2IsS0FBSUEsSUFBSSxJQUFSLEVBQWMsT0FBTyxJQUFQOztBQUVkLFFBQU8sSUFBUDtBQUNBLENBUkQ7O0FBVUFwQyxVQUFVa0MsT0FBT2xDLE9BQVAsR0FBaUIsaUJBQVM7QUFDbkN3QyxRQUFPQyxnQkFBUCxDQUF3QixRQUF4QixFQUFpQyxZQUFNO0FBQ3RDLE1BQUlDLElBQUlDLE1BQU1DLFFBQU4sR0FBaUJDLElBQWpCLENBQXNCQyxPQUE5QjtBQUNBLE1BQUlDLElBQUlaLFlBQVI7QUFDQSxNQUFJTyxLQUFLSyxDQUFULEVBQVk7QUFDWEosU0FBTXRCLFFBQU4sQ0FBZTtBQUNkQyxVQUFPLFNBRE87QUFFZEMsYUFBVXdCO0FBRkksSUFBZjtBQUlBO0FBQ0QsRUFURDtBQVdBLENBWkQ7O0FBY0EvQyxRQUFRbUMsVUFBUixHQUFxQkEsVUFBckIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkEsSUFBTS9CLFFBQVEsbUJBQUFGLENBQVEsQ0FBUixDQUFkO0FBQ0EsSUFBTThDLFNBQVMsbUJBQUE5QyxDQUFRLEVBQVIsRUFBcUI4QyxNQUFwQzs7ZUFDcUIsbUJBQUE5QyxDQUFRLEVBQVIsQztJQUFiK0MsUSxZQUFBQSxROztnQkFDZSxtQkFBQS9DLENBQVEsRUFBUixDO0lBQWZnRCxVLGFBQUFBLFU7O0FBQ1IsSUFBTUMsTUFBTWQsU0FBU2UsY0FBVCxDQUF3QixLQUF4QixDQUFaO0FBQ0EsbUJBQUFsRCxDQUFRLEVBQVI7QUFDQSxtQkFBQUEsQ0FBUSxFQUFSOztBQUVBLElBQU1tRCxNQUFNLG1CQUFBbkQsQ0FBUSxHQUFSLENBQVo7QUFDQSxJQUFNeUMsUUFBUSxtQkFBQXpDLENBQVEsR0FBUixDQUFkOztBQUdBOEMsT0FDQztBQUFDLFNBQUQ7QUFBQSxHQUFVLE9BQU9MLEtBQWpCO0FBQ0M7QUFBQyxZQUFEO0FBQUEsSUFBWSxVQUFTLEdBQXJCO0FBQ0Msc0JBQUMsR0FBRDtBQUREO0FBREQsQ0FERCxFQU1DUSxHQU5ELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkEsSUFBTS9DLFFBQVEsbUJBQUFGLENBQVEsQ0FBUixDQUFkOztlQUNpQixtQkFBQUEsQ0FBUSxFQUFSLEM7SUFBVG9ELEksWUFBQUEsSTs7Z0JBQ1ksbUJBQUFwRCxDQUFRLEVBQVIsQztJQUFacUQsTyxhQUFBQSxPOztBQUNSLG1CQUFBckQsQ0FBUSxHQUFSOztnQkFDc0IsbUJBQUFBLENBQVEsR0FBUixDO0lBQWRELFMsYUFBQUEsUzs7QUFDUixJQUFNdUQsU0FBUyxtQkFBQXRELENBQVEsR0FBUixDQUFmO0FBQ0EsSUFBTXVELFNBQVMsbUJBQUF2RCxDQUFRLEdBQVIsQ0FBZjtBQUNBLElBQU13RCxPQUFPLG1CQUFBeEQsQ0FBUSxHQUFSLENBQWI7QUFDQSxJQUFNeUQsU0FBUyxtQkFBQXpELENBQVEsR0FBUixDQUFmOztJQUVNbUQsRzs7O0FBQ0wsY0FBWS9DLEtBQVosRUFBbUI7QUFBQTtBQUFBLHlIQUNaQSxLQURZO0FBRWxCOzs7OzJCQUdRO0FBQ1IsVUFDQztBQUFDLGFBQUQ7QUFBQSxNQUFXLElBQUcsTUFBZCxFQUFxQixXQUFVLE1BQS9CLEVBQXNDLFFBQVFrRCxNQUE5QztBQUNDLHdCQUFDLE1BQUQsT0FERDtBQUVDLHdCQUFDLElBQUQsT0FGRDtBQUdDLHdCQUFDLE1BQUQ7QUFIRCxJQUREO0FBT0E7OztFQWRnQnBELE1BQU02QixTOztBQWlCeEJDLE9BQU9sQyxPQUFQLEdBQWlCcUQsR0FBakIsQzs7Ozs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0EscUVBQXVFLDRDQUE0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRm5ILHlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFNakQsUUFBUSxtQkFBQUYsQ0FBUSxDQUFSLENBQWQ7QUFDQSxJQUFNMEQsUUFBUSxtQkFBQTFELENBQVEsR0FBUixDQUFkO0FBQ0EsSUFBTTJELFlBQVksbUJBQUEzRCxDQUFRLENBQVIsQ0FBbEI7O2VBQ29CLG1CQUFBQSxDQUFRLEVBQVIsQztJQUFacUQsTyxZQUFBQSxPOztBQUVSLElBQUlPLElBQUksS0FBUjs7SUFDTUMsaUI7OztBQUNMLDRCQUFZekQsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBKQUNaQSxLQURZOztBQUdsQixRQUFLMEQsSUFBTCxHQUFZO0FBQ1hDLFlBQVUsS0FEQztBQUVYQyxRQUFNLENBRks7QUFHWEMsV0FBUztBQUhFLEdBQVo7QUFIa0I7QUFRbEI7Ozs7cUNBRWtCQyxFLEVBQUdDLEUsRUFBR0MsQyxFQUFHO0FBQzNCLE9BQUksS0FBS04sSUFBTCxDQUFVRyxNQUFWLEdBQW1CLENBQXZCLEVBQTBCO0FBQ3pCM0IsV0FBTytCLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsS0FBS1AsSUFBTCxDQUFVRyxNQUFWLElBQW9CLENBQXBCLEdBQXdCLEtBQUtILElBQUwsQ0FBVUUsR0FBbEMsR0FBd0MsQ0FBM0Q7QUFDQSxTQUFLRixJQUFMLENBQVVHLE1BQVYsR0FBbUIsQ0FBbkI7QUFDQTtBQUNEOzs7NENBR3lCQyxFLEVBQUk7QUFDN0IsT0FBSSxLQUFLOUQsS0FBTCxDQUFXa0UsU0FBWCxDQUFxQkMsSUFBckIsSUFBNkJMLEdBQUdJLFNBQUgsQ0FBYUMsSUFBOUMsRUFBb0Q7O0FBRXBELE9BQUlMLEdBQUdJLFNBQUgsQ0FBYUMsSUFBakIsRUFBdUI7QUFDdEIsU0FBS1QsSUFBTCxHQUFZO0FBQ1hDLGNBQVUsSUFEQztBQUVYQyxVQUFNMUIsT0FBT2tDLFdBRkY7QUFHWHRDLFFBQUlDLFNBQVNDLGVBQVQsQ0FBeUJDLFdBSGxCO0FBSVg0QixhQUFRO0FBSkcsS0FBWjs7QUFPQSxRQUFJLEtBQUtILElBQUwsQ0FBVVcsRUFBVixHQUFlLENBQW5CLEVBQXNCLEtBQUtYLElBQUwsQ0FBVVcsRUFBVixHQUFlLENBQWY7QUFDdEIsSUFURCxNQVNPO0FBQ04sU0FBS1gsSUFBTCxHQUFZO0FBQ1hDLGNBQVUsS0FEQztBQUVYQyxVQUFNLEtBQUtGLElBQUwsQ0FBVUUsR0FGTDtBQUdYUyxTQUFLLENBSE07QUFJWFIsYUFBUztBQUpFLEtBQVo7QUFNQTtBQUNEOzs7NkJBRVU7QUFDVixVQUFPO0FBQ05TLGNBQVcsS0FBS1osSUFBTCxDQUFVQyxPQUFWLEdBQW9CLE9BQXBCLEdBQThCLFVBRG5DO0FBRU5DLFNBQU0sS0FBS0YsSUFBTCxDQUFVQyxPQUFWLFNBQXdCLEtBQUtELElBQUwsQ0FBVUUsR0FBbEMsVUFBNEMsQ0FGNUM7QUFHTlcsWUFBUSxDQUhGO0FBSU5DLFVBQU8sQ0FKRDtBQUtOQyxXQUFPLEtBQUtmLElBQUwsQ0FBVUMsT0FBVixHQUFvQixLQUFLRCxJQUFMLENBQVU1QixDQUE5QixHQUFrQztBQUN6QztBQU5NLElBQVA7QUFRQTs7OzJCQUdRO0FBQUEsZ0JBQzhFLEtBQUs5QixLQURuRjtBQUFBLE9BQ0RrRCxNQURDLFVBQ0RBLE1BREM7QUFBQSxPQUNPd0IsWUFEUCxVQUNPQSxZQURQO0FBQUEsT0FDcUJDLFVBRHJCLFVBQ3FCQSxVQURyQjtBQUFBLE9BQ2lDQyxLQURqQyxVQUNpQ0EsS0FEakM7QUFBQSxPQUN3Q1YsU0FEeEMsVUFDd0NBLFNBRHhDO0FBQUEsT0FDbURuRCxRQURuRCxVQUNtREEsUUFEbkQ7QUFBQSxPQUNnRThELFNBRGhFOztBQUVSLE9BQU1DLGFBQWE7QUFDbEI1QixrQkFEa0I7QUFFbEJ3Qiw4QkFGa0I7QUFHbEJDLDBCQUhrQjtBQUlsQlQsd0JBSmtCO0FBS2xCbkQ7QUFMa0IsSUFBbkI7QUFPQSxVQUNDO0FBQUE7QUFBQSxNQUFLLElBQUcsUUFBUixFQUFpQixPQUFPO0FBQ3ZCdUQsZ0JBQVUsVUFEYTtBQUV2QkcsYUFBTyxNQUZnQjtBQUd2QkYsY0FBUztBQUhjLE1BQXhCO0FBS0M7QUFBQTtBQUFBLGdDQUFTTSxTQUFULElBQW9CLE9BQU8sS0FBS0UsUUFBTCxFQUEzQjtBQUNFLFVBQUsvRSxLQUFMLENBQVdnRjtBQURiLEtBTEQ7QUFRQyx3QkFBQyxLQUFELEVBQVlGLFVBQVo7QUFSRCxJQUREO0FBWUE7OztFQTFFOEJoRixNQUFNNkIsUzs7QUE2RXRDOEIsa0JBQWtCd0IsWUFBbEIsR0FBaUM7QUFDaENQLGVBQWUsRUFEaUI7QUFFaENDLGFBQWE7QUFGbUIsQ0FBakM7O0FBS0FsQixrQkFBa0JGLFNBQWxCLEdBQThCO0FBQzdCTCxTQUFTSyxVQUFVMkIsTUFBVixDQUFpQkMsVUFERztBQUU3QlQsZUFBZW5CLFVBQVU2QixNQUZJO0FBRzdCVCxhQUFhcEIsVUFBVThCO0FBSE0sQ0FBOUI7O0FBT0F6RCxPQUFPbEMsT0FBUCxHQUFpQnVELFFBQ2Y7QUFBQSxRQUFVLEVBQUNpQixXQUFVakUsTUFBTWlELE1BQWpCLEVBQVY7QUFBQSxDQURlLEVBRWRPLGlCQUZjLENBQWpCLEM7Ozs7OztBQy9GQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTs7QUFFQSwwQ0FBMEMsbUNBQXNDOzs7Ozs7OztBQ0hoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsVUFBVSxFQUFFO0FBQ2hELG1CQUFtQixzQ0FBc0M7QUFDekQsQ0FBQyxxQ0FBcUM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0QsSUFBTTNELFFBQVEsbUJBQUFGLENBQVEsQ0FBUixDQUFkOztlQUNrQixtQkFBQUEsQ0FBUSxFQUFSLEM7SUFBWHFELE8sWUFBQUEsTzs7QUFDUCxJQUFNcUMsY0FBYyxtQkFBQTFGLENBQVEsR0FBUixDQUFwQjtBQUNBLElBQU0yRixnQkFBZ0IsbUJBQUEzRixDQUFRLEdBQVIsQ0FBdEI7QUFDQSxJQUFNNEYsYUFBYSxtQkFBQTVGLENBQVEsRUFBUixDQUFuQjs7SUFHTTZGLFM7OztBQUNMLG9CQUFZekYsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBJQUNaQSxLQURZOztBQUlsQixRQUFLQyxLQUFMLEdBQWE7QUFDWmtFLFNBQU8sS0FESztBQUVaN0QsT0FBSyxDQUZPO0FBR1pELFNBQU8sRUFISztBQUlacUYsWUFBVSxFQUpFO0FBS1pDLFdBQVMsSUFMRztBQU1aQyxPQUFLLEtBTk87QUFPWkMsYUFBVztBQVBDLEdBQWI7O0FBVUEsUUFBSzNDLE1BQUwsR0FBY2xELE1BQU1rRCxNQUFwQjtBQUNBLFFBQUs0QyxjQUFMLEdBQXNCLEVBQXRCO0FBQ0Esc0JBQVk5RixNQUFNa0QsTUFBbEIsRUFBMEI2QyxPQUExQixDQUFrQyxlQUFPO0FBQ3hDLFNBQUtELGNBQUwsQ0FBb0JFLEdBQXBCLElBQTJCVCxjQUFjdkYsTUFBTWtELE1BQU4sQ0FBYThDLEdBQWIsQ0FBZCxDQUEzQjtBQUNBLFNBQUsvRixLQUFMLENBQVc0RixRQUFYLENBQW9CRyxHQUFwQixJQUEyQlQsY0FBY3ZGLE1BQU1rRCxNQUFOLENBQWE4QyxHQUFiLENBQWQsQ0FBM0I7QUFDQSxHQUhEOztBQUtBaEcsUUFBTWUsUUFBTixDQUFlO0FBQ2RDLFNBQU8sY0FETztBQUVkQyxZQUFVLG9CQUFZakIsTUFBTWtELE1BQWxCO0FBRkksR0FBZjs7QUFLQSxRQUFLMkMsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFFBQUtsRSxTQUFMLEdBQWlCLElBQWpCOztBQUVBLFFBQUtzRSxLQUFMLEdBQWEsTUFBS0EsS0FBTCxDQUFXeEYsSUFBWCxPQUFiO0FBQ0EsUUFBS3lGLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjekYsSUFBZCxPQUFoQjtBQUNBLFFBQUswRixPQUFMO0FBL0JrQjtBQWdDbEI7Ozs7NEJBRVM7QUFDVCxRQUFLeEUsU0FBTCxHQUFpQixLQUFLdUIsTUFBTCxDQUFZLEtBQUtsRCxLQUFMLENBQVdrRSxTQUFYLENBQXFCN0QsSUFBakMsQ0FBakI7QUFDQSxRQUFLd0YsUUFBTCxHQUFnQk4sY0FBYyxLQUFLNUQsU0FBbkIsQ0FBaEI7QUFDQTs7O3dCQUVLeUUsQyxFQUFFQyxDLEVBQUc7QUFBQTs7QUFDVixPQUFNckYsT0FBT3FGLElBQUksT0FBSixHQUFhLE9BQTFCO0FBQ0E7O0FBRUEsT0FBSSxLQUFLUCxjQUFMLENBQW9CLEtBQUs3RixLQUFMLENBQVdJLElBQS9CLEVBQXFDaUcsT0FBckMsSUFBZ0RkLFdBQVcsS0FBS00sY0FBTCxDQUFvQixLQUFLN0YsS0FBTCxDQUFXSSxJQUEvQixFQUFxQ2lHLE9BQWhELENBQXBELEVBQThHO0FBQzdHLFNBQUtSLGNBQUwsQ0FBb0IsS0FBSzdGLEtBQUwsQ0FBV0ksSUFBL0IsRUFBcUNpRyxPQUFyQyxDQUE2Q3RGLElBQTdDLEVBQWtELGtCQUFVO0FBQzNELFlBQUtKLFFBQUwsQ0FBYyxFQUFDK0UsY0FBRCxFQUFkO0FBQ0EsS0FGRCxFQUVHLFlBQU07QUFDUixZQUFLM0YsS0FBTCxDQUFXZSxRQUFYLFlBQTZCQyxJQUE3QjtBQUNBLEtBSkQ7QUFLQSxJQU5ELE1BTU87QUFDTixTQUFLaEIsS0FBTCxDQUFXZSxRQUFYLFlBQTZCQyxJQUE3QjtBQUNBO0FBQ0Q7OzsyQkFFUW9GLEMsRUFBRztBQUNYLE9BQUlBLEVBQUVHLE1BQUYsSUFBWSxLQUFLMUYsSUFBTCxDQUFVMkYsS0FBMUIsRUFBaUMsS0FBS1AsS0FBTCxDQUFXRyxDQUFYO0FBQ2pDOzs7NENBR3lCdEMsRSxFQUFJO0FBQUE7O0FBQUEsdUJBQ0VBLEdBQUdJLFNBREw7QUFBQSxPQUN4QkMsSUFEd0IsaUJBQ3hCQSxJQUR3QjtBQUFBLE9BQ25CN0QsRUFEbUIsaUJBQ25CQSxFQURtQjtBQUFBLE9BQ2ZELElBRGUsaUJBQ2ZBLElBRGU7QUFBQSxPQUNUcUYsT0FEUyxpQkFDVEEsT0FEUzs7O0FBRzdCLE9BQUk1QixHQUFHSSxTQUFILENBQWFDLElBQWIsSUFBcUIsQ0FBQyxLQUFLbEUsS0FBTCxDQUFXa0UsSUFBckMsRUFBMkM7QUFDMUMsU0FBS2xFLEtBQUwsQ0FBV2tFLElBQVgsR0FBa0IsSUFBbEIsRUFDQSxLQUFLbEUsS0FBTCxDQUFXMkYsRUFBWCxHQUFnQixJQURoQjtBQUVBLFNBQUszRixLQUFMLENBQVdLLEVBQVgsR0FBZ0JBLEVBQWhCO0FBQ0EsU0FBS0wsS0FBTCxDQUFXSSxJQUFYLEdBQWtCQSxJQUFsQjtBQUNBLFNBQUtKLEtBQUwsQ0FBVzBGLE1BQVgsR0FBb0IsS0FBSzFGLEtBQUwsQ0FBVzRGLFFBQVgsQ0FBb0J4RixJQUFwQixFQUEwQnNGLE1BQTlDO0FBQ0EsU0FBSzFGLEtBQUwsQ0FBV3lGLE9BQVgsR0FBcUJBLE9BQXJCO0FBQ0E7QUFDQTs7QUFFRCxPQUFJLENBQUM1QixHQUFHSSxTQUFILENBQWFDLElBQWQsSUFBc0IsS0FBS2xFLEtBQUwsQ0FBV2tFLElBQXJDLEVBQTJDO0FBQzFDLFNBQUtsRSxLQUFMLENBQVdrRSxJQUFYLEdBQWtCLEtBQWxCLEVBQ0EsS0FBS2xFLEtBQUwsQ0FBVzJGLEVBQVgsR0FBZ0IsSUFEaEI7QUFFQSxTQUFLM0YsS0FBTCxDQUFXSyxFQUFYLEdBQWdCQSxFQUFoQjtBQUNBLFNBQUtMLEtBQUwsQ0FBV0ksSUFBWCxHQUFrQkEsSUFBbEI7QUFDQSxTQUFLSixLQUFMLENBQVd5RixPQUFYLEdBQXFCLEVBQXJCO0FBQ0EsU0FBS3pGLEtBQUwsQ0FBVzBGLE1BQVgsR0FBb0IsSUFBcEI7QUFDQTtBQUNBOztBQUVELE9BQUksQ0FBQzdCLEdBQUdJLFNBQUgsQ0FBYUMsSUFBbEIsRUFBd0I7O0FBSXhCLE9BQUksS0FBS2xFLEtBQUwsQ0FBV0ssRUFBWCxJQUFpQndELEdBQUdJLFNBQUgsQ0FBYTVELEVBQWxDLEVBQXNDO0FBQ3JDLFFBQUl3RCxHQUFHSSxTQUFILENBQWF1QyxHQUFiLENBQWlCaEYsTUFBakIsR0FBMEIsQ0FBMUIsSUFDQ3FDLEdBQUdJLFNBQUgsQ0FBYXVDLEdBQWIsQ0FBaUIzQyxHQUFHSSxTQUFILENBQWF1QyxHQUFiLENBQWlCaEYsTUFBakIsR0FBMEIsQ0FBM0MsRUFBOENuQixFQUE5QyxJQUFvRCxLQUFLTCxLQUFMLENBQVdLLEVBRGhFLElBRUMsS0FBS0wsS0FBTCxDQUFXNEYsUUFBWCxDQUFvQnhGLElBQXBCLEVBQTBCaUcsT0FGM0IsSUFHQ2QsV0FBVyxLQUFLdkYsS0FBTCxDQUFXNEYsUUFBWCxDQUFvQnhGLElBQXBCLEVBQTBCaUcsT0FBckMsQ0FITCxFQUdvRDtBQUNuRCxTQUFJRCxJQUFJSyxLQUFLQyxHQUFMLEVBQVI7O0FBRUEsVUFBSzFHLEtBQUwsQ0FBVzRGLFFBQVgsQ0FBb0J4RixJQUFwQixFQUEwQmlHLE9BQTFCLENBQ0MsU0FERCxFQUVDLGNBQU07QUFDTCxVQUFJRCxLQUFLSyxLQUFLQyxHQUFMLEVBQVQsRUFBcUI7QUFDcEIsY0FBSzFHLEtBQUwsQ0FBVzBGLE1BQVgsR0FBb0JpQixFQUFwQjtBQUNBLE9BRkQsTUFFTztBQUNOLGNBQUtoRyxRQUFMLENBQWM7QUFDYitFLGdCQUFTaUI7QUFESSxRQUFkO0FBR0E7QUFDRCxNQVZGLEVBV0MsWUFBTTtBQUNMLFVBQUlQLEtBQUtLLEtBQUtDLEdBQUwsRUFBVCxFQUFxQjtBQUNwQixjQUFLMUcsS0FBTCxDQUFXMkYsRUFBWCxHQUFnQixLQUFoQjtBQUNBLE9BRkQsTUFFTztBQUNOLGNBQUtoRixRQUFMLENBQWMsRUFBQ2dGLElBQUcsS0FBSixFQUFkO0FBQ0E7QUFDRCxNQWpCRjtBQW1CQSxVQUFLM0YsS0FBTCxDQUFXMkYsRUFBWCxHQUFnQixJQUFoQjtBQUNBLEtBMUJELE1BMEJPO0FBQ04sVUFBSzNGLEtBQUwsQ0FBVzJGLEVBQVgsR0FBZ0IsS0FBaEI7QUFDQTtBQUVEO0FBQ0Q7Ozt1Q0FFb0I7QUFDcEIsT0FBSSxDQUFDLEtBQUszRixLQUFMLENBQVcyRixFQUFoQixFQUFvQjtBQUNuQixTQUFLTyxPQUFMO0FBRG1CLDJCQUVPLEtBQUtuRyxLQUFMLENBQVdrRSxTQUZsQjtBQUFBLFFBRWQ1RCxFQUZjLG9CQUVkQSxFQUZjO0FBQUEsUUFFVkQsSUFGVSxvQkFFVkEsSUFGVTtBQUFBLFFBRUpxRixPQUZJLG9CQUVKQSxPQUZJOztBQUduQixTQUFLOUUsUUFBTCxDQUFjO0FBQ2IrRSxhQUFTLEtBQUtFLFFBQUwsQ0FBY0YsTUFEVjtBQUViQyxTQUFLLElBRlE7QUFHYnRGLFdBSGE7QUFJYkQsZUFKYTtBQUticUY7QUFMYSxLQUFkO0FBT0E7QUFDRDs7OzZCQUlVO0FBQ1YsT0FBTUcsV0FBVyxLQUFLQyxjQUFMLENBQW9CLEtBQUs5RixLQUFMLENBQVdrRSxTQUFYLENBQXFCN0QsSUFBekMsQ0FBakI7QUFDQSxPQUFJLENBQUN3RixTQUFTZ0IsS0FBZCxFQUFxQixPQUFPLElBQVA7O0FBR3JCLE9BQU03RyxRQUFRO0FBQ2JNLFFBQUssY0FEUTtBQUVic0UsV0FBUTtBQUNQTixlQUFVLE9BREg7QUFFUFYsVUFBSyxDQUZFO0FBR1BrRCxZQUFRLENBSEQ7QUFJUHRDLFdBQU8sQ0FKQTtBQUtQdUMsYUFBUyxDQUxGO0FBTVBDLHNCQUFrQm5CLFNBQVNsQixVQUFULElBQXVCLEtBQUszRSxLQUFMLENBQVcyRSxVQU43QztBQU9Qc0MsY0FBVSxDQUFDcEIsU0FBU25CLFlBQVQsSUFBeUIsS0FBSzFFLEtBQUwsQ0FBVzBFLFlBQXJDLElBQXFELEdBUHhEO0FBUVBILGFBQVM7QUFSRjtBQUZLLElBQWQ7O0FBY0EsT0FBSXNCLFNBQVNxQixVQUFiLEVBQXlCO0FBQ3hCbEgsVUFBTW1ILE9BQU4sR0FBZ0IsS0FBS2xCLEtBQXJCO0FBQ0E7O0FBRUQsVUFBTywyQkFBU2pHLEtBQVQsQ0FBUDtBQUNBOzs7bUNBRWdCO0FBQ2hCLE9BQU02RixXQUFXLEtBQUtDLGNBQUwsQ0FBb0IsS0FBSzlGLEtBQUwsQ0FBV2tFLFNBQVgsQ0FBcUI3RCxJQUF6QyxDQUFqQjtBQUNBLE9BQUksQ0FBQ3dGLFNBQVN1QixXQUFkLEVBQTJCLE9BQU8sSUFBUDs7QUFFM0IsT0FBSUgsVUFBVXBCLFNBQVNuQixZQUFULElBQXlCLEtBQUsxRSxLQUFMLENBQVcwRSxZQUFsRDtBQUNBLE9BQUl1QyxVQUFVLEVBQWQsRUFBa0I7QUFDakJBLGNBQVUsR0FBVjtBQUNBLElBRkQsTUFFTztBQUNOQSxjQUFVSSxLQUFLQyxLQUFMLENBQVdMLFVBQVcsQ0FBQyxNQUFNQSxPQUFQLElBQWtCLEdBQXhDLElBQWdELEdBQTFEO0FBQ0E7O0FBRUQsVUFDQztBQUFBO0FBQUEsTUFBSyxJQUFHLGNBQVI7QUFDQyxnQkFBVSxhQURYO0FBRUMsY0FBUyxLQUFLaEIsS0FGZjtBQUdDLFlBQU87QUFDTjNCLGdCQUFVLE9BREo7QUFFTlYsV0FBSyxPQUZDO0FBR05rRCxhQUFPLE9BSEQ7QUFJTnJDLGFBQU8sT0FKRDtBQUtOOEMsY0FBUyxPQUxIO0FBTU5DLGNBQVEsU0FORjtBQU9OakQsY0FBUSxDQVBGO0FBUU5rRCxvQkFBYyxDQVJSO0FBU05SLHNCQVRNO0FBVU5TLGlCQUFXO0FBVkwsTUFIUjtBQWdCQyx3QkFBQyxXQUFELElBQWEsT0FBTztBQUNuQmpELGFBQU8sTUFEWTtBQUVuQjhDLGNBQVEsTUFGVztBQUduQkksWUFBTzlCLFNBQVNsQixVQUFULElBQXVCLEtBQUszRSxLQUFMLENBQVcyRTtBQUh0QixNQUFwQjtBQWhCRCxJQUREO0FBd0JBOzs7MkJBSVE7O0FBRVIsT0FBSSxDQUFDLEtBQUsxRSxLQUFMLENBQVdrRSxJQUFoQixFQUFzQixPQUFPLElBQVA7O0FBRXRCLE9BQU14QyxZQUFZLEtBQUt1QixNQUFMLENBQVksS0FBS2pELEtBQUwsQ0FBV0ksSUFBdkIsQ0FBbEI7QUFDQSxPQUFNdUgsYUFBYTtBQUNsQnRILFFBQUssY0FEYTtBQUVsQnVILFNBQUssT0FGYTtBQUdsQmpELFdBQVE7QUFDUE4sZUFBVSxVQURIO0FBRVBHLFlBQU8sTUFGQTtBQUdQcUQsYUFBUSx1QkFIRDtBQUlQdkQsYUFBUTtBQUpEO0FBSFUsSUFBbkI7O0FBV0EsT0FBSSxLQUFLdUIsY0FBTCxDQUFvQixLQUFLOUYsS0FBTCxDQUFXa0UsU0FBWCxDQUFxQjdELElBQXpDLEtBQWtELEtBQUt5RixjQUFMLENBQW9CLEtBQUs5RixLQUFMLENBQVdrRSxTQUFYLENBQXFCN0QsSUFBekMsRUFBK0M2RyxVQUFyRyxFQUFpSDtBQUNoSFUsZUFBV1QsT0FBWCxHQUFxQixLQUFLakIsUUFBMUI7QUFDQTs7QUFHRCxVQUNDO0FBQUMsU0FBRCxDQUFPLFFBQVA7QUFBQTtBQUNFLFNBQUs2QixRQUFMLEVBREY7QUFFRSxTQUFLQyxjQUFMLEVBRkY7QUFJQztBQUFBO0FBQVNKLGVBQVQ7QUFDSWpHLGtCQUFhLEtBQUsxQixLQUFMLENBQVcyRixFQUF4QixHQUE2QixvQkFBQyxTQUFELDZCQUFlLEtBQUszRixLQUFMLENBQVd5RixPQUExQjtBQUN4QixXQUFLLEtBQUt6RixLQUFMLENBQVdLLEVBRFE7QUFFeEIsWUFBTSxLQUFLTixLQUFMLENBQVdrRSxTQUFYLENBQXFCdUMsR0FGSDtBQUd4QixlQUFTLEtBQUt4RyxLQUFMLENBQVcwRixNQUhJO0FBSXhCLGdCQUFVLEtBQUszRixLQUFMLENBQVdlLFFBSkc7QUFLeEIsa0JBQVksS0FBS2tGO0FBTE8sUUFBN0IsR0FNVTtBQVBkO0FBSkQsSUFERDtBQWdCQTs7O0VBL09zQm5HLE1BQU02QixTOztBQXVQOUJDLE9BQU9sQyxPQUFQLEdBQWlCK0YsU0FBakIsQzs7Ozs7O0FDOVBBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7OztBQ1JEOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVELG1EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCwwVEFBMFQ7QUFDN1c7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0M7Ozs7Ozs7Ozs7Ozs7OztBQy9CQSxJQUFNd0MsV0FBVyxtQkFBQXJJLENBQVEsRUFBUixDQUFqQjtBQUNBLElBQU00RixhQUFhLG1CQUFBNUYsQ0FBUSxFQUFSLENBQW5COztBQUdBLElBQU1zSSxjQUFjO0FBQ25CZCxjQUFjLElBREs7QUFFbkJQLFFBQVEsSUFGVztBQUduQkssYUFBYSxJQUhNO0FBSW5CdkMsYUFBYSxJQUpNO0FBS25CRCxlQUFlLElBTEk7QUFNbkJpQixTQUFTO0FBTlUsQ0FBcEI7O0FBVUEvRCxPQUFPbEMsT0FBUCxHQUFpQixVQUFTeUksSUFBVCxFQUFlO0FBQy9CLEtBQUl0QyxpQkFBSjs7QUFFQSxLQUFJLENBQUNzQyxJQUFMLEVBQVc7QUFDVnRDLGFBQVcsRUFBWDtBQUNBLEVBRkQsTUFFTyxJQUFJTCxXQUFXMkMsS0FBS0MsYUFBaEIsQ0FBSixFQUFvQztBQUMxQ3ZDLGFBQVdzQyxLQUFLQyxhQUFMLEVBQVg7QUFDQSxFQUZNLE1BRUEsSUFBSUgsU0FBU0UsS0FBS0MsYUFBZCxDQUFKLEVBQWtDO0FBQ3hDdkMsYUFBV3NDLEtBQUtDLGFBQWhCO0FBQ0E7QUFDRCxrQ0FBV0YsV0FBWCxFQUEyQnJDLFFBQTNCO0FBQ0EsQ0FYRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxJQUFNd0MsU0FBUyxtQkFBQXpJLENBQVEsR0FBUixDQUFmOztBQUdBLElBQU0wSSxNQUFNO0FBQ1huRSxPQUFPLEtBREk7QUFFWDdELEtBQUssSUFGTTtBQUdYRCxPQUFPLE9BSEk7QUFJWHFGLFVBQVUsRUFKQztBQUtYNkMsYUFBYSxFQUxGO0FBTVg5QixNQUFNO0FBTkssQ0FBWjs7QUFTQSxJQUFNK0IsU0FBUyxTQUFUQSxNQUFTLFFBQVM7QUFDdkIsS0FBSSxDQUFDdkksTUFBTWtFLElBQVgsRUFBaUIsT0FBT2xFLEtBQVA7QUFDakIsS0FBSUEsTUFBTXdHLEdBQU4sQ0FBVWhGLE1BQVYsSUFBb0IsQ0FBeEIsRUFBMkI7QUFDMUIsbUNBQ0k2RyxHQURKO0FBRUNDLGVBQVd0SSxNQUFNc0k7QUFGbEI7QUFJQTs7QUFQc0Isa0JBU0N0SSxNQUFNd0csR0FBTixDQUFVeEcsTUFBTXdHLEdBQU4sQ0FBVWhGLE1BQVYsR0FBbUIsQ0FBN0IsQ0FURDtBQUFBLEtBU2xCbkIsRUFUa0IsY0FTbEJBLEVBVGtCO0FBQUEsS0FTZm9GLE9BVGUsY0FTZkEsT0FUZTtBQUFBLEtBU1ByRixJQVRPLGNBU1BBLElBVE87O0FBVXZCLEtBQUlvRyxNQUFNeEcsTUFBTXdHLEdBQU4sQ0FBVWdDLE1BQVYsQ0FBaUI7QUFBQSxTQUFNbkgsRUFBRWhCLEVBQUYsSUFBUUEsRUFBZDtBQUFBLEVBQWpCLENBQVY7QUFDQSxRQUFPO0FBQ042RCxRQUFPLElBREQ7QUFFTjdELFFBRk07QUFHTkQsWUFITTtBQUlOcUYsa0JBSk07QUFLTjZDLGNBQWF0SSxNQUFNc0ksVUFMYjtBQU1OOUI7QUFOTSxFQUFQO0FBUUEsQ0FuQkQ7O0FBcUJBLElBQU1pQyxVQUFVLFNBQVZBLE9BQVUsQ0FBQ3pJLEtBQUQsRUFBTzBJLElBQVAsRUFBZ0I7QUFDL0IsS0FBSSxDQUFDQSxJQUFMLEVBQVcsT0FBTzFJLEtBQVA7QUFEb0IsS0FFekJLLEVBRnlCLEdBRVpxSSxJQUZZLENBRXpCckksRUFGeUI7QUFBQSxLQUVsQnNJLEVBRmtCLDBDQUVaRCxJQUZZOztBQUcvQixLQUFJLENBQUNySSxFQUFMLEVBQVMsT0FBT0wsS0FBUDtBQUNULEtBQUlBLE1BQU1LLEVBQU4sSUFBWUEsRUFBaEIsRUFBb0I7QUFBQSxNQUNib0YsT0FEYSxHQUNEekYsS0FEQyxDQUNieUYsT0FEYTs7QUFFbkIsbUNBQ0l6RixLQURKO0FBRUN5RixzQ0FBY0EsT0FBZCxFQUF5QmtELEVBQXpCO0FBRkQ7QUFJQTtBQUNELGtDQUNJM0ksS0FESjtBQUVDd0csT0FBTXhHLE1BQU13RyxHQUFOLENBQVVwRixHQUFWLENBQWMsYUFBSztBQUN4QixPQUFJQyxFQUFFaEIsRUFBRixJQUFRQSxFQUFaLEVBQWdCLE9BQU9nQixDQUFQO0FBQ2hCLG9DQUNJQSxDQURKO0FBRUNvRSx1Q0FDSXBFLEVBQUVvRSxPQUROLEVBRUlrRCxFQUZKO0FBRkQ7QUFPQSxHQVRLO0FBRlA7QUFhQSxDQXhCRDs7QUEwQkEsSUFBTUMsUUFBUSxTQUFSQSxLQUFRLENBQUM1SSxLQUFELEVBQVFlLElBQVIsRUFBYzBFLE9BQWQsRUFBb0M7QUFBQSxLQUFib0QsR0FBYSx1RUFBVCxJQUFTOztBQUNqRCxLQUFJN0ksTUFBTXNJLFVBQU4sQ0FBaUJoSCxPQUFqQixDQUF5QlAsSUFBekIsSUFBaUMsQ0FBckMsRUFBd0MsT0FBT2YsS0FBUDtBQUN4QyxLQUFJSSxPQUFPVyxLQUFLK0gsS0FBTCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBWDtBQUNBLEtBQUl6SSxLQUFLd0ksT0FBT1QsUUFBaEI7QUFDQSxLQUFJNUIsTUFBTSxFQUFWO0FBQ0EsS0FBSXhHLE1BQU1rRSxJQUFWLEVBQWdCO0FBQ2ZzQyxtREFBVXhHLE1BQU13RyxHQUFoQjtBQUNBQSxNQUFJakYsSUFBSixDQUFTO0FBQ1JsQixPQUFLTCxNQUFNSyxFQURIO0FBRVJELFNBQU9KLE1BQU1JLElBRkw7QUFHUnFGLFlBQVV6RixNQUFNeUYsT0FBTixJQUFpQjtBQUhuQixHQUFUO0FBS0E7QUFaZ0QsS0FhNUM2QyxVQWI0QyxHQWE5QnRJLEtBYjhCLENBYTVDc0ksVUFiNEM7OztBQWVqRCxRQUFPO0FBQ05wRSxRQUFPLElBREQ7QUFFTjdELFFBRk07QUFHTkQsWUFITTtBQUlOcUYsV0FBVUEsV0FBVyxFQUpmO0FBS042Qyx3QkFMTTtBQU1OOUI7QUFOTSxFQUFQO0FBUUEsQ0F2QkQ7O0FBeUJBLElBQU11QyxNQUFNLFNBQU5BLEdBQU0sQ0FBQy9JLEtBQUQsRUFBT0ssRUFBUCxFQUFjO0FBQ3pCLEtBQUlMLE1BQU1LLEVBQU4sSUFBWUEsRUFBWixJQUFrQkwsTUFBTXdHLEdBQU4sQ0FBVWhGLE1BQVYsSUFBb0IsQ0FBMUMsRUFBNkMsT0FBT3hCLEtBQVA7QUFDN0MsS0FBSWdKLE1BQU0sSUFBVjtBQUNBLEtBQUl4QyxNQUFNeEcsTUFBTXdHLEdBQU4sQ0FBVWdDLE1BQVYsQ0FBaUIsYUFBSztBQUMvQixNQUFJbkgsRUFBRWhCLEVBQUYsSUFBUUEsRUFBWixFQUFnQixPQUFPLElBQVA7QUFDaEIySSxRQUFNM0gsQ0FBTjtBQUNBLFNBQU8sS0FBUDtBQUNBLEVBSlMsQ0FBVjs7QUFNQSxLQUFJLENBQUMySCxHQUFMLEVBQVUsT0FBT2hKLEtBQVA7QUFDVixRQUFPNEksZ0NBQVU1SSxLQUFWLElBQWlCd0csUUFBakIsZ0JBQWdDd0MsSUFBSTVJLElBQXBDLEVBQTRDNEksSUFBSXZELE9BQWhELEVBQXlEdUQsSUFBSTNJLEVBQTdELENBQVA7QUFDQSxDQVhEOztBQWFBc0IsT0FBT2xDLE9BQVAsR0FBaUIsWUFBdUI7QUFBQSxLQUF0Qk8sS0FBc0IsdUVBQWhCcUksR0FBZ0I7QUFBQSxLQUFYWSxNQUFXOztBQUN2QyxTQUFRQSxPQUFPbEksSUFBZjtBQUNDLE9BQUssY0FBTDtBQUNDLE9BQUksQ0FBQ21JLE1BQU1DLE9BQU4sQ0FBY0YsT0FBT2pJLE9BQXJCLENBQUwsRUFBb0MsT0FBT2hCLEtBQVA7QUFDcEMsb0NBQ0lBLEtBREo7QUFFQ3NJLGdCQUFXVyxPQUFPakksT0FBUCxDQUFlSSxHQUFmLENBQW1CO0FBQUEsdUJBQWNnSSxDQUFkO0FBQUEsS0FBbkI7QUFGWjtBQUlEO0FBQ0EsT0FBSyxhQUFMO0FBQ0MsVUFBT2IsT0FBT3ZJLEtBQVAsQ0FBUDtBQUNEO0FBQ0EsT0FBSyxjQUFMO0FBQ0MsVUFBT3lJLFFBQVF6SSxLQUFSLEVBQWNpSixPQUFPakksT0FBckIsQ0FBUDtBQUNEO0FBQ0EsT0FBSyxVQUFMO0FBQ0MsVUFBTytILElBQUkvSSxLQUFKLEVBQVVpSixPQUFPakksT0FBakIsQ0FBUDtBQUNEO0FBaEJEOztBQW1CQSxRQUFPNEgsTUFBTTVJLEtBQU4sRUFBWWlKLE9BQU9sSSxJQUFuQixFQUF3QmtJLE9BQU9qSSxPQUEvQixDQUFQO0FBQ0EsQ0FyQkQsQzs7Ozs7OztBQ2pHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBLDZDQUE2QyxnQkFBZ0I7QUFDN0Q7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRTs7Ozs7O0FDcEJBLGtCQUFrQix5RDs7Ozs7O0FDQWxCO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkVBQTRFLGtCQUFrQixFQUFFO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGdDQUFnQztBQUN2RjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0NBQWtDLGdCQUFnQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7O0FDcENEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrQkFBa0IsRUFBRTs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLFlBQVk7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMscUJBQXFCO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsRUFBRTtBQUM1QyxDQUFDLFlBQVk7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFNBQVMscUJBQXFCO0FBQzNELGlDQUFpQyxhQUFhO0FBQzlDO0FBQ0EsR0FBRyxZQUFZO0FBQ2Y7QUFDQTs7Ozs7Ozs7OztBQ3JCQSxJQUFJcUksUUFBUSxDQUFaOztBQUVBMUgsT0FBT2xDLE9BQVAsR0FBaUIsWUFBTTtBQUN0QjRKO0FBQ0EsUUFBT0EsS0FBUDtBQUNBLENBSEQsQzs7Ozs7Ozs7O0FDRkExSCxPQUFPbEMsT0FBUCxHQUFpQjtBQUNoQjZKLFFBQVEsbUJBQUEzSixDQUFRLEdBQVIsQ0FEUTtBQUVoQjRKLGFBQWEsbUJBQUE1SixDQUFRLEdBQVIsQ0FGRztBQUdoQjZKLE9BQU8sbUJBQUE3SixDQUFRLEdBQVI7QUFIUyxDQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU1FLFFBQVEsbUJBQUFGLENBQVEsQ0FBUixDQUFkO0FBQ0EsbUJBQUFBLENBQVEsR0FBUjs7SUFFTThKLFU7OztBQUNMLHFCQUFZMUosS0FBWixFQUFtQjtBQUFBOztBQUFBLDRJQUNaQSxLQURZOztBQUdsQixRQUFLQyxLQUFMLEdBQWE7QUFDWjJGLE9BQUk7QUFEUSxHQUFiO0FBSGtCO0FBTWxCOzs7O3NDQUVtQjtBQUFBOztBQUNuQixPQUFJLENBQUMsS0FBSzVGLEtBQUwsQ0FBVzJKLEdBQVosSUFBbUIsQ0FBQyxLQUFLM0osS0FBTCxDQUFXMkosR0FBWCxDQUFldEosSUFBdkMsRUFBNkM7QUFDNUMsU0FBS0wsS0FBTCxDQUFXZSxRQUFYLENBQW9CLENBQUMsYUFBRCxFQUFlO0FBQy9CQyxXQUFPLGFBRHdCO0FBRS9CQyxjQUFVO0FBQ1QwSSxXQUFNLElBQUlDLEtBQUosQ0FBVSxzQ0FBVjtBQURHO0FBRnFCLEtBQWYsQ0FBcEI7O0FBT0E7QUFDQTtBQUNEQyxjQUFXO0FBQUEsV0FBSSxPQUFLakosUUFBTCxDQUFjLEVBQUNnRixJQUFHLElBQUosRUFBZCxDQUFKO0FBQUEsSUFBWCxFQUF3QyxFQUF4QztBQUNBOzs7MkJBRVE7QUFDUixPQUFJLENBQUMsS0FBSzVGLEtBQUwsQ0FBVzJKLEdBQWhCLEVBQXFCLE9BQU8sSUFBUDtBQURiLE9BRUhBLEdBRkcsR0FFSSxLQUFLM0osS0FGVCxDQUVIMkosR0FGRzs7QUFHUixPQUFJRyxRQUFRSCxJQUFJRyxLQUFKLENBQVVmLEtBQVYsQ0FBZ0IsSUFBaEIsQ0FBWjtBQUNBLFVBQ0M7QUFBQTtBQUFBLE1BQUssNkJBQTBCLEtBQUs5SSxLQUFMLENBQVcyRixFQUFYLEdBQWdCLFlBQWhCLEdBQStCLGVBQXpELENBQUw7QUFDQztBQUFBO0FBQUEsT0FBSyxXQUFVLGdCQUFmO0FBQ0M7QUFBQTtBQUFBO0FBQUsrRCxVQUFJdEo7QUFBVCxNQUREO0FBRUM7QUFBQTtBQUFBO0FBQUtzSixVQUFJSTtBQUFULE1BRkQ7QUFHQyxvQ0FIRDtBQUtFLHlCQUFZSixHQUFaLEVBQWlCbEksTUFBakIsSUFBMkIsQ0FBM0IsR0FBK0IsSUFBL0IsR0FBdUM7QUFBQTtBQUFBLFFBQU8sYUFBYSxDQUFwQjtBQUM3QjtBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUE7QUFDQztBQUFBO0FBQUEsV0FBSSxXQUFVLE1BQWQ7QUFBQTtBQUFBLFNBREQ7QUFFQztBQUFBO0FBQUEsV0FBSSxXQUFVLE9BQWQ7QUFBQTtBQUFBO0FBRkQ7QUFERCxPQUQ2QjtBQU83QjtBQUFBO0FBQUE7QUFDRSwyQkFBWWtJLEdBQVosRUFBaUJsQixNQUFqQixDQUF3QjtBQUFBLGVBQU96QyxHQUFQO0FBQUEsUUFBeEIsRUFBb0MzRSxHQUFwQyxDQUF3QztBQUFBLGVBQ3hDO0FBQUE7QUFBQSxXQUFJLEtBQUsyRSxHQUFUO0FBQ0M7QUFBQTtBQUFBLFlBQUksV0FBVSxNQUFkO0FBQXNCQTtBQUF0QixVQUREO0FBRUM7QUFBQTtBQUFBLFlBQUksV0FBVSxPQUFkO0FBQXVCMkQsY0FBSTNELEdBQUo7QUFBdkI7QUFGRCxTQUR3QztBQUFBLFFBQXhDO0FBREY7QUFQNkI7QUFMekMsS0FERDtBQXdCQztBQUFBO0FBQUEsT0FBSyxXQUFVLGlCQUFmO0FBQ0M7QUFBQTtBQUFBO0FBQ0U4RCxZQUFNekksR0FBTixDQUFVO0FBQUEsY0FBTTtBQUFBO0FBQUEsVUFBSSxLQUFLZ0ksQ0FBVDtBQUFhQTtBQUFiLFFBQU47QUFBQSxPQUFWO0FBREY7QUFERDtBQXhCRCxJQUREO0FBZ0NBOzs7RUEzRHVCdkosTUFBTTZCLFM7O0FBOEQvQitILFdBQVd0QixhQUFYLEdBQTJCO0FBQzFCaEIsY0FBYyxJQURZO0FBRTFCUCxRQUFRLElBRmtCO0FBRzFCSyxhQUFhLEtBSGE7QUFJMUI7QUFDQXhDLGVBQWU7QUFMVyxDQUEzQjs7QUFRQTlDLE9BQU9sQyxPQUFQLEdBQWlCZ0ssVUFBakIsQzs7Ozs7O0FDekVBLHlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU01SixRQUFRLG1CQUFBRixDQUFRLENBQVIsQ0FBZDtBQUNBLElBQU1HLE9BQU8sbUJBQUFILENBQVEsR0FBUixDQUFiO0FBQ0EsbUJBQUFBLENBQVEsR0FBUjs7SUFFTW9LLFU7OztBQUNMLHFCQUFZaEssS0FBWixFQUFtQjtBQUFBO0FBQUEsdUlBQ1pBLEtBRFk7QUFHbEI7Ozs7MkJBS1E7QUFDUixVQUNDO0FBQUE7QUFBQSxNQUFLLFdBQVUsWUFBZjtBQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERDtBQUVDLHdCQUFDLElBQUQsMkJBQU0sTUFBSyxZQUFYLElBQTRCLEtBQUtBLEtBQWpDO0FBRkQsSUFERDtBQU1BOzs7RUFoQnVCRixNQUFNNkIsUzs7QUFtQi9CQyxPQUFPbEMsT0FBUCxHQUFpQnNLLFVBQWpCLEM7Ozs7OztBQ3ZCQSx5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTWxLLFFBQVEsbUJBQUFGLENBQVEsQ0FBUixDQUFkO0FBQ0EsSUFBTUcsT0FBTyxtQkFBQUgsQ0FBUSxHQUFSLENBQWI7QUFDQSxtQkFBQUEsQ0FBUSxHQUFSO0FBQ0EsSUFBTXFLLEtBQUssbUJBQUFySyxDQUFRLEVBQVIsQ0FBWDs7SUFJTXNLLFM7OztBQUNMLG9CQUFZbEssS0FBWixFQUFtQjtBQUFBOztBQUFBLDBJQUNaQSxLQURZOztBQUVsQixRQUFLQyxLQUFMLEdBQWE7QUFDWnNDLFNBQU87QUFESyxHQUFiOztBQUZrQjtBQU1sQjs7OztzQ0FHbUI7QUFBQTs7QUFDbkJzSCxjQUFXO0FBQUEsV0FBSSxPQUFLakosUUFBTCxDQUFjLEVBQUMyQixNQUFLLElBQU4sRUFBZCxDQUFKO0FBQUEsSUFBWCxFQUEwQyxJQUExQztBQUNBOzs7MkJBS1E7QUFBQTs7QUFDUjRILFdBQVFDLEdBQVIsQ0FBWSxNQUFaLEVBQW1CLEtBQUtwSyxLQUFMLENBQVdxSyxPQUE5QjtBQUNBLE9BQU1DLE1BQU1MLEdBQUcsTUFBSDtBQUNYTSxXQUFRLENBQUMsS0FBS3RLLEtBQUwsQ0FBV3NDLElBQVosSUFBb0IsS0FBS3ZDLEtBQUwsQ0FBV3FLLE9BQVgsSUFBc0IsQ0FEdkM7QUFFWDlILFVBQU8sS0FBS3RDLEtBQUwsQ0FBV3NDLElBQVgsSUFBbUIsS0FBS3ZDLEtBQUwsQ0FBV3FLLE9BQVgsSUFBc0I7QUFGckMseUNBR1YsWUFIVSxFQUdNLEtBQUtySyxLQUFMLENBQVdxSyxPQUFYLElBQXNCLENBSDVCLCtDQUlILEtBQUtySyxLQUFMLENBQVdxSyxPQUFYLElBQXNCLENBSm5CLFFBQVo7QUFNQSxVQUNDO0FBQUE7QUFBQSxNQUFLLFdBQVdDLEdBQWhCO0FBQ0Msd0JBQUMsSUFBRCwyQkFBTSxNQUFLLE1BQVgsSUFBc0IsS0FBS3RLLEtBQTNCO0FBREQsSUFERDtBQUtBOzs7RUE5QnNCRixNQUFNNkIsUzs7QUFrQzlCdUksVUFBVTlCLGFBQVYsR0FBMEI7QUFBQSxRQUFPO0FBQ2hDekMsVUFBUyxDQUR1QjtBQUVoQ1csV0FBVSxpQkFBQ3RGLElBQUQsRUFBT3dKLEVBQVAsRUFBV3ZFLEtBQVgsRUFBcUI7QUFDOUIsT0FBSWpGLFFBQVEsT0FBWixFQUFxQjtBQUNwQndKLE9BQUcsQ0FBSDtBQUNBLElBRkQsTUFFTztBQUNOQSxPQUFHLENBQUg7QUFDQTs7QUFFRFgsY0FBVzVELEtBQVgsRUFBaUIsSUFBakI7QUFDQTtBQVYrQixFQUFQO0FBQUEsQ0FBMUI7O0FBYUFpRSxVQUFVNUQsT0FBVixHQUFvQixVQUFDcEcsQ0FBRCxFQUFHQyxDQUFILEVBQUtzSyxDQUFMLEVBQVc7QUFDOUJOLFNBQVFDLEdBQVIsQ0FBWSxPQUFaLEVBQW9CbEssQ0FBcEIsRUFBc0JDLENBQXRCLEVBQXdCc0ssQ0FBeEI7QUFDQVosWUFBVztBQUFBLFNBQUkxSixFQUFFLEdBQUYsQ0FBSjtBQUFBLEVBQVgsRUFBc0IsSUFBdEI7QUFDQTBKLFlBQVc7QUFBQSxTQUFJWSxHQUFKO0FBQUEsRUFBWCxFQUFtQixJQUFuQjtBQUNBLENBSkQ7O0FBTUE3SSxPQUFPbEMsT0FBUCxHQUFpQndLLFNBQWpCLEM7Ozs7OztBQzVEQSx5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU1wSyxRQUFRLG1CQUFBRixDQUFRLENBQVIsQ0FBZDs7ZUFDb0IsbUJBQUFBLENBQVEsRUFBUixDO0lBQVpxRCxPLFlBQUFBLE87O0FBQ1IsSUFBTXlILFVBQVUsbUJBQUE5SyxDQUFRLEdBQVIsQ0FBaEI7QUFDQSxJQUFNK0ssVUFBVSxtQkFBQS9LLENBQVEsR0FBUixDQUFoQjs7Z0JBQ2lCLG1CQUFBQSxDQUFRLEVBQVIsQztJQUFUb0QsSSxhQUFBQSxJOztBQUNSLElBQU00SCxZQUFZLG1CQUFBaEwsQ0FBUSxHQUFSLENBQWxCO0FBQ0EsbUJBQUFBLENBQVEsR0FBUjs7SUFFTXVELE07OztBQUNMLGlCQUFZbkQsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9JQUNaQSxLQURZOztBQUdsQixRQUFLNkssV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCcEssSUFBakIsT0FBbkI7QUFIa0I7QUFJbEI7Ozs7Z0NBRWE7QUFDYixRQUFLVCxLQUFMLENBQVdlLFFBQVgsQ0FBb0IsWUFBcEI7QUFDQTs7OzJCQUVRO0FBQ1IsVUFDQztBQUFBO0FBQUEsTUFBSyxJQUFHLFFBQVI7QUFDQztBQUFBO0FBQUEsT0FBSyxXQUFVLGFBQWY7QUFDQztBQUFDLFVBQUQ7QUFBQSxRQUFNLFdBQVUsc0JBQWhCLEVBQXVDLElBQUcsR0FBMUM7QUFBOEMsMEJBQUMsT0FBRDtBQUE5QyxNQUREO0FBRUM7QUFBQTtBQUFBLFFBQUssV0FBVSxzQkFBZixFQUFzQyxTQUFTLEtBQUs4SixXQUFwRDtBQUNDLDBCQUFDLE9BQUQ7QUFERDtBQUZELEtBREQ7QUFPQztBQUFBO0FBQUEsT0FBSSxXQUFVLE9BQWQ7QUFBdUIsVUFBSzdLLEtBQUwsQ0FBVzhLO0FBQWxDLEtBUEQ7QUFRQyx3QkFBQyxTQUFEO0FBUkQsSUFERDtBQVlBOzs7RUF4Qm1CaEwsTUFBTTZCLFM7O0FBMkIzQkMsT0FBT2xDLE9BQVAsR0FBaUJ1RCxRQUNmO0FBQUEsUUFBVTtBQUNUNkgsU0FBUTdLLE1BQU1zQyxJQUFOLENBQVd1SSxLQURWO0FBRVR0SSxXQUFVdkMsTUFBTXNDLElBQU4sQ0FBV0M7QUFGWixFQUFWO0FBQUEsQ0FEZSxFQUtkVyxNQUxjLENBQWpCLEM7Ozs7Ozs7QUNuQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQsbURBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELDJaQUEyWjtBQUM5YztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQzs7Ozs7OztBQy9CQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxtREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxtREFBbUQsZ1RBQWdUO0FBQ25XO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBLElBQU1yRCxRQUFRLG1CQUFBRixDQUFRLENBQVIsQ0FBZDs7ZUFDdUIsbUJBQUFBLENBQVEsRUFBUixDO0lBQWZtTCxVLFlBQUFBLFU7O0FBQ1IsSUFBTUMsVUFBVSxtQkFBQXBMLENBQVEsR0FBUixDQUFoQjtBQUNBLElBQU1xTCxhQUFhLG1CQUFBckwsQ0FBUSxHQUFSLENBQW5CO0FBQ0EsSUFBTXNMLG1CQUFtQixtQkFBQXRMLENBQVEsR0FBUixDQUF6QjtBQUNBLElBQU11TCxtQkFBbUIsbUJBQUF2TCxDQUFRLEdBQVIsQ0FBekI7O0lBRU13TCxlOzs7QUFDTCwwQkFBWXBMLEtBQVosRUFBbUI7QUFBQTtBQUFBLGlKQUNaQSxLQURZO0FBRWxCOzs7OzJCQUVRO0FBQ1IsVUFDQztBQUFBO0FBQUEsTUFBSyxXQUFVLFlBQWY7QUFDQyx3QkFBQyxnQkFBRCxPQUREO0FBRUMsd0JBQUMsZ0JBQUQsT0FGRDtBQUdDLHdCQUFDLE9BQUQsT0FIRDtBQUlDLHdCQUFDLFVBQUQ7QUFKRCxJQUREO0FBUUE7OztFQWQ0QkYsTUFBTTZCLFM7O0FBaUJwQ0MsT0FBT2xDLE9BQVAsR0FBaUJxTCxXQUFXSyxlQUFYLENBQWpCLEM7Ozs7Ozs7QUN4QkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQsbURBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELHNzQkFBc3NCO0FBQ3p2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQzs7Ozs7OztBQy9CQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxtREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxtREFBbUQscWRBQXFkO0FBQ3hnQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQzs7Ozs7OztBQy9CQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxtREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxtREFBbUQscVBBQXFQO0FBQ3hTO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DOzs7Ozs7O0FDL0JBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVELG1EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxxUEFBcVA7QUFDeFM7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0M7Ozs7OztBQy9CQSx5Qzs7Ozs7Ozs7O0FDQUEsSUFBTXRMLFFBQVEsbUJBQUFGLENBQVEsQ0FBUixDQUFkO0FBQ0EsSUFBTXlMLFVBQVUsbUJBQUF6TCxDQUFRLEdBQVIsQ0FBaEI7QUFDQSxJQUFNMEwsVUFBVSxtQkFBQTFMLENBQVEsR0FBUixDQUFoQjs7QUFFQSxtQkFBQUEsQ0FBUSxHQUFSOztBQUVBLElBQU13RCxPQUFPLFNBQVBBLElBQU8sUUFBUzs7QUFFckIsUUFDQztBQUFBO0FBQUEsSUFBSyxJQUFHLE1BQVI7QUFDQyxzQkFBQyxPQUFELElBQVMsTUFBSyxPQUFkLEdBREQ7QUFFQyxzQkFBQyxPQUFEO0FBRkQsRUFERDtBQU1BLENBUkQ7O0FBVUF4QixPQUFPbEMsT0FBUCxHQUFpQjBELElBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQSxJQUFNdEQsUUFBUSxtQkFBQUYsQ0FBUSxDQUFSLENBQWQ7O2VBQ29CLG1CQUFBQSxDQUFRLEVBQVIsQztJQUFacUQsTyxZQUFBQSxPOztBQUNSLElBQU1zSSxPQUFPLG1CQUFBM0wsQ0FBUSxHQUFSLENBQWI7QUFDQSxtQkFBQUEsQ0FBUSxHQUFSOztJQUVNeUwsTzs7O0FBQ0wsa0JBQVlyTCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0lBQ1pBLEtBRFk7O0FBRWxCLFFBQUtDLEtBQUwsR0FBYTtBQUNadUwsU0FBTztBQURLLEdBQWI7QUFGa0I7QUFLbEI7Ozs7dUNBRW9CO0FBQ3BCLE9BQUksS0FBS3ZMLEtBQUwsQ0FBV3VMLElBQVgsSUFBbUIsS0FBSzNLLElBQUwsQ0FBVTRLLEVBQVYsQ0FBYUMsWUFBcEMsRUFBa0Q7QUFDakQsU0FBSzlLLFFBQUwsQ0FBYyxFQUFFNEssTUFBTyxLQUFULEVBQWQ7QUFDQSxJQUZELE1BRU8sSUFBSSxDQUFDLEtBQUt2TCxLQUFMLENBQVd1TCxJQUFaLElBQW9CLENBQUMsS0FBSzNLLElBQUwsQ0FBVTRLLEVBQVYsQ0FBYUMsWUFBdEMsRUFBb0Q7QUFDMUQsU0FBSzlLLFFBQUwsQ0FBYyxFQUFFNEssTUFBTyxJQUFULEVBQWQ7QUFDQTtBQUNEOzs7MkJBRVE7QUFDUnJCLFdBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsVUFDQztBQUFBO0FBQUEsTUFBSyxJQUFHLG1CQUFSLEVBQTRCLEtBQUksSUFBaEM7QUFDRSxTQUFLbkssS0FBTCxDQUFXdUwsSUFBWCxHQUFrQixJQUFsQixHQUF5QixvQkFBQyxJQUFELDZCQUFVLEtBQUt4TCxLQUFmLElBQXNCLE1BQUssT0FBM0I7QUFEM0IsSUFERDtBQUtBOzs7RUF2Qm9CRixNQUFNNkIsUzs7QUEwQjVCQyxPQUFPbEMsT0FBUCxHQUFpQnVELFFBQ2hCLGdCQUFZO0FBQUEsS0FBVjBJLElBQVUsUUFBVkEsSUFBVTs7QUFDWCxrQ0FBV0EsSUFBWDtBQUNBLENBSGUsRUFJZk4sT0FKZSxDQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQSxJQUFNdkwsUUFBUSxtQkFBQUYsQ0FBUSxDQUFSLENBQWQ7QUFDQSxJQUFNZ00sU0FBUyxtQkFBQWhNLENBQVEsR0FBUixDQUFmO0FBQ0EsSUFBTWlNLE9BQU8sbUJBQUFqTSxDQUFRLEdBQVIsQ0FBYjs7SUFHTWtNLFc7OztBQUNMLHNCQUFZOUwsS0FBWixFQUFtQjtBQUFBOztBQUFBLDhJQUNaQSxLQURZOztBQUdsQixRQUFLQyxLQUFMLEdBQWE7QUFDWjhMLFdBQVMsSUFERztBQUVaQyxVQUFRLENBQUM7QUFGRyxHQUFiOztBQUtBLFFBQUs3RSxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhMUcsSUFBYixPQUFmO0FBQ0EsUUFBS3dMLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQnhMLElBQWxCLE9BQXBCO0FBVGtCO0FBVWxCOzs7O2lDQUVjO0FBQ2QwSixXQUFRQyxHQUFSLENBQVksS0FBWjtBQUNBLFFBQUtqRCxPQUFMLENBQWEsSUFBYjtBQUNBOzs7MEJBRU85RyxJLEVBQWdCO0FBQUEsT0FBVjJMLEtBQVUsdUVBQUosQ0FBQyxDQUFHOztBQUN2QixPQUFJRSxLQUFLN0wsUUFBUSxLQUFLTCxLQUFMLENBQVdtTSxLQUFYLENBQWlCOUwsSUFBakIsQ0FBUixHQUFpQ0EsSUFBakMsR0FBd0MsSUFBakQ7QUFDQSxPQUFJNkwsTUFBTSxLQUFLak0sS0FBTCxDQUFXOEwsTUFBckIsRUFBNkJHLEtBQUssSUFBTDs7QUFFN0IsT0FBSUEsTUFBTSxDQUFDLEtBQUtqTSxLQUFMLENBQVc4TCxNQUF0QixFQUE4QjtBQUM3QjdKLFdBQU9DLGdCQUFQLENBQXdCLE9BQXhCLEVBQWdDLEtBQUs4SixZQUFyQztBQUNBLElBRkQsTUFFTyxJQUFJLENBQUNDLEVBQUQsSUFBTyxLQUFLak0sS0FBTCxDQUFXOEwsTUFBdEIsRUFBOEI7QUFDcEM3SixXQUFPa0ssbUJBQVAsQ0FBMkIsT0FBM0IsRUFBbUMsS0FBS0gsWUFBeEM7QUFDQTs7QUFFRCxPQUFJLENBQUM1TCxJQUFMLEVBQVcyTCxRQUFRLEtBQUsvTCxLQUFMLENBQVdvTSxXQUFuQjs7QUFHWCxRQUFLekwsUUFBTCxDQUFjLEVBQUNtTCxRQUFPRyxFQUFSLEVBQVdGLFlBQVgsRUFBZDtBQUNBOzs7OEJBRVc1RixDLEVBQUc7QUFDZEEsS0FBRWtHLGVBQUY7QUFDQTs7O3NDQUVtQjtBQUNuQixPQUFJLENBQUMsS0FBS3RNLEtBQUwsQ0FBV3VNLFFBQWhCLEVBQTBCO0FBQ3pCLFNBQUt2TSxLQUFMLENBQVdlLFFBQVgsQ0FBb0IsV0FBcEI7QUFDQTtBQUNEOzs7MkJBRVE7QUFBQTs7QUFDUixPQUFJLENBQUMsS0FBS2YsS0FBTCxDQUFXdU0sUUFBaEIsRUFBMEIsT0FBTztBQUFBO0FBQUEsTUFBSyxJQUFHLFNBQVIsRUFBa0IsV0FBVSxjQUE1QjtBQUEyQyx3QkFBQyxNQUFELElBQVEsTUFBTSxHQUFkLEVBQW1CLE9BQU0sTUFBekI7QUFBM0MsSUFBUDtBQUMxQixVQUNDO0FBQUE7QUFBQSxNQUFLLElBQUcsU0FBUixFQUFrQiw4QkFBMkIsS0FBS3RNLEtBQUwsQ0FBVzhMLE1BQVgsR0FBb0IsVUFBcEIsR0FBaUMsRUFBNUQsQ0FBbEI7QUFDQyxjQUFTLEtBQUtTLFdBRGY7QUFFRSxTQUFLeE0sS0FBTCxDQUFXeU0sR0FBWCxDQUFlcEwsR0FBZixDQUFtQixVQUFDb0wsR0FBRCxFQUFNakosQ0FBTjtBQUFBLFlBQ25CLG9CQUFDLElBQUQsNkJBQVdpSixHQUFYO0FBQ0MsV0FBS0EsSUFBSXBNLElBQUosSUFBWW1ELENBRGxCO0FBRUMsWUFBTWlKLElBQUlwTSxJQUFKLElBQVksT0FBS0wsS0FBTCxDQUFXbU0sS0FBWCxDQUFpQk0sSUFBSXBNLElBQXJCLENBQVosR0FBeUMsT0FBS0wsS0FBTCxDQUFXME0sSUFBWCxDQUFnQmpFLE1BQWhCLENBQXVCO0FBQUEsY0FBUWtFLElBQUlDLEdBQUosQ0FBUXJMLE9BQVIsQ0FBZ0JrTCxJQUFJcE0sSUFBcEIsS0FBNkIsQ0FBckM7QUFBQSxPQUF2QixDQUF6QyxHQUEyRyxJQUZsSDtBQUdDLGVBQVMsT0FBSzhHLE9BSGY7QUFJQyxhQUFPM0QsQ0FKUjtBQUtDLGNBQVEsQ0FBQyxFQUFFLE9BQUt2RCxLQUFMLENBQVc4TCxNQUFYLElBQXFCLE9BQUs5TCxLQUFMLENBQVc4TCxNQUFYLElBQXFCVSxJQUFJcE0sSUFBaEQsQ0FMVjtBQU1DLG1CQUFhLE9BQUtKLEtBQUwsQ0FBVytMLEtBTnpCLElBRG1CO0FBQUEsS0FBbkI7QUFGRixJQUREO0FBY0E7OztFQTVEd0JsTSxNQUFNNkIsUzs7QUErRGhDQyxPQUFPbEMsT0FBUCxHQUFpQm9NLFdBQWpCLEM7Ozs7Ozs7OztBQ3BFQSxJQUFNaE0sUUFBUSxtQkFBQUYsQ0FBUSxDQUFSLENBQWQ7QUFDQSxtQkFBQUEsQ0FBUSxHQUFSO0FBQ0FnQyxPQUFPbEMsT0FBUCxHQUFpQixpQkFBUzs7QUFHekIsUUFDQztBQUFBO0FBQUEsSUFBSyxJQUFHLFFBQVI7QUFDQztBQUFBO0FBQUEsS0FBSyxXQUFVLFFBQWY7QUFBQTtBQUFBO0FBREQsRUFERDtBQUtBLENBUkQsQzs7Ozs7O0FDRkEseUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFNSSxRQUFRLG1CQUFBRixDQUFRLENBQVIsQ0FBZDtBQUNBLElBQU1xSyxLQUFLLG1CQUFBckssQ0FBUSxFQUFSLENBQVg7O2VBQ3FCLG1CQUFBQSxDQUFRLEdBQVIsQztJQUFiaU4sUSxZQUFBQSxROztBQUNSLElBQU1DLFlBQVksbUJBQUFsTixDQUFRLEdBQVIsQ0FBbEI7O0lBRU1tTixROzs7QUFDTCxtQkFBWS9NLEtBQVosRUFBbUI7QUFBQTtBQUFBLG1JQUNaQSxLQURZO0FBRWxCOzs7OzRCQUVTLENBRVQ7OzsyQkFFUTtBQUFBOztBQUNSLE9BQUksS0FBS0EsS0FBTCxDQUFXZ0IsSUFBWCxJQUFtQixJQUF2QixFQUE2QixPQUFPLDRCQUFJLFdBQVUsaUJBQWQsR0FBUDtBQUM3QixPQUFJLENBQUMsS0FBS2hCLEtBQUwsQ0FBVzBNLElBQVosSUFBb0IsQ0FBQyxLQUFLMU0sS0FBTCxDQUFXME0sSUFBWCxDQUFnQmpMLE1BQXpDLEVBQWlELE9BQU8sSUFBUDs7QUFGekMsZ0JBSTRCLEtBQUt6QixLQUpqQztBQUFBLE9BSURnTixLQUpDLFVBSURBLEtBSkM7QUFBQSxPQUlNM00sSUFKTixVQUlNQSxJQUpOO0FBQUEsT0FJWTRNLEdBSlosVUFJWUEsR0FKWjtBQUFBLE9BSWlCbEIsTUFKakIsVUFJaUJBLE1BSmpCOztBQUtSLE9BQU16QixNQUFNTCxHQUFHLFdBQUgsRUFBZTtBQUMxQjhCLFlBQVMsS0FBSy9MLEtBQUwsQ0FBVytMO0FBRE0sSUFBZixDQUFaO0FBR0EsT0FBSW1CLEtBQUssS0FBS2xOLEtBQUwsQ0FBVytMLE1BQVgsSUFBcUIsS0FBSy9MLEtBQUwsQ0FBV3FNLFdBQVgsR0FBeUIsQ0FBOUMsR0FBa0QsQ0FBbEQsR0FBc0RoRixLQUFLOEYsR0FBTCxDQUFTLEtBQUtuTixLQUFMLENBQVdnTSxLQUFYLEdBQW1CLEtBQUtoTSxLQUFMLENBQVdxTSxXQUF2QyxJQUFzRCxHQUFySDs7QUFFQSxPQUFJLENBQUMsS0FBS3JNLEtBQUwsQ0FBVytMLE1BQWhCLEVBQXdCLENBRXZCOztBQUVELFVBQ0M7QUFBQTtBQUFBLE1BQVMsV0FBV3pCLEdBQXBCO0FBQ0M7QUFBQTtBQUFBLE9BQUssV0FBVSxZQUFmLEVBQTRCLE9BQU87QUFDbEM4Qyx3QkFBcUJGLEVBQXJCO0FBRGtDLE9BQW5DO0FBR0MsZUFBUztBQUFBLGNBQUksT0FBS2xOLEtBQUwsQ0FBV21ILE9BQVgsQ0FBbUIsT0FBS25ILEtBQUwsQ0FBV0ssSUFBOUIsRUFBb0MsT0FBS0wsS0FBTCxDQUFXZ00sS0FBL0MsQ0FBSjtBQUFBLE9BSFY7QUFJQyx5QkFBQyxRQUFELEVBQWMsRUFBQ2dCLFlBQUQsRUFBUTNNLFVBQVIsRUFBYzRNLFFBQWQsRUFBbUJsQixjQUFuQixFQUFkO0FBSkQsS0FERDtBQU9DLHdCQUFDLFNBQUQsSUFBVyxRQUFRQSxNQUFuQixFQUEyQixNQUFNLEtBQUsvTCxLQUFMLENBQVcwTSxJQUE1QztBQVBELElBREQ7QUFXQTs7O0VBbENxQjVNLE1BQU02QixTOztBQXFDN0JDLE9BQU9sQyxPQUFQLEdBQWlCcU4sUUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBLElBQU1qTixRQUFRLG1CQUFBRixDQUFRLENBQVIsQ0FBZDtBQUNBLElBQU15TixTQUFTLG1CQUFBek4sQ0FBUSxHQUFSLENBQWY7QUFDQSxJQUFNME4sUUFBUSxtQkFBQTFOLENBQVEsR0FBUixDQUFkO0FBQ0EsSUFBTXFLLEtBQUssbUJBQUFySyxDQUFRLEVBQVIsQ0FBWDs7QUFFQUYsUUFBUW1OLFFBQVIsR0FBbUIsaUJBQVM7QUFBQTs7QUFDM0IsS0FBTXZDLE1BQU1MLEdBQUcsV0FBSCxzQkFBaUNqSyxNQUFNSyxJQUF2QyxnREFDVixrQkFEVSxFQUNZLENBQUMsQ0FBQ0wsTUFBTStMLE1BRHBCLHNDQUVYLFVBRlcsRUFFRSxDQUFDLENBQUMvTCxNQUFNaU4sR0FGVixRQUFaOztBQUtBLEtBQUlBLE1BQU1qTixNQUFNaU4sR0FBTixHQUFZO0FBQUE7QUFBQSxJQUFLLFdBQVUseUJBQWY7QUFBMENJLFNBQU9yTixNQUFNaU4sR0FBYjtBQUExQyxFQUFaLEdBQWlGLElBQTNGOztBQUdBLFFBQ0M7QUFBQTtBQUFBLElBQUssV0FBVzNDLEdBQWhCLEVBQXFCLE9BQU90SyxNQUFNZ04sS0FBTixJQUFlaE4sTUFBTUssSUFBakQ7QUFDRTRNLEtBREY7QUFFQztBQUFBO0FBQUEsS0FBSyxXQUFVLGVBQWY7QUFDRWpOLFNBQU1nTixLQUFOLElBQWVoTixNQUFNSztBQUR2QixHQUZEO0FBS0Msc0JBQUMsS0FBRCxJQUFPLFdBQVUsT0FBakIsRUFBeUIsTUFBTSxFQUEvQjtBQUxELEVBREQ7QUFTQSxDQWxCRDs7QUFvQkFYLFFBQVE2TixTQUFSLEdBQW9CLGlCQUFTO0FBQzVCLEtBQU1qRCxNQUFNTCxHQUFHLFlBQUgsdUJBQW1DakssTUFBTUssSUFBekMsRUFBZ0Q7QUFDM0QsZUFBYyxDQUFDLENBQUNMLE1BQU1pTjtBQURxQyxFQUFoRCxDQUFaOztBQUlBLEtBQUlBLE1BQU1qTixNQUFNaU4sR0FBTixHQUFZO0FBQUE7QUFBQSxJQUFNLFdBQVUsMEJBQWhCO0FBQTRDSSxTQUFPck4sTUFBTWlOLEdBQWI7QUFBNUMsRUFBWixHQUFvRixJQUE5Rjs7QUFHQSxRQUNDO0FBQUE7QUFBQSxJQUFLLFdBQVczQyxHQUFoQjtBQUNFMkMsS0FERjtBQUVDO0FBQUE7QUFBQSxLQUFNLFdBQVUsZ0JBQWhCO0FBQ0VqTixTQUFNSztBQURSO0FBRkQsRUFERDtBQVFBLENBaEJELEM7Ozs7Ozs7OztBQ3pCQSxJQUFNUCxRQUFRLG1CQUFBRixDQUFRLENBQVIsQ0FBZDs7QUFFQSxJQUFNNE4sUUFBUSxFQUFkOztBQUlBNUwsT0FBT2xDLE9BQVAsR0FBaUIsZ0JBQVE7QUFDeEIsS0FBSSxDQUFDVyxJQUFMLEVBQVcsT0FBTyxJQUFQO0FBQ1gsS0FBSW9OLE1BQU1ELE1BQU1uTixJQUFOLEtBQWUsbUJBQUFULENBQVEsR0FBUixDQUF6QjtBQUNBLFFBQU8sb0JBQUMsR0FBRCxPQUFQO0FBQ0EsQ0FKRDs7QUFNQXNDLE9BQU93TCxHQUFQLEdBQWE5TCxPQUFPbEMsT0FBcEIsQzs7Ozs7OztBQ1pBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVELG1EQUFtRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsMkJBQTJCLEVBQUUsRUFBRSxFQUFFLGVBQWU7O0FBRTlQOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHNDQUFzQyx1Q0FBdUMsZ0JBQWdCOztBQUU3RjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdUJBQXVCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxzUkFBc1I7QUFDelU7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0M7Ozs7Ozs7QUMvQkE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQsbURBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix1QkFBdUI7QUFDekM7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELGdIQUFnSDtBQUNuSztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQzs7Ozs7Ozs7O0FDL0JBLElBQU1JLFFBQVEsbUJBQUFGLENBQVEsQ0FBUixDQUFkO0FBQ0EsSUFBTStOLFdBQVcsbUJBQUEvTixDQUFRLEdBQVIsQ0FBakI7O0FBRUEsSUFBTWtOLFlBQVksU0FBWkEsU0FBWSxPQUFvQjtBQUFBLEtBQWxCSixJQUFrQixRQUFsQkEsSUFBa0I7QUFBQSxLQUFaWCxNQUFZLFFBQVpBLE1BQVk7O0FBQ3JDLFFBQ0M7QUFBQTtBQUFBLElBQUksV0FBVSxZQUFkO0FBQ0VXLE9BQUtyTCxHQUFMLENBQVMsVUFBQ3VNLENBQUQsRUFBR3BLLENBQUg7QUFBQSxVQUNUO0FBQUE7QUFBQSxNQUFJLEtBQUtBLENBQVQsRUFBWSxTQUFTO0FBQUEsYUFBSXFLLE1BQU0sR0FBTixDQUFKO0FBQUEsTUFBckI7QUFDQyxnQkFBVSxXQURYO0FBRUMsWUFBTztBQUNOVCx1QkFBb0I1SixJQUFFLEdBQXRCO0FBRE07QUFGUjtBQU1DLHdCQUFDLFFBQUQsSUFBVSxNQUFNb0ssQ0FBaEIsRUFBbUIsT0FBT3BLLENBQTFCO0FBTkQsSUFEUztBQUFBLEdBQVQ7QUFERixFQUREO0FBY0EsQ0FmRDs7QUFpQkE1QixPQUFPbEMsT0FBUCxHQUFpQm9OLFNBQWpCLEM7Ozs7Ozs7OztBQ3BCQSxJQUFNaE4sUUFBUSxtQkFBQUYsQ0FBUSxDQUFSLENBQWQ7O0FBRUEsSUFBTStOLFdBQVcsU0FBWEEsUUFBVyxRQUFTOztBQUV6QixRQUNDO0FBQUE7QUFBQSxJQUFLLFdBQVUsVUFBZjtBQUNFM04sUUFBTThOLElBQU4sQ0FBV3pOO0FBRGIsRUFERDtBQUtBLENBUEQ7O0FBU0F1QixPQUFPbEMsT0FBUCxHQUFpQmlPLFFBQWpCLEM7Ozs7OztBQ1hBLHlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTTdOLFFBQVEsbUJBQUFGLENBQVEsQ0FBUixDQUFkOztlQUNvQixtQkFBQUEsQ0FBUSxFQUFSLEM7SUFBWnFELE8sWUFBQUEsTzs7Z0JBQ2lDLG1CQUFBckQsQ0FBUSxFQUFSLEM7SUFBbENtTyxLLGFBQUFBLEs7SUFBT0MsTSxhQUFBQSxNO0lBQVFoTCxJLGFBQUFBLEk7SUFBSytILFUsYUFBQUEsVTs7QUFDM0IsSUFBTWtELFNBQVMsbUJBQUFyTyxDQUFRLEdBQVIsQ0FBZjtBQUNBLElBQU1zTyxTQUFTLG1CQUFBdE8sQ0FBUSxHQUFSLENBQWY7O0FBRUEsSUFBSTZLLElBQUksQ0FBUjs7SUFFTWEsTzs7O0FBQ0wsa0JBQVl0TCxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0lBQ1pBLEtBRFk7O0FBRWxCLFFBQUttTyxHQUFMLEdBQVcsTUFBS0EsR0FBTCxDQUFTMU4sSUFBVCxPQUFYO0FBQ0EsUUFBS2tKLEdBQUwsR0FBVyxNQUFLQSxHQUFMLENBQVNsSixJQUFULE9BQVg7QUFIa0I7QUFJbEI7Ozs7c0JBRUcyTixHLEVBQUlDLEUsRUFBSTtBQUFBOztBQUNYLFVBQU87QUFBQSxXQUFNLE9BQUtyTyxLQUFMLENBQVdzTyxJQUFYLENBQWdCO0FBQzVCdE4sc0JBQWdCb04sR0FEWTtBQUU1Qm5OLGNBQVVvTjtBQUZrQixLQUFoQixDQUFOO0FBQUEsSUFBUDtBQUlBOzs7c0JBRUdyTixJLEVBQU07QUFBQTs7QUFDVCxVQUFPO0FBQUEsV0FBTWtOLE9BQU9sTixJQUFQLEVBQWEsT0FBS2hCLEtBQUwsQ0FBV3NPLElBQXhCLENBQU47QUFBQSxJQUFQO0FBQ0E7OzsyQkFFUTtBQUFBOztBQUNSLFVBQ0M7QUFBQTtBQUFBLE1BQUssV0FBVSxTQUFmO0FBQ0UsZUFBVTtBQUFBLGFBQUduRSxRQUFRQyxHQUFSLENBQVksUUFBWixFQUFxQmhFLENBQXJCLENBQUg7QUFBQSxNQURaO0FBRUU7QUFBQTtBQUFBLE9BQVEsU0FBUyxtQkFBSTtBQUFDcUUsV0FBSSxPQUFLekssS0FBTCxDQUFXc08sSUFBWCxDQUFnQixFQUFDdE4sTUFBSyxPQUFOLEVBQWNDLFNBQVF3SixDQUF0QixFQUFoQjtBQUEwQyxPQUFwRTtBQUFBO0FBQUEsS0FGRjtBQUdFLG1DQUhGO0FBQUE7QUFLQyxtQ0FMRDtBQU1DO0FBQUMsU0FBRDtBQUFBLE9BQU0sSUFBRyxTQUFUO0FBQUE7QUFBQSxLQU5EO0FBTW9DLG1DQU5wQztBQU9DO0FBQUMsU0FBRDtBQUFBLE9BQU0sSUFBRyxhQUFUO0FBQUE7QUFBQSxLQVBEO0FBTzRDLG1DQVA1QztBQVFDO0FBQUMsU0FBRDtBQUFBLE9BQU0sSUFBRywrQkFBVDtBQUFBO0FBQUEsS0FSRDtBQVFzRSxtQ0FSdEU7QUFTQyxtQ0FURDtBQVVFO0FBQUMsV0FBRDtBQUFBO0FBQ0MseUJBQUMsS0FBRCxJQUFPLFdBQVd3RCxNQUFsQixFQUEwQixNQUFLLG9CQUEvQixHQUREO0FBRUMseUJBQUMsS0FBRCxJQUFPLE1BQUssVUFBWixFQUF1QixXQUFXQSxNQUFsQztBQUZELEtBVkY7QUFjQyxtQ0FkRDtBQWdCQztBQUFBO0FBQUEsT0FBSyxXQUFVLFdBQWY7QUFDQztBQUFBO0FBQUEsUUFBSyxXQUFVLEtBQWY7QUFDQztBQUFBO0FBQUEsU0FBSyxXQUFVLGdCQUFmO0FBQ0M7QUFBQTtBQUFBLFVBQVEsV0FBVSwyQkFBbEIsRUFBOEMsU0FBUyxLQUFLdEUsR0FBTCxDQUFTLFFBQVQsQ0FBdkQ7QUFBQTtBQUFBO0FBREQsT0FERDtBQUlDO0FBQUE7QUFBQSxTQUFLLFdBQVUsT0FBZjtBQUNDO0FBQUE7QUFBQSxVQUFRLFdBQVUsNkJBQWxCLEVBQWdELFNBQVMsS0FBS0EsR0FBTCxDQUFTLE1BQVQsQ0FBekQ7QUFBQTtBQUFBO0FBREQsT0FKRDtBQU9DO0FBQUE7QUFBQSxTQUFLLFdBQVUsT0FBZjtBQUNDO0FBQUE7QUFBQSxVQUFRLFdBQVUsMEJBQWxCLEVBQTZDLFNBQVMsS0FBS0EsR0FBTCxDQUFTLFFBQVQsQ0FBdEQ7QUFBQTtBQUFBO0FBREQsT0FQRDtBQVVDO0FBQUE7QUFBQSxTQUFLLFdBQVUsT0FBZjtBQUNDO0FBQUE7QUFBQSxVQUFRLFdBQVUsMkJBQWxCLEVBQThDLFNBQVMsS0FBS0EsR0FBTCxDQUFTLE9BQVQsQ0FBdkQ7QUFBQTtBQUFBO0FBREQ7QUFWRDtBQURELEtBaEJEO0FBaUNDO0FBQUE7QUFBQSxPQUFLLFdBQVUsV0FBZjtBQUNDO0FBQUE7QUFBQSxRQUFLLFdBQVUsS0FBZjtBQUNDO0FBQUE7QUFBQSxTQUFLLFdBQVUsZ0JBQWY7QUFDQztBQUFBO0FBQUEsVUFBSyxXQUFVLGtCQUFmO0FBQ0M7QUFBQTtBQUFBO0FBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBRUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZEO0FBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUhEO0FBSUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUpEO0FBS0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUxEO0FBTUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQU5EO0FBT0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVBEO0FBUUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVJEO0FBU0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQVREO0FBVUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZEO0FBREQ7QUFERDtBQUREO0FBREQsS0FqQ0Q7QUFzREM7QUFBQTtBQUFBLE9BQUssV0FBVSxXQUFmO0FBQ0M7QUFBQTtBQUFBLFFBQUssV0FBVSxLQUFmO0FBQ0M7QUFBQTtBQUFBLFNBQUssV0FBVSxPQUFmO0FBQ0M7QUFBQTtBQUFBLFVBQUssV0FBVSxxQkFBZjtBQUFBO0FBQUE7QUFERCxPQUREO0FBTUMsbUNBQUssV0FBVSxPQUFmLEdBTkQ7QUFPQztBQUFBO0FBQUEsU0FBSyxXQUFVLGdCQUFmO0FBQ0M7QUFBQTtBQUFBLFVBQUssV0FBVSx1QkFBZjtBQUFBO0FBQUE7QUFERCxPQVBEO0FBWUMsbUNBQUssV0FBVSxPQUFmLEdBWkQ7QUFhQztBQUFBO0FBQUEsU0FBSyxXQUFVLGdCQUFmO0FBQ0M7QUFBQTtBQUFBLFVBQUssV0FBVSxxQkFBZjtBQUFBO0FBQUE7QUFERDtBQWJEO0FBREQ7QUF0REQsSUFERDtBQThFQTs7O0VBakdvQjdKLE1BQU02QixTOztBQW9HNUJDLE9BQU9sQyxPQUFQLEdBQWlCcUwsV0FBVzlILFFBQzNCO0FBQUEsUUFBVSxFQUFWO0FBQUEsQ0FEMkIsRUFFM0I7QUFBQSxRQUFTO0FBQ1JxTDtBQURRLEVBQVQ7QUFBQSxDQUYyQixFQUsxQmhELE9BTDBCLENBQVgsQ0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVHQSxJQUFNeEwsUUFBUSxtQkFBQUYsQ0FBUSxDQUFSLENBQWQ7O2VBQ3FCLG1CQUFBQSxDQUFRLEVBQVIsQztJQUFkbUwsVSxZQUFBQSxVOztJQUVEa0QsTTs7O0FBQ0wsaUJBQVlqTyxLQUFaLEVBQW1CO0FBQUE7QUFBQSwrSEFDWkEsS0FEWTtBQUVsQjs7OzsyQkFFUTtBQUNSbUssV0FBUUMsR0FBUixDQUFZLEtBQUtwSyxLQUFqQjtBQUNBLFVBQ0M7QUFBQTtBQUFBLE1BQUssV0FBVSxRQUFmO0FBQUE7QUFDU3FILFNBQUtrSCxNQUFMO0FBRFQsSUFERDtBQUtBOzs7RUFabUJ6TyxNQUFNNkIsUzs7QUFlM0JDLE9BQU9sQyxPQUFQLEdBQWlCcUwsV0FBV2tELE1BQVgsQ0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDbEJNTyxXOzs7QUFDTCxzQkFBWUMsR0FBWixFQUFpQjtBQUFBOztBQUFBLDhJQUNWQSxHQURVOztBQUVoQixRQUFLcE8sSUFBTCxHQUFZLGFBQVo7QUFDQSxRQUFLb0osSUFBTCxHQUFZcEMsS0FBS2tILE1BQUwsRUFBWjtBQUhnQjtBQUloQjs7O0VBTHdCM0UsSzs7QUFRMUJsSyxRQUFRZ1AsTUFBUixHQUFpQixnQkFBUTtBQUN4QixLQUFJL0UsTUFBTSxJQUFJQyxLQUFKLENBQVUsY0FBVixDQUFWO0FBQ0EwRSxNQUFLO0FBQ0p0TixRQUFPLGFBREg7QUFFSkMsV0FBVSxFQUFDMEksUUFBRDtBQUZOLEVBQUw7QUFJQSxDQU5EOztBQVNBakssUUFBUXNCLElBQVIsR0FBZSxnQkFBUTtBQUN0QixLQUFJMkksTUFBTSxJQUFJZ0YsU0FBSixDQUFjLGtCQUFkLENBQVY7QUFDQUwsTUFBSztBQUNKdE4sUUFBTyxhQURIO0FBRUpDLFdBQVUsRUFBQzBJLFFBQUQ7QUFGTixFQUFMO0FBSUEsQ0FORDs7QUFRQWpLLFFBQVFrUCxNQUFSLEdBQWlCLGdCQUFRO0FBQ3hCLEtBQUlqRixNQUFNLElBQUk2RSxXQUFKLENBQWdCLGdCQUFoQixDQUFWO0FBQ0FGLE1BQUs7QUFDSnROLFFBQU8sYUFESDtBQUVKQyxXQUFVLEVBQUMwSSxRQUFEO0FBRk4sRUFBTDtBQUlBLENBTkQ7O0FBU0FqSyxRQUFRbVAsS0FBUixHQUFnQixnQkFBUTtBQUN2QixLQUFJO0FBQ0gsS0FBR3hOLEdBQUgsQ0FBTyxRQUFQO0FBQ0EsRUFGRCxDQUVFLE9BQU1zSSxHQUFOLEVBQVc7QUFDWjJFLE9BQUs7QUFDSnROLFNBQU0sYUFERjtBQUVKQyxZQUFTLEVBQUMwSSxRQUFEO0FBRkwsR0FBTDtBQUlBO0FBQ0QsQ0FURCxDOzs7Ozs7QUNsQ0EseUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFNN0osUUFBUSxtQkFBQUYsQ0FBUSxDQUFSLENBQWQ7O0lBRU15RCxNOzs7QUFDTCxpQkFBWXJELEtBQVosRUFBbUI7QUFBQTtBQUFBLCtIQUNaQSxLQURZO0FBRWxCOzs7O3lCQUVNO0FBQ04sVUFDQztBQUFDLFNBQUQsQ0FBTyxRQUFQO0FBQUE7QUFFQztBQUFBO0FBQUEsT0FBRyxRQUFPLEVBQVY7QUFBQTtBQUFBLEtBRkQ7QUFHQztBQUFBO0FBQUEsT0FBRyxRQUFPLEVBQVY7QUFBQTtBQUFBLEtBSEQ7QUFLQztBQUFBO0FBQUEsT0FBRyxRQUFPLEVBQVY7QUFBQTtBQUFBLEtBTEQ7QUFNQztBQUFBO0FBQUEsT0FBRyxRQUFPLEVBQVY7QUFBQTtBQUFBLEtBTkQ7QUFPQztBQUFBO0FBQUEsT0FBRyxRQUFPLEVBQVY7QUFBQTtBQUFBLEtBUEQ7QUFRQztBQUFBO0FBQUEsT0FBRyxRQUFPLEVBQVY7QUFBQTtBQUFBLEtBUkQ7QUFTQztBQUFBO0FBQUEsT0FBRyxRQUFPLEVBQVY7QUFBQTtBQUFBLEtBVEQ7QUFVQztBQUFBO0FBQUEsT0FBRyxRQUFPLEVBQVY7QUFBQTtBQUFBLEtBVkQ7QUFXQztBQUFBO0FBQUEsT0FBRyxRQUFPLEVBQVY7QUFBQTtBQUFBLEtBWEQ7QUFZQztBQUFBO0FBQUEsT0FBRyxRQUFPLEVBQVY7QUFBQTtBQUFBO0FBWkQsSUFERDtBQWtCQTs7OzJCQUNRO0FBQ1IsVUFDQztBQUFBO0FBQUEsTUFBUSxPQUFPLEVBQUM4TyxTQUFRLGdCQUFULEVBQWY7QUFBQTtBQUFBLElBREQ7QUFHQTs7O0VBN0JtQmhQLE1BQU02QixTOztBQWtDM0JDLE9BQU9sQyxPQUFQLEdBQWlCMkQsTUFBakIsQzs7Ozs7Ozs7O0FDcENBLElBQU0wTCxtQkFBbUIsbUJBQUFuUCxDQUFRLEdBQVIsQ0FBekI7O2VBQzBCLG1CQUFBQSxDQUFRLEdBQVIsQztJQUFsQkMsYSxZQUFBQSxhOztBQUNSLElBQU15TyxPQUFPLG1CQUFBMU8sQ0FBUSxHQUFSLENBQWI7O0FBSUEsSUFBTW9QLFdBQVc7QUFDaEJ6TSxPQUFPLG1CQUFBM0MsQ0FBUSxHQUFSLENBRFM7QUFFaEIrTCxPQUFPLG1CQUFBL0wsQ0FBUSxHQUFSLENBRlM7QUFHaEJzRCxTQUFTckQ7QUFITyxDQUFqQjs7QUFNQSxJQUFNb1AsTUFBTSxDQUNYLG1CQUFBclAsQ0FBUSxHQUFSLENBRFcsQ0FBWjs7QUFLQSxJQUFNeUMsUUFBUTBNLGlCQUFpQkMsUUFBakIsRUFBMEJDLEdBQTFCLENBQWQ7O0FBRUFYLEtBQUtqTSxLQUFMOztBQUVBVCxPQUFPbEMsT0FBUCxHQUFpQjJDLEtBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VDckJ1QixtQkFBQXpDLENBQVEsR0FBUixDO0lBQWZpQyxVLFlBQUFBLFU7O0FBRVIsSUFBSVcsVUFBVVgsWUFBZDs7QUFFQSxJQUFNeUcsTUFBTTtBQUNYd0MsUUFBUS9JLFNBQVMrSSxLQUROO0FBRVh0SSxpQkFGVztBQUdYME0sY0FBYyxJQUhILENBR087QUFIUCxDQUFaOztBQU9BdE4sT0FBT2xDLE9BQVAsR0FBaUIsWUFBdUI7QUFBQSxLQUF0Qk8sS0FBc0IsdUVBQWhCcUksR0FBZ0I7QUFBQSxLQUFYWSxNQUFXOzs7QUFFdkMsU0FBUUEsT0FBT2xJLElBQWY7QUFDQyxPQUFLLE9BQUw7QUFDQyxvQ0FBV2YsS0FBWCxJQUFrQjZLLE9BQU01QixPQUFPakksT0FBL0I7QUFDRDtBQUNBLE9BQUssU0FBTDtBQUNDLG9DQUFXaEIsS0FBWCxJQUFrQnVDLFNBQVEwRyxPQUFPakksT0FBakM7QUFDRDtBQUNBLE9BQUssY0FBTDtBQUNDLG9DQUFXaEIsS0FBWCxJQUFrQmlQLGFBQWEsSUFBL0I7QUFDRDtBQUNBLE9BQUssZUFBTDtBQUNDLG9DQUFXalAsS0FBWCxJQUFrQmlQLGFBQWEsS0FBL0I7QUFDRDtBQVpEOztBQWVBLFFBQU9qUCxLQUFQO0FBQ0EsQ0FsQkQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBLElBQU1xSSxNQUFNO0FBQ1hpRSxXQUFXLEtBREE7QUFFWEosUUFBUSxFQUZHO0FBR1hNLE1BQU0sRUFISztBQUlYQyxPQUFPO0FBSkksQ0FBWjs7QUFPQTlLLE9BQU9sQyxPQUFQLEdBQWlCLFlBQXNCO0FBQUEsS0FBckJPLEtBQXFCLHVFQUFmcUksR0FBZTtBQUFBLEtBQVhZLE1BQVc7O0FBQ3RDLFNBQU9BLE9BQU9sSSxJQUFkO0FBQ0MsT0FBSyxhQUFMO0FBQ0MsT0FBSSxDQUFDbUksTUFBTUMsT0FBTixDQUFjRixPQUFPakksT0FBUCxDQUFld0wsR0FBZixJQUFzQixDQUFDdEQsTUFBTUMsT0FBTixDQUFjRixPQUFPakksT0FBUCxDQUFleUwsSUFBN0IsQ0FBckMsQ0FBTCxFQUErRSxPQUFPek0sS0FBUDtBQUMvRSxPQUFJOEQsK0JBQVN1RSxHQUFULElBQWFpRSxVQUFTLElBQXRCLEVBQTJCRSxLQUFJdkQsT0FBT2pJLE9BQVAsQ0FBZXdMLEdBQTlDLEdBQUo7QUFDQTFJLE1BQUcySSxJQUFILEdBQVV4RCxPQUFPakksT0FBUCxDQUFleUwsSUFBZixDQUFvQmpFLE1BQXBCLENBQTJCO0FBQUEsV0FBUSxRQUFPa0UsR0FBUCx1REFBT0EsR0FBUCxNQUFjLFFBQWQsSUFBMEJBLElBQUlDLEdBQTlCLElBQXFDekQsTUFBTUMsT0FBTixDQUFjdUQsSUFBSUMsR0FBbEIsQ0FBN0M7QUFBQSxJQUEzQixDQUFWO0FBQ0E3SSxNQUFHMkksSUFBSCxDQUFRM0csT0FBUixDQUFnQixlQUFPO0FBQ3JCNEcsUUFBSUMsR0FBSixDQUFRN0csT0FBUixDQUFnQixhQUFLO0FBQ3BCLFNBQUksQ0FBQ2hDLEdBQUdvSSxLQUFILENBQVMxQixDQUFULENBQUwsRUFBa0IxRyxHQUFHb0ksS0FBSCxDQUFTMUIsQ0FBVCxJQUFjLENBQWQ7QUFDbEIxRyxRQUFHb0ksS0FBSCxDQUFTMUIsQ0FBVDtBQUNBLEtBSEQ7QUFJQSxJQUxGO0FBTUEsVUFBTzFHLEVBQVA7QUFDRDtBQVpEOztBQWVBLFFBQU85RCxLQUFQO0FBQ0EsQ0FqQkQsQzs7Ozs7Ozs7O0FDUEEsSUFBTWtQLFVBQVUsbUJBQUF2UCxDQUFRLEdBQVIsQ0FBaEI7QUFDQSxJQUFNcUksV0FBVyxtQkFBQXJJLENBQVEsRUFBUixDQUFqQjs7QUFFQUYsUUFBUW9MLEtBQVIsR0FBZ0IsVUFBQ3pJLEtBQUQsRUFBUStNLElBQVIsRUFBY3RFLEtBQWQsRUFBcUI1QixNQUFyQixFQUFnQztBQUMvQyxLQUFJLENBQUM0QixLQUFELElBQVUsQ0FBQ0EsTUFBTXVFLFFBQXJCLEVBQStCO0FBQy9CdkUsU0FBUUEsTUFBTXVFLFFBQU4sRUFBUjtBQUNBdE4sVUFBUytJLEtBQVQsR0FBaUJBLEtBQWpCO0FBQ0FzRSxNQUFLbEcsTUFBTDtBQUNBLENBTEQ7O0FBT0F4SixRQUFRLFdBQVIsSUFBdUIsVUFBQzJDLEtBQUQsRUFBUStNLElBQVIsRUFBaUI7QUFDdkNELFNBQVEsdUJBQXVCOUgsS0FBS2tILE1BQUwsRUFBL0IsRUFDRWUsSUFERixDQUNPLGdCQUFROztBQUViLE1BQUksQ0FBQ3JILFNBQVNVLElBQVQsQ0FBRCxJQUFtQixDQUFDUSxNQUFNQyxPQUFOLENBQWNULEtBQUs4RCxHQUFuQixDQUFwQixJQUErQyxDQUFDdEQsTUFBTUMsT0FBTixDQUFjVCxLQUFLK0QsSUFBbkIsQ0FBcEQsRUFBOEUsTUFBTSxJQUFJOUMsS0FBSixDQUFVLDBFQUFWLENBQU47QUFDOUV3RixPQUFLO0FBQ0pwTyxTQUFPLGFBREg7QUFFSkMsWUFBVTBIO0FBRk4sR0FBTDtBQUlBLEVBUkYsRUFTRTRHLEtBVEYsQ0FTUTtBQUFBLFNBQUtILEtBQUssRUFBQ3BPLE1BQUssYUFBTixFQUFvQkMsU0FBUSxFQUFDMEksS0FBSXZELENBQUwsRUFBNUIsRUFBTCxDQUFMO0FBQUEsRUFUUjtBQVVBLENBWEQsQzs7Ozs7Ozs7O0FDUkF4RSxPQUFPbEMsT0FBUCxHQUFpQixlQUFPO0FBQ3ZCLFFBQU84UCxNQUFNcEIsR0FBTixFQUNIa0IsSUFERyxDQUNFLGVBQU87QUFDWixNQUFJRyxJQUFJQyxNQUFKLElBQWMsR0FBbEIsRUFBdUIsT0FBT0QsSUFBSUUsSUFBSixFQUFQO0FBQ3ZCLE1BQUlGLElBQUlDLE1BQUosSUFBYyxHQUFsQixFQUF1QixNQUFNLElBQUk5RixLQUFKLENBQVUsZ0JBQVYsQ0FBTjtBQUN2QixTQUFPLEVBQVA7QUFDQSxFQUxHLENBQVA7QUFNQSxDQVBELEMiLCJmaWxlIjoiLi9qcy9jb3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZmluZVByb3BlcnR5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcy5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxudmFyIEljb25CYXNlID0gZnVuY3Rpb24gSWNvbkJhc2UoX3JlZiwgX3JlZjIpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcbiAgdmFyIGNvbG9yID0gX3JlZi5jb2xvcjtcbiAgdmFyIHNpemUgPSBfcmVmLnNpemU7XG4gIHZhciBzdHlsZSA9IF9yZWYuc3R5bGU7XG4gIHZhciB3aWR0aCA9IF9yZWYud2lkdGg7XG4gIHZhciBoZWlnaHQgPSBfcmVmLmhlaWdodDtcblxuICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydjaGlsZHJlbicsICdjb2xvcicsICdzaXplJywgJ3N0eWxlJywgJ3dpZHRoJywgJ2hlaWdodCddKTtcblxuICB2YXIgX3JlZjIkcmVhY3RJY29uQmFzZSA9IF9yZWYyLnJlYWN0SWNvbkJhc2U7XG4gIHZhciByZWFjdEljb25CYXNlID0gX3JlZjIkcmVhY3RJY29uQmFzZSA9PT0gdW5kZWZpbmVkID8ge30gOiBfcmVmMiRyZWFjdEljb25CYXNlO1xuXG4gIHZhciBjb21wdXRlZFNpemUgPSBzaXplIHx8IHJlYWN0SWNvbkJhc2Uuc2l6ZSB8fCAnMWVtJztcbiAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdzdmcnLCBfZXh0ZW5kcyh7XG4gICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgIGZpbGw6ICdjdXJyZW50Q29sb3InLFxuICAgIHByZXNlcnZlQXNwZWN0UmF0aW86ICd4TWlkWU1pZCBtZWV0JyxcbiAgICBoZWlnaHQ6IGhlaWdodCB8fCBjb21wdXRlZFNpemUsXG4gICAgd2lkdGg6IHdpZHRoIHx8IGNvbXB1dGVkU2l6ZVxuICB9LCByZWFjdEljb25CYXNlLCBwcm9wcywge1xuICAgIHN0eWxlOiBfZXh0ZW5kcyh7XG4gICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgIGNvbG9yOiBjb2xvciB8fCByZWFjdEljb25CYXNlLmNvbG9yXG4gICAgfSwgcmVhY3RJY29uQmFzZS5zdHlsZSB8fCB7fSwgc3R5bGUpXG4gIH0pKTtcbn07XG5cbkljb25CYXNlLnByb3BUeXBlcyA9IHtcbiAgY29sb3I6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBzaXplOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gIHdpZHRoOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gIGhlaWdodDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcl0pLFxuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3Rcbn07XG5cbkljb25CYXNlLmNvbnRleHRUeXBlcyA9IHtcbiAgcmVhY3RJY29uQmFzZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZShJY29uQmFzZS5wcm9wVHlwZXMpXG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBJY29uQmFzZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9yZWFjdC1pY29uLWJhc2UvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvYXNzaWduXCIpO1xuXG52YXIgX2Fzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NpZ24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfYXNzaWduMi5kZWZhdWx0IHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvYXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE2IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZykpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuQ29udGFpbmVyID0gcmVxdWlyZSgnLi9jb250YWluZXInKTtcbmV4cG9ydHMubW9kYWxzUmVkdXNlciA9IHJlcXVpcmUoJy4vcmVkdXNlcicpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdmVuZG9yL2NvbnRhaW5lci1mb3ItbW9kYWwvaW5kZXguanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9iaiwga2V5cykge1xuICB2YXIgdGFyZ2V0ID0ge307XG5cbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlO1xuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlO1xuICAgIHRhcmdldFtpXSA9IG9ialtpXTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDExNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5jbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0YSA6IHRoaXMucHJvcHMuYSxcblx0XHRcdGIgOiB0aGlzLnByb3BzLmIsXG5cdFx0XHRtb2RhbDogdGhpcy5wcm9wcy5uYW1lLFxuXHRcdFx0aWQgOiB0aGlzLnByb3BzLl9pZFxuXHRcdH1cblxuXHRcdHRoaXMub3Blbk0gPSB0aGlzLm9wZW5NLmJpbmQodGhpcylcblx0XHR0aGlzLnVwZGF0ZU0gPSB0aGlzLnVwZGF0ZU0uYmluZCh0aGlzKVxuXHRcdHRoaXMudXBNID0gdGhpcy51cE0uYmluZCh0aGlzKVxuXHR9XG5cblx0Y2hhbmdlKG5hbWUpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFtuYW1lXSA6IHRoaXMucmVmc1tuYW1lXS52YWx1ZVxuXHRcdH0pXG5cdH1cblxuXHRvcGVuTSgpIHtcblx0XHRsZXQge2EsYixtb2RhbH0gPSB0aGlzLnN0YXRlXG5cdFx0dGhpcy5wcm9wcy5kaXNwYXRjaCh7XG5cdFx0XHR0eXBlIDogYG1vZGFsOiR7bW9kYWx9YCxcblx0XHRcdHBheWxvYWQgOiB7YSxifVxuXHRcdH0pXG5cdH1cblxuXHR1cGRhdGVNKCkge1xuXHRcdGxldCB7YSxiLGlkfSA9IHRoaXMuc3RhdGU7XG5cdFx0dGhpcy5wcm9wcy5kaXNwYXRjaCh7XG5cdFx0XHR0eXBlIDogJ21vZGFsOnVwZGF0ZScsXG5cdFx0XHRwYXlsb2FkIDoge1x0XHRcdFx0XG5cdFx0XHRcdGlkIDogTnVtYmVyKGlkKSxcblx0XHRcdFx0YSxiXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXG5cdHVwTSgpIHtcblx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKHtcblx0XHRcdHR5cGUgOiAnbW9kYWw6dXAnLFxuXHRcdFx0cGF5bG9hZCA6IE51bWJlcih0aGlzLnN0YXRlLmlkKVxuXHRcdH0pXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRsZXQgaWRzID0gdGhpcy5wcm9wcy5fcm93Lm1hcChtID0+IG0uaWQpO1xuXHRcdGlmIChpZHMuaW5kZXhPZih0aGlzLnByb3BzLl9pZCkgPCAwKSB7XG5cdFx0XHRpZHMucHVzaCh0aGlzLnByb3BzLl9pZCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiRm9ybVwiPlxuXHRcdFx0XHQ8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtYm9yZGVyZWQgdGFibGUtc3RyaXBlZCB0YWJsZS1kYXJrXCI+XG5cdFx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+bmFtZTwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZD57dGhpcy5wcm9wcy5uYW1lfTwvdGQ+XG5cdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+X2lkPC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkPnt0aGlzLnByb3BzLl9pZH08L3RkPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0PHRkPl9jb3VudDwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZD57dGhpcy5wcm9wcy5fcm93Lmxlbmd0aH08L3RkPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0PHRkPmE8L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+e3RoaXMucHJvcHMuYX08L3RkPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0PHRkPmI8L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+e3RoaXMucHJvcHMuYn08L3RkPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHQ8L3RhYmxlPlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblxuXG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc21cIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj5hPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBvbkNoYW5nZT17KCk9PnRoaXMuY2hhbmdlKCdhJyl9IHJlZj1cImFcIiBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUuYX0gdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xsXCIvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiPmI8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IG9uQ2hhbmdlPXsoKT0+dGhpcy5jaGFuZ2UoJ2InKX0gcmVmPVwiYlwiIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5ifSB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbGxcIi8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIGlucHV0LWdyb3VwLXNtXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG5cdFx0XHRcdFx0XHRcdCAgICBcdDxsYWJlbCBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCIgaHRtbEZvcj1cIm1vZGFsXCI+bW9kYWw6PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0IFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdCAgPHNlbGVjdCBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMubmFtZX0gcmVmPVwibW9kYWxcIiBvbkNoYW5nZT17KCk9PnRoaXMuY2hhbmdlKCdtb2RhbCcpfSBjbGFzc05hbWU9XCJjdXN0b20tc2VsZWN0XCIgaWQ9XCJtb2RhbFwiPlxuXHRcdFx0XHRcdFx0XHQgICAgPG9wdGlvbiB2YWx1ZT1cInRlc3RcIj50ZXN0PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdCAgICA8b3B0aW9uIHZhbHVlPVwiZGlzY3Vzc2lvblwiPmRpc2N1c3Npb248L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0ICA8L3NlbGVjdD5cblx0XHRcdFx0XHRcdFx0ICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub3Blbk19IGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCI+cHVzaDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sIG9mZnNldC0xXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc21cIj5cblx0XHRcdFx0XHRcdFx0ICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudXBkYXRlTX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXdhcm5pbmdcIj51cGRhdGU8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0ICA8c2VsZWN0IGRlZmF1bHRWYWx1ZT17dGhpcy5wcm9wcy5faWR9IHJlZj1cImlkXCIgb25DaGFuZ2U9eygpPT50aGlzLmNoYW5nZSgnaWQnKX0gY2xhc3NOYW1lPVwiY3VzdG9tLXNlbGVjdFwiIGlkPVwibW9kYWxcIj5cblx0XHRcdFx0XHRcdFx0ICAgIHtpZHMubWFwKGlkID0+IDxvcHRpb24ga2V5PXtpZH0gdmFsdWU9e2lkfT57aWR9PC9vcHRpb24+KX1cblx0XHRcdFx0XHRcdFx0ICA8L3NlbGVjdD5cblx0XHRcdFx0XHRcdFx0ICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMudXBNfSBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyXCI+cHVzaDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZvcm1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBmaWxlcy9tb2RhbHMvZm9ybS5qcyIsImNvbnN0IGdldERpc3BsYXkgPSAoKSA9PiB7XG5cdGxldCB3ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuXHRpZiAodyA8IDU0NSkgcmV0dXJuICd4cyc7XG5cdGlmICh3IDwgNzY3KSByZXR1cm4gJ3NtJztcblx0aWYgKHcgPCA5OTMpIHJldHVybiAnbWQnO1xuXHRpZiAodyA8IDEyMDEpIHJldHVybiAnbGcnO1xuXG5cdHJldHVybiAneGwnO1xufVxuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBzdG9yZSA9PiB7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCgpID0+IHtcblx0XHRsZXQgbyA9IHN0b3JlLmdldFN0YXRlKCkubWFpbi5kaXNwbGF5O1xuXHRcdGxldCBuID0gZ2V0RGlzcGxheSgpO1xuXHRcdGlmIChvICE9IG4pIHtcblx0XHRcdHN0b3JlLmRpc3BhdGNoKHtcblx0XHRcdFx0dHlwZSA6ICdkaXNwbGF5Jyxcblx0XHRcdFx0cGF5bG9hZCA6IG5cblx0XHRcdH0pXG5cdFx0fVxuXHR9KVx0XG5cbn1cblxuZXhwb3J0cy5nZXREaXNwbGF5ID0gZ2V0RGlzcGxheTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcGkvZGlzcC5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IHJlbmRlciA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpLnJlbmRlcjtcbmNvbnN0IHsgUHJvdmlkZXIgfSA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4JylcbmNvbnN0IHsgSGFzaFJvdXRlciB9ID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyLWRvbScpXG5jb25zdCBlSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5yZXF1aXJlKCdub3JtYWxpemUuY3NzJylcbnJlcXVpcmUoJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJylcblxuY29uc3QgQXBwID0gcmVxdWlyZSgnLi9hcHAnKTtcbmNvbnN0IHN0b3JlID0gcmVxdWlyZSgnYXBpL3N0b3JlJylcblxuXG5yZW5kZXIoXG5cdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuXHRcdDxIYXNoUm91dGVyIGJhc2VuYW1lPVwiL1wiID5cblx0XHRcdDxBcHAvPlxuXHRcdDwvSGFzaFJvdXRlcj5cblx0PC9Qcm92aWRlcj5cbixlSWQpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXguanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCB7IExpbmsgfSA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlci1kb20nKVxuY29uc3QgeyBjb25uZWN0IH0gPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpXG5yZXF1aXJlKCcuL2Nzcy9yb290LmNzcycpO1xuY29uc3QgeyBDb250YWluZXIgfSA9IHJlcXVpcmUoJ3YvY29udGFpbmVyLWZvci1tb2RhbCcpXG5jb25zdCBtb2RhbHMgPSByZXF1aXJlKCcuL2FwcGZpbGVzL21vZGFscycpO1xuY29uc3QgSGVhZGVyID0gcmVxdWlyZSgnLi9hcHBmaWxlcy9oZWFkZXInKTtcbmNvbnN0IFBhZ2UgPSByZXF1aXJlKCcuL2FwcGZpbGVzL3BhZ2UvJyk7XG5jb25zdCBGb290ZXIgPSByZXF1aXJlKCcuL2FwcGZpbGVzL2Zvb3RlcicpXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdH1cblxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PENvbnRhaW5lciBpZD1cInJvb3RcIiBjbGFzc05hbWU9XCJyb290XCIgbW9kYWxzPXttb2RhbHN9PlxuXHRcdFx0XHQ8SGVhZGVyIC8+XG5cdFx0XHRcdDxQYWdlIC8+XG5cdFx0XHRcdDxGb290ZXIgLz5cblx0XHRcdDwvQ29udGFpbmVyPlxuXHRcdCk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBcHBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAuanMiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgJE9iamVjdCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5PYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpIHtcbiAgcmV0dXJuICRPYmplY3QuZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbi8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpLCAnT2JqZWN0JywgeyBkZWZpbmVQcm9wZXJ0eTogcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZiB9KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jc3Mvcm9vdC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBNb2RhbCA9IHJlcXVpcmUoJy4vbW9kYWwnKTtcbmNvbnN0IHByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcbmNvbnN0IHsgY29ubmVjdCB9ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxubGV0IGkgPSBmYWxzZVxuY2xhc3MgQ29udGFpbmVyRm9yTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0dGhpcy5yb290ID0ge1xuXHRcdFx0aXNGaXhlZCA6IGZhbHNlLFxuXHRcdFx0dG9wIDogMCxcblx0XHRcdHNjcm9sbCA6IDBcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUobnAsbnMscykge1xuXHRcdGlmICh0aGlzLnJvb3Quc2Nyb2xsID4gMCkge1xuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsKHRoaXMucm9vdC5zY3JvbGwgPT0gMSA/IHRoaXMucm9vdC50b3AgOiAwKSk7XG5cdFx0XHR0aGlzLnJvb3Quc2Nyb2xsID0gMDtcblx0XHR9XG5cdH1cblxuXG5cdGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobnApIHtcblx0XHRpZiAodGhpcy5wcm9wcy5tb2RhbERhdGEub3BlbiA9PSBucC5tb2RhbERhdGEub3BlbikgcmV0dXJuO1xuXG5cdFx0aWYgKG5wLm1vZGFsRGF0YS5vcGVuKSB7XG5cdFx0XHR0aGlzLnJvb3QgPSB7XG5cdFx0XHRcdGlzRml4ZWQgOiB0cnVlLFxuXHRcdFx0XHR0b3AgOiB3aW5kb3cucGFnZVlPZmZzZXQsXG5cdFx0XHRcdHcgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG5cdFx0XHRcdHNjcm9sbDogMlxuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5yb290LnByIDwgMCkgdGhpcy5yb290LnByID0gMDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yb290ID0ge1xuXHRcdFx0XHRpc0ZpeGVkIDogZmFsc2UsXG5cdFx0XHRcdHRvcCA6IHRoaXMucm9vdC50b3AsXG5cdFx0XHRcdHByIDogMCxcblx0XHRcdFx0c2Nyb2xsIDogMVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGdldFN0eWxlKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRwb3NpdGlvbiA6IHRoaXMucm9vdC5pc0ZpeGVkID8gJ2ZpeGVkJyA6ICdyZWxhdGl2ZScsXG5cdFx0XHR0b3AgOiB0aGlzLnJvb3QuaXNGaXhlZCA/IGAtJHt0aGlzLnJvb3QudG9wfXB4YCA6IDAsXG5cdFx0XHR6SW5kZXg6IDEsXG5cdFx0XHRsZWZ0IDogMCxcblx0XHRcdHdpZHRoOiB0aGlzLnJvb3QuaXNGaXhlZCA/IHRoaXMucm9vdC53IDogJzEwMCUnXG5cdFx0XHQvLyBwYWRkaW5nUmlnaHQgOiB0aGlzLnJvb3QucHJcblx0XHR9XG5cdH1cblxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7bW9kYWxzLCBsYXllck9wYWNpdHksIGxheWVyQ29sb3IsIHN0eWxlLCBtb2RhbERhdGEsIGRpc3BhdGNoLCAuLi5wcm9wc1Jvb3QgfSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3QgcHJvcHNNb2RhbCA9IHtcblx0XHRcdG1vZGFscywgXG5cdFx0XHRsYXllck9wYWNpdHksIFxuXHRcdFx0bGF5ZXJDb2xvcixcblx0XHRcdG1vZGFsRGF0YSxcblx0XHRcdGRpc3BhdGNoXG5cdFx0fTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cIl9fcm9vdFwiIHN0eWxlPXt7XG5cdFx0XHRcdHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXHRcdFx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdFx0XHR6SW5kZXggOiAxXG5cdFx0XHR9fT5cblx0XHRcdFx0PGRpdiB7Li4ucHJvcHNSb290fSBzdHlsZT17dGhpcy5nZXRTdHlsZSgpfT5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxNb2RhbCB7Li4uIHByb3BzTW9kYWx9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbkNvbnRhaW5lckZvck1vZGFsLmRlZmF1bHRQcm9wcyA9IHtcblx0bGF5ZXJPcGFjaXR5IDogMzAsXG5cdGxheWVyQ29sb3IgOiAnIzAwMCdcbn1cblxuQ29udGFpbmVyRm9yTW9kYWwucHJvcFR5cGVzID0ge1xuXHRtb2RhbHMgOiBwcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cdGxheWVyT3BhY2l0eSA6IHByb3BUeXBlcy5udW1iZXIsXG5cdGxheWVyQ29sb3IgOiBwcm9wVHlwZXMuc3RyaW5nXG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb25uZWN0KFxuXHRcdHN0YXRlID0+ICh7bW9kYWxEYXRhOnN0YXRlLm1vZGFsc30pXG5cdCkoQ29udGFpbmVyRm9yTW9kYWwpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdmVuZG9yL2NvbnRhaW5lci1mb3ItbW9kYWwvY29udGFpbmVyLmpzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMjE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHsgYXNzaWduOiByZXF1aXJlKCcuL19vYmplY3QtYXNzaWduJykgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDIxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgZ09QUyA9IHJlcXVpcmUoJy4vX29iamVjdC1nb3BzJyk7XG52YXIgcElFID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciAkYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9ICEkYXNzaWduIHx8IHJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICB2YXIgQSA9IHt9O1xuICB2YXIgQiA9IHt9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIFMgPSBTeW1ib2woKTtcbiAgdmFyIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAoaykgeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCA9IHRvT2JqZWN0KHRhcmdldCk7XG4gIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMTtcbiAgdmFyIGdldFN5bWJvbHMgPSBnT1BTLmY7XG4gIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgd2hpbGUgKGFMZW4gPiBpbmRleCkge1xuICAgIHZhciBTID0gSU9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgIHZhciBrZXlzID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGogPSAwO1xuICAgIHZhciBrZXk7XG4gICAgd2hpbGUgKGxlbmd0aCA+IGopIGlmIChpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKSBUW2tleV0gPSBTW2tleV07XG4gIH0gcmV0dXJuIFQ7XG59IDogJGFzc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMjE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IHtjb25uZWN0fSA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4JylcbmNvbnN0IENsb3NlQnV0dG9uID0gcmVxdWlyZSgncmVhY3QtaWNvbnMvbGliL2ZhL2Nsb3NlJylcbmNvbnN0IHBhcnNlU2V0dGluZ3MgPSByZXF1aXJlKCcuL3V0aWxzL3BhcnNlLXNldHRpbmdzJylcbmNvbnN0IGlzRnVuY3Rpb24gPSByZXF1aXJlKCdsb2Rhc2gvaXNGdW5jdGlvbicpO1xuXG5cbmNsYXNzIFJvb3RNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRvcGVuIDogZmFsc2UsXG5cdFx0XHRpZCA6IDAsXG5cdFx0XHRuYW1lIDogJycsXG5cdFx0XHRvcHRpb25zIDoge30sXG5cdFx0XHRteURhdGEgOiBudWxsLFxuXHRcdFx0aXMgOiBmYWxzZSxcblx0XHRcdHNldHRpbmdzIDoge31cblx0XHR9XG5cblx0XHR0aGlzLm1vZGFscyA9IHByb3BzLm1vZGFsc1xuXHRcdHRoaXMubW9kYWxzU2V0dGluZ3MgPSB7fVxuXHRcdE9iamVjdC5rZXlzKHByb3BzLm1vZGFscykuZm9yRWFjaChrZXkgPT4ge1xuXHRcdFx0dGhpcy5tb2RhbHNTZXR0aW5nc1trZXldID0gcGFyc2VTZXR0aW5ncyhwcm9wcy5tb2RhbHNba2V5XSlcblx0XHRcdHRoaXMuc3RhdGUuc2V0dGluZ3Nba2V5XSA9IHBhcnNlU2V0dGluZ3MocHJvcHMubW9kYWxzW2tleV0pXG5cdFx0fSlcblxuXHRcdHByb3BzLmRpc3BhdGNoKHtcblx0XHRcdHR5cGUgOiAnbW9kYWw6X19saXN0Jyxcblx0XHRcdHBheWxvYWQgOiBPYmplY3Qua2V5cyhwcm9wcy5tb2RhbHMpXG5cdFx0fSlcblxuXHRcdHRoaXMuc2V0dGluZ3MgPSB7fTtcblx0XHR0aGlzLkNvbXBvbmVudCA9IG51bGw7XG5cblx0XHR0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5jbG9zZUlubiA9IHRoaXMuY2xvc2VJbm4uYmluZCh0aGlzKVxuXHRcdHRoaXMuZ2V0Q29tcCgpXG5cdH1cblxuXHRnZXRDb21wKCkge1xuXHRcdHRoaXMuQ29tcG9uZW50ID0gdGhpcy5tb2RhbHNbdGhpcy5wcm9wcy5tb2RhbERhdGEubmFtZV07XG5cdFx0dGhpcy5zZXR0aW5ncyA9IHBhcnNlU2V0dGluZ3ModGhpcy5Db21wb25lbnQpXG5cdH1cblxuXHRjbG9zZShlLHQpIHtcblx0XHRjb25zdCB0eXBlID0gdCA/ICdyZXNldCc6ICdjbG9zZSc7XG5cdFx0Ly8gY29uc29sZS5sb2coZSwgZS50YXJnZXQgPT09IHRoaXMucmVmcy5sYXllciwgZS50YXJnZXQgPT09IHRoaXMucmVmcy5tb2RhbCwgZS50YXJnZXQgPT09IHRoaXMucmVmcy50ZXN0KVxuXHRcdFxuXHRcdGlmICh0aGlzLm1vZGFsc1NldHRpbmdzW3RoaXMuc3RhdGUubmFtZV0uY2xvc2VGbiAmJiBpc0Z1bmN0aW9uKHRoaXMubW9kYWxzU2V0dGluZ3NbdGhpcy5zdGF0ZS5uYW1lXS5jbG9zZUZuKSkge1xuXHRcdFx0dGhpcy5tb2RhbHNTZXR0aW5nc1t0aGlzLnN0YXRlLm5hbWVdLmNsb3NlRm4odHlwZSxteURhdGEgPT4ge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtteURhdGF9KVxuXHRcdFx0fSwgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKGBtb2RhbDoke3R5cGV9YClcblx0XHRcdH0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goYG1vZGFsOiR7dHlwZX1gKVxuXHRcdH1cblx0fVxuXG5cdGNsb3NlSW5uKGUpIHtcblx0XHRpZiAoZS50YXJnZXQgPT0gdGhpcy5yZWZzLmlubmVyKSB0aGlzLmNsb3NlKGUpO1xuXHR9XG5cblxuXHRjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wKSB7XG5cdFx0bGV0IHtvcGVuLGlkLCBuYW1lLCBvcHRpb25zfSA9IG5wLm1vZGFsRGF0YVxuXG5cdFx0aWYgKG5wLm1vZGFsRGF0YS5vcGVuICYmICF0aGlzLnN0YXRlLm9wZW4pIHtcblx0XHRcdHRoaXMuc3RhdGUub3BlbiA9IHRydWUsXG5cdFx0XHR0aGlzLnN0YXRlLmlzID0gdHJ1ZTtcblx0XHRcdHRoaXMuc3RhdGUuaWQgPSBpZDtcblx0XHRcdHRoaXMuc3RhdGUubmFtZSA9IG5hbWU7XG5cdFx0XHR0aGlzLnN0YXRlLm15RGF0YSA9IHRoaXMuc3RhdGUuc2V0dGluZ3NbbmFtZV0ubXlEYXRhO1xuXHRcdFx0dGhpcy5zdGF0ZS5vcHRpb25zID0gb3B0aW9ucztcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIW5wLm1vZGFsRGF0YS5vcGVuICYmIHRoaXMuc3RhdGUub3Blbikge1xuXHRcdFx0dGhpcy5zdGF0ZS5vcGVuID0gZmFsc2UsXG5cdFx0XHR0aGlzLnN0YXRlLmlzID0gdHJ1ZTtcblx0XHRcdHRoaXMuc3RhdGUuaWQgPSBpZDtcblx0XHRcdHRoaXMuc3RhdGUubmFtZSA9IG5hbWU7XG5cdFx0XHR0aGlzLnN0YXRlLm9wdGlvbnMgPSB7fTtcblx0XHRcdHRoaXMuc3RhdGUubXlEYXRhID0gbnVsbDtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIW5wLm1vZGFsRGF0YS5vcGVuKSByZXR1cm47XG5cblxuXG5cdFx0aWYgKHRoaXMuc3RhdGUuaWQgIT0gbnAubW9kYWxEYXRhLmlkKSB7XG5cdFx0XHRpZiAobnAubW9kYWxEYXRhLnJvdy5sZW5ndGggPiAwIFxuXHRcdFx0XHRcdCYmIG5wLm1vZGFsRGF0YS5yb3dbbnAubW9kYWxEYXRhLnJvdy5sZW5ndGggLSAxXS5pZCA9PSB0aGlzLnN0YXRlLmlkIFxuXHRcdFx0XHRcdCYmIHRoaXMuc3RhdGUuc2V0dGluZ3NbbmFtZV0uY2xvc2VGbiBcblx0XHRcdFx0XHQmJiBpc0Z1bmN0aW9uKHRoaXMuc3RhdGUuc2V0dGluZ3NbbmFtZV0uY2xvc2VGbikpIHtcblx0XHRcdFx0bGV0IHQgPSBEYXRlLm5vdygpO1xuXG5cdFx0XHRcdHRoaXMuc3RhdGUuc2V0dGluZ3NbbmFtZV0uY2xvc2VGbihcblx0XHRcdFx0XHQncmVwbGFjZScsXG5cdFx0XHRcdFx0bWQgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHQgPT0gRGF0ZS5ub3coKSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLm15RGF0YSA9IG1kO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRcdFx0bXlEYXRhIDogbWRcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRcdGlmICh0ID09IERhdGUubm93KCkpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5pcyA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7aXM6ZmFsc2V9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KVxuXHRcdFx0XHR0aGlzLnN0YXRlLmlzID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc3RhdGUuaXMgPSBmYWxzZVxuXHRcdFx0fVxuXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xuXHRcdGlmICghdGhpcy5zdGF0ZS5pcykge1xuXHRcdFx0dGhpcy5nZXRDb21wKCk7XG5cdFx0XHRsZXQge2lkLCBuYW1lLCBvcHRpb25zfSA9IHRoaXMucHJvcHMubW9kYWxEYXRhO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdG15RGF0YSA6IHRoaXMuc2V0dGluZ3MubXlEYXRhLFxuXHRcdFx0XHRpcyA6IHRydWUsXG5cdFx0XHRcdGlkLFxuXHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRvcHRpb25zXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cblxuXHRnZXRMYXllcigpIHtcblx0XHRjb25zdCBzZXR0aW5ncyA9IHRoaXMubW9kYWxzU2V0dGluZ3NbdGhpcy5wcm9wcy5tb2RhbERhdGEubmFtZV1cblx0XHRpZiAoIXNldHRpbmdzLmxheWVyKSByZXR1cm4gbnVsbDtcblxuXG5cdFx0Y29uc3QgcHJvcHMgPSB7XG5cdFx0XHRpZCA6ICdfbW9kYWwtbGF5ZXInLFxuXHRcdFx0c3R5bGUgOiB7XG5cdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdHJpZ2h0IDogMCxcblx0XHRcdFx0bGVmdCA6IDAsXG5cdFx0XHRcdGJvdHRvbSA6IDAsXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvciA6IHNldHRpbmdzLmxheWVyQ29sb3IgfHwgdGhpcy5wcm9wcy5sYXllckNvbG9yLFxuXHRcdFx0XHRvcGFjaXR5IDogKHNldHRpbmdzLmxheWVyT3BhY2l0eSB8fCB0aGlzLnByb3BzLmxheWVyT3BhY2l0eSkgLyAxMDAsXG5cdFx0XHRcdHpJbmRleCA6IDJcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0aWYgKHNldHRpbmdzLmxheWVyQ2xvc2UpIHtcblx0XHRcdHByb3BzLm9uQ2xpY2sgPSB0aGlzLmNsb3NlO1xuXHRcdH1cblxuXHRcdHJldHVybiA8ZGl2IHsuLi5wcm9wc30gLz47XG5cdH1cblxuXHRnZXRDbG9zZUJ1dHRvbigpIHtcblx0XHRjb25zdCBzZXR0aW5ncyA9IHRoaXMubW9kYWxzU2V0dGluZ3NbdGhpcy5wcm9wcy5tb2RhbERhdGEubmFtZV1cblx0XHRpZiAoIXNldHRpbmdzLmNsb3NlQnV0dG9uKSByZXR1cm4gbnVsbDtcblxuXHRcdGxldCBvcGFjaXR5ID0gc2V0dGluZ3MubGF5ZXJPcGFjaXR5IHx8IHRoaXMucHJvcHMubGF5ZXJPcGFjaXR5O1xuXHRcdGlmIChvcGFjaXR5ID4gOTkpIHtcblx0XHRcdG9wYWNpdHkgPSAxMDA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG9wYWNpdHkgPSBNYXRoLnJvdW5kKG9wYWNpdHkgKyAoKDEwMCAtIG9wYWNpdHkpIC8gMS41KSkgLyAxMDBcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cIl9tb2RhbC1jbG9zZVwiIFxuXHRcdFx0XHRjbGFzc05hbWU9XCJtb2RhbC1jbG9zZVwiIFxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLmNsb3NlfSBcblx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcblx0XHRcdFx0XHR0b3A6ICcwLjRlbScsXG5cdFx0XHRcdFx0cmlnaHQ6ICcwLjRlbScsXG5cdFx0XHRcdFx0d2lkdGg6ICcyLjhlbScsXG5cdFx0XHRcdFx0aGVpZ2h0IDogJzIuOGVtJyxcblx0XHRcdFx0XHRjdXJzb3I6ICdwb2ludGVyJyxcblx0XHRcdFx0XHR6SW5kZXg6IDQsXG5cdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiA3LFxuXHRcdFx0XHRcdG9wYWNpdHksXG5cdFx0XHRcdFx0Ym94U2hhZG93OiAnMCAwIDZweCByZ2JhKDAsMCwwLC40KSdcblx0XHRcdFx0fX0+XG5cblx0XHRcdFx0PENsb3NlQnV0dG9uIHN0eWxlPXt7XG5cdFx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRcdFx0XHRoZWlnaHQ6ICcxMDAlJyxcblx0XHRcdFx0XHRmaWxsIDogc2V0dGluZ3MubGF5ZXJDb2xvciB8fCB0aGlzLnByb3BzLmxheWVyQ29sb3Jcblx0XHRcdFx0fX0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxuXG5cblx0cmVuZGVyKCkge1xuXG5cdFx0aWYgKCF0aGlzLnN0YXRlLm9wZW4pIHJldHVybiBudWxsO1xuXG5cdFx0Y29uc3QgQ29tcG9uZW50ID0gdGhpcy5tb2RhbHNbdGhpcy5zdGF0ZS5uYW1lXTtcblx0XHRjb25zdCBpbm5lclByb3BzID0ge1xuXHRcdFx0aWQgOiAnX21vZGFsLWlubmVyJyxcblx0XHRcdHJlZjogJ2lubmVyJyxcblx0XHRcdHN0eWxlIDoge1xuXHRcdFx0XHRwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRcdFx0Ym9yZGVyOiAnMXB4IHNvbGlkIHRyYW5zcGFyZW50Jyxcblx0XHRcdFx0ekluZGV4OiAzXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMubW9kYWxzU2V0dGluZ3NbdGhpcy5wcm9wcy5tb2RhbERhdGEubmFtZV0gJiYgdGhpcy5tb2RhbHNTZXR0aW5nc1t0aGlzLnByb3BzLm1vZGFsRGF0YS5uYW1lXS5sYXllckNsb3NlKSB7XG5cdFx0XHRpbm5lclByb3BzLm9uQ2xpY2sgPSB0aGlzLmNsb3NlSW5uO1xuXHRcdH1cblxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0e3RoaXMuZ2V0TGF5ZXIoKX1cblx0XHRcdFx0e3RoaXMuZ2V0Q2xvc2VCdXR0b24oKX1cblxuXHRcdFx0XHQ8ZGl2IHsuLi5pbm5lclByb3BzfSA+XG5cdFx0XHRcdFx0XHR7IENvbXBvbmVudCAmJiB0aGlzLnN0YXRlLmlzID8gPENvbXBvbmVudCB7Li4udGhpcy5zdGF0ZS5vcHRpb25zfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfaWQ9e3RoaXMuc3RhdGUuaWR9IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfcm93PXt0aGlzLnByb3BzLm1vZGFsRGF0YS5yb3d9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9teURhdGE9e3RoaXMuc3RhdGUubXlEYXRhfSBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGF0Y2g9e3RoaXMucHJvcHMuZGlzcGF0Y2h9IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2RhbENsb3NlPXt0aGlzLmNsb3NlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPiA6IG51bGx9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHQpO1xuXHR9XG5cbn1cblxuXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IFJvb3RNb2RhbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3ZlbmRvci9jb250YWluZXItZm9yLW1vZGFsL21vZGFsLmpzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5rZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5yZXF1aXJlKCcuL19vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KSB7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDIyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgRmFDbG9zZSA9IGZ1bmN0aW9uIEZhQ2xvc2UocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEljb25CYXNlMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHByb3BzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMzMuNSAyOS41cTAgMC45LTAuNyAxLjVsLTMgMy4xcS0wLjYgMC42LTEuNSAwLjZ0LTEuNS0wLjZsLTYuNi02LjYtNi41IDYuNnEtMC43IDAuNi0xLjYgMC42dC0xLjUtMC42bC0zLTMuMXEtMC42LTAuNi0wLjYtMS41dDAuNi0xLjVsNi41LTYuNi02LjUtNi41cS0wLjYtMC43LTAuNi0xLjZ0MC42LTEuNWwzLTNxMC42LTAuNiAxLjUtMC42dDEuNiAwLjZsNi41IDYuNiA2LjYtNi42cTAuNi0wLjYgMS41LTAuNnQxLjUgMC42bDMuMSAzcTAuNiAwLjcgMC42IDEuNXQtMC42IDEuNmwtNi42IDYuNSA2LjYgNi42cTAuNiAwLjYgMC42IDEuNXonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRmFDbG9zZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9yZWFjdC1pY29ucy9saWIvZmEvY2xvc2UuanNcbi8vIG1vZHVsZSBpZCA9IDIyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBpc09iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jyk7XG5jb25zdCBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnbG9kYXNoL2lzRnVuY3Rpb24nKTtcblxuXG5jb25zdCBkZWZTZXR0aW5ncyA9IHtcblx0Y2xvc2VCdXR0b24gOiB0cnVlLFxuXHRsYXllciA6IHRydWUsXG5cdGxheWVyQ2xvc2UgOiB0cnVlLFxuXHRsYXllckNvbG9yIDogbnVsbCxcblx0bGF5ZXJPcGFjaXR5IDogbnVsbCxcblx0bXlEYXRhIDogbnVsbFxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY29tcCkge1xuXHRsZXQgc2V0dGluZ3M7XG5cblx0aWYgKCFjb21wKSB7XG5cdFx0c2V0dGluZ3MgPSB7fTtcblx0fSBlbHNlIGlmIChpc0Z1bmN0aW9uKGNvbXAubW9kYWxTZXR0aW5ncykpIHtcblx0XHRzZXR0aW5ncyA9IGNvbXAubW9kYWxTZXR0aW5ncygpXG5cdH0gZWxzZSBpZiAoaXNPYmplY3QoY29tcC5tb2RhbFNldHRpbmdzKSkge1xuXHRcdHNldHRpbmdzID0gY29tcC5tb2RhbFNldHRpbmdzXG5cdH1cblx0cmV0dXJuIHsuLi5kZWZTZXR0aW5ncywgLi4uc2V0dGluZ3N9O1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3ZlbmRvci9jb250YWluZXItZm9yLW1vZGFsL3V0aWxzL3BhcnNlLXNldHRpbmdzLmpzIiwiY29uc3QgZ2V0S2V5ID0gcmVxdWlyZSgnLi91dGlscy9nZXQta2V5JylcblxuXG5jb25zdCBkZWYgPSB7XG5cdG9wZW4gOiBmYWxzZSxcblx0aWQgOiBudWxsLFxuXHRuYW1lIDogJ290aGVyJyxcblx0b3B0aW9ucyA6IHt9LFxuXHRtb2RhbE5hbWVzIDogW10sXG5cdHJvdyA6IFtdXG59XG5cbmNvbnN0IG1DbG9zZSA9IHN0YXRlID0+IHtcblx0aWYgKCFzdGF0ZS5vcGVuKSByZXR1cm4gc3RhdGU7XG5cdGlmIChzdGF0ZS5yb3cubGVuZ3RoID09IDApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Li4uZGVmLFxuXHRcdFx0bW9kYWxOYW1lczpzdGF0ZS5tb2RhbE5hbWVzXG5cdFx0fVxuXHR9XG5cblx0bGV0IHtpZCxvcHRpb25zLG5hbWV9ID0gc3RhdGUucm93W3N0YXRlLnJvdy5sZW5ndGggLSAxXTtcblx0bGV0IHJvdyA9IHN0YXRlLnJvdy5maWx0ZXIobSA9PiAobS5pZCAhPSBpZCkpXG5cdHJldHVybiB7XG5cdFx0b3BlbiA6IHRydWUsXG5cdFx0aWQsXG5cdFx0bmFtZSxcblx0XHRvcHRpb25zLFxuXHRcdG1vZGFsTmFtZXMgOiBzdGF0ZS5tb2RhbE5hbWVzLFxuXHRcdHJvd1xuXHR9O1xufVxuXG5jb25zdCBtVXBkYXRlID0gKHN0YXRlLGRhdGEpID0+IHtcblx0aWYgKCFkYXRhKSByZXR1cm4gc3RhdGU7XG5cdGxldCB7IGlkLCAuLi5ub30gPSBkYXRhO1xuXHRpZiAoIWlkKSByZXR1cm4gc3RhdGU7XG5cdGlmIChzdGF0ZS5pZCA9PSBpZCkge1xuXHRcdGxldCB7IG9wdGlvbnMgfSA9IHN0YXRlO1xuXHRcdHJldHVybiB7XG5cdFx0XHQuLi5zdGF0ZSxcblx0XHRcdG9wdGlvbnMgOiB7Li4ub3B0aW9ucywuLi5ub31cblx0XHR9XG5cdH1cblx0cmV0dXJuIHtcblx0XHQuLi5zdGF0ZSxcblx0XHRyb3cgOiBzdGF0ZS5yb3cubWFwKG0gPT4ge1xuXHRcdFx0aWYgKG0uaWQgIT0gaWQpIHJldHVybiBtO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4ubSxcblx0XHRcdFx0b3B0aW9ucyA6IHtcblx0XHRcdFx0XHQuLi5tLm9wdGlvbnMsXG5cdFx0XHRcdFx0Li4ubm9cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cbn1cblxuY29uc3QgbU9wZW4gPSAoc3RhdGUsIHR5cGUsIG9wdGlvbnMsIG5JZD1udWxsKSA9PiB7XG5cdGlmIChzdGF0ZS5tb2RhbE5hbWVzLmluZGV4T2YodHlwZSkgPCAwKSByZXR1cm4gc3RhdGU7XG5cdGxldCBuYW1lID0gdHlwZS5zcGxpdCgnOicpWzFdO1xuXHRsZXQgaWQgPSBuSWQgfHwgZ2V0S2V5KCk7XG5cdGxldCByb3cgPSBbXTtcblx0aWYgKHN0YXRlLm9wZW4pIHtcblx0XHRyb3cgPSBbLi4uc3RhdGUucm93XVxuXHRcdHJvdy5wdXNoKHtcblx0XHRcdGlkIDogc3RhdGUuaWQsXG5cdFx0XHRuYW1lIDogc3RhdGUubmFtZSxcblx0XHRcdG9wdGlvbnMgOiBzdGF0ZS5vcHRpb25zIHx8IHt9XG5cdFx0fSlcblx0fVxuXHRsZXQge21vZGFsTmFtZXN9ID0gc3RhdGU7XG5cblx0cmV0dXJuIHtcblx0XHRvcGVuIDogdHJ1ZSxcblx0XHRpZCxcblx0XHRuYW1lLFxuXHRcdG9wdGlvbnMgOiBvcHRpb25zIHx8IHt9LFxuXHRcdG1vZGFsTmFtZXMsXG5cdFx0cm93XG5cdH1cbn1cblxuY29uc3QgbVVwID0gKHN0YXRlLGlkKSA9PiB7XG5cdGlmIChzdGF0ZS5pZCA9PSBpZCB8fCBzdGF0ZS5yb3cubGVuZ3RoID09IDApIHJldHVybiBzdGF0ZTtcblx0bGV0IG1vZCA9IG51bGw7XG5cdGxldCByb3cgPSBzdGF0ZS5yb3cuZmlsdGVyKG0gPT4ge1xuXHRcdGlmIChtLmlkICE9IGlkKSByZXR1cm4gdHJ1ZTtcblx0XHRtb2QgPSBtO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSlcblxuXHRpZiAoIW1vZCkgcmV0dXJuIHN0YXRlO1xuXHRyZXR1cm4gbU9wZW4oey4uLnN0YXRlLCByb3d9LCBgbW9kYWw6JHttb2QubmFtZX1gLCBtb2Qub3B0aW9ucywgbW9kLmlkKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSAoc3RhdGU9ZGVmLCBhY3Rpb24pID0+IHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgJ21vZGFsOl9fbGlzdCc6XG5cdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYWN0aW9uLnBheWxvYWQpKSByZXR1cm4gc3RhdGU7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSwgXG5cdFx0XHRcdG1vZGFsTmFtZXM6YWN0aW9uLnBheWxvYWQubWFwKHYgPT4gYG1vZGFsOiR7dn1gKVxuXHRcdFx0fTtcblx0XHRicmVhaztcblx0XHRjYXNlICdtb2RhbDpjbG9zZSc6XG5cdFx0XHRyZXR1cm4gbUNsb3NlKHN0YXRlKTtcblx0XHRicmVhaztcblx0XHRjYXNlICdtb2RhbDp1cGRhdGUnOlxuXHRcdFx0cmV0dXJuIG1VcGRhdGUoc3RhdGUsYWN0aW9uLnBheWxvYWQpO1xuXHRcdGJyZWFrO1xuXHRcdGNhc2UgJ21vZGFsOnVwJzpcblx0XHRcdHJldHVybiBtVXAoc3RhdGUsYWN0aW9uLnBheWxvYWQpO1xuXHRcdGJyZWFrO1xuXHR9XG5cblx0cmV0dXJuIG1PcGVuKHN0YXRlLGFjdGlvbi50eXBlLGFjdGlvbi5wYXlsb2FkKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3ZlbmRvci9jb250YWluZXItZm9yLW1vZGFsL3JlZHVzZXIuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9mcm9tID0gcmVxdWlyZShcIi4uL2NvcmUtanMvYXJyYXkvZnJvbVwiKTtcblxudmFyIF9mcm9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Zyb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoMCwgX2Zyb20yLmRlZmF1bHQpKGFycik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMjMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAyMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKS5BcnJheS5mcm9tO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAyMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikgeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlIC8qICwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQgKi8pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KGFycmF5TGlrZSk7XG4gICAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5O1xuICAgIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgbWFwZm4gPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWQ7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgaXRlckZuID0gZ2V0SXRlckZuKE8pO1xuICAgIHZhciBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYgKG1hcHBpbmcpIG1hcGZuID0gY3R4KG1hcGZuLCBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG4gICAgaWYgKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKSB7XG4gICAgICBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDKCk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gY2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIGZvciAocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qc1xuLy8gbW9kdWxlIGlkID0gMjM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanNcbi8vIG1vZHVsZSBpZCA9IDIzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qc1xuLy8gbW9kdWxlIGlkID0gMjM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGluZGV4LCB2YWx1ZSkge1xuICBpZiAoaW5kZXggaW4gb2JqZWN0KSAkZGVmaW5lUHJvcGVydHkuZihvYmplY3QsIGluZGV4LCBjcmVhdGVEZXNjKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2luZGV4XSA9IHZhbHVlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fY3JlYXRlLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAyMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4vLyBtb2R1bGUgaWQgPSAyMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzXG4vLyBtb2R1bGUgaWQgPSAyMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZXRlY3QuanNcbi8vIG1vZHVsZSBpZCA9IDI0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJsZXQgY291bnQgPSAwO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICgpID0+IHtcblx0Y291bnQrKztcblx0cmV0dXJuIGNvdW50XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdmVuZG9yL2NvbnRhaW5lci1mb3ItbW9kYWwvdXRpbHMvZ2V0LWtleS5qcyIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRlcnJvciA6IHJlcXVpcmUoJy4vZXJyb3InKSxcblx0ZGlzY3Vzc2lvbiA6IHJlcXVpcmUoJy4vZGlzY3Vzc2lvbicpLFxuXHR0ZXN0IDogcmVxdWlyZSgnLi90ZXN0Jylcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBmaWxlcy9tb2RhbHMvaW5kZXguanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5yZXF1aXJlKCcuL2Vycm9yLW1vZGFsLmNzcycpXG5cbmNsYXNzIEVycm9yTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGlzIDpmYWxzZVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGlmICghdGhpcy5wcm9wcy5lcnIgfHwgIXRoaXMucHJvcHMuZXJyLm5hbWUpIHtcblx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goWydtb2RhbDpjbG9zZScse1xuXHRcdFx0XHRcdFx0XHR0eXBlIDogJ21vZGFsOmVycm9yJyxcblx0XHRcdFx0XHRcdFx0cGF5bG9hZCA6IHtcblx0XHRcdFx0XHRcdFx0XHRlcnIgOiBuZXcgRXJyb3IoJ3Byb3AgZXJyIGluIEVycm9yTW9kYWwgbXVzdCBiZSBFcnJvcicpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1dKVxuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHNldFRpbWVvdXQoKCk9PnRoaXMuc2V0U3RhdGUoe2lzOnRydWV9KSwxMClcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRpZiAoIXRoaXMucHJvcHMuZXJyKSByZXR1cm4gbnVsbDtcblx0XHRsZXQge2Vycn0gPSB0aGlzLnByb3BzO1xuXHRcdGxldCBzdGFjayA9IGVyci5zdGFjay5zcGxpdCgnXFxuJyk7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgZXJyb3ItbW9kYWwgJHt0aGlzLnN0YXRlLmlzID8gJ2Vyci1hY3RpdmUnIDogJ2Vyci1uby1hY3RpdmUnfWB9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImVyci1tb2RhbC1pbmZvXCI+XG5cdFx0XHRcdFx0PGgzPntlcnIubmFtZX08L2gzPlxuXHRcdFx0XHRcdDxoND57ZXJyLm1lc3NhZ2V9PC9oND5cblx0XHRcdFx0XHQ8aHIvPlxuXG5cdFx0XHRcdFx0e09iamVjdC5rZXlzKGVycikubGVuZ3RoID09IDAgPyBudWxsIDogKDx0YWJsZSBjZWxsU3BhY2luZz17MX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0aGVhZCA+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cIm5hbWVcIj5uYW1lPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJ2YWx1ZVwiPnZhbHVlPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RoZWFkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e09iamVjdC5rZXlzKGVycikuZmlsdGVyKGtleSA9PiBrZXkpLm1hcChrZXkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRyIGtleT17a2V5fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT1cIm5hbWVcIj57a2V5fTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9XCJ2YWx1ZVwiPntlcnJba2V5XX08L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGFibGU+KX1cblxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJlcnItbW9kYWwtc3RhY2tcIj5cblx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHR7c3RhY2subWFwKHYgPT4gKDxsaSBrZXk9e3Z9Pnt2fTwvbGk+KSl9XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbkVycm9yTW9kYWwubW9kYWxTZXR0aW5ncyA9IHtcblx0Y2xvc2VCdXR0b24gOiB0cnVlLFxuXHRsYXllciA6IHRydWUsXG5cdGxheWVyQ2xvc2UgOiBmYWxzZSxcblx0Ly8gbGF5ZXJDb2xvciA6ICcjZGMzNTQ1Jyxcblx0bGF5ZXJPcGFjaXR5IDogNTVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBFcnJvck1vZGFsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwZmlsZXMvbW9kYWxzL2Vycm9yL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcGZpbGVzL21vZGFscy9lcnJvci9lcnJvci1tb2RhbC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBGb3JtID0gcmVxdWlyZSgnLi4vZm9ybScpO1xucmVxdWlyZSgnLi9kaXNjLmNzcycpXG5cbmNsYXNzIERpc2N1c3Npb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdH1cblxuXG5cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiRGlzY3Vzc2lvblwiPlxuXHRcdFx0XHQ8cD50ZXN0PC9wPlxuXHRcdFx0XHQ8Rm9ybSBuYW1lPVwiZGlzY3Vzc2lvblwiIHsuLi50aGlzLnByb3BzfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IERpc2N1c3Npb25cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBmaWxlcy9tb2RhbHMvZGlzY3Vzc2lvbi9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBmaWxlcy9tb2RhbHMvZGlzY3Vzc2lvbi9kaXNjLmNzc1xuLy8gbW9kdWxlIGlkID0gMjQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IEZvcm0gPSByZXF1aXJlKCcuLi9mb3JtJylcbnJlcXVpcmUoJy4vdGVzdC5jc3MnKVxuY29uc3QgY2wgPSByZXF1aXJlKCdjbGFzc25hbWVzJylcblxuXG5cbmNsYXNzIFRlc3RNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG1haW4gOiBmYWxzZVxuXHRcdH1cblxuXHR9XG5cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRzZXRUaW1lb3V0KCgpPT50aGlzLnNldFN0YXRlKHttYWluOnRydWV9KSwxMDAwKVxuXHR9XG5cblxuXG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnNvbGUubG9nKCd0ZXN0Jyx0aGlzLnByb3BzLl9teURhdGEpXG5cdFx0Y29uc3QgY2xzID0gY2woJ3Rlc3QnLHtcblx0XHRcdHN0YXJ0IDogIXRoaXMuc3RhdGUubWFpbiAmJiB0aGlzLnByb3BzLl9teURhdGEgPT0gMSxcblx0XHRcdG1haW4gOiB0aGlzLnN0YXRlLm1haW4gJiYgdGhpcy5wcm9wcy5fbXlEYXRhID09IDEsXG5cdFx0XHRbJ2Nsb3NlLXRlc3QnXSA6IHRoaXMucHJvcHMuX215RGF0YSA9PSAyLFxuXHRcdFx0cmVzZXQgOiB0aGlzLnByb3BzLl9teURhdGEgPT0gM1xuXHRcdH0pXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbHN9ID5cblx0XHRcdFx0PEZvcm0gbmFtZT1cInRlc3RcIiB7Li4udGhpcy5wcm9wc30gLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuXG5UZXN0TW9kYWwubW9kYWxTZXR0aW5ncyA9ICgpID0+ICh7XG5cdG15RGF0YSA6IDEsXG5cdGNsb3NlRm4gOiAodHlwZSwgc3MsIGNsb3NlKSA9PiB7XG5cdFx0aWYgKHR5cGUgPT0gJ2Nsb3NlJykge1xuXHRcdFx0c3MoMilcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3MoMylcblx0XHR9XG5cblx0XHRzZXRUaW1lb3V0KGNsb3NlLDEwMDApXG5cdH1cbn0pXG5cblRlc3RNb2RhbC5jbG9zZUZuID0gKGEsYixjKSA9PiB7XG5cdGNvbnNvbGUubG9nKCd0bTptcycsYSxiLGMpXG5cdHNldFRpbWVvdXQoKCk9PmIoMTExKSwyMDAwKVxuXHRzZXRUaW1lb3V0KCgpPT5jKCksNTAwMClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUZXN0TW9kYWxcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBmaWxlcy9tb2RhbHMvdGVzdC9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBmaWxlcy9tb2RhbHMvdGVzdC90ZXN0LmNzc1xuLy8gbW9kdWxlIGlkID0gMjQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IHsgY29ubmVjdCB9ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKVxuY29uc3QgSG9tZUljbyA9IHJlcXVpcmUoJ3JlYWN0LWljb25zL2xpYi9mYS9ob21lJyk7XG5jb25zdCBNZW51SWNvID0gcmVxdWlyZSgncmVhY3QtaWNvbnMvbGliL3RpL3RoLW1lbnUnKTtcbmNvbnN0IHsgTGluayB9ID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyLWRvbScpXG5jb25zdCBJbmZvQmxvY2sgPSByZXF1aXJlKCcuL2luZm8tYmxvY2snKVxucmVxdWlyZSgnLi9oZWFkZXIuY3NzJylcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdHRoaXMub3BlblNpZGViYXIgPSB0aGlzLm9wZW5TaWRlYmFyLmJpbmQodGhpcylcblx0fVxuXG5cdG9wZW5TaWRlYmFyKCkge1xuXHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goJ21vZGFsOnRlc3QnKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPVwiaGVhZGVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaWNvbnMtYmxvY2tcIj5cblx0XHRcdFx0XHQ8TGluayBjbGFzc05hbWU9XCJpY29ucy1saW5rIGhvbWUtbGlua1wiIHRvPVwiL1wiPjxIb21lSWNvLz48L0xpbms+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpY29ucy1saW5rIG1lbnUtbGlua1wiIG9uQ2xpY2s9e3RoaXMub3BlblNpZGViYXJ9PlxuXHRcdFx0XHRcdFx0PE1lbnVJY28gLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aGlzLnByb3BzLnRpdGxlfTwvaDE+XG5cdFx0XHRcdDxJbmZvQmxvY2sgLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb25uZWN0KFxuXHRcdHN0YXRlID0+ICh7XG5cdFx0XHR0aXRsZSA6IHN0YXRlLm1haW4udGl0bGUsXG5cdFx0XHRkaXNwbGF5IDogc3RhdGUubWFpbi5kaXNwbGF5XG5cdFx0fSlcblx0KShIZWFkZXIpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwZmlsZXMvaGVhZGVyL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEljb25CYXNlID0gcmVxdWlyZSgncmVhY3QtaWNvbi1iYXNlJyk7XG5cbnZhciBfcmVhY3RJY29uQmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEljb25CYXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIEZhSG9tZSA9IGZ1bmN0aW9uIEZhSG9tZShwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20zMi45IDIyLjF2MTAuOHEwIDAuNS0wLjQgMXQtMSAwLjRoLTguNnYtOC42aC01Ljd2OC42aC04LjZxLTAuNSAwLTEtMC40dC0wLjQtMXYtMTAuOHEwIDAgMCAwdDAtMC4xbDEyLjktMTAuNiAxMi44IDEwLjZxMCAwLjEgMCAwLjF6IG01LTEuNWwtMS40IDEuN3EtMC4yIDAuMi0wLjQgMC4yaC0wLjFxLTAuMyAwLTAuNS0wLjJsLTE1LjQtMTIuOC0xNS41IDEyLjhxLTAuMiAwLjItMC41IDAuMi0wLjMgMC0wLjUtMC4ybC0xLjQtMS43cS0wLjEtMC4yLTAuMS0wLjV0MC4yLTAuNWwxNi4xLTEzLjRxMC43LTAuNiAxLjctMC42dDEuNyAwLjZsNS40IDQuNnYtNC40cTAtMC4zIDAuMi0wLjV0MC41LTAuMmg0LjNxMC4zIDAgMC41IDAuMnQwLjIgMC41djkuMWw0LjkgNC4xcTAuMiAwLjIgMC4zIDAuNXQtMC4yIDAuNXonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRmFIb21lO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWljb25zL2xpYi9mYS9ob21lLmpzXG4vLyBtb2R1bGUgaWQgPSAyNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEljb25CYXNlID0gcmVxdWlyZSgncmVhY3QtaWNvbi1iYXNlJyk7XG5cbnZhciBfcmVhY3RJY29uQmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEljb25CYXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIFRpVGhNZW51ID0gZnVuY3Rpb24gVGlUaE1lbnUocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEljb25CYXNlMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHByb3BzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMzEuNyAyOC4zaC0yMy40Yy0xLjggMC0zLjMgMS41LTMuMyAzLjRzMS41IDMuMyAzLjMgMy4zaDIzLjRjMS44IDAgMy4zLTEuNSAzLjMtMy4zcy0xLjUtMy40LTMuMy0zLjR6IG0wLTExLjZoLTIzLjRjLTEuOCAwLTMuMyAxLjUtMy4zIDMuM3MxLjUgMy4zIDMuMyAzLjNoMjMuNGMxLjggMCAzLjMtMS41IDMuMy0zLjNzLTEuNS0zLjMtMy4zLTMuM3ogbTAtMTEuN2gtMjMuNGMtMS44IDAtMy4zIDEuNS0zLjMgMy4zczEuNSAzLjQgMy4zIDMuNGgyMy40YzEuOCAwIDMuMy0xLjUgMy4zLTMuNHMtMS41LTMuMy0zLjMtMy4zeicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBUaVRoTWVudTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9yZWFjdC1pY29ucy9saWIvdGkvdGgtbWVudS5qc1xuLy8gbW9kdWxlIGlkID0gMjUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IHsgd2l0aFJvdXRlciB9ID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyLWRvbScpXG5jb25zdCBDb2RlSWNvID0gcmVxdWlyZSgncmVhY3QtaWNvbnMvbGliL2lvL2NvZGUtd29ya2luZycpXG5jb25zdCBDb21tZW50SWNvID0gcmVxdWlyZSgncmVhY3QtaWNvbnMvbGliL2ZhL2NvbW1lbnRpbmcnKVxuY29uc3QgQnJlYWRjcmFtYkljb1ZlciA9IHJlcXVpcmUoJ3JlYWN0LWljb25zL2xpYi9tZC9tb3JlLXZlcnQnKVxuY29uc3QgQnJlYWRjcmFtYkljb0dvciA9IHJlcXVpcmUoJ3JlYWN0LWljb25zL2xpYi9tZC9tb3JlLWhvcml6JylcblxuY2xhc3MgSW5mb0Jsb2NrSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbmZvLWJsb2NrXCI+XG5cdFx0XHRcdDxCcmVhZGNyYW1iSWNvVmVyIC8+XG5cdFx0XHRcdDxCcmVhZGNyYW1iSWNvR29yIC8+XG5cdFx0XHRcdDxDb2RlSWNvIC8+XG5cdFx0XHRcdDxDb21tZW50SWNvIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2l0aFJvdXRlcihJbmZvQmxvY2tIZWFkZXIpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwZmlsZXMvaGVhZGVyL2luZm8tYmxvY2suanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgSW9Db2RlV29ya2luZyA9IGZ1bmN0aW9uIElvQ29kZVdvcmtpbmcocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEljb25CYXNlMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHByb3BzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMTAgMjBjMC0xLjIgMC42LTEuOSAxLjktMS45czEuOSAwLjcgMS45IDEuOS0wLjcgMS45LTEuOSAxLjktMS45LTAuNi0xLjktMS45eiBtNS42IDBjMC0xLjIgMC43LTEuOSAxLjktMS45czEuOSAwLjcgMS45IDEuOS0wLjYgMS45LTEuOSAxLjktMS45LTAuNi0xLjktMS45eiBtNS43IDBjMC0xLjIgMC42LTEuOSAxLjgtMS45czEuOSAwLjcgMS45IDEuOS0wLjYgMS45LTEuOSAxLjktMS44LTAuNi0xLjgtMS45eiBtLTEwLjcgMTAuNmMtMC41IDAtMC45LTAuMS0xLjMtMC41bC04LjgtOC44Yy0wLjMtMC40LTAuNS0wLjgtMC41LTEuM3MwLjItMC45IDAuNS0xLjNsOC44LTguOGMwLjQtMC40IDAuOC0wLjUgMS4zLTAuNXMxIDAuMSAxLjQgMC41IDAuNSAwLjggMC41IDEuNC0wLjIgMC45LTAuNSAxLjNsLTcuNSA3LjQgNy41IDcuNGMwLjMgMC40IDAuNSAwLjggMC41IDEuNHMtMC4yIDAuOS0wLjUgMS4zLTAuOCAwLjUtMS40IDAuNXogbTEzLjggMGMtMC42IDAtMS0wLjEtMS40LTAuNXMtMC41LTAuOC0wLjUtMS4zIDAuMi0xIDAuNS0xLjRsNy41LTcuNC03LjUtNy40Yy0wLjMtMC40LTAuNS0wLjgtMC41LTEuM3MwLjItMSAwLjUtMS40IDAuOC0wLjUgMS40LTAuNSAwLjkgMC4xIDEuMyAwLjVsOC44IDguOGMwLjMgMC40IDAuNSAwLjggMC41IDEuM3MtMC4yIDAuOS0wLjUgMS4zbC04LjggOC44Yy0wLjQgMC40LTAuOCAwLjUtMS4zIDAuNXonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSW9Db2RlV29ya2luZztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9yZWFjdC1pY29ucy9saWIvaW8vY29kZS13b3JraW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAyNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEljb25CYXNlID0gcmVxdWlyZSgncmVhY3QtaWNvbi1iYXNlJyk7XG5cbnZhciBfcmVhY3RJY29uQmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEljb25CYXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIEZhQ29tbWVudGluZyA9IGZ1bmN0aW9uIEZhQ29tbWVudGluZyhwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20xNC4zIDIwcTAtMS4yLTAuOS0ydC0yLTAuOS0yIDAuOS0wLjggMiAwLjggMiAyIDAuOSAyLTAuOSAwLjktMnogbTguNiAwcTAtMS4yLTAuOS0ydC0yLTAuOS0yIDAuOS0wLjkgMiAwLjkgMiAyIDAuOSAyLTAuOSAwLjktMnogbTguNSAwcTAtMS4yLTAuOC0ydC0yLTAuOS0yIDAuOS0wLjkgMiAwLjkgMiAyIDAuOSAyLTAuOSAwLjgtMnogbTguNiAwcTAgMy45LTIuNyA3LjJ0LTcuMyA1LjItMTAgMS45cS0yLjUgMC00LjctMC40LTMuOSAzLjgtOS43IDUuMS0xLjIgMC4yLTEuOSAwLjMtMC4zIDAtMC41LTAuMXQtMC4zLTAuNHEtMC4xLTAuNCAwLjQtMC45IDAuMS0wLjEgMC41LTAuNXQwLjYtMC41IDAuNS0wLjUgMC42LTAuOCAwLjQtMC44IDAuNS0xIDAuMy0xLjMgMC4zLTEuNnEtMy4zLTIuMS01LjEtNC45dC0xLjktNnEwLTMuOSAyLjctNy4ydDcuMy01LjIgMTAtMS45IDEwIDEuOSA3LjMgNS4yIDIuNyA3LjJ6JyB9KVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEZhQ29tbWVudGluZztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9yZWFjdC1pY29ucy9saWIvZmEvY29tbWVudGluZy5qc1xuLy8gbW9kdWxlIGlkID0gMjU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBNZE1vcmVWZXJ0ID0gZnVuY3Rpb24gTWRNb3JlVmVydChwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20yMCAyNi42YzEuOCAwIDMuNCAxLjYgMy40IDMuNHMtMS42IDMuNC0zLjQgMy40LTMuNC0xLjYtMy40LTMuNCAxLjYtMy40IDMuNC0zLjR6IG0wLTEwYzEuOCAwIDMuNCAxLjYgMy40IDMuNHMtMS42IDMuNC0zLjQgMy40LTMuNC0xLjYtMy40LTMuNCAxLjYtMy40IDMuNC0zLjR6IG0wLTMuMmMtMS44IDAtMy40LTEuNi0zLjQtMy40czEuNi0zLjQgMy40LTMuNCAzLjQgMS42IDMuNCAzLjQtMS42IDMuNC0zLjQgMy40eicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNZE1vcmVWZXJ0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWljb25zL2xpYi9tZC9tb3JlLXZlcnQuanNcbi8vIG1vZHVsZSBpZCA9IDI1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTWRNb3JlSG9yaXogPSBmdW5jdGlvbiBNZE1vcmVIb3Jpeihwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20yMCAxNi42YzEuOCAwIDMuNCAxLjYgMy40IDMuNHMtMS42IDMuNC0zLjQgMy40LTMuNC0xLjYtMy40LTMuNCAxLjYtMy40IDMuNC0zLjR6IG0xMCAwYzEuOCAwIDMuNCAxLjYgMy40IDMuNHMtMS42IDMuNC0zLjQgMy40LTMuNC0xLjYtMy40LTMuNCAxLjYtMy40IDMuNC0zLjR6IG0tMjAgMGMxLjggMCAzLjQgMS42IDMuNCAzLjRzLTEuNiAzLjQtMy40IDMuNC0zLjQtMS42LTMuNC0zLjQgMS42LTMuNCAzLjQtMy40eicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNZE1vcmVIb3Jpejtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9yZWFjdC1pY29ucy9saWIvbWQvbW9yZS1ob3Jpei5qc1xuLy8gbW9kdWxlIGlkID0gMjU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBmaWxlcy9oZWFkZXIvaGVhZGVyLmNzc1xuLy8gbW9kdWxlIGlkID0gMjU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IFNpZGViYXIgPSByZXF1aXJlKCcuLi9zaWRlYmFyJylcbmNvbnN0IENvbnRlbnQgPSByZXF1aXJlKCcuLi9jb250ZW50JylcblxucmVxdWlyZSgnLi9wYWdlLmNzcycpXG5cbmNvbnN0IFBhZ2UgPSBwcm9wcyA9PiB7XG5cdFxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgaWQ9XCJwYWdlXCIgPlxuXHRcdFx0PFNpZGViYXIgdHlwZT1cImlubmVyXCIvPlxuXHRcdFx0PENvbnRlbnQvPlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFnZVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcGZpbGVzL3BhZ2UvaW5kZXguanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCB7IGNvbm5lY3QgfSA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4Jyk7XG5jb25zdCBDb3JlID0gcmVxdWlyZSgnLi9tZW51JylcbnJlcXVpcmUoJy4vc2lkZWJhci5jc3MnKVxuXG5jbGFzcyBTaWRlYmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aGlkZSA6IGZhbHNlXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xuXHRcdGlmICh0aGlzLnN0YXRlLmhpZGUgJiYgdGhpcy5yZWZzLnNjLm9mZnNldFBhcmVudCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGhpZGUgOiBmYWxzZSB9KTtcblx0XHR9IGVsc2UgaWYgKCF0aGlzLnN0YXRlLmhpZGUgJiYgIXRoaXMucmVmcy5zYy5vZmZzZXRQYXJlbnQpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBoaWRlIDogdHJ1ZSB9KTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc29sZS5sb2coJ3JlbmRlcicpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9XCJzaWRlYmFyLWNvbnRhaW5lclwiIHJlZj1cInNjXCI+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLmhpZGUgPyBudWxsIDogPENvcmUgey4uLnRoaXMucHJvcHN9IHR5cGU9XCJpbm5lclwiIC8+fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbm5lY3QoXG5cdCh7bWVudX0pID0+IHtcblx0XHRyZXR1cm4gey4uLm1lbnV9XG5cdH1cbikoU2lkZWJhcik7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwZmlsZXMvc2lkZWJhci9pbmRleC5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IExvYWRlciA9IHJlcXVpcmUoJ2MvbG9hZGVyJylcbmNvbnN0IEl0ZW0gPSByZXF1aXJlKCcuL3V0aWxzL2l0ZW0nKVxuXG5cbmNsYXNzIE1lbnVTaWRlYmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRhY3RpdmUgOiBudWxsLFxuXHRcdFx0aW5kZXggOiAtMVxuXHRcdH1cblxuXHRcdHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuXHRcdHRoaXMud2luQ2xvc2VJdGVtID0gdGhpcy53aW5DbG9zZUl0ZW0uYmluZCh0aGlzKTtcblx0fVxuXG5cdHdpbkNsb3NlSXRlbSgpIHtcblx0XHRjb25zb2xlLmxvZygnd2NpJylcblx0XHR0aGlzLm9uQ2xpY2sobnVsbCk7XG5cdH1cblxuXHRvbkNsaWNrKG5hbWUsIGluZGV4PS0xKSB7XG5cdFx0bGV0IHNuID0gbmFtZSAmJiB0aGlzLnByb3BzLnR5cGVzW25hbWVdID8gbmFtZSA6IG51bGw7XG5cdFx0aWYgKHNuID09IHRoaXMuc3RhdGUuYWN0aXZlKSBzbiA9IG51bGw7XG5cblx0XHRpZiAoc24gJiYgIXRoaXMuc3RhdGUuYWN0aXZlKSB7XG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLHRoaXMud2luQ2xvc2VJdGVtKVxuXHRcdH0gZWxzZSBpZiAoIXNuICYmIHRoaXMuc3RhdGUuYWN0aXZlKSB7XG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLHRoaXMud2luQ2xvc2VJdGVtKVxuXHRcdH1cblxuXHRcdGlmICghbmFtZSkgaW5kZXggPSB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4O1xuXG5cblx0XHR0aGlzLnNldFN0YXRlKHthY3RpdmU6c24saW5kZXh9KVxuXHR9XG5cblx0Y29yZU9uQ2xpY2soZSkge1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKClcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGlmICghdGhpcy5wcm9wcy5pc0xvYWRlZCkge1xuXHRcdFx0dGhpcy5wcm9wcy5kaXNwYXRjaCgnbWVudTpsb2FkJylcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0aWYgKCF0aGlzLnByb3BzLmlzTG9hZGVkKSByZXR1cm4gPGRpdiBpZD1cInNpZGViYXJcIiBjbGFzc05hbWU9XCJjb3JlLXNpZGViYXJcIj48TG9hZGVyIHNpemU9ezEwMH0gbGFiZWw9XCJtZW51XCIgLz48L2Rpdj5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cInNpZGViYXJcIiBjbGFzc05hbWU9e2Bjb3JlLXNpZGViYXIgJHt0aGlzLnN0YXRlLmFjdGl2ZSA/ICdoYXMtb3BlbicgOiAnJ31gfVxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLmNvcmVPbkNsaWNrfSA+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmN0Zy5tYXAoKGN0ZywgaSkgPT4gKFxuXHRcdFx0XHRcdDxJdGVtICB7Li4uY3RnfSBcblx0XHRcdFx0XHRcdGtleT17Y3RnLm5hbWUgfHwgaX1cblx0XHRcdFx0XHRcdGxpc3Q9e2N0Zy5uYW1lICYmIHRoaXMucHJvcHMudHlwZXNbY3RnLm5hbWVdID8gdGhpcy5wcm9wcy5saXN0LmZpbHRlcih2YWwgPT4gKHZhbC5jYXQuaW5kZXhPZihjdGcubmFtZSkgPj0gMCkpIDogbnVsbCB9IFxuXHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5vbkNsaWNrfSBcblx0XHRcdFx0XHRcdGluZGV4PXtpfSBcblx0XHRcdFx0XHRcdGFjdGl2ZT17ISEodGhpcy5zdGF0ZS5hY3RpdmUgJiYgdGhpcy5zdGF0ZS5hY3RpdmUgPT0gY3RnLm5hbWUpfSBcblx0XHRcdFx0XHRcdGFjdGl2ZUluZGV4PXt0aGlzLnN0YXRlLmluZGV4fSAvPlxuXHRcdFx0XHQpKX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNZW51U2lkZWJhclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcGZpbGVzL3NpZGViYXIvbWVudS5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnJlcXVpcmUoJy4vbG9hZGVyLmNzcycpXG5tb2R1bGUuZXhwb3J0cyA9IHByb3BzID0+IHtcblxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBpZD1cImxvYWRlclwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj5Mb2FkLi4uPC9kaXY+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2xvYWRlci9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY3NzXG4vLyBtb2R1bGUgaWQgPSAyNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgY2wgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5jb25zdCB7IExhYmVsQ3RnIH0gPSByZXF1aXJlKCcuL2dldC1sYWJlbCcpO1xuY29uc3QgTGlzdEl0ZW1zID0gcmVxdWlyZSgnLi9saXN0LWl0ZW1zJylcblxuY2xhc3MgTWVudUl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cblx0b25DbGljaygpIHtcblx0XHRcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRpZiAodGhpcy5wcm9wcy50eXBlID09ICdocicpIHJldHVybiA8aHIgY2xhc3NOYW1lPVwic2lkZWJhci1pdGVtLWhyXCIgLz47XG5cdFx0aWYgKCF0aGlzLnByb3BzLmxpc3QgfHwgIXRoaXMucHJvcHMubGlzdC5sZW5ndGgpIHJldHVybiBudWxsO1xuXG5cdFx0Y29uc3Qge2xhYmVsLCBuYW1lLCBpY28sIGFjdGl2ZSB9ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCBjbHMgPSBjbCgnbWVudS1pdGVtJyx7XG5cdFx0XHRhY3RpdmUgOiB0aGlzLnByb3BzLmFjdGl2ZVxuXHRcdH0pXG5cdFx0bGV0IHRkID0gdGhpcy5wcm9wcy5hY3RpdmUgfHwgdGhpcy5wcm9wcy5hY3RpdmVJbmRleCA8IDAgPyAwIDogTWF0aC5hYnModGhpcy5wcm9wcy5pbmRleCAtIHRoaXMucHJvcHMuYWN0aXZlSW5kZXgpICogMC4xO1xuXG5cdFx0aWYgKCF0aGlzLnByb3BzLmFjdGl2ZSkge1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xzfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZW51LWxhYmVsXCIgc3R5bGU9e3tcblx0XHRcdFx0XHR0cmFuc2l0aW9uRGVsYXkgOiBgJHt0ZH1zYFxuXHRcdFx0XHR9fSBcblx0XHRcdFx0XHRvbkNsaWNrPXsoKT0+dGhpcy5wcm9wcy5vbkNsaWNrKHRoaXMucHJvcHMubmFtZSwgdGhpcy5wcm9wcy5pbmRleCl9ID5cblx0XHRcdFx0XHQ8TGFiZWxDdGcgey4uLntsYWJlbCwgbmFtZSwgaWNvLCBhY3RpdmV9fSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PExpc3RJdGVtcyBhY3RpdmU9e2FjdGl2ZX0gbGlzdD17dGhpcy5wcm9wcy5saXN0fSAvPlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdCk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNZW51SXRlbVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcGZpbGVzL3NpZGViYXIvdXRpbHMvaXRlbS5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKVxuY29uc3QgZ2V0SWNvID0gcmVxdWlyZSgnLi9nZXQtaWNvJylcbmNvbnN0IFJpZ2h0ID0gcmVxdWlyZSgncmVhY3QtaWNvbnMvbGliL2ZhL2NhcmV0LXJpZ2h0JylcbmNvbnN0IGNsID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpXG5cbmV4cG9ydHMuTGFiZWxDdGcgPSBwcm9wcyA9PiB7XG5cdGNvbnN0IGNscyA9IGNsKCdsYWJlbC1jdGcnLGBsYWJlbC1jdGctbmFtZS0ke3Byb3BzLm5hbWV9YCx7XG5cdFx0WydsYWJlbC1jdGctYWN0aXZlJ10gOiAhIXByb3BzLmFjdGl2ZSxcblx0XHQnd2l0aC1pY28nIDogISFwcm9wcy5pY29cblx0fSlcblx0XG5cdGxldCBpY28gPSBwcm9wcy5pY28gPyA8ZGl2IGNsYXNzTmFtZT1cImxhYmVsLWljbyBsYWJlbC1jdGctaWNvXCI+e2dldEljbyhwcm9wcy5pY28pfTwvZGl2PiA6IG51bGw7XG5cdFxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2Nsc30gdGl0bGU9e3Byb3BzLmxhYmVsIHx8IHByb3BzLm5hbWV9PlxuXHRcdFx0e2ljb31cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGFiZWwtY3RnLXR4dFwiPlxuXHRcdFx0XHR7cHJvcHMubGFiZWwgfHwgcHJvcHMubmFtZX1cblx0XHRcdDwvZGl2PlxuXHRcdFx0PFJpZ2h0IGNsYXNzTmFtZT1cImNhcmV0XCIgc2l6ZT17MjV9Lz5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnRzLkxhYmVsTGlzdCA9IHByb3BzID0+IHtcblx0Y29uc3QgY2xzID0gY2woJ2xhYmVsLWxpc3QnLGBsYWJlbC1saXN0LW5hbWUtJHtwcm9wcy5uYW1lfWAse1xuXHRcdCd3aWR0aC1pY28nIDogISFwcm9wcy5pY29cblx0fSlcblxuXHRsZXQgaWNvID0gcHJvcHMuaWNvID8gPHNwYW4gY2xhc3NOYW1lPVwibGFiZWwtaWNvIGxhYmVsLWxpc3QtaWNvXCI+e2dldEljbyhwcm9wcy5pY28pfTwvc3Bhbj4gOiBudWxsO1xuXG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xzfT5cblx0XHRcdHtpY299XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsYWJlbC1saXN0LXR4dFwiPlxuXHRcdFx0XHR7cHJvcHMubmFtZX1cblx0XHRcdDwvc3Bhbj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcGZpbGVzL3NpZGViYXIvdXRpbHMvZ2V0LWxhYmVsLmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpXG5cbmNvbnN0IGljb25zID0ge1xuXHRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuYW1lID0+IHtcblx0aWYgKCFuYW1lKSByZXR1cm4gbnVsbDtcblx0bGV0IEljbyA9IGljb25zW25hbWVdIHx8IHJlcXVpcmUoJ3JlYWN0LWljb25zL2xpYi9mYS9ib29rbWFyay1vJyk7XG5cdHJldHVybiA8SWNvIC8+XG59XG5cbndpbmRvdy56enogPSBtb2R1bGUuZXhwb3J0c1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcGZpbGVzL3NpZGViYXIvdXRpbHMvZ2V0LWljby5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBGYUJvb2ttYXJrTyA9IGZ1bmN0aW9uIEZhQm9va21hcmtPKHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RJY29uQmFzZTIuZGVmYXVsdCxcbiAgICAgICAgX2V4dGVuZHMoeyB2aWV3Qm94OiAnMCAwIDQwIDQwJyB9LCBwcm9wcyksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2cnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTMxLjIgNS43aC0yMi44djI3LjdsMTEuNC0xMC45IDIgMS45IDkuNCA5di0yNy43eiBtMC4zLTIuOHEwLjUgMCAxIDAuMiAwLjcgMC4yIDEuMSAwLjl0MC41IDEuNHYyOC43cTAgMC44LTAuNSAxLjR0LTEuMSAwLjlxLTAuNSAwLjItMSAwLjItMS4xIDAtMS45LTAuN2wtOS44LTkuNS05LjkgOS41cS0wLjggMC43LTEuOCAwLjctMC41IDAtMS0wLjItMC43LTAuMy0xLjItMC45dC0wLjQtMS40di0yOC43cTAtMC44IDAuNC0xLjR0MS4yLTAuOXEwLjUtMC4yIDEtMC4yaDIzLjR6JyB9KVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEZhQm9va21hcmtPO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWljb25zL2xpYi9mYS9ib29rbWFyay1vLmpzXG4vLyBtb2R1bGUgaWQgPSAyNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEljb25CYXNlID0gcmVxdWlyZSgncmVhY3QtaWNvbi1iYXNlJyk7XG5cbnZhciBfcmVhY3RJY29uQmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEljb25CYXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIEZhQ2FyZXRSaWdodCA9IGZ1bmN0aW9uIEZhQ2FyZXRSaWdodChwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20yNi40IDIwcTAgMC42LTAuNSAxbC0xMCAxMHEtMC40IDAuNC0xIDAuNHQtMS0wLjQtMC40LTF2LTIwcTAtMC42IDAuNC0xdDEtMC40IDEgMC40bDEwIDEwcTAuNSAwLjQgMC41IDF6JyB9KVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEZhQ2FyZXRSaWdodDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9yZWFjdC1pY29ucy9saWIvZmEvY2FyZXQtcmlnaHQuanNcbi8vIG1vZHVsZSBpZCA9IDI2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBMaXN0SXRlbSA9IHJlcXVpcmUoJy4vbGlzdC1pdGVtJylcblxuY29uc3QgTGlzdEl0ZW1zID0gKHtsaXN0LCBhY3RpdmV9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PHVsIGNsYXNzTmFtZT1cImxpc3QtaXRlbXNcIiA+XG5cdFx0XHR7bGlzdC5tYXAoKGwsaSkgPT4gKFxuXHRcdFx0XHQ8bGkga2V5PXtpfSBvbkNsaWNrPXsoKT0+YWxlcnQoMTIzKX1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIiBcblx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbkRlbGF5OiBgJHtpKjAuMX1zYFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdDxMaXN0SXRlbSBpdGVtPXtsfSBpbmRleD17aX0gLz5cblx0XHRcdFx0PC9saT5cblx0XHRcdCkpfVxuXHRcdDwvdWw+XG5cdClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0SXRlbXNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBmaWxlcy9zaWRlYmFyL3V0aWxzL2xpc3QtaXRlbXMuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmNvbnN0IExpc3RJdGVtID0gcHJvcHMgPT4ge1xuXHRcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkxpc3RJdGVtXCIgPlxuXHRcdFx0e3Byb3BzLml0ZW0ubmFtZX1cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RJdGVtXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwZmlsZXMvc2lkZWJhci91dGlscy9saXN0LWl0ZW0uanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwZmlsZXMvc2lkZWJhci9zaWRlYmFyLmNzc1xuLy8gbW9kdWxlIGlkID0gMjcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IHsgY29ubmVjdCB9ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKVxuY29uc3Qge1JvdXRlLCBTd2l0Y2gsIExpbmssd2l0aFJvdXRlcn0gPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXItZG9tJylcbmNvbnN0IFJvdXRlcyA9IHJlcXVpcmUoJy4vcm91dGVzJylcbmNvbnN0IGVycm9ycyA9IHJlcXVpcmUoJy4vZXJyb3JzJylcblxubGV0IGMgPSAwO1xuXG5jbGFzcyBDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLmJ0biA9IHRoaXMuYnRuLmJpbmQodGhpcylcblx0XHR0aGlzLmVyciA9IHRoaXMuZXJyLmJpbmQodGhpcylcblx0fVxuXG5cdGJ0bihzdHIsb2IpIHtcblx0XHRyZXR1cm4gKCkgPT4gdGhpcy5wcm9wcy5kaXNwKHtcblx0XHRcdHR5cGUgOiBgbW9kYWw6JHtzdHJ9YCxcblx0XHRcdHBheWxvYWQgOiBvYlxuXHRcdH0pXG5cdH1cblxuXHRlcnIodHlwZSkge1xuXHRcdHJldHVybiAoKSA9PiBlcnJvcnNbdHlwZV0odGhpcy5wcm9wcy5kaXNwKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkNvbnRlbnRcIiBcblx0XHRcdFx0XHRvblNjcm9sbD17ZT0+Y29uc29sZS5sb2coJ3Njcm9sbCcsZSl9ID5cblx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpPT57YysrO3RoaXMucHJvcHMuZGlzcCh7dHlwZTondGl0bGUnLHBheWxvYWQ6Y30pfX0+Y2xpY2s8L2J1dHRvbj5cblx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTmloaWwgYW5pbWkgdGVuZXR1ciBleCwgYW1ldCBjb3JydXB0aSBhYiBibGFuZGl0aWlzIHJlaWNpZW5kaXMgcXVpYnVzZGFtIHZvbHVwdGFzIGxhdWRhbnRpdW0gbWFnbmFtIG51bXF1YW0gZXZlbmlldCBkaWN0YSByZXB1ZGlhbmRhZSBxdWFlcmF0IGN1cGlkaXRhdGUgZG9sb3JlbXF1ZSBmdWdpdCBzaXQgcHJhZXNlbnRpdW0gdmVsaXQgcGFyaWF0dXIgYWQgZW9zIHJlY3VzYW5kYWUgbW9sbGl0aWEuIEltcGVkaXQgZnVnaXQgbm9uIGFwZXJpYW0gdmVyaXRhdGlzISBTaW50IG5vbiBmdWdhIHF1YXMgaXVyZSwgZG9sb3Igdm9sdXB0YXRlbSBvZGl0IGV0ISBQb3JybyBhdXRlbSBtb2xlc3RpYWUgYWNjdXNhbnRpdW0gdm9sdXB0YXR1bSwgbmVtbyByZWljaWVuZGlzIGNvcnJ1cHRpIHF1aXNxdWFtIHVuZGUgb2RpbyEgRG9sb3JlcywgcG9zc2ltdXMgcXVhcywgb2JjYWVjYXRpIG5hbSBwb3JybyB2ZWwgaW4gY3VtcXVlIGNvcnJ1cHRpIGV4ZXJjaXRhdGlvbmVtIG5paGlsIG1vZGkgaXVzdG8gYWIsIGFjY3VzYW11cyBjb25zZXF1YXR1ciBhc3BlcmlvcmVzIGR1Y2ltdXMgaGljIGxhYm9ydW0gZXJyb3IgcXVhbS4gRXQsIGxhYm9ydW0gcmVwcmVoZW5kZXJpdCBxdWFzaSB2ZWwgY3VtIGl1c3RvIG9kaXQgcXVpLCB2ZXJvIG5lcXVlIGFjY3VzYW11cyBhdHF1ZSBlYSBuZW1vLlxuXHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHQ8TGluayB0bz1cIi9wL3Rlc3RcIj4gL3AvdGVzdCA8L0xpbms+PGJyLz5cblx0XHRcdFx0PExpbmsgdG89XCIvcC90ZXN0L2JsYVwiPiAvcC90ZXN0L2JsYSA8L0xpbms+PGJyLz5cblx0XHRcdFx0PExpbmsgdG89XCIvcC90ZXN0L3Evdy9lL3IvdC95P2NvbW1lbnQ9MVwiPiAvcC90ZXN0L3Evdy9lL3IvdC95IDwvTGluaz48YnIvPlxuXHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdDxTd2l0Y2g+XG5cdFx0XHRcdFx0XHQ8Um91dGUgY29tcG9uZW50PXtSb3V0ZXN9IHBhdGg9XCIvcC86bmFtZS86dGFyZ2V0cypcIiAvPlxuXHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9XCIvcC86bmFtZVwiIGNvbXBvbmVudD17Um91dGVzfS8+XG5cdFx0XHRcdFx0PC9Td2l0Y2g+XG5cdFx0XHRcdDxoci8+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMiBvZmZzZXQtMlwiPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiBvbkNsaWNrPXt0aGlzLmVycignc2ltcGxlJyl9PkVycm9yPC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tYmxvY2tcIiBvbkNsaWNrPXt0aGlzLmVycigndHlwZScpfT5UeXBlRXJyb3I8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi1ibG9ja1wiIG9uQ2xpY2s9e3RoaXMuZXJyKCdjdXN0b20nKX0+Q3VzdG9tRXJyb3I8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZyBidG4tYmxvY2tcIiBvbkNsaWNrPXt0aGlzLmVycigndGhyb3cnKX0+dGhyb3c8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC02IG9mZnNldC0zXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mb1wiPlxuXHRcdFx0XHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5xd2VydHkgMTwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+cXdlcnR5IDI8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPnF3ZXJ0eSAzPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5xd2VydHkgNDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+cXdlcnR5IDU8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPnF3ZXJ0eSA2PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5xd2VydHkgNzwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+cXdlcnR5IDg8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPnF3ZXJ0eSA5PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5xd2VydHkgMTA8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XG5cdFx0XHRcdFx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEVhIHF1b3MsIHZpdGFlIGlzdGUgcXVpIGhpYyB2b2x1cHRhdHVtIHZvbHVwdGFzIG5hdHVzIG9iY2FlY2F0aSB2b2x1cHRhdGVzIG1vbGxpdGlhIGlwc2FtIGludmVudG9yZSBzdW50LCBleGNlcHR1cmkgZXJyb3IsIHNpbWlsaXF1ZSBsYXVkYW50aXVtIGl0YXF1ZSBxdWFtIHZlbGl0LlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtOFwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtNCBvZmZzZXQtNFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXNlY29uZGFyeVwiPlxuXHRcdFx0XHRcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBSZWN1c2FuZGFlIGRvbG9yZXMgbWFnbmFtIHRlbXBvcmEsIGV4cGxpY2FibyBhY2N1c2FudGl1bSB2ZXJvLCBkb2xvcmUsIGVhcnVtIHN1bnQgaXBzYW0gdGVtcG9yaWJ1cyBub24gcXVpZGVtIGxhdWRhbnRpdW0gYWxpcXVpZCBxdWFlIHZpdGFlIG5hdHVzIGF1dGVtIHBlcmZlcmVuZGlzIGFsaXF1YW0gbmVtbyBkb2xvcmlidXMgY29ycG9yaXMgcXVvIG5pc2kgbGFib3JlIHVuZGUgZGViaXRpcy4gUXVvcywgb2ZmaWNpaXMhXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC00IG9mZnNldC04XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiPlxuXHRcdFx0XHRcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBGdWdpYXQgdWxsYW0gbmF0dXMgc3VudCBlYSBxdWFzaSBxdWlzIGJlYXRhZSBlbmltIHZlcml0YXRpcyBuaXNpIGxhYm9yaW9zYW0gdm9sdXB0YXRlIHBlcmZlcmVuZGlzIGV4cGVkaXRhLCBlcnJvciBvYmNhZWNhdGkgcmVwcmVoZW5kZXJpdCwgYW5pbWkgaXBzYW0gZXZlbmlldCBtaW51cyBhY2N1c2FudGl1bS4gU2ludCByYXRpb25lIHZvbHVwdGF0ZXMgbW9sZXN0aWFzLCBkb2xvcmVtIHJlcGVsbGVuZHVzLiBEb2xvcmVtIG9mZmljaWlzIG9wdGlvIG1hZ25pIHByYWVzZW50aXVtIGRvbG9ydW0uIEVvcyBjb25zZWN0ZXR1ciBpdXJlIGNvbnNlcXV1bnR1ciwgbWFnbmkuIElsbG8sIGVpdXMhXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdpdGhSb3V0ZXIoY29ubmVjdChcblx0c3RhdGUgPT4gKHt9KSxcblx0ZGlzcCA9PiAoe1xuXHRcdGRpc3Bcblx0fSlcbikoQ29udGVudCkpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwZmlsZXMvY29udGVudC9pbmRleC5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IHt3aXRoUm91dGVyfSA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlci1kb20nKVxuXG5jbGFzcyBSb3V0ZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiUm91dGVzXCI+XG5cdFx0XHRcdFJvdXRlcyB7TWF0aC5yYW5kb20oKX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3aXRoUm91dGVyKFJvdXRlcylcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBmaWxlcy9jb250ZW50L3JvdXRlcy5qcyIsImNsYXNzIEN1c3RvbUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXHRjb25zdHJ1Y3Rvcihtc2cpIHtcblx0XHRzdXBlcihtc2cpXG5cdFx0dGhpcy5uYW1lID0gJ0N1c3RvbUVycm9yJztcblx0XHR0aGlzLnRlc3QgPSBNYXRoLnJhbmRvbSgpXG5cdH1cbn1cblxuZXhwb3J0cy5zaW1wbGUgPSBkaXNwID0+IHtcblx0bGV0IGVyciA9IG5ldyBFcnJvcignc2ltcGxlIEVycm9yJylcblx0ZGlzcCh7XG5cdFx0dHlwZSA6ICdtb2RhbDplcnJvcicsXG5cdFx0cGF5bG9hZCA6IHtlcnJ9XG5cdH0pXG59XG5cblxuZXhwb3J0cy50eXBlID0gZGlzcCA9PiB7XG5cdGxldCBlcnIgPSBuZXcgVHlwZUVycm9yKCdzaW1wbGUgVHlwZUVycm9yJylcblx0ZGlzcCh7XG5cdFx0dHlwZSA6ICdtb2RhbDplcnJvcicsXG5cdFx0cGF5bG9hZCA6IHtlcnJ9XG5cdH0pXG59XG5cbmV4cG9ydHMuY3VzdG9tID0gZGlzcCA9PiB7XG5cdGxldCBlcnIgPSBuZXcgQ3VzdG9tRXJyb3IoJ215IEN1c3RvbUVycm9yJylcblx0ZGlzcCh7XG5cdFx0dHlwZSA6ICdtb2RhbDplcnJvcicsXG5cdFx0cGF5bG9hZCA6IHtlcnJ9XG5cdH0pXG59XG5cblxuZXhwb3J0cy50aHJvdyA9IGRpc3AgPT4ge1xuXHR0cnkge1xuXHRcdFtdLm1hcCgncXdlcnR5Jylcblx0fSBjYXRjaChlcnIpIHtcblx0XHRkaXNwKHtcblx0XHRcdHR5cGU6ICdtb2RhbDplcnJvcicsXG5cdFx0XHRwYXlsb2FkOiB7ZXJyfVxuXHRcdH0pXG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBmaWxlcy9jb250ZW50L2Vycm9ycy5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBmaWxlcy9wYWdlL3BhZ2UuY3NzXG4vLyBtb2R1bGUgaWQgPSAyNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cblx0Z2V0aCgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcblx0XHRcdFx0PHogcXdlcnR5PVwiXCI+MTwvej5cblx0XHRcdFx0PHogcXdlcnR5PVwiXCI+Mzwvej5cblx0XHRcdFx0XG5cdFx0XHRcdDx6IHF3ZXJ0eT1cIlwiPjQ8L3o+XG5cdFx0XHRcdDx6IHF3ZXJ0eT1cIlwiPjU8L3o+XG5cdFx0XHRcdDx6IHF3ZXJ0eT1cIlwiPjY8L3o+XG5cdFx0XHRcdDx6IHF3ZXJ0eT1cIlwiPjc8L3o+XG5cdFx0XHRcdDx6IHF3ZXJ0eT1cIlwiPjg8L3o+XG5cdFx0XHRcdDx6IHF3ZXJ0eT1cIlwiPjk8L3o+XG5cdFx0XHRcdDx6IHF3ZXJ0eT1cIlwiPjEwPC96PlxuXHRcdFx0XHQ8eiBxd2VydHk9XCJcIj4yPC96PlxuXHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcblx0XHQpXG5cblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxmb290ZXIgc3R5bGU9e3tvdXRsaW5lOicxcHggc29saWQgYmx1ZSd9fT5mb290ZXI8L2Zvb3Rlcj5cblx0XHQpO1xuXHR9XG59XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IEZvb3RlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcGZpbGVzL2Zvb3Rlci9pbmRleC5qcyIsImNvbnN0IGNyZWF0ZVJlZHV4U3RvcmUgPSByZXF1aXJlKCdjcmVhdGUtcmVkdXgtc3RvcmUnKTtcbmNvbnN0IHsgbW9kYWxzUmVkdXNlciB9ID0gcmVxdWlyZSgndi9jb250YWluZXItZm9yLW1vZGFsJylcbmNvbnN0IGRpc3AgPSByZXF1aXJlKCcuL2Rpc3AnKVxuXG5cblxuY29uc3QgcmVkdXNlcnMgPSB7XG5cdG1haW4gOiByZXF1aXJlKCcuL3JlZHVzZXJzL21haW4nKSxcblx0bWVudSA6IHJlcXVpcmUoJy4vcmVkdXNlcnMvbWVudScpLFxuXHRtb2RhbHMgOiBtb2RhbHNSZWR1c2VyXG59XG5cbmNvbnN0IG1kdyA9IFtcblx0cmVxdWlyZSgnLi9tZHcvbWFpbicpXG5dXG5cblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVSZWR1eFN0b3JlKHJlZHVzZXJzLG1kdylcblxuZGlzcChzdG9yZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcGkvc3RvcmUuanMiLCJjb25zdCB7IGdldERpc3BsYXkgfSA9IHJlcXVpcmUoJy4uL2Rpc3AnKVxuXG5sZXQgZGlzcGxheSA9IGdldERpc3BsYXkoKVxuXG5jb25zdCBkZWYgPSB7XG5cdHRpdGxlIDogZG9jdW1lbnQudGl0bGUsXG5cdGRpc3BsYXksXG5cdHNpZGViYXJPcGVuIDogdHJ1ZS8qKGRpc3BsYXkgPT0gJ3hsJyB8fCBkaXNwbGF5ID09ICdsZycpKi9cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IChzdGF0ZT1kZWYsIGFjdGlvbikgPT4ge1xuXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlICd0aXRsZSc6XG5cdFx0XHRyZXR1cm4gey4uLnN0YXRlLCB0aXRsZTphY3Rpb24ucGF5bG9hZH1cblx0XHRicmVhaztcblx0XHRjYXNlICdkaXNwbGF5Jzpcblx0XHRcdHJldHVybiB7Li4uc3RhdGUsIGRpc3BsYXk6YWN0aW9uLnBheWxvYWR9XG5cdFx0YnJlYWs7XG5cdFx0Y2FzZSAnc2lkZWJhcjpvcGVuJzpcblx0XHRcdHJldHVybiB7Li4uc3RhdGUsIHNpZGViYXJPcGVuOiB0cnVlfVxuXHRcdGJyZWFrO1xuXHRcdGNhc2UgJ3NpZGViYXI6Y2xvc2UnOlxuXHRcdFx0cmV0dXJuIHsuLi5zdGF0ZSwgc2lkZWJhck9wZW46IGZhbHNlfVxuXHRcdGJyZWFrO1xuXHR9XG5cblx0cmV0dXJuIHN0YXRlXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBpL3JlZHVzZXJzL21haW4uanMiLCJjb25zdCBkZWYgPSB7XG5cdGlzTG9hZGVkIDogZmFsc2UsXG5cdHR5cGVzIDoge30sXG5cdGN0ZyA6IFtdLFxuXHRsaXN0IDogW11cbn1cblxubW9kdWxlLmV4cG9ydHMgPSAoc3RhdGU9ZGVmLGFjdGlvbikgPT4ge1xuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlICdtZW51OmxvYWRlZCc6XG5cdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYWN0aW9uLnBheWxvYWQuY3RnIHx8ICFBcnJheS5pc0FycmF5KGFjdGlvbi5wYXlsb2FkLmxpc3QpKSkgcmV0dXJuIHN0YXRlO1xuXHRcdFx0bGV0IG5zID0gey4uLmRlZixpc0xvYWRlZDp0cnVlLGN0ZzphY3Rpb24ucGF5bG9hZC5jdGd9XG5cdFx0XHRucy5saXN0ID0gYWN0aW9uLnBheWxvYWQubGlzdC5maWx0ZXIodmFsID0+ICh0eXBlb2YgdmFsID09ICdvYmplY3QnICYmIHZhbC5jYXQgJiYgQXJyYXkuaXNBcnJheSh2YWwuY2F0KSkpXG5cdFx0XHRucy5saXN0LmZvckVhY2godmFsID0+IHtcblx0XHRcdFx0XHR2YWwuY2F0LmZvckVhY2goYyA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoIW5zLnR5cGVzW2NdKSBucy50eXBlc1tjXSA9IDA7XG5cdFx0XHRcdFx0XHRucy50eXBlc1tjXSsrO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0pXG5cdFx0XHRyZXR1cm4gbnM7XG5cdFx0YnJlYWs7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGU7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBpL3JlZHVzZXJzL21lbnUuanMiLCJjb25zdCBnZXREYXRhID0gcmVxdWlyZSgndi9nZXQtZGF0YScpXG5jb25zdCBpc09iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0JylcblxuZXhwb3J0cy50aXRsZSA9IChzdG9yZSwgbmV4dCwgdGl0bGUsIGFjdGlvbikgPT4ge1xuXHRpZiAoIXRpdGxlIHx8ICF0aXRsZS50b1N0cmluZykgcmV0dXJuO1xuXHR0aXRsZSA9IHRpdGxlLnRvU3RyaW5nKCk7XG5cdGRvY3VtZW50LnRpdGxlID0gdGl0bGU7XG5cdG5leHQoYWN0aW9uKVxufVxuXG5leHBvcnRzWydtZW51OmxvYWQnXSA9IChzdG9yZSwgbmV4dCkgPT4ge1xuXHRnZXREYXRhKCcvZGF0YS9tZW51Lmpzb24/dj0nICsgTWF0aC5yYW5kb20oKSlcblx0XHQudGhlbihkYXRhID0+IHtcblx0XHRcdFxuXHRcdFx0aWYgKCFpc09iamVjdChkYXRhKSB8fCAhQXJyYXkuaXNBcnJheShkYXRhLmN0ZykgfHwgIUFycmF5LmlzQXJyYXkoZGF0YS5saXN0KSkgdGhyb3cgbmV3IEVycm9yKCdyZXN1bCBmb3IgXFxcIi9kYXRhL21lbnUuanNvblxcXCIgbXVzdCBiZSB7XFxcImN0Z1xcXCI6QXJyYXkoKSxcXFwibGlzdFxcXCI6QXJyYXkoKX0nKVxuXHRcdFx0bmV4dCh7XG5cdFx0XHRcdHR5cGUgOiAnbWVudTpsb2FkZWQnLFxuXHRcdFx0XHRwYXlsb2FkIDogZGF0YVxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdC5jYXRjaChlID0+IG5leHQoe3R5cGU6J21vZGFsOmVycm9yJyxwYXlsb2FkOntlcnI6ZX19KSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcGkvbWR3L21haW4uanMiLCJcblxubW9kdWxlLmV4cG9ydHMgPSBzdHIgPT4ge1xuXHRyZXR1cm4gZmV0Y2goc3RyKVxuXHRcdFx0XHQudGhlbihyZXMgPT4ge1xuXHRcdFx0XHRcdGlmIChyZXMuc3RhdHVzID09IDIwMCkgcmV0dXJuIHJlcy5qc29uKCk7XG5cdFx0XHRcdFx0aWYgKHJlcy5zdGF0dXMgPT0gNDA0KSB0aHJvdyBuZXcgRXJyb3IoJ2RhdGEgTm90IEZvdW5kJyk7XG5cdFx0XHRcdFx0cmV0dXJuIFtdO1xuXHRcdFx0XHR9KVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3ZlbmRvci9nZXQtZGF0YS5qcyJdLCJzb3VyY2VSb290IjoiIn0=