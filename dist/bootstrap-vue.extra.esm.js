var test={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v("Test Component")])},staticRenderFns:[]},components=Object.freeze({bExTest:test}),test$1={},directives=Object.freeze({bExTest:test$1}),VuePlugin={install:function(e){if(!e._bootstrap_vue_installed)return void console.error("BootstrapVue is not installed");if(!e._bootstrap_vue_extra_installed){e._bootstrap_vue_extra_installed=!0;for(var t in components)e.component(t,components[t]);for(var n in directives)e.directive(n,directives[n])}}};"undefined"!=typeof window&&window.Vue&&window.Vue.use(VuePlugin);export default VuePlugin;
//# sourceMappingURL=bootstrap-vue.extra.esm.js.map
