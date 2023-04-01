(window.webpackJsonp = window.webpackJsonp || []).push([[4], {
    349: function(t, e, n) {
        "use strict";
        n.r(e);
        var o = {
            name: "subHeaderBar",
            props: {
                color: {
                    type: String,
                    default: "white"
                },
                tab: {
                    type: String,
                    default: "overview"
                }
            },
            data: function() {
                return {
                    subHeadings: [{
                        id: "01",
                        heading: "overview"
                    }, {
                        id: "02",
                        heading: "structure"
                    }, {
                        id: "03",
                        heading: "surface"
                    }]
                }
            },
            methods: {
                SECLECT_TAB: function(t, e) {
                    this.$emit("UPDATE_TAB_IN_VIEW", t),
                    this.$refs.activeTabIndicator.style.left = "".concat(e.target.offsetLeft, "px")
                }
            }
        }
          , r = n(45)
          , component = Object(r.a)(o, (function() {
            var t = this
              , e = t._self._c;
            return e("div", {
                staticClass: "md:hidden"
            }, [e("div", {
                staticClass: "w-[87.2%] m-auto relative max-w-[450px] flex justify-between items-center leading-[10.08px]"
            }, [t._l(t.subHeadings, (function(n) {
                return e("button", {
                    key: n.id,
                    staticClass: "py-5 w-[80px] font-bold tracking-[1.93px] text-[9px] text-pf-inactive hover:text-white",
                    on: {
                        click: function(e) {
                            return t.SECLECT_TAB(n, e)
                        }
                    }
                }, [t._v(" \n         " + t._s(n.heading.toUpperCase()) + " \n      ")])
            }
            )), t._v(" "), e("div", {
                staticClass: "absolute h-full w-full z-[-1]"
            }, [e("span", {
                ref: "activeTabIndicator",
                staticClass: "w-[80px] block h-1 absolute bottom-0 left-0",
                style: {
                    background: t.color
                }
            })])], 2)])
        }
        ), [], !1, null, null, null);
        e.default = component.exports
    }
}]);
