import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React from 'react';

var Chord =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Chord, _React$Component);

  function Chord() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Chord);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Chord)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.defs = function () {
      return React.createElement("defs", {
        id: "defs49"
      }, React.createElement("linearGradient", {
        id: "linearGradient1010"
      }, React.createElement("stop", {
        id: "stop1006",
        stopColor: "#424242",
        offset: "0"
      }), React.createElement("stop", {
        id: "stop1008",
        stopColor: "#424242",
        stopOpacity: "0",
        offset: "1"
      })), React.createElement("linearGradient", {
        id: "c",
        x1: ".5",
        x2: ".5",
        y1: ".9731"
      }, React.createElement("stop", {
        id: "stop12",
        stopColor: "#464646",
        stopOpacity: "0",
        offset: "0"
      }), React.createElement("stop", {
        id: "stop14",
        stopColor: "#424242",
        offset: ".1854"
      }), React.createElement("stop", {
        id: "stop16",
        stopColor: "#424242",
        offset: ".805"
      }), React.createElement("stop", {
        id: "stop18",
        stopColor: "#464646",
        stopOpacity: "0",
        offset: "1"
      })), React.createElement("linearGradient", {
        id: "linearGradient966",
        x1: "28.284",
        x2: "28.284",
        y1: "55.047",
        gradientTransform: "matrix(.70711 0 0 1.4142 32 30)",
        gradientUnits: "userSpaceOnUse",
        href: "#c"
      }), React.createElement("linearGradient", {
        id: "linearGradient1012",
        x1: "32.35",
        x2: "32.35",
        y1: "93.251",
        y2: "106.51",
        gradientTransform: "translate(0,2)",
        gradientUnits: "userSpaceOnUse",
        href: "#linearGradient1010"
      }));
    };

    _this.frets = function () {
      return [React.createElement("path", {
        key: "1",
        id: "fret1",
        d: "m32 45v1h40v-1z",
        fill: "#a6a6a6"
      }), React.createElement("path", {
        key: "2",
        id: "fret2",
        d: "m32 61v1h40v-1z",
        fill: "#a6a6a6"
      }), React.createElement("path", {
        key: "3",
        id: "fret3",
        d: "m32 77v1h40v-1z",
        fill: "#a6a6a6"
      }), React.createElement("path", {
        key: "4",
        id: "fret4",
        d: "m32 93v1h40v-1z",
        fill: "#a6a6a6"
      })];
    };

    _this.strings = function () {
      var nut = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (nut) {
        return [React.createElement("path", {
          key: "0",
          id: "nut",
          d: "m33.5 27c-0.83 0-1.5 0.67-1.5 1.5v1.5h40v-1.5c0-0.83-0.68-1.5-1.5-1.5z",
          fill: "#424242"
        }), React.createElement("path", {
          key: "4",
          id: "string4-nut",
          d: "m32 30v80h1v-80z",
          fill: "url(#linearGradient1012)"
        }), React.createElement("path", {
          key: "3",
          id: "string3-nut",
          d: "m45 30v80h1v-80z",
          fill: "url(#linearGradient1012)"
        }), React.createElement("path", {
          key: "2",
          id: "string2-nut",
          d: "m58 30v80h1v-80z",
          fill: "url(#linearGradient1012)"
        }), React.createElement("path", {
          key: "1",
          id: "string1-nut",
          d: "m71 30v80h1v-80z",
          fill: "url(#linearGradient1012)"
        })];
      }

      return [React.createElement("path", {
        key: "4",
        id: "string4",
        d: "m32 30v80h1v-80z",
        fill: "url(#linearGradient966)"
      }), React.createElement("path", {
        key: "3",
        id: "string3",
        d: "m45 30v80h1v-80z",
        fill: "url(#linearGradient966)"
      }), React.createElement("path", {
        key: "2",
        id: "string2",
        d: "m58 30v80h1v-80z",
        fill: "url(#linearGradient966)"
      }), React.createElement("path", {
        key: "1",
        id: "string1",
        d: "m71 30v80h1v-80z",
        fill: "url(#linearGradient966)"
      })];
    };

    _this.fingers = function () {
      var fretset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var positions = {
        1: 37.5,
        2: 53.5,
        3: 69.5,
        4: 85.5
      };
      return Array.isArray(fretset) && fretset.length > 0 && [fretset[0] !== 0 && React.createElement("circle", {
        key: "1",
        id: "finger-string1",
        cx: "71.5",
        cy: positions[fretset[0]],
        r: "5.5",
        fill: "#424242"
      }), fretset[1] !== 0 && React.createElement("circle", {
        key: "2",
        id: "finger-string2",
        cx: "58.5",
        cy: positions[fretset[1]],
        r: "5.5",
        fill: "#424242"
      }), fretset[2] !== 0 && React.createElement("circle", {
        key: "3",
        id: "finger-string3",
        cx: "45.5",
        cy: positions[fretset[2]],
        r: "5.5",
        fill: "#424242"
      }), fretset[3] !== 0 && React.createElement("circle", {
        key: "4",
        id: "finger-string4",
        cx: "32.5",
        cy: positions[fretset[3]],
        r: "5.5",
        fill: "#424242"
      })];
    };

    _this.fretNumber = function () {
      var fretNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return fretNumber && React.createElement("text", {
        id: "fret",
        x: "24.9464",
        y: "41.382812",
        fill: "#424242",
        fontFamily: "sans-serif",
        fontSize: "9.733px",
        letterSpacing: "0px",
        strokeWidth: ".24332",
        "text-align": "end",
        textAnchor: "end",
        wordSpacing: "0px",
        style: {
          lineHeight: 1.25
        },
        xmlSpace: "preserve"
      }, React.createElement("tspan", {
        id: "fret-value",
        x: "24.9464",
        y: "41.382812",
        fill: "#424242",
        fontSize: "10.667px",
        strokeWidth: ".24332",
        "text-align": "end",
        textAnchor: "end"
      }, fretNumber));
    };

    _this.chordName = function () {
      var chordName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return chordName && React.createElement("text", {
        id: "text2727",
        x: "52.091145",
        y: "18.297945",
        fill: "#424242",
        fontFamily: "sans-serif",
        fontSize: "13.333px",
        letterSpacing: "0px",
        wordSpacing: "0px",
        style: {
          lineHeight: 1.25
        },
        xmlSpace: "preserve"
      }, React.createElement("tspan", {
        id: "tspan2725",
        x: "52.091145",
        y: "18.297945",
        fill: "#424242",
        fontFamily: "sans-serif",
        fontWeight: "bold",
        "text-align": "center",
        textAnchor: "middle"
      }, chordName));
    };

    _this.normalizeFreset = function () {
      var fretset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var max = Math.max.apply(Math, _toConsumableArray(fretset));

      if (max <= 4) {
        return {
          fret: null,
          fretset: fretset
        };
      }

      var min = Math.min.apply(Math, _toConsumableArray(fretset.filter(function (number) {
        return number !== 0;
      })));
      return {
        fret: "".concat(min, "\xBA"),
        fretset: fretset.map(function (number) {
          return number === 0 ? 0 : number - min + 1;
        })
      };
    };

    _this.buildDiagram = function () {
      var chordName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var fretset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var normalizedFretset = _this.normalizeFreset(fretset);

      return React.createElement("svg", {
        id: "svg153",
        width: "104",
        height: "118",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 104 118"
      }, _this.defs(), _this.frets(), _this.strings(normalizedFretset.fret === null), _this.fingers(normalizedFretset.fretset), _this.fretNumber(normalizedFretset.fret), _this.chordName(chordName));
    };

    return _this;
  }

  _createClass(Chord, [{
    key: "render",
    value: function render() {
      return this.buildDiagram(this.props.name, this.props.fretset);
    }
  }]);

  return Chord;
}(React.Component);

export default Chord;