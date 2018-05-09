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

module.exports = { "default": __webpack_require__(217), __esModule: true };

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

module.exports = { "default": __webpack_require__(184), __esModule: true };

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


exports.Container = __webpack_require__(216);
exports.modalsReduser = __webpack_require__(232);

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

module.exports = { "default": __webpack_require__(221), __esModule: true };

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

var App = __webpack_require__(180);
var store = __webpack_require__(277);

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
/* 178 */,
/* 179 */,
/* 180 */
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

__webpack_require__(215);

var _require3 = __webpack_require__(113),
    Container = _require3.Container;

var modals = __webpack_require__(244);
var Header = __webpack_require__(251);
var Page = __webpack_require__(260);
var Footer = __webpack_require__(276);

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
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(185);
var $Object = __webpack_require__(9).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(14);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(18), 'Object', { defineProperty: __webpack_require__(15).f });


/***/ }),
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
/* 213 */,
/* 214 */,
/* 215 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 216 */
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
var Modal = __webpack_require__(220);
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
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(218);
module.exports = __webpack_require__(9).Object.assign;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(14);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(219) });


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(33);
var gOPS = __webpack_require__(69);
var pIE = __webpack_require__(41);
var toObject = __webpack_require__(30);
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
/* 220 */
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

var CloseButton = __webpack_require__(223);
var parseSettings = __webpack_require__(224);
var isFunction = __webpack_require__(43);

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
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(222);
module.exports = __webpack_require__(9).Object.keys;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(30);
var $keys = __webpack_require__(33);

__webpack_require__(101)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 223 */
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
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _assign = __webpack_require__(25);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isObject = __webpack_require__(34);
var isFunction = __webpack_require__(43);

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
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _toConsumableArray2 = __webpack_require__(233);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _objectWithoutProperties2 = __webpack_require__(114);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _assign = __webpack_require__(25);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getKey = __webpack_require__(243);

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
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(234);

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
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(235), __esModule: true };

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(105);
__webpack_require__(236);
module.exports = __webpack_require__(9).Array.from;


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(58);
var $export = __webpack_require__(14);
var toObject = __webpack_require__(30);
var call = __webpack_require__(237);
var isArrayIter = __webpack_require__(238);
var toLength = __webpack_require__(110);
var createProperty = __webpack_require__(239);
var getIterFn = __webpack_require__(240);

$export($export.S + $export.F * !__webpack_require__(242)(function (iter) { Array.from(iter); }), 'Array', {
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
/* 237 */
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
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(32);
var ITERATOR = __webpack_require__(10)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(15);
var createDesc = __webpack_require__(31);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(241);
var ITERATOR = __webpack_require__(10)('iterator');
var Iterators = __webpack_require__(32);
module.exports = __webpack_require__(9).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 241 */
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
/* 242 */
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
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var count = 0;

module.exports = function () {
	count++;
	return count;
};

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	error: __webpack_require__(245),
	discussion: __webpack_require__(247),
	test: __webpack_require__(249)
};

/***/ }),
/* 245 */
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
__webpack_require__(246);

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
/* 246 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 247 */
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
__webpack_require__(248);

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
/* 248 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 249 */
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
__webpack_require__(250);
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
/* 250 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 251 */
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

var HomeIco = __webpack_require__(252);
var MenuIco = __webpack_require__(253);

var _require2 = __webpack_require__(16),
    Link = _require2.Link;

var InfoBlock = __webpack_require__(254);
__webpack_require__(259);

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
/* 252 */
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
/* 254 */
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

var CodeIco = __webpack_require__(255);
var CommentIco = __webpack_require__(256);
var BreadcrambIcoVer = __webpack_require__(257);
var BreadcrambIcoGor = __webpack_require__(258);

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
/* 257 */
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
/* 258 */
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
/* 259 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);
var Sidebar = __webpack_require__(261);
var Content = __webpack_require__(272);

__webpack_require__(275);

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
/* 261 */
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

var Core = __webpack_require__(262);
__webpack_require__(271);

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
/* 262 */
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
var Loader = __webpack_require__(263);
var Item = __webpack_require__(265);

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
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);
__webpack_require__(264);
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
/* 264 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 265 */
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

var _require = __webpack_require__(266),
    LabelCtg = _require.LabelCtg;

var ListItems = __webpack_require__(307);

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
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty2 = __webpack_require__(71);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var React = __webpack_require__(0);
var getIco = __webpack_require__(267);
var Right = __webpack_require__(269);
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
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);

var icons = {};

module.exports = function (name) {
	if (!name) return null;
	var Ico = icons[name] || __webpack_require__(268);
	return React.createElement(Ico, null);
};

window.zzz = module.exports;

/***/ }),
/* 268 */
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
/* 269 */
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
/* 270 */,
/* 271 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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

var _require = __webpack_require__(12),
    connect = _require.connect;

var _require2 = __webpack_require__(16),
    Route = _require2.Route,
    Switch = _require2.Switch,
    Link = _require2.Link,
    withRouter = _require2.withRouter;

var Routes = __webpack_require__(273);
var errors = __webpack_require__(274);

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
/* 273 */
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
/* 274 */
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
/* 275 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 276 */
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
		key: 'render',
		value: function render() {
			return React.createElement(
				'footer',
				{ style: { outline: '1px solid blue' } },
				'footer'
			);
		}
	}]);
	return Footer;
}(React.Component);

module.exports = Footer;

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createReduxStore = __webpack_require__(118);

var _require = __webpack_require__(113),
    modalsReduser = _require.modalsReduser;

var disp = __webpack_require__(120);

var redusers = {
	main: __webpack_require__(286),
	menu: __webpack_require__(287),
	modals: modalsReduser
};

var mdw = [__webpack_require__(288)];

var store = createReduxStore(redusers, mdw);

disp(store);

module.exports = store;

/***/ }),
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */
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
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(60);

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
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getData = __webpack_require__(289);
var isObject = __webpack_require__(34);

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
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (str) {
	return fetch(str).then(function (res) {
		if (res.status == 200) return res.json();
		if (res.status == 404) throw new Error('data Not Found');
		return [];
	});
};

/***/ }),
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);
var ListItem = __webpack_require__(308);

var ListItems = function ListItems(_ref) {
	var list = _ref.list,
	    active = _ref.active;

	return React.createElement(
		'ul',
		{ className: 'list-items', style: {
				height: active ? list.length * 20 : 0
			} },
		list.map(function (l, i) {
			return React.createElement(
				'li',
				{ key: i, className: 'list-item' },
				React.createElement(ListItem, { item: l, index: i })
			);
		})
	);
};

module.exports = ListItems;

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(0);

var ListItem = function ListItem(props) {

	return React.createElement(
		"div",
		{ className: "ListItem" },
		"ListItem"
	);
};

module.exports = ListItem;

/***/ })
],[121]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL2hvbWUva2FyaWZhbi9ub2RlL25lcmpzL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2thcmlmYW4vbm9kZS9uZXJqcy9ub2RlX21vZHVsZXMvcmVhY3QtaWNvbi1iYXNlL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2FyaWZhbi9ub2RlL25lcmpzL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2FyaWZhbi9ub2RlL25lcmpzL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2FyaWZhbi9ub2RlL25lcmpzL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2thcmlmYW4vbm9kZS9uZXJqcy9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2FyaWZhbi9ub2RlL25lcmpzL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3IvY29udGFpbmVyLWZvci1tb2RhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2FyaWZhbi9ub2RlL25lcmpzL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2thcmlmYW4vbm9kZS9uZXJqcy9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9rZXlzLmpzIiwid2VicGFjazovLy8uL2FwcGZpbGVzL21vZGFscy9mb3JtLmpzIiwid2VicGFjazovLy8uL2FwaS9kaXNwLmpzIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2FyaWZhbi9ub2RlL25lcmpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2FyaWZhbi9ub2RlL25lcmpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9jc3Mvcm9vdC5jc3MiLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL2NvbnRhaW5lci1mb3ItbW9kYWwvY29udGFpbmVyLmpzIiwid2VicGFjazovLy8vaG9tZS9rYXJpZmFuL25vZGUvbmVyanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduLmpzIiwid2VicGFjazovLy8vaG9tZS9rYXJpZmFuL25vZGUvbmVyanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwid2VicGFjazovLy8vaG9tZS9rYXJpZmFuL25vZGUvbmVyanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtYXNzaWduLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9jb250YWluZXItZm9yLW1vZGFsL21vZGFsLmpzIiwid2VicGFjazovLy8vaG9tZS9rYXJpZmFuL25vZGUvbmVyanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5cy5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2FyaWZhbi9ub2RlL25lcmpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2thcmlmYW4vbm9kZS9uZXJqcy9ub2RlX21vZHVsZXMvcmVhY3QtaWNvbnMvbGliL2ZhL2Nsb3NlLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9jb250YWluZXItZm9yLW1vZGFsL3V0aWxzL3BhcnNlLXNldHRpbmdzLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9jb250YWluZXItZm9yLW1vZGFsL3JlZHVzZXIuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2thcmlmYW4vbm9kZS9uZXJqcy9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovLy8vaG9tZS9rYXJpZmFuL25vZGUvbmVyanMvbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8vaG9tZS9rYXJpZmFuL25vZGUvbmVyanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzIiwid2VicGFjazovLy8vaG9tZS9rYXJpZmFuL25vZGUvbmVyanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8vaG9tZS9rYXJpZmFuL25vZGUvbmVyanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2thcmlmYW4vbm9kZS9uZXJqcy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2thcmlmYW4vbm9kZS9uZXJqcy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2FyaWZhbi9ub2RlL25lcmpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2thcmlmYW4vbm9kZS9uZXJqcy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NsYXNzb2YuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2thcmlmYW4vbm9kZS9uZXJqcy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9jb250YWluZXItZm9yLW1vZGFsL3V0aWxzL2dldC1rZXkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwZmlsZXMvbW9kYWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcGZpbGVzL21vZGFscy9lcnJvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHBmaWxlcy9tb2RhbHMvZXJyb3IvZXJyb3ItbW9kYWwuY3NzIiwid2VicGFjazovLy8uL2FwcGZpbGVzL21vZGFscy9kaXNjdXNzaW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcGZpbGVzL21vZGFscy9kaXNjdXNzaW9uL2Rpc2MuY3NzIiwid2VicGFjazovLy8uL2FwcGZpbGVzL21vZGFscy90ZXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcGZpbGVzL21vZGFscy90ZXN0L3Rlc3QuY3NzIiwid2VicGFjazovLy8uL2FwcGZpbGVzL2hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2FyaWZhbi9ub2RlL25lcmpzL25vZGVfbW9kdWxlcy9yZWFjdC1pY29ucy9saWIvZmEvaG9tZS5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2FyaWZhbi9ub2RlL25lcmpzL25vZGVfbW9kdWxlcy9yZWFjdC1pY29ucy9saWIvdGkvdGgtbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hcHBmaWxlcy9oZWFkZXIvaW5mby1ibG9jay5qcyIsIndlYnBhY2s6Ly8vL2hvbWUva2FyaWZhbi9ub2RlL25lcmpzL25vZGVfbW9kdWxlcy9yZWFjdC1pY29ucy9saWIvaW8vY29kZS13b3JraW5nLmpzIiwid2VicGFjazovLy8vaG9tZS9rYXJpZmFuL25vZGUvbmVyanMvbm9kZV9tb2R1bGVzL3JlYWN0LWljb25zL2xpYi9mYS9jb21tZW50aW5nLmpzIiwid2VicGFjazovLy8vaG9tZS9rYXJpZmFuL25vZGUvbmVyanMvbm9kZV9tb2R1bGVzL3JlYWN0LWljb25zL2xpYi9tZC9tb3JlLXZlcnQuanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2thcmlmYW4vbm9kZS9uZXJqcy9ub2RlX21vZHVsZXMvcmVhY3QtaWNvbnMvbGliL21kL21vcmUtaG9yaXouanMiLCJ3ZWJwYWNrOi8vLy4vYXBwZmlsZXMvaGVhZGVyL2hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwZmlsZXMvcGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHBmaWxlcy9zaWRlYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcGZpbGVzL3NpZGViYXIvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY3NzIiwid2VicGFjazovLy8uL2FwcGZpbGVzL3NpZGViYXIvdXRpbHMvaXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9hcHBmaWxlcy9zaWRlYmFyL3V0aWxzL2dldC1sYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9hcHBmaWxlcy9zaWRlYmFyL3V0aWxzL2dldC1pY28uanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2thcmlmYW4vbm9kZS9uZXJqcy9ub2RlX21vZHVsZXMvcmVhY3QtaWNvbnMvbGliL2ZhL2Jvb2ttYXJrLW8uanMiLCJ3ZWJwYWNrOi8vLy9ob21lL2thcmlmYW4vbm9kZS9uZXJqcy9ub2RlX21vZHVsZXMvcmVhY3QtaWNvbnMvbGliL2ZhL2NhcmV0LXJpZ2h0LmpzIiwid2VicGFjazovLy8uL2FwcGZpbGVzL3NpZGViYXIvc2lkZWJhci5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwZmlsZXMvY29udGVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHBmaWxlcy9jb250ZW50L3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHBmaWxlcy9jb250ZW50L2Vycm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9hcHBmaWxlcy9wYWdlL3BhZ2UuY3NzIiwid2VicGFjazovLy8uL2FwcGZpbGVzL2Zvb3Rlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcGkvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBpL3JlZHVzZXJzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXBpL3JlZHVzZXJzL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBpL21kdy9tYWluLmpzIiwid2VicGFjazovLy8uL3ZlbmRvci9nZXQtZGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9hcHBmaWxlcy9zaWRlYmFyL3V0aWxzL2xpc3QtaXRlbXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwZmlsZXMvc2lkZWJhci91dGlscy9saXN0LWl0ZW0uanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsIkNvbnRhaW5lciIsInJlcXVpcmUiLCJtb2RhbHNSZWR1c2VyIiwiUmVhY3QiLCJGb3JtIiwicHJvcHMiLCJzdGF0ZSIsImEiLCJiIiwibW9kYWwiLCJuYW1lIiwiaWQiLCJfaWQiLCJvcGVuTSIsImJpbmQiLCJ1cGRhdGVNIiwidXBNIiwic2V0U3RhdGUiLCJyZWZzIiwidmFsdWUiLCJkaXNwYXRjaCIsInR5cGUiLCJwYXlsb2FkIiwiTnVtYmVyIiwiaWRzIiwiX3JvdyIsIm1hcCIsIm0iLCJpbmRleE9mIiwicHVzaCIsImxlbmd0aCIsImNoYW5nZSIsIkNvbXBvbmVudCIsIm1vZHVsZSIsImdldERpc3BsYXkiLCJ3IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRXaWR0aCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvIiwic3RvcmUiLCJnZXRTdGF0ZSIsIm1haW4iLCJkaXNwbGF5IiwibiIsInJlbmRlciIsIlByb3ZpZGVyIiwiSGFzaFJvdXRlciIsImVJZCIsImdldEVsZW1lbnRCeUlkIiwiQXBwIiwiTGluayIsImNvbm5lY3QiLCJtb2RhbHMiLCJIZWFkZXIiLCJQYWdlIiwiRm9vdGVyIiwiTW9kYWwiLCJwcm9wVHlwZXMiLCJpIiwiQ29udGFpbmVyRm9yTW9kYWwiLCJyb290IiwiaXNGaXhlZCIsInRvcCIsInNjcm9sbCIsIm5wIiwibnMiLCJzIiwic2Nyb2xsVG8iLCJtb2RhbERhdGEiLCJvcGVuIiwicGFnZVlPZmZzZXQiLCJwciIsInBvc2l0aW9uIiwiekluZGV4IiwibGVmdCIsIndpZHRoIiwibGF5ZXJPcGFjaXR5IiwibGF5ZXJDb2xvciIsInN0eWxlIiwicHJvcHNSb290IiwicHJvcHNNb2RhbCIsImdldFN0eWxlIiwiY2hpbGRyZW4iLCJkZWZhdWx0UHJvcHMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwibnVtYmVyIiwic3RyaW5nIiwiQ2xvc2VCdXR0b24iLCJwYXJzZVNldHRpbmdzIiwiaXNGdW5jdGlvbiIsIlJvb3RNb2RhbCIsIm9wdGlvbnMiLCJteURhdGEiLCJpcyIsInNldHRpbmdzIiwibW9kYWxzU2V0dGluZ3MiLCJmb3JFYWNoIiwia2V5IiwiY2xvc2UiLCJjbG9zZUlubiIsImdldENvbXAiLCJlIiwidCIsImNsb3NlRm4iLCJ0YXJnZXQiLCJpbm5lciIsInJvdyIsIkRhdGUiLCJub3ciLCJtZCIsImxheWVyIiwicmlnaHQiLCJib3R0b20iLCJiYWNrZ3JvdW5kQ29sb3IiLCJvcGFjaXR5IiwibGF5ZXJDbG9zZSIsIm9uQ2xpY2siLCJjbG9zZUJ1dHRvbiIsIk1hdGgiLCJyb3VuZCIsImhlaWdodCIsImN1cnNvciIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImZpbGwiLCJpbm5lclByb3BzIiwicmVmIiwiYm9yZGVyIiwiZ2V0TGF5ZXIiLCJnZXRDbG9zZUJ1dHRvbiIsImlzT2JqZWN0IiwiZGVmU2V0dGluZ3MiLCJjb21wIiwibW9kYWxTZXR0aW5ncyIsImdldEtleSIsImRlZiIsIm1vZGFsTmFtZXMiLCJtQ2xvc2UiLCJmaWx0ZXIiLCJtVXBkYXRlIiwiZGF0YSIsIm5vIiwibU9wZW4iLCJuSWQiLCJzcGxpdCIsIm1VcCIsIm1vZCIsImFjdGlvbiIsIkFycmF5IiwiaXNBcnJheSIsInYiLCJjb3VudCIsImVycm9yIiwiZGlzY3Vzc2lvbiIsInRlc3QiLCJFcnJvck1vZGFsIiwiZXJyIiwiRXJyb3IiLCJzZXRUaW1lb3V0Iiwic3RhY2siLCJtZXNzYWdlIiwiRGlzY3Vzc2lvbiIsImNsIiwiVGVzdE1vZGFsIiwiY29uc29sZSIsImxvZyIsIl9teURhdGEiLCJjbHMiLCJzdGFydCIsInNzIiwiYyIsIkhvbWVJY28iLCJNZW51SWNvIiwiSW5mb0Jsb2NrIiwib3BlblNpZGViYXIiLCJ0aXRsZSIsIndpdGhSb3V0ZXIiLCJDb2RlSWNvIiwiQ29tbWVudEljbyIsIkJyZWFkY3JhbWJJY29WZXIiLCJCcmVhZGNyYW1iSWNvR29yIiwiSW5mb0Jsb2NrSGVhZGVyIiwiU2lkZWJhciIsIkNvbnRlbnQiLCJDb3JlIiwiaGlkZSIsInNjIiwib2Zmc2V0UGFyZW50IiwibWVudSIsIkxvYWRlciIsIkl0ZW0iLCJNZW51U2lkZWJhciIsImFjdGl2ZSIsImluZGV4Iiwid2luQ2xvc2VJdGVtIiwic24iLCJ0eXBlcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhY3RpdmVJbmRleCIsInN0b3BQcm9wYWdhdGlvbiIsImlzTG9hZGVkIiwiY29yZU9uQ2xpY2siLCJjdGciLCJsaXN0IiwidmFsIiwiY2F0IiwiTGFiZWxDdGciLCJMaXN0SXRlbXMiLCJNZW51SXRlbSIsImxhYmVsIiwiaWNvIiwidGQiLCJhYnMiLCJ0cmFuc2l0aW9uRGVsYXkiLCJnZXRJY28iLCJSaWdodCIsIkxhYmVsTGlzdCIsImljb25zIiwiSWNvIiwienp6IiwiUm91dGUiLCJTd2l0Y2giLCJSb3V0ZXMiLCJlcnJvcnMiLCJidG4iLCJzdHIiLCJvYiIsImRpc3AiLCJyYW5kb20iLCJDdXN0b21FcnJvciIsIm1zZyIsInNpbXBsZSIsIlR5cGVFcnJvciIsImN1c3RvbSIsInRocm93Iiwib3V0bGluZSIsImNyZWF0ZVJlZHV4U3RvcmUiLCJyZWR1c2VycyIsIm1kdyIsInNpZGViYXJPcGVuIiwiZ2V0RGF0YSIsIm5leHQiLCJ0b1N0cmluZyIsInRoZW4iLCJjYXRjaCIsImZldGNoIiwicmVzIiwic3RhdHVzIiwianNvbiIsIkxpc3RJdGVtIiwibCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEc7Ozs7Ozs7Ozs7QUMxQkQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQsbURBQW1ELGdCQUFnQixzQkFBc0IsT0FBTywyQkFBMkIsMEJBQTBCLHlEQUF5RCwyQkFBMkIsRUFBRSxFQUFFLEVBQUUsZUFBZTs7QUFFOVA7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0NBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGLDhDQUE4QyxpQkFBaUIscUJBQXFCLG9DQUFvQyw2REFBNkQsb0JBQW9CLEVBQUUsZUFBZTs7QUFFMU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw0REFBNEQ7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUssMkJBQTJCO0FBQ2hDLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0Y7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFBQTtBQUFBLE1BQUksS0FBS0EsQ0FBVCxFQUFZLFdBQVUsV0FBdEI7QUFBa0Msd0JBQUMsUUFBRCxJQUFVLE1BQU1pTSxDQUFoQixFQUFtQixPQUFPak0sQ0FBMUI7QUFBbEMsSUFBVDtBQUFBLEdBQVQ7QUFIRixFQUREO0FBT0EsQ0FSRDs7QUFVQTVCLE9BQU9sQyxPQUFQLEdBQWlCb04sU0FBakIsQzs7Ozs7Ozs7O0FDYkEsSUFBTWhOLFFBQVEsbUJBQUFGLENBQVEsQ0FBUixDQUFkOztBQUVBLElBQU00UCxXQUFXLFNBQVhBLFFBQVcsUUFBUzs7QUFFekIsUUFDQztBQUFBO0FBQUEsSUFBSyxXQUFVLFVBQWY7QUFBQTtBQUFBLEVBREQ7QUFLQSxDQVBEOztBQVNBNU4sT0FBT2xDLE9BQVAsR0FBaUI4UCxRQUFqQixDIiwiZmlsZSI6Ii4vanMvY29yZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9ob21lL2thcmlmYW4vbm9kZS9uZXJqcy9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG52YXIgSWNvbkJhc2UgPSBmdW5jdGlvbiBJY29uQmFzZShfcmVmLCBfcmVmMikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuICB2YXIgY29sb3IgPSBfcmVmLmNvbG9yO1xuICB2YXIgc2l6ZSA9IF9yZWYuc2l6ZTtcbiAgdmFyIHN0eWxlID0gX3JlZi5zdHlsZTtcbiAgdmFyIHdpZHRoID0gX3JlZi53aWR0aDtcbiAgdmFyIGhlaWdodCA9IF9yZWYuaGVpZ2h0O1xuXG4gIHZhciBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2NoaWxkcmVuJywgJ2NvbG9yJywgJ3NpemUnLCAnc3R5bGUnLCAnd2lkdGgnLCAnaGVpZ2h0J10pO1xuXG4gIHZhciBfcmVmMiRyZWFjdEljb25CYXNlID0gX3JlZjIucmVhY3RJY29uQmFzZTtcbiAgdmFyIHJlYWN0SWNvbkJhc2UgPSBfcmVmMiRyZWFjdEljb25CYXNlID09PSB1bmRlZmluZWQgPyB7fSA6IF9yZWYyJHJlYWN0SWNvbkJhc2U7XG5cbiAgdmFyIGNvbXB1dGVkU2l6ZSA9IHNpemUgfHwgcmVhY3RJY29uQmFzZS5zaXplIHx8ICcxZW0nO1xuICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3N2ZycsIF9leHRlbmRzKHtcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgcHJlc2VydmVBc3BlY3RSYXRpbzogJ3hNaWRZTWlkIG1lZXQnLFxuICAgIGhlaWdodDogaGVpZ2h0IHx8IGNvbXB1dGVkU2l6ZSxcbiAgICB3aWR0aDogd2lkdGggfHwgY29tcHV0ZWRTaXplXG4gIH0sIHJlYWN0SWNvbkJhc2UsIHByb3BzLCB7XG4gICAgc3R5bGU6IF9leHRlbmRzKHtcbiAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgY29sb3I6IGNvbG9yIHx8IHJlYWN0SWNvbkJhc2UuY29sb3JcbiAgICB9LCByZWFjdEljb25CYXNlLnN0eWxlIHx8IHt9LCBzdHlsZSlcbiAgfSkpO1xufTtcblxuSWNvbkJhc2UucHJvcFR5cGVzID0ge1xuICBjb2xvcjogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIHNpemU6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJdKSxcbiAgd2lkdGg6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXJdKSxcbiAgaGVpZ2h0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsIF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyXSksXG4gIHN0eWxlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdFxufTtcblxuSWNvbkJhc2UuY29udGV4dFR5cGVzID0ge1xuICByZWFjdEljb25CYXNlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnNoYXBlKEljb25CYXNlLnByb3BUeXBlcylcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEljb25CYXNlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL2hvbWUva2FyaWZhbi9ub2RlL25lcmpzL25vZGVfbW9kdWxlcy9yZWFjdC1pY29uLWJhc2UvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9hc3NpZ24gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvYXNzaWduXCIpO1xuXG52YXIgX2Fzc2lnbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hc3NpZ24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBfYXNzaWduMi5kZWZhdWx0IHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvaG9tZS9rYXJpZmFuL25vZGUvbmVyanMvbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9ob21lL2thcmlmYW4vbm9kZS9uZXJqcy9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2RlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9ob21lL2thcmlmYW4vbm9kZS9uZXJqcy9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE2IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZykpO1xuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9ob21lL2thcmlmYW4vbm9kZS9uZXJqcy9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvaG9tZS9rYXJpZmFuL25vZGUvbmVyanMvbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cy5Db250YWluZXIgPSByZXF1aXJlKCcuL2NvbnRhaW5lcicpO1xuZXhwb3J0cy5tb2RhbHNSZWR1c2VyID0gcmVxdWlyZSgnLi9yZWR1c2VyJylcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi92ZW5kb3IvY29udGFpbmVyLWZvci1tb2RhbC9pbmRleC5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob2JqLCBrZXlzKSB7XG4gIHZhciB0YXJnZXQgPSB7fTtcblxuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7XG4gICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7XG4gICAgdGFyZ2V0W2ldID0gb2JqW2ldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL2hvbWUva2FyaWZhbi9ub2RlL25lcmpzL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDExNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvaG9tZS9rYXJpZmFuL25vZGUvbmVyanMvbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMTE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuY2xhc3MgRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGEgOiB0aGlzLnByb3BzLmEsXG5cdFx0XHRiIDogdGhpcy5wcm9wcy5iLFxuXHRcdFx0bW9kYWw6IHRoaXMucHJvcHMubmFtZSxcblx0XHRcdGlkIDogdGhpcy5wcm9wcy5faWRcblx0XHR9XG5cblx0XHR0aGlzLm9wZW5NID0gdGhpcy5vcGVuTS5iaW5kKHRoaXMpXG5cdFx0dGhpcy51cGRhdGVNID0gdGhpcy51cGRhdGVNLmJpbmQodGhpcylcblx0XHR0aGlzLnVwTSA9IHRoaXMudXBNLmJpbmQodGhpcylcblx0fVxuXG5cdGNoYW5nZShuYW1lKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRbbmFtZV0gOiB0aGlzLnJlZnNbbmFtZV0udmFsdWVcblx0XHR9KVxuXHR9XG5cblx0b3Blbk0oKSB7XG5cdFx0bGV0IHthLGIsbW9kYWx9ID0gdGhpcy5zdGF0ZVxuXHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goe1xuXHRcdFx0dHlwZSA6IGBtb2RhbDoke21vZGFsfWAsXG5cdFx0XHRwYXlsb2FkIDoge2EsYn1cblx0XHR9KVxuXHR9XG5cblx0dXBkYXRlTSgpIHtcblx0XHRsZXQge2EsYixpZH0gPSB0aGlzLnN0YXRlO1xuXHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goe1xuXHRcdFx0dHlwZSA6ICdtb2RhbDp1cGRhdGUnLFxuXHRcdFx0cGF5bG9hZCA6IHtcdFx0XHRcdFxuXHRcdFx0XHRpZCA6IE51bWJlcihpZCksXG5cdFx0XHRcdGEsYlxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxuXHR1cE0oKSB7XG5cdFx0dGhpcy5wcm9wcy5kaXNwYXRjaCh7XG5cdFx0XHR0eXBlIDogJ21vZGFsOnVwJyxcblx0XHRcdHBheWxvYWQgOiBOdW1iZXIodGhpcy5zdGF0ZS5pZClcblx0XHR9KVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0bGV0IGlkcyA9IHRoaXMucHJvcHMuX3Jvdy5tYXAobSA9PiBtLmlkKTtcblx0XHRpZiAoaWRzLmluZGV4T2YodGhpcy5wcm9wcy5faWQpIDwgMCkge1xuXHRcdFx0aWRzLnB1c2godGhpcy5wcm9wcy5faWQpO1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkZvcm1cIj5cblx0XHRcdFx0PHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWJvcmRlcmVkIHRhYmxlLXN0cmlwZWQgdGFibGUtZGFya1wiPlxuXHRcdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0PHRkPm5hbWU8L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+e3RoaXMucHJvcHMubmFtZX08L3RkPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0PHRkPl9pZDwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZD57dGhpcy5wcm9wcy5faWR9PC90ZD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdDx0ZD5fY291bnQ8L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+e3RoaXMucHJvcHMuX3Jvdy5sZW5ndGh9PC90ZD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdDx0ZD5hPC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkPnt0aGlzLnByb3BzLmF9PC90ZD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdDx0ZD5iPC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkPnt0aGlzLnByb3BzLmJ9PC90ZD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0PC90YWJsZT5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cblxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIGlucHV0LWdyb3VwLXNtXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCI+YTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgb25DaGFuZ2U9eygpPT50aGlzLmNoYW5nZSgnYScpfSByZWY9XCJhXCIgZGVmYXVsdFZhbHVlPXt0aGlzLnN0YXRlLmF9IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sbFwiLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc21cIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIj5iPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCBvbkNoYW5nZT17KCk9PnRoaXMuY2hhbmdlKCdiJyl9IHJlZj1cImJcIiBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUuYn0gdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xsXCIvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuXHRcdFx0XHRcdFx0XHQgICAgXHQ8bGFiZWwgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dFwiIGh0bWxGb3I9XCJtb2RhbFwiPm1vZGFsOjwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdCBcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQgIDxzZWxlY3QgZGVmYXVsdFZhbHVlPXt0aGlzLnByb3BzLm5hbWV9IHJlZj1cIm1vZGFsXCIgb25DaGFuZ2U9eygpPT50aGlzLmNoYW5nZSgnbW9kYWwnKX0gY2xhc3NOYW1lPVwiY3VzdG9tLXNlbGVjdFwiIGlkPVwibW9kYWxcIj5cblx0XHRcdFx0XHRcdFx0ICAgIDxvcHRpb24gdmFsdWU9XCJ0ZXN0XCI+dGVzdDwvb3B0aW9uPlxuXHRcdFx0XHRcdFx0XHQgICAgPG9wdGlvbiB2YWx1ZT1cImRpc2N1c3Npb25cIj5kaXNjdXNzaW9uPC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdCAgPC9zZWxlY3Q+XG5cdFx0XHRcdFx0XHRcdCAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLm9wZW5NfSBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiPnB1c2g8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbCBvZmZzZXQtMVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIGlucHV0LWdyb3VwLXNtXCI+XG5cdFx0XHRcdFx0XHRcdCAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnVwZGF0ZU19IGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS13YXJuaW5nXCI+dXBkYXRlPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdCAgPHNlbGVjdCBkZWZhdWx0VmFsdWU9e3RoaXMucHJvcHMuX2lkfSByZWY9XCJpZFwiIG9uQ2hhbmdlPXsoKT0+dGhpcy5jaGFuZ2UoJ2lkJyl9IGNsYXNzTmFtZT1cImN1c3RvbS1zZWxlY3RcIiBpZD1cIm1vZGFsXCI+XG5cdFx0XHRcdFx0XHRcdCAgICB7aWRzLm1hcChpZCA9PiA8b3B0aW9uIGtleT17aWR9IHZhbHVlPXtpZH0+e2lkfTwvb3B0aW9uPil9XG5cdFx0XHRcdFx0XHRcdCAgPC9zZWxlY3Q+XG5cdFx0XHRcdFx0XHRcdCAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnVwTX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlclwiPnB1c2g8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBGb3JtXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwZmlsZXMvbW9kYWxzL2Zvcm0uanMiLCJjb25zdCBnZXREaXNwbGF5ID0gKCkgPT4ge1xuXHRsZXQgdyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcblx0aWYgKHcgPCA1NDUpIHJldHVybiAneHMnO1xuXHRpZiAodyA8IDc2NykgcmV0dXJuICdzbSc7XG5cdGlmICh3IDwgOTkzKSByZXR1cm4gJ21kJztcblx0aWYgKHcgPCAxMjAxKSByZXR1cm4gJ2xnJztcblxuXHRyZXR1cm4gJ3hsJztcbn1cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gc3RvcmUgPT4ge1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywoKSA9PiB7XG5cdFx0bGV0IG8gPSBzdG9yZS5nZXRTdGF0ZSgpLm1haW4uZGlzcGxheTtcblx0XHRsZXQgbiA9IGdldERpc3BsYXkoKTtcblx0XHRpZiAobyAhPSBuKSB7XG5cdFx0XHRzdG9yZS5kaXNwYXRjaCh7XG5cdFx0XHRcdHR5cGUgOiAnZGlzcGxheScsXG5cdFx0XHRcdHBheWxvYWQgOiBuXG5cdFx0XHR9KVxuXHRcdH1cblx0fSlcdFxuXG59XG5cbmV4cG9ydHMuZ2V0RGlzcGxheSA9IGdldERpc3BsYXk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBpL2Rpc3AuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCByZW5kZXIgPSByZXF1aXJlKCdyZWFjdC1kb20nKS5yZW5kZXI7XG5jb25zdCB7IFByb3ZpZGVyIH0gPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpXG5jb25zdCB7IEhhc2hSb3V0ZXIgfSA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlci1kb20nKVxuY29uc3QgZUlkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xucmVxdWlyZSgnbm9ybWFsaXplLmNzcycpXG5yZXF1aXJlKCdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcycpXG5cbmNvbnN0IEFwcCA9IHJlcXVpcmUoJy4vYXBwJyk7XG5jb25zdCBzdG9yZSA9IHJlcXVpcmUoJ2FwaS9zdG9yZScpXG5cblxucmVuZGVyKFxuXHQ8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cblx0XHQ8SGFzaFJvdXRlciBiYXNlbmFtZT1cIi9cIiA+XG5cdFx0XHQ8QXBwLz5cblx0XHQ8L0hhc2hSb3V0ZXI+XG5cdDwvUHJvdmlkZXI+XG4sZUlkKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgeyBMaW5rIH0gPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXItZG9tJylcbmNvbnN0IHsgY29ubmVjdCB9ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKVxucmVxdWlyZSgnLi9jc3Mvcm9vdC5jc3MnKTtcbmNvbnN0IHsgQ29udGFpbmVyIH0gPSByZXF1aXJlKCd2L2NvbnRhaW5lci1mb3ItbW9kYWwnKVxuY29uc3QgbW9kYWxzID0gcmVxdWlyZSgnLi9hcHBmaWxlcy9tb2RhbHMnKTtcbmNvbnN0IEhlYWRlciA9IHJlcXVpcmUoJy4vYXBwZmlsZXMvaGVhZGVyJyk7XG5jb25zdCBQYWdlID0gcmVxdWlyZSgnLi9hcHBmaWxlcy9wYWdlLycpO1xuY29uc3QgRm9vdGVyID0gcmVxdWlyZSgnLi9hcHBmaWxlcy9mb290ZXInKVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxDb250YWluZXIgaWQ9XCJyb290XCIgY2xhc3NOYW1lPVwicm9vdFwiIG1vZGFscz17bW9kYWxzfT5cblx0XHRcdFx0PEhlYWRlciAvPlxuXHRcdFx0XHQ8UGFnZSAvPlxuXHRcdFx0XHQ8Rm9vdGVyIC8+XG5cdFx0XHQ8L0NvbnRhaW5lcj5cblx0XHQpO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQXBwXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwLmpzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xudmFyICRPYmplY3QgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKSB7XG4gIHJldHVybiAkT2JqZWN0LmRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9ob21lL2thcmlmYW4vbm9kZS9uZXJqcy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDE4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyksICdPYmplY3QnLCB7IGRlZmluZVByb3BlcnR5OiByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL2hvbWUva2FyaWZhbi9ub2RlL25lcmpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMTg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jc3Mvcm9vdC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDIxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBNb2RhbCA9IHJlcXVpcmUoJy4vbW9kYWwnKTtcbmNvbnN0IHByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcbmNvbnN0IHsgY29ubmVjdCB9ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxubGV0IGkgPSBmYWxzZVxuY2xhc3MgQ29udGFpbmVyRm9yTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXG5cdFx0dGhpcy5yb290ID0ge1xuXHRcdFx0aXNGaXhlZCA6IGZhbHNlLFxuXHRcdFx0dG9wIDogMCxcblx0XHRcdHNjcm9sbCA6IDBcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUobnAsbnMscykge1xuXHRcdGlmICh0aGlzLnJvb3Quc2Nyb2xsID4gMCkge1xuXHRcdFx0d2luZG93LnNjcm9sbFRvKDAsKHRoaXMucm9vdC5zY3JvbGwgPT0gMSA/IHRoaXMucm9vdC50b3AgOiAwKSk7XG5cdFx0XHR0aGlzLnJvb3Quc2Nyb2xsID0gMDtcblx0XHR9XG5cdH1cblxuXG5cdGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobnApIHtcblx0XHRpZiAodGhpcy5wcm9wcy5tb2RhbERhdGEub3BlbiA9PSBucC5tb2RhbERhdGEub3BlbikgcmV0dXJuO1xuXG5cdFx0aWYgKG5wLm1vZGFsRGF0YS5vcGVuKSB7XG5cdFx0XHR0aGlzLnJvb3QgPSB7XG5cdFx0XHRcdGlzRml4ZWQgOiB0cnVlLFxuXHRcdFx0XHR0b3AgOiB3aW5kb3cucGFnZVlPZmZzZXQsXG5cdFx0XHRcdHcgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG5cdFx0XHRcdHNjcm9sbDogMlxuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5yb290LnByIDwgMCkgdGhpcy5yb290LnByID0gMDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yb290ID0ge1xuXHRcdFx0XHRpc0ZpeGVkIDogZmFsc2UsXG5cdFx0XHRcdHRvcCA6IHRoaXMucm9vdC50b3AsXG5cdFx0XHRcdHByIDogMCxcblx0XHRcdFx0c2Nyb2xsIDogMVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGdldFN0eWxlKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRwb3NpdGlvbiA6IHRoaXMucm9vdC5pc0ZpeGVkID8gJ2ZpeGVkJyA6ICdyZWxhdGl2ZScsXG5cdFx0XHR0b3AgOiB0aGlzLnJvb3QuaXNGaXhlZCA/IGAtJHt0aGlzLnJvb3QudG9wfXB4YCA6IDAsXG5cdFx0XHR6SW5kZXg6IDEsXG5cdFx0XHRsZWZ0IDogMCxcblx0XHRcdHdpZHRoOiB0aGlzLnJvb3QuaXNGaXhlZCA/IHRoaXMucm9vdC53IDogJzEwMCUnXG5cdFx0XHQvLyBwYWRkaW5nUmlnaHQgOiB0aGlzLnJvb3QucHJcblx0XHR9XG5cdH1cblxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7bW9kYWxzLCBsYXllck9wYWNpdHksIGxheWVyQ29sb3IsIHN0eWxlLCBtb2RhbERhdGEsIGRpc3BhdGNoLCAuLi5wcm9wc1Jvb3QgfSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3QgcHJvcHNNb2RhbCA9IHtcblx0XHRcdG1vZGFscywgXG5cdFx0XHRsYXllck9wYWNpdHksIFxuXHRcdFx0bGF5ZXJDb2xvcixcblx0XHRcdG1vZGFsRGF0YSxcblx0XHRcdGRpc3BhdGNoXG5cdFx0fTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cIl9fcm9vdFwiIHN0eWxlPXt7XG5cdFx0XHRcdHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXHRcdFx0XHR3aWR0aDogJzEwMCUnLFxuXHRcdFx0XHR6SW5kZXggOiAxXG5cdFx0XHR9fT5cblx0XHRcdFx0PGRpdiB7Li4ucHJvcHNSb290fSBzdHlsZT17dGhpcy5nZXRTdHlsZSgpfT5cblx0XHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxNb2RhbCB7Li4uIHByb3BzTW9kYWx9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbkNvbnRhaW5lckZvck1vZGFsLmRlZmF1bHRQcm9wcyA9IHtcblx0bGF5ZXJPcGFjaXR5IDogMzAsXG5cdGxheWVyQ29sb3IgOiAnIzAwMCdcbn1cblxuQ29udGFpbmVyRm9yTW9kYWwucHJvcFR5cGVzID0ge1xuXHRtb2RhbHMgOiBwcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cdGxheWVyT3BhY2l0eSA6IHByb3BUeXBlcy5udW1iZXIsXG5cdGxheWVyQ29sb3IgOiBwcm9wVHlwZXMuc3RyaW5nXG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb25uZWN0KFxuXHRcdHN0YXRlID0+ICh7bW9kYWxEYXRhOnN0YXRlLm1vZGFsc30pXG5cdCkoQ29udGFpbmVyRm9yTW9kYWwpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdmVuZG9yL2NvbnRhaW5lci1mb3ItbW9kYWwvY29udGFpbmVyLmpzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzL19jb3JlJykuT2JqZWN0LmFzc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9ob21lL2thcmlmYW4vbm9kZS9uZXJqcy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDIxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7IGFzc2lnbjogcmVxdWlyZSgnLi9fb2JqZWN0LWFzc2lnbicpIH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL2hvbWUva2FyaWZhbi9ub2RlL25lcmpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMjE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciBnT1BTID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdvcHMnKTtcbnZhciBwSUUgPSByZXF1aXJlKCcuL19vYmplY3QtcGllJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gISRhc3NpZ24gfHwgcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHZhciBBID0ge307XG4gIHZhciBCID0ge307XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgUyA9IFN5bWJvbCgpO1xuICB2YXIgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuICRhc3NpZ24oe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoJGFzc2lnbih7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUID0gdG9PYmplY3QodGFyZ2V0KTtcbiAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAxO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgdmFyIGlzRW51bSA9IHBJRS5mO1xuICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgdmFyIFMgPSBJT2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpO1xuICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICB2YXIgaiA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaikgaWYgKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpIFRba2V5XSA9IFNba2V5XTtcbiAgfSByZXR1cm4gVDtcbn0gOiAkYXNzaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL2hvbWUva2FyaWZhbi9ub2RlL25lcmpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gMjE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IHtjb25uZWN0fSA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4JylcbmNvbnN0IENsb3NlQnV0dG9uID0gcmVxdWlyZSgncmVhY3QtaWNvbnMvbGliL2ZhL2Nsb3NlJylcbmNvbnN0IHBhcnNlU2V0dGluZ3MgPSByZXF1aXJlKCcuL3V0aWxzL3BhcnNlLXNldHRpbmdzJylcbmNvbnN0IGlzRnVuY3Rpb24gPSByZXF1aXJlKCdsb2Rhc2gvaXNGdW5jdGlvbicpO1xuXG5cbmNsYXNzIFJvb3RNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRvcGVuIDogZmFsc2UsXG5cdFx0XHRpZCA6IDAsXG5cdFx0XHRuYW1lIDogJycsXG5cdFx0XHRvcHRpb25zIDoge30sXG5cdFx0XHRteURhdGEgOiBudWxsLFxuXHRcdFx0aXMgOiBmYWxzZSxcblx0XHRcdHNldHRpbmdzIDoge31cblx0XHR9XG5cblx0XHR0aGlzLm1vZGFscyA9IHByb3BzLm1vZGFsc1xuXHRcdHRoaXMubW9kYWxzU2V0dGluZ3MgPSB7fVxuXHRcdE9iamVjdC5rZXlzKHByb3BzLm1vZGFscykuZm9yRWFjaChrZXkgPT4ge1xuXHRcdFx0dGhpcy5tb2RhbHNTZXR0aW5nc1trZXldID0gcGFyc2VTZXR0aW5ncyhwcm9wcy5tb2RhbHNba2V5XSlcblx0XHRcdHRoaXMuc3RhdGUuc2V0dGluZ3Nba2V5XSA9IHBhcnNlU2V0dGluZ3MocHJvcHMubW9kYWxzW2tleV0pXG5cdFx0fSlcblxuXHRcdHByb3BzLmRpc3BhdGNoKHtcblx0XHRcdHR5cGUgOiAnbW9kYWw6X19saXN0Jyxcblx0XHRcdHBheWxvYWQgOiBPYmplY3Qua2V5cyhwcm9wcy5tb2RhbHMpXG5cdFx0fSlcblxuXHRcdHRoaXMuc2V0dGluZ3MgPSB7fTtcblx0XHR0aGlzLkNvbXBvbmVudCA9IG51bGw7XG5cblx0XHR0aGlzLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpXG5cdFx0dGhpcy5jbG9zZUlubiA9IHRoaXMuY2xvc2VJbm4uYmluZCh0aGlzKVxuXHRcdHRoaXMuZ2V0Q29tcCgpXG5cdH1cblxuXHRnZXRDb21wKCkge1xuXHRcdHRoaXMuQ29tcG9uZW50ID0gdGhpcy5tb2RhbHNbdGhpcy5wcm9wcy5tb2RhbERhdGEubmFtZV07XG5cdFx0dGhpcy5zZXR0aW5ncyA9IHBhcnNlU2V0dGluZ3ModGhpcy5Db21wb25lbnQpXG5cdH1cblxuXHRjbG9zZShlLHQpIHtcblx0XHRjb25zdCB0eXBlID0gdCA/ICdyZXNldCc6ICdjbG9zZSc7XG5cdFx0Ly8gY29uc29sZS5sb2coZSwgZS50YXJnZXQgPT09IHRoaXMucmVmcy5sYXllciwgZS50YXJnZXQgPT09IHRoaXMucmVmcy5tb2RhbCwgZS50YXJnZXQgPT09IHRoaXMucmVmcy50ZXN0KVxuXHRcdFxuXHRcdGlmICh0aGlzLm1vZGFsc1NldHRpbmdzW3RoaXMuc3RhdGUubmFtZV0uY2xvc2VGbiAmJiBpc0Z1bmN0aW9uKHRoaXMubW9kYWxzU2V0dGluZ3NbdGhpcy5zdGF0ZS5uYW1lXS5jbG9zZUZuKSkge1xuXHRcdFx0dGhpcy5tb2RhbHNTZXR0aW5nc1t0aGlzLnN0YXRlLm5hbWVdLmNsb3NlRm4odHlwZSxteURhdGEgPT4ge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtteURhdGF9KVxuXHRcdFx0fSwgKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKGBtb2RhbDoke3R5cGV9YClcblx0XHRcdH0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goYG1vZGFsOiR7dHlwZX1gKVxuXHRcdH1cblx0fVxuXG5cdGNsb3NlSW5uKGUpIHtcblx0XHRpZiAoZS50YXJnZXQgPT0gdGhpcy5yZWZzLmlubmVyKSB0aGlzLmNsb3NlKGUpO1xuXHR9XG5cblxuXHRjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5wKSB7XG5cdFx0bGV0IHtvcGVuLGlkLCBuYW1lLCBvcHRpb25zfSA9IG5wLm1vZGFsRGF0YVxuXG5cdFx0aWYgKG5wLm1vZGFsRGF0YS5vcGVuICYmICF0aGlzLnN0YXRlLm9wZW4pIHtcblx0XHRcdHRoaXMuc3RhdGUub3BlbiA9IHRydWUsXG5cdFx0XHR0aGlzLnN0YXRlLmlzID0gdHJ1ZTtcblx0XHRcdHRoaXMuc3RhdGUuaWQgPSBpZDtcblx0XHRcdHRoaXMuc3RhdGUubmFtZSA9IG5hbWU7XG5cdFx0XHR0aGlzLnN0YXRlLm15RGF0YSA9IHRoaXMuc3RhdGUuc2V0dGluZ3NbbmFtZV0ubXlEYXRhO1xuXHRcdFx0dGhpcy5zdGF0ZS5vcHRpb25zID0gb3B0aW9ucztcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIW5wLm1vZGFsRGF0YS5vcGVuICYmIHRoaXMuc3RhdGUub3Blbikge1xuXHRcdFx0dGhpcy5zdGF0ZS5vcGVuID0gZmFsc2UsXG5cdFx0XHR0aGlzLnN0YXRlLmlzID0gdHJ1ZTtcblx0XHRcdHRoaXMuc3RhdGUuaWQgPSBpZDtcblx0XHRcdHRoaXMuc3RhdGUubmFtZSA9IG5hbWU7XG5cdFx0XHR0aGlzLnN0YXRlLm9wdGlvbnMgPSB7fTtcblx0XHRcdHRoaXMuc3RhdGUubXlEYXRhID0gbnVsbDtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIW5wLm1vZGFsRGF0YS5vcGVuKSByZXR1cm47XG5cblxuXG5cdFx0aWYgKHRoaXMuc3RhdGUuaWQgIT0gbnAubW9kYWxEYXRhLmlkKSB7XG5cdFx0XHRpZiAobnAubW9kYWxEYXRhLnJvdy5sZW5ndGggPiAwIFxuXHRcdFx0XHRcdCYmIG5wLm1vZGFsRGF0YS5yb3dbbnAubW9kYWxEYXRhLnJvdy5sZW5ndGggLSAxXS5pZCA9PSB0aGlzLnN0YXRlLmlkIFxuXHRcdFx0XHRcdCYmIHRoaXMuc3RhdGUuc2V0dGluZ3NbbmFtZV0uY2xvc2VGbiBcblx0XHRcdFx0XHQmJiBpc0Z1bmN0aW9uKHRoaXMuc3RhdGUuc2V0dGluZ3NbbmFtZV0uY2xvc2VGbikpIHtcblx0XHRcdFx0bGV0IHQgPSBEYXRlLm5vdygpO1xuXG5cdFx0XHRcdHRoaXMuc3RhdGUuc2V0dGluZ3NbbmFtZV0uY2xvc2VGbihcblx0XHRcdFx0XHQncmVwbGFjZScsXG5cdFx0XHRcdFx0bWQgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHQgPT0gRGF0ZS5ub3coKSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLm15RGF0YSA9IG1kO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRcdFx0bXlEYXRhIDogbWRcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCgpID0+IHtcblx0XHRcdFx0XHRcdGlmICh0ID09IERhdGUubm93KCkpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zdGF0ZS5pcyA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7aXM6ZmFsc2V9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0KVxuXHRcdFx0XHR0aGlzLnN0YXRlLmlzID0gdHJ1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc3RhdGUuaXMgPSBmYWxzZVxuXHRcdFx0fVxuXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkVXBkYXRlKCkge1xuXHRcdGlmICghdGhpcy5zdGF0ZS5pcykge1xuXHRcdFx0dGhpcy5nZXRDb21wKCk7XG5cdFx0XHRsZXQge2lkLCBuYW1lLCBvcHRpb25zfSA9IHRoaXMucHJvcHMubW9kYWxEYXRhO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdG15RGF0YSA6IHRoaXMuc2V0dGluZ3MubXlEYXRhLFxuXHRcdFx0XHRpcyA6IHRydWUsXG5cdFx0XHRcdGlkLFxuXHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRvcHRpb25zXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cblxuXHRnZXRMYXllcigpIHtcblx0XHRjb25zdCBzZXR0aW5ncyA9IHRoaXMubW9kYWxzU2V0dGluZ3NbdGhpcy5wcm9wcy5tb2RhbERhdGEubmFtZV1cblx0XHRpZiAoIXNldHRpbmdzLmxheWVyKSByZXR1cm4gbnVsbDtcblxuXG5cdFx0Y29uc3QgcHJvcHMgPSB7XG5cdFx0XHRpZCA6ICdfbW9kYWwtbGF5ZXInLFxuXHRcdFx0c3R5bGUgOiB7XG5cdFx0XHRcdHBvc2l0aW9uOiAnZml4ZWQnLFxuXHRcdFx0XHR0b3A6IDAsXG5cdFx0XHRcdHJpZ2h0IDogMCxcblx0XHRcdFx0bGVmdCA6IDAsXG5cdFx0XHRcdGJvdHRvbSA6IDAsXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvciA6IHNldHRpbmdzLmxheWVyQ29sb3IgfHwgdGhpcy5wcm9wcy5sYXllckNvbG9yLFxuXHRcdFx0XHRvcGFjaXR5IDogKHNldHRpbmdzLmxheWVyT3BhY2l0eSB8fCB0aGlzLnByb3BzLmxheWVyT3BhY2l0eSkgLyAxMDAsXG5cdFx0XHRcdHpJbmRleCA6IDJcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0aWYgKHNldHRpbmdzLmxheWVyQ2xvc2UpIHtcblx0XHRcdHByb3BzLm9uQ2xpY2sgPSB0aGlzLmNsb3NlO1xuXHRcdH1cblxuXHRcdHJldHVybiA8ZGl2IHsuLi5wcm9wc30gLz47XG5cdH1cblxuXHRnZXRDbG9zZUJ1dHRvbigpIHtcblx0XHRjb25zdCBzZXR0aW5ncyA9IHRoaXMubW9kYWxzU2V0dGluZ3NbdGhpcy5wcm9wcy5tb2RhbERhdGEubmFtZV1cblx0XHRpZiAoIXNldHRpbmdzLmNsb3NlQnV0dG9uKSByZXR1cm4gbnVsbDtcblxuXHRcdGxldCBvcGFjaXR5ID0gc2V0dGluZ3MubGF5ZXJPcGFjaXR5IHx8IHRoaXMucHJvcHMubGF5ZXJPcGFjaXR5O1xuXHRcdGlmIChvcGFjaXR5ID4gOTkpIHtcblx0XHRcdG9wYWNpdHkgPSAxMDA7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG9wYWNpdHkgPSBNYXRoLnJvdW5kKG9wYWNpdHkgKyAoKDEwMCAtIG9wYWNpdHkpIC8gMS41KSkgLyAxMDBcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cIl9tb2RhbC1jbG9zZVwiIFxuXHRcdFx0XHRjbGFzc05hbWU9XCJtb2RhbC1jbG9zZVwiIFxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLmNsb3NlfSBcblx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRwb3NpdGlvbjogJ2ZpeGVkJyxcblx0XHRcdFx0XHR0b3A6ICcwLjRlbScsXG5cdFx0XHRcdFx0cmlnaHQ6ICcwLjRlbScsXG5cdFx0XHRcdFx0d2lkdGg6ICcyLjhlbScsXG5cdFx0XHRcdFx0aGVpZ2h0IDogJzIuOGVtJyxcblx0XHRcdFx0XHRjdXJzb3I6ICdwb2ludGVyJyxcblx0XHRcdFx0XHR6SW5kZXg6IDQsXG5cdFx0XHRcdFx0Ym9yZGVyUmFkaXVzOiA3LFxuXHRcdFx0XHRcdG9wYWNpdHksXG5cdFx0XHRcdFx0Ym94U2hhZG93OiAnMCAwIDZweCByZ2JhKDAsMCwwLC40KSdcblx0XHRcdFx0fX0+XG5cblx0XHRcdFx0PENsb3NlQnV0dG9uIHN0eWxlPXt7XG5cdFx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRcdFx0XHRoZWlnaHQ6ICcxMDAlJyxcblx0XHRcdFx0XHRmaWxsIDogc2V0dGluZ3MubGF5ZXJDb2xvciB8fCB0aGlzLnByb3BzLmxheWVyQ29sb3Jcblx0XHRcdFx0fX0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxuXG5cblx0cmVuZGVyKCkge1xuXG5cdFx0aWYgKCF0aGlzLnN0YXRlLm9wZW4pIHJldHVybiBudWxsO1xuXG5cdFx0Y29uc3QgQ29tcG9uZW50ID0gdGhpcy5tb2RhbHNbdGhpcy5zdGF0ZS5uYW1lXTtcblx0XHRjb25zdCBpbm5lclByb3BzID0ge1xuXHRcdFx0aWQgOiAnX21vZGFsLWlubmVyJyxcblx0XHRcdHJlZjogJ2lubmVyJyxcblx0XHRcdHN0eWxlIDoge1xuXHRcdFx0XHRwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblx0XHRcdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRcdFx0Ym9yZGVyOiAnMXB4IHNvbGlkIHRyYW5zcGFyZW50Jyxcblx0XHRcdFx0ekluZGV4OiAzXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMubW9kYWxzU2V0dGluZ3NbdGhpcy5wcm9wcy5tb2RhbERhdGEubmFtZV0gJiYgdGhpcy5tb2RhbHNTZXR0aW5nc1t0aGlzLnByb3BzLm1vZGFsRGF0YS5uYW1lXS5sYXllckNsb3NlKSB7XG5cdFx0XHRpbm5lclByb3BzLm9uQ2xpY2sgPSB0aGlzLmNsb3NlSW5uO1xuXHRcdH1cblxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0e3RoaXMuZ2V0TGF5ZXIoKX1cblx0XHRcdFx0e3RoaXMuZ2V0Q2xvc2VCdXR0b24oKX1cblxuXHRcdFx0XHQ8ZGl2IHsuLi5pbm5lclByb3BzfSA+XG5cdFx0XHRcdFx0XHR7IENvbXBvbmVudCAmJiB0aGlzLnN0YXRlLmlzID8gPENvbXBvbmVudCB7Li4udGhpcy5zdGF0ZS5vcHRpb25zfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfaWQ9e3RoaXMuc3RhdGUuaWR9IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfcm93PXt0aGlzLnByb3BzLm1vZGFsRGF0YS5yb3d9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9teURhdGE9e3RoaXMuc3RhdGUubXlEYXRhfSBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGlzcGF0Y2g9e3RoaXMucHJvcHMuZGlzcGF0Y2h9IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2RhbENsb3NlPXt0aGlzLmNsb3NlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPiA6IG51bGx9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHQpO1xuXHR9XG5cbn1cblxuXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IFJvb3RNb2RhbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3ZlbmRvci9jb250YWluZXItZm9yLW1vZGFsL21vZGFsLmpzIiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLk9iamVjdC5rZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL2hvbWUva2FyaWZhbi9ub2RlL25lcmpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDIyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxucmVxdWlyZSgnLi9fb2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvaG9tZS9rYXJpZmFuL25vZGUvbmVyanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMjIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBGYUNsb3NlID0gZnVuY3Rpb24gRmFDbG9zZShwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20zMy41IDI5LjVxMCAwLjktMC43IDEuNWwtMyAzLjFxLTAuNiAwLjYtMS41IDAuNnQtMS41LTAuNmwtNi42LTYuNi02LjUgNi42cS0wLjcgMC42LTEuNiAwLjZ0LTEuNS0wLjZsLTMtMy4xcS0wLjYtMC42LTAuNi0xLjV0MC42LTEuNWw2LjUtNi42LTYuNS02LjVxLTAuNi0wLjctMC42LTEuNnQwLjYtMS41bDMtM3EwLjYtMC42IDEuNS0wLjZ0MS42IDAuNmw2LjUgNi42IDYuNi02LjZxMC42LTAuNiAxLjUtMC42dDEuNSAwLjZsMy4xIDNxMC42IDAuNyAwLjYgMS41dC0wLjYgMS42bC02LjYgNi41IDYuNiA2LjZxMC42IDAuNiAwLjYgMS41eicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGYUNsb3NlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL2hvbWUva2FyaWZhbi9ub2RlL25lcmpzL25vZGVfbW9kdWxlcy9yZWFjdC1pY29ucy9saWIvZmEvY2xvc2UuanNcbi8vIG1vZHVsZSBpZCA9IDIyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBpc09iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jyk7XG5jb25zdCBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnbG9kYXNoL2lzRnVuY3Rpb24nKTtcblxuXG5jb25zdCBkZWZTZXR0aW5ncyA9IHtcblx0Y2xvc2VCdXR0b24gOiB0cnVlLFxuXHRsYXllciA6IHRydWUsXG5cdGxheWVyQ2xvc2UgOiB0cnVlLFxuXHRsYXllckNvbG9yIDogbnVsbCxcblx0bGF5ZXJPcGFjaXR5IDogbnVsbCxcblx0bXlEYXRhIDogbnVsbFxufVxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY29tcCkge1xuXHRsZXQgc2V0dGluZ3M7XG5cblx0aWYgKCFjb21wKSB7XG5cdFx0c2V0dGluZ3MgPSB7fTtcblx0fSBlbHNlIGlmIChpc0Z1bmN0aW9uKGNvbXAubW9kYWxTZXR0aW5ncykpIHtcblx0XHRzZXR0aW5ncyA9IGNvbXAubW9kYWxTZXR0aW5ncygpXG5cdH0gZWxzZSBpZiAoaXNPYmplY3QoY29tcC5tb2RhbFNldHRpbmdzKSkge1xuXHRcdHNldHRpbmdzID0gY29tcC5tb2RhbFNldHRpbmdzXG5cdH1cblx0cmV0dXJuIHsuLi5kZWZTZXR0aW5ncywgLi4uc2V0dGluZ3N9O1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3ZlbmRvci9jb250YWluZXItZm9yLW1vZGFsL3V0aWxzL3BhcnNlLXNldHRpbmdzLmpzIiwiY29uc3QgZ2V0S2V5ID0gcmVxdWlyZSgnLi91dGlscy9nZXQta2V5JylcblxuXG5jb25zdCBkZWYgPSB7XG5cdG9wZW4gOiBmYWxzZSxcblx0aWQgOiBudWxsLFxuXHRuYW1lIDogJ290aGVyJyxcblx0b3B0aW9ucyA6IHt9LFxuXHRtb2RhbE5hbWVzIDogW10sXG5cdHJvdyA6IFtdXG59XG5cbmNvbnN0IG1DbG9zZSA9IHN0YXRlID0+IHtcblx0aWYgKCFzdGF0ZS5vcGVuKSByZXR1cm4gc3RhdGU7XG5cdGlmIChzdGF0ZS5yb3cubGVuZ3RoID09IDApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Li4uZGVmLFxuXHRcdFx0bW9kYWxOYW1lczpzdGF0ZS5tb2RhbE5hbWVzXG5cdFx0fVxuXHR9XG5cblx0bGV0IHtpZCxvcHRpb25zLG5hbWV9ID0gc3RhdGUucm93W3N0YXRlLnJvdy5sZW5ndGggLSAxXTtcblx0bGV0IHJvdyA9IHN0YXRlLnJvdy5maWx0ZXIobSA9PiAobS5pZCAhPSBpZCkpXG5cdHJldHVybiB7XG5cdFx0b3BlbiA6IHRydWUsXG5cdFx0aWQsXG5cdFx0bmFtZSxcblx0XHRvcHRpb25zLFxuXHRcdG1vZGFsTmFtZXMgOiBzdGF0ZS5tb2RhbE5hbWVzLFxuXHRcdHJvd1xuXHR9O1xufVxuXG5jb25zdCBtVXBkYXRlID0gKHN0YXRlLGRhdGEpID0+IHtcblx0aWYgKCFkYXRhKSByZXR1cm4gc3RhdGU7XG5cdGxldCB7IGlkLCAuLi5ub30gPSBkYXRhO1xuXHRpZiAoIWlkKSByZXR1cm4gc3RhdGU7XG5cdGlmIChzdGF0ZS5pZCA9PSBpZCkge1xuXHRcdGxldCB7IG9wdGlvbnMgfSA9IHN0YXRlO1xuXHRcdHJldHVybiB7XG5cdFx0XHQuLi5zdGF0ZSxcblx0XHRcdG9wdGlvbnMgOiB7Li4ub3B0aW9ucywuLi5ub31cblx0XHR9XG5cdH1cblx0cmV0dXJuIHtcblx0XHQuLi5zdGF0ZSxcblx0XHRyb3cgOiBzdGF0ZS5yb3cubWFwKG0gPT4ge1xuXHRcdFx0aWYgKG0uaWQgIT0gaWQpIHJldHVybiBtO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4ubSxcblx0XHRcdFx0b3B0aW9ucyA6IHtcblx0XHRcdFx0XHQuLi5tLm9wdGlvbnMsXG5cdFx0XHRcdFx0Li4ubm9cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cbn1cblxuY29uc3QgbU9wZW4gPSAoc3RhdGUsIHR5cGUsIG9wdGlvbnMsIG5JZD1udWxsKSA9PiB7XG5cdGlmIChzdGF0ZS5tb2RhbE5hbWVzLmluZGV4T2YodHlwZSkgPCAwKSByZXR1cm4gc3RhdGU7XG5cdGxldCBuYW1lID0gdHlwZS5zcGxpdCgnOicpWzFdO1xuXHRsZXQgaWQgPSBuSWQgfHwgZ2V0S2V5KCk7XG5cdGxldCByb3cgPSBbXTtcblx0aWYgKHN0YXRlLm9wZW4pIHtcblx0XHRyb3cgPSBbLi4uc3RhdGUucm93XVxuXHRcdHJvdy5wdXNoKHtcblx0XHRcdGlkIDogc3RhdGUuaWQsXG5cdFx0XHRuYW1lIDogc3RhdGUubmFtZSxcblx0XHRcdG9wdGlvbnMgOiBzdGF0ZS5vcHRpb25zIHx8IHt9XG5cdFx0fSlcblx0fVxuXHRsZXQge21vZGFsTmFtZXN9ID0gc3RhdGU7XG5cblx0cmV0dXJuIHtcblx0XHRvcGVuIDogdHJ1ZSxcblx0XHRpZCxcblx0XHRuYW1lLFxuXHRcdG9wdGlvbnMgOiBvcHRpb25zIHx8IHt9LFxuXHRcdG1vZGFsTmFtZXMsXG5cdFx0cm93XG5cdH1cbn1cblxuY29uc3QgbVVwID0gKHN0YXRlLGlkKSA9PiB7XG5cdGlmIChzdGF0ZS5pZCA9PSBpZCB8fCBzdGF0ZS5yb3cubGVuZ3RoID09IDApIHJldHVybiBzdGF0ZTtcblx0bGV0IG1vZCA9IG51bGw7XG5cdGxldCByb3cgPSBzdGF0ZS5yb3cuZmlsdGVyKG0gPT4ge1xuXHRcdGlmIChtLmlkICE9IGlkKSByZXR1cm4gdHJ1ZTtcblx0XHRtb2QgPSBtO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSlcblxuXHRpZiAoIW1vZCkgcmV0dXJuIHN0YXRlO1xuXHRyZXR1cm4gbU9wZW4oey4uLnN0YXRlLCByb3d9LCBgbW9kYWw6JHttb2QubmFtZX1gLCBtb2Qub3B0aW9ucywgbW9kLmlkKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSAoc3RhdGU9ZGVmLCBhY3Rpb24pID0+IHtcblx0c3dpdGNoIChhY3Rpb24udHlwZSkge1xuXHRcdGNhc2UgJ21vZGFsOl9fbGlzdCc6XG5cdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYWN0aW9uLnBheWxvYWQpKSByZXR1cm4gc3RhdGU7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHQuLi5zdGF0ZSwgXG5cdFx0XHRcdG1vZGFsTmFtZXM6YWN0aW9uLnBheWxvYWQubWFwKHYgPT4gYG1vZGFsOiR7dn1gKVxuXHRcdFx0fTtcblx0XHRicmVhaztcblx0XHRjYXNlICdtb2RhbDpjbG9zZSc6XG5cdFx0XHRyZXR1cm4gbUNsb3NlKHN0YXRlKTtcblx0XHRicmVhaztcblx0XHRjYXNlICdtb2RhbDp1cGRhdGUnOlxuXHRcdFx0cmV0dXJuIG1VcGRhdGUoc3RhdGUsYWN0aW9uLnBheWxvYWQpO1xuXHRcdGJyZWFrO1xuXHRcdGNhc2UgJ21vZGFsOnVwJzpcblx0XHRcdHJldHVybiBtVXAoc3RhdGUsYWN0aW9uLnBheWxvYWQpO1xuXHRcdGJyZWFrO1xuXHR9XG5cblx0cmV0dXJuIG1PcGVuKHN0YXRlLGFjdGlvbi50eXBlLGFjdGlvbi5wYXlsb2FkKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3ZlbmRvci9jb250YWluZXItZm9yLW1vZGFsL3JlZHVzZXIuanMiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9mcm9tID0gcmVxdWlyZShcIi4uL2NvcmUtanMvYXJyYXkvZnJvbVwiKTtcblxudmFyIF9mcm9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Zyb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcnIyW2ldID0gYXJyW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBhcnIyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoMCwgX2Zyb20yLmRlZmF1bHQpKGFycik7XG4gIH1cbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL2hvbWUva2FyaWZhbi9ub2RlL25lcmpzL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDIzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvZnJvbVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9ob21lL2thcmlmYW4vbm9kZS9uZXJqcy9ub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2FycmF5L2Zyb20uanNcbi8vIG1vZHVsZSBpZCA9IDIzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2LmFycmF5LmZyb20nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9fY29yZScpLkFycmF5LmZyb207XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvaG9tZS9rYXJpZmFuL25vZGUvbmVyanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9hcnJheS9mcm9tLmpzXG4vLyBtb2R1bGUgaWQgPSAyMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGNyZWF0ZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikgeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlIC8qICwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQgKi8pIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KGFycmF5TGlrZSk7XG4gICAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5O1xuICAgIHZhciBhTGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICB2YXIgbWFwZm4gPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWQ7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgaXRlckZuID0gZ2V0SXRlckZuKE8pO1xuICAgIHZhciBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYgKG1hcHBpbmcpIG1hcGZuID0gY3R4KG1hcGZuLCBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG4gICAgaWYgKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKSB7XG4gICAgICBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDKCk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKykge1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShyZXN1bHQsIGluZGV4LCBtYXBwaW5nID8gY2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIGZvciAocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9ob21lL2thcmlmYW4vbm9kZS9uZXJqcy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5LmZyb20uanNcbi8vIG1vZHVsZSBpZCA9IDIzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9ob21lL2thcmlmYW4vbm9kZS9uZXJqcy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gMjM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL2hvbWUva2FyaWZhbi9ub2RlL25lcmpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9faXMtYXJyYXktaXRlci5qc1xuLy8gbW9kdWxlIGlkID0gMjM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcbnZhciAkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIGluZGV4LCB2YWx1ZSkge1xuICBpZiAoaW5kZXggaW4gb2JqZWN0KSAkZGVmaW5lUHJvcGVydHkuZihvYmplY3QsIGluZGV4LCBjcmVhdGVEZXNjKDAsIHZhbHVlKSk7XG4gIGVsc2Ugb2JqZWN0W2luZGV4XSA9IHZhbHVlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9ob21lL2thcmlmYW4vbm9kZS9uZXJqcy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2NyZWF0ZS1wcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gMjM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL2hvbWUva2FyaWZhbi9ub2RlL25lcmpzL25vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbi8vIG1vZHVsZSBpZCA9IDI0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvaG9tZS9rYXJpZmFuL25vZGUvbmVyanMvbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzXG4vLyBtb2R1bGUgaWQgPSAyNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9ob21lL2thcmlmYW4vbm9kZS9uZXJqcy9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItZGV0ZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAyNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibGV0IGNvdW50ID0gMDtcblxubW9kdWxlLmV4cG9ydHMgPSAoKSA9PiB7XG5cdGNvdW50Kys7XG5cdHJldHVybiBjb3VudFxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3ZlbmRvci9jb250YWluZXItZm9yLW1vZGFsL3V0aWxzL2dldC1rZXkuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0ZXJyb3IgOiByZXF1aXJlKCcuL2Vycm9yJyksXG5cdGRpc2N1c3Npb24gOiByZXF1aXJlKCcuL2Rpc2N1c3Npb24nKSxcblx0dGVzdCA6IHJlcXVpcmUoJy4vdGVzdCcpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwZmlsZXMvbW9kYWxzL2luZGV4LmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xucmVxdWlyZSgnLi9lcnJvci1tb2RhbC5jc3MnKVxuXG5jbGFzcyBFcnJvck1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRpcyA6ZmFsc2Vcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRpZiAoIXRoaXMucHJvcHMuZXJyIHx8ICF0aGlzLnByb3BzLmVyci5uYW1lKSB7XG5cdFx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKFsnbW9kYWw6Y2xvc2UnLHtcblx0XHRcdFx0XHRcdFx0dHlwZSA6ICdtb2RhbDplcnJvcicsXG5cdFx0XHRcdFx0XHRcdHBheWxvYWQgOiB7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyIDogbmV3IEVycm9yKCdwcm9wIGVyciBpbiBFcnJvck1vZGFsIG11c3QgYmUgRXJyb3InKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XSlcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRzZXRUaW1lb3V0KCgpPT50aGlzLnNldFN0YXRlKHtpczp0cnVlfSksMTApXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0aWYgKCF0aGlzLnByb3BzLmVycikgcmV0dXJuIG51bGw7XG5cdFx0bGV0IHtlcnJ9ID0gdGhpcy5wcm9wcztcblx0XHRsZXQgc3RhY2sgPSBlcnIuc3RhY2suc3BsaXQoJ1xcbicpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGVycm9yLW1vZGFsICR7dGhpcy5zdGF0ZS5pcyA/ICdlcnItYWN0aXZlJyA6ICdlcnItbm8tYWN0aXZlJ31gfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJlcnItbW9kYWwtaW5mb1wiPlxuXHRcdFx0XHRcdDxoMz57ZXJyLm5hbWV9PC9oMz5cblx0XHRcdFx0XHQ8aDQ+e2Vyci5tZXNzYWdlfTwvaDQ+XG5cdFx0XHRcdFx0PGhyLz5cblxuXHRcdFx0XHRcdHtPYmplY3Qua2V5cyhlcnIpLmxlbmd0aCA9PSAwID8gbnVsbCA6ICg8dGFibGUgY2VsbFNwYWNpbmc9ezF9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGhlYWQgPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJuYW1lXCI+bmFtZTwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwidmFsdWVcIj52YWx1ZTwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC90aGVhZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtPYmplY3Qua2V5cyhlcnIpLmZpbHRlcihrZXkgPT4ga2V5KS5tYXAoa2V5ID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ciBrZXk9e2tleX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9XCJuYW1lXCI+e2tleX08L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3NOYW1lPVwidmFsdWVcIj57ZXJyW2tleV19PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RhYmxlPil9XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXJyLW1vZGFsLXN0YWNrXCI+XG5cdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0e3N0YWNrLm1hcCh2ID0+ICg8bGkga2V5PXt2fT57dn08L2xpPikpfVxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5FcnJvck1vZGFsLm1vZGFsU2V0dGluZ3MgPSB7XG5cdGNsb3NlQnV0dG9uIDogdHJ1ZSxcblx0bGF5ZXIgOiB0cnVlLFxuXHRsYXllckNsb3NlIDogZmFsc2UsXG5cdC8vIGxheWVyQ29sb3IgOiAnI2RjMzU0NScsXG5cdGxheWVyT3BhY2l0eSA6IDU1XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRXJyb3JNb2RhbFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcGZpbGVzL21vZGFscy9lcnJvci9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBmaWxlcy9tb2RhbHMvZXJyb3IvZXJyb3ItbW9kYWwuY3NzXG4vLyBtb2R1bGUgaWQgPSAyNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgRm9ybSA9IHJlcXVpcmUoJy4uL2Zvcm0nKTtcbnJlcXVpcmUoJy4vZGlzYy5jc3MnKVxuXG5jbGFzcyBEaXNjdXNzaW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblxuXHR9XG5cblxuXG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkRpc2N1c3Npb25cIj5cblx0XHRcdFx0PHA+dGVzdDwvcD5cblx0XHRcdFx0PEZvcm0gbmFtZT1cImRpc2N1c3Npb25cIiB7Li4udGhpcy5wcm9wc30gLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEaXNjdXNzaW9uXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwZmlsZXMvbW9kYWxzL2Rpc2N1c3Npb24vaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwZmlsZXMvbW9kYWxzL2Rpc2N1c3Npb24vZGlzYy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBGb3JtID0gcmVxdWlyZSgnLi4vZm9ybScpXG5yZXF1aXJlKCcuL3Rlc3QuY3NzJylcbmNvbnN0IGNsID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpXG5cblxuXG5jbGFzcyBUZXN0TW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRtYWluIDogZmFsc2Vcblx0XHR9XG5cblx0fVxuXG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0c2V0VGltZW91dCgoKT0+dGhpcy5zZXRTdGF0ZSh7bWFpbjp0cnVlfSksMTAwMClcblx0fVxuXG5cblxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zb2xlLmxvZygndGVzdCcsdGhpcy5wcm9wcy5fbXlEYXRhKVxuXHRcdGNvbnN0IGNscyA9IGNsKCd0ZXN0Jyx7XG5cdFx0XHRzdGFydCA6ICF0aGlzLnN0YXRlLm1haW4gJiYgdGhpcy5wcm9wcy5fbXlEYXRhID09IDEsXG5cdFx0XHRtYWluIDogdGhpcy5zdGF0ZS5tYWluICYmIHRoaXMucHJvcHMuX215RGF0YSA9PSAxLFxuXHRcdFx0WydjbG9zZS10ZXN0J10gOiB0aGlzLnByb3BzLl9teURhdGEgPT0gMixcblx0XHRcdHJlc2V0IDogdGhpcy5wcm9wcy5fbXlEYXRhID09IDNcblx0XHR9KVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xzfSA+XG5cdFx0XHRcdDxGb3JtIG5hbWU9XCJ0ZXN0XCIgey4uLnRoaXMucHJvcHN9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cblxuVGVzdE1vZGFsLm1vZGFsU2V0dGluZ3MgPSAoKSA9PiAoe1xuXHRteURhdGEgOiAxLFxuXHRjbG9zZUZuIDogKHR5cGUsIHNzLCBjbG9zZSkgPT4ge1xuXHRcdGlmICh0eXBlID09ICdjbG9zZScpIHtcblx0XHRcdHNzKDIpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHNzKDMpXG5cdFx0fVxuXG5cdFx0c2V0VGltZW91dChjbG9zZSwxMDAwKVxuXHR9XG59KVxuXG5UZXN0TW9kYWwuY2xvc2VGbiA9IChhLGIsYykgPT4ge1xuXHRjb25zb2xlLmxvZygndG06bXMnLGEsYixjKVxuXHRzZXRUaW1lb3V0KCgpPT5iKDExMSksMjAwMClcblx0c2V0VGltZW91dCgoKT0+YygpLDUwMDApXG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVzdE1vZGFsXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwZmlsZXMvbW9kYWxzL3Rlc3QvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwZmlsZXMvbW9kYWxzL3Rlc3QvdGVzdC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCB7IGNvbm5lY3QgfSA9IHJlcXVpcmUoJ3JlYWN0LXJlZHV4JylcbmNvbnN0IEhvbWVJY28gPSByZXF1aXJlKCdyZWFjdC1pY29ucy9saWIvZmEvaG9tZScpO1xuY29uc3QgTWVudUljbyA9IHJlcXVpcmUoJ3JlYWN0LWljb25zL2xpYi90aS90aC1tZW51Jyk7XG5jb25zdCB7IExpbmsgfSA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlci1kb20nKVxuY29uc3QgSW5mb0Jsb2NrID0gcmVxdWlyZSgnLi9pbmZvLWJsb2NrJylcbnJlcXVpcmUoJy4vaGVhZGVyLmNzcycpXG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHR0aGlzLm9wZW5TaWRlYmFyID0gdGhpcy5vcGVuU2lkZWJhci5iaW5kKHRoaXMpXG5cdH1cblxuXHRvcGVuU2lkZWJhcigpIHtcblx0XHR0aGlzLnByb3BzLmRpc3BhdGNoKCdtb2RhbDp0ZXN0Jylcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cImhlYWRlclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImljb25zLWJsb2NrXCI+XG5cdFx0XHRcdFx0PExpbmsgY2xhc3NOYW1lPVwiaWNvbnMtbGluayBob21lLWxpbmtcIiB0bz1cIi9cIj48SG9tZUljby8+PC9MaW5rPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaWNvbnMtbGluayBtZW51LWxpbmtcIiBvbkNsaWNrPXt0aGlzLm9wZW5TaWRlYmFyfT5cblx0XHRcdFx0XHRcdDxNZW51SWNvIC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj57dGhpcy5wcm9wcy50aXRsZX08L2gxPlxuXHRcdFx0XHQ8SW5mb0Jsb2NrIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29ubmVjdChcblx0XHRzdGF0ZSA9PiAoe1xuXHRcdFx0dGl0bGUgOiBzdGF0ZS5tYWluLnRpdGxlLFxuXHRcdFx0ZGlzcGxheSA6IHN0YXRlLm1haW4uZGlzcGxheVxuXHRcdH0pXG5cdCkoSGVhZGVyKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcGZpbGVzL2hlYWRlci9pbmRleC5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBGYUhvbWUgPSBmdW5jdGlvbiBGYUhvbWUocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEljb25CYXNlMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHByb3BzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMzIuOSAyMi4xdjEwLjhxMCAwLjUtMC40IDF0LTEgMC40aC04LjZ2LTguNmgtNS43djguNmgtOC42cS0wLjUgMC0xLTAuNHQtMC40LTF2LTEwLjhxMCAwIDAgMHQwLTAuMWwxMi45LTEwLjYgMTIuOCAxMC42cTAgMC4xIDAgMC4xeiBtNS0xLjVsLTEuNCAxLjdxLTAuMiAwLjItMC40IDAuMmgtMC4xcS0wLjMgMC0wLjUtMC4ybC0xNS40LTEyLjgtMTUuNSAxMi44cS0wLjIgMC4yLTAuNSAwLjItMC4zIDAtMC41LTAuMmwtMS40LTEuN3EtMC4xLTAuMi0wLjEtMC41dDAuMi0wLjVsMTYuMS0xMy40cTAuNy0wLjYgMS43LTAuNnQxLjcgMC42bDUuNCA0LjZ2LTQuNHEwLTAuMyAwLjItMC41dDAuNS0wLjJoNC4zcTAuMyAwIDAuNSAwLjJ0MC4yIDAuNXY5LjFsNC45IDQuMXEwLjIgMC4yIDAuMyAwLjV0LTAuMiAwLjV6JyB9KVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEZhSG9tZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9ob21lL2thcmlmYW4vbm9kZS9uZXJqcy9ub2RlX21vZHVsZXMvcmVhY3QtaWNvbnMvbGliL2ZhL2hvbWUuanNcbi8vIG1vZHVsZSBpZCA9IDI1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgVGlUaE1lbnUgPSBmdW5jdGlvbiBUaVRoTWVudShwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20zMS43IDI4LjNoLTIzLjRjLTEuOCAwLTMuMyAxLjUtMy4zIDMuNHMxLjUgMy4zIDMuMyAzLjNoMjMuNGMxLjggMCAzLjMtMS41IDMuMy0zLjNzLTEuNS0zLjQtMy4zLTMuNHogbTAtMTEuNmgtMjMuNGMtMS44IDAtMy4zIDEuNS0zLjMgMy4zczEuNSAzLjMgMy4zIDMuM2gyMy40YzEuOCAwIDMuMy0xLjUgMy4zLTMuM3MtMS41LTMuMy0zLjMtMy4zeiBtMC0xMS43aC0yMy40Yy0xLjggMC0zLjMgMS41LTMuMyAzLjNzMS41IDMuNCAzLjMgMy40aDIzLjRjMS44IDAgMy4zLTEuNSAzLjMtMy40cy0xLjUtMy4zLTMuMy0zLjN6JyB9KVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFRpVGhNZW51O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL2hvbWUva2FyaWZhbi9ub2RlL25lcmpzL25vZGVfbW9kdWxlcy9yZWFjdC1pY29ucy9saWIvdGkvdGgtbWVudS5qc1xuLy8gbW9kdWxlIGlkID0gMjUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IHsgd2l0aFJvdXRlciB9ID0gcmVxdWlyZSgncmVhY3Qtcm91dGVyLWRvbScpXG5jb25zdCBDb2RlSWNvID0gcmVxdWlyZSgncmVhY3QtaWNvbnMvbGliL2lvL2NvZGUtd29ya2luZycpXG5jb25zdCBDb21tZW50SWNvID0gcmVxdWlyZSgncmVhY3QtaWNvbnMvbGliL2ZhL2NvbW1lbnRpbmcnKVxuY29uc3QgQnJlYWRjcmFtYkljb1ZlciA9IHJlcXVpcmUoJ3JlYWN0LWljb25zL2xpYi9tZC9tb3JlLXZlcnQnKVxuY29uc3QgQnJlYWRjcmFtYkljb0dvciA9IHJlcXVpcmUoJ3JlYWN0LWljb25zL2xpYi9tZC9tb3JlLWhvcml6JylcblxuY2xhc3MgSW5mb0Jsb2NrSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbmZvLWJsb2NrXCI+XG5cdFx0XHRcdDxCcmVhZGNyYW1iSWNvVmVyIC8+XG5cdFx0XHRcdDxCcmVhZGNyYW1iSWNvR29yIC8+XG5cdFx0XHRcdDxDb2RlSWNvIC8+XG5cdFx0XHRcdDxDb21tZW50SWNvIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2l0aFJvdXRlcihJbmZvQmxvY2tIZWFkZXIpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwZmlsZXMvaGVhZGVyL2luZm8tYmxvY2suanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgSW9Db2RlV29ya2luZyA9IGZ1bmN0aW9uIElvQ29kZVdvcmtpbmcocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEljb25CYXNlMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHByb3BzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMTAgMjBjMC0xLjIgMC42LTEuOSAxLjktMS45czEuOSAwLjcgMS45IDEuOS0wLjcgMS45LTEuOSAxLjktMS45LTAuNi0xLjktMS45eiBtNS42IDBjMC0xLjIgMC43LTEuOSAxLjktMS45czEuOSAwLjcgMS45IDEuOS0wLjYgMS45LTEuOSAxLjktMS45LTAuNi0xLjktMS45eiBtNS43IDBjMC0xLjIgMC42LTEuOSAxLjgtMS45czEuOSAwLjcgMS45IDEuOS0wLjYgMS45LTEuOSAxLjktMS44LTAuNi0xLjgtMS45eiBtLTEwLjcgMTAuNmMtMC41IDAtMC45LTAuMS0xLjMtMC41bC04LjgtOC44Yy0wLjMtMC40LTAuNS0wLjgtMC41LTEuM3MwLjItMC45IDAuNS0xLjNsOC44LTguOGMwLjQtMC40IDAuOC0wLjUgMS4zLTAuNXMxIDAuMSAxLjQgMC41IDAuNSAwLjggMC41IDEuNC0wLjIgMC45LTAuNSAxLjNsLTcuNSA3LjQgNy41IDcuNGMwLjMgMC40IDAuNSAwLjggMC41IDEuNHMtMC4yIDAuOS0wLjUgMS4zLTAuOCAwLjUtMS40IDAuNXogbTEzLjggMGMtMC42IDAtMS0wLjEtMS40LTAuNXMtMC41LTAuOC0wLjUtMS4zIDAuMi0xIDAuNS0xLjRsNy41LTcuNC03LjUtNy40Yy0wLjMtMC40LTAuNS0wLjgtMC41LTEuM3MwLjItMSAwLjUtMS40IDAuOC0wLjUgMS40LTAuNSAwLjkgMC4xIDEuMyAwLjVsOC44IDguOGMwLjMgMC40IDAuNSAwLjggMC41IDEuM3MtMC4yIDAuOS0wLjUgMS4zbC04LjggOC44Yy0wLjQgMC40LTAuOCAwLjUtMS4zIDAuNXonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSW9Db2RlV29ya2luZztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9ob21lL2thcmlmYW4vbm9kZS9uZXJqcy9ub2RlX21vZHVsZXMvcmVhY3QtaWNvbnMvbGliL2lvL2NvZGUtd29ya2luZy5qc1xuLy8gbW9kdWxlIGlkID0gMjU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RJY29uQmFzZSA9IHJlcXVpcmUoJ3JlYWN0LWljb24tYmFzZScpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3RJY29uQmFzZSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBGYUNvbW1lbnRpbmcgPSBmdW5jdGlvbiBGYUNvbW1lbnRpbmcocHJvcHMpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIF9yZWFjdEljb25CYXNlMi5kZWZhdWx0LFxuICAgICAgICBfZXh0ZW5kcyh7IHZpZXdCb3g6ICcwIDAgNDAgNDAnIH0sIHByb3BzKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZycsXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdtMTQuMyAyMHEwLTEuMi0wLjktMnQtMi0wLjktMiAwLjktMC44IDIgMC44IDIgMiAwLjkgMi0wLjkgMC45LTJ6IG04LjYgMHEwLTEuMi0wLjktMnQtMi0wLjktMiAwLjktMC45IDIgMC45IDIgMiAwLjkgMi0wLjkgMC45LTJ6IG04LjUgMHEwLTEuMi0wLjgtMnQtMi0wLjktMiAwLjktMC45IDIgMC45IDIgMiAwLjkgMi0wLjkgMC44LTJ6IG04LjYgMHEwIDMuOS0yLjcgNy4ydC03LjMgNS4yLTEwIDEuOXEtMi41IDAtNC43LTAuNC0zLjkgMy44LTkuNyA1LjEtMS4yIDAuMi0xLjkgMC4zLTAuMyAwLTAuNS0wLjF0LTAuMy0wLjRxLTAuMS0wLjQgMC40LTAuOSAwLjEtMC4xIDAuNS0wLjV0MC42LTAuNSAwLjUtMC41IDAuNi0wLjggMC40LTAuOCAwLjUtMSAwLjMtMS4zIDAuMy0xLjZxLTMuMy0yLjEtNS4xLTQuOXQtMS45LTZxMC0zLjkgMi43LTcuMnQ3LjMtNS4yIDEwLTEuOSAxMCAxLjkgNy4zIDUuMiAyLjcgNy4yeicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGYUNvbW1lbnRpbmc7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvaG9tZS9rYXJpZmFuL25vZGUvbmVyanMvbm9kZV9tb2R1bGVzL3JlYWN0LWljb25zL2xpYi9mYS9jb21tZW50aW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAyNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdEljb25CYXNlID0gcmVxdWlyZSgncmVhY3QtaWNvbi1iYXNlJyk7XG5cbnZhciBfcmVhY3RJY29uQmFzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdEljb25CYXNlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIE1kTW9yZVZlcnQgPSBmdW5jdGlvbiBNZE1vcmVWZXJ0KHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RJY29uQmFzZTIuZGVmYXVsdCxcbiAgICAgICAgX2V4dGVuZHMoeyB2aWV3Qm94OiAnMCAwIDQwIDQwJyB9LCBwcm9wcyksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2cnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTIwIDI2LjZjMS44IDAgMy40IDEuNiAzLjQgMy40cy0xLjYgMy40LTMuNCAzLjQtMy40LTEuNi0zLjQtMy40IDEuNi0zLjQgMy40LTMuNHogbTAtMTBjMS44IDAgMy40IDEuNiAzLjQgMy40cy0xLjYgMy40LTMuNCAzLjQtMy40LTEuNi0zLjQtMy40IDEuNi0zLjQgMy40LTMuNHogbTAtMy4yYy0xLjggMC0zLjQtMS42LTMuNC0zLjRzMS42LTMuNCAzLjQtMy40IDMuNCAxLjYgMy40IDMuNC0xLjYgMy40LTMuNCAzLjR6JyB9KVxuICAgICAgICApXG4gICAgKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE1kTW9yZVZlcnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAvaG9tZS9rYXJpZmFuL25vZGUvbmVyanMvbm9kZV9tb2R1bGVzL3JlYWN0LWljb25zL2xpYi9tZC9tb3JlLXZlcnQuanNcbi8vIG1vZHVsZSBpZCA9IDI1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTWRNb3JlSG9yaXogPSBmdW5jdGlvbiBNZE1vcmVIb3Jpeihwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20yMCAxNi42YzEuOCAwIDMuNCAxLjYgMy40IDMuNHMtMS42IDMuNC0zLjQgMy40LTMuNC0xLjYtMy40LTMuNCAxLjYtMy40IDMuNC0zLjR6IG0xMCAwYzEuOCAwIDMuNCAxLjYgMy40IDMuNHMtMS42IDMuNC0zLjQgMy40LTMuNC0xLjYtMy40LTMuNCAxLjYtMy40IDMuNC0zLjR6IG0tMjAgMGMxLjggMCAzLjQgMS42IDMuNCAzLjRzLTEuNiAzLjQtMy40IDMuNC0zLjQtMS42LTMuNC0zLjQgMS42LTMuNCAzLjQtMy40eicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBNZE1vcmVIb3Jpejtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9ob21lL2thcmlmYW4vbm9kZS9uZXJqcy9ub2RlX21vZHVsZXMvcmVhY3QtaWNvbnMvbGliL21kL21vcmUtaG9yaXouanNcbi8vIG1vZHVsZSBpZCA9IDI1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwZmlsZXMvaGVhZGVyL2hlYWRlci5jc3Ncbi8vIG1vZHVsZSBpZCA9IDI1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBTaWRlYmFyID0gcmVxdWlyZSgnLi4vc2lkZWJhcicpXG5jb25zdCBDb250ZW50ID0gcmVxdWlyZSgnLi4vY29udGVudCcpXG5cbnJlcXVpcmUoJy4vcGFnZS5jc3MnKVxuXG5jb25zdCBQYWdlID0gcHJvcHMgPT4ge1xuXHRcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGlkPVwicGFnZVwiID5cblx0XHRcdDxTaWRlYmFyIHR5cGU9XCJpbm5lclwiLz5cblx0XHRcdDxDb250ZW50Lz5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFBhZ2VcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBmaWxlcy9wYWdlL2luZGV4LmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgeyBjb25uZWN0IH0gPSByZXF1aXJlKCdyZWFjdC1yZWR1eCcpO1xuY29uc3QgQ29yZSA9IHJlcXVpcmUoJy4vbWVudScpXG5yZXF1aXJlKCcuL3NpZGViYXIuY3NzJylcblxuY2xhc3MgU2lkZWJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGhpZGUgOiBmYWxzZVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5oaWRlICYmIHRoaXMucmVmcy5zYy5vZmZzZXRQYXJlbnQpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBoaWRlIDogZmFsc2UgfSk7XG5cdFx0fSBlbHNlIGlmICghdGhpcy5zdGF0ZS5oaWRlICYmICF0aGlzLnJlZnMuc2Mub2Zmc2V0UGFyZW50KSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgaGlkZSA6IHRydWUgfSk7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnNvbGUubG9nKCdyZW5kZXInKVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPVwic2lkZWJhci1jb250YWluZXJcIiByZWY9XCJzY1wiPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5oaWRlID8gbnVsbCA6IDxDb3JlIHsuLi50aGlzLnByb3BzfSB0eXBlPVwiaW5uZXJcIiAvPn1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb25uZWN0KFxuXHQoe21lbnV9KSA9PiB7XG5cdFx0cmV0dXJuIHsuLi5tZW51fVxuXHR9XG4pKFNpZGViYXIpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcGZpbGVzL3NpZGViYXIvaW5kZXguanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBMb2FkZXIgPSByZXF1aXJlKCdjL2xvYWRlcicpXG5jb25zdCBJdGVtID0gcmVxdWlyZSgnLi91dGlscy9pdGVtJylcblxuXG5jbGFzcyBNZW51U2lkZWJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpXG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0YWN0aXZlIDogbnVsbCxcblx0XHRcdGluZGV4IDogLTFcblx0XHR9XG5cblx0XHR0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcblx0XHR0aGlzLndpbkNsb3NlSXRlbSA9IHRoaXMud2luQ2xvc2VJdGVtLmJpbmQodGhpcyk7XG5cdH1cblxuXHR3aW5DbG9zZUl0ZW0oKSB7XG5cdFx0Y29uc29sZS5sb2coJ3djaScpXG5cdFx0dGhpcy5vbkNsaWNrKG51bGwpO1xuXHR9XG5cblx0b25DbGljayhuYW1lLCBpbmRleD0tMSkge1xuXHRcdGxldCBzbiA9IG5hbWUgJiYgdGhpcy5wcm9wcy50eXBlc1tuYW1lXSA/IG5hbWUgOiBudWxsO1xuXHRcdGlmIChzbiA9PSB0aGlzLnN0YXRlLmFjdGl2ZSkgc24gPSBudWxsO1xuXG5cdFx0aWYgKHNuICYmICF0aGlzLnN0YXRlLmFjdGl2ZSkge1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyx0aGlzLndpbkNsb3NlSXRlbSlcblx0XHR9IGVsc2UgaWYgKCFzbiAmJiB0aGlzLnN0YXRlLmFjdGl2ZSkge1xuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJyx0aGlzLndpbkNsb3NlSXRlbSlcblx0XHR9XG5cblx0XHRpZiAoIW5hbWUpIGluZGV4ID0gdGhpcy5zdGF0ZS5hY3RpdmVJbmRleDtcblxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7YWN0aXZlOnNuLGluZGV4fSlcblx0fVxuXG5cdGNvcmVPbkNsaWNrKGUpIHtcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRpZiAoIXRoaXMucHJvcHMuaXNMb2FkZWQpIHtcblx0XHRcdHRoaXMucHJvcHMuZGlzcGF0Y2goJ21lbnU6bG9hZCcpXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGlmICghdGhpcy5wcm9wcy5pc0xvYWRlZCkgcmV0dXJuIDxkaXYgaWQ9XCJzaWRlYmFyXCIgY2xhc3NOYW1lPVwiY29yZS1zaWRlYmFyXCI+PExvYWRlciBzaXplPXsxMDB9IGxhYmVsPVwibWVudVwiIC8+PC9kaXY+XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9XCJzaWRlYmFyXCIgY2xhc3NOYW1lPXtgY29yZS1zaWRlYmFyICR7dGhpcy5zdGF0ZS5hY3RpdmUgPyAnaGFzLW9wZW4nIDogJyd9YH1cblx0XHRcdFx0b25DbGljaz17dGhpcy5jb3JlT25DbGlja30gPlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jdGcubWFwKChjdGcsIGkpID0+IChcblx0XHRcdFx0XHQ8SXRlbSAgey4uLmN0Z30gXG5cdFx0XHRcdFx0XHRrZXk9e2N0Zy5uYW1lIHx8IGl9XG5cdFx0XHRcdFx0XHRsaXN0PXtjdGcubmFtZSAmJiB0aGlzLnByb3BzLnR5cGVzW2N0Zy5uYW1lXSA/IHRoaXMucHJvcHMubGlzdC5maWx0ZXIodmFsID0+ICh2YWwuY2F0LmluZGV4T2YoY3RnLm5hbWUpID49IDApKSA6IG51bGwgfSBcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMub25DbGlja30gXG5cdFx0XHRcdFx0XHRpbmRleD17aX0gXG5cdFx0XHRcdFx0XHRhY3RpdmU9eyEhKHRoaXMuc3RhdGUuYWN0aXZlICYmIHRoaXMuc3RhdGUuYWN0aXZlID09IGN0Zy5uYW1lKX0gXG5cdFx0XHRcdFx0XHRhY3RpdmVJbmRleD17dGhpcy5zdGF0ZS5pbmRleH0gLz5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWVudVNpZGViYXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBmaWxlcy9zaWRlYmFyL21lbnUuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5yZXF1aXJlKCcuL2xvYWRlci5jc3MnKVxubW9kdWxlLmV4cG9ydHMgPSBwcm9wcyA9PiB7XG5cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgaWQ9XCJsb2FkZXJcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCI+TG9hZC4uLjwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sb2FkZXIvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNzc1xuLy8gbW9kdWxlIGlkID0gMjY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IGNsID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuY29uc3QgeyBMYWJlbEN0ZyB9ID0gcmVxdWlyZSgnLi9nZXQtbGFiZWwnKTtcbmNvbnN0IExpc3RJdGVtcyA9IHJlcXVpcmUoJy4vbGlzdC1pdGVtcycpXG5cbmNsYXNzIE1lbnVJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0fVxuXG5cdG9uQ2xpY2soKSB7XG5cdFx0XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMudHlwZSA9PSAnaHInKSByZXR1cm4gPGhyIGNsYXNzTmFtZT1cInNpZGViYXItaXRlbS1oclwiIC8+O1xuXHRcdGlmICghdGhpcy5wcm9wcy5saXN0IHx8ICF0aGlzLnByb3BzLmxpc3QubGVuZ3RoKSByZXR1cm4gbnVsbDtcblxuXHRcdGNvbnN0IHtsYWJlbCwgbmFtZSwgaWNvLCBhY3RpdmUgfSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3QgY2xzID0gY2woJ21lbnUtaXRlbScse1xuXHRcdFx0YWN0aXZlIDogdGhpcy5wcm9wcy5hY3RpdmVcblx0XHR9KVxuXHRcdGxldCB0ZCA9IHRoaXMucHJvcHMuYWN0aXZlIHx8IHRoaXMucHJvcHMuYWN0aXZlSW5kZXggPCAwID8gMCA6IE1hdGguYWJzKHRoaXMucHJvcHMuaW5kZXggLSB0aGlzLnByb3BzLmFjdGl2ZUluZGV4KSAqIDAuMTtcblxuXHRcdGlmICghdGhpcy5wcm9wcy5hY3RpdmUpIHtcblxuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e2Nsc30+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVudS1sYWJlbFwiIHN0eWxlPXt7XG5cdFx0XHRcdFx0dHJhbnNpdGlvbkRlbGF5IDogYCR7dGR9c2Bcblx0XHRcdFx0fX0gXG5cdFx0XHRcdFx0b25DbGljaz17KCk9PnRoaXMucHJvcHMub25DbGljayh0aGlzLnByb3BzLm5hbWUsIHRoaXMucHJvcHMuaW5kZXgpfSA+XG5cdFx0XHRcdFx0PExhYmVsQ3RnIHsuLi57bGFiZWwsIG5hbWUsIGljbywgYWN0aXZlfX0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxMaXN0SXRlbXMgYWN0aXZlPXthY3RpdmV9IGxpc3Q9e3RoaXMucHJvcHMubGlzdH0gLz5cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQpO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWVudUl0ZW1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBmaWxlcy9zaWRlYmFyL3V0aWxzL2l0ZW0uanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JylcbmNvbnN0IGdldEljbyA9IHJlcXVpcmUoJy4vZ2V0LWljbycpXG5jb25zdCBSaWdodCA9IHJlcXVpcmUoJ3JlYWN0LWljb25zL2xpYi9mYS9jYXJldC1yaWdodCcpXG5jb25zdCBjbCA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKVxuXG5leHBvcnRzLkxhYmVsQ3RnID0gcHJvcHMgPT4ge1xuXHRjb25zdCBjbHMgPSBjbCgnbGFiZWwtY3RnJyxgbGFiZWwtY3RnLW5hbWUtJHtwcm9wcy5uYW1lfWAse1xuXHRcdFsnbGFiZWwtY3RnLWFjdGl2ZSddIDogISFwcm9wcy5hY3RpdmUsXG5cdFx0J3dpdGgtaWNvJyA6ICEhcHJvcHMuaWNvXG5cdH0pXG5cdFxuXHRsZXQgaWNvID0gcHJvcHMuaWNvID8gPGRpdiBjbGFzc05hbWU9XCJsYWJlbC1pY28gbGFiZWwtY3RnLWljb1wiPntnZXRJY28ocHJvcHMuaWNvKX08L2Rpdj4gOiBudWxsO1xuXHRcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbHN9IHRpdGxlPXtwcm9wcy5sYWJlbCB8fCBwcm9wcy5uYW1lfT5cblx0XHRcdHtpY299XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxhYmVsLWN0Zy10eHRcIj5cblx0XHRcdFx0e3Byb3BzLmxhYmVsIHx8IHByb3BzLm5hbWV9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxSaWdodCBjbGFzc05hbWU9XCJjYXJldFwiIHNpemU9ezI1fS8+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0cy5MYWJlbExpc3QgPSBwcm9wcyA9PiB7XG5cdGNvbnN0IGNscyA9IGNsKCdsYWJlbC1saXN0JyxgbGFiZWwtbGlzdC1uYW1lLSR7cHJvcHMubmFtZX1gLHtcblx0XHQnd2lkdGgtaWNvJyA6ICEhcHJvcHMuaWNvXG5cdH0pXG5cblx0bGV0IGljbyA9IHByb3BzLmljbyA/IDxzcGFuIGNsYXNzTmFtZT1cImxhYmVsLWljbyBsYWJlbC1saXN0LWljb1wiPntnZXRJY28ocHJvcHMuaWNvKX08L3NwYW4+IDogbnVsbDtcblxuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2Nsc30+XG5cdFx0XHR7aWNvfVxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibGFiZWwtbGlzdC10eHRcIj5cblx0XHRcdFx0e3Byb3BzLm5hbWV9XG5cdFx0XHQ8L3NwYW4+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBmaWxlcy9zaWRlYmFyL3V0aWxzL2dldC1sYWJlbC5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKVxuXG5jb25zdCBpY29ucyA9IHtcblx0XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmFtZSA9PiB7XG5cdGlmICghbmFtZSkgcmV0dXJuIG51bGw7XG5cdGxldCBJY28gPSBpY29uc1tuYW1lXSB8fCByZXF1aXJlKCdyZWFjdC1pY29ucy9saWIvZmEvYm9va21hcmstbycpO1xuXHRyZXR1cm4gPEljbyAvPlxufVxuXG53aW5kb3cuenp6ID0gbW9kdWxlLmV4cG9ydHNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBmaWxlcy9zaWRlYmFyL3V0aWxzL2dldC1pY28uanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgRmFCb29rbWFya08gPSBmdW5jdGlvbiBGYUJvb2ttYXJrTyhwcm9wcykge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0SWNvbkJhc2UyLmRlZmF1bHQsXG4gICAgICAgIF9leHRlbmRzKHsgdmlld0JveDogJzAgMCA0MCA0MCcgfSwgcHJvcHMpLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdnJyxcbiAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgncGF0aCcsIHsgZDogJ20zMS4yIDUuN2gtMjIuOHYyNy43bDExLjQtMTAuOSAyIDEuOSA5LjQgOXYtMjcuN3ogbTAuMy0yLjhxMC41IDAgMSAwLjIgMC43IDAuMiAxLjEgMC45dDAuNSAxLjR2MjguN3EwIDAuOC0wLjUgMS40dC0xLjEgMC45cS0wLjUgMC4yLTEgMC4yLTEuMSAwLTEuOS0wLjdsLTkuOC05LjUtOS45IDkuNXEtMC44IDAuNy0xLjggMC43LTAuNSAwLTEtMC4yLTAuNy0wLjMtMS4yLTAuOXQtMC40LTEuNHYtMjguN3EwLTAuOCAwLjQtMS40dDEuMi0wLjlxMC41LTAuMiAxLTAuMmgyMy40eicgfSlcbiAgICAgICAgKVxuICAgICk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBGYUJvb2ttYXJrTztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC9ob21lL2thcmlmYW4vbm9kZS9uZXJqcy9ub2RlX21vZHVsZXMvcmVhY3QtaWNvbnMvbGliL2ZhL2Jvb2ttYXJrLW8uanNcbi8vIG1vZHVsZSBpZCA9IDI2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0SWNvbkJhc2UgPSByZXF1aXJlKCdyZWFjdC1pY29uLWJhc2UnKTtcblxudmFyIF9yZWFjdEljb25CYXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0SWNvbkJhc2UpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgRmFDYXJldFJpZ2h0ID0gZnVuY3Rpb24gRmFDYXJldFJpZ2h0KHByb3BzKSB7XG4gICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RJY29uQmFzZTIuZGVmYXVsdCxcbiAgICAgICAgX2V4dGVuZHMoeyB2aWV3Qm94OiAnMCAwIDQwIDQwJyB9LCBwcm9wcyksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2cnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnbTI2LjQgMjBxMCAwLjYtMC41IDFsLTEwIDEwcS0wLjQgMC40LTEgMC40dC0xLTAuNC0wLjQtMXYtMjBxMC0wLjYgMC40LTF0MS0wLjQgMSAwLjRsMTAgMTBxMC41IDAuNCAwLjUgMXonIH0pXG4gICAgICAgIClcbiAgICApO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gRmFDYXJldFJpZ2h0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gL2hvbWUva2FyaWZhbi9ub2RlL25lcmpzL25vZGVfbW9kdWxlcy9yZWFjdC1pY29ucy9saWIvZmEvY2FyZXQtcmlnaHQuanNcbi8vIG1vZHVsZSBpZCA9IDI2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwZmlsZXMvc2lkZWJhci9zaWRlYmFyLmNzc1xuLy8gbW9kdWxlIGlkID0gMjcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IHsgY29ubmVjdCB9ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKVxuY29uc3Qge1JvdXRlLCBTd2l0Y2gsIExpbmssd2l0aFJvdXRlcn0gPSByZXF1aXJlKCdyZWFjdC1yb3V0ZXItZG9tJylcbmNvbnN0IFJvdXRlcyA9IHJlcXVpcmUoJy4vcm91dGVzJylcbmNvbnN0IGVycm9ycyA9IHJlcXVpcmUoJy4vZXJyb3JzJylcblxubGV0IGMgPSAwO1xuXG5jbGFzcyBDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcylcblx0XHR0aGlzLmJ0biA9IHRoaXMuYnRuLmJpbmQodGhpcylcblx0XHR0aGlzLmVyciA9IHRoaXMuZXJyLmJpbmQodGhpcylcblx0fVxuXG5cdGJ0bihzdHIsb2IpIHtcblx0XHRyZXR1cm4gKCkgPT4gdGhpcy5wcm9wcy5kaXNwKHtcblx0XHRcdHR5cGUgOiBgbW9kYWw6JHtzdHJ9YCxcblx0XHRcdHBheWxvYWQgOiBvYlxuXHRcdH0pXG5cdH1cblxuXHRlcnIodHlwZSkge1xuXHRcdHJldHVybiAoKSA9PiBlcnJvcnNbdHlwZV0odGhpcy5wcm9wcy5kaXNwKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkNvbnRlbnRcIiBcblx0XHRcdFx0XHRvblNjcm9sbD17ZT0+Y29uc29sZS5sb2coJ3Njcm9sbCcsZSl9ID5cblx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpPT57YysrO3RoaXMucHJvcHMuZGlzcCh7dHlwZTondGl0bGUnLHBheWxvYWQ6Y30pfX0+Y2xpY2s8L2J1dHRvbj5cblx0XHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gTmloaWwgYW5pbWkgdGVuZXR1ciBleCwgYW1ldCBjb3JydXB0aSBhYiBibGFuZGl0aWlzIHJlaWNpZW5kaXMgcXVpYnVzZGFtIHZvbHVwdGFzIGxhdWRhbnRpdW0gbWFnbmFtIG51bXF1YW0gZXZlbmlldCBkaWN0YSByZXB1ZGlhbmRhZSBxdWFlcmF0IGN1cGlkaXRhdGUgZG9sb3JlbXF1ZSBmdWdpdCBzaXQgcHJhZXNlbnRpdW0gdmVsaXQgcGFyaWF0dXIgYWQgZW9zIHJlY3VzYW5kYWUgbW9sbGl0aWEuIEltcGVkaXQgZnVnaXQgbm9uIGFwZXJpYW0gdmVyaXRhdGlzISBTaW50IG5vbiBmdWdhIHF1YXMgaXVyZSwgZG9sb3Igdm9sdXB0YXRlbSBvZGl0IGV0ISBQb3JybyBhdXRlbSBtb2xlc3RpYWUgYWNjdXNhbnRpdW0gdm9sdXB0YXR1bSwgbmVtbyByZWljaWVuZGlzIGNvcnJ1cHRpIHF1aXNxdWFtIHVuZGUgb2RpbyEgRG9sb3JlcywgcG9zc2ltdXMgcXVhcywgb2JjYWVjYXRpIG5hbSBwb3JybyB2ZWwgaW4gY3VtcXVlIGNvcnJ1cHRpIGV4ZXJjaXRhdGlvbmVtIG5paGlsIG1vZGkgaXVzdG8gYWIsIGFjY3VzYW11cyBjb25zZXF1YXR1ciBhc3BlcmlvcmVzIGR1Y2ltdXMgaGljIGxhYm9ydW0gZXJyb3IgcXVhbS4gRXQsIGxhYm9ydW0gcmVwcmVoZW5kZXJpdCBxdWFzaSB2ZWwgY3VtIGl1c3RvIG9kaXQgcXVpLCB2ZXJvIG5lcXVlIGFjY3VzYW11cyBhdHF1ZSBlYSBuZW1vLlxuXHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHQ8TGluayB0bz1cIi9wL3Rlc3RcIj4gL3AvdGVzdCA8L0xpbms+PGJyLz5cblx0XHRcdFx0PExpbmsgdG89XCIvcC90ZXN0L2JsYVwiPiAvcC90ZXN0L2JsYSA8L0xpbms+PGJyLz5cblx0XHRcdFx0PExpbmsgdG89XCIvcC90ZXN0L3Evdy9lL3IvdC95P2NvbW1lbnQ9MVwiPiAvcC90ZXN0L3Evdy9lL3IvdC95IDwvTGluaz48YnIvPlxuXHRcdFx0XHQ8aHIvPlxuXHRcdFx0XHRcdDxTd2l0Y2g+XG5cdFx0XHRcdFx0XHQ8Um91dGUgY29tcG9uZW50PXtSb3V0ZXN9IHBhdGg9XCIvcC86bmFtZS86dGFyZ2V0cypcIiAvPlxuXHRcdFx0XHRcdFx0PFJvdXRlIHBhdGg9XCIvcC86bmFtZVwiIGNvbXBvbmVudD17Um91dGVzfS8+XG5cdFx0XHRcdFx0PC9Td2l0Y2g+XG5cdFx0XHRcdDxoci8+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMiBvZmZzZXQtMlwiPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIiBvbkNsaWNrPXt0aGlzLmVycignc2ltcGxlJyl9PkVycm9yPC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTJcIj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tYmxvY2tcIiBvbkNsaWNrPXt0aGlzLmVycigndHlwZScpfT5UeXBlRXJyb3I8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyIGJ0bi1ibG9ja1wiIG9uQ2xpY2s9e3RoaXMuZXJyKCdjdXN0b20nKX0+Q3VzdG9tRXJyb3I8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMlwiPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZyBidG4tYmxvY2tcIiBvbkNsaWNrPXt0aGlzLmVycigndGhyb3cnKX0+dGhyb3c8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC02IG9mZnNldC0zXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtaW5mb1wiPlxuXHRcdFx0XHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5xd2VydHkgMTwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+cXdlcnR5IDI8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPnF3ZXJ0eSAzPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5xd2VydHkgNDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+cXdlcnR5IDU8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPnF3ZXJ0eSA2PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5xd2VydHkgNzwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+cXdlcnR5IDg8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPnF3ZXJ0eSA5PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5xd2VydHkgMTA8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTRcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1zdWNjZXNzXCI+XG5cdFx0XHRcdFx0XHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEVhIHF1b3MsIHZpdGFlIGlzdGUgcXVpIGhpYyB2b2x1cHRhdHVtIHZvbHVwdGFzIG5hdHVzIG9iY2FlY2F0aSB2b2x1cHRhdGVzIG1vbGxpdGlhIGlwc2FtIGludmVudG9yZSBzdW50LCBleGNlcHR1cmkgZXJyb3IsIHNpbWlsaXF1ZSBsYXVkYW50aXVtIGl0YXF1ZSBxdWFtIHZlbGl0LlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtOFwiPjwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtNCBvZmZzZXQtNFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LXNlY29uZGFyeVwiPlxuXHRcdFx0XHRcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBSZWN1c2FuZGFlIGRvbG9yZXMgbWFnbmFtIHRlbXBvcmEsIGV4cGxpY2FibyBhY2N1c2FudGl1bSB2ZXJvLCBkb2xvcmUsIGVhcnVtIHN1bnQgaXBzYW0gdGVtcG9yaWJ1cyBub24gcXVpZGVtIGxhdWRhbnRpdW0gYWxpcXVpZCBxdWFlIHZpdGFlIG5hdHVzIGF1dGVtIHBlcmZlcmVuZGlzIGFsaXF1YW0gbmVtbyBkb2xvcmlidXMgY29ycG9yaXMgcXVvIG5pc2kgbGFib3JlIHVuZGUgZGViaXRpcy4gUXVvcywgb2ZmaWNpaXMhXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC00XCI+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC00IG9mZnNldC04XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtd2FybmluZ1wiPlxuXHRcdFx0XHRcdFx0XHRcdExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBGdWdpYXQgdWxsYW0gbmF0dXMgc3VudCBlYSBxdWFzaSBxdWlzIGJlYXRhZSBlbmltIHZlcml0YXRpcyBuaXNpIGxhYm9yaW9zYW0gdm9sdXB0YXRlIHBlcmZlcmVuZGlzIGV4cGVkaXRhLCBlcnJvciBvYmNhZWNhdGkgcmVwcmVoZW5kZXJpdCwgYW5pbWkgaXBzYW0gZXZlbmlldCBtaW51cyBhY2N1c2FudGl1bS4gU2ludCByYXRpb25lIHZvbHVwdGF0ZXMgbW9sZXN0aWFzLCBkb2xvcmVtIHJlcGVsbGVuZHVzLiBEb2xvcmVtIG9mZmljaWlzIG9wdGlvIG1hZ25pIHByYWVzZW50aXVtIGRvbG9ydW0uIEVvcyBjb25zZWN0ZXR1ciBpdXJlIGNvbnNlcXV1bnR1ciwgbWFnbmkuIElsbG8sIGVpdXMhXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdpdGhSb3V0ZXIoY29ubmVjdChcblx0c3RhdGUgPT4gKHt9KSxcblx0ZGlzcCA9PiAoe1xuXHRcdGRpc3Bcblx0fSlcbikoQ29udGVudCkpXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwZmlsZXMvY29udGVudC9pbmRleC5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IHt3aXRoUm91dGVyfSA9IHJlcXVpcmUoJ3JlYWN0LXJvdXRlci1kb20nKVxuXG5jbGFzcyBSb3V0ZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiUm91dGVzXCI+XG5cdFx0XHRcdFJvdXRlcyB7TWF0aC5yYW5kb20oKX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3aXRoUm91dGVyKFJvdXRlcylcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBmaWxlcy9jb250ZW50L3JvdXRlcy5qcyIsImNsYXNzIEN1c3RvbUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXHRjb25zdHJ1Y3Rvcihtc2cpIHtcblx0XHRzdXBlcihtc2cpXG5cdFx0dGhpcy5uYW1lID0gJ0N1c3RvbUVycm9yJztcblx0XHR0aGlzLnRlc3QgPSBNYXRoLnJhbmRvbSgpXG5cdH1cbn1cblxuZXhwb3J0cy5zaW1wbGUgPSBkaXNwID0+IHtcblx0bGV0IGVyciA9IG5ldyBFcnJvcignc2ltcGxlIEVycm9yJylcblx0ZGlzcCh7XG5cdFx0dHlwZSA6ICdtb2RhbDplcnJvcicsXG5cdFx0cGF5bG9hZCA6IHtlcnJ9XG5cdH0pXG59XG5cblxuZXhwb3J0cy50eXBlID0gZGlzcCA9PiB7XG5cdGxldCBlcnIgPSBuZXcgVHlwZUVycm9yKCdzaW1wbGUgVHlwZUVycm9yJylcblx0ZGlzcCh7XG5cdFx0dHlwZSA6ICdtb2RhbDplcnJvcicsXG5cdFx0cGF5bG9hZCA6IHtlcnJ9XG5cdH0pXG59XG5cbmV4cG9ydHMuY3VzdG9tID0gZGlzcCA9PiB7XG5cdGxldCBlcnIgPSBuZXcgQ3VzdG9tRXJyb3IoJ215IEN1c3RvbUVycm9yJylcblx0ZGlzcCh7XG5cdFx0dHlwZSA6ICdtb2RhbDplcnJvcicsXG5cdFx0cGF5bG9hZCA6IHtlcnJ9XG5cdH0pXG59XG5cblxuZXhwb3J0cy50aHJvdyA9IGRpc3AgPT4ge1xuXHR0cnkge1xuXHRcdFtdLm1hcCgncXdlcnR5Jylcblx0fSBjYXRjaChlcnIpIHtcblx0XHRkaXNwKHtcblx0XHRcdHR5cGU6ICdtb2RhbDplcnJvcicsXG5cdFx0XHRwYXlsb2FkOiB7ZXJyfVxuXHRcdH0pXG5cdH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBmaWxlcy9jb250ZW50L2Vycm9ycy5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHBmaWxlcy9wYWdlL3BhZ2UuY3NzXG4vLyBtb2R1bGUgaWQgPSAyNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8Zm9vdGVyIHN0eWxlPXt7b3V0bGluZTonMXB4IHNvbGlkIGJsdWUnfX0+Zm9vdGVyPC9mb290ZXI+XG5cdFx0KTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEZvb3RlclxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcGZpbGVzL2Zvb3Rlci9pbmRleC5qcyIsImNvbnN0IGNyZWF0ZVJlZHV4U3RvcmUgPSByZXF1aXJlKCdjcmVhdGUtcmVkdXgtc3RvcmUnKTtcbmNvbnN0IHsgbW9kYWxzUmVkdXNlciB9ID0gcmVxdWlyZSgndi9jb250YWluZXItZm9yLW1vZGFsJylcbmNvbnN0IGRpc3AgPSByZXF1aXJlKCcuL2Rpc3AnKVxuXG5cblxuY29uc3QgcmVkdXNlcnMgPSB7XG5cdG1haW4gOiByZXF1aXJlKCcuL3JlZHVzZXJzL21haW4nKSxcblx0bWVudSA6IHJlcXVpcmUoJy4vcmVkdXNlcnMvbWVudScpLFxuXHRtb2RhbHMgOiBtb2RhbHNSZWR1c2VyXG59XG5cbmNvbnN0IG1kdyA9IFtcblx0cmVxdWlyZSgnLi9tZHcvbWFpbicpXG5dXG5cblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVSZWR1eFN0b3JlKHJlZHVzZXJzLG1kdylcblxuZGlzcChzdG9yZSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcGkvc3RvcmUuanMiLCJjb25zdCB7IGdldERpc3BsYXkgfSA9IHJlcXVpcmUoJy4uL2Rpc3AnKVxuXG5sZXQgZGlzcGxheSA9IGdldERpc3BsYXkoKVxuXG5jb25zdCBkZWYgPSB7XG5cdHRpdGxlIDogZG9jdW1lbnQudGl0bGUsXG5cdGRpc3BsYXksXG5cdHNpZGViYXJPcGVuIDogdHJ1ZS8qKGRpc3BsYXkgPT0gJ3hsJyB8fCBkaXNwbGF5ID09ICdsZycpKi9cbn1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IChzdGF0ZT1kZWYsIGFjdGlvbikgPT4ge1xuXG5cdHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlICd0aXRsZSc6XG5cdFx0XHRyZXR1cm4gey4uLnN0YXRlLCB0aXRsZTphY3Rpb24ucGF5bG9hZH1cblx0XHRicmVhaztcblx0XHRjYXNlICdkaXNwbGF5Jzpcblx0XHRcdHJldHVybiB7Li4uc3RhdGUsIGRpc3BsYXk6YWN0aW9uLnBheWxvYWR9XG5cdFx0YnJlYWs7XG5cdFx0Y2FzZSAnc2lkZWJhcjpvcGVuJzpcblx0XHRcdHJldHVybiB7Li4uc3RhdGUsIHNpZGViYXJPcGVuOiB0cnVlfVxuXHRcdGJyZWFrO1xuXHRcdGNhc2UgJ3NpZGViYXI6Y2xvc2UnOlxuXHRcdFx0cmV0dXJuIHsuLi5zdGF0ZSwgc2lkZWJhck9wZW46IGZhbHNlfVxuXHRcdGJyZWFrO1xuXHR9XG5cblx0cmV0dXJuIHN0YXRlXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBpL3JlZHVzZXJzL21haW4uanMiLCJjb25zdCBkZWYgPSB7XG5cdGlzTG9hZGVkIDogZmFsc2UsXG5cdHR5cGVzIDoge30sXG5cdGN0ZyA6IFtdLFxuXHRsaXN0IDogW11cbn1cblxubW9kdWxlLmV4cG9ydHMgPSAoc3RhdGU9ZGVmLGFjdGlvbikgPT4ge1xuXHRzd2l0Y2goYWN0aW9uLnR5cGUpIHtcblx0XHRjYXNlICdtZW51OmxvYWRlZCc6XG5cdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYWN0aW9uLnBheWxvYWQuY3RnIHx8ICFBcnJheS5pc0FycmF5KGFjdGlvbi5wYXlsb2FkLmxpc3QpKSkgcmV0dXJuIHN0YXRlO1xuXHRcdFx0bGV0IG5zID0gey4uLmRlZixpc0xvYWRlZDp0cnVlLGN0ZzphY3Rpb24ucGF5bG9hZC5jdGd9XG5cdFx0XHRucy5saXN0ID0gYWN0aW9uLnBheWxvYWQubGlzdC5maWx0ZXIodmFsID0+ICh0eXBlb2YgdmFsID09ICdvYmplY3QnICYmIHZhbC5jYXQgJiYgQXJyYXkuaXNBcnJheSh2YWwuY2F0KSkpXG5cdFx0XHRucy5saXN0LmZvckVhY2godmFsID0+IHtcblx0XHRcdFx0XHR2YWwuY2F0LmZvckVhY2goYyA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoIW5zLnR5cGVzW2NdKSBucy50eXBlc1tjXSA9IDA7XG5cdFx0XHRcdFx0XHRucy50eXBlc1tjXSsrO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0pXG5cdFx0XHRyZXR1cm4gbnM7XG5cdFx0YnJlYWs7XG5cdH1cblxuXHRyZXR1cm4gc3RhdGU7XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBpL3JlZHVzZXJzL21lbnUuanMiLCJjb25zdCBnZXREYXRhID0gcmVxdWlyZSgndi9nZXQtZGF0YScpXG5jb25zdCBpc09iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0JylcblxuZXhwb3J0cy50aXRsZSA9IChzdG9yZSwgbmV4dCwgdGl0bGUsIGFjdGlvbikgPT4ge1xuXHRpZiAoIXRpdGxlIHx8ICF0aXRsZS50b1N0cmluZykgcmV0dXJuO1xuXHR0aXRsZSA9IHRpdGxlLnRvU3RyaW5nKCk7XG5cdGRvY3VtZW50LnRpdGxlID0gdGl0bGU7XG5cdG5leHQoYWN0aW9uKVxufVxuXG5leHBvcnRzWydtZW51OmxvYWQnXSA9IChzdG9yZSwgbmV4dCkgPT4ge1xuXHRnZXREYXRhKCcvZGF0YS9tZW51Lmpzb24/dj0nICsgTWF0aC5yYW5kb20oKSlcblx0XHQudGhlbihkYXRhID0+IHtcblx0XHRcdFxuXHRcdFx0aWYgKCFpc09iamVjdChkYXRhKSB8fCAhQXJyYXkuaXNBcnJheShkYXRhLmN0ZykgfHwgIUFycmF5LmlzQXJyYXkoZGF0YS5saXN0KSkgdGhyb3cgbmV3IEVycm9yKCdyZXN1bCBmb3IgXFxcIi9kYXRhL21lbnUuanNvblxcXCIgbXVzdCBiZSB7XFxcImN0Z1xcXCI6QXJyYXkoKSxcXFwibGlzdFxcXCI6QXJyYXkoKX0nKVxuXHRcdFx0bmV4dCh7XG5cdFx0XHRcdHR5cGUgOiAnbWVudTpsb2FkZWQnLFxuXHRcdFx0XHRwYXlsb2FkIDogZGF0YVxuXHRcdFx0fSlcblx0XHR9KVxuXHRcdC5jYXRjaChlID0+IG5leHQoe3R5cGU6J21vZGFsOmVycm9yJyxwYXlsb2FkOntlcnI6ZX19KSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcGkvbWR3L21haW4uanMiLCJcblxubW9kdWxlLmV4cG9ydHMgPSBzdHIgPT4ge1xuXHRyZXR1cm4gZmV0Y2goc3RyKVxuXHRcdFx0XHQudGhlbihyZXMgPT4ge1xuXHRcdFx0XHRcdGlmIChyZXMuc3RhdHVzID09IDIwMCkgcmV0dXJuIHJlcy5qc29uKCk7XG5cdFx0XHRcdFx0aWYgKHJlcy5zdGF0dXMgPT0gNDA0KSB0aHJvdyBuZXcgRXJyb3IoJ2RhdGEgTm90IEZvdW5kJyk7XG5cdFx0XHRcdFx0cmV0dXJuIFtdO1xuXHRcdFx0XHR9KVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3ZlbmRvci9nZXQtZGF0YS5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IExpc3RJdGVtID0gcmVxdWlyZSgnLi9saXN0LWl0ZW0nKVxuXG5jb25zdCBMaXN0SXRlbXMgPSAoe2xpc3QsIGFjdGl2ZX0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8dWwgY2xhc3NOYW1lPVwibGlzdC1pdGVtc1wiIHN0eWxlPXt7XG5cdFx0XHRoZWlnaHQ6IGFjdGl2ZSA/IGxpc3QubGVuZ3RoICogMjAgOiAwIFxuXHRcdH19ID5cblx0XHRcdHtsaXN0Lm1hcCgobCxpKSA9PiA8bGkga2V5PXtpfSBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj48TGlzdEl0ZW0gaXRlbT17bH0gaW5kZXg9e2l9IC8+PC9saT4pfVxuXHRcdDwvdWw+XG5cdClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0SXRlbXNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHBmaWxlcy9zaWRlYmFyL3V0aWxzL2xpc3QtaXRlbXMuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmNvbnN0IExpc3RJdGVtID0gcHJvcHMgPT4ge1xuXHRcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIkxpc3RJdGVtXCIgPlxuXHRcdFx0TGlzdEl0ZW1cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RJdGVtXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwZmlsZXMvc2lkZWJhci91dGlscy9saXN0LWl0ZW0uanMiXSwic291cmNlUm9vdCI6IiJ9