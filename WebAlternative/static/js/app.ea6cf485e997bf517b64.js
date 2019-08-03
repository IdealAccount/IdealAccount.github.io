webpackJsonp([1], {
  "1Gf2": function (t, e) {
  }, "2WIh": function (t, e, n) {
    "use strict";
    var s = n("OxL8"), i = n.n(s), r = n("ROXS");
    var a = function (t) {
      n("Lk9H")
    }, o = n("VU/8")(i.a, r.a, !1, a, "data-v-de761eb4", null);
    e.default = o.exports
  }, "6n+k": function (t, e) {
  }, DQel: function (t, e) {
  }, IjOK: function (t, e) {
  }, Lk9H: function (t, e) {
  }, NHnr: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = n("7+uW"), i = n("Dd8w"), r = n.n(i), a = n("uUlv"), o = {
      data: function () {
        return {active: !1}
      }, mounted: function () {
        window.addEventListener("scroll", this.isScroll), document.body.addEventListener("keydown", this.showMenu)
      }, methods: {
        isScroll: function () {
          this.$refs.navBar.style.background = pageYOffset > 50 ? "rgb(57, 57, 57)" : ""
        }, showMenu: function (t) {
          var e = document.body.clientWidth;
          console.log(e), e >= 978 && e < 1200 && (27 === t.keyCode && (this.active = !1), 77 === t.keyCode && (this.active = !this.active))
        }
      }, watch: {
        active: function () {
          this.active ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""
        }
      }, computed: r()({}, Object(a.a)(["navigationMenu"])), beforeDestroy: function () {
        window.removeEventListener("scroll", this.isScroll)
      }
    }, c = {
      render: function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
          ref: "navBar",
          staticClass: "header-nav"
        }, [n("div", {staticClass: "container"}, [n("div", {staticClass: "flex"}, [n("a", {
          staticClass: "header-logo",
          attrs: {href: "#!"}
        }), t._v(" "), n("a", {
          staticClass: "header-phone",
          attrs: {href: "tel: (4212)25-30-85"}
        }, [t._v("(4212)25-30-85")]), t._v(" "), n("div", {
          ref: "burger",
          class: [{"is-active": t.active}, "burger"],
          on: {
            click: function (e) {
              e.preventDefault(), t.active = !t.active
            }
          }
        }, [t._m(0)])]), t._v(" "), n("transition", {attrs: {name: "view"}}, [n("nav", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.active,
            expression: "active"
          }], staticClass: "nav"
        }, [n("ul", {staticClass: "nav-menu"}, t._l(t.navigationMenu, function (e) {
          return n("li", {staticClass: "nav-menu-item"}, [n("a", {
            staticClass: "nav-menu-link",
            attrs: {href: "#!"}
          }, [t._v(t._s(e))])])
        }), 0)])])], 1)])
      }, staticRenderFns: [function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {staticClass: "burger-box"}, [e("div", {staticClass: "burger-inner"})])
      }]
    };
    var l = n("VU/8")(o, c, !1, function (t) {
      n("NIyP")
    }, "data-v-ab2ae74e", null).exports, u = {
      render: function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("ul", {staticClass: "bread-crumbs flex"}, t._l(t.links, function (e) {
          return n("li", {
            staticClass: "bread-crumbs-link", on: {
              click: function (t) {
              }
            }
          }, [t._v(t._s(e))])
        }), 0)
      }, staticRenderFns: []
    };
    var d = n("VU/8")({
      data: function () {
        return {}
      }, computed: {
        links: function () {
          return ["Главная", "Услуги", "SEO(продвижение в поисковых системах"]
        }
      }
    }, u, !1, function (t) {
      n("rtEy")
    }, "data-v-7e9afe2f", null).exports, v = {
      render: function () {
        var t = this.$createElement;
        return (this._self._c || t)("div", [this._t("default")], 2)
      }, staticRenderFns: []
    };
    var f = n("VU/8")({}, v, !1, function (t) {
      n("6n+k")
    }, null, null).exports, h = {components: {"my-form": f}}, _ = {
      render: function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {staticClass: "container"}, [n("div", {staticClass: "content"}, [t._m(0), t._v(" "), n("my-form", [n("p", {staticClass: "form-caption"}, [t._v("Оставьте заявку на "), n("span", [t._v("Бесплатную консультацию")]), t._v(" специалиста!")]), t._v(" "), n("form", {staticClass: "form"}, [n("div", {staticClass: "flex"}, [n("div", {
          staticClass: "form-row",
          attrs: {role: "username"}
        }, [n("input", {
          attrs: {
            id: "form-name",
            type: "text",
            placeholder: "ВАШЕ ИМЯ",
            required: ""
          }
        })]), t._v(" "), n("div", {
          staticClass: "form-row",
          attrs: {role: "usernumber"}
        }, [n("input", {
          attrs: {
            id: "form-phone",
            type: "text",
            placeholder: "ВАШ НОМЕР",
            required: ""
          }
        })]), t._v(" "), n("button", {
          staticClass: "btn btn-primary",
          attrs: {type: "submit"},
          on: {
            click: function (t) {
              t.preventDefault()
            }
          }
        }, [t._v("отправить")])])])]), t._v(" "), t._m(1)], 1)])
      }, staticRenderFns: [function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("h1", {staticClass: "content-title"}, [this._v("Нужно SEO-продвижение для Вашего сайта?\n      "), e("span", [this._v("Мы подберем вариант")])])
      }, function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {staticClass: "seo-rating"}, [e("h2", [this._v("TOP 1")]), this._v(" "), e("span", [this._v("В РЕЙТИНГЕ ЛУЧШИХ ВЕБ-СТУДИЙ ДАЛЬНЕГО ВОСТОКА")])])
      }]
    };
    var m = {
      components: {
        "nav-menu": l, "bread-crumbs": d, "header-content": n("VU/8")(h, _, !1, function (t) {
          n("ncxg")
        }, null, null).exports
      }
    }, p = {
      render: function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("header", [e("nav-menu"), this._v(" "), e("bread-crumbs"), this._v(" "), e("header-content")], 1)
      }, staticRenderFns: []
    };
    var g = n("VU/8")(m, p, !1, function (t) {
      n("fiIC")
    }, null, null).exports, b = {
      render: function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {staticClass: "container"}, [t._m(0), t._v(" "), n("ul", t._l(t.advantages, function (e, s) {
          return n("li", {key: s}, [n("h4", [t._v(t._s(e.title))]), t._v(" "), n("p", [t._v(t._s(e.text))])])
        }), 0)])
      }, staticRenderFns: [function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("h3", [this._v("Основные преимущества продвижения сайтов"), e("br"), this._v("\n    от WEB ALTERNATIVE:")])
      }]
    };
    var C = {
      components: {
        Advantages: n("VU/8")({
          data: function () {
            return {
              advantages: [{
                title: "Минимальные сроки",
                text: "Наши SEO-специалисты провели не одну бессонную ночь, изучая различные методики и способы продвижения, поэтому поиск верного решения не займет много времени."
              }, {
                title: "Разумный бюджет",
                text: "Мы предложим только тот комплекс работ, который необходим непосредственно вам, не навязывая лишние услуги."
              }, {
                title: "Абсолютная прозрачность отношений",
                text: "Мы всегда отчитываемся по всем проведенным работам, с приложением графиков и статистики."
              }, {
                title: "Поддержка клиента на любом этапе работы",
                text: "Мы с удовольствием отвечаем на все вопросы о том, что происходит с вашим сайтом и почему. Да-да, даже на самые, казалось бы, простые и примитивные. Мы ценим наших клиентов и стараемся всё сложное объяснить, как можно проще."
              }]
            }
          }
        }, b, !1, function (t) {
          n("ZU13")
        }, "data-v-67d8bc17", null).exports, SectionFooter: n("2WIh").default
      }, computed: r()({}, Object(a.a)(["articles"]))
    }, y = {
      render: function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("section", [t._m(0), t._v(" "), n("ul", {staticClass: "articles"}, t._l(t.articles, function (e) {
          return n("li", {
            key: e.id,
            staticClass: "articles-item",
            style: e.bg
          }, [n("a", {staticClass: "articles-item-link", attrs: {href: e.url}}, [t._v(t._s(e.topic))])])
        }), 0), t._v(" "), n("Advantages"), t._v(" "), n("section-footer")], 1)
      }, staticRenderFns: [function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("p", {staticClass: "section-caption"}, [this._v("У вас уже есть свой сайт. Замечательно,\n    половина пути пройдена! Но как сделать так,\n    чтобы ваша целевая аудитория нашла"), e("br"), this._v("\n    его и узнала о ваших товарах и услугах?\n    Всё просто – заказать SEO-продвижение в компании WEB ALTERNATIVE.")])
      }]
    };
    var k = n("VU/8")(C, y, !1, function (t) {
      n("jT7g")
    }, "data-v-43144afc", null).exports, w = {
      render: function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {staticClass: "carousel"}, [e("div", {staticClass: "carousel-track"}, this._l(this.slides, function (t) {
          return e("div", {key: t.id, style: t.bg}, [e("a", {attrs: {href: t.url}})])
        }), 0), this._v(" "), this._m(0)])
      }, staticRenderFns: [function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {staticClass: "carousel-control"}, [e("div", {staticClass: "prev"}), this._v(" "), e("div", {staticClass: "next"})])
      }]
    };
    var x = {
      components: {
        Carousel: n("VU/8")({
          data: function () {
            return {}
          }, computed: {
            slides: function () {
              for (var t = [], e = 0; e <= 11; e++) t.push({
                id: e,
                bg: "background: url(./static/img/icons_sprite.png)",
                url: "#!"
              });
              return t
            }
          }
        }, w, !1, function (t) {
          n("IjOK")
        }, "data-v-84e9b134", null).exports
      }, computed: r()({}, Object(a.a)(["ourWorks"]))
    }, E = {
      render: function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("section", [n("div", {staticClass: "container"}, [n("h2", {staticClass: "our-works-title"}, [t._v("Посмотрите наши работы")]), t._v(" "), n("div", {staticClass: "our-works"}, t._l(t.ourWorks, function (e) {
          return n("div", {
            key: e.id,
            staticClass: "our-works-item",
            style: e.bg
          }, [n("a", {attrs: {href: e.url}}), t._v(" "), n("h3", [t._v(t._s(e.title))]), t._v(" "), n("p", [t._v(t._s(e.description))])])
        }), 0), t._v(" "), n("h2", {staticClass: "carousel-title"}, [t._v("Нам доверяют:")]), t._v(" "), n("carousel")], 1)])
      }, staticRenderFns: []
    };
    var $ = {
      components: {"my-form": f}, data: function () {
        return {
          socialIcons: [{
            url: "#!",
            icon: "background: url(./static/img/icons_sprite.png) no-repeat -160px -8px"
          }, {url: "#!", icon: "background: url(./static/img/icons_sprite.png) no-repeat -205px -7px"}, {
            url: "#!",
            icon: "background: url(./static/img/icons_sprite.png) no-repeat -248px -8px"
          }]
        }
      }
    }, O = {
      render: function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("footer", [n("div", {staticClass: "container"}, [n("div", {staticClass: "flex"}, [t._m(0), t._v(" "), n("my-form", {
          key: 2,
          staticClass: "form-container"
        }, [n("p", {staticClass: "form-caption"}, [t._v("Оставьте заявку или напишите вопрос и получите "), n("br"), t._v(" "), n("span", [t._v("Бесплатную консультацию")]), t._v(" специалиста!\n        ")]), t._v(" "), n("form", {staticClass: "form"}, [n("div", {staticClass: "flex"}, [n("div", {
          staticClass: "form-row",
          attrs: {role: "username"}
        }, [n("input", {
          attrs: {
            type: "text",
            placeholder: "ВАШЕ ИМЯ",
            required: ""
          }
        })]), t._v(" "), n("div", {staticClass: "input-group"}, [n("div", {
          staticClass: "form-row",
          attrs: {role: "usermail"}
        }, [n("input", {
          attrs: {
            type: "email",
            placeholder: "ВАШ E-MAIL",
            required: ""
          }
        })]), t._v(" "), n("div", {
          staticClass: "form-row",
          attrs: {role: "usernumber"}
        }, [n("input", {
          attrs: {
            type: "text",
            placeholder: "ВАШ НОМЕР",
            required: ""
          }
        })])]), t._v(" "), n("div", {staticClass: "form-row"}, [n("textarea", {
          attrs: {
            placeholder: "Текс сообщения",
            required: ""
          }
        })]), t._v(" "), n("button", {
          staticClass: "btn btn-transparent",
          attrs: {type: "submit"},
          on: {
            click: function (t) {
              t.preventDefault()
            }
          }
        }, [t._v("отправить")])])])]), t._v(" "), n("div", {staticClass: "col-social"}, [n("img", {
          staticClass: "col-social-view",
          attrs: {src: "./static/img/footer_fb.png", alt: ""}
        }), t._v(" "), n("ul", {staticClass: "col-social-icons"}, t._l(t.socialIcons, function (t) {
          return n("li", {style: t.icon}, [n("a", {attrs: {href: t.url}})])
        }), 0)])], 1)])])
      }, staticRenderFns: [function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {staticClass: "col-location"}, [n("a", {
          staticClass: "col-location-logo",
          attrs: {href: "#!"}
        }), t._v(" "), n("div", {staticClass: "col-location-address"}, [n("span", [t._v("ул. Волочаевская, 8г"), n("br"), t._v("\n          тел.: (4212) 25-30-85"), n("br"), t._v("\n          (4212) 470-300")])]), t._v(" "), n("div", {staticClass: "col-location-map"}, [n("a", {attrs: {href: "#!"}}), t._v(" "), n("span", [t._v("Найдите нас"), n("br"), t._v("\n        на карте")])])])
      }]
    };
    var S = {
      data: function () {
        return {active: !1, height: {screen: 0, scrolled: 0, body: 0, footer: 0, toFooter: 0}}
      }, computed: {
        addClass: function () {
          return this.height.scrolled + this.height.screen >= this.height.toFooter
        }
      }, mounted: function () {
        var t = this;
        this.$nextTick(function () {
          window.addEventListener("resize", t.changeBtn), window.addEventListener("scroll", t.getScroll)
        }), this.getScroll(), this.changeBtn()
      }, methods: {
        getScroll: function () {
          this.height.scrolled = pageYOffset, this.active = this.height.scrolled > this.height.screen / 3
        }, scrollTop: function () {
          window.scrollTo({top: 0, behavior: "smooth"})
        }, changeBtn: function () {
          this.height.body = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight), this.height.footer = document.querySelector("footer").offsetHeight, this.height.toFooter = this.height.body - this.height.footer, this.height.screen = document.documentElement.clientHeight || document.body.clientHeight
        }
      }, beforeDestroy: function () {
        window.removeEventListener("resize", this.changeBtn), window.removeEventListener("scroll", this.getScroll)
      }
    }, F = {
      render: function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", [n("transition", {attrs: {name: "fade"}}, [n("a", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.active,
            expression: "active"
          }], class: [{color: t.addClass}, "scroll-to-top"], attrs: {href: "#"}, on: {
            click: function (e) {
              return e.preventDefault(), t.scrollTop(e)
            }
          }
        })])], 1)
      }, staticRenderFns: []
    };
    var R = {
      name: "App",
      components: {
        "my-header": g, "first-section": k, "second-section": n("VU/8")(x, E, !1, function (t) {
          n("1Gf2")
        }, "data-v-2e2473ec", null).exports, "my-footer": n("VU/8")($, O, !1, function (t) {
          n("Y/eM")
        }, "data-v-29f06444", null).exports, ScrollArrow: n("VU/8")(S, F, !1, function (t) {
          n("DQel")
        }, null, null).exports
      }
    }, U = {
      render: function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {attrs: {id: "app"}}, [e("my-header"), this._v(" "), e("first-section"), this._v(" "), e("second-section"), this._v(" "), e("my-footer"), this._v(" "), e("scroll-arrow")], 1)
      }, staticRenderFns: []
    };
    var V = n("VU/8")(R, U, !1, function (t) {
      n("OT6/")
    }, null, null).exports, L = n("/ocq");
    s.a.use(L.a);
    var T = new L.a({routes: []}), H = n("NYxO");
    s.a.use(H.a);
    var I = new H.a.Store({
      state: {
        navigationMenu: ["Студия", "Наша команда", "Портфолио", "Услуги", "Блог", "Отзывы", "Контакты"],
        articles: [{
          id: "1",
          topic: "Что такое SEO продвижение и почему вам оно НУЖНО?",
          bg: 'background: url("./static/img/bg_seo.png")',
          url: "#!"
        }, {
          id: "2",
          topic: "Почему важна внутренняя оптимизация сайта?",
          bg: 'background: url("./static/img/bg_optimization.png")',
          url: "#!"
        }, {
          id: "3",
          topic: "Что дает раскрутка сайта в основных поисковых системах?",
          bg: "background: url(./static/img/bg_searching.png)",
          url: "#!"
        }, {
          id: "4",
          topic: "Почему мы не указываем точную стоимость продвижения сайта?",
          bg: "background: url(./static/img/bg_price.png)",
          url: "#!"
        }],
        ourWorks: [{
          id: 1,
          title: "Пироэффект",
          description: "Интернет-магазин фейерверков",
          url: "#!",
          bg: "background: url(./static/img/bg_our_works.png) 0 0 no-repeat"
        }, {
          id: 2,
          title: "Восточный Экспресс Банк",
          description: "Сайт для услуги Восточного Экспресс Банка",
          url: "#!",
          bg: "background: url(./static/img/bg_our_works.png) -287px 0 no-repeat"
        }, {
          id: 3,
          title: "Запас Прочности",
          description: "Магазин по продаже грузоподъемного и строительного оборудования",
          url: "#!",
          bg: "background: url(./static/img/bg_our_works.png) -572px 0 no-repeat"
        }, {
          id: 4,
          title: "Пеинтбол-парк",
          description: "Сайт для спортивно-развлекательного комплекса",
          url: "#!",
          bg: "background: url(./static/img/bg_our_works.png) -857px 0 no-repeat"
        }]
      }
    });
    s.a.config.productionTip = !1, new s.a({el: "#app", router: T, store: I, components: {App: V}, template: "<App/>"})
  }, NIyP: function (t, e) {
  }, "OT6/": function (t, e) {
  }, OxL8: function (t, e) {
  }, ROXS: function (t, e, n) {
    "use strict";
    var s = {
      render: function () {
        this.$createElement;
        this._self._c;
        return this._m(0)
      }, staticRenderFns: [function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {staticClass: "section-footer"}, [e("h3", [this._v("КЛИКНИТЕ НА КНОПКУ ")]), this._v(" "), e("button", {staticClass: "btn btn-primary"}, [this._v("Отправить")]), this._v(" "), e("p", [this._v("И наш менеджер позвонит вам в удобное время и ответит на все интересующие вопросы")])])
      }]
    };
    e.a = s
  }, "Y/eM": function (t, e) {
  }, ZU13: function (t, e) {
  }, fiIC: function (t, e) {
  }, jT7g: function (t, e) {
  }, ncxg: function (t, e) {
  }, rtEy: function (t, e) {
  }
}, ["NHnr"]);
//# sourceMappingURL=app.ea6cf485e997bf517b64.js.map
