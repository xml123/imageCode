(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/imageCode/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/imageCode/index.js?taro&type=script&parse=COMPONENT&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/imageCode?taro&type=script&parse=COMPONENT& ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2; /**
                     * @name ImageCode
                     * @desc 滑动拼图验证
                     * @author 明亮
                     * @version 2020-02-25
                     * 
                     * @param {String} imageUrl 图片的路径
                     * @param {String} top 距离顶部的高度
                     * @param {Function} onReload 当点击'重新验证'时执行的函数
                     * @param {Function} onMath 滑动结束后进行验证的函数,接收两个参数，第一个是滑动结束的x坐标，第二个是验证失败执行的回调函数
                     * @param {Function} onClose 点击关闭按钮时执行的函数
                     */

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./index.css */ "./src/components/imageCode/index.css");

var _close = __webpack_require__(/*! ./icon/close.png */ "./src/components/imageCode/icon/close.png");

var _close2 = _interopRequireDefault(_close);

var _reload = __webpack_require__(/*! ./icon/reload.png */ "./src/components/imageCode/icon/reload.png");

var _reload2 = _interopRequireDefault(_reload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STATUS_LOADING = 0; // 还没有图片
var STATUS_READY = 1; // 图片渲染完成,可以开始滑动
var STATUS_MATCH = 2; // 图片位置匹配成功
var STATUS_ERROR = 3; // 图片位置匹配失败
// 生成裁剪路径
function createClipPath(ctx) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var styleIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var styles = [[0, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0], [0, 0, 1, 1], [0, 1, 0, 0], [0, 1, 0, 1], [0, 1, 1, 0], [0, 1, 1, 1], [1, 0, 0, 0], [1, 0, 0, 1], [1, 0, 1, 0], [1, 0, 1, 1], [1, 1, 0, 0], [1, 1, 0, 1], [1, 1, 1, 0], [1, 1, 1, 1]];
  var style = styles[styleIndex];

  var r = 0.1 * size;
  ctx.save();
  ctx.beginPath();
  // left
  ctx.moveTo(r, r);
  ctx.lineTo(r, 0.5 * size - r);
  ctx.arc(r, 0.5 * size, r, 1.5 * Math.PI, 0.5 * Math.PI, style[0]);
  ctx.lineTo(r, size - r);
  // bottom
  ctx.lineTo(0.5 * size - r, size - r);
  ctx.arc(0.5 * size, size - r, r, Math.PI, 0, style[1]);
  ctx.lineTo(size - r, size - r);
  // right
  ctx.lineTo(size - r, 0.5 * size + r);
  ctx.arc(size - r, 0.5 * size, r, 0.5 * Math.PI, 1.5 * Math.PI, style[2]);
  ctx.lineTo(size - r, r);
  // top
  ctx.lineTo(0.5 * size + r, r);
  ctx.arc(0.5 * size, r, r, 0, Math.PI, style[3]);
  ctx.lineTo(r, r);
  ctx.clip();
  ctx.closePath();

  // ctx.setFillStyle('red')
  // ctx.fill()
  // ctx.draw()
}

var CodeComponent = (_temp2 = _class = function (_BaseComponent) {
  _inherits(CodeComponent, _BaseComponent);

  function CodeComponent() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CodeComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CodeComponent.__proto__ || Object.getPrototypeOf(CodeComponent)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["anonymousState__temp", "anonymousState__temp2", "top", "close_image", "imageHeight", "imageUrl", "offsetX", "offsetY", "fragmentSize", "currX", "reload_image", "isMovable", "startX", "oldX", "status", "tipsIndex", "x", "imageWidth", "onReload", "__fn_onClick"], _this.imageRender = function () {
      // 初始化状态
      _this.setState({
        status: STATUS_LOADING
      });
      _taroWeapp2.default.downloadFile({ url: _this.props.imageUrl }).then(function (res) {
        var objImage = res.tempFilePath;
        var _this$props = _this.props,
            imageHeight = _this$props.imageHeight,
            fragmentSize = _this$props.fragmentSize;
        // 先获取两个ctx

        // 让两个ctx拥有同样的裁剪路径(可滑动小块的轮廓)

        var styleIndex = Math.floor(Math.random() * 16);
        createClipPath(_this.ctxShadow, fragmentSize, styleIndex);
        createClipPath(_this.ctxFragment, fragmentSize, styleIndex);
        // 随机生成裁剪图片的开始坐标
        var clipX = _this.state.offsetX; //Math.floor(fragmentSize + (imageWidth - 2 * fragmentSize) * Math.random())
        var clipY = Math.floor((imageHeight - fragmentSize) * Math.random());

        // 让小块绘制出被裁剪的部分
        _this.ctxFragment.drawImage(objImage, clipX, clipY, fragmentSize, fragmentSize, 0, 0, fragmentSize, fragmentSize);
        _this.ctxFragment.draw();

        // 让阴影canvas带上阴影效果
        _this.ctxShadow.fillStyle = "rgba(0, 0, 0, 0.5)";
        _this.ctxShadow.fill();
        _this.ctxShadow.draw();

        // 恢复画布状态
        _this.ctxShadow.restore();
        _this.ctxFragment.restore();

        // 设置裁剪小块的位置
        _this.setState({
          offsetY: clipY,
          status: STATUS_READY
        });
      });
    }, _this.onMoveStart = function (e) {
      console.log('onMoveStart', _this.state.status);
      if (_this.state.status !== STATUS_READY) {
        return;
      }
      // 记录滑动开始时的绝对坐标x
      _this.setState({ isMovable: true, startX: e.changedTouches[0].clientX });
    }, _this.onMoving = function (e) {
      if (_this.state.status !== STATUS_READY || !_this.state.isMovable) {
        console.log(4444);
        return;
      }
      var distance = e.changedTouches[0].clientX - _this.state.startX;
      var currX = _this.state.oldX + distance;
      var minX = 0;
      var maxX = _this.props.imageWidth - _this.props.fragmentSize;
      currX = currX < minX ? 0 : currX > maxX ? maxX : currX;
      _this.setState({ currX: currX });
    }, _this.onMoveEnd = function () {
      if (_this.state.status !== STATUS_READY || !_this.state.isMovable) {
        return;
      }
      console.log('onMoveEnd');
      // 将旧的固定坐标x更新
      _this.setState(function (pre) {
        return { isMovable: false, oldX: pre.currX };
      });
      _this.sendx();
    }, _this.onReset = function () {
      var timer = setTimeout(function () {
        _this.setState({ oldX: 0, currX: 0, status: STATUS_READY });
        clearTimeout(timer);
      }, 1000);
    }, _this.onReload = function () {
      if (_this.state.status !== STATUS_READY && _this.state.status !== STATUS_MATCH) {
        return;
      }
      // const ctxShadow = this.refs.shadowCanvas.getContext("2d")
      // const ctxFragment = this.refs.fragmentCanvas.getContext("2d")

      // 清空画布
      _this.ctxShadow.clearRect(0, 0, _this.props.fragmentSize, _this.props.fragmentSize);
      _this.ctxFragment.clearRect(0, 0, _this.props.fragmentSize, _this.props.fragmentSize);

      _this.setState({
        isMovable: false,
        startX: 0, // 开始滑动的 x
        oldX: 0,
        currX: 0, // 滑块当前 x,
        status: STATUS_LOADING
      }, _this.props.onReload);
    }, _this.onShowTips = function () {
      var tipsIndex = _this.state.status === STATUS_MATCH ? 0 : 1;
      tipsIndex ? message.error('验证失败！', 1) : message.success('验证成功！', 1);
      _this.setState({ tipsIndex: tipsIndex });
    }, _this.sendx = function () {
      var currX = _this.state.currX;
      var onMath = _this.props.onMath;

      _this.props.onMath(currX, _this.onReload);
    }, _this.customComponents = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CodeComponent, [{
    key: '_constructor',
    value: function _constructor(props) {
      _get(CodeComponent.prototype.__proto__ || Object.getPrototypeOf(CodeComponent.prototype), '_constructor', this).call(this, props);
      this.state = {
        isMovable: false,
        offsetX: this.props.x, //图片截取的x
        offsetY: 0, //图片截取的y
        startX: 0, // 开始滑动的 x
        oldX: 0,
        currX: 0, // 滑块当前 x,
        status: STATUS_LOADING,
        tipsIndex: 0
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      console.log('重新渲染');
      if (prevProps.imageUrl !== this.props.imageUrl) {
        console.log('chongxin');
        this.imageRender();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.ctxShadow = _taroWeapp2.default.createCanvasContext('shadowCanvas', this);
      this.ctxFragment = _taroWeapp2.default.createCanvasContext('fragmentCanvas', this);
      this.imageRender();
    }
    //验证坐标信息

  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _props = this.__props,
          imageUrl = _props.imageUrl,
          imageWidth = _props.imageWidth,
          imageHeight = _props.imageHeight,
          fragmentSize = _props.fragmentSize,
          onClose = _props.onClose,
          top = _props.top;
      var _state = this.__state,
          offsetX = _state.offsetX,
          offsetY = _state.offsetY,
          currX = _state.currX;

      var anonymousState__temp = (0, _taroWeapp.internal_inline_style)({ width: imageWidth + 'px' });
      var anonymousState__temp2 = (0, _taroWeapp.internal_inline_style)({ left: currX + "px" });
      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        top: top,
        close_image: _close2.default,
        imageHeight: imageHeight,
        imageUrl: imageUrl,
        fragmentSize: fragmentSize,
        reload_image: _reload2.default
      });
      return this.__state;
    }
  }, {
    key: 'funPrivatebzzzz',
    value: function funPrivatebzzzz() {
      return this.props.onClose.apply(undefined, Array.prototype.slice.call(arguments, 1));
    }
  }]);

  return CodeComponent;
}(_taroWeapp.Component), _class.$$events = ["funPrivatebzzzz", "onReload", "onMoving", "onMoveStart", "onMoveEnd"], _class.defaultProps = {
  imageWidth: 325,
  imageHeight: 217,
  fragmentSize: 60,
  onReload: function onReload() {},
  onMatch: function onMatch() {},
  onError: function onError() {}
}, _class.$$componentPath = "components/imageCode/index", _temp2);
exports.default = CodeComponent;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(CodeComponent));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/xumingliang/test/canvasImageCode/imageCode/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/imageCode/index.js?taro&type=template&parse=COMPONENT&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/xumingliang/test/canvasImageCode/imageCode/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/imageCode?taro&type=template&parse=COMPONENT& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/imageCode/index.wxml";

/***/ }),

/***/ "./src/components/imageCode/icon/close.png":
/*!*************************************************!*\
  !*** ./src/components/imageCode/icon/close.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACnElEQVRYR82XyW7UQBCG/1LmioRYrtx4D7giJupqaQJhCWFJuLGGfQn7vt8gbAk7I7paCeIKj8AzcGUREteJClnKjDwet90eIgXf2i7X/3VV9W+ZsMQXLbE+/h+AwcHBZQMDAx8ArFXVae/9ucWsjjFmkohGieirc47buTsVMMasI6LPKdFJEbmwGBDMfBbA+XYuVV3vvf+SrDsA9Xp9Va1W+54WVNUz3vtL/wJhjDlNRBfTOVqt1uq5ubkfXQDJgpkbAN6ng4nolHPuSj8Q1tqTqno58+6QiDR7WtC+kQcB4ISIXKsCwczHAVwtEu+pQBEEER1zzt2IgbDWHlXV62XiQYBQOwAcEZFbRRDMPAHgZox4IUAIQlUnvPe38yCMMYeJKAvY1fPse6VGFJiJQyJyN52MmQ8CuBO78+AQ5u0sD0JVD3jv7yfxxpj9RHSvqnhpCzI7zDui+5IYVX3Qj3glgILBzBatsOeVZyD7QmAm2mGVxCtXIOUTjwCMZeCmRGQ8xifSMaWnIJvQGDNORA/zhFR1r/c+gYu+KgFYa/eo6lRRdiIac849jiWIBmDmXQCeZKd9Yd31AQOwW0SexkBEAVhrR1X1WeioBb6iO51zz8sgSgGYeQeAbKKeaQ+cjlERmS5sWdFDa+12VZ2JNZlAJUaccy9COsEKMPNWAC9jxVNHtMcxAWwTkVd5ELkAxphhInpdVbwIQlW3eO/flDohM28GkA2s7HCBmRgWkbdBIzLGDBHRu353HmPbqrrJe985tp0WLPwXfAOwPJWo8s4jIH7Pz8+vmZ2d/ZPEdgAajcaKVqv1czHFQzNRq9VWNpvNX10AycIYk/y5bAAwIyIfy0ykynNm3ghgRFU/ee87vlJqRFVE+oldcoC/a/IkMKox+nEAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/components/imageCode/icon/reload.png":
/*!**************************************************!*\
  !*** ./src/components/imageCode/icon/reload.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADa0lEQVRYR8WWXahlYxjH/897khMhLohE4goXQmh05Cii0UgyphGlvda7tmlOmMIF5SsXSqbm+Oj9r32Wj0YTZxQh+SgTM6ZobogyNPmI23OhcGrv9ejd7b3b9l7v+tjnYt7b5+P/W+/zsV7BcT5ynPWxIYAoii6Ym5u7VlW3AuiRvL3pBzUGaLfbZ+Z5vl1V7xKRawD8BuBVkk82Fff+tQHiOL5MRO4FsB3AWQOxY6p6S5qmR2cRrw0Qx/GjIvIYgFPGhbrd7qlZlv01q3gtAGvtfgB3TIqIyCXOuR+qxKMouqLT6RwJ+ZWWII7jPSKyVBC8leRqlbi19gkAvjeeCvVIEGAseFLnIMmFGuKbAXww9MvzfLHT6RyYusmiRFEULRhjvgiI7CK5uwyg3W5fmuf5dwU+55P0UzM6hTcQqnu/aUQ2OecOhwCstWcD+B3AXIHPL2traxetrq72hrYpgCRJLlbV7wMC/5A8qUT8BABfArg62HQirznn7isDaKlqpyiBqh5I03SxBOANAPdU9YeIPO2c8w06vYistcsAdgaSvEVyW5HNWvsCgIeqxMfsbZKuqASfqOqNgUSvkNwxaYui6HpjzOcNxPuuJKUP4JfFcMsZY14HcF4g2bN5nn/mbeMjFUXRucaY1uBGdTD7Uyl8CUe1F3mH5It9AGutD2p0VPXhNE2fnwwqWV7edaqEQ4DnADzSgMCP2WaSU7OeJMleVb27bglHPZAkybuqelsdCBHZ4px7P9CMHwO4KVRCko+P20YA/nFhjPkUwIUVEA+Q3FMyin8AOKfIXrSO/zcFSZLcrKoflQDsJrmrRNzD/xywf0Pyqknb1Bhaax8EULTrPyR5a9ntxHG8TUT2BXwSkqwEGExFBmC0LgEc7Xa7i1mW/VkGYK19GcD9BT5HSF5ZFFv4M1paWjpxfX39KwCXD4IWSB6sEPe741sAp034Hev1ejesrKz8WhvAO7ZarTOMMVuMMV/XeflYa98GcGeByMkk/w7B136UVtT+JRGZXNGHSW6qGusNA1hrLQA3JvQvAP/PCE5L4R6oIg0sHf/e6/9WfaMC2Ccibzrnfqqbb6YbSJLkOlX1HX86gP2qemh+fv695eXl9brCQ7+ZAOI4fqbX6+3NsuzHpoK19sBGkzaJn+kGmghU+f4HTTFCMOqu4hYAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/components/imageCode/index.css":
/*!********************************************!*\
  !*** ./src/components/imageCode/index.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/imageCode/index.js":
/*!*******************************************!*\
  !*** ./src/components/imageCode/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .?taro&type=template&parse=COMPONENT& */ "./src/components/imageCode/index.js?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .?taro&type=script&parse=COMPONENT& */ "./src/components/imageCode/index.js?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/components/imageCode/index.js?taro&type=script&parse=COMPONENT&":
/*!********************************************************************!*\
  !*** ./src/components/imageCode?taro&type=script&parse=COMPONENT& ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!.?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/imageCode/index.js?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/imageCode/index.js?taro&type=template&parse=COMPONENT&":
/*!**********************************************************************!*\
  !*** ./src/components/imageCode?taro&type=template&parse=COMPONENT& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_xumingliang_test_canvasImageCode_imageCode_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/xumingliang/test/canvasImageCode/imageCode/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!.?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/xumingliang/test/canvasImageCode/imageCode/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/imageCode/index.js?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_xumingliang_test_canvasImageCode_imageCode_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_xumingliang_test_canvasImageCode_imageCode_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_xumingliang_test_canvasImageCode_imageCode_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_xumingliang_test_canvasImageCode_imageCode_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ })

},[["./src/components/imageCode/index.js","runtime","taro","vendors"]]]);