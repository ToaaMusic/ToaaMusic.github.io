import { defineComponent, mergeProps, useSSRContext, resolveComponent, withCtx, createVNode, resolveDynamicComponent, ref, onMounted, onUnmounted, unref, createTextVNode, onBeforeUnmount, watch, createElementBlock, openBlock, normalizeClass, createElementVNode, renderSlot, computed, Fragment, createCommentVNode, renderList, createBlock, toDisplayString, resolveDirective, withDirectives, normalizeStyle, withModifiers, vShow, createStaticVNode, nextTick, createApp } from "vue";
import { defineStore, createPinia } from "pinia";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderVNode, ssrRenderSlot, ssrRenderTeleport, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrGetDirectiveProps, ssrRenderStyle } from "vue/server-renderer";
import { useRouter, RouterLink, useRoute, createRouter, createWebHistory } from "vue-router";
import { createClient } from "@supabase/supabase-js";
import MarkdownIt from "markdown-it";
import Prism from "prismjs";
import "prismjs/components/prism-csharp.js";
import "prismjs/components/prism-bash.js";
import "prismjs/components/prism-javascript.js";
import "prismjs/components/prism-json.js";
import "prismjs/components/prism-markdown.js";
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "MenuIcon",
  __ssrInlineRender: true,
  props: {
    hovered: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        class: [["more", { hovered: __props.hovered }], "more"],
        width: "10",
        height: "10",
        viewBox: "0 0 9 9",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))} data-v-cf2692df><path fill-rule="evenodd" clip-rule="evenodd" d="M7.50588 3.40623C7.40825 3.3086 7.24996 3.3086 7.15232 3.40623L4.41244 6.14612L1.67255 3.40623C1.57491 3.3086 1.41662 3.3086 1.31899 3.40623C1.22136 3.50386 1.22136 3.66215 1.31899 3.75978L4.11781 6.5586C4.28053 6.72132 4.54434 6.72132 4.70706 6.5586L7.50588 3.75978C7.60351 3.66215 7.60351 3.50386 7.50588 3.40623Z" fill="currentColor" data-v-cf2692df></path><path d="M7.15232 3.40623L7.50588 3.75978L7.50588 3.75978L7.15232 3.40623ZM7.50588 3.40623L7.15232 3.75978L7.15233 3.75978L7.50588 3.40623ZM4.41244 6.14612L4.05888 6.49967C4.15265 6.59344 4.27983 6.64612 4.41244 6.64612C4.54504 6.64612 4.67222 6.59344 4.76599 6.49967L4.41244 6.14612ZM1.67255 3.40623L2.0261 3.05268L2.0261 3.05268L1.67255 3.40623ZM1.31899 3.40623L0.965439 3.05268L0.965439 3.05268L1.31899 3.40623ZM1.31899 3.75978L1.67255 3.40623V3.40623L1.31899 3.75978ZM4.11781 6.5586L3.76425 6.91215L4.11781 6.5586ZM4.70706 6.5586L4.35351 6.20505L4.70706 6.5586ZM7.50588 3.75978L7.15233 3.40623L7.15232 3.40623L7.50588 3.75978ZM7.50588 3.75978C7.40825 3.85742 7.24996 3.85742 7.15232 3.75978L7.85943 3.05268C7.56654 2.75978 7.09166 2.75978 6.79877 3.05268L7.50588 3.75978ZM4.76599 6.49967L7.50588 3.75978L6.79877 3.05268L4.05888 5.79257L4.76599 6.49967ZM1.31899 3.75978L4.05888 6.49967L4.76599 5.79257L2.0261 3.05268L1.31899 3.75978ZM1.67254 3.75979C1.57491 3.85742 1.41662 3.85742 1.31899 3.75979L2.0261 3.05268C1.73321 2.75978 1.25833 2.75978 0.965439 3.05268L1.67254 3.75979ZM1.67255 3.40623C1.77018 3.50386 1.77018 3.66215 1.67255 3.75978L0.965439 3.05268C0.672546 3.34557 0.672546 3.82044 0.965439 4.11334L1.67255 3.40623ZM4.47136 6.20505L1.67255 3.40623L0.965439 4.11334L3.76425 6.91215L4.47136 6.20505ZM4.35351 6.20505C4.38605 6.1725 4.43882 6.1725 4.47136 6.20505L3.76425 6.91215C4.12223 7.27013 4.70264 7.27013 5.06062 6.91215L4.35351 6.20505ZM7.15232 3.40623L4.35351 6.20505L5.06062 6.91215L7.85943 4.11334L7.15232 3.40623ZM7.15233 3.75978C7.05469 3.66215 7.05469 3.50386 7.15233 3.40623L7.85943 4.11334C8.15233 3.82045 8.15233 3.34557 7.85943 3.05268L7.15233 3.75978Z" fill="currentColor" data-v-cf2692df></path></svg>`);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/MenuIcon.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const useScrollStore = defineStore("scroll", {
  state: () => ({
    showAvatarInNavbar: false,
    activeHeadingId: ""
  }),
  actions: {
    updateAvatarVisibility(isVisible) {
      this.showAvatarInNavbar = isVisible;
    },
    setActiveHeading(id) {
      this.activeHeadingId = id;
    }
  }
});
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "IconGithub",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor"
      }, _attrs))}><path d="M4.0744 2.9938C4.13263 1.96371 4.37869 1.51577 5.08432 1.15606C5.84357 0.768899 7.04106 0.949072 8.45014 1.66261C9.05706 1.97009 9.11886 1.97635 10.1825 1.83998C11.5963 1.65865 13.4164 1.65929 14.7213 1.84164C15.7081 1.97954 15.7729 1.97265 16.3813 1.66453C18.3814 0.651679 19.9605 0.71795 20.5323 1.8387C20.8177 2.39812 20.8707 3.84971 20.6494 5.04695C20.5267 5.71069 20.5397 5.79356 20.8353 6.22912C22.915 9.29385 21.4165 14.2616 17.8528 16.1155C17.5801 16.2574 17.3503 16.3452 17.163 16.4167C16.5879 16.6363 16.4133 16.703 16.6247 17.7138C16.7265 18.2 16.8491 19.4088 16.8973 20.4002C16.9844 22.1922 16.9831 22.2047 16.6688 22.5703C16.241 23.0676 15.6244 23.076 15.2066 22.5902C14.9341 22.2734 14.9075 22.1238 14.9075 20.9015C14.9075 19.0952 14.7095 17.8946 14.2417 16.8658C13.6854 15.6415 14.0978 15.185 15.37 14.9114C17.1383 14.531 18.5194 13.4397 19.2892 11.8146C20.0211 10.2698 20.1314 8.13501 18.8082 6.83668C18.4319 6.3895 18.4057 5.98446 18.6744 4.76309C18.7748 4.3066 18.859 3.71768 18.8615 3.45425C18.8653 3.03823 18.8274 2.97541 18.5719 2.97541C18.4102 2.97541 17.7924 3.21062 17.1992 3.49805L16.2524 3.95695C16.1663 3.99866 16.07 4.0147 15.975 4.0038C13.5675 3.72746 11.2799 3.72319 8.86062 4.00488C8.76526 4.01598 8.66853 3.99994 8.58215 3.95802L7.63585 3.49882C7.04259 3.21087 6.42482 2.97541 6.26317 2.97541C5.88941 2.97541 5.88379 3.25135 6.22447 4.89078C6.43258 5.89203 6.57262 6.11513 5.97101 6.91572C5.06925 8.11576 4.844 9.60592 5.32757 11.1716C5.93704 13.1446 7.4295 14.4775 9.52773 14.9222C10.7926 15.1903 11.1232 15.5401 10.6402 16.9905C10.26 18.1319 10.0196 18.4261 9.46707 18.4261C8.72365 18.4261 8.25796 17.7821 8.51424 17.1082C8.62712 16.8112 8.59354 16.7795 7.89711 16.5255C5.77117 15.7504 4.14514 14.0131 3.40172 11.7223C2.82711 9.95184 3.07994 7.64739 4.00175 6.25453C4.31561 5.78028 4.32047 5.74006 4.174 4.83217C4.09113 4.31822 4.04631 3.49103 4.0744 2.9938Z"></path> <path d="M3.33203 15.9454C3.02568 15.4859 2.40481 15.3617 1.94528 15.6681C1.48576 15.9744 1.36158 16.5953 1.66793 17.0548C1.8941 17.3941 2.16467 17.6728 2.39444 17.9025C2.4368 17.9449 2.47796 17.9858 2.51815 18.0257C2.71062 18.2169 2.88056 18.3857 3.05124 18.5861C3.42875 19.0292 3.80536 19.626 4.0194 20.6962C4.11474 21.1729 4.45739 21.4297 4.64725 21.5419C4.85315 21.6635 5.07812 21.7352 5.26325 21.7819C5.64196 21.8774 6.10169 21.927 6.53799 21.9559C7.01695 21.9877 7.53592 21.998 7.99999 22.0008C8.00033 22.5527 8.44791 23.0001 8.99998 23.0001C9.55227 23.0001 9.99998 22.5524 9.99998 22.0001V21.0001C9.99998 20.4478 9.55227 20.0001 8.99998 20.0001C8.90571 20.0001 8.80372 20.0004 8.69569 20.0008C8.10883 20.0026 7.34388 20.0049 6.67018 19.9603C6.34531 19.9388 6.07825 19.9083 5.88241 19.871C5.58083 18.6871 5.09362 17.8994 4.57373 17.2891C4.34391 17.0194 4.10593 16.7834 3.91236 16.5914C3.87612 16.5555 3.84144 16.5211 3.80865 16.4883C3.5853 16.265 3.4392 16.1062 3.33203 15.9454Z"></path></svg>`);
    };
  }
});
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconGithub.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const _sfc_main$s = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path fill="none" d="M0 0h24v24H0z"></path> <path d="M7.172 2.757L10.414 6h3.171l3.243-3.242a1 1 0 0 1 1.415 1.415l-1.829 1.827L18.5 6A3.5 3.5 0 0 1 22 9.5v8a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 17.5v-8A3.5 3.5 0 0 1 5.5 6h2.085L5.757 4.171a1 1 0 0 1 1.415-1.415zM18.5 8h-13a1.5 1.5 0 0 0-1.493 1.356L4 9.5v8a1.5 1.5 0 0 0 1.356 1.493L5.5 19h13a1.5 1.5 0 0 0 1.493-1.356L20 17.5v-8A1.5 1.5 0 0 0 18.5 8zM8 11a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm8 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1z"></path></svg>`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/IconBilibili.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const IconBilibili = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$r = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    fill: "currentColor",
    height: "200px",
    width: "200px",
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 431.908 431.908",
    "xml:space": "preserve"
  }, _attrs))}><path d="M86.064,279.116c-1.955-5.355-5.898-7.865-9.944-8.145c-3.205-2.198-7.402-3.157-11.971-2.04 c-11.211,2.742-15.273,15.386-14.057,25.674c1.464,12.39,13.838,18.922,25.042,13.057 C85.212,302.387,89.904,289.657,86.064,279.116z"></path><path d="M132.077,264.365c-9.031-9.423-23.283-7.46-31.104,3.776c-6.949,9.988-10.714,28.184-7.976,40.092 c3.483,15.135,20.451,18.719,29.773,6.484c8.804-11.553,12.753-26.492,13.939-40.725 C137.102,269.299,135.026,266.209,132.077,264.365z"></path><path d="M181.41,280.151c-0.829-5.627-5.328-8.184-10.168-8.427c-2.251-1.376-4.848-2.251-7.746-2.15 c-7.88,0.274-12.806,7.28-16.127,13.592c-6.436,12.232-15.055,32.277-9.129,46.029c2.791,6.482,9.127,10.72,16.287,9.792 c7.501-0.973,12.539-7.511,16.618-13.294C180.506,312.419,183.749,296.053,181.41,280.151z"></path><path d="M216.561,315.24c-0.655-1.083-1.492-1.951-2.415-2.692c-6.889-7.124-16.595-8.772-25.04-1.397 c-8.06,7.04-12.563,22.692-9.598,32.968c3.893,13.494,19.782,14.138,28.629,5.238C216.553,340.894,223.299,326.384,216.561,315.24z "></path><path d="M360.301,243.312c14.612-38.196-42.94-64.975-69.229-79.915c-19.117-10.865-45.247-29.418-68.157-34.924 c-3.665-2.679-8.636-4.013-13.195-3.699c-2.08-0.917-4.332-1.394-6.38-0.847c-6.334,1.694-11.272,5.344-16.583,9.019 c-3.363,2.327-7.314,4.726-10.326,7.782c-7.712,0.76-14.824,7.132-11.811,16.643c6.422,20.294,6.33,58.443-26.612,46.848 c-28.009-9.858-25.213-39.833-21.688-62.987c1.064-6.986-2.953-15.499-11.379-14.938c-41.465,2.762-79.347,25.477-96.907,64.114 c-13.445,29.585-12.691,75.923,23.143,88.247c1.042,0.358,2.048,0.122,3.043-0.073c4.62,3.689,11.837-0.462,12.595-6.485 c0.296-2.341,12.683-5.991,14.576-6.375c3.073-0.624,16.502-2.587,18.646,0.461c5.535,7.871,16.855,3.524,17.732-3.745 c11.667-12.58,29.211-20.33,38.779-0.365c4.213,8.792,14.544,6.403,18.856-0.131c17.841-0.939,32.063,8.068,32.231,28.618 c0.026,3.19,1.427,5.235,3.314,6.435c1.283,2.176,3.741,3.632,7.093,2.897c38.837-8.504,13.424,42.229,28.199,57.748 c9.942,10.442,24.076,4.386,27.805-8.039c4.862-16.191,4.296-37.837-6.337-51.452c-10.212-13.075-25.649-21.135-39.223-31.087 c11.636,0.898,38.846,21.628,41.548,24.196c7.055,6.71,10.006,13.06,11.063,22.277c0.77,6.719-0.624,12.518,2.105,19.027 c5.64,13.459,22,15.312,30.546,3.179c10.116-14.358,6.311-41.031-4.979-53.452c-8.326-9.164-20.816-15.977-30.796-22.942 c-12.158-8.482-24.487-16.759-36.981-24.744c0.949-3.737,4.375-7.11,10.986-10.012c3.386,1.93,6.604,4.104,9.662,6.521 c7.294,5.177,14.359,10.801,21.509,16.178c9.044,6.801,20.232,13.194,27.904,21.439c11.191,12.031,8.543,20.411,12.323,34.308 c3.783,13.902,15.705,21.953,26.66,8.18c12.678-15.941,7.257-51.822-5.49-65.996c-10.769-11.976-27.062-20.45-40.201-29.333 c-16.187-10.945-32.827-21.122-49.611-31.12c8.963-6.26,39.288,15.996,44.174,19.454c17.094,12.098,33.993,23.339,47.128,39.904 c9.351,11.795,18.525,20.635,32.221,8.705c2.339-2.039,3.08-5.745,2.283-8.636L360.301,243.312z"></path><path d="M340.866,134.172c-17.252-12.229-35.632-23.114-53.662-33.665c-20.366-11.916-43.03-27.852-66.915-31.172 c-23.839-3.314-86.702,14.025-87.981,44.703c-1.753,1.038-3.207,2.624-3.916,4.848c-6.036,18.931-20.893,84.366,17.106,82.489 c20.143-0.995,19.227-27.893,13.023-48.568c2.91-8.173,7.742-14.748,16.415-20.757c6.528-4.522,13.6-8.578,20.298-13.064 c34.368,7.411,64.832,15.472,96.97,32.791c12.147,6.547,24.303,13.305,35.497,21.417c15.928,11.543,83.811,72.642,25.156,92.182 c-2.475,0.825-4.052,2.377-5.163,4.151c-2.222,0.472-4.229,1.694-4.752,4.449c-3.974,20.908,13.286,27.429,31.499,24.646 c27.443-4.195,50.608-20.82,56.085-48.889C440.898,196.57,391.083,146.135,340.866,134.172z"></path></svg>`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/FriendsIcon.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const FriendsIcon = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "Avatar",
  __ssrInlineRender: true,
  props: {
    size: {
      type: String,
      default: "la",
      validator: (val) => ["la", "sm"].includes(val)
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["profile", {
          "large": __props.size === "la",
          "small": __props.size === "sm"
        }]
      }, _attrs))} data-v-a55dc3ae><img class="${ssrRenderClass([{
        "large": __props.size === "la",
        "small": __props.size === "sm"
      }, "avatar"])}" src="https://enhiucyodopknrbdtswy.supabase.co/storage/v1/object/public/avatars/0acac23b-b02b-43f8-9087-f01f16365e98/1.jpg" alt="avatar" data-v-a55dc3ae>`);
      if (__props.size === "la") {
        _push(`<h1 data-v-a55dc3ae>ToaaM</h1>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div data-v-a55dc3ae><a class="svgbtn" href="https://github.com/ToaaMusic" target="_blank" rel="noopener noreferrer" data-v-a55dc3ae>`);
      _push(ssrRenderComponent(_sfc_main$t, null, null, _parent));
      _push(`</a><a class="svgbtn" href="https://space.bilibili.com/475928698?spm_id_from=333.1007.0.0" target="_blank" rel="noopener noreferrer" data-v-a55dc3ae>`);
      _push(ssrRenderComponent(IconBilibili, null, null, _parent));
      _push(`</a>`);
      _push(ssrRenderComponent(_component_RouterLink, {
        class: "svgbtn",
        title: "友链相关",
        to: "/friends",
        target: "_blank",
        rel: "noopener noreferrer"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(FriendsIcon, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(FriendsIcon)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Avatar.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const Avatar = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-a55dc3ae"]]);
const _sfc_main$p = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M20.3116 12.6473L20.8293 10.7154C21.4335 8.46034 21.7356 7.3328 21.5081 6.35703C21.3285 5.58657 20.9244 4.88668 20.347 4.34587C19.6157 3.66095 18.4881 3.35883 16.2331 2.75458C13.978 2.15033 12.8504 1.84821 11.8747 2.07573C11.1042 2.25537 10.4043 2.65945 9.86351 3.23687C9.27709 3.86298 8.97128 4.77957 8.51621 6.44561C8.43979 6.7254 8.35915 7.02633 8.27227 7.35057L8.27222 7.35077L7.75458 9.28263C7.15033 11.5377 6.84821 12.6652 7.07573 13.641C7.25537 14.4115 7.65945 15.1114 8.23687 15.6522C8.96815 16.3371 10.0957 16.6392 12.3508 17.2435L12.3508 17.2435C14.3834 17.7881 15.4999 18.0873 16.415 17.9744C16.5152 17.9621 16.6129 17.9448 16.7092 17.9223C17.4796 17.7427 18.1795 17.3386 18.7203 16.7612C19.4052 16.0299 19.7074 14.9024 20.3116 12.6473Z" stroke="#1C274C" stroke-width="1.5"></path><path opacity="0.5" d="M16.415 17.9741C16.2065 18.6126 15.8399 19.1902 15.347 19.6519C14.6157 20.3368 13.4881 20.6389 11.2331 21.2432C8.97798 21.8474 7.85044 22.1495 6.87466 21.922C6.10421 21.7424 5.40432 21.3383 4.86351 20.7609C4.17859 20.0296 3.87647 18.9021 3.27222 16.647L2.75458 14.7151C2.15033 12.46 1.84821 11.3325 2.07573 10.3567C2.25537 9.58627 2.65945 8.88638 3.23687 8.34557C3.96815 7.66065 5.09569 7.35853 7.35077 6.75428C7.77741 6.63996 8.16368 6.53646 8.51621 6.44531" stroke="#1C274C" stroke-width="1.5"></path><path d="M11.7769 10L16.6065 11.2941" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M11 12.8975L13.8978 13.6739" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path></svg>`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/NotesIcon.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const NotesIcon = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "IconCard",
  __ssrInlineRender: true,
  props: {
    icon: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "icon-card" }, _attrs))} data-v-6d93d5a2>`);
      if (__props.icon) {
        _push(`<div class="icon" data-v-6d93d5a2>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.icon), null, null), _parent);
        _push(`</div>`);
      } else {
        _push(`<div class="icon" data-v-6d93d5a2>`);
        ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
        _push(`</div>`);
      }
      _push(`<div class="content" data-v-6d93d5a2>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/IconCard.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const IconCard = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-6d93d5a2"]]);
const _sfc_main$n = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    fill: "var(--main)",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path opacity="0.5" d="M18 10L13 10" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path><path opacity="0.5" d="M10 3H16.5C16.9644 3 17.1966 3 17.3916 3.02567C18.7378 3.2029 19.7971 4.26222 19.9743 5.60842C20 5.80337 20 6.03558 20 6.5" stroke="#1C274C" stroke-width="1.5"></path><path d="M2 6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C22 7.84935 22 9.16554 22 11.7979V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V6.94975Z" stroke="#1C274C" stroke-width="1.5"></path></svg>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/FolderIcon.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const FolderIcon = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    const scrollStore = useScrollStore();
    ref(false);
    useRouter();
    const isSticky = ref(false);
    const isHidden = ref(false);
    let lastScrollY = window.scrollY;
    const checkScroll = () => {
      const currentScroll = window.scrollY;
      const delta = currentScroll - lastScrollY;
      isSticky.value = currentScroll > 50;
      if (delta < -3 && currentScroll > 300) {
        isHidden.value = true;
      } else if (delta > 3 || currentScroll <= 300) {
        isHidden.value = false;
      }
      lastScrollY = currentScroll;
    };
    onMounted(() => {
      window.addEventListener("scroll", checkScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", checkScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: [{ sticky: isSticky.value, hide: isHidden.value }, "navbar"]
      }, _attrs))} data-v-425d92b3><div class="nav-inner" data-v-425d92b3><div class="nav-left" data-v-425d92b3>`);
      _push(ssrRenderComponent(unref(RouterLink), {
        class: "logo",
        to: "/home"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ToaaM.`);
          } else {
            return [
              createTextVNode("ToaaM.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(IconCard, { icon: FolderIcon }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(RouterLink), {
              class: "router-link",
              to: "/projects"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`项目`);
                } else {
                  return [
                    createTextVNode("项目")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(RouterLink), {
                class: "router-link",
                to: "/projects"
              }, {
                default: withCtx(() => [
                  createTextVNode("项目")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(IconCard, { icon: NotesIcon }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(RouterLink), {
              class: "router-link",
              to: "/"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`文章`);
                } else {
                  return [
                    createTextVNode("文章")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(RouterLink), {
                class: "router-link",
                to: "/"
              }, {
                default: withCtx(() => [
                  createTextVNode("文章")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="nav-right" data-v-425d92b3><div class="searchbar" data-v-425d92b3></div><template>`);
      if (unref(scrollStore).showAvatarInNavbar) {
        _push(ssrRenderComponent(Avatar, { size: "sm" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</template></div></div></nav>`);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/unique/NavBar.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const NavBar = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-425d92b3"]]);
const _sfc_main$l = {};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/unique/FooterBar.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "Bge",
  __ssrInlineRender: true,
  setup(__props) {
    onMounted(() => {
      const style = document.createElement("style");
      style.innerHTML = `
    #universe {
      display: block;
      position: fixed;
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
    }
  `;
      document.head.appendChild(style);
      const canvas = document.getElementById("universe");
      let width = window.innerWidth;
      let height = window.innerHeight;
      let particlesCount = 0.216 * width | 0;
      let ctx = null;
      const speed = 0.05;
      function hexToRgb(hex) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `${r},${g},${b}`;
      }
      const giantColor = hexToRgb("#E0B1CB");
      const starColor = hexToRgb("#E0B1CB");
      const cometColor = hexToRgb("#E0B1CB");
      const particles = [];
      function random(min, max) {
        return Math.random() * (max - min) + min;
      }
      function isChance(percent) {
        return Math.random() * 1e3 < 10 * percent;
      }
      function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        particlesCount = 0.216 * width | 0;
        if (canvas) {
          canvas.width = width;
          canvas.height = height;
        }
      }
      function createParticle() {
        return {
          x: random(0, width - 10),
          y: random(0, height),
          r: random(1.1, 2.6),
          dx: random(speed, 6 * speed) + 2 * speed,
          dy: -random(speed, 6 * speed),
          giant: isChance(3),
          comet: false,
          fadingIn: true,
          fadingOut: null,
          opacity: 0,
          opacityTresh: random(0.2, 0.6),
          do: random(5e-4, 2e-3),
          reset() {
            this.giant = isChance(3);
            this.comet = !this.giant && isChance(10);
            this.x = random(0, width - 10);
            this.y = random(0, height);
            this.r = random(1.1, 2.6);
            this.dx = random(speed, 6 * speed) + (this.comet ? random(50, 120) * speed : 0) + 2 * speed;
            this.dy = -random(speed, 6 * speed) - (this.comet ? random(50, 120) * speed : 0);
            this.fadingOut = null;
            this.fadingIn = true;
            this.opacity = 0;
            this.opacityTresh = random(0.2, 0.6);
            this.do = random(5e-4, 2e-3);
          },
          fadeIn() {
            if (this.fadingIn) {
              this.fadingIn = !(this.opacity > this.opacityTresh);
              this.opacity += this.do;
            }
          },
          fadeOut() {
            if (this.fadingOut) {
              this.fadingOut = !(this.opacity < 0);
              this.opacity -= this.do / 2;
              if (this.x > width || this.y < 0) {
                this.fadingOut = false;
                this.reset();
              }
            }
          },
          move() {
            this.x += this.dx;
            this.y += this.dy;
            if (!this.fadingOut && (this.x > width - width / 4 || this.y < 0)) {
              this.fadingOut = true;
            }
          },
          draw() {
            if (!ctx) return;
            ctx.beginPath();
            if (this.giant) {
              ctx.fillStyle = `rgba(${giantColor},${this.opacity})`;
              ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            } else if (this.comet) {
              ctx.fillStyle = `rgba(${cometColor},${this.opacity})`;
              ctx.arc(this.x, this.y, 1.5, 0, 2 * Math.PI);
              for (let t = 0; t < 30; t++) {
                ctx.fillStyle = `rgba(${cometColor},${this.opacity - this.opacity / 20 * t})`;
                ctx.fillRect(this.x - this.dx / 4 * t, this.y - this.dy / 4 * t - 2, 2, 2);
              }
            } else {
              ctx.fillStyle = `rgba(${starColor},${this.opacity})`;
              ctx.fillRect(this.x, this.y, this.r, this.r);
            }
            ctx.closePath();
            ctx.fill();
          }
        };
      }
      function animate() {
        if (!ctx) return;
        ctx.clearRect(0, 0, width, height);
        particles.forEach((p) => {
          p.move();
          p.fadeIn();
          p.fadeOut();
          p.draw();
        });
        window.requestAnimationFrame(animate);
      }
      if (canvas) {
        ctx = canvas.getContext("2d");
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);
        for (let j2 = 0; j2 < particlesCount; j2++) {
          particles.push(createParticle());
        }
        animate();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<canvas${ssrRenderAttrs(mergeProps({ id: "universe" }, _attrs))}></canvas>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/unique/Bge.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "ThemeSwitcher",
  __ssrInlineRender: true,
  setup(__props) {
    const isDark = ref(true);
    onMounted(() => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        isDark.value = true;
        document.documentElement.setAttribute("data-theme", "dark");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({ class: "theme-switcher" }, _attrs))} data-v-4593ea4a>`);
      if (isDark.value) {
        _push(`<svg fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4593ea4a><path fill-rule="evenodd" clip-rule="evenodd" d="M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z" fill="#323232" data-v-4593ea4a></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.5523 2 13 2.44772 13 3V5C13 5.55228 12.5523 6 12 6C11.4477 6 11 5.55228 11 5V3C11 2.44772 11.4477 2 12 2Z" fill="#323232" data-v-4593ea4a></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7071 4.29289C20.0976 4.68342 20.0976 5.31658 19.7071 5.70711L17.7071 7.70711C17.3166 8.09763 16.6834 8.09763 16.2929 7.70711C15.9024 7.31658 15.9024 6.68342 16.2929 6.29289L18.2929 4.29289C18.6834 3.90237 19.3166 3.90237 19.7071 4.29289Z" fill="#323232" data-v-4593ea4a></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M18 12C18 11.4477 18.4477 11 19 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H19C18.4477 13 18 12.5523 18 12Z" fill="#323232" data-v-4593ea4a></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2929 16.2929C16.6834 15.9024 17.3166 15.9024 17.7071 16.2929L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L16.2929 17.7071C15.9024 17.3166 15.9024 16.6834 16.2929 16.2929Z" fill="#323232" data-v-4593ea4a></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C12.5523 18 13 18.4477 13 19V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V19C11 18.4477 11.4477 18 12 18Z" fill="#323232" data-v-4593ea4a></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M7.70711 16.2929C8.09763 16.6834 8.09763 17.3166 7.70711 17.7071L5.70711 19.7071C5.31658 20.0976 4.68342 20.0976 4.29289 19.7071C3.90237 19.3166 3.90237 18.6834 4.29289 18.2929L6.29289 16.2929C6.68342 15.9024 7.31658 15.9024 7.70711 16.2929Z" fill="#323232" data-v-4593ea4a></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 11.4477 2.44772 11 3 11H5C5.55228 11 6 11.4477 6 12C6 12.5523 5.55228 13 5 13H3C2.44772 13 2 12.5523 2 12Z" fill="#323232" data-v-4593ea4a></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L7.70711 6.29289C8.09763 6.68342 8.09763 7.31658 7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z" fill="#323232" data-v-4593ea4a></path></svg>`);
      } else {
        _push(`<svg fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4593ea4a><path fill-rule="evenodd" clip-rule="evenodd" d="M8.23129 2.24048C9.24338 1.78695 10.1202 2.81145 9.80357 3.70098C8.72924 6.71928 9.38932 10.1474 11.6193 12.3765C13.8606 14.617 17.3114 15.2755 20.3395 14.1819C21.2206 13.8637 22.2173 14.7319 21.7817 15.7199C21.7688 15.7491 21.7558 15.7782 21.7427 15.8074C20.9674 17.5266 19.7272 19.1434 18.1227 20.2274C16.4125 21.3828 14.3957 22.0001 12.3316 22.0001H12.3306C9.93035 21.9975 7.6057 21.1603 5.75517 19.6321C3.90463 18.1039 2.64345 15.9797 2.18793 13.6237C1.73241 11.2677 2.11094 8.82672 3.2586 6.71917C4.34658 4.72121 6.17608 3.16858 8.20153 2.25386L8.23129 2.24048Z" fill="#323232" data-v-4593ea4a></path></svg>`);
      }
      _push(`</button>`);
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/unique/ThemeSwitcher.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const THRESHOLD = 160;
const _sfc_main$i = {
  setup(__props) {
    const visible = ref(false);
    let prevOpen = false;
    onMounted(() => {
      setInterval(() => {
        const widthDiff = window.outerWidth - window.innerWidth;
        const heightDiff = window.outerHeight - window.innerHeight;
        const isOpen = widthDiff > THRESHOLD || heightDiff > THRESHOLD;
        if (isOpen !== prevOpen) {
          visible.value = isOpen;
          prevOpen = isOpen;
        }
      }, 100);
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div class="${ssrRenderClass([{ "visible": visible.value }, "devtools-toast bounce-in"])}" data-v-a815ae74> (￣▽￣;)ゞ没必要啦，点我前往Git仓库吧~ </div>`);
      }, "body", false, _parent);
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Toast.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = {
  setup(__props) {
    const songs = ref([
      { id: 1859048183, name: "夏恋 feat Rhyzz&BeLL&Jas Mace(The 49ers)", artist: "Otokaze" }
    ]);
    const currentIndex = ref(0);
    const buildSrc = (id) => `https://music.163.com/outchain/player?type=2&id=${id}&auto=0&height=66`;
    const currentSrc = ref(buildSrc(songs.value[0].id));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "music-player" }, _attrs))} data-v-dc8fd801><ul class="playlist" data-v-dc8fd801><!--[-->`);
      ssrRenderList(songs.value, (song, index) => {
        _push(`<li class="${ssrRenderClass({ active: index === currentIndex.value })}" data-v-dc8fd801>${ssrInterpolate(song.name)} - ${ssrInterpolate(song.artist)}</li>`);
      });
      _push(`<!--]--></ul><iframe${ssrRenderAttr("src", currentSrc.value)} frameborder="no" border="0" marginwidth="0" marginheight="0" width="300" height="86" data-v-dc8fd801></iframe></div>`);
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/MusicPlayer.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
function inertialScrolling(userOptions = {}) {
  const isMobile = /Mobi|Android|iPhone|iPad|Tablet/i.test(navigator.userAgent);
  if (isMobile) return;
  const options = {
    animationTime: 600,
    stepSize: 100,
    accelerationDelta: 50,
    accelerationMax: 3,
    keyboardSupport: true,
    arrowScroll: 50,
    ...userOptions
  };
  let que = [];
  let pending = false;
  let lastScroll = Date.now();
  let direction = { x: 0, y: 0 };
  function scrollArray(elem, left, top) {
    directionCheck(left, top);
    const now = Date.now();
    const elapsed = now - lastScroll;
    if (elapsed < options.accelerationDelta) {
      const factor = Math.min((1 + 50 / elapsed) / 2, options.accelerationMax);
      left *= factor;
      top *= factor;
    }
    lastScroll = now;
    que.push({ x: left, y: top, lastX: 0, lastY: 0, start: Date.now() });
    if (pending) return;
    const step = () => {
      const now2 = Date.now();
      let scrollX = 0, scrollY = 0;
      for (let i = 0; i < que.length; i++) {
        const item = que[i];
        const elapsed2 = now2 - item.start;
        const finished = elapsed2 >= options.animationTime;
        const position = finished ? 1 : pulse(elapsed2 / options.animationTime);
        const x = item.x * position - item.lastX >> 0;
        const y = item.y * position - item.lastY >> 0;
        scrollX += x;
        scrollY += y;
        item.lastX += x;
        item.lastY += y;
        if (finished) {
          que.splice(i, 1);
          i--;
        }
      }
      window.scrollBy(scrollX, scrollY);
      if (que.length) {
        requestAnimationFrame(step);
      } else {
        pending = false;
      }
    };
    requestAnimationFrame(step);
    pending = true;
  }
  function wheel(e) {
    if (e.defaultPrevented || e.ctrlKey) return;
    const deltaX = e.deltaX;
    const deltaY = e.deltaY;
    scrollArray(document.documentElement, deltaX * options.stepSize / 120, deltaY * options.stepSize / 120);
    e.preventDefault();
  }
  function keydown(e) {
    if (!options.keyboardSupport) return;
    let x = 0, y = 0;
    switch (e.keyCode) {
      case 38:
        y = -options.arrowScroll;
        break;
      case 40:
        y = options.arrowScroll;
        break;
      case 37:
        x = -options.arrowScroll;
        break;
      case 39:
        x = options.arrowScroll;
        break;
      case 33:
        y = -window.innerHeight * 0.9;
        break;
      case 34:
        y = window.innerHeight * 0.9;
        break;
      case 36:
        y = -document.documentElement.scrollTop;
        break;
      case 35:
        y = document.documentElement.scrollHeight;
        break;
      default:
        return;
    }
    scrollArray(document.documentElement, x, y);
    e.preventDefault();
  }
  function directionCheck(x, y) {
    const newX = x > 0 ? 1 : -1;
    const newY = y > 0 ? 1 : -1;
    if (direction.x !== newX || direction.y !== newY) {
      direction.x = newX;
      direction.y = newY;
      que = [];
      lastScroll = 0;
    }
  }
  function pulse(t) {
    return 1 - Math.pow(1 - t, 3);
  }
  onMounted(() => {
    window.addEventListener("wheel", wheel, { passive: false });
    if (options.keyboardSupport) window.addEventListener("keydown", keydown);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("wheel", wheel);
    window.removeEventListener("keydown", keydown);
  });
}
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    inertialScrolling({
      stepSize: 80,
      animationTime: 1e3,
      frameRate: 144,
      keyboardSupport: true
    });
    const showNavBar = ref(true);
    const isPadding = ref(false);
    const showEffect = ref(false);
    const route = useRoute();
    watch(route, () => {
      window.scrollTo({ top: 0, behavior: "auto" });
    });
    onMounted(() => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterView = resolveComponent("RouterView");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-container" }, _attrs))} data-v-e1171313>`);
      if (showEffect.value) {
        _push(ssrRenderComponent(_sfc_main$k, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (showNavBar.value) {
        _push(ssrRenderComponent(NavBar, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass(["main-content", { "padding": isPadding.value }])}" data-v-e1171313>`);
      _push(ssrRenderComponent(_component_RouterView, null, null, _parent));
      _push(`</div><div class="footer" data-v-e1171313><p data-v-e1171313>本站所有资源均来自网络，且仅用于学习用途，未进行商业行为。如有侵权，请联系删除。</p><div data-v-e1171313><a href="https://icp.gov.moe/?keyword=20251616" target="_blank" data-v-e1171313>萌ICP备20251616号</a></div><p data-v-e1171313>© 2025-2026 ToaaM. All rights reserved.</p></div></div>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-e1171313"]]);
const Y = { class: "icon-card" }, j = {
  key: 0,
  class: "icon"
}, O = {
  key: 1,
  class: "icon"
}, X = { class: "content" }, J = /* @__PURE__ */ defineComponent({
  __name: "IconCard",
  props: {
    icon: {}
  },
  setup(t) {
    const e = t;
    return (c, s) => (openBlock(), createElementBlock("div", Y, [
      e.icon ? (openBlock(), createElementBlock("div", j, [
        (openBlock(), createBlock(resolveDynamicComponent(e.icon)))
      ])) : (openBlock(), createElementBlock("div", O, [
        renderSlot(c.$slots, "icon", {}, void 0, true)
      ])),
      createElementVNode("div", X, [
        renderSlot(c.$slots, "default", {}, void 0, true)
      ])
    ]));
  }
}), L = (t, e) => {
  const c = t.__vccOpts || t;
  for (const [s, l] of e)
    c[s] = l;
  return c;
}, k = /* @__PURE__ */ L(J, [["__scopeId", "data-v-87611b2b"]]), Q = {}, W = {
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 100 100",
  "enable-background": "new 0 0 100 100",
  "xml:space": "preserve"
};
function t1(t, e) {
  return openBlock(), createElementBlock("svg", W, [...e[0] || (e[0] = [
    createElementVNode("path", { d: "M61.8,29.4l8.9,8.9l0,0c2,1.9,2,5.1,0,7l0,0L47.5,68.4V47.3V36.6l7.2-7.3C56.6,27.4,59.9,27.4,61.8,29.4z" }, null, -1),
    createElementVNode("path", { d: "M37.5,20H25c-2.8,0-5,2.2-5,5v43.8C20,75,25,80,31.2,80s11.2-5,11.2-11.2V25C42.5,22.2,40.2,20,37.5,20z M31.2,73.8c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S34,73.8,31.2,73.8z" }, null, -1),
    createElementVNode("path", { d: "M75,57.5h-8.8l-6,6H74L73.9,74H49.8l-6,6H75c2.8,0,5-2.2,5-5V62.5C80,59.8,77.8,57.5,75,57.5L75,57.5z" }, null, -1)
  ])]);
}
const e1 = /* @__PURE__ */ L(Q, [["render", t1]]), n1 = {}, a1 = {
  fill: "currentColor",
  height: "200px",
  width: "200px",
  version: "1.1",
  id: "Capa_1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 417.578 417.578",
  "xml:space": "preserve"
};
function c1(t, e) {
  return openBlock(), createElementBlock("svg", a1, [...e[0] || (e[0] = [
    createStaticVNode('<path d="M121.484,14.363c-5.821-9.972-20.368-12.098-28.525-3.675C81.053,22.978,81.76,41.137,82.045,57.451 c0.284,16.421,1.037,33.819,10.268,47.918c7.813,11.939,26.162,10.106,30.39-3.971c4.317-14.374,2.209-29.176,2.416-43.947 C125.326,42.499,129.348,27.828,121.484,14.363z"></path><path d="M339.236,62.889c-0.16-15.933,1.513-30.343-9.552-42.924c-8.465-9.623-22.064-5.032-28.528,3.676 c-8.814,11.873-5.318,28.061-4.142,41.982c1.178,13.991,2.167,29.366,7.04,42.592c5.318,14.437,26.66,16.298,31.246,0 C339.339,93.86,339.384,77.72,339.236,62.889z"></path><path d="M414.903,69.616c-3.435-20.424-19.672-24.529-38.242-18.547c-2.072,0.669-3.612,1.768-4.874,3.037 c-4.027,1.99-7.366,5.559-7.828,10.553c-1.196,13.003,2.86,28.618-0.888,41.267c-4.719,15.935-25.072,22.178-39.503,25.842 c-45.503,11.549-46.681-39.646-47.85-70.83c-0.139-3.764-2.786-6.063-5.8-7.183c-1.875-1.682-4.282-2.936-7.533-3.085 c-31.639-1.451-62.491-1.269-94.063,1.365c-2.508,0.209-4.397,1.153-5.978,2.35c-6.715-0.204-13.191,4.013-12.945,13.078 c0.793,29.145,1.279,73.966-41.363,67.094c-36.49-5.881-40.54-46.256-39.859-75.937c0.13-5.734-6.194-8.818-10.783-6.952 c-0.575-0.579-0.746-1.295-1.569-1.769c-10.949-6.295-23.017-8.826-35.364-6.135c-6.935,1.51-9.57,7.43-8.871,13.106 c-17.706,23.519-9.072,69.376-9.543,94.721c-1.471,79.176-5.442,160.592,4.386,239.246c0.923,7.413,6.65,11.271,12.228,11.318 c0.104,0.024,0.163,0.092,0.27,0.114c61.467,12.536,121.49,1.683,183.522,2.782c65.55,1.161,128.397,8.915,194.261,6.66 c7.529-0.258,11.624-4.398,12.966-9.426c1.91-1.797,3.266-4.185,3.514-7.017c6.221-71.11,2.795-144.488-1.468-217.276 C415.78,143.173,420.748,104.372,414.903,69.616z M39.098,383.272c-0.997-70.238,0.589-140.255,0.758-210.451 c2.638-0.175,5.303-0.379,7.808-0.487c6.929-0.297,13.65-0.445,19.05-3.384c100.615,9.112,210.679,3.245,310.368-2.329 c0.568-0.031,0.965-0.27,1.486-0.36c0.627,72.754,1.879,146.148,11.582,217.045C272.732,379.887,156.522,383.314,39.098,383.272z"></path> <path d="M85.729,195.029c-18.547,0-18.576,28.822,0,28.822C104.275,223.851,104.305,195.029,85.729,195.029z"></path> <path d="M143.086,192.309c-19.094,0-19.127,29.674,0,29.674C162.177,221.982,162.213,192.309,143.086,192.309z"></path> <path d="M202.439,188.903c-0.61,0.182-1.22,0.363-1.827,0.545c-7.861,2.346-14.401,11.549-11.316,19.929 c0.198,0.54,0.4,1.079,0.596,1.62c3.659,9.935,16.148,17.96,26.387,10.733c5.537-3.91,9.028-8.411,8.894-15.507 C224.956,194.803,213.838,185.5,202.439,188.903z"></path> <path d="M263.657,189.696c-0.592,0.294-1.187,0.587-1.779,0.882c-12.525,6.225-12.525,26.91,0,33.135 c0.592,0.293,1.187,0.588,1.779,0.883c13.449,6.685,30.408-1.346,30.408-17.45C294.065,191.04,277.106,183.01,263.657,189.696z"></path> <path d="M355.467,196.657c-0.829-0.705-1.652-1.409-2.475-2.113c-17.499-14.939-40.155,7.695-25.206,25.202 c0.705,0.826,1.409,1.651,2.114,2.476C345.069,239.988,373.238,211.833,355.467,196.657z"></path> <path d="M338.093,257.151c-15.361,0-15.387,23.877,0,23.877C353.457,281.028,353.484,257.151,338.093,257.151z"></path> <path d="M278.444,250.355c-15.254,0-15.278,23.705,0,23.705C293.698,274.06,293.722,250.355,278.444,250.355z"></path> <path d="M211.914,255.856c-22.938,0-22.976,35.645,0,35.645C234.848,291.501,234.884,255.856,211.914,255.856z"></path> <path d="M145.378,256.043c-16.788,0-16.818,26.094,0,26.094C162.169,282.137,162.195,256.043,145.378,256.043z"></path> <path d="M81.139,256.128c-16.678,0-16.705,25.922,0,25.922C97.82,282.05,97.85,256.128,81.139,256.128z"></path> <path d="M81.139,325.451c-21.946,0-21.981,34.109,0,34.109C103.088,359.56,103.126,325.451,81.139,325.451z"></path> <path d="M128.936,335.576c-0.541,0.894-1.086,1.788-1.631,2.683c-6.715,11.036,6.688,24.453,17.736,17.732 c0.894-0.544,1.786-1.086,2.679-1.631C166.986,342.638,140.735,316.185,128.936,335.576z"></path> <path d="M209.616,328.776c-17.665,0-17.695,27.457,0,27.457C227.286,356.233,227.316,328.776,209.616,328.776z"></path> <path d="M254.479,327.932c-0.468,0.937-0.941,1.873-1.41,2.809c-8.545,17.03,8.616,34.226,25.664,25.668 c0.939-0.471,1.877-0.94,2.813-1.411C311.167,340.132,269.449,298.103,254.479,327.932z"></path><path d="M333.504,327.326c-19.53,0-19.565,30.357,0,30.357C353.039,357.684,353.072,327.326,333.504,327.326z"></path>', 32)
  ])]);
}
const o1 = /* @__PURE__ */ L(n1, [["render", c1]]), s1 = {}, r1 = {
  class: "svg",
  viewBox: "0 0 24 24",
  fill: "currentColor",
  xmlns: "http://www.w3.org/2000/svg"
};
function i1(t, e) {
  return openBlock(), createElementBlock("svg", r1, [...e[0] || (e[0] = [
    createStaticVNode('<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15.9894 4.9502L16.52 4.42014L16.52 4.42014L15.9894 4.9502ZM8.73845 19.429L8.20785 19.9591L8.73845 19.429ZM4.62176 15.3081L5.15236 14.7781L4.62176 15.3081ZM17.567 14.9943L17.3032 14.2922L17.567 14.9943ZM15.6499 15.7146L15.9137 16.4167L15.6499 15.7146ZM8.33227 8.38177L7.62805 8.12375H7.62805L8.33227 8.38177ZM9.02673 6.48636L9.73095 6.74438L9.02673 6.48636ZM5.84512 10.6735L6.04445 11.3965H6.04445L5.84512 10.6735ZM7.30174 10.1351L6.86354 9.52646L6.86354 9.52646L7.30174 10.1351ZM7.6759 9.79038L8.24673 10.2768H8.24673L7.6759 9.79038ZM14.2511 16.3805L14.7421 16.9475L14.7421 16.9475L14.2511 16.3805ZM13.3807 18.2012L12.6575 18.0022V18.0022L13.3807 18.2012ZM13.917 16.7466L13.3076 16.3094L13.3076 16.3094L13.917 16.7466ZM2.71854 12.7552L1.96855 12.76V12.76L2.71854 12.7552ZM2.93053 11.9521L2.28061 11.5778H2.28061L2.93053 11.9521ZM11.3053 21.3431L11.3064 20.5931H11.3064L11.3053 21.3431ZM12.0933 21.1347L11.7216 20.4833L11.7216 20.4833L12.0933 21.1347ZM21.9652 12.3049L22.6983 12.4634L21.9652 12.3049ZM11.6973 2.03606L11.8589 2.76845L11.6973 2.03606ZM22.3552 10.6303C22.1511 10.2699 21.6934 10.1433 21.333 10.3475C20.9726 10.5516 20.846 11.0093 21.0502 11.3697L22.3552 10.6303ZM18.006 8.03006C18.2988 8.3231 18.7737 8.32334 19.0667 8.0306C19.3597 7.73786 19.36 7.26298 19.0672 6.96994L18.006 8.03006ZM9.26905 18.8989L5.15236 14.7781L4.09116 15.8382L8.20785 19.9591L9.26905 18.8989ZM17.3032 14.2922L15.3861 15.0125L15.9137 16.4167L17.8308 15.6964L17.3032 14.2922ZM9.03649 8.63979L9.73095 6.74438L8.32251 6.22834L7.62805 8.12375L9.03649 8.63979ZM6.04445 11.3965C6.75591 11.2003 7.29726 11.0625 7.73995 10.7438L6.86354 9.52646C6.6906 9.65097 6.46608 9.72428 5.64578 9.95044L6.04445 11.3965ZM7.62805 8.12375C7.3351 8.92332 7.24345 9.14153 7.10507 9.30391L8.24673 10.2768C8.60048 9.86175 8.78237 9.33337 9.03649 8.63979L7.62805 8.12375ZM7.73995 10.7438C7.92704 10.6091 8.09719 10.4523 8.24673 10.2768L7.10507 9.30391C7.03377 9.38757 6.95268 9.46229 6.86354 9.52646L7.73995 10.7438ZM15.3861 15.0125C14.697 15.2714 14.1717 15.4571 13.7601 15.8135L14.7421 16.9475C14.9029 16.8082 15.1193 16.7152 15.9137 16.4167L15.3861 15.0125ZM14.1038 18.4001C14.3291 17.5813 14.4022 17.3569 14.5263 17.1838L13.3076 16.3094C12.9903 16.7517 12.853 17.2919 12.6575 18.0022L14.1038 18.4001ZM13.7601 15.8135C13.5904 15.9605 13.4385 16.1269 13.3076 16.3094L14.5263 17.1838C14.5888 17.0968 14.6612 17.0175 14.7421 16.9475L13.7601 15.8135ZM5.15236 14.7781C4.50623 14.1313 4.06806 13.691 3.78374 13.3338C3.49842 12.9753 3.46896 12.8201 3.46852 12.7505L1.96855 12.76C1.97223 13.3422 2.26135 13.8297 2.6101 14.2679C2.95984 14.7073 3.47123 15.2176 4.09116 15.8382L5.15236 14.7781ZM5.64578 9.95044C4.80056 10.1835 4.10403 10.3743 3.58304 10.5835C3.06349 10.792 2.57124 11.0732 2.28061 11.5778L3.58045 12.3264C3.61507 12.2663 3.717 12.146 4.14187 11.9755C4.56531 11.8055 5.16345 11.6394 6.04445 11.3965L5.64578 9.95044ZM3.46852 12.7505C3.46758 12.6016 3.50623 12.4553 3.58045 12.3264L2.28061 11.5778C2.07362 11.9372 1.96593 12.3452 1.96855 12.76L3.46852 12.7505ZM8.20785 19.9591C8.83172 20.5836 9.34472 21.0987 9.78654 21.4506C10.2271 21.8015 10.718 22.0922 11.3042 22.0931L11.3064 20.5931C11.237 20.593 11.0815 20.5644 10.7211 20.2773C10.3619 19.9912 9.91931 19.5499 9.26905 18.8989L8.20785 19.9591ZM12.6575 18.0022C12.4133 18.8897 12.2463 19.4924 12.0752 19.9188C11.9034 20.3467 11.7822 20.4487 11.7216 20.4833L12.4651 21.7861C12.9741 21.4956 13.2573 21.0004 13.4672 20.4775C13.6777 19.9532 13.8695 19.2516 14.1038 18.4001L12.6575 18.0022ZM11.3042 22.0931C11.7113 22.0937 12.1115 21.9879 12.4651 21.7861L11.7216 20.4833C11.5951 20.5555 11.452 20.5933 11.3064 20.5931L11.3042 22.0931ZM17.8308 15.6964C19.1922 15.1849 20.2941 14.773 21.0771 14.3384C21.8719 13.8973 22.5084 13.3416 22.6983 12.4634L21.2322 12.1464C21.178 12.3968 21.0002 12.6655 20.3492 13.0268C19.6865 13.3946 18.7113 13.7632 17.3032 14.2922L17.8308 15.6964ZM16.52 4.42014C15.4841 3.3832 14.6481 2.54353 13.9246 2.00638C13.1909 1.46165 12.4175 1.10912 11.5357 1.30367L11.8589 2.76845C12.1086 2.71335 12.4278 2.7633 13.0305 3.21075C13.6434 3.66579 14.3877 4.40801 15.4588 5.48026L16.52 4.42014ZM9.73095 6.74438C10.2526 5.32075 10.6162 4.33403 10.9813 3.66315C11.3403 3.00338 11.6091 2.82357 11.8589 2.76845L11.5357 1.30367C10.6541 1.49819 10.1006 2.14332 9.6637 2.94618C9.23286 3.73793 8.82695 4.85154 8.32251 6.22834L9.73095 6.74438ZM21.0502 11.3697C21.2515 11.7251 21.2745 11.9507 21.2322 12.1464L22.6983 12.4634C22.8404 11.8064 22.6796 11.2027 22.3552 10.6303L21.0502 11.3697ZM15.4588 5.48026L18.006 8.03006L19.0672 6.96994L16.52 4.42014L15.4588 5.48026Z"></path><path d="M1.4694 21.4697C1.17666 21.7627 1.1769 22.2376 1.46994 22.5304C1.76298 22.8231 2.23786 22.8229 2.5306 22.5298L1.4694 21.4697ZM7.18383 17.8719C7.47657 17.5788 7.47633 17.1039 7.18329 16.8112C6.89024 16.5185 6.41537 16.5187 6.12263 16.8117L7.18383 17.8719ZM2.5306 22.5298L7.18383 17.8719L6.12263 16.8117L1.4694 21.4697L2.5306 22.5298Z"></path></g>', 3)
  ])]);
}
const l1 = /* @__PURE__ */ L(s1, [["render", i1]]), d1 = ["view-transition-name"], u1 = { class: "card-content" }, L1 = { class: "card-title _before-line" }, h1 = { class: "card-summary" }, p1 = { class: "card-footer" }, C1 = { class: "meta-info" }, v1 = ["onClick"], m1 = true, _1 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  props: {
    data: {}
  },
  setup(t) {
    const e = (r) => new Date(r).toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "short",
      day: "numeric"
    }), c = useRoute(), s = useRouter(), l = (r) => {
      if (c.query.tag === r) {
        const { tag: g, ...u } = c.query;
        s.replace({ query: u });
      } else
        s.replace({ query: { ...c.query, tag: r } });
    }, i = ref(null), C = ref("center"), d = (r) => {
      const g = i.value;
      if (!g) return;
      const u = g.getBoundingClientRect(), _ = r.clientX - u.left, b = r.clientY - u.top, N = ((_ / u.width - 0.5) * 20).toFixed(2), D = ((b / u.height - 0.5) * 20).toFixed(2);
      C.value = `${50 + Number(N)}% ${50 + Number(D)}%`;
    }, S = () => {
      C.value = "center";
    };
    return onMounted(() => {
      const r = i.value;
      r && (r.addEventListener("mousemove", d), r.addEventListener("mouseleave", S));
    }), onBeforeUnmount(() => {
      const r = i.value;
      r && (r.removeEventListener("mousemove", d), r.removeEventListener("mouseleave", S));
    }), (r, g) => {
      const u = resolveDirective("fade");
      return withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass(["card", { hasImage: m1 }]),
        ref_key: "cardRef",
        ref: i,
        "view-transition-name": `post-${t.data.md_url}`
      }, [
        t.data.top ? (openBlock(), createBlock(l1, {
          key: 0,
          class: "pin"
        })) : createCommentVNode("", true),
        (openBlock(), createElementBlock("div", {
          key: 1,
          class: "card-image",
          style: normalizeStyle({
            backgroundImage: `url('${t.data.image_url}')`,
            backgroundPosition: C.value,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          })
        }, null, 4)),
        createElementVNode("div", u1, [
          createElementVNode("h3", L1, toDisplayString(t.data.title), 1),
          createElementVNode("p", h1, toDisplayString(t.data.summary), 1),
          createElementVNode("div", p1, [
            createElementVNode("div", C1, [
              createVNode(k, { icon: e1 }, {
                default: withCtx(() => [
                  createElementVNode("span", null, toDisplayString(t.data.class), 1)
                ]),
                _: 1
              }),
              t.data.tags && t.data.tags.length ? (openBlock(), createBlock(k, { key: 0 }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(t.data.tags, (_) => (openBlock(), createElementBlock("a", {
                    style: { "margin-left": "0.5rem" },
                    key: _,
                    href: "javascript:void(0)",
                    onClick: withModifiers((b) => l(_), ["prevent"])
                  }, toDisplayString("#" + _), 9, v1))), 128))
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            createVNode(k, {
              class: "date",
              icon: o1
            }, {
              default: withCtx(() => [
                createElementVNode("span", null, toDisplayString(e(t.data.created_at)), 1)
              ]),
              _: 1
            })
          ])
        ]),
        withDirectives(createElementVNode("div", null, null, 512), [
          [vShow, t.data.class]
        ])
      ], 10, d1)), [
        [u, { offset: "20px", duration: 500 }]
      ]);
    };
  }
}), z = /* @__PURE__ */ L(_1, [["__scopeId", "data-v-539f0b22"]]), f1 = { class: "load-wrapper" }, g1 = { class: "loading-text" }, M1 = /* @__PURE__ */ defineComponent({
  __name: "Loading",
  setup(t) {
    const e = [
      "唉……加载是无法跳过的呢 (´-ω-`)",
      "谁叫这是必要的呢 ( ｰ̀εｰ́ )",
      "加载……又是加载……╮(╯_╰)╭",
      "没办法，加载是必要的 ( ･᷄ㅂ･᷅ )",
      "加载是宿命……接受它吧 ( •︠ˍ•︡ )",
      "别催了，加载在努力了 (´･_･`)",
      "不想等，但还是得等 (￣_￣|||)",
      "缓一缓，数据也得喘口气 ( ´_ゝ｀)",
      "我也很急，但加载不急不来 ( -᷄ω-᷅ )"
    ], c = ref("");
    return onMounted(() => {
      const s = Math.floor(Math.random() * e.length);
      c.value = e[s] || "";
    }), (s, l) => (openBlock(), createElementBlock("div", f1, [
      l[0] || (l[0] = createElementVNode("svg", {
        class: "container",
        x: "0px",
        y: "0px",
        viewBox: "0 0 37 37",
        height: "37",
        width: "37",
        preserveAspectRatio: "xMidYMid meet"
      }, [
        createElementVNode("path", {
          class: "track",
          fill: "none",
          "stroke-width": "5",
          pathLength: "100",
          d: "M0.37 18.5 C0.37 5.772 5.772 0.37 18.5 0.37 S36.63 5.772 36.63 18.5 S31.228 36.63 18.5 36.63 S0.37 31.228 0.37 18.5"
        }),
        createElementVNode("path", {
          class: "car",
          fill: "none",
          "stroke-width": "5",
          pathLength: "100",
          d: "M0.37 18.5 C0.37 5.772 5.772 0.37 18.5 0.37 S36.63 5.772 36.63 18.5 S31.228 36.63 18.5 36.63 S0.37 31.228 0.37 18.5"
        })
      ], -1)),
      createElementVNode("p", g1, toDisplayString(c.value), 1)
    ]));
  }
}), H = /* @__PURE__ */ L(M1, [["__scopeId", "data-v-c7b4e325"]]), k1 = { class: "list" }, y1 = { key: 0 }, w1 = {
  key: 1,
  style: { "border-bottom": "2px solid #e8d5ff", "margin-bottom": "1rem" }
}, Z1 = /* @__PURE__ */ defineComponent({
  __name: "List",
  props: {
    items: { default: () => [] },
    loading: { type: Boolean, default: false },
    itemKey: { type: Function, default: (t) => t.id ?? t.md_url ?? t.name ?? t.content ?? JSON.stringify(t) }
  },
  emits: ["click-item"],
  setup(t, { emit: e }) {
    const c = computed(() => l.items.filter((i) => !!i.top)), s = computed(() => l.items.filter((i) => !i.top)), l = t;
    return (i, C) => (openBlock(), createElementBlock("div", k1, [
      t.loading ? renderSlot(i.$slots, "loading", { key: 0 }, () => [
        createVNode(H)
      ]) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        s.value.length === 0 ? (openBlock(), createElementBlock("div", y1, [
          renderSlot(i.$slots, "empty", {}, () => [
            C[0] || (C[0] = createTextVNode("加载失败或者根本没有", -1))
          ])
        ])) : createCommentVNode("", true),
        c.value.length != 0 ? (openBlock(), createElementBlock("div", w1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(c.value, (d) => (openBlock(), createBlock(z, {
            key: t.itemKey(d),
            data: d,
            onClick: () => i.$emit("click-item", d)
          }, null, 8, ["data", "onClick"]))), 128))
        ])) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(s.value, (d) => (openBlock(), createBlock(z, {
          key: t.itemKey(d),
          data: d,
          onClick: () => i.$emit("click-item", d)
        }, null, 8, ["data", "onClick"]))), 128))
      ], 64))
    ]));
  }
}), x1 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2016%2016'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m%208%201%20c%20-1.65625%200%20-3%201.34375%20-3%203%20s%201.34375%203%203%203%20s%203%20-1.34375%203%20-3%20s%20-1.34375%20-3%20-3%20-3%20z%20m%20-1.5%207%20c%20-2.492188%200%20-4.5%202.007812%20-4.5%204.5%20v%200.5%20c%200%201.109375%200.890625%202%202%202%20h%208%20c%201.109375%200%202%20-0.890625%202%20-2%20v%20-0.5%20c%200%20-2.492188%20-2.007812%20-4.5%20-4.5%20-4.5%20z%20m%200%200'%20fill='%232e3436'/%3e%3c/svg%3e", z1 = ["src"], S1 = { key: 0 }, b1 = /* @__PURE__ */ defineComponent({
  __name: "Avatar",
  props: {
    size: {
      type: String,
      default: "la",
      validator: (t) => ["la", "sm"].includes(t)
    },
    img: {
      type: String,
      default: x1
    },
    name: {
      type: String,
      default: ""
    },
    avatarClick: {
      type: Function,
      default: null
    }
  },
  setup(t) {
    const e = t;
    return (c, s) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["profile", {
        large: t.size === "la",
        small: t.size === "sm"
      }])
    }, [
      createElementVNode("img", {
        class: normalizeClass(["avatar", {
          large: t.size === "la",
          small: t.size === "sm"
        }]),
        src: e.img,
        alt: "avatar",
        onClick: s[0] || (s[0] = (l) => e.avatarClick())
      }, null, 10, z1),
      t.size === "la" ? (openBlock(), createElementBlock("h1", S1, toDisplayString(e.name), 1)) : createCommentVNode("", true),
      s[1] || (s[1] = createElementVNode("div", null, null, -1))
    ], 2));
  }
}), N1 = /* @__PURE__ */ L(b1, [["__scopeId", "data-v-ff5f104f"]]), I1 = { class: "kv-card__key" }, V1 = { class: "kv-card__value" }, B1 = /* @__PURE__ */ defineComponent({
  __name: "KvCard",
  props: {
    direction: { default: "horizontal" }
  },
  setup(t) {
    const e = t;
    return (c, s) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["kv-card", `kv-card--${e.direction}`])
    }, [
      createElementVNode("div", I1, [
        renderSlot(c.$slots, "key", {}, void 0, true)
      ]),
      createElementVNode("div", V1, [
        renderSlot(c.$slots, "value", {}, void 0, true)
      ])
    ], 2));
  }
}), D1 = /* @__PURE__ */ L(B1, [["__scopeId", "data-v-1ba881bf"]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "HomeView",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-view" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(N1), {
        name: "ToaaM",
        img: "https://enhiucyodopknrbdtswy.supabase.co/storage/v1/object/public/avatars/0acac23b-b02b-43f8-9087-f01f16365e98/1.jpg",
        size: "la"
      }, null, _parent));
      _push(ssrRenderComponent(unref(D1), null, {
        key: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 用户名 `);
          } else {
            return [
              createTextVNode(" 用户名 ")
            ];
          }
        }),
        value: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(N1), {
              name: "ToaaM",
              img: "https://enhiucyodopknrbdtswy.supabase.co/storage/v1/object/public/avatars/0acac23b-b02b-43f8-9087-f01f16365e98/1.jpg",
              size: "la"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(N1), {
                name: "ToaaM",
                img: "https://enhiucyodopknrbdtswy.supabase.co/storage/v1/object/public/avatars/0acac23b-b02b-43f8-9087-f01f16365e98/1.jpg",
                size: "la"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/HomeView.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const supabaseUrl = "https://enhiucyodopknrbdtswy.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuaGl1Y3lvZG9wa25yYmR0c3d5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzNzg2MzQsImV4cCI6MjA2NDk1NDYzNH0.mqZh6tgICrAqPSm9-B3RUxpYAPYtwbsdhOXPttr4Wpc";
const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    // 持久化 session
    autoRefreshToken: true
    // 自动刷新 JWT
  }
});
const _sfc_main$e = {};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/BookMarkIcon.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100",
    "enable-background": "new 0 0 100 100",
    "xml:space": "preserve"
  }, _attrs))}><path d="M61.8,29.4l8.9,8.9l0,0c2,1.9,2,5.1,0,7l0,0L47.5,68.4V47.3V36.6l7.2-7.3C56.6,27.4,59.9,27.4,61.8,29.4z"></path><path d="M37.5,20H25c-2.8,0-5,2.2-5,5v43.8C20,75,25,80,31.2,80s11.2-5,11.2-11.2V25C42.5,22.2,40.2,20,37.5,20z M31.2,73.8c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S34,73.8,31.2,73.8z"></path><path d="M75,57.5h-8.8l-6,6H74L73.9,74H49.8l-6,6H75c2.8,0,5-2.2,5-5V62.5C80,59.8,77.8,57.5,75,57.5L75,57.5z"></path></svg>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/CategoryIcon.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const CategoryIcon = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$c = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    fill: "currentColor",
    height: "200px",
    width: "200px",
    version: "1.1",
    id: "Capa_1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 417.578 417.578",
    "xml:space": "preserve"
  }, _attrs))}><path d="M121.484,14.363c-5.821-9.972-20.368-12.098-28.525-3.675C81.053,22.978,81.76,41.137,82.045,57.451 c0.284,16.421,1.037,33.819,10.268,47.918c7.813,11.939,26.162,10.106,30.39-3.971c4.317-14.374,2.209-29.176,2.416-43.947 C125.326,42.499,129.348,27.828,121.484,14.363z"></path><path d="M339.236,62.889c-0.16-15.933,1.513-30.343-9.552-42.924c-8.465-9.623-22.064-5.032-28.528,3.676 c-8.814,11.873-5.318,28.061-4.142,41.982c1.178,13.991,2.167,29.366,7.04,42.592c5.318,14.437,26.66,16.298,31.246,0 C339.339,93.86,339.384,77.72,339.236,62.889z"></path><path d="M414.903,69.616c-3.435-20.424-19.672-24.529-38.242-18.547c-2.072,0.669-3.612,1.768-4.874,3.037 c-4.027,1.99-7.366,5.559-7.828,10.553c-1.196,13.003,2.86,28.618-0.888,41.267c-4.719,15.935-25.072,22.178-39.503,25.842 c-45.503,11.549-46.681-39.646-47.85-70.83c-0.139-3.764-2.786-6.063-5.8-7.183c-1.875-1.682-4.282-2.936-7.533-3.085 c-31.639-1.451-62.491-1.269-94.063,1.365c-2.508,0.209-4.397,1.153-5.978,2.35c-6.715-0.204-13.191,4.013-12.945,13.078 c0.793,29.145,1.279,73.966-41.363,67.094c-36.49-5.881-40.54-46.256-39.859-75.937c0.13-5.734-6.194-8.818-10.783-6.952 c-0.575-0.579-0.746-1.295-1.569-1.769c-10.949-6.295-23.017-8.826-35.364-6.135c-6.935,1.51-9.57,7.43-8.871,13.106 c-17.706,23.519-9.072,69.376-9.543,94.721c-1.471,79.176-5.442,160.592,4.386,239.246c0.923,7.413,6.65,11.271,12.228,11.318 c0.104,0.024,0.163,0.092,0.27,0.114c61.467,12.536,121.49,1.683,183.522,2.782c65.55,1.161,128.397,8.915,194.261,6.66 c7.529-0.258,11.624-4.398,12.966-9.426c1.91-1.797,3.266-4.185,3.514-7.017c6.221-71.11,2.795-144.488-1.468-217.276 C415.78,143.173,420.748,104.372,414.903,69.616z M39.098,383.272c-0.997-70.238,0.589-140.255,0.758-210.451 c2.638-0.175,5.303-0.379,7.808-0.487c6.929-0.297,13.65-0.445,19.05-3.384c100.615,9.112,210.679,3.245,310.368-2.329 c0.568-0.031,0.965-0.27,1.486-0.36c0.627,72.754,1.879,146.148,11.582,217.045C272.732,379.887,156.522,383.314,39.098,383.272z"></path> <path d="M85.729,195.029c-18.547,0-18.576,28.822,0,28.822C104.275,223.851,104.305,195.029,85.729,195.029z"></path> <path d="M143.086,192.309c-19.094,0-19.127,29.674,0,29.674C162.177,221.982,162.213,192.309,143.086,192.309z"></path> <path d="M202.439,188.903c-0.61,0.182-1.22,0.363-1.827,0.545c-7.861,2.346-14.401,11.549-11.316,19.929 c0.198,0.54,0.4,1.079,0.596,1.62c3.659,9.935,16.148,17.96,26.387,10.733c5.537-3.91,9.028-8.411,8.894-15.507 C224.956,194.803,213.838,185.5,202.439,188.903z"></path> <path d="M263.657,189.696c-0.592,0.294-1.187,0.587-1.779,0.882c-12.525,6.225-12.525,26.91,0,33.135 c0.592,0.293,1.187,0.588,1.779,0.883c13.449,6.685,30.408-1.346,30.408-17.45C294.065,191.04,277.106,183.01,263.657,189.696z"></path> <path d="M355.467,196.657c-0.829-0.705-1.652-1.409-2.475-2.113c-17.499-14.939-40.155,7.695-25.206,25.202 c0.705,0.826,1.409,1.651,2.114,2.476C345.069,239.988,373.238,211.833,355.467,196.657z"></path> <path d="M338.093,257.151c-15.361,0-15.387,23.877,0,23.877C353.457,281.028,353.484,257.151,338.093,257.151z"></path> <path d="M278.444,250.355c-15.254,0-15.278,23.705,0,23.705C293.698,274.06,293.722,250.355,278.444,250.355z"></path> <path d="M211.914,255.856c-22.938,0-22.976,35.645,0,35.645C234.848,291.501,234.884,255.856,211.914,255.856z"></path> <path d="M145.378,256.043c-16.788,0-16.818,26.094,0,26.094C162.169,282.137,162.195,256.043,145.378,256.043z"></path> <path d="M81.139,256.128c-16.678,0-16.705,25.922,0,25.922C97.82,282.05,97.85,256.128,81.139,256.128z"></path> <path d="M81.139,325.451c-21.946,0-21.981,34.109,0,34.109C103.088,359.56,103.126,325.451,81.139,325.451z"></path> <path d="M128.936,335.576c-0.541,0.894-1.086,1.788-1.631,2.683c-6.715,11.036,6.688,24.453,17.736,17.732 c0.894-0.544,1.786-1.086,2.679-1.631C166.986,342.638,140.735,316.185,128.936,335.576z"></path> <path d="M209.616,328.776c-17.665,0-17.695,27.457,0,27.457C227.286,356.233,227.316,328.776,209.616,328.776z"></path> <path d="M254.479,327.932c-0.468,0.937-0.941,1.873-1.41,2.809c-8.545,17.03,8.616,34.226,25.664,25.668 c0.939-0.471,1.877-0.94,2.813-1.411C311.167,340.132,269.449,298.103,254.479,327.932z"></path><path d="M333.504,327.326c-19.53,0-19.565,30.357,0,30.357C353.039,357.684,353.072,327.326,333.504,327.326z"></path></svg>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/DateIcon.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const DateIcon = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$b = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    class: "svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15.9894 4.9502L16.52 4.42014L16.52 4.42014L15.9894 4.9502ZM8.73845 19.429L8.20785 19.9591L8.73845 19.429ZM4.62176 15.3081L5.15236 14.7781L4.62176 15.3081ZM17.567 14.9943L17.3032 14.2922L17.567 14.9943ZM15.6499 15.7146L15.9137 16.4167L15.6499 15.7146ZM8.33227 8.38177L7.62805 8.12375H7.62805L8.33227 8.38177ZM9.02673 6.48636L9.73095 6.74438L9.02673 6.48636ZM5.84512 10.6735L6.04445 11.3965H6.04445L5.84512 10.6735ZM7.30174 10.1351L6.86354 9.52646L6.86354 9.52646L7.30174 10.1351ZM7.6759 9.79038L8.24673 10.2768H8.24673L7.6759 9.79038ZM14.2511 16.3805L14.7421 16.9475L14.7421 16.9475L14.2511 16.3805ZM13.3807 18.2012L12.6575 18.0022V18.0022L13.3807 18.2012ZM13.917 16.7466L13.3076 16.3094L13.3076 16.3094L13.917 16.7466ZM2.71854 12.7552L1.96855 12.76V12.76L2.71854 12.7552ZM2.93053 11.9521L2.28061 11.5778H2.28061L2.93053 11.9521ZM11.3053 21.3431L11.3064 20.5931H11.3064L11.3053 21.3431ZM12.0933 21.1347L11.7216 20.4833L11.7216 20.4833L12.0933 21.1347ZM21.9652 12.3049L22.6983 12.4634L21.9652 12.3049ZM11.6973 2.03606L11.8589 2.76845L11.6973 2.03606ZM22.3552 10.6303C22.1511 10.2699 21.6934 10.1433 21.333 10.3475C20.9726 10.5516 20.846 11.0093 21.0502 11.3697L22.3552 10.6303ZM18.006 8.03006C18.2988 8.3231 18.7737 8.32334 19.0667 8.0306C19.3597 7.73786 19.36 7.26298 19.0672 6.96994L18.006 8.03006ZM9.26905 18.8989L5.15236 14.7781L4.09116 15.8382L8.20785 19.9591L9.26905 18.8989ZM17.3032 14.2922L15.3861 15.0125L15.9137 16.4167L17.8308 15.6964L17.3032 14.2922ZM9.03649 8.63979L9.73095 6.74438L8.32251 6.22834L7.62805 8.12375L9.03649 8.63979ZM6.04445 11.3965C6.75591 11.2003 7.29726 11.0625 7.73995 10.7438L6.86354 9.52646C6.6906 9.65097 6.46608 9.72428 5.64578 9.95044L6.04445 11.3965ZM7.62805 8.12375C7.3351 8.92332 7.24345 9.14153 7.10507 9.30391L8.24673 10.2768C8.60048 9.86175 8.78237 9.33337 9.03649 8.63979L7.62805 8.12375ZM7.73995 10.7438C7.92704 10.6091 8.09719 10.4523 8.24673 10.2768L7.10507 9.30391C7.03377 9.38757 6.95268 9.46229 6.86354 9.52646L7.73995 10.7438ZM15.3861 15.0125C14.697 15.2714 14.1717 15.4571 13.7601 15.8135L14.7421 16.9475C14.9029 16.8082 15.1193 16.7152 15.9137 16.4167L15.3861 15.0125ZM14.1038 18.4001C14.3291 17.5813 14.4022 17.3569 14.5263 17.1838L13.3076 16.3094C12.9903 16.7517 12.853 17.2919 12.6575 18.0022L14.1038 18.4001ZM13.7601 15.8135C13.5904 15.9605 13.4385 16.1269 13.3076 16.3094L14.5263 17.1838C14.5888 17.0968 14.6612 17.0175 14.7421 16.9475L13.7601 15.8135ZM5.15236 14.7781C4.50623 14.1313 4.06806 13.691 3.78374 13.3338C3.49842 12.9753 3.46896 12.8201 3.46852 12.7505L1.96855 12.76C1.97223 13.3422 2.26135 13.8297 2.6101 14.2679C2.95984 14.7073 3.47123 15.2176 4.09116 15.8382L5.15236 14.7781ZM5.64578 9.95044C4.80056 10.1835 4.10403 10.3743 3.58304 10.5835C3.06349 10.792 2.57124 11.0732 2.28061 11.5778L3.58045 12.3264C3.61507 12.2663 3.717 12.146 4.14187 11.9755C4.56531 11.8055 5.16345 11.6394 6.04445 11.3965L5.64578 9.95044ZM3.46852 12.7505C3.46758 12.6016 3.50623 12.4553 3.58045 12.3264L2.28061 11.5778C2.07362 11.9372 1.96593 12.3452 1.96855 12.76L3.46852 12.7505ZM8.20785 19.9591C8.83172 20.5836 9.34472 21.0987 9.78654 21.4506C10.2271 21.8015 10.718 22.0922 11.3042 22.0931L11.3064 20.5931C11.237 20.593 11.0815 20.5644 10.7211 20.2773C10.3619 19.9912 9.91931 19.5499 9.26905 18.8989L8.20785 19.9591ZM12.6575 18.0022C12.4133 18.8897 12.2463 19.4924 12.0752 19.9188C11.9034 20.3467 11.7822 20.4487 11.7216 20.4833L12.4651 21.7861C12.9741 21.4956 13.2573 21.0004 13.4672 20.4775C13.6777 19.9532 13.8695 19.2516 14.1038 18.4001L12.6575 18.0022ZM11.3042 22.0931C11.7113 22.0937 12.1115 21.9879 12.4651 21.7861L11.7216 20.4833C11.5951 20.5555 11.452 20.5933 11.3064 20.5931L11.3042 22.0931ZM17.8308 15.6964C19.1922 15.1849 20.2941 14.773 21.0771 14.3384C21.8719 13.8973 22.5084 13.3416 22.6983 12.4634L21.2322 12.1464C21.178 12.3968 21.0002 12.6655 20.3492 13.0268C19.6865 13.3946 18.7113 13.7632 17.3032 14.2922L17.8308 15.6964ZM16.52 4.42014C15.4841 3.3832 14.6481 2.54353 13.9246 2.00638C13.1909 1.46165 12.4175 1.10912 11.5357 1.30367L11.8589 2.76845C12.1086 2.71335 12.4278 2.7633 13.0305 3.21075C13.6434 3.66579 14.3877 4.40801 15.4588 5.48026L16.52 4.42014ZM9.73095 6.74438C10.2526 5.32075 10.6162 4.33403 10.9813 3.66315C11.3403 3.00338 11.6091 2.82357 11.8589 2.76845L11.5357 1.30367C10.6541 1.49819 10.1006 2.14332 9.6637 2.94618C9.23286 3.73793 8.82695 4.85154 8.32251 6.22834L9.73095 6.74438ZM21.0502 11.3697C21.2515 11.7251 21.2745 11.9507 21.2322 12.1464L22.6983 12.4634C22.8404 11.8064 22.6796 11.2027 22.3552 10.6303L21.0502 11.3697ZM15.4588 5.48026L18.006 8.03006L19.0672 6.96994L16.52 4.42014L15.4588 5.48026Z"></path><path d="M1.4694 21.4697C1.17666 21.7627 1.1769 22.2376 1.46994 22.5304C1.76298 22.8231 2.23786 22.8229 2.5306 22.5298L1.4694 21.4697ZM7.18383 17.8719C7.47657 17.5788 7.47633 17.1039 7.18329 16.8112C6.89024 16.5185 6.41537 16.5187 6.12263 16.8117L7.18383 17.8719ZM2.5306 22.5298L7.18383 17.8719L6.12263 16.8117L1.4694 21.4697L2.5306 22.5298Z"></path></g></svg>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/PinIcon.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const PinIcon = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$4]]);
const hasImage = true;
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    data: {}
  },
  setup(__props) {
    const formatDate = (iso) => new Date(iso).toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
    const route = useRoute();
    const router2 = useRouter();
    const filterByTag = (tag) => {
      if (route.query.tag === tag) {
        const { tag: tag2, ...rest } = route.query;
        router2.replace({ query: rest });
      } else {
        router2.replace({ query: { ...route.query, tag } });
      }
    };
    const cardRef = ref(null);
    const bgPos = ref("center");
    const updateBackground = (e) => {
      const card = cardRef.value;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const offsetX = ((x / rect.width - 0.5) * 20).toFixed(2);
      const offsetY = ((y / rect.height - 0.5) * 20).toFixed(2);
      bgPos.value = `${50 + Number(offsetX)}% ${50 + Number(offsetY)}%`;
    };
    const resetBackground = () => {
      bgPos.value = "center";
    };
    onMounted(() => {
      const el = cardRef.value;
      if (!el) return;
      el.addEventListener("mousemove", updateBackground);
      el.addEventListener("mouseleave", resetBackground);
    });
    onBeforeUnmount(() => {
      const el = cardRef.value;
      if (!el) return;
      el.removeEventListener("mousemove", updateBackground);
      el.removeEventListener("mouseleave", resetBackground);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_fade = resolveDirective("fade");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["card", { hasImage }],
        ref_key: "cardRef",
        ref: cardRef,
        "view-transition-name": `post-${__props.data.md_url}`
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_fade, { offset: "20px", duration: 500 })))} data-v-cce09f9e>`);
      if (__props.data.top) {
        _push(ssrRenderComponent(PinIcon, { class: "pin" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      {
        _push(`<div class="card-image" style="${ssrRenderStyle({
          backgroundImage: `url('${__props.data.image_url}')`,
          backgroundPosition: bgPos.value,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        })}" data-v-cce09f9e></div>`);
      }
      _push(`<div class="card-content" data-v-cce09f9e><h3 class="card-title _before-line" data-v-cce09f9e>${ssrInterpolate(__props.data.title)}</h3><p class="card-summary" data-v-cce09f9e>${ssrInterpolate(__props.data.summary)}</p><div class="card-footer" data-v-cce09f9e><div class="meta-info" data-v-cce09f9e>`);
      _push(ssrRenderComponent(IconCard, { icon: CategoryIcon }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-cce09f9e${_scopeId}>${ssrInterpolate(__props.data.class)}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(__props.data.class), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.data.tags && __props.data.tags.length) {
        _push(ssrRenderComponent(IconCard, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.data.tags, (tag) => {
                _push2(`<a style="${ssrRenderStyle({ "margin-left": "0.5rem" })}" href="javascript:void(0)" data-v-cce09f9e${_scopeId}>${ssrInterpolate("#" + tag)}</a>`);
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.data.tags, (tag) => {
                  return openBlock(), createBlock("a", {
                    style: { "margin-left": "0.5rem" },
                    key: tag,
                    href: "javascript:void(0)",
                    onClick: withModifiers(($event) => filterByTag(tag), ["prevent"])
                  }, toDisplayString("#" + tag), 9, ["onClick"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(IconCard, {
        class: "date",
        icon: DateIcon
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-cce09f9e${_scopeId}>${ssrInterpolate(formatDate(__props.data.created_at))}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(formatDate(__props.data.created_at)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Card.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Card = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-cce09f9e"]]);
const _sfc_main$9 = {
  __name: "Loading",
  __ssrInlineRender: true,
  setup(__props) {
    const loadingQuotes = [
      "唉……加载是无法跳过的呢 (´-ω-`)",
      "谁叫这是必要的呢 ( ｰ̀εｰ́ )",
      "加载……又是加载……╮(╯_╰)╭",
      "没办法，加载是必要的 ( ･᷄ㅂ･᷅ )",
      "加载是宿命……接受它吧 ( •︠ˍ•︡ )",
      "别催了，加载在努力了 (´･_･`)",
      "不想等，但还是得等 (￣_￣|||)",
      "缓一缓，数据也得喘口气 ( ´_ゝ｀)",
      "我也很急，但加载不急不来 ( -᷄ω-᷅ )"
    ];
    const quote = ref("");
    onMounted(() => {
      const index = Math.floor(Math.random() * loadingQuotes.length);
      quote.value = loadingQuotes[index];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "load-wrapper" }, _attrs))} data-v-e870030b><svg class="container" x="0px" y="0px" viewBox="0 0 37 37" height="37" width="37" preserveAspectRatio="xMidYMid meet" data-v-e870030b><path class="track" fill="none" stroke-width="5" pathLength="100" d="M0.37 18.5 C0.37 5.772 5.772 0.37 18.5 0.37 S36.63 5.772 36.63 18.5 S31.228 36.63 18.5 36.63 S0.37 31.228 0.37 18.5" data-v-e870030b></path><path class="car" fill="none" stroke-width="5" pathLength="100" d="M0.37 18.5 C0.37 5.772 5.772 0.37 18.5 0.37 S36.63 5.772 36.63 18.5 S31.228 36.63 18.5 36.63 S0.37 31.228 0.37 18.5" data-v-e870030b></path></svg><p class="loading-text" data-v-e870030b>${ssrInterpolate(quote.value)}</p></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Loading.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Loading = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-e870030b"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "List",
  __ssrInlineRender: true,
  props: {
    items: { default: () => [] },
    loading: { type: Boolean, default: false },
    itemKey: { type: Function, default: (item) => item.md_url ?? item.id ?? item.name ?? item.content ?? JSON.stringify(item) }
  },
  emits: ["click-item"],
  setup(__props, { emit: __emit }) {
    const topItems = computed(() => props.items.filter((i) => !!i.top));
    const items = computed(() => props.items.filter((i) => !i.top));
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "list" }, _attrs))}>`);
      if (__props.loading) {
        ssrRenderSlot(_ctx.$slots, "loading", {}, () => {
          _push(ssrRenderComponent(Loading, null, null, _parent));
        }, _push, _parent);
      } else {
        _push(`<!--[-->`);
        if (items.value.length === 0) {
          _push(`<div>`);
          ssrRenderSlot(_ctx.$slots, "empty", {}, () => {
            _push(`加载失败`);
          }, _push, _parent);
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (topItems.value.length != 0) {
          _push(`<div style="${ssrRenderStyle({ "border-bottom": "2px solid #e8d5ff", "margin-bottom": "1rem" })}"><!--[-->`);
          ssrRenderList(topItems.value, (item) => {
            _push(ssrRenderComponent(Card, {
              key: __props.itemKey(item),
              data: item,
              onClick: () => _ctx.$emit("click-item", item)
            }, null, _parent));
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(items.value, (item) => {
          _push(ssrRenderComponent(Card, {
            key: __props.itemKey(item),
            data: item,
            onClick: () => _ctx.$emit("click-item", item)
          }, null, _parent));
        });
        _push(`<!--]--><!--]-->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/List.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ProjectView",
  __ssrInlineRender: true,
  setup(__props) {
    const projects = ref([]);
    const loading = ref(true);
    onMounted(async () => {
      const { data, error } = await supabase.from("projects").select("*").order("created_at", { ascending: false });
      if (!error && data) {
        projects.value = data;
      }
      loading.value = false;
    });
    const goToProject = (id) => {
      router.push(`/project/${id}`);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "projects" }, _attrs))} data-v-34f6ca19>`);
      _push(ssrRenderComponent(_sfc_main$8, {
        class: "project-list",
        items: projects.value,
        loading: loading.value,
        onClickItem: goToProject,
        itemKey: (item) => item.md_url
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/ProjectView.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ProjectView = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-34f6ca19"]]);
const MY_UID = "0acac23b-b02b-43f8-9087-f01f16365e98";
const usePostStore = defineStore("post", {
  state: () => ({
    posts: [],
    loaded: false,
    subscribed: false
  }),
  actions: {
    async fetchPosts(force = false) {
      if (this.loaded && !force) return;
      const { data, error } = await supabase.from("posts").select("id, created_at, title, top, collection, tags, md_url, summary, image_url, class").eq("user_id", MY_UID).order("created_at", { ascending: false });
      if (error) throw error;
      this.posts = data || [];
      this.loaded = true;
    },
    initRealtime() {
      if (this.subscribed) return;
      this.subscribed = true;
      supabase.channel("public:posts").on("postgres_changes", {
        event: "*",
        schema: "public",
        table: "posts",
        filter: `user_id=eq.${MY_UID}`
      }, async () => {
        await this.fetchPosts(true);
      }).subscribe();
    },
    getBySlug(slug) {
      return this.posts.find((p) => p.md_url === slug) || null;
    },
    getById(id) {
      return this.posts.find((p) => p.id === id) || null;
    },
    getPrevNext(slug) {
      const index = this.posts.findIndex((p) => p.md_url === slug);
      return {
        prev: this.posts[index + 1] || null,
        next: this.posts[index - 1] || null
      };
    },
    setContent(id, content) {
      const post = this.getById(id);
      if (post) post.content = content;
    },
    formatDate(iso) {
      return new Date(iso).toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "short",
        day: "numeric"
      });
    },
    async getUserIP() {
      const res = await fetch("https://api.ipify.org?format=json");
      const data = await res.json();
      return data.ip;
    },
    // 获取用户 IP 和位置信息（无需自己写 IP 提取）
    async getUserLocation() {
      const res = await fetch("https://enhiucyodopknrbdtswy.supabase.co/functions/v1/ip-info");
      const data = await res.json();
      return data;
    }
    // async loadPost(slug: string) {
    //   await this.fetchPosts()
    //   const post = this.getBySlug(slug)
    //   if (!post) return
    //   this.currentPost = post
    //   if (!post.content) {
    //     const { data, error } = await supabase
    //       .from('posts')
    //       .select('content')
    //       .eq('id', post.id)
    //       .single()
    //     if (!error && data) {
    //       const html = new MarkdownIt({ html: true, linkify: true, breaks: true }).render(data.content)
    //       this.setContent(post.id, html)
    //       this.currentPost.content = html
    //     }else {
    //       try {
    //         const res = await fetch(`https://enhiucyodopknrbdtswy.supabase.co/storage/v1/object/public/posts/${post.md_url}.md`)
    //         const text = await res.text()
    //         const html = md.render(text)
    //         this.setContent(post.id, html)  
    //         currentPost.value.content = html
    //       } catch (e) {
    //         console.error('加载文章内容失败', e)
    //       }
    //     }
    //   }
    // },
    // async fetchLikes(postId: number) {
    //   const { count } = await supabase
    //     .from('likes')
    //     .select('*', { count: 'exact', head: true })
    //     .eq('post_id', postId)
    //   this.likeCount = count || 0
    //   this.hasLiked = !!localStorage.getItem(`liked-${postId}`)
    // },
    // async like(postId: number) {
    //   if (this.hasLiked) return
    //   const { error } = await supabase.from('likes').insert({ post_id: postId })
    //   if (!error) {
    //     this.likeCount += 1
    //     this.hasLiked = true
    //     localStorage.setItem(`liked-${postId}`, 'true')
    //   }
    // },
    // async fetchComments(postId: number) {
    //   const { data } = await supabase
    //     .from('comments')
    //     .select('*')
    //     .eq('post_id', postId)
    //     .order('created_at')
    //   this.comments = data || []
    // },
    // async submitComment(postId: number, content: string) {
    //   const text = content.trim()
    //   if (!text) return
    //   const { error } = await supabase.from('comments').insert({
    //     post_id: postId,
    //     content: text,
    //     user_name: '游客'
    //   })
    //   if (!error) await this.fetchComments(postId)
    // }
  }
});
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: (code, lang) => {
    const grammar = Prism.languages[lang];
    if (!grammar) {
      return `<pre><code>${md.utils.escapeHtml(code)}</code></pre>`;
    }
    const html = Prism.highlight(code, grammar, lang);
    return `<pre class="language-${lang}"><code>${html}</code></pre>`;
  }
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Toc",
  __ssrInlineRender: true,
  props: {
    headings: {}
  },
  setup(__props) {
    const props = __props;
    const scrollStore = useScrollStore();
    const activeId = computed(() => scrollStore.activeHeadingId);
    const onScroll = () => {
      const scrollY = window.scrollY;
      for (let i = props.headings.length - 1; i >= 0; i--) {
        const el = document.getElementById(props.headings[i].id);
        if (el && el.offsetTop - 120 <= scrollY) {
          scrollStore.setActiveHeading(props.headings[i].id);
          break;
        }
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", onScroll);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("scroll", onScroll);
    });
    const tocItems = ref([]);
    const tocContainer = ref(null);
    const highlightStyle = ref(null);
    const updateHighlight = () => {
      nextTick(() => {
        const index = props.headings.findIndex((h) => h.id === activeId.value);
        const item = tocItems.value[index];
        if (item && tocContainer.value) {
          const offsetTop = item.offsetTop;
          const height = item.offsetHeight;
          highlightStyle.value = {
            transform: `translateY(${offsetTop}px)`,
            height: `${height}px`,
            width: `calc(100% - 1rem)`
            // 适配内边距
          };
        } else {
          highlightStyle.value = null;
        }
      });
    };
    watch(activeId, updateHighlight);
    onMounted(updateHighlight);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "toc",
        ref_key: "tocContainer",
        ref: tocContainer
      }, _attrs))} data-v-32cb7a16><h2 data-v-32cb7a16>锚点</h2>`);
      if (highlightStyle.value) {
        _push(`<div class="highlight-block" style="${ssrRenderStyle(highlightStyle.value)}" data-v-32cb7a16></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(__props.headings, (heading, i) => {
        _push(`<div class="${ssrRenderClass(["toc-item", { active: heading.id === activeId.value }])}" style="${ssrRenderStyle({ paddingLeft: `${(heading.level - 2) * 1}rem` })}" data-v-32cb7a16>${ssrInterpolate(heading.text)}</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Toc.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Toc = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-32cb7a16"]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M20.9751 12.1852L20.2361 12.0574L20.9751 12.1852ZM20.2696 16.265L19.5306 16.1371L20.2696 16.265ZM6.93776 20.4771L6.19055 20.5417H6.19055L6.93776 20.4771ZM6.1256 11.0844L6.87281 11.0198L6.1256 11.0844ZM13.9949 5.22142L14.7351 5.34269V5.34269L13.9949 5.22142ZM13.3323 9.26598L14.0724 9.38725V9.38725L13.3323 9.26598ZM6.69813 9.67749L6.20854 9.10933H6.20854L6.69813 9.67749ZM8.13687 8.43769L8.62646 9.00585H8.62646L8.13687 8.43769ZM10.518 4.78374L9.79207 4.59542L10.518 4.78374ZM10.9938 2.94989L11.7197 3.13821L11.7197 3.13821L10.9938 2.94989ZM12.6676 2.06435L12.4382 2.77841L12.4382 2.77841L12.6676 2.06435ZM12.8126 2.11093L13.0419 1.39687L13.0419 1.39687L12.8126 2.11093ZM9.86194 6.46262L10.5235 6.81599V6.81599L9.86194 6.46262ZM13.9047 3.24752L13.1787 3.43584V3.43584L13.9047 3.24752ZM11.6742 2.13239L11.3486 1.45675L11.3486 1.45675L11.6742 2.13239ZM20.2361 12.0574L19.5306 16.1371L21.0086 16.3928L21.7142 12.313L20.2361 12.0574ZM13.245 21.25H8.59634V22.75H13.245V21.25ZM7.68497 20.4125L6.87281 11.0198L5.37839 11.149L6.19055 20.5417L7.68497 20.4125ZM19.5306 16.1371C19.0238 19.0677 16.3813 21.25 13.245 21.25V22.75C17.0712 22.75 20.3708 20.081 21.0086 16.3928L19.5306 16.1371ZM13.2548 5.10015L12.5921 9.14472L14.0724 9.38725L14.7351 5.34269L13.2548 5.10015ZM7.18772 10.2456L8.62646 9.00585L7.64728 7.86954L6.20854 9.10933L7.18772 10.2456ZM11.244 4.97206L11.7197 3.13821L10.2678 2.76157L9.79207 4.59542L11.244 4.97206ZM12.4382 2.77841L12.5832 2.82498L13.0419 1.39687L12.897 1.3503L12.4382 2.77841ZM10.5235 6.81599C10.8354 6.23198 11.0777 5.61339 11.244 4.97206L9.79207 4.59542C9.65572 5.12107 9.45698 5.62893 9.20041 6.10924L10.5235 6.81599ZM12.5832 2.82498C12.8896 2.92342 13.1072 3.16009 13.1787 3.43584L14.6306 3.05921C14.4252 2.26719 13.819 1.64648 13.0419 1.39687L12.5832 2.82498ZM11.7197 3.13821C11.7547 3.0032 11.8522 2.87913 11.9998 2.80804L11.3486 1.45675C10.8166 1.71309 10.417 2.18627 10.2678 2.76157L11.7197 3.13821ZM11.9998 2.80804C12.1345 2.74311 12.2931 2.73181 12.4382 2.77841L12.897 1.3503C12.3872 1.18655 11.8312 1.2242 11.3486 1.45675L11.9998 2.80804ZM14.1537 10.9842H19.3348V9.4842H14.1537V10.9842ZM14.7351 5.34269C14.8596 4.58256 14.824 3.80477 14.6306 3.0592L13.1787 3.43584C13.3197 3.97923 13.3456 4.54613 13.2548 5.10016L14.7351 5.34269ZM8.59634 21.25C8.12243 21.25 7.726 20.887 7.68497 20.4125L6.19055 20.5417C6.29851 21.7902 7.34269 22.75 8.59634 22.75V21.25ZM8.62646 9.00585C9.30632 8.42 10.0391 7.72267 10.5235 6.81599L9.20041 6.10924C8.85403 6.75767 8.30249 7.30493 7.64728 7.86954L8.62646 9.00585ZM21.7142 12.313C21.9695 10.8365 20.8341 9.4842 19.3348 9.4842V10.9842C19.9014 10.9842 20.3332 11.4959 20.2361 12.0574L21.7142 12.313ZM12.5921 9.14471C12.4344 10.1076 13.1766 10.9842 14.1537 10.9842V9.4842C14.1038 9.4842 14.0639 9.43901 14.0724 9.38725L12.5921 9.14471ZM6.87281 11.0198C6.84739 10.7258 6.96474 10.4378 7.18772 10.2456L6.20854 9.10933C5.62021 9.61631 5.31148 10.3753 5.37839 11.149L6.87281 11.0198Z" fill="currentColor"></path><path opacity="0.8" d="M3.9716 21.4709L3.22439 21.5355L3.9716 21.4709ZM3 10.2344L3.74721 10.1698C3.71261 9.76962 3.36893 9.46776 2.96767 9.48507C2.5664 9.50239 2.25 9.83274 2.25 10.2344L3 10.2344ZM4.71881 21.4063L3.74721 10.1698L2.25279 10.299L3.22439 21.5355L4.71881 21.4063ZM3.75 21.5129V10.2344H2.25V21.5129H3.75ZM3.22439 21.5355C3.2112 21.383 3.33146 21.2502 3.48671 21.2502V22.7502C4.21268 22.7502 4.78122 22.1281 4.71881 21.4063L3.22439 21.5355ZM3.48671 21.2502C3.63292 21.2502 3.75 21.3686 3.75 21.5129H2.25C2.25 22.1954 2.80289 22.7502 3.48671 22.7502V21.2502Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/LikeIcon.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const LikeIcon = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M1.23621 11.1034C1.23621 5.36133 6.07454 0.763672 11.9862 0.763671C14.2426 0.763671 16.3321 1.4227 18.073 2.58609C20.8865 4.4319 22.7362 7.55126 22.7362 11.1034C22.7362 14.2061 21.3193 16.9815 19.0724 18.8609C19.1676 18.9782 19.2691 19.1076 19.371 19.2448C19.5794 19.5251 19.8007 19.8529 19.9732 20.1857C20.1354 20.4987 20.3019 20.9046 20.3019 21.3173C20.3019 22.0126 19.8872 22.5507 19.4096 22.8608C18.9306 23.1718 18.303 23.3178 17.6892 23.1894C16.4767 22.9358 14.9799 22.4797 13.8035 22.0941C13.2115 21.9001 12.6936 21.7216 12.3236 21.5916C12.1385 21.5265 11.9902 21.4735 11.8878 21.4367L11.8522 21.4238C8.48271 21.3843 5.46883 19.8566 3.55066 17.4735C2.10188 15.7237 1.23621 13.5057 1.23621 11.1034ZM12.2448 19.9706L12.2538 19.9739L12.2827 19.9844L12.3959 20.0254C12.4951 20.0611 12.6398 20.1128 12.8209 20.1764C13.1834 20.3038 13.6909 20.4787 14.2706 20.6687C15.4375 21.0511 16.869 21.4854 17.9963 21.7212C18.1926 21.7623 18.4196 21.7152 18.5926 21.6028C18.767 21.4896 18.8019 21.3739 18.8019 21.3173C18.8019 21.2726 18.7727 21.1292 18.6413 20.8757C18.5202 20.6419 18.3501 20.3858 18.1671 20.1394C17.986 19.8957 17.8031 19.6762 17.6647 19.5169C17.5958 19.4376 17.5388 19.3742 17.4996 19.3313C17.48 19.3098 17.4649 19.2936 17.4551 19.283L17.4444 19.2716L17.4422 19.2693C17.2927 19.1117 17.2188 18.897 17.2397 18.6808C17.2606 18.4646 17.3742 18.2681 17.5511 18.142C19.803 16.5383 21.2362 13.9796 21.2362 11.1034C21.2362 8.08942 19.669 5.42603 17.2477 3.83866L17.242 3.8349C15.7471 2.83523 13.9468 2.26367 11.9862 2.26367C6.84332 2.26367 2.73621 6.24818 2.73621 11.1034C2.73621 13.1396 3.46909 15.0246 4.70907 16.5205L4.71623 16.5292C6.37286 18.5897 9.01179 19.9246 11.9862 19.9246C12.0744 19.9246 12.162 19.9402 12.2448 19.9706C12.2447 19.9706 12.2448 19.9706 12.2448 19.9706Z" fill="currentColor"></path></svg>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/CommentIcon.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const CommentIcon = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Post",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const slug = computed(() => route.params.slug);
    const headings = ref([]);
    const postStore = usePostStore();
    const currentPost = ref();
    const prevPost = ref();
    const nextPost = ref();
    const router2 = useRouter();
    const filterByTag = (tag) => {
      if (route.query.tag === tag) {
        const { tag: tag2, ...rest } = route.query;
        router2.replace({ query: rest });
      } else {
        router2.replace({ query: { ...route.query, tag } });
      }
    };
    const collectHeadings = () => {
      const container = document.querySelector(".md");
      if (!container) return;
      const headingEls = container.querySelectorAll("h1, h2, h3");
      const result = [];
      headingEls.forEach((el, index) => {
        var _a;
        const tag = el.tagName.toLowerCase();
        const level = parseInt(tag.replace("h", ""));
        const text = ((_a = el.textContent) == null ? void 0 : _a.trim()) || "";
        const id = `heading-${index}`;
        el.setAttribute("id", id);
        result.push({ id, text, level });
      });
      headings.value = result;
    };
    watch(slug, (newSlug) => {
      if (newSlug) loadPost(newSlug);
    });
    onMounted(() => {
      loadPost(slug.value);
    });
    const loadPost = async (slug2) => {
      await postStore.fetchPosts();
      const post = postStore.getBySlug(slug2);
      if (!post) return;
      currentPost.value = post;
      if (!post.content) {
        const { data, error } = await supabase.from("posts").select("content").eq("id", post.id).single();
        if (!error && data) {
          const html = md.render(data.content);
          postStore.setContent(post.id, html);
          currentPost.value.content = html;
        } else {
          try {
            const res = await fetch(`https://enhiucyodopknrbdtswy.supabase.co/storage/v1/object/public/posts/${post.md_url}.md`);
            const text = await res.text();
            const html = md.render(text);
            postStore.setContent(post.id, html);
            currentPost.value.content = html;
          } catch (e) {
            console.error("加载文章内容失败", e);
          }
        }
      } else {
        currentPost.value.content = md.render(post.content);
      }
      const { prev, next } = postStore.getPrevNext(slug2);
      prevPost.value = prev;
      nextPost.value = next;
      window.scrollTo({ top: 0, behavior: "smooth" });
      await nextTick();
      collectHeadings();
      await loadLikes();
      loadComments();
    };
    const comments = ref([]);
    ref("");
    const loadComments = async () => {
      if (!currentPost.value) return;
      const { data, error } = await supabase.from("comments").select("*").eq("post_id", currentPost.value.id).order("created_at", { ascending: true });
      if (!error && data) {
        comments.value = data;
      }
    };
    const likeCount = ref(0);
    const hasLiked = ref(false);
    let userIP = "";
    const loadLikes = async () => {
      if (!currentPost.value) return;
      userIP = await postStore.getUserIP();
      const { count } = await supabase.from("likes").select("*", { count: "exact", head: true }).eq("post_id", currentPost.value.id);
      if (typeof count === "number") {
        likeCount.value = count;
      }
      const { data } = await supabase.from("likes").select("id").eq("post_id", currentPost.value.id).eq("user_ip", userIP);
      hasLiked.value = !!(data && data.length > 0);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _directive_fade = resolveDirective("fade");
      if (currentPost.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "post-container",
          "view-transition-name": `post-${currentPost.value.md_url}`
        }, _attrs, ssrGetDirectiveProps(_ctx, _directive_fade)))} data-v-ccf1c900><div class="post-main" data-v-ccf1c900><div class="post" data-v-ccf1c900><div class="meta" data-v-ccf1c900><h1 data-v-ccf1c900>${ssrInterpolate(currentPost.value.title)}</h1><div class="meta-info" data-v-ccf1c900>`);
        _push(ssrRenderComponent(IconCard, { icon: CategoryIcon }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-ccf1c900${_scopeId}>${ssrInterpolate(currentPost.value.class)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(currentPost.value.class), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (currentPost.value.tags && currentPost.value.tags.length) {
          _push(ssrRenderComponent(IconCard, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<!--[-->`);
                ssrRenderList(currentPost.value.tags, (tag) => {
                  _push2(`<a style="${ssrRenderStyle({ "margin-left": "0.5rem" })}" href="javascript:void(0)" data-v-ccf1c900${_scopeId}>${ssrInterpolate("#" + tag)}</a>`);
                });
                _push2(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(currentPost.value.tags, (tag) => {
                    return openBlock(), createBlock("a", {
                      style: { "margin-left": "0.5rem" },
                      key: tag,
                      href: "javascript:void(0)",
                      onClick: ($event) => filterByTag(tag)
                    }, toDisplayString("#" + tag), 9, ["onClick"]);
                  }), 128))
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(IconCard, {
          class: "date",
          icon: DateIcon
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-ccf1c900${_scopeId}>${ssrInterpolate(unref(postStore).formatDate(currentPost.value.created_at))}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(unref(postStore).formatDate(currentPost.value.created_at)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="md" data-v-ccf1c900>${currentPost.value.content ?? ""}</div></div><div class="post-footer" data-v-ccf1c900>`);
        if (prevPost.value) {
          _push(ssrRenderComponent(_component_router_link, {
            to: { name: "post", params: { slug: prevPost.value.md_url } },
            class: "router-link left"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` ← ${ssrInterpolate(prevPost.value.title)}`);
              } else {
                return [
                  createTextVNode(" ← " + toDisplayString(prevPost.value.title), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (nextPost.value) {
          _push(ssrRenderComponent(_component_router_link, {
            to: { name: "post", params: { slug: nextPost.value.md_url } },
            class: "router-link right"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(nextPost.value.title)} → `);
              } else {
                return [
                  createTextVNode(toDisplayString(nextPost.value.title) + " → ", 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="comment" data-v-ccf1c900><h1 class="_before-line" data-v-ccf1c900>评论(暂时关闭)</h1></div></div><div class="post-side" data-v-ccf1c900>`);
        _push(ssrRenderComponent(Toc, { headings: headings.value }, null, _parent));
        _push(`<div class="post-likes" data-v-ccf1c900><div class="${ssrRenderClass([{ liked: hasLiked.value }, "svgbtn"])}" data-v-ccf1c900>`);
        _push(ssrRenderComponent(LikeIcon, null, null, _parent));
        _push(`<span data-v-ccf1c900>${ssrInterpolate(likeCount.value)}</span></div><div class="svgbtn" data-v-ccf1c900>`);
        _push(ssrRenderComponent(CommentIcon, null, null, _parent));
        _push(`${ssrInterpolate(currentPost.value.class)}</div></div></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "loading" }, _attrs))} data-v-ccf1c900>加载中或文章不存在</div>`);
      }
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/Post.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Post = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-ccf1c900"]]);
function useDevice(breakpoint = 768) {
  const query = `(max-width: ${breakpoint}px)`;
  const mediaQuery = window.matchMedia(query);
  const isMobile = ref(mediaQuery.matches);
  const update = (e) => {
    isMobile.value = e.matches;
  };
  onMounted(() => {
    mediaQuery.addEventListener("change", update);
  });
  onUnmounted(() => {
    mediaQuery.removeEventListener("change", update);
  });
  return { isMobile };
}
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect width="48" height="48" fill="white" fill-opacity="0.01"></rect><rect x="4" y="4" width="16" height="16" rx="2" fill="#f0b6f1" stroke="white" stroke-width="4" stroke-linejoin="round"></rect><rect x="4" y="28" width="16" height="16" rx="2" fill="#f0b6f1" stroke="white" stroke-width="4" stroke-linejoin="round"></rect><rect x="28" y="4" width="16" height="16" rx="2" fill="#f0b6f1" stroke="white" stroke-width="4" stroke-linejoin="round"></rect><path d="M28 28H44" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M36 36H44" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28 44H44" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/icons/MoreIcon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const MoreIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PostsView",
  __ssrInlineRender: true,
  setup(__props) {
    const postStore = usePostStore();
    const scrollStore = useScrollStore();
    const { isMobile } = useDevice();
    const route = useRoute();
    const router2 = useRouter();
    const triggerTop = ref(0);
    const loading = ref(true);
    const selectedTag = computed(() => route.query.tag);
    computed(() => postStore.posts);
    const filteredPosts = computed(() => {
      if (!selectedTag.value) return postStore.posts;
      return postStore.posts.filter((post) => {
        var _a;
        return (_a = post.tags) == null ? void 0 : _a.includes(selectedTag.value);
      });
    });
    const goToPost = (post) => {
      document.startViewTransition(() => {
        router2.push(`/post/${post.md_url}`);
      });
    };
    onMounted(async () => {
      await nextTick();
      const trigger = document.getElementById("trigger-element");
      if (trigger) {
        triggerTop.value = trigger.getBoundingClientRect().top + window.scrollY;
      }
      window.addEventListener("scroll", handleScroll);
    });
    const handleScroll = () => {
      const scrollY = window.scrollY;
      scrollStore.updateAvatarVisibility(scrollY >= triggerTop.value - 60);
    };
    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScroll);
      scrollStore.updateAvatarVisibility(false);
    });
    onMounted(async () => {
      loading.value = true;
      await postStore.fetchPosts();
      postStore.initRealtime();
      loading.value = false;
    });
    const tagCounts = computed(() => {
      const counts = {};
      postStore.posts.forEach((post) => {
        var _a;
        (_a = post.tags) == null ? void 0 : _a.forEach((tag) => {
          counts[tag] = (counts[tag] || 0) + 1;
        });
      });
      return counts;
    });
    const minCount = computed(() => Math.min(...Object.values(tagCounts.value)));
    const maxCount = computed(() => Math.max(...Object.values(tagCounts.value)));
    const getFontSize = (count) => {
      const min = 0.8, max = 1.8;
      if (minCount.value === maxCount.value) return `${(min + max) / 2}rem`;
      const scale = (count - minCount.value) / (maxCount.value - minCount.value);
      return `${min + scale * (max - min)}rem`;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "posts-parent" }, _attrs))} data-v-ae96efa5><section class="content" data-v-ae96efa5><div class="morebtn" data-v-ae96efa5><button class="svgbtn" target="_blank" rel="noopener noreferrer" data-v-ae96efa5>`);
      _push(ssrRenderComponent(MoreIcon, null, null, _parent));
      _push(`</button></div><div class="${ssrRenderClass([{ expanded: unref(scrollStore).showAvatarInNavbar }, "content-inner"])}" data-v-ae96efa5><div class="content-hide" data-v-ae96efa5><div class="packs" data-v-ae96efa5></div></div><div class="content-main" data-v-ae96efa5>`);
      _push(ssrRenderComponent(unref(Z1), {
        items: filteredPosts.value,
        loading: loading.value,
        onClickItem: goToPost,
        itemKey: (item) => item.id
      }, null, _parent));
      _push(`</div><div class="side" data-v-ae96efa5>`);
      _push(ssrRenderComponent(Avatar, {
        style: !unref(scrollStore).showAvatarInNavbar || unref(isMobile) ? null : { display: "none" },
        id: "trigger-element"
      }, null, _parent));
      _push(`<div class="side-list" data-v-ae96efa5><h2 class="_before-line" data-v-ae96efa5>Tags</h2><div class="tag-cloud" data-v-ae96efa5><!--[-->`);
      ssrRenderList(tagCounts.value, (count, tag) => {
        _push(`<span style="${ssrRenderStyle({ fontSize: getFontSize(count) })}" class="tag-item" data-v-ae96efa5>${ssrInterpolate("#" + tag)}</span>`);
      });
      _push(`<!--]--></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/PostsView.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PostsView = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ae96efa5"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/FriendsView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FriendsView = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const routes = [
  { path: "/", name: "intro", component: PostsView },
  { path: "/home", name: "home", component: _sfc_main$f },
  { path: "/projects", name: "projects", component: ProjectView },
  { path: "/posts", name: "posts", component: PostsView },
  { path: "/friends", name: "friends", component: FriendsView },
  {
    path: "/post/:slug",
    name: "post",
    component: Post,
    props: true
  }
];
const router = createRouter({
  history: createWebHistory("/"),
  routes
});
const fade = {
  mounted(el, binding) {
    const opts = typeof binding.value === "number" ? { delay: binding.value } : binding.value || {};
    const delay = opts.delay ?? 0;
    const offset = opts.offset ?? "10px";
    const duration = opts.duration ?? 400;
    el.style.opacity = "0";
    el.style.transform = `translateY(${offset})`;
    el.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, delay);
    setTimeout(() => {
      el.style.transform = "";
      el.style.transition = "";
    }, delay + duration);
  }
};
const bounce = {
  mounted(el, binding) {
    const opts = typeof binding.value === "number" ? { delay: binding.value } : binding.value || {};
    const delay = opts.delay ?? 0;
    const duration = opts.duration ?? 500;
    const stiffness = opts.stiffness ?? 1;
    el.style.opacity = "0";
    el.style.transform = `translateY(${40 * stiffness}px) scale(${0.8 + 0.1 * stiffness})`;
    el.style.transition = `opacity ${duration}ms ease, transform ${duration * 0.6}ms cubic-bezier(0.68, -0.6, 0.32, 1.6)`;
    setTimeout(() => {
      el.style.opacity = "1";
      el.style.transform = `translateY(${-8 * stiffness}px) scale(${1.05 + 0.02 * stiffness})`;
      setTimeout(() => {
        el.style.transform = "translateY(0) scale(1)";
      }, duration * 0.6);
    }, delay);
  }
};
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.directive("fade", fade);
app.directive("bounce", bounce);
app.mount("#app");
