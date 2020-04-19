(function (e) {
  function t(t) {
    for (var r, s, l = t[0], o = t[1], u = t[2], p = 0, d = []; p < l.length; p++) s = l[p], Object.prototype.hasOwnProperty.call(i, s) && i[s] && d.push(i[s][0]), i[s] = 0;
    for (r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
    a && a(t);
    while (d.length) d.shift()();
    return c.push.apply(c, u || []), n()
  }

  function n() {
    for (var e, t = 0; t < c.length; t++) {
      for (var n = c[t], r = !0, l = 1; l < n.length; l++) {
        var o = n[l];
        0 !== i[o] && (r = !1)
      }
      r && (c.splice(t--, 1), e = s(s.s = n[0]))
    }
    return e
  }

  var r = {}, i = {app: 0}, c = [];

  function s(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {i: t, l: !1, exports: {}};
    return e[t].call(n.exports, n, n.exports, s), n.l = !0, n.exports
  }

  s.m = e, s.c = r, s.d = function (e, t, n) {
    s.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
  }, s.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
  }, s.t = function (e, t) {
    if (1 & t && (e = s(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (s.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) s.d(n, r, function (t) {
      return e[t]
    }.bind(null, r));
    return n
  }, s.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"]
    } : function () {
      return e
    };
    return s.d(t, "a", t), t
  }, s.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, s.p = "/";
  var l = window["webpackJsonp"] = window["webpackJsonp"] || [], o = l.push.bind(l);
  l.push = t, l = l.slice();
  for (var u = 0; u < l.length; u++) t(l[u]);
  var a = o;
  c.push([0, "chunk-vendors"]), n()
})({
  0: function (e, t, n) {
    e.exports = n("56d7")
  }, "0adf": function (e, t, n) {
    e.exports = n.p + "./img/coffee.c0619e30.png"
  }, "178f": function (e, t, n) {
    e.exports = n.p + "./img/fifth.b268582c.jpg"
  }, "18f2": function (e, t, n) {
  }, "1b05": function (e, t, n) {
  }, "1ed9": function (e, t, n) {
    "use strict";
    var r = n("de01"), i = n.n(r);
    i.a
  }, "24bb": function (e, t, n) {
    "use strict";
    var r = n("b804"), i = n.n(r);
    i.a
  }, 3645: function (e, t, n) {
    "use strict";
    var r = n("3e33"), i = n.n(r);
    i.a
  }, "3e33": function (e, t, n) {
  }, 4232: function (e, t, n) {
    e.exports = n.p + "./img/tenth.abd92226.jpg"
  }, "4a19": function (e, t) {
    e.exports = "data:image/png;base64,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"
  }, "56d7": function (e, t, n) {
    "use strict";
    n.r(t);
    n("cadf"), n("551c"), n("f751"), n("097d");
    var r = n("2b0e"), i = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {attrs: {id: "app"}}, [n("the-wrapper", [n("screen-list"), n("v-input"), n("transition", [n("v-loader")], 1)], 1)], 1)
      }, c = [], s = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {staticClass: "wrapper"}, [n("div", {staticClass: "container"}, [e._t("default")], 2)])
      }, l = [], o = {}, u = o, a = (n("1ed9"), n("2877")), p = Object(a["a"])(u, s, l, !1, null, null, null),
      d = p.exports, f = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("div", {staticClass: "container-scrollable"}, [n("transition-group", {
          staticClass: "screen-list",
          attrs: {name: "screen-list", tag: "ul"}
        }, e._l(e.SCREEN_LIST, (function (t, r) {
          return t.visible ? n("li", {
            key: t.key,
            staticClass: "screen-list__screen"
          }, [t.visible ? n("screen-item", {
            key: r,
            attrs: {screenData: t, index: r}
          }) : e._e(), n("transition", {attrs: {name: "to-left"}}, [t.answer ? n("div", {staticClass: "msg-box msg-answer"}, [n("span", {domProps: {innerHTML: e._s(t.answer)}})]) : e._e()])], 1) : e._e()
        })), 0)], 1)
      }, g = [], b = (n("8e6e"), n("ac6a"), n("456d"), n("bd86")), m = function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("transition", {attrs: {name: "screen-appear"}}, [e.screen.visible ? n("div", [e.img ? n("div", {staticClass: "screen__bg"}, [n("img", {
          attrs: {
            src: e.imgSrc,
            alt: ""
          }
        })]) : e.screen.video ? n("div", {domProps: {innerHTML: e._s(e.screen.video)}}) : e._e(), n("transition", {attrs: {name: "to-right"}}, [e.screen.msgOut ? n("div", {
          staticClass: "msg-box msg-question",
          class: {"to-right": e.screen.visible}
        }, [n("div", {
          staticClass: "msg-inner",
          domProps: {innerHTML: e._s(e.screen.msgOut)}
        })]) : e._e()]), n("div", {staticClass: "btn-group"}, e._l(e.screen.buttons, (function (t) {
          return n("v-button", {
            class: t.class,
            attrs: {disabled: !0 === t.clicked},
            domProps: {innerHTML: e._s(t.text)},
            on: {
              click: function (n) {
                return e.sendMessage([e.index, e.screen.id, t.id, t.text])
              }
            }
          })
        })), 1)], 1) : e._e()])
      }, O = [], v = (n("c5f6"), function () {
        var e = this, t = e.$createElement, n = e._self._c || t;
        return n("button", {
          staticClass: "screen-btn", attrs: {type: "button"}, on: {
            click: function (t) {
              return e.$emit("click", t)
            }
          }
        }, [n("span", [e._t("default")], 2)])
      }), h = [], y = {}, w = y, A = (n("7785"), Object(a["a"])(w, v, h, !1, null, null, null)), j = A.exports,
      x = n("2f62");

    function E(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }

    function k(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? E(Object(n), !0).forEach((function (t) {
          Object(b["a"])(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }

    var S = {
      components: {VButton: j}, props: {screenData: Object, index: Number}, data: function () {
        return {screen: {}, img: null}
      }, mounted: function () {
        this.screen = this.screenData, this.img = this.screen.img
      }, computed: {
        imgSrc: function () {
          if (this.img) return n("bb6e")("./".concat(this.img))
        }
      }, methods: k({}, Object(x["b"])(["getAnswer"]), {
        sendMessage: function (e) {
          this.getAnswer(e)
        }
      })
    }, N = S, D = (n("b21f"), Object(a["a"])(N, m, O, !1, null, null, null)), C = D.exports;

    function H(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }

    function L(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? H(Object(n), !0).forEach((function (t) {
          Object(b["a"])(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : H(Object(n)).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }

    var R = {
      name: "ScreenList", components: {ScreenItem: C}, mounted: function () {
      }, computed: L({}, Object(x["c"])(["SCREEN_LIST"]))
    }, P = R, T = (n("24bb"), Object(a["a"])(P, f, g, !1, null, null, null)), Y = T.exports, Z = function () {
      var e = this, t = e.$createElement, n = e._self._c || t;
      return n("div", {
        staticClass: "msg-input", class: {disabled: !e.LOCK}, on: {
          keypress: function (t) {
            return e.sendValue(e.value, t)
          }
        }
      }, [e._m(0), n("div", {staticClass: "msg-input__field"}, [n("input", {
        directives: [{
          name: "model",
          rawName: "v-model",
          value: e.value,
          expression: "value"
        }],
        ref: "input",
        attrs: {type: "text", disabled: e.LOCK, placeholder: e.PLACE_HOLDER},
        domProps: {value: e.value},
        on: {
          input: function (t) {
            t.target.composing || (e.value = t.target.value)
          }
        }
      })]), n("button", {
        staticClass: "msg-input__btn", attrs: {disabled: e.LOCK}, on: {
          click: function (t) {
            return e.sendValue(e.value, t)
          }
        }
      }, [n("svg", {
        attrs: {
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          width: "24",
          height: "24"
        }
      }, [n("path", {
        attrs: {
          fill: "#3b85f5",
          "fill-opacity": "1",
          d: "M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
        }
      })])])])
    }, M = [function () {
      var e = this, t = e.$createElement, r = e._self._c || t;
      return r("div", {staticClass: "msg-icon-smile"}, [r("img", {attrs: {src: n("4a19"), alt: ""}})])
    }];

    function I(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }

    function _(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? I(Object(n), !0).forEach((function (t) {
          Object(b["a"])(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }

    var B = {
      data: function () {
        return {value: ""}
      },
      watch: {
        LOCK: function () {
          if (!this.LOCK) {
            var e = document.querySelector(".msg-input input");
            setTimeout((function () {
              return e.focus()
            }), 200)
          }
        }
      },
      computed: _({}, Object(x["c"])(["LOCK", "SCREEN_INDEX", "PLACE_HOLDER"])),
      methods: _({}, Object(x["b"])(["setName"]), {
        sendValue: function (e, t) {
          if ("keypress" === t.type) {
            if (13 !== t.keyCode && 32 !== t.keyCode) return;
            if (!e) return void alert("Введите имя");
            this.setName([e, this.SCREEN_INDEX]), this.value = ""
          } else if ("click" === t.type) {
            if (!e) return void alert("Введите имя");
            this.setName([e, this.SCREEN_INDEX]), this.value = ""
          }
        }, scroll: function () {
          var e = document.querySelector(".container-scrollable"), t = document.querySelector(".screen-list");
          e.scrollTop = t.scrollHeight
        }
      }),
      beforeDestroy: function () {
      }
    }, G = B, q = (n("bdbb"), Object(a["a"])(G, Z, M, !1, null, null, null)), Q = q.exports, X = function () {
      var e = this, t = e.$createElement, n = e._self._c || t;
      return e.LOADING_ON ? n("div", {staticClass: "loader-row"}, [e._m(0)]) : e._e()
    }, U = [function () {
      var e = this, t = e.$createElement, n = e._self._c || t;
      return n("ul", {staticClass: "loader"}, [n("li", {staticClass: "loader-inner-1"}), n("li", {staticClass: "loader-inner-2"}), n("li", {staticClass: "loader-inner-3"})])
    }];

    function V(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter((function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable
        }))), n.push.apply(n, r)
      }
      return n
    }

    function z(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? V(Object(n), !0).forEach((function (t) {
          Object(b["a"])(e, t, n[t])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : V(Object(n)).forEach((function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }))
      }
      return e
    }

    var W = {
        data: function () {
          return {loading: !1}
        }, computed: z({}, Object(x["c"])(["LOADING_ON"]))
      }, F = W, K = (n("3645"), Object(a["a"])(F, X, U, !1, null, null, null)), J = K.exports,
      $ = {name: "app", components: {TheWrapper: d, ScreenList: Y, VInput: Q, VLoader: J}}, ee = $,
      te = (n("5c0b"), Object(a["a"])(ee, i, c, !1, null, null, null)), ne = te.exports,
      re = (n("7f7f"), n("96cf"), n("3b8d")), ie = n("768b");
    r["a"].use(x["a"]);
    var ce = new x["a"].Store({
      state: {
        screenList: [{
          id: 1,
          key: "FirstScreen",
          visible: !0,
          img: "first.jpg",
          msgOut: "\n          <p><strong>Привет! Хочешь кино о себе или даже сериал?</strong></p>\n          <p>Тебя уже ждут более 30 000 зрителей. Кто они ты узнаешь чуть позже.</p>\n          <p>Жми на кнопку со своей ролью и проходи на съемочную площадку!</p>",
          buttons: [{
            id: 1,
            text: "<strong><em>ЖЕНСКАЯ РОЛЬ</em></strong>",
            class: "btn-sex btn-sex--female",
            clicked: null
          }, {id: 2, text: "<strong><em>МУЖСКАЯ РОЛЬ</em></strong>", class: "btn-sex btn-sex--male", clicked: null}],
          answer: null
        }, {
          id: 2,
          key: "SecondScreen",
          visible: !1,
          img: "second.jpg",
          msgOut: "\n        <p>Добро пожаловать и давай знакомиться!</p>\n        <p>Подробнее о нас ты скоро узнаешь!</p>\n        <p>Как тебя зовут?\n           Напиши свое имя и жми на \n           синюю стрелку!</p>"
        }, {
          id: 3,
          key: "ThreeScreen",
          visible: !1,
          img: "chair.png",
          msgOut: "<p>awd, очень приятно! Пока мы готовимся начать, присаживайся поудобнее в мягкое кресло.</p>\n                 <p>Что будешь: чай, кофе, массаж)?</p>",
          buttons: [{id: 1, text: "Чай", class: "screen-btn--tea", clicked: null}, {
            id: 2,
            text: "Кофе",
            class: "screen-btn--coffee",
            clicked: null
          }, {id: 3, text: "Массаж", class: "screen-btn--massage", clicked: null}]
        }, {
          id: 4,
          key: "FourthScreen",
          visible: !1,
          img: "",
          msgOut: "",
          choices: [{
            id: 1,
            img: "tea.png",
            text: "<p>Вот тебе вкусный чаек. Сахар и лимончик добавь по вкусу.</p>\n                   <p>Чувствуешь руками тепло кружки?\n                    Согревает, стало теплее?</p>"
          }, {
            id: 2,
            img: "coffee.png",
            text: "<p>Вот тебе вкусный кофеек. Сливки и сахарок добавь по вкусу.</p>\n                   <p>Чувствуешь руками тепло кружки?\n                    Согревает, стало теплее?</p>"
          }, {
            id: 3,
            img: "oscar.png",
            text: '<p>\n                  Давай так, как заберешь "Оскар", обязательно\n                  сделаем массаж, а пока отложим эту процедуру\n                  на потом. Ок?</p>'
          }],
          buttons: [{id: 1, text: "Да", class: "screen-btn--primary", clicked: null}],
          answer: null
        }, {
          id: 5,
          key: "FifthScreen",
          visible: !1,
          img: "third.jpg",
          msgOut: "<p>awd, смотри! Мы не снимаем унылые сериалы.</p>\n                 <p>Твой фильм будет про успех и красивую жизнь! Основан на реальных событиях.</p>\n                 <p>Как тебе такая идея?</p>",
          buttons: [{id: 1, text: "Мне нравится!", class: "screen-btn--primary", clicked: null}, {
            id: 2,
            text: "Боюсь не справиться...",
            class: "screen-btn--darken",
            clicked: null
          }],
          answer: null
        }, {
          id: 6,
          key: "SixthScreen",
          visible: !1,
          img: "fourth.jpg",
          msgOut: " <p>Не сомневайся, у тебя все получится!</p>\n                  <p>Давай определимся, к какому финалу придет наш главный герой, то есть ты!</p>\n                  <p>Это и будет названием фильма. Выбирай!</p>",
          buttons: [{
            id: 1,
            text: "<em>ДЕНЬГИ НЕ ПАХНУТ, НО Я ПАХНУ ДЕНЬГАМИ<em>",
            class: "screen-btn--yellow",
            clicked: null
          }, {id: 2, text: "<em>Я СВОБОДНЫЙ И ОБЕСПЕЧЕННЫЙ</em>", class: "screen-btn--yellow", clicked: null}],
          answer: null
        }, {
          id: 7,
          key: "SevenScreen",
          visible: !1,
          img: null,
          msgOut: "<p>awd, отлично! Хороший выбор, ты молодец!</p>\n                 <p>Так как фильм будет основан на реальных\n                  событиях он начнется с той роли, которая у тебя\n                   сейчас в твоей жизни. Ок?</p>",
          buttons: [{id: 1, text: "Ок!", class: "screen-btn--primary", clicked: null}],
          answer: null
        }, {
          id: 8,
          key: "EightScreen",
          visible: !1,
          img: "fifth.jpg",
          msgOut: "<p>Кто ты сегодня, какая у тебя роль? Жми на соответствующую кнопку!</p>",
          buttons: [{
            id: 1,
            text: "<em>РАБОТНИК УСТАВШИЙ ОТ НАЙМА И ГРАФИКА</em>",
            class: "screen-btn--primary",
            clicked: null
          }, {
            id: 2,
            text: "<em>ПРЕДПРИНИМАТЕЛЬ С ПРОБЛЕМАМИ В БИЗНЕСЕ</em>",
            class: "screen-btn--primary",
            clicked: null
          }, {
            id: 3,
            text: "<em>БЕЗРАБОТНЫЙ В ПОИСКАХ РАБОТЫ</em>",
            class: "screen-btn--primary",
            clicked: null
          }, {id: 4, text: "<em>СТУДЕНТ С АМБИЦИЯМИ</em>", class: "screen-btn--primary", clicked: null}, {
            id: 5,
            text: "<em>В ПОИСКАХ ДОСТОЙНОЙ ПОДРАБОТКИ</em>",
            class: "screen-btn--primary",
            clicked: null
          }],
          answer: null
        }, {
          id: 9,
          key: "NinthScreen",
          visible: !1,
          img: null,
          msgOut: "<p>Отлично! Давай, мы расскажем тебе о своих планах.</p>\n                 <p>Вернее о наших с тобой совместных планах!</p>\n                 <p>Чем мы будем заниматься и как все будет происходить.</p>\n                 <p>Хорошо?</p>",
          buttons: [{id: 1, text: "Хорошо!", class: "screen-btn--primary", clicked: null}],
          answer: null
        }, {
          id: 10,
          key: "TenthScreen",
          visible: !1,
          img: "sixth.jpg",
          msgOut: "<p> Как правило в конце каждого фильма главный герой преодолев все трудности едет по шоссе у моря свободный и счастливый.</p>\n                 <p>Наша задача сделать такой фильм про тебя, где все это будет твоей реальностью.</p>\n                 <p>Как тебе план? Готов к такой работе?</p>",
          buttons: [{id: 1, text: "Да готов! Что от меня требуется!", class: "screen-btn--primary", clicked: null}],
          answer: null
        }, {
          id: 11,
          key: "EleventhScreen",
          visible: !1,
          img: null,
          msgOut: "<p>Наш фильм начнётся с роли, где ты: ПРЕДПРИНИМАТЕЛЬ С ПРОБЛЕМАМИ В БИЗНЕСЕ.</p>\n                 <p>Дальше пойдут события меняющие твое сегодняшнее положение!</p>\n                 <p>Давай уточним детали, будет 4 вопроса о том, какие трудности у тебя сегодня!</p>\n                 <p>Тебе лишь нужно нажать: «да» или «нет».</p>\n                 <p>Готов?</p>",
          buttons: [{id: 1, text: "Да готов!", class: "screen-btn--primary", clicked: null}],
          answer: null
        }, {
          id: 12,
          key: "TwelfthScreen",
          visible: !1,
          img: "seventh.jpg",
          msgOut: null,
          buttons: [{id: 1, text: "Да", class: "screen-btn--primary", clicked: null}, {
            id: 2,
            text: "Нет",
            class: "screen-btn--no",
            clicked: null
          }],
          answer: null
        }, {
          id: 13,
          key: "ThirteenthScreen",
          visible: !1,
          img: "eight.jpg",
          msgOut: null,
          buttons: [{id: 1, text: "Да", class: "screen-btn--primary", clicked: null}, {
            id: 2,
            text: "Нет",
            class: "screen-btn--no",
            clicked: null
          }],
          answer: null
        }, {
          id: 14,
          key: "FourteenthScreen",
          visible: !1,
          img: "nine.jpg",
          msgOut: null,
          buttons: [{id: 1, text: "Да", class: "screen-btn--primary", clicked: null}, {
            id: 2,
            text: "Нет",
            class: "screen-btn--no",
            clicked: null
          }],
          answer: null
        }, {
          id: 15,
          key: "FifteenthScreen",
          visible: !1,
          img: "tenth.jpg",
          msgOut: null,
          buttons: [{id: 1, text: "Да", class: "screen-btn--primary", clicked: null}, {
            id: 2,
            text: "Нет",
            class: "screen-btn--no",
            clicked: null
          }],
          answer: null
        }, {
          id: 16,
          key: "SixteenthScreen",
          visible: !1,
          img: null,
          msgOut: "<p><strong>Отлично, на этом этапе с нашим героем разобрались!</strong></p>\n                 <p>Теперь нам необходимо внести в твою жизнь\n                  события, которые развернут сюжет в более\n                   интересную и перспективную сторону.</p>\n                 <p>В нее должен ворваться герой! Догадываешься\n                  кто это?</p>",
          buttons: [{id: 1, text: "Нет", class: "screen-btn--primary", clicked: null}, {
            id: 2,
            text: "Нет, но хочу узнать!",
            class: "screen-btn--darken",
            clicked: null
          }],
          answer: null
        }, {
          id: 17,
          key: "SeventeenthScreen",
          visible: !1,
          img: "eleven.png",
          msgOut: "<p>В нее должен ворваться супергерой!</p>\n                 <p>Жми подробнее!\n                 Впереди много всего интересного!</p>",
          buttons: [{id: 1, text: "<strong><em>ПОДРОБНЕЕ!</em></strong>", class: "screen-btn--yellow", clicked: null}],
          answer: null
        }, {
          id: 18,
          key: "EighteenthScreen",
          visible: !1,
          img: null,
          video: '<iframe style="height:27vh;width: 95%;" class="embed-responsive-item" src="https://player.vimeo.com/video/401614444" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>',
          msgOut: "<p>Введи кодовое слово, которое мы подсказали тебе в данном видео!</p>",
          answer: null
        }, {
          id: 19,
          key: "NineteenthScreen",
          visible: !1,
          img: "twelve.jpg",
          msgOut: '<p>Жми: "ПЕРЕЙТИ В TELEGRAM"\n                  Нам пора начинать!</p>',
          buttons: [{
            id: 1,
            text: "<strong><em>ПЕРЕЙТИ В TELEGRAM</em></strong>",
            class: "screen-btn--primary",
            clicked: null
          }]
        }],
        answers: {role: null, name: null, drinks: {tea: null, coffee: null, massage: null}},
        lockInput: !0,
        name: "",
        index: 0,
        nextScreenIndex: null,
        placeholder: "Ваше сообщение",
        loading: !1
      }, mutations: {
        SET_INDEX: function (e, t) {
          e.index = t
        }, CHANGE_PLACEHOLDER: function (e, t) {
          1 === t ? e.placeholder = "Введите ваше имя" : 17 === t && (e.placeholder = "Введите кодовое слово")
        }, GET_ANSWER: function (e, t) {
          var n = Object(ie["a"])(t, 3), r = n[0], i = n[1], c = n[2];
          e.screenList[r].id === i && (e.screenList[r].answer = c)
        }, SHOW_NEXT_SCREEN: function (e, t) {
          e.screenList[t] && (e.index = t || e.index + 1, e.nextScreenIndex = e.index, e.screenList[e.nextScreenIndex].visible = !0, e.nextScreenIndex++)
        }, SHOW_LOADER: function (e, t) {
          e.loading = t
        }, UNLOCK_INPUT: function (e) {
          e.screenList[e.index].visible && (e.lockInput = !1)
        }, SET_NAME: function (e, t) {
          var n = Object(ie["a"])(t, 2), r = n[0], i = n[1];
          e.index = i, e.name = r, e.screenList[i].answer = r, e.lockInput = !0
        }, WHAT_YOU_WANT: function (e, t) {
          var n = Object(ie["a"])(t, 2), r = n[0], i = n[1], c = e.screenList[r];
          c.choices.forEach((function (e) {
            e.id === i && (c.img = e.img, c.msgOut = e.text), 3 === i && (c.buttons[0].text = "Ок)")
          }))
        }
      }, actions: {
        getAnswer: function () {
          var e = Object(re["a"])(regeneratorRuntime.mark((function e(t, n) {
            var r, i, c, s, l, o, u, a, p;
            return regeneratorRuntime.wrap((function (e) {
              while (1) switch (e.prev = e.next) {
                case 0:
                  r = t.commit, i = t.state, c = document.querySelector(".container-scrollable"), s = document.querySelector(".screen-list"), l = Object(ie["a"])(n, 4), o = l[0], u = l[1], a = l[2], p = l[3], r("SET_INDEX", o), new Promise((function (e) {
                    r("SHOW_LOADER", !0), setTimeout((function () {
                      r("SHOW_LOADER", !1), r("GET_ANSWER", [o, u, p]), setTimeout((function () {
                        c.scrollTop = s.scrollHeight
                      }), 100), e(!0)
                    }), 1e3)
                  })).then((function (e) {
                    return r("SHOW_LOADER", e), setTimeout((function () {
                      3 === u && (r("GET_ANSWER", [o, u, p]), setTimeout((function () {
                        c.scrollTop = s.scrollHeight
                      }), 100), r("WHAT_YOU_WANT", [u, a])), r("SHOW_NEXT_SCREEN", u)
                    }), 1300), !1
                  })).then((function (e) {
                    setTimeout((function () {
                      r("SHOW_LOADER", e), c.scrollTop = s.scrollHeight
                    }), 1500)
                  })), 1 !== o && 17 !== o || r("CHANGE_PLACEHOLDER", o), i.screenList[o].id === u && (1 !== u && 17 !== u || r("UNLOCK_INPUT"));
                case 7:
                case"end":
                  return e.stop()
              }
            }), e)
          })));

          function t(t, n) {
            return e.apply(this, arguments)
          }

          return t
        }(), setName: function (e, t) {
          var n = e.commit, r = (e.state, Object(ie["a"])(t, 2)), i = (r[0], r[1]),
            c = document.querySelector(".container-scrollable"), s = document.querySelector(".screen-list");
          1 === i && n("SET_NAME", t), n("SHOW_LOADER", !0), setTimeout((function () {
            n("SHOW_NEXT_SCREEN", i + 1), n("SHOW_LOADER", !1)
          }), 800), setTimeout((function () {
            return c.scrollTop = s.scrollHeight
          }), 1e3)
        }, sendMsg: function (e, t) {
          var n = e.commit, r = e.state;
          r.screenList && n("SEND_MSG", t)
        }
      }, getters: {
        SCREEN_LIST: function (e) {
          return e.screenList
        }, PLACE_HOLDER: function (e) {
          return e.placeholder
        }, LOCK: function (e) {
          return e.lockInput
        }, USER_NAME: function (e) {
          return e.name
        }, SCREEN_INDEX: function (e) {
          return e.index
        }, LOADING_ON: function (e) {
          return e.loading
        }
      }
    });
    r["a"].config.productionTip = !1, new r["a"]({
      store: ce, render: function (e) {
        return e(ne)
      }
    }).$mount("#app")
  }, 5746: function (e, t, n) {
  }, "5c0b": function (e, t, n) {
    "use strict";
    var r = n("e332"), i = n.n(r);
    i.a
  }, "5d65": function (e, t, n) {
    e.exports = n.p + "./img/twelve.fa18de8b.jpg"
  }, 6737: function (e, t, n) {
    e.exports = n.p + "./img/third.c91e2355.jpg"
  }, 7357: function (e, t, n) {
    e.exports = n.p + "./img/seventh.eba58a01.jpg"
  }, 7785: function (e, t, n) {
    "use strict";
    var r = n("5746"), i = n.n(r);
    i.a
  }, "77e3": function (e, t, n) {
    e.exports = n.p + "./img/chair.0cc3fdac.png"
  }, 8590: function (e, t, n) {
    e.exports = n.p + "./img/eleven.8d664ab4.png"
  }, "89a0": function (e, t, n) {
    e.exports = n.p + "./img/nine.0db0dd0c.jpg"
  }, "9cbf": function (e, t, n) {
    e.exports = n.p + "./img/sixth.32344285.jpg"
  }, b21f: function (e, t, n) {
    "use strict";
    var r = n("18f2"), i = n.n(r);
    i.a
  }, b804: function (e, t, n) {
  }, bade: function (e, t, n) {
    e.exports = n.p + "./img/oscar.3d7b9e60.png"
  }, bb6e: function (e, t, n) {
    var r = {
      "./chair.png": "77e3",
      "./coffee.png": "0adf",
      "./eight.jpg": "e2ac",
      "./eleven.png": "8590",
      "./fifth.jpg": "178f",
      "./first.jpg": "f976",
      "./fourth.jpg": "c202",
      "./nine.jpg": "89a0",
      "./oscar.png": "bade",
      "./second.jpg": "c7a4",
      "./seventh.jpg": "7357",
      "./sixth.jpg": "9cbf",
      "./tea.png": "e670",
      "./tenth.jpg": "4232",
      "./third.jpg": "6737",
      "./twelve.jpg": "5d65"
    };

    function i(e) {
      var t = c(e);
      return n(t)
    }

    function c(e) {
      if (!n.o(r, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw t.code = "MODULE_NOT_FOUND", t
      }
      return r[e]
    }

    i.keys = function () {
      return Object.keys(r)
    }, i.resolve = c, e.exports = i, i.id = "bb6e"
  }, bdbb: function (e, t, n) {
    "use strict";
    var r = n("1b05"), i = n.n(r);
    i.a
  }, c202: function (e, t, n) {
    e.exports = n.p + "./img/fourth.16362190.jpg"
  }, c7a4: function (e, t, n) {
    e.exports = n.p + "./img/second.4591ac81.jpg"
  }, de01: function (e, t, n) {
  }, e2ac: function (e, t, n) {
    e.exports = n.p + "./img/eight.49e8614b.jpg"
  }, e332: function (e, t, n) {
  }, e670: function (e, t, n) {
    e.exports = n.p + "./img/tea.fa3f4927.png"
  }, f976: function (e, t, n) {
    e.exports = n.p + "./img/first.6d826f97.jpg"
  }
});
//# sourceMappingURL=app.a6373ec6.js.map