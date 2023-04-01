(window.webpackJsonp = window.webpackJsonp || []).push([[5], {
    346: function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(10)
          , o = (n(43),
        n(188))
          , c = {
            name: "IndexPage",
            data: function() {
                return {}
            },
            fetch: function() {
                var t = this;
                return Object(r.a)(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                t.SET_STATE();
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            computed: {
                planets: function() {
                    return this.$store.state.planets
                }
            },
            methods: {
                SET_STATE: function() {
                    0 === this.$store.state.planets.length ? Object(o.a)(this.$store) : console.log("Data in store")
                }
            },
            mounted: function() {
                this.$router.push("/planets/earth")
            }
        }
          , l = n(45)
          , component = Object(l.a)(c, (function() {
            return (0,
            this._self._c)("div")
        }
        ), [], !1, null, null, null);
        e.default = component.exports
    }
}]);
