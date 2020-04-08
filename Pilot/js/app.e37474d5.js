(function (t) {
  function e(e) {
    for (var a, s, l = e[0], r = e[1], c = e[2], u = 0, d = []; u < l.length; u++) s = l[u], Object.prototype.hasOwnProperty.call(i, s) && i[s] && d.push(i[s][0]), i[s] = 0;
    for (a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    f && f(e);
    while (d.length) d.shift()();
    return o.push.apply(o, c || []), n()
  }

  function n() {
    for (var t, e = 0; e < o.length; e++) {
      for (var n = o[e], a = !0, s = 1; s < n.length; s++) {
        var l = n[s];
        0 !== i[l] && (a = !1)
      }
      a && (o.splice(e--, 1), t = r(r.s = n[0]))
    }
    return t
  }

  var a = {}, s = {app: 0}, i = {app: 0}, o = [];

  function l(t) {
    return r.p + "js/" + ({}[t] || t) + "." + {"chunk-025b7740": "1674da2e", "chunk-15a4afe5": "8006a49d"}[t] + ".js"
  }

  function r(e) {
    if (a[e]) return a[e].exports;
    var n = a[e] = {i: e, l: !1, exports: {}};
    return t[e].call(n.exports, n, n.exports, r), n.l = !0, n.exports
  }

  r.e = function (t) {
    var e = [], n = {"chunk-025b7740": 1, "chunk-15a4afe5": 1};
    s[t] ? e.push(s[t]) : 0 !== s[t] && n[t] && e.push(s[t] = new Promise((function (e, n) {
      for (var a = "css/" + ({}[t] || t) + "." + {
        "chunk-025b7740": "f4c0f13f",
        "chunk-15a4afe5": "bad00956"
      }[t] + ".css", i = r.p + a, o = document.getElementsByTagName("link"), l = 0; l < o.length; l++) {
        var c = o[l], u = c.getAttribute("data-href") || c.getAttribute("href");
        if ("stylesheet" === c.rel && (u === a || u === i)) return e()
      }
      var d = document.getElementsByTagName("style");
      for (l = 0; l < d.length; l++) {
        c = d[l], u = c.getAttribute("data-href");
        if (u === a || u === i) return e()
      }
      var f = document.createElement("link");
      f.rel = "stylesheet", f.type = "text/css", f.onload = e, f.onerror = function (e) {
        var a = e && e.target && e.target.src || i, o = new Error("Loading CSS chunk " + t + " failed.\n(" + a + ")");
        o.code = "CSS_CHUNK_LOAD_FAILED", o.request = a, delete s[t], f.parentNode.removeChild(f), n(o)
      }, f.href = i;
      var p = document.getElementsByTagName("head")[0];
      p.appendChild(f)
    })).then((function () {
      s[t] = 0
    })));
    var a = i[t];
    if (0 !== a) if (a) e.push(a[2]); else {
      var o = new Promise((function (e, n) {
        a = i[t] = [e, n]
      }));
      e.push(a[2] = o);
      var c, u = document.createElement("script");
      u.charset = "utf-8", u.timeout = 120, r.nc && u.setAttribute("nonce", r.nc), u.src = l(t);
      var d = new Error;
      c = function (e) {
        u.onerror = u.onload = null, clearTimeout(f);
        var n = i[t];
        if (0 !== n) {
          if (n) {
            var a = e && ("load" === e.type ? "missing" : e.type), s = e && e.target && e.target.src;
            d.message = "Loading chunk " + t + " failed.\n(" + a + ": " + s + ")", d.name = "ChunkLoadError", d.type = a, d.request = s, n[1](d)
          }
          i[t] = void 0
        }
      };
      var f = setTimeout((function () {
        c({type: "timeout", target: u})
      }), 12e4);
      u.onerror = u.onload = c, document.head.appendChild(u)
    }
    return Promise.all(e)
  }, r.m = t, r.c = a, r.d = function (t, e, n) {
    r.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: n})
  }, r.r = function (t) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
  }, r.t = function (t, e) {
    if (1 & e && (t = r(t)), 8 & e) return t;
    if (4 & e && "object" === typeof t && t && t.__esModule) return t;
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var a in t) r.d(n, a, function (e) {
      return t[e]
    }.bind(null, a));
    return n
  }, r.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"]
    } : function () {
      return t
    };
    return r.d(e, "a", e), e
  }, r.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, r.p = "/", r.oe = function (t) {
    throw console.error(t), t
  };
  var c = window["webpackJsonp"] = window["webpackJsonp"] || [], u = c.push.bind(c);
  c.push = e, c = c.slice();
  for (var d = 0; d < c.length; d++) e(c[d]);
  var f = u;
  o.push([0, "chunk-vendors"]), n()
})({
  0: function (t, e, n) {
    t.exports = n("56d7")
  }, "0041": function (t, e, n) {
  }, "09c6": function (t, e, n) {
  }, "0c00": function (t, e, n) {
    "use strict";
    var a = n("09c6"), s = n.n(a);
    s.a
  }, "0fdd": function (t, e, n) {
  }, 1188: function (t, e, n) {
    "use strict";
    var a = function () {
      var t = this, e = t.$createElement, n = t._self._c || e;
      return n("v-input-wrap", {
        attrs: {label: t.label, labelClass: t.labelClass, id: t.id},
        scopedSlots: t._u([{
          key: "element", fn: function () {
            return [n("textarea", {
              staticClass: "v-textarea v-text",
              class: t.customClass ? t.customClass : "",
              attrs: {id: t.id, placeholder: t.placeholder},
              domProps: {value: t.value},
              on: {input: t.updateTextArea}
            })]
          }, proxy: !0
        }])
      })
    }, s = [], i = n("d163"), o = {
      components: {VInputWrap: i["a"]},
      props: {
        label: String,
        labelClass: {type: String, default: ""},
        customClass: {type: String, default: ""},
        id: String,
        placeholder: String,
        value: String
      },
      methods: {
        updateTextArea: function (t) {
          this.$emit("input", t.target.value)
        }
      }
    }, l = o, r = (n("4f21"), n("2877")), c = Object(r["a"])(l, a, s, !1, null, null, null);
    e["a"] = c.exports
  }, "14a4": function (t, e, n) {
    "use strict";
    var a = n("0fdd"), s = n.n(a);
    s.a
  }, 1714: function (t, e, n) {
    t.exports = n.p + "img/1.50658aa0.png"
  }, 1717: function (t, e, n) {
    t.exports = n.p + "img/4.11175770.png"
  }, 1921: function (t, e, n) {
    var a = {
      "./ModalAutoDialogs": ["4421", "chunk-15a4afe5"],
      "./ModalAutoDialogs.vue": ["4421", "chunk-15a4afe5"],
      "./ModalInstruction": ["3d30"],
      "./ModalInstruction.vue": ["3d30"],
      "./ModalTargetSettings": ["7535", "chunk-025b7740"],
      "./ModalTargetSettings.vue": ["7535", "chunk-025b7740"],
      "./ModalWrap": ["33c7"],
      "./ModalWrap.vue": ["33c7"]
    };

    function s(t) {
      if (!n.o(a, t)) return Promise.resolve().then((function () {
        var e = new Error("Cannot find module '" + t + "'");
        throw e.code = "MODULE_NOT_FOUND", e
      }));
      var e = a[t], s = e[0];
      return Promise.all(e.slice(1).map(n.e)).then((function () {
        return n(s)
      }))
    }

    s.keys = function () {
      return Object.keys(a)
    }, s.id = "1921", t.exports = s
  }, "1c20": function (t, e, n) {
    "use strict";
    var a = function () {
      var t = this, e = t.$createElement, n = t._self._c || e;
      return n("v-input-wrap", {
        attrs: {label: t.label, labelClass: t.labelClass, id: t.id},
        scopedSlots: t._u([{
          key: "element", fn: function () {
            return [n("input", {
              staticClass: "v-text",
              class: t.customClass ? t.customClass : "",
              attrs: {type: "text", id: t.id, placeholder: t.placeholder},
              domProps: {value: t.value},
              on: {input: t.updateValue}
            })]
          }, proxy: !0
        }])
      })
    }, s = [], i = n("d163"), o = {
      name: "VTextField",
      components: {VInputWrap: i["a"]},
      props: {
        id: String,
        label: String,
        labelClass: String,
        customClass: {type: String, default: ""},
        placeholder: String,
        type: {type: String, default: "text"},
        value: String
      },
      data: function () {
        return {}
      },
      computed: {},
      methods: {
        updateValue: function (t) {
          return this.$emit("input", t.target.value)
        }
      }
    }, l = o, r = n("2877"), c = Object(r["a"])(l, a, s, !1, null, null, null);
    e["a"] = c.exports
  }, "1f7d": function (t, e, n) {
  }, "236a": function (t, e, n) {
    "use strict";
    var a = function () {
      var t = this, e = t.$createElement, n = t._self._c || e;
      return n("v-btn", {
        class: ["v-btn-" + t.btnStyle, "v-button"],
        attrs: {typeBtn: t.type},
        on: {
          click: function (e) {
            return t.$emit("click")
          }
        }
      }, [t._t("default", [t._v("Сохранить")])], 2)
    }, s = [], i = n("4523"), o = {
      props: {type: String, btnStyle: {type: String, default: "reg"}, modified: {type: Boolean, default: !1}},
      components: {VBtn: i["a"]},
      computed: {
        customClass: function () {
          return this.modified ? "v-btn-".concat(this.modified) : ""
        }
      }
    }, l = o, r = (n("7bc3"), n("2877")), c = Object(r["a"])(l, a, s, !1, null, null, null);
    e["a"] = c.exports
  }, "2b42": function (t, e, n) {
  }, "33c7": function (t, e, n) {
    "use strict";
    n.r(e);
    var a = function () {
      var t = this, e = t.$createElement, n = t._self._c || e;
      return n("div", {
        ref: "modalBg",
        staticClass: "modal-bg",
        on: {click: t.close}
      }, [n("div", {class: [t.typeModalClass, t.modalClass]}, [n("span", {
        ref: "modalClose",
        staticClass: "modal-close"
      }, [t._v("×")]), n("div", {staticClass: "modal-container"}, [t._t("default")], 2)])])
    }, s = [], i = {
      name: "Modal", props: {video: Boolean, modalClass: String}, mounted: function () {
        window.addEventListener("keyup", this.keyClose)
      }, computed: {
        typeModalClass: function () {
          return this.video ? "modal-video" : "modal-wrap"
        }
      }, methods: {
        keyClose: function (t) {
          27 === t.keyCode && this.$emit("close")
        }, close: function (t) {
          if (t.target !== this.$refs.modalBg && t.target !== this.$refs.modalClose) return !1;
          this.$emit("close")
        }
      }, destroyed: function () {
        window.removeEventListener("keyup", this.keyClose)
      }
    }, o = i, l = (n("fecf"), n("2877")), r = Object(l["a"])(o, a, s, !1, null, null, null);
    e["default"] = r.exports
  }, "34bd": function (t, e, n) {
  }, "37ec": function (t, e, n) {
  }, "386d": function (t, e, n) {
    "use strict";
    var a = n("cdf0"), s = n.n(a);
    s.a
  }, "3d30": function (t, e, n) {
    "use strict";
    n.r(e);
    var a = function () {
      var t = this, e = t.$createElement, n = t._self._c || e;
      return n("modal-wrap", {
        attrs: {video: "", role: t.modalLink}, on: {
          close: function (e) {
            return t.$emit("close")
          }
        }
      }, [n("div", {staticClass: "modal-custom__inner-video"}, [n("iframe", {
        attrs: {
          width: "100%",
          height: "100%",
          src: "https://www.youtube.com/embed/" + this.modalLink,
          frameborder: "0",
          allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
          allowfullscreen: ""
        }
      })])])
    }, s = [], i = (n("ac6a"), n("5df3"), n("f400"), n("33c7")), o = {
      name: "Modal",
      components: {ModalWrap: i["default"]},
      props: {id: {type: String, require: !1}},
      data: function () {
        return {modalLinks: null}
      },
      created: function () {
        this.modalLinks = new Map([["vk", "MUFvuxkbAvQ"], ["greeting", "Lb19C23ApJQ"], ["dialogs", "zE0HKLnXjxI"], ["target", "aZVNVCkGe60"], ["reposting", "AISR3ETAAQ4"], ["accounts", "mgULMnkF3P4"], ["vkGroup", "flGc3uzOnKw"]])
      },
      computed: {
        modalLink: function () {
          return this.id ? this.modalLinks.get(this.id) : this.modalLinks.get(this.$store.getters.modalId)
        }
      }
    }, l = o, r = (n("779f"), n("2877")), c = Object(r["a"])(l, a, s, !1, null, null, null);
    e["default"] = c.exports
  }, "41c5": function (t, e, n) {
  }, 4523: function (t, e, n) {
    "use strict";
    var a = function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("button", {
          staticClass: "v-btn", attrs: {type: t.typeBtn}, on: {
            click: function (e) {
              return t.$emit("click")
            }, touchmove: function (e) {
              return t.$emit("click")
            }
          }
        }, [n("span", [t._t("default")], 2)])
      }, s = [], i = {name: "VButton", props: {typeBtn: {type: String, default: "button"}}}, o = i,
      l = (n("c270"), n("2877")), r = Object(l["a"])(o, a, s, !1, null, null, null);
    e["a"] = r.exports
  }, "459c": function (t, e, n) {
  }, "4c0a": function (t, e, n) {
    "use strict";
    var a = function () {
      var t = this, e = t.$createElement, n = t._self._c || e;
      return n("v-control-wrap", {
        attrs: {type: "checkbox", label: t.label, labelClass: t.labelClass, id: t.id},
        scopedSlots: t._u([{
          key: "input", fn: function () {
            return [n("input", {
              staticClass: "v-checkbox v-input",
              attrs: {type: "checkbox", id: t.id},
              domProps: {value: t.value, checked: t.shouldBeChecked},
              on: {change: t.updateInput}
            })]
          }, proxy: !0
        }])
      })
    }, s = [], i = n("75fc"), o = (n("6762"), n("2fdb"), n("c5f6"), n("f4b0")), l = {
      model: {prop: "modelValue", event: "change"},
      components: {VControlWrap: o["a"]},
      props: {
        label: String,
        labelClass: {type: String, default: ""},
        modelValue: {default: !1},
        value: [String, Number],
        id: {type: String},
        trueValue: {default: !0},
        falseValue: {default: !1}
      },
      computed: {
        shouldBeChecked: function () {
          return this.modelValue instanceof Array ? this.modelValue.includes(this.value) : this.modelValue === this.trueValue
        }, model: {
          get: function () {
            return this.value
          }, set: function (t) {
            this.$emit("input", t)
          }
        }
      },
      methods: {
        updateInput: function (t) {
          var e = t.target.checked;
          if (this.modelValue instanceof Array) {
            var n = Object(i["a"])(this.modelValue);
            e ? n.push(this.value) : n.splice(n.indexOf(this.value), 1), this.$emit("change", n)
          } else this.$emit("change", e ? this.trueValue : this.falseValue)
        }
      }
    }, r = l, c = (n("7d58"), n("2877")), u = Object(c["a"])(r, a, s, !1, null, null, null);
    e["a"] = u.exports
  }, "4e47": function (t, e, n) {
    "use strict";
    var a = n("459c"), s = n.n(a);
    s.a
  }, "4f21": function (t, e, n) {
    "use strict";
    var a = n("f970"), s = n.n(a);
    s.a
  }, "50da": function (t, e, n) {
  }, "56d7": function (t, e, n) {
    "use strict";
    n.r(e);
    n("cadf"), n("551c"), n("f751"), n("097d");
    var a, s, i = n("2b0e"), o = function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {staticClass: "v-app-container", attrs: {id: "app"}}, [n("router-view")], 1)
      }, l = [], r = {components: {}}, c = r, u = (n("5c0b"), n("2877")),
      d = Object(u["a"])(c, o, l, !1, null, null, null), f = d.exports, p = n("4a7a"), m = n.n(p), b = n("8c4f"),
      v = function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {staticClass: "wrapper"}, [n("the-nav-panel"), n("div", {staticClass: "container-limiter"}, [n("div", {staticClass: "content-wrapper"}, [n("transition", {
          attrs: {
            name: "slide-appearance",
            appear: ""
          }
        }, [n("v-autopilot-template")], 1)], 1)]), t.modalIsOpen ? n(t.modalComponent, {
          tag: "component",
          on: {close: t.closeModal}
        }) : t._e()], 1)
      }, h = [], g = (n("8e6e"), n("ac6a"), n("456d"), n("bd86")), A = function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {staticClass: "v-nav-panel"}, [n("the-sidebar", {class: {hide: t.isHide}}), n("the-header", {class: {hide: t.isHide}})], 1)
      }, C = [], y = function () {
        var t = this, e = t.$createElement;
        t._self._c;
        return t._m(0)
      }, w = [function () {
        var t = this, e = t.$createElement, a = t._self._c || e;
        return a("aside", {staticClass: "sidebar"}, [a("span", {staticClass: "burger"}, [a("span", {staticClass: "burger-box"}, [a("span", {staticClass: "burger-inner"})])]), a("div", {staticClass: "sidebar__logo"}, [a("a", {
          staticClass: "sidebar__logo-link",
          attrs: {href: "#!", target: "_blank"}
        }, [t._v("platform")])]), a("nav", {staticClass: "sidebar-nav"}, [a("ul", {staticClass: "sidebar-menu"}, [a("li", {staticClass: "sidebar-menu__item"}, [a("a", {
          staticClass: "sidebar-menu__link",
          attrs: {href: "#!"}
        }, [a("span", {staticClass: "sidebar-menu__img"}, [a("img", {
          attrs: {
            src: n("5d28"),
            alt: ""
          }
        })]), a("span", {staticClass: "sidebar-nav__text"}, [t._v("показатели")])])]), a("li", {staticClass: "sidebar-menu__item"}, [a("a", {
          staticClass: "sidebar-menu__link",
          attrs: {href: "#!"}
        }, [a("span", {staticClass: "sidebar-menu__img"}, [a("img", {
          attrs: {
            src: n("1714"),
            alt: ""
          }
        })]), a("span", {staticClass: "sidebar-menu__text"}, [t._v("мои данные")])])]), a("li", {staticClass: "sidebar-menu__item"}, [a("a", {
          staticClass: "sidebar-menu__link",
          attrs: {href: "#!"}
        }, [a("span", {staticClass: "sidebar-menu__img"}, [a("img", {
          attrs: {
            src: n("c44c"),
            alt: ""
          }
        })]), a("span", {staticClass: "sidebar-menu__text"}, [t._v("материалы и инструменты")])])]), a("li", {staticClass: "sidebar-menu__item"}, [a("a", {
          staticClass: "sidebar-menu__link",
          attrs: {href: "#!"}
        }, [a("span", {staticClass: "sidebar-menu__img"}, [a("img", {
          attrs: {
            src: n("1717"),
            alt: ""
          }
        })]), a("span", {staticClass: "sidebar-menu__text"}, [t._v("структура")])])])])])])
      }], _ = {}, k = _, x = (n("4e47"), Object(u["a"])(k, y, w, !1, null, null, null)), O = x.exports, S = function () {
        var t = this, e = t.$createElement;
        t._self._c;
        return t._m(0)
      }, T = [function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("header", {staticClass: "header"}, [n("div", {staticClass: "user-account"}, [n("span", {staticClass: "user-account__name"}, [t._v("dev dev")]), n("span", {staticClass: "user-account__id"}, [t._v("ID: 777-094960")])]), n("div", {staticClass: "user-rating"})])
      }], E = {}, V = E, j = (n("83e3"), Object(u["a"])(V, S, T, !1, null, null, null)), I = j.exports, M = {
        components: {TheSidebar: O, TheHeader: I}, data: function () {
          return {isHide: !1}
        }, mounted: function () {
          window.addEventListener("scroll", this.toHide)
        }, methods: {
          toHide: function () {
            pageYOffset > 200 ? this.isHide = !0 : this.isHide = !1
          }
        }, beforeDestroy: function () {
          window.removeEventListener("scroll", this.toHide)
        }
      }, B = M, R = (n("d846"), Object(u["a"])(B, A, C, !1, null, null, null)), L = R.exports, P = function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("form", {
          staticClass: "autopilot-form",
          attrs: {action: "#!", method: "GET"}
        }, [n("h1", {staticClass: "content-ttl"}, [n("a", {
          staticClass: "content-ttl__link",
          attrs: {href: "#!"}
        }, [n("svg", {
          staticClass: "icon icon-arrow-back content-ttl__icon",
          attrs: {width: "1em", height: "1em"}
        }, [n("use", {attrs: {"xlink:href": "#icon-arrow-back"}}, [n("svg", {
          attrs: {
            id: "icon-arrow-back",
            viewBox: "0 0 24 24"
          }
        }, [n("path", {
          attrs: {
            d: "M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z",
            fill: "currentColor"
          }
        })])])]), n("span", [t._v("Автопилот")])])]), n("v-block", {attrs: {"block-name": "account"}}, [n("v-text-field", {
          staticClass: "input-wrap",
          attrs: {
            type: "text",
            label: "ID основного аккаунта",
            "label-class": "id-label",
            id: "for-account",
            placeholder: "например: 123456789"
          },
          model: {
            value: t.model.primaryAccountId, callback: function (e) {
              t.$set(t.model, "primaryAccountId", e)
            }, expression: "model.primaryAccountId"
          }
        }), n("v-instructions", {
          attrs: {text: "Где брать ID основного аккаунта VK?"}, on: {
            click: function (e) {
              return t.openInstructionsModal("vk")
            }
          }
        }), n("v-button", {
          attrs: {disabled: t.primaryAccountId.length <= 5}, on: {
            click: function (e) {
              return t.saveSelectVal(t.primaryAccountId)
            }
          }
        })], 1), n("v-block", {
          attrs: {
            "block-name": "greeting",
            "block-title": "Приветствие"
          }
        }, [n("v-tabs", {
          attrs: {data: t.greetingTabData},
          on: {blur: t.saveGreeting}
        }), n("v-instructions", {
          on: {
            click: function (e) {
              return t.openInstructionsModal("greeting")
            }
          }
        })], 1), n("v-block", {
          attrs: {
            "block-name": "dialogs",
            "block-title": "Автодиалоги"
          }
        }, [n("v-checkbox", {
          attrs: {id: "for-dialogs", label: "Использовать автодиалоги", value: "Джек"},
          model: {
            value: t.model.useAutoDialogs, callback: function (e) {
              t.$set(t.model, "useAutoDialogs", e)
            }, expression: "model.useAutoDialogs"
          }
        }), n("transition", {
          attrs: {
            name: "slide-appearance",
            mode: "out-in"
          }
        }, [t.model.useAutoDialogs ? n("div", {staticClass: "block-dropdown"}, [n("v-button", {
          staticClass: "mt-20",
          attrs: {"btn-style": "lg"},
          on: {
            click: function (e) {
              return t.showModal("ModalAutoDialogs")
            }
          }
        }, [t._v("настройка диалогов\n\t\t\t\t")])], 1) : t._e()]), n("v-instructions", {
          on: {
            click: function (e) {
              return t.openInstructionsModal("dialogs")
            }
          }
        })], 1), n("v-block", {
          attrs: {
            "block-name": "target",
            "block-title": "Настройка целевой аудитории"
          }
        }, [n("div", {staticClass: "v-box"}, [n("v-radio", {
          key: "own-ta",
          attrs: {id: "for-target1", label: "Использовать свою ЦА", value: "one"},
          model: {
            value: t.model.whatToUseInTargetSettings, callback: function (e) {
              t.$set(t.model, "whatToUseInTargetSettings", e)
            }, expression: "model.whatToUseInTargetSettings"
          }
        }), n("transition", {
          attrs: {
            name: "smooth-fast",
            mode: "out-in"
          }
        }, [t.useYourAuditory ? n("div", {staticClass: "block-dropdown"}, [n("div", {staticClass: "block-dropdown__title"}, [t._v("Количество отправляемых заявок в друзья")]), n("div", {staticClass: "input-group"}, [n("v-text-field", {
          staticClass: "input-wrap",
          attrs: {type: "text", placeholder: "от"},
          model: {
            value: t.model.targetAuditoryOwnFrom, callback: function (e) {
              t.$set(t.model, "targetAuditoryOwnFrom", e)
            }, expression: "model.targetAuditoryOwnFrom"
          }
        }), n("v-text-field", {
          staticClass: "input-wrap",
          attrs: {type: "text", placeholder: "до"},
          model: {
            value: t.model.targetAuditoryOwnTo, callback: function (e) {
              t.$set(t.model, "targetAuditoryOwnTo", e)
            }, expression: "model.targetAuditoryOwnTo"
          }
        })], 1), n("v-button", {
          attrs: {disabled: !t.fromToValidation}, on: {
            click: function (e) {
              return t.saveSelectVal([t.model.targetAuditoryOwnFrom, t.model.targetAuditoryOwnTo])
            }
          }
        }), n("v-button", {
          staticClass: "mt-20", attrs: {"btn-style": "lg"}, on: {
            click: function (e) {
              return t.showModal("ModalTargetSettings")
            }
          }
        }, [t._v("настройка ца\n\t\t\t\t\t")])], 1) : t._e()])], 1), n("div", {staticClass: "v-box"}, [n("v-radio", {
          key: "auto-ta",
          attrs: {id: "for-target2", label: "Использовать автоматически собранную ЦА", value: "two"},
          model: {
            value: t.model.whatToUseInTargetSettings, callback: function (e) {
              t.$set(t.model, "whatToUseInTargetSettings", e)
            }, expression: "model.whatToUseInTargetSettings"
          }
        }), n("transition", {
          attrs: {
            name: "smooth-fast",
            mode: "out-in"
          }
        }, [t.useCollectedAuditory ? n("div", {staticClass: "block-dropdown"}, [n("div", {staticClass: "block-dropdown__title"}, [t._v("Количество отправляемых заявок в друзья")]), n("v-control-select", {
          attrs: {
            search: "",
            options: t.selectOptionsAuto
          }, on: {selection: t.selection}
        }), n("v-button", {
          staticClass: "mt-20",
          attrs: {"btn-style": "reg", disabled: !t.selected.length},
          on: {
            click: function (e) {
              return t.saveSelectVal(t.selected)
            }
          }
        })], 1) : t._e()])], 1), n("div", {staticClass: "v-box"}, [n("v-radio", {
          key: "friend-ta",
          attrs: {id: "for-target3", label: "Рассылка по рекомендованным друзьям", value: "three"},
          model: {
            value: t.model.whatToUseInTargetSettings, callback: function (e) {
              t.$set(t.model, "whatToUseInTargetSettings", e)
            }, expression: "model.whatToUseInTargetSettings"
          }
        }), n("transition", {
          attrs: {
            name: "smooth-fast",
            mode: "out-in"
          }
        }, [t.useRecommendMailing ? n("div", {staticClass: "block-dropdown"}, [n("div", {staticClass: "block-dropdown__title"}, [t._v("Количество отправляемых заявок в друзья")]), n("v-control-select", {
          attrs: {options: t.selectOptionsFriend},
          on: {selection: t.selection}
        }), n("v-button", {
          staticClass: "mt-20",
          attrs: {disabled: !t.selected.length, "btn-style": "reg"},
          on: {
            click: function (e) {
              return t.saveSelectVal(t.selected)
            }
          }
        })], 1) : t._e()])], 1), n("v-instructions", {
          on: {
            click: function (e) {
              return t.openInstructionsModal("target")
            }
          }
        })], 1), n("v-block", {
          attrs: {
            "block-name": "auto-post",
            "block-title": "Репостинг и автопостинг"
          }
        }, [n("v-checkbox", {
          key: "key-reposting",
          attrs: {id: "for-reposting", label: "Использовать репостинг и автопостинг"},
          model: {
            value: t.model.useAutoReposting, callback: function (e) {
              t.$set(t.model, "useAutoReposting", e)
            }, expression: "model.useAutoReposting"
          }
        }), n("transition", {attrs: {name: "smooth-fast"}}, [t.model.useAutoReposting ? n("div", [n("v-info", {attrs: {info: "Внимание! В репостинге учавствуют только женские аккаунты, контент только женский!"}})], 1) : t._e()]), n("v-instructions", {
          on: {
            click: function (e) {
              return t.openInstructionsModal("reposting")
            }
          }
        })], 1), n("v-block", {
          attrs: {
            "block-name": "add-account",
            "block-title": "Добавить аккаунты (" + t.counter + "/" + t.counter + ")"
          }
        }, [n("v-switcher"), n("v-checkbox", {
          key: "fill-accounts",
          attrs: {id: "for-fill-accounts", label: "Заполнить аккаунт(ы)"},
          model: {
            value: t.model.fillInAccounts, callback: function (e) {
              t.$set(t.model, "fillInAccounts", e)
            }, expression: "model.fillInAccounts"
          }
        }), n("transition", {attrs: {name: "smooth-fast"}}, [t.model.fillInAccounts ? n("v-info", {attrs: {info: "Внимание! в заполнении учавствуют только женские аккаунты, контент только\n\t\t\t\tженский!"}}) : t._e()], 1), n("v-button", {
          staticClass: "mt-20",
          attrs: {disabled: !t.model.fillInAccounts}
        }, [t._v("Добавить")]), n("v-instructions", {
          on: {
            click: function (e) {
              return t.openInstructionsModal("accounts")
            }
          }
        })], 1), n("transition", {attrs: {name: "slide-appearance", mode: "out-in"}}, [n("table-account")], 1)], 1)
      }, D = [], F = n("1c20"), U = n("1188"), H = n("236a"), q = function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
          staticClass: "v-block",
          class: t.customClass
        }, [t.blockTitle ? n("h3", {staticClass: "v-block-title"}, [t._v("\n\t\t" + t._s(t.blockTitle) + "\n\t")]) : t._e(), t._t("default")], 2)
      }, N = [], Y = {
        props: {blockName: String, blockTitle: String}, computed: {
          customClass: function () {
            return this.blockName ? "block-".concat(this.blockName) : ""
          }
        }
      }, K = Y, Q = (n("5f73"), Object(u["a"])(K, q, N, !1, null, null, null)), W = Q.exports, z = function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {staticClass: "v-tab"}, [n("div", {staticClass: "v-tab-container"}, t._l(t.data, (function (e, a, s) {
          return n("button", {
            key: a,
            staticClass: "v-tab-title",
            class: {"is-active": s === t.currentTab},
            on: {
              click: function (e) {
                return e.preventDefault(), t.selectTab(s)
              }
            }
          }, [t._v(t._s(e.title) + "\n\t\t")])
        })), 0), n("transition", {attrs: {name: "slide-appearance", mode: "out-in"}}, t._l(t.data, (function (e, a, s) {
          return t.currentTab === s ? n("div", {
            key: s,
            staticClass: "v-tab-content"
          }, [t.currentTab === s ? n("v-text-area", {
            key: s,
            staticClass: "v-tab-textarea",
            attrs: {placeholder: e.placeholder},
            model: {
              value: e.model, callback: function (n) {
                t.$set(e, "model", n)
              }, expression: "obj.model"
            }
          }) : t._e()], 1) : t._e()
        })), 0)], 1)
      }, X = [], Z = {
        components: {VTextArea: U["a"]},
        props: {data: [Object, Array], keepAlive: {type: Boolean, default: !1}, value: {type: String, default: ""}},
        data: function () {
          return {currentTab: 0}
        },
        computed: {
          model: {
            get: function () {
              return this.value
            }, set: function (t) {
              this.$emit("input", t)
            }
          }
        },
        methods: {
          selectTab: function (t) {
            if (t === this.currentTab) return !1;
            this.currentTab = t
          }, priorityModel: function (t, e) {
            return t || e
          }
        }
      }, G = Z, J = (n("e82c"), Object(u["a"])(G, z, X, !1, null, null, null)), $ = J.exports, tt = function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("span", {staticClass: "v-info"}, [n("span", {staticClass: "v-info-text"}, [t._t("default", [t._v(t._s(t.info))])], 2)])
      }, et = [], nt = {props: {info: {type: String}}}, at = nt,
      st = (n("b9de"), Object(u["a"])(at, tt, et, !1, null, null, null)), it = st.exports, ot = n("d145"),
      lt = n("4c0a"), rt = function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("v-control-wrap", {
          attrs: {type: "radio", label: t.label, labelClass: t.labelClass, id: t.id},
          scopedSlots: t._u([{
            key: "input", fn: function () {
              return [n("input", {
                staticClass: "v-radio v-input",
                attrs: {type: "radio", id: t.id},
                domProps: {value: t.value, checked: t.shouldBeChecked},
                on: {change: t.updateInput}
              })]
            }, proxy: !0
          }])
        })
      }, ct = [], ut = n("f4b0"), dt = {
        components: {VControlWrap: ut["a"]},
        model: {prop: "modelValue", event: "change"},
        props: {
          id: {type: String, required: !0},
          label: {type: String, required: !0},
          labelClass: {type: String, default: ""},
          value: String,
          modelValue: {default: ""}
        },
        computed: {
          shouldBeChecked: function () {
            return this.modelValue === this.value
          }, model: {
            get: function () {
              return this.modelValue === this.value
            }, set: function (t) {
              this.$emit("change", t)
            }
          }
        },
        methods: {
          updateInput: function () {
            this.$emit("change", this.value)
          }
        }
      }, ft = dt, pt = (n("386d"), Object(u["a"])(ft, rt, ct, !1, null, null, null)), mt = pt.exports, bt = {},
      vt = Object(u["a"])(bt, a, s, !1, null, null, null), ht = vt.exports, gt = function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("v-table", {attrs: {table: t.table}})
      }, At = [], Ct = n("890f"), yt = {
        components: {VTable: Ct["a"]}, data: function () {
          return {
            table: {
              headers: ["Логин", "Пароль", "Пол", "Заполнение", "Статус"],
              data: [{id: 1, login: "123", password: "232", sex: "male", fill: "Заполненно", status: !1}, {
                id: 2,
                login: "4331",
                password: "qdqwdq",
                sex: "male",
                fill: "Заполненно",
                status: !0
              }, {id: 3, login: "qweqweqweqwe", password: "232", sex: "male", fill: "Заполненно", status: !1}, {
                id: 4,
                login: "adasdasd",
                password: "fergrtgyh",
                sex: "male",
                fill: "Заполненно",
                status: !1
              }, {id: 5, login: "dqwdq", password: "bggggfbfb", sex: "male", fill: "Заполненно", status: !0}, {
                id: 6,
                login: "1211dq",
                password: "ddewweww",
                sex: "male",
                fill: "Заполненно",
                status: !1
              }]
            }
          }
        }
      }, wt = yt, _t = Object(u["a"])(wt, gt, At, !1, null, null, null), kt = _t.exports, xt = n("feeb"),
      Ot = function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {staticClass: "sex-switcher"}, [n("div", {
          staticClass: "sex-switcher-row",
          class: {"switch-sex": t.isMale}
        }, [n("div", {staticClass: "sex-switcher__item"}, [n("button", {
          staticClass: "sex-switcher__btn",
          class: {"is-active": !t.isMale},
          on: {
            click: function (e) {
              t.isMale = !1
            }
          }
        }, [t._v("Женские")])]), n("div", {staticClass: "sex-switcher__item"}, [n("button", {
          staticClass: "sex-switcher__btn",
          class: {"is-active": t.isMale},
          on: {
            click: function (e) {
              t.isMale = !0
            }
          }
        }, [t._v("Мужские")])])]), n("v-text-area", {attrs: {placeholder: "login:password"}})], 1)
      }, St = [], Tt = n("4523"), Et = {
        components: {VBtn: Tt["a"], VTextArea: U["a"]}, data: function () {
          return {isMale: !1}
        }, methods: {
          switchSex: function () {
            this.isMale = !this.isMale
          }
        }
      }, Vt = Et, jt = (n("aa0f"), Object(u["a"])(Vt, Ot, St, !1, null, null, null)), It = jt.exports, Mt = n("3d30"),
      Bt = n("2f62");

    function Rt(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        e && (a = a.filter((function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), n.push.apply(n, a)
      }
      return n
    }

    function Lt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? Rt(Object(n), !0).forEach((function (e) {
          Object(g["a"])(t, e, n[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Rt(Object(n)).forEach((function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }))
      }
      return t
    }

    var Pt = {
      components: {
        ModalInstruction: Mt["default"],
        VTextField: F["a"],
        VTextArea: U["a"],
        VButton: H["a"],
        VBlock: W,
        VTabs: $,
        VInfo: it,
        VInstructions: ot["a"],
        VControl: ht,
        VControlSelect: xt["a"],
        VCheckbox: lt["a"],
        VRadio: mt,
        VSwitcher: It,
        TableAccount: kt
      }, props: {empty: {type: Boolean, default: !0}}, data: function () {
        return {
          modalTargetIsOpen: !1,
          modalDialogsSettingsIsOpen: !1,
          isOpen: !0,
          dataForTable: {sex: "female", fillAllAccounts: !1, accountData: []},
          dataForBackend: {
            primaryAccountId: "",
            reposting: !1,
            targetAuditoryOwnFrom: "",
            targetAuditoryOwnTo: "",
            targetAuditoryAutoCollect: "",
            targetAuditoryRecommendFriends: "",
            greetingMale: "",
            greetingFemale: "",
            useAutoDialogs: ""
          },
          model: {
            primaryAccountId: "",
            greetingMale: "",
            greetingFemale: "",
            useAutoDialogs: !1,
            whatToUseInTargetSettings: "one",
            targetAuditoryOwnFrom: "",
            targetAuditoryOwnTo: "",
            targetAuditoryAutoCollect: "",
            targetAuditoryRecommendFriends: "",
            useAutoReposting: !1,
            fillInAccounts: !1
          },
          selected: "",
          selectOptionsFriend: [5, 10, 15, 20, 30, 40, 50],
          selectOptionsAuto: ["3 (по умолчанию)", 5, 10, 15, 20, 30, 40, 50, 60, 3040, 20, 30, 120, 230],
          greetingTabData: {
            female: {
              id: 0,
              sex: "Female",
              key: "for-female",
              title: "Женское",
              placeholder: "Женское приветствие",
              model: ""
            }, male: {id: 1, sex: "Male", title: "Мужское", placeholder: "Мужское привествие", model: ""}
          },
          isActive: !1,
          check: !1,
          needFill: !1
        }
      }, computed: {
        primaryAccountId: function () {
          return this.model.primaryAccountId
        }, useYourAuditory: function () {
          return "one" === this.model.whatToUseInTargetSettings
        }, useCollectedAuditory: function () {
          return "two" === this.model.whatToUseInTargetSettings
        }, useRecommendMailing: function () {
          return "three" === this.model.whatToUseInTargetSettings
        }, useAutoReposting: function () {
          return this.model.useAutoReposting
        }, fromToValidation: function () {
          return this.model.targetAuditoryOwnFrom.length && this.model.targetAuditoryOwnTo.length
        }, counter: function () {
          return 1
        }
      }, methods: Lt({}, Object(Bt["b"])(["showModal", "openInstructionsModal"]), {
        saveSelectVal: function (t) {
          this.useYourAuditory && (this.dataForBackend.targetAuditoryOwnFrom = t[0], this.dataForBackend.targetAuditoryOwnTo = t[1]), this.useCollectedAuditory && (this.dataForBackend.targetAuditoryAutoCollect = t), this.useRecommendMailing && (this.dataForBackend.targetAuditoryRecommendFriends = t), this.primaryAccountId && (this.dataForBackend.primaryAccountId = t)
        }, selection: function (t) {
          this.selected = String(this.selected = t)
        }, saveGreeting: function (t) {
          this.dataForTable.greeting = t
        }
      })
    }, Dt = Pt, Ft = (n("14a4"), Object(u["a"])(Dt, P, D, !1, null, null, null)), Ut = Ft.exports;

    function Ht(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        e && (a = a.filter((function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), n.push.apply(n, a)
      }
      return n
    }

    function qt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? Ht(Object(n), !0).forEach((function (e) {
          Object(g["a"])(t, e, n[e])
        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ht(Object(n)).forEach((function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }))
      }
      return t
    }

    var Nt = {
      components: {TheNavPanel: L, VAutopilotTemplate: Ut},
      computed: qt({}, Object(Bt["c"])(["modalIsOpen", "modalComponent"])),
      methods: qt({}, Object(Bt["b"])(["closeModal"]))
    }, Yt = Nt, Kt = (n("971c"), Object(u["a"])(Yt, v, h, !1, null, null, null)), Qt = Kt.exports;
    i["a"].use(b["a"]);
    var Wt = new b["a"]({mode: "history", base: "/", routes: [{path: "/", name: "autopilot", component: Qt}]}),
      zt = (n("96cf"), n("3b8d"));
    n("7f7f");
    i["a"].use(Bt["a"]);
    var Xt = new Bt["a"].Store({
      state: {
        modals: {},
        modal: {isOpen: !1, id: null, name: null},
        accounts: [],
        messageTemplates: [{
          id: 1,
          template: [{id: 1, messages: [{id: 1, condition: "фцвфц", text: "фцвфцв"}]}, {
            id: 2,
            messages: [{id: 1, condition: "фцвф", text: "фцвфцв"}]
          }, {id: 3, messages: [{id: 1, condition: "", text: ""}]}, {
            id: 4,
            messages: [{id: 1, condition: "", text: ""}]
          }, {id: 5, messages: [{id: 1, condition: "", text: ""}]}]
        }, {
          id: 2,
          template: [{id: 1, messages: [{id: 1, condition: "male: template 1", text: ""}]}, {
            id: 2,
            messages: [{id: 1, condition: "", text: ""}]
          }, {id: 3, messages: [{id: 1, condition: "", text: ""}]}, {
            id: 4,
            messages: [{id: 1, condition: "", text: ""}]
          }, {id: 5, messages: [{id: 1, condition: "", text: ""}]}]
        }]
      }, mutations: {
        ADD_ACCOUNT: function (t, e) {
          t.accounts.length ? e.id = t.accounts.length + 1 : e.id = 1, t.accounts.push(e)
        }, ADD_TEMPLATE_FOR_MESSAGE: function (t, e) {
          var n = e.messages.length;
          e.messages.push({id: n ? e.messages[n - 1].id + 1 : 1, condition: "", text: ""})
        }, REMOVE_TEMPLATE_FOR_MESSAGE: function (t, e) {
          var n = e.selectedTab, a = e.selectedTemplate, s = e.index;
          t.messageTemplates[n].template[a].messages.splice(s, 1)
        }, SHOW_MODAL: function (t, e) {
          e instanceof Object ? (t.modal.name = e.name, t.modal.id = e.id) : t.modal.name = e, t.modal.isOpen = !0
        }, CLOSE_MODAL: function (t) {
          t.modal.isOpen = !1
        }
      }, actions: {
        removeAccount: function (t, e) {
          var n = t.commit;
          n("REMOVE_ACCOUNT", e)
        }, addTemplateMessage: function () {
          var t = Object(zt["a"])(regeneratorRuntime.mark((function t(e, n) {
            var a, s, i, o, l, r, c, u;
            return regeneratorRuntime.wrap((function (t) {
              while (1) switch (t.prev = t.next) {
                case 0:
                  if (a = e.commit, s = e.state, i = n.selectedTab, o = n.selectedTemplate, l = document.querySelector(".tab-message__content"), r = document.querySelector(".tab-container-scrollable"), c = s.messageTemplates[i], u = c.template[o], !(u.messages.length < 10)) {
                    t.next = 11;
                    break
                  }
                  return t.next = 8, a("ADD_TEMPLATE_FOR_MESSAGE", u);
                case 8:
                  u.messages.length >= 2 && (l.scrollTop = r.scrollHeight), t.next = 12;
                  break;
                case 11:
                  alert("Вы достигли лимита для данного сообщения(10)");
                case 12:
                case"end":
                  return t.stop()
              }
            }), t)
          })));

          function e(e, n) {
            return t.apply(this, arguments)
          }

          return e
        }(), removeTemplateMessage: function (t, e) {
          var n = t.commit;
          t.state;
          n("REMOVE_TEMPLATE_FOR_MESSAGE", e)
        }, showModal: function (t, e) {
          var n = t.commit;
          document.body.classList.add("no-scroll"), n("SHOW_MODAL", e)
        }, openInstructionsModal: function (t, e) {
          var n = t.commit;
          e && n("SHOW_MODAL", {name: "ModalInstruction", id: e})
        }, closeModal: function (t) {
          var e = t.commit;
          document.body.classList.remove("no-scroll"), e("CLOSE_MODAL")
        }
      }, getters: {
        modalIsOpen: function (t) {
          return t.modal.isOpen
        }, modalComponent: function (t) {
          return !!t.modal.name && function () {
            return n("1921")("./".concat(t.modal.name))
          }
        }, modalId: function (t) {
          return t.modal.id
        }
      }
    });
    i["a"].component("v-select", m.a), i["a"].config.productionTip = !1, new i["a"]({
      router: Wt,
      store: Xt,
      render: function (t) {
        return t(f)
      }
    }).$mount("#app"), i["a"].mixin({
      mounted: function () {
      }
    })
  }, "5c0b": function (t, e, n) {
    "use strict";
    var a = n("e332"), s = n.n(a);
    s.a
  }, "5cf9": function (t, e, n) {
  }, "5d28": function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAbZSURBVHgB7d1pbBRVAAfw/5u9ei20pGzpXVFEgyFK+CBGVPA+I8EYTQCJJEQSNeEbGvlmJKKJGo1+MBohQbkiIvjBYAig4RBFwyEiBGi7pbTlaEtLd9mdeb4Zju4WG2Z3Z9vp+P8lMLuzs9vN+++8efPeHAARERERERERERERERERERERERERERERERERUeYE8qChoaEglpQzDCFfEFJMBuRoSJGXvzViCUgJdKv///QJY3VrNPqjmivhMMcLPVJz02QBfZX66DtAGRD7DUPO7zjV+Acc5GjAkar6e4SGLephESgbHWrleOp0NPorHOJYwOHKyvIiX2CP+sjxqfNLS0sRLikBpTPr4p6eHnR2dqbNVzV3c0lBcMKxY8ficIAfDinUgovU5Fq4Y8aUYekbS/DUk0+gRAUsuAlOI9UWuKenFxs2bsQ77y5XQXddng9Re6EvsVQ9fAsOcKrURUVN/Wk1jZhPNE3D9xvWY+qUKbh48SL2HzgIwzBAKVTJ3zx+PCoiEfy2bx+emfVcahm1t0Ubx8GBRpcja3BlZeVE40q4pgfuv98K99Bfh/H0rNlWyHS98vJyrPzic6us7pt+L7Zt33H1pUjJuHHlPadPdyBHjgSc8PkqfCnPJ98xyZp++dUKK9zHHn0Eo0eNAvVrjkaxc9dubNvxM6ZMuQuRyNi018OisKgHuXNoG+wXqbWJ33/5Y5PJpDVduOBl3DPtblC/NevWWwFfrZbFwK1lARyhgTyNAXscA/Y4BuxxjnV0ZKyvD1ixAq4zfTowaVL/8+PqO8bPISe3L8ZwGb6AYzFVeMfhOlOnpj/vPqoCPouRilW0xzFgj2PAHseAPY4Be9zwtaIHkVR9swnp+KFJaQp9PmSrL67fcJlQUIPmkvFv1wXcnUjg/KVLyBe/GquuLy5GNpK6xKmzsRsuV1VegMJg9j8iJ7ku4JBau8KBAPIll2LX1EoZLvTbWM49R6+4LuBiNdRY7Hfd17JoKuFIWQgjCRtZHseAPc51dWFvMmn9GwpB1eAqDQZtL28YEme6+huAhSHVXihy5+bkKtd9u7iu44JqSQ8Fc3cpo4DV3tuFvpQfn9noYsCZGaVa0IVD1MjKtLVrtqLNXaCrAj73b+FcF7C5n+rWdcJsRbtl/9YuNrI8jgF7nOtqw3PxuGNdlVVFRTn1Ow9kdlU2tg1+lkakNOS6RpfrAvapbXBAc2/FEvAN3jDzae47wc51AY9WrejReeyLzoVfhVtXMbJOfeY22OMYsMe5rydLDfhf0m88qJ4pc4Qq12E8s6uyN3b9dwsGNIQC7lxX3NcXnacBf3OQP+eAVVdle+f1V1YoCwdUwPa7PIeS6wLOVzelE4PwZiPZDHMgN/duuS9gtd/q5L6rk8yuyjFhd66pg2Ejy+MYsMcxYI9jwB7HgD2OAXvc8O0mlZUBy5fD9e58GyMZ12CPY8Ael5cq2pAGdDVgYF7FzbyqqmHo1nPqZ5aHVTZXykoa+TmjMi8BJ9SAgXmNSj1pHt8sEYvFeUHSARLWgIq0pmbZJPX8HOyfUcBjqqun+aBNHDhfGEY9Ug5XOfz3EXy74TtET7Vaz3/auhUtLS2gfnv27rWmh49cLquWllNprxu6/uzY6tqu9HcJ6TdwsLW16XfYZHuIJVLd8IoQ8kP1cGSdXudBUmovtbecWGlnWduNLAFjNhiuS+gz7C5pP2CBTpBb3PgyA1fY3gZLoR1FyrUzHpzxAB6cafuH5KiDhw7h69VrMZTmz5uLWyfcguGwafMP2LUn5UYsEq1232t7Gzy2tna6JrVr15wfFQ5j3TerUFdXi6EWj8fx0SefYvWateiL2f4xZ8W8mcj8eXOw+PXXEBiGw3mbmpvx/Itz0NXd3T9TimltLSd323l/RsexVNTUH1CTaze8uqmhAR9/8D6qqqowHM6ePYeTjY3QjfzsY/s0H26/bSKKiobnWOiOM2ewYOEiRNP2QOTBtmjTZNi8YUdGAUeq66epH/TO1HnBYBAPzZyJJx9/VFVhE1BSUgyfzw/eRScz5tZPV/vC5u11jp84gY2bNls36biUfq50zNDlwx2tTb/Y/dyMY6ioqVum3rbkv14LhUJW1e0P+LP56P85iWQiiV7V6TFop5CQy9qam95EBrJJQYvU1i8WEu+BKQ4J1aVpQNNebW8++RkylM3hi7K3u2tXcUnpFpVupYq4Rs1z58lEI19Mle821aia2x5t3IAs5LwGVlaOr5OaMVMK/V4JMUFIMVZVJQW8nWyGhHlXO8SkFB3q4T9S03YkEmL7+dbjTSAiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiGmL/AhD2BDGksjxoAAAAAElFTkSuQmCC"
  }, "5f64": function (t, e, n) {
  }, "5f73": function (t, e, n) {
    "use strict";
    var a = n("9053"), s = n.n(a);
    s.a
  }, 6460: function (t, e, n) {
  }, 7500: function (t, e, n) {
  }, "779f": function (t, e, n) {
    "use strict";
    var a = n("7500"), s = n.n(a);
    s.a
  }, "7bc3": function (t, e, n) {
    "use strict";
    var a = n("37ec"), s = n.n(a);
    s.a
  }, "7d58": function (t, e, n) {
    "use strict";
    var a = n("ce9b"), s = n.n(a);
    s.a
  }, "814b": function (t, e, n) {
    "use strict";
    var a = n("5f64"), s = n.n(a);
    s.a
  }, "83e3": function (t, e, n) {
    "use strict";
    var a = n("41c5"), s = n.n(a);
    s.a
  }, "880c": function (t, e, n) {
  }, "890f": function (t, e, n) {
    "use strict";
    var a = function () {
      var t = this, e = t.$createElement, n = t._self._c || e;
      return n("transition", {
        attrs: {
          name: "slide-appearance",
          mode: "out-in"
        }
      }, [t.tableMobile.length ? n("div", {staticClass: "table-mobile"}, [n("div", {staticClass: "table-mobile__headers"}, [n("div", {staticClass: "table-mobile__header"}, [t._v("Логин")]), n("div", {staticClass: "table-mobile__header"}, [t._v("Пароль")]), n("div", {staticClass: "table-mobile__header"}, [t._v("Статус")])]), n("div", {staticClass: "table-mobile__accordion"}, t._l(t.tableMobile, (function (e, a) {
        return n("div", {staticClass: "table-mobile__row"}, [n("div", {
          staticClass: "table-mobile__item",
          on: {
            click: function (e) {
              return t.openDrop(a)
            }
          }
        }, t._l(e.row, (function (e, a) {
          return n("span", {key: a}, [t._v("\n\t\t\t\t\t\t" + t._s(e) + "\n\t\t\t\t\t")])
        })), 0), n("transition", {attrs: {name: "down"}}, [n("ul", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.isShow && t.openId === a,
            expression: "isShow && openId === i"
          }], key: a, staticClass: "table-mobile__dropdown"
        }, [t._l(e.data, (function (e, a) {
          return n("li", {key: a, staticClass: "table-mobile__dropdown-item"}, t._l(e, (function (e, a) {
            return n("span", {key: a}, [t._v(t._s(e))])
          })), 0)
        })), n("li", [n("v-button", {
          attrs: {"btn-style": "empty"}, on: {
            click: function (e) {
              return t.deleteItem(a)
            }
          }
        }, [t._v("Удалить")])], 1)], 2)])], 1)
      })), 0)]) : t._e()])
    }, s = [], i = (n("ac6a"), n("5df3"), n("f400"), n("236a")), o = n("d76c"), l = n("4c0a"), r = {
      components: {VButton: i["a"], ButtonWave: o["a"], VCheckbox: l["a"]},
      props: {table: Object},
      data: function () {
        return {
          tableMobile: [{
            id: 1,
            row: {login: "первый", password: "1212e1", status: !1},
            data: new Map([["Логин", "первый"], ["Пароль", "1212e1"], ["Пол", "Женский"], ["Статус", "Заполняется"]])
          }, {
            id: 2,
            row: {login: "Второй", password: "1212e1", status: !1},
            data: new Map([["Логин", "Второй"], ["Пароль", "1212e1"], ["Пол", "Женский"], ["Статус", "Заполняется"]])
          }], openId: null, data: null, headers: null, deleteElems: [], selectedAll: !1, clicked: !1, isShow: !1
        }
      },
      created: function () {
        this.data = this.table.data, this.headers = this.table.headers
      },
      computed: {
        btnText: function () {
          var t = this.deleteElems.length, e = this.table.data.length;
          return t > e / 2 || t === e ? (this.selectedAll = !0, "Снять выделение") : !t || t <= e / 2 ? (this.selectedAll = !1, "Выделить все") : void 0
        }, selected: function () {
          var t = [];
          return this.selectedAll ? (this.table.data.forEach((function (e) {
            t.push(e.id)
          })), t) : t.splice(0, t.length)
        }
      },
      methods: {
        openDrop: function (t) {
          this.openId = t, this.isShow = !this.isShow
        }, checkAll: function () {
          this.selectedAll = !this.selectedAll, this.deleteElems = this.selected
        }, removeTable: function () {
          var t, e = this, n = this.data.length;
          this.deleteElems.forEach((function (a) {
            for (t = 0; t < n; t++) if (e.table.data[t].id === a) {
              e.table.data.splice(t, 1);
              break
            }
          })), this.selectedAll = !1
        }, deleteItem: function (t) {
          var e = this;
          this.tableMobile.forEach((function (t, n) {
            e.openId === n && e.tableMobile.splice(n, 1)
          }))
        }
      }
    }, c = r, u = (n("dece"), n("2877")), d = Object(u["a"])(c, a, s, !1, null, null, null);
    e["a"] = d.exports
  }, "8cdf": function (t, e, n) {
  }, 9053: function (t, e, n) {
  }, "971c": function (t, e, n) {
    "use strict";
    var a = n("2b42"), s = n.n(a);
    s.a
  }, "971d": function (t, e, n) {
    "use strict";
    var a = n("cb61"), s = n.n(a);
    s.a
  }, "993c": function (t, e, n) {
    "use strict";
    var a = n("1f7d"), s = n.n(a);
    s.a
  }, aa0f: function (t, e, n) {
    "use strict";
    var a = n("6460"), s = n.n(a);
    s.a
  }, b9de: function (t, e, n) {
    "use strict";
    var a = n("880c"), s = n.n(a);
    s.a
  }, c270: function (t, e, n) {
    "use strict";
    var a = n("5cf9"), s = n.n(a);
    s.a
  }, c44c: function (t, e) {
    t.exports = "data:image/png;base64,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"
  }, cb61: function (t, e, n) {
  }, cdf0: function (t, e, n) {
  }, ce9b: function (t, e, n) {
  }, d145: function (t, e, n) {
    "use strict";
    var a = function () {
      var t = this, e = t.$createElement, n = t._self._c || e;
      return n("span", {
        staticClass: "v-instructions", on: {
          click: function (e) {
            return t.$emit("click")
          }
        }
      }, [t.noIcon ? t._e() : n("svg", {
        staticClass: "icon v-instructions-icon",
        attrs: {width: "1em", height: "1em"}
      }, [n("use", {attrs: {"xlink:href": "#icon-sub"}}, [n("svg", {
        attrs: {
          id: "icon-sub",
          viewBox: "0 0 16 16",
          fill: "none"
        }
      }, [n("path", {
        attrs: {
          d: "M8 1C4.13438 1 1 4.13438 1 8C1 11.8656 4.13438 15 8 15C11.8656 15 15 11.8656 15 8C15 4.13438 11.8656 1 8 1ZM8 13.8125C4.79063 13.8125 2.1875 11.2094 2.1875 8C2.1875 4.79063 4.79063 2.1875 8 2.1875C11.2094 2.1875 13.8125 4.79063 13.8125 8C13.8125 11.2094 11.2094 13.8125 8 13.8125Z",
          fill: "currentColor"
        }
      }), n("path", {
        attrs: {
          d: "M7.25 5.25C7.25 5.44891 7.32902 5.63968 7.46967 5.78033C7.61032 5.92098 7.80109 6 8 6C8.19891 6 8.38968 5.92098 8.53033 5.78033C8.67098 5.63968 8.75 5.44891 8.75 5.25C8.75 5.05109 8.67098 4.86032 8.53033 4.71967C8.38968 4.57902 8.19891 4.5 8 4.5C7.80109 4.5 7.61032 4.57902 7.46967 4.71967C7.32902 4.86032 7.25 5.05109 7.25 5.25V5.25ZM8.375 7H7.625C7.55625 7 7.5 7.05625 7.5 7.125V11.375C7.5 11.4438 7.55625 11.5 7.625 11.5H8.375C8.44375 11.5 8.5 11.4438 8.5 11.375V7.125C8.5 7.05625 8.44375 7 8.375 7Z",
          fill: "currentColor"
        }
      })])])]), n("span", {staticClass: "v-instructions-text"}, [n("a", {
        staticClass: "v-instructions-link",
        attrs: {href: "#!"}
      }, [t._t("default", [t._v(t._s(t.text))])], 2)])])
    }, s = [], i = {
      props: {
        instructionsClass: String,
        text: {type: String, default: "Инструкция"},
        noIcon: {type: Boolean, default: !1}
      }
    }, o = i, l = (n("993c"), n("2877")), r = Object(l["a"])(o, a, s, !1, null, null, null);
    e["a"] = r.exports
  }, d163: function (t, e, n) {
    "use strict";
    var a = function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", [t.label ? n("label", {
          staticClass: "input-label",
          class: t.labelClass,
          attrs: {for: t.id}
        }, [t._t("default", [t._v(t._s(t.label))])], 2) : t._e(), t._t("element")], 2)
      }, s = [], i = {props: {label: String, labelClass: {type: String, default: ""}, id: String}, methods: {}}, o = i,
      l = (n("f0fc"), n("2877")), r = Object(l["a"])(o, a, s, !1, null, null, null);
    e["a"] = r.exports
  }, d76c: function (t, e, n) {
    "use strict";
    var a = function () {
      var t = this, e = t.$createElement, n = t._self._c || e;
      return n("button", {
        staticClass: "waves-btn v-btn v-button", on: {
          click: function (e) {
            return t.$emit("click")
          }
        }
      }, [n("span", {staticClass: "waves-btn__text"}, [t._t("default")], 2), n("span", {staticClass: "waves"})])
    }, s = [], i = {}, o = i, l = (n("0c00"), n("2877")), r = Object(l["a"])(o, a, s, !1, null, null, null);
    e["a"] = r.exports
  }, d846: function (t, e, n) {
    "use strict";
    var a = n("fa56"), s = n.n(a);
    s.a
  }, dece: function (t, e, n) {
    "use strict";
    var a = n("50da"), s = n.n(a);
    s.a
  }, e332: function (t, e, n) {
  }, e82c: function (t, e, n) {
    "use strict";
    var a = n("34bd"), s = n.n(a);
    s.a
  }, f0fc: function (t, e, n) {
    "use strict";
    var a = n("8cdf"), s = n.n(a);
    s.a
  }, f4b0: function (t, e, n) {
    "use strict";
    var a = function () {
      var t = this, e = t.$createElement, n = t._self._c || e;
      return n("div", {
        staticClass: "v-control",
        class: "v-control-" + t.type
      }, [t._t("input"), t.label ? n("label", {
        staticClass: "control-label",
        class: ["label-" + t.type, t.labelClass],
        attrs: {for: t.id}
      }, [t._t("default", [t._v(t._s(t.label))])], 2) : t._e()], 2)
    }, s = [], i = {
      props: {
        type: String,
        id: {type: String},
        label: {type: String, default: " "},
        labelClass: {type: String, default: ""}
      }
    }, o = i, l = (n("814b"), n("2877")), r = Object(l["a"])(o, a, s, !1, null, null, null);
    e["a"] = r.exports
  }, f970: function (t, e, n) {
  }, fa56: function (t, e, n) {
  }, fecf: function (t, e, n) {
    "use strict";
    var a = n("0041"), s = n.n(a);
    s.a
  }, feeb: function (t, e, n) {
    "use strict";
    var a = function () {
      var t = this, e = t.$createElement, n = t._self._c || e;
      return n("div", [n("label", {
        staticClass: "select-label",
        attrs: {for: t.id}
      }, [t._v("\n\t\t\t" + t._s(t.label) + "\n\t\t")]), n("div", {
        staticClass: "custom-select",
        attrs: {tabindex: t.tabindex},
        on: {
          blur: function (e) {
            t.open = !1
          }
        }
      }, [n("div", {
        staticClass: "selected", on: {
          click: function (e) {
            t.open = !t.open
          }
        }
      }, [t._v("\n\t\t\t\t" + t._s(t.selected) + "\n\t\t\t\t"), n("span", {
        staticClass: "toggle-select",
        class: {"toggle-select--rotate": t.open}
      }, [n("svg", {
        attrs: {
          width: "1em",
          height: "1em"
        }
      }, [n("use", {attrs: {"xlink:href": "#icon-arrow-select"}}, [n("svg", {
        attrs: {
          id: "icon-arrow-select",
          viewBox: "0 0 20 20"
        }
      }, [n("path", {
        attrs: {
          d: "M3.225 5.40832L1.75 6.88332L10 15.1333L18.25 6.88333L16.775 5.40833L10 12.1833L3.225 5.40832Z",
          fill: "currentColor"
        }
      })])])])])]), n("div", {
        directives: [{name: "show", rawName: "v-show", value: t.open, expression: "open"}],
        staticClass: "options"
      }, t._l(t.options, (function (e, a) {
        return t.options.length ? n("div", {
          key: a, staticClass: "options__item", on: {
            click: function (n) {
              return t.selection(e, n)
            }
          }
        }, [t._v("\n\t\t\t\t\t\t" + t._s(e) + "\n\t\t\t\t\t")]) : t._e()
      })), 0)])])
    }, s = [], i = (n("c5f6"), n("1188")), o = {
      component: {VTextArea: i["a"]},
      props: {
        options: {type: Array, required: !1},
        tabindex: {type: Number, required: !1, default: 0},
        label: String,
        labelClass: {type: String, required: !1},
        id: String,
        search: {type: Boolean, required: !1}
      },
      data: function () {
        return {open: "", searchModel: "", selected: this.options.length > 0 ? this.options[0] : null}
      },
      mounted: function () {
        this.$emit("input", this.selected)
      },
      computed: {},
      methods: {
        selection: function (t, e) {
          if (this.selected = t, e.target === this.$refs.searchSelect) return !1;
          this.open = !this.open, this.$emit("selection", t)
        }
      }
    }, l = o, r = (n("971d"), n("2877")), c = Object(r["a"])(l, a, s, !1, null, null, null);
    e["a"] = c.exports
  }
});
//# sourceMappingURL=app.e37474d5.js.map