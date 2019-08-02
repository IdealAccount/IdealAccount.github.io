webpackJsonp([1], {
  "2WIh": function (t, e, s) {
    "use strict";
    var n = s("OxL8"), r = s.n(n), i = s("CMhj");
    var a = function (t) {
      s("heYf")
    }, c = s("VU/8")(r.a, i.a, !1, a, "data-v-27c3b25d", null);
    e.default = c.exports
  }, "2i09": function (t, e) {
  }, "7g+E": function (t, e) {
  }, "7vPL": function (t, e) {
  }, CMhj: function (t, e, s) {
    "use strict";
    var n = {
      render: function () {
        this.$createElement;
        this._self._c;
        return this._m(0)
      }, staticRenderFns: [function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {staticClass: "section-footer"}, [e("h3", [this._v("КЛИКНИТЕ НА КНОПКУ ")]), this._v(" "), e("button", {staticClass: "btn"}, [this._v("Отправить")]), this._v(" "), e("p", [this._v("И наш менеджер позвонит вам в удобное время и ответит на все интересующие вопросы")])])
      }]
    };
    e.a = n
  }, IjOK: function (t, e) {
  }, NHnr: function (t, e, s) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var n = s("7+uW"), r = s("Dd8w"), i = s.n(r), a = s("uUlv"), c = {
      data: function () {
        return {}
      }, computed: i()({}, Object(a.a)(["navigationMenu"]))
    }, o = {
      render: function () {
        var t = this, e = t.$createElement, s = t._self._c || e;
        return s("div", {staticClass: "header-nav"}, [s("div", {staticClass: "container"}, [t._m(0), t._v(" "), s("nav", [s("ul", {staticClass: "header-menu"}, t._l(t.navigationMenu, function (e) {
          return s("li", {staticClass: "header-menu-item"}, [s("a", {
            staticClass: "header-menu-link",
            attrs: {href: "#!"}
          }, [t._v(t._s(e))])])
        }), 0)])])])
      }, staticRenderFns: [function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {staticClass: "flex"}, [e("a", {
          staticClass: "header-logo",
          attrs: {href: "#!"}
        }), this._v(" "), e("a", {
          staticClass: "header-phone",
          attrs: {href: "tel: (4212)25-30-85"}
        }, [this._v("(4212)25-30-85")]), this._v(" "), e("div", {staticClass: "burger"}, [e("div", {staticClass: "burger-box"}, [e("div", {staticClass: "burger-inner"})])])])
      }]
    };
    var l = s("VU/8")(c, o, !1, function (t) {
      s("XShw")
    }, "data-v-5f161e42", null).exports, u = {
      render: function () {
        var t = this, e = t.$createElement, s = t._self._c || e;
        return s("ul", {staticClass: "bread-crumbs flex"}, t._l(t.links, function (e) {
          return s("li", {
            staticClass: "bread-crumbs-link", on: {
              click: function (t) {
              }
            }
          }, [t._v(t._s(e))])
        }), 0)
      }, staticRenderFns: []
    };
    var v = s("VU/8")({
      data: function () {
        return {}
      }, computed: {
        links: function () {
          return ["Главная", "Услуги", "SEO(продвижение в поисковых системах"]
        }
      }
    }, u, !1, function (t) {
      s("2i09")
    }, "data-v-aa0a4ed2", null).exports, d = {
      render: function () {
        var t = this.$createElement;
        return (this._self._c || t)("div", [this._t("default")], 2)
      }, staticRenderFns: []
    };
    var _ = s("VU/8")({}, d, !1, function (t) {
      s("7vPL")
    }, null, null).exports, f = {components: {"my-form": _}}, p = {
      render: function () {
        var t = this, e = t.$createElement, s = t._self._c || e;
        return s("div", {staticClass: "container"}, [s("div", {staticClass: "content"}, [t._m(0), t._v(" "), s("my-form", [s("p", {staticClass: "form-caption"}, [t._v("Оставьте заявку на "), s("span", [t._v("Бесплатную консультацию")]), t._v(" специалиста!")]), t._v(" "), s("form", {staticClass: "form"}, [s("div", {staticClass: "flex"}, [s("div", {
          staticClass: "form-row",
          attrs: {role: "username"}
        }, [s("input", {
          attrs: {
            id: "form-name",
            type: "text",
            placeholder: "ВАШЕ ИМЯ",
            required: ""
          }
        })]), t._v(" "), s("div", {
          staticClass: "form-row",
          attrs: {role: "usernumber"}
        }, [s("input", {
          attrs: {
            id: "form-phone",
            type: "text",
            placeholder: "ВАШ НОМЕР",
            required: ""
          }
        })]), t._v(" "), s("button", {
          staticClass: "btn", attrs: {type: "submit"}, on: {
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
        "nav-menu": l, "bread-crumbs": v, "header-content": s("VU/8")(f, p, !1, function (t) {
          s("Z3Ep")
        }, null, null).exports
      }
    }, h = {
      render: function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("header", [e("nav-menu"), this._v(" "), e("bread-crumbs"), this._v(" "), e("header-content")], 1)
      }, staticRenderFns: []
    };
    var g = s("VU/8")(m, h, !1, function (t) {
      s("nCz8")
    }, null, null).exports, b = {
      render: function () {
        var t = this, e = t.$createElement, s = t._self._c || e;
        return s("div", {staticClass: "container"}, [t._m(0), t._v(" "), s("ul", t._l(t.advantages, function (e, n) {
          return s("li", {key: n}, [s("h4", [t._v(t._s(e.title))]), t._v(" "), s("p", [t._v(t._s(e.text))])])
        }), 0)])
      }, staticRenderFns: [function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("h3", [this._v("Основные преимущества продвижения сайтов"), e("br"), this._v("\n    от WEB ALTERNATIVE:")])
      }]
    };
    var C = {
      components: {
        Advantages: s("VU/8")({
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
          s("laRe")
        }, "data-v-4eb264ce", null).exports, SectionFooter: s("2WIh").default
      }, computed: i()({}, Object(a.a)(["articles"]))
    }, x = {
      render: function () {
        var t = this, e = t.$createElement, s = t._self._c || e;
        return s("section", [t._m(0), t._v(" "), s("ul", {staticClass: "articles"}, t._l(t.articles, function (e) {
          return s("li", {
            key: e.id,
            staticClass: "articles-item",
            style: e.bg
          }, [s("a", {staticClass: "articles-item-link", attrs: {href: e.url}}, [t._v(t._s(e.topic))])])
        }), 0), t._v(" "), s("Advantages"), t._v(" "), s("section-footer")], 1)
      }, staticRenderFns: [function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("p", {staticClass: "section-caption"}, [this._v("У вас уже есть свой сайт. Замечательно,\n    половина пути пройдена! Но как сделать так,\n    чтобы ваша целевая аудитория нашла"), e("br"), this._v("\n    его и узнала о ваших товарах и услугах?\n    Всё просто – заказать SEO-продвижение в компании WEB ALTERNATIVE.")])
      }]
    };
    var E = s("VU/8")(C, x, !1, function (t) {
      s("uxYF")
    }, "data-v-0f80975c", null).exports, k = {
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
    var y = {
      components: {
        Carousel: s("VU/8")({
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
        }, k, !1, function (t) {
          s("IjOK")
        }, "data-v-84e9b134", null).exports
      }, computed: i()({}, Object(a.a)(["ourWorks"]))
    }, w = {
      render: function () {
        var t = this, e = t.$createElement, s = t._self._c || e;
        return s("section", [s("div", {staticClass: "container"}, [s("h2", {staticClass: "our-works-title"}, [t._v("Посмотрите наши работы")]), t._v(" "), s("div", {staticClass: "our-works"}, t._l(t.ourWorks, function (e) {
          return s("div", {
            key: e.id,
            staticClass: "our-works-item",
            style: e.bg
          }, [s("a", {attrs: {href: e.url}}), t._v(" "), s("h3", [t._v(t._s(e.title))]), t._v(" "), s("p", [t._v(t._s(e.description))])])
        }), 0), t._v(" "), s("h2", {staticClass: "carousel-title"}, [t._v("Нам доверяют:")]), t._v(" "), s("carousel")], 1)])
      }, staticRenderFns: []
    };
    var $ = {
      components: {"my-form": _}, data: function () {
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
    }, R = {
      render: function () {
        var t = this, e = t.$createElement, s = t._self._c || e;
        return s("footer", [s("div", {staticClass: "container"}, [s("div", {staticClass: "flex"}, [t._m(0), t._v(" "), s("my-form", {
          key: 2,
          staticClass: "form-container"
        }, [s("p", {staticClass: "form-caption"}, [t._v("Оставьте заявку или напишите вопрос и получите "), s("br"), t._v(" "), s("span", [t._v("Бесплатную консультацию")]), t._v(" специалиста!\n        ")]), t._v(" "), s("form", {staticClass: "form"}, [s("div", {staticClass: "flex"}, [s("div", {
          staticClass: "form-row",
          attrs: {role: "username"}
        }, [s("input", {
          attrs: {
            type: "text",
            placeholder: "ВАШЕ ИМЯ",
            required: ""
          }
        })]), t._v(" "), s("div", {staticClass: "input-group"}, [s("div", {
          staticClass: "form-row",
          attrs: {role: "usermail"}
        }, [s("input", {
          attrs: {
            type: "email",
            placeholder: "ВАШ E-MAIL",
            required: ""
          }
        })]), t._v(" "), s("div", {
          staticClass: "form-row",
          attrs: {role: "usernumber"}
        }, [s("input", {
          attrs: {
            type: "text",
            placeholder: "ВАШ НОМЕР",
            required: ""
          }
        })])]), t._v(" "), s("div", {staticClass: "form-row"}, [s("textarea", {
          attrs: {
            placeholder: "Текс сообщения",
            required: ""
          }
        })]), t._v(" "), s("button", {
          staticClass: "btn", attrs: {type: "submit"}, on: {
            click: function (t) {
              t.preventDefault()
            }
          }
        }, [t._v("отправить")])])])]), t._v(" "), s("div", {staticClass: "col-social"}, [s("img", {
          staticClass: "col-social-view",
          attrs: {src: "./static/img/footer_fb.png", alt: ""}
        }), t._v(" "), s("ul", {staticClass: "col-social-icons"}, t._l(t.socialIcons, function (t) {
          return s("li", {style: t.icon}, [s("a", {attrs: {href: t.url}})])
        }), 0)])], 1)])])
      }, staticRenderFns: [function () {
        var t = this, e = t.$createElement, s = t._self._c || e;
        return s("div", {staticClass: "col-location"}, [s("a", {
          staticClass: "col-location-logo",
          attrs: {href: "#!"}
        }), t._v(" "), s("div", {staticClass: "col-location-address"}, [s("span", [t._v("ул. Волочаевская, 8г"), s("br"), t._v("\n          тел.: (4212) 25-30-85"), s("br"), t._v("\n          (4212) 470-300")])]), t._v(" "), s("div", {staticClass: "col-location-map"}, [s("a", {attrs: {href: "#!"}}), t._v(" "), s("span", [t._v("Найдите нас"), s("br"), t._v("\n        на карте")])])])
      }]
    };
    var F = {
      name: "App",
      components: {
        "my-header": g, "first-section": E, "second-section": s("VU/8")(y, w, !1, function (t) {
          s("7g+E")
        }, "data-v-798071da", null).exports, "my-footer": s("VU/8")($, R, !1, function (t) {
          s("gqnE")
        }, "data-v-2255192e", null).exports
      }
    }, O = {
      render: function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {attrs: {id: "app"}}, [e("my-header"), this._v(" "), e("first-section"), this._v(" "), e("second-section"), this._v(" "), e("my-footer")], 1)
      }, staticRenderFns: []
    };
    var V = s("VU/8")(F, O, !1, function (t) {
      s("rq1m")
    }, null, null).exports, U = s("/ocq");
    n.a.use(U.a);
    var q = new U.a({routes: []}), A = s("NYxO");
    n.a.use(A.a);
    var I = new A.a.Store({
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
    n.a.config.productionTip = !1, new n.a({el: "#app", router: q, store: I, components: {App: V}, template: "<App/>"})
  }, OxL8: function (t, e) {
  }, XShw: function (t, e) {
  }, Z3Ep: function (t, e) {
  }, gqnE: function (t, e) {
  }, heYf: function (t, e) {
  }, laRe: function (t, e) {
  }, nCz8: function (t, e) {
  }, rq1m: function (t, e) {
  }, uxYF: function (t, e) {
  }
}, ["NHnr"]);
//# sourceMappingURL=app.efee6f84ea2938fe493b.js.map
