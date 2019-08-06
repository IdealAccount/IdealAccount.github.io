webpackJsonp([1], {
  "1Umf": function (t, e) {
  }, "2WIh": function (t, e, n) {
    "use strict";
    var s = n("OxL8"), i = n.n(s), r = n("ROXS");
    var a = function (t) {
      n("Lk9H")
    }, o = n("VU/8")(i.a, r.a, !1, a, "data-v-de761eb4", null);
    e.default = o.exports
  }, "6n+k": function (t, e) {
  }, "6pm2": function (t, e) {
  }, Emj6: function (t, e) {
  }, Fh7J: function (t, e) {
  }, Hs4r: function (t, e) {
    t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAYCAMAAADTXB33AAAAAXNSR0IB2cksfwAAAXdQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////JwQcvQAAAH10Uk5TACFsqdLn06ptI5zy//SeJlXq1pJXPDtWkNXtWW5YBAFS1HSnDwMFAqFc71sNpvCkC6UIz6v3UJNJ+ihwzM17Q03FsSKBumrpTtub+z+ZNXmyNDNPtipM3R6g7IsQfrziyX9T/vwsSIYHnWAKl2V4SsvxhTKD82Mr+S602LUmqvAMAAABQ0lEQVR4nGWS6TtCQRjF3yQpJ0K2LBdR9qVISUqWSMkWQmQphCzZ88e719xR9zofZs47v3neOTPPEHFpKrSVOl2VvtpAShmMNZBlqq0rJ+Z6oKHR0tTc0toGWNtLpEMEnV3MC909QC8nFsDWR/2ssDuEAWBQDjAEPVs3D0vjCI1ijJ03jp4Jtsk4yXo6XZj6DTcNt9x5xigbD7yz4uTDHKmR4Mc8BYILCLkXVYiWsEwr0i3DGjVaxRpRBFiP8oYxjjZgFaO6EOcLsU3utiRE25G/V9nR7SaY28M+KXWQPDw6lkwKJ6RW1H/qEac0zv4hEnznRIGLy4xUZK/i10psTyMkp0FSiW5gyjCXA4y3JeC8A+55kQf8QYd81sMjkCptzD2J8NlTKGRfRPD6Vt793fbBv41X+6kKnch/FcPh4ndcDkA/j1QuytjEolUAAAAASUVORK5CYII="
  }, Lk9H: function (t, e) {
  }, NHnr: function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0});
    var s = n("7+uW"), i = n("Dd8w"), r = n.n(i), a = n("uUlv"), o = {
      render: function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("ul", t._l(t.submenu, function (e) {
          return n("li", [e.url ? n("router-link", {attrs: {to: e.url}}, [t._v(t._s(e.title))]) : n("a", [t._v(t._s(e.title))])], 1)
        }), 0)
      }, staticRenderFns: []
    };
    var c = {
      components: {
        SubMenu: n("VU/8")({
          props: ["submenu"], mounted: function () {
          }
        }, o, !1, function (t) {
          n("1Umf")
        }, "data-v-5632ab52", null).exports
      }, data: function () {
        return {active: !1, show: !1, index: 0}
      }, created: function () {
      }, mounted: function () {
        var t = this;
        this.$nextTick(function () {
          window.addEventListener("scroll", t.isScroll), document.body.addEventListener("keydown", t.showMenu)
        })
      }, methods: {
        isScroll: function () {
          this.$refs.navBar.style.background = pageYOffset > 50 ? "rgb(57, 57, 57)" : ""
        }, showMenu: function (t) {
          var e = document.body.clientWidth;
          e >= 978 && e < 1200 && (27 !== t.keyCode && 77 !== t.keyCode || (this.active = !1)), e >= 1200 && (27 !== t.keyCode && 77 !== t.keyCode || (this.index = null))
        }
      }, watch: {}, computed: r()({}, Object(a.a)(["navigationMenu"]), {
        submenuIndex: function () {
          return this.index
        }
      }), beforeDestroy: function () {
        window.removeEventListener("scroll", this.isScroll)
      }
    }, l = {
      render: function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
          ref: "navBar",
          staticClass: "header-nav"
        }, [n("div", {staticClass: "container"}, [n("div", {staticClass: "flex"}, [n("router-link", {
          staticClass: "header-logo",
          attrs: {to: "home"}
        }), t._v(" "), n("a", {
          staticClass: "header-phone",
          attrs: {href: "tel: (4212)25-30-85"}
        }, [t._v("(4212)25-30-85")]), t._v(" "), n("div", {
          ref: "burger",
          class: [{"is-active": t.active}, "burger"],
          on: {
            click: function (e) {
              t.active = !t.active && (t.index = !t.active)
            }
          }
        }, [t._m(0)])], 1), t._v(" "), n("transition", {attrs: {name: "slide-in"}}, [n("nav", {
          directives: [{
            name: "show",
            rawName: "v-show",
            value: t.active,
            expression: "active"
          }], staticClass: "nav"
        }, [n("ul", {staticClass: "nav-menu"}, t._l(t.navigationMenu, function (e) {
          return n("li", {
            key: e.title,
            class: ["nav-menu-item", {"is-open": !!e.submenu && t.index === e.id}],
            on: {
              click: function (n) {
                t.index = t.index === e.id ? null : e.id
              }
            }
          }, [e.url ? n("router-link", {
            key: e.url,
            staticClass: "nav-menu-link",
            attrs: {to: e.url}
          }, [t._v("\n              " + t._s(e.title) + "\n            ")]) : n("a", {
            key: t.index,
            staticClass: "nav-menu-link"
          }, [t._v(t._s(e.title))]), t._v(" "), n("transition", {
            key: t.index,
            attrs: {name: "slide-in"}
          }, [e.submenu ? n("sub-menu", {
            key: t.index,
            class: {"is-show": e.id === t.submenuIndex},
            attrs: {submenu: e.submenu}
          }) : t._e()], 1)], 1)
        }), 0)])])], 1)])
      }, staticRenderFns: [function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {staticClass: "burger-box"}, [e("div", {staticClass: "burger-inner"})])
      }]
    };
    var u = {
      render: function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("ul", {staticClass: "bread-crumbs"}, t._l(t.breadCrumbs, function (e) {
          return n("li", {staticClass: "bread-crumbs-item"}, [n("router-link", {
            staticClass: "bread-crumbs-link",
            attrs: {to: e.path}
          }, [t._v(t._s(e.title))])], 1)
        }), 0)
      }, staticRenderFns: []
    };
    var d = {
      render: function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {staticClass: "container"}, [e("div", {staticClass: "content-viewport"}, [e("transition", {
          attrs: {
            name: "slide-fade",
            mode: "out-in"
          }
        }, [e("router-view")], 1)], 1)])
      }, staticRenderFns: []
    };
    var v = {
      components: {
        "nav-menu": n("VU/8")(c, l, !1, function (t) {
          n("uBKN")
        }, "data-v-366bb848", null).exports, "bread-crumbs": n("VU/8")({
          data: function () {
            return {
              isActive: !1,
              breadCrumbs: [{path: "/", title: "Главная"}, {path: "/services", title: "Услуги"}, {
                path: "/seo",
                title: "SEO (продвижение в поисковых системах)"
              }]
            }
          }
        }, u, !1, function (t) {
          n("aGwK")
        }, "data-v-195545ff", null).exports, "header-content": n("VU/8")({}, d, !1, function (t) {
          n("hrNM")
        }, null, null).exports
      }
    }, h = {
      render: function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("header", [e("nav-menu"), this._v(" "), e("bread-crumbs"), this._v(" "), e("header-content")], 1)
      }, staticRenderFns: []
    };
    var p = n("VU/8")(v, h, !1, function (t) {
      n("rr6c")
    }, null, null).exports, m = {
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
    var f = {
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
        }, m, !1, function (t) {
          n("ZU13")
        }, "data-v-67d8bc17", null).exports, SectionFooter: n("2WIh").default
      }, data: function () {
        return {show: !1, index: null}
      }, computed: r()({}, Object(a.a)(["articles"]))
    }, _ = {
      render: function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("section", [t._m(0), t._v(" "), n("ul", {staticClass: "articles"}, t._l(t.articles, function (e, s) {
          return n("li", {
            key: e.id,
            staticClass: "articles-item",
            style: e.bg,
            attrs: {index: s},
            on: {
              mouseover: function (e) {
                t.index = s
              }, mouseleave: function (e) {
                t.index = null
              }
            }
          }, [n("a", {
            staticClass: "articles-item-link",
            attrs: {href: e.url}
          }, [t._v(t._s(e.topic))]), t._v(" "), n("transition", {
            attrs: {
              name: "fade",
              tag: "div"
            }
          }, [n("div", {
            directives: [{name: "show", rawName: "v-show", value: t.index == s, expression: "index == i"}],
            key: e.id,
            staticClass: "articles-item-popup"
          }, [n("h3", [t._v("Почему важна внутренняя оптимизация сайта?")]), t._v(" "), n("div", {staticClass: "articles-item-popup__content"}, [n("p", [t._v("  Раскрутка любого проекта проходит в несколько этапов. Процедура внутренней оптимизации\n                призвана сделать ваш сайт лучше, увеличить шансы на вывод в топ поисковой выдачи.")]), t._v(" "), n("p", [t._v("Это предварительный этап работ, благодаря которому появится прочный фундамент для\n                выстраивания бизнеса в интернете. Наши специалисты знают всё об эффективной оптимизации сайтов.\n                Мы проанализируем имеющиеся тексты и изображения, навигацию по сайту, тщательно проверим код на\n                наличие серьезных ошибок, протестируем юзабилити. Проведение предварительных работ позволит сделать\n                ваш сайт более заметным в интернете, увеличить его позиции в поисковой выдаче по интересующим\n                вас поисковым запросам.")])]), t._v(" "), n("a", {
            staticClass: "btn-more",
            attrs: {href: "#!"}
          }, [t._v("Узнать подробнее")])])])], 1)
        }), 0), t._v(" "), n("Advantages"), t._v(" "), n("section-footer")], 1)
      }, staticRenderFns: [function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("p", {staticClass: "section-caption"}, [this._v("У вас уже есть свой сайт. Замечательно,\n    половина пути пройдена! Но как сделать так,\n    чтобы ваша целевая аудитория нашла"), e("br"), this._v("\n    его и узнала о ваших товарах и услугах?\n    Всё просто – заказать SEO-продвижение в компании WEB ALTERNATIVE.")])
      }]
    };
    var g = n("VU/8")(f, _, !1, function (t) {
      n("Fh7J")
    }, "data-v-6493cfc9", null).exports, b = n("7QTg"), C = (n("v2ns"), {
      components: {swiper: b.swiper, swiperSlide: b.swiperSlide}, data: function () {
        return {
          swiperOptions: {
            slidesPerView: 2,
            spaceBetween: 20,
            loop: !0,
            breakpointsInverse: !0,
            grabCursor: !0,
            navigation: {nextEl: ".next", prevEl: ".prev"},
            breakpoints: {
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
                pagination: {
                  el: ".swiper-pagination",
                  clickable: !0,
                  progressbarOpposite: !0,
                  hideOnClick: !0,
                  dynamicBullets: !0,
                  dynamicMainBullets: 1,
                  type: "bullets"
                }
              },
              480: {slidesPerView: 3},
              640: {slidesPerView: 4},
              816: {slidesPerView: 5},
              1024: {slidesPerView: 6},
              1200: {slidesPerView: 7, spaceBetween: 0}
            }
          }
        }
      }, computed: {
        swiper: function () {
          return this.$refs.mySwiper.swiper
        }, slides: function () {
          for (var t = [], e = 0; e <= 11; e++) t.push({
            id: e,
            bg: "background: url(./static/img/icons_sprite.png) no-repeat center",
            url: "#!"
          });
          return t
        }
      }, mounted: function () {
      }
    }), w = {
      render: function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {staticClass: "carousel-container"}, [e("swiper", {
          ref: "mySwiper",
          staticClass: "carousel",
          attrs: {options: this.swiperOptions}
        }, [this._l(this.slides, function (t) {
          return e("swiper-slide", {key: t.id, staticClass: "carousel-slide"}, [e("a", {
            style: t.bg,
            attrs: {href: t.url}
          })])
        }), this._v(" "), e("div", {
          staticClass: "swiper-pagination",
          attrs: {slot: "pagination"},
          slot: "pagination"
        })], 2), this._v(" "), e("div", {
          staticClass: "prev",
          attrs: {slot: "button-prev"},
          slot: "button-prev"
        }), this._v(" "), e("div", {staticClass: "next", attrs: {slot: "button-next"}, slot: "button-next"})], 1)
      }, staticRenderFns: []
    };
    var x = {
      components: {
        Carousel: n("VU/8")(C, w, !1, function (t) {
          n("zNnU")
        }, "data-v-74ba4cce", null).exports
      }, computed: r()({}, Object(a.a)(["ourWorks"]))
    }, k = {
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
    var y = n("VU/8")(x, k, !1, function (t) {
      n("sI5d")
    }, "data-v-00a362af", null).exports, E = {
      render: function () {
        var t = this.$createElement;
        return (this._self._c || t)("div", [this._t("default")], 2)
      }, staticRenderFns: []
    };
    var A = n("VU/8")({}, E, !1, function (t) {
      n("6n+k")
    }, null, null).exports, R = {
      components: {"my-form": A}, data: function () {
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
    }, S = {
      render: function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("footer", [n("div", {staticClass: "container"}, [n("div", {staticClass: "flex"}, [t._m(0), t._v(" "), n("my-form", {staticClass: "form-container"}, [n("p", {staticClass: "form-caption"}, [t._v("Оставьте заявку или напишите вопрос и получите "), n("br"), t._v(" "), n("span", [t._v("Бесплатную консультацию")]), t._v(" специалиста!\n        ")]), t._v(" "), n("form", {staticClass: "form"}, [n("div", {staticClass: "flex"}, [n("div", {
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
          attrs: {type: "submit"}
        }, [t._v("отправить")])])])]), t._v(" "), n("div", {staticClass: "col-social"}, [n("img", {
          staticClass: "col-social-view",
          attrs: {src: "./static/img/footer_fb.png"}
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
    var V = {
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
    var U = {
      render: function () {
        this.$createElement;
        this._self._c;
        return this._m(0)
      }, staticRenderFns: [function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", [e("span", [this._v("История компании")]), this._v(" "), e("img", {attrs: {src: n("Hs4r")}})])
      }]
    };
    var $ = {
      name: "App",
      components: {
        "my-header": p,
        "first-section": g,
        "second-section": y,
        "my-footer": n("VU/8")(R, S, !1, function (t) {
          n("pwRe")
        }, "data-v-ea08f0c8", null).exports,
        ScrollArrow: n("VU/8")(V, F, !1, function (t) {
          n("SODx")
        }, null, null).exports,
        HistoryBadge: n("VU/8")(null, U, !1, function (t) {
          n("g/m/")
        }, "data-v-64ceabce", null).exports
      }
    }, O = {
      render: function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {attrs: {id: "app"}}, [e("my-header"), this._v(" "), e("first-section"), this._v(" "), e("second-section"), this._v(" "), e("my-footer"), this._v(" "), e("scroll-arrow"), this._v(" "), e("history-badge")], 1)
      }, staticRenderFns: []
    };
    var B = n("VU/8")($, O, !1, function (t) {
      n("6pm2")
    }, null, null).exports, M = n("/ocq"), N = {
      render: function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {
          key: 989,
          staticClass: "content"
        }, [e("h1", {staticClass: "content-title"}, [this._v("\n    Services\n  ")])])
      }, staticRenderFns: []
    }, T = n("VU/8")(null, N, !1, null, null, null).exports, H = {
      render: function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {
          key: 929,
          staticClass: "content"
        }, [e("h1", {staticClass: "content-title"}, [this._v("\n    Studio\n  ")])])
      }, staticRenderFns: []
    }, D = n("VU/8")(null, H, !1, null, null, null).exports, I = {
      render: function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {
          key: 877,
          staticClass: "content"
        }, [e("h1", {staticClass: "content-title"}, [this._v("\n    Team\n  ")])])
      }, staticRenderFns: []
    }, W = n("VU/8")(null, I, !1, null, null, null).exports, L = {
      render: function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {
          key: 543,
          staticClass: "content"
        }, [e("h1", {staticClass: "content-title"}, [this._v("\n    Portfolio\n  ")])])
      }, staticRenderFns: []
    }, j = n("VU/8")(null, L, !1, null, null, null).exports, P = {
      render: function () {
        this.$createElement;
        this._self._c;
        return this._m(0)
      }, staticRenderFns: [function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {staticClass: "content"}, [e("h1", {staticClass: "content-title"}, [this._v("\n    Blog\n  ")])])
      }]
    }, K = n("VU/8")(null, P, !1, null, null, null).exports, Q = {
      render: function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {
          key: 548,
          staticClass: "content"
        }, [e("h1", {staticClass: "content-title"}, [this._v("\n    Reviews\n  ")])])
      }, staticRenderFns: []
    }, q = n("VU/8")(null, Q, !1, null, null, null).exports, z = {
      render: function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {
          key: 345,
          staticClass: "content"
        }, [e("h1", {staticClass: "content-title"}, [this._v("\n    Contacts\n  ")])])
      }, staticRenderFns: []
    }, X = n("VU/8")(null, z, !1, null, null, null).exports, J = {
      render: function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {staticClass: "content"}, [n("h1", {staticClass: "content-title"}, [t._v("Home")]), t._v(" "), n("div", {staticClass: "home-text"}, [n("p", [t._v("Изображение по которому верстал в папке.Ширина макета 1717px")]), t._v(" "), n("hr"), t._v(" "), n("p", {
          on: {
            mouseover: function (e) {
              t.bounce = !0
            }, mouseleave: function (e) {
              t.bounce = !1
            }
          }
        }, [t._v("Эта страница создана для примера,\n      нажмите "), n("router-link", {
          class: [{animate: t.bounce}, "mark"],
          attrs: {to: "/seo"},
          on: {
            mouseover: function (e) {
              t.bounce = !0
            }
          }
        }, [t._v("сюда")]), t._v(", чтобы начать\n    ")], 1)])])
      }, staticRenderFns: []
    };
    var Y = n("VU/8")({
      data: function () {
        return {bounce: !1}
      }
    }, J, !1, function (t) {
      n("ngGA")
    }, null, null).exports, G = {components: {"my-form": A}}, Z = {
      render: function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {
          key: 777,
          staticClass: "content content-seo"
        }, [t._m(0), t._v(" "), n("my-form", [n("p", {staticClass: "form-caption"}, [t._v("Оставьте заявку на "), n("span", [t._v("Бесплатную консультацию")]), t._v(" специалиста!")]), t._v(" "), n("form", {staticClass: "form"}, [n("div", {staticClass: "flex"}, [n("div", {
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
          attrs: {type: "submit"}
        }, [t._v("отправить")])])])]), t._v(" "), t._m(1)], 1)
      }, staticRenderFns: [function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("h1", {staticClass: "content-title"}, [this._v("Нужно SEO-продвижение для Вашего сайта?\n    "), e("span", [this._v("Мы подберем вариант")])])
      }, function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", {staticClass: "seo-rating"}, [e("h2", [this._v("TOP 1")]), this._v(" "), e("span", [this._v("В РЕЙТИНГЕ ЛУЧШИХ ВЕБ-СТУДИЙ ДАЛЬНЕГО ВОСТОКА")])])
      }]
    };
    var tt = [{path: "/", name: "Главная", component: Y}, {
      path: "/services",
      name: "Услуги",
      component: T
    }, {path: "/studio", name: "Студия", component: D}, {
      path: "/team",
      name: "Наша команда",
      component: W
    }, {path: "/portfolio", name: "Портфолио", component: j}, {
      path: "/blog",
      name: "Блог",
      component: K
    }, {path: "/reviews", name: "Отзывы", component: q}, {
      path: "/contacts",
      name: "Контакты",
      component: X
    }, {path: "*", component: Y}, {
      path: "/seo", name: "SEO(Продвижение)", component: n("VU/8")(G, Z, !1, function (t) {
        n("Emj6")
      }, null, null).exports
    }];
    s.a.use(M.a);
    var et = new M.a({mode: "history", routes: tt}), nt = n("NYxO");
    s.a.use(nt.a);
    var st = new nt.a.Store({
      state: {
        navigationMenu: [{id: 1, title: "Студия", url: "/studio"}, {
          id: 2,
          title: "Наша команда",
          submenu: [{title: "item1"}, {title: "item2"}, {title: "item3"}, {title: "item4"}, {title: "item5"}]
        }, {id: 3, title: "Портфолио", url: "/portfolio"}, {
          id: 4,
          title: "Услуги",
          url: "/services",
          submenu: [{
            title: "SEO (продвижение в поисковых системах)",
            url: "/seo"
          }, {title: "item1"}, {title: "item2"}, {title: "item3"}]
        }, {id: 5, title: "Блог", url: "/blog"}, {id: 6, title: "Отзывы", url: "/reviews"}, {
          id: 7,
          title: "Контакты",
          url: "/contacts"
        }],
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
    s.a.config.productionTip = !1, new s.a({
      el: "#app",
      router: et,
      store: st,
      components: {App: B},
      template: "<App/>"
    })
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
  }, SODx: function (t, e) {
  }, ZU13: function (t, e) {
  }, aGwK: function (t, e) {
  }, "g/m/": function (t, e) {
  }, hrNM: function (t, e) {
  }, ngGA: function (t, e) {
  }, pwRe: function (t, e) {
  }, rr6c: function (t, e) {
  }, sI5d: function (t, e) {
  }, uBKN: function (t, e) {
  }, v2ns: function (t, e) {
  }, zNnU: function (t, e) {
  }
}, ["NHnr"]);
//# sourceMappingURL=app.e064bf0064dece93c7e7.js.map
