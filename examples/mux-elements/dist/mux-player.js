var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });

// ../../packages/mux-player/dist/index.js
var dist_exports = {};
__markAsModule(dist_exports);
(() => {
  var je = Object.defineProperty;
  var Pi = (O) => je(O, "__esModule", { value: true });
  var He = (O, M) => {
    Pi(O);
    for (var x in M)
      je(O, x, { get: M[x], enumerable: true });
  };
  var ye = {};
  He(ye, { MediaUIAttributes: () => G, MediaUIEvents: () => it, ReadyStates: () => Ni, TextTrackKinds: () => Ht, TextTrackModes: () => Nt });
  var it = { MEDIA_PLAY_REQUEST: "mediaplayrequest", MEDIA_PAUSE_REQUEST: "mediapauserequest", MEDIA_MUTE_REQUEST: "mediamuterequest", MEDIA_UNMUTE_REQUEST: "mediaunmuterequest", MEDIA_VOLUME_REQUEST: "mediavolumerequest", MEDIA_SEEK_REQUEST: "mediaseekrequest", MEDIA_AIRPLAY_REQUEST: "mediaairplayrequest", MEDIA_ENTER_FULLSCREEN_REQUEST: "mediaenterfullscreenrequest", MEDIA_EXIT_FULLSCREEN_REQUEST: "mediaexitfullscreenrequest", MEDIA_PREVIEW_REQUEST: "mediapreviewrequest", MEDIA_ENTER_PIP_REQUEST: "mediaenterpiprequest", MEDIA_EXIT_PIP_REQUEST: "mediaexitpiprequest", MEDIA_SHOW_TEXT_TRACKS_REQUEST: "mediashowtexttracksrequest", MEDIA_HIDE_TEXT_TRACKS_REQUEST: "mediahidetexttracksrequest", MEDIA_SHOW_CAPTIONS_REQUEST: "mediashowcaptionsrequest", MEDIA_SHOW_SUBTITLES_REQUEST: "mediashowsubtitlesrequest", MEDIA_DISABLE_CAPTIONS_REQUEST: "mediadisablecaptionsrequest", MEDIA_DISABLE_SUBTITLES_REQUEST: "mediadisablesubtitlesrequest", MEDIA_PLAYBACK_RATE_REQUEST: "mediaplaybackraterequest", REGISTER_MEDIA_STATE_RECEIVER: "registermediastatereceiver", UNREGISTER_MEDIA_STATE_RECEIVER: "unregistermediastatereceiver" }, G = { MEDIA_PAUSED: "media-paused", MEDIA_MUTED: "media-muted", MEDIA_VOLUME_LEVEL: "media-volume-level", MEDIA_VOLUME: "media-volume", MEDIA_IS_PIP: "media-is-pip", MEDIA_CAPTIONS_LIST: "media-captions-list", MEDIA_SUBTITLES_LIST: "media-subtitles-list", MEDIA_CAPTIONS_SHOWING: "media-captions-showing", MEDIA_SUBTITLES_SHOWING: "media-subtitles-showing", MEDIA_IS_FULLSCREEN: "media-is-fullscreen", MEDIA_PLAYBACK_RATE: "media-playback-rate", MEDIA_CURRENT_TIME: "media-current-time", MEDIA_DURATION: "media-duration", MEDIA_PREVIEW_IMAGE: "media-preview-image", MEDIA_PREVIEW_COORDS: "media-preview-coords", MEDIA_CHROME_ATTRIBUTES: "media-chrome-attributes", MEDIA_CONTROLLER: "media-controller", MEDIA_LOADING: "media-loading" }, Ht = { SUBTITLES: "subtitles", CAPTIONS: "captions", DESCRIPTIONS: "descriptions", CHAPTERS: "chapters", METADATA: "metadata" }, Nt = { DISABLED: "disabled", HIDDEN: "hidden", SHOWING: "showing" }, Ni = { HAVE_NOTHING: 0, HAVE_METADATA: 1, HAVE_CURRENT_DATA: 2, HAVE_FUTURE_DATA: 3, HAVE_ENOUGH_DATA: 4 };
  var _t = { AUDIO_PLAYER: () => "audio player", VIDEO_PLAYER: () => "video player", VOLUME: () => "volume", SEEK: () => "seek", CLOSED_CAPTIONS: () => "closed captions", PLAYBACK_RATE: ({ playbackRate: O = 1 } = {}) => `current playback rate ${O}`, PLAYBACK_TIME: () => "playback time", MEDIA_LOADING: () => "media loading" }, gt = { PLAY: () => "play", PAUSE: () => "pause", MUTE: () => "mute", UNMUTE: () => "unmute", AIRPLAY: () => "air play", ENTER_FULLSCREEN: () => "enter fullscreen mode", EXIT_FULLSCREEN: () => "exit fullscreen mode", ENTER_PIP: () => "enter picture in picture mode", EXIT_PIP: () => "exit picture in picture mode", SEEK_FORWARD_N_SECS: ({ seekOffset: O = 30 } = {}) => `seek forward ${O} seconds`, SEEK_BACK_N_SECS: ({ seekOffset: O = 30 } = {}) => `seek back ${O} seconds` }, Fi = { ..._t, ...gt };
  var Ee = {};
  He(Ee, { formatAsTimePhrase: () => Ft, formatTime: () => Ct });
  var Ui = (O) => typeof O == "number" && !Number.isNaN(O) && Number.isFinite(O), Ge = [{ singular: "hour", plural: "hours" }, { singular: "minute", plural: "minutes" }, { singular: "second", plural: "seconds" }], Bi = (O, M) => {
    let x = O === 1 ? Ge[M].singular : Ge[M].plural;
    return `${O} ${x}`;
  }, Ft = (O) => {
    if (!Ui(O))
      return "";
    let M = Math.abs(O), x = M !== O, T = new Date(0, 0, 0, 0, 0, M, 0);
    return `${[T.getHours(), T.getMinutes(), T.getSeconds()].map((y, w) => y && Bi(y, w)).filter((y) => y).join(", ")}${x ? " remaining" : ""}`;
  };
  function Ct(O, M) {
    let x = false;
    O < 0 && (x = true, O = 0 - O), O = O < 0 ? 0 : O;
    let T = Math.floor(O % 60), e = Math.floor(O / 60 % 60), R = Math.floor(O / 3600), m = Math.floor(M / 60 % 60), y = Math.floor(M / 3600);
    return (isNaN(O) || O === 1 / 0) && (R = e = T = "-"), R = R > 0 || y > 0 ? R + ":" : "", e = ((R || m >= 10) && e < 10 ? "0" + e : e) + ":", T = T < 10 ? "0" + T : T, (x ? "-" : "") + R + e + T;
  }
  var Ve = { HTMLElement: function() {
    this.addEventListener = () => {
    }, this.removeEventListener = () => {
    }, this.dispatchEvent = () => {
    };
  }, customElements: { get: function() {
  }, define: function() {
  }, whenDefined: function() {
  } }, CustomEvent: function() {
  } }, ji = { createElement: function() {
    return new Ve.HTMLElement();
  } }, Ke = typeof window == "undefined" || typeof window.customElements == "undefined", W = Ke ? Ve : window, Y = Ke ? ji : window.document;
  function rt(O, M) {
    W.customElements.get(O) || (W.customElements.define(O, M), W[M.name] = M);
  }
  var qe = Y.createElement("template");
  qe.innerHTML = `
<style>
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: auto;
    box-sizing: border-box;
    background-color: var(--media-control-background, rgba(20,20,30, 0.7));

    padding: 10px;

    /* Vertically center any text */
    font-size: 14px;
    font-weight: bold;
    color: #fff;

    transition: background-color 0.15s linear;

    pointer-events: auto;
    cursor: pointer;
    font-family: Arial, sans-serif;
  }

  /*
    Only show outline when keyboard focusing.
    https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo
  */
  :host-context([media-keyboard-control]):host(:focus),
  :host-context([media-keyboard-control]):host(:focus-within) {
    box-shadow: inset 0 0 0 2px rgba(27, 127, 204, 0.9);
  }

  :host(:hover) {
    background-color: var(--media-control-hover-background, rgba(50,50,70, 0.7));
  }

  svg, img, ::slotted(svg), ::slotted(img) {
    width: var(--media-button-icon-width);
    height: var(--media-button-icon-height, 18px);
    transform: var(--media-button-icon-transform);
    transition: var(--media-button-icon-transition);
    fill: var(--media-icon-color, #eee);
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
  }

  ::slotted(div), ::slotted(span) {
    height: 18px;
  }
</style>
`;
  var We = ["Enter", " "], be = class extends W.HTMLElement {
    static get observedAttributes() {
      return [G.MEDIA_CONTROLLER];
    }
    constructor(M = {}) {
      super();
      let x = this.attachShadow({ mode: "open" }), T = qe.content.cloneNode(true);
      this.nativeEl = T;
      let e = M.slotTemplate;
      e || (e = Y.createElement("template"), e.innerHTML = `<slot>${M.defaultContent || ""}</slot>`), this.nativeEl.appendChild(e.content.cloneNode(true)), x.appendChild(T), this.addEventListener("click", (m) => {
        this.handleClick(m);
      });
      let R = (m) => {
        let { key: y } = m;
        if (!We.includes(y)) {
          this.removeEventListener("keyup", R);
          return;
        }
        this.handleClick(m);
      };
      this.addEventListener("keydown", (m) => {
        let { metaKey: y, altKey: w, key: A } = m;
        if (y || w || !We.includes(A)) {
          this.removeEventListener("keyup", R);
          return;
        }
        this.addEventListener("keyup", R);
      });
    }
    attributeChangedCallback(M, x, T) {
      var e, R;
      if (M === G.MEDIA_CONTROLLER) {
        if (x) {
          let m = Y.getElementById(x);
          (e = m == null ? void 0 : m.unassociateElement) == null || e.call(m, this);
        }
        if (T) {
          let m = Y.getElementById(T);
          (R = m == null ? void 0 : m.associateElement) == null || R.call(m, this);
        }
      }
    }
    connectedCallback() {
      var x;
      this.setAttribute("role", "button"), this.setAttribute("tabindex", 0);
      let M = this.getAttribute(G.MEDIA_CONTROLLER);
      if (M) {
        let T = Y.getElementById(M);
        (x = T == null ? void 0 : T.associateElement) == null || x.call(T, this);
      }
    }
    disconnectedCallback() {
      var x;
      if (this.getAttribute(G.MEDIA_CONTROLLER)) {
        let T = Y.getElementById(mediaControllerId);
        (x = T == null ? void 0 : T.unassociateElement) == null || x.call(T, this);
      }
    }
    handleClick() {
    }
  };
  rt("media-chrome-button", be);
  var yt = be;
  var Hi = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18"><title>Mux Player SVG Icons_v3</title><path d="M19.13,0H.87A.87.87,0,0,0,0,.87V14.13A.87.87,0,0,0,.87,15h3.4L6,13H2V2H18V13H14l1.72,2h3.4a.87.87,0,0,0,.87-.87V.87A.87.87,0,0,0,19.13,0ZM10.38,11.44a.5.5,0,0,0-.76,0L4.71,17.17a.5.5,0,0,0,.38.83h9.82a.5.5,0,0,0,.38-.83Z"/></svg>', $e = Y.createElement("template");
  $e.innerHTML = `
  <style>
  </style>

  <slot name="airplay">${Hi}</slot>
`;
  var Ye = class extends yt {
    static get observedAttributes() {
      return [...super.observedAttributes];
    }
    constructor(M = {}) {
      super({ slotTemplate: $e, ...M });
    }
    connectedCallback() {
      this.setAttribute("aria-label", gt.AIRPLAY()), super.connectedCallback();
    }
    handleClick(M) {
      let x = new W.CustomEvent(it.MEDIA_AIRPLAY_REQUEST, { composed: true, bubbles: true });
      this.dispatchEvent(x);
    }
  };
  rt("media-airplay-button", Ye);
  var ze = Y.createElement("template");
  ze.innerHTML = `
  <style>
    :host {
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      background-color: #000;
    }

    :host(:not([audio])) *[part~=layer] {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      pointer-events: none;
      background: none;
    }

    :host(:not([audio])) :is([part~=gestures-layer],[part~=media-layer]) {
      pointer-events: auto;
    }
    
    :host(:not([audio])) *[part~=layer][part~=centered-layer] {
      align-items: center;
      justify-content: center;
    }

    .spacer {
      pointer-events: none;
      background: none;
    }

    /* Position the media element to fill the container */
    ::slotted([slot=media]) {
      width: 100%;
      height: 100%;
    }

    /* Video specific styles */
    :host(:not([audio])) {
      aspect-ratio: var(--media-aspect-ratio, auto 3 / 2);
      width: 720px;
    }

    :host(:not([audio])) .spacer {
      flex-grow: 1;
    }

    @supports not (aspect-ratio: 1 / 1) {
      :host(:not([audio])) {
        height: 480px;
      }
    }

    /* Safari needs this to actually make the element fill the window */
    :host(:-webkit-full-screen) {
      /* Needs to use !important otherwise easy to break */
      width: 100% !important;
      height: 100% !important;
    }

    /* Hide controls when inactive and not paused and not audio */
    ::slotted(:not([slot=media])) {
      opacity: 1;
      transition: opacity 0.25s;
      visibility: visible;
      pointer-events: auto;
    }

    ::slotted(media-control-bar)  {
      align-self: stretch;
    }

    :host([user-inactive]:not([${G.MEDIA_PAUSED}]):not([audio])) ::slotted(:not([slot=media]):not([no-auto-hide])) {
      opacity: 0;
      transition: opacity 1s;
    }
  </style>

  <span part="layer media-layer">
    <slot name="media"></slot>
  </span>
  <span part="layer gesture-layer">
    <slot name="gestures-chrome"></slot>
  </span>
  <span part="layer vertical-layer">
    <slot name="top-chrome"></slot>
    <span class="spacer"><slot name="middle-chrome"></slot></span>
    <!-- default, effectively "bottom-chrome" -->
    <slot></slot>
  </span>
  <span part="layer centered-layer">
    <slot name="centered-chrome"></slot>
  </span>
`;
  var Gi = Object.values(G), _e = class extends W.HTMLElement {
    constructor() {
      super();
      let M = this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(ze.content.cloneNode(true));
      let x = (e, R) => {
        let m = this.media;
        for (let y of e)
          y.type === "childList" && (y.removedNodes.forEach((w) => {
            if (w.slot == "media" && y.target == this) {
              let A = y.previousSibling && y.previousSibling.previousElementSibling;
              if (!A || !m)
                this.mediaUnsetCallback(w);
              else {
                let L = A.slot !== "media";
                for (; (A = A.previousSibling) !== null; )
                  A.slot == "media" && (L = false);
                L && this.mediaUnsetCallback(w);
              }
            }
          }), m && y.addedNodes.forEach((w) => {
            w == m && this.handleMediaUpdated(m).then((A) => this.mediaSetCallback(A));
          }));
      };
      new MutationObserver(x).observe(this, { childList: true, subtree: true });
    }
    static get observedAttributes() {
      return ["autohide"].concat(Gi);
    }
    attributeChangedCallback(M, x, T) {
      M.toLowerCase() == "autohide" && (this.autohide = T);
    }
    get media() {
      let M = this.querySelector(":scope > [slot=media]");
      return (M == null ? void 0 : M.nodeName) == "SLOT" && (M = M.assignedElements({ flatten: true })[0]), M;
    }
    mediaSetCallback(M) {
      this._mediaClickPlayToggle = (x) => {
        let T = M.paused ? it.MEDIA_PLAY_REQUEST : it.MEDIA_PAUSE_REQUEST;
        this.dispatchEvent(new W.CustomEvent(T, { composed: true, bubbles: true }));
      };
    }
    handleMediaUpdated(M) {
      let x = (R) => Promise.resolve(R), T = (R) => (console.error('<media-chrome>: Media element set with slot="media" does not appear to be compatible.', R), Promise.reject(R));
      if (!M)
        return T(M);
      let e = M.nodeName.toLowerCase();
      return e.includes("-") ? W.customElements.whenDefined(e).then(() => x(M)) : x(M);
    }
    mediaUnsetCallback(M) {
    }
    connectedCallback() {
      let x = this.getAttribute("audio") != null ? _t.AUDIO_PLAYER() : _t.VIDEO_PLAYER();
      this.setAttribute("role", "region"), this.setAttribute("aria-label", x), this.media && this.handleMediaUpdated(this.media).then((e) => this.mediaSetCallback(e));
      let T = () => {
        this.removeAttribute("user-inactive"), W.clearTimeout(this.inactiveTimeout), !(this.autohide < 0) && (this.inactiveTimeout = W.setTimeout(() => {
          this.setAttribute("user-inactive", "user-inactive");
        }, this.autohide * 1e3));
      };
      this.addEventListener("keyup", (e) => {
        T();
      }), this.addEventListener("keyup", (e) => {
        this.setAttribute("media-keyboard-control", "media-keyboard-control");
      }), this.addEventListener("mouseup", (e) => {
        this.removeAttribute("media-keyboard-control");
      }), this.addEventListener("mousemove", (e) => {
        e.target !== this && (this.removeAttribute("user-inactive"), W.clearTimeout(this.inactiveTimeout), e.target === this.media && T());
      }), this.addEventListener("mouseout", (e) => {
        this.autohide > -1 && this.setAttribute("user-inactive", "user-inactive");
      });
    }
    set autohide(M) {
      M = Number(M), this._autohide = isNaN(M) ? 0 : M;
    }
    get autohide() {
      return this._autohide === void 0 ? 2 : this._autohide;
    }
  };
  rt("media-container-temp", _e);
  var Qe = _e;
  var Tt = { enter: "requestFullscreen", exit: "exitFullscreen", event: "fullscreenchange", element: "fullscreenElement", error: "fullscreenerror" };
  Y.fullscreenElement === void 0 && (Tt.enter = "webkitRequestFullScreen", Tt.exit = Y.webkitExitFullscreen != null ? "webkitExitFullscreen" : "webkitCancelFullScreen", Tt.event = "webkitfullscreenchange", Tt.element = "webkitFullscreenElement", Tt.error = "webkitfullscreenerror");
  function re(O, M = false) {
    return O.split("_").map(function(x, T) {
      return (T || M ? x[0].toUpperCase() : x[0].toLowerCase()) + x.slice(1).toLowerCase();
    }).join("");
  }
  var ie = (O = "") => O.split(/\s+/), Xe = (O = "") => {
    let [M, x] = O.split(":"), T = x ? decodeURIComponent(x) : void 0;
    return { language: M, label: T };
  }, Vi = (O = "", M = {}) => ie(O).map((x) => {
    let T = Xe(x);
    return { ...M, ...T };
  }), Ki = (O) => Array.isArray(O) ? O.map((M) => typeof M == "string" ? Xe(M) : M) : typeof O == "string" ? Vi(O) : [O], qi = ({ label: O, language: M } = {}) => O ? `${M}:${encodeURIComponent(O)}` : M, wt = (O = []) => Array.prototype.map.call(O, qi).join(" "), Wi = (O, M) => (x) => x[O] === M, Ze = (O) => {
    let M = Object.entries(O).map(([x, T]) => Wi(x, T));
    return (x) => M.every((T) => T(x));
  }, Xt = (O, M = [], x = []) => {
    let T = Ki(x).map(Ze), e = (R) => T.some((m) => m(R));
    Array.from(M).filter(e).forEach((R) => {
      R.mode = O;
    });
  }, Vt = (O, M = () => true) => {
    if (!(O == null ? void 0 : O.textTracks))
      return [];
    let x = typeof M == "function" ? M : Ze(M);
    return Array.from(O.textTracks).filter(x);
  };
  var { MEDIA_PLAY_REQUEST: $i, MEDIA_PAUSE_REQUEST: Yi, MEDIA_MUTE_REQUEST: zi, MEDIA_UNMUTE_REQUEST: Qi, MEDIA_VOLUME_REQUEST: Xi, MEDIA_ENTER_FULLSCREEN_REQUEST: Zi, MEDIA_EXIT_FULLSCREEN_REQUEST: Ji, MEDIA_SEEK_REQUEST: tn, MEDIA_PREVIEW_REQUEST: en, MEDIA_ENTER_PIP_REQUEST: rn, MEDIA_EXIT_PIP_REQUEST: nn, MEDIA_PLAYBACK_RATE_REQUEST: an } = it, Te = class extends Qe {
    constructor() {
      super();
      this.mediaStateReceivers = [], this.associatedElementSubscriptions = /* @__PURE__ */ new Map(), this.associatedElements = [], this.associateElement(this);
      let M = { MEDIA_PLAY_REQUEST: () => this.media.play(), MEDIA_PAUSE_REQUEST: () => this.media.pause(), MEDIA_MUTE_REQUEST: () => this.media.muted = true, MEDIA_UNMUTE_REQUEST: () => {
        let x = this.media;
        x.muted = false, x.volume === 0 && (x.volume = 0.25);
      }, MEDIA_VOLUME_REQUEST: (x) => {
        let T = this.media, e = x.detail;
        T.volume = e, e > 0 && T.muted && (T.muted = false);
        try {
          W.localStorage.setItem("media-chrome-pref-volume", e.toString());
        } catch {
        }
      }, MEDIA_ENTER_FULLSCREEN_REQUEST: () => {
        let x = this.getRootNode(), T = this.media;
        x.pictureInPictureElement && x.exitPictureInPicture(), super[Tt.enter] ? super[Tt.enter]() : T.webkitEnterFullscreen ? T.webkitEnterFullscreen() : T.requestFullscreen ? T.requestFullscreen() : console.warn("MediaChrome: Fullscreen not supported");
      }, MEDIA_EXIT_FULLSCREEN_REQUEST: () => {
        Y[Tt.exit]();
      }, MEDIA_ENTER_PIP_REQUEST: () => {
        let x = this.getRootNode(), T = this.media;
        !x.pictureInPictureEnabled || (x[Tt.element] && x[Tt.exit](), T.requestPictureInPicture());
      }, MEDIA_EXIT_PIP_REQUEST: () => {
        let x = this.getRootNode();
        x.exitPictureInPicture && x.exitPictureInPicture();
      }, MEDIA_SEEK_REQUEST: (x) => {
        let T = this.media, e = x.detail;
        (T.readyState > 0 || T.readyState === void 0) && (T.currentTime = e);
      }, MEDIA_PLAYBACK_RATE_REQUEST: (x) => {
        this.media.playbackRate = x.detail;
      }, MEDIA_PREVIEW_REQUEST: (x) => {
        let T = this.media;
        if (!T)
          return;
        let [e] = Vt(T, { kind: Ht.METADATA, label: "thumbnails" });
        if (!(e && e.cues))
          return;
        let R = x.detail, m = Array.prototype.find.call(e.cues, (A) => A.startTime >= R);
        if (!m)
          return;
        let y = new URL(m.text), w = new URLSearchParams(y.hash).get("#xywh");
        this.propagateMediaState(G.MEDIA_PREVIEW_IMAGE, y.href), this.propagateMediaState(G.MEDIA_PREVIEW_COORDS, w.split(",").join(" "));
      }, MEDIA_SHOW_CAPTIONS_REQUEST: (x) => {
        let T = this.captionTracks, { detail: e = [] } = x;
        Xt(Nt.SHOWING, T, e);
      }, MEDIA_DISABLE_CAPTIONS_REQUEST: (x) => {
        let T = this.captionTracks, { detail: e = [] } = x;
        Xt(Nt.DISABLED, T, e);
      }, MEDIA_SHOW_SUBTITLES_REQUEST: (x) => {
        let T = this.subtitleTracks, { detail: e = [] } = x;
        Xt(Nt.SHOWING, T, e);
      }, MEDIA_DISABLE_SUBTITLES_REQUEST: (x) => {
        let T = this.subtitleTracks, { detail: e = [] } = x;
        Xt(Nt.DISABLED, T, e);
      }, MEDIA_AIRPLAY_REQUEST: (x) => {
        let { media: T } = this;
        if (!!T) {
          if (!(T.webkitShowPlaybackTargetPicker && W.WebKitPlaybackTargetAvailabilityEvent)) {
            console.warn("received a request to select AirPlay but AirPlay is not supported in this environment");
            return;
          }
          T.webkitShowPlaybackTargetPicker();
        }
      } };
      Object.keys(M).forEach((x) => {
        let T = `_handle${re(x, true)}`;
        this[T] = (e) => {
          if (e.stopPropagation(), !this.media) {
            console.warn("MediaController: No media available.");
            return;
          }
          M[x](e, this.media);
        }, this.addEventListener(it[x], this[T]);
      }), this._mediaStatePropagators = { "play,pause": () => {
        this.propagateMediaState(G.MEDIA_PAUSED, this.media.paused);
      }, volumechange: () => {
        let { muted: x, volume: T } = this.media, e = "high";
        T == 0 || x ? e = "off" : T < 0.5 ? e = "low" : T < 0.75 && (e = "medium"), this.propagateMediaState(G.MEDIA_MUTED, x), this.propagateMediaState(G.MEDIA_VOLUME, T), this.propagateMediaState(G.MEDIA_VOLUME_LEVEL, e);
      }, [Tt.event]: () => {
        let x = this.getRootNode()[Tt.element];
        this.propagateMediaState(G.MEDIA_IS_FULLSCREEN, x === this);
      }, "enterpictureinpicture,leavepictureinpicture": (x) => {
        let T;
        x ? T = x.type == "enterpictureinpicture" : T = this.media == this.getRootNode().pictureInPictureElement, this.propagateMediaState(G.MEDIA_IS_PIP, T);
      }, "timeupdate,loadedmetadata": () => {
        this.propagateMediaState(G.MEDIA_CURRENT_TIME, this.media.currentTime);
      }, "durationchange,loadedmetadata": () => {
        this.propagateMediaState(G.MEDIA_DURATION, this.media.duration);
      }, ratechange: () => {
        this.propagateMediaState(G.MEDIA_PLAYBACK_RATE, this.media.playbackRate);
      }, "waiting,playing": () => {
        var T;
        let x = ((T = this.media) == null ? void 0 : T.readyState) < 3;
        this.propagateMediaState(G.MEDIA_LOADING, x);
      } }, this._textTrackMediaStatePropagators = { "addtrack,removetrack": () => {
        this.propagateMediaState(G.MEDIA_CAPTIONS_LIST, wt(this.captionTracks) || void 0), this.propagateMediaState(G.MEDIA_SUBTITLES_LIST, wt(this.subtitleTracks) || void 0), this.propagateMediaState(G.MEDIA_CAPTIONS_SHOWING, wt(this.showingCaptionTracks) || void 0), this.propagateMediaState(G.MEDIA_SUBTITLES_SHOWING, wt(this.showingSubtitleTracks) || void 0);
      }, change: () => {
        this.propagateMediaState(G.MEDIA_CAPTIONS_SHOWING, wt(this.showingCaptionTracks) || void 0), this.propagateMediaState(G.MEDIA_SUBTITLES_SHOWING, wt(this.showingSubtitleTracks) || void 0);
      } };
    }
    mediaSetCallback(M) {
      super.mediaSetCallback(M), Object.keys(this._mediaStatePropagators).forEach((x) => {
        let T = x.split(","), e = this._mediaStatePropagators[x];
        T.forEach((R) => {
          (R == Tt.event ? this.getRootNode() : M).addEventListener(R, e);
        }), e();
      }), Object.entries(this._textTrackMediaStatePropagators).forEach(([x, T]) => {
        x.split(",").forEach((R) => {
          M.textTracks && M.textTracks.addEventListener(R, T);
        }), T();
      });
      try {
        let x = W.localStorage.getItem("media-chrome-pref-volume");
        x !== null && (M.volume = x);
      } catch (x) {
        console.debug("Error getting volume pref", x);
      }
    }
    mediaUnsetCallback(M) {
      super.mediaUnsetCallback(M), Object.keys(this._mediaStatePropagators).forEach((x) => {
        let T = x.split(","), e = this._mediaStatePropagators[x];
        T.forEach((R) => {
          (R == Tt.event ? this.getRootNode() : M).removeEventListener(R, e);
        });
      }), Object.entries(this._textTrackMediaStatePropagators).forEach(([x, T]) => {
        x.split(",").forEach((R) => {
          M.textTracks && M.textTracks.removeEventListener(R, T);
        }), T();
      }), this.propagateMediaState(G.MEDIA_PAUSED, true);
    }
    propagateMediaState(M, x) {
      It(this.mediaStateReceivers, M, x);
    }
    associateElement(M) {
      if (!M)
        return;
      let { associatedElementSubscriptions: x } = this;
      if (x.has(M))
        return;
      let T = this.registerMediaStateReceiver.bind(this), e = this.unregisterMediaStateReceiver.bind(this), R = un(M, T, e);
      Object.keys(it).forEach((m) => {
        M.addEventListener(it[m], this[`_handle${re(m, true)}`]);
      }), x.set(M, R);
    }
    unassociateElement(M) {
      if (!M)
        return;
      let { associatedElementSubscriptions: x } = this;
      if (!x.has(M))
        return;
      x.get(M)(), x.delete(M), Object.keys(it).forEach((e) => {
        M.removeEventListener(it[e], this[`_handle${re(e, true)}`]);
      });
    }
    registerMediaStateReceiver(M) {
      if (!M)
        return;
      let x = this.mediaStateReceivers;
      x.indexOf(M) > -1 || (x.push(M), this.media && (It([M], G.MEDIA_CAPTIONS_LIST, wt(this.captionTracks) || void 0), It([M], G.MEDIA_SUBTITLES_LIST, wt(this.subtitleTracks) || void 0), It([M], G.MEDIA_CAPTIONS_SHOWING, wt(this.showingCaptionTracks) || void 0), It([M], G.MEDIA_SUBTITLES_SHOWING, wt(this.showingSubtitleTracks) || void 0), It([M], G.MEDIA_PAUSED, this.media.paused), It([M], G.MEDIA_MUTED, this.media.muted), It([M], G.MEDIA_VOLUME, this.media.volume), It([M], G.MEDIA_CURRENT_TIME, this.media.currentTime), It([M], G.MEDIA_DURATION, this.media.duration), It([M], G.MEDIA_PLAYBACK_RATE, this.media.playbackRate)));
    }
    unregisterMediaStateReceiver(M) {
      let x = this.mediaStateReceivers, T = x.indexOf(M);
      T < 0 || x.splice(T, 1);
    }
    play() {
      this.dispatchEvent(new W.CustomEvent($i));
    }
    pause() {
      this.dispatchEvent(new W.CustomEvent(Yi));
    }
    get muted() {
      return !!(this.media && this.media.muted);
    }
    set muted(M) {
      let x = M ? zi : Qi;
      this.dispatchEvent(new W.CustomEvent(x));
    }
    get volume() {
      let M = this.media;
      return M ? M.volume : 1;
    }
    set volume(M) {
      this.dispatchEvent(new W.CustomEvent(Xi, { detail: M }));
    }
    requestFullscreen() {
      this.dispatchEvent(new W.CustomEvent(Zi));
    }
    exitFullscreen() {
      this.dispatchEvent(new W.CustomEvent(Ji));
    }
    get currentTime() {
      let M = this.media;
      return M ? M.currentTime : 0;
    }
    set currentTime(M) {
      this.dispatchEvent(new W.CustomEvent(tn, { detail: M }));
    }
    get playbackRate() {
      let M = this.media;
      return M ? M.playbackRate : 1;
    }
    set playbackRate(M) {
      this.dispatchEvent(new W.CustomEvent(an, { detail: M }));
    }
    get subtitleTracks() {
      return Vt(this.media, { kind: Ht.SUBTITLES });
    }
    get captionTracks() {
      return Vt(this.media, { kind: Ht.CAPTIONS });
    }
    get showingSubtitleTracks() {
      return Vt(this.media, { kind: Ht.SUBTITLES, mode: Nt.SHOWING });
    }
    get showingCaptionTracks() {
      return Vt(this.media, { kind: Ht.CAPTIONS, mode: Nt.SHOWING });
    }
    requestPictureInPicture() {
      this.dispatchEvent(new W.CustomEvent(rn));
    }
    exitPictureInPicture() {
      this.dispatchEvent(new W.CustomEvent(nn));
    }
    requestPreview(M) {
      this.dispatchEvent(new W.CustomEvent(en, { detail: M }));
    }
  }, sn = Object.values(G), Je = (O) => {
    var T, e, R;
    let { constructor: { observedAttributes: M } } = O, x = (R = (e = (T = O == null ? void 0 : O.getAttribute) == null ? void 0 : T.call(O, G.MEDIA_CHROME_ATTRIBUTES)) == null ? void 0 : e.split) == null ? void 0 : R.call(e, /\s+/);
    return Array.isArray(M || x) ? (M || x).filter((m) => sn.includes(m)) : [];
  }, Ae = (O) => !!Je(O).length, on = (O, M, x) => x == null ? O.removeAttribute(M) : typeof x == "boolean" ? x ? O.setAttribute(M, "") : O.removeAttribute(M) : Number.isNaN(x) ? O.removeAttribute(M) : O.setAttribute(M, x), ln = (O) => {
    var M;
    return !!((M = O.closest) == null ? void 0 : M.call(O, '*[slot="media"]'));
  }, Zt = (O, M) => {
    if (ln(O))
      return;
    let x = (e, R) => {
      var A, L;
      Ae(e) && R(e);
      let { children: m = [] } = e != null ? e : {}, y = (L = (A = e == null ? void 0 : e.shadowRoot) == null ? void 0 : A.children) != null ? L : [];
      [...m, ...y].forEach((b) => Zt(b, R));
    }, T = O == null ? void 0 : O.nodeName.toLowerCase();
    if (T.includes("-") && !Ae(O)) {
      W.customElements.whenDefined(T).then(() => {
        x(O, M);
      });
      return;
    }
    x(O, M);
  }, It = (O, M, x) => {
    O.forEach((T) => {
      !Je(T).includes(M) || on(T, M, x);
    });
  }, un = (O, M, x) => {
    Zt(O, M);
    let T = (w) => {
      var L;
      let A = (L = w == null ? void 0 : w.composedPath()[0]) != null ? L : w.target;
      M(A);
    }, e = (w) => {
      var L;
      let A = (L = w == null ? void 0 : w.composedPath()[0]) != null ? L : w.target;
      x(A);
    };
    O.addEventListener(it.REGISTER_MEDIA_STATE_RECEIVER, T), O.addEventListener(it.UNREGISTER_MEDIA_STATE_RECEIVER, e);
    let R = (w, A) => {
      w.forEach((L) => {
        let { addedNodes: b = [], removedNodes: u = [], type: g, target: D, attributeName: E } = L;
        g === "childList" ? (Array.prototype.forEach.call(b, (S) => Zt(S, M)), Array.prototype.forEach.call(u, (S) => Zt(S, x))) : g === "attributes" && E === G.MEDIA_CHROME_ATTRIBUTES && (Ae(D) ? M(D) : x(D));
      });
    }, m = new MutationObserver(R);
    return m.observe(O, { childList: true, attributes: true, subtree: true }), () => {
      Zt(O, x), m.disconnect(), O.removeEventListener(it.REGISTER_MEDIA_STATE_RECEIVER, T), O.removeEventListener(it.UNREGISTER_MEDIA_STATE_RECEIVER, e);
    };
  };
  rt("media-controller", Te);
  var Se = Te;
  var tr = Y.createElement("template"), er = `
  height: var(--thumb-height);
  width: var(--media-range-thumb-width, 10px);
  border: var(--media-range-thumb-border, none);
  border-radius: var(--media-range-thumb-border-radius, 10px);
  background: var(--media-range-thumb-background, #fff);
  box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
  cursor: pointer;
  transition: var(--media-range-thumb-transition, none);
  transform: var(--media-range-thumb-transform, none);
  opacity: var(--media-range-thumb-opacity, 1);
`, Le = `
  width: var(--media-range-track-width, 100%);
  min-width: 40px;
  height: var(--track-height);
  border: var(--media-range-track-border, none);
  border-radius: var(--media-range-track-border-radius, 0);
  background: var(--media-range-track-background-internal, var(--media-range-track-background, #eee));

  box-shadow: var(--media-range-track-box-shadow, none);
  transition: var(--media-range-track-transition, none);
  cursor: pointer;
`;
  tr.innerHTML = `
  <style>
    :host {
      --thumb-height: var(--media-range-thumb-height, 10px);
      --track-height: var(--media-range-track-height, 4px);

      position: relative;
      display: inline-block;
      vertical-align: middle;
      box-sizing: border-box;
      background-color: var(--media-control-background, rgba(20,20,30, 0.7));
      transition: background-color 0.15s linear;
      height: 44px;
      width: 100px;
      padding: 0 10px;

      pointer-events: auto;
    }

    /*
      Only show outline when keyboard focusing.
      https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo
    */
    :host-context([media-keyboard-control]):host(:focus),
    :host-context([media-keyboard-control]):host(:focus-within) {
      box-shadow: inset 0 0 0 2px rgba(27, 127, 204, 0.9);
    }

    :host(:hover) {
      background-color: var(--media-control-hover-background, rgba(50,50,60, 0.7));
    }

    input[type=range] {
      /* Reset */
      -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
      background: transparent; /* Otherwise white in Chrome */

      /* Fill host with the range */
      min-height: 100%;
      width: var(--media-range-track-width, 100%); /* Specific width is required for Firefox. */

      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    /* Special styling for WebKit/Blink */
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      ${er}
      /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
      margin-top: calc(calc(0px - var(--thumb-height) + var(--track-height)) / 2);
    }
    input[type=range]::-moz-range-thumb { ${er} }

    input[type=range]::-webkit-slider-runnable-track { ${Le} }
    input[type=range]::-moz-range-track { ${Le} }
    input[type=range]::-ms-track {
      /* Reset */
      width: 100%;
      cursor: pointer;
      /* Hides the slider so custom styles can be added */
      background: transparent;
      border-color: transparent;
      color: transparent;

      ${Le}
    }

    /* Eventually want to move towards different styles for focus-visible
       https://github.com/WICG/focus-visible/blob/master/src/focus-visible.js
       Youtube appears to do this by de-focusing a button after a button click */
    input[type=range]:focus {
      outline: 0;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
      outline: 0;
    }

    input[type=range]:disabled::-webkit-slider-thumb {
      background-color: #777;
    }

    input[type=range]:disabled::-webkit-slider-runnable-track {
      background-color: #777;
    }

  </style>
  <input id="range" type="range" min="0" max="1000" step="1" value="0">
`;
  var De = class extends W.HTMLElement {
    static get observedAttributes() {
      return [G.MEDIA_CONTROLLER];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" }), this.shadowRoot.appendChild(tr.content.cloneNode(true)), this.range = this.shadowRoot.querySelector("#range"), this.range.addEventListener("input", this.updateBar.bind(this));
    }
    attributeChangedCallback(M, x, T) {
      var e, R;
      if (M === G.MEDIA_CONTROLLER) {
        if (x) {
          let m = Y.getElementById(x);
          (e = m == null ? void 0 : m.unassociateElement) == null || e.call(m, this);
        }
        if (T) {
          let m = Y.getElementById(T);
          (R = m == null ? void 0 : m.associateElement) == null || R.call(m, this);
        }
      }
    }
    connectedCallback() {
      var x;
      let M = this.getAttribute(G.MEDIA_CONTROLLER);
      if (M) {
        let T = Y.getElementById(M);
        (x = T == null ? void 0 : T.associateElement) == null || x.call(T, this);
      }
      this.updateBar();
    }
    disconnectedCallback() {
      var x;
      if (this.getAttribute(G.MEDIA_CONTROLLER)) {
        let T = Y.getElementById(mediaControllerId);
        (x = T == null ? void 0 : T.unassociateElement) == null || x.call(T, this);
      }
    }
    updateBar() {
      let M = this.getBarColors(), x = "linear-gradient(to right, ", T = 0;
      M.forEach((e) => {
        e[1] < T || (x = x + `${e[0]} ${T}%, ${e[0]} ${e[1]}%,`, T = e[1]);
      }), x = x.slice(0, x.length - 1) + ")", this.style.setProperty("--media-range-track-background-internal", x);
    }
    getBarColors() {
      let M = this.range, x = M.value / M.max * 100;
      return [["var(--media-range-bar-color, #fff)", x], ["var(--media-range-track-background, #333)", 100]];
    }
  };
  rt("media-chrome-range", De);
  var Jt = De;
  var rr = Y.createElement("template");
  rr.innerHTML = `
  <style>
    :host {
      /* Need position to display above video for some reason */
      box-sizing: border-box;
      display: inline-flex;

      color: var(--media-icon-color, #eee);
    }

    media-time-range,
    ::slotted(media-time-range),
    ::slotted(media-progress-range),
    ::slotted(media-clip-selector) {
      flex-grow: 1;
    }
  </style>

  <slot></slot>
`;
  var ir = class extends W.HTMLElement {
    static get observedAttributes() {
      return [G.MEDIA_CONTROLLER];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" }), this.shadowRoot.appendChild(rr.content.cloneNode(true));
    }
    attributeChangedCallback(M, x, T) {
      var e, R;
      if (M === G.MEDIA_CONTROLLER) {
        if (x) {
          let m = Y.getElementById(x);
          (e = m == null ? void 0 : m.unassociateElement) == null || e.call(m, this);
        }
        if (T) {
          let m = Y.getElementById(T);
          (R = m == null ? void 0 : m.associateElement) == null || R.call(m, this);
        }
      }
    }
    connectedCallback() {
      var x;
      let M = this.getAttribute(G.MEDIA_CONTROLLER);
      if (M) {
        let T = Y.getElementById(M);
        (x = T == null ? void 0 : T.associateElement) == null || x.call(T, this);
      }
    }
    disconnectedCallback() {
      var x;
      if (this.getAttribute(G.MEDIA_CONTROLLER)) {
        let T = Y.getElementById(mediaControllerId);
        (x = T == null ? void 0 : T.unassociateElement) == null || x.call(T, this);
      }
    }
  };
  rt("media-control-bar", ir);
  var nr = Y.createElement("template");
  nr.innerHTML = `
  <style>
    :host {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      background-color: var(--media-control-background, rgba(20,20,30, 0.7));
  
      padding: 10px;

      font-size: 14px;
      line-height: 18px;
      font-family: Arial, sans-serif;
      text-align: center;
      color: #ffffff;
      pointer-events: auto;
    }

    #container {
      /* NOTE: We don't currently have more generic sizing vars */
      height: var(--media-text-content-height, auto);
    }
  </style>
  <span id="container">
  <slot></slot>
  </span>
`;
  var ke = class extends W.HTMLElement {
    static get observedAttributes() {
      return [G.MEDIA_CONTROLLER];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" }), this.shadowRoot.appendChild(nr.content.cloneNode(true)), this.container = this.shadowRoot.querySelector("#container");
    }
    attributeChangedCallback(M, x, T) {
      var e, R;
      if (M === G.MEDIA_CONTROLLER) {
        if (x) {
          let m = Y.getElementById(x);
          (e = m == null ? void 0 : m.unassociateElement) == null || e.call(m, this);
        }
        if (T) {
          let m = Y.getElementById(T);
          (R = m == null ? void 0 : m.associateElement) == null || R.call(m, this);
        }
      }
    }
    connectedCallback() {
      var x;
      let M = this.getAttribute(G.MEDIA_CONTROLLER);
      if (M) {
        let T = Y.getElementById(M);
        (x = T == null ? void 0 : T.associateElement) == null || x.call(T, this);
      }
    }
    disconnectedCallback() {
      var x;
      if (this.getAttribute(G.MEDIA_CONTROLLER)) {
        let T = Y.getElementById(mediaControllerId);
        (x = T == null ? void 0 : T.unassociateElement) == null || x.call(T, this);
      }
    }
  };
  rt("media-text-display", ke);
  var Kt = ke;
  var ar = class extends Kt {
    static get observedAttributes() {
      return [...super.observedAttributes, G.MEDIA_CURRENT_TIME];
    }
    attributeChangedCallback(M, x, T) {
      M === G.MEDIA_CURRENT_TIME && (this.container.innerHTML = Ct(T)), super.attributeChangedCallback(M, x, T);
    }
  };
  rt("media-current-time-display", ar);
  var sr = class extends Kt {
    static get observedAttributes() {
      return [...super.observedAttributes, G.MEDIA_DURATION];
    }
    attributeChangedCallback(M, x, T) {
      M === G.MEDIA_DURATION && (this.container.innerHTML = Ct(T)), super.attributeChangedCallback(M, x, T);
    }
  };
  rt("media-duration-display", sr);
  var dn = " / ", cn = (O, { timesSep: M = dn } = {}) => {
    let x = O.getAttribute("remaining") != null, T = O.getAttribute("show-duration") != null, e = +O.getAttribute(G.MEDIA_CURRENT_TIME), R = +O.getAttribute(G.MEDIA_DURATION), m = x ? Ct(0 - (R - e)) : Ct(e);
    return T ? `${m}${M}${Ct(R)}` : m;
  }, hn = "video not loaded, unknown time.", fn = (O) => {
    if (!(O.hasAttribute(G.MEDIA_CURRENT_TIME) && O.hasAttribute(G.MEDIA_DURATION))) {
      O.setAttribute("aria-valuetext", hn);
      return;
    }
    let M = O.getAttribute("remaining") != null, x = O.getAttribute("show-duration") != null, T = +O.getAttribute(G.MEDIA_CURRENT_TIME), e = +O.getAttribute(G.MEDIA_DURATION), R = M ? Ft(0 - (e - T)) : Ft(T);
    if (!x) {
      O.setAttribute("aria-valuetext", R);
      return;
    }
    let m = Ft(e), y = `${R} of ${m}`;
    O.setAttribute("aria-valuetext", y);
  }, or = class extends Kt {
    static get observedAttributes() {
      return [...super.observedAttributes, G.MEDIA_CURRENT_TIME, G.MEDIA_DURATION, "remaining", "show-duration"];
    }
    connectedCallback() {
      this.setAttribute("role", "progressbar"), this.setAttribute("aria-label", _t.PLAYBACK_TIME()), this.setAttribute("tabindex", 0), super.connectedCallback();
    }
    attributeChangedCallback(M, x, T) {
      if ([G.MEDIA_CURRENT_TIME, G.MEDIA_DURATION, "remaining", "show-duration"].includes(M)) {
        let e = cn(this);
        fn(this), this.container.innerHTML = e;
      }
      super.attributeChangedCallback(M, x, T);
    }
  };
  rt("media-time-display", or);
  var mn = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18"><title>Mux Player SVG Icons_v3</title><path d="M19.83,2.68a2.58,2.58,0,0,0-2.3-2.5C13.91-.06,6.09-.06,2.47.18a2.58,2.58,0,0,0-2.3,2.5,115.86,115.86,0,0,0,0,12.64,2.58,2.58,0,0,0,2.3,2.5c3.62.24,11.44.24,15.06,0a2.58,2.58,0,0,0,2.3-2.5A115.86,115.86,0,0,0,19.83,2.68ZM8.44,12.13a3.07,3.07,0,0,1-1.91.57,3.06,3.06,0,0,1-2.34-1,3.75,3.75,0,0,1-.92-2.67,3.92,3.92,0,0,1,.92-2.77,3.18,3.18,0,0,1,2.43-1,2.94,2.94,0,0,1,2.13.78,2.73,2.73,0,0,1,.74,1.31l-1.43.35A1.49,1.49,0,0,0,6.55,6.53a1.61,1.61,0,0,0-1.29.58A2.79,2.79,0,0,0,4.76,9a3,3,0,0,0,.49,1.93,1.61,1.61,0,0,0,1.27.58,1.48,1.48,0,0,0,1-.37A2.1,2.1,0,0,0,8.11,10l1.4.44A3.23,3.23,0,0,1,8.44,12.13Zm7.22,0a3.07,3.07,0,0,1-1.91.57,3.06,3.06,0,0,1-2.34-1,3.75,3.75,0,0,1-.92-2.67,3.88,3.88,0,0,1,.93-2.77,3.14,3.14,0,0,1,2.42-1A3,3,0,0,1,16,6.08a2.8,2.8,0,0,1,.73,1.31l-1.43.35a1.49,1.49,0,0,0-1.51-1.21,1.61,1.61,0,0,0-1.29.58A2.79,2.79,0,0,0,12,9a3,3,0,0,0,.49,1.93,1.61,1.61,0,0,0,1.27.58,1.44,1.44,0,0,0,1-.37,2.1,2.1,0,0,0,.6-1.15l1.4.44A3.17,3.17,0,0,1,15.66,12.13Z"/></svg>', pn = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18"><title>Mux Player SVG Icons_v3</title><path d="M14.73,11.09a1.4,1.4,0,0,1-1,.37,1.58,1.58,0,0,1-1.27-.58A3,3,0,0,1,12,9a2.8,2.8,0,0,1,.5-1.85,1.63,1.63,0,0,1,1.29-.57,1.47,1.47,0,0,1,1.51,1.2l1.43-.34A2.89,2.89,0,0,0,16,6.07a3,3,0,0,0-2.14-.78,3.14,3.14,0,0,0-2.42,1,3.91,3.91,0,0,0-.93,2.78,3.74,3.74,0,0,0,.92,2.66,3.07,3.07,0,0,0,2.34,1,3.07,3.07,0,0,0,1.91-.57,3.17,3.17,0,0,0,1.07-1.74l-1.4-.45A2.06,2.06,0,0,1,14.73,11.09Zm-7.22,0a1.43,1.43,0,0,1-1,.37,1.58,1.58,0,0,1-1.27-.58A3,3,0,0,1,4.76,9a2.8,2.8,0,0,1,.5-1.85,1.63,1.63,0,0,1,1.29-.57,1.47,1.47,0,0,1,1.51,1.2l1.43-.34a2.81,2.81,0,0,0-.74-1.32,2.94,2.94,0,0,0-2.13-.78,3.18,3.18,0,0,0-2.43,1,4,4,0,0,0-.92,2.78,3.74,3.74,0,0,0,.92,2.66,3.07,3.07,0,0,0,2.34,1,3.07,3.07,0,0,0,1.91-.57,3.23,3.23,0,0,0,1.07-1.74l-1.4-.45A2.06,2.06,0,0,1,7.51,11.09ZM19.83,2.68A2.59,2.59,0,0,0,17.53.17C15.72.05,12.86,0,10,0S4.28.05,2.47.17A2.59,2.59,0,0,0,.17,2.68a115.68,115.68,0,0,0,0,12.63,2.57,2.57,0,0,0,2.3,2.5c1.81.13,4.67.19,7.53.19s5.72-.06,7.53-.19a2.57,2.57,0,0,0,2.3-2.5A115.68,115.68,0,0,0,19.83,2.68ZM18.34,15.21a1.11,1.11,0,0,1-.91,1.11c-1.67.11-4.45.18-7.43.18s-5.76-.07-7.43-.18a1.11,1.11,0,0,1-.91-1.11,122.7,122.7,0,0,1,0-12.43,1.11,1.11,0,0,1,.91-1.11C4.24,1.56,7,1.49,10,1.49s5.76.07,7.43.18a1.11,1.11,0,0,1,.91,1.11A122.7,122.7,0,0,1,18.34,15.21Z"/></svg>', lr = Y.createElement("template");
  lr.innerHTML = `
  <style>
  :host([aria-checked="true"]) slot:not([name=on]) > *, 
  :host([aria-checked="true"]) ::slotted(:not([slot=on])) {
    display: none;
  }

  /* Double negative, but safer if display doesn't equal 'block' */
  :host(:not([aria-checked="true"])) slot:not([name=off]) > *, 
  :host(:not([aria-checked="true"])) ::slotted(:not([slot=off])) {
    display: none;
  }
  </style>

  <slot name="on">${mn}</slot>
  <slot name="off">${pn}</slot>
`;
  var ur = (O) => {
    O.setAttribute("aria-checked", dr(O));
  }, dr = (O) => {
    let M = !!O.getAttribute(G.MEDIA_CAPTIONS_SHOWING), x = !O.hasAttribute("no-subtitles-fallback") && !!O.getAttribute(G.MEDIA_SUBTITLES_SHOWING);
    return M || x;
  }, cr = class extends yt {
    static get observedAttributes() {
      return [...super.observedAttributes, "no-subtitles-fallback", G.MEDIA_CAPTIONS_LIST, G.MEDIA_CAPTIONS_SHOWING, G.MEDIA_SUBTITLES_LIST, G.MEDIA_SUBTITLES_SHOWING];
    }
    constructor(M = {}) {
      super({ slotTemplate: lr, ...M });
    }
    connectedCallback() {
      super.connectedCallback(), this.setAttribute("role", "switch"), this.setAttribute("aria-label", _t.CLOSED_CAPTIONS()), ur(this);
    }
    attributeChangedCallback(M, x, T) {
      [G.MEDIA_CAPTIONS_SHOWING, G.MEDIA_SUBTITLES_SHOWING].includes(M) && ur(this), super.attributeChangedCallback(M, x, T);
    }
    handleClick(M) {
      var T, e, R, m;
      if (dr(this)) {
        let y = this.getAttribute(G.MEDIA_CAPTIONS_SHOWING);
        if (y) {
          let A = new W.CustomEvent(it.MEDIA_DISABLE_CAPTIONS_REQUEST, { composed: true, bubbles: true, detail: y });
          this.dispatchEvent(A);
        }
        let w = this.getAttribute(G.MEDIA_SUBTITLES_SHOWING);
        if (w && !this.hasAttribute("no-subtitles-fallback")) {
          let A = new W.CustomEvent(it.MEDIA_DISABLE_SUBTITLES_REQUEST, { composed: true, bubbles: true, detail: w });
          this.dispatchEvent(A);
        }
      } else {
        let [y] = (e = ie((T = this.getAttribute(G.MEDIA_CAPTIONS_LIST)) != null ? T : "")) != null ? e : [];
        if (y) {
          let w = new W.CustomEvent(it.MEDIA_SHOW_CAPTIONS_REQUEST, { composed: true, bubbles: true, detail: y });
          this.dispatchEvent(w);
        } else if (this.hasAttribute("no-subtitles-fallback"))
          console.error("Attempting to enable closed captions but none are available! Please verify your media content if this is unexpected.");
        else {
          let [w] = (m = ie((R = this.getAttribute(G.MEDIA_SUBTITLES_LIST)) != null ? R : "")) != null ? m : [];
          if (w) {
            let A = new W.CustomEvent(it.MEDIA_SHOW_SUBTITLES_REQUEST, { composed: true, bubbles: true, detail: w });
            this.dispatchEvent(A);
          }
        }
      }
    }
  };
  rt("media-captions-button", cr);
  var vn = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 18"><defs><style>.cls-1{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><title>Mux Player SVG Icons_v3</title><text class="cls-1" transform="translate(5.9 17.6)">30</text><path d="M7,3V0l5.61,4L7,7.94V5A5.54,5.54,0,0,0,5.1,15.48V17.6A7.5,7.5,0,0,1,7,3Z"/></svg>', hr = Y.createElement("template");
  hr.innerHTML = `  
  <slot name="forward">${vn}</slot>
`;
  var gn = 0, fr = 30, yn = (O) => {
    let M = Math.abs(fr), x = gt.SEEK_FORWARD_N_SECS({ seekOffset: M });
    O.setAttribute("aria-label", x);
  }, mr = class extends yt {
    static get observedAttributes() {
      return [...super.observedAttributes, G.MEDIA_CURRENT_TIME];
    }
    constructor(M = {}) {
      super({ slotTemplate: hr, ...M });
    }
    connectedCallback() {
      yn(this), super.connectedCallback();
    }
    handleClick() {
      let M = this.getAttribute(G.MEDIA_CURRENT_TIME), T = (M && !Number.isNaN(+M) ? +M : gn) + fr, e = new W.CustomEvent(it.MEDIA_SEEK_REQUEST, { composed: true, bubbles: true, detail: T });
      this.dispatchEvent(e);
    }
  };
  rt("media-seek-forward-button", mr);
  var En = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><title>Mux Player SVG Icons_v3</title><path d="M12,0V2.5h3.5V6H18V0ZM0,6H2.5V2.5H6V0H0Zm15.5,9.5H12V18h6V12H15.5ZM2.5,12H0v6H6V15.5H2.5Z"/></svg>', bn = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><title>Mux Player SVG Icons_v3</title><path d="M14.5,3.5V0H12V6h6V3.5ZM12,18h2.5V14.5H18V12H12ZM0,14.5H3.5V18H6V12H0Zm3.5-11H0V6H6V0H3.5Z"/></svg>', pr = Y.createElement("template");
  pr.innerHTML = `
  <style>
  :host([${G.MEDIA_IS_FULLSCREEN}]) slot:not([name=exit]) > *, 
  :host([${G.MEDIA_IS_FULLSCREEN}]) ::slotted(:not([slot=exit])) {
    display: none;
  }

  /* Double negative, but safer if display doesn't equal 'block' */
  :host(:not([${G.MEDIA_IS_FULLSCREEN}])) slot:not([name=enter]) > *, 
  :host(:not([${G.MEDIA_IS_FULLSCREEN}])) ::slotted(:not([slot=enter])) {
    display: none;
  }
  </style>

  <slot name="enter">${En}</slot>
  <slot name="exit">${bn}</slot>
`;
  var vr = (O) => {
    let x = O.getAttribute(G.MEDIA_IS_FULLSCREEN) != null ? gt.EXIT_FULLSCREEN() : gt.ENTER_FULLSCREEN();
    O.setAttribute("aria-label", x);
  }, gr = class extends yt {
    static get observedAttributes() {
      return [...super.observedAttributes, G.MEDIA_IS_FULLSCREEN];
    }
    constructor(M = {}) {
      super({ slotTemplate: pr, ...M });
    }
    connectedCallback() {
      vr(this), super.connectedCallback();
    }
    attributeChangedCallback(M, x, T) {
      M === G.MEDIA_IS_FULLSCREEN && vr(this), super.attributeChangedCallback(M, x, T);
    }
    handleClick(M) {
      let x = this.getAttribute(G.MEDIA_IS_FULLSCREEN) != null ? it.MEDIA_EXIT_FULLSCREEN_REQUEST : it.MEDIA_ENTER_FULLSCREEN_REQUEST;
      this.dispatchEvent(new W.CustomEvent(x, { composed: true, bubbles: true }));
    }
  };
  rt("media-fullscreen-button", gr);
  var _n = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><title>Mux Player SVG Icons_v3</title><path d="M13.5,9A4.5,4.5,0,0,0,11,5V7.18l2.45,2.45A4.23,4.23,0,0,0,13.5,9ZM16,9a6.84,6.84,0,0,1-.54,2.64L17,13.15A8.8,8.8,0,0,0,18,9,9,9,0,0,0,11,.23V2.29A7,7,0,0,1,16,9ZM1.27,0,0,1.27,4.73,6H0v6H4l5,5V10.27l4.25,4.25A6.92,6.92,0,0,1,11,15.7v2.06A9,9,0,0,0,14.69,16l2,2.05L18,16.73l-9-9ZM9,1,6.91,3.09,9,5.18Z"/></svg>', yr = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><title>Mux Player SVG Icons_v3</title><path d="M0,6v6H4l5,5V1L4,6ZM13.5,9A4.5,4.5,0,0,0,11,5V13A4.47,4.47,0,0,0,13.5,9Z"/></svg>', Tn = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><title>Mux Player SVG Icons_v3</title><path d="M0,6v6H4l5,5V1L4,6ZM13.5,9A4.5,4.5,0,0,0,11,5V13A4.47,4.47,0,0,0,13.5,9ZM11,.23V2.29a7,7,0,0,1,0,13.42v2.06A9,9,0,0,0,11,.23Z"/></svg>', Er = Y.createElement("template");
  Er.innerHTML = `
  <style>
  /* Default to High slot/icon. */
  :host(:not([${G.MEDIA_VOLUME_LEVEL}])) slot:not([name=high]) > *, 
  :host(:not([${G.MEDIA_VOLUME_LEVEL}])) ::slotted(:not([slot=high])),
  :host([${G.MEDIA_VOLUME_LEVEL}=high]) slot:not([name=high]) > *, 
  :host([${G.MEDIA_VOLUME_LEVEL}=high]) ::slotted(:not([slot=high])) {
    display: none;
  }

  :host([${G.MEDIA_VOLUME_LEVEL}=off]) slot:not([name=off]) > *, 
  :host([${G.MEDIA_VOLUME_LEVEL}=off]) ::slotted(:not([slot=off])) {
    display: none;
  }

  :host([${G.MEDIA_VOLUME_LEVEL}=low]) slot:not([name=low]) > *, 
  :host([${G.MEDIA_VOLUME_LEVEL}=low]) ::slotted(:not([slot=low])) {
    display: none;
  }

  :host([${G.MEDIA_VOLUME_LEVEL}=medium]) slot:not([name=medium]) > *, 
  :host([${G.MEDIA_VOLUME_LEVEL}=medium]) ::slotted(:not([slot=medium])) {
    display: none;
  }
  </style>

  <slot name="off">${_n}</slot>
  <slot name="low">${yr}</slot>
  <slot name="medium">${yr}</slot>
  <slot name="high">${Tn}</slot>
`;
  var br = (O) => {
    let x = O.getAttribute(G.MEDIA_VOLUME_LEVEL) === "off" ? gt.UNMUTE() : gt.MUTE();
    O.setAttribute("aria-label", x);
  }, _r = class extends yt {
    static get observedAttributes() {
      return [...super.observedAttributes, G.MEDIA_VOLUME_LEVEL];
    }
    constructor(M = {}) {
      super({ slotTemplate: Er, ...M });
    }
    connectedCallback() {
      br(this), super.connectedCallback();
    }
    attributeChangedCallback(M, x, T) {
      M === G.MEDIA_VOLUME_LEVEL && br(this), super.attributeChangedCallback(M, x, T);
    }
    handleClick(M) {
      let x = this.getAttribute(G.MEDIA_VOLUME_LEVEL) === "off" ? it.MEDIA_UNMUTE_REQUEST : it.MEDIA_MUTE_REQUEST;
      this.dispatchEvent(new W.CustomEvent(x, { composed: true, bubbles: true }));
    }
  };
  rt("media-mute-button", _r);
  var Tr = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 18"><title>Mux Player SVG Icons_v3</title><path d="M21,0H1A1,1,0,0,0,0,1V17a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V1A1,1,0,0,0,21,0ZM20,16H2V2H20ZM17,8H10v5h7Z"/></svg>', Ar = Y.createElement("template");
  Ar.innerHTML = `
  <style>
  :host([${G.MEDIA_IS_PIP}]) slot:not([name=exit]) > *, 
  :host([${G.MEDIA_IS_PIP}]) ::slotted(:not([slot=exit])) {
    display: none;
  }

  /* Double negative, but safer if display doesn't equal 'block' */
  :host(:not([${G.MEDIA_IS_PIP}])) slot:not([name=enter]) > *, 
  :host(:not([${G.MEDIA_IS_PIP}])) ::slotted(:not([slot=enter])) {
    display: none;
  }
  </style>

  <slot name="enter">${Tr}</slot>
  <slot name="exit">${Tr}</slot>
`;
  var Sr = (O) => {
    let x = O.getAttribute(G.MEDIA_IS_PIP) != null ? gt.EXIT_PIP() : gt.ENTER_PIP();
    O.setAttribute("aria-label", x);
  }, Lr = class extends yt {
    static get observedAttributes() {
      return [...super.observedAttributes, G.MEDIA_IS_PIP];
    }
    constructor(M = {}) {
      super({ slotTemplate: Ar, ...M });
    }
    connectedCallback() {
      Sr(this), super.connectedCallback();
    }
    attributeChangedCallback(M, x, T) {
      M === G.MEDIA_IS_PIP && Sr(this), super.attributeChangedCallback(M, x, T);
    }
    handleClick(M) {
      let x = this.getAttribute(G.MEDIA_IS_PIP) != null ? it.MEDIA_EXIT_PIP_REQUEST : it.MEDIA_ENTER_PIP_REQUEST;
      this.dispatchEvent(new W.CustomEvent(x, { composed: true, bubbles: true }));
    }
  };
  rt("media-pip-button", Lr);
  var An = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path d="M3 18L18 9L3 0V18Z"/>
</svg>`, Sn = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path d="M3 17H7V1H3V17ZM11 1V17H15V1H11Z"/>
</svg>`, Dr = Y.createElement("template");
  Dr.innerHTML = `
  <style>
  :host([${G.MEDIA_PAUSED}]) slot[name=pause] > *, 
  :host([${G.MEDIA_PAUSED}]) ::slotted([slot=pause]) {
    display: none;
  }

  :host(:not([${G.MEDIA_PAUSED}])) slot[name=play] > *, 
  :host(:not([${G.MEDIA_PAUSED}])) ::slotted([slot=play]) {
    display: none;
  }
  </style>

  <slot name="play">${An}</slot>
  <slot name="pause">${Sn}</slot>
`;
  var kr = (O) => {
    let x = O.getAttribute(G.MEDIA_PAUSED) != null ? gt.PLAY() : gt.PAUSE();
    O.setAttribute("aria-label", x);
  }, Rr = class extends yt {
    static get observedAttributes() {
      return [...super.observedAttributes, G.MEDIA_PAUSED];
    }
    constructor(M = {}) {
      super({ slotTemplate: Dr, ...M });
    }
    connectedCallback() {
      kr(this), super.connectedCallback();
    }
    attributeChangedCallback(M, x, T) {
      M === G.MEDIA_PAUSED && kr(this), super.attributeChangedCallback(M, x, T);
    }
    handleClick(M) {
      let x = this.getAttribute(G.MEDIA_PAUSED) != null ? it.MEDIA_PLAY_REQUEST : it.MEDIA_PAUSE_REQUEST;
      this.dispatchEvent(new W.CustomEvent(x, { composed: true, bubbles: true }));
    }
  };
  rt("media-play-button", Rr);
  var wr = [1, 1.25, 1.5, 1.75, 2], ne = 1, Ir = Y.createElement("template");
  Ir.innerHTML = `
  <style>
  :host {
    font-size: 14px;
    line-height: 18px;
    font-weight: bold;
  }

  #container {
    height: var(--media-text-content-height, 18px);
  }
  </style>

  <span id="container"></span>
`;
  var Mr = class extends yt {
    static get observedAttributes() {
      return [...super.observedAttributes, G.MEDIA_PLAYBACK_RATE, "rates"];
    }
    constructor(M = {}) {
      super({ slotTemplate: Ir, ...M });
      this._rates = wr, this.container = this.shadowRoot.querySelector("#container"), this.container.innerHTML = `${ne}x`;
    }
    attributeChangedCallback(M, x, T) {
      if (M === "rates") {
        let e = (T != null ? T : "").trim().split(/\s*,?\s+/).map((R) => Number(R)).filter((R) => !Number.isNaN(R)).sort((R, m) => R - m);
        this._rates = e.length ? e : wr;
        return;
      }
      if (M === G.MEDIA_PLAYBACK_RATE) {
        let e = T ? +T : Number.NaN, R = Number.isNaN(e) ? ne : e;
        this.container.innerHTML = `${R}x`, this.setAttribute("aria-label", _t.PLAYBACK_RATE({ playbackRate: R }));
        return;
      }
      super.attributeChangedCallback(M, x, T);
    }
    handleClick(M) {
      var R, m;
      let x = +this.getAttribute(G.MEDIA_PLAYBACK_RATE) || ne, T = (m = (R = this._rates.find((y) => y > x)) != null ? R : this._rates[0]) != null ? m : ne, e = new W.CustomEvent(it.MEDIA_PLAYBACK_RATE_REQUEST, { composed: true, bubbles: true, detail: T });
      this.dispatchEvent(e);
    }
  };
  rt("media-playback-rate-button", Mr);
  var Ln = "video not loaded, unknown time.", Cr = (O) => {
    let M = O.range, x = Ft(+M.value), T = Ft(+M.max), e = x && T ? `${x} of ${T}` : Ln;
    M.setAttribute("aria-valuetext", e);
  }, xr = Y.createElement("template");
  xr.innerHTML = `
  <style>
    #thumbnailContainer {
      display: none;
      position: absolute;
      top: 0;
    }

    media-thumbnail-preview {
      position: absolute;
      bottom: 10px;
      border: 2px solid #fff;
      border-radius: 2px;
      background-color: #000;
      width: 160px;
      height: 90px;

      /* Negative offset of half to center on the handle */
      margin-left: -80px;
    }

    /* Can't get this working. Trying a downward triangle. */
    /* media-thumbnail-preview::after {
      content: "";
      display: block;
      width: 300px;
      height: 300px;
      margin: 100px;
      background-color: #ff0;
    } */

    :host([${G.MEDIA_PREVIEW_IMAGE}]:hover) #thumbnailContainer {
      display: block;
      animation: fadeIn ease 0.5s;
    }

    @keyframes fadeIn {
      0% {
        /* transform-origin: bottom center; */
        /* transform: scale(0.7); */
        margin-top: 10px;
        opacity: 0;
      }
      100% {
        /* transform-origin: bottom center; */
        /* transform: scale(1); */
        margin-top: 0;
        opacity: 1;
      }
    }
  </style>
  <div id="thumbnailContainer">
    <media-thumbnail-preview></media-thumbnail-preview>
  </div>
`;
  var Re = class extends Jt {
    static get observedAttributes() {
      return [...super.observedAttributes, "thumbnails", G.MEDIA_DURATION, G.MEDIA_CURRENT_TIME, G.MEDIA_PREVIEW_IMAGE];
    }
    constructor() {
      super();
      this.shadowRoot.appendChild(xr.content.cloneNode(true)), this.range.addEventListener("input", () => {
        let x = this.range.value, T = new W.CustomEvent(it.MEDIA_SEEK_REQUEST, { composed: true, bubbles: true, detail: x });
        this.dispatchEvent(T);
      }), this.enableThumbnails();
    }
    connectedCallback() {
      this.range.setAttribute("aria-label", _t.SEEK()), super.connectedCallback();
    }
    attributeChangedCallback(M, x, T) {
      M === G.MEDIA_CURRENT_TIME && (this.range.value = +T, Cr(this), this.updateBar()), M === G.MEDIA_DURATION && (this.range.max = Math.floor(+T), Cr(this), this.updateBar()), super.attributeChangedCallback(M, x, T);
    }
    getBarColors() {
      let M = super.getBarColors();
      if (!this.mediaBuffered || !this.mediaBuffered.length || this.mediaDuration <= 0)
        return M;
      let x = this.mediaBuffered, T = x[x.length - 1][1] / this.mediaDuration * 100;
      return M.splice(1, 0, ["var(--media-time-buffered-color, #777)", T]), M;
    }
    enableThumbnails() {
      this.thumbnailPreview = this.shadowRoot.querySelector("media-thumbnail-preview"), this.shadowRoot.querySelector("#thumbnailContainer").classList.add("enabled");
      let x, T = () => {
        x = (y) => {
          let w = +this.getAttribute(G.MEDIA_DURATION);
          if (!w)
            return;
          let A = this.range.getBoundingClientRect(), L = (y.clientX - A.left) / A.width;
          L = Math.max(0, Math.min(1, L));
          let u = A.left - this.getBoundingClientRect().left + L * A.width;
          this.thumbnailPreview.style.left = `${u}px`;
          let g = L * w, D = new W.CustomEvent(it.MEDIA_PREVIEW_REQUEST, { composed: true, bubbles: true, detail: g });
          this.dispatchEvent(D);
        }, W.addEventListener("mousemove", x, false);
      }, e = () => {
        W.removeEventListener("mousemove", x);
      }, R = false, m = (y) => {
        let w = this.getAttribute(G.MEDIA_DURATION);
        if (!R && w) {
          R = true, T();
          let A = (L) => {
            L.target != this && !this.contains(L.target) && (W.removeEventListener("mousemove", A), R = false, e());
          };
          W.addEventListener("mousemove", A, false);
        }
      };
      this.addEventListener("mousemove", m, false);
    }
  };
  rt("media-time-range", Re);
  var we = Re;
  var Or = class extends we {
    constructor() {
      super();
      console.warn("MediaChrome: <media-progress-range> is deprecated. Use <media-time-range> instead.");
    }
  };
  rt("media-progress-range", Or);
  var Dn = '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 18"><defs><style>.cls-1{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><title>Mux Player SVG Icons_v3</title><text class="cls-1" transform="translate(0.18 17.6)">30</text><path d="M8,3V0L2.37,4,8,7.94V5A5.54,5.54,0,0,1,9.9,15.48V17.6A7.5,7.5,0,0,0,8,3Z"/></svg>', Pr = Y.createElement("template");
  Pr.innerHTML = `  
  <slot name="backward">${Dn}</slot>
`;
  var kn = 0, Nr = -30, Rn = (O) => {
    let M = Math.abs(Nr), x = gt.SEEK_BACK_N_SECS({ seekOffset: M });
    O.setAttribute("aria-label", x);
  }, Fr = class extends yt {
    static get observedAttributes() {
      return [...super.observedAttributes, G.MEDIA_CURRENT_TIME];
    }
    constructor(M = {}) {
      super({ slotTemplate: Pr, ...M });
    }
    connectedCallback() {
      Rn(this), super.connectedCallback();
    }
    handleClick() {
      let M = this.getAttribute(G.MEDIA_CURRENT_TIME), x = M && !Number.isNaN(+M) ? +M : kn, T = Math.max(x + Nr, 0), e = new W.CustomEvent(it.MEDIA_SEEK_REQUEST, { composed: true, bubbles: true, detail: T });
      this.dispatchEvent(e);
    }
  };
  rt("media-seek-backward-button", Fr);
  var Ur = Y.createElement("template");
  Ur.innerHTML = `
  <style>
    :host {
      box-sizing: border-box;
      background-color: #000;
      width: 284px;
      height: 160px;
      overflow: hidden;
    }

    img {
      position: absolute;
      left: 0;
      top: 0;
    }
  </style>
  <img crossorigin loading="eager" decoding="async" />
`;
  var Br = class extends W.HTMLElement {
    static get observedAttributes() {
      return [G.MEDIA_CONTROLLER, "time", G.MEDIA_PREVIEW_IMAGE, G.MEDIA_PREVIEW_COORDS];
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" }), this.shadowRoot.appendChild(Ur.content.cloneNode(true));
    }
    connectedCallback() {
      var x;
      let M = this.getAttribute(G.MEDIA_CONTROLLER);
      if (M) {
        let T = Y.getElementById(M);
        (x = T == null ? void 0 : T.associateElement) == null || x.call(T, this);
      }
    }
    disconnectedCallback() {
      var x;
      if (this.getAttribute(G.MEDIA_CONTROLLER)) {
        let T = Y.getElementById(mediaControllerId);
        (x = T == null ? void 0 : T.unassociateElement) == null || x.call(T, this);
      }
    }
    attributeChangedCallback(M, x, T) {
      var e, R;
      if (["time", G.MEDIA_PREVIEW_IMAGE, G.MEDIA_PREVIEW_COORDS].includes(M) && this.update(), M === G.MEDIA_CONTROLLER) {
        if (x) {
          let m = Y.getElementById(x);
          (e = m == null ? void 0 : m.unassociateElement) == null || e.call(m, this);
        }
        if (T) {
          let m = Y.getElementById(T);
          (R = m == null ? void 0 : m.associateElement) == null || R.call(m, this);
        }
      }
    }
    update() {
      let M = this.getAttribute(G.MEDIA_PREVIEW_COORDS), x = this.getAttribute(G.MEDIA_PREVIEW_IMAGE);
      if (!(M && x))
        return;
      let T = this.offsetWidth, e = this.shadowRoot.querySelector("img"), [R, m, y, w] = M.split(/\s+/).map((u) => +u), A = x, L = T / y || 1, b = () => {
        e.style.width = `${L * e.naturalWidth}px`, e.style.height = `${L * e.naturalHeight}px`;
      };
      e.src !== A && (e.onload = b, e.src = A, b()), b(), e.style.left = `-${L * R}px`, e.style.top = `-${L * m}px`;
    }
  };
  rt("media-thumbnail-preview", Br);
  var jr = Y.createElement("template"), wn = `
<svg viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;
  jr.innerHTML = `
<style>
:host {
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
}

#status {
  color: rgba(0,0,0,0);
  width: 0px;
  height: 0px;
}

:host slot[name=loading] > *,
:host ::slotted([slot=loading]) {
  opacity: 1;
  transition: opacity 0.15s;
}

:host(:not([is-loading])) slot[name=loading] > *, 
:host(:not([is-loading])) ::slotted([slot=loading]) {
  opacity: 0;
}

:host(:not([is-loading])) #status {
  display: none;
}

svg, img, ::slotted(svg), ::slotted(img) {
  width: var(--media-loading-icon-width, 44px);
  height: var(--media-loading-icon-height);
  fill: var(--media-icon-color, #fff);
  vertical-align: middle;
}
</style>

<slot name="loading">${wn}</slot>
<div id="status" role="status" aria-live="polite">${_t.MEDIA_LOADING()}</div>
`;
  var In = 500, Hr = class extends W.HTMLElement {
    static get observedAttributes() {
      return [G.MEDIA_CONTROLLER, G.MEDIA_PAUSED, G.MEDIA_LOADING, "loading-delay"];
    }
    constructor() {
      super();
      let M = this.attachShadow({ mode: "open" }), x = jr.content.cloneNode(true);
      M.appendChild(x);
    }
    attributeChangedCallback(M, x, T) {
      var e, R, m;
      if (M === G.MEDIA_LOADING || M === G.MEDIA_PAUSED) {
        let y = this.getAttribute(G.MEDIA_PAUSED) != null, w = this.getAttribute(G.MEDIA_LOADING) != null, A = !y && w;
        if (!A)
          this.loadingDelayHandle && (clearTimeout(this.loadingDelayHandle), this.loadingDelayHandle = void 0), this.removeAttribute("is-loading");
        else if (!this.loadingDelayHandle && A) {
          let L = +((e = this.getAttribute("loading-delay")) != null ? e : In);
          this.loadingDelayHandle = setTimeout(() => {
            this.setAttribute("is-loading", ""), this.loadingDelayHandle = void 0;
          }, L);
        }
      } else if (M === G.MEDIA_CONTROLLER) {
        if (x) {
          let y = Y.getElementById(x);
          (R = y == null ? void 0 : y.unassociateElement) == null || R.call(y, this);
        }
        if (T) {
          let y = Y.getElementById(T);
          (m = y == null ? void 0 : y.associateElement) == null || m.call(y, this);
        }
      }
    }
    connectedCallback() {
      var x;
      let M = this.getAttribute(G.MEDIA_CONTROLLER);
      if (M) {
        let T = Y.getElementById(M);
        (x = T == null ? void 0 : T.associateElement) == null || x.call(T, this);
      }
    }
    disconnectedCallback() {
      var x;
      if (this.loadingDelayHandle && (clearTimeout(this.loadingDelayHandle), this.loadingDelayHandle = void 0), this.getAttribute(G.MEDIA_CONTROLLER)) {
        let T = Y.getElementById(mediaControllerId);
        (x = T == null ? void 0 : T.unassociateElement) == null || x.call(T, this);
      }
    }
  };
  rt("media-loading-indicator", Hr);
  var Gr = Y.createElement("template");
  Gr.innerHTML = `
  <style>
    :host {

    }
  </style>

  <slot></slot>
`;
  var Vr = class extends W.HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" }), this.shadowRoot.appendChild(Gr.content.cloneNode(true));
    }
  };
  rt("media-title-bar", Vr);
  var Mn = 100, Cn = (O) => {
    var T;
    if (O.getAttribute(G.MEDIA_MUTED) != null)
      return 0;
    let x = +((T = O.getAttribute(G.MEDIA_VOLUME)) != null ? T : 1);
    return Math.round(x * O.range.max);
  }, xn = ({ value: O, max: M }) => `${Math.round(O / M * 100)}%`, Kr = class extends Jt {
    static get observedAttributes() {
      return [...super.observedAttributes, G.MEDIA_VOLUME, G.MEDIA_MUTED];
    }
    constructor() {
      super();
      this.range.max = Mn, this.range.addEventListener("input", () => {
        let x = this.range.value / this.range.max, T = new W.CustomEvent(it.MEDIA_VOLUME_REQUEST, { composed: true, bubbles: true, detail: x });
        this.dispatchEvent(T);
      });
    }
    connectedCallback() {
      this.range.setAttribute("aria-label", _t.VOLUME()), super.connectedCallback();
    }
    attributeChangedCallback(M, x, T) {
      if (M === G.MEDIA_VOLUME || M === G.MEDIA_MUTED) {
        let e = Cn(this);
        this.range.value = e, this.range.setAttribute("aria-valuetext", xn(this.range)), this.updateBar();
      }
      super.attributeChangedCallback(M, x, T);
    }
  };
  rt("media-volume-range", Kr);
  var qr = class extends Se {
  };
  W.customElements.get("media-chrome") || W.customElements.define("media-chrome", qr);
  var Wr = class extends Se {
    constructor() {
      super();
      console.warn("MediaChrome: <media-container> is deprecated. Use <media-controller>.");
    }
  };
  W.customElements.get("media-container") || W.customElements.define("media-container", Wr);
  var On = Object.create, Ie = Object.defineProperty, Pn = Object.getOwnPropertyDescriptor, Nn = Object.getOwnPropertyNames, Fn = Object.getPrototypeOf, Un = Object.prototype.hasOwnProperty, Bn = (O) => Ie(O, "__esModule", { value: true }), ae = (O, M) => () => (M || O((M = { exports: {} }).exports, M), M.exports), jn = (O, M, x) => {
    if (M && typeof M == "object" || typeof M == "function")
      for (let T of Nn(M))
        !Un.call(O, T) && T !== "default" && Ie(O, T, { get: () => M[T], enumerable: !(x = Pn(M, T)) || x.enumerable });
    return O;
  }, $r = (O) => jn(Bn(Ie(O != null ? On(Fn(O)) : {}, "default", O && O.__esModule && "default" in O ? { get: () => O.default, enumerable: true } : { value: O, enumerable: true })), O), Hn = ae(() => {
    if (globalThis.customElements || (globalThis.customElements = { get(x) {
    }, define(x, T, e) {
    }, upgrade(x) {
    }, whenDefined(x) {
      return Promise.resolve(globalThis.HTMLElement);
    } }), !globalThis.CustomEvent) {
      class x {
        constructor(e, R = {}) {
          this.detail = R == null ? void 0 : R.detail;
        }
        initCustomEvent(e, R, m, y) {
        }
      }
      globalThis.CustomEvent = x;
    }
    if (!globalThis.EventTarget) {
      class x {
        addEventListener() {
        }
        removeEventListener() {
        }
        dispatchEvent(e) {
          return true;
        }
      }
      globalThis.EventTarget = x;
    }
    if (!globalThis.HTMLElement) {
      class x extends EventTarget {
      }
      globalThis.HTMLElement = x;
    }
    var O, M;
    if (!((O = globalThis.document) == null ? void 0 : O.createElement)) {
      let x = (M = globalThis.document) != null ? M : {};
      x.createElement = function(T, e) {
        return new HTMLElement();
      }, globalThis.document = x;
    }
  }), Gn = ae((O, M) => {
    (function() {
      var x = false;
      (function(T, e) {
        typeof O == "object" && typeof M == "object" ? M.exports = e() : typeof x == "function" && x.amd ? x("mux", [], e) : typeof O == "object" ? O.mux = e() : T.mux = e();
      })(this, function() {
        return function(T) {
          function e(m) {
            if (R[m])
              return R[m].exports;
            var y = R[m] = { i: m, l: false, exports: {} };
            return T[m].call(y.exports, y, y.exports, e), y.l = true, y.exports;
          }
          var R = {};
          return e.m = T, e.c = R, e.d = function(m, y, w) {
            e.o(m, y) || Object.defineProperty(m, y, { configurable: false, enumerable: true, get: w });
          }, e.n = function(m) {
            var y = m && m.__esModule ? function() {
              return m.default;
            } : function() {
              return m;
            };
            return e.d(y, "a", y), y;
          }, e.o = function(m, y) {
            return Object.prototype.hasOwnProperty.call(m, y);
          }, e.p = "", e(e.s = 15);
        }([function(T, e, R) {
          (function(m) {
            var y;
            y = typeof window != "undefined" ? window : m !== void 0 ? m : typeof self != "undefined" ? self : {}, T.exports = y;
          }).call(e, R(17));
        }, function(T, e, R) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true });
          var m = R(0), y = function(A) {
            return A && A.__esModule ? A : { default: A };
          }(m), w = {};
          w.now = function() {
            var A = y.default.performance, L = A && A.timing;
            return L && typeof L.navigationStart == "number" && typeof A.now == "function" ? L.navigationStart + A.now() : Date.now();
          }, e.default = w;
        }, function(T, e) {
          function R(F, U, j) {
            switch (j.length) {
              case 0:
                return F.call(U);
              case 1:
                return F.call(U, j[0]);
              case 2:
                return F.call(U, j[0], j[1]);
              case 3:
                return F.call(U, j[0], j[1], j[2]);
            }
            return F.apply(U, j);
          }
          function m(F, U) {
            for (var j = -1, H = Array(F); ++j < F; )
              H[j] = U(j);
            return H;
          }
          function y(F, U) {
            var j = N(F) || S(F) ? m(F.length, String) : [], H = j.length, V = !!H;
            for (var K in F)
              !U && !c.call(F, K) || V && (K == "length" || u(K, H)) || j.push(K);
            return j;
          }
          function w(F, U, j) {
            var H = F[U];
            c.call(F, U) && E(H, j) && (j !== void 0 || U in F) || (F[U] = j);
          }
          function A(F) {
            if (!D(F))
              return I(F);
            var U = [];
            for (var j in Object(F))
              c.call(F, j) && j != "constructor" && U.push(j);
            return U;
          }
          function L(F, U) {
            return U = C(U === void 0 ? F.length - 1 : U, 0), function() {
              for (var j = arguments, H = -1, V = C(j.length - U, 0), K = Array(V); ++H < V; )
                K[H] = j[U + H];
              H = -1;
              for (var q = Array(U + 1); ++H < U; )
                q[H] = j[H];
              return q[U] = K, R(F, this, q);
            };
          }
          function b(F, U, j, H) {
            j || (j = {});
            for (var V = -1, K = U.length; ++V < K; ) {
              var q = U[V], $ = H ? H(j[q], F[q], q, j, F) : void 0;
              w(j, q, $ === void 0 ? F[q] : $);
            }
            return j;
          }
          function u(F, U) {
            return !!(U = U == null ? v : U) && (typeof F == "number" || s.test(F)) && F > -1 && F % 1 == 0 && F < U;
          }
          function g(F, U, j) {
            if (!h(j))
              return false;
            var H = typeof U;
            return !!(H == "number" ? d(j) && u(U, j.length) : H == "string" && U in j) && E(j[U], F);
          }
          function D(F) {
            var U = F && F.constructor;
            return F === (typeof U == "function" && U.prototype || i);
          }
          function E(F, U) {
            return F === U || F !== F && U !== U;
          }
          function S(F) {
            return t(F) && c.call(F, "callee") && (!k.call(F, "callee") || l.call(F) == _);
          }
          function d(F) {
            return F != null && n(F.length) && !r(F);
          }
          function t(F) {
            return a(F) && d(F);
          }
          function r(F) {
            var U = h(F) ? l.call(F) : "";
            return U == p || U == o;
          }
          function n(F) {
            return typeof F == "number" && F > -1 && F % 1 == 0 && F <= v;
          }
          function h(F) {
            var U = typeof F;
            return !!F && (U == "object" || U == "function");
          }
          function a(F) {
            return !!F && typeof F == "object";
          }
          function f(F) {
            return d(F) ? y(F) : A(F);
          }
          var v = 9007199254740991, _ = "[object Arguments]", p = "[object Function]", o = "[object GeneratorFunction]", s = /^(?:0|[1-9]\d*)$/, i = Object.prototype, c = i.hasOwnProperty, l = i.toString, k = i.propertyIsEnumerable, I = function(F, U) {
            return function(j) {
              return F(U(j));
            };
          }(Object.keys, Object), C = Math.max, P = !k.call({ valueOf: 1 }, "valueOf"), N = Array.isArray, B = function(F) {
            return L(function(U, j) {
              var H = -1, V = j.length, K = V > 1 ? j[V - 1] : void 0, q = V > 2 ? j[2] : void 0;
              for (K = F.length > 3 && typeof K == "function" ? (V--, K) : void 0, q && g(j[0], j[1], q) && (K = V < 3 ? void 0 : K, V = 1), U = Object(U); ++H < V; ) {
                var $ = j[H];
                $ && F(U, $, H, K);
              }
              return U;
            });
          }(function(F, U) {
            if (P || D(U) || d(U))
              return void b(U, f(U), F);
            for (var j in U)
              c.call(U, j) && w(F, j, U[j]);
          });
          T.exports = B;
        }, function(T, e, R) {
          "use strict";
          function m(y, w, A) {
            A = A === void 0 ? 1 : A, y[w] = y[w] || 0, y[w] += A;
          }
          Object.defineProperty(e, "__esModule", { value: true }), e.default = m;
        }, function(T, e, R) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true });
          var m = R(18), y = function(A) {
            return A && A.__esModule ? A : { default: A };
          }(m), w = y.default.methodFactory;
          y.default.methodFactory = function(A, L, b) {
            var u = w(A, L, b);
            return function() {
              for (var g = ["[mux]"], D = 0; D < arguments.length; D++)
                g.push(arguments[D]);
              u.apply(void 0, g);
            };
          }, y.default.setLevel(y.default.getLevel()), e.default = y.default;
        }, function(T, e, R) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true });
          var m = function(A) {
            return w(A)[0];
          }, y = function(A) {
            return w(A)[1];
          }, w = function(A) {
            if (typeof A != "string" || A === "")
              return ["localhost"];
            var L = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, b = A.match(L) || [], u = b[4], g = void 0;
            return u && (g = (u.match(/[^\.]+\.[^\.]+$/) || [])[0]), [u, g];
          };
          e.extractHostnameAndDomain = w, e.extractHostname = m, e.extractDomain = y;
        }, function(T, e, R) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true });
          var m = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(w) {
              var A = 16 * Math.random() | 0;
              return (w === "x" ? A : 3 & A | 8).toString(16);
            });
          }, y = function() {
            return ("000000" + (Math.random() * Math.pow(36, 6) << 0).toString(36)).slice(-6);
          };
          e.generateUUID = m, e.generateShortID = y;
        }, function(T, e, R) {
          "use strict";
          function m(w) {
            w = w || "";
            var A = {};
            return w.trim().split(/[\r\n]+/).forEach(function(L) {
              if (L) {
                var b = L.split(": "), u = b.shift();
                u && y.indexOf(u.toLowerCase()) >= 0 && (A[u] = b.join(": "));
              }
            }), A;
          }
          Object.defineProperty(e, "__esModule", { value: true }), e.default = m;
          var y = ["x-cdn", "content-type"];
        }, function(T, e, R) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true }), e.findMediaElement = e.getMuxPlayerId = void 0;
          var m = R(6), y = function(A) {
            return A && A.nodeName !== void 0 ? (A.muxId || (A.muxId = A.id || (0, m.generateShortID)()), A.muxId) : A;
          }, w = function(A) {
            var L = void 0;
            return A && A.nodeName !== void 0 ? (L = A, A = y(L)) : L = document.querySelector(A), [L, A, L && L.nodeName ? L.nodeName.toLowerCase() : ""];
          };
          e.getMuxPlayerId = y, e.findMediaElement = w;
        }, function(T, e, R) {
          "use strict";
          function m() {
            return (w.default.doNotTrack || w.default.navigator && (w.default.navigator.doNotTrack || w.default.navigator.msDoNotTrack)) === "1";
          }
          Object.defineProperty(e, "__esModule", { value: true }), e.default = m;
          var y = R(0), w = function(A) {
            return A && A.__esModule ? A : { default: A };
          }(y);
        }, function(T, e, R) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true });
          var m = R(0), y = function(A) {
            return A && A.__esModule ? A : { default: A };
          }(m), w = {};
          w.exists = function() {
            var A = y.default.performance;
            return (A && A.timing) !== void 0;
          }, w.domContentLoadedEventEnd = function() {
            var A = y.default.performance, L = A && A.timing;
            return L && L.domContentLoadedEventEnd;
          }, w.navigationStart = function() {
            var A = y.default.performance, L = A && A.timing;
            return L && L.navigationStart;
          }, e.default = w;
        }, function(T, e, R) {
          "use strict";
          var m = R(37), y = R(38), w = R(13);
          T.exports = { formats: w, parse: y, stringify: m };
        }, function(T, e, R) {
          "use strict";
          var m = Object.prototype.hasOwnProperty, y = function() {
            for (var A = [], L = 0; L < 256; ++L)
              A.push("%" + ((L < 16 ? "0" : "") + L.toString(16)).toUpperCase());
            return A;
          }(), w = function(A) {
            for (var L; A.length; ) {
              var b = A.pop();
              if (L = b.obj[b.prop], Array.isArray(L)) {
                for (var u = [], g = 0; g < L.length; ++g)
                  L[g] !== void 0 && u.push(L[g]);
                b.obj[b.prop] = u;
              }
            }
            return L;
          };
          e.arrayToObject = function(A, L) {
            for (var b = L && L.plainObjects ? Object.create(null) : {}, u = 0; u < A.length; ++u)
              A[u] !== void 0 && (b[u] = A[u]);
            return b;
          }, e.merge = function(A, L, b) {
            if (!L)
              return A;
            if (typeof L != "object") {
              if (Array.isArray(A))
                A.push(L);
              else {
                if (typeof A != "object")
                  return [A, L];
                (b.plainObjects || b.allowPrototypes || !m.call(Object.prototype, L)) && (A[L] = true);
              }
              return A;
            }
            if (typeof A != "object")
              return [A].concat(L);
            var u = A;
            return Array.isArray(A) && !Array.isArray(L) && (u = e.arrayToObject(A, b)), Array.isArray(A) && Array.isArray(L) ? (L.forEach(function(g, D) {
              m.call(A, D) ? A[D] && typeof A[D] == "object" ? A[D] = e.merge(A[D], g, b) : A.push(g) : A[D] = g;
            }), A) : Object.keys(L).reduce(function(g, D) {
              var E = L[D];
              return m.call(g, D) ? g[D] = e.merge(g[D], E, b) : g[D] = E, g;
            }, u);
          }, e.assign = function(A, L) {
            return Object.keys(L).reduce(function(b, u) {
              return b[u] = L[u], b;
            }, A);
          }, e.decode = function(A) {
            try {
              return decodeURIComponent(A.replace(/\+/g, " "));
            } catch {
              return A;
            }
          }, e.encode = function(A) {
            if (A.length === 0)
              return A;
            for (var L = typeof A == "string" ? A : String(A), b = "", u = 0; u < L.length; ++u) {
              var g = L.charCodeAt(u);
              g === 45 || g === 46 || g === 95 || g === 126 || g >= 48 && g <= 57 || g >= 65 && g <= 90 || g >= 97 && g <= 122 ? b += L.charAt(u) : g < 128 ? b += y[g] : g < 2048 ? b += y[192 | g >> 6] + y[128 | 63 & g] : g < 55296 || g >= 57344 ? b += y[224 | g >> 12] + y[128 | g >> 6 & 63] + y[128 | 63 & g] : (u += 1, g = 65536 + ((1023 & g) << 10 | 1023 & L.charCodeAt(u)), b += y[240 | g >> 18] + y[128 | g >> 12 & 63] + y[128 | g >> 6 & 63] + y[128 | 63 & g]);
            }
            return b;
          }, e.compact = function(A) {
            for (var L = [{ obj: { o: A }, prop: "o" }], b = [], u = 0; u < L.length; ++u)
              for (var g = L[u], D = g.obj[g.prop], E = Object.keys(D), S = 0; S < E.length; ++S) {
                var d = E[S], t = D[d];
                typeof t == "object" && t !== null && b.indexOf(t) === -1 && (L.push({ obj: D, prop: d }), b.push(t));
              }
            return w(L);
          }, e.isRegExp = function(A) {
            return Object.prototype.toString.call(A) === "[object RegExp]";
          }, e.isBuffer = function(A) {
            return A != null && !!(A.constructor && A.constructor.isBuffer && A.constructor.isBuffer(A));
          };
        }, function(T, e, R) {
          "use strict";
          var m = String.prototype.replace, y = /%20/g;
          T.exports = { default: "RFC3986", formatters: { RFC1738: function(w) {
            return m.call(w, y, "+");
          }, RFC3986: function(w) {
            return w;
          } }, RFC1738: "RFC1738", RFC3986: "RFC3986" };
        }, function(T, e, R) {
          "use strict";
          function m(d) {
            return d && d.__esModule ? d : { default: d };
          }
          function y(d) {
            var t = {};
            for (var r in d)
              d.hasOwnProperty(r) && (t[d[r]] = r);
            return t;
          }
          function w(d) {
            var t = {}, r = {};
            return Object.keys(d).forEach(function(n) {
              var h = false;
              if (d.hasOwnProperty(n) && d[n] !== void 0) {
                var a = n.split("_"), f = a[0], v = D[f];
                v || (L.default.info("Data key word `" + a[0] + "` not expected in " + n), v = f + "_"), a.splice(1).forEach(function(_) {
                  _ === "url" && (h = true), S[_] ? v += S[_] : Number(_) && Math.floor(Number(_)) === Number(_) ? v += _ : (L.default.info("Data key word `" + _ + "` not expected in " + n), v += "_" + _ + "_");
                }), h ? r[v] = d[n] : t[v] = d[n];
              }
            }), (0, u.default)(t, r);
          }
          Object.defineProperty(e, "__esModule", { value: true }), e.default = w;
          var A = R(4), L = m(A), b = R(2), u = m(b), g = { a: "env", b: "beacon", c: "custom", d: "ad", e: "event", f: "experiment", m: "mux", n: "response", p: "player", q: "request", r: "retry", s: "session", t: "timestamp", u: "viewer", v: "video", w: "page", x: "view", y: "sub" }, D = y(g), E = { ad: "ad", ag: "aggregate", ap: "api", al: "application", ar: "architecture", as: "asset", au: "autoplay", av: "average", bi: "bitrate", br: "break", bw: "browser", by: "bytes", ca: "cached", cb: "cancel", cd: "code", cg: "category", ch: "changed", cn: "config", co: "count", ce: "counter", cp: "complete", cr: "creative", ct: "content", cu: "current", cx: "connection", dg: "downscaling", dm: "domain", dn: "cdn", do: "downscale", du: "duration", dv: "device", ec: "encoding", en: "end", eg: "engine", em: "embed", er: "error", es: "errorcode", et: "errortext", ee: "event", ev: "events", ex: "expires", fi: "first", fm: "family", ft: "format", fq: "frequency", fr: "frame", fs: "fullscreen", hb: "holdback", he: "headers", ho: "host", hn: "hostname", ht: "height", id: "id", ii: "init", in: "instance", ip: "ip", is: "is", ke: "key", la: "language", lb: "labeled", le: "level", li: "live", ld: "loaded", lo: "load", ls: "lists", lt: "latency", ma: "max", md: "media", me: "message", mf: "manifest", mi: "mime", ml: "midroll", mm: "min", mn: "manufacturer", mo: "model", mx: "mux", ne: "newest", nm: "name", no: "number", on: "on", os: "os", pa: "paused", pb: "playback", pd: "producer", pe: "percentage", pf: "played", pg: "program", ph: "playhead", pi: "plugin", pl: "preroll", pn: "playing", po: "poster", pr: "preload", ps: "position", pt: "part", py: "property", ra: "rate", rd: "requested", re: "rebuffer", rf: "rendition", rm: "remote", ro: "ratio", rp: "response", rq: "request", rs: "requests", sa: "sample", se: "session", sk: "seek", sm: "stream", so: "source", sq: "sequence", sr: "series", st: "start", su: "startup", sv: "server", sw: "software", ta: "tag", tc: "tech", te: "text", tg: "target", th: "throughput", ti: "time", tl: "total", to: "to", tt: "title", ty: "type", ug: "upscaling", up: "upscale", ur: "url", us: "user", va: "variant", vd: "viewed", vi: "video", ve: "version", vw: "view", vr: "viewer", wd: "width", wa: "watch", wt: "waiting" }, S = y(E);
        }, function(T, e, R) {
          "use strict";
          T.exports = R(16).default;
        }, function(T, e, R) {
          "use strict";
          function m(_) {
            return _ && _.__esModule ? _ : { default: _ };
          }
          Object.defineProperty(e, "__esModule", { value: true });
          var y = function() {
            function _(p, o) {
              var s = [], i = true, c = false, l = void 0;
              try {
                for (var k, I = p[Symbol.iterator](); !(i = (k = I.next()).done) && (s.push(k.value), !o || s.length !== o); i = true)
                  ;
              } catch (C) {
                c = true, l = C;
              } finally {
                try {
                  !i && I.return && I.return();
                } finally {
                  if (c)
                    throw l;
                }
              }
              return s;
            }
            return function(p, o) {
              if (Array.isArray(p))
                return p;
              if (Symbol.iterator in Object(p))
                return _(p, o);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), w = R(0), A = m(w), L = R(8), b = R(4), u = m(b), g = R(9), D = m(g), E = R(1), S = m(E), d = R(19), t = m(d), r = R(45), n = m(r), h = R(46), a = m(h), f = {}, v = function _(p) {
            var o = arguments;
            typeof p == "string" ? _.hasOwnProperty(p) ? A.default.setTimeout(function() {
              o = Array.prototype.splice.call(o, 1), _[p].apply(null, o);
            }, 0) : u.default.warn("`" + p + "` is an unknown task") : typeof p == "function" ? A.default.setTimeout(function() {
              p(_);
            }, 0) : u.default.warn("`" + p + "` is invalid.");
          };
          v.loaded = S.default.now(), v.NAME = "mux-embed", v.VERSION = "4.3.0", v.API_VERSION = "2.1", v.PLAYER_TRACKED = false, v.monitor = function(_, p) {
            return (0, n.default)(v, _, p);
          }, v.destroyMonitor = function(_) {
            var p = (0, L.findMediaElement)(_), o = y(p, 1), s = o[0];
            s && s.mux && typeof s.mux.destroy == "function" ? s.mux.destroy() : u.default.error("A video element monitor for `" + _ + "` has not been initialized via `mux.monitor`.");
          }, v.addHLSJS = function(_, p) {
            var o = (0, L.getMuxPlayerId)(_);
            f[o] ? f[o].addHLSJS(p) : u.default.error("A monitor for `" + o + "` has not been initialized.");
          }, v.addDashJS = function(_, p) {
            var o = (0, L.getMuxPlayerId)(_);
            f[o] ? f[o].addDashJS(p) : u.default.error("A monitor for `" + o + "` has not been initialized.");
          }, v.removeHLSJS = function(_) {
            var p = (0, L.getMuxPlayerId)(_);
            f[p] ? f[p].removeHLSJS() : u.default.error("A monitor for `" + p + "` has not been initialized.");
          }, v.removeDashJS = function(_) {
            var p = (0, L.getMuxPlayerId)(_);
            f[p] ? f[p].removeDashJS() : u.default.error("A monitor for `" + p + "` has not been initialized.");
          }, v.init = function(_, p) {
            (0, D.default)() && p && p.respectDoNotTrack && u.default.info("The browser's Do Not Track flag is enabled - Mux beaconing is disabled.");
            var o = (0, L.getMuxPlayerId)(_);
            f[o] = new t.default(v, o, p);
          }, v.emit = function(_, p, o) {
            var s = (0, L.getMuxPlayerId)(_);
            f[s] ? (f[s].emit(p, o), p === "destroy" && delete f[s]) : u.default.error("A monitor for `" + s + "` has not been initialized.");
          }, A.default !== void 0 && typeof A.default.addEventListener == "function" && A.default.addEventListener("unload", function() {
            v.WINDOW_UNLOADING = true;
          }, false), v.checkDoNotTrack = D.default, v.log = u.default, v.utils = a.default, e.default = v;
        }, function(T, e) {
          var R;
          R = function() {
            return this;
          }();
          try {
            R = R || Function("return this")() || (0, eval)("this");
          } catch {
            typeof window == "object" && (R = window);
          }
          T.exports = R;
        }, function(T, e, R) {
          var m, y;
          (function(w, A) {
            "use strict";
            m = A, (y = typeof m == "function" ? m.call(e, R, e, T) : m) !== void 0 && (T.exports = y);
          })(0, function() {
            "use strict";
            function w(a, f) {
              var v = a[f];
              if (typeof v.bind == "function")
                return v.bind(a);
              try {
                return Function.prototype.bind.call(v, a);
              } catch {
                return function() {
                  return Function.prototype.apply.apply(v, [a, arguments]);
                };
              }
            }
            function A() {
              console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
            }
            function L(a) {
              return a === "debug" && (a = "log"), typeof console !== S && (a === "trace" && d ? A : console[a] !== void 0 ? w(console, a) : console.log !== void 0 ? w(console, "log") : E);
            }
            function b(a, f) {
              for (var v = 0; v < t.length; v++) {
                var _ = t[v];
                this[_] = v < a ? E : this.methodFactory(_, a, f);
              }
              this.log = this.debug;
            }
            function u(a, f, v) {
              return function() {
                typeof console !== S && (b.call(this, f, v), this[a].apply(this, arguments));
              };
            }
            function g(a, f, v) {
              return L(a) || u.apply(this, arguments);
            }
            function D(a, f, v) {
              function _(l) {
                var k = (t[l] || "silent").toUpperCase();
                if (typeof window !== S && i) {
                  try {
                    return void (window.localStorage[i] = k);
                  } catch {
                  }
                  try {
                    window.document.cookie = encodeURIComponent(i) + "=" + k + ";";
                  } catch {
                  }
                }
              }
              function p() {
                var l;
                if (typeof window !== S && i) {
                  try {
                    l = window.localStorage[i];
                  } catch {
                  }
                  if (typeof l === S)
                    try {
                      var k = window.document.cookie, I = k.indexOf(encodeURIComponent(i) + "=");
                      I !== -1 && (l = /^([^;]+)/.exec(k.slice(I))[1]);
                    } catch {
                    }
                  return s.levels[l] === void 0 && (l = void 0), l;
                }
              }
              var o, s = this, i = "loglevel";
              typeof a == "string" ? i += ":" + a : typeof a == "symbol" && (i = void 0), s.name = a, s.levels = { TRACE: 0, DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4, SILENT: 5 }, s.methodFactory = v || g, s.getLevel = function() {
                return o;
              }, s.setLevel = function(l, k) {
                if (typeof l == "string" && s.levels[l.toUpperCase()] !== void 0 && (l = s.levels[l.toUpperCase()]), !(typeof l == "number" && l >= 0 && l <= s.levels.SILENT))
                  throw "log.setLevel() called with invalid level: " + l;
                if (o = l, k !== false && _(l), b.call(s, l, a), typeof console === S && l < s.levels.SILENT)
                  return "No console available for logging";
              }, s.setDefaultLevel = function(l) {
                p() || s.setLevel(l, false);
              }, s.enableAll = function(l) {
                s.setLevel(s.levels.TRACE, l);
              }, s.disableAll = function(l) {
                s.setLevel(s.levels.SILENT, l);
              };
              var c = p();
              c == null && (c = f == null ? "WARN" : f), s.setLevel(c, false);
            }
            var E = function() {
            }, S = "undefined", d = typeof window !== S && typeof window.navigator !== S && /Trident\/|MSIE /.test(window.navigator.userAgent), t = ["trace", "debug", "info", "warn", "error"], r = new D(), n = {};
            r.getLogger = function(a) {
              if (typeof a != "symbol" && typeof a != "string" || a === "")
                throw new TypeError("You must supply a name when creating a logger.");
              var f = n[a];
              return f || (f = n[a] = new D(a, r.getLevel(), r.methodFactory)), f;
            };
            var h = typeof window !== S ? window.log : void 0;
            return r.noConflict = function() {
              return typeof window !== S && window.log === r && (window.log = h), r;
            }, r.getLoggers = function() {
              return n;
            }, r.default = r, r;
          });
        }, function(T, e, R) {
          "use strict";
          function m(X) {
            return X && X.__esModule ? X : { default: X };
          }
          Object.defineProperty(e, "__esModule", { value: true });
          var y = function() {
            function X(Z, Q) {
              var ut = [], ft = true, mt = false, Et = void 0;
              try {
                for (var ct, vt = Z[Symbol.iterator](); !(ft = (ct = vt.next()).done) && (ut.push(ct.value), !Q || ut.length !== Q); ft = true)
                  ;
              } catch (lt) {
                mt = true, Et = lt;
              } finally {
                try {
                  !ft && vt.return && vt.return();
                } finally {
                  if (mt)
                    throw Et;
                }
              }
              return ut;
            }
            return function(Z, Q) {
              if (Array.isArray(Z))
                return Z;
              if (Symbol.iterator in Object(Z))
                return X(Z, Q);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), w = R(4), A = m(w), L = R(2), b = m(L), u = R(6), g = R(5), D = R(0), E = m(D), S = R(10), d = m(S), t = R(3), r = m(t), n = R(20), h = R(21), a = R(22), f = m(a), v = R(23), _ = m(v), p = R(24), o = m(p), s = R(25), i = m(s), c = R(26), l = m(c), k = R(27), I = m(k), C = R(28), P = m(C), N = R(29), B = m(N), F = R(30), U = m(F), j = R(31), H = m(j), V = R(32), K = m(V), q = R(33), $ = m(q), J = R(34), z = m(J), tt = R(35), et = m(tt), at = R(44), pt = m(at), ot = ["viewstart", "ended", "loadstart", "pause", "play", "playing", "ratechange", "waiting", "adplay", "adpause", "adended", "aderror", "adplaying", "adrequest", "adresponse", "adbreakstart", "adbreakend", "adfirstquartile", "admidpoint", "adthirdquartile", "rebufferstart", "rebufferend", "seeked", "error", "hb", "requestcompleted", "requestfailed", "requestcanceled", "renditionchange"], nt = function(X, Z, Q) {
            var ut = this;
            this.DOM_CONTENT_LOADED_EVENT_END = d.default.domContentLoadedEventEnd(), this.NAVIGATION_START = d.default.navigationStart();
            var ft = { debug: false, minimumRebufferDuration: 250, sustainedRebufferThreshold: 1e3, playbackHeartbeatTime: 25, beaconDomain: "litix.io", sampleRate: 1, disableCookies: false, respectDoNotTrack: false, disableRebufferTracking: false, errorTranslator: function(lt) {
              return lt;
            } };
            this.mux = X, this.id = Z, Q = (0, b.default)(ft, Q), Q.data = Q.data || {}, Q.data.property_key && (Q.data.env_key = Q.data.property_key, delete Q.data.property_key), A.default.setLevel(Q.debug ? "debug" : "warn"), this.getPlayheadTime = Q.getPlayheadTime, this.getStateData = Q.getStateData || function() {
            }, this.getAdData = Q.getAdData || function() {
            }, this.minimumRebufferDuration = Q.minimumRebufferDuration, this.sustainedRebufferThreshold = Q.sustainedRebufferThreshold, this.playbackHeartbeatTime = Q.playbackHeartbeatTime, this.disableRebufferTracking = Q.disableRebufferTracking, this.disableRebufferTracking && this.mux.log.warn("Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering."), this.errorTranslator = Q.errorTranslator, this.playbackEventDispatcher = new et.default(X, Q.data.env_key, Q), this.data = { player_instance_id: (0, u.generateUUID)(), mux_sample_rate: Q.sampleRate, beacon_domain: Q.beaconDomain }, this.data.view_sequence_number = 1, this.data.player_sequence_number = 1, this.oldEmit = this.emit, this.emit = function(lt, dt) {
              dt = (0, b.default)({ viewer_time: this.mux.utils.now() }, dt), this.oldEmit(lt, dt);
            };
            var mt = function() {
              this.data.view_start === void 0 && (this.data.view_start = this.mux.utils.now(), this.emit("viewstart"));
            }.bind(this);
            this.on("viewinit", function(lt, dt) {
              this._resetVideoData(), this._resetViewData(), this._resetErrorData(), this._updateStateData(), (0, b.default)(this.data, dt), this._initializeViewData(), this.one("play", mt), this.one("adbreakstart", mt);
            });
            var Et = function(lt) {
              this.emit("viewend"), this.send("viewend"), this.emit("viewinit", lt);
            }.bind(this);
            this.on("videochange", function(lt, dt) {
              Et(dt);
            }), this.on("programchange", function(lt, dt) {
              this.data.player_is_paused && this.mux.log.warn("The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information."), Et((0, b.default)(dt, { view_program_changed: true })), mt(), this.emit("play"), this.emit("playing");
            }), this.on("fragmentchange", function(lt, dt) {
              this.currentFragmentPDT = dt.currentFragmentPDT, this.currentFragmentStart = dt.currentFragmentStart;
            }), this.on("destroy", this.destroy);
            var ct = this.destroy.bind(this);
            E.default !== void 0 && typeof E.default.addEventListener == "function" && E.default.addEventListener("unload", ct, false), this.on("destroy", function() {
              E.default !== void 0 && typeof E.default.removeEventListener == "function" && E.default.removeEventListener("unload", ct);
            }), this.on("playerready", function(lt, dt) {
              (0, b.default)(this.data, dt);
            }), ot.forEach(function(lt) {
              ut.on(lt, function(dt, Lt) {
                lt.indexOf("ad") !== 0 && this._updateStateData(), (0, b.default)(this.data, Lt), this._sanitizeData();
              }), ut.on("after" + lt, function() {
                (lt !== "error" || this.viewErrored) && this.send(lt);
              });
            }), this.on("viewend", function(lt, dt) {
              (0, b.default)(ut.data, dt);
            });
            var vt = function(lt) {
              var dt = this.mux.utils.now();
              this.data.player_init_time && (this.data.player_startup_time = dt - this.data.player_init_time), !this.mux.PLAYER_TRACKED && this.NAVIGATION_START && (this.mux.PLAYER_TRACKED = true, (this.data.player_init_time || this.DOM_CONTENT_LOADED_EVENT_END) && (this.data.page_load_time = Math.min(this.data.player_init_time || 1 / 0, this.DOM_CONTENT_LOADED_EVENT_END || 1 / 0) - this.NAVIGATION_START)), this.send("playerready"), delete this.data.player_startup_time, delete this.data.page_load_time;
            };
            this.one("playerready", vt), o.default.apply(this), z.default.apply(this), H.default.apply(this), I.default.apply(this), _.default.apply(this), U.default.apply(this), i.default.apply(this), l.default.apply(this), K.default.apply(this), P.default.apply(this), B.default.apply(this), $.default.apply(this), pt.default.apply(this), Q.hlsjs && this.addHLSJS(Q), Q.dashjs && this.addDashJS(Q), this.emit("viewinit", Q.data);
          };
          (0, b.default)(nt.prototype, f.default.prototype), (0, b.default)(nt.prototype, I.default.prototype), (0, b.default)(nt.prototype, H.default.prototype), (0, b.default)(nt.prototype, _.default.prototype), (0, b.default)(nt.prototype, i.default.prototype), (0, b.default)(nt.prototype, l.default.prototype), (0, b.default)(nt.prototype, K.default.prototype), (0, b.default)(nt.prototype, P.default.prototype), (0, b.default)(nt.prototype, B.default.prototype), nt.prototype.destroy = function() {
            this._destroyed || (this._destroyed = true, this.data.view_start !== void 0 && (this.emit("viewend"), this.send("viewend")), this.playbackEventDispatcher.destroy(), this.removeHLSJS(), this.removeDashJS(), E.default.clearTimeout(this._heartBeatTimeout));
          }, nt.prototype.send = function(X) {
            var Z = (0, b.default)({}, this.data);
            if (Z.player_error_code === 1 && (delete Z.player_error_code, delete Z.player_error_message), Z.player_source_duration === 1 / 0 || Z.video_source_duration === 1 / 0 ? Z.video_source_is_live = true : (Z.player_source_duration > 0 || Z.video_source_duration > 0) && (Z.video_source_is_live = false), Z.video_source_url = Z.video_source_url || Z.player_source_url, Z.video_source_url) {
              var Q = (0, g.extractHostnameAndDomain)(Z.video_source_url), ut = y(Q, 2), ft = ut[0], mt = ut[1];
              Z.video_source_domain = mt, Z.video_source_hostname = ft;
            }
            delete Z.ad_request_id, this.playbackEventDispatcher.send(X, Z), this.data.view_sequence_number++, this.data.player_sequence_number++, this._restartHeartBeat();
          }, nt.prototype._updateStateData = function() {
            (0, b.default)(this.data, this.getStateData()), this._updatePlayheadTime(), this._sanitizeData();
          }, nt.prototype._sanitizeData = function() {
            var X = this;
            ["player_width", "player_height", "video_source_width", "video_source_height", "player_playhead_time", "video_source_bitrate"].forEach(function(Z) {
              var Q = parseInt(X.data[Z], 10);
              X.data[Z] = isNaN(Q) ? void 0 : Q;
            }), ["player_source_url", "video_source_url"].forEach(function(Z) {
              if (X.data[Z]) {
                var Q = X.data[Z].toLowerCase();
                Q.indexOf("data:") !== 0 && Q.indexOf("blob:") !== 0 || (X.data[Z] = "MSE style URL");
              }
            });
          }, nt.prototype._resetVideoData = function(X, Z) {
            var Q = this;
            Object.keys(this.data).forEach(function(ut) {
              ut.indexOf("video_") === 0 && delete Q.data[ut];
            });
          }, nt.prototype._resetViewData = function() {
            var X = this;
            Object.keys(this.data).forEach(function(Z) {
              Z.indexOf("view_") === 0 && delete X.data[Z];
            }), this.data.view_sequence_number = 1;
          }, nt.prototype._resetErrorData = function(X, Z) {
            delete this.data.player_error_code, delete this.data.player_error_message;
          }, nt.prototype._initializeViewData = function() {
            var X = this, Z = this.data.view_id = (0, u.generateUUID)(), Q = function() {
              Z === X.data.view_id && (0, r.default)(X.data, "player_view_count", 1);
            };
            this.data.player_is_paused ? this.one("play", Q) : Q();
          }, nt.prototype._restartHeartBeat = function() {
            var X = this;
            E.default.clearTimeout(this._heartBeatTimeout), this.viewErrored || (this._heartBeatTimeout = E.default.setTimeout(function() {
              X.data.player_is_paused || X.emit("hb");
            }, 1e4));
          }, nt.prototype.addHLSJS = function(X) {
            return X.hlsjs ? this.hlsjs ? void this.mux.log.warn("An instance of HLS.js is already being monitored for this player.") : (this.hlsjs = X.hlsjs, void (0, n.monitorHlsJs)(this.mux, this.id, X.hlsjs, {}, X.Hls || E.default.Hls)) : void this.mux.log.warn("You must pass a valid hlsjs instance in order to track it.");
          }, nt.prototype.removeHLSJS = function() {
            this.hlsjs && ((0, n.stopMonitoringHlsJs)(this.hlsjs), this.hlsjs = void 0);
          }, nt.prototype.addDashJS = function(X) {
            return X.dashjs ? this.dashjs ? void this.mux.log.warn("An instance of Dash.js is already being monitored for this player.") : (this.dashjs = X.dashjs, void (0, h.monitorDashJS)(this.mux, this.id, X.dashjs)) : void this.mux.log.warn("You must pass a valid dashjs instance in order to track it.");
          }, nt.prototype.removeDashJS = function() {
            this.dashjs && ((0, h.stopMonitoringDashJS)(this.dashjs), this.dashjs = void 0);
          }, e.default = nt;
        }, function(T, e, R) {
          "use strict";
          function m(S) {
            return S && S.__esModule ? S : { default: S };
          }
          Object.defineProperty(e, "__esModule", { value: true }), e.stopMonitoringHlsJs = e.monitorHlsJs = void 0;
          var y = R(7), w = m(y), A = R(10), L = m(A), b = R(5), u = function(S) {
            if (!S)
              return {};
            var d = L.default.navigationStart(), t = S.loading, r = t ? t.start : S.trequest, n = t ? t.first : S.tfirst, h = t ? t.end : S.tload;
            return { bytesLoaded: S.total, requestStart: Math.round(d + r), responseStart: Math.round(d + n), responseEnd: Math.round(d + h) };
          }, g = function(S) {
            if (S && typeof S.getAllResponseHeaders == "function")
              return (0, w.default)(S.getAllResponseHeaders());
          }, D = function(S, d, t) {
            var r = (arguments.length > 3 && arguments[3] !== void 0 && arguments[3], arguments[4]), n = S.log, h = S.utils.secondsToMs, a = function(k) {
              var I = parseInt(r.version), C = void 0;
              return I === 1 && k.programDateTime !== null && (C = k.programDateTime), I === 0 && k.pdt !== null && (C = k.pdt), C;
            };
            if (!L.default.exists())
              return void n.warn("performance timing not supported. Not tracking HLS.js.");
            var f = function(k, I) {
              return S.emit(d, k, I);
            }, v = function(k, I) {
              var C = I.levels, P = I.audioTracks, N = I.url, B = I.stats, F = I.networkDetails, U = {}, j = {};
              C.forEach(function(J, z) {
                U[z] = { width: J.width, height: J.height, bitrate: J.bitrate, attrs: J.attrs };
              }), P.forEach(function(J, z) {
                j[z] = { name: J.name, language: J.lang, bitrate: J.bitrate };
              });
              var H = u(B), V = H.bytesLoaded, K = H.requestStart, q = H.responseStart, $ = H.responseEnd;
              f("requestcompleted", { request_event_type: k, request_bytes_loaded: V, request_start: K, request_response_start: q, request_response_end: $, request_type: "manifest", request_hostname: (0, b.extractHostname)(N), request_response_headers: g(F), request_rendition_lists: { media: U, audio: j, video: {} } });
            };
            t.on(r.Events.MANIFEST_LOADED, v);
            var _ = function(k, I) {
              var C = I.details, P = I.level, N = I.networkDetails, B = I.stats, F = u(B), U = F.bytesLoaded, j = F.requestStart, H = F.responseStart, V = F.responseEnd, K = C.fragments[C.fragments.length - 1], q = a(K) + h(K.duration);
              f("requestcompleted", { request_event_type: k, request_bytes_loaded: U, request_start: j, request_response_start: H, request_response_end: V, request_current_level: P, request_type: "manifest", request_hostname: (0, b.extractHostname)(C.url), request_response_headers: g(N), video_holdback: C.holdBack && h(C.holdBack), video_part_holdback: C.partHoldBack && h(C.partHoldBack), video_part_target_duration: C.partTarget && h(C.partTarget), video_target_duration: C.targetduration && h(C.targetduration), player_manifest_newest_program_time: isNaN(q) ? void 0 : q });
            };
            t.on(r.Events.LEVEL_LOADED, _);
            var p = function(k, I) {
              var C = I.details, P = I.networkDetails, N = I.stats, B = u(N), F = B.bytesLoaded, U = B.requestStart, j = B.responseStart, H = B.responseEnd;
              f("requestcompleted", { request_event_type: k, request_bytes_loaded: F, request_start: U, request_response_start: j, request_response_end: H, request_type: "manifest", request_hostname: (0, b.extractHostname)(C.url), request_response_headers: g(P) });
            };
            t.on(r.Events.AUDIO_TRACK_LOADED, p);
            var o = function(k, I) {
              var C = I.stats, P = I.networkDetails, N = I.frag, B = u(C), F = B.bytesLoaded, U = B.requestStart, j = B.responseStart, H = B.responseEnd, V = { request_event_type: k, request_bytes_loaded: F, request_start: U, request_response_start: j, request_response_end: H, request_hostname: P ? (0, b.extractHostname)(P.responseURL) : void 0, request_response_headers: g(P), request_media_duration: N.duration };
              N.type === "main" ? (V.request_type = "media", V.request_current_level = N.level, V.request_video_width = (t.levels[N.level] || {}).width, V.request_video_height = (t.levels[N.level] || {}).height) : V.request_type = N.type, f("requestcompleted", V);
            };
            t.on(r.Events.FRAG_LOADED, o);
            var s = function(k, I) {
              var C = I.frag, P = C.start, N = a(C), B = { currentFragmentPDT: N, currentFragmentStart: h(P) };
              f("fragmentchange", B);
            };
            t.on(r.Events.FRAG_CHANGED, s);
            var i = function(k, I) {
              var C = I.details, P = I.response, N = I.context, B = I.frag;
              if (C === r.ErrorDetails.MANIFEST_LOAD_ERROR || C === r.ErrorDetails.MANIFEST_LOAD_TIMEOUT || C === r.ErrorDetails.FRAG_LOAD_ERROR || C === r.ErrorDetails.FRAG_LOAD_TIMEOUT || C === r.ErrorDetails.LEVEL_LOAD_ERROR || C === r.ErrorDetails.LEVEL_LOAD_TIMEOUT) {
                var F = B && B.url || N && N.url || "";
                f("requestfailed", { request_error: C, request_url: F, request_hostname: (0, b.extractHostname)(F), request_type: C === r.ErrorDetails.FRAG_LOAD_ERROR || C === r.ErrorDetails.FRAG_LOAD_TIMEOUT ? "media" : "manifest", request_error_code: P && P.code, request_error_text: P && P.text });
              }
            };
            t.on(r.Events.ERROR, i);
            var c = function(k, I) {
              var C = I.frag, P = C && C._url || "";
              f("requestcanceled", { request_cancel: k, request_url: P, request_type: "media", request_hostname: (0, b.extractHostname)(P) });
            };
            t.on(r.Events.FRAG_LOAD_EMERGENCY_ABORTED, c);
            var l = function(k, I) {
              var C = I.level, P = t.levels[C];
              if (P && P.attrs && P.attrs.BANDWIDTH) {
                var N = P.attrs.BANDWIDTH;
                N ? f("renditionchange", { video_source_bitrate: N, video_source_width: P.width, video_source_height: P.height }) : n.warn("missing BANDWIDTH from HLS manifest parsed by HLS.js");
              }
            };
            t.on(r.Events.LEVEL_SWITCHED, l), t._stopMuxMonitor = function() {
              t.off(r.Events.MANIFEST_LOADED, v), t.off(r.Events.LEVEL_LOADED, _), t.off(r.Events.AUDIO_TRACK_LOADED, p), t.off(r.Events.FRAG_LOADED, o), t.off(r.Events.FRAG_CHANGED, s), t.off(r.Events.ERROR, i), t.off(r.Events.FRAG_LOAD_EMERGENCY_ABORTED, c), t.off(r.Events.LEVEL_SWITCHED, l), t.off(r.Events.DESTROYING, t._stopMuxMonitor), delete t._stopMuxMonitor;
            }, t.on(r.Events.DESTROYING, t._stopMuxMonitor);
          }, E = function(S) {
            S && typeof S._stopMuxMonitor == "function" && S._stopMuxMonitor();
          };
          e.monitorHlsJs = D, e.stopMonitoringHlsJs = E;
        }, function(T, e, R) {
          "use strict";
          function m(S) {
            return S && S.__esModule ? S : { default: S };
          }
          Object.defineProperty(e, "__esModule", { value: true }), e.stopMonitoringDashJS = e.monitorDashJS = void 0;
          var y = R(0), w = m(y), A = R(7), L = m(A), b = R(5), u = function(S, d) {
            if (!S || typeof S.getRequests != "function")
              return {};
            var t = S.getRequests({ state: "executed" });
            if (t.length === 0)
              return {};
            var r = t[t.length - 1], n = (0, b.extractHostname)(r.url), h = r.bytesLoaded, a = new Date(r.requestStartDate).getTime(), f = new Date(r.firstByteDate).getTime(), v = new Date(r.requestEndDate).getTime(), _ = isNaN(r.duration) ? 0 : r.duration, p = typeof d.getMetricsFor == "function" ? d.getMetricsFor(r.mediaType).HttpList : d.getDashMetrics().getHttpRequests(r.mediaType), o = void 0;
            return p.length > 0 && (o = (0, L.default)(p[p.length - 1]._responseHeaders || "")), { requestStart: a, requestResponseStart: f, requestResponseEnd: v, requestBytesLoaded: h, requestResponseHeaders: o, requestMediaDuration: _, requestHostname: n };
          }, g = function(S, d) {
            var t = d.getQualityFor(S), r = d.getCurrentTrackFor(S), n = r.bitrateList;
            return n ? { currentLevel: t, renditionWidth: n[t].width || null, renditionHeight: n[t].height || null, renditionBitrate: n[t].bandwidth } : {};
          }, D = function(S, d, t) {
            var r = (arguments.length > 3 && arguments[3] !== void 0 && arguments[3], S.log);
            if (!t || !t.on)
              return void r.warn("Invalid dash.js player reference. Monitoring blocked.");
            var n = function(i, c) {
              return S.emit(d, i, c);
            }, h = function(i) {
              var c = i.type, l = i.data, k = l || {}, I = k.url;
              n("requestcompleted", { request_event_type: c, request_start: 0, request_response_start: 0, request_response_end: 0, request_bytes_loaded: -1, request_type: "manifest", request_hostname: (0, b.extractHostname)(I) });
            };
            t.on("manifestLoaded", h);
            var a = {}, f = function(i) {
              var c = i.type, l = i.fragmentModel, k = i.chunk, I = k || {}, C = I.mediaInfo, P = C || {}, N = P.type, B = P.bitrateList;
              B = B || [];
              var F = {};
              B.forEach(function(J, z) {
                F[z] = {}, F[z].width = J.width, F[z].height = J.height, F[z].bitrate = J.bandwidth, F[z].attrs = {};
              }), N === "video" ? a.video = F : N === "audio" ? a.audio = F : a.media = F;
              var U = u(l, t), j = U.requestStart, H = U.requestResponseStart, V = U.requestResponseEnd, K = U.requestResponseHeaders, q = U.requestMediaDuration, $ = U.requestHostname;
              n("requestcompleted", { request_event_type: c, request_start: j, request_response_start: H, request_response_end: V, request_bytes_loaded: -1, request_type: N + "_init", request_response_headers: K, request_hostname: $, request_media_duration: q, request_rendition_lists: a });
            };
            t.on("initFragmentLoaded", f);
            var v = function(i) {
              var c = i.type, l = i.fragmentModel, k = i.chunk, I = k || {}, C = I.mediaInfo, P = I.start, N = C || {}, B = N.type, F = u(l, t), U = F.requestStart, j = F.requestResponseStart, H = F.requestResponseEnd, V = F.requestBytesLoaded, K = F.requestResponseHeaders, q = F.requestMediaDuration, $ = F.requestHostname, J = g(B, t), z = J.currentLevel, tt = J.renditionWidth, et = J.renditionHeight, at = J.renditionBitrate;
              n("requestcompleted", { request_event_type: c, request_start: U, request_response_start: j, request_response_end: H, request_bytes_loaded: V, request_type: B, request_response_headers: K, request_hostname: $, request_media_start_time: P, request_media_duration: q, request_current_level: z, request_labeled_bitrate: at, request_video_width: tt, request_video_height: et });
            };
            t.on("mediaFragmentLoaded", v);
            var _ = { video: void 0, audio: void 0, totalBitrate: void 0 }, p = function() {
              if (_.video && typeof _.video.bitrate == "number") {
                if (!_.video.width || !_.video.height)
                  return void r.warn("have bitrate info for video but missing width/height");
                var i = _.video.bitrate;
                return _.audio && typeof _.audio.bitrate == "number" && (i += _.audio.bitrate), i !== _.totalBitrate ? (_.totalBitrate = i, { video_source_bitrate: i, video_source_height: _.video.height, video_source_width: _.video.width }) : void 0;
              }
            }, o = function(i, c, l) {
              if (typeof i.newQuality != "number")
                return void r.warn("missing evt.newQuality in qualityChangeRendered event", i);
              var k = i.mediaType;
              if (k === "audio" || k === "video") {
                var I = t.getBitrateInfoListFor(k).find(function(P) {
                  return P.qualityIndex === i.newQuality;
                });
                if (!I || typeof I.bitrate != "number")
                  return void r.warn("missing bitrate info for " + k);
                _[k] = I;
                var C = p();
                C && n("renditionchange", C);
              }
            };
            t.on("qualityChangeRendered", o);
            var s = function(i) {
              var c = i.error, l = i.event;
              l = l || {};
              var k = l.request || {}, I = w.default.event && w.default.event.currentTarget || {};
              n("requestfailed", { request_error: c + "_" + l.id + "_" + k.type, request_url: l.url, request_hostname: (0, b.extractHostname)(l.url), request_type: k.mediaType, request_error_code: I.status, request_error_type: I.statusText });
            };
            t.on("error", s), t._stopMuxMonitor = function() {
              t.off("manifestLoaded", h), t.off("initFragmentLoaded", f), t.off("mediaFragmentLoaded", v), t.off("qualityChangeRendered", o), t.off("error", s), delete t._stopMuxMonitor;
            };
          }, E = function(S) {
            S && typeof S._stopMuxMonitor == "function" && S._stopMuxMonitor();
          };
          e.monitorDashJS = D, e.stopMonitoringDashJS = E;
        }, function(T, e, R) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true });
          var m = function() {
          }, y = 0;
          m.prototype.on = function(w, A, L) {
            return A._eventEmitterGuid = A._eventEmitterGuid || ++y, this._listeners = this._listeners || {}, this._listeners[w] = this._listeners[w] || [], L && (A = A.bind(L)), this._listeners[w].push(A), A;
          }, m.prototype.off = function(w, A) {
            var L = this._listeners && this._listeners[w];
            L && L.forEach(function(b, u) {
              b._eventEmitterGuid === A._eventEmitterGuid && L.splice(u, 1);
            });
          }, m.prototype.one = function(w, A, L) {
            var b = this;
            A._eventEmitterGuid = A._eventEmitterGuid || ++y;
            var u = function g() {
              b.off(w, g), A.apply(L || this, arguments);
            };
            u._eventEmitterGuid = A._eventEmitterGuid, this.on(w, u);
          }, m.prototype.emit = function(w, A) {
            var L = this;
            if (this._listeners) {
              A = A || {};
              var b = this._listeners["before*"] || [], u = this._listeners[w] || [], g = this._listeners["after" + w] || [], D = function(E, S) {
                E = E.slice(), E.forEach(function(d) {
                  d.call(L, { type: w }, S);
                });
              };
              D(b, A), D(u, A), D(g, A);
            }
          }, e.default = m;
        }, function(T, e, R) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true });
          var m = R(0), y = function(A) {
            return A && A.__esModule ? A : { default: A };
          }(m), w = function() {
            this._playbackHeartbeatInterval = null, this._playheadShouldBeProgressing = false, this.on("playing", function() {
              this._playheadShouldBeProgressing = true;
            }), this.on("play", this._startPlaybackHeartbeatInterval), this.on("playing", this._startPlaybackHeartbeatInterval), this.on("adbreakstart", this._startPlaybackHeartbeatInterval), this.on("adplay", this._startPlaybackHeartbeatInterval), this.on("adplaying", this._startPlaybackHeartbeatInterval), this.on("seeking", this._startPlaybackHeartbeatInterval), this.on("devicewake", this._startPlaybackHeartbeatInterval), this.on("viewstart", this._startPlaybackHeartbeatInterval), this.on("pause", this._stopPlaybackHeartbeatInterval), this.on("ended", this._stopPlaybackHeartbeatInterval), this.on("viewend", this._stopPlaybackHeartbeatInterval), this.on("error", this._stopPlaybackHeartbeatInterval), this.on("aderror", this._stopPlaybackHeartbeatInterval), this.on("adpause", this._stopPlaybackHeartbeatInterval), this.on("adended", this._stopPlaybackHeartbeatInterval), this.on("adbreakend", this._stopPlaybackHeartbeatInterval), this.on("seeked", function() {
              this.data.player_is_paused ? this._stopPlaybackHeartbeatInterval() : this._startPlaybackHeartbeatInterval();
            }), this.on("timeupdate", function() {
              this._playbackHeartbeatInterval !== null && this.emit("playbackheartbeat");
            }), this.on("devicesleep", function(A, L) {
              this._playbackHeartbeatInterval !== null && (y.default.clearInterval(this._playbackHeartbeatInterval), this.emit("playbackheartbeatend", { viewer_time: L.viewer_time }), this._playbackHeartbeatInterval = null);
            });
          };
          w.prototype._startPlaybackHeartbeatInterval = function() {
            var A = this;
            this._playbackHeartbeatInterval === null && (this.emit("playbackheartbeat"), this._playbackHeartbeatInterval = y.default.setInterval(function() {
              A.emit("playbackheartbeat");
            }, this.playbackHeartbeatTime));
          }, w.prototype._stopPlaybackHeartbeatInterval = function() {
            this._playheadShouldBeProgressing = false, this._playbackHeartbeatInterval !== null && (y.default.clearInterval(this._playbackHeartbeatInterval), this.emit("playbackheartbeatend"), this._playbackHeartbeatInterval = null);
          }, e.default = w;
        }, function(T, e, R) {
          "use strict";
          function m() {
            var y = this;
            this.on("viewinit", function() {
              y.viewErrored = false;
            }), this.on("error", function() {
              try {
                var w = y.errorTranslator({ player_error_code: y.data.player_error_code, player_error_message: y.data.player_error_message });
                w ? (y.data.player_error_code = w.player_error_code, y.data.player_error_message = w.player_error_message, y.viewErrored = true) : (delete y.data.player_error_code, delete y.data.player_error_message);
              } catch (A) {
                y.mux.log.warn("Exception in error translator callback.", A), y.viewErrored = true;
              }
            });
          }
          Object.defineProperty(e, "__esModule", { value: true }), e.default = m;
        }, function(T, e, R) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true });
          var m = R(3), y = function(A) {
            return A && A.__esModule ? A : { default: A };
          }(m), w = function() {
            this._watchTimeTrackerLastCheckedTime = null, this.on("playbackheartbeat", this._updateWatchTime), this.on("playbackheartbeatend", this._clearWatchTimeState);
          };
          w.prototype._updateWatchTime = function(A, L) {
            var b = L.viewer_time;
            this._watchTimeTrackerLastCheckedTime === null && (this._watchTimeTrackerLastCheckedTime = b), (0, y.default)(this.data, "view_watch_time", b - this._watchTimeTrackerLastCheckedTime), this._watchTimeTrackerLastCheckedTime = b;
          }, w.prototype._clearWatchTimeState = function(A, L) {
            this._updateWatchTime(A, L), this._watchTimeTrackerLastCheckedTime = null;
          }, e.default = w;
        }, function(T, e, R) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true });
          var m = R(3), y = function(A) {
            return A && A.__esModule ? A : { default: A };
          }(m), w = function() {
            this._playbackTimeTrackerLastPlayheadPosition = -1, this.on("playbackheartbeat", this._updatePlaybackTime), this.on("playbackheartbeatend", this._clearPlaybackTimeState), this.on("seeking", this._clearPlaybackTimeState);
          };
          w.prototype._updatePlaybackTime = function() {
            var A = this.data.player_playhead_time;
            if (this._playbackTimeTrackerLastPlayheadPosition >= 0 && A > this._playbackTimeTrackerLastPlayheadPosition) {
              var L = A - this._playbackTimeTrackerLastPlayheadPosition;
              L <= 1e3 && (0, y.default)(this.data, "view_content_playback_time", L);
            }
            this._playbackTimeTrackerLastPlayheadPosition = A;
          }, w.prototype._clearPlaybackTimeState = function() {
            this._updatePlaybackTime(), this._playbackTimeTrackerLastPlayheadPosition = -1;
          }, e.default = w;
        }, function(T, e, R) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true });
          var m = function() {
            this.on("playbackheartbeat", this._updatePlayheadTime), this.on("playbackheartbeatend", this._updatePlayheadTime), this.on("timeupdate", this._updatePlayheadTime), this.on("destroy", function() {
              this.off("timeupdate", this._updatePlayheadTime);
            });
          };
          m.prototype._updateMaxPlayheadPosition = function() {
            this.data.view_max_playhead_position = this.data.view_max_playhead_position === void 0 ? this.data.player_playhead_time : Math.max(this.data.view_max_playhead_position, this.data.player_playhead_time);
          }, m.prototype._updatePlayheadTime = function(y, w) {
            if (w && w.player_playhead_time)
              this.data.player_playhead_time = w.player_playhead_time, this.data.player_program_time = this.currentFragmentPDT && this.currentFragmentStart ? this.currentFragmentPDT + w.player_playhead_time - this.currentFragmentStart : void 0, this._updateMaxPlayheadPosition();
            else if (this.getPlayheadTime) {
              var A = this.getPlayheadTime();
              A !== void 0 && (this.data.player_playhead_time = A, this.data.player_program_time = this.currentFragmentPDT && this.currentFragmentStart ? this.currentFragmentPDT + A - this.currentFragmentStart : void 0, this._updateMaxPlayheadPosition());
            }
          }, e.default = m;
        }, function(T, e, R) {
          "use strict";
          function m(u) {
            return u && u.__esModule ? u : { default: u };
          }
          Object.defineProperty(e, "__esModule", { value: true });
          var y = R(1), w = m(y), A = R(3), L = m(A), b = function() {
            this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null, this.on("playbackheartbeat", this._checkIfRebuffering), this.on("playbackheartbeatend", this._cleanupRebufferTracker), this.on("seeking", function() {
              this._cleanupRebufferTracker(null, { viewer_time: w.default.now() });
            });
          };
          b.prototype._checkIfRebuffering = function(u, g) {
            if (!this.disableRebufferTracking) {
              if (this.isSeeking || this.isAdBreak || !this._playheadShouldBeProgressing)
                return void this._cleanupRebufferTracker(u, g);
              if (this._lastCheckedTime === null)
                return this._prepareRebufferTrackerState(g.viewer_time), void this._updateRebufferMetrics();
              if (this._lastPlayheadTime !== this.data.player_playhead_time)
                return void this._cleanupRebufferTracker(u, g, true);
              var D = g.viewer_time - this._lastPlayheadTimeUpdatedTime;
              D >= this.sustainedRebufferThreshold && (this._rebuffering ? this._updateRebufferMetrics(g.viewer_time - this._lastCheckedTime) : (this._rebuffering = true, (0, L.default)(this.data, "view_rebuffer_count", 1), this._updateRebufferMetrics(D), this.emit("rebufferstart"))), this._lastCheckedTime = g.viewer_time;
            }
          }, b.prototype._clearRebufferTrackerState = function() {
            this._lastCheckedTime = null, this._lastPlayheadTime = null, this._lastPlayheadTimeUpdatedTime = null;
          }, b.prototype._prepareRebufferTrackerState = function(u) {
            this._lastCheckedTime = u, this._lastPlayheadTime = this.data.player_playhead_time, this._lastPlayheadTimeUpdatedTime = u;
          }, b.prototype._cleanupRebufferTracker = function(u, g) {
            var D = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
            if (!this.disableRebufferTracking) {
              if (this._rebuffering)
                this._rebuffering = false, this._updateRebufferMetrics(g.viewer_time - this._lastCheckedTime), this.emit("rebufferend", { viewer_time: g.viewer_time });
              else {
                if (this._lastCheckedTime === null)
                  return void this._updateRebufferMetrics();
                var E = this.data.player_playhead_time - this._lastPlayheadTime, S = g.viewer_time - this._lastPlayheadTimeUpdatedTime;
                E > 0 && S - E > this.minimumRebufferDuration ? ((0, L.default)(this.data, "view_rebuffer_count", 1), this._updateRebufferMetrics(S - E), this.emit("rebufferstart", { viewer_time: this._lastPlayheadTimeUpdatedTime }), this.emit("rebufferend", { viewer_time: this._lastPlayheadTimeUpdatedTime + S - E })) : this._updateRebufferMetrics();
              }
              D ? this._prepareRebufferTrackerState(g.viewer_time) : this._clearRebufferTrackerState();
            }
          }, b.prototype._updateRebufferMetrics = function(u) {
            u > 0 && (0, L.default)(this.data, "view_rebuffer_duration", u), this.data.view_watch_time >= 0 && this.data.view_rebuffer_count > 0 && (this.data.view_rebuffer_frequency = this.data.view_rebuffer_count / this.data.view_watch_time, this.data.view_rebuffer_percentage = this.data.view_rebuffer_duration / this.data.view_watch_time);
          }, e.default = b;
        }, function(T, e, R) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true });
          var m = R(1), y = function(A) {
            return A && A.__esModule ? A : { default: A };
          }(m), w = function() {
            this.on("viewinit", function() {
              var A = this.data, L = A.view_id;
              if (!A.view_program_changed) {
                var b = function(u, g) {
                  var D = g.viewer_time;
                  u.type === "playing" && this.data.view_time_to_first_frame === void 0 ? this.calculateTimeToFirstFrame(D || y.default.now(), L) : u.type !== "adplaying" || this.data.view_time_to_first_frame !== void 0 && !this.inPrerollPosition() || this.calculateTimeToFirstFrame(D || y.default.now(), L);
                };
                this.one("playing", b), this.one("adplaying", b), this.one("viewend", function() {
                  this.off("playing", b), this.off("adplaying", b);
                });
              }
            });
          };
          w.prototype.calculateTimeToFirstFrame = function(A, L) {
            L === this.data.view_id && (this._updateWatchTime(null, { viewer_time: A }), this.data.view_time_to_first_frame = this.data.view_watch_time, (this.data.player_autoplay_on || this.data.video_is_autoplay) && this.NAVIGATION_START && (this.data.view_aggregate_startup_time = this.data.view_start + this.data.view_watch_time - this.NAVIGATION_START));
          }, e.default = w;
        }, function(T, e, R) {
          "use strict";
          function m() {
            var A = this;
            this.on("viewinit", function() {
              this._lastPlayheadPosition = -1;
            });
            var L = ["pause", "rebufferstart", "seeking", "error", "adbreakstart", "hb"], b = ["playing", "hb"];
            L.forEach(function(u) {
              A.on(u, function() {
                if (this._lastPlayheadPosition >= 0 && this.data.player_playhead_time >= 0 && this._lastPlayerWidth >= 0 && this._lastSourceWidth > 0 && this._lastPlayerHeight >= 0 && this._lastSourceHeight > 0) {
                  var g = this.data.player_playhead_time - this._lastPlayheadPosition;
                  if (g < 0)
                    return void (this._lastPlayheadPosition = -1);
                  var D = Math.min(this._lastPlayerWidth / this._lastSourceWidth, this._lastPlayerHeight / this._lastSourceHeight), E = Math.max(0, D - 1), S = Math.max(0, 1 - D);
                  this.data.view_max_upscale_percentage = Math.max(this.data.view_max_upscale_percentage || 0, E), this.data.view_max_downscale_percentage = Math.max(this.data.view_max_downscale_percentage || 0, S), (0, w.default)(this.data, "view_total_content_playback_time", g), (0, w.default)(this.data, "view_total_upscaling", E * g), (0, w.default)(this.data, "view_total_downscaling", S * g);
                }
                this._lastPlayheadPosition = -1;
              });
            }), b.forEach(function(u) {
              A.on(u, function() {
                this._lastPlayheadPosition = this.data.player_playhead_time, this._lastPlayerWidth = this.data.player_width, this._lastPlayerHeight = this.data.player_height, this._lastSourceWidth = this.data.video_source_width, this._lastSourceHeight = this.data.video_source_height;
              });
            });
          }
          Object.defineProperty(e, "__esModule", { value: true }), e.default = m;
          var y = R(3), w = function(A) {
            return A && A.__esModule ? A : { default: A };
          }(y);
        }, function(T, e, R) {
          "use strict";
          function m(D) {
            return D && D.__esModule ? D : { default: D };
          }
          function y() {
            this.isSeeking = false, this.on("seeking", function(D, E) {
              (0, g.default)(this.data, E), this._lastSeekingTime = A.default.now(), this.isSeeking === false && (this.isSeeking = true, this.send("seeking"));
            }), this.on("seeked", function() {
              this.isSeeking = false;
              var D = this._lastSeekingTime || A.default.now(), E = A.default.now() - D;
              (0, b.default)(this.data, "view_seek_count", 1), (0, b.default)(this.data, "view_seek_duration", E);
              var S = this.data.view_max_seek_time || 0;
              this.data.view_max_seek_time = Math.max(S, E);
            }), this.on("viewend", function() {
              this.isSeeking = false;
            });
          }
          Object.defineProperty(e, "__esModule", { value: true }), e.default = y;
          var w = R(1), A = m(w), L = R(3), b = m(L), u = R(2), g = m(u);
        }, function(T, e, R) {
          "use strict";
          function m(S) {
            return S && S.__esModule ? S : { default: S };
          }
          Object.defineProperty(e, "__esModule", { value: true });
          var y = function() {
            function S(d, t) {
              var r = [], n = true, h = false, a = void 0;
              try {
                for (var f, v = d[Symbol.iterator](); !(n = (f = v.next()).done) && (r.push(f.value), !t || r.length !== t); n = true)
                  ;
              } catch (_) {
                h = true, a = _;
              } finally {
                try {
                  !n && v.return && v.return();
                } finally {
                  if (h)
                    throw a;
                }
              }
              return r;
            }
            return function(d, t) {
              if (Array.isArray(d))
                return d;
              if (Symbol.iterator in Object(d))
                return S(d, t);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }(), w = R(3), A = m(w), L = R(5), b = R(2), u = m(b), g = function(S, d) {
            S.push(d), S.sort(function(t, r) {
              return t.viewer_time - r.viewer_time;
            });
          }, D = ["adbreakstart", "adrequest", "adresponse", "adplay", "adplaying", "adpause", "adended", "adbreakend", "aderror"], E = function() {
            var S = this;
            this.on("viewinit", function() {
              this.isAdBreak = false, this._currentAdRequestNumber = 0, this._currentAdResponseNumber = 0, this._adRequests = [], this._adResponses = [], this._adHasPlayed = false, this._wouldBeNewAdPlay = true, this._prerollPlayTime = void 0;
            }), D.forEach(function(t) {
              return S.on(t, S._updateAdData);
            });
            var d = function() {
              S.isAdBreak = false;
            };
            this.on("adbreakstart", function() {
              this.isAdBreak = true;
            }), this.on("play", d), this.on("playing", d), this.on("viewend", d), this.on("adrequest", function(t, r) {
              r = (0, u.default)({ ad_request_id: "generatedAdRequestId" + this._currentAdRequestNumber++ }, r), g(this._adRequests, r), (0, A.default)(this.data, "view_ad_request_count"), this.inPrerollPosition() && (this.data.view_preroll_requested = true, this._adHasPlayed || (0, A.default)(this.data, "view_preroll_request_count"));
            }), this.on("adresponse", function(t, r) {
              r = (0, u.default)({ ad_request_id: "generatedAdRequestId" + this._currentAdResponseNumber++ }, r), g(this._adResponses, r);
              var n = this.findAdRequest(r.ad_request_id);
              n && (0, A.default)(this.data, "view_ad_request_time", Math.max(0, r.viewer_time - n.viewer_time));
            }), this.on("adplay", function(t, r) {
              this._adHasPlayed = true, this._wouldBeNewAdPlay && (this._wouldBeNewAdPlay = false, (0, A.default)(this.data, "view_ad_played_count")), this.inPrerollPosition() && !this.data.view_preroll_played && (this.data.view_preroll_played = true, this._adRequests.length > 0 && (this.data.view_preroll_request_time = Math.max(0, r.viewer_time - this._adRequests[0].viewer_time)), this.data.view_start && (this.data.view_startup_preroll_request_time = Math.max(0, r.viewer_time - this.data.view_start)), this._prerollPlayTime = r.viewer_time);
            }), this.on("adplaying", function(t, r) {
              this.inPrerollPosition() && this.data.view_preroll_load_time === void 0 && this._prerollPlayTime !== void 0 && (this.data.view_preroll_load_time = r.viewer_time - this._prerollPlayTime, this.data.view_startup_preroll_load_time = r.viewer_time - this._prerollPlayTime);
            }), this.on("adended", function() {
              this._wouldBeNewAdPlay = true;
            }), this.on("aderror", function() {
              this._wouldBeNewAdPlay = true;
            });
          };
          E.prototype.inPrerollPosition = function() {
            return this.data.view_content_playback_time === void 0 || this.data.view_content_playback_time <= 1e3;
          }, E.prototype.findAdRequest = function(S) {
            for (var d = 0; d < this._adRequests.length; d++)
              if (this._adRequests[d].ad_request_id === S)
                return this._adRequests[d];
          }, E.prototype._updateAdData = function(S, d) {
            if (this.inPrerollPosition()) {
              if (!this.data.view_preroll_ad_tag_hostname && d.ad_tag_url) {
                var t = (0, L.extractHostnameAndDomain)(d.ad_tag_url), r = y(t, 2), n = r[0], h = r[1];
                this.data.view_preroll_ad_tag_domain = h, this.data.view_preroll_ad_tag_hostname = n;
              }
              if (!this.data.view_preroll_ad_asset_hostname && d.ad_asset_url) {
                var a = (0, L.extractHostnameAndDomain)(d.ad_asset_url), f = y(a, 2), v = f[0], _ = f[1];
                this.data.view_preroll_ad_asset_domain = _, this.data.view_preroll_ad_asset_hostname = v;
              }
            }
          }, e.default = E;
        }, function(T, e, R) {
          "use strict";
          function m(u) {
            return u && u.__esModule ? u : { default: u };
          }
          function y() {
            var u = this, g = void 0, D = void 0, E = function() {
              u.disableRebufferTracking || ((0, b.default)(u.data, "view_waiting_rebuffer_count", 1), g = A.default.now(), D = window.setInterval(function() {
                if (g) {
                  var n = A.default.now();
                  (0, b.default)(u.data, "view_waiting_rebuffer_duration", n - g), g = n;
                }
              }, 250));
            }, S = function() {
              u.disableRebufferTracking || g && ((0, b.default)(u.data, "view_waiting_rebuffer_duration", A.default.now() - g), g = false, window.clearInterval(D));
            }, d = false, t = function() {
              d = true;
            }, r = function() {
              d = false, S();
            };
            this.on("waiting", function() {
              d && E();
            }), this.on("playing", function() {
              S(), t();
            }), this.on("pause", r), this.on("seeking", r);
          }
          Object.defineProperty(e, "__esModule", { value: true }), e.default = y;
          var w = R(1), A = m(w), L = R(3), b = m(L);
        }, function(T, e, R) {
          "use strict";
          function m(D) {
            return D && D.__esModule ? D : { default: D };
          }
          function y() {
            var D = this;
            this.one("playbackheartbeat", u), this.on("playbackheartbeatend", function() {
              D.off("before*", g), D.one("playbackheartbeat", u);
            });
          }
          Object.defineProperty(e, "__esModule", { value: true }), e.default = y;
          var w = R(2), A = m(w), L = R(1), b = m(L), u = function() {
            this.lastWallClockTime = b.default.now(), this.on("before*", g);
          }, g = function(D) {
            var E = b.default.now(), S = this.lastWallClockTime;
            this.lastWallClockTime = E, E - S > 3e4 && (this.emit("devicesleep", { viewer_time: S }), (0, A.default)(this.data, { viewer_time: S }), this.send("devicesleep"), this.emit("devicewake", { viewer_time: E }), (0, A.default)(this.data, { viewer_time: E }), this.send("devicewake"));
          };
        }, function(T, e, R) {
          "use strict";
          function m(c) {
            return c && c.__esModule ? c : { default: c };
          }
          Object.defineProperty(e, "__esModule", { value: true });
          var y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(c) {
            return typeof c;
          } : function(c) {
            return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c;
          }, w = R(0), A = m(w), L = R(36), b = R(4), u = m(b), g = R(40), D = m(g), E = R(9), S = m(E), d = R(41), t = m(d), r = R(14), n = m(r), h = R(42), a = m(h), f = R(2), v = m(f), _ = ["env_key", "view_id", "view_sequence_number", "player_sequence_number", "beacon_domain", "player_playhead_time", "viewer_time", "mux_api_version", "event", "video_id", "player_instance_id"], p = ["viewstart", "error", "ended", "viewend"], o = function(c, l) {
            var k = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            this.mux = c, this.envKey = l, this.eventQueue = new a.default((0, D.default)(l, k.beaconDomain)), this.previousBeaconData = null, this.lastEventTime = null, this.sampleRate = k.sampleRate, this.disableCookies = k.disableCookies, this.respectDoNotTrack = k.respectDoNotTrack;
            var I = k.platform || {};
            this.pageLevelData = { mux_api_version: this.mux.API_VERSION, mux_embed: this.mux.NAME, mux_embed_version: this.mux.VERSION, viewer_application_name: I.name, viewer_application_version: I.version, viewer_application_engine: I.layout, viewer_device_name: I.product, viewer_device_category: "", viewer_device_manufacturer: I.manufacturer, viewer_os_family: I.os && I.os.family, viewer_os_architecture: I.os && I.os.architecture, viewer_os_version: I.os && I.os.version };
            var C = (0, t.default)();
            C && (this.pageLevelData = (0, v.default)(this.pageLevelData, { viewer_connection_type: C })), A.default !== void 0 && A.default.location && A.default.location.href && (this.pageLevelData.page_url = A.default.location.href), this.viewerData = this.disableCookies ? {} : (0, L.getAndUpdateViewerData)();
          };
          o.prototype.send = function(c, l) {
            if (c) {
              if (this.respectDoNotTrack && (0, S.default)())
                return u.default.info("Not sending `" + c + "` because Do Not Track is enabled");
              if (!l || (l === void 0 ? "undefined" : y(l)) !== "object")
                return u.default.error("A data object was expected in send() but was not provided");
              var k = this.disableCookies ? {} : (0, L.getAndUpdateSessionData)(), I = {};
              (0, v.default)(I, this.pageLevelData), (0, v.default)(I, l), (0, v.default)(I, k), (0, v.default)(I, this.viewerData), I.event = c, I.env_key = this.envKey, I.user_id && (I.viewer_user_id = I.user_id, delete I.user_id);
              var C = I.mux_sample_number >= this.sampleRate, P = this._deduplicateBeaconData(c, I), N = (0, n.default)(P);
              if (this.lastEventTime = this.mux.utils.now(), C)
                return u.default.info("Not sending event due to sample rate restriction", c, I, N);
              if (!this.envKey)
                return u.default.info("Not sending event due to missing environment key", c, I, N);
              if (!this.rateLimited) {
                if (u.default.info("Sending event", c, I, N), this.rateLimited = !this.eventQueue.queueEvent(c, N), this.mux.WINDOW_UNLOADING && c === "viewend")
                  this.eventQueue.destroy(true);
                else if (p.indexOf(c) >= 0 && this.eventQueue.flushEvents(), this.rateLimited)
                  return I.event = "eventrateexceeded", N = (0, n.default)(I), this.eventQueue.queueEvent(I.event, N), u.default.error("Beaconing disabled due to rate limit.");
              }
            }
          }, o.prototype.destroy = function() {
            this.eventQueue.destroy(false);
          };
          var s = function(c, l, k, I) {
            return !(!c || l.indexOf("request_") !== 0) && (l === "request_response_headers" || (k === void 0 ? "undefined" : y(k)) !== "object" || (I === void 0 ? "undefined" : y(I)) !== "object" || Object.keys(k || {}).length !== Object.keys(I || {}).length);
          }, i = function(c, l) {
            return c === "renditionchange" && l.indexOf("video_source_") === 0;
          };
          o.prototype._deduplicateBeaconData = function(c, l) {
            var k = this, I = {}, C = l.view_id;
            if (!C || c === "viewstart" || c === "viewend" || !this.previousBeaconData || this.mux.utils.now() - this.lastEventTime >= 6e5)
              I = (0, v.default)({}, l), C && (this.previousBeaconData = I), C && c === "viewend" && (this.previousBeaconData = null);
            else {
              var P = c.indexOf("request") === 0;
              Object.keys(l).forEach(function(N) {
                var B = l[N];
                (B !== k.previousBeaconData[N] || _.indexOf(N) > -1 || s(P, N, B, k.previousBeaconData[N]) || i(c, N)) && (I[N] = B, k.previousBeaconData[N] = B);
              });
            }
            return I;
          }, e.default = o;
        }, function(T, e, R) {
          "use strict";
          function m(t) {
            return t && t.__esModule ? t : { default: t };
          }
          Object.defineProperty(e, "__esModule", { value: true }), e.getAndUpdateSessionData = e.getAndUpdateViewerData = void 0;
          var y = R(11), w = m(y), A = R(39), L = m(A), b = R(6), u = R(1), g = m(u), D = function() {
            var t = void 0;
            try {
              t = w.default.parse(L.default.get("muxData") || "");
            } catch {
              t = {};
            }
            return t;
          }, E = function(t) {
            try {
              L.default.set("muxData", w.default.stringify(t), { expires: 7300 });
            } catch {
            }
          }, S = function() {
            var t = D();
            return t.mux_viewer_id = t.mux_viewer_id || (0, b.generateUUID)(), t.msn = t.msn || Math.random(), E(t), { mux_viewer_id: t.mux_viewer_id, mux_sample_number: t.msn };
          }, d = function() {
            var t = D(), r = g.default.now();
            return t.session_start && (t.sst = t.session_start, delete t.session_start), t.session_id && (t.sid = t.session_id, delete t.session_id), t.session_expires && (t.sex = t.session_expires, delete t.session_expires), (!t.sex || t.sex < r) && (t.sid = (0, b.generateUUID)(), t.sst = r), t.sex = r + 15e5, E(t), { session_id: t.sid, session_start: t.sst, session_expires: t.sex };
          };
          e.getAndUpdateViewerData = S, e.getAndUpdateSessionData = d;
        }, function(T, e, R) {
          "use strict";
          var m = R(12), y = R(13), w = { brackets: function(u) {
            return u + "[]";
          }, indices: function(u, g) {
            return u + "[" + g + "]";
          }, repeat: function(u) {
            return u;
          } }, A = Date.prototype.toISOString, L = { delimiter: "&", encode: true, encoder: m.encode, encodeValuesOnly: false, serializeDate: function(u) {
            return A.call(u);
          }, skipNulls: false, strictNullHandling: false }, b = function u(g, D, E, S, d, t, r, n, h, a, f, v) {
            var _ = g;
            if (typeof r == "function")
              _ = r(D, _);
            else if (_ instanceof Date)
              _ = a(_);
            else if (_ === null) {
              if (S)
                return t && !v ? t(D, L.encoder) : D;
              _ = "";
            }
            if (typeof _ == "string" || typeof _ == "number" || typeof _ == "boolean" || m.isBuffer(_))
              return t ? [f(v ? D : t(D, L.encoder)) + "=" + f(t(_, L.encoder))] : [f(D) + "=" + f(String(_))];
            var p = [];
            if (_ === void 0)
              return p;
            var o;
            if (Array.isArray(r))
              o = r;
            else {
              var s = Object.keys(_);
              o = n ? s.sort(n) : s;
            }
            for (var i = 0; i < o.length; ++i) {
              var c = o[i];
              d && _[c] === null || (p = Array.isArray(_) ? p.concat(u(_[c], E(D, c), E, S, d, t, r, n, h, a, f, v)) : p.concat(u(_[c], D + (h ? "." + c : "[" + c + "]"), E, S, d, t, r, n, h, a, f, v)));
            }
            return p;
          };
          T.exports = function(u, g) {
            var D = u, E = g ? m.assign({}, g) : {};
            if (E.encoder !== null && E.encoder !== void 0 && typeof E.encoder != "function")
              throw new TypeError("Encoder has to be a function.");
            var S = E.delimiter === void 0 ? L.delimiter : E.delimiter, d = typeof E.strictNullHandling == "boolean" ? E.strictNullHandling : L.strictNullHandling, t = typeof E.skipNulls == "boolean" ? E.skipNulls : L.skipNulls, r = typeof E.encode == "boolean" ? E.encode : L.encode, n = typeof E.encoder == "function" ? E.encoder : L.encoder, h = typeof E.sort == "function" ? E.sort : null, a = E.allowDots !== void 0 && E.allowDots, f = typeof E.serializeDate == "function" ? E.serializeDate : L.serializeDate, v = typeof E.encodeValuesOnly == "boolean" ? E.encodeValuesOnly : L.encodeValuesOnly;
            if (E.format === void 0)
              E.format = y.default;
            else if (!Object.prototype.hasOwnProperty.call(y.formatters, E.format))
              throw new TypeError("Unknown format option provided.");
            var _, p, o = y.formatters[E.format];
            typeof E.filter == "function" ? (p = E.filter, D = p("", D)) : Array.isArray(E.filter) && (p = E.filter, _ = p);
            var s = [];
            if (typeof D != "object" || D === null)
              return "";
            var i;
            i = E.arrayFormat in w ? E.arrayFormat : "indices" in E ? E.indices ? "indices" : "repeat" : "indices";
            var c = w[i];
            _ || (_ = Object.keys(D)), h && _.sort(h);
            for (var l = 0; l < _.length; ++l) {
              var k = _[l];
              t && D[k] === null || (s = s.concat(b(D[k], k, c, d, t, r ? n : null, p, h, a, f, o, v)));
            }
            var I = s.join(S), C = E.addQueryPrefix === true ? "?" : "";
            return I.length > 0 ? C + I : "";
          };
        }, function(T, e, R) {
          "use strict";
          var m = R(12), y = Object.prototype.hasOwnProperty, w = { allowDots: false, allowPrototypes: false, arrayLimit: 20, decoder: m.decode, delimiter: "&", depth: 5, parameterLimit: 1e3, plainObjects: false, strictNullHandling: false }, A = function(u, g) {
            for (var D = {}, E = g.ignoreQueryPrefix ? u.replace(/^\?/, "") : u, S = g.parameterLimit === 1 / 0 ? void 0 : g.parameterLimit, d = E.split(g.delimiter, S), t = 0; t < d.length; ++t) {
              var r, n, h = d[t], a = h.indexOf("]="), f = a === -1 ? h.indexOf("=") : a + 1;
              f === -1 ? (r = g.decoder(h, w.decoder), n = g.strictNullHandling ? null : "") : (r = g.decoder(h.slice(0, f), w.decoder), n = g.decoder(h.slice(f + 1), w.decoder)), y.call(D, r) ? D[r] = [].concat(D[r]).concat(n) : D[r] = n;
            }
            return D;
          }, L = function(u, g, D) {
            for (var E = g, S = u.length - 1; S >= 0; --S) {
              var d, t = u[S];
              if (t === "[]")
                d = [], d = d.concat(E);
              else {
                d = D.plainObjects ? Object.create(null) : {};
                var r = t.charAt(0) === "[" && t.charAt(t.length - 1) === "]" ? t.slice(1, -1) : t, n = parseInt(r, 10);
                !isNaN(n) && t !== r && String(n) === r && n >= 0 && D.parseArrays && n <= D.arrayLimit ? (d = [], d[n] = E) : d[r] = E;
              }
              E = d;
            }
            return E;
          }, b = function(u, g, D) {
            if (u) {
              var E = D.allowDots ? u.replace(/\.([^.[]+)/g, "[$1]") : u, S = /(\[[^[\]]*])/, d = /(\[[^[\]]*])/g, t = S.exec(E), r = t ? E.slice(0, t.index) : E, n = [];
              if (r) {
                if (!D.plainObjects && y.call(Object.prototype, r) && !D.allowPrototypes)
                  return;
                n.push(r);
              }
              for (var h = 0; (t = d.exec(E)) !== null && h < D.depth; ) {
                if (h += 1, !D.plainObjects && y.call(Object.prototype, t[1].slice(1, -1)) && !D.allowPrototypes)
                  return;
                n.push(t[1]);
              }
              return t && n.push("[" + E.slice(t.index) + "]"), L(n, g, D);
            }
          };
          T.exports = function(u, g) {
            var D = g ? m.assign({}, g) : {};
            if (D.decoder !== null && D.decoder !== void 0 && typeof D.decoder != "function")
              throw new TypeError("Decoder has to be a function.");
            if (D.ignoreQueryPrefix = D.ignoreQueryPrefix === true, D.delimiter = typeof D.delimiter == "string" || m.isRegExp(D.delimiter) ? D.delimiter : w.delimiter, D.depth = typeof D.depth == "number" ? D.depth : w.depth, D.arrayLimit = typeof D.arrayLimit == "number" ? D.arrayLimit : w.arrayLimit, D.parseArrays = D.parseArrays !== false, D.decoder = typeof D.decoder == "function" ? D.decoder : w.decoder, D.allowDots = typeof D.allowDots == "boolean" ? D.allowDots : w.allowDots, D.plainObjects = typeof D.plainObjects == "boolean" ? D.plainObjects : w.plainObjects, D.allowPrototypes = typeof D.allowPrototypes == "boolean" ? D.allowPrototypes : w.allowPrototypes, D.parameterLimit = typeof D.parameterLimit == "number" ? D.parameterLimit : w.parameterLimit, D.strictNullHandling = typeof D.strictNullHandling == "boolean" ? D.strictNullHandling : w.strictNullHandling, u === "" || u === null || u === void 0)
              return D.plainObjects ? Object.create(null) : {};
            for (var E = typeof u == "string" ? A(u, D) : u, S = D.plainObjects ? Object.create(null) : {}, d = Object.keys(E), t = 0; t < d.length; ++t) {
              var r = d[t], n = b(r, E[r], D);
              S = m.merge(S, n, D);
            }
            return m.compact(S);
          };
        }, function(T, e, R) {
          "use strict";
          var m, y, w = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(A) {
            return typeof A;
          } : function(A) {
            return A && typeof Symbol == "function" && A.constructor === Symbol && A !== Symbol.prototype ? "symbol" : typeof A;
          };
          (function(A) {
            var L = false;
            if (m = A, (y = typeof m == "function" ? m.call(e, R, e, T) : m) !== void 0 && (T.exports = y), L = true, w(e) === "object" && (T.exports = A(), L = true), !L) {
              var b = window.Cookies, u = window.Cookies = A();
              u.noConflict = function() {
                return window.Cookies = b, u;
              };
            }
          })(function() {
            function A(b) {
              function u(g, D, E) {
                var S;
                if (typeof document != "undefined") {
                  if (arguments.length > 1) {
                    if (E = L({ path: "/" }, u.defaults, E), typeof E.expires == "number") {
                      var d = new Date();
                      d.setMilliseconds(d.getMilliseconds() + 864e5 * E.expires), E.expires = d;
                    }
                    try {
                      S = JSON.stringify(D), /^[\{\[]/.test(S) && (D = S);
                    } catch {
                    }
                    return D = b.write ? b.write(D, g) : encodeURIComponent(String(D)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), g = encodeURIComponent(String(g)), g = g.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), g = g.replace(/[\(\)]/g, escape), document.cookie = [g, "=", D, E.expires ? "; expires=" + E.expires.toUTCString() : "", E.path ? "; path=" + E.path : "", E.domain ? "; domain=" + E.domain : "", E.secure ? "; secure" : ""].join("");
                  }
                  g || (S = {});
                  for (var t = document.cookie ? document.cookie.split("; ") : [], r = /(%[0-9A-Z]{2})+/g, n = 0; n < t.length; n++) {
                    var h = t[n].split("="), a = h.slice(1).join("=");
                    a.charAt(0) === '"' && (a = a.slice(1, -1));
                    try {
                      var f = h[0].replace(r, decodeURIComponent);
                      if (a = b.read ? b.read(a, f) : b(a, f) || a.replace(r, decodeURIComponent), this.json)
                        try {
                          a = JSON.parse(a);
                        } catch {
                        }
                      if (g === f) {
                        S = a;
                        break;
                      }
                      g || (S[f] = a);
                    } catch {
                    }
                  }
                  return S;
                }
              }
              return u.set = u, u.get = function(g) {
                return u.call(u, g);
              }, u.getJSON = function() {
                return u.apply({ json: true }, [].slice.call(arguments));
              }, u.defaults = {}, u.remove = function(g, D) {
                u(g, "", L(D, { expires: -1 }));
              }, u.withConverter = A, u;
            }
            var L = function() {
              for (var b = 0, u = {}; b < arguments.length; b++) {
                var g = arguments[b];
                for (var D in g)
                  u[D] = g[D];
              }
              return u;
            };
            return A(function() {
            });
          });
        }, function(T, e, R) {
          "use strict";
          function m(y, w) {
            return y = y || "", w = w || "litix.io", y.match(/^[a-z0-9]+$/) ? "https://" + y + "." + w : "https://img.litix.io/a.gif";
          }
          Object.defineProperty(e, "__esModule", { value: true }), e.default = m;
        }, function(T, e, R) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: true });
          var m = R(0), y = function(L) {
            return L && L.__esModule ? L : { default: L };
          }(m), w = function() {
            var L = void 0;
            switch (A()) {
              case "cellular":
                L = "cellular";
                break;
              case "ethernet":
                L = "wired";
                break;
              case "wifi":
                L = "wifi";
                break;
              case void 0:
                break;
              default:
                L = "other";
            }
            return L;
          }, A = function() {
            var L = y.default.navigator, b = L && (L.connection || L.mozConnection || L.webkitConnection);
            return b && b.type;
          };
          e.default = w;
        }, function(T, e, R) {
          "use strict";
          function m(a) {
            return a && a.__esModule ? a : { default: a };
          }
          Object.defineProperty(e, "__esModule", { value: true });
          var y = R(0), w = m(y), A = R(4), L = m(A), b = R(43), u = m(b), g = R(2), D = m(g), E = R(14), S = m(E), d = R(1), t = m(d), r = !!w.default.XMLHttpRequest && "withCredentials" in new w.default.XMLHttpRequest(), n = { maxBeaconSize: 300, maxQueueLength: 3600, baseTimeBetweenBeacons: 5e3 }, h = function(a, f) {
            this._beaconUrl = a || "https://img.litix.io", this._eventQueue = [], this._postInFlight = false, this._failureCount = 0, this._sendTimeout = false, this._options = (0, D.default)({}, n, f);
          };
          h.prototype.queueEvent = function(a, f) {
            var v = (0, D.default)({}, f);
            return r ? (this._eventQueue.length <= this._options.maxQueueLength || a === "eventrateexceeded") && (this._eventQueue.push(v), this._sendTimeout || this._startBeaconSending(), this._eventQueue.length <= this._options.maxQueueLength) : (u.default.send(this._beaconUrl, v), true);
          }, h.prototype.flushEvents = function() {
            r && (this._eventQueue.length && this._sendBeaconQueue(), this._startBeaconSending());
          }, h.prototype.destroy = function() {
            var a = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
            this.destroyed = true, a ? this._clearBeaconQueue() : this.flushEvents(), w.default.clearTimeout(this._sendTimeout);
          }, h.prototype._clearBeaconQueue = function() {
            var a = w.default.navigator, f = this._eventQueue.length > this._options.maxBeaconSize ? this._eventQueue.length - this._options.maxBeaconSize : 0, v = this._eventQueue.slice(f);
            f > 0 && (0, D.default)(v[v.length - 1], (0, S.default)({ mux_view_message: "event queue truncated" }));
            var _ = this._createPayload(v);
            if (a.sendBeacon)
              a.sendBeacon(this._beaconUrl, _);
            else if (w.default.XMLHttpRequest) {
              var p = new w.default.XMLHttpRequest();
              p.open("POST", this._beaconUrl), p.setRequestHeader("Content-Type", "application/json"), p.send(_);
            } else
              u.default.send(this._beaconUrl, v[v.length - 1]);
          }, h.prototype._sendBeaconQueue = function() {
            var a = this;
            if (w.default.XMLHttpRequest && !this._postInFlight) {
              var f = new w.default.XMLHttpRequest(), v = this._eventQueue.slice(0, this._options.maxBeaconSize);
              this._eventQueue = this._eventQueue.slice(this._options.maxBeaconSize), this._postInFlight = true, f.onreadystatechange = function() {
                f.readyState === 4 && (f.status !== 200 ? (a._eventQueue = v.concat(a._eventQueue), a._failureCount += 1, L.default.info("Error sending beacon: " + f.status), L.default.info(f.responseText)) : a._failureCount = 0, a._roundTripTime = t.default.now() - p, a._postInFlight = false);
              }, f.open("POST", this._beaconUrl), f.setRequestHeader("Content-Type", "application/json");
              var _ = this._createPayload(v), p = t.default.now();
              f.send(_);
            }
          }, h.prototype._getNextBeaconTime = function() {
            if (!this._failureCount)
              return this._options.baseTimeBetweenBeacons;
            var a = Math.pow(2, this._failureCount - 1);
            return (1 + (a *= Math.random())) * this._options.baseTimeBetweenBeacons;
          }, h.prototype._startBeaconSending = function() {
            var a = this;
            w.default.clearTimeout(this._sendTimeout), this.destroyed || (this._sendTimeout = w.default.setTimeout(function() {
              a._eventQueue.length && a._sendBeaconQueue(), a._startBeaconSending();
            }, this._getNextBeaconTime()));
          }, h.prototype._createPayload = function(a) {
            var f = { transmission_timestamp: Math.round(t.default.now()) };
            return this._roundTripTime && (f.rtt_ms = Math.round(this._roundTripTime)), JSON.stringify({ metadata: f, events: a });
          }, e.default = h;
        }, function(T, e, R) {
          "use strict";
          function m(u) {
            return u && u.__esModule ? u : { default: u };
          }
          Object.defineProperty(e, "__esModule", { value: true });
          var y = R(11), w = m(y), A = R(0), L = m(A), b = {};
          b.send = function(u, g) {
            function D() {
              E.src = d + (S ? "&rc=" + S : "");
            }
            var E = new Image(), S = 0, d = u + "?" + w.default.stringify(g);
            return E.addEventListener("error", function() {
              S > 3 || L.default.setTimeout(function() {
                S++, D();
              }, 5e3 * S);
            }), D(), E;
          }, e.default = b;
        }, function(T, e, R) {
          "use strict";
          function m() {
            function y(d, t) {
              var r = t.request_start, n = t.request_response_start, h = t.request_response_end, a = t.request_bytes_loaded;
              g++;
              var f = void 0, v = void 0;
              if (n ? (f = n - r, v = h - n) : v = h - r, v > 0 && a > 0) {
                var _ = a / v * 8e3;
                D++, b += a, u += v, this.data.view_min_request_throughput = Math.min(this.data.view_min_request_throughput || 1 / 0, _), this.data.view_average_request_throughput = b / u * 8e3, this.data.view_request_count = g, f > 0 && (L += f, this.data.view_max_request_latency = Math.max(this.data.view_max_request_latency || 0, f), this.data.view_average_request_latency = L / D);
              }
            }
            function w(d, t) {
              g++, E++, this.data.view_request_count = g, this.data.view_request_failed_count = E;
            }
            function A(d, t) {
              g++, S++, this.data.view_request_count = g, this.data.view_request_canceled_count = S;
            }
            var L = 0, b = 0, u = 0, g = 0, D = 0, E = 0, S = 0;
            this.on("requestcompleted", y), this.on("requestfailed", w), this.on("requestcanceled", A);
          }
          Object.defineProperty(e, "__esModule", { value: true }), e.default = m;
        }, function(T, e, R) {
          "use strict";
          function m(D, E, S) {
            var d = (0, b.findMediaElement)(E), t = w(d, 3), r = t[0], n = t[1], h = t[2], a = D.log, f = D.utils.getComputedStyle, v = D.utils.secondsToMs, _ = { automaticErrorTracking: true };
            if (!r)
              return a.error("No element was found with the `" + n + "` query selector.");
            if (h !== "video" && h !== "audio")
              return a.error("The element of `" + n + "` was not a media element.");
            S = (0, L.default)(_, S), S.data = (0, L.default)({ player_software: "HTML5 Video Element", player_software_version: "No Versions", player_mux_plugin_name: "VideoElementMonitor", player_mux_plugin_version: "4.3.0" }, S.data), S.getPlayheadTime = function() {
              return v(r.currentTime);
            }, S.getStateData = function() {
              var o = this.hlsjs && this.hlsjs.url, s = this.dashjs && y(this.dashjs.getSource === "function") && this.dashjs.getSource();
              return { player_is_paused: r.paused, player_playhead_time: v(r.currentTime), player_width: parseInt(f(r, "width")), player_height: parseInt(f(r, "height")), player_autoplay_on: r.autoplay, player_preload_on: r.preload, video_poster_url: r.poster, video_source_url: o || s || r.currentSrc, video_source_duration: v(r.duration), video_source_height: r.videoHeight, video_source_width: r.videoWidth };
            }, r.mux = r.mux || {}, r.mux.deleted = false, r.mux.emit = function(o, s) {
              D.emit(n, o, s);
            };
            var p = function() {
              a.error("The monitor for this video element has already been destroyed.");
            };
            r.mux.destroy = function() {
              Object.keys(r.mux.listeners).forEach(function(o) {
                r.removeEventListener(o, r.mux.listeners[o], false);
              }), delete r.mux.listeners, r.mux.destroy = p, r.mux.swapElement = p, r.mux.emit = p, r.mux.addHLSJS = p, r.mux.addDashJS = p, r.mux.removeHLSJS = p, r.mux.removeDashJS = p, r.mux.deleted = true, D.emit(n, "destroy");
            }, r.mux.swapElement = function(o) {
              var s = (0, b.findMediaElement)(o), i = w(s, 3), c = i[0], l = i[1], k = i[2];
              return c ? k !== "video" && k !== "audio" ? D.log.error("The element of `" + l + "` was not a media element.") : (c.muxId = r.muxId, delete r.muxId, c.mux = c.mux || {}, c.mux.listeners = (0, L.default)({}, r.mux.listeners), delete r.mux.listeners, Object.keys(c.mux.listeners).forEach(function(I) {
                r.removeEventListener(I, c.mux.listeners[I], false), c.addEventListener(I, c.mux.listeners[I], false);
              }), c.mux.swapElement = r.mux.swapElement, c.mux.destroy = r.mux.destroy, delete r.mux, void (r = c)) : D.log.error("No element was found with the `" + l + "` query selector.");
            }, r.mux.addHLSJS = function(o) {
              D.addHLSJS(n, o);
            }, r.mux.addDashJS = function(o) {
              D.addDashJS(n, o);
            }, r.mux.removeHLSJS = function() {
              D.removeHLSJS(n);
            }, r.mux.removeDashJS = function() {
              D.removeDashJS(n);
            }, D.init(n, S), D.emit(n, "playerready"), r.paused || (D.emit(n, "play"), r.readyState > 2 && D.emit(n, "playing")), r.mux.listeners = {}, u.forEach(function(o) {
              (o !== "error" || S.automaticErrorTracking) && (r.mux.listeners[o] = function() {
                var s = {};
                if (o === "error") {
                  if (!r.error)
                    return;
                  s.player_error_code = r.error.code, s.player_error_message = g[r.error.code] || r.error.message;
                }
                D.emit(n, o, s);
              }, r.addEventListener(o, r.mux.listeners[o], false));
            });
          }
          Object.defineProperty(e, "__esModule", { value: true });
          var y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(D) {
            return typeof D;
          } : function(D) {
            return D && typeof Symbol == "function" && D.constructor === Symbol && D !== Symbol.prototype ? "symbol" : typeof D;
          }, w = function() {
            function D(E, S) {
              var d = [], t = true, r = false, n = void 0;
              try {
                for (var h, a = E[Symbol.iterator](); !(t = (h = a.next()).done) && (d.push(h.value), !S || d.length !== S); t = true)
                  ;
              } catch (f) {
                r = true, n = f;
              } finally {
                try {
                  !t && a.return && a.return();
                } finally {
                  if (r)
                    throw n;
                }
              }
              return d;
            }
            return function(E, S) {
              if (Array.isArray(E))
                return E;
              if (Symbol.iterator in Object(E))
                return D(E, S);
              throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
          }();
          e.default = m;
          var A = R(2), L = function(D) {
            return D && D.__esModule ? D : { default: D };
          }(A), b = R(8), u = ["loadstart", "pause", "play", "playing", "seeking", "seeked", "timeupdate", "ratechange", "stalled", "waiting", "error", "ended"], g = { 1: "MEDIA_ERR_ABORTED", 2: "MEDIA_ERR_NETWORK", 3: "MEDIA_ERR_DECODE", 4: "MEDIA_ERR_SRC_NOT_SUPPORTED" };
        }, function(T, e, R) {
          "use strict";
          function m(f) {
            return f && f.__esModule ? f : { default: f };
          }
          Object.defineProperty(e, "__esModule", { value: true });
          var y = R(47), w = m(y), A = R(3), L = m(A), b = R(48), u = m(b), g = R(49), D = m(g), E = R(2), S = m(E), d = R(7), t = m(d), r = R(5), n = R(1), h = m(n), a = {};
          a.safeCall = w.default, a.safeIncrement = L.default, a.getComputedStyle = u.default, a.secondsToMs = D.default, a.assign = S.default, a.headersStringToObject = t.default, a.extractHostnameAndDomain = r.extractHostnameAndDomain, a.extractHostname = r.extractHostname, a.now = h.default.now, e.default = a;
        }, function(T, e, R) {
          "use strict";
          function m(A, L, b, u) {
            var g = u;
            if (A && typeof A[L] == "function")
              try {
                g = A[L].apply(A, b);
              } catch (D) {
                w.default.info("safeCall error", D);
              }
            return g;
          }
          Object.defineProperty(e, "__esModule", { value: true }), e.default = m;
          var y = R(4), w = function(A) {
            return A && A.__esModule ? A : { default: A };
          }(y);
        }, function(T, e, R) {
          "use strict";
          function m(L, b) {
            if (L && b && w.default && typeof w.default.getComputedStyle == "function") {
              var u = void 0;
              return A && A.has(L) && (u = A.get(L)), u || (u = w.default.getComputedStyle(L, null), A && A.set(L, u)), u.getPropertyValue(b);
            }
          }
          Object.defineProperty(e, "__esModule", { value: true }), e.default = m;
          var y = R(0), w = function(L) {
            return L && L.__esModule ? L : { default: L };
          }(y), A = void 0;
          w.default && w.default.WeakMap && (A = new WeakMap());
        }, function(T, e, R) {
          "use strict";
          function m(y) {
            return Math.floor(1e3 * y);
          }
          Object.defineProperty(e, "__esModule", { value: true }), e.default = m;
        }]);
      });
    })();
  }), Vn = ae((O, M) => {
    typeof window != "undefined" && function(x, T) {
      typeof O == "object" && typeof M == "object" ? M.exports = T() : typeof define == "function" && define.amd ? define([], T) : typeof O == "object" ? O.Hls = T() : x.Hls = T();
    }(O, function() {
      return function(x) {
        var T = {};
        function e(R) {
          if (T[R])
            return T[R].exports;
          var m = T[R] = { i: R, l: false, exports: {} };
          return x[R].call(m.exports, m, m.exports, e), m.l = true, m.exports;
        }
        return e.m = x, e.c = T, e.d = function(R, m, y) {
          e.o(R, m) || Object.defineProperty(R, m, { enumerable: true, get: y });
        }, e.r = function(R) {
          typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(R, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(R, "__esModule", { value: true });
        }, e.t = function(R, m) {
          if (m & 1 && (R = e(R)), m & 8 || m & 4 && typeof R == "object" && R && R.__esModule)
            return R;
          var y = Object.create(null);
          if (e.r(y), Object.defineProperty(y, "default", { enumerable: true, value: R }), m & 2 && typeof R != "string")
            for (var w in R)
              e.d(y, w, function(A) {
                return R[A];
              }.bind(null, w));
          return y;
        }, e.n = function(R) {
          var m = R && R.__esModule ? function() {
            return R.default;
          } : function() {
            return R;
          };
          return e.d(m, "a", m), m;
        }, e.o = function(R, m) {
          return Object.prototype.hasOwnProperty.call(R, m);
        }, e.p = "/dist/", e(e.s = "./src/hls.ts");
      }({ "./node_modules/eventemitter3/index.js": function(x, T, e) {
        "use strict";
        var R = Object.prototype.hasOwnProperty, m = "~";
        function y() {
        }
        Object.create && (y.prototype = Object.create(null), new y().__proto__ || (m = false));
        function w(u, g, D) {
          this.fn = u, this.context = g, this.once = D || false;
        }
        function A(u, g, D, E, S) {
          if (typeof D != "function")
            throw new TypeError("The listener must be a function");
          var d = new w(D, E || u, S), t = m ? m + g : g;
          return u._events[t] ? u._events[t].fn ? u._events[t] = [u._events[t], d] : u._events[t].push(d) : (u._events[t] = d, u._eventsCount++), u;
        }
        function L(u, g) {
          --u._eventsCount == 0 ? u._events = new y() : delete u._events[g];
        }
        function b() {
          this._events = new y(), this._eventsCount = 0;
        }
        b.prototype.eventNames = function() {
          var u = [], g, D;
          if (this._eventsCount === 0)
            return u;
          for (D in g = this._events)
            R.call(g, D) && u.push(m ? D.slice(1) : D);
          return Object.getOwnPropertySymbols ? u.concat(Object.getOwnPropertySymbols(g)) : u;
        }, b.prototype.listeners = function(u) {
          var g = m ? m + u : u, D = this._events[g];
          if (!D)
            return [];
          if (D.fn)
            return [D.fn];
          for (var E = 0, S = D.length, d = new Array(S); E < S; E++)
            d[E] = D[E].fn;
          return d;
        }, b.prototype.listenerCount = function(u) {
          var g = m ? m + u : u, D = this._events[g];
          return D ? D.fn ? 1 : D.length : 0;
        }, b.prototype.emit = function(u, g, D, E, S, d) {
          var t = m ? m + u : u;
          if (!this._events[t])
            return false;
          var r = this._events[t], n = arguments.length, h, a;
          if (r.fn) {
            switch (r.once && this.removeListener(u, r.fn, void 0, true), n) {
              case 1:
                return r.fn.call(r.context), true;
              case 2:
                return r.fn.call(r.context, g), true;
              case 3:
                return r.fn.call(r.context, g, D), true;
              case 4:
                return r.fn.call(r.context, g, D, E), true;
              case 5:
                return r.fn.call(r.context, g, D, E, S), true;
              case 6:
                return r.fn.call(r.context, g, D, E, S, d), true;
            }
            for (a = 1, h = new Array(n - 1); a < n; a++)
              h[a - 1] = arguments[a];
            r.fn.apply(r.context, h);
          } else {
            var f = r.length, v;
            for (a = 0; a < f; a++)
              switch (r[a].once && this.removeListener(u, r[a].fn, void 0, true), n) {
                case 1:
                  r[a].fn.call(r[a].context);
                  break;
                case 2:
                  r[a].fn.call(r[a].context, g);
                  break;
                case 3:
                  r[a].fn.call(r[a].context, g, D);
                  break;
                case 4:
                  r[a].fn.call(r[a].context, g, D, E);
                  break;
                default:
                  if (!h)
                    for (v = 1, h = new Array(n - 1); v < n; v++)
                      h[v - 1] = arguments[v];
                  r[a].fn.apply(r[a].context, h);
              }
          }
          return true;
        }, b.prototype.on = function(u, g, D) {
          return A(this, u, g, D, false);
        }, b.prototype.once = function(u, g, D) {
          return A(this, u, g, D, true);
        }, b.prototype.removeListener = function(u, g, D, E) {
          var S = m ? m + u : u;
          if (!this._events[S])
            return this;
          if (!g)
            return L(this, S), this;
          var d = this._events[S];
          if (d.fn)
            d.fn === g && (!E || d.once) && (!D || d.context === D) && L(this, S);
          else {
            for (var t = 0, r = [], n = d.length; t < n; t++)
              (d[t].fn !== g || E && !d[t].once || D && d[t].context !== D) && r.push(d[t]);
            r.length ? this._events[S] = r.length === 1 ? r[0] : r : L(this, S);
          }
          return this;
        }, b.prototype.removeAllListeners = function(u) {
          var g;
          return u ? (g = m ? m + u : u, this._events[g] && L(this, g)) : (this._events = new y(), this._eventsCount = 0), this;
        }, b.prototype.off = b.prototype.removeListener, b.prototype.addListener = b.prototype.on, b.prefixed = m, b.EventEmitter = b, x.exports = b;
      }, "./node_modules/url-toolkit/src/url-toolkit.js": function(x, T, e) {
        (function(R) {
          var m = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#[^]*)?$/, y = /^([^\/?#]*)([^]*)$/, w = /(?:\/|^)\.(?=\/)/g, A = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, L = { buildAbsoluteURL: function(b, u, g) {
            if (g = g || {}, b = b.trim(), u = u.trim(), !u) {
              if (!g.alwaysNormalize)
                return b;
              var D = L.parseURL(b);
              if (!D)
                throw new Error("Error trying to parse base URL.");
              return D.path = L.normalizePath(D.path), L.buildURLFromParts(D);
            }
            var E = L.parseURL(u);
            if (!E)
              throw new Error("Error trying to parse relative URL.");
            if (E.scheme)
              return g.alwaysNormalize ? (E.path = L.normalizePath(E.path), L.buildURLFromParts(E)) : u;
            var S = L.parseURL(b);
            if (!S)
              throw new Error("Error trying to parse base URL.");
            if (!S.netLoc && S.path && S.path[0] !== "/") {
              var d = y.exec(S.path);
              S.netLoc = d[1], S.path = d[2];
            }
            S.netLoc && !S.path && (S.path = "/");
            var t = { scheme: S.scheme, netLoc: E.netLoc, path: null, params: E.params, query: E.query, fragment: E.fragment };
            if (!E.netLoc && (t.netLoc = S.netLoc, E.path[0] !== "/"))
              if (!E.path)
                t.path = S.path, E.params || (t.params = S.params, E.query || (t.query = S.query));
              else {
                var r = S.path, n = r.substring(0, r.lastIndexOf("/") + 1) + E.path;
                t.path = L.normalizePath(n);
              }
            return t.path === null && (t.path = g.alwaysNormalize ? L.normalizePath(E.path) : E.path), L.buildURLFromParts(t);
          }, parseURL: function(b) {
            var u = m.exec(b);
            return u ? { scheme: u[1] || "", netLoc: u[2] || "", path: u[3] || "", params: u[4] || "", query: u[5] || "", fragment: u[6] || "" } : null;
          }, normalizePath: function(b) {
            for (b = b.split("").reverse().join("").replace(w, ""); b.length !== (b = b.replace(A, "")).length; )
              ;
            return b.split("").reverse().join("");
          }, buildURLFromParts: function(b) {
            return b.scheme + b.netLoc + b.path + b.params + b.query + b.fragment;
          } };
          x.exports = L;
        })(this);
      }, "./node_modules/webworkify-webpack/index.js": function(x, T, e) {
        function R(g) {
          var D = {};
          function E(d) {
            if (D[d])
              return D[d].exports;
            var t = D[d] = { i: d, l: false, exports: {} };
            return g[d].call(t.exports, t, t.exports, E), t.l = true, t.exports;
          }
          E.m = g, E.c = D, E.i = function(d) {
            return d;
          }, E.d = function(d, t, r) {
            E.o(d, t) || Object.defineProperty(d, t, { configurable: false, enumerable: true, get: r });
          }, E.r = function(d) {
            Object.defineProperty(d, "__esModule", { value: true });
          }, E.n = function(d) {
            var t = d && d.__esModule ? function() {
              return d.default;
            } : function() {
              return d;
            };
            return E.d(t, "a", t), t;
          }, E.o = function(d, t) {
            return Object.prototype.hasOwnProperty.call(d, t);
          }, E.p = "/", E.oe = function(d) {
            throw console.error(d), d;
          };
          var S = E(E.s = ENTRY_MODULE);
          return S.default || S;
        }
        var m = "[\\.|\\-|\\+|\\w|/|@]+", y = "\\(\\s*(/\\*.*?\\*/)?\\s*.*?(" + m + ").*?\\)";
        function w(g) {
          return (g + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
        }
        function A(g) {
          return !isNaN(1 * g);
        }
        function L(g, D, E) {
          var S = {};
          S[E] = [];
          var d = D.toString(), t = d.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
          if (!t)
            return S;
          for (var r = t[1], n = new RegExp("(\\\\n|\\W)" + w(r) + y, "g"), h; h = n.exec(d); )
            h[3] !== "dll-reference" && S[E].push(h[3]);
          for (n = new RegExp("\\(" + w(r) + '\\("(dll-reference\\s(' + m + '))"\\)\\)' + y, "g"); h = n.exec(d); )
            g[h[2]] || (S[E].push(h[1]), g[h[2]] = e(h[1]).m), S[h[2]] = S[h[2]] || [], S[h[2]].push(h[4]);
          for (var a = Object.keys(S), f = 0; f < a.length; f++)
            for (var v = 0; v < S[a[f]].length; v++)
              A(S[a[f]][v]) && (S[a[f]][v] = 1 * S[a[f]][v]);
          return S;
        }
        function b(g) {
          var D = Object.keys(g);
          return D.reduce(function(E, S) {
            return E || g[S].length > 0;
          }, false);
        }
        function u(g, D) {
          for (var E = { main: [D] }, S = { main: [] }, d = { main: {} }; b(E); )
            for (var t = Object.keys(E), r = 0; r < t.length; r++) {
              var n = t[r], h = E[n], a = h.pop();
              if (d[n] = d[n] || {}, !(d[n][a] || !g[n][a])) {
                d[n][a] = true, S[n] = S[n] || [], S[n].push(a);
                for (var f = L(g, g[n][a], n), v = Object.keys(f), _ = 0; _ < v.length; _++)
                  E[v[_]] = E[v[_]] || [], E[v[_]] = E[v[_]].concat(f[v[_]]);
              }
            }
          return S;
        }
        x.exports = function(g, D) {
          D = D || {};
          var E = { main: e.m }, S = D.all ? { main: Object.keys(E.main) } : u(E, g), d = "";
          Object.keys(S).filter(function(a) {
            return a !== "main";
          }).forEach(function(a) {
            for (var f = 0; S[a][f]; )
              f++;
            S[a].push(f), E[a][f] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })", d = d + "var " + a + " = (" + R.toString().replace("ENTRY_MODULE", JSON.stringify(f)) + ")({" + S[a].map(function(v) {
              return "" + JSON.stringify(v) + ": " + E[a][v].toString();
            }).join(",") + `});
`;
          }), d = d + "new ((" + R.toString().replace("ENTRY_MODULE", JSON.stringify(g)) + ")({" + S.main.map(function(a) {
            return "" + JSON.stringify(a) + ": " + E.main[a].toString();
          }).join(",") + "}))(self);";
          var t = new window.Blob([d], { type: "text/javascript" });
          if (D.bare)
            return t;
          var r = window.URL || window.webkitURL || window.mozURL || window.msURL, n = r.createObjectURL(t), h = new window.Worker(n);
          return h.objectURL = n, h;
        };
      }, "./src/config.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "hlsDefaultConfig", function() {
          return v;
        }), e.d(T, "mergeConfig", function() {
          return p;
        }), e.d(T, "enableStreamingMode", function() {
          return o;
        });
        var R = e("./src/controller/abr-controller.ts"), m = e("./src/controller/audio-stream-controller.ts"), y = e("./src/controller/audio-track-controller.ts"), w = e("./src/controller/subtitle-stream-controller.ts"), A = e("./src/controller/subtitle-track-controller.ts"), L = e("./src/controller/buffer-controller.ts"), b = e("./src/controller/timeline-controller.ts"), u = e("./src/controller/cap-level-controller.ts"), g = e("./src/controller/fps-controller.ts"), D = e("./src/controller/eme-controller.ts"), E = e("./src/utils/xhr-loader.ts"), S = e("./src/utils/fetch-loader.ts"), d = e("./src/utils/cues.ts"), t = e("./src/utils/mediakeys-helper.ts"), r = e("./src/utils/logger.ts");
        function n() {
          return n = Object.assign || function(s) {
            for (var i = 1; i < arguments.length; i++) {
              var c = arguments[i];
              for (var l in c)
                Object.prototype.hasOwnProperty.call(c, l) && (s[l] = c[l]);
            }
            return s;
          }, n.apply(this, arguments);
        }
        function h(s, i) {
          var c = Object.keys(s);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(s);
            i && (l = l.filter(function(k) {
              return Object.getOwnPropertyDescriptor(s, k).enumerable;
            })), c.push.apply(c, l);
          }
          return c;
        }
        function a(s) {
          for (var i = 1; i < arguments.length; i++) {
            var c = arguments[i] != null ? arguments[i] : {};
            i % 2 ? h(Object(c), true).forEach(function(l) {
              f(s, l, c[l]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(c)) : h(Object(c)).forEach(function(l) {
              Object.defineProperty(s, l, Object.getOwnPropertyDescriptor(c, l));
            });
          }
          return s;
        }
        function f(s, i, c) {
          return i in s ? Object.defineProperty(s, i, { value: c, enumerable: true, configurable: true, writable: true }) : s[i] = c, s;
        }
        var v = a(a({ autoStartLoad: true, startPosition: -1, defaultAudioCodec: void 0, debug: false, capLevelOnFPSDrop: false, capLevelToPlayerSize: false, initialLiveManifestSize: 1, maxBufferLength: 30, backBufferLength: 1 / 0, maxBufferSize: 60 * 1e3 * 1e3, maxBufferHole: 0.1, highBufferWatchdogPeriod: 2, nudgeOffset: 0.1, nudgeMaxRetry: 3, maxFragLookUpTolerance: 0.25, liveSyncDurationCount: 3, liveMaxLatencyDurationCount: 1 / 0, liveSyncDuration: void 0, liveMaxLatencyDuration: void 0, maxLiveSyncPlaybackRate: 1, liveDurationInfinity: false, liveBackBufferLength: null, maxMaxBufferLength: 600, enableWorker: true, enableSoftwareAES: true, manifestLoadingTimeOut: 1e4, manifestLoadingMaxRetry: 1, manifestLoadingRetryDelay: 1e3, manifestLoadingMaxRetryTimeout: 64e3, startLevel: void 0, levelLoadingTimeOut: 1e4, levelLoadingMaxRetry: 4, levelLoadingRetryDelay: 1e3, levelLoadingMaxRetryTimeout: 64e3, fragLoadingTimeOut: 2e4, fragLoadingMaxRetry: 6, fragLoadingRetryDelay: 1e3, fragLoadingMaxRetryTimeout: 64e3, startFragPrefetch: false, fpsDroppedMonitoringPeriod: 5e3, fpsDroppedMonitoringThreshold: 0.2, appendErrorMaxRetry: 3, loader: E.default, fLoader: void 0, pLoader: void 0, xhrSetup: void 0, licenseXhrSetup: void 0, licenseResponseCallback: void 0, abrController: R.default, bufferController: L.default, capLevelController: u.default, fpsController: g.default, stretchShortVideoTrack: false, maxAudioFramesDrift: 1, forceKeyFrameOnDiscontinuity: true, abrEwmaFastLive: 3, abrEwmaSlowLive: 9, abrEwmaFastVoD: 3, abrEwmaSlowVoD: 9, abrEwmaDefaultEstimate: 5e5, abrBandWidthFactor: 0.95, abrBandWidthUpFactor: 0.7, abrMaxWithRealBitrate: false, maxStarvationDelay: 4, maxLoadingDelay: 4, minAutoBitrate: 0, emeEnabled: false, widevineLicenseUrl: void 0, drmSystemOptions: {}, requestMediaKeySystemAccessFunc: t.requestMediaKeySystemAccess, testBandwidth: true, progressive: false, lowLatencyMode: true }, _()), {}, { subtitleStreamController: w.SubtitleStreamController, subtitleTrackController: A.default, timelineController: b.TimelineController, audioStreamController: m.default, audioTrackController: y.default, emeController: D.default });
        function _() {
          return { cueHandler: d.default, enableCEA708Captions: true, enableWebVTT: true, enableIMSC1: true, captionsTextTrack1Label: "English", captionsTextTrack1LanguageCode: "en", captionsTextTrack2Label: "Spanish", captionsTextTrack2LanguageCode: "es", captionsTextTrack3Label: "Unknown CC", captionsTextTrack3LanguageCode: "", captionsTextTrack4Label: "Unknown CC", captionsTextTrack4LanguageCode: "", renderTextTracksNatively: true };
        }
        function p(s, i) {
          if ((i.liveSyncDurationCount || i.liveMaxLatencyDurationCount) && (i.liveSyncDuration || i.liveMaxLatencyDuration))
            throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
          if (i.liveMaxLatencyDurationCount !== void 0 && (i.liveSyncDurationCount === void 0 || i.liveMaxLatencyDurationCount <= i.liveSyncDurationCount))
            throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
          if (i.liveMaxLatencyDuration !== void 0 && (i.liveSyncDuration === void 0 || i.liveMaxLatencyDuration <= i.liveSyncDuration))
            throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
          return n({}, s, i);
        }
        function o(s) {
          var i = s.loader;
          if (i !== S.default && i !== E.default)
            r.logger.log("[config]: Custom loader detected, cannot enable progressive streaming"), s.progressive = false;
          else {
            var c = Object(S.fetchSupported)();
            c && (s.loader = S.default, s.progressive = true, s.enableSoftwareAES = true, r.logger.log("[config]: Progressive streaming enabled, using FetchLoader"));
          }
        }
      }, "./src/controller/abr-controller.ts": function(x, T, e) {
        "use strict";
        e.r(T);
        var R = e("./src/polyfills/number.ts"), m = e("./src/utils/ewma-bandwidth-estimator.ts"), y = e("./src/events.ts"), w = e("./src/utils/buffer-helper.ts"), A = e("./src/errors.ts"), L = e("./src/types/loader.ts"), b = e("./src/utils/logger.ts");
        function u(E, S) {
          for (var d = 0; d < S.length; d++) {
            var t = S[d];
            t.enumerable = t.enumerable || false, t.configurable = true, "value" in t && (t.writable = true), Object.defineProperty(E, t.key, t);
          }
        }
        function g(E, S, d) {
          return S && u(E.prototype, S), d && u(E, d), E;
        }
        var D = function() {
          function E(d) {
            this.hls = void 0, this.lastLoadedFragLevel = 0, this._nextAutoLevel = -1, this.timer = void 0, this.onCheck = this._abandonRulesCheck.bind(this), this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.bwEstimator = void 0, this.hls = d;
            var t = d.config;
            this.bwEstimator = new m.default(t.abrEwmaSlowVoD, t.abrEwmaFastVoD, t.abrEwmaDefaultEstimate), this.registerListeners();
          }
          var S = E.prototype;
          return S.registerListeners = function() {
            var d = this.hls;
            d.on(y.Events.FRAG_LOADING, this.onFragLoading, this), d.on(y.Events.FRAG_LOADED, this.onFragLoaded, this), d.on(y.Events.FRAG_BUFFERED, this.onFragBuffered, this), d.on(y.Events.LEVEL_LOADED, this.onLevelLoaded, this), d.on(y.Events.ERROR, this.onError, this);
          }, S.unregisterListeners = function() {
            var d = this.hls;
            d.off(y.Events.FRAG_LOADING, this.onFragLoading, this), d.off(y.Events.FRAG_LOADED, this.onFragLoaded, this), d.off(y.Events.FRAG_BUFFERED, this.onFragBuffered, this), d.off(y.Events.LEVEL_LOADED, this.onLevelLoaded, this), d.off(y.Events.ERROR, this.onError, this);
          }, S.destroy = function() {
            this.unregisterListeners(), this.clearTimer(), this.hls = this.onCheck = null, this.fragCurrent = this.partCurrent = null;
          }, S.onFragLoading = function(d, t) {
            var r = t.frag;
            if (r.type === L.PlaylistLevelType.MAIN && !this.timer) {
              var n;
              this.fragCurrent = r, this.partCurrent = (n = t.part) != null ? n : null, this.timer = self.setInterval(this.onCheck, 100);
            }
          }, S.onLevelLoaded = function(d, t) {
            var r = this.hls.config;
            t.details.live ? this.bwEstimator.update(r.abrEwmaSlowLive, r.abrEwmaFastLive) : this.bwEstimator.update(r.abrEwmaSlowVoD, r.abrEwmaFastVoD);
          }, S._abandonRulesCheck = function() {
            var d = this.fragCurrent, t = this.partCurrent, r = this.hls, n = r.autoLevelEnabled, h = r.config, a = r.media;
            if (!(!d || !a)) {
              var f = t ? t.stats : d.stats, v = t ? t.duration : d.duration;
              if (f.aborted) {
                b.logger.warn("frag loader destroy or aborted, disarm abandonRules"), this.clearTimer(), this._nextAutoLevel = -1;
                return;
              }
              if (!(!n || a.paused || !a.playbackRate || !a.readyState)) {
                var _ = performance.now() - f.loading.start, p = Math.abs(a.playbackRate);
                if (!(_ <= 500 * v / p)) {
                  var o = r.levels, s = r.minAutoLevel, i = o[d.level], c = f.total || Math.max(f.loaded, Math.round(v * i.maxBitrate / 8)), l = Math.max(1, f.bwEstimate ? f.bwEstimate / 8 : f.loaded * 1e3 / _), k = (c - f.loaded) / l, I = a.currentTime, C = (w.BufferHelper.bufferInfo(a, I, h.maxBufferHole).end - I) / p;
                  if (!(C >= 2 * v / p || k <= C)) {
                    var P = Number.POSITIVE_INFINITY, N;
                    for (N = d.level - 1; N > s; N--) {
                      var B = o[N].maxBitrate;
                      if (P = v * B / (8 * 0.8 * l), P < C)
                        break;
                    }
                    if (!(P >= k)) {
                      var F = this.bwEstimator.getEstimate();
                      b.logger.warn("Fragment " + d.sn + (t ? " part " + t.index : "") + " of level " + d.level + " is loading too slowly and will cause an underbuffer; aborting and switching to level " + N + `
      Current BW estimate: ` + (Object(R.isFiniteNumber)(F) ? (F / 1024).toFixed(3) : "Unknown") + ` Kb/s
      Estimated load time for current fragment: ` + k.toFixed(3) + ` s
      Estimated load time for the next fragment: ` + P.toFixed(3) + ` s
      Time to underbuffer: ` + C.toFixed(3) + " s"), r.nextLoadLevel = N, this.bwEstimator.sample(_, f.loaded), this.clearTimer(), d.loader && (this.fragCurrent = this.partCurrent = null, d.loader.abort()), r.trigger(y.Events.FRAG_LOAD_EMERGENCY_ABORTED, { frag: d, part: t, stats: f });
                    }
                  }
                }
              }
            }
          }, S.onFragLoaded = function(d, t) {
            var r = t.frag, n = t.part;
            if (r.type === L.PlaylistLevelType.MAIN && Object(R.isFiniteNumber)(r.sn)) {
              var h = n ? n.stats : r.stats, a = n ? n.duration : r.duration;
              if (this.clearTimer(), this.lastLoadedFragLevel = r.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
                var f = this.hls.levels[r.level], v = (f.loaded ? f.loaded.bytes : 0) + h.loaded, _ = (f.loaded ? f.loaded.duration : 0) + a;
                f.loaded = { bytes: v, duration: _ }, f.realBitrate = Math.round(8 * v / _);
              }
              if (r.bitrateTest) {
                var p = { stats: h, frag: r, part: n, id: r.type };
                this.onFragBuffered(y.Events.FRAG_BUFFERED, p), r.bitrateTest = false;
              }
            }
          }, S.onFragBuffered = function(d, t) {
            var r = t.frag, n = t.part, h = n ? n.stats : r.stats;
            if (!h.aborted && !(r.type !== L.PlaylistLevelType.MAIN || r.sn === "initSegment")) {
              var a = h.parsing.end - h.loading.start;
              this.bwEstimator.sample(a, h.loaded), h.bwEstimate = this.bwEstimator.getEstimate(), r.bitrateTest ? this.bitrateTestDelay = a / 1e3 : this.bitrateTestDelay = 0;
            }
          }, S.onError = function(d, t) {
            switch (t.details) {
              case A.ErrorDetails.FRAG_LOAD_ERROR:
              case A.ErrorDetails.FRAG_LOAD_TIMEOUT:
                this.clearTimer();
                break;
              default:
                break;
            }
          }, S.clearTimer = function() {
            self.clearInterval(this.timer), this.timer = void 0;
          }, S.getNextABRAutoLevel = function() {
            var d = this.fragCurrent, t = this.partCurrent, r = this.hls, n = r.maxAutoLevel, h = r.config, a = r.minAutoLevel, f = r.media, v = t ? t.duration : d ? d.duration : 0, _ = f ? f.currentTime : 0, p = f && f.playbackRate !== 0 ? Math.abs(f.playbackRate) : 1, o = this.bwEstimator ? this.bwEstimator.getEstimate() : h.abrEwmaDefaultEstimate, s = (w.BufferHelper.bufferInfo(f, _, h.maxBufferHole).end - _) / p, i = this.findBestLevel(o, a, n, s, h.abrBandWidthFactor, h.abrBandWidthUpFactor);
            if (i >= 0)
              return i;
            b.logger.trace((s ? "rebuffering expected" : "buffer is empty") + ", finding optimal quality level");
            var c = v ? Math.min(v, h.maxStarvationDelay) : h.maxStarvationDelay, l = h.abrBandWidthFactor, k = h.abrBandWidthUpFactor;
            if (!s) {
              var I = this.bitrateTestDelay;
              if (I) {
                var C = v ? Math.min(v, h.maxLoadingDelay) : h.maxLoadingDelay;
                c = C - I, b.logger.trace("bitrate test took " + Math.round(1e3 * I) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * c) + " ms"), l = k = 1;
              }
            }
            return i = this.findBestLevel(o, a, n, s + c, l, k), Math.max(i, 0);
          }, S.findBestLevel = function(d, t, r, n, h, a) {
            for (var f, v = this.fragCurrent, _ = this.partCurrent, p = this.lastLoadedFragLevel, o = this.hls.levels, s = o[p], i = !!(s != null && (f = s.details) !== null && f !== void 0 && f.live), c = s == null ? void 0 : s.codecSet, l = _ ? _.duration : v ? v.duration : 0, k = r; k >= t; k--) {
              var I = o[k];
              if (!(!I || c && I.codecSet !== c)) {
                var C = I.details, P = (_ ? C == null ? void 0 : C.partTarget : C == null ? void 0 : C.averagetargetduration) || l, N = void 0;
                k <= p ? N = h * d : N = a * d;
                var B = o[k].maxBitrate, F = B * P / N;
                if (b.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + k + "/" + Math.round(N) + "/" + B + "/" + P + "/" + n + "/" + F), N > B && (!F || i && !this.bitrateTestDelay || F < n))
                  return k;
              }
            }
            return -1;
          }, g(E, [{ key: "nextAutoLevel", get: function() {
            var d = this._nextAutoLevel, t = this.bwEstimator;
            if (d !== -1 && (!t || !t.canEstimate()))
              return d;
            var r = this.getNextABRAutoLevel();
            return d !== -1 && (r = Math.min(d, r)), r;
          }, set: function(d) {
            this._nextAutoLevel = d;
          } }]), E;
        }();
        T.default = D;
      }, "./src/controller/audio-stream-controller.ts": function(x, T, e) {
        "use strict";
        e.r(T);
        var R = e("./src/polyfills/number.ts"), m = e("./src/controller/base-stream-controller.ts"), y = e("./src/events.ts"), w = e("./src/utils/buffer-helper.ts"), A = e("./src/controller/fragment-tracker.ts"), L = e("./src/types/level.ts"), b = e("./src/types/loader.ts"), u = e("./src/loader/fragment.ts"), g = e("./src/demux/chunk-cache.ts"), D = e("./src/demux/transmuxer-interface.ts"), E = e("./src/types/transmuxer.ts"), S = e("./src/controller/fragment-finders.ts"), d = e("./src/utils/discontinuities.ts"), t = e("./src/errors.ts"), r = e("./src/utils/logger.ts");
        function n() {
          return n = Object.assign || function(_) {
            for (var p = 1; p < arguments.length; p++) {
              var o = arguments[p];
              for (var s in o)
                Object.prototype.hasOwnProperty.call(o, s) && (_[s] = o[s]);
            }
            return _;
          }, n.apply(this, arguments);
        }
        function h(_, p) {
          _.prototype = Object.create(p.prototype), _.prototype.constructor = _, a(_, p);
        }
        function a(_, p) {
          return a = Object.setPrototypeOf || function(o, s) {
            return o.__proto__ = s, o;
          }, a(_, p);
        }
        var f = 100, v = function(_) {
          h(p, _);
          function p(s, i) {
            var c;
            return c = _.call(this, s, i, "[audio-stream-controller]") || this, c.videoBuffer = null, c.videoTrackCC = -1, c.waitingVideoCC = -1, c.audioSwitch = false, c.trackId = -1, c.waitingData = null, c.mainDetails = null, c.bufferFlushed = false, c._registerListeners(), c;
          }
          var o = p.prototype;
          return o.onHandlerDestroying = function() {
            this._unregisterListeners(), this.mainDetails = null;
          }, o._registerListeners = function() {
            var s = this.hls;
            s.on(y.Events.MEDIA_ATTACHED, this.onMediaAttached, this), s.on(y.Events.MEDIA_DETACHING, this.onMediaDetaching, this), s.on(y.Events.MANIFEST_LOADING, this.onManifestLoading, this), s.on(y.Events.LEVEL_LOADED, this.onLevelLoaded, this), s.on(y.Events.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), s.on(y.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), s.on(y.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), s.on(y.Events.ERROR, this.onError, this), s.on(y.Events.BUFFER_RESET, this.onBufferReset, this), s.on(y.Events.BUFFER_CREATED, this.onBufferCreated, this), s.on(y.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), s.on(y.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), s.on(y.Events.FRAG_BUFFERED, this.onFragBuffered, this);
          }, o._unregisterListeners = function() {
            var s = this.hls;
            s.off(y.Events.MEDIA_ATTACHED, this.onMediaAttached, this), s.off(y.Events.MEDIA_DETACHING, this.onMediaDetaching, this), s.off(y.Events.MANIFEST_LOADING, this.onManifestLoading, this), s.off(y.Events.LEVEL_LOADED, this.onLevelLoaded, this), s.off(y.Events.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), s.off(y.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), s.off(y.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), s.off(y.Events.ERROR, this.onError, this), s.off(y.Events.BUFFER_RESET, this.onBufferReset, this), s.off(y.Events.BUFFER_CREATED, this.onBufferCreated, this), s.off(y.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), s.off(y.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), s.off(y.Events.FRAG_BUFFERED, this.onFragBuffered, this);
          }, o.onInitPtsFound = function(s, i) {
            var c = i.frag, l = i.id, k = i.initPTS;
            if (l === "main") {
              var I = c.cc;
              this.initPTS[c.cc] = k, this.log("InitPTS for cc: " + I + " found from main: " + k), this.videoTrackCC = I, this.state === m.State.WAITING_INIT_PTS && this.tick();
            }
          }, o.startLoad = function(s) {
            if (!this.levels) {
              this.startPosition = s, this.state = m.State.STOPPED;
              return;
            }
            var i = this.lastCurrentTime;
            this.stopLoad(), this.setInterval(f), this.fragLoadError = 0, i > 0 && s === -1 ? (this.log("Override startPosition with lastCurrentTime @" + i.toFixed(3)), this.state = m.State.IDLE) : (this.loadedmetadata = false, this.state = m.State.WAITING_TRACK), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = s, this.tick();
          }, o.doTick = function() {
            switch (this.state) {
              case m.State.IDLE:
                this.doTickIdle();
                break;
              case m.State.WAITING_TRACK: {
                var s, i = this.levels, c = this.trackId, l = i == null || (s = i[c]) === null || s === void 0 ? void 0 : s.details;
                if (l) {
                  if (this.waitForCdnTuneIn(l))
                    break;
                  this.state = m.State.WAITING_INIT_PTS;
                }
                break;
              }
              case m.State.FRAG_LOADING_WAITING_RETRY: {
                var k, I = performance.now(), C = this.retryDate;
                (!C || I >= C || (k = this.media) !== null && k !== void 0 && k.seeking) && (this.log("RetryDate reached, switch back to IDLE state"), this.state = m.State.IDLE);
                break;
              }
              case m.State.WAITING_INIT_PTS: {
                var P = this.waitingData;
                if (P) {
                  var N = P.frag, B = P.part, F = P.cache, U = P.complete;
                  if (this.initPTS[N.cc] !== void 0) {
                    this.waitingData = null, this.waitingVideoCC = -1, this.state = m.State.FRAG_LOADING;
                    var j = F.flush(), H = { frag: N, part: B, payload: j, networkDetails: null };
                    this._handleFragmentLoadProgress(H), U && _.prototype._handleFragmentLoadComplete.call(this, H);
                  } else if (this.videoTrackCC !== this.waitingVideoCC)
                    r.logger.log("Waiting fragment cc (" + N.cc + ") cancelled because video is at cc " + this.videoTrackCC), this.clearWaitingFragment();
                  else {
                    var V = this.getLoadPosition(), K = w.BufferHelper.bufferInfo(this.mediaBuffer, V, this.config.maxBufferHole), q = Object(S.fragmentWithinToleranceTest)(K.end, this.config.maxFragLookUpTolerance, N);
                    q < 0 && (r.logger.log("Waiting fragment cc (" + N.cc + ") @ " + N.start + " cancelled because another fragment at " + K.end + " is needed"), this.clearWaitingFragment());
                  }
                } else
                  this.state = m.State.IDLE;
              }
            }
            this.onTickEnd();
          }, o.clearWaitingFragment = function() {
            var s = this.waitingData;
            s && (this.fragmentTracker.removeFragment(s.frag), this.waitingData = null, this.waitingVideoCC = -1, this.state = m.State.IDLE);
          }, o.onTickEnd = function() {
            var s = this.media;
            if (!(!s || !s.readyState)) {
              var i = this.mediaBuffer ? this.mediaBuffer : s, c = i.buffered;
              !this.loadedmetadata && c.length && (this.loadedmetadata = true), this.lastCurrentTime = s.currentTime;
            }
          }, o.doTickIdle = function() {
            var s, i, c = this.hls, l = this.levels, k = this.media, I = this.trackId, C = c.config;
            if (!(!l || !l[I]) && !(!k && (this.startFragRequested || !C.startFragPrefetch))) {
              var P = l[I], N = P.details;
              if (!N || N.live && this.levelLastLoaded !== I || this.waitForCdnTuneIn(N)) {
                this.state = m.State.WAITING_TRACK;
                return;
              }
              this.bufferFlushed && (this.bufferFlushed = false, this.afterBufferFlushed(this.mediaBuffer ? this.mediaBuffer : this.media, u.ElementaryStreamTypes.AUDIO, b.PlaylistLevelType.AUDIO));
              var B = this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, b.PlaylistLevelType.AUDIO);
              if (B !== null) {
                var F = B.len, U = this.getMaxBufferLength(), j = this.audioSwitch;
                if (!(F >= U && !j)) {
                  if (!j && this._streamEnded(B, N)) {
                    c.trigger(y.Events.BUFFER_EOS, { type: "audio" }), this.state = m.State.ENDED;
                    return;
                  }
                  var H = N.fragments, V = H[0].start, K = B.end;
                  if (j) {
                    var q = this.getLoadPosition();
                    K = q, N.PTSKnown && q < V && (B.end > V || B.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), k.currentTime = V + 0.05);
                  }
                  var $ = this.getNextFragment(K, N);
                  if (!$) {
                    this.bufferFlushed = true;
                    return;
                  }
                  ((s = $.decryptdata) === null || s === void 0 ? void 0 : s.keyFormat) === "identity" && !((i = $.decryptdata) !== null && i !== void 0 && i.key) ? this.loadKey($, N) : this.loadFragment($, N, K);
                }
              }
            }
          }, o.getMaxBufferLength = function() {
            var s = _.prototype.getMaxBufferLength.call(this), i = this.getFwdBufferInfo(this.videoBuffer ? this.videoBuffer : this.media, b.PlaylistLevelType.MAIN);
            return i === null ? s : Math.max(s, i.len);
          }, o.onMediaDetaching = function() {
            this.videoBuffer = null, _.prototype.onMediaDetaching.call(this);
          }, o.onAudioTracksUpdated = function(s, i) {
            var c = i.audioTracks;
            this.resetTransmuxer(), this.levels = c.map(function(l) {
              return new L.Level(l);
            });
          }, o.onAudioTrackSwitching = function(s, i) {
            var c = !!i.url;
            this.trackId = i.id;
            var l = this.fragCurrent;
            l != null && l.loader && l.loader.abort(), this.fragCurrent = null, this.clearWaitingFragment(), c ? this.setInterval(f) : this.resetTransmuxer(), c ? (this.audioSwitch = true, this.state = m.State.IDLE) : this.state = m.State.STOPPED, this.tick();
          }, o.onManifestLoading = function() {
            this.mainDetails = null, this.fragmentTracker.removeAllFragments(), this.startPosition = this.lastCurrentTime = 0, this.bufferFlushed = false;
          }, o.onLevelLoaded = function(s, i) {
            this.mainDetails = i.details;
          }, o.onAudioTrackLoaded = function(s, i) {
            var c, l = this.levels, k = i.details, I = i.id;
            if (!l) {
              this.warn("Audio tracks were reset while loading level " + I);
              return;
            }
            this.log("Track " + I + " loaded [" + k.startSN + "," + k.endSN + "],duration:" + k.totalduration);
            var C = l[I], P = 0;
            if (k.live || (c = C.details) !== null && c !== void 0 && c.live) {
              var N = this.mainDetails;
              if (k.fragments[0] || (k.deltaUpdateFailed = true), k.deltaUpdateFailed || !N)
                return;
              !C.details && k.hasProgramDateTime && N.hasProgramDateTime ? (Object(d.alignMediaPlaylistByPDT)(k, N), P = k.fragments[0].start) : P = this.alignPlaylists(k, C.details);
            }
            C.details = k, this.levelLastLoaded = I, !this.startFragRequested && (this.mainDetails || !k.live) && this.setStartPosition(C.details, P), this.state === m.State.WAITING_TRACK && !this.waitForCdnTuneIn(k) && (this.state = m.State.IDLE), this.tick();
          }, o._handleFragmentLoadProgress = function(s) {
            var i, c = s.frag, l = s.part, k = s.payload, I = this.config, C = this.trackId, P = this.levels;
            if (!P) {
              this.warn("Audio tracks were reset while fragment load was in progress. Fragment " + c.sn + " of level " + c.level + " will not be buffered");
              return;
            }
            var N = P[C];
            console.assert(N, "Audio track is defined on fragment load progress");
            var B = N.details;
            console.assert(B, "Audio track details are defined on fragment load progress");
            var F = I.defaultAudioCodec || N.audioCodec || "mp4a.40.2", U = this.transmuxer;
            U || (U = this.transmuxer = new D.default(this.hls, b.PlaylistLevelType.AUDIO, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
            var j = this.initPTS[c.cc], H = (i = c.initSegment) === null || i === void 0 ? void 0 : i.data;
            if (j !== void 0) {
              var V = false, K = l ? l.index : -1, q = K !== -1, $ = new E.ChunkMetadata(c.level, c.sn, c.stats.chunkCount, k.byteLength, K, q);
              U.push(k, H, F, "", c, l, B.totalduration, V, $, j);
            } else {
              r.logger.log("Unknown video PTS for cc " + c.cc + ", waiting for video PTS before demuxing audio frag " + c.sn + " of [" + B.startSN + " ," + B.endSN + "],track " + C);
              var J = this.waitingData = this.waitingData || { frag: c, part: l, cache: new g.default(), complete: false }, z = J.cache;
              z.push(new Uint8Array(k)), this.waitingVideoCC = this.videoTrackCC, this.state = m.State.WAITING_INIT_PTS;
            }
          }, o._handleFragmentLoadComplete = function(s) {
            if (this.waitingData) {
              this.waitingData.complete = true;
              return;
            }
            _.prototype._handleFragmentLoadComplete.call(this, s);
          }, o.onBufferReset = function() {
            this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = false;
          }, o.onBufferCreated = function(s, i) {
            var c = i.tracks.audio;
            c && (this.mediaBuffer = c.buffer), i.tracks.video && (this.videoBuffer = i.tracks.video.buffer);
          }, o.onFragBuffered = function(s, i) {
            var c = i.frag, l = i.part;
            if (c.type === b.PlaylistLevelType.AUDIO) {
              if (this.fragContextChanged(c)) {
                this.warn("Fragment " + c.sn + (l ? " p: " + l.index : "") + " of level " + c.level + " finished buffering, but was aborted. state: " + this.state + ", audioSwitch: " + this.audioSwitch);
                return;
              }
              c.sn !== "initSegment" && (this.fragPrevious = c, this.audioSwitch && (this.audioSwitch = false, this.hls.trigger(y.Events.AUDIO_TRACK_SWITCHED, { id: this.trackId }))), this.fragBufferedComplete(c, l);
            }
          }, o.onError = function(s, i) {
            switch (i.details) {
              case t.ErrorDetails.FRAG_LOAD_ERROR:
              case t.ErrorDetails.FRAG_LOAD_TIMEOUT:
              case t.ErrorDetails.KEY_LOAD_ERROR:
              case t.ErrorDetails.KEY_LOAD_TIMEOUT:
                this.onFragmentOrKeyLoadError(b.PlaylistLevelType.AUDIO, i);
                break;
              case t.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
              case t.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
                this.state !== m.State.ERROR && this.state !== m.State.STOPPED && (this.state = i.fatal ? m.State.ERROR : m.State.IDLE, this.warn(i.details + " while loading frag, switching to " + this.state + " state"));
                break;
              case t.ErrorDetails.BUFFER_FULL_ERROR:
                if (i.parent === "audio" && (this.state === m.State.PARSING || this.state === m.State.PARSED)) {
                  var c = true, l = this.getFwdBufferInfo(this.mediaBuffer, b.PlaylistLevelType.AUDIO);
                  l && l.len > 0.5 && (c = !this.reduceMaxBufferLength(l.len)), c && (this.warn("Buffer full error also media.currentTime is not buffered, flush audio buffer"), this.fragCurrent = null, _.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio")), this.resetLoadingState();
                }
                break;
              default:
                break;
            }
          }, o.onBufferFlushed = function(s, i) {
            var c = i.type;
            c === u.ElementaryStreamTypes.AUDIO && (this.bufferFlushed = true);
          }, o._handleTransmuxComplete = function(s) {
            var i, c = "audio", l = this.hls, k = s.remuxResult, I = s.chunkMeta, C = this.getCurrentContext(I);
            if (!C) {
              this.warn("The loading context changed while buffering fragment " + I.sn + " of level " + I.level + ". This chunk will not be buffered."), this.resetLiveStartWhenNotLoaded(I.level);
              return;
            }
            var P = C.frag, N = C.part, B = k.audio, F = k.text, U = k.id3, j = k.initSegment;
            if (!this.fragContextChanged(P)) {
              if (this.state = m.State.PARSING, this.audioSwitch && B && this.completeAudioSwitch(), j != null && j.tracks && (this._bufferInitSegment(j.tracks, P, I), l.trigger(y.Events.FRAG_PARSING_INIT_SEGMENT, { frag: P, id: c, tracks: j.tracks })), B) {
                var H = B.startPTS, V = B.endPTS, K = B.startDTS, q = B.endDTS;
                N && (N.elementaryStreams[u.ElementaryStreamTypes.AUDIO] = { startPTS: H, endPTS: V, startDTS: K, endDTS: q }), P.setElementaryStreamInfo(u.ElementaryStreamTypes.AUDIO, H, V, K, q), this.bufferFragmentData(B, P, N, I);
              }
              if (U != null && (i = U.samples) !== null && i !== void 0 && i.length) {
                var $ = n({ frag: P, id: c }, U);
                l.trigger(y.Events.FRAG_PARSING_METADATA, $);
              }
              if (F) {
                var J = n({ frag: P, id: c }, F);
                l.trigger(y.Events.FRAG_PARSING_USERDATA, J);
              }
            }
          }, o._bufferInitSegment = function(s, i, c) {
            if (this.state === m.State.PARSING) {
              s.video && delete s.video;
              var l = s.audio;
              if (l) {
                l.levelCodec = l.codec, l.id = "audio", this.log("Init audio buffer, container:" + l.container + ", codecs[parsed]=[" + l.codec + "]"), this.hls.trigger(y.Events.BUFFER_CODECS, s);
                var k = l.initSegment;
                if (k != null && k.byteLength) {
                  var I = { type: "audio", frag: i, part: null, chunkMeta: c, parent: i.type, data: k };
                  this.hls.trigger(y.Events.BUFFER_APPENDING, I);
                }
                this.tick();
              }
            }
          }, o.loadFragment = function(s, i, c) {
            var l = this.fragmentTracker.getState(s);
            this.fragCurrent = s, (this.audioSwitch || l === A.FragmentState.NOT_LOADED || l === A.FragmentState.PARTIAL) && (s.sn === "initSegment" ? this._loadInitSegment(s) : i.live && !Object(R.isFiniteNumber)(this.initPTS[s.cc]) ? (this.log("Waiting for video PTS in continuity counter " + s.cc + " of live stream before loading audio fragment " + s.sn + " of level " + this.trackId), this.state = m.State.WAITING_INIT_PTS) : (this.startFragRequested = true, _.prototype.loadFragment.call(this, s, i, c)));
          }, o.completeAudioSwitch = function() {
            var s = this.hls, i = this.media, c = this.trackId;
            i && (this.log("Switching audio track : flushing all audio"), _.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio")), this.audioSwitch = false, s.trigger(y.Events.AUDIO_TRACK_SWITCHED, { id: c });
          }, p;
        }(m.default);
        T.default = v;
      }, "./src/controller/audio-track-controller.ts": function(x, T, e) {
        "use strict";
        e.r(T);
        var R = e("./src/events.ts"), m = e("./src/errors.ts"), y = e("./src/controller/base-playlist-controller.ts"), w = e("./src/types/loader.ts");
        function A(D, E) {
          for (var S = 0; S < E.length; S++) {
            var d = E[S];
            d.enumerable = d.enumerable || false, d.configurable = true, "value" in d && (d.writable = true), Object.defineProperty(D, d.key, d);
          }
        }
        function L(D, E, S) {
          return E && A(D.prototype, E), S && A(D, S), D;
        }
        function b(D, E) {
          D.prototype = Object.create(E.prototype), D.prototype.constructor = D, u(D, E);
        }
        function u(D, E) {
          return u = Object.setPrototypeOf || function(S, d) {
            return S.__proto__ = d, S;
          }, u(D, E);
        }
        var g = function(D) {
          b(E, D);
          function E(d) {
            var t;
            return t = D.call(this, d, "[audio-track-controller]") || this, t.tracks = [], t.groupId = null, t.tracksInGroup = [], t.trackId = -1, t.trackName = "", t.selectDefaultTrack = true, t.registerListeners(), t;
          }
          var S = E.prototype;
          return S.registerListeners = function() {
            var d = this.hls;
            d.on(R.Events.MANIFEST_LOADING, this.onManifestLoading, this), d.on(R.Events.MANIFEST_PARSED, this.onManifestParsed, this), d.on(R.Events.LEVEL_LOADING, this.onLevelLoading, this), d.on(R.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), d.on(R.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), d.on(R.Events.ERROR, this.onError, this);
          }, S.unregisterListeners = function() {
            var d = this.hls;
            d.off(R.Events.MANIFEST_LOADING, this.onManifestLoading, this), d.off(R.Events.MANIFEST_PARSED, this.onManifestParsed, this), d.off(R.Events.LEVEL_LOADING, this.onLevelLoading, this), d.off(R.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), d.off(R.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), d.off(R.Events.ERROR, this.onError, this);
          }, S.destroy = function() {
            this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, D.prototype.destroy.call(this);
          }, S.onManifestLoading = function() {
            this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.trackName = "", this.selectDefaultTrack = true;
          }, S.onManifestParsed = function(d, t) {
            this.tracks = t.audioTracks || [];
          }, S.onAudioTrackLoaded = function(d, t) {
            var r = t.id, n = t.details, h = this.tracksInGroup[r];
            if (!h) {
              this.warn("Invalid audio track id " + r);
              return;
            }
            var a = h.details;
            h.details = t.details, this.log("audioTrack " + r + " loaded [" + n.startSN + "-" + n.endSN + "]"), r === this.trackId && (this.retryCount = 0, this.playlistLoaded(r, t, a));
          }, S.onLevelLoading = function(d, t) {
            this.switchLevel(t.level);
          }, S.onLevelSwitching = function(d, t) {
            this.switchLevel(t.level);
          }, S.switchLevel = function(d) {
            var t = this.hls.levels[d];
            if (t != null && t.audioGroupIds) {
              var r = t.audioGroupIds[t.urlId];
              if (this.groupId !== r) {
                this.groupId = r;
                var n = this.tracks.filter(function(a) {
                  return !r || a.groupId === r;
                });
                this.selectDefaultTrack && !n.some(function(a) {
                  return a.default;
                }) && (this.selectDefaultTrack = false), this.tracksInGroup = n;
                var h = { audioTracks: n };
                this.log("Updating audio tracks, " + n.length + ' track(s) found in "' + r + '" group-id'), this.hls.trigger(R.Events.AUDIO_TRACKS_UPDATED, h), this.selectInitialTrack();
              }
            }
          }, S.onError = function(d, t) {
            D.prototype.onError.call(this, d, t), !(t.fatal || !t.context) && t.context.type === w.PlaylistContextType.AUDIO_TRACK && t.context.id === this.trackId && t.context.groupId === this.groupId && this.retryLoadingOrFail(t);
          }, S.setAudioTrack = function(d) {
            var t = this.tracksInGroup;
            if (d < 0 || d >= t.length) {
              this.warn("Invalid id passed to audio-track controller");
              return;
            }
            this.clearTimer();
            var r = t[this.trackId];
            this.log("Now switching to audio-track index " + d);
            var n = t[d], h = n.id, a = n.groupId, f = a === void 0 ? "" : a, v = n.name, _ = n.type, p = n.url;
            if (this.trackId = d, this.trackName = v, this.selectDefaultTrack = false, this.hls.trigger(R.Events.AUDIO_TRACK_SWITCHING, { id: h, groupId: f, name: v, type: _, url: p }), !(n.details && !n.details.live)) {
              var o = this.switchParams(n.url, r == null ? void 0 : r.details);
              this.loadPlaylist(o);
            }
          }, S.selectInitialTrack = function() {
            var d = this.tracksInGroup;
            console.assert(d.length, "Initial audio track should be selected when tracks are known");
            var t = this.trackName, r = this.findTrackId(t) || this.findTrackId();
            r !== -1 ? this.setAudioTrack(r) : (this.warn("No track found for running audio group-ID: " + this.groupId), this.hls.trigger(R.Events.ERROR, { type: m.ErrorTypes.MEDIA_ERROR, details: m.ErrorDetails.AUDIO_TRACK_LOAD_ERROR, fatal: true }));
          }, S.findTrackId = function(d) {
            for (var t = this.tracksInGroup, r = 0; r < t.length; r++) {
              var n = t[r];
              if ((!this.selectDefaultTrack || n.default) && (!d || d === n.name))
                return n.id;
            }
            return -1;
          }, S.loadPlaylist = function(d) {
            var t = this.tracksInGroup[this.trackId];
            if (this.shouldLoadTrack(t)) {
              var r = t.id, n = t.groupId, h = t.url;
              if (d)
                try {
                  h = d.addDirectives(h);
                } catch (a) {
                  this.warn("Could not construct new URL with HLS Delivery Directives: " + a);
                }
              this.log("loading audio-track playlist for id: " + r), this.clearTimer(), this.hls.trigger(R.Events.AUDIO_TRACK_LOADING, { url: h, id: r, groupId: n, deliveryDirectives: d || null });
            }
          }, L(E, [{ key: "audioTracks", get: function() {
            return this.tracksInGroup;
          } }, { key: "audioTrack", get: function() {
            return this.trackId;
          }, set: function(d) {
            this.selectDefaultTrack = false, this.setAudioTrack(d);
          } }]), E;
        }(y.default);
        T.default = g;
      }, "./src/controller/base-playlist-controller.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "default", function() {
          return L;
        });
        var R = e("./src/polyfills/number.ts"), m = e("./src/types/level.ts"), y = e("./src/controller/level-helper.ts"), w = e("./src/utils/logger.ts"), A = e("./src/errors.ts"), L = function() {
          function b(g, D) {
            this.hls = void 0, this.timer = -1, this.canLoad = false, this.retryCount = 0, this.log = void 0, this.warn = void 0, this.log = w.logger.log.bind(w.logger, D + ":"), this.warn = w.logger.warn.bind(w.logger, D + ":"), this.hls = g;
          }
          var u = b.prototype;
          return u.destroy = function() {
            this.clearTimer(), this.hls = this.log = this.warn = null;
          }, u.onError = function(g, D) {
            D.fatal && D.type === A.ErrorTypes.NETWORK_ERROR && this.clearTimer();
          }, u.clearTimer = function() {
            clearTimeout(this.timer), this.timer = -1;
          }, u.startLoad = function() {
            this.canLoad = true, this.retryCount = 0, this.loadPlaylist();
          }, u.stopLoad = function() {
            this.canLoad = false, this.clearTimer();
          }, u.switchParams = function(g, D) {
            var E = D == null ? void 0 : D.renditionReports;
            if (E)
              for (var S = 0; S < E.length; S++) {
                var d = E[S], t = "" + d.URI;
                if (t === g.substr(-t.length)) {
                  var r = parseInt(d["LAST-MSN"]), n = parseInt(d["LAST-PART"]);
                  if (D && this.hls.config.lowLatencyMode) {
                    var h = Math.min(D.age - D.partTarget, D.targetduration);
                    n !== void 0 && h > D.partTarget && (n += 1);
                  }
                  if (Object(R.isFiniteNumber)(r))
                    return new m.HlsUrlParameters(r, Object(R.isFiniteNumber)(n) ? n : void 0, m.HlsSkip.No);
                }
              }
          }, u.loadPlaylist = function(g) {
          }, u.shouldLoadTrack = function(g) {
            return this.canLoad && g && !!g.url && (!g.details || g.details.live);
          }, u.playlistLoaded = function(g, D, E) {
            var S = this, d = D.details, t = D.stats, r = t.loading.end ? Math.max(0, self.performance.now() - t.loading.end) : 0;
            if (d.advancedDateTime = Date.now() - r, d.live || E != null && E.live) {
              if (d.reloaded(E), E && this.log("live playlist " + g + " " + (d.advanced ? "REFRESHED " + d.lastPartSn + "-" + d.lastPartIndex : "MISSED")), E && d.fragments.length > 0 && Object(y.mergeDetails)(E, d), !this.canLoad || !d.live)
                return;
              var n, h = void 0, a = void 0;
              if (d.canBlockReload && d.endSN && d.advanced) {
                var f = this.hls.config.lowLatencyMode, v = d.lastPartSn, _ = d.endSN, p = d.lastPartIndex, o = p !== -1, s = v === _, i = f ? 0 : p;
                o ? (h = s ? _ + 1 : v, a = s ? i : p + 1) : h = _ + 1;
                var c = d.age, l = c + d.ageHeader, k = Math.min(l - d.partTarget, d.targetduration * 1.5);
                if (k > 0) {
                  if (E && k > E.tuneInGoal)
                    this.warn("CDN Tune-in goal increased from: " + E.tuneInGoal + " to: " + k + " with playlist age: " + d.age), k = 0;
                  else {
                    var I = Math.floor(k / d.targetduration);
                    if (h += I, a !== void 0) {
                      var C = Math.round(k % d.targetduration / d.partTarget);
                      a += C;
                    }
                    this.log("CDN Tune-in age: " + d.ageHeader + "s last advanced " + c.toFixed(2) + "s goal: " + k + " skip sn " + I + " to part " + a);
                  }
                  d.tuneInGoal = k;
                }
                if (n = this.getDeliveryDirectives(d, D.deliveryDirectives, h, a), f || !s) {
                  this.loadPlaylist(n);
                  return;
                }
              } else
                n = this.getDeliveryDirectives(d, D.deliveryDirectives, h, a);
              var P = Object(y.computeReloadInterval)(d, t);
              h !== void 0 && d.canBlockReload && (P -= d.partTarget || 1), this.log("reload live playlist " + g + " in " + Math.round(P) + " ms"), this.timer = self.setTimeout(function() {
                return S.loadPlaylist(n);
              }, P);
            } else
              this.clearTimer();
          }, u.getDeliveryDirectives = function(g, D, E, S) {
            var d = Object(m.getSkipValue)(g, E);
            return D != null && D.skip && g.deltaUpdateFailed && (E = D.msn, S = D.part, d = m.HlsSkip.No), new m.HlsUrlParameters(E, S, d);
          }, u.retryLoadingOrFail = function(g) {
            var D = this, E = this.hls.config, S = this.retryCount < E.levelLoadingMaxRetry;
            if (S) {
              var d;
              if (this.retryCount++, g.details.indexOf("LoadTimeOut") > -1 && (d = g.context) !== null && d !== void 0 && d.deliveryDirectives)
                this.warn("retry playlist loading #" + this.retryCount + ' after "' + g.details + '"'), this.loadPlaylist();
              else {
                var t = Math.min(Math.pow(2, this.retryCount) * E.levelLoadingRetryDelay, E.levelLoadingMaxRetryTimeout);
                this.timer = self.setTimeout(function() {
                  return D.loadPlaylist();
                }, t), this.warn("retry playlist loading #" + this.retryCount + " in " + t + ' ms after "' + g.details + '"');
              }
            } else
              this.warn('cannot recover from error "' + g.details + '"'), this.clearTimer(), g.fatal = true;
            return S;
          }, b;
        }();
      }, "./src/controller/base-stream-controller.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "State", function() {
          return p;
        }), e.d(T, "default", function() {
          return o;
        });
        var R = e("./src/polyfills/number.ts"), m = e("./src/task-loop.ts"), y = e("./src/controller/fragment-tracker.ts"), w = e("./src/utils/buffer-helper.ts"), A = e("./src/utils/logger.ts"), L = e("./src/events.ts"), b = e("./src/errors.ts"), u = e("./src/types/transmuxer.ts"), g = e("./src/utils/mp4-tools.ts"), D = e("./src/utils/discontinuities.ts"), E = e("./src/controller/fragment-finders.ts"), S = e("./src/controller/level-helper.ts"), d = e("./src/loader/fragment-loader.ts"), t = e("./src/crypt/decrypter.ts"), r = e("./src/utils/time-ranges.ts"), n = e("./src/types/loader.ts");
        function h(s, i) {
          for (var c = 0; c < i.length; c++) {
            var l = i[c];
            l.enumerable = l.enumerable || false, l.configurable = true, "value" in l && (l.writable = true), Object.defineProperty(s, l.key, l);
          }
        }
        function a(s, i, c) {
          return i && h(s.prototype, i), c && h(s, c), s;
        }
        function f(s) {
          if (s === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return s;
        }
        function v(s, i) {
          s.prototype = Object.create(i.prototype), s.prototype.constructor = s, _(s, i);
        }
        function _(s, i) {
          return _ = Object.setPrototypeOf || function(c, l) {
            return c.__proto__ = l, c;
          }, _(s, i);
        }
        var p = { STOPPED: "STOPPED", IDLE: "IDLE", KEY_LOADING: "KEY_LOADING", FRAG_LOADING: "FRAG_LOADING", FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY", WAITING_TRACK: "WAITING_TRACK", PARSING: "PARSING", PARSED: "PARSED", BACKTRACKING: "BACKTRACKING", ENDED: "ENDED", ERROR: "ERROR", WAITING_INIT_PTS: "WAITING_INIT_PTS", WAITING_LEVEL: "WAITING_LEVEL" }, o = function(s) {
          v(i, s);
          function i(l, k, I) {
            var C;
            return C = s.call(this) || this, C.hls = void 0, C.fragPrevious = null, C.fragCurrent = null, C.fragmentTracker = void 0, C.transmuxer = null, C._state = p.STOPPED, C.media = void 0, C.mediaBuffer = void 0, C.config = void 0, C.bitrateTest = false, C.lastCurrentTime = 0, C.nextLoadPosition = 0, C.startPosition = 0, C.loadedmetadata = false, C.fragLoadError = 0, C.retryDate = 0, C.levels = null, C.fragmentLoader = void 0, C.levelLastLoaded = null, C.startFragRequested = false, C.decrypter = void 0, C.initPTS = [], C.onvseeking = null, C.onvended = null, C.logPrefix = "", C.log = void 0, C.warn = void 0, C.logPrefix = I, C.log = A.logger.log.bind(A.logger, I + ":"), C.warn = A.logger.warn.bind(A.logger, I + ":"), C.hls = l, C.fragmentLoader = new d.default(l.config), C.fragmentTracker = k, C.config = l.config, C.decrypter = new t.default(l, l.config), l.on(L.Events.KEY_LOADED, C.onKeyLoaded, f(C)), C;
          }
          var c = i.prototype;
          return c.doTick = function() {
            this.onTickEnd();
          }, c.onTickEnd = function() {
          }, c.startLoad = function(l) {
          }, c.stopLoad = function() {
            this.fragmentLoader.abort();
            var l = this.fragCurrent;
            l && this.fragmentTracker.removeFragment(l), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = p.STOPPED;
          }, c._streamEnded = function(l, k) {
            var I = this.fragCurrent, C = this.fragmentTracker;
            if (!k.live && I && I.sn === k.endSN && !l.nextStart) {
              var P = C.getState(I);
              return P === y.FragmentState.PARTIAL || P === y.FragmentState.OK;
            }
            return false;
          }, c.onMediaAttached = function(l, k) {
            var I = this.media = this.mediaBuffer = k.media;
            this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), I.addEventListener("seeking", this.onvseeking), I.addEventListener("ended", this.onvended);
            var C = this.config;
            this.levels && C.autoStartLoad && this.state === p.STOPPED && this.startLoad(C.startPosition);
          }, c.onMediaDetaching = function() {
            var l = this.media;
            l != null && l.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), l && (l.removeEventListener("seeking", this.onvseeking), l.removeEventListener("ended", this.onvended), this.onvseeking = this.onvended = null), this.media = this.mediaBuffer = null, this.loadedmetadata = false, this.fragmentTracker.removeAllFragments(), this.stopLoad();
          }, c.onMediaSeeking = function() {
            var l = this.config, k = this.fragCurrent, I = this.media, C = this.mediaBuffer, P = this.state, N = I ? I.currentTime : 0, B = w.BufferHelper.bufferInfo(C || I, N, l.maxBufferHole);
            if (this.log("media seeking to " + (Object(R.isFiniteNumber)(N) ? N.toFixed(3) : N) + ", state: " + P), P === p.ENDED)
              this.resetLoadingState();
            else if (k && !B.len) {
              var F = l.maxFragLookUpTolerance, U = k.start - F, j = k.start + k.duration + F, H = N > j;
              (N < U || H) && (H && k.loader && (this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), k.loader.abort()), this.resetLoadingState());
            }
            I && (this.lastCurrentTime = N), !this.loadedmetadata && !B.len && (this.nextLoadPosition = this.startPosition = N), this.tickImmediate();
          }, c.onMediaEnded = function() {
            this.startPosition = this.lastCurrentTime = 0;
          }, c.onKeyLoaded = function(l, k) {
            if (!(this.state !== p.KEY_LOADING || k.frag !== this.fragCurrent || !this.levels)) {
              this.state = p.IDLE;
              var I = this.levels[k.frag.level].details;
              I && this.loadFragment(k.frag, I, k.frag.start);
            }
          }, c.onHandlerDestroying = function() {
            this.stopLoad(), s.prototype.onHandlerDestroying.call(this);
          }, c.onHandlerDestroyed = function() {
            this.state = p.STOPPED, this.hls.off(L.Events.KEY_LOADED, this.onKeyLoaded, this), this.fragmentLoader && this.fragmentLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.fragmentLoader = this.fragmentTracker = null, s.prototype.onHandlerDestroyed.call(this);
          }, c.loadKey = function(l, k) {
            this.log("Loading key for " + l.sn + " of [" + k.startSN + "-" + k.endSN + "], " + (this.logPrefix === "[stream-controller]" ? "level" : "track") + " " + l.level), this.state = p.KEY_LOADING, this.fragCurrent = l, this.hls.trigger(L.Events.KEY_LOADING, { frag: l });
          }, c.loadFragment = function(l, k, I) {
            this._loadFragForPlayback(l, k, I);
          }, c._loadFragForPlayback = function(l, k, I) {
            var C = this, P = function(N) {
              if (C.fragContextChanged(l)) {
                C.warn("Fragment " + l.sn + (N.part ? " p: " + N.part.index : "") + " of level " + l.level + " was dropped during download."), C.fragmentTracker.removeFragment(l);
                return;
              }
              l.stats.chunkCount++, C._handleFragmentLoadProgress(N);
            };
            this._doFragLoad(l, k, I, P).then(function(N) {
              if (N) {
                C.fragLoadError = 0;
                var B = C.state;
                if (C.fragContextChanged(l)) {
                  (B === p.FRAG_LOADING || B === p.BACKTRACKING || !C.fragCurrent && B === p.PARSING) && (C.fragmentTracker.removeFragment(l), C.state = p.IDLE);
                  return;
                }
                if ("payload" in N && (C.log("Loaded fragment " + l.sn + " of level " + l.level), C.hls.trigger(L.Events.FRAG_LOADED, N), C.state === p.BACKTRACKING)) {
                  C.fragmentTracker.backtrack(l, N), C.resetFragmentLoading(l);
                  return;
                }
                C._handleFragmentLoadComplete(N);
              }
            }).catch(function(N) {
              C.warn(N), C.resetFragmentLoading(l);
            });
          }, c.flushMainBuffer = function(l, k, I) {
            if (I === void 0 && (I = null), !!(l - k)) {
              var C = { startOffset: l, endOffset: k, type: I };
              this.fragLoadError = 0, this.hls.trigger(L.Events.BUFFER_FLUSHING, C);
            }
          }, c._loadInitSegment = function(l) {
            var k = this;
            this._doFragLoad(l).then(function(I) {
              if (!I || k.fragContextChanged(l) || !k.levels)
                throw new Error("init load aborted");
              return I;
            }).then(function(I) {
              var C = k.hls, P = I.payload, N = l.decryptdata;
              if (P && P.byteLength > 0 && N && N.key && N.iv && N.method === "AES-128") {
                var B = self.performance.now();
                return k.decrypter.webCryptoDecrypt(new Uint8Array(P), N.key.buffer, N.iv.buffer).then(function(F) {
                  var U = self.performance.now();
                  return C.trigger(L.Events.FRAG_DECRYPTED, { frag: l, payload: F, stats: { tstart: B, tdecrypt: U } }), I.payload = F, I;
                });
              }
              return I;
            }).then(function(I) {
              var C = k.fragCurrent, P = k.hls, N = k.levels;
              if (!N)
                throw new Error("init load aborted, missing levels");
              var B = N[l.level].details;
              console.assert(B, "Level details are defined when init segment is loaded");
              var F = l.stats;
              k.state = p.IDLE, k.fragLoadError = 0, l.data = new Uint8Array(I.payload), F.parsing.start = F.buffering.start = self.performance.now(), F.parsing.end = F.buffering.end = self.performance.now(), I.frag === C && P.trigger(L.Events.FRAG_BUFFERED, { stats: F, frag: C, part: null, id: l.type }), k.tick();
            }).catch(function(I) {
              k.warn(I), k.resetFragmentLoading(l);
            });
          }, c.fragContextChanged = function(l) {
            var k = this.fragCurrent;
            return !l || !k || l.level !== k.level || l.sn !== k.sn || l.urlId !== k.urlId;
          }, c.fragBufferedComplete = function(l, k) {
            var I = this.mediaBuffer ? this.mediaBuffer : this.media;
            this.log("Buffered " + l.type + " sn: " + l.sn + (k ? " part: " + k.index : "") + " of " + (this.logPrefix === "[stream-controller]" ? "level" : "track") + " " + l.level + " " + r.default.toString(w.BufferHelper.getBuffered(I))), this.state = p.IDLE, this.tick();
          }, c._handleFragmentLoadComplete = function(l) {
            var k = this.transmuxer;
            if (k) {
              var I = l.frag, C = l.part, P = l.partsLoaded, N = !P || P.length === 0 || P.some(function(F) {
                return !F;
              }), B = new u.ChunkMetadata(I.level, I.sn, I.stats.chunkCount + 1, 0, C ? C.index : -1, !N);
              k.flush(B);
            }
          }, c._handleFragmentLoadProgress = function(l) {
          }, c._doFragLoad = function(l, k, I, C) {
            var P = this;
            if (I === void 0 && (I = null), !this.levels)
              throw new Error("frag load aborted, missing levels");
            if (I = Math.max(l.start, I || 0), this.config.lowLatencyMode && k) {
              var N = k.partList;
              if (N && C) {
                I > l.end && k.fragmentHint && (l = k.fragmentHint);
                var B = this.getNextPart(N, l, I);
                if (B > -1) {
                  var F = N[B];
                  return this.log("Loading part sn: " + l.sn + " p: " + F.index + " cc: " + l.cc + " of playlist [" + k.startSN + "-" + k.endSN + "] parts [0-" + B + "-" + (N.length - 1) + "] " + (this.logPrefix === "[stream-controller]" ? "level" : "track") + ": " + l.level + ", target: " + parseFloat(I.toFixed(3))), this.nextLoadPosition = F.start + F.duration, this.state = p.FRAG_LOADING, this.hls.trigger(L.Events.FRAG_LOADING, { frag: l, part: N[B], targetBufferTime: I }), this.doFragPartsLoad(l, N, B, C).catch(function(U) {
                    return P.handleFragLoadError(U);
                  });
                } else if (!l.url || this.loadedEndOfParts(N, I))
                  return Promise.resolve(null);
              }
            }
            return this.log("Loading fragment " + l.sn + " cc: " + l.cc + " " + (k ? "of [" + k.startSN + "-" + k.endSN + "] " : "") + (this.logPrefix === "[stream-controller]" ? "level" : "track") + ": " + l.level + ", target: " + parseFloat(I.toFixed(3))), Object(R.isFiniteNumber)(l.sn) && !this.bitrateTest && (this.nextLoadPosition = l.start + l.duration), this.state = p.FRAG_LOADING, this.hls.trigger(L.Events.FRAG_LOADING, { frag: l, targetBufferTime: I }), this.fragmentLoader.load(l, C).catch(function(U) {
              return P.handleFragLoadError(U);
            });
          }, c.doFragPartsLoad = function(l, k, I, C) {
            var P = this;
            return new Promise(function(N, B) {
              var F = [], U = function j(H) {
                var V = k[H];
                P.fragmentLoader.loadPart(l, V, C).then(function(K) {
                  F[V.index] = K;
                  var q = K.part;
                  P.hls.trigger(L.Events.FRAG_LOADED, K);
                  var $ = k[H + 1];
                  if ($ && $.fragment === l)
                    j(H + 1);
                  else
                    return N({ frag: l, part: q, partsLoaded: F });
                }).catch(B);
              };
              U(I);
            });
          }, c.handleFragLoadError = function(l) {
            var k = l.data;
            return k && k.details === b.ErrorDetails.INTERNAL_ABORTED ? this.handleFragLoadAborted(k.frag, k.part) : this.hls.trigger(L.Events.ERROR, k), null;
          }, c._handleTransmuxerFlush = function(l) {
            var k = this.getCurrentContext(l);
            if (!k || this.state !== p.PARSING) {
              this.fragCurrent || (this.state = p.IDLE);
              return;
            }
            var I = k.frag, C = k.part, P = k.level, N = self.performance.now();
            I.stats.parsing.end = N, C && (C.stats.parsing.end = N), this.updateLevelTiming(I, C, P, l.partial);
          }, c.getCurrentContext = function(l) {
            var k = this.levels, I = l.level, C = l.sn, P = l.part;
            if (!k || !k[I])
              return this.warn("Levels object was unset while buffering fragment " + C + " of level " + I + ". The current chunk will not be buffered."), null;
            var N = k[I], B = P > -1 ? Object(S.getPartWith)(N, C, P) : null, F = B ? B.fragment : Object(S.getFragmentWithSN)(N, C, this.fragCurrent);
            return F ? { frag: F, part: B, level: N } : null;
          }, c.bufferFragmentData = function(l, k, I, C) {
            if (!(!l || this.state !== p.PARSING)) {
              var P = l.data1, N = l.data2, B = P;
              if (P && N && (B = Object(g.appendUint8Array)(P, N)), !(!B || !B.length)) {
                var F = { type: l.type, frag: k, part: I, chunkMeta: C, parent: k.type, data: B };
                this.hls.trigger(L.Events.BUFFER_APPENDING, F), l.dropped && l.independent && !I && this.flushBufferGap(k);
              }
            }
          }, c.flushBufferGap = function(l) {
            var k = this.media;
            if (k) {
              if (!w.BufferHelper.isBuffered(k, k.currentTime)) {
                this.flushMainBuffer(0, l.start);
                return;
              }
              var I = k.currentTime, C = w.BufferHelper.bufferInfo(k, I, 0), P = l.duration, N = Math.min(this.config.maxFragLookUpTolerance * 2, P * 0.25), B = Math.max(Math.min(l.start - N, C.end - N), I + N);
              l.start - B > N && this.flushMainBuffer(B, l.start);
            }
          }, c.getFwdBufferInfo = function(l, k) {
            var I = this.config, C = this.getLoadPosition();
            if (!Object(R.isFiniteNumber)(C))
              return null;
            var P = w.BufferHelper.bufferInfo(l, C, I.maxBufferHole);
            if (P.len === 0 && P.nextStart !== void 0) {
              var N = this.fragmentTracker.getBufferedFrag(C, k);
              if (N && P.nextStart < N.end)
                return w.BufferHelper.bufferInfo(l, C, Math.max(P.nextStart, I.maxBufferHole));
            }
            return P;
          }, c.getMaxBufferLength = function(l) {
            var k = this.config, I;
            return l ? I = Math.max(8 * k.maxBufferSize / l, k.maxBufferLength) : I = k.maxBufferLength, Math.min(I, k.maxMaxBufferLength);
          }, c.reduceMaxBufferLength = function(l) {
            var k = this.config, I = l || k.maxBufferLength;
            return k.maxMaxBufferLength >= I ? (k.maxMaxBufferLength /= 2, this.warn("Reduce max buffer length to " + k.maxMaxBufferLength + "s"), true) : false;
          }, c.getNextFragment = function(l, k) {
            var I, C, P = k.fragments, N = P.length;
            if (!N)
              return null;
            var B = this.config, F = P[0].start, U;
            if (k.live) {
              var j = B.initialLiveManifestSize;
              if (N < j)
                return this.warn("Not enough fragments to start playback (have: " + N + ", need: " + j + ")"), null;
              !k.PTSKnown && !this.startFragRequested && this.startPosition === -1 && (U = this.getInitialLiveFragment(k, P), this.startPosition = U ? this.hls.liveSyncPosition || U.start : l);
            } else
              l <= F && (U = P[0]);
            if (!U) {
              var H = B.lowLatencyMode ? k.partEnd : k.fragmentEnd;
              U = this.getFragmentAtPosition(l, H, k);
            }
            return (I = U) !== null && I !== void 0 && I.initSegment && !((C = U) !== null && C !== void 0 && C.initSegment.data) && !this.bitrateTest && (U = U.initSegment), U;
          }, c.getNextPart = function(l, k, I) {
            for (var C = -1, P = false, N = true, B = 0, F = l.length; B < F; B++) {
              var U = l[B];
              if (N = N && !U.independent, C > -1 && I < U.start)
                break;
              var j = U.loaded;
              !j && (P || U.independent || N) && U.fragment === k && (C = B), P = j;
            }
            return C;
          }, c.loadedEndOfParts = function(l, k) {
            var I = l[l.length - 1];
            return I && k > I.start && I.loaded;
          }, c.getInitialLiveFragment = function(l, k) {
            var I = this.fragPrevious, C = null;
            if (I) {
              if (l.hasProgramDateTime && (this.log("Live playlist, switching playlist, load frag with same PDT: " + I.programDateTime), C = Object(E.findFragmentByPDT)(k, I.endProgramDateTime, this.config.maxFragLookUpTolerance)), !C) {
                var P = I.sn + 1;
                if (P >= l.startSN && P <= l.endSN) {
                  var N = k[P - l.startSN];
                  I.cc === N.cc && (C = N, this.log("Live playlist, switching playlist, load frag with next SN: " + C.sn));
                }
                C || (C = Object(E.findFragWithCC)(k, I.cc), C && this.log("Live playlist, switching playlist, load frag with same CC: " + C.sn));
              }
            } else {
              var B = this.hls.liveSyncPosition;
              B !== null && (C = this.getFragmentAtPosition(B, this.bitrateTest ? l.fragmentEnd : l.edge, l));
            }
            return C;
          }, c.getFragmentAtPosition = function(l, k, I) {
            var C = this.config, P = this.fragPrevious, N = I.fragments, B = I.endSN, F = I.fragmentHint, U = C.maxFragLookUpTolerance, j = !!(C.lowLatencyMode && I.partList && F);
            j && F && !this.bitrateTest && (N = N.concat(F), B = F.sn);
            var H;
            if (l < k) {
              var V = l > k - U ? 0 : U;
              H = Object(E.findFragmentByPTS)(P, N, l, V);
            } else
              H = N[N.length - 1];
            if (H) {
              var K = H.sn - I.startSN, q = P && H.level === P.level, $ = N[K + 1], J = this.fragmentTracker.getState(H);
              if (J === y.FragmentState.BACKTRACKED) {
                H = null;
                for (var z = K; N[z] && this.fragmentTracker.getState(N[z]) === y.FragmentState.BACKTRACKED; )
                  P ? H = N[z--] : H = N[--z];
                H || (H = $);
              } else
                P && H.sn === P.sn && !j && q && (H.sn < B && this.fragmentTracker.getState($) !== y.FragmentState.OK ? (this.log("SN " + H.sn + " just loaded, load next one: " + $.sn), H = $) : H = null);
            }
            return H;
          }, c.synchronizeToLiveEdge = function(l) {
            var k = this.config, I = this.media;
            if (I) {
              var C = this.hls.liveSyncPosition, P = I.currentTime, N = l.fragments[0].start, B = l.edge, F = P >= N - k.maxFragLookUpTolerance && P <= B;
              if (C !== null && I.duration > C && (P < C || !F)) {
                var U = k.liveMaxLatencyDuration !== void 0 ? k.liveMaxLatencyDuration : k.liveMaxLatencyDurationCount * l.targetduration;
                (!F && I.readyState < 4 || P < B - U) && (this.loadedmetadata || (this.nextLoadPosition = C), I.readyState && (this.warn("Playback: " + P.toFixed(3) + " is located too far from the end of live sliding playlist: " + B + ", reset currentTime to : " + C.toFixed(3)), I.currentTime = C));
              }
            }
          }, c.alignPlaylists = function(l, k) {
            var I = this.levels, C = this.levelLastLoaded, P = this.fragPrevious, N = C !== null ? I[C] : null, B = l.fragments.length;
            if (!B)
              return this.warn("No fragments in live playlist"), 0;
            var F = l.fragments[0].start, U = !k, j = l.alignedSliding && Object(R.isFiniteNumber)(F);
            if (U || !j && !F) {
              Object(D.alignStream)(P, N, l);
              var H = l.fragments[0].start;
              return this.log("Live playlist sliding: " + H.toFixed(2) + " start-sn: " + (k ? k.startSN : "na") + "->" + l.startSN + " prev-sn: " + (P ? P.sn : "na") + " fragments: " + B), H;
            }
            return F;
          }, c.waitForCdnTuneIn = function(l) {
            var k = 3;
            return l.live && l.canBlockReload && l.tuneInGoal > Math.max(l.partHoldBack, l.partTarget * k);
          }, c.setStartPosition = function(l, k) {
            var I = this.startPosition;
            if (I < k && (I = -1), I === -1 || this.lastCurrentTime === -1) {
              var C = l.startTimeOffset;
              Object(R.isFiniteNumber)(C) ? (I = k + C, C < 0 && (I += l.totalduration), I = Math.min(Math.max(k, I), k + l.totalduration), this.log("Start time offset " + C + " found in playlist, adjust startPosition to " + I), this.startPosition = I) : l.live ? I = this.hls.liveSyncPosition || k : this.startPosition = I = 0, this.lastCurrentTime = I;
            }
            this.nextLoadPosition = I;
          }, c.getLoadPosition = function() {
            var l = this.media, k = 0;
            return this.loadedmetadata && l ? k = l.currentTime : this.nextLoadPosition && (k = this.nextLoadPosition), k;
          }, c.handleFragLoadAborted = function(l, k) {
            this.transmuxer && l.sn !== "initSegment" && l.stats.aborted && (this.warn("Fragment " + l.sn + (k ? " part" + k.index : "") + " of level " + l.level + " was aborted"), this.resetFragmentLoading(l));
          }, c.resetFragmentLoading = function(l) {
            (!this.fragCurrent || !this.fragContextChanged(l)) && (this.state = p.IDLE);
          }, c.onFragmentOrKeyLoadError = function(l, k) {
            if (!k.fatal) {
              var I = k.frag;
              if (!(!I || I.type !== l)) {
                var C = this.fragCurrent;
                console.assert(C && I.sn === C.sn && I.level === C.level && I.urlId === C.urlId, "Frag load error must match current frag to retry");
                var P = this.config;
                if (this.fragLoadError + 1 <= P.fragLoadingMaxRetry) {
                  if (this.resetLiveStartWhenNotLoaded(I.level))
                    return;
                  var N = Math.min(Math.pow(2, this.fragLoadError) * P.fragLoadingRetryDelay, P.fragLoadingMaxRetryTimeout);
                  this.warn("Fragment " + I.sn + " of " + l + " " + I.level + " failed to load, retrying in " + N + "ms"), this.retryDate = self.performance.now() + N, this.fragLoadError++, this.state = p.FRAG_LOADING_WAITING_RETRY;
                } else
                  k.levelRetry ? (l === n.PlaylistLevelType.AUDIO && (this.fragCurrent = null), this.fragLoadError = 0, this.state = p.IDLE) : (A.logger.error(k.details + " reaches max retry, redispatch as fatal ..."), k.fatal = true, this.hls.stopLoad(), this.state = p.ERROR);
              }
            }
          }, c.afterBufferFlushed = function(l, k, I) {
            if (l) {
              var C = w.BufferHelper.getBuffered(l);
              this.fragmentTracker.detectEvictedFragments(k, C, I), this.state === p.ENDED && this.resetLoadingState();
            }
          }, c.resetLoadingState = function() {
            this.fragCurrent = null, this.fragPrevious = null, this.state = p.IDLE;
          }, c.resetLiveStartWhenNotLoaded = function(l) {
            if (!this.loadedmetadata) {
              this.startFragRequested = false;
              var k = this.levels ? this.levels[l].details : null;
              if (k != null && k.live)
                return this.startPosition = -1, this.setStartPosition(k, 0), this.resetLoadingState(), true;
              this.nextLoadPosition = this.startPosition;
            }
            return false;
          }, c.updateLevelTiming = function(l, k, I, C) {
            var P = this, N = I.details;
            console.assert(!!N, "level.details must be defined");
            var B = Object.keys(l.elementaryStreams).reduce(function(F, U) {
              var j = l.elementaryStreams[U];
              if (j) {
                var H = j.endPTS - j.startPTS;
                if (H <= 0)
                  return P.warn("Could not parse fragment " + l.sn + " " + U + " duration reliably (" + H + ") resetting transmuxer to fallback to playlist timing"), P.resetTransmuxer(), F || false;
                var V = C ? 0 : Object(S.updateFragPTSDTS)(N, l, j.startPTS, j.endPTS, j.startDTS, j.endDTS);
                return P.hls.trigger(L.Events.LEVEL_PTS_UPDATED, { details: N, level: I, drift: V, type: U, frag: l, start: j.startPTS, end: j.endPTS }), true;
              }
              return F;
            }, false);
            B ? (this.state = p.PARSED, this.hls.trigger(L.Events.FRAG_PARSED, { frag: l, part: k })) : this.resetLoadingState();
          }, c.resetTransmuxer = function() {
            this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null);
          }, a(i, [{ key: "state", get: function() {
            return this._state;
          }, set: function(l) {
            var k = this._state;
            k !== l && (this._state = l, this.log(k + "->" + l));
          } }]), i;
        }(m.default);
      }, "./src/controller/buffer-controller.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "default", function() {
          return E;
        });
        var R = e("./src/polyfills/number.ts"), m = e("./src/events.ts"), y = e("./src/utils/logger.ts"), w = e("./src/errors.ts"), A = e("./src/utils/buffer-helper.ts"), L = e("./src/utils/mediasource-helper.ts"), b = e("./src/loader/fragment.ts"), u = e("./src/controller/buffer-operation-queue.ts"), g = Object(L.getMediaSource)(), D = /([ha]vc.)(?:\.[^.,]+)+/, E = function() {
          function S(t) {
            var r = this;
            this.details = null, this._objectUrl = null, this.operationQueue = void 0, this.listeners = void 0, this.hls = void 0, this.bufferCodecEventsExpected = 0, this._bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.appendError = 0, this.tracks = {}, this.pendingTracks = {}, this.sourceBuffer = void 0, this._onMediaSourceOpen = function() {
              var n = r.hls, h = r.media, a = r.mediaSource;
              y.logger.log("[buffer-controller]: Media source opened"), h && (r.updateMediaElementDuration(), n.trigger(m.Events.MEDIA_ATTACHED, { media: h })), a && a.removeEventListener("sourceopen", r._onMediaSourceOpen), r.checkPendingTracks();
            }, this._onMediaSourceClose = function() {
              y.logger.log("[buffer-controller]: Media source closed");
            }, this._onMediaSourceEnded = function() {
              y.logger.log("[buffer-controller]: Media source ended");
            }, this.hls = t, this._initSourceBuffer(), this.registerListeners();
          }
          var d = S.prototype;
          return d.hasSourceTypes = function() {
            return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0;
          }, d.destroy = function() {
            this.unregisterListeners(), this.details = null;
          }, d.registerListeners = function() {
            var t = this.hls;
            t.on(m.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), t.on(m.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(m.Events.MANIFEST_PARSED, this.onManifestParsed, this), t.on(m.Events.BUFFER_RESET, this.onBufferReset, this), t.on(m.Events.BUFFER_APPENDING, this.onBufferAppending, this), t.on(m.Events.BUFFER_CODECS, this.onBufferCodecs, this), t.on(m.Events.BUFFER_EOS, this.onBufferEos, this), t.on(m.Events.BUFFER_FLUSHING, this.onBufferFlushing, this), t.on(m.Events.LEVEL_UPDATED, this.onLevelUpdated, this), t.on(m.Events.FRAG_PARSED, this.onFragParsed, this), t.on(m.Events.FRAG_CHANGED, this.onFragChanged, this);
          }, d.unregisterListeners = function() {
            var t = this.hls;
            t.off(m.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), t.off(m.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(m.Events.MANIFEST_PARSED, this.onManifestParsed, this), t.off(m.Events.BUFFER_RESET, this.onBufferReset, this), t.off(m.Events.BUFFER_APPENDING, this.onBufferAppending, this), t.off(m.Events.BUFFER_CODECS, this.onBufferCodecs, this), t.off(m.Events.BUFFER_EOS, this.onBufferEos, this), t.off(m.Events.BUFFER_FLUSHING, this.onBufferFlushing, this), t.off(m.Events.LEVEL_UPDATED, this.onLevelUpdated, this), t.off(m.Events.FRAG_PARSED, this.onFragParsed, this), t.off(m.Events.FRAG_CHANGED, this.onFragChanged, this);
          }, d._initSourceBuffer = function() {
            this.sourceBuffer = {}, this.operationQueue = new u.default(this.sourceBuffer), this.listeners = { audio: [], video: [], audiovideo: [] };
          }, d.onManifestParsed = function(t, r) {
            var n = 2;
            (r.audio && !r.video || !r.altAudio) && (n = 1), this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = n, this.details = null, y.logger.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected");
          }, d.onMediaAttaching = function(t, r) {
            var n = this.media = r.media;
            if (n && g) {
              var h = this.mediaSource = new g();
              h.addEventListener("sourceopen", this._onMediaSourceOpen), h.addEventListener("sourceended", this._onMediaSourceEnded), h.addEventListener("sourceclose", this._onMediaSourceClose), n.src = self.URL.createObjectURL(h), this._objectUrl = n.src;
            }
          }, d.onMediaDetaching = function() {
            var t = this.media, r = this.mediaSource, n = this._objectUrl;
            if (r) {
              if (y.logger.log("[buffer-controller]: media source detaching"), r.readyState === "open")
                try {
                  r.endOfStream();
                } catch (h) {
                  y.logger.warn("[buffer-controller]: onMediaDetaching: " + h.message + " while calling endOfStream");
                }
              this.onBufferReset(), r.removeEventListener("sourceopen", this._onMediaSourceOpen), r.removeEventListener("sourceended", this._onMediaSourceEnded), r.removeEventListener("sourceclose", this._onMediaSourceClose), t && (n && self.URL.revokeObjectURL(n), t.src === n ? (t.removeAttribute("src"), t.load()) : y.logger.warn("[buffer-controller]: media.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {};
            }
            this.hls.trigger(m.Events.MEDIA_DETACHED, void 0);
          }, d.onBufferReset = function() {
            var t = this;
            this.getSourceBufferTypes().forEach(function(r) {
              var n = t.sourceBuffer[r];
              try {
                n && (t.removeBufferListeners(r), t.mediaSource && t.mediaSource.removeSourceBuffer(n), t.sourceBuffer[r] = void 0);
              } catch (h) {
                y.logger.warn("[buffer-controller]: Failed to reset the " + r + " buffer", h);
              }
            }), this._initSourceBuffer();
          }, d.onBufferCodecs = function(t, r) {
            var n = this, h = this.getSourceBufferTypes().length;
            Object.keys(r).forEach(function(a) {
              if (h) {
                var f = n.tracks[a];
                if (f && typeof f.buffer.changeType == "function") {
                  var v = r[a], _ = v.codec, p = v.levelCodec, o = v.container, s = (f.levelCodec || f.codec).replace(D, "$1"), i = (p || _).replace(D, "$1");
                  if (s !== i) {
                    var c = o + ";codecs=" + (p || _);
                    n.appendChangeType(a, c);
                  }
                }
              } else
                n.pendingTracks[a] = r[a];
            }), !h && (this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0), this.mediaSource && this.mediaSource.readyState === "open" && this.checkPendingTracks());
          }, d.appendChangeType = function(t, r) {
            var n = this, h = this.operationQueue, a = { execute: function() {
              var f = n.sourceBuffer[t];
              f && (y.logger.log("[buffer-controller]: changing " + t + " sourceBuffer type to " + r), f.changeType(r)), h.shiftAndExecuteNext(t);
            }, onStart: function() {
            }, onComplete: function() {
            }, onError: function(f) {
              y.logger.warn("[buffer-controller]: Failed to change " + t + " SourceBuffer type", f);
            } };
            h.append(a, t);
          }, d.onBufferAppending = function(t, r) {
            var n = this, h = this.hls, a = this.operationQueue, f = this.tracks, v = r.data, _ = r.type, p = r.frag, o = r.part, s = r.chunkMeta, i = s.buffering[_], c = self.performance.now();
            i.start = c;
            var l = p.stats.buffering, k = o ? o.stats.buffering : null;
            l.start === 0 && (l.start = c), k && k.start === 0 && (k.start = c);
            var I = f.audio, C = _ === "audio" && s.id === 1 && (I == null ? void 0 : I.container) === "audio/mpeg", P = { execute: function() {
              if (i.executeStart = self.performance.now(), C) {
                var N = n.sourceBuffer[_];
                if (N) {
                  var B = p.start - N.timestampOffset;
                  Math.abs(B) >= 0.1 && (y.logger.log("[buffer-controller]: Updating audio SourceBuffer timestampOffset to " + p.start + " (delta: " + B + ") sn: " + p.sn + ")"), N.timestampOffset = p.start);
                }
              }
              n.appendExecutor(v, _);
            }, onStart: function() {
            }, onComplete: function() {
              var N = self.performance.now();
              i.executeEnd = i.end = N, l.first === 0 && (l.first = N), k && k.first === 0 && (k.first = N);
              var B = n.sourceBuffer, F = {};
              for (var U in B)
                F[U] = A.BufferHelper.getBuffered(B[U]);
              n.appendError = 0, n.hls.trigger(m.Events.BUFFER_APPENDED, { type: _, frag: p, part: o, chunkMeta: s, parent: p.type, timeRanges: F });
            }, onError: function(N) {
              y.logger.error("[buffer-controller]: Error encountered while trying to append to the " + _ + " SourceBuffer", N);
              var B = { type: w.ErrorTypes.MEDIA_ERROR, parent: p.type, details: w.ErrorDetails.BUFFER_APPEND_ERROR, err: N, fatal: false };
              N.code === DOMException.QUOTA_EXCEEDED_ERR ? B.details = w.ErrorDetails.BUFFER_FULL_ERROR : (n.appendError++, B.details = w.ErrorDetails.BUFFER_APPEND_ERROR, n.appendError > h.config.appendErrorMaxRetry && (y.logger.error("[buffer-controller]: Failed " + h.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), B.fatal = true)), h.trigger(m.Events.ERROR, B);
            } };
            a.append(P, _);
          }, d.onBufferFlushing = function(t, r) {
            var n = this, h = this.operationQueue, a = function(f) {
              return { execute: n.removeExecutor.bind(n, f, r.startOffset, r.endOffset), onStart: function() {
              }, onComplete: function() {
                n.hls.trigger(m.Events.BUFFER_FLUSHED, { type: f });
              }, onError: function(v) {
                y.logger.warn("[buffer-controller]: Failed to remove from " + f + " SourceBuffer", v);
              } };
            };
            r.type ? h.append(a(r.type), r.type) : this.getSourceBufferTypes().forEach(function(f) {
              h.append(a(f), f);
            });
          }, d.onFragParsed = function(t, r) {
            var n = this, h = r.frag, a = r.part, f = [], v = a ? a.elementaryStreams : h.elementaryStreams;
            v[b.ElementaryStreamTypes.AUDIOVIDEO] ? f.push("audiovideo") : (v[b.ElementaryStreamTypes.AUDIO] && f.push("audio"), v[b.ElementaryStreamTypes.VIDEO] && f.push("video"));
            var _ = function() {
              var p = self.performance.now();
              h.stats.buffering.end = p, a && (a.stats.buffering.end = p);
              var o = a ? a.stats : h.stats;
              n.hls.trigger(m.Events.FRAG_BUFFERED, { frag: h, part: a, stats: o, id: h.type });
            };
            f.length === 0 && y.logger.warn("Fragments must have at least one ElementaryStreamType set. type: " + h.type + " level: " + h.level + " sn: " + h.sn), this.blockBuffers(_, f);
          }, d.onFragChanged = function(t, r) {
            this.flushBackBuffer();
          }, d.onBufferEos = function(t, r) {
            var n = this, h = this.getSourceBufferTypes().reduce(function(a, f) {
              var v = n.sourceBuffer[f];
              return (!r.type || r.type === f) && v && !v.ended && (v.ended = true, y.logger.log("[buffer-controller]: " + f + " sourceBuffer now EOS")), a && !!(!v || v.ended);
            }, true);
            h && this.blockBuffers(function() {
              var a = n.mediaSource;
              !a || a.readyState !== "open" || a.endOfStream();
            });
          }, d.onLevelUpdated = function(t, r) {
            var n = r.details;
            !n.fragments.length || (this.details = n, this.getSourceBufferTypes().length ? this.blockBuffers(this.updateMediaElementDuration.bind(this)) : this.updateMediaElementDuration());
          }, d.flushBackBuffer = function() {
            var t = this.hls, r = this.details, n = this.media, h = this.sourceBuffer;
            if (!(!n || r === null)) {
              var a = this.getSourceBufferTypes();
              if (a.length) {
                var f = r.live && t.config.liveBackBufferLength !== null ? t.config.liveBackBufferLength : t.config.backBufferLength;
                if (!(!Object(R.isFiniteNumber)(f) || f < 0)) {
                  var v = n.currentTime, _ = r.levelTargetDuration, p = Math.max(f, _), o = Math.floor(v / _) * _ - p;
                  a.forEach(function(s) {
                    var i = h[s];
                    if (i) {
                      var c = A.BufferHelper.getBuffered(i);
                      c.length > 0 && o > c.start(0) && (t.trigger(m.Events.BACK_BUFFER_REACHED, { bufferEnd: o }), r.live && t.trigger(m.Events.LIVE_BACK_BUFFER_REACHED, { bufferEnd: o }), t.trigger(m.Events.BUFFER_FLUSHING, { startOffset: 0, endOffset: o, type: s }));
                    }
                  });
                }
              }
            }
          }, d.updateMediaElementDuration = function() {
            if (!(!this.details || !this.media || !this.mediaSource || this.mediaSource.readyState !== "open")) {
              var t = this.details, r = this.hls, n = this.media, h = this.mediaSource, a = t.fragments[0].start + t.totalduration, f = n.duration, v = Object(R.isFiniteNumber)(h.duration) ? h.duration : 0;
              t.live && r.config.liveDurationInfinity ? (y.logger.log("[buffer-controller]: Media Source duration is set to Infinity"), h.duration = 1 / 0, this.updateSeekableRange(t)) : (a > v && a > f || !Object(R.isFiniteNumber)(f)) && (y.logger.log("[buffer-controller]: Updating Media Source duration to " + a.toFixed(3)), h.duration = a);
            }
          }, d.updateSeekableRange = function(t) {
            var r = this.mediaSource, n = t.fragments, h = n.length;
            if (h && t.live && r !== null && r !== void 0 && r.setLiveSeekableRange) {
              var a = Math.max(0, n[0].start), f = Math.max(a, a + t.totalduration);
              r.setLiveSeekableRange(a, f);
            }
          }, d.checkPendingTracks = function() {
            var t = this.bufferCodecEventsExpected, r = this.operationQueue, n = this.pendingTracks, h = Object.keys(n).length;
            if (h && !t || h === 2) {
              this.createSourceBuffers(n), this.pendingTracks = {};
              var a = this.getSourceBufferTypes();
              if (a.length === 0) {
                this.hls.trigger(m.Events.ERROR, { type: w.ErrorTypes.MEDIA_ERROR, details: w.ErrorDetails.BUFFER_INCOMPATIBLE_CODECS_ERROR, fatal: true, reason: "could not create source buffer for media codec(s)" });
                return;
              }
              a.forEach(function(f) {
                r.executeNext(f);
              });
            }
          }, d.createSourceBuffers = function(t) {
            var r = this.sourceBuffer, n = this.mediaSource;
            if (!n)
              throw Error("createSourceBuffers called when mediaSource was null");
            var h = 0;
            for (var a in t)
              if (!r[a]) {
                var f = t[a];
                if (!f)
                  throw Error("source buffer exists for track " + a + ", however track does not");
                var v = f.levelCodec || f.codec, _ = f.container + ";codecs=" + v;
                y.logger.log("[buffer-controller]: creating sourceBuffer(" + _ + ")");
                try {
                  var p = r[a] = n.addSourceBuffer(_), o = a;
                  this.addBufferListener(o, "updatestart", this._onSBUpdateStart), this.addBufferListener(o, "updateend", this._onSBUpdateEnd), this.addBufferListener(o, "error", this._onSBUpdateError), this.tracks[a] = { buffer: p, codec: v, container: f.container, levelCodec: f.levelCodec, id: f.id }, h++;
                } catch (s) {
                  y.logger.error("[buffer-controller]: error while trying to add sourceBuffer: " + s.message), this.hls.trigger(m.Events.ERROR, { type: w.ErrorTypes.MEDIA_ERROR, details: w.ErrorDetails.BUFFER_ADD_CODEC_ERROR, fatal: false, error: s, mimeType: _ });
                }
              }
            h && this.hls.trigger(m.Events.BUFFER_CREATED, { tracks: this.tracks });
          }, d._onSBUpdateStart = function(t) {
            var r = this.operationQueue, n = r.current(t);
            n.onStart();
          }, d._onSBUpdateEnd = function(t) {
            var r = this.operationQueue, n = r.current(t);
            n.onComplete(), r.shiftAndExecuteNext(t);
          }, d._onSBUpdateError = function(t, r) {
            y.logger.error("[buffer-controller]: " + t + " SourceBuffer error", r), this.hls.trigger(m.Events.ERROR, { type: w.ErrorTypes.MEDIA_ERROR, details: w.ErrorDetails.BUFFER_APPENDING_ERROR, fatal: false });
            var n = this.operationQueue.current(t);
            n && n.onError(r);
          }, d.removeExecutor = function(t, r, n) {
            var h = this.media, a = this.mediaSource, f = this.operationQueue, v = this.sourceBuffer, _ = v[t];
            if (!h || !a || !_) {
              y.logger.warn("[buffer-controller]: Attempting to remove from the " + t + " SourceBuffer, but it does not exist"), f.shiftAndExecuteNext(t);
              return;
            }
            var p = Object(R.isFiniteNumber)(h.duration) ? h.duration : 1 / 0, o = Object(R.isFiniteNumber)(a.duration) ? a.duration : 1 / 0, s = Math.max(0, r), i = Math.min(n, p, o);
            i > s ? (y.logger.log("[buffer-controller]: Removing [" + s + "," + i + "] from the " + t + " SourceBuffer"), console.assert(!_.updating, t + " sourceBuffer must not be updating"), _.remove(s, i)) : f.shiftAndExecuteNext(t);
          }, d.appendExecutor = function(t, r) {
            var n = this.operationQueue, h = this.sourceBuffer, a = h[r];
            if (!a) {
              y.logger.warn("[buffer-controller]: Attempting to append to the " + r + " SourceBuffer, but it does not exist"), n.shiftAndExecuteNext(r);
              return;
            }
            a.ended = false, console.assert(!a.updating, r + " sourceBuffer must not be updating"), a.appendBuffer(t);
          }, d.blockBuffers = function(t, r) {
            var n = this;
            if (r === void 0 && (r = this.getSourceBufferTypes()), !r.length) {
              y.logger.log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"), Promise.resolve(t);
              return;
            }
            var h = this.operationQueue, a = r.map(function(f) {
              return h.appendBlocker(f);
            });
            Promise.all(a).then(function() {
              t(), r.forEach(function(f) {
                var v = n.sourceBuffer[f];
                (!v || !v.updating) && h.shiftAndExecuteNext(f);
              });
            });
          }, d.getSourceBufferTypes = function() {
            return Object.keys(this.sourceBuffer);
          }, d.addBufferListener = function(t, r, n) {
            var h = this.sourceBuffer[t];
            if (h) {
              var a = n.bind(this, t);
              this.listeners[t].push({ event: r, listener: a }), h.addEventListener(r, a);
            }
          }, d.removeBufferListeners = function(t) {
            var r = this.sourceBuffer[t];
            !r || this.listeners[t].forEach(function(n) {
              r.removeEventListener(n.event, n.listener);
            });
          }, S;
        }();
      }, "./src/controller/buffer-operation-queue.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "default", function() {
          return m;
        });
        var R = e("./src/utils/logger.ts"), m = function() {
          function y(A) {
            this.buffers = void 0, this.queues = { video: [], audio: [], audiovideo: [] }, this.buffers = A;
          }
          var w = y.prototype;
          return w.append = function(A, L) {
            var b = this.queues[L];
            b.push(A), b.length === 1 && this.buffers[L] && this.executeNext(L);
          }, w.insertAbort = function(A, L) {
            var b = this.queues[L];
            b.unshift(A), this.executeNext(L);
          }, w.appendBlocker = function(A) {
            var L, b = new Promise(function(g) {
              L = g;
            }), u = { execute: L, onStart: function() {
            }, onComplete: function() {
            }, onError: function() {
            } };
            return this.append(u, A), b;
          }, w.executeNext = function(A) {
            var L = this.buffers, b = this.queues, u = L[A], g = b[A];
            if (g.length) {
              var D = g[0];
              try {
                D.execute();
              } catch (E) {
                R.logger.warn("[buffer-operation-queue]: Unhandled exception executing the current operation"), D.onError(E), (!u || !u.updating) && (g.shift(), this.executeNext(A));
              }
            }
          }, w.shiftAndExecuteNext = function(A) {
            this.queues[A].shift(), this.executeNext(A);
          }, w.current = function(A) {
            return this.queues[A][0];
          }, y;
        }();
      }, "./src/controller/cap-level-controller.ts": function(x, T, e) {
        "use strict";
        e.r(T);
        var R = e("./src/events.ts");
        function m(A, L) {
          for (var b = 0; b < L.length; b++) {
            var u = L[b];
            u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(A, u.key, u);
          }
        }
        function y(A, L, b) {
          return L && m(A.prototype, L), b && m(A, b), A;
        }
        var w = function() {
          function A(b) {
            this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.hls = void 0, this.streamController = void 0, this.clientRect = void 0, this.hls = b, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners();
          }
          var L = A.prototype;
          return L.setStreamController = function(b) {
            this.streamController = b;
          }, L.destroy = function() {
            this.unregisterListener(), this.hls.config.capLevelToPlayerSize && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null;
          }, L.registerListeners = function() {
            var b = this.hls;
            b.on(R.Events.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), b.on(R.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), b.on(R.Events.MANIFEST_PARSED, this.onManifestParsed, this), b.on(R.Events.BUFFER_CODECS, this.onBufferCodecs, this), b.on(R.Events.MEDIA_DETACHING, this.onMediaDetaching, this);
          }, L.unregisterListener = function() {
            var b = this.hls;
            b.off(R.Events.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), b.off(R.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), b.off(R.Events.MANIFEST_PARSED, this.onManifestParsed, this), b.off(R.Events.BUFFER_CODECS, this.onBufferCodecs, this), b.off(R.Events.MEDIA_DETACHING, this.onMediaDetaching, this);
          }, L.onFpsDropLevelCapping = function(b, u) {
            A.isLevelAllowed(u.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(u.droppedLevel);
          }, L.onMediaAttaching = function(b, u) {
            this.media = u.media instanceof HTMLVideoElement ? u.media : null;
          }, L.onManifestParsed = function(b, u) {
            var g = this.hls;
            this.restrictedLevels = [], this.firstLevel = u.firstLevel, g.config.capLevelToPlayerSize && u.video && this.startCapping();
          }, L.onBufferCodecs = function(b, u) {
            var g = this.hls;
            g.config.capLevelToPlayerSize && u.video && this.startCapping();
          }, L.onMediaDetaching = function() {
            this.stopCapping();
          }, L.detectPlayerSize = function() {
            if (this.media && this.mediaHeight > 0 && this.mediaWidth > 0) {
              var b = this.hls.levels;
              if (b.length) {
                var u = this.hls;
                u.autoLevelCapping = this.getMaxLevel(b.length - 1), u.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = u.autoLevelCapping;
              }
            }
          }, L.getMaxLevel = function(b) {
            var u = this, g = this.hls.levels;
            if (!g.length)
              return -1;
            var D = g.filter(function(E, S) {
              return A.isLevelAllowed(S, u.restrictedLevels) && S <= b;
            });
            return this.clientRect = null, A.getMaxLevelByMediaSize(D, this.mediaWidth, this.mediaHeight);
          }, L.startCapping = function() {
            this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize());
          }, L.stopCapping = function() {
            this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (self.clearInterval(this.timer), this.timer = void 0);
          }, L.getDimensions = function() {
            if (this.clientRect)
              return this.clientRect;
            var b = this.media, u = { width: 0, height: 0 };
            if (b) {
              var g = b.getBoundingClientRect();
              u.width = g.width, u.height = g.height, !u.width && !u.height && (u.width = g.right - g.left || b.width || 0, u.height = g.bottom - g.top || b.height || 0);
            }
            return this.clientRect = u, u;
          }, A.isLevelAllowed = function(b, u) {
            return u === void 0 && (u = []), u.indexOf(b) === -1;
          }, A.getMaxLevelByMediaSize = function(b, u, g) {
            if (!b || !b.length)
              return -1;
            for (var D = function(t, r) {
              return r ? t.width !== r.width || t.height !== r.height : true;
            }, E = b.length - 1, S = 0; S < b.length; S += 1) {
              var d = b[S];
              if ((d.width >= u || d.height >= g) && D(d, b[S + 1])) {
                E = S;
                break;
              }
            }
            return E;
          }, y(A, [{ key: "mediaWidth", get: function() {
            return this.getDimensions().width * A.contentScaleFactor;
          } }, { key: "mediaHeight", get: function() {
            return this.getDimensions().height * A.contentScaleFactor;
          } }], [{ key: "contentScaleFactor", get: function() {
            var b = 1;
            try {
              b = self.devicePixelRatio;
            } catch {
            }
            return b;
          } }]), A;
        }();
        T.default = w;
      }, "./src/controller/eme-controller.ts": function(x, T, e) {
        "use strict";
        e.r(T);
        var R = e("./src/events.ts"), m = e("./src/errors.ts"), y = e("./src/utils/logger.ts"), w = e("./src/utils/mediakeys-helper.ts");
        function A(E, S) {
          for (var d = 0; d < S.length; d++) {
            var t = S[d];
            t.enumerable = t.enumerable || false, t.configurable = true, "value" in t && (t.writable = true), Object.defineProperty(E, t.key, t);
          }
        }
        function L(E, S, d) {
          return S && A(E.prototype, S), d && A(E, d), E;
        }
        var b = 3, u = function(E, S, d) {
          var t = { audioCapabilities: [], videoCapabilities: [] };
          return E.forEach(function(r) {
            t.audioCapabilities.push({ contentType: 'audio/mp4; codecs="' + r + '"', robustness: d.audioRobustness || "" });
          }), S.forEach(function(r) {
            t.videoCapabilities.push({ contentType: 'video/mp4; codecs="' + r + '"', robustness: d.videoRobustness || "" });
          }), [t];
        }, g = function(E, S, d, t) {
          switch (E) {
            case w.KeySystems.WIDEVINE:
              return u(S, d, t);
            default:
              throw new Error("Unknown key-system: " + E);
          }
        }, D = function() {
          function E(d) {
            this.hls = void 0, this._widevineLicenseUrl = void 0, this._licenseXhrSetup = void 0, this._licenseResponseCallback = void 0, this._emeEnabled = void 0, this._requestMediaKeySystemAccess = void 0, this._drmSystemOptions = void 0, this._config = void 0, this._mediaKeysList = [], this._media = null, this._hasSetMediaKeys = false, this._requestLicenseFailureCount = 0, this.mediaKeysPromise = null, this._onMediaEncrypted = this.onMediaEncrypted.bind(this), this.hls = d, this._config = d.config, this._widevineLicenseUrl = this._config.widevineLicenseUrl, this._licenseXhrSetup = this._config.licenseXhrSetup, this._licenseResponseCallback = this._config.licenseResponseCallback, this._emeEnabled = this._config.emeEnabled, this._requestMediaKeySystemAccess = this._config.requestMediaKeySystemAccessFunc, this._drmSystemOptions = this._config.drmSystemOptions, this._registerListeners();
          }
          var S = E.prototype;
          return S.destroy = function() {
            this._unregisterListeners(), this.hls = this._onMediaEncrypted = null, this._requestMediaKeySystemAccess = null;
          }, S._registerListeners = function() {
            this.hls.on(R.Events.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(R.Events.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.on(R.Events.MANIFEST_PARSED, this.onManifestParsed, this);
          }, S._unregisterListeners = function() {
            this.hls.off(R.Events.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(R.Events.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.off(R.Events.MANIFEST_PARSED, this.onManifestParsed, this);
          }, S.getLicenseServerUrl = function(d) {
            switch (d) {
              case w.KeySystems.WIDEVINE:
                if (!this._widevineLicenseUrl)
                  break;
                return this._widevineLicenseUrl;
            }
            throw new Error('no license server URL configured for key-system "' + d + '"');
          }, S._attemptKeySystemAccess = function(d, t, r) {
            var n = this, h = g(d, t, r, this._drmSystemOptions);
            y.logger.log("Requesting encrypted media key-system access");
            var a = this.requestMediaKeySystemAccess(d, h);
            this.mediaKeysPromise = a.then(function(f) {
              return n._onMediaKeySystemAccessObtained(d, f);
            }), a.catch(function(f) {
              y.logger.error('Failed to obtain key-system "' + d + '" access:', f);
            });
          }, S._onMediaKeySystemAccessObtained = function(d, t) {
            var r = this;
            y.logger.log('Access for key-system "' + d + '" obtained');
            var n = { mediaKeysSessionInitialized: false, mediaKeySystemAccess: t, mediaKeySystemDomain: d };
            this._mediaKeysList.push(n);
            var h = Promise.resolve().then(function() {
              return t.createMediaKeys();
            }).then(function(a) {
              return n.mediaKeys = a, y.logger.log('Media-keys created for key-system "' + d + '"'), r._onMediaKeysCreated(), a;
            });
            return h.catch(function(a) {
              y.logger.error("Failed to create media-keys:", a);
            }), h;
          }, S._onMediaKeysCreated = function() {
            var d = this;
            this._mediaKeysList.forEach(function(t) {
              t.mediaKeysSession || (t.mediaKeysSession = t.mediaKeys.createSession(), d._onNewMediaKeySession(t.mediaKeysSession));
            });
          }, S._onNewMediaKeySession = function(d) {
            var t = this;
            y.logger.log("New key-system session " + d.sessionId), d.addEventListener("message", function(r) {
              t._onKeySessionMessage(d, r.message);
            }, false);
          }, S._onKeySessionMessage = function(d, t) {
            y.logger.log("Got EME message event, creating license request"), this._requestLicense(t, function(r) {
              y.logger.log("Received license data (length: " + (r && r.byteLength) + "), updating key-session"), d.update(r);
            });
          }, S.onMediaEncrypted = function(d) {
            var t = this;
            if (y.logger.log('Media is encrypted using "' + d.initDataType + '" init data type'), !this.mediaKeysPromise) {
              y.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been requested"), this.hls.trigger(R.Events.ERROR, { type: m.ErrorTypes.KEY_SYSTEM_ERROR, details: m.ErrorDetails.KEY_SYSTEM_NO_KEYS, fatal: true });
              return;
            }
            var r = function(n) {
              !t._media || (t._attemptSetMediaKeys(n), t._generateRequestWithPreferredKeySession(d.initDataType, d.initData));
            };
            this.mediaKeysPromise.then(r).catch(r);
          }, S._attemptSetMediaKeys = function(d) {
            if (!this._media)
              throw new Error("Attempted to set mediaKeys without first attaching a media element");
            if (!this._hasSetMediaKeys) {
              var t = this._mediaKeysList[0];
              if (!t || !t.mediaKeys) {
                y.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"), this.hls.trigger(R.Events.ERROR, { type: m.ErrorTypes.KEY_SYSTEM_ERROR, details: m.ErrorDetails.KEY_SYSTEM_NO_KEYS, fatal: true });
                return;
              }
              y.logger.log("Setting keys for encrypted media"), this._media.setMediaKeys(t.mediaKeys), this._hasSetMediaKeys = true;
            }
          }, S._generateRequestWithPreferredKeySession = function(d, t) {
            var r = this, n = this._mediaKeysList[0];
            if (!n) {
              y.logger.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"), this.hls.trigger(R.Events.ERROR, { type: m.ErrorTypes.KEY_SYSTEM_ERROR, details: m.ErrorDetails.KEY_SYSTEM_NO_ACCESS, fatal: true });
              return;
            }
            if (n.mediaKeysSessionInitialized) {
              y.logger.warn("Key-Session already initialized but requested again");
              return;
            }
            var h = n.mediaKeysSession;
            if (!h) {
              y.logger.error("Fatal: Media is encrypted but no key-session existing"), this.hls.trigger(R.Events.ERROR, { type: m.ErrorTypes.KEY_SYSTEM_ERROR, details: m.ErrorDetails.KEY_SYSTEM_NO_SESSION, fatal: true });
              return;
            }
            if (!t) {
              y.logger.warn("Fatal: initData required for generating a key session is null"), this.hls.trigger(R.Events.ERROR, { type: m.ErrorTypes.KEY_SYSTEM_ERROR, details: m.ErrorDetails.KEY_SYSTEM_NO_INIT_DATA, fatal: true });
              return;
            }
            y.logger.log('Generating key-session request for "' + d + '" init data type'), n.mediaKeysSessionInitialized = true, h.generateRequest(d, t).then(function() {
              y.logger.debug("Key-session generation succeeded");
            }).catch(function(a) {
              y.logger.error("Error generating key-session request:", a), r.hls.trigger(R.Events.ERROR, { type: m.ErrorTypes.KEY_SYSTEM_ERROR, details: m.ErrorDetails.KEY_SYSTEM_NO_SESSION, fatal: false });
            });
          }, S._createLicenseXhr = function(d, t, r) {
            var n = new XMLHttpRequest();
            n.responseType = "arraybuffer", n.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, n, d, t, r);
            var h = this._licenseXhrSetup;
            if (h)
              try {
                h.call(this.hls, n, d), h = void 0;
              } catch (a) {
                y.logger.error(a);
              }
            try {
              n.readyState || n.open("POST", d, true), h && h.call(this.hls, n, d);
            } catch (a) {
              throw new Error("issue setting up KeySystem license XHR " + a);
            }
            return n;
          }, S._onLicenseRequestReadyStageChange = function(d, t, r, n) {
            switch (d.readyState) {
              case 4:
                if (d.status === 200) {
                  this._requestLicenseFailureCount = 0, y.logger.log("License request succeeded");
                  var h = d.response, a = this._licenseResponseCallback;
                  if (a)
                    try {
                      h = a.call(this.hls, d, t);
                    } catch (v) {
                      y.logger.error(v);
                    }
                  n(h);
                } else {
                  if (y.logger.error("License Request XHR failed (" + t + "). Status: " + d.status + " (" + d.statusText + ")"), this._requestLicenseFailureCount++, this._requestLicenseFailureCount > b) {
                    this.hls.trigger(R.Events.ERROR, { type: m.ErrorTypes.KEY_SYSTEM_ERROR, details: m.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED, fatal: true });
                    return;
                  }
                  var f = b - this._requestLicenseFailureCount + 1;
                  y.logger.warn("Retrying license request, " + f + " attempts left"), this._requestLicense(r, n);
                }
                break;
            }
          }, S._generateLicenseRequestChallenge = function(d, t) {
            switch (d.mediaKeySystemDomain) {
              case w.KeySystems.WIDEVINE:
                return t;
            }
            throw new Error("unsupported key-system: " + d.mediaKeySystemDomain);
          }, S._requestLicense = function(d, t) {
            y.logger.log("Requesting content license for key-system");
            var r = this._mediaKeysList[0];
            if (!r) {
              y.logger.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"), this.hls.trigger(R.Events.ERROR, { type: m.ErrorTypes.KEY_SYSTEM_ERROR, details: m.ErrorDetails.KEY_SYSTEM_NO_ACCESS, fatal: true });
              return;
            }
            try {
              var n = this.getLicenseServerUrl(r.mediaKeySystemDomain), h = this._createLicenseXhr(n, d, t);
              y.logger.log("Sending license request to URL: " + n);
              var a = this._generateLicenseRequestChallenge(r, d);
              h.send(a);
            } catch (f) {
              y.logger.error("Failure requesting DRM license: " + f), this.hls.trigger(R.Events.ERROR, { type: m.ErrorTypes.KEY_SYSTEM_ERROR, details: m.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED, fatal: true });
            }
          }, S.onMediaAttached = function(d, t) {
            if (this._emeEnabled) {
              var r = t.media;
              this._media = r, r.addEventListener("encrypted", this._onMediaEncrypted);
            }
          }, S.onMediaDetached = function() {
            var d = this._media, t = this._mediaKeysList;
            !d || (d.removeEventListener("encrypted", this._onMediaEncrypted), this._media = null, this._mediaKeysList = [], Promise.all(t.map(function(r) {
              if (r.mediaKeysSession)
                return r.mediaKeysSession.close().catch(function() {
                });
            })).then(function() {
              return d.setMediaKeys(null);
            }).catch(function() {
            }));
          }, S.onManifestParsed = function(d, t) {
            if (this._emeEnabled) {
              var r = t.levels.map(function(h) {
                return h.audioCodec;
              }).filter(function(h) {
                return !!h;
              }), n = t.levels.map(function(h) {
                return h.videoCodec;
              }).filter(function(h) {
                return !!h;
              });
              this._attemptKeySystemAccess(w.KeySystems.WIDEVINE, r, n);
            }
          }, L(E, [{ key: "requestMediaKeySystemAccess", get: function() {
            if (!this._requestMediaKeySystemAccess)
              throw new Error("No requestMediaKeySystemAccess function configured");
            return this._requestMediaKeySystemAccess;
          } }]), E;
        }();
        T.default = D;
      }, "./src/controller/fps-controller.ts": function(x, T, e) {
        "use strict";
        e.r(T);
        var R = e("./src/events.ts"), m = e("./src/utils/logger.ts"), y = function() {
          function w(L) {
            this.hls = void 0, this.isVideoPlaybackQualityAvailable = false, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = L, this.registerListeners();
          }
          var A = w.prototype;
          return A.setStreamController = function(L) {
            this.streamController = L;
          }, A.registerListeners = function() {
            this.hls.on(R.Events.MEDIA_ATTACHING, this.onMediaAttaching, this);
          }, A.unregisterListeners = function() {
            this.hls.off(R.Events.MEDIA_ATTACHING, this.onMediaAttaching);
          }, A.destroy = function() {
            this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = false, this.media = null;
          }, A.onMediaAttaching = function(L, b) {
            var u = this.hls.config;
            if (u.capLevelOnFPSDrop) {
              var g = b.media instanceof self.HTMLVideoElement ? b.media : null;
              this.media = g, g && typeof g.getVideoPlaybackQuality == "function" && (this.isVideoPlaybackQualityAvailable = true), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), u.fpsDroppedMonitoringPeriod);
            }
          }, A.checkFPS = function(L, b, u) {
            var g = performance.now();
            if (b) {
              if (this.lastTime) {
                var D = g - this.lastTime, E = u - this.lastDroppedFrames, S = b - this.lastDecodedFrames, d = 1e3 * E / D, t = this.hls;
                if (t.trigger(R.Events.FPS_DROP, { currentDropped: E, currentDecoded: S, totalDroppedFrames: u }), d > 0 && E > t.config.fpsDroppedMonitoringThreshold * S) {
                  var r = t.currentLevel;
                  m.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + r), r > 0 && (t.autoLevelCapping === -1 || t.autoLevelCapping >= r) && (r = r - 1, t.trigger(R.Events.FPS_DROP_LEVEL_CAPPING, { level: r, droppedLevel: t.currentLevel }), t.autoLevelCapping = r, this.streamController.nextLevelSwitch());
                }
              }
              this.lastTime = g, this.lastDroppedFrames = u, this.lastDecodedFrames = b;
            }
          }, A.checkFPSInterval = function() {
            var L = this.media;
            if (L)
              if (this.isVideoPlaybackQualityAvailable) {
                var b = L.getVideoPlaybackQuality();
                this.checkFPS(L, b.totalVideoFrames, b.droppedVideoFrames);
              } else
                this.checkFPS(L, L.webkitDecodedFrameCount, L.webkitDroppedFrameCount);
          }, w;
        }();
        T.default = y;
      }, "./src/controller/fragment-finders.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "findFragmentByPDT", function() {
          return y;
        }), e.d(T, "findFragmentByPTS", function() {
          return w;
        }), e.d(T, "fragmentWithinToleranceTest", function() {
          return A;
        }), e.d(T, "pdtWithinToleranceTest", function() {
          return L;
        }), e.d(T, "findFragWithCC", function() {
          return b;
        });
        var R = e("./src/polyfills/number.ts"), m = e("./src/utils/binary-search.ts");
        function y(u, g, D) {
          if (g === null || !Array.isArray(u) || !u.length || !Object(R.isFiniteNumber)(g))
            return null;
          var E = u[0].programDateTime;
          if (g < (E || 0))
            return null;
          var S = u[u.length - 1].endProgramDateTime;
          if (g >= (S || 0))
            return null;
          D = D || 0;
          for (var d = 0; d < u.length; ++d) {
            var t = u[d];
            if (L(g, D, t))
              return t;
          }
          return null;
        }
        function w(u, g, D, E) {
          D === void 0 && (D = 0), E === void 0 && (E = 0);
          var S = null;
          if (u ? S = g[u.sn - g[0].sn + 1] || null : D === 0 && g[0].start === 0 && (S = g[0]), S && A(D, E, S) === 0)
            return S;
          var d = m.default.search(g, A.bind(null, D, E));
          return d || S;
        }
        function A(u, g, D) {
          u === void 0 && (u = 0), g === void 0 && (g = 0);
          var E = Math.min(g, D.duration + (D.deltaPTS ? D.deltaPTS : 0));
          return D.start + D.duration - E <= u ? 1 : D.start - E > u && D.start ? -1 : 0;
        }
        function L(u, g, D) {
          var E = Math.min(g, D.duration + (D.deltaPTS ? D.deltaPTS : 0)) * 1e3, S = D.endProgramDateTime || 0;
          return S - E > u;
        }
        function b(u, g) {
          return m.default.search(u, function(D) {
            return D.cc < g ? 1 : D.cc > g ? -1 : 0;
          });
        }
      }, "./src/controller/fragment-tracker.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "FragmentState", function() {
          return y;
        }), e.d(T, "FragmentTracker", function() {
          return w;
        });
        var R = e("./src/events.ts"), m = e("./src/types/loader.ts"), y;
        (function(b) {
          b.NOT_LOADED = "NOT_LOADED", b.BACKTRACKED = "BACKTRACKED", b.APPENDING = "APPENDING", b.PARTIAL = "PARTIAL", b.OK = "OK";
        })(y || (y = {}));
        var w = function() {
          function b(g) {
            this.activeFragment = null, this.activeParts = null, this.fragments = Object.create(null), this.timeRanges = Object.create(null), this.bufferPadding = 0.2, this.hls = void 0, this.hls = g, this._registerListeners();
          }
          var u = b.prototype;
          return u._registerListeners = function() {
            var g = this.hls;
            g.on(R.Events.BUFFER_APPENDED, this.onBufferAppended, this), g.on(R.Events.FRAG_BUFFERED, this.onFragBuffered, this), g.on(R.Events.FRAG_LOADED, this.onFragLoaded, this);
          }, u._unregisterListeners = function() {
            var g = this.hls;
            g.off(R.Events.BUFFER_APPENDED, this.onBufferAppended, this), g.off(R.Events.FRAG_BUFFERED, this.onFragBuffered, this), g.off(R.Events.FRAG_LOADED, this.onFragLoaded, this);
          }, u.destroy = function() {
            this._unregisterListeners(), this.fragments = this.timeRanges = null;
          }, u.getAppendedFrag = function(g, D) {
            if (D === m.PlaylistLevelType.MAIN) {
              var E = this.activeFragment, S = this.activeParts;
              if (!E)
                return null;
              if (S)
                for (var d = S.length; d--; ) {
                  var t = S[d], r = t ? t.end : E.appendedPTS;
                  if (t.start <= g && r !== void 0 && g <= r)
                    return d > 9 && (this.activeParts = S.slice(d - 9)), t;
                }
              else if (E.start <= g && E.appendedPTS !== void 0 && g <= E.appendedPTS)
                return E;
            }
            return this.getBufferedFrag(g, D);
          }, u.getBufferedFrag = function(g, D) {
            for (var E = this.fragments, S = Object.keys(E), d = S.length; d--; ) {
              var t = E[S[d]];
              if ((t == null ? void 0 : t.body.type) === D && t.buffered) {
                var r = t.body;
                if (r.start <= g && g <= r.end)
                  return r;
              }
            }
            return null;
          }, u.detectEvictedFragments = function(g, D, E) {
            var S = this;
            Object.keys(this.fragments).forEach(function(d) {
              var t = S.fragments[d];
              if (t) {
                if (!t.buffered) {
                  t.body.type === E && S.removeFragment(t.body);
                  return;
                }
                var r = t.range[g];
                !r || r.time.some(function(n) {
                  var h = !S.isTimeBuffered(n.startPTS, n.endPTS, D);
                  return h && S.removeFragment(t.body), h;
                });
              }
            });
          }, u.detectPartialFragments = function(g) {
            var D = this, E = this.timeRanges, S = g.frag, d = g.part;
            if (!(!E || S.sn === "initSegment")) {
              var t = L(S), r = this.fragments[t];
              !r || (Object.keys(E).forEach(function(n) {
                var h = S.elementaryStreams[n];
                if (h) {
                  var a = E[n], f = d !== null || h.partial === true;
                  r.range[n] = D.getBufferedTimes(S, d, f, a);
                }
              }), r.backtrack = r.loaded = null, Object.keys(r.range).length ? r.buffered = true : this.removeFragment(r.body));
            }
          }, u.fragBuffered = function(g) {
            var D = L(g), E = this.fragments[D];
            E && (E.backtrack = E.loaded = null, E.buffered = true);
          }, u.getBufferedTimes = function(g, D, E, S) {
            for (var d = { time: [], partial: E }, t = D ? D.start : g.start, r = D ? D.end : g.end, n = g.minEndPTS || r, h = g.maxStartPTS || t, a = 0; a < S.length; a++) {
              var f = S.start(a) - this.bufferPadding, v = S.end(a) + this.bufferPadding;
              if (h >= f && n <= v) {
                d.time.push({ startPTS: Math.max(t, S.start(a)), endPTS: Math.min(r, S.end(a)) });
                break;
              } else if (t < v && r > f)
                d.partial = true, d.time.push({ startPTS: Math.max(t, S.start(a)), endPTS: Math.min(r, S.end(a)) });
              else if (r <= f)
                break;
            }
            return d;
          }, u.getPartialFragment = function(g) {
            var D = null, E, S, d, t = 0, r = this.bufferPadding, n = this.fragments;
            return Object.keys(n).forEach(function(h) {
              var a = n[h];
              !a || A(a) && (S = a.body.start - r, d = a.body.end + r, g >= S && g <= d && (E = Math.min(g - S, d - g), t <= E && (D = a.body, t = E)));
            }), D;
          }, u.getState = function(g) {
            var D = L(g), E = this.fragments[D];
            return E ? E.buffered ? A(E) ? y.PARTIAL : y.OK : E.backtrack ? y.BACKTRACKED : y.APPENDING : y.NOT_LOADED;
          }, u.backtrack = function(g, D) {
            var E = L(g), S = this.fragments[E];
            if (!S || S.backtrack)
              return null;
            var d = S.backtrack = D || S.loaded;
            return S.loaded = null, d;
          }, u.getBacktrackData = function(g) {
            var D = L(g), E = this.fragments[D];
            if (E) {
              var S, d = E.backtrack;
              if (d != null && (S = d.payload) !== null && S !== void 0 && S.byteLength)
                return d;
              this.removeFragment(g);
            }
            return null;
          }, u.isTimeBuffered = function(g, D, E) {
            for (var S, d, t = 0; t < E.length; t++) {
              if (S = E.start(t) - this.bufferPadding, d = E.end(t) + this.bufferPadding, g >= S && D <= d)
                return true;
              if (D <= S)
                return false;
            }
            return false;
          }, u.onFragLoaded = function(g, D) {
            var E = D.frag, S = D.part;
            if (!(E.sn === "initSegment" || E.bitrateTest || S)) {
              var d = L(E);
              this.fragments[d] = { body: E, loaded: D, backtrack: null, buffered: false, range: Object.create(null) };
            }
          }, u.onBufferAppended = function(g, D) {
            var E = this, S = D.frag, d = D.part, t = D.timeRanges;
            if (S.type === m.PlaylistLevelType.MAIN)
              if (this.activeFragment = S, d) {
                var r = this.activeParts;
                r || (this.activeParts = r = []), r.push(d);
              } else
                this.activeParts = null;
            this.timeRanges = t, Object.keys(t).forEach(function(n) {
              var h = t[n];
              if (E.detectEvictedFragments(n, h), !d)
                for (var a = 0; a < h.length; a++)
                  S.appendedPTS = Math.max(h.end(a), S.appendedPTS || 0);
            });
          }, u.onFragBuffered = function(g, D) {
            this.detectPartialFragments(D);
          }, u.hasFragment = function(g) {
            var D = L(g);
            return !!this.fragments[D];
          }, u.removeFragmentsInRange = function(g, D, E) {
            var S = this;
            Object.keys(this.fragments).forEach(function(d) {
              var t = S.fragments[d];
              if (!!t && t.buffered) {
                var r = t.body;
                r.type === E && r.start < D && r.end > g && S.removeFragment(r);
              }
            });
          }, u.removeFragment = function(g) {
            var D = L(g);
            g.stats.loaded = 0, g.clearElementaryStreamInfo(), delete this.fragments[D];
          }, u.removeAllFragments = function() {
            this.fragments = Object.create(null), this.activeFragment = null, this.activeParts = null;
          }, b;
        }();
        function A(b) {
          var u, g;
          return b.buffered && (((u = b.range.video) === null || u === void 0 ? void 0 : u.partial) || ((g = b.range.audio) === null || g === void 0 ? void 0 : g.partial));
        }
        function L(b) {
          return b.type + "_" + b.level + "_" + b.urlId + "_" + b.sn;
        }
      }, "./src/controller/gap-controller.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "STALL_MINIMUM_DURATION_MS", function() {
          return A;
        }), e.d(T, "MAX_START_GAP_JUMP", function() {
          return L;
        }), e.d(T, "SKIP_BUFFER_HOLE_STEP_SECONDS", function() {
          return b;
        }), e.d(T, "SKIP_BUFFER_RANGE_START", function() {
          return u;
        }), e.d(T, "default", function() {
          return g;
        });
        var R = e("./src/utils/buffer-helper.ts"), m = e("./src/errors.ts"), y = e("./src/events.ts"), w = e("./src/utils/logger.ts"), A = 250, L = 2, b = 0.1, u = 0.05, g = function() {
          function D(S, d, t, r) {
            this.config = void 0, this.media = void 0, this.fragmentTracker = void 0, this.hls = void 0, this.nudgeRetry = 0, this.stallReported = false, this.stalled = null, this.moved = false, this.seeking = false, this.config = S, this.media = d, this.fragmentTracker = t, this.hls = r;
          }
          var E = D.prototype;
          return E.destroy = function() {
            this.hls = this.fragmentTracker = this.media = null;
          }, E.poll = function(S) {
            var d = this.config, t = this.media, r = this.stalled, n = t.currentTime, h = t.seeking, a = this.seeking && !h, f = !this.seeking && h;
            if (this.seeking = h, n !== S) {
              if (this.moved = true, r !== null) {
                if (this.stallReported) {
                  var v = self.performance.now() - r;
                  w.logger.warn("playback not stuck anymore @" + n + ", after " + Math.round(v) + "ms"), this.stallReported = false;
                }
                this.stalled = null, this.nudgeRetry = 0;
              }
              return;
            }
            if ((f || a) && (this.stalled = null), !(t.paused || t.ended || t.playbackRate === 0 || !R.BufferHelper.getBuffered(t).length)) {
              var _ = R.BufferHelper.bufferInfo(t, n, 0), p = _.len > 0, o = _.nextStart || 0;
              if (!(!p && !o)) {
                if (h) {
                  var s = _.len > L, i = !o || o - n > L && !this.fragmentTracker.getPartialFragment(n);
                  if (s || i)
                    return;
                  this.moved = false;
                }
                if (!this.moved && this.stalled !== null) {
                  var c, l = Math.max(o, _.start || 0) - n, k = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null, I = k == null || (c = k.details) === null || c === void 0 ? void 0 : c.live, C = I ? k.details.targetduration * 2 : L;
                  if (l > 0 && l <= C) {
                    this._trySkipBufferHole(null);
                    return;
                  }
                }
                var P = self.performance.now();
                if (r === null) {
                  this.stalled = P;
                  return;
                }
                var N = P - r;
                !h && N >= A && this._reportStall(_.len);
                var B = R.BufferHelper.bufferInfo(t, n, d.maxBufferHole);
                this._tryFixBufferStall(B, N);
              }
            }
          }, E._tryFixBufferStall = function(S, d) {
            var t = this.config, r = this.fragmentTracker, n = this.media, h = n.currentTime, a = r.getPartialFragment(h);
            if (a) {
              var f = this._trySkipBufferHole(a);
              if (f)
                return;
            }
            S.len > t.maxBufferHole && d > t.highBufferWatchdogPeriod * 1e3 && (w.logger.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer());
          }, E._reportStall = function(S) {
            var d = this.hls, t = this.media, r = this.stallReported;
            r || (this.stallReported = true, w.logger.warn("Playback stalling at @" + t.currentTime + " due to low buffer (buffer=" + S + ")"), d.trigger(y.Events.ERROR, { type: m.ErrorTypes.MEDIA_ERROR, details: m.ErrorDetails.BUFFER_STALLED_ERROR, fatal: false, buffer: S }));
          }, E._trySkipBufferHole = function(S) {
            for (var d = this.config, t = this.hls, r = this.media, n = r.currentTime, h = 0, a = R.BufferHelper.getBuffered(r), f = 0; f < a.length; f++) {
              var v = a.start(f);
              if (n + d.maxBufferHole >= h && n < v) {
                var _ = Math.max(v + u, r.currentTime + b);
                return w.logger.warn("skipping hole, adjusting currentTime from " + n + " to " + _), this.moved = true, this.stalled = null, r.currentTime = _, S && t.trigger(y.Events.ERROR, { type: m.ErrorTypes.MEDIA_ERROR, details: m.ErrorDetails.BUFFER_SEEK_OVER_HOLE, fatal: false, reason: "fragment loaded with buffer holes, seeking from " + n + " to " + _, frag: S }), _;
              }
              h = a.end(f);
            }
            return 0;
          }, E._tryNudgeBuffer = function() {
            var S = this.config, d = this.hls, t = this.media, r = t.currentTime, n = (this.nudgeRetry || 0) + 1;
            if (this.nudgeRetry = n, n < S.nudgeMaxRetry) {
              var h = r + n * S.nudgeOffset;
              w.logger.warn("Nudging 'currentTime' from " + r + " to " + h), t.currentTime = h, d.trigger(y.Events.ERROR, { type: m.ErrorTypes.MEDIA_ERROR, details: m.ErrorDetails.BUFFER_NUDGE_ON_STALL, fatal: false });
            } else
              w.logger.error("Playhead still not moving while enough data buffered @" + r + " after " + S.nudgeMaxRetry + " nudges"), d.trigger(y.Events.ERROR, { type: m.ErrorTypes.MEDIA_ERROR, details: m.ErrorDetails.BUFFER_STALLED_ERROR, fatal: true });
          }, D;
        }();
      }, "./src/controller/id3-track-controller.ts": function(x, T, e) {
        "use strict";
        e.r(T);
        var R = e("./src/events.ts"), m = e("./src/utils/texttrack-utils.ts"), y = e("./src/demux/id3.ts"), w = 0.25, A = function() {
          function L(u) {
            this.hls = void 0, this.id3Track = null, this.media = null, this.hls = u, this._registerListeners();
          }
          var b = L.prototype;
          return b.destroy = function() {
            this._unregisterListeners();
          }, b._registerListeners = function() {
            var u = this.hls;
            u.on(R.Events.MEDIA_ATTACHED, this.onMediaAttached, this), u.on(R.Events.MEDIA_DETACHING, this.onMediaDetaching, this), u.on(R.Events.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), u.on(R.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
          }, b._unregisterListeners = function() {
            var u = this.hls;
            u.off(R.Events.MEDIA_ATTACHED, this.onMediaAttached, this), u.off(R.Events.MEDIA_DETACHING, this.onMediaDetaching, this), u.off(R.Events.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), u.off(R.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
          }, b.onMediaAttached = function(u, g) {
            this.media = g.media;
          }, b.onMediaDetaching = function() {
            !this.id3Track || (Object(m.clearCurrentCues)(this.id3Track), this.id3Track = null, this.media = null);
          }, b.getID3Track = function(u) {
            if (this.media) {
              for (var g = 0; g < u.length; g++) {
                var D = u[g];
                if (D.kind === "metadata" && D.label === "id3")
                  return Object(m.sendAddTrackEvent)(D, this.media), D;
              }
              return this.media.addTextTrack("metadata", "id3");
            }
          }, b.onFragParsingMetadata = function(u, g) {
            if (this.media) {
              var D = g.frag, E = g.samples;
              this.id3Track || (this.id3Track = this.getID3Track(this.media.textTracks), this.id3Track.mode = "hidden");
              for (var S = self.WebKitDataCue || self.VTTCue || self.TextTrackCue, d = 0; d < E.length; d++) {
                var t = y.getID3Frames(E[d].data);
                if (t) {
                  var r = E[d].pts, n = d < E.length - 1 ? E[d + 1].pts : D.end, h = n - r;
                  h <= 0 && (n = r + w);
                  for (var a = 0; a < t.length; a++) {
                    var f = t[a];
                    if (!y.isTimeStampFrame(f)) {
                      var v = new S(r, n, "");
                      v.value = f, this.id3Track.addCue(v);
                    }
                  }
                }
              }
            }
          }, b.onBufferFlushing = function(u, g) {
            var D = g.startOffset, E = g.endOffset, S = g.type;
            if (!S || S === "audio") {
              var d = this.id3Track;
              d && Object(m.removeCuesInRange)(d, D, E);
            }
          }, L;
        }();
        T.default = A;
      }, "./src/controller/latency-controller.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "default", function() {
          return L;
        });
        var R = e("./src/errors.ts"), m = e("./src/events.ts"), y = e("./src/utils/logger.ts");
        function w(b, u) {
          for (var g = 0; g < u.length; g++) {
            var D = u[g];
            D.enumerable = D.enumerable || false, D.configurable = true, "value" in D && (D.writable = true), Object.defineProperty(b, D.key, D);
          }
        }
        function A(b, u, g) {
          return u && w(b.prototype, u), g && w(b, g), b;
        }
        var L = function() {
          function b(g) {
            var D = this;
            this.hls = void 0, this.config = void 0, this.media = null, this.levelDetails = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this.timeupdateHandler = function() {
              return D.timeupdate();
            }, this.hls = g, this.config = g.config, this.registerListeners();
          }
          var u = b.prototype;
          return u.destroy = function() {
            this.unregisterListeners(), this.onMediaDetaching(), this.levelDetails = null, this.hls = this.timeupdateHandler = null;
          }, u.registerListeners = function() {
            this.hls.on(m.Events.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(m.Events.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.on(m.Events.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(m.Events.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.on(m.Events.ERROR, this.onError, this);
          }, u.unregisterListeners = function() {
            this.hls.off(m.Events.MEDIA_ATTACHED, this.onMediaAttached), this.hls.off(m.Events.MEDIA_DETACHING, this.onMediaDetaching), this.hls.off(m.Events.MANIFEST_LOADING, this.onManifestLoading), this.hls.off(m.Events.LEVEL_UPDATED, this.onLevelUpdated), this.hls.off(m.Events.ERROR, this.onError);
          }, u.onMediaAttached = function(g, D) {
            this.media = D.media, this.media.addEventListener("timeupdate", this.timeupdateHandler);
          }, u.onMediaDetaching = function() {
            this.media && (this.media.removeEventListener("timeupdate", this.timeupdateHandler), this.media = null);
          }, u.onManifestLoading = function() {
            this.levelDetails = null, this._latency = null, this.stallCount = 0;
          }, u.onLevelUpdated = function(g, D) {
            var E = D.details;
            this.levelDetails = E, E.advanced && this.timeupdate(), !E.live && this.media && this.media.removeEventListener("timeupdate", this.timeupdateHandler);
          }, u.onError = function(g, D) {
            D.details === R.ErrorDetails.BUFFER_STALLED_ERROR && (this.stallCount++, y.logger.warn("[playback-rate-controller]: Stall detected, adjusting target latency"));
          }, u.timeupdate = function() {
            var g = this.media, D = this.levelDetails;
            if (!(!g || !D)) {
              this.currentTime = g.currentTime;
              var E = this.computeLatency();
              if (E !== null) {
                this._latency = E;
                var S = this.config, d = S.lowLatencyMode, t = S.maxLiveSyncPlaybackRate;
                if (!(!d || t === 1)) {
                  var r = this.targetLatency;
                  if (r !== null) {
                    var n = E - r, h = Math.min(this.maxLatency, r + D.targetduration), a = n < h;
                    if (D.live && a && n > 0.05 && this.forwardBufferLength > 1) {
                      var f = Math.min(2, Math.max(1, t)), v = Math.round(2 / (1 + Math.exp(-0.75 * n - this.edgeStalled)) * 20) / 20;
                      g.playbackRate = Math.min(f, Math.max(1, v));
                    } else
                      g.playbackRate !== 1 && g.playbackRate !== 0 && (g.playbackRate = 1);
                  }
                }
              }
            }
          }, u.estimateLiveEdge = function() {
            var g = this.levelDetails;
            return g === null ? null : g.edge + g.age;
          }, u.computeLatency = function() {
            var g = this.estimateLiveEdge();
            return g === null ? null : g - this.currentTime;
          }, A(b, [{ key: "latency", get: function() {
            return this._latency || 0;
          } }, { key: "maxLatency", get: function() {
            var g = this.config, D = this.levelDetails;
            return g.liveMaxLatencyDuration !== void 0 ? g.liveMaxLatencyDuration : D ? g.liveMaxLatencyDurationCount * D.targetduration : 0;
          } }, { key: "targetLatency", get: function() {
            var g = this.levelDetails;
            if (g === null)
              return null;
            var D = g.holdBack, E = g.partHoldBack, S = g.targetduration, d = this.config, t = d.liveSyncDuration, r = d.liveSyncDurationCount, n = d.lowLatencyMode, h = this.hls.userConfig, a = n && E || D;
            (h.liveSyncDuration || h.liveSyncDurationCount || a === 0) && (a = t !== void 0 ? t : r * S);
            var f = S, v = 1;
            return a + Math.min(this.stallCount * v, f);
          } }, { key: "liveSyncPosition", get: function() {
            var g = this.estimateLiveEdge(), D = this.targetLatency, E = this.levelDetails;
            if (g === null || D === null || E === null)
              return null;
            var S = E.edge, d = g - D - this.edgeStalled, t = S - E.totalduration, r = S - (this.config.lowLatencyMode && E.partTarget || E.targetduration);
            return Math.min(Math.max(t, d), r);
          } }, { key: "drift", get: function() {
            var g = this.levelDetails;
            return g === null ? 1 : g.drift;
          } }, { key: "edgeStalled", get: function() {
            var g = this.levelDetails;
            if (g === null)
              return 0;
            var D = (this.config.lowLatencyMode && g.partTarget || g.targetduration) * 3;
            return Math.max(g.age - D, 0);
          } }, { key: "forwardBufferLength", get: function() {
            var g = this.media, D = this.levelDetails;
            if (!g || !D)
              return 0;
            var E = g.buffered.length;
            return E ? g.buffered.end(E - 1) : D.edge - this.currentTime;
          } }]), b;
        }();
      }, "./src/controller/level-controller.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "default", function() {
          return t;
        });
        var R = e("./src/types/level.ts"), m = e("./src/events.ts"), y = e("./src/errors.ts"), w = e("./src/utils/codecs.ts"), A = e("./src/controller/level-helper.ts"), L = e("./src/controller/base-playlist-controller.ts"), b = e("./src/types/loader.ts");
        function u() {
          return u = Object.assign || function(r) {
            for (var n = 1; n < arguments.length; n++) {
              var h = arguments[n];
              for (var a in h)
                Object.prototype.hasOwnProperty.call(h, a) && (r[a] = h[a]);
            }
            return r;
          }, u.apply(this, arguments);
        }
        function g(r, n) {
          for (var h = 0; h < n.length; h++) {
            var a = n[h];
            a.enumerable = a.enumerable || false, a.configurable = true, "value" in a && (a.writable = true), Object.defineProperty(r, a.key, a);
          }
        }
        function D(r, n, h) {
          return n && g(r.prototype, n), h && g(r, h), r;
        }
        function E(r, n) {
          r.prototype = Object.create(n.prototype), r.prototype.constructor = r, S(r, n);
        }
        function S(r, n) {
          return S = Object.setPrototypeOf || function(h, a) {
            return h.__proto__ = a, h;
          }, S(r, n);
        }
        var d = /chrome|firefox/.test(navigator.userAgent.toLowerCase()), t = function(r) {
          E(n, r);
          function n(a) {
            var f;
            return f = r.call(this, a, "[level-controller]") || this, f._levels = [], f._firstLevel = -1, f._startLevel = void 0, f.currentLevelIndex = -1, f.manualLevelIndex = -1, f.onParsedComplete = void 0, f._registerListeners(), f;
          }
          var h = n.prototype;
          return h._registerListeners = function() {
            var a = this.hls;
            a.on(m.Events.MANIFEST_LOADED, this.onManifestLoaded, this), a.on(m.Events.LEVEL_LOADED, this.onLevelLoaded, this), a.on(m.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), a.on(m.Events.FRAG_LOADED, this.onFragLoaded, this), a.on(m.Events.ERROR, this.onError, this);
          }, h._unregisterListeners = function() {
            var a = this.hls;
            a.off(m.Events.MANIFEST_LOADED, this.onManifestLoaded, this), a.off(m.Events.LEVEL_LOADED, this.onLevelLoaded, this), a.off(m.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), a.off(m.Events.FRAG_LOADED, this.onFragLoaded, this), a.off(m.Events.ERROR, this.onError, this);
          }, h.destroy = function() {
            this._unregisterListeners(), this.manualLevelIndex = -1, this._levels.length = 0, r.prototype.destroy.call(this);
          }, h.startLoad = function() {
            var a = this._levels;
            a.forEach(function(f) {
              f.loadError = 0;
            }), r.prototype.startLoad.call(this);
          }, h.onManifestLoaded = function(a, f) {
            var v = [], _ = [], p = [], o, s = {}, i, c = false, l = false, k = false;
            if (f.levels.forEach(function(N) {
              var B = N.attrs;
              c = c || !!(N.width && N.height), l = l || !!N.videoCodec, k = k || !!N.audioCodec, d && N.audioCodec && N.audioCodec.indexOf("mp4a.40.34") !== -1 && (N.audioCodec = void 0);
              var F = N.bitrate + "-" + N.attrs.RESOLUTION + "-" + N.attrs.CODECS;
              i = s[F], i ? i.url.push(N.url) : (i = new R.Level(N), s[F] = i, v.push(i)), B && (B.AUDIO && Object(A.addGroupId)(i, "audio", B.AUDIO), B.SUBTITLES && Object(A.addGroupId)(i, "text", B.SUBTITLES));
            }), (c || l) && k && (v = v.filter(function(N) {
              var B = N.videoCodec, F = N.width, U = N.height;
              return !!B || !!(F && U);
            })), v = v.filter(function(N) {
              var B = N.audioCodec, F = N.videoCodec;
              return (!B || Object(w.isCodecSupportedInMp4)(B, "audio")) && (!F || Object(w.isCodecSupportedInMp4)(F, "video"));
            }), f.audioTracks && (_ = f.audioTracks.filter(function(N) {
              return !N.audioCodec || Object(w.isCodecSupportedInMp4)(N.audioCodec, "audio");
            }), Object(A.assignTrackIdsByGroup)(_)), f.subtitles && (p = f.subtitles, Object(A.assignTrackIdsByGroup)(p)), v.length > 0) {
              o = v[0].bitrate, v.sort(function(N, B) {
                return N.bitrate - B.bitrate;
              }), this._levels = v;
              for (var I = 0; I < v.length; I++)
                if (v[I].bitrate === o) {
                  this._firstLevel = I, this.log("manifest loaded, " + v.length + " level(s) found, first bitrate: " + o);
                  break;
                }
              var C = k && !l, P = { levels: v, audioTracks: _, subtitleTracks: p, firstLevel: this._firstLevel, stats: f.stats, audio: k, video: l, altAudio: !C && _.some(function(N) {
                return !!N.url;
              }) };
              this.hls.trigger(m.Events.MANIFEST_PARSED, P), (this.hls.config.autoStartLoad || this.hls.forceStartLoad) && this.hls.startLoad(this.hls.config.startPosition);
            } else
              this.hls.trigger(m.Events.ERROR, { type: y.ErrorTypes.MEDIA_ERROR, details: y.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR, fatal: true, url: f.url, reason: "no level with compatible codecs found in manifest" });
          }, h.onError = function(a, f) {
            if (r.prototype.onError.call(this, a, f), !f.fatal) {
              var v = f.context, _ = this._levels[this.currentLevelIndex];
              if (v && (v.type === b.PlaylistContextType.AUDIO_TRACK && _.audioGroupIds && v.groupId === _.audioGroupIds[_.urlId] || v.type === b.PlaylistContextType.SUBTITLE_TRACK && _.textGroupIds && v.groupId === _.textGroupIds[_.urlId])) {
                this.redundantFailover(this.currentLevelIndex);
                return;
              }
              var p = false, o = true, s;
              switch (f.details) {
                case y.ErrorDetails.FRAG_LOAD_ERROR:
                case y.ErrorDetails.FRAG_LOAD_TIMEOUT:
                case y.ErrorDetails.KEY_LOAD_ERROR:
                case y.ErrorDetails.KEY_LOAD_TIMEOUT:
                  if (f.frag) {
                    var i = this._levels[f.frag.level];
                    i ? (i.fragmentError++, i.fragmentError > this.hls.config.fragLoadingMaxRetry && (s = f.frag.level)) : s = f.frag.level;
                  }
                  break;
                case y.ErrorDetails.LEVEL_LOAD_ERROR:
                case y.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                  v && (v.deliveryDirectives && (o = false), s = v.level), p = true;
                  break;
                case y.ErrorDetails.REMUX_ALLOC_ERROR:
                  s = f.level, p = true;
                  break;
              }
              s !== void 0 && this.recoverLevel(f, s, p, o);
            }
          }, h.recoverLevel = function(a, f, v, _) {
            var p = a.details, o = this._levels[f];
            if (o.loadError++, v) {
              var s = this.retryLoadingOrFail(a);
              if (s)
                a.levelRetry = true;
              else {
                this.currentLevelIndex = -1;
                return;
              }
            }
            if (_) {
              var i = o.url.length;
              if (i > 1 && o.loadError < i)
                a.levelRetry = true, this.redundantFailover(f);
              else if (this.manualLevelIndex === -1) {
                var c = f === 0 ? this._levels.length - 1 : f - 1;
                this.currentLevelIndex !== c && this._levels[c].loadError === 0 && (this.warn(p + ": switch to " + c), a.levelRetry = true, this.hls.nextAutoLevel = c);
              }
            }
          }, h.redundantFailover = function(a) {
            var f = this._levels[a], v = f.url.length;
            if (v > 1) {
              var _ = (f.urlId + 1) % v;
              this.warn("Switching to redundant URL-id " + _), this._levels.forEach(function(p) {
                p.urlId = _;
              }), this.level = a;
            }
          }, h.onFragLoaded = function(a, f) {
            var v = f.frag;
            if (v !== void 0 && v.type === b.PlaylistLevelType.MAIN) {
              var _ = this._levels[v.level];
              _ !== void 0 && (_.fragmentError = 0, _.loadError = 0);
            }
          }, h.onLevelLoaded = function(a, f) {
            var v, _ = f.level, p = f.details, o = this._levels[_];
            if (!o) {
              var s;
              this.warn("Invalid level index " + _), (s = f.deliveryDirectives) !== null && s !== void 0 && s.skip && (p.deltaUpdateFailed = true);
              return;
            }
            _ === this.currentLevelIndex ? (o.fragmentError === 0 && (o.loadError = 0, this.retryCount = 0), this.playlistLoaded(_, f, o.details)) : (v = f.deliveryDirectives) !== null && v !== void 0 && v.skip && (p.deltaUpdateFailed = true);
          }, h.onAudioTrackSwitched = function(a, f) {
            var v = this.hls.levels[this.currentLevelIndex];
            if (!!v && v.audioGroupIds) {
              for (var _ = -1, p = this.hls.audioTracks[f.id].groupId, o = 0; o < v.audioGroupIds.length; o++)
                if (v.audioGroupIds[o] === p) {
                  _ = o;
                  break;
                }
              _ !== v.urlId && (v.urlId = _, this.startLoad());
            }
          }, h.loadPlaylist = function(a) {
            var f = this.currentLevelIndex, v = this._levels[f];
            if (this.canLoad && v && v.url.length > 0) {
              var _ = v.urlId, p = v.url[_];
              if (a)
                try {
                  p = a.addDirectives(p);
                } catch (o) {
                  this.warn("Could not construct new URL with HLS Delivery Directives: " + o);
                }
              this.log("Attempt loading level index " + f + (a ? " at sn " + a.msn + " part " + a.part : "") + " with URL-id " + _ + " " + p), this.clearTimer(), this.hls.trigger(m.Events.LEVEL_LOADING, { url: p, level: f, id: _, deliveryDirectives: a || null });
            }
          }, h.removeLevel = function(a, f) {
            var v = function(p, o) {
              return o !== f;
            }, _ = this._levels.filter(function(p, o) {
              return o !== a ? true : p.url.length > 1 && f !== void 0 ? (p.url = p.url.filter(v), p.audioGroupIds && (p.audioGroupIds = p.audioGroupIds.filter(v)), p.textGroupIds && (p.textGroupIds = p.textGroupIds.filter(v)), p.urlId = 0, true) : false;
            }).map(function(p, o) {
              var s = p.details;
              return s != null && s.fragments && s.fragments.forEach(function(i) {
                i.level = o;
              }), p;
            });
            this._levels = _, this.hls.trigger(m.Events.LEVELS_UPDATED, { levels: _ });
          }, D(n, [{ key: "levels", get: function() {
            return this._levels.length === 0 ? null : this._levels;
          } }, { key: "level", get: function() {
            return this.currentLevelIndex;
          }, set: function(a) {
            var f, v = this._levels;
            if (v.length !== 0 && !(this.currentLevelIndex === a && (f = v[a]) !== null && f !== void 0 && f.details)) {
              if (a < 0 || a >= v.length) {
                var _ = a < 0;
                if (this.hls.trigger(m.Events.ERROR, { type: y.ErrorTypes.OTHER_ERROR, details: y.ErrorDetails.LEVEL_SWITCH_ERROR, level: a, fatal: _, reason: "invalid level idx" }), _)
                  return;
                a = Math.min(a, v.length - 1);
              }
              this.clearTimer();
              var p = this.currentLevelIndex, o = v[p], s = v[a];
              this.log("switching to level " + a + " from " + p), this.currentLevelIndex = a;
              var i = u({}, s, { level: a, maxBitrate: s.maxBitrate, uri: s.uri, urlId: s.urlId });
              delete i._urlId, this.hls.trigger(m.Events.LEVEL_SWITCHING, i);
              var c = s.details;
              if (!c || c.live) {
                var l = this.switchParams(s.uri, o == null ? void 0 : o.details);
                this.loadPlaylist(l);
              }
            }
          } }, { key: "manualLevel", get: function() {
            return this.manualLevelIndex;
          }, set: function(a) {
            this.manualLevelIndex = a, this._startLevel === void 0 && (this._startLevel = a), a !== -1 && (this.level = a);
          } }, { key: "firstLevel", get: function() {
            return this._firstLevel;
          }, set: function(a) {
            this._firstLevel = a;
          } }, { key: "startLevel", get: function() {
            if (this._startLevel === void 0) {
              var a = this.hls.config.startLevel;
              return a !== void 0 ? a : this._firstLevel;
            } else
              return this._startLevel;
          }, set: function(a) {
            this._startLevel = a;
          } }, { key: "nextLoadLevel", get: function() {
            return this.manualLevelIndex !== -1 ? this.manualLevelIndex : this.hls.nextAutoLevel;
          }, set: function(a) {
            this.level = a, this.manualLevelIndex === -1 && (this.hls.nextAutoLevel = a);
          } }]), n;
        }(L.default);
      }, "./src/controller/level-helper.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "addGroupId", function() {
          return y;
        }), e.d(T, "assignTrackIdsByGroup", function() {
          return w;
        }), e.d(T, "updatePTS", function() {
          return A;
        }), e.d(T, "updateFragPTSDTS", function() {
          return b;
        }), e.d(T, "mergeDetails", function() {
          return u;
        }), e.d(T, "mapPartIntersection", function() {
          return g;
        }), e.d(T, "mapFragmentIntersection", function() {
          return D;
        }), e.d(T, "adjustSliding", function() {
          return E;
        }), e.d(T, "addSliding", function() {
          return S;
        }), e.d(T, "computeReloadInterval", function() {
          return d;
        }), e.d(T, "getFragmentWithSN", function() {
          return t;
        }), e.d(T, "getPartWith", function() {
          return r;
        });
        var R = e("./src/polyfills/number.ts"), m = e("./src/utils/logger.ts");
        function y(n, h, a) {
          switch (h) {
            case "audio":
              n.audioGroupIds || (n.audioGroupIds = []), n.audioGroupIds.push(a);
              break;
            case "text":
              n.textGroupIds || (n.textGroupIds = []), n.textGroupIds.push(a);
              break;
          }
        }
        function w(n) {
          var h = {};
          n.forEach(function(a) {
            var f = a.groupId || "";
            a.id = h[f] = h[f] || 0, h[f]++;
          });
        }
        function A(n, h, a) {
          var f = n[h], v = n[a];
          L(f, v);
        }
        function L(n, h) {
          var a = h.startPTS;
          if (Object(R.isFiniteNumber)(a)) {
            var f = 0, v;
            h.sn > n.sn ? (f = a - n.start, v = n) : (f = n.start - a, v = h), v.duration !== f && (v.duration = f);
          } else if (h.sn > n.sn) {
            var _ = n.cc === h.cc;
            _ && n.minEndPTS ? h.start = n.start + (n.minEndPTS - n.start) : h.start = n.start + n.duration;
          } else
            h.start = Math.max(n.start - h.duration, 0);
        }
        function b(n, h, a, f, v, _) {
          var p = f - a;
          p <= 0 && (m.logger.warn("Fragment should have a positive duration", h), f = a + h.duration, _ = v + h.duration);
          var o = a, s = f, i = h.startPTS, c = h.endPTS;
          if (Object(R.isFiniteNumber)(i)) {
            var l = Math.abs(i - a);
            Object(R.isFiniteNumber)(h.deltaPTS) ? h.deltaPTS = Math.max(l, h.deltaPTS) : h.deltaPTS = l, o = Math.max(a, i), a = Math.min(a, i), v = Math.min(v, h.startDTS), s = Math.min(f, c), f = Math.max(f, c), _ = Math.max(_, h.endDTS);
          }
          h.duration = f - a;
          var k = a - h.start;
          h.appendedPTS = f, h.start = h.startPTS = a, h.maxStartPTS = o, h.startDTS = v, h.endPTS = f, h.minEndPTS = s, h.endDTS = _;
          var I = h.sn;
          if (!n || I < n.startSN || I > n.endSN)
            return 0;
          var C, P = I - n.startSN, N = n.fragments;
          for (N[P] = h, C = P; C > 0; C--)
            L(N[C], N[C - 1]);
          for (C = P; C < N.length - 1; C++)
            L(N[C], N[C + 1]);
          return n.fragmentHint && L(N[N.length - 1], n.fragmentHint), n.PTSKnown = n.alignedSliding = true, k;
        }
        function u(n, h) {
          for (var a = null, f = n.fragments, v = f.length - 1; v >= 0; v--) {
            var _ = f[v].initSegment;
            if (_) {
              a = _;
              break;
            }
          }
          n.fragmentHint && delete n.fragmentHint.endPTS;
          var p = 0, o;
          if (D(n, h, function(I, C) {
            var P;
            I.relurl && (p = I.cc - C.cc), Object(R.isFiniteNumber)(I.startPTS) && Object(R.isFiniteNumber)(I.endPTS) && (C.start = C.startPTS = I.startPTS, C.startDTS = I.startDTS, C.appendedPTS = I.appendedPTS, C.maxStartPTS = I.maxStartPTS, C.endPTS = I.endPTS, C.endDTS = I.endDTS, C.minEndPTS = I.minEndPTS, C.duration = I.endPTS - I.startPTS, C.duration && (o = C), h.PTSKnown = h.alignedSliding = true), C.elementaryStreams = I.elementaryStreams, C.loader = I.loader, C.stats = I.stats, C.urlId = I.urlId, I.initSegment ? (C.initSegment = I.initSegment, a = I.initSegment) : (!C.initSegment || C.initSegment.relurl == ((P = a) === null || P === void 0 ? void 0 : P.relurl)) && (C.initSegment = a);
          }), h.skippedSegments && (h.deltaUpdateFailed = h.fragments.some(function(I) {
            return !I;
          }), h.deltaUpdateFailed)) {
            m.logger.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
            for (var s = h.skippedSegments; s--; )
              h.fragments.shift();
            h.startSN = h.fragments[0].sn, h.startCC = h.fragments[0].cc;
          }
          var i = h.fragments;
          if (p) {
            m.logger.warn("discontinuity sliding from playlist, take drift into account");
            for (var c = 0; c < i.length; c++)
              i[c].cc += p;
          }
          h.skippedSegments && (h.startCC = h.fragments[0].cc), g(n.partList, h.partList, function(I, C) {
            C.elementaryStreams = I.elementaryStreams, C.stats = I.stats;
          }), o ? b(h, o, o.startPTS, o.endPTS, o.startDTS, o.endDTS) : E(n, h), i.length && (h.totalduration = h.edge - i[0].start), h.driftStartTime = n.driftStartTime, h.driftStart = n.driftStart;
          var l = h.advancedDateTime;
          if (h.advanced && l) {
            var k = h.edge;
            h.driftStart || (h.driftStartTime = l, h.driftStart = k), h.driftEndTime = l, h.driftEnd = k;
          } else
            h.driftEndTime = n.driftEndTime, h.driftEnd = n.driftEnd, h.advancedDateTime = n.advancedDateTime;
        }
        function g(n, h, a) {
          if (n && h)
            for (var f = 0, v = 0, _ = n.length; v <= _; v++) {
              var p = n[v], o = h[v + f];
              p && o && p.index === o.index && p.fragment.sn === o.fragment.sn ? a(p, o) : f--;
            }
        }
        function D(n, h, a) {
          for (var f = h.skippedSegments, v = Math.max(n.startSN, h.startSN) - h.startSN, _ = (n.fragmentHint ? 1 : 0) + (f ? h.endSN : Math.min(n.endSN, h.endSN)) - h.startSN, p = h.startSN - n.startSN, o = h.fragmentHint ? h.fragments.concat(h.fragmentHint) : h.fragments, s = n.fragmentHint ? n.fragments.concat(n.fragmentHint) : n.fragments, i = v; i <= _; i++) {
            var c = s[p + i], l = o[i];
            f && !l && i < f && (l = h.fragments[i] = c), c && l && a(c, l);
          }
        }
        function E(n, h) {
          var a = h.startSN + h.skippedSegments - n.startSN, f = n.fragments;
          a < 0 || a >= f.length || S(h, f[a].start);
        }
        function S(n, h) {
          if (h) {
            for (var a = n.fragments, f = n.skippedSegments; f < a.length; f++)
              a[f].start += h;
            n.fragmentHint && (n.fragmentHint.start += h);
          }
        }
        function d(n, h) {
          var a = 1e3 * n.levelTargetDuration, f = a / 2, v = n.age, _ = v > 0 && v < a * 3, p = h.loading.end - h.loading.start, o, s = n.availabilityDelay;
          if (n.updated === false)
            if (_) {
              var i = 333 * n.misses;
              o = Math.max(Math.min(f, p * 2), i), n.availabilityDelay = (n.availabilityDelay || 0) + o;
            } else
              o = f;
          else
            _ ? (s = Math.min(s || a / 2, v), n.availabilityDelay = s, o = s + a - v) : o = a - p;
          return Math.round(o);
        }
        function t(n, h, a) {
          if (!n || !n.details)
            return null;
          var f = n.details, v = f.fragments[h - f.startSN];
          return v || (v = f.fragmentHint, v && v.sn === h) ? v : h < f.startSN && a && a.sn === h ? a : null;
        }
        function r(n, h, a) {
          if (!n || !n.details)
            return null;
          var f = n.details.partList;
          if (f)
            for (var v = f.length; v--; ) {
              var _ = f[v];
              if (_.index === a && _.fragment.sn === h)
                return _;
            }
          return null;
        }
      }, "./src/controller/stream-controller.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "default", function() {
          return f;
        });
        var R = e("./src/polyfills/number.ts"), m = e("./src/controller/base-stream-controller.ts"), y = e("./src/is-supported.ts"), w = e("./src/events.ts"), A = e("./src/utils/buffer-helper.ts"), L = e("./src/controller/fragment-tracker.ts"), b = e("./src/types/loader.ts"), u = e("./src/loader/fragment.ts"), g = e("./src/demux/transmuxer-interface.ts"), D = e("./src/types/transmuxer.ts"), E = e("./src/controller/gap-controller.ts"), S = e("./src/errors.ts"), d = e("./src/utils/logger.ts");
        function t(v, _) {
          for (var p = 0; p < _.length; p++) {
            var o = _[p];
            o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(v, o.key, o);
          }
        }
        function r(v, _, p) {
          return _ && t(v.prototype, _), p && t(v, p), v;
        }
        function n(v, _) {
          v.prototype = Object.create(_.prototype), v.prototype.constructor = v, h(v, _);
        }
        function h(v, _) {
          return h = Object.setPrototypeOf || function(p, o) {
            return p.__proto__ = o, p;
          }, h(v, _);
        }
        var a = 100, f = function(v) {
          n(_, v);
          function _(o, s) {
            var i;
            return i = v.call(this, o, s, "[stream-controller]") || this, i.audioCodecSwap = false, i.gapController = null, i.level = -1, i._forceStartLoad = false, i.altAudio = false, i.audioOnly = false, i.fragPlaying = null, i.onvplaying = null, i.onvseeked = null, i.fragLastKbps = 0, i.stalled = false, i.couldBacktrack = false, i.audioCodecSwitch = false, i.videoBuffer = null, i._registerListeners(), i;
          }
          var p = _.prototype;
          return p._registerListeners = function() {
            var o = this.hls;
            o.on(w.Events.MEDIA_ATTACHED, this.onMediaAttached, this), o.on(w.Events.MEDIA_DETACHING, this.onMediaDetaching, this), o.on(w.Events.MANIFEST_LOADING, this.onManifestLoading, this), o.on(w.Events.MANIFEST_PARSED, this.onManifestParsed, this), o.on(w.Events.LEVEL_LOADING, this.onLevelLoading, this), o.on(w.Events.LEVEL_LOADED, this.onLevelLoaded, this), o.on(w.Events.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), o.on(w.Events.ERROR, this.onError, this), o.on(w.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), o.on(w.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), o.on(w.Events.BUFFER_CREATED, this.onBufferCreated, this), o.on(w.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), o.on(w.Events.LEVELS_UPDATED, this.onLevelsUpdated, this), o.on(w.Events.FRAG_BUFFERED, this.onFragBuffered, this);
          }, p._unregisterListeners = function() {
            var o = this.hls;
            o.off(w.Events.MEDIA_ATTACHED, this.onMediaAttached, this), o.off(w.Events.MEDIA_DETACHING, this.onMediaDetaching, this), o.off(w.Events.MANIFEST_LOADING, this.onManifestLoading, this), o.off(w.Events.MANIFEST_PARSED, this.onManifestParsed, this), o.off(w.Events.LEVEL_LOADED, this.onLevelLoaded, this), o.off(w.Events.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), o.off(w.Events.ERROR, this.onError, this), o.off(w.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), o.off(w.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), o.off(w.Events.BUFFER_CREATED, this.onBufferCreated, this), o.off(w.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), o.off(w.Events.LEVELS_UPDATED, this.onLevelsUpdated, this), o.off(w.Events.FRAG_BUFFERED, this.onFragBuffered, this);
          }, p.onHandlerDestroying = function() {
            this._unregisterListeners(), this.onMediaDetaching();
          }, p.startLoad = function(o) {
            if (this.levels) {
              var s = this.lastCurrentTime, i = this.hls;
              if (this.stopLoad(), this.setInterval(a), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) {
                var c = i.startLevel;
                c === -1 && (i.config.testBandwidth ? (c = 0, this.bitrateTest = true) : c = i.nextAutoLevel), this.level = i.nextLoadLevel = c, this.loadedmetadata = false;
              }
              s > 0 && o === -1 && (this.log("Override startPosition with lastCurrentTime @" + s.toFixed(3)), o = s), this.state = m.State.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = o, this.tick();
            } else
              this._forceStartLoad = true, this.state = m.State.STOPPED;
          }, p.stopLoad = function() {
            this._forceStartLoad = false, v.prototype.stopLoad.call(this);
          }, p.doTick = function() {
            switch (this.state) {
              case m.State.IDLE:
                this.doTickIdle();
                break;
              case m.State.WAITING_LEVEL: {
                var o, s = this.levels, i = this.level, c = s == null || (o = s[i]) === null || o === void 0 ? void 0 : o.details;
                if (c && (!c.live || this.levelLastLoaded === this.level)) {
                  if (this.waitForCdnTuneIn(c))
                    break;
                  this.state = m.State.IDLE;
                  break;
                }
                break;
              }
              case m.State.FRAG_LOADING_WAITING_RETRY:
                {
                  var l, k = self.performance.now(), I = this.retryDate;
                  (!I || k >= I || (l = this.media) !== null && l !== void 0 && l.seeking) && (this.log("retryDate reached, switch back to IDLE state"), this.state = m.State.IDLE);
                }
                break;
              default:
                break;
            }
            this.onTickEnd();
          }, p.onTickEnd = function() {
            v.prototype.onTickEnd.call(this), this.checkBuffer(), this.checkFragmentChanged();
          }, p.doTickIdle = function() {
            var o, s, i = this.hls, c = this.levelLastLoaded, l = this.levels, k = this.media, I = i.config, C = i.nextLoadLevel;
            if (!(c === null || !k && (this.startFragRequested || !I.startFragPrefetch)) && !(this.altAudio && this.audioOnly) && !(!l || !l[C])) {
              var P = l[C];
              this.level = i.nextLoadLevel = C;
              var N = P.details;
              if (!N || this.state === m.State.WAITING_LEVEL || N.live && this.levelLastLoaded !== C) {
                this.state = m.State.WAITING_LEVEL;
                return;
              }
              var B = this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : k, b.PlaylistLevelType.MAIN);
              if (B !== null) {
                var F = B.len, U = this.getMaxBufferLength(P.maxBitrate);
                if (!(F >= U)) {
                  if (this._streamEnded(B, N)) {
                    var j = {};
                    this.altAudio && (j.type = "video"), this.hls.trigger(w.Events.BUFFER_EOS, j), this.state = m.State.ENDED;
                    return;
                  }
                  var H = B.end, V = this.getNextFragment(H, N);
                  if (this.couldBacktrack && !this.fragPrevious && V && V.sn !== "initSegment") {
                    var K = V.sn - N.startSN;
                    K > 1 && (V = N.fragments[K - 1], this.fragmentTracker.removeFragment(V));
                  }
                  if (V && this.fragmentTracker.getState(V) === L.FragmentState.OK && this.nextLoadPosition > H) {
                    var q = this.audioOnly && !this.altAudio ? u.ElementaryStreamTypes.AUDIO : u.ElementaryStreamTypes.VIDEO;
                    this.afterBufferFlushed(k, q, b.PlaylistLevelType.MAIN), V = this.getNextFragment(this.nextLoadPosition, N);
                  }
                  !V || (V.initSegment && !V.initSegment.data && !this.bitrateTest && (V = V.initSegment), ((o = V.decryptdata) === null || o === void 0 ? void 0 : o.keyFormat) === "identity" && !((s = V.decryptdata) !== null && s !== void 0 && s.key) ? this.loadKey(V, N) : this.loadFragment(V, N, H));
                }
              }
            }
          }, p.loadFragment = function(o, s, i) {
            var c, l = this.fragmentTracker.getState(o);
            if (this.fragCurrent = o, l === L.FragmentState.BACKTRACKED) {
              var k = this.fragmentTracker.getBacktrackData(o);
              if (k) {
                this._handleFragmentLoadProgress(k), this._handleFragmentLoadComplete(k);
                return;
              } else
                l = L.FragmentState.NOT_LOADED;
            }
            l === L.FragmentState.NOT_LOADED || l === L.FragmentState.PARTIAL ? o.sn === "initSegment" ? this._loadInitSegment(o) : this.bitrateTest ? (o.bitrateTest = true, this.log("Fragment " + o.sn + " of level " + o.level + " is being downloaded to test bitrate and will not be buffered"), this._loadBitrateTestFrag(o)) : (this.startFragRequested = true, v.prototype.loadFragment.call(this, o, s, i)) : l === L.FragmentState.APPENDING ? this.reduceMaxBufferLength(o.duration) && this.fragmentTracker.removeFragment(o) : ((c = this.media) === null || c === void 0 ? void 0 : c.buffered.length) === 0 && this.fragmentTracker.removeAllFragments();
          }, p.getAppendedFrag = function(o) {
            var s = this.fragmentTracker.getAppendedFrag(o, b.PlaylistLevelType.MAIN);
            return s && "fragment" in s ? s.fragment : s;
          }, p.getBufferedFrag = function(o) {
            return this.fragmentTracker.getBufferedFrag(o, b.PlaylistLevelType.MAIN);
          }, p.followingBufferedFrag = function(o) {
            return o ? this.getBufferedFrag(o.end + 0.5) : null;
          }, p.immediateLevelSwitch = function() {
            this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
          }, p.nextLevelSwitch = function() {
            var o = this.levels, s = this.media;
            if (s != null && s.readyState) {
              var i, c = this.getAppendedFrag(s.currentTime);
              if (c && c.start > 1 && this.flushMainBuffer(0, c.start - 1), !s.paused && o) {
                var l = this.hls.nextLoadLevel, k = o[l], I = this.fragLastKbps;
                I && this.fragCurrent ? i = this.fragCurrent.duration * k.maxBitrate / (1e3 * I) + 1 : i = 0;
              } else
                i = 0;
              var C = this.getBufferedFrag(s.currentTime + i);
              if (C) {
                var P = this.followingBufferedFrag(C);
                if (P) {
                  this.abortCurrentFrag();
                  var N = P.maxStartPTS ? P.maxStartPTS : P.start, B = P.duration, F = Math.max(C.end, N + Math.min(Math.max(B - this.config.maxFragLookUpTolerance, B * 0.5), B * 0.75));
                  this.flushMainBuffer(F, Number.POSITIVE_INFINITY);
                }
              }
            }
          }, p.abortCurrentFrag = function() {
            var o = this.fragCurrent;
            this.fragCurrent = null, o != null && o.loader && o.loader.abort(), this.state === m.State.KEY_LOADING && (this.state = m.State.IDLE), this.nextLoadPosition = this.getLoadPosition();
          }, p.flushMainBuffer = function(o, s) {
            v.prototype.flushMainBuffer.call(this, o, s, this.altAudio ? "video" : null);
          }, p.onMediaAttached = function(o, s) {
            v.prototype.onMediaAttached.call(this, o, s);
            var i = s.media;
            this.onvplaying = this.onMediaPlaying.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), i.addEventListener("playing", this.onvplaying), i.addEventListener("seeked", this.onvseeked), this.gapController = new E.default(this.config, i, this.fragmentTracker, this.hls);
          }, p.onMediaDetaching = function() {
            var o = this.media;
            o && (o.removeEventListener("playing", this.onvplaying), o.removeEventListener("seeked", this.onvseeked), this.onvplaying = this.onvseeked = null, this.videoBuffer = null), this.fragPlaying = null, this.gapController && (this.gapController.destroy(), this.gapController = null), v.prototype.onMediaDetaching.call(this);
          }, p.onMediaPlaying = function() {
            this.tick();
          }, p.onMediaSeeked = function() {
            var o = this.media, s = o ? o.currentTime : null;
            Object(R.isFiniteNumber)(s) && this.log("Media seeked to " + s.toFixed(3)), this.tick();
          }, p.onManifestLoading = function() {
            this.log("Trigger BUFFER_RESET"), this.hls.trigger(w.Events.BUFFER_RESET, void 0), this.fragmentTracker.removeAllFragments(), this.couldBacktrack = this.stalled = false, this.startPosition = this.lastCurrentTime = 0, this.fragPlaying = null;
          }, p.onManifestParsed = function(o, s) {
            var i = false, c = false, l;
            s.levels.forEach(function(k) {
              l = k.audioCodec, l && (l.indexOf("mp4a.40.2") !== -1 && (i = true), l.indexOf("mp4a.40.5") !== -1 && (c = true));
            }), this.audioCodecSwitch = i && c && !Object(y.changeTypeSupported)(), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = s.levels, this.startFragRequested = false;
          }, p.onLevelLoading = function(o, s) {
            var i = this.levels;
            if (!(!i || this.state !== m.State.IDLE)) {
              var c = i[s.level];
              (!c.details || c.details.live && this.levelLastLoaded !== s.level || this.waitForCdnTuneIn(c.details)) && (this.state = m.State.WAITING_LEVEL);
            }
          }, p.onLevelLoaded = function(o, s) {
            var i, c = this.levels, l = s.level, k = s.details, I = k.totalduration;
            if (!c) {
              this.warn("Levels were reset while loading level " + l);
              return;
            }
            this.log("Level " + l + " loaded [" + k.startSN + "," + k.endSN + "], cc [" + k.startCC + ", " + k.endCC + "] duration:" + I);
            var C = this.fragCurrent;
            C && (this.state === m.State.FRAG_LOADING || this.state === m.State.FRAG_LOADING_WAITING_RETRY) && C.level !== s.level && C.loader && (this.state = m.State.IDLE, C.loader.abort());
            var P = c[l], N = 0;
            if (k.live || (i = P.details) !== null && i !== void 0 && i.live) {
              if (k.fragments[0] || (k.deltaUpdateFailed = true), k.deltaUpdateFailed)
                return;
              N = this.alignPlaylists(k, P.details);
            }
            if (P.details = k, this.levelLastLoaded = l, this.hls.trigger(w.Events.LEVEL_UPDATED, { details: k, level: l }), this.state === m.State.WAITING_LEVEL) {
              if (this.waitForCdnTuneIn(k))
                return;
              this.state = m.State.IDLE;
            }
            this.startFragRequested ? k.live && this.synchronizeToLiveEdge(k) : this.setStartPosition(k, N), this.tick();
          }, p._handleFragmentLoadProgress = function(o) {
            var s, i = o.frag, c = o.part, l = o.payload, k = this.levels;
            if (!k) {
              this.warn("Levels were reset while fragment load was in progress. Fragment " + i.sn + " of level " + i.level + " will not be buffered");
              return;
            }
            var I = k[i.level], C = I.details;
            if (!C) {
              this.warn("Dropping fragment " + i.sn + " of level " + i.level + " after level details were reset");
              return;
            }
            var P = I.videoCodec, N = C.PTSKnown || !C.live, B = (s = i.initSegment) === null || s === void 0 ? void 0 : s.data, F = this._getAudioCodec(I), U = this.transmuxer = this.transmuxer || new g.default(this.hls, b.PlaylistLevelType.MAIN, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)), j = c ? c.index : -1, H = j !== -1, V = new D.ChunkMetadata(i.level, i.sn, i.stats.chunkCount, l.byteLength, j, H), K = this.initPTS[i.cc];
            U.push(l, B, F, P, i, c, C.totalduration, N, V, K);
          }, p.onAudioTrackSwitching = function(o, s) {
            var i = this.altAudio, c = !!s.url, l = s.id;
            if (!c) {
              if (this.mediaBuffer !== this.media) {
                this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
                var k = this.fragCurrent;
                k != null && k.loader && (this.log("Switching to main audio track, cancel main fragment load"), k.loader.abort()), this.resetTransmuxer(), this.resetLoadingState();
              } else
                this.audioOnly && this.resetTransmuxer();
              var I = this.hls;
              i && I.trigger(w.Events.BUFFER_FLUSHING, { startOffset: 0, endOffset: Number.POSITIVE_INFINITY, type: "audio" }), I.trigger(w.Events.AUDIO_TRACK_SWITCHED, { id: l });
            }
          }, p.onAudioTrackSwitched = function(o, s) {
            var i = s.id, c = !!this.hls.audioTracks[i].url;
            if (c) {
              var l = this.videoBuffer;
              l && this.mediaBuffer !== l && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = l);
            }
            this.altAudio = c, this.tick();
          }, p.onBufferCreated = function(o, s) {
            var i = s.tracks, c, l, k = false;
            for (var I in i) {
              var C = i[I];
              if (C.id === "main") {
                if (l = I, c = C, I === "video") {
                  var P = i[I];
                  P && (this.videoBuffer = P.buffer);
                }
              } else
                k = true;
            }
            k && c ? (this.log("Alternate track found, use " + l + ".buffered to schedule main fragment loading"), this.mediaBuffer = c.buffer) : this.mediaBuffer = this.media;
          }, p.onFragBuffered = function(o, s) {
            var i = s.frag, c = s.part;
            if (!(i && i.type !== b.PlaylistLevelType.MAIN)) {
              if (this.fragContextChanged(i)) {
                this.warn("Fragment " + i.sn + (c ? " p: " + c.index : "") + " of level " + i.level + " finished buffering, but was aborted. state: " + this.state), this.state === m.State.PARSED && (this.state = m.State.IDLE);
                return;
              }
              var l = c ? c.stats : i.stats;
              this.fragLastKbps = Math.round(8 * l.total / (l.buffering.end - l.loading.first)), i.sn !== "initSegment" && (this.fragPrevious = i), this.fragBufferedComplete(i, c);
            }
          }, p.onError = function(o, s) {
            switch (s.details) {
              case S.ErrorDetails.FRAG_LOAD_ERROR:
              case S.ErrorDetails.FRAG_LOAD_TIMEOUT:
              case S.ErrorDetails.KEY_LOAD_ERROR:
              case S.ErrorDetails.KEY_LOAD_TIMEOUT:
                this.onFragmentOrKeyLoadError(b.PlaylistLevelType.MAIN, s);
                break;
              case S.ErrorDetails.LEVEL_LOAD_ERROR:
              case S.ErrorDetails.LEVEL_LOAD_TIMEOUT:
                this.state !== m.State.ERROR && (s.fatal ? (this.warn("" + s.details), this.state = m.State.ERROR) : !s.levelRetry && this.state === m.State.WAITING_LEVEL && (this.state = m.State.IDLE));
                break;
              case S.ErrorDetails.BUFFER_FULL_ERROR:
                if (s.parent === "main" && (this.state === m.State.PARSING || this.state === m.State.PARSED)) {
                  var i = true, c = this.getFwdBufferInfo(this.media, b.PlaylistLevelType.MAIN);
                  c && c.len > 0.5 && (i = !this.reduceMaxBufferLength(c.len)), i && (this.warn("buffer full error also media.currentTime is not buffered, flush main"), this.immediateLevelSwitch()), this.resetLoadingState();
                }
                break;
              default:
                break;
            }
          }, p.checkBuffer = function() {
            var o = this.media, s = this.gapController;
            if (!(!o || !s || !o.readyState)) {
              var i = A.BufferHelper.getBuffered(o);
              !this.loadedmetadata && i.length ? (this.loadedmetadata = true, this.seekToStartPos()) : s.poll(this.lastCurrentTime), this.lastCurrentTime = o.currentTime;
            }
          }, p.onFragLoadEmergencyAborted = function() {
            this.state = m.State.IDLE, this.loadedmetadata || (this.startFragRequested = false, this.nextLoadPosition = this.startPosition), this.tickImmediate();
          }, p.onBufferFlushed = function(o, s) {
            var i = s.type;
            if (i !== u.ElementaryStreamTypes.AUDIO || this.audioOnly && !this.altAudio) {
              var c = (i === u.ElementaryStreamTypes.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
              this.afterBufferFlushed(c, i, b.PlaylistLevelType.MAIN);
            }
          }, p.onLevelsUpdated = function(o, s) {
            this.levels = s.levels;
          }, p.swapAudioCodec = function() {
            this.audioCodecSwap = !this.audioCodecSwap;
          }, p.seekToStartPos = function() {
            var o = this.media, s = o.currentTime, i = this.startPosition;
            if (i >= 0 && s < i) {
              if (o.seeking) {
                d.logger.log("could not seek to " + i + ", already seeking at " + s);
                return;
              }
              var c = A.BufferHelper.getBuffered(o), l = c.length ? c.start(0) : 0, k = l - i;
              k > 0 && (k < this.config.maxBufferHole || k < this.config.maxFragLookUpTolerance) && (d.logger.log("adjusting start position by " + k + " to match buffer start"), i += k, this.startPosition = i), this.log("seek to target start position " + i + " from current time " + s), o.currentTime = i;
            }
          }, p._getAudioCodec = function(o) {
            var s = this.config.defaultAudioCodec || o.audioCodec;
            return this.audioCodecSwap && s && (this.log("Swapping audio codec"), s.indexOf("mp4a.40.5") !== -1 ? s = "mp4a.40.2" : s = "mp4a.40.5"), s;
          }, p._loadBitrateTestFrag = function(o) {
            var s = this;
            this._doFragLoad(o).then(function(i) {
              var c = s.hls;
              if (!(!i || c.nextLoadLevel || s.fragContextChanged(o))) {
                s.fragLoadError = 0, s.state = m.State.IDLE, s.startFragRequested = false, s.bitrateTest = false;
                var l = o.stats;
                l.parsing.start = l.parsing.end = l.buffering.start = l.buffering.end = self.performance.now(), c.trigger(w.Events.FRAG_LOADED, i);
              }
            });
          }, p._handleTransmuxComplete = function(o) {
            var s, i = "main", c = this.hls, l = o.remuxResult, k = o.chunkMeta, I = this.getCurrentContext(k);
            if (!I) {
              this.warn("The loading context changed while buffering fragment " + k.sn + " of level " + k.level + ". This chunk will not be buffered."), this.resetLiveStartWhenNotLoaded(k.level);
              return;
            }
            var C = I.frag, P = I.part, N = I.level, B = l.video, F = l.text, U = l.id3, j = l.initSegment, H = this.altAudio ? void 0 : l.audio;
            if (!this.fragContextChanged(C)) {
              if (this.state = m.State.PARSING, j) {
                j.tracks && (this._bufferInitSegment(N, j.tracks, C, k), c.trigger(w.Events.FRAG_PARSING_INIT_SEGMENT, { frag: C, id: i, tracks: j.tracks }));
                var V = j.initPTS, K = j.timescale;
                Object(R.isFiniteNumber)(V) && (this.initPTS[C.cc] = V, c.trigger(w.Events.INIT_PTS_FOUND, { frag: C, id: i, initPTS: V, timescale: K }));
              }
              if (B && l.independent !== false) {
                if (N.details) {
                  var q = B.startPTS, $ = B.endPTS, J = B.startDTS, z = B.endDTS;
                  if (P)
                    P.elementaryStreams[B.type] = { startPTS: q, endPTS: $, startDTS: J, endDTS: z };
                  else if (B.firstKeyFrame && B.independent && (this.couldBacktrack = true), B.dropped && B.independent) {
                    var tt = this.getLoadPosition() + this.config.maxBufferHole;
                    if (tt < q) {
                      this.backtrack(C);
                      return;
                    }
                    C.setElementaryStreamInfo(B.type, C.start, $, C.start, z, true);
                  }
                  C.setElementaryStreamInfo(B.type, q, $, J, z), this.bufferFragmentData(B, C, P, k);
                }
              } else if (l.independent === false) {
                this.backtrack(C);
                return;
              }
              if (H) {
                var et = H.startPTS, at = H.endPTS, pt = H.startDTS, ot = H.endDTS;
                P && (P.elementaryStreams[u.ElementaryStreamTypes.AUDIO] = { startPTS: et, endPTS: at, startDTS: pt, endDTS: ot }), C.setElementaryStreamInfo(u.ElementaryStreamTypes.AUDIO, et, at, pt, ot), this.bufferFragmentData(H, C, P, k);
              }
              if (U != null && (s = U.samples) !== null && s !== void 0 && s.length) {
                var nt = { frag: C, id: i, samples: U.samples };
                c.trigger(w.Events.FRAG_PARSING_METADATA, nt);
              }
              if (F) {
                var X = { frag: C, id: i, samples: F.samples };
                c.trigger(w.Events.FRAG_PARSING_USERDATA, X);
              }
            }
          }, p._bufferInitSegment = function(o, s, i, c) {
            var l = this;
            if (this.state === m.State.PARSING) {
              this.audioOnly = !!s.audio && !s.video, this.altAudio && !this.audioOnly && delete s.audio;
              var k = s.audio, I = s.video, C = s.audiovideo;
              if (k) {
                var P = o.audioCodec, N = navigator.userAgent.toLowerCase();
                this.audioCodecSwitch && (P && (P.indexOf("mp4a.40.5") !== -1 ? P = "mp4a.40.2" : P = "mp4a.40.5"), k.metadata.channelCount !== 1 && N.indexOf("firefox") === -1 && (P = "mp4a.40.5")), N.indexOf("android") !== -1 && k.container !== "audio/mpeg" && (P = "mp4a.40.2", this.log("Android: force audio codec to " + P)), o.audioCodec && o.audioCodec !== P && this.log('Swapping manifest audio codec "' + o.audioCodec + '" for "' + P + '"'), k.levelCodec = P, k.id = "main", this.log("Init audio buffer, container:" + k.container + ", codecs[selected/level/parsed]=[" + (P || "") + "/" + (o.audioCodec || "") + "/" + k.codec + "]");
              }
              I && (I.levelCodec = o.videoCodec, I.id = "main", this.log("Init video buffer, container:" + I.container + ", codecs[level/parsed]=[" + (o.videoCodec || "") + "/" + I.codec + "]")), C && this.log("Init audiovideo buffer, container:" + C.container + ", codecs[level/parsed]=[" + (o.attrs.CODECS || "") + "/" + C.codec + "]"), this.hls.trigger(w.Events.BUFFER_CODECS, s), Object.keys(s).forEach(function(B) {
                var F = s[B], U = F.initSegment;
                U != null && U.byteLength && l.hls.trigger(w.Events.BUFFER_APPENDING, { type: B, data: U, frag: i, part: null, chunkMeta: c, parent: i.type });
              }), this.tick();
            }
          }, p.backtrack = function(o) {
            this.couldBacktrack = true, this.resetTransmuxer(), this.flushBufferGap(o);
            var s = this.fragmentTracker.backtrack(o);
            this.fragPrevious = null, this.nextLoadPosition = o.start, s ? this.resetFragmentLoading(o) : this.state = m.State.BACKTRACKING;
          }, p.checkFragmentChanged = function() {
            var o = this.media, s = null;
            if (o && o.readyState > 1 && o.seeking === false) {
              var i = o.currentTime;
              if (A.BufferHelper.isBuffered(o, i) ? s = this.getAppendedFrag(i) : A.BufferHelper.isBuffered(o, i + 0.1) && (s = this.getAppendedFrag(i + 0.1)), s) {
                var c = this.fragPlaying, l = s.level;
                (!c || s.sn !== c.sn || c.level !== l || s.urlId !== c.urlId) && (this.hls.trigger(w.Events.FRAG_CHANGED, { frag: s }), (!c || c.level !== l) && this.hls.trigger(w.Events.LEVEL_SWITCHED, { level: l }), this.fragPlaying = s);
              }
            }
          }, r(_, [{ key: "nextLevel", get: function() {
            var o = this.nextBufferedFrag;
            return o ? o.level : -1;
          } }, { key: "currentLevel", get: function() {
            var o = this.media;
            if (o) {
              var s = this.getAppendedFrag(o.currentTime);
              if (s)
                return s.level;
            }
            return -1;
          } }, { key: "nextBufferedFrag", get: function() {
            var o = this.media;
            if (o) {
              var s = this.getAppendedFrag(o.currentTime);
              return this.followingBufferedFrag(s);
            } else
              return null;
          } }, { key: "forceStartLoad", get: function() {
            return this._forceStartLoad;
          } }]), _;
        }(m.default);
      }, "./src/controller/subtitle-stream-controller.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "SubtitleStreamController", function() {
          return n;
        });
        var R = e("./src/events.ts"), m = e("./src/utils/logger.ts"), y = e("./src/utils/buffer-helper.ts"), w = e("./src/controller/fragment-finders.ts"), A = e("./src/utils/discontinuities.ts"), L = e("./src/controller/level-helper.ts"), b = e("./src/controller/fragment-tracker.ts"), u = e("./src/controller/base-stream-controller.ts"), g = e("./src/types/loader.ts"), D = e("./src/types/level.ts");
        function E(h, a) {
          for (var f = 0; f < a.length; f++) {
            var v = a[f];
            v.enumerable = v.enumerable || false, v.configurable = true, "value" in v && (v.writable = true), Object.defineProperty(h, v.key, v);
          }
        }
        function S(h, a, f) {
          return a && E(h.prototype, a), f && E(h, f), h;
        }
        function d(h, a) {
          h.prototype = Object.create(a.prototype), h.prototype.constructor = h, t(h, a);
        }
        function t(h, a) {
          return t = Object.setPrototypeOf || function(f, v) {
            return f.__proto__ = v, f;
          }, t(h, a);
        }
        var r = 500, n = function(h) {
          d(a, h);
          function a(v, _) {
            var p;
            return p = h.call(this, v, _, "[subtitle-stream-controller]") || this, p.levels = [], p.currentTrackId = -1, p.tracksBuffered = [], p.mainDetails = null, p._registerListeners(), p;
          }
          var f = a.prototype;
          return f.onHandlerDestroying = function() {
            this._unregisterListeners(), this.mainDetails = null;
          }, f._registerListeners = function() {
            var v = this.hls;
            v.on(R.Events.MEDIA_ATTACHED, this.onMediaAttached, this), v.on(R.Events.MEDIA_DETACHING, this.onMediaDetaching, this), v.on(R.Events.MANIFEST_LOADING, this.onManifestLoading, this), v.on(R.Events.LEVEL_LOADED, this.onLevelLoaded, this), v.on(R.Events.ERROR, this.onError, this), v.on(R.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), v.on(R.Events.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), v.on(R.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), v.on(R.Events.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), v.on(R.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
          }, f._unregisterListeners = function() {
            var v = this.hls;
            v.off(R.Events.MEDIA_ATTACHED, this.onMediaAttached, this), v.off(R.Events.MEDIA_DETACHING, this.onMediaDetaching, this), v.off(R.Events.MANIFEST_LOADING, this.onManifestLoading, this), v.off(R.Events.LEVEL_LOADED, this.onLevelLoaded, this), v.off(R.Events.ERROR, this.onError, this), v.off(R.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), v.off(R.Events.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), v.off(R.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), v.off(R.Events.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), v.off(R.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
          }, f.startLoad = function() {
            this.stopLoad(), this.state = u.State.IDLE, this.setInterval(r), this.tick();
          }, f.onManifestLoading = function() {
            this.mainDetails = null, this.fragmentTracker.removeAllFragments();
          }, f.onLevelLoaded = function(v, _) {
            this.mainDetails = _.details;
          }, f.onSubtitleFragProcessed = function(v, _) {
            var p = _.frag, o = _.success;
            if (this.fragPrevious = p, this.state = u.State.IDLE, !!o) {
              var s = this.tracksBuffered[this.currentTrackId];
              if (s) {
                for (var i, c = p.start, l = 0; l < s.length; l++)
                  if (c >= s[l].start && c <= s[l].end) {
                    i = s[l];
                    break;
                  }
                var k = p.start + p.duration;
                i ? i.end = k : (i = { start: c, end: k }, s.push(i)), this.fragmentTracker.fragBuffered(p);
              }
            }
          }, f.onBufferFlushing = function(v, _) {
            var p = _.startOffset, o = _.endOffset;
            if (p === 0 && o !== Number.POSITIVE_INFINITY) {
              var s = this.currentTrackId, i = this.levels;
              if (!i.length || !i[s] || !i[s].details)
                return;
              var c = i[s].details, l = c.targetduration, k = o - l;
              if (k <= 0)
                return;
              _.endOffsetSubtitles = Math.max(0, k), this.tracksBuffered.forEach(function(I) {
                for (var C = 0; C < I.length; ) {
                  if (I[C].end <= k) {
                    I.shift();
                    continue;
                  } else if (I[C].start < k)
                    I[C].start = k;
                  else
                    break;
                  C++;
                }
              }), this.fragmentTracker.removeFragmentsInRange(p, k, g.PlaylistLevelType.SUBTITLE);
            }
          }, f.onError = function(v, _) {
            var p, o = _.frag;
            !o || o.type !== g.PlaylistLevelType.SUBTITLE || ((p = this.fragCurrent) !== null && p !== void 0 && p.loader && this.fragCurrent.loader.abort(), this.state = u.State.IDLE);
          }, f.onSubtitleTracksUpdated = function(v, _) {
            var p = this, o = _.subtitleTracks;
            this.tracksBuffered = [], this.levels = o.map(function(s) {
              return new D.Level(s);
            }), this.fragmentTracker.removeAllFragments(), this.fragPrevious = null, this.levels.forEach(function(s) {
              p.tracksBuffered[s.id] = [];
            }), this.mediaBuffer = null;
          }, f.onSubtitleTrackSwitch = function(v, _) {
            if (this.currentTrackId = _.id, !this.levels.length || this.currentTrackId === -1) {
              this.clearInterval();
              return;
            }
            var p = this.levels[this.currentTrackId];
            p != null && p.details ? (this.mediaBuffer = this.mediaBufferTimeRanges, this.setInterval(r)) : this.mediaBuffer = null;
          }, f.onSubtitleTrackLoaded = function(v, _) {
            var p, o = _.details, s = _.id, i = this.currentTrackId, c = this.levels;
            if (c.length) {
              var l = c[i];
              if (!(s >= c.length || s !== i || !l)) {
                if (this.mediaBuffer = this.mediaBufferTimeRanges, o.live || (p = l.details) !== null && p !== void 0 && p.live) {
                  var k = this.mainDetails;
                  if (o.deltaUpdateFailed || !k)
                    return;
                  var I = k.fragments[0];
                  if (!l.details)
                    o.hasProgramDateTime && k.hasProgramDateTime ? Object(A.alignMediaPlaylistByPDT)(o, k) : I && Object(L.addSliding)(o, I.start);
                  else {
                    var C = this.alignPlaylists(o, l.details);
                    C === 0 && I && Object(L.addSliding)(o, I.start);
                  }
                }
                if (l.details = o, this.levelLastLoaded = s, this.tick(), o.live && !this.fragCurrent && this.media && this.state === u.State.IDLE) {
                  var P = Object(w.findFragmentByPTS)(null, o.fragments, this.media.currentTime, 0);
                  P || (this.warn("Subtitle playlist not aligned with playback"), l.details = void 0);
                }
              }
            }
          }, f._handleFragmentLoadComplete = function(v) {
            var _ = v.frag, p = v.payload, o = _.decryptdata, s = this.hls;
            if (!this.fragContextChanged(_) && p && p.byteLength > 0 && o && o.key && o.iv && o.method === "AES-128") {
              var i = performance.now();
              this.decrypter.webCryptoDecrypt(new Uint8Array(p), o.key.buffer, o.iv.buffer).then(function(c) {
                var l = performance.now();
                s.trigger(R.Events.FRAG_DECRYPTED, { frag: _, payload: c, stats: { tstart: i, tdecrypt: l } });
              });
            }
          }, f.doTick = function() {
            if (!this.media) {
              this.state = u.State.IDLE;
              return;
            }
            if (this.state === u.State.IDLE) {
              var v, _ = this.currentTrackId, p = this.levels;
              if (!p.length || !p[_] || !p[_].details)
                return;
              var o = p[_].details, s = o.targetduration, i = this.config, c = this.media, l = y.BufferHelper.bufferedInfo(this.mediaBufferTimeRanges, c.currentTime - s, i.maxBufferHole), k = l.end, I = l.len, C = this.getMaxBufferLength() + s;
              if (I > C)
                return;
              console.assert(o, "Subtitle track details are defined on idle subtitle stream controller tick");
              var P = o.fragments, N = P.length, B = o.edge, F, U = this.fragPrevious;
              if (k < B) {
                var j = i.maxFragLookUpTolerance;
                U && o.hasProgramDateTime && (F = Object(w.findFragmentByPDT)(P, U.endProgramDateTime, j)), F || (F = Object(w.findFragmentByPTS)(U, P, k, j), !F && U && U.start < P[0].start && (F = P[0]));
              } else
                F = P[N - 1];
              (v = F) !== null && v !== void 0 && v.encrypted ? (m.logger.log("Loading key for " + F.sn), this.state = u.State.KEY_LOADING, this.hls.trigger(R.Events.KEY_LOADING, { frag: F })) : F && this.fragmentTracker.getState(F) === b.FragmentState.NOT_LOADED && this.loadFragment(F, o, k);
            }
          }, f.loadFragment = function(v, _, p) {
            this.fragCurrent = v, h.prototype.loadFragment.call(this, v, _, p);
          }, S(a, [{ key: "mediaBufferTimeRanges", get: function() {
            return this.tracksBuffered[this.currentTrackId] || [];
          } }]), a;
        }(u.default);
      }, "./src/controller/subtitle-track-controller.ts": function(x, T, e) {
        "use strict";
        e.r(T);
        var R = e("./src/events.ts"), m = e("./src/utils/texttrack-utils.ts"), y = e("./src/controller/base-playlist-controller.ts"), w = e("./src/types/loader.ts");
        function A(E, S) {
          for (var d = 0; d < S.length; d++) {
            var t = S[d];
            t.enumerable = t.enumerable || false, t.configurable = true, "value" in t && (t.writable = true), Object.defineProperty(E, t.key, t);
          }
        }
        function L(E, S, d) {
          return S && A(E.prototype, S), d && A(E, d), E;
        }
        function b(E, S) {
          E.prototype = Object.create(S.prototype), E.prototype.constructor = E, u(E, S);
        }
        function u(E, S) {
          return u = Object.setPrototypeOf || function(d, t) {
            return d.__proto__ = t, d;
          }, u(E, S);
        }
        var g = function(E) {
          b(S, E);
          function S(t) {
            var r;
            return r = E.call(this, t, "[subtitle-track-controller]") || this, r.media = null, r.tracks = [], r.groupId = null, r.tracksInGroup = [], r.trackId = -1, r.selectDefaultTrack = true, r.queuedDefaultTrack = -1, r.trackChangeListener = function() {
              return r.onTextTracksChanged();
            }, r.asyncPollTrackChange = function() {
              return r.pollTrackChange(0);
            }, r.useTextTrackPolling = false, r.subtitlePollingInterval = -1, r.subtitleDisplay = true, r.registerListeners(), r;
          }
          var d = S.prototype;
          return d.destroy = function() {
            this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.trackChangeListener = this.asyncPollTrackChange = null, E.prototype.destroy.call(this);
          }, d.registerListeners = function() {
            var t = this.hls;
            t.on(R.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.on(R.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.on(R.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.on(R.Events.MANIFEST_PARSED, this.onManifestParsed, this), t.on(R.Events.LEVEL_LOADING, this.onLevelLoading, this), t.on(R.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), t.on(R.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.on(R.Events.ERROR, this.onError, this);
          }, d.unregisterListeners = function() {
            var t = this.hls;
            t.off(R.Events.MEDIA_ATTACHED, this.onMediaAttached, this), t.off(R.Events.MEDIA_DETACHING, this.onMediaDetaching, this), t.off(R.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.off(R.Events.MANIFEST_PARSED, this.onManifestParsed, this), t.off(R.Events.LEVEL_LOADING, this.onLevelLoading, this), t.off(R.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), t.off(R.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), t.off(R.Events.ERROR, this.onError, this);
          }, d.onMediaAttached = function(t, r) {
            this.media = r.media, !!this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange));
          }, d.pollTrackChange = function(t) {
            self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.trackChangeListener, t);
          }, d.onMediaDetaching = function() {
            if (this.media) {
              self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || this.media.textTracks.removeEventListener("change", this.asyncPollTrackChange), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId);
              var t = D(this.media.textTracks);
              t.forEach(function(r) {
                Object(m.clearCurrentCues)(r);
              }), this.subtitleTrack = -1, this.media = null;
            }
          }, d.onManifestLoading = function() {
            this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.selectDefaultTrack = true;
          }, d.onManifestParsed = function(t, r) {
            this.tracks = r.subtitleTracks;
          }, d.onSubtitleTrackLoaded = function(t, r) {
            var n = r.id, h = r.details, a = this.trackId, f = this.tracksInGroup[a];
            if (!f) {
              this.warn("Invalid subtitle track id " + n);
              return;
            }
            var v = f.details;
            f.details = r.details, this.log("subtitle track " + n + " loaded [" + h.startSN + "-" + h.endSN + "]"), n === this.trackId && (this.retryCount = 0, this.playlistLoaded(n, r, v));
          }, d.onLevelLoading = function(t, r) {
            this.switchLevel(r.level);
          }, d.onLevelSwitching = function(t, r) {
            this.switchLevel(r.level);
          }, d.switchLevel = function(t) {
            var r = this.hls.levels[t];
            if (r != null && r.textGroupIds) {
              var n = r.textGroupIds[r.urlId];
              if (this.groupId !== n) {
                var h = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0, a = this.tracks.filter(function(_) {
                  return !n || _.groupId === n;
                });
                this.tracksInGroup = a;
                var f = this.findTrackId(h == null ? void 0 : h.name) || this.findTrackId();
                this.groupId = n;
                var v = { subtitleTracks: a };
                this.log("Updating subtitle tracks, " + a.length + ' track(s) found in "' + n + '" group-id'), this.hls.trigger(R.Events.SUBTITLE_TRACKS_UPDATED, v), f !== -1 && this.setSubtitleTrack(f, h);
              }
            }
          }, d.findTrackId = function(t) {
            for (var r = this.tracksInGroup, n = 0; n < r.length; n++) {
              var h = r[n];
              if ((!this.selectDefaultTrack || h.default) && (!t || t === h.name))
                return h.id;
            }
            return -1;
          }, d.onError = function(t, r) {
            E.prototype.onError.call(this, t, r), !(r.fatal || !r.context) && r.context.type === w.PlaylistContextType.SUBTITLE_TRACK && r.context.id === this.trackId && r.context.groupId === this.groupId && this.retryLoadingOrFail(r);
          }, d.loadPlaylist = function(t) {
            var r = this.tracksInGroup[this.trackId];
            if (this.shouldLoadTrack(r)) {
              var n = r.id, h = r.groupId, a = r.url;
              if (t)
                try {
                  a = t.addDirectives(a);
                } catch (f) {
                  this.warn("Could not construct new URL with HLS Delivery Directives: " + f);
                }
              this.log("Loading subtitle playlist for id " + n), this.hls.trigger(R.Events.SUBTITLE_TRACK_LOADING, { url: a, id: n, groupId: h, deliveryDirectives: t || null });
            }
          }, d.toggleTrackModes = function(t) {
            var r = this, n = this.media, h = this.subtitleDisplay, a = this.trackId;
            if (n) {
              var f = D(n.textTracks), v = f.filter(function(o) {
                return o.groupId === r.groupId;
              });
              if (t === -1)
                [].slice.call(f).forEach(function(o) {
                  o.mode = "disabled";
                });
              else {
                var _ = v[a];
                _ && (_.mode = "disabled");
              }
              var p = v[t];
              p && (p.mode = h ? "showing" : "hidden");
            }
          }, d.setSubtitleTrack = function(t, r) {
            var n, h = this.tracksInGroup;
            if (!this.media) {
              this.queuedDefaultTrack = t;
              return;
            }
            if (this.trackId !== t && this.toggleTrackModes(t), !(this.trackId === t && (t === -1 || (n = h[t]) !== null && n !== void 0 && n.details) || t < -1 || t >= h.length)) {
              this.clearTimer();
              var a = h[t];
              if (this.log("Switching to subtitle track " + t), this.trackId = t, a) {
                var f = a.id, v = a.groupId, _ = v === void 0 ? "" : v, p = a.name, o = a.type, s = a.url;
                this.hls.trigger(R.Events.SUBTITLE_TRACK_SWITCH, { id: f, groupId: _, name: p, type: o, url: s });
                var i = this.switchParams(a.url, r == null ? void 0 : r.details);
                this.loadPlaylist(i);
              } else
                this.hls.trigger(R.Events.SUBTITLE_TRACK_SWITCH, { id: t });
            }
          }, d.onTextTracksChanged = function() {
            if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval), !(!this.media || !this.hls.config.renderTextTracksNatively)) {
              for (var t = -1, r = D(this.media.textTracks), n = 0; n < r.length; n++)
                if (r[n].mode === "hidden")
                  t = n;
                else if (r[n].mode === "showing") {
                  t = n;
                  break;
                }
              this.subtitleTrack !== t && (this.subtitleTrack = t);
            }
          }, L(S, [{ key: "subtitleTracks", get: function() {
            return this.tracksInGroup;
          } }, { key: "subtitleTrack", get: function() {
            return this.trackId;
          }, set: function(t) {
            this.selectDefaultTrack = false;
            var r = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
            this.setSubtitleTrack(t, r);
          } }]), S;
        }(y.default);
        function D(E) {
          for (var S = [], d = 0; d < E.length; d++) {
            var t = E[d];
            t.kind === "subtitles" && t.label && S.push(E[d]);
          }
          return S;
        }
        T.default = g;
      }, "./src/controller/timeline-controller.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "TimelineController", function() {
          return D;
        });
        var R = e("./src/polyfills/number.ts"), m = e("./src/events.ts"), y = e("./src/utils/cea-608-parser.ts"), w = e("./src/utils/output-filter.ts"), A = e("./src/utils/webvtt-parser.ts"), L = e("./src/utils/texttrack-utils.ts"), b = e("./src/utils/imsc1-ttml-parser.ts"), u = e("./src/types/loader.ts"), g = e("./src/utils/logger.ts"), D = function() {
          function t(n) {
            if (this.hls = void 0, this.media = null, this.config = void 0, this.enabled = true, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.timescale = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastSn = -1, this.prevCC = -1, this.vttCCs = d(), this.captionsProperties = void 0, this.hls = n, this.config = n.config, this.Cues = n.config.cueHandler, this.captionsProperties = { textTrack1: { label: this.config.captionsTextTrack1Label, languageCode: this.config.captionsTextTrack1LanguageCode }, textTrack2: { label: this.config.captionsTextTrack2Label, languageCode: this.config.captionsTextTrack2LanguageCode }, textTrack3: { label: this.config.captionsTextTrack3Label, languageCode: this.config.captionsTextTrack3LanguageCode }, textTrack4: { label: this.config.captionsTextTrack4Label, languageCode: this.config.captionsTextTrack4LanguageCode } }, this.config.enableCEA708Captions) {
              var h = new w.default(this, "textTrack1"), a = new w.default(this, "textTrack2"), f = new w.default(this, "textTrack3"), v = new w.default(this, "textTrack4");
              this.cea608Parser1 = new y.default(1, h, a), this.cea608Parser2 = new y.default(3, f, v);
            }
            n.on(m.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), n.on(m.Events.MEDIA_DETACHING, this.onMediaDetaching, this), n.on(m.Events.MANIFEST_LOADING, this.onManifestLoading, this), n.on(m.Events.MANIFEST_LOADED, this.onManifestLoaded, this), n.on(m.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), n.on(m.Events.FRAG_LOADING, this.onFragLoading, this), n.on(m.Events.FRAG_LOADED, this.onFragLoaded, this), n.on(m.Events.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), n.on(m.Events.FRAG_DECRYPTED, this.onFragDecrypted, this), n.on(m.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), n.on(m.Events.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), n.on(m.Events.BUFFER_FLUSHING, this.onBufferFlushing, this);
          }
          var r = t.prototype;
          return r.destroy = function() {
            var n = this.hls;
            n.off(m.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), n.off(m.Events.MEDIA_DETACHING, this.onMediaDetaching, this), n.off(m.Events.MANIFEST_LOADING, this.onManifestLoading, this), n.off(m.Events.MANIFEST_LOADED, this.onManifestLoaded, this), n.off(m.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), n.off(m.Events.FRAG_LOADING, this.onFragLoading, this), n.off(m.Events.FRAG_LOADED, this.onFragLoaded, this), n.off(m.Events.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), n.off(m.Events.FRAG_DECRYPTED, this.onFragDecrypted, this), n.off(m.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), n.off(m.Events.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), n.off(m.Events.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls = this.config = this.cea608Parser1 = this.cea608Parser2 = null;
          }, r.addCues = function(n, h, a, f, v) {
            for (var _ = false, p = v.length; p--; ) {
              var o = v[p], s = S(o[0], o[1], h, a);
              if (s >= 0 && (o[0] = Math.min(o[0], h), o[1] = Math.max(o[1], a), _ = true, s / (a - h) > 0.5))
                return;
            }
            if (_ || v.push([h, a]), this.config.renderTextTracksNatively) {
              var i = this.captionsTracks[n];
              this.Cues.newCue(i, h, a, f);
            } else {
              var c = this.Cues.newCue(null, h, a, f);
              this.hls.trigger(m.Events.CUES_PARSED, { type: "captions", cues: c, track: n });
            }
          }, r.onInitPtsFound = function(n, h) {
            var a = this, f = h.frag, v = h.id, _ = h.initPTS, p = h.timescale, o = this.unparsedVttFrags;
            v === "main" && (this.initPTS[f.cc] = _, this.timescale[f.cc] = p), o.length && (this.unparsedVttFrags = [], o.forEach(function(s) {
              a.onFragLoaded(m.Events.FRAG_LOADED, s);
            }));
          }, r.getExistingTrack = function(n) {
            var h = this.media;
            if (h)
              for (var a = 0; a < h.textTracks.length; a++) {
                var f = h.textTracks[a];
                if (f[n])
                  return f;
              }
            return null;
          }, r.createCaptionsTrack = function(n) {
            this.config.renderTextTracksNatively ? this.createNativeTrack(n) : this.createNonNativeTrack(n);
          }, r.createNativeTrack = function(n) {
            if (!this.captionsTracks[n]) {
              var h = this.captionsProperties, a = this.captionsTracks, f = this.media, v = h[n], _ = v.label, p = v.languageCode, o = this.getExistingTrack(n);
              if (o)
                a[n] = o, Object(L.clearCurrentCues)(a[n]), Object(L.sendAddTrackEvent)(a[n], f);
              else {
                var s = this.createTextTrack("captions", _, p);
                s && (s[n] = true, a[n] = s);
              }
            }
          }, r.createNonNativeTrack = function(n) {
            if (!this.nonNativeCaptionsTracks[n]) {
              var h = this.captionsProperties[n];
              if (h) {
                var a = h.label, f = { _id: n, label: a, kind: "captions", default: h.media ? !!h.media.default : false, closedCaptions: h.media };
                this.nonNativeCaptionsTracks[n] = f, this.hls.trigger(m.Events.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: [f] });
              }
            }
          }, r.createTextTrack = function(n, h, a) {
            var f = this.media;
            if (f)
              return f.addTextTrack(n, h, a);
          }, r.onMediaAttaching = function(n, h) {
            this.media = h.media, this._cleanTracks();
          }, r.onMediaDetaching = function() {
            var n = this.captionsTracks;
            Object.keys(n).forEach(function(h) {
              Object(L.clearCurrentCues)(n[h]), delete n[h];
            }), this.nonNativeCaptionsTracks = {};
          }, r.onManifestLoading = function() {
            this.lastSn = -1, this.prevCC = -1, this.vttCCs = d(), this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = [], this.timescale = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset());
          }, r._cleanTracks = function() {
            var n = this.media;
            if (n) {
              var h = n.textTracks;
              if (h)
                for (var a = 0; a < h.length; a++)
                  Object(L.clearCurrentCues)(h[a]);
            }
          }, r.onSubtitleTracksUpdated = function(n, h) {
            var a = this;
            this.textTracks = [];
            var f = h.subtitleTracks || [], v = f.some(function(s) {
              return s.textCodec === b.IMSC1_CODEC;
            });
            if (this.config.enableWebVTT || v && this.config.enableIMSC1) {
              var _ = this.tracks && f && this.tracks.length === f.length;
              if (this.tracks = f || [], this.config.renderTextTracksNatively) {
                var p = this.media ? this.media.textTracks : [];
                this.tracks.forEach(function(s, i) {
                  var c;
                  if (i < p.length) {
                    for (var l = null, k = 0; k < p.length; k++)
                      if (E(p[k], s)) {
                        l = p[k];
                        break;
                      }
                    l && (c = l);
                  }
                  c ? Object(L.clearCurrentCues)(c) : (c = a.createTextTrack("subtitles", s.name, s.lang), c && (c.mode = "disabled")), c && (c.groupId = s.groupId, a.textTracks.push(c));
                });
              } else if (!_ && this.tracks && this.tracks.length) {
                var o = this.tracks.map(function(s) {
                  return { label: s.name, kind: s.type.toLowerCase(), default: s.default, subtitleTrack: s };
                });
                this.hls.trigger(m.Events.NON_NATIVE_TEXT_TRACKS_FOUND, { tracks: o });
              }
            }
          }, r.onManifestLoaded = function(n, h) {
            var a = this;
            this.config.enableCEA708Captions && h.captions && h.captions.forEach(function(f) {
              var v = /(?:CC|SERVICE)([1-4])/.exec(f.instreamId);
              if (v) {
                var _ = "textTrack" + v[1], p = a.captionsProperties[_];
                !p || (p.label = f.name, f.lang && (p.languageCode = f.lang), p.media = f);
              }
            });
          }, r.onFragLoading = function(n, h) {
            var a = this.cea608Parser1, f = this.cea608Parser2, v = this.lastSn;
            if (!(!this.enabled || !(a && f)) && h.frag.type === u.PlaylistLevelType.MAIN) {
              var _ = h.frag.sn;
              _ !== v + 1 && (a.reset(), f.reset()), this.lastSn = _;
            }
          }, r.onFragLoaded = function(n, h) {
            var a = h.frag, f = h.payload, v = this.initPTS, _ = this.unparsedVttFrags;
            if (a.type === u.PlaylistLevelType.SUBTITLE)
              if (f.byteLength) {
                if (!Object(R.isFiniteNumber)(v[a.cc])) {
                  _.push(h), v.length && this.hls.trigger(m.Events.SUBTITLE_FRAG_PROCESSED, { success: false, frag: a, error: new Error("Missing initial subtitle PTS") });
                  return;
                }
                var p = a.decryptdata;
                if (p == null || p.key == null || p.method !== "AES-128") {
                  var o = this.tracks[a.level], s = this.vttCCs;
                  s[a.cc] || (s[a.cc] = { start: a.start, prevCC: this.prevCC, new: true }, this.prevCC = a.cc), o && o.textCodec === b.IMSC1_CODEC ? this._parseIMSC1(a, f) : this._parseVTTs(a, f, s);
                }
              } else
                this.hls.trigger(m.Events.SUBTITLE_FRAG_PROCESSED, { success: false, frag: a, error: new Error("Empty subtitle payload") });
          }, r._parseIMSC1 = function(n, h) {
            var a = this, f = this.hls;
            Object(b.parseIMSC1)(h, this.initPTS[n.cc], this.timescale[n.cc], function(v) {
              a._appendCues(v, n.level), f.trigger(m.Events.SUBTITLE_FRAG_PROCESSED, { success: true, frag: n });
            }, function(v) {
              g.logger.log("Failed to parse IMSC1: " + v), f.trigger(m.Events.SUBTITLE_FRAG_PROCESSED, { success: false, frag: n, error: v });
            });
          }, r._parseVTTs = function(n, h, a) {
            var f = this, v = this.hls;
            Object(A.parseWebVTT)(h, this.initPTS[n.cc], this.timescale[n.cc], a, n.cc, n.start, function(_) {
              f._appendCues(_, n.level), v.trigger(m.Events.SUBTITLE_FRAG_PROCESSED, { success: true, frag: n });
            }, function(_) {
              f._fallbackToIMSC1(n, h), g.logger.log("Failed to parse VTT cue: " + _), v.trigger(m.Events.SUBTITLE_FRAG_PROCESSED, { success: false, frag: n, error: _ });
            });
          }, r._fallbackToIMSC1 = function(n, h) {
            var a = this, f = this.tracks[n.level];
            f.textCodec || Object(b.parseIMSC1)(h, this.initPTS[n.cc], this.timescale[n.cc], function() {
              f.textCodec = b.IMSC1_CODEC, a._parseIMSC1(n, h);
            }, function() {
              f.textCodec = "wvtt";
            });
          }, r._appendCues = function(n, h) {
            var a = this.hls;
            if (this.config.renderTextTracksNatively) {
              var f = this.textTracks[h];
              if (f.mode === "disabled")
                return;
              n.forEach(function(p) {
                return Object(L.addCueToTrack)(f, p);
              });
            } else {
              var v = this.tracks[h], _ = v.default ? "default" : "subtitles" + h;
              a.trigger(m.Events.CUES_PARSED, { type: "subtitles", cues: n, track: _ });
            }
          }, r.onFragDecrypted = function(n, h) {
            var a = h.frag;
            if (a.type === u.PlaylistLevelType.SUBTITLE) {
              if (!Object(R.isFiniteNumber)(this.initPTS[a.cc])) {
                this.unparsedVttFrags.push(h);
                return;
              }
              this.onFragLoaded(m.Events.FRAG_LOADED, h);
            }
          }, r.onSubtitleTracksCleared = function() {
            this.tracks = [], this.captionsTracks = {};
          }, r.onFragParsingUserdata = function(n, h) {
            var a = this.cea608Parser1, f = this.cea608Parser2;
            if (!(!this.enabled || !(a && f)))
              for (var v = 0; v < h.samples.length; v++) {
                var _ = h.samples[v].bytes;
                if (_) {
                  var p = this.extractCea608Data(_);
                  a.addData(h.samples[v].pts, p[0]), f.addData(h.samples[v].pts, p[1]);
                }
              }
          }, r.onBufferFlushing = function(n, h) {
            var a = h.startOffset, f = h.endOffset, v = h.endOffsetSubtitles, _ = h.type, p = this.media;
            if (!(!p || p.currentTime < f)) {
              if (!_ || _ === "video") {
                var o = this.captionsTracks;
                Object.keys(o).forEach(function(i) {
                  return Object(L.removeCuesInRange)(o[i], a, f);
                });
              }
              if (this.config.renderTextTracksNatively && a === 0 && v !== void 0) {
                var s = this.textTracks;
                Object.keys(s).forEach(function(i) {
                  return Object(L.removeCuesInRange)(s[i], a, v);
                });
              }
            }
          }, r.extractCea608Data = function(n) {
            for (var h = n[0] & 31, a = 2, f = [[], []], v = 0; v < h; v++) {
              var _ = n[a++], p = 127 & n[a++], o = 127 & n[a++], s = (4 & _) != 0, i = 3 & _;
              p === 0 && o === 0 || s && (i === 0 || i === 1) && (f[i].push(p), f[i].push(o));
            }
            return f;
          }, t;
        }();
        function E(t, r) {
          return t && t.label === r.name && !(t.textTrack1 || t.textTrack2);
        }
        function S(t, r, n, h) {
          return Math.min(r, h) - Math.max(t, n);
        }
        function d() {
          return { ccOffset: 0, presentationOffset: 0, 0: { start: 0, prevCC: -1, new: false } };
        }
      }, "./src/crypt/aes-crypto.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "default", function() {
          return R;
        });
        var R = function() {
          function m(w, A) {
            this.subtle = void 0, this.aesIV = void 0, this.subtle = w, this.aesIV = A;
          }
          var y = m.prototype;
          return y.decrypt = function(w, A) {
            return this.subtle.decrypt({ name: "AES-CBC", iv: this.aesIV }, A, w);
          }, m;
        }();
      }, "./src/crypt/aes-decryptor.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "removePadding", function() {
          return m;
        }), e.d(T, "default", function() {
          return y;
        });
        var R = e("./src/utils/typed-array.ts");
        function m(w) {
          var A = w.byteLength, L = A && new DataView(w.buffer).getUint8(A - 1);
          return L ? Object(R.sliceUint8)(w, 0, A - L) : w;
        }
        var y = function() {
          function w() {
            this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable();
          }
          var A = w.prototype;
          return A.uint8ArrayToUint32Array_ = function(L) {
            for (var b = new DataView(L), u = new Uint32Array(4), g = 0; g < 4; g++)
              u[g] = b.getUint32(g * 4);
            return u;
          }, A.initTable = function() {
            var L = this.sBox, b = this.invSBox, u = this.subMix, g = u[0], D = u[1], E = u[2], S = u[3], d = this.invSubMix, t = d[0], r = d[1], n = d[2], h = d[3], a = new Uint32Array(256), f = 0, v = 0, _ = 0;
            for (_ = 0; _ < 256; _++)
              _ < 128 ? a[_] = _ << 1 : a[_] = _ << 1 ^ 283;
            for (_ = 0; _ < 256; _++) {
              var p = v ^ v << 1 ^ v << 2 ^ v << 3 ^ v << 4;
              p = p >>> 8 ^ p & 255 ^ 99, L[f] = p, b[p] = f;
              var o = a[f], s = a[o], i = a[s], c = a[p] * 257 ^ p * 16843008;
              g[f] = c << 24 | c >>> 8, D[f] = c << 16 | c >>> 16, E[f] = c << 8 | c >>> 24, S[f] = c, c = i * 16843009 ^ s * 65537 ^ o * 257 ^ f * 16843008, t[p] = c << 24 | c >>> 8, r[p] = c << 16 | c >>> 16, n[p] = c << 8 | c >>> 24, h[p] = c, f ? (f = o ^ a[a[a[i ^ o]]], v ^= a[a[v]]) : f = v = 1;
            }
          }, A.expandKey = function(L) {
            for (var b = this.uint8ArrayToUint32Array_(L), u = true, g = 0; g < b.length && u; )
              u = b[g] === this.key[g], g++;
            if (!u) {
              this.key = b;
              var D = this.keySize = b.length;
              if (D !== 4 && D !== 6 && D !== 8)
                throw new Error("Invalid aes key size=" + D);
              var E = this.ksRows = (D + 6 + 1) * 4, S, d, t = this.keySchedule = new Uint32Array(E), r = this.invKeySchedule = new Uint32Array(E), n = this.sBox, h = this.rcon, a = this.invSubMix, f = a[0], v = a[1], _ = a[2], p = a[3], o, s;
              for (S = 0; S < E; S++) {
                if (S < D) {
                  o = t[S] = b[S];
                  continue;
                }
                s = o, S % D == 0 ? (s = s << 8 | s >>> 24, s = n[s >>> 24] << 24 | n[s >>> 16 & 255] << 16 | n[s >>> 8 & 255] << 8 | n[s & 255], s ^= h[S / D | 0] << 24) : D > 6 && S % D == 4 && (s = n[s >>> 24] << 24 | n[s >>> 16 & 255] << 16 | n[s >>> 8 & 255] << 8 | n[s & 255]), t[S] = o = (t[S - D] ^ s) >>> 0;
              }
              for (d = 0; d < E; d++)
                S = E - d, d & 3 ? s = t[S] : s = t[S - 4], d < 4 || S <= 4 ? r[d] = s : r[d] = f[n[s >>> 24]] ^ v[n[s >>> 16 & 255]] ^ _[n[s >>> 8 & 255]] ^ p[n[s & 255]], r[d] = r[d] >>> 0;
            }
          }, A.networkToHostOrderSwap = function(L) {
            return L << 24 | (L & 65280) << 8 | (L & 16711680) >> 8 | L >>> 24;
          }, A.decrypt = function(L, b, u) {
            for (var g = this.keySize + 6, D = this.invKeySchedule, E = this.invSBox, S = this.invSubMix, d = S[0], t = S[1], r = S[2], n = S[3], h = this.uint8ArrayToUint32Array_(u), a = h[0], f = h[1], v = h[2], _ = h[3], p = new Int32Array(L), o = new Int32Array(p.length), s, i, c, l, k, I, C, P, N, B, F, U, j, H, V = this.networkToHostOrderSwap; b < p.length; ) {
              for (N = V(p[b]), B = V(p[b + 1]), F = V(p[b + 2]), U = V(p[b + 3]), k = N ^ D[0], I = U ^ D[1], C = F ^ D[2], P = B ^ D[3], j = 4, H = 1; H < g; H++)
                s = d[k >>> 24] ^ t[I >> 16 & 255] ^ r[C >> 8 & 255] ^ n[P & 255] ^ D[j], i = d[I >>> 24] ^ t[C >> 16 & 255] ^ r[P >> 8 & 255] ^ n[k & 255] ^ D[j + 1], c = d[C >>> 24] ^ t[P >> 16 & 255] ^ r[k >> 8 & 255] ^ n[I & 255] ^ D[j + 2], l = d[P >>> 24] ^ t[k >> 16 & 255] ^ r[I >> 8 & 255] ^ n[C & 255] ^ D[j + 3], k = s, I = i, C = c, P = l, j = j + 4;
              s = E[k >>> 24] << 24 ^ E[I >> 16 & 255] << 16 ^ E[C >> 8 & 255] << 8 ^ E[P & 255] ^ D[j], i = E[I >>> 24] << 24 ^ E[C >> 16 & 255] << 16 ^ E[P >> 8 & 255] << 8 ^ E[k & 255] ^ D[j + 1], c = E[C >>> 24] << 24 ^ E[P >> 16 & 255] << 16 ^ E[k >> 8 & 255] << 8 ^ E[I & 255] ^ D[j + 2], l = E[P >>> 24] << 24 ^ E[k >> 16 & 255] << 16 ^ E[I >> 8 & 255] << 8 ^ E[C & 255] ^ D[j + 3], o[b] = V(s ^ a), o[b + 1] = V(l ^ f), o[b + 2] = V(c ^ v), o[b + 3] = V(i ^ _), a = N, f = B, v = F, _ = U, b = b + 4;
            }
            return o.buffer;
          }, w;
        }();
      }, "./src/crypt/decrypter.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "default", function() {
          return u;
        });
        var R = e("./src/crypt/aes-crypto.ts"), m = e("./src/crypt/fast-aes-key.ts"), y = e("./src/crypt/aes-decryptor.ts"), w = e("./src/utils/logger.ts"), A = e("./src/utils/mp4-tools.ts"), L = e("./src/utils/typed-array.ts"), b = 16, u = function() {
          function g(E, S, d) {
            var t = d === void 0 ? {} : d, r = t.removePKCS7Padding, n = r === void 0 ? true : r;
            if (this.logEnabled = true, this.observer = void 0, this.config = void 0, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.observer = E, this.config = S, this.removePKCS7Padding = n, n)
              try {
                var h = self.crypto;
                h && (this.subtle = h.subtle || h.webkitSubtle);
              } catch {
              }
            this.subtle === null && (this.config.enableSoftwareAES = true);
          }
          var D = g.prototype;
          return D.destroy = function() {
            this.observer = null;
          }, D.isSync = function() {
            return this.config.enableSoftwareAES;
          }, D.flush = function() {
            var E = this.currentResult;
            if (!E) {
              this.reset();
              return;
            }
            var S = new Uint8Array(E);
            return this.reset(), this.removePKCS7Padding ? Object(y.removePadding)(S) : S;
          }, D.reset = function() {
            this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null);
          }, D.decrypt = function(E, S, d, t) {
            if (this.config.enableSoftwareAES) {
              this.softwareDecrypt(new Uint8Array(E), S, d);
              var r = this.flush();
              r && t(r.buffer);
            } else
              this.webCryptoDecrypt(new Uint8Array(E), S, d).then(t);
          }, D.softwareDecrypt = function(E, S, d) {
            var t = this.currentIV, r = this.currentResult, n = this.remainderData;
            this.logOnce("JS AES decrypt"), n && (E = Object(A.appendUint8Array)(n, E), this.remainderData = null);
            var h = this.getValidChunk(E);
            if (!h.length)
              return null;
            t && (d = t);
            var a = this.softwareDecrypter;
            a || (a = this.softwareDecrypter = new y.default()), a.expandKey(S);
            var f = r;
            return this.currentResult = a.decrypt(h.buffer, 0, d), this.currentIV = Object(L.sliceUint8)(h, -16).buffer, f || null;
          }, D.webCryptoDecrypt = function(E, S, d) {
            var t = this, r = this.subtle;
            return (this.key !== S || !this.fastAesKey) && (this.key = S, this.fastAesKey = new m.default(r, S)), this.fastAesKey.expandKey().then(function(n) {
              if (!r)
                return Promise.reject(new Error("web crypto not initialized"));
              var h = new R.default(r, d);
              return h.decrypt(E.buffer, n);
            }).catch(function(n) {
              return t.onWebCryptoError(n, E, S, d);
            });
          }, D.onWebCryptoError = function(E, S, d, t) {
            return w.logger.warn("[decrypter.ts]: WebCrypto Error, disable WebCrypto API:", E), this.config.enableSoftwareAES = true, this.logEnabled = true, this.softwareDecrypt(S, d, t);
          }, D.getValidChunk = function(E) {
            var S = E, d = E.length - E.length % b;
            return d !== E.length && (S = Object(L.sliceUint8)(E, 0, d), this.remainderData = Object(L.sliceUint8)(E, d)), S;
          }, D.logOnce = function(E) {
            !this.logEnabled || (w.logger.log("[decrypter.ts]: " + E), this.logEnabled = false);
          }, g;
        }();
      }, "./src/crypt/fast-aes-key.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "default", function() {
          return R;
        });
        var R = function() {
          function m(w, A) {
            this.subtle = void 0, this.key = void 0, this.subtle = w, this.key = A;
          }
          var y = m.prototype;
          return y.expandKey = function() {
            return this.subtle.importKey("raw", this.key, { name: "AES-CBC" }, false, ["encrypt", "decrypt"]);
          }, m;
        }();
      }, "./src/demux/aacdemuxer.ts": function(x, T, e) {
        "use strict";
        e.r(T);
        var R = e("./src/demux/base-audio-demuxer.ts"), m = e("./src/demux/adts.ts"), y = e("./src/utils/logger.ts"), w = e("./src/demux/id3.ts");
        function A(u, g) {
          u.prototype = Object.create(g.prototype), u.prototype.constructor = u, L(u, g);
        }
        function L(u, g) {
          return L = Object.setPrototypeOf || function(D, E) {
            return D.__proto__ = E, D;
          }, L(u, g);
        }
        var b = function(u) {
          A(g, u);
          function g(E, S) {
            var d;
            return d = u.call(this) || this, d.observer = void 0, d.config = void 0, d.observer = E, d.config = S, d;
          }
          var D = g.prototype;
          return D.resetInitSegment = function(E, S, d) {
            u.prototype.resetInitSegment.call(this, E, S, d), this._audioTrack = { container: "audio/adts", type: "audio", id: 0, pid: -1, sequenceNumber: 0, isAAC: true, samples: [], manifestCodec: E, duration: d, inputTimeScale: 9e4, dropped: 0 };
          }, g.probe = function(E) {
            if (!E)
              return false;
            for (var S = w.getID3Data(E, 0) || [], d = S.length, t = E.length; d < t; d++)
              if (m.probe(E, d))
                return y.logger.log("ADTS sync word found !"), true;
            return false;
          }, D.canParse = function(E, S) {
            return m.canParse(E, S);
          }, D.appendFrame = function(E, S, d) {
            m.initTrackConfig(E, this.observer, S, d, E.manifestCodec);
            var t = m.appendFrame(E, S, d, this.initPTS, this.frameIndex);
            if (t && t.missing === 0)
              return t;
          }, g;
        }(R.default);
        b.minProbeByteLength = 9, T.default = b;
      }, "./src/demux/adts.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "getAudioConfig", function() {
          return w;
        }), e.d(T, "isHeaderPattern", function() {
          return A;
        }), e.d(T, "getHeaderLength", function() {
          return L;
        }), e.d(T, "getFullFrameLength", function() {
          return b;
        }), e.d(T, "canGetFrameLength", function() {
          return u;
        }), e.d(T, "isHeader", function() {
          return g;
        }), e.d(T, "canParse", function() {
          return D;
        }), e.d(T, "probe", function() {
          return E;
        }), e.d(T, "initTrackConfig", function() {
          return S;
        }), e.d(T, "getFrameDuration", function() {
          return d;
        }), e.d(T, "parseFrameHeader", function() {
          return t;
        }), e.d(T, "appendFrame", function() {
          return r;
        });
        var R = e("./src/utils/logger.ts"), m = e("./src/errors.ts"), y = e("./src/events.ts");
        function w(n, h, a, f) {
          var v, _, p, o, s = navigator.userAgent.toLowerCase(), i = f, c = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
          v = ((h[a + 2] & 192) >>> 6) + 1;
          var l = (h[a + 2] & 60) >>> 2;
          if (l > c.length - 1) {
            n.trigger(y.Events.ERROR, { type: m.ErrorTypes.MEDIA_ERROR, details: m.ErrorDetails.FRAG_PARSING_ERROR, fatal: true, reason: "invalid ADTS sampling index:" + l });
            return;
          }
          return p = (h[a + 2] & 1) << 2, p |= (h[a + 3] & 192) >>> 6, R.logger.log("manifest codec:" + f + ", ADTS type:" + v + ", samplingIndex:" + l), /firefox/i.test(s) ? l >= 6 ? (v = 5, o = new Array(4), _ = l - 3) : (v = 2, o = new Array(2), _ = l) : s.indexOf("android") !== -1 ? (v = 2, o = new Array(2), _ = l) : (v = 5, o = new Array(4), f && (f.indexOf("mp4a.40.29") !== -1 || f.indexOf("mp4a.40.5") !== -1) || !f && l >= 6 ? _ = l - 3 : ((f && f.indexOf("mp4a.40.2") !== -1 && (l >= 6 && p === 1 || /vivaldi/i.test(s)) || !f && p === 1) && (v = 2, o = new Array(2)), _ = l)), o[0] = v << 3, o[0] |= (l & 14) >> 1, o[1] |= (l & 1) << 7, o[1] |= p << 3, v === 5 && (o[1] |= (_ & 14) >> 1, o[2] = (_ & 1) << 7, o[2] |= 2 << 2, o[3] = 0), { config: o, samplerate: c[l], channelCount: p, codec: "mp4a.40." + v, manifestCodec: i };
        }
        function A(n, h) {
          return n[h] === 255 && (n[h + 1] & 246) == 240;
        }
        function L(n, h) {
          return n[h + 1] & 1 ? 7 : 9;
        }
        function b(n, h) {
          return (n[h + 3] & 3) << 11 | n[h + 4] << 3 | (n[h + 5] & 224) >>> 5;
        }
        function u(n, h) {
          return h + 5 < n.length;
        }
        function g(n, h) {
          return h + 1 < n.length && A(n, h);
        }
        function D(n, h) {
          return u(n, h) && A(n, h) && b(n, h) <= n.length - h;
        }
        function E(n, h) {
          if (g(n, h)) {
            var a = L(n, h);
            if (h + a >= n.length)
              return false;
            var f = b(n, h);
            if (f <= a)
              return false;
            var v = h + f;
            return v === n.length || g(n, v);
          }
          return false;
        }
        function S(n, h, a, f, v) {
          if (!n.samplerate) {
            var _ = w(h, a, f, v);
            if (!_)
              return;
            n.config = _.config, n.samplerate = _.samplerate, n.channelCount = _.channelCount, n.codec = _.codec, n.manifestCodec = _.manifestCodec, R.logger.log("parsed codec:" + n.codec + ", rate:" + _.samplerate + ", channels:" + _.channelCount);
          }
        }
        function d(n) {
          return 1024 * 9e4 / n;
        }
        function t(n, h, a, f, v) {
          var _ = L(n, h), p = b(n, h);
          if (p -= _, p > 0) {
            var o = a + f * v;
            return { headerLength: _, frameLength: p, stamp: o };
          }
        }
        function r(n, h, a, f, v) {
          var _ = d(n.samplerate), p = t(h, a, f, v, _);
          if (p) {
            var o = p.frameLength, s = p.headerLength, i = p.stamp, c = s + o, l = Math.max(0, a + c - h.length), k;
            l ? (k = new Uint8Array(c - s), k.set(h.subarray(a + s, h.length), 0)) : k = h.subarray(a + s, a + c);
            var I = { unit: k, pts: i };
            return l || n.samples.push(I), { sample: I, length: c, missing: l };
          }
        }
      }, "./src/demux/base-audio-demuxer.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "initPTSFn", function() {
          return b;
        });
        var R = e("./src/polyfills/number.ts"), m = e("./src/demux/id3.ts"), y = e("./src/demux/dummy-demuxed-track.ts"), w = e("./src/utils/mp4-tools.ts"), A = e("./src/utils/typed-array.ts"), L = function() {
          function u() {
            this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, this.cachedData = null, this.initPTS = null;
          }
          var g = u.prototype;
          return g.resetInitSegment = function(D, E, S) {
            this._id3Track = { type: "id3", id: 0, pid: -1, inputTimeScale: 9e4, sequenceNumber: 0, samples: [], dropped: 0 };
          }, g.resetTimeStamp = function() {
          }, g.resetContiguity = function() {
          }, g.canParse = function(D, E) {
            return false;
          }, g.appendFrame = function(D, E, S) {
          }, g.demux = function(D, E) {
            this.cachedData && (D = Object(w.appendUint8Array)(this.cachedData, D), this.cachedData = null);
            var S = m.getID3Data(D, 0), d = S ? S.length : 0, t, r, n = this._audioTrack, h = this._id3Track, a = S ? m.getTimeStamp(S) : void 0, f = D.length;
            for ((this.frameIndex === 0 || this.initPTS === null) && (this.initPTS = b(a, E)), S && S.length > 0 && h.samples.push({ pts: this.initPTS, dts: this.initPTS, data: S }), r = this.initPTS; d < f; ) {
              if (this.canParse(D, d)) {
                var v = this.appendFrame(n, D, d);
                v ? (this.frameIndex++, r = v.sample.pts, d += v.length, t = d) : d = f;
              } else
                m.canParse(D, d) ? (S = m.getID3Data(D, d), h.samples.push({ pts: r, dts: r, data: S }), d += S.length, t = d) : d++;
              if (d === f && t !== f) {
                var _ = Object(A.sliceUint8)(D, t);
                this.cachedData ? this.cachedData = Object(w.appendUint8Array)(this.cachedData, _) : this.cachedData = _;
              }
            }
            return { audioTrack: n, avcTrack: Object(y.dummyTrack)(), id3Track: h, textTrack: Object(y.dummyTrack)() };
          }, g.demuxSampleAes = function(D, E, S) {
            return Promise.reject(new Error("[" + this + "] This demuxer does not support Sample-AES decryption"));
          }, g.flush = function(D) {
            var E = this.cachedData;
            return E && (this.cachedData = null, this.demux(E, 0)), this.frameIndex = 0, { audioTrack: this._audioTrack, avcTrack: Object(y.dummyTrack)(), id3Track: this._id3Track, textTrack: Object(y.dummyTrack)() };
          }, g.destroy = function() {
          }, u;
        }(), b = function(u, g) {
          return Object(R.isFiniteNumber)(u) ? u * 90 : g * 9e4;
        };
        T.default = L;
      }, "./src/demux/chunk-cache.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "default", function() {
          return R;
        });
        var R = function() {
          function y() {
            this.chunks = [], this.dataLength = 0;
          }
          var w = y.prototype;
          return w.push = function(A) {
            this.chunks.push(A), this.dataLength += A.length;
          }, w.flush = function() {
            var A = this.chunks, L = this.dataLength, b;
            if (A.length)
              A.length === 1 ? b = A[0] : b = m(A, L);
            else
              return new Uint8Array(0);
            return this.reset(), b;
          }, w.reset = function() {
            this.chunks.length = 0, this.dataLength = 0;
          }, y;
        }();
        function m(y, w) {
          for (var A = new Uint8Array(w), L = 0, b = 0; b < y.length; b++) {
            var u = y[b];
            A.set(u, L), L += u.length;
          }
          return A;
        }
      }, "./src/demux/dummy-demuxed-track.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "dummyTrack", function() {
          return R;
        });
        function R() {
          return { type: "", id: -1, pid: -1, inputTimeScale: 9e4, sequenceNumber: -1, samples: [], dropped: 0 };
        }
      }, "./src/demux/exp-golomb.ts": function(x, T, e) {
        "use strict";
        e.r(T);
        var R = e("./src/utils/logger.ts"), m = function() {
          function y(A) {
            this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, this.bitsAvailable = void 0, this.data = A, this.bytesAvailable = A.byteLength, this.word = 0, this.bitsAvailable = 0;
          }
          var w = y.prototype;
          return w.loadWord = function() {
            var A = this.data, L = this.bytesAvailable, b = A.byteLength - L, u = new Uint8Array(4), g = Math.min(4, L);
            if (g === 0)
              throw new Error("no bytes available");
            u.set(A.subarray(b, b + g)), this.word = new DataView(u.buffer).getUint32(0), this.bitsAvailable = g * 8, this.bytesAvailable -= g;
          }, w.skipBits = function(A) {
            var L;
            this.bitsAvailable > A ? (this.word <<= A, this.bitsAvailable -= A) : (A -= this.bitsAvailable, L = A >> 3, A -= L >> 3, this.bytesAvailable -= L, this.loadWord(), this.word <<= A, this.bitsAvailable -= A);
          }, w.readBits = function(A) {
            var L = Math.min(this.bitsAvailable, A), b = this.word >>> 32 - L;
            return A > 32 && R.logger.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= L, this.bitsAvailable > 0 ? this.word <<= L : this.bytesAvailable > 0 && this.loadWord(), L = A - L, L > 0 && this.bitsAvailable ? b << L | this.readBits(L) : b;
          }, w.skipLZ = function() {
            var A;
            for (A = 0; A < this.bitsAvailable; ++A)
              if ((this.word & 2147483648 >>> A) != 0)
                return this.word <<= A, this.bitsAvailable -= A, A;
            return this.loadWord(), A + this.skipLZ();
          }, w.skipUEG = function() {
            this.skipBits(1 + this.skipLZ());
          }, w.skipEG = function() {
            this.skipBits(1 + this.skipLZ());
          }, w.readUEG = function() {
            var A = this.skipLZ();
            return this.readBits(A + 1) - 1;
          }, w.readEG = function() {
            var A = this.readUEG();
            return 1 & A ? 1 + A >>> 1 : -1 * (A >>> 1);
          }, w.readBoolean = function() {
            return this.readBits(1) === 1;
          }, w.readUByte = function() {
            return this.readBits(8);
          }, w.readUShort = function() {
            return this.readBits(16);
          }, w.readUInt = function() {
            return this.readBits(32);
          }, w.skipScalingList = function(A) {
            for (var L = 8, b = 8, u, g = 0; g < A; g++)
              b !== 0 && (u = this.readEG(), b = (L + u + 256) % 256), L = b === 0 ? L : b;
          }, w.readSPS = function() {
            var A = 0, L = 0, b = 0, u = 0, g, D, E, S = this.readUByte.bind(this), d = this.readBits.bind(this), t = this.readUEG.bind(this), r = this.readBoolean.bind(this), n = this.skipBits.bind(this), h = this.skipEG.bind(this), a = this.skipUEG.bind(this), f = this.skipScalingList.bind(this);
            S();
            var v = S();
            if (d(5), n(3), S(), a(), v === 100 || v === 110 || v === 122 || v === 244 || v === 44 || v === 83 || v === 86 || v === 118 || v === 128) {
              var _ = t();
              if (_ === 3 && n(1), a(), a(), n(1), r())
                for (D = _ !== 3 ? 8 : 12, E = 0; E < D; E++)
                  r() && (E < 6 ? f(16) : f(64));
            }
            a();
            var p = t();
            if (p === 0)
              t();
            else if (p === 1)
              for (n(1), h(), h(), g = t(), E = 0; E < g; E++)
                h();
            a(), n(1);
            var o = t(), s = t(), i = d(1);
            i === 0 && n(1), n(1), r() && (A = t(), L = t(), b = t(), u = t());
            var c = [1, 1];
            if (r() && r()) {
              var l = S();
              switch (l) {
                case 1:
                  c = [1, 1];
                  break;
                case 2:
                  c = [12, 11];
                  break;
                case 3:
                  c = [10, 11];
                  break;
                case 4:
                  c = [16, 11];
                  break;
                case 5:
                  c = [40, 33];
                  break;
                case 6:
                  c = [24, 11];
                  break;
                case 7:
                  c = [20, 11];
                  break;
                case 8:
                  c = [32, 11];
                  break;
                case 9:
                  c = [80, 33];
                  break;
                case 10:
                  c = [18, 11];
                  break;
                case 11:
                  c = [15, 11];
                  break;
                case 12:
                  c = [64, 33];
                  break;
                case 13:
                  c = [160, 99];
                  break;
                case 14:
                  c = [4, 3];
                  break;
                case 15:
                  c = [3, 2];
                  break;
                case 16:
                  c = [2, 1];
                  break;
                case 255: {
                  c = [S() << 8 | S(), S() << 8 | S()];
                  break;
                }
              }
            }
            return { width: Math.ceil((o + 1) * 16 - A * 2 - L * 2), height: (2 - i) * (s + 1) * 16 - (i ? 2 : 4) * (b + u), pixelRatio: c };
          }, w.readSliceType = function() {
            return this.readUByte(), this.readUEG(), this.readUEG();
          }, y;
        }();
        T.default = m;
      }, "./src/demux/id3.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "isHeader", function() {
          return R;
        }), e.d(T, "isFooter", function() {
          return m;
        }), e.d(T, "getID3Data", function() {
          return y;
        }), e.d(T, "canParse", function() {
          return A;
        }), e.d(T, "getTimeStamp", function() {
          return L;
        }), e.d(T, "isTimeStampFrame", function() {
          return b;
        }), e.d(T, "getID3Frames", function() {
          return g;
        }), e.d(T, "decodeFrame", function() {
          return D;
        }), e.d(T, "utf8ArrayToStr", function() {
          return r;
        }), e.d(T, "testables", function() {
          return n;
        });
        var R = function(f, v) {
          return v + 10 <= f.length && f[v] === 73 && f[v + 1] === 68 && f[v + 2] === 51 && f[v + 3] < 255 && f[v + 4] < 255 && f[v + 6] < 128 && f[v + 7] < 128 && f[v + 8] < 128 && f[v + 9] < 128;
        }, m = function(f, v) {
          return v + 10 <= f.length && f[v] === 51 && f[v + 1] === 68 && f[v + 2] === 73 && f[v + 3] < 255 && f[v + 4] < 255 && f[v + 6] < 128 && f[v + 7] < 128 && f[v + 8] < 128 && f[v + 9] < 128;
        }, y = function(f, v) {
          for (var _ = v, p = 0; R(f, v); ) {
            p += 10;
            var o = w(f, v + 6);
            p += o, m(f, v + 10) && (p += 10), v += p;
          }
          if (p > 0)
            return f.subarray(_, _ + p);
        }, w = function(f, v) {
          var _ = 0;
          return _ = (f[v] & 127) << 21, _ |= (f[v + 1] & 127) << 14, _ |= (f[v + 2] & 127) << 7, _ |= f[v + 3] & 127, _;
        }, A = function(f, v) {
          return R(f, v) && w(f, v + 6) + 10 <= f.length - v;
        }, L = function(f) {
          for (var v = g(f), _ = 0; _ < v.length; _++) {
            var p = v[_];
            if (b(p))
              return t(p);
          }
        }, b = function(f) {
          return f && f.key === "PRIV" && f.info === "com.apple.streaming.transportStreamTimestamp";
        }, u = function(f) {
          var v = String.fromCharCode(f[0], f[1], f[2], f[3]), _ = w(f, 4), p = 10;
          return { type: v, size: _, data: f.subarray(p, p + _) };
        }, g = function(f) {
          for (var v = 0, _ = []; R(f, v); ) {
            var p = w(f, v + 6);
            v += 10;
            for (var o = v + p; v + 8 < o; ) {
              var s = u(f.subarray(v)), i = D(s);
              i && _.push(i), v += s.size + 10;
            }
            m(f, v) && (v += 10);
          }
          return _;
        }, D = function(f) {
          return f.type === "PRIV" ? E(f) : f.type[0] === "W" ? d(f) : S(f);
        }, E = function(f) {
          if (!(f.size < 2)) {
            var v = r(f.data, true), _ = new Uint8Array(f.data.subarray(v.length + 1));
            return { key: f.type, info: v, data: _.buffer };
          }
        }, S = function(f) {
          if (!(f.size < 2)) {
            if (f.type === "TXXX") {
              var v = 1, _ = r(f.data.subarray(v), true);
              v += _.length + 1;
              var p = r(f.data.subarray(v));
              return { key: f.type, info: _, data: p };
            }
            var o = r(f.data.subarray(1));
            return { key: f.type, data: o };
          }
        }, d = function(f) {
          if (f.type === "WXXX") {
            if (f.size < 2)
              return;
            var v = 1, _ = r(f.data.subarray(v), true);
            v += _.length + 1;
            var p = r(f.data.subarray(v));
            return { key: f.type, info: _, data: p };
          }
          var o = r(f.data);
          return { key: f.type, data: o };
        }, t = function(f) {
          if (f.data.byteLength === 8) {
            var v = new Uint8Array(f.data), _ = v[3] & 1, p = (v[4] << 23) + (v[5] << 15) + (v[6] << 7) + v[7];
            return p /= 45, _ && (p += 4772185884e-2), Math.round(p);
          }
        }, r = function(f, v) {
          v === void 0 && (v = false);
          var _ = a();
          if (_) {
            var p = _.decode(f);
            if (v) {
              var o = p.indexOf("\0");
              return o !== -1 ? p.substring(0, o) : p;
            }
            return p.replace(/\0/g, "");
          }
          for (var s = f.length, i, c, l, k = "", I = 0; I < s; ) {
            if (i = f[I++], i === 0 && v)
              return k;
            if (!(i === 0 || i === 3))
              switch (i >> 4) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                  k += String.fromCharCode(i);
                  break;
                case 12:
                case 13:
                  c = f[I++], k += String.fromCharCode((i & 31) << 6 | c & 63);
                  break;
                case 14:
                  c = f[I++], l = f[I++], k += String.fromCharCode((i & 15) << 12 | (c & 63) << 6 | (l & 63) << 0);
                  break;
                default:
              }
          }
          return k;
        }, n = { decodeTextFrame: S }, h;
        function a() {
          return !h && typeof self.TextDecoder != "undefined" && (h = new self.TextDecoder("utf-8")), h;
        }
      }, "./src/demux/mp3demuxer.ts": function(x, T, e) {
        "use strict";
        e.r(T);
        var R = e("./src/demux/base-audio-demuxer.ts"), m = e("./src/demux/id3.ts"), y = e("./src/utils/logger.ts"), w = e("./src/demux/mpegaudio.ts");
        function A(u, g) {
          u.prototype = Object.create(g.prototype), u.prototype.constructor = u, L(u, g);
        }
        function L(u, g) {
          return L = Object.setPrototypeOf || function(D, E) {
            return D.__proto__ = E, D;
          }, L(u, g);
        }
        var b = function(u) {
          A(g, u);
          function g() {
            return u.apply(this, arguments) || this;
          }
          var D = g.prototype;
          return D.resetInitSegment = function(E, S, d) {
            u.prototype.resetInitSegment.call(this, E, S, d), this._audioTrack = { container: "audio/mpeg", type: "audio", id: 0, pid: -1, sequenceNumber: 0, isAAC: false, samples: [], manifestCodec: E, duration: d, inputTimeScale: 9e4, dropped: 0 };
          }, g.probe = function(E) {
            if (!E)
              return false;
            for (var S = m.getID3Data(E, 0) || [], d = S.length, t = E.length; d < t; d++)
              if (w.probe(E, d))
                return y.logger.log("MPEG Audio sync word found !"), true;
            return false;
          }, D.canParse = function(E, S) {
            return w.canParse(E, S);
          }, D.appendFrame = function(E, S, d) {
            if (this.initPTS !== null)
              return w.appendFrame(E, S, d, this.initPTS, this.frameIndex);
          }, g;
        }(R.default);
        b.minProbeByteLength = 4, T.default = b;
      }, "./src/demux/mp4demuxer.ts": function(x, T, e) {
        "use strict";
        e.r(T);
        var R = e("./src/utils/mp4-tools.ts"), m = e("./src/demux/dummy-demuxed-track.ts"), y = function() {
          function w(L, b) {
            this.remainderData = null, this.config = void 0, this.config = b;
          }
          var A = w.prototype;
          return A.resetTimeStamp = function() {
          }, A.resetInitSegment = function() {
          }, A.resetContiguity = function() {
          }, w.probe = function(L) {
            return Object(R.findBox)({ data: L, start: 0, end: Math.min(L.length, 16384) }, ["moof"]).length > 0;
          }, A.demux = function(L) {
            var b = L, u = Object(m.dummyTrack)();
            if (this.config.progressive) {
              this.remainderData && (b = Object(R.appendUint8Array)(this.remainderData, L));
              var g = Object(R.segmentValidRange)(b);
              this.remainderData = g.remainder, u.samples = g.valid || new Uint8Array();
            } else
              u.samples = b;
            return { audioTrack: Object(m.dummyTrack)(), avcTrack: u, id3Track: Object(m.dummyTrack)(), textTrack: Object(m.dummyTrack)() };
          }, A.flush = function() {
            var L = Object(m.dummyTrack)();
            return L.samples = this.remainderData || new Uint8Array(), this.remainderData = null, { audioTrack: Object(m.dummyTrack)(), avcTrack: L, id3Track: Object(m.dummyTrack)(), textTrack: Object(m.dummyTrack)() };
          }, A.demuxSampleAes = function(L, b, u) {
            return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"));
          }, A.destroy = function() {
          }, w;
        }();
        y.minProbeByteLength = 1024, T.default = y;
      }, "./src/demux/mpegaudio.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "appendFrame", function() {
          return L;
        }), e.d(T, "parseHeader", function() {
          return b;
        }), e.d(T, "isHeaderPattern", function() {
          return u;
        }), e.d(T, "isHeader", function() {
          return g;
        }), e.d(T, "canParse", function() {
          return D;
        }), e.d(T, "probe", function() {
          return E;
        });
        var R = null, m = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160], y = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3], w = [[0, 72, 144, 12], [0, 0, 0, 0], [0, 72, 144, 12], [0, 144, 144, 12]], A = [0, 1, 1, 4];
        function L(S, d, t, r, n) {
          if (!(t + 24 > d.length)) {
            var h = b(d, t);
            if (h && t + h.frameLength <= d.length) {
              var a = h.samplesPerFrame * 9e4 / h.sampleRate, f = r + n * a, v = { unit: d.subarray(t, t + h.frameLength), pts: f, dts: f };
              return S.config = [], S.channelCount = h.channelCount, S.samplerate = h.sampleRate, S.samples.push(v), { sample: v, length: h.frameLength, missing: 0 };
            }
          }
        }
        function b(S, d) {
          var t = S[d + 1] >> 3 & 3, r = S[d + 1] >> 1 & 3, n = S[d + 2] >> 4 & 15, h = S[d + 2] >> 2 & 3;
          if (t !== 1 && n !== 0 && n !== 15 && h !== 3) {
            var a = S[d + 2] >> 1 & 1, f = S[d + 3] >> 6, v = t === 3 ? 3 - r : r === 3 ? 3 : 4, _ = m[v * 14 + n - 1] * 1e3, p = t === 3 ? 0 : t === 2 ? 1 : 2, o = y[p * 3 + h], s = f === 3 ? 1 : 2, i = w[t][r], c = A[r], l = i * 8 * c, k = Math.floor(i * _ / o + a) * c;
            if (R === null) {
              var I = navigator.userAgent || "", C = I.match(/Chrome\/(\d+)/i);
              R = C ? parseInt(C[1]) : 0;
            }
            var P = !!R && R <= 87;
            return P && r === 2 && _ >= 224e3 && f === 0 && (S[d + 3] = S[d + 3] | 128), { sampleRate: o, channelCount: s, frameLength: k, samplesPerFrame: l };
          }
        }
        function u(S, d) {
          return S[d] === 255 && (S[d + 1] & 224) == 224 && (S[d + 1] & 6) != 0;
        }
        function g(S, d) {
          return d + 1 < S.length && u(S, d);
        }
        function D(S, d) {
          var t = 4;
          return u(S, d) && t <= S.length - d;
        }
        function E(S, d) {
          if (d + 1 < S.length && u(S, d)) {
            var t = 4, r = b(S, d), n = t;
            r != null && r.frameLength && (n = r.frameLength);
            var h = d + n;
            return h === S.length || g(S, h);
          }
          return false;
        }
      }, "./src/demux/sample-aes.ts": function(x, T, e) {
        "use strict";
        e.r(T);
        var R = e("./src/crypt/decrypter.ts"), m = e("./src/demux/tsdemuxer.ts"), y = function() {
          function w(L, b, u) {
            this.keyData = void 0, this.decrypter = void 0, this.keyData = u, this.decrypter = new R.default(L, b, { removePKCS7Padding: false });
          }
          var A = w.prototype;
          return A.decryptBuffer = function(L, b) {
            this.decrypter.decrypt(L, this.keyData.key.buffer, this.keyData.iv.buffer, b);
          }, A.decryptAacSample = function(L, b, u, g) {
            var D = L[b].unit, E = D.subarray(16, D.length - D.length % 16), S = E.buffer.slice(E.byteOffset, E.byteOffset + E.length), d = this;
            this.decryptBuffer(S, function(t) {
              var r = new Uint8Array(t);
              D.set(r, 16), g || d.decryptAacSamples(L, b + 1, u);
            });
          }, A.decryptAacSamples = function(L, b, u) {
            for (; ; b++) {
              if (b >= L.length) {
                u();
                return;
              }
              if (!(L[b].unit.length < 32)) {
                var g = this.decrypter.isSync();
                if (this.decryptAacSample(L, b, u, g), !g)
                  return;
              }
            }
          }, A.getAvcEncryptedData = function(L) {
            for (var b = Math.floor((L.length - 48) / 160) * 16 + 16, u = new Int8Array(b), g = 0, D = 32; D <= L.length - 16; D += 160, g += 16)
              u.set(L.subarray(D, D + 16), g);
            return u;
          }, A.getAvcDecryptedUnit = function(L, b) {
            for (var u = new Uint8Array(b), g = 0, D = 32; D <= L.length - 16; D += 160, g += 16)
              L.set(u.subarray(g, g + 16), D);
            return L;
          }, A.decryptAvcSample = function(L, b, u, g, D, E) {
            var S = Object(m.discardEPB)(D.data), d = this.getAvcEncryptedData(S), t = this;
            this.decryptBuffer(d.buffer, function(r) {
              D.data = t.getAvcDecryptedUnit(S, r), E || t.decryptAvcSamples(L, b, u + 1, g);
            });
          }, A.decryptAvcSamples = function(L, b, u, g) {
            if (L instanceof Uint8Array)
              throw new Error("Cannot decrypt samples of type Uint8Array");
            for (; ; b++, u = 0) {
              if (b >= L.length) {
                g();
                return;
              }
              for (var D = L[b].units; !(u >= D.length); u++) {
                var E = D[u];
                if (!(E.data.length <= 48 || E.type !== 1 && E.type !== 5)) {
                  var S = this.decrypter.isSync();
                  if (this.decryptAvcSample(L, b, u, g, E, S), !S)
                    return;
                }
              }
            }
          }, w;
        }();
        T.default = y;
      }, "./src/demux/transmuxer-interface.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "default", function() {
          return E;
        });
        var R = e("./node_modules/webworkify-webpack/index.js"), m = e.n(R), y = e("./src/events.ts"), w = e("./src/demux/transmuxer.ts"), A = e("./src/utils/logger.ts"), L = e("./src/errors.ts"), b = e("./src/utils/mediasource-helper.ts"), u = e("./node_modules/eventemitter3/index.js"), g = e.n(u), D = Object(b.getMediaSource)() || { isTypeSupported: function() {
          return false;
        } }, E = function() {
          function S(t, r, n, h) {
            var a = this;
            this.hls = void 0, this.id = void 0, this.observer = void 0, this.frag = null, this.part = null, this.worker = void 0, this.onwmsg = void 0, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0, this.hls = t, this.id = r, this.onTransmuxComplete = n, this.onFlush = h;
            var f = t.config, v = function(s, i) {
              i = i || {}, i.frag = a.frag, i.id = a.id, t.trigger(s, i);
            };
            this.observer = new u.EventEmitter(), this.observer.on(y.Events.FRAG_DECRYPTED, v), this.observer.on(y.Events.ERROR, v);
            var _ = { mp4: D.isTypeSupported("video/mp4"), mpeg: D.isTypeSupported("audio/mpeg"), mp3: D.isTypeSupported('audio/mp4; codecs="mp3"') }, p = navigator.vendor;
            if (f.enableWorker && typeof Worker != "undefined") {
              A.logger.log("demuxing in webworker");
              var o;
              try {
                o = this.worker = R("./src/demux/transmuxer-worker.ts"), this.onwmsg = this.onWorkerMessage.bind(this), o.addEventListener("message", this.onwmsg), o.onerror = function(s) {
                  t.trigger(y.Events.ERROR, { type: L.ErrorTypes.OTHER_ERROR, details: L.ErrorDetails.INTERNAL_EXCEPTION, fatal: true, event: "demuxerWorker", error: new Error(s.message + "  (" + s.filename + ":" + s.lineno + ")") });
                }, o.postMessage({ cmd: "init", typeSupported: _, vendor: p, id: r, config: JSON.stringify(f) });
              } catch (s) {
                A.logger.warn("Error in worker:", s), A.logger.error("Error while initializing DemuxerWorker, fallback to inline"), o && self.URL.revokeObjectURL(o.objectURL), this.transmuxer = new w.default(this.observer, _, f, p, r), this.worker = null;
              }
            } else
              this.transmuxer = new w.default(this.observer, _, f, p, r);
          }
          var d = S.prototype;
          return d.destroy = function() {
            var t = this.worker;
            if (t)
              t.removeEventListener("message", this.onwmsg), t.terminate(), this.worker = null;
            else {
              var r = this.transmuxer;
              r && (r.destroy(), this.transmuxer = null);
            }
            var n = this.observer;
            n && n.removeAllListeners(), this.observer = null;
          }, d.push = function(t, r, n, h, a, f, v, _, p, o) {
            var s = this;
            p.transmuxing.start = self.performance.now();
            var i = this.transmuxer, c = this.worker, l = f ? f.start : a.start, k = a.decryptdata, I = this.frag, C = !(I && a.cc === I.cc), P = !(I && p.level === I.level), N = I ? p.sn - I.sn : -1, B = this.part ? p.part - this.part.index : 1, F = !P && (N === 1 || N === 0 && B === 1), U = self.performance.now();
            (P || N || a.stats.parsing.start === 0) && (a.stats.parsing.start = U), f && (B || !F) && (f.stats.parsing.start = U);
            var j = new w.TransmuxState(C, F, _, P, l);
            if (!F || C) {
              A.logger.log("[transmuxer-interface, " + a.type + "]: Starting new transmux session for sn: " + p.sn + " p: " + p.part + " level: " + p.level + " id: " + p.id + `
        discontinuity: ` + C + `
        trackSwitch: ` + P + `
        contiguous: ` + F + `
        accurateTimeOffset: ` + _ + `
        timeOffset: ` + l);
              var H = new w.TransmuxConfig(n, h, r, v, o);
              this.configureTransmuxer(H);
            }
            if (this.frag = a, this.part = f, c)
              c.postMessage({ cmd: "demux", data: t, decryptdata: k, chunkMeta: p, state: j }, t instanceof ArrayBuffer ? [t] : []);
            else if (i) {
              var V = i.push(t, k, p, j);
              Object(w.isPromise)(V) ? V.then(function(K) {
                s.handleTransmuxComplete(K);
              }) : this.handleTransmuxComplete(V);
            }
          }, d.flush = function(t) {
            var r = this;
            t.transmuxing.start = self.performance.now();
            var n = this.transmuxer, h = this.worker;
            if (h)
              h.postMessage({ cmd: "flush", chunkMeta: t });
            else if (n) {
              var a = n.flush(t);
              Object(w.isPromise)(a) ? a.then(function(f) {
                r.handleFlushResult(f, t);
              }) : this.handleFlushResult(a, t);
            }
          }, d.handleFlushResult = function(t, r) {
            var n = this;
            t.forEach(function(h) {
              n.handleTransmuxComplete(h);
            }), this.onFlush(r);
          }, d.onWorkerMessage = function(t) {
            var r = t.data, n = this.hls;
            switch (r.event) {
              case "init": {
                self.URL.revokeObjectURL(this.worker.objectURL);
                break;
              }
              case "transmuxComplete": {
                this.handleTransmuxComplete(r.data);
                break;
              }
              case "flush": {
                this.onFlush(r.data);
                break;
              }
              default: {
                r.data = r.data || {}, r.data.frag = this.frag, r.data.id = this.id, n.trigger(r.event, r.data);
                break;
              }
            }
          }, d.configureTransmuxer = function(t) {
            var r = this.worker, n = this.transmuxer;
            r ? r.postMessage({ cmd: "configure", config: t }) : n && n.configure(t);
          }, d.handleTransmuxComplete = function(t) {
            t.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(t);
          }, S;
        }();
      }, "./src/demux/transmuxer-worker.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "default", function() {
          return L;
        });
        var R = e("./src/demux/transmuxer.ts"), m = e("./src/events.ts"), y = e("./src/utils/logger.ts"), w = e("./node_modules/eventemitter3/index.js"), A = e.n(w);
        function L(E) {
          var S = new w.EventEmitter(), d = function(t, r) {
            E.postMessage({ event: t, data: r });
          };
          S.on(m.Events.FRAG_DECRYPTED, d), S.on(m.Events.ERROR, d), E.addEventListener("message", function(t) {
            var r = t.data;
            switch (r.cmd) {
              case "init": {
                var n = JSON.parse(r.config);
                E.transmuxer = new R.default(S, r.typeSupported, n, r.vendor, r.id), Object(y.enableLogs)(n.debug), d("init", null);
                break;
              }
              case "configure": {
                E.transmuxer.configure(r.config);
                break;
              }
              case "demux": {
                var h = E.transmuxer.push(r.data, r.decryptdata, r.chunkMeta, r.state);
                Object(R.isPromise)(h) ? h.then(function(v) {
                  b(E, v);
                }) : b(E, h);
                break;
              }
              case "flush": {
                var a = r.chunkMeta, f = E.transmuxer.flush(a);
                Object(R.isPromise)(f) ? f.then(function(v) {
                  g(E, v, a);
                }) : g(E, f, a);
                break;
              }
              default:
                break;
            }
          });
        }
        function b(E, S) {
          if (!D(S.remuxResult)) {
            var d = [], t = S.remuxResult, r = t.audio, n = t.video;
            r && u(d, r), n && u(d, n), E.postMessage({ event: "transmuxComplete", data: S }, d);
          }
        }
        function u(E, S) {
          S.data1 && E.push(S.data1.buffer), S.data2 && E.push(S.data2.buffer);
        }
        function g(E, S, d) {
          S.forEach(function(t) {
            b(E, t);
          }), E.postMessage({ event: "flush", data: d });
        }
        function D(E) {
          return !E.audio && !E.video && !E.text && !E.id3 && !E.initSegment;
        }
      }, "./src/demux/transmuxer.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "default", function() {
          return n;
        }), e.d(T, "isPromise", function() {
          return f;
        }), e.d(T, "TransmuxConfig", function() {
          return v;
        }), e.d(T, "TransmuxState", function() {
          return _;
        });
        var R = e("./src/events.ts"), m = e("./src/errors.ts"), y = e("./src/crypt/decrypter.ts"), w = e("./src/demux/aacdemuxer.ts"), A = e("./src/demux/mp4demuxer.ts"), L = e("./src/demux/tsdemuxer.ts"), b = e("./src/demux/mp3demuxer.ts"), u = e("./src/remux/mp4-remuxer.ts"), g = e("./src/remux/passthrough-remuxer.ts"), D = e("./src/demux/chunk-cache.ts"), E = e("./src/utils/mp4-tools.ts"), S = e("./src/utils/logger.ts"), d;
        try {
          d = self.performance.now.bind(self.performance);
        } catch {
          S.logger.debug("Unable to use Performance API on this environment"), d = self.Date.now;
        }
        var t = [{ demux: L.default, remux: u.default }, { demux: A.default, remux: g.default }, { demux: w.default, remux: u.default }, { demux: b.default, remux: u.default }], r = 1024;
        t.forEach(function(p) {
          var o = p.demux;
          r = Math.max(r, o.minProbeByteLength);
        });
        var n = function() {
          function p(s, i, c, l, k) {
            this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.vendor = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.cache = new D.default(), this.observer = s, this.typeSupported = i, this.config = c, this.vendor = l, this.id = k;
          }
          var o = p.prototype;
          return o.configure = function(s) {
            this.transmuxConfig = s, this.decrypter && this.decrypter.reset();
          }, o.push = function(s, i, c, l) {
            var k = this, I = c.transmuxing;
            I.executeStart = d();
            var C = new Uint8Array(s), P = this.cache, N = this.config, B = this.currentTransmuxState, F = this.transmuxConfig;
            l && (this.currentTransmuxState = l);
            var U = h(C, i);
            if (U && U.method === "AES-128") {
              var j = this.getDecrypter();
              if (N.enableSoftwareAES) {
                var H = j.softwareDecrypt(C, U.key.buffer, U.iv.buffer);
                if (!H)
                  return I.executeEnd = d(), a(c);
                C = new Uint8Array(H);
              } else
                return this.decryptionPromise = j.webCryptoDecrypt(C, U.key.buffer, U.iv.buffer).then(function(Q) {
                  var ut = k.push(Q, null, c);
                  return k.decryptionPromise = null, ut;
                }), this.decryptionPromise;
            }
            var V = l || B, K = V.contiguous, q = V.discontinuity, $ = V.trackSwitch, J = V.accurateTimeOffset, z = V.timeOffset, tt = F.audioCodec, et = F.videoCodec, at = F.defaultInitPts, pt = F.duration, ot = F.initSegmentData;
            if ((q || $) && this.resetInitSegment(ot, tt, et, pt), q && this.resetInitialTimestamp(at), K || this.resetContiguity(), this.needsProbing(C, q, $)) {
              if (P.dataLength) {
                var nt = P.flush();
                C = Object(E.appendUint8Array)(nt, C);
              }
              this.configureTransmuxer(C, F);
            }
            var X = this.transmux(C, U, z, J, c), Z = this.currentTransmuxState;
            return Z.contiguous = true, Z.discontinuity = false, Z.trackSwitch = false, I.executeEnd = d(), X;
          }, o.flush = function(s) {
            var i = this, c = s.transmuxing;
            c.executeStart = d();
            var l = this.decrypter, k = this.cache, I = this.currentTransmuxState, C = this.decryptionPromise;
            if (C)
              return C.then(function() {
                return i.flush(s);
              });
            var P = [], N = I.timeOffset;
            if (l) {
              var B = l.flush();
              B && P.push(this.push(B, null, s));
            }
            var F = k.dataLength;
            k.reset();
            var U = this.demuxer, j = this.remuxer;
            if (!U || !j)
              return F >= r && this.observer.emit(R.Events.ERROR, R.Events.ERROR, { type: m.ErrorTypes.MEDIA_ERROR, details: m.ErrorDetails.FRAG_PARSING_ERROR, fatal: true, reason: "no demux matching with content found" }), c.executeEnd = d(), [a(s)];
            var H = U.flush(N);
            return f(H) ? H.then(function(V) {
              return i.flushRemux(P, V, s), P;
            }) : (this.flushRemux(P, H, s), P);
          }, o.flushRemux = function(s, i, c) {
            var l = i.audioTrack, k = i.avcTrack, I = i.id3Track, C = i.textTrack, P = this.currentTransmuxState, N = P.accurateTimeOffset, B = P.timeOffset;
            S.logger.log("[transmuxer.ts]: Flushed fragment " + c.sn + (c.part > -1 ? " p: " + c.part : "") + " of level " + c.level);
            var F = this.remuxer.remux(l, k, I, C, B, N, true, this.id);
            s.push({ remuxResult: F, chunkMeta: c }), c.transmuxing.executeEnd = d();
          }, o.resetInitialTimestamp = function(s) {
            var i = this.demuxer, c = this.remuxer;
            !i || !c || (i.resetTimeStamp(s), c.resetTimeStamp(s));
          }, o.resetContiguity = function() {
            var s = this.demuxer, i = this.remuxer;
            !s || !i || (s.resetContiguity(), i.resetNextTimestamp());
          }, o.resetInitSegment = function(s, i, c, l) {
            var k = this.demuxer, I = this.remuxer;
            !k || !I || (k.resetInitSegment(i, c, l), I.resetInitSegment(s, i, c));
          }, o.destroy = function() {
            this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0);
          }, o.transmux = function(s, i, c, l, k) {
            var I;
            return i && i.method === "SAMPLE-AES" ? I = this.transmuxSampleAes(s, i, c, l, k) : I = this.transmuxUnencrypted(s, c, l, k), I;
          }, o.transmuxUnencrypted = function(s, i, c, l) {
            var k = this.demuxer.demux(s, i, false, !this.config.progressive), I = k.audioTrack, C = k.avcTrack, P = k.id3Track, N = k.textTrack, B = this.remuxer.remux(I, C, P, N, i, c, false, this.id);
            return { remuxResult: B, chunkMeta: l };
          }, o.transmuxSampleAes = function(s, i, c, l, k) {
            var I = this;
            return this.demuxer.demuxSampleAes(s, i, c).then(function(C) {
              var P = I.remuxer.remux(C.audioTrack, C.avcTrack, C.id3Track, C.textTrack, c, l, false, I.id);
              return { remuxResult: P, chunkMeta: k };
            });
          }, o.configureTransmuxer = function(s, i) {
            for (var c = this.config, l = this.observer, k = this.typeSupported, I = this.vendor, C = i.audioCodec, P = i.defaultInitPts, N = i.duration, B = i.initSegmentData, F = i.videoCodec, U, j = 0, H = t.length; j < H; j++)
              if (t[j].demux.probe(s)) {
                U = t[j];
                break;
              }
            U || (S.logger.warn("Failed to find demuxer by probing frag, treating as mp4 passthrough"), U = { demux: A.default, remux: g.default });
            var V = this.demuxer, K = this.remuxer, q = U.remux, $ = U.demux;
            (!K || !(K instanceof q)) && (this.remuxer = new q(l, c, k, I)), (!V || !(V instanceof $)) && (this.demuxer = new $(l, c, k), this.probe = $.probe), this.resetInitSegment(B, C, F, N), this.resetInitialTimestamp(P);
          }, o.needsProbing = function(s, i, c) {
            return !this.demuxer || !this.remuxer || i || c;
          }, o.getDecrypter = function() {
            var s = this.decrypter;
            return s || (s = this.decrypter = new y.default(this.observer, this.config)), s;
          }, p;
        }();
        function h(p, o) {
          var s = null;
          return p.byteLength > 0 && o != null && o.key != null && o.iv !== null && o.method != null && (s = o), s;
        }
        var a = function(p) {
          return { remuxResult: {}, chunkMeta: p };
        };
        function f(p) {
          return "then" in p && p.then instanceof Function;
        }
        var v = function(p, o, s, i, c) {
          this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = p, this.videoCodec = o, this.initSegmentData = s, this.duration = i, this.defaultInitPts = c;
        }, _ = function(p, o, s, i, c) {
          this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.discontinuity = p, this.contiguous = o, this.accurateTimeOffset = s, this.trackSwitch = i, this.timeOffset = c;
        };
      }, "./src/demux/tsdemuxer.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "discardEPB", function() {
          return a;
        });
        var R = e("./src/demux/adts.ts"), m = e("./src/demux/mpegaudio.ts"), y = e("./src/demux/exp-golomb.ts"), w = e("./src/demux/id3.ts"), A = e("./src/demux/sample-aes.ts"), L = e("./src/events.ts"), b = e("./src/utils/mp4-tools.ts"), u = e("./src/utils/logger.ts"), g = e("./src/errors.ts"), D = { video: 1, audio: 2, id3: 3, text: 4 }, E = function() {
          function f(_, p, o) {
            this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = false, this.audioCodec = void 0, this.videoCodec = void 0, this._duration = 0, this.aacLastPTS = null, this._initPTS = null, this._initDTS = null, this._pmtId = -1, this._avcTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.avcSample = null, this.remainderData = null, this.observer = _, this.config = p, this.typeSupported = o;
          }
          f.probe = function(_) {
            var p = f.syncOffset(_);
            return p < 0 ? false : (p && u.logger.warn("MPEG2-TS detected but first sync word found @ offset " + p + ", junk ahead ?"), true);
          }, f.syncOffset = function(_) {
            for (var p = Math.min(1e3, _.length - 3 * 188), o = 0; o < p; ) {
              if (_[o] === 71 && _[o + 188] === 71 && _[o + 2 * 188] === 71)
                return o;
              o++;
            }
            return -1;
          }, f.createTrack = function(_, p) {
            return { container: _ === "video" || _ === "audio" ? "video/mp2t" : void 0, type: _, id: D[_], pid: -1, inputTimeScale: 9e4, sequenceNumber: 0, samples: [], dropped: 0, duration: _ === "audio" ? p : void 0 };
          };
          var v = f.prototype;
          return v.resetInitSegment = function(_, p, o) {
            this.pmtParsed = false, this._pmtId = -1, this._avcTrack = f.createTrack("video", o), this._audioTrack = f.createTrack("audio", o), this._id3Track = f.createTrack("id3", o), this._txtTrack = f.createTrack("text", o), this._audioTrack.isAAC = true, this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample = null, this.audioCodec = _, this.videoCodec = p, this._duration = o;
          }, v.resetTimeStamp = function() {
          }, v.resetContiguity = function() {
            var _ = this._audioTrack, p = this._avcTrack, o = this._id3Track;
            _ && (_.pesData = null), p && (p.pesData = null), o && (o.pesData = null), this.aacOverFlow = null, this.aacLastPTS = null;
          }, v.demux = function(_, p, o, s) {
            o === void 0 && (o = false), s === void 0 && (s = false), o || (this.sampleAes = null);
            var i, c = this._avcTrack, l = this._audioTrack, k = this._id3Track, I = c.pid, C = c.pesData, P = l.pid, N = k.pid, B = l.pesData, F = k.pesData, U = false, j = this.pmtParsed, H = this._pmtId, V = _.length;
            if (this.remainderData && (_ = Object(b.appendUint8Array)(this.remainderData, _), V = _.length, this.remainderData = null), V < 188 && !s)
              return this.remainderData = _, { audioTrack: l, avcTrack: c, id3Track: k, textTrack: this._txtTrack };
            var K = Math.max(0, f.syncOffset(_));
            V -= (V + K) % 188, V < _.byteLength && !s && (this.remainderData = new Uint8Array(_.buffer, V, _.buffer.byteLength - V));
            for (var q = K; q < V; q += 188)
              if (_[q] === 71) {
                var $ = !!(_[q + 1] & 64), J = ((_[q + 1] & 31) << 8) + _[q + 2], z = (_[q + 3] & 48) >> 4, tt = void 0;
                if (z > 1) {
                  if (tt = q + 5 + _[q + 4], tt === q + 188)
                    continue;
                } else
                  tt = q + 4;
                switch (J) {
                  case I:
                    $ && (C && (i = r(C)) && this.parseAVCPES(i, false), C = { data: [], size: 0 }), C && (C.data.push(_.subarray(tt, q + 188)), C.size += q + 188 - tt);
                    break;
                  case P:
                    $ && (B && (i = r(B)) && (l.isAAC ? this.parseAACPES(i) : this.parseMPEGPES(i)), B = { data: [], size: 0 }), B && (B.data.push(_.subarray(tt, q + 188)), B.size += q + 188 - tt);
                    break;
                  case N:
                    $ && (F && (i = r(F)) && this.parseID3PES(i), F = { data: [], size: 0 }), F && (F.data.push(_.subarray(tt, q + 188)), F.size += q + 188 - tt);
                    break;
                  case 0:
                    $ && (tt += _[tt] + 1), H = this._pmtId = d(_, tt);
                    break;
                  case H: {
                    $ && (tt += _[tt] + 1);
                    var et = t(_, tt, this.typeSupported.mpeg === true || this.typeSupported.mp3 === true, o);
                    I = et.avc, I > 0 && (c.pid = I), P = et.audio, P > 0 && (l.pid = P, l.isAAC = et.isAAC), N = et.id3, N > 0 && (k.pid = N), U && !j && (u.logger.log("reparse from beginning"), U = false, q = K - 188), j = this.pmtParsed = true;
                    break;
                  }
                  case 17:
                  case 8191:
                    break;
                  default:
                    U = true;
                    break;
                }
              } else
                this.observer.emit(L.Events.ERROR, L.Events.ERROR, { type: g.ErrorTypes.MEDIA_ERROR, details: g.ErrorDetails.FRAG_PARSING_ERROR, fatal: false, reason: "TS packet did not start with 0x47" });
            c.pesData = C, l.pesData = B, k.pesData = F;
            var at = { audioTrack: l, avcTrack: c, id3Track: k, textTrack: this._txtTrack };
            return s && this.extractRemainingSamples(at), at;
          }, v.flush = function() {
            var _ = this.remainderData;
            this.remainderData = null;
            var p;
            return _ ? p = this.demux(_, -1, false, true) : p = { audioTrack: this._audioTrack, avcTrack: this._avcTrack, textTrack: this._txtTrack, id3Track: this._id3Track }, this.extractRemainingSamples(p), this.sampleAes ? this.decrypt(p, this.sampleAes) : p;
          }, v.extractRemainingSamples = function(_) {
            var p = _.audioTrack, o = _.avcTrack, s = _.id3Track, i = o.pesData, c = p.pesData, l = s.pesData, k;
            i && (k = r(i)) ? (this.parseAVCPES(k, true), o.pesData = null) : o.pesData = i, c && (k = r(c)) ? (p.isAAC ? this.parseAACPES(k) : this.parseMPEGPES(k), p.pesData = null) : (c != null && c.size && u.logger.log("last AAC PES packet truncated,might overlap between fragments"), p.pesData = c), l && (k = r(l)) ? (this.parseID3PES(k), s.pesData = null) : s.pesData = l;
          }, v.demuxSampleAes = function(_, p, o) {
            var s = this.demux(_, o, true, !this.config.progressive), i = this.sampleAes = new A.default(this.observer, this.config, p);
            return this.decrypt(s, i);
          }, v.decrypt = function(_, p) {
            return new Promise(function(o) {
              var s = _.audioTrack, i = _.avcTrack;
              s.samples && s.isAAC ? p.decryptAacSamples(s.samples, 0, function() {
                i.samples ? p.decryptAvcSamples(i.samples, 0, 0, function() {
                  o(_);
                }) : o(_);
              }) : i.samples && p.decryptAvcSamples(i.samples, 0, 0, function() {
                o(_);
              });
            });
          }, v.destroy = function() {
            this._initPTS = this._initDTS = null, this._duration = 0;
          }, v.parseAVCPES = function(_, p) {
            var o = this, s = this._avcTrack, i = this.parseAVCNALu(_.data), c = false, l = this.avcSample, k, I = false;
            _.data = null, l && i.length && !s.audFound && (n(l, s), l = this.avcSample = S(false, _.pts, _.dts, "")), i.forEach(function(C) {
              switch (C.type) {
                case 1: {
                  k = true, l || (l = o.avcSample = S(true, _.pts, _.dts, "")), c && (l.debug += "NDR "), l.frame = true;
                  var P = C.data;
                  if (I && P.length > 4) {
                    var N = new y.default(P).readSliceType();
                    (N === 2 || N === 4 || N === 7 || N === 9) && (l.key = true);
                  }
                  break;
                }
                case 5:
                  k = true, l || (l = o.avcSample = S(true, _.pts, _.dts, "")), c && (l.debug += "IDR "), l.key = true, l.frame = true;
                  break;
                case 6: {
                  k = true, c && l && (l.debug += "SEI ");
                  var B = new y.default(a(C.data));
                  B.readUByte();
                  for (var F = 0, U = 0, j = false, H = 0; !j && B.bytesAvailable > 1; ) {
                    F = 0;
                    do
                      H = B.readUByte(), F += H;
                    while (H === 255);
                    U = 0;
                    do
                      H = B.readUByte(), U += H;
                    while (H === 255);
                    if (F === 4 && B.bytesAvailable !== 0) {
                      j = true;
                      var V = B.readUByte();
                      if (V === 181) {
                        var K = B.readUShort();
                        if (K === 49) {
                          var q = B.readUInt();
                          if (q === 1195456820) {
                            var $ = B.readUByte();
                            if ($ === 3) {
                              for (var J = B.readUByte(), z = B.readUByte(), tt = 31 & J, et = [J, z], at = 0; at < tt; at++)
                                et.push(B.readUByte()), et.push(B.readUByte()), et.push(B.readUByte());
                              h(o._txtTrack.samples, { type: 3, pts: _.pts, bytes: et });
                            }
                          }
                        }
                      }
                    } else if (F === 5 && B.bytesAvailable !== 0) {
                      if (j = true, U > 16) {
                        for (var pt = [], ot = 0; ot < 16; ot++)
                          pt.push(B.readUByte().toString(16)), (ot === 3 || ot === 5 || ot === 7 || ot === 9) && pt.push("-");
                        for (var nt = U - 16, X = new Uint8Array(nt), Z = 0; Z < nt; Z++)
                          X[Z] = B.readUByte();
                        h(o._txtTrack.samples, { pts: _.pts, payloadType: F, uuid: pt.join(""), userData: Object(w.utf8ArrayToStr)(X), userDataBytes: X });
                      }
                    } else if (U < B.bytesAvailable)
                      for (var Q = 0; Q < U; Q++)
                        B.readUByte();
                  }
                  break;
                }
                case 7:
                  if (k = true, I = true, c && l && (l.debug += "SPS "), !s.sps) {
                    var ut = new y.default(C.data), ft = ut.readSPS();
                    s.width = ft.width, s.height = ft.height, s.pixelRatio = ft.pixelRatio, s.sps = [C.data], s.duration = o._duration;
                    for (var mt = C.data.subarray(1, 4), Et = "avc1.", ct = 0; ct < 3; ct++) {
                      var vt = mt[ct].toString(16);
                      vt.length < 2 && (vt = "0" + vt), Et += vt;
                    }
                    s.codec = Et;
                  }
                  break;
                case 8:
                  k = true, c && l && (l.debug += "PPS "), s.pps || (s.pps = [C.data]);
                  break;
                case 9:
                  k = false, s.audFound = true, l && n(l, s), l = o.avcSample = S(false, _.pts, _.dts, c ? "AUD " : "");
                  break;
                case 12:
                  k = false;
                  break;
                default:
                  k = false, l && (l.debug += "unknown NAL " + C.type + " ");
                  break;
              }
              if (l && k) {
                var lt = l.units;
                lt.push(C);
              }
            }), p && l && (n(l, s), this.avcSample = null);
          }, v.getLastNalUnit = function() {
            var _, p = this.avcSample, o;
            if (!p || p.units.length === 0) {
              var s = this._avcTrack.samples;
              p = s[s.length - 1];
            }
            if ((_ = p) !== null && _ !== void 0 && _.units) {
              var i = p.units;
              o = i[i.length - 1];
            }
            return o;
          }, v.parseAVCNALu = function(_) {
            var p = _.byteLength, o = this._avcTrack, s = o.naluState || 0, i = s, c = [], l = 0, k, I, C, P = -1, N = 0;
            for (s === -1 && (P = 0, N = _[0] & 31, s = 0, l = 1); l < p; ) {
              if (k = _[l++], !s) {
                s = k ? 0 : 1;
                continue;
              }
              if (s === 1) {
                s = k ? 0 : 2;
                continue;
              }
              if (!k)
                s = 3;
              else if (k === 1) {
                if (P >= 0) {
                  var B = { data: _.subarray(P, l - s - 1), type: N };
                  c.push(B);
                } else {
                  var F = this.getLastNalUnit();
                  if (F && (i && l <= 4 - i && F.state && (F.data = F.data.subarray(0, F.data.byteLength - i)), I = l - s - 1, I > 0)) {
                    var U = new Uint8Array(F.data.byteLength + I);
                    U.set(F.data, 0), U.set(_.subarray(0, I), F.data.byteLength), F.data = U;
                  }
                }
                l < p ? (C = _[l] & 31, P = l, N = C, s = 0) : s = -1;
              } else
                s = 0;
            }
            if (P >= 0 && s >= 0) {
              var j = { data: _.subarray(P, p), type: N, state: s };
              c.push(j);
            }
            if (c.length === 0) {
              var H = this.getLastNalUnit();
              if (H) {
                var V = new Uint8Array(H.data.byteLength + _.byteLength);
                V.set(H.data, 0), V.set(_, H.data.byteLength), H.data = V;
              }
            }
            return o.naluState = s, c;
          }, v.parseAACPES = function(_) {
            var p = 0, o = this._audioTrack, s = this.aacOverFlow, i = _.data;
            if (s) {
              this.aacOverFlow = null;
              var c = s.sample.unit.byteLength, l = Math.min(s.missing, c), k = c - l;
              s.sample.unit.set(i.subarray(0, l), k), o.samples.push(s.sample), p = s.missing;
            }
            var I, C;
            for (I = p, C = i.length; I < C - 1 && !R.isHeader(i, I); I++)
              ;
            if (I !== p) {
              var P, N;
              if (I < C - 1 ? (P = "AAC PES did not start with ADTS header,offset:" + I, N = false) : (P = "no ADTS header found in AAC PES", N = true), u.logger.warn("parsing error:" + P), this.observer.emit(L.Events.ERROR, L.Events.ERROR, { type: g.ErrorTypes.MEDIA_ERROR, details: g.ErrorDetails.FRAG_PARSING_ERROR, fatal: N, reason: P }), N)
                return;
            }
            R.initTrackConfig(o, this.observer, i, I, this.audioCodec);
            var B;
            if (_.pts !== void 0)
              B = _.pts;
            else if (s) {
              var F = R.getFrameDuration(o.samplerate);
              B = s.sample.pts + F;
            } else {
              u.logger.warn("[tsdemuxer]: AAC PES unknown PTS");
              return;
            }
            for (var U = 0; I < C; )
              if (R.isHeader(i, I)) {
                if (I + 5 < C) {
                  var j = R.appendFrame(o, i, I, B, U);
                  if (j)
                    if (j.missing)
                      this.aacOverFlow = j;
                    else {
                      I += j.length, U++;
                      continue;
                    }
                }
                break;
              } else
                I++;
          }, v.parseMPEGPES = function(_) {
            var p = _.data, o = p.length, s = 0, i = 0, c = _.pts;
            if (c === void 0) {
              u.logger.warn("[tsdemuxer]: MPEG PES unknown PTS");
              return;
            }
            for (; i < o; )
              if (m.isHeader(p, i)) {
                var l = m.appendFrame(this._audioTrack, p, i, c, s);
                if (l)
                  i += l.length, s++;
                else
                  break;
              } else
                i++;
          }, v.parseID3PES = function(_) {
            if (_.pts === void 0) {
              u.logger.warn("[tsdemuxer]: ID3 PES unknown PTS");
              return;
            }
            this._id3Track.samples.push(_);
          }, f;
        }();
        E.minProbeByteLength = 188;
        function S(f, v, _, p) {
          return { key: f, frame: false, pts: v, dts: _, units: [], debug: p, length: 0 };
        }
        function d(f, v) {
          return (f[v + 10] & 31) << 8 | f[v + 11];
        }
        function t(f, v, _, p) {
          var o = { audio: -1, avc: -1, id3: -1, isAAC: true }, s = (f[v + 1] & 15) << 8 | f[v + 2], i = v + 3 + s - 4, c = (f[v + 10] & 15) << 8 | f[v + 11];
          for (v += 12 + c; v < i; ) {
            var l = (f[v + 1] & 31) << 8 | f[v + 2];
            switch (f[v]) {
              case 207:
                if (!p) {
                  u.logger.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");
                  break;
                }
              case 15:
                o.audio === -1 && (o.audio = l);
                break;
              case 21:
                o.id3 === -1 && (o.id3 = l);
                break;
              case 219:
                if (!p) {
                  u.logger.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");
                  break;
                }
              case 27:
                o.avc === -1 && (o.avc = l);
                break;
              case 3:
              case 4:
                _ ? o.audio === -1 && (o.audio = l, o.isAAC = false) : u.logger.log("MPEG audio found, not supported in this browser");
                break;
              case 36:
                u.logger.warn("Unsupported HEVC stream type found");
                break;
              default:
                break;
            }
            v += ((f[v + 3] & 15) << 8 | f[v + 4]) + 5;
          }
          return o;
        }
        function r(f) {
          var v = 0, _, p, o, s, i, c = f.data;
          if (!f || f.size === 0)
            return null;
          for (; c[0].length < 19 && c.length > 1; ) {
            var l = new Uint8Array(c[0].length + c[1].length);
            l.set(c[0]), l.set(c[1], c[0].length), c[0] = l, c.splice(1, 1);
          }
          _ = c[0];
          var k = (_[0] << 16) + (_[1] << 8) + _[2];
          if (k === 1) {
            if (p = (_[4] << 8) + _[5], p && p > f.size - 6)
              return null;
            var I = _[7];
            I & 192 && (s = (_[9] & 14) * 536870912 + (_[10] & 255) * 4194304 + (_[11] & 254) * 16384 + (_[12] & 255) * 128 + (_[13] & 254) / 2, I & 64 ? (i = (_[14] & 14) * 536870912 + (_[15] & 255) * 4194304 + (_[16] & 254) * 16384 + (_[17] & 255) * 128 + (_[18] & 254) / 2, s - i > 60 * 9e4 && (u.logger.warn(Math.round((s - i) / 9e4) + "s delta between PTS and DTS, align them"), s = i)) : i = s), o = _[8];
            var C = o + 9;
            if (f.size <= C)
              return null;
            f.size -= C;
            for (var P = new Uint8Array(f.size), N = 0, B = c.length; N < B; N++) {
              _ = c[N];
              var F = _.byteLength;
              if (C)
                if (C > F) {
                  C -= F;
                  continue;
                } else
                  _ = _.subarray(C), F -= C, C = 0;
              P.set(_, v), v += F;
            }
            return p && (p -= o + 3), { data: P, pts: s, dts: i, len: p };
          }
          return null;
        }
        function n(f, v) {
          if (f.units.length && f.frame) {
            if (f.pts === void 0) {
              var _ = v.samples, p = _.length;
              if (p) {
                var o = _[p - 1];
                f.pts = o.pts, f.dts = o.dts;
              } else {
                v.dropped++;
                return;
              }
            }
            v.samples.push(f);
          }
          f.debug.length && u.logger.log(f.pts + "/" + f.dts + ":" + f.debug);
        }
        function h(f, v) {
          var _ = f.length;
          if (_ > 0) {
            if (v.pts >= f[_ - 1].pts)
              f.push(v);
            else
              for (var p = _ - 1; p >= 0; p--)
                if (v.pts < f[p].pts) {
                  f.splice(p, 0, v);
                  break;
                }
          } else
            f.push(v);
        }
        function a(f) {
          for (var v = f.byteLength, _ = [], p = 1; p < v - 2; )
            f[p] === 0 && f[p + 1] === 0 && f[p + 2] === 3 ? (_.push(p + 2), p += 2) : p++;
          if (_.length === 0)
            return f;
          var o = v - _.length, s = new Uint8Array(o), i = 0;
          for (p = 0; p < o; i++, p++)
            i === _[0] && (i++, _.shift()), s[p] = f[i];
          return s;
        }
        T.default = E;
      }, "./src/errors.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "ErrorTypes", function() {
          return R;
        }), e.d(T, "ErrorDetails", function() {
          return m;
        });
        var R;
        (function(y) {
          y.NETWORK_ERROR = "networkError", y.MEDIA_ERROR = "mediaError", y.KEY_SYSTEM_ERROR = "keySystemError", y.MUX_ERROR = "muxError", y.OTHER_ERROR = "otherError";
        })(R || (R = {}));
        var m;
        (function(y) {
          y.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", y.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", y.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", y.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", y.KEY_SYSTEM_NO_INIT_DATA = "keySystemNoInitData", y.MANIFEST_LOAD_ERROR = "manifestLoadError", y.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", y.MANIFEST_PARSING_ERROR = "manifestParsingError", y.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", y.LEVEL_EMPTY_ERROR = "levelEmptyError", y.LEVEL_LOAD_ERROR = "levelLoadError", y.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", y.LEVEL_SWITCH_ERROR = "levelSwitchError", y.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", y.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", y.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", y.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", y.FRAG_LOAD_ERROR = "fragLoadError", y.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", y.FRAG_DECRYPT_ERROR = "fragDecryptError", y.FRAG_PARSING_ERROR = "fragParsingError", y.REMUX_ALLOC_ERROR = "remuxAllocError", y.KEY_LOAD_ERROR = "keyLoadError", y.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", y.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", y.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", y.BUFFER_APPEND_ERROR = "bufferAppendError", y.BUFFER_APPENDING_ERROR = "bufferAppendingError", y.BUFFER_STALLED_ERROR = "bufferStalledError", y.BUFFER_FULL_ERROR = "bufferFullError", y.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", y.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", y.INTERNAL_EXCEPTION = "internalException", y.INTERNAL_ABORTED = "aborted", y.UNKNOWN = "unknown";
        })(m || (m = {}));
      }, "./src/events.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "Events", function() {
          return R;
        });
        var R;
        (function(m) {
          m.MEDIA_ATTACHING = "hlsMediaAttaching", m.MEDIA_ATTACHED = "hlsMediaAttached", m.MEDIA_DETACHING = "hlsMediaDetaching", m.MEDIA_DETACHED = "hlsMediaDetached", m.BUFFER_RESET = "hlsBufferReset", m.BUFFER_CODECS = "hlsBufferCodecs", m.BUFFER_CREATED = "hlsBufferCreated", m.BUFFER_APPENDING = "hlsBufferAppending", m.BUFFER_APPENDED = "hlsBufferAppended", m.BUFFER_EOS = "hlsBufferEos", m.BUFFER_FLUSHING = "hlsBufferFlushing", m.BUFFER_FLUSHED = "hlsBufferFlushed", m.MANIFEST_LOADING = "hlsManifestLoading", m.MANIFEST_LOADED = "hlsManifestLoaded", m.MANIFEST_PARSED = "hlsManifestParsed", m.LEVEL_SWITCHING = "hlsLevelSwitching", m.LEVEL_SWITCHED = "hlsLevelSwitched", m.LEVEL_LOADING = "hlsLevelLoading", m.LEVEL_LOADED = "hlsLevelLoaded", m.LEVEL_UPDATED = "hlsLevelUpdated", m.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", m.LEVELS_UPDATED = "hlsLevelsUpdated", m.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", m.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", m.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", m.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", m.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", m.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", m.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", m.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", m.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", m.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", m.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", m.CUES_PARSED = "hlsCuesParsed", m.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", m.INIT_PTS_FOUND = "hlsInitPtsFound", m.FRAG_LOADING = "hlsFragLoading", m.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", m.FRAG_LOADED = "hlsFragLoaded", m.FRAG_DECRYPTED = "hlsFragDecrypted", m.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", m.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", m.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", m.FRAG_PARSED = "hlsFragParsed", m.FRAG_BUFFERED = "hlsFragBuffered", m.FRAG_CHANGED = "hlsFragChanged", m.FPS_DROP = "hlsFpsDrop", m.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", m.ERROR = "hlsError", m.DESTROYING = "hlsDestroying", m.KEY_LOADING = "hlsKeyLoading", m.KEY_LOADED = "hlsKeyLoaded", m.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", m.BACK_BUFFER_REACHED = "hlsBackBufferReached";
        })(R || (R = {}));
      }, "./src/hls.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "default", function() {
          return f;
        });
        var R = e("./node_modules/url-toolkit/src/url-toolkit.js"), m = e.n(R), y = e("./src/loader/playlist-loader.ts"), w = e("./src/loader/key-loader.ts"), A = e("./src/controller/id3-track-controller.ts"), L = e("./src/controller/latency-controller.ts"), b = e("./src/controller/level-controller.ts"), u = e("./src/controller/fragment-tracker.ts"), g = e("./src/controller/stream-controller.ts"), D = e("./src/is-supported.ts"), E = e("./src/utils/logger.ts"), S = e("./src/config.ts"), d = e("./node_modules/eventemitter3/index.js"), t = e.n(d), r = e("./src/events.ts"), n = e("./src/errors.ts");
        function h(v, _) {
          for (var p = 0; p < _.length; p++) {
            var o = _[p];
            o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(v, o.key, o);
          }
        }
        function a(v, _, p) {
          return _ && h(v.prototype, _), p && h(v, p), v;
        }
        var f = function() {
          v.isSupported = function() {
            return Object(D.isSupported)();
          };
          function v(p) {
            p === void 0 && (p = {}), this.config = void 0, this.userConfig = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this._emitter = new d.EventEmitter(), this._autoLevelCapping = void 0, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.emeController = void 0, this._media = null, this.url = null;
            var o = this.config = Object(S.mergeConfig)(v.DefaultConfig, p);
            this.userConfig = p, Object(E.enableLogs)(o.debug), this._autoLevelCapping = -1, o.progressive && Object(S.enableStreamingMode)(o);
            var s = o.abrController, i = o.bufferController, c = o.capLevelController, l = o.fpsController, k = this.abrController = new s(this), I = this.bufferController = new i(this), C = this.capLevelController = new c(this), P = new l(this), N = new y.default(this), B = new w.default(this), F = new A.default(this), U = this.levelController = new b.default(this), j = new u.FragmentTracker(this), H = this.streamController = new g.default(this, j);
            C.setStreamController(H), P.setStreamController(H);
            var V = [U, H];
            this.networkControllers = V;
            var K = [N, B, k, I, C, P, F, j];
            this.audioTrackController = this.createController(o.audioTrackController, null, V), this.createController(o.audioStreamController, j, V), this.subtitleTrackController = this.createController(o.subtitleTrackController, null, V), this.createController(o.subtitleStreamController, j, V), this.createController(o.timelineController, null, K), this.emeController = this.createController(o.emeController, null, K), this.latencyController = this.createController(L.default, null, K), this.coreComponents = K;
          }
          var _ = v.prototype;
          return _.createController = function(p, o, s) {
            if (p) {
              var i = o ? new p(this, o) : new p(this);
              return s && s.push(i), i;
            }
            return null;
          }, _.on = function(p, o, s) {
            s === void 0 && (s = this), this._emitter.on(p, o, s);
          }, _.once = function(p, o, s) {
            s === void 0 && (s = this), this._emitter.once(p, o, s);
          }, _.removeAllListeners = function(p) {
            this._emitter.removeAllListeners(p);
          }, _.off = function(p, o, s, i) {
            s === void 0 && (s = this), this._emitter.off(p, o, s, i);
          }, _.listeners = function(p) {
            return this._emitter.listeners(p);
          }, _.emit = function(p, o, s) {
            return this._emitter.emit(p, o, s);
          }, _.trigger = function(p, o) {
            if (this.config.debug)
              return this.emit(p, p, o);
            try {
              return this.emit(p, p, o);
            } catch (s) {
              E.logger.error("An internal error happened while handling event " + p + '. Error message: "' + s.message + '". Here is a stacktrace:', s), this.trigger(r.Events.ERROR, { type: n.ErrorTypes.OTHER_ERROR, details: n.ErrorDetails.INTERNAL_EXCEPTION, fatal: false, event: p, error: s });
            }
            return false;
          }, _.listenerCount = function(p) {
            return this._emitter.listenerCount(p);
          }, _.destroy = function() {
            E.logger.log("destroy"), this.trigger(r.Events.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, this.url = null, this.networkControllers.forEach(function(p) {
              return p.destroy();
            }), this.networkControllers.length = 0, this.coreComponents.forEach(function(p) {
              return p.destroy();
            }), this.coreComponents.length = 0;
          }, _.attachMedia = function(p) {
            E.logger.log("attachMedia"), this._media = p, this.trigger(r.Events.MEDIA_ATTACHING, { media: p });
          }, _.detachMedia = function() {
            E.logger.log("detachMedia"), this.trigger(r.Events.MEDIA_DETACHING, void 0), this._media = null;
          }, _.loadSource = function(p) {
            this.stopLoad();
            var o = this.media, s = this.url, i = this.url = R.buildAbsoluteURL(self.location.href, p, { alwaysNormalize: true });
            E.logger.log("loadSource:" + i), o && s && s !== i && this.bufferController.hasSourceTypes() && (this.detachMedia(), this.attachMedia(o)), this.trigger(r.Events.MANIFEST_LOADING, { url: p });
          }, _.startLoad = function(p) {
            p === void 0 && (p = -1), E.logger.log("startLoad(" + p + ")"), this.networkControllers.forEach(function(o) {
              o.startLoad(p);
            });
          }, _.stopLoad = function() {
            E.logger.log("stopLoad"), this.networkControllers.forEach(function(p) {
              p.stopLoad();
            });
          }, _.swapAudioCodec = function() {
            E.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec();
          }, _.recoverMediaError = function() {
            E.logger.log("recoverMediaError");
            var p = this._media;
            this.detachMedia(), p && this.attachMedia(p);
          }, _.removeLevel = function(p, o) {
            o === void 0 && (o = 0), this.levelController.removeLevel(p, o);
          }, a(v, [{ key: "levels", get: function() {
            var p = this.levelController.levels;
            return p || [];
          } }, { key: "currentLevel", get: function() {
            return this.streamController.currentLevel;
          }, set: function(p) {
            E.logger.log("set currentLevel:" + p), this.loadLevel = p, this.abrController.clearTimer(), this.streamController.immediateLevelSwitch();
          } }, { key: "nextLevel", get: function() {
            return this.streamController.nextLevel;
          }, set: function(p) {
            E.logger.log("set nextLevel:" + p), this.levelController.manualLevel = p, this.streamController.nextLevelSwitch();
          } }, { key: "loadLevel", get: function() {
            return this.levelController.level;
          }, set: function(p) {
            E.logger.log("set loadLevel:" + p), this.levelController.manualLevel = p;
          } }, { key: "nextLoadLevel", get: function() {
            return this.levelController.nextLoadLevel;
          }, set: function(p) {
            this.levelController.nextLoadLevel = p;
          } }, { key: "firstLevel", get: function() {
            return Math.max(this.levelController.firstLevel, this.minAutoLevel);
          }, set: function(p) {
            E.logger.log("set firstLevel:" + p), this.levelController.firstLevel = p;
          } }, { key: "startLevel", get: function() {
            return this.levelController.startLevel;
          }, set: function(p) {
            E.logger.log("set startLevel:" + p), p !== -1 && (p = Math.max(p, this.minAutoLevel)), this.levelController.startLevel = p;
          } }, { key: "capLevelToPlayerSize", get: function() {
            return this.config.capLevelToPlayerSize;
          }, set: function(p) {
            var o = !!p;
            o !== this.config.capLevelToPlayerSize && (o ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = o);
          } }, { key: "autoLevelCapping", get: function() {
            return this._autoLevelCapping;
          }, set: function(p) {
            this._autoLevelCapping !== p && (E.logger.log("set autoLevelCapping:" + p), this._autoLevelCapping = p);
          } }, { key: "bandwidthEstimate", get: function() {
            var p = this.abrController.bwEstimator;
            return p ? p.getEstimate() : NaN;
          } }, { key: "autoLevelEnabled", get: function() {
            return this.levelController.manualLevel === -1;
          } }, { key: "manualLevel", get: function() {
            return this.levelController.manualLevel;
          } }, { key: "minAutoLevel", get: function() {
            var p = this.levels, o = this.config.minAutoBitrate;
            if (!p)
              return 0;
            for (var s = p.length, i = 0; i < s; i++)
              if (p[i].maxBitrate > o)
                return i;
            return 0;
          } }, { key: "maxAutoLevel", get: function() {
            var p = this.levels, o = this.autoLevelCapping, s;
            return o === -1 && p && p.length ? s = p.length - 1 : s = o, s;
          } }, { key: "nextAutoLevel", get: function() {
            return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel);
          }, set: function(p) {
            this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, p);
          } }, { key: "audioTracks", get: function() {
            var p = this.audioTrackController;
            return p ? p.audioTracks : [];
          } }, { key: "audioTrack", get: function() {
            var p = this.audioTrackController;
            return p ? p.audioTrack : -1;
          }, set: function(p) {
            var o = this.audioTrackController;
            o && (o.audioTrack = p);
          } }, { key: "subtitleTracks", get: function() {
            var p = this.subtitleTrackController;
            return p ? p.subtitleTracks : [];
          } }, { key: "subtitleTrack", get: function() {
            var p = this.subtitleTrackController;
            return p ? p.subtitleTrack : -1;
          }, set: function(p) {
            var o = this.subtitleTrackController;
            o && (o.subtitleTrack = p);
          } }, { key: "media", get: function() {
            return this._media;
          } }, { key: "subtitleDisplay", get: function() {
            var p = this.subtitleTrackController;
            return p ? p.subtitleDisplay : false;
          }, set: function(p) {
            var o = this.subtitleTrackController;
            o && (o.subtitleDisplay = p);
          } }, { key: "lowLatencyMode", get: function() {
            return this.config.lowLatencyMode;
          }, set: function(p) {
            this.config.lowLatencyMode = p;
          } }, { key: "liveSyncPosition", get: function() {
            return this.latencyController.liveSyncPosition;
          } }, { key: "latency", get: function() {
            return this.latencyController.latency;
          } }, { key: "maxLatency", get: function() {
            return this.latencyController.maxLatency;
          } }, { key: "targetLatency", get: function() {
            return this.latencyController.targetLatency;
          } }, { key: "drift", get: function() {
            return this.latencyController.drift;
          } }, { key: "forceStartLoad", get: function() {
            return this.streamController.forceStartLoad;
          } }], [{ key: "version", get: function() {
            return "1.0.11";
          } }, { key: "Events", get: function() {
            return r.Events;
          } }, { key: "ErrorTypes", get: function() {
            return n.ErrorTypes;
          } }, { key: "ErrorDetails", get: function() {
            return n.ErrorDetails;
          } }, { key: "DefaultConfig", get: function() {
            return v.defaultConfig ? v.defaultConfig : S.hlsDefaultConfig;
          }, set: function(p) {
            v.defaultConfig = p;
          } }]), v;
        }();
        f.defaultConfig = void 0;
      }, "./src/is-supported.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "isSupported", function() {
          return y;
        }), e.d(T, "changeTypeSupported", function() {
          return w;
        });
        var R = e("./src/utils/mediasource-helper.ts");
        function m() {
          return self.SourceBuffer || self.WebKitSourceBuffer;
        }
        function y() {
          var A = Object(R.getMediaSource)();
          if (!A)
            return false;
          var L = m(), b = A && typeof A.isTypeSupported == "function" && A.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'), u = !L || L.prototype && typeof L.prototype.appendBuffer == "function" && typeof L.prototype.remove == "function";
          return !!b && !!u;
        }
        function w() {
          var A, L = m();
          return typeof (L == null || (A = L.prototype) === null || A === void 0 ? void 0 : A.changeType) == "function";
        }
      }, "./src/loader/fragment-loader.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "default", function() {
          return E;
        }), e.d(T, "LoadError", function() {
          return d;
        });
        var R = e("./src/polyfills/number.ts"), m = e("./src/errors.ts");
        function y(t, r) {
          t.prototype = Object.create(r.prototype), t.prototype.constructor = t, u(t, r);
        }
        function w(t) {
          var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
          return w = function(n) {
            if (n === null || !b(n))
              return n;
            if (typeof n != "function")
              throw new TypeError("Super expression must either be null or a function");
            if (typeof r != "undefined") {
              if (r.has(n))
                return r.get(n);
              r.set(n, h);
            }
            function h() {
              return A(n, arguments, g(this).constructor);
            }
            return h.prototype = Object.create(n.prototype, { constructor: { value: h, enumerable: false, writable: true, configurable: true } }), u(h, n);
          }, w(t);
        }
        function A(t, r, n) {
          return L() ? A = Reflect.construct : A = function(h, a, f) {
            var v = [null];
            v.push.apply(v, a);
            var _ = Function.bind.apply(h, v), p = new _();
            return f && u(p, f.prototype), p;
          }, A.apply(null, arguments);
        }
        function L() {
          if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch {
            return false;
          }
        }
        function b(t) {
          return Function.toString.call(t).indexOf("[native code]") !== -1;
        }
        function u(t, r) {
          return u = Object.setPrototypeOf || function(n, h) {
            return n.__proto__ = h, n;
          }, u(t, r);
        }
        function g(t) {
          return g = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
            return r.__proto__ || Object.getPrototypeOf(r);
          }, g(t);
        }
        var D = Math.pow(2, 17), E = function() {
          function t(n) {
            this.config = void 0, this.loader = null, this.partLoadTimeout = -1, this.config = n;
          }
          var r = t.prototype;
          return r.destroy = function() {
            this.loader && (this.loader.destroy(), this.loader = null);
          }, r.abort = function() {
            this.loader && this.loader.abort();
          }, r.load = function(n, h) {
            var a = this, f = n.url;
            if (!f)
              return Promise.reject(new d({ type: m.ErrorTypes.NETWORK_ERROR, details: m.ErrorDetails.FRAG_LOAD_ERROR, fatal: false, frag: n, networkDetails: null }, "Fragment does not have a " + (f ? "part list" : "url")));
            this.abort();
            var v = this.config, _ = v.fLoader, p = v.loader;
            return new Promise(function(o, s) {
              a.loader && a.loader.destroy();
              var i = a.loader = n.loader = _ ? new _(v) : new p(v), c = S(n), l = { timeout: v.fragLoadingTimeOut, maxRetry: 0, retryDelay: 0, maxRetryDelay: v.fragLoadingMaxRetryTimeout, highWaterMark: D };
              n.stats = i.stats, i.load(c, l, { onSuccess: function(k, I, C, P) {
                a.resetLoader(n, i), o({ frag: n, part: null, payload: k.data, networkDetails: P });
              }, onError: function(k, I, C) {
                a.resetLoader(n, i), s(new d({ type: m.ErrorTypes.NETWORK_ERROR, details: m.ErrorDetails.FRAG_LOAD_ERROR, fatal: false, frag: n, response: k, networkDetails: C }));
              }, onAbort: function(k, I, C) {
                a.resetLoader(n, i), s(new d({ type: m.ErrorTypes.NETWORK_ERROR, details: m.ErrorDetails.INTERNAL_ABORTED, fatal: false, frag: n, networkDetails: C }));
              }, onTimeout: function(k, I, C) {
                a.resetLoader(n, i), s(new d({ type: m.ErrorTypes.NETWORK_ERROR, details: m.ErrorDetails.FRAG_LOAD_TIMEOUT, fatal: false, frag: n, networkDetails: C }));
              }, onProgress: function(k, I, C, P) {
                h && h({ frag: n, part: null, payload: C, networkDetails: P });
              } });
            });
          }, r.loadPart = function(n, h, a) {
            var f = this;
            this.abort();
            var v = this.config, _ = v.fLoader, p = v.loader;
            return new Promise(function(o, s) {
              f.loader && f.loader.destroy();
              var i = f.loader = n.loader = _ ? new _(v) : new p(v), c = S(n, h), l = { timeout: v.fragLoadingTimeOut, maxRetry: 0, retryDelay: 0, maxRetryDelay: v.fragLoadingMaxRetryTimeout, highWaterMark: D };
              h.stats = i.stats, i.load(c, l, { onSuccess: function(k, I, C, P) {
                f.resetLoader(n, i), f.updateStatsFromPart(n, h);
                var N = { frag: n, part: h, payload: k.data, networkDetails: P };
                a(N), o(N);
              }, onError: function(k, I, C) {
                f.resetLoader(n, i), s(new d({ type: m.ErrorTypes.NETWORK_ERROR, details: m.ErrorDetails.FRAG_LOAD_ERROR, fatal: false, frag: n, part: h, response: k, networkDetails: C }));
              }, onAbort: function(k, I, C) {
                n.stats.aborted = h.stats.aborted, f.resetLoader(n, i), s(new d({ type: m.ErrorTypes.NETWORK_ERROR, details: m.ErrorDetails.INTERNAL_ABORTED, fatal: false, frag: n, part: h, networkDetails: C }));
              }, onTimeout: function(k, I, C) {
                f.resetLoader(n, i), s(new d({ type: m.ErrorTypes.NETWORK_ERROR, details: m.ErrorDetails.FRAG_LOAD_TIMEOUT, fatal: false, frag: n, part: h, networkDetails: C }));
              } });
            });
          }, r.updateStatsFromPart = function(n, h) {
            var a = n.stats, f = h.stats, v = f.total;
            if (a.loaded += f.loaded, v) {
              var _ = Math.round(n.duration / h.duration), p = Math.min(Math.round(a.loaded / v), _), o = _ - p, s = o * Math.round(a.loaded / p);
              a.total = a.loaded + s;
            } else
              a.total = Math.max(a.loaded, a.total);
            var i = a.loading, c = f.loading;
            i.start ? i.first += c.first - c.start : (i.start = c.start, i.first = c.first), i.end = c.end;
          }, r.resetLoader = function(n, h) {
            n.loader = null, this.loader === h && (self.clearTimeout(this.partLoadTimeout), this.loader = null), h.destroy();
          }, t;
        }();
        function S(t, r) {
          r === void 0 && (r = null);
          var n = r || t, h = { frag: t, part: r, responseType: "arraybuffer", url: n.url, rangeStart: 0, rangeEnd: 0 }, a = n.byteRangeStartOffset, f = n.byteRangeEndOffset;
          return Object(R.isFiniteNumber)(a) && Object(R.isFiniteNumber)(f) && (h.rangeStart = a, h.rangeEnd = f), h;
        }
        var d = function(t) {
          y(r, t);
          function r(n) {
            for (var h, a = arguments.length, f = new Array(a > 1 ? a - 1 : 0), v = 1; v < a; v++)
              f[v - 1] = arguments[v];
            return h = t.call.apply(t, [this].concat(f)) || this, h.data = void 0, h.data = n, h;
          }
          return r;
        }(w(Error));
      }, "./src/loader/fragment.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "ElementaryStreamTypes", function() {
          return E;
        }), e.d(T, "BaseSegment", function() {
          return S;
        }), e.d(T, "Fragment", function() {
          return d;
        }), e.d(T, "Part", function() {
          return t;
        });
        var R = e("./src/polyfills/number.ts"), m = e("./node_modules/url-toolkit/src/url-toolkit.js"), y = e.n(m), w = e("./src/utils/logger.ts"), A = e("./src/loader/level-key.ts"), L = e("./src/loader/load-stats.ts");
        function b(r, n) {
          r.prototype = Object.create(n.prototype), r.prototype.constructor = r, u(r, n);
        }
        function u(r, n) {
          return u = Object.setPrototypeOf || function(h, a) {
            return h.__proto__ = a, h;
          }, u(r, n);
        }
        function g(r, n) {
          for (var h = 0; h < n.length; h++) {
            var a = n[h];
            a.enumerable = a.enumerable || false, a.configurable = true, "value" in a && (a.writable = true), Object.defineProperty(r, a.key, a);
          }
        }
        function D(r, n, h) {
          return n && g(r.prototype, n), h && g(r, h), r;
        }
        var E;
        (function(r) {
          r.AUDIO = "audio", r.VIDEO = "video", r.AUDIOVIDEO = "audiovideo";
        })(E || (E = {}));
        var S = function() {
          function r(h) {
            var a;
            this._byteRange = null, this._url = null, this.baseurl = void 0, this.relurl = void 0, this.elementaryStreams = (a = {}, a[E.AUDIO] = null, a[E.VIDEO] = null, a[E.AUDIOVIDEO] = null, a), this.baseurl = h;
          }
          var n = r.prototype;
          return n.setByteRange = function(h, a) {
            var f = h.split("@", 2), v = [];
            f.length === 1 ? v[0] = a ? a.byteRangeEndOffset : 0 : v[0] = parseInt(f[1]), v[1] = parseInt(f[0]) + v[0], this._byteRange = v;
          }, D(r, [{ key: "byteRange", get: function() {
            return this._byteRange ? this._byteRange : [];
          } }, { key: "byteRangeStartOffset", get: function() {
            return this.byteRange[0];
          } }, { key: "byteRangeEndOffset", get: function() {
            return this.byteRange[1];
          } }, { key: "url", get: function() {
            return !this._url && this.baseurl && this.relurl && (this._url = Object(m.buildAbsoluteURL)(this.baseurl, this.relurl, { alwaysNormalize: true })), this._url || "";
          }, set: function(h) {
            this._url = h;
          } }]), r;
        }(), d = function(r) {
          b(n, r);
          function n(a, f) {
            var v;
            return v = r.call(this, f) || this, v._decryptdata = null, v.rawProgramDateTime = null, v.programDateTime = null, v.tagList = [], v.duration = 0, v.sn = 0, v.levelkey = void 0, v.type = void 0, v.loader = null, v.level = -1, v.cc = 0, v.startPTS = void 0, v.endPTS = void 0, v.appendedPTS = void 0, v.startDTS = void 0, v.endDTS = void 0, v.start = 0, v.deltaPTS = void 0, v.maxStartPTS = void 0, v.minEndPTS = void 0, v.stats = new L.LoadStats(), v.urlId = 0, v.data = void 0, v.bitrateTest = false, v.title = null, v.initSegment = null, v.type = a, v;
          }
          var h = n.prototype;
          return h.createInitializationVector = function(a) {
            for (var f = new Uint8Array(16), v = 12; v < 16; v++)
              f[v] = a >> 8 * (15 - v) & 255;
            return f;
          }, h.setDecryptDataFromLevelKey = function(a, f) {
            var v = a;
            return (a == null ? void 0 : a.method) === "AES-128" && a.uri && !a.iv && (v = A.LevelKey.fromURI(a.uri), v.method = a.method, v.iv = this.createInitializationVector(f), v.keyFormat = "identity"), v;
          }, h.setElementaryStreamInfo = function(a, f, v, _, p, o) {
            o === void 0 && (o = false);
            var s = this.elementaryStreams, i = s[a];
            if (!i) {
              s[a] = { startPTS: f, endPTS: v, startDTS: _, endDTS: p, partial: o };
              return;
            }
            i.startPTS = Math.min(i.startPTS, f), i.endPTS = Math.max(i.endPTS, v), i.startDTS = Math.min(i.startDTS, _), i.endDTS = Math.max(i.endDTS, p);
          }, h.clearElementaryStreamInfo = function() {
            var a = this.elementaryStreams;
            a[E.AUDIO] = null, a[E.VIDEO] = null, a[E.AUDIOVIDEO] = null;
          }, D(n, [{ key: "decryptdata", get: function() {
            if (!this.levelkey && !this._decryptdata)
              return null;
            if (!this._decryptdata && this.levelkey) {
              var a = this.sn;
              typeof a != "number" && (this.levelkey && this.levelkey.method === "AES-128" && !this.levelkey.iv && w.logger.warn('missing IV for initialization segment with method="' + this.levelkey.method + '" - compliance issue'), a = 0), this._decryptdata = this.setDecryptDataFromLevelKey(this.levelkey, a);
            }
            return this._decryptdata;
          } }, { key: "end", get: function() {
            return this.start + this.duration;
          } }, { key: "endProgramDateTime", get: function() {
            if (this.programDateTime === null || !Object(R.isFiniteNumber)(this.programDateTime))
              return null;
            var a = Object(R.isFiniteNumber)(this.duration) ? this.duration : 0;
            return this.programDateTime + a * 1e3;
          } }, { key: "encrypted", get: function() {
            var a;
            return !!((a = this.decryptdata) !== null && a !== void 0 && a.keyFormat && this.decryptdata.uri);
          } }]), n;
        }(S), t = function(r) {
          b(n, r);
          function n(h, a, f, v, _) {
            var p;
            p = r.call(this, f) || this, p.fragOffset = 0, p.duration = 0, p.gap = false, p.independent = false, p.relurl = void 0, p.fragment = void 0, p.index = void 0, p.stats = new L.LoadStats(), p.duration = h.decimalFloatingPoint("DURATION"), p.gap = h.bool("GAP"), p.independent = h.bool("INDEPENDENT"), p.relurl = h.enumeratedString("URI"), p.fragment = a, p.index = v;
            var o = h.enumeratedString("BYTERANGE");
            return o && p.setByteRange(o, _), _ && (p.fragOffset = _.fragOffset + _.duration), p;
          }
          return D(n, [{ key: "start", get: function() {
            return this.fragment.start + this.fragOffset;
          } }, { key: "end", get: function() {
            return this.start + this.duration;
          } }, { key: "loaded", get: function() {
            var h = this.elementaryStreams;
            return !!(h.audio || h.video || h.audiovideo);
          } }]), n;
        }(S);
      }, "./src/loader/key-loader.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "default", function() {
          return w;
        });
        var R = e("./src/events.ts"), m = e("./src/errors.ts"), y = e("./src/utils/logger.ts"), w = function() {
          function A(b) {
            this.hls = void 0, this.loaders = {}, this.decryptkey = null, this.decrypturl = null, this.hls = b, this._registerListeners();
          }
          var L = A.prototype;
          return L._registerListeners = function() {
            this.hls.on(R.Events.KEY_LOADING, this.onKeyLoading, this);
          }, L._unregisterListeners = function() {
            this.hls.off(R.Events.KEY_LOADING, this.onKeyLoading);
          }, L.destroy = function() {
            this._unregisterListeners();
            for (var b in this.loaders) {
              var u = this.loaders[b];
              u && u.destroy();
            }
            this.loaders = {};
          }, L.onKeyLoading = function(b, u) {
            var g = u.frag, D = g.type, E = this.loaders[D];
            if (!g.decryptdata) {
              y.logger.warn("Missing decryption data on fragment in onKeyLoading");
              return;
            }
            var S = g.decryptdata.uri;
            if (S !== this.decrypturl || this.decryptkey === null) {
              var d = this.hls.config;
              if (E && (y.logger.warn("abort previous key loader for type:" + D), E.abort()), !S) {
                y.logger.warn("key uri is falsy");
                return;
              }
              var t = d.loader, r = g.loader = this.loaders[D] = new t(d);
              this.decrypturl = S, this.decryptkey = null;
              var n = { url: S, frag: g, responseType: "arraybuffer" }, h = { timeout: d.fragLoadingTimeOut, maxRetry: 0, retryDelay: d.fragLoadingRetryDelay, maxRetryDelay: d.fragLoadingMaxRetryTimeout, highWaterMark: 0 }, a = { onSuccess: this.loadsuccess.bind(this), onError: this.loaderror.bind(this), onTimeout: this.loadtimeout.bind(this) };
              r.load(n, h, a);
            } else
              this.decryptkey && (g.decryptdata.key = this.decryptkey, this.hls.trigger(R.Events.KEY_LOADED, { frag: g }));
          }, L.loadsuccess = function(b, u, g) {
            var D = g.frag;
            if (!D.decryptdata) {
              y.logger.error("after key load, decryptdata unset");
              return;
            }
            this.decryptkey = D.decryptdata.key = new Uint8Array(b.data), D.loader = null, delete this.loaders[D.type], this.hls.trigger(R.Events.KEY_LOADED, { frag: D });
          }, L.loaderror = function(b, u) {
            var g = u.frag, D = g.loader;
            D && D.abort(), delete this.loaders[g.type], this.hls.trigger(R.Events.ERROR, { type: m.ErrorTypes.NETWORK_ERROR, details: m.ErrorDetails.KEY_LOAD_ERROR, fatal: false, frag: g, response: b });
          }, L.loadtimeout = function(b, u) {
            var g = u.frag, D = g.loader;
            D && D.abort(), delete this.loaders[g.type], this.hls.trigger(R.Events.ERROR, { type: m.ErrorTypes.NETWORK_ERROR, details: m.ErrorDetails.KEY_LOAD_TIMEOUT, fatal: false, frag: g });
          }, A;
        }();
      }, "./src/loader/level-details.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "LevelDetails", function() {
          return A;
        });
        var R = e("./src/polyfills/number.ts");
        function m(L, b) {
          for (var u = 0; u < b.length; u++) {
            var g = b[u];
            g.enumerable = g.enumerable || false, g.configurable = true, "value" in g && (g.writable = true), Object.defineProperty(L, g.key, g);
          }
        }
        function y(L, b, u) {
          return b && m(L.prototype, b), u && m(L, u), L;
        }
        var w = 10, A = function() {
          function L(u) {
            this.PTSKnown = false, this.alignedSliding = false, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.live = true, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = true, this.advanced = true, this.availabilityDelay = void 0, this.misses = 0, this.needSidxRanges = false, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.m3u8 = "", this.version = null, this.canBlockReload = false, this.canSkipUntil = 0, this.canSkipDateRanges = false, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.fragments = [], this.url = u;
          }
          var b = L.prototype;
          return b.reloaded = function(u) {
            if (!u) {
              this.advanced = true, this.updated = true;
              return;
            }
            var g = this.lastPartSn - u.lastPartSn, D = this.lastPartIndex - u.lastPartIndex;
            this.updated = this.endSN !== u.endSN || !!D || !!g, this.advanced = this.endSN > u.endSN || g > 0 || g === 0 && D > 0, this.updated || this.advanced ? this.misses = Math.floor(u.misses * 0.6) : this.misses = u.misses + 1, this.availabilityDelay = u.availabilityDelay;
          }, y(L, [{ key: "hasProgramDateTime", get: function() {
            return this.fragments.length ? Object(R.isFiniteNumber)(this.fragments[this.fragments.length - 1].programDateTime) : false;
          } }, { key: "levelTargetDuration", get: function() {
            return this.averagetargetduration || this.targetduration || w;
          } }, { key: "drift", get: function() {
            var u = this.driftEndTime - this.driftStartTime;
            if (u > 0) {
              var g = this.driftEnd - this.driftStart;
              return g * 1e3 / u;
            }
            return 1;
          } }, { key: "edge", get: function() {
            return this.partEnd || this.fragmentEnd;
          } }, { key: "partEnd", get: function() {
            var u;
            return (u = this.partList) !== null && u !== void 0 && u.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd;
          } }, { key: "fragmentEnd", get: function() {
            var u;
            return (u = this.fragments) !== null && u !== void 0 && u.length ? this.fragments[this.fragments.length - 1].end : 0;
          } }, { key: "age", get: function() {
            return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0;
          } }, { key: "lastPartIndex", get: function() {
            var u;
            return (u = this.partList) !== null && u !== void 0 && u.length ? this.partList[this.partList.length - 1].index : -1;
          } }, { key: "lastPartSn", get: function() {
            var u;
            return (u = this.partList) !== null && u !== void 0 && u.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN;
          } }]), L;
        }();
      }, "./src/loader/level-key.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "LevelKey", function() {
          return A;
        });
        var R = e("./node_modules/url-toolkit/src/url-toolkit.js"), m = e.n(R);
        function y(L, b) {
          for (var u = 0; u < b.length; u++) {
            var g = b[u];
            g.enumerable = g.enumerable || false, g.configurable = true, "value" in g && (g.writable = true), Object.defineProperty(L, g.key, g);
          }
        }
        function w(L, b, u) {
          return b && y(L.prototype, b), u && y(L, u), L;
        }
        var A = function() {
          L.fromURL = function(b, u) {
            return new L(b, u);
          }, L.fromURI = function(b) {
            return new L(b);
          };
          function L(b, u) {
            this._uri = null, this.method = null, this.keyFormat = null, this.keyFormatVersions = null, this.keyID = null, this.key = null, this.iv = null, u ? this._uri = Object(R.buildAbsoluteURL)(b, u, { alwaysNormalize: true }) : this._uri = b;
          }
          return w(L, [{ key: "uri", get: function() {
            return this._uri;
          } }]), L;
        }();
      }, "./src/loader/load-stats.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "LoadStats", function() {
          return R;
        });
        var R = function() {
          this.aborted = false, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = { start: 0, first: 0, end: 0 }, this.parsing = { start: 0, end: 0 }, this.buffering = { start: 0, first: 0, end: 0 };
        };
      }, "./src/loader/m3u8-parser.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "default", function() {
          return n;
        });
        var R = e("./src/polyfills/number.ts"), m = e("./node_modules/url-toolkit/src/url-toolkit.js"), y = e.n(m), w = e("./src/loader/fragment.ts"), A = e("./src/loader/level-details.ts"), L = e("./src/loader/level-key.ts"), b = e("./src/utils/attr-list.ts"), u = e("./src/utils/logger.ts"), g = e("./src/utils/codecs.ts"), D = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-SESSION-DATA:([^\r\n]*)[\r\n]+/g, E = /#EXT-X-MEDIA:(.*)/g, S = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /(?!#) *(\S[\S ]*)/.source, /#EXT-X-BYTERANGE:*(.+)/.source, /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /#.*/.source].join("|"), "g"), d = new RegExp([/#(EXTM3U)/.source, /#EXT-X-(PLAYLIST-TYPE):(.+)/.source, /#EXT-X-(MEDIA-SEQUENCE): *(\d+)/.source, /#EXT-X-(SKIP):(.+)/.source, /#EXT-X-(TARGETDURATION): *(\d+)/.source, /#EXT-X-(KEY):(.+)/.source, /#EXT-X-(START):(.+)/.source, /#EXT-X-(ENDLIST)/.source, /#EXT-X-(DISCONTINUITY-SEQ)UENCE: *(\d+)/.source, /#EXT-X-(DIS)CONTINUITY/.source, /#EXT-X-(VERSION):(\d+)/.source, /#EXT-X-(MAP):(.+)/.source, /#EXT-X-(SERVER-CONTROL):(.+)/.source, /#EXT-X-(PART-INF):(.+)/.source, /#EXT-X-(GAP)/.source, /#EXT-X-(BITRATE):\s*(\d+)/.source, /#EXT-X-(PART):(.+)/.source, /#EXT-X-(PRELOAD-HINT):(.+)/.source, /#EXT-X-(RENDITION-REPORT):(.+)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|")), t = /\.(mp4|m4s|m4v|m4a)$/i;
        function r(_) {
          var p, o;
          return t.test((p = (o = m.parseURL(_)) === null || o === void 0 ? void 0 : o.path) != null ? p : "");
        }
        var n = function() {
          function _() {
          }
          return _.findGroup = function(p, o) {
            for (var s = 0; s < p.length; s++) {
              var i = p[s];
              if (i.id === o)
                return i;
            }
          }, _.convertAVC1ToAVCOTI = function(p) {
            var o = p.split(".");
            if (o.length > 2) {
              var s = o.shift() + ".";
              return s += parseInt(o.shift()).toString(16), s += ("000" + parseInt(o.shift()).toString(16)).substr(-4), s;
            }
            return p;
          }, _.resolve = function(p, o) {
            return m.buildAbsoluteURL(o, p, { alwaysNormalize: true });
          }, _.parseMasterPlaylist = function(p, o) {
            var s = [], i = {}, c = false;
            D.lastIndex = 0;
            for (var l; (l = D.exec(p)) != null; )
              if (l[1]) {
                var k = new b.AttrList(l[1]), I = { attrs: k, bitrate: k.decimalInteger("AVERAGE-BANDWIDTH") || k.decimalInteger("BANDWIDTH"), name: k.NAME, url: _.resolve(l[2], o) }, C = k.decimalResolution("RESOLUTION");
                C && (I.width = C.width, I.height = C.height), h((k.CODECS || "").split(/[ ,]+/).filter(function(N) {
                  return N;
                }), I), I.videoCodec && I.videoCodec.indexOf("avc1") !== -1 && (I.videoCodec = _.convertAVC1ToAVCOTI(I.videoCodec)), s.push(I);
              } else if (l[3]) {
                var P = new b.AttrList(l[3]);
                P["DATA-ID"] && (c = true, i[P["DATA-ID"]] = P);
              }
            return { levels: s, sessionData: c ? i : null };
          }, _.parseMasterPlaylistMedia = function(p, o, s, i) {
            i === void 0 && (i = []);
            var c, l = [], k = 0;
            for (E.lastIndex = 0; (c = E.exec(p)) !== null; ) {
              var I = new b.AttrList(c[1]);
              if (I.TYPE === s) {
                var C = { attrs: I, bitrate: 0, id: k++, groupId: I["GROUP-ID"], instreamId: I["INSTREAM-ID"], name: I.NAME || I.LANGUAGE || "", type: s, default: I.bool("DEFAULT"), autoselect: I.bool("AUTOSELECT"), forced: I.bool("FORCED"), lang: I.LANGUAGE, url: I.URI ? _.resolve(I.URI, o) : "" };
                if (i.length) {
                  var P = _.findGroup(i, C.groupId) || i[0];
                  a(C, P, "audioCodec"), a(C, P, "textCodec");
                }
                l.push(C);
              }
            }
            return l;
          }, _.parseLevelPlaylist = function(p, o, s, i, c) {
            var l = new A.LevelDetails(o), k = l.fragments, I = null, C = 0, P = 0, N = 0, B = 0, F = null, U = new w.Fragment(i, o), j, H, V, K = -1, q = false;
            for (S.lastIndex = 0, l.m3u8 = p; (j = S.exec(p)) !== null; ) {
              q && (q = false, U = new w.Fragment(i, o), U.start = N, U.sn = C, U.cc = B, U.level = s, I && (U.initSegment = I, U.rawProgramDateTime = I.rawProgramDateTime));
              var $ = j[1];
              if ($) {
                U.duration = parseFloat($);
                var J = (" " + j[2]).slice(1);
                U.title = J || null, U.tagList.push(J ? ["INF", $, J] : ["INF", $]);
              } else if (j[3])
                Object(R.isFiniteNumber)(U.duration) && (U.start = N, V && (U.levelkey = V), U.sn = C, U.level = s, U.cc = B, U.urlId = c, k.push(U), U.relurl = (" " + j[3]).slice(1), v(U, F), F = U, N += U.duration, C++, P = 0, q = true);
              else if (j[4]) {
                var z = (" " + j[4]).slice(1);
                F ? U.setByteRange(z, F) : U.setByteRange(z);
              } else if (j[5])
                U.rawProgramDateTime = (" " + j[5]).slice(1), U.tagList.push(["PROGRAM-DATE-TIME", U.rawProgramDateTime]), K === -1 && (K = k.length);
              else {
                if (j = j[0].match(d), !j) {
                  u.logger.warn("No matches on slow regex match for level playlist!");
                  continue;
                }
                for (H = 1; H < j.length && typeof j[H] == "undefined"; H++)
                  ;
                var tt = (" " + j[H]).slice(1), et = (" " + j[H + 1]).slice(1), at = j[H + 2] ? (" " + j[H + 2]).slice(1) : "";
                switch (tt) {
                  case "PLAYLIST-TYPE":
                    l.type = et.toUpperCase();
                    break;
                  case "MEDIA-SEQUENCE":
                    C = l.startSN = parseInt(et);
                    break;
                  case "SKIP": {
                    var pt = new b.AttrList(et), ot = pt.decimalInteger("SKIPPED-SEGMENTS");
                    if (Object(R.isFiniteNumber)(ot)) {
                      l.skippedSegments = ot;
                      for (var nt = ot; nt--; )
                        k.unshift(null);
                      C += ot;
                    }
                    var X = pt.enumeratedString("RECENTLY-REMOVED-DATERANGES");
                    X && (l.recentlyRemovedDateranges = X.split("	"));
                    break;
                  }
                  case "TARGETDURATION":
                    l.targetduration = parseFloat(et);
                    break;
                  case "VERSION":
                    l.version = parseInt(et);
                    break;
                  case "EXTM3U":
                    break;
                  case "ENDLIST":
                    l.live = false;
                    break;
                  case "#":
                    (et || at) && U.tagList.push(at ? [et, at] : [et]);
                    break;
                  case "DIS":
                    B++;
                  case "GAP":
                    U.tagList.push([tt]);
                    break;
                  case "BITRATE":
                    U.tagList.push([tt, et]);
                    break;
                  case "DISCONTINUITY-SEQ":
                    B = parseInt(et);
                    break;
                  case "KEY": {
                    var Z, Q = new b.AttrList(et), ut = Q.enumeratedString("METHOD"), ft = Q.URI, mt = Q.hexadecimalInteger("IV"), Et = Q.enumeratedString("KEYFORMATVERSIONS"), ct = Q.enumeratedString("KEYID"), vt = (Z = Q.enumeratedString("KEYFORMAT")) != null ? Z : "identity", lt = ["com.apple.streamingkeydelivery", "com.microsoft.playready", "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed", "com.widevine"];
                    if (lt.indexOf(vt) > -1) {
                      u.logger.warn("Keyformat " + vt + " is not supported from the manifest");
                      continue;
                    } else if (vt !== "identity")
                      continue;
                    ut && (V = L.LevelKey.fromURL(o, ft), ft && ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(ut) >= 0 && (V.method = ut, V.keyFormat = vt, ct && (V.keyID = ct), Et && (V.keyFormatVersions = Et), V.iv = mt));
                    break;
                  }
                  case "START": {
                    var dt = new b.AttrList(et), Lt = dt.decimalFloatingPoint("TIME-OFFSET");
                    Object(R.isFiniteNumber)(Lt) && (l.startTimeOffset = Lt);
                    break;
                  }
                  case "MAP": {
                    var Mt = new b.AttrList(et);
                    U.relurl = Mt.URI, Mt.BYTERANGE && U.setByteRange(Mt.BYTERANGE), U.level = s, U.sn = "initSegment", V && (U.levelkey = V), U.initSegment = null, I = U, q = true;
                    break;
                  }
                  case "SERVER-CONTROL": {
                    var At = new b.AttrList(et);
                    l.canBlockReload = At.bool("CAN-BLOCK-RELOAD"), l.canSkipUntil = At.optionalFloat("CAN-SKIP-UNTIL", 0), l.canSkipDateRanges = l.canSkipUntil > 0 && At.bool("CAN-SKIP-DATERANGES"), l.partHoldBack = At.optionalFloat("PART-HOLD-BACK", 0), l.holdBack = At.optionalFloat("HOLD-BACK", 0);
                    break;
                  }
                  case "PART-INF": {
                    var Ut = new b.AttrList(et);
                    l.partTarget = Ut.decimalFloatingPoint("PART-TARGET");
                    break;
                  }
                  case "PART": {
                    var bt = l.partList;
                    bt || (bt = l.partList = []);
                    var kt = P > 0 ? bt[bt.length - 1] : void 0, Gt = P++, xt = new w.Part(new b.AttrList(et), U, o, Gt, kt);
                    bt.push(xt), U.duration += xt.duration;
                    break;
                  }
                  case "PRELOAD-HINT": {
                    var Ot = new b.AttrList(et);
                    l.preloadHint = Ot;
                    break;
                  }
                  case "RENDITION-REPORT": {
                    var zt = new b.AttrList(et);
                    l.renditionReports = l.renditionReports || [], l.renditionReports.push(zt);
                    break;
                  }
                  default:
                    u.logger.warn("line parsed but not handled: " + j);
                    break;
                }
              }
            }
            F && !F.relurl ? (k.pop(), N -= F.duration, l.partList && (l.fragmentHint = F)) : l.partList && (v(U, F), U.cc = B, l.fragmentHint = U);
            var Pt = k.length, Rt = k[0], Bt = k[Pt - 1];
            if (N += l.skippedSegments * l.targetduration, N > 0 && Pt && Bt) {
              l.averagetargetduration = N / Pt;
              var Qt = Bt.sn;
              l.endSN = Qt !== "initSegment" ? Qt : 0, Rt && (l.startCC = Rt.cc, Rt.initSegment || l.fragments.every(function(jt) {
                return jt.relurl && r(jt.relurl);
              }) && (u.logger.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"), U = new w.Fragment(i, o), U.relurl = Bt.relurl, U.level = s, U.sn = "initSegment", Rt.initSegment = U, l.needSidxRanges = true));
            } else
              l.endSN = 0, l.startCC = 0;
            return l.fragmentHint && (N += l.fragmentHint.duration), l.totalduration = N, l.endCC = B, K > 0 && f(k, K), l;
          }, _;
        }();
        function h(_, p) {
          ["video", "audio", "text"].forEach(function(o) {
            var s = _.filter(function(c) {
              return Object(g.isCodecType)(c, o);
            });
            if (s.length) {
              var i = s.filter(function(c) {
                return c.lastIndexOf("avc1", 0) === 0 || c.lastIndexOf("mp4a", 0) === 0;
              });
              p[o + "Codec"] = i.length > 0 ? i[0] : s[0], _ = _.filter(function(c) {
                return s.indexOf(c) === -1;
              });
            }
          }), p.unknownCodecs = _;
        }
        function a(_, p, o) {
          var s = p[o];
          s && (_[o] = s);
        }
        function f(_, p) {
          for (var o = _[p], s = p; s--; ) {
            var i = _[s];
            if (!i)
              return;
            i.programDateTime = o.programDateTime - i.duration * 1e3, o = i;
          }
        }
        function v(_, p) {
          _.rawProgramDateTime ? _.programDateTime = Date.parse(_.rawProgramDateTime) : p != null && p.programDateTime && (_.programDateTime = p.endProgramDateTime), Object(R.isFiniteNumber)(_.programDateTime) || (_.programDateTime = null, _.rawProgramDateTime = null);
        }
      }, "./src/loader/playlist-loader.ts": function(x, T, e) {
        "use strict";
        e.r(T);
        var R = e("./src/polyfills/number.ts"), m = e("./src/events.ts"), y = e("./src/errors.ts"), w = e("./src/utils/logger.ts"), A = e("./src/utils/mp4-tools.ts"), L = e("./src/loader/m3u8-parser.ts"), b = e("./src/types/loader.ts"), u = e("./src/utils/attr-list.ts");
        function g(S) {
          var d = S.type;
          switch (d) {
            case b.PlaylistContextType.AUDIO_TRACK:
              return b.PlaylistLevelType.AUDIO;
            case b.PlaylistContextType.SUBTITLE_TRACK:
              return b.PlaylistLevelType.SUBTITLE;
            default:
              return b.PlaylistLevelType.MAIN;
          }
        }
        function D(S, d) {
          var t = S.url;
          return (t === void 0 || t.indexOf("data:") === 0) && (t = d.url), t;
        }
        var E = function() {
          function S(t) {
            this.hls = void 0, this.loaders = Object.create(null), this.hls = t, this.registerListeners();
          }
          var d = S.prototype;
          return d.registerListeners = function() {
            var t = this.hls;
            t.on(m.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.on(m.Events.LEVEL_LOADING, this.onLevelLoading, this), t.on(m.Events.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), t.on(m.Events.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
          }, d.unregisterListeners = function() {
            var t = this.hls;
            t.off(m.Events.MANIFEST_LOADING, this.onManifestLoading, this), t.off(m.Events.LEVEL_LOADING, this.onLevelLoading, this), t.off(m.Events.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), t.off(m.Events.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
          }, d.createInternalLoader = function(t) {
            var r = this.hls.config, n = r.pLoader, h = r.loader, a = n || h, f = new a(r);
            return t.loader = f, this.loaders[t.type] = f, f;
          }, d.getInternalLoader = function(t) {
            return this.loaders[t.type];
          }, d.resetInternalLoader = function(t) {
            this.loaders[t] && delete this.loaders[t];
          }, d.destroyInternalLoaders = function() {
            for (var t in this.loaders) {
              var r = this.loaders[t];
              r && r.destroy(), this.resetInternalLoader(t);
            }
          }, d.destroy = function() {
            this.unregisterListeners(), this.destroyInternalLoaders();
          }, d.onManifestLoading = function(t, r) {
            var n = r.url;
            this.load({ id: null, groupId: null, level: 0, responseType: "text", type: b.PlaylistContextType.MANIFEST, url: n, deliveryDirectives: null });
          }, d.onLevelLoading = function(t, r) {
            var n = r.id, h = r.level, a = r.url, f = r.deliveryDirectives;
            this.load({ id: n, groupId: null, level: h, responseType: "text", type: b.PlaylistContextType.LEVEL, url: a, deliveryDirectives: f });
          }, d.onAudioTrackLoading = function(t, r) {
            var n = r.id, h = r.groupId, a = r.url, f = r.deliveryDirectives;
            this.load({ id: n, groupId: h, level: null, responseType: "text", type: b.PlaylistContextType.AUDIO_TRACK, url: a, deliveryDirectives: f });
          }, d.onSubtitleTrackLoading = function(t, r) {
            var n = r.id, h = r.groupId, a = r.url, f = r.deliveryDirectives;
            this.load({ id: n, groupId: h, level: null, responseType: "text", type: b.PlaylistContextType.SUBTITLE_TRACK, url: a, deliveryDirectives: f });
          }, d.load = function(t) {
            var r, n = this.hls.config, h = this.getInternalLoader(t);
            if (h) {
              var a = h.context;
              if (a && a.url === t.url) {
                w.logger.trace("[playlist-loader]: playlist request ongoing");
                return;
              }
              w.logger.log("[playlist-loader]: aborting previous loader for type: " + t.type), h.abort();
            }
            var f, v, _, p;
            switch (t.type) {
              case b.PlaylistContextType.MANIFEST:
                f = n.manifestLoadingMaxRetry, v = n.manifestLoadingTimeOut, _ = n.manifestLoadingRetryDelay, p = n.manifestLoadingMaxRetryTimeout;
                break;
              case b.PlaylistContextType.LEVEL:
              case b.PlaylistContextType.AUDIO_TRACK:
              case b.PlaylistContextType.SUBTITLE_TRACK:
                f = 0, v = n.levelLoadingTimeOut;
                break;
              default:
                f = n.levelLoadingMaxRetry, v = n.levelLoadingTimeOut, _ = n.levelLoadingRetryDelay, p = n.levelLoadingMaxRetryTimeout;
                break;
            }
            if (h = this.createInternalLoader(t), (r = t.deliveryDirectives) !== null && r !== void 0 && r.part) {
              var o;
              if (t.type === b.PlaylistContextType.LEVEL && t.level !== null ? o = this.hls.levels[t.level].details : t.type === b.PlaylistContextType.AUDIO_TRACK && t.id !== null ? o = this.hls.audioTracks[t.id].details : t.type === b.PlaylistContextType.SUBTITLE_TRACK && t.id !== null && (o = this.hls.subtitleTracks[t.id].details), o) {
                var s = o.partTarget, i = o.targetduration;
                s && i && (v = Math.min(Math.max(s * 3, i * 0.8) * 1e3, v));
              }
            }
            var c = { timeout: v, maxRetry: f, retryDelay: _, maxRetryDelay: p, highWaterMark: 0 }, l = { onSuccess: this.loadsuccess.bind(this), onError: this.loaderror.bind(this), onTimeout: this.loadtimeout.bind(this) };
            h.load(t, c, l);
          }, d.loadsuccess = function(t, r, n, h) {
            if (h === void 0 && (h = null), n.isSidxRequest) {
              this.handleSidxRequest(t, n), this.handlePlaylistLoaded(t, r, n, h);
              return;
            }
            this.resetInternalLoader(n.type);
            var a = t.data;
            if (a.indexOf("#EXTM3U") !== 0) {
              this.handleManifestParsingError(t, n, "no EXTM3U delimiter", h);
              return;
            }
            r.parsing.start = performance.now(), a.indexOf("#EXTINF:") > 0 || a.indexOf("#EXT-X-TARGETDURATION:") > 0 ? this.handleTrackOrLevelPlaylist(t, r, n, h) : this.handleMasterPlaylist(t, r, n, h);
          }, d.loaderror = function(t, r, n) {
            n === void 0 && (n = null), this.handleNetworkError(r, n, false, t);
          }, d.loadtimeout = function(t, r, n) {
            n === void 0 && (n = null), this.handleNetworkError(r, n, true);
          }, d.handleMasterPlaylist = function(t, r, n, h) {
            var a = this.hls, f = t.data, v = D(t, n), _ = L.default.parseMasterPlaylist(f, v), p = _.levels, o = _.sessionData;
            if (!p.length) {
              this.handleManifestParsingError(t, n, "no level found in manifest", h);
              return;
            }
            var s = p.map(function(C) {
              return { id: C.attrs.AUDIO, audioCodec: C.audioCodec };
            }), i = p.map(function(C) {
              return { id: C.attrs.SUBTITLES, textCodec: C.textCodec };
            }), c = L.default.parseMasterPlaylistMedia(f, v, "AUDIO", s), l = L.default.parseMasterPlaylistMedia(f, v, "SUBTITLES", i), k = L.default.parseMasterPlaylistMedia(f, v, "CLOSED-CAPTIONS");
            if (c.length) {
              var I = c.some(function(C) {
                return !C.url;
              });
              !I && p[0].audioCodec && !p[0].attrs.AUDIO && (w.logger.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), c.unshift({ type: "main", name: "main", default: false, autoselect: false, forced: false, id: -1, attrs: new u.AttrList({}), bitrate: 0, url: "" }));
            }
            a.trigger(m.Events.MANIFEST_LOADED, { levels: p, audioTracks: c, subtitles: l, captions: k, url: v, stats: r, networkDetails: h, sessionData: o });
          }, d.handleTrackOrLevelPlaylist = function(t, r, n, h) {
            var a = this.hls, f = n.id, v = n.level, _ = n.type, p = D(t, n), o = Object(R.isFiniteNumber)(f) ? f : 0, s = Object(R.isFiniteNumber)(v) ? v : o, i = g(n), c = L.default.parseLevelPlaylist(t.data, p, s, i, o);
            if (!c.fragments.length) {
              a.trigger(m.Events.ERROR, { type: y.ErrorTypes.NETWORK_ERROR, details: y.ErrorDetails.LEVEL_EMPTY_ERROR, fatal: false, url: p, reason: "no fragments found in level", level: typeof n.level == "number" ? n.level : void 0 });
              return;
            }
            if (_ === b.PlaylistContextType.MANIFEST) {
              var l = { attrs: new u.AttrList({}), bitrate: 0, details: c, name: "", url: p };
              a.trigger(m.Events.MANIFEST_LOADED, { levels: [l], audioTracks: [], url: p, stats: r, networkDetails: h, sessionData: null });
            }
            if (r.parsing.end = performance.now(), c.needSidxRanges) {
              var k, I = (k = c.fragments[0].initSegment) === null || k === void 0 ? void 0 : k.url;
              this.load({ url: I, isSidxRequest: true, type: _, level: v, levelDetails: c, id: f, groupId: null, rangeStart: 0, rangeEnd: 2048, responseType: "arraybuffer", deliveryDirectives: null });
              return;
            }
            n.levelDetails = c, this.handlePlaylistLoaded(t, r, n, h);
          }, d.handleSidxRequest = function(t, r) {
            var n = Object(A.parseSegmentIndex)(new Uint8Array(t.data));
            if (n) {
              var h = n.references, a = r.levelDetails;
              h.forEach(function(f, v) {
                var _ = f.info, p = a.fragments[v];
                p.byteRange.length === 0 && p.setByteRange(String(1 + _.end - _.start) + "@" + String(_.start)), p.initSegment && p.initSegment.setByteRange(String(n.moovEndOffset) + "@0");
              });
            }
          }, d.handleManifestParsingError = function(t, r, n, h) {
            this.hls.trigger(m.Events.ERROR, { type: y.ErrorTypes.NETWORK_ERROR, details: y.ErrorDetails.MANIFEST_PARSING_ERROR, fatal: r.type === b.PlaylistContextType.MANIFEST, url: t.url, reason: n, response: t, context: r, networkDetails: h });
          }, d.handleNetworkError = function(t, r, n, h) {
            n === void 0 && (n = false), w.logger.warn("[playlist-loader]: A network " + (n ? "timeout" : "error") + " occurred while loading " + t.type + " level: " + t.level + " id: " + t.id + ' group-id: "' + t.groupId + '"');
            var a = y.ErrorDetails.UNKNOWN, f = false, v = this.getInternalLoader(t);
            switch (t.type) {
              case b.PlaylistContextType.MANIFEST:
                a = n ? y.ErrorDetails.MANIFEST_LOAD_TIMEOUT : y.ErrorDetails.MANIFEST_LOAD_ERROR, f = true;
                break;
              case b.PlaylistContextType.LEVEL:
                a = n ? y.ErrorDetails.LEVEL_LOAD_TIMEOUT : y.ErrorDetails.LEVEL_LOAD_ERROR, f = false;
                break;
              case b.PlaylistContextType.AUDIO_TRACK:
                a = n ? y.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT : y.ErrorDetails.AUDIO_TRACK_LOAD_ERROR, f = false;
                break;
              case b.PlaylistContextType.SUBTITLE_TRACK:
                a = n ? y.ErrorDetails.SUBTITLE_TRACK_LOAD_TIMEOUT : y.ErrorDetails.SUBTITLE_LOAD_ERROR, f = false;
                break;
            }
            v && this.resetInternalLoader(t.type);
            var _ = { type: y.ErrorTypes.NETWORK_ERROR, details: a, fatal: f, url: t.url, loader: v, context: t, networkDetails: r };
            h && (_.response = h), this.hls.trigger(m.Events.ERROR, _);
          }, d.handlePlaylistLoaded = function(t, r, n, h) {
            var a = n.type, f = n.level, v = n.id, _ = n.groupId, p = n.loader, o = n.levelDetails, s = n.deliveryDirectives;
            if (!(o != null && o.targetduration)) {
              this.handleManifestParsingError(t, n, "invalid target duration", h);
              return;
            }
            if (p)
              switch (o.live && (p.getCacheAge && (o.ageHeader = p.getCacheAge() || 0), (!p.getCacheAge || isNaN(o.ageHeader)) && (o.ageHeader = 0)), a) {
                case b.PlaylistContextType.MANIFEST:
                case b.PlaylistContextType.LEVEL:
                  this.hls.trigger(m.Events.LEVEL_LOADED, { details: o, level: f || 0, id: v || 0, stats: r, networkDetails: h, deliveryDirectives: s });
                  break;
                case b.PlaylistContextType.AUDIO_TRACK:
                  this.hls.trigger(m.Events.AUDIO_TRACK_LOADED, { details: o, id: v || 0, groupId: _ || "", stats: r, networkDetails: h, deliveryDirectives: s });
                  break;
                case b.PlaylistContextType.SUBTITLE_TRACK:
                  this.hls.trigger(m.Events.SUBTITLE_TRACK_LOADED, { details: o, id: v || 0, groupId: _ || "", stats: r, networkDetails: h, deliveryDirectives: s });
                  break;
              }
          }, S;
        }();
        T.default = E;
      }, "./src/polyfills/number.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "isFiniteNumber", function() {
          return R;
        }), e.d(T, "MAX_SAFE_INTEGER", function() {
          return m;
        });
        var R = Number.isFinite || function(y) {
          return typeof y == "number" && isFinite(y);
        }, m = Number.MAX_SAFE_INTEGER || 9007199254740991;
      }, "./src/remux/aac-helper.ts": function(x, T, e) {
        "use strict";
        e.r(T);
        var R = function() {
          function m() {
          }
          return m.getSilentFrame = function(y, w) {
            switch (y) {
              case "mp4a.40.2":
                if (w === 1)
                  return new Uint8Array([0, 200, 0, 128, 35, 128]);
                if (w === 2)
                  return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                if (w === 3)
                  return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                if (w === 4)
                  return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                if (w === 5)
                  return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                if (w === 6)
                  return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
                break;
              default:
                if (w === 1)
                  return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                if (w === 2)
                  return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                if (w === 3)
                  return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                break;
            }
          }, m;
        }();
        T.default = R;
      }, "./src/remux/mp4-generator.ts": function(x, T, e) {
        "use strict";
        e.r(T);
        var R = Math.pow(2, 32) - 1, m = function() {
          function y() {
          }
          return y.init = function() {
            y.types = { avc1: [], avcC: [], btrt: [], dinf: [], dref: [], esds: [], ftyp: [], hdlr: [], mdat: [], mdhd: [], mdia: [], mfhd: [], minf: [], moof: [], moov: [], mp4a: [], ".mp3": [], mvex: [], mvhd: [], pasp: [], sdtp: [], stbl: [], stco: [], stsc: [], stsd: [], stsz: [], stts: [], tfdt: [], tfhd: [], traf: [], trak: [], trun: [], trex: [], tkhd: [], vmhd: [], smhd: [] };
            var w;
            for (w in y.types)
              y.types.hasOwnProperty(w) && (y.types[w] = [w.charCodeAt(0), w.charCodeAt(1), w.charCodeAt(2), w.charCodeAt(3)]);
            var A = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), L = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
            y.HDLR_TYPES = { video: A, audio: L };
            var b = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), u = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
            y.STTS = y.STSC = y.STCO = u, y.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), y.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), y.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), y.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
            var g = new Uint8Array([105, 115, 111, 109]), D = new Uint8Array([97, 118, 99, 49]), E = new Uint8Array([0, 0, 0, 1]);
            y.FTYP = y.box(y.types.ftyp, g, E, g, D), y.DINF = y.box(y.types.dinf, y.box(y.types.dref, b));
          }, y.box = function(w) {
            for (var A = 8, L = arguments.length, b = new Array(L > 1 ? L - 1 : 0), u = 1; u < L; u++)
              b[u - 1] = arguments[u];
            for (var g = b.length, D = g; g--; )
              A += b[g].byteLength;
            var E = new Uint8Array(A);
            for (E[0] = A >> 24 & 255, E[1] = A >> 16 & 255, E[2] = A >> 8 & 255, E[3] = A & 255, E.set(w, 4), g = 0, A = 8; g < D; g++)
              E.set(b[g], A), A += b[g].byteLength;
            return E;
          }, y.hdlr = function(w) {
            return y.box(y.types.hdlr, y.HDLR_TYPES[w]);
          }, y.mdat = function(w) {
            return y.box(y.types.mdat, w);
          }, y.mdhd = function(w, A) {
            A *= w;
            var L = Math.floor(A / (R + 1)), b = Math.floor(A % (R + 1));
            return y.box(y.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, w >> 24 & 255, w >> 16 & 255, w >> 8 & 255, w & 255, L >> 24, L >> 16 & 255, L >> 8 & 255, L & 255, b >> 24, b >> 16 & 255, b >> 8 & 255, b & 255, 85, 196, 0, 0]));
          }, y.mdia = function(w) {
            return y.box(y.types.mdia, y.mdhd(w.timescale, w.duration), y.hdlr(w.type), y.minf(w));
          }, y.mfhd = function(w) {
            return y.box(y.types.mfhd, new Uint8Array([0, 0, 0, 0, w >> 24, w >> 16 & 255, w >> 8 & 255, w & 255]));
          }, y.minf = function(w) {
            return w.type === "audio" ? y.box(y.types.minf, y.box(y.types.smhd, y.SMHD), y.DINF, y.stbl(w)) : y.box(y.types.minf, y.box(y.types.vmhd, y.VMHD), y.DINF, y.stbl(w));
          }, y.moof = function(w, A, L) {
            return y.box(y.types.moof, y.mfhd(w), y.traf(L, A));
          }, y.moov = function(w) {
            for (var A = w.length, L = []; A--; )
              L[A] = y.trak(w[A]);
            return y.box.apply(null, [y.types.moov, y.mvhd(w[0].timescale, w[0].duration)].concat(L).concat(y.mvex(w)));
          }, y.mvex = function(w) {
            for (var A = w.length, L = []; A--; )
              L[A] = y.trex(w[A]);
            return y.box.apply(null, [y.types.mvex].concat(L));
          }, y.mvhd = function(w, A) {
            A *= w;
            var L = Math.floor(A / (R + 1)), b = Math.floor(A % (R + 1)), u = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, w >> 24 & 255, w >> 16 & 255, w >> 8 & 255, w & 255, L >> 24, L >> 16 & 255, L >> 8 & 255, L & 255, b >> 24, b >> 16 & 255, b >> 8 & 255, b & 255, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
            return y.box(y.types.mvhd, u);
          }, y.sdtp = function(w) {
            var A = w.samples || [], L = new Uint8Array(4 + A.length), b, u;
            for (b = 0; b < A.length; b++)
              u = A[b].flags, L[b + 4] = u.dependsOn << 4 | u.isDependedOn << 2 | u.hasRedundancy;
            return y.box(y.types.sdtp, L);
          }, y.stbl = function(w) {
            return y.box(y.types.stbl, y.stsd(w), y.box(y.types.stts, y.STTS), y.box(y.types.stsc, y.STSC), y.box(y.types.stsz, y.STSZ), y.box(y.types.stco, y.STCO));
          }, y.avc1 = function(w) {
            var A = [], L = [], b, u, g;
            for (b = 0; b < w.sps.length; b++)
              u = w.sps[b], g = u.byteLength, A.push(g >>> 8 & 255), A.push(g & 255), A = A.concat(Array.prototype.slice.call(u));
            for (b = 0; b < w.pps.length; b++)
              u = w.pps[b], g = u.byteLength, L.push(g >>> 8 & 255), L.push(g & 255), L = L.concat(Array.prototype.slice.call(u));
            var D = y.box(y.types.avcC, new Uint8Array([1, A[3], A[4], A[5], 252 | 3, 224 | w.sps.length].concat(A).concat([w.pps.length]).concat(L))), E = w.width, S = w.height, d = w.pixelRatio[0], t = w.pixelRatio[1];
            return y.box(y.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, E >> 8 & 255, E & 255, S >> 8 & 255, S & 255, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), D, y.box(y.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), y.box(y.types.pasp, new Uint8Array([d >> 24, d >> 16 & 255, d >> 8 & 255, d & 255, t >> 24, t >> 16 & 255, t >> 8 & 255, t & 255])));
          }, y.esds = function(w) {
            var A = w.config.length;
            return new Uint8Array([0, 0, 0, 0, 3, 23 + A, 0, 1, 0, 4, 15 + A, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([A]).concat(w.config).concat([6, 1, 2]));
          }, y.mp4a = function(w) {
            var A = w.samplerate;
            return y.box(y.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, w.channelCount, 0, 16, 0, 0, 0, 0, A >> 8 & 255, A & 255, 0, 0]), y.box(y.types.esds, y.esds(w)));
          }, y.mp3 = function(w) {
            var A = w.samplerate;
            return y.box(y.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, w.channelCount, 0, 16, 0, 0, 0, 0, A >> 8 & 255, A & 255, 0, 0]));
          }, y.stsd = function(w) {
            return w.type === "audio" ? !w.isAAC && w.codec === "mp3" ? y.box(y.types.stsd, y.STSD, y.mp3(w)) : y.box(y.types.stsd, y.STSD, y.mp4a(w)) : y.box(y.types.stsd, y.STSD, y.avc1(w));
          }, y.tkhd = function(w) {
            var A = w.id, L = w.duration * w.timescale, b = w.width, u = w.height, g = Math.floor(L / (R + 1)), D = Math.floor(L % (R + 1));
            return y.box(y.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, A >> 24 & 255, A >> 16 & 255, A >> 8 & 255, A & 255, 0, 0, 0, 0, g >> 24, g >> 16 & 255, g >> 8 & 255, g & 255, D >> 24, D >> 16 & 255, D >> 8 & 255, D & 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, b >> 8 & 255, b & 255, 0, 0, u >> 8 & 255, u & 255, 0, 0]));
          }, y.traf = function(w, A) {
            var L = y.sdtp(w), b = w.id, u = Math.floor(A / (R + 1)), g = Math.floor(A % (R + 1));
            return y.box(y.types.traf, y.box(y.types.tfhd, new Uint8Array([0, 0, 0, 0, b >> 24, b >> 16 & 255, b >> 8 & 255, b & 255])), y.box(y.types.tfdt, new Uint8Array([1, 0, 0, 0, u >> 24, u >> 16 & 255, u >> 8 & 255, u & 255, g >> 24, g >> 16 & 255, g >> 8 & 255, g & 255])), y.trun(w, L.length + 16 + 20 + 8 + 16 + 8 + 8), L);
          }, y.trak = function(w) {
            return w.duration = w.duration || 4294967295, y.box(y.types.trak, y.tkhd(w), y.mdia(w));
          }, y.trex = function(w) {
            var A = w.id;
            return y.box(y.types.trex, new Uint8Array([0, 0, 0, 0, A >> 24, A >> 16 & 255, A >> 8 & 255, A & 255, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]));
          }, y.trun = function(w, A) {
            var L = w.samples || [], b = L.length, u = 12 + 16 * b, g = new Uint8Array(u), D, E, S, d, t, r;
            for (A += 8 + u, g.set([0, 0, 15, 1, b >>> 24 & 255, b >>> 16 & 255, b >>> 8 & 255, b & 255, A >>> 24 & 255, A >>> 16 & 255, A >>> 8 & 255, A & 255], 0), D = 0; D < b; D++)
              E = L[D], S = E.duration, d = E.size, t = E.flags, r = E.cts, g.set([S >>> 24 & 255, S >>> 16 & 255, S >>> 8 & 255, S & 255, d >>> 24 & 255, d >>> 16 & 255, d >>> 8 & 255, d & 255, t.isLeading << 2 | t.dependsOn, t.isDependedOn << 6 | t.hasRedundancy << 4 | t.paddingValue << 1 | t.isNonSync, t.degradPrio & 240 << 8, t.degradPrio & 15, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, r & 255], 12 + 16 * D);
            return y.box(y.types.trun, g);
          }, y.initSegment = function(w) {
            y.types || y.init();
            var A = y.moov(w), L = new Uint8Array(y.FTYP.byteLength + A.byteLength);
            return L.set(y.FTYP), L.set(A, y.FTYP.byteLength), L;
          }, y;
        }();
        m.types = void 0, m.HDLR_TYPES = void 0, m.STTS = void 0, m.STSC = void 0, m.STCO = void 0, m.STSZ = void 0, m.VMHD = void 0, m.SMHD = void 0, m.STSD = void 0, m.FTYP = void 0, m.DINF = void 0, T.default = m;
      }, "./src/remux/mp4-remuxer.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "default", function() {
          return n;
        }), e.d(T, "normalizePts", function() {
          return h;
        });
        var R = e("./src/polyfills/number.ts"), m = e("./src/remux/aac-helper.ts"), y = e("./src/remux/mp4-generator.ts"), w = e("./src/events.ts"), A = e("./src/errors.ts"), L = e("./src/utils/logger.ts"), b = e("./src/types/loader.ts"), u = e("./src/utils/timescale-conversion.ts");
        function g() {
          return g = Object.assign || function(_) {
            for (var p = 1; p < arguments.length; p++) {
              var o = arguments[p];
              for (var s in o)
                Object.prototype.hasOwnProperty.call(o, s) && (_[s] = o[s]);
            }
            return _;
          }, g.apply(this, arguments);
        }
        var D = 10 * 1e3, E = 1024, S = 1152, d = null, t = null, r = false, n = function() {
          function _(o, s, i, c) {
            if (c === void 0 && (c = ""), this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = false, this._initPTS = void 0, this._initDTS = void 0, this.nextAvcDts = null, this.nextAudioPts = null, this.isAudioContiguous = false, this.isVideoContiguous = false, this.observer = o, this.config = s, this.typeSupported = i, this.ISGenerated = false, d === null) {
              var l = navigator.userAgent || "", k = l.match(/Chrome\/(\d+)/i);
              d = k ? parseInt(k[1]) : 0;
            }
            if (t === null) {
              var I = navigator.userAgent.match(/Safari\/(\d+)/i);
              t = I ? parseInt(I[1]) : 0;
            }
            r = !!d && d < 75 || !!t && t < 600;
          }
          var p = _.prototype;
          return p.destroy = function() {
          }, p.resetTimeStamp = function(o) {
            L.logger.log("[mp4-remuxer]: initPTS & initDTS reset"), this._initPTS = this._initDTS = o;
          }, p.resetNextTimestamp = function() {
            L.logger.log("[mp4-remuxer]: reset next timestamp"), this.isVideoContiguous = false, this.isAudioContiguous = false;
          }, p.resetInitSegment = function() {
            L.logger.log("[mp4-remuxer]: ISGenerated flag reset"), this.ISGenerated = false;
          }, p.getVideoStartPts = function(o) {
            var s = false, i = o.reduce(function(c, l) {
              var k = l.pts - c;
              return k < -4294967296 ? (s = true, h(c, l.pts)) : k > 0 ? c : l.pts;
            }, o[0].pts);
            return s && L.logger.debug("PTS rollover detected"), i;
          }, p.remux = function(o, s, i, c, l, k, I, C) {
            var P, N, B, F, U, j, H = l, V = l, K = o.pid > -1, q = s.pid > -1, $ = s.samples.length, J = o.samples.length > 0, z = $ > 1, tt = (!K || J) && (!q || z) || this.ISGenerated || I;
            if (tt) {
              this.ISGenerated || (B = this.generateIS(o, s, l));
              var et = this.isVideoContiguous, at = -1;
              if (z && (at = a(s.samples), !et && this.config.forceKeyFrameOnDiscontinuity))
                if (j = true, at > 0) {
                  L.logger.warn("[mp4-remuxer]: Dropped " + at + " out of " + $ + " video samples due to a missing keyframe");
                  var pt = this.getVideoStartPts(s.samples);
                  s.samples = s.samples.slice(at), s.dropped += at, V += (s.samples[0].pts - pt) / (s.timescale || 9e4);
                } else
                  at === -1 && (L.logger.warn("[mp4-remuxer]: No keyframe found out of " + $ + " video samples"), j = false);
              if (this.ISGenerated) {
                if (J && z) {
                  var ot = this.getVideoStartPts(s.samples), nt = h(o.samples[0].pts, ot) - ot, X = nt / s.inputTimeScale;
                  H += Math.max(0, X), V += Math.max(0, -X);
                }
                if (J) {
                  if (o.samplerate || (L.logger.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), B = this.generateIS(o, s, l)), N = this.remuxAudio(o, H, this.isAudioContiguous, k, q || z || C === b.PlaylistLevelType.AUDIO ? V : void 0), z) {
                    var Z = N ? N.endPTS - N.startPTS : 0;
                    s.inputTimeScale || (L.logger.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), B = this.generateIS(o, s, l)), P = this.remuxVideo(s, V, et, Z);
                  }
                } else
                  z && (P = this.remuxVideo(s, V, et, 0));
                P && (P.firstKeyFrame = at, P.independent = at !== -1);
              }
            }
            return this.ISGenerated && (i.samples.length && (U = this.remuxID3(i, l)), c.samples.length && (F = this.remuxText(c, l))), { audio: N, video: P, initSegment: B, independent: j, text: F, id3: U };
          }, p.generateIS = function(o, s, i) {
            var c = o.samples, l = s.samples, k = this.typeSupported, I = {}, C = !Object(R.isFiniteNumber)(this._initPTS), P = "audio/mp4", N, B, F;
            if (C && (N = B = 1 / 0), o.config && c.length && (o.timescale = o.samplerate, o.isAAC || (k.mpeg ? (P = "audio/mpeg", o.codec = "") : k.mp3 && (o.codec = "mp3")), I.audio = { id: "audio", container: P, codec: o.codec, initSegment: !o.isAAC && k.mpeg ? new Uint8Array(0) : y.default.initSegment([o]), metadata: { channelCount: o.channelCount } }, C && (F = o.inputTimeScale, N = B = c[0].pts - Math.round(F * i))), s.sps && s.pps && l.length && (s.timescale = s.inputTimeScale, I.video = { id: "main", container: "video/mp4", codec: s.codec, initSegment: y.default.initSegment([s]), metadata: { width: s.width, height: s.height } }, C)) {
              F = s.inputTimeScale;
              var U = this.getVideoStartPts(l), j = Math.round(F * i);
              B = Math.min(B, h(l[0].dts, U) - j), N = Math.min(N, U - j);
            }
            if (Object.keys(I).length)
              return this.ISGenerated = true, C && (this._initPTS = N, this._initDTS = B), { tracks: I, initPTS: N, timescale: F };
          }, p.remuxVideo = function(o, s, i, c) {
            var l = o.inputTimeScale, k = o.samples, I = [], C = k.length, P = this._initPTS, N = this.nextAvcDts, B = 8, F, U, j, H = Number.POSITIVE_INFINITY, V = Number.NEGATIVE_INFINITY, K = 0, q = false;
            if (!i || N === null) {
              var $ = s * l, J = k[0].pts - h(k[0].dts, k[0].pts);
              N = $ - J;
            }
            for (var z = 0; z < C; z++) {
              var tt = k[z];
              if (tt.pts = h(tt.pts - P, N), tt.dts = h(tt.dts - P, N), tt.dts > tt.pts) {
                var et = 9e4 * 0.2;
                K = Math.max(Math.min(K, tt.pts - tt.dts), -1 * et);
              }
              tt.dts < k[z > 0 ? z - 1 : z].dts && (q = true);
            }
            q && k.sort(function(Ue, Be) {
              var xi = Ue.dts - Be.dts, Oi = Ue.pts - Be.pts;
              return xi || Oi;
            }), U = k[0].dts, j = k[k.length - 1].dts;
            var at = Math.round((j - U) / (C - 1));
            if (K < 0) {
              if (K < at * -2) {
                L.logger.warn("PTS < DTS detected in video samples, offsetting DTS from PTS by " + Object(u.toMsFromMpegTsClock)(-at, true) + " ms");
                for (var pt = K, ot = 0; ot < C; ot++)
                  k[ot].dts = pt = Math.max(pt, k[ot].pts - at), k[ot].pts = Math.max(pt, k[ot].pts);
              } else {
                L.logger.warn("PTS < DTS detected in video samples, shifting DTS by " + Object(u.toMsFromMpegTsClock)(K, true) + " ms to overcome this issue");
                for (var nt = 0; nt < C; nt++)
                  k[nt].dts = k[nt].dts + K;
              }
              U = k[0].dts;
            }
            if (i) {
              var X = U - N, Z = X > at, Q = X < -1;
              if (Z || Q) {
                Z ? L.logger.warn("AVC: " + Object(u.toMsFromMpegTsClock)(X, true) + " ms (" + X + "dts) hole between fragments detected, filling it") : L.logger.warn("AVC: " + Object(u.toMsFromMpegTsClock)(-X, true) + " ms (" + X + "dts) overlapping between fragments detected"), U = N;
                var ut = k[0].pts - X;
                k[0].dts = U, k[0].pts = ut, L.logger.log("Video: First PTS/DTS adjusted: " + Object(u.toMsFromMpegTsClock)(ut, true) + "/" + Object(u.toMsFromMpegTsClock)(U, true) + ", delta: " + Object(u.toMsFromMpegTsClock)(X, true) + " ms");
              }
            }
            r && (U = Math.max(0, U));
            for (var ft = 0, mt = 0, Et = 0; Et < C; Et++) {
              for (var ct = k[Et], vt = ct.units, lt = vt.length, dt = 0, Lt = 0; Lt < lt; Lt++)
                dt += vt[Lt].data.length;
              mt += dt, ft += lt, ct.length = dt, ct.dts = Math.max(ct.dts, U), ct.pts = Math.max(ct.pts, ct.dts, 0), H = Math.min(ct.pts, H), V = Math.max(ct.pts, V);
            }
            j = k[C - 1].dts;
            var Mt = mt + 4 * ft + 8, At;
            try {
              At = new Uint8Array(Mt);
            } catch {
              this.observer.emit(w.Events.ERROR, w.Events.ERROR, { type: A.ErrorTypes.MUX_ERROR, details: A.ErrorDetails.REMUX_ALLOC_ERROR, fatal: false, bytes: Mt, reason: "fail allocating video mdat " + Mt });
              return;
            }
            var Ut = new DataView(At.buffer);
            Ut.setUint32(0, Mt), At.set(y.default.types.mdat, 4);
            for (var bt = 0; bt < C; bt++) {
              for (var kt = k[bt], Gt = kt.units, xt = 0, Ot = 0, zt = Gt.length; Ot < zt; Ot++) {
                var Pt = Gt[Ot], Rt = Pt.data, Bt = Pt.data.byteLength;
                Ut.setUint32(B, Bt), B += 4, At.set(Rt, B), B += Bt, xt += 4 + Bt;
              }
              if (bt < C - 1)
                F = k[bt + 1].dts - kt.dts;
              else {
                var Qt = this.config, jt = kt.dts - k[bt > 0 ? bt - 1 : bt].dts;
                if (Qt.stretchShortVideoTrack && this.nextAudioPts !== null) {
                  var Ri = Math.floor(Qt.maxBufferHole * l), ge = (c ? H + c * l : this.nextAudioPts) - kt.pts;
                  ge > Ri ? (F = ge - jt, F < 0 && (F = jt), L.logger.log("[mp4-remuxer]: It is approximately " + ge / 90 + " ms to the next segment; using duration " + F / 90 + " ms for the last video frame.")) : F = jt;
                } else
                  F = jt;
              }
              var wi = Math.round(kt.pts - kt.dts);
              I.push(new f(kt.key, F, xt, wi));
            }
            if (I.length && d && d < 70) {
              var Fe = I[0].flags;
              Fe.dependsOn = 2, Fe.isNonSync = 0;
            }
            console.assert(F !== void 0, "mp4SampleDuration must be computed"), this.nextAvcDts = N = j + F, this.isVideoContiguous = true;
            var Ii = y.default.moof(o.sequenceNumber++, U, g({}, o, { samples: I })), Mi = "video", Ci = { data1: Ii, data2: At, startPTS: H / l, endPTS: (V + F) / l, startDTS: U / l, endDTS: N / l, type: Mi, hasAudio: false, hasVideo: true, nb: I.length, dropped: o.dropped };
            return o.samples = [], o.dropped = 0, console.assert(At.length, "MDAT length must not be zero"), Ci;
          }, p.remuxAudio = function(o, s, i, c, l) {
            var k = o.inputTimeScale, I = o.samplerate ? o.samplerate : k, C = k / I, P = o.isAAC ? E : S, N = P * C, B = this._initPTS, F = !o.isAAC && this.typeSupported.mpeg, U = [], j = o.samples, H = F ? 0 : 8, V = this.nextAudioPts || -1, K = s * k;
            if (this.isAudioContiguous = i = i || j.length && V > 0 && (c && Math.abs(K - V) < 9e3 || Math.abs(h(j[0].pts - B, K) - V) < 20 * N), j.forEach(function(Rt) {
              Rt.pts = h(Rt.pts - B, K);
            }), !i || V < 0) {
              if (j = j.filter(function(Rt) {
                return Rt.pts >= 0;
              }), !j.length)
                return;
              l === 0 ? V = 0 : c ? V = Math.max(0, K) : V = j[0].pts;
            }
            if (o.isAAC)
              for (var q = l !== void 0, $ = this.config.maxAudioFramesDrift, J = 0, z = V; J < j.length; J++) {
                var tt = j[J], et = tt.pts, at = et - z, pt = Math.abs(1e3 * at / k);
                if (at <= -$ * N && q)
                  J === 0 && (L.logger.warn("Audio frame @ " + (et / k).toFixed(3) + "s overlaps nextAudioPts by " + Math.round(1e3 * at / k) + " ms."), this.nextAudioPts = V = z = et);
                else if (at >= $ * N && pt < D && q) {
                  var ot = Math.round(at / N);
                  z = et - ot * N, z < 0 && (ot--, z += N), J === 0 && (this.nextAudioPts = V = z), L.logger.warn("[mp4-remuxer]: Injecting " + ot + " audio frame @ " + (z / k).toFixed(3) + "s due to " + Math.round(1e3 * at / k) + " ms gap.");
                  for (var nt = 0; nt < ot; nt++) {
                    var X = Math.max(z, 0), Z = m.default.getSilentFrame(o.manifestCodec || o.codec, o.channelCount);
                    Z || (L.logger.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), Z = tt.unit.subarray()), j.splice(J, 0, { unit: Z, pts: X }), z += N, J++;
                  }
                }
                tt.pts = z, z += N;
              }
            for (var Q = null, ut = null, ft, mt = 0, Et = j.length; Et--; )
              mt += j[Et].unit.byteLength;
            for (var ct = 0, vt = j.length; ct < vt; ct++) {
              var lt = j[ct], dt = lt.unit, Lt = lt.pts;
              if (ut !== null) {
                var Mt = U[ct - 1];
                Mt.duration = Math.round((Lt - ut) / C);
              } else if (i && o.isAAC && (Lt = V), Q = Lt, mt > 0) {
                mt += H;
                try {
                  ft = new Uint8Array(mt);
                } catch {
                  this.observer.emit(w.Events.ERROR, w.Events.ERROR, { type: A.ErrorTypes.MUX_ERROR, details: A.ErrorDetails.REMUX_ALLOC_ERROR, fatal: false, bytes: mt, reason: "fail allocating audio mdat " + mt });
                  return;
                }
                if (!F) {
                  var At = new DataView(ft.buffer);
                  At.setUint32(0, mt), ft.set(y.default.types.mdat, 4);
                }
              } else
                return;
              ft.set(dt, H);
              var Ut = dt.byteLength;
              H += Ut, U.push(new f(true, P, Ut, 0)), ut = Lt;
            }
            var bt = U.length;
            if (bt) {
              var kt = U[U.length - 1];
              this.nextAudioPts = V = ut + C * kt.duration;
              var Gt = F ? new Uint8Array(0) : y.default.moof(o.sequenceNumber++, Q / C, g({}, o, { samples: U }));
              o.samples = [];
              var xt = Q / k, Ot = V / k, zt = "audio", Pt = { data1: Gt, data2: ft, startPTS: xt, endPTS: Ot, startDTS: xt, endDTS: Ot, type: zt, hasAudio: true, hasVideo: false, nb: bt };
              return this.isAudioContiguous = true, console.assert(ft.length, "MDAT length must not be zero"), Pt;
            }
          }, p.remuxEmptyAudio = function(o, s, i, c) {
            var l = o.inputTimeScale, k = o.samplerate ? o.samplerate : l, I = l / k, C = this.nextAudioPts, P = (C !== null ? C : c.startDTS * l) + this._initDTS, N = c.endDTS * l + this._initDTS, B = I * E, F = Math.ceil((N - P) / B), U = m.default.getSilentFrame(o.manifestCodec || o.codec, o.channelCount);
            if (L.logger.warn("[mp4-remuxer]: remux empty Audio"), !U) {
              L.logger.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");
              return;
            }
            for (var j = [], H = 0; H < F; H++) {
              var V = P + H * B;
              j.push({ unit: U, pts: V, dts: V });
            }
            return o.samples = j, this.remuxAudio(o, s, i, false);
          }, p.remuxID3 = function(o, s) {
            var i = o.samples.length;
            if (i) {
              for (var c = o.inputTimeScale, l = this._initPTS, k = this._initDTS, I = 0; I < i; I++) {
                var C = o.samples[I];
                C.pts = h(C.pts - l, s * c) / c, C.dts = h(C.dts - k, s * c) / c;
              }
              var P = o.samples;
              return o.samples = [], { samples: P };
            }
          }, p.remuxText = function(o, s) {
            var i = o.samples.length;
            if (i) {
              for (var c = o.inputTimeScale, l = this._initPTS, k = 0; k < i; k++) {
                var I = o.samples[k];
                I.pts = h(I.pts - l, s * c) / c;
              }
              o.samples.sort(function(P, N) {
                return P.pts - N.pts;
              });
              var C = o.samples;
              return o.samples = [], { samples: C };
            }
          }, _;
        }();
        function h(_, p) {
          var o;
          if (p === null)
            return _;
          for (p < _ ? o = -8589934592 : o = 8589934592; Math.abs(_ - p) > 4294967296; )
            _ += o;
          return _;
        }
        function a(_) {
          for (var p = 0; p < _.length; p++)
            if (_[p].key)
              return p;
          return -1;
        }
        var f = function(_, p, o, s) {
          this.size = void 0, this.duration = void 0, this.cts = void 0, this.flags = void 0, this.duration = p, this.size = o, this.cts = s, this.flags = new v(_);
        }, v = function(_) {
          this.isLeading = 0, this.isDependedOn = 0, this.hasRedundancy = 0, this.degradPrio = 0, this.dependsOn = 1, this.isNonSync = 1, this.dependsOn = _ ? 2 : 1, this.isNonSync = _ ? 0 : 1;
        };
      }, "./src/remux/passthrough-remuxer.ts": function(x, T, e) {
        "use strict";
        e.r(T);
        var R = e("./src/polyfills/number.ts"), m = e("./src/utils/mp4-tools.ts"), y = e("./src/loader/fragment.ts"), w = e("./src/utils/logger.ts"), A = function() {
          function u() {
            this.emitInitSegment = false, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = void 0, this.initTracks = void 0, this.lastEndDTS = null;
          }
          var g = u.prototype;
          return g.destroy = function() {
          }, g.resetTimeStamp = function(D) {
            this.initPTS = D, this.lastEndDTS = null;
          }, g.resetNextTimestamp = function() {
            this.lastEndDTS = null;
          }, g.resetInitSegment = function(D, E, S) {
            this.audioCodec = E, this.videoCodec = S, this.generateInitSegment(D), this.emitInitSegment = true;
          }, g.generateInitSegment = function(D) {
            var E = this.audioCodec, S = this.videoCodec;
            if (!D || !D.byteLength) {
              this.initTracks = void 0, this.initData = void 0;
              return;
            }
            var d = this.initData = Object(m.parseInitSegment)(D);
            E || (E = b(d.audio, y.ElementaryStreamTypes.AUDIO)), S || (S = b(d.video, y.ElementaryStreamTypes.VIDEO));
            var t = {};
            d.audio && d.video ? t.audiovideo = { container: "video/mp4", codec: E + "," + S, initSegment: D, id: "main" } : d.audio ? t.audio = { container: "audio/mp4", codec: E, initSegment: D, id: "audio" } : d.video ? t.video = { container: "video/mp4", codec: S, initSegment: D, id: "main" } : w.logger.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."), this.initTracks = t;
          }, g.remux = function(D, E, S, d, t) {
            var r = this.initPTS, n = this.lastEndDTS, h = { audio: void 0, video: void 0, text: d, id3: S, initSegment: void 0 };
            Object(R.isFiniteNumber)(n) || (n = this.lastEndDTS = t || 0);
            var a = E.samples;
            if (!a || !a.length)
              return h;
            var f = { initPTS: void 0, timescale: 1 }, v = this.initData;
            if ((!v || !v.length) && (this.generateInitSegment(a), v = this.initData), !v || !v.length)
              return w.logger.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."), h;
            this.emitInitSegment && (f.tracks = this.initTracks, this.emitInitSegment = false), Object(R.isFiniteNumber)(r) || (this.initPTS = f.initPTS = r = L(v, a, n));
            var _ = Object(m.getDuration)(a, v), p = n, o = _ + p;
            Object(m.offsetStartDTS)(v, a, r), _ > 0 ? this.lastEndDTS = o : (w.logger.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
            var s = !!v.audio, i = !!v.video, c = "";
            s && (c += "audio"), i && (c += "video");
            var l = { data1: a, startPTS: p, startDTS: p, endPTS: o, endDTS: o, type: c, hasAudio: s, hasVideo: i, nb: 1, dropped: 0 };
            return h.audio = l.type === "audio" ? l : void 0, h.video = l.type !== "audio" ? l : void 0, h.text = d, h.id3 = S, h.initSegment = f, h;
          }, u;
        }(), L = function(u, g, D) {
          return Object(m.getStartDTS)(u, g) - D;
        };
        function b(u, g) {
          var D = u == null ? void 0 : u.codec;
          return D && D.length > 4 ? D : D === "hvc1" ? "hvc1.1.c.L120.90" : D === "av01" ? "av01.0.04M.08" : D === "avc1" || g === y.ElementaryStreamTypes.VIDEO ? "avc1.42e01e" : "mp4a.40.5";
        }
        T.default = A;
      }, "./src/task-loop.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "default", function() {
          return R;
        });
        var R = function() {
          function m() {
            this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this);
          }
          var y = m.prototype;
          return y.destroy = function() {
            this.onHandlerDestroying(), this.onHandlerDestroyed();
          }, y.onHandlerDestroying = function() {
            this.clearNextTick(), this.clearInterval();
          }, y.onHandlerDestroyed = function() {
          }, y.hasInterval = function() {
            return !!this._tickInterval;
          }, y.hasNextTick = function() {
            return !!this._tickTimer;
          }, y.setInterval = function(w) {
            return this._tickInterval ? false : (this._tickInterval = self.setInterval(this._boundTick, w), true);
          }, y.clearInterval = function() {
            return this._tickInterval ? (self.clearInterval(this._tickInterval), this._tickInterval = null, true) : false;
          }, y.clearNextTick = function() {
            return this._tickTimer ? (self.clearTimeout(this._tickTimer), this._tickTimer = null, true) : false;
          }, y.tick = function() {
            this._tickCallCount++, this._tickCallCount === 1 && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0);
          }, y.tickImmediate = function() {
            this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0);
          }, y.doTick = function() {
          }, m;
        }();
      }, "./src/types/level.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "HlsSkip", function() {
          return y;
        }), e.d(T, "getSkipValue", function() {
          return w;
        }), e.d(T, "HlsUrlParameters", function() {
          return A;
        }), e.d(T, "Level", function() {
          return L;
        });
        function R(b, u) {
          for (var g = 0; g < u.length; g++) {
            var D = u[g];
            D.enumerable = D.enumerable || false, D.configurable = true, "value" in D && (D.writable = true), Object.defineProperty(b, D.key, D);
          }
        }
        function m(b, u, g) {
          return u && R(b.prototype, u), g && R(b, g), b;
        }
        var y;
        (function(b) {
          b.No = "", b.Yes = "YES", b.v2 = "v2";
        })(y || (y = {}));
        function w(b, u) {
          var g = b.canSkipUntil, D = b.canSkipDateRanges, E = b.endSN, S = u !== void 0 ? u - E : 0;
          return g && S < g ? D ? y.v2 : y.Yes : y.No;
        }
        var A = function() {
          function b(g, D, E) {
            this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = g, this.part = D, this.skip = E;
          }
          var u = b.prototype;
          return u.addDirectives = function(g) {
            var D = new self.URL(g);
            return this.msn !== void 0 && D.searchParams.set("_HLS_msn", this.msn.toString()), this.part !== void 0 && D.searchParams.set("_HLS_part", this.part.toString()), this.skip && D.searchParams.set("_HLS_skip", this.skip), D.toString();
          }, b;
        }(), L = function() {
          function b(u) {
            this.attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.videoCodec = void 0, this.width = void 0, this.unknownCodecs = void 0, this.audioGroupIds = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.textGroupIds = void 0, this.url = void 0, this._urlId = 0, this.url = [u.url], this.attrs = u.attrs, this.bitrate = u.bitrate, u.details && (this.details = u.details), this.id = u.id || 0, this.name = u.name, this.width = u.width || 0, this.height = u.height || 0, this.audioCodec = u.audioCodec, this.videoCodec = u.videoCodec, this.unknownCodecs = u.unknownCodecs, this.codecSet = [u.videoCodec, u.audioCodec].filter(function(g) {
              return g;
            }).join(",").replace(/\.[^.,]+/g, "");
          }
          return m(b, [{ key: "maxBitrate", get: function() {
            return Math.max(this.realBitrate, this.bitrate);
          } }, { key: "uri", get: function() {
            return this.url[this._urlId] || "";
          } }, { key: "urlId", get: function() {
            return this._urlId;
          }, set: function(u) {
            var g = u % this.url.length;
            this._urlId !== g && (this.details = void 0, this._urlId = g);
          } }]), b;
        }();
      }, "./src/types/loader.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "PlaylistContextType", function() {
          return R;
        }), e.d(T, "PlaylistLevelType", function() {
          return m;
        });
        var R;
        (function(y) {
          y.MANIFEST = "manifest", y.LEVEL = "level", y.AUDIO_TRACK = "audioTrack", y.SUBTITLE_TRACK = "subtitleTrack";
        })(R || (R = {}));
        var m;
        (function(y) {
          y.MAIN = "main", y.AUDIO = "audio", y.SUBTITLE = "subtitle";
        })(m || (m = {}));
      }, "./src/types/transmuxer.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "ChunkMetadata", function() {
          return R;
        });
        var R = function(y, w, A, L, b, u) {
          L === void 0 && (L = 0), b === void 0 && (b = -1), u === void 0 && (u = false), this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = m(), this.buffering = { audio: m(), video: m(), audiovideo: m() }, this.level = y, this.sn = w, this.id = A, this.size = L, this.part = b, this.partial = u;
        };
        function m() {
          return { start: 0, executeStart: 0, executeEnd: 0, end: 0 };
        }
      }, "./src/utils/attr-list.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "AttrList", function() {
          return y;
        });
        var R = /^(\d+)x(\d+)$/, m = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g, y = function() {
          function w(L) {
            typeof L == "string" && (L = w.parseAttrList(L));
            for (var b in L)
              L.hasOwnProperty(b) && (this[b] = L[b]);
          }
          var A = w.prototype;
          return A.decimalInteger = function(L) {
            var b = parseInt(this[L], 10);
            return b > Number.MAX_SAFE_INTEGER ? 1 / 0 : b;
          }, A.hexadecimalInteger = function(L) {
            if (this[L]) {
              var b = (this[L] || "0x").slice(2);
              b = (b.length & 1 ? "0" : "") + b;
              for (var u = new Uint8Array(b.length / 2), g = 0; g < b.length / 2; g++)
                u[g] = parseInt(b.slice(g * 2, g * 2 + 2), 16);
              return u;
            } else
              return null;
          }, A.hexadecimalIntegerAsNumber = function(L) {
            var b = parseInt(this[L], 16);
            return b > Number.MAX_SAFE_INTEGER ? 1 / 0 : b;
          }, A.decimalFloatingPoint = function(L) {
            return parseFloat(this[L]);
          }, A.optionalFloat = function(L, b) {
            var u = this[L];
            return u ? parseFloat(u) : b;
          }, A.enumeratedString = function(L) {
            return this[L];
          }, A.bool = function(L) {
            return this[L] === "YES";
          }, A.decimalResolution = function(L) {
            var b = R.exec(this[L]);
            if (b !== null)
              return { width: parseInt(b[1], 10), height: parseInt(b[2], 10) };
          }, w.parseAttrList = function(L) {
            var b, u = {}, g = '"';
            for (m.lastIndex = 0; (b = m.exec(L)) !== null; ) {
              var D = b[2];
              D.indexOf(g) === 0 && D.lastIndexOf(g) === D.length - 1 && (D = D.slice(1, -1)), u[b[1]] = D;
            }
            return u;
          }, w;
        }();
      }, "./src/utils/binary-search.ts": function(x, T, e) {
        "use strict";
        e.r(T);
        var R = { search: function(m, y) {
          for (var w = 0, A = m.length - 1, L = null, b = null; w <= A; ) {
            L = (w + A) / 2 | 0, b = m[L];
            var u = y(b);
            if (u > 0)
              w = L + 1;
            else if (u < 0)
              A = L - 1;
            else
              return b;
          }
          return null;
        } };
        T.default = R;
      }, "./src/utils/buffer-helper.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "BufferHelper", function() {
          return y;
        });
        var R = e("./src/utils/logger.ts"), m = { length: 0, start: function() {
          return 0;
        }, end: function() {
          return 0;
        } }, y = function() {
          function w() {
          }
          return w.isBuffered = function(A, L) {
            try {
              if (A) {
                for (var b = w.getBuffered(A), u = 0; u < b.length; u++)
                  if (L >= b.start(u) && L <= b.end(u))
                    return true;
              }
            } catch {
            }
            return false;
          }, w.bufferInfo = function(A, L, b) {
            try {
              if (A) {
                var u = w.getBuffered(A), g = [], D;
                for (D = 0; D < u.length; D++)
                  g.push({ start: u.start(D), end: u.end(D) });
                return this.bufferedInfo(g, L, b);
              }
            } catch {
            }
            return { len: 0, start: L, end: L, nextStart: void 0 };
          }, w.bufferedInfo = function(A, L, b) {
            L = Math.max(0, L), A.sort(function(f, v) {
              var _ = f.start - v.start;
              return _ || v.end - f.end;
            });
            var u = [];
            if (b)
              for (var g = 0; g < A.length; g++) {
                var D = u.length;
                if (D) {
                  var E = u[D - 1].end;
                  A[g].start - E < b ? A[g].end > E && (u[D - 1].end = A[g].end) : u.push(A[g]);
                } else
                  u.push(A[g]);
              }
            else
              u = A;
            for (var S = 0, d, t = L, r = L, n = 0; n < u.length; n++) {
              var h = u[n].start, a = u[n].end;
              if (L + b >= h && L < a)
                t = h, r = a, S = r - L;
              else if (L + b < h) {
                d = h;
                break;
              }
            }
            return { len: S, start: t || 0, end: r || 0, nextStart: d };
          }, w.getBuffered = function(A) {
            try {
              return A.buffered;
            } catch (L) {
              return R.logger.log("failed to get media.buffered", L), m;
            }
          }, w;
        }();
      }, "./src/utils/cea-608-parser.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "Row", function() {
          return n;
        }), e.d(T, "CaptionScreen", function() {
          return h;
        });
        var R = e("./src/utils/logger.ts"), m = { 42: 225, 92: 233, 94: 237, 95: 243, 96: 250, 123: 231, 124: 247, 125: 209, 126: 241, 127: 9608, 128: 174, 129: 176, 130: 189, 131: 191, 132: 8482, 133: 162, 134: 163, 135: 9834, 136: 224, 137: 32, 138: 232, 139: 226, 140: 234, 141: 238, 142: 244, 143: 251, 144: 193, 145: 201, 146: 211, 147: 218, 148: 220, 149: 252, 150: 8216, 151: 161, 152: 42, 153: 8217, 154: 9473, 155: 169, 156: 8480, 157: 8226, 158: 8220, 159: 8221, 160: 192, 161: 194, 162: 199, 163: 200, 164: 202, 165: 203, 166: 235, 167: 206, 168: 207, 169: 239, 170: 212, 171: 217, 172: 249, 173: 219, 174: 171, 175: 187, 176: 195, 177: 227, 178: 205, 179: 204, 180: 236, 181: 210, 182: 242, 183: 213, 184: 245, 185: 123, 186: 125, 187: 92, 188: 94, 189: 95, 190: 124, 191: 8764, 192: 196, 193: 228, 194: 214, 195: 246, 196: 223, 197: 165, 198: 164, 199: 9475, 200: 197, 201: 229, 202: 216, 203: 248, 204: 9487, 205: 9491, 206: 9495, 207: 9499 }, y = function(o) {
          var s = o;
          return m.hasOwnProperty(o) && (s = m[o]), String.fromCharCode(s);
        }, w = 15, A = 100, L = { 17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14 }, b = { 17: 2, 18: 4, 21: 6, 22: 8, 23: 10, 19: 13, 20: 15 }, u = { 25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14 }, g = { 25: 2, 26: 4, 29: 6, 30: 8, 31: 10, 27: 13, 28: 15 }, D = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"], E;
        (function(o) {
          o[o.ERROR = 0] = "ERROR", o[o.TEXT = 1] = "TEXT", o[o.WARNING = 2] = "WARNING", o[o.INFO = 2] = "INFO", o[o.DEBUG = 3] = "DEBUG", o[o.DATA = 3] = "DATA";
        })(E || (E = {}));
        var S = function() {
          function o() {
            this.time = null, this.verboseLevel = E.ERROR;
          }
          var s = o.prototype;
          return s.log = function(i, c) {
            this.verboseLevel >= i && R.logger.log(this.time + " [" + i + "] " + c);
          }, o;
        }(), d = function(o) {
          for (var s = [], i = 0; i < o.length; i++)
            s.push(o[i].toString(16));
          return s;
        }, t = function() {
          function o(i, c, l, k, I) {
            this.foreground = void 0, this.underline = void 0, this.italics = void 0, this.background = void 0, this.flash = void 0, this.foreground = i || "white", this.underline = c || false, this.italics = l || false, this.background = k || "black", this.flash = I || false;
          }
          var s = o.prototype;
          return s.reset = function() {
            this.foreground = "white", this.underline = false, this.italics = false, this.background = "black", this.flash = false;
          }, s.setStyles = function(i) {
            for (var c = ["foreground", "underline", "italics", "background", "flash"], l = 0; l < c.length; l++) {
              var k = c[l];
              i.hasOwnProperty(k) && (this[k] = i[k]);
            }
          }, s.isDefault = function() {
            return this.foreground === "white" && !this.underline && !this.italics && this.background === "black" && !this.flash;
          }, s.equals = function(i) {
            return this.foreground === i.foreground && this.underline === i.underline && this.italics === i.italics && this.background === i.background && this.flash === i.flash;
          }, s.copy = function(i) {
            this.foreground = i.foreground, this.underline = i.underline, this.italics = i.italics, this.background = i.background, this.flash = i.flash;
          }, s.toString = function() {
            return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash;
          }, o;
        }(), r = function() {
          function o(i, c, l, k, I, C) {
            this.uchar = void 0, this.penState = void 0, this.uchar = i || " ", this.penState = new t(c, l, k, I, C);
          }
          var s = o.prototype;
          return s.reset = function() {
            this.uchar = " ", this.penState.reset();
          }, s.setChar = function(i, c) {
            this.uchar = i, this.penState.copy(c);
          }, s.setPenState = function(i) {
            this.penState.copy(i);
          }, s.equals = function(i) {
            return this.uchar === i.uchar && this.penState.equals(i.penState);
          }, s.copy = function(i) {
            this.uchar = i.uchar, this.penState.copy(i.penState);
          }, s.isEmpty = function() {
            return this.uchar === " " && this.penState.isDefault();
          }, o;
        }(), n = function() {
          function o(i) {
            this.chars = void 0, this.pos = void 0, this.currPenState = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chars = [];
            for (var c = 0; c < A; c++)
              this.chars.push(new r());
            this.logger = i, this.pos = 0, this.currPenState = new t();
          }
          var s = o.prototype;
          return s.equals = function(i) {
            for (var c = true, l = 0; l < A; l++)
              if (!this.chars[l].equals(i.chars[l])) {
                c = false;
                break;
              }
            return c;
          }, s.copy = function(i) {
            for (var c = 0; c < A; c++)
              this.chars[c].copy(i.chars[c]);
          }, s.isEmpty = function() {
            for (var i = true, c = 0; c < A; c++)
              if (!this.chars[c].isEmpty()) {
                i = false;
                break;
              }
            return i;
          }, s.setCursor = function(i) {
            this.pos !== i && (this.pos = i), this.pos < 0 ? (this.logger.log(E.DEBUG, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > A && (this.logger.log(E.DEBUG, "Too large cursor position " + this.pos), this.pos = A);
          }, s.moveCursor = function(i) {
            var c = this.pos + i;
            if (i > 1)
              for (var l = this.pos + 1; l < c + 1; l++)
                this.chars[l].setPenState(this.currPenState);
            this.setCursor(c);
          }, s.backSpace = function() {
            this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState);
          }, s.insertChar = function(i) {
            i >= 144 && this.backSpace();
            var c = y(i);
            if (this.pos >= A) {
              this.logger.log(E.ERROR, "Cannot insert " + i.toString(16) + " (" + c + ") at position " + this.pos + ". Skipping it!");
              return;
            }
            this.chars[this.pos].setChar(c, this.currPenState), this.moveCursor(1);
          }, s.clearFromPos = function(i) {
            var c;
            for (c = i; c < A; c++)
              this.chars[c].reset();
          }, s.clear = function() {
            this.clearFromPos(0), this.pos = 0, this.currPenState.reset();
          }, s.clearToEndOfRow = function() {
            this.clearFromPos(this.pos);
          }, s.getTextString = function() {
            for (var i = [], c = true, l = 0; l < A; l++) {
              var k = this.chars[l].uchar;
              k !== " " && (c = false), i.push(k);
            }
            return c ? "" : i.join("");
          }, s.setPenStyles = function(i) {
            this.currPenState.setStyles(i);
            var c = this.chars[this.pos];
            c.setPenState(this.currPenState);
          }, o;
        }(), h = function() {
          function o(i) {
            this.rows = void 0, this.currRow = void 0, this.nrRollUpRows = void 0, this.lastOutputScreen = void 0, this.logger = void 0, this.rows = [];
            for (var c = 0; c < w; c++)
              this.rows.push(new n(i));
            this.logger = i, this.currRow = w - 1, this.nrRollUpRows = null, this.lastOutputScreen = null, this.reset();
          }
          var s = o.prototype;
          return s.reset = function() {
            for (var i = 0; i < w; i++)
              this.rows[i].clear();
            this.currRow = w - 1;
          }, s.equals = function(i) {
            for (var c = true, l = 0; l < w; l++)
              if (!this.rows[l].equals(i.rows[l])) {
                c = false;
                break;
              }
            return c;
          }, s.copy = function(i) {
            for (var c = 0; c < w; c++)
              this.rows[c].copy(i.rows[c]);
          }, s.isEmpty = function() {
            for (var i = true, c = 0; c < w; c++)
              if (!this.rows[c].isEmpty()) {
                i = false;
                break;
              }
            return i;
          }, s.backSpace = function() {
            var i = this.rows[this.currRow];
            i.backSpace();
          }, s.clearToEndOfRow = function() {
            var i = this.rows[this.currRow];
            i.clearToEndOfRow();
          }, s.insertChar = function(i) {
            var c = this.rows[this.currRow];
            c.insertChar(i);
          }, s.setPen = function(i) {
            var c = this.rows[this.currRow];
            c.setPenStyles(i);
          }, s.moveCursor = function(i) {
            var c = this.rows[this.currRow];
            c.moveCursor(i);
          }, s.setCursor = function(i) {
            this.logger.log(E.INFO, "setCursor: " + i);
            var c = this.rows[this.currRow];
            c.setCursor(i);
          }, s.setPAC = function(i) {
            this.logger.log(E.INFO, "pacData = " + JSON.stringify(i));
            var c = i.row - 1;
            if (this.nrRollUpRows && c < this.nrRollUpRows - 1 && (c = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== c) {
              for (var l = 0; l < w; l++)
                this.rows[l].clear();
              var k = this.currRow + 1 - this.nrRollUpRows, I = this.lastOutputScreen;
              if (I) {
                var C = I.rows[k].cueStartTime, P = this.logger.time;
                if (C && P !== null && C < P)
                  for (var N = 0; N < this.nrRollUpRows; N++)
                    this.rows[c - this.nrRollUpRows + N + 1].copy(I.rows[k + N]);
              }
            }
            this.currRow = c;
            var B = this.rows[this.currRow];
            if (i.indent !== null) {
              var F = i.indent, U = Math.max(F - 1, 0);
              B.setCursor(i.indent), i.color = B.chars[U].penState.foreground;
            }
            var j = { foreground: i.color, underline: i.underline, italics: i.italics, background: "black", flash: false };
            this.setPen(j);
          }, s.setBkgData = function(i) {
            this.logger.log(E.INFO, "bkgData = " + JSON.stringify(i)), this.backSpace(), this.setPen(i), this.insertChar(32);
          }, s.setRollUpRows = function(i) {
            this.nrRollUpRows = i;
          }, s.rollUp = function() {
            if (this.nrRollUpRows === null) {
              this.logger.log(E.DEBUG, "roll_up but nrRollUpRows not set yet");
              return;
            }
            this.logger.log(E.TEXT, this.getDisplayText());
            var i = this.currRow + 1 - this.nrRollUpRows, c = this.rows.splice(i, 1)[0];
            c.clear(), this.rows.splice(this.currRow, 0, c), this.logger.log(E.INFO, "Rolling up");
          }, s.getDisplayText = function(i) {
            i = i || false;
            for (var c = [], l = "", k = -1, I = 0; I < w; I++) {
              var C = this.rows[I].getTextString();
              C && (k = I + 1, i ? c.push("Row " + k + ": '" + C + "'") : c.push(C.trim()));
            }
            return c.length > 0 && (i ? l = "[" + c.join(" | ") + "]" : l = c.join(`
`)), l;
          }, s.getTextAndFormat = function() {
            return this.rows;
          }, o;
        }(), a = function() {
          function o(i, c, l) {
            this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = i, this.outputFilter = c, this.mode = null, this.verbose = 0, this.displayedMemory = new h(l), this.nonDisplayedMemory = new h(l), this.lastOutputScreen = new h(l), this.currRollUpRow = this.displayedMemory.rows[w - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = l;
          }
          var s = o.prototype;
          return s.reset = function() {
            this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[w - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null;
          }, s.getHandler = function() {
            return this.outputFilter;
          }, s.setHandler = function(i) {
            this.outputFilter = i;
          }, s.setPAC = function(i) {
            this.writeScreen.setPAC(i);
          }, s.setBkgData = function(i) {
            this.writeScreen.setBkgData(i);
          }, s.setMode = function(i) {
            i !== this.mode && (this.mode = i, this.logger.log(E.INFO, "MODE=" + i), this.mode === "MODE_POP-ON" ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), this.mode !== "MODE_ROLL-UP" && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = i);
          }, s.insertChars = function(i) {
            for (var c = 0; c < i.length; c++)
              this.writeScreen.insertChar(i[c]);
            var l = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
            this.logger.log(E.INFO, l + ": " + this.writeScreen.getDisplayText(true)), (this.mode === "MODE_PAINT-ON" || this.mode === "MODE_ROLL-UP") && (this.logger.log(E.TEXT, "DISPLAYED: " + this.displayedMemory.getDisplayText(true)), this.outputDataUpdate());
          }, s.ccRCL = function() {
            this.logger.log(E.INFO, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON");
          }, s.ccBS = function() {
            this.logger.log(E.INFO, "BS - BackSpace"), this.mode !== "MODE_TEXT" && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate());
          }, s.ccAOF = function() {
          }, s.ccAON = function() {
          }, s.ccDER = function() {
            this.logger.log(E.INFO, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate();
          }, s.ccRU = function(i) {
            this.logger.log(E.INFO, "RU(" + i + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(i);
          }, s.ccFON = function() {
            this.logger.log(E.INFO, "FON - Flash On"), this.writeScreen.setPen({ flash: true });
          }, s.ccRDC = function() {
            this.logger.log(E.INFO, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON");
          }, s.ccTR = function() {
            this.logger.log(E.INFO, "TR"), this.setMode("MODE_TEXT");
          }, s.ccRTD = function() {
            this.logger.log(E.INFO, "RTD"), this.setMode("MODE_TEXT");
          }, s.ccEDM = function() {
            this.logger.log(E.INFO, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(true);
          }, s.ccCR = function() {
            this.logger.log(E.INFO, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(true);
          }, s.ccENM = function() {
            this.logger.log(E.INFO, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset();
          }, s.ccEOC = function() {
            if (this.logger.log(E.INFO, "EOC - End Of Caption"), this.mode === "MODE_POP-ON") {
              var i = this.displayedMemory;
              this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = i, this.writeScreen = this.nonDisplayedMemory, this.logger.log(E.TEXT, "DISP: " + this.displayedMemory.getDisplayText());
            }
            this.outputDataUpdate(true);
          }, s.ccTO = function(i) {
            this.logger.log(E.INFO, "TO(" + i + ") - Tab Offset"), this.writeScreen.moveCursor(i);
          }, s.ccMIDROW = function(i) {
            var c = { flash: false };
            if (c.underline = i % 2 == 1, c.italics = i >= 46, c.italics)
              c.foreground = "white";
            else {
              var l = Math.floor(i / 2) - 16, k = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
              c.foreground = k[l];
            }
            this.logger.log(E.INFO, "MIDROW: " + JSON.stringify(c)), this.writeScreen.setPen(c);
          }, s.outputDataUpdate = function(i) {
            i === void 0 && (i = false);
            var c = this.logger.time;
            c !== null && this.outputFilter && (this.cueStartTime === null && !this.displayedMemory.isEmpty() ? this.cueStartTime = c : this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, c, this.lastOutputScreen), i && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : c), this.lastOutputScreen.copy(this.displayedMemory));
          }, s.cueSplitAtTime = function(i) {
            this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, i, this.displayedMemory), this.cueStartTime = i));
          }, o;
        }(), f = function() {
          function o(i, c, l) {
            this.channels = void 0, this.currentChannel = 0, this.cmdHistory = void 0, this.logger = void 0;
            var k = new S();
            this.channels = [null, new a(i, c, k), new a(i + 1, l, k)], this.cmdHistory = p(), this.logger = k;
          }
          var s = o.prototype;
          return s.getHandler = function(i) {
            return this.channels[i].getHandler();
          }, s.setHandler = function(i, c) {
            this.channels[i].setHandler(c);
          }, s.addData = function(i, c) {
            var l, k, I, C = false;
            this.logger.time = i;
            for (var P = 0; P < c.length; P += 2)
              if (k = c[P] & 127, I = c[P + 1] & 127, !(k === 0 && I === 0)) {
                if (this.logger.log(E.DATA, "[" + d([c[P], c[P + 1]]) + "] -> (" + d([k, I]) + ")"), l = this.parseCmd(k, I), l || (l = this.parseMidrow(k, I)), l || (l = this.parsePAC(k, I)), l || (l = this.parseBackgroundAttributes(k, I)), !l && (C = this.parseChars(k, I), C)) {
                  var N = this.currentChannel;
                  if (N && N > 0) {
                    var B = this.channels[N];
                    B.insertChars(C);
                  } else
                    this.logger.log(E.WARNING, "No channel found yet. TEXT-MODE?");
                }
                !l && !C && this.logger.log(E.WARNING, "Couldn't parse cleaned data " + d([k, I]) + " orig: " + d([c[P], c[P + 1]]));
              }
          }, s.parseCmd = function(i, c) {
            var l = this.cmdHistory, k = (i === 20 || i === 28 || i === 21 || i === 29) && c >= 32 && c <= 47, I = (i === 23 || i === 31) && c >= 33 && c <= 35;
            if (!(k || I))
              return false;
            if (_(i, c, l))
              return v(null, null, l), this.logger.log(E.DEBUG, "Repeated command (" + d([i, c]) + ") is dropped"), true;
            var C = i === 20 || i === 21 || i === 23 ? 1 : 2, P = this.channels[C];
            return i === 20 || i === 21 || i === 28 || i === 29 ? c === 32 ? P.ccRCL() : c === 33 ? P.ccBS() : c === 34 ? P.ccAOF() : c === 35 ? P.ccAON() : c === 36 ? P.ccDER() : c === 37 ? P.ccRU(2) : c === 38 ? P.ccRU(3) : c === 39 ? P.ccRU(4) : c === 40 ? P.ccFON() : c === 41 ? P.ccRDC() : c === 42 ? P.ccTR() : c === 43 ? P.ccRTD() : c === 44 ? P.ccEDM() : c === 45 ? P.ccCR() : c === 46 ? P.ccENM() : c === 47 && P.ccEOC() : P.ccTO(c - 32), v(i, c, l), this.currentChannel = C, true;
          }, s.parseMidrow = function(i, c) {
            var l = 0;
            if ((i === 17 || i === 25) && c >= 32 && c <= 47) {
              if (i === 17 ? l = 1 : l = 2, l !== this.currentChannel)
                return this.logger.log(E.ERROR, "Mismatch channel in midrow parsing"), false;
              var k = this.channels[l];
              return k ? (k.ccMIDROW(c), this.logger.log(E.DEBUG, "MIDROW (" + d([i, c]) + ")"), true) : false;
            }
            return false;
          }, s.parsePAC = function(i, c) {
            var l, k = this.cmdHistory, I = (i >= 17 && i <= 23 || i >= 25 && i <= 31) && c >= 64 && c <= 127, C = (i === 16 || i === 24) && c >= 64 && c <= 95;
            if (!(I || C))
              return false;
            if (_(i, c, k))
              return v(null, null, k), true;
            var P = i <= 23 ? 1 : 2;
            c >= 64 && c <= 95 ? l = P === 1 ? L[i] : u[i] : l = P === 1 ? b[i] : g[i];
            var N = this.channels[P];
            return N ? (N.setPAC(this.interpretPAC(l, c)), v(i, c, k), this.currentChannel = P, true) : false;
          }, s.interpretPAC = function(i, c) {
            var l, k = { color: null, italics: false, indent: null, underline: false, row: i };
            return c > 95 ? l = c - 96 : l = c - 64, k.underline = (l & 1) == 1, l <= 13 ? k.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(l / 2)] : l <= 15 ? (k.italics = true, k.color = "white") : k.indent = Math.floor((l - 16) / 2) * 4, k;
          }, s.parseChars = function(i, c) {
            var l, k = null, I = null;
            if (i >= 25 ? (l = 2, I = i - 8) : (l = 1, I = i), I >= 17 && I <= 19) {
              var C;
              I === 17 ? C = c + 80 : I === 18 ? C = c + 112 : C = c + 144, this.logger.log(E.INFO, "Special char '" + y(C) + "' in channel " + l), k = [C];
            } else
              i >= 32 && i <= 127 && (k = c === 0 ? [i] : [i, c]);
            if (k) {
              var P = d(k);
              this.logger.log(E.DEBUG, "Char codes =  " + P.join(",")), v(i, c, this.cmdHistory);
            }
            return k;
          }, s.parseBackgroundAttributes = function(i, c) {
            var l = (i === 16 || i === 24) && c >= 32 && c <= 47, k = (i === 23 || i === 31) && c >= 45 && c <= 47;
            if (!(l || k))
              return false;
            var I, C = {};
            i === 16 || i === 24 ? (I = Math.floor((c - 32) / 2), C.background = D[I], c % 2 == 1 && (C.background = C.background + "_semi")) : c === 45 ? C.background = "transparent" : (C.foreground = "black", c === 47 && (C.underline = true));
            var P = i <= 23 ? 1 : 2, N = this.channels[P];
            return N.setBkgData(C), v(i, c, this.cmdHistory), true;
          }, s.reset = function() {
            for (var i = 0; i < Object.keys(this.channels).length; i++) {
              var c = this.channels[i];
              c && c.reset();
            }
            this.cmdHistory = p();
          }, s.cueSplitAtTime = function(i) {
            for (var c = 0; c < this.channels.length; c++) {
              var l = this.channels[c];
              l && l.cueSplitAtTime(i);
            }
          }, o;
        }();
        function v(o, s, i) {
          i.a = o, i.b = s;
        }
        function _(o, s, i) {
          return i.a === o && i.b === s;
        }
        function p() {
          return { a: null, b: null };
        }
        T.default = f;
      }, "./src/utils/codecs.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "isCodecType", function() {
          return m;
        }), e.d(T, "isCodecSupportedInMp4", function() {
          return y;
        });
        var R = { audio: { a3ds: true, "ac-3": true, "ac-4": true, alac: true, alaw: true, dra1: true, "dts+": true, "dts-": true, dtsc: true, dtse: true, dtsh: true, "ec-3": true, enca: true, g719: true, g726: true, m4ae: true, mha1: true, mha2: true, mhm1: true, mhm2: true, mlpa: true, mp4a: true, "raw ": true, Opus: true, samr: true, sawb: true, sawp: true, sevc: true, sqcp: true, ssmv: true, twos: true, ulaw: true }, video: { avc1: true, avc2: true, avc3: true, avc4: true, avcp: true, av01: true, drac: true, dvav: true, dvhe: true, encv: true, hev1: true, hvc1: true, mjp2: true, mp4v: true, mvc1: true, mvc2: true, mvc3: true, mvc4: true, resv: true, rv60: true, s263: true, svc1: true, svc2: true, "vc-1": true, vp08: true, vp09: true }, text: { stpp: true, wvtt: true } };
        function m(w, A) {
          var L = R[A];
          return !!L && L[w.slice(0, 4)] === true;
        }
        function y(w, A) {
          return MediaSource.isTypeSupported((A || "video") + '/mp4;codecs="' + w + '"');
        }
      }, "./src/utils/cues.ts": function(x, T, e) {
        "use strict";
        e.r(T);
        var R = e("./src/utils/vttparser.ts"), m = e("./src/utils/webvtt-parser.ts"), y = e("./src/utils/texttrack-utils.ts"), w = /\s/, A = { newCue: function(L, b, u, g) {
          for (var D = [], E, S, d, t, r, n = self.VTTCue || self.TextTrackCue, h = 0; h < g.rows.length; h++)
            if (E = g.rows[h], d = true, t = 0, r = "", !E.isEmpty()) {
              for (var a = 0; a < E.chars.length; a++)
                w.test(E.chars[a].uchar) && d ? t++ : (r += E.chars[a].uchar, d = false);
              E.cueStartTime = b, b === u && (u += 1e-4), t >= 16 ? t-- : t++;
              var f = Object(R.fixLineBreaks)(r.trim()), v = Object(m.generateCueId)(b, u, f);
              (!L || !L.cues || !L.cues.getCueById(v)) && (S = new n(b, u, f), S.id = v, S.line = h + 1, S.align = "left", S.position = 10 + Math.min(80, Math.floor(t * 8 / 32) * 10), D.push(S));
            }
          return L && D.length && (D.sort(function(_, p) {
            return _.line === "auto" || p.line === "auto" ? 0 : _.line > 8 && p.line > 8 ? p.line - _.line : _.line - p.line;
          }), D.forEach(function(_) {
            return Object(y.addCueToTrack)(L, _);
          })), D;
        } };
        T.default = A;
      }, "./src/utils/discontinuities.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "findFirstFragWithCC", function() {
          return w;
        }), e.d(T, "shouldAlignOnDiscontinuities", function() {
          return A;
        }), e.d(T, "findDiscontinuousReferenceFrag", function() {
          return L;
        }), e.d(T, "adjustSlidingStart", function() {
          return u;
        }), e.d(T, "alignStream", function() {
          return g;
        }), e.d(T, "alignPDT", function() {
          return E;
        }), e.d(T, "alignFragmentByPDTDelta", function() {
          return S;
        }), e.d(T, "alignMediaPlaylistByPDT", function() {
          return d;
        });
        var R = e("./src/polyfills/number.ts"), m = e("./src/utils/logger.ts"), y = e("./src/controller/level-helper.ts");
        function w(t, r) {
          for (var n = null, h = 0, a = t.length; h < a; h++) {
            var f = t[h];
            if (f && f.cc === r) {
              n = f;
              break;
            }
          }
          return n;
        }
        function A(t, r, n) {
          return !!(r.details && (n.endCC > n.startCC || t && t.cc < n.startCC));
        }
        function L(t, r) {
          var n = t.fragments, h = r.fragments;
          if (!h.length || !n.length) {
            m.logger.log("No fragments to align");
            return;
          }
          var a = w(n, h[0].cc);
          if (!a || a && !a.startPTS) {
            m.logger.log("No frag in previous level to align on");
            return;
          }
          return a;
        }
        function b(t, r) {
          if (t) {
            var n = t.start + r;
            t.start = t.startPTS = n, t.endPTS = n + t.duration;
          }
        }
        function u(t, r) {
          for (var n = r.fragments, h = 0, a = n.length; h < a; h++)
            b(n[h], t);
          r.fragmentHint && b(r.fragmentHint, t), r.alignedSliding = true;
        }
        function g(t, r, n) {
          !r || (D(t, n, r), !n.alignedSliding && r.details && E(n, r.details), !n.alignedSliding && r.details && !n.skippedSegments && Object(y.adjustSliding)(r.details, n));
        }
        function D(t, r, n) {
          if (A(t, n, r)) {
            var h = L(n.details, r);
            h && Object(R.isFiniteNumber)(h.start) && (m.logger.log("Adjusting PTS using last level due to CC increase within current level " + r.url), u(h.start, r));
          }
        }
        function E(t, r) {
          if (!(!r.fragments.length || !t.hasProgramDateTime || !r.hasProgramDateTime)) {
            var n = r.fragments[0].programDateTime, h = t.fragments[0].programDateTime, a = (h - n) / 1e3 + r.fragments[0].start;
            a && Object(R.isFiniteNumber)(a) && (m.logger.log("Adjusting PTS using programDateTime delta " + (h - n) + "ms, sliding:" + a.toFixed(3) + " " + t.url + " "), u(a, t));
          }
        }
        function S(t, r) {
          var n = t.programDateTime;
          if (n) {
            var h = (n - r) / 1e3;
            t.start = t.startPTS = h, t.endPTS = h + t.duration;
          }
        }
        function d(t, r) {
          if (!(!r.fragments.length || !t.hasProgramDateTime || !r.hasProgramDateTime)) {
            var n = r.fragments[0].programDateTime, h = r.fragments[0].start, a = n - h * 1e3;
            t.fragments.forEach(function(f) {
              S(f, a);
            }), t.fragmentHint && S(t.fragmentHint, a), t.alignedSliding = true;
          }
        }
      }, "./src/utils/ewma-bandwidth-estimator.ts": function(x, T, e) {
        "use strict";
        e.r(T);
        var R = e("./src/utils/ewma.ts"), m = function() {
          function y(A, L, b) {
            this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultEstimate_ = b, this.minWeight_ = 1e-3, this.minDelayMs_ = 50, this.slow_ = new R.default(A), this.fast_ = new R.default(L);
          }
          var w = y.prototype;
          return w.update = function(A, L) {
            var b = this.slow_, u = this.fast_;
            this.slow_.halfLife !== A && (this.slow_ = new R.default(A, b.getEstimate(), b.getTotalWeight())), this.fast_.halfLife !== L && (this.fast_ = new R.default(L, u.getEstimate(), u.getTotalWeight()));
          }, w.sample = function(A, L) {
            A = Math.max(A, this.minDelayMs_);
            var b = 8 * L, u = A / 1e3, g = b / u;
            this.fast_.sample(u, g), this.slow_.sample(u, g);
          }, w.canEstimate = function() {
            var A = this.fast_;
            return A && A.getTotalWeight() >= this.minWeight_;
          }, w.getEstimate = function() {
            return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_;
          }, w.destroy = function() {
          }, y;
        }();
        T.default = m;
      }, "./src/utils/ewma.ts": function(x, T, e) {
        "use strict";
        e.r(T);
        var R = function() {
          function m(w, A, L) {
            A === void 0 && (A = 0), L === void 0 && (L = 0), this.halfLife = void 0, this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.halfLife = w, this.alpha_ = w ? Math.exp(Math.log(0.5) / w) : 0, this.estimate_ = A, this.totalWeight_ = L;
          }
          var y = m.prototype;
          return y.sample = function(w, A) {
            var L = Math.pow(this.alpha_, w);
            this.estimate_ = A * (1 - L) + L * this.estimate_, this.totalWeight_ += w;
          }, y.getTotalWeight = function() {
            return this.totalWeight_;
          }, y.getEstimate = function() {
            if (this.alpha_) {
              var w = 1 - Math.pow(this.alpha_, this.totalWeight_);
              if (w)
                return this.estimate_ / w;
            }
            return this.estimate_;
          }, m;
        }();
        T.default = R;
      }, "./src/utils/fetch-loader.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "fetchSupported", function() {
          return E;
        });
        var R = e("./src/polyfills/number.ts"), m = e("./src/loader/load-stats.ts"), y = e("./src/demux/chunk-cache.ts");
        function w(n, h) {
          n.prototype = Object.create(h.prototype), n.prototype.constructor = n, g(n, h);
        }
        function A(n) {
          var h = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
          return A = function(a) {
            if (a === null || !u(a))
              return a;
            if (typeof a != "function")
              throw new TypeError("Super expression must either be null or a function");
            if (typeof h != "undefined") {
              if (h.has(a))
                return h.get(a);
              h.set(a, f);
            }
            function f() {
              return L(a, arguments, D(this).constructor);
            }
            return f.prototype = Object.create(a.prototype, { constructor: { value: f, enumerable: false, writable: true, configurable: true } }), g(f, a);
          }, A(n);
        }
        function L(n, h, a) {
          return b() ? L = Reflect.construct : L = function(f, v, _) {
            var p = [null];
            p.push.apply(p, v);
            var o = Function.bind.apply(f, p), s = new o();
            return _ && g(s, _.prototype), s;
          }, L.apply(null, arguments);
        }
        function b() {
          if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return false;
          if (typeof Proxy == "function")
            return true;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            })), true;
          } catch {
            return false;
          }
        }
        function u(n) {
          return Function.toString.call(n).indexOf("[native code]") !== -1;
        }
        function g(n, h) {
          return g = Object.setPrototypeOf || function(a, f) {
            return a.__proto__ = f, a;
          }, g(n, h);
        }
        function D(n) {
          return D = Object.setPrototypeOf ? Object.getPrototypeOf : function(h) {
            return h.__proto__ || Object.getPrototypeOf(h);
          }, D(n);
        }
        function E() {
          if (self.fetch && self.AbortController && self.ReadableStream && self.Request)
            try {
              return new self.ReadableStream({}), true;
            } catch {
            }
          return false;
        }
        var S = function() {
          function n(a) {
            this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = void 0, this.response = void 0, this.controller = void 0, this.context = void 0, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = a.fetchSetup || t, this.controller = new self.AbortController(), this.stats = new m.LoadStats();
          }
          var h = n.prototype;
          return h.destroy = function() {
            this.loader = this.callbacks = null, this.abortInternal();
          }, h.abortInternal = function() {
            var a = this.response;
            (!a || !a.ok) && (this.stats.aborted = true, this.controller.abort());
          }, h.abort = function() {
            var a;
            this.abortInternal(), (a = this.callbacks) !== null && a !== void 0 && a.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response);
          }, h.load = function(a, f, v) {
            var _ = this, p = this.stats;
            if (p.loading.start)
              throw new Error("Loader can only be used once.");
            p.loading.start = self.performance.now();
            var o = d(a, this.controller.signal), s = v.onProgress, i = a.responseType === "arraybuffer", c = i ? "byteLength" : "length";
            this.context = a, this.config = f, this.callbacks = v, this.request = this.fetchSetup(a, o), self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(function() {
              _.abortInternal(), v.onTimeout(p, a, _.response);
            }, f.timeout), self.fetch(this.request).then(function(l) {
              if (_.response = _.loader = l, !l.ok) {
                var k = l.status, I = l.statusText;
                throw new r(I || "fetch, bad network response", k, l);
              }
              return p.loading.first = Math.max(self.performance.now(), p.loading.start), p.total = parseInt(l.headers.get("Content-Length") || "0"), s && Object(R.isFiniteNumber)(f.highWaterMark) ? _.loadProgressively(l, p, a, f.highWaterMark, s) : i ? l.arrayBuffer() : l.text();
            }).then(function(l) {
              var k = _.response;
              self.clearTimeout(_.requestTimeout), p.loading.end = Math.max(self.performance.now(), p.loading.first), p.loaded = p.total = l[c];
              var I = { url: k.url, data: l };
              s && !Object(R.isFiniteNumber)(f.highWaterMark) && s(p, a, l, k), v.onSuccess(I, p, a, k);
            }).catch(function(l) {
              if (self.clearTimeout(_.requestTimeout), !p.aborted) {
                var k = l.code || 0;
                v.onError({ code: k, text: l.message }, a, l.details);
              }
            });
          }, h.getCacheAge = function() {
            var a = null;
            if (this.response) {
              var f = this.response.headers.get("age");
              a = f ? parseFloat(f) : null;
            }
            return a;
          }, h.loadProgressively = function(a, f, v, _, p) {
            _ === void 0 && (_ = 0);
            var o = new y.default(), s = a.body.getReader(), i = function c() {
              return s.read().then(function(l) {
                if (l.done)
                  return o.dataLength && p(f, v, o.flush(), a), Promise.resolve(new ArrayBuffer(0));
                var k = l.value, I = k.length;
                return f.loaded += I, I < _ || o.dataLength ? (o.push(k), o.dataLength >= _ && p(f, v, o.flush(), a)) : p(f, v, k, a), c();
              }).catch(function() {
                return Promise.reject();
              });
            };
            return i();
          }, n;
        }();
        function d(n, h) {
          var a = { method: "GET", mode: "cors", credentials: "same-origin", signal: h };
          return n.rangeEnd && (a.headers = new self.Headers({ Range: "bytes=" + n.rangeStart + "-" + String(n.rangeEnd - 1) })), a;
        }
        function t(n, h) {
          return new self.Request(n.url, h);
        }
        var r = function(n) {
          w(h, n);
          function h(a, f, v) {
            var _;
            return _ = n.call(this, a) || this, _.code = void 0, _.details = void 0, _.code = f, _.details = v, _;
          }
          return h;
        }(A(Error));
        T.default = S;
      }, "./src/utils/imsc1-ttml-parser.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "IMSC1_CODEC", function() {
          return u;
        }), e.d(T, "parseIMSC1", function() {
          return S;
        });
        var R = e("./src/utils/mp4-tools.ts"), m = e("./src/utils/vttparser.ts"), y = e("./src/utils/vttcue.ts"), w = e("./src/demux/id3.ts"), A = e("./src/utils/timescale-conversion.ts"), L = e("./src/utils/webvtt-parser.ts");
        function b() {
          return b = Object.assign || function(o) {
            for (var s = 1; s < arguments.length; s++) {
              var i = arguments[s];
              for (var c in i)
                Object.prototype.hasOwnProperty.call(i, c) && (o[c] = i[c]);
            }
            return o;
          }, b.apply(this, arguments);
        }
        var u = "stpp.ttml.im1t", g = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/, D = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/, E = { left: "start", center: "center", right: "end", start: "start", end: "end" };
        function S(o, s, i, c, l) {
          var k = Object(R.findBox)(new Uint8Array(o), ["mdat"]);
          if (k.length === 0) {
            l(new Error("Could not parse IMSC1 mdat"));
            return;
          }
          var I = k[0], C = Object(w.utf8ArrayToStr)(new Uint8Array(o, I.start, I.end - I.start)), P = Object(A.toTimescaleFromScale)(s, 1, i);
          try {
            c(d(C, P));
          } catch (N) {
            l(N);
          }
        }
        function d(o, s) {
          var i = new DOMParser(), c = i.parseFromString(o, "text/xml"), l = c.getElementsByTagName("tt")[0];
          if (!l)
            throw new Error("Invalid ttml");
          var k = { frameRate: 30, subFrameRate: 1, frameRateMultiplier: 0, tickRate: 0 }, I = Object.keys(k).reduce(function(F, U) {
            return F[U] = l.getAttribute("ttp:" + U) || k[U], F;
          }, {}), C = l.getAttribute("xml:space") !== "preserve", P = r(t(l, "styling", "style")), N = r(t(l, "layout", "region")), B = t(l, "body", "[begin]");
          return [].map.call(B, function(F) {
            var U = n(F, C);
            if (!U || !F.hasAttribute("begin"))
              return null;
            var j = v(F.getAttribute("begin"), I), H = v(F.getAttribute("dur"), I), V = v(F.getAttribute("end"), I);
            if (j === null)
              throw f(F);
            if (V === null) {
              if (H === null)
                throw f(F);
              V = j + H;
            }
            var K = new y.default(j - s, V - s, U);
            K.id = Object(L.generateCueId)(K.startTime, K.endTime, K.text);
            var q = N[F.getAttribute("region")], $ = P[F.getAttribute("style")];
            K.position = 10, K.size = 80;
            var J = h(q, $), z = J.textAlign;
            if (z) {
              var tt = E[z];
              tt && (K.lineAlign = tt), K.align = z;
            }
            return b(K, J), K;
          }).filter(function(F) {
            return F !== null;
          });
        }
        function t(o, s, i) {
          var c = o.getElementsByTagName(s)[0];
          return c ? [].slice.call(c.querySelectorAll(i)) : [];
        }
        function r(o) {
          return o.reduce(function(s, i) {
            var c = i.getAttribute("xml:id");
            return c && (s[c] = i), s;
          }, {});
        }
        function n(o, s) {
          return [].slice.call(o.childNodes).reduce(function(i, c, l) {
            var k;
            return c.nodeName === "br" && l ? i + `
` : (k = c.childNodes) !== null && k !== void 0 && k.length ? n(c, s) : s ? i + c.textContent.trim().replace(/\s+/g, " ") : i + c.textContent;
          }, "");
        }
        function h(o, s) {
          var i = "http://www.w3.org/ns/ttml#styling", c = ["displayAlign", "textAlign", "color", "backgroundColor", "fontSize", "fontFamily"];
          return c.reduce(function(l, k) {
            var I = a(s, i, k) || a(o, i, k);
            return I && (l[k] = I), l;
          }, {});
        }
        function a(o, s, i) {
          return o.hasAttributeNS(s, i) ? o.getAttributeNS(s, i) : null;
        }
        function f(o) {
          return new Error("Could not parse ttml timestamp " + o);
        }
        function v(o, s) {
          if (!o)
            return null;
          var i = Object(m.parseTimeStamp)(o);
          return i === null && (g.test(o) ? i = _(o, s) : D.test(o) && (i = p(o, s))), i;
        }
        function _(o, s) {
          var i = g.exec(o), c = (i[4] | 0) + (i[5] | 0) / s.subFrameRate;
          return (i[1] | 0) * 3600 + (i[2] | 0) * 60 + (i[3] | 0) + c / s.frameRate;
        }
        function p(o, s) {
          var i = D.exec(o), c = Number(i[1]), l = i[2];
          switch (l) {
            case "h":
              return c * 3600;
            case "m":
              return c * 60;
            case "ms":
              return c * 1e3;
            case "f":
              return c / s.frameRate;
            case "t":
              return c / s.tickRate;
          }
          return c;
        }
      }, "./src/utils/logger.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "enableLogs", function() {
          return L;
        }), e.d(T, "logger", function() {
          return b;
        });
        var R = function() {
        }, m = { trace: R, debug: R, log: R, warn: R, info: R, error: R }, y = m;
        function w(u) {
          var g = self.console[u];
          return g ? g.bind(self.console, "[" + u + "] >") : R;
        }
        function A(u) {
          for (var g = arguments.length, D = new Array(g > 1 ? g - 1 : 0), E = 1; E < g; E++)
            D[E - 1] = arguments[E];
          D.forEach(function(S) {
            y[S] = u[S] ? u[S].bind(u) : w(S);
          });
        }
        function L(u) {
          if (self.console && u === true || typeof u == "object") {
            A(u, "debug", "log", "info", "warn", "error");
            try {
              y.log();
            } catch {
              y = m;
            }
          } else
            y = m;
        }
        var b = y;
      }, "./src/utils/mediakeys-helper.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "KeySystems", function() {
          return R;
        }), e.d(T, "requestMediaKeySystemAccess", function() {
          return m;
        });
        var R;
        (function(y) {
          y.WIDEVINE = "com.widevine.alpha", y.PLAYREADY = "com.microsoft.playready";
        })(R || (R = {}));
        var m = function() {
          return typeof self != "undefined" && self.navigator && self.navigator.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null;
        }();
      }, "./src/utils/mediasource-helper.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "getMediaSource", function() {
          return R;
        });
        function R() {
          return self.MediaSource || self.WebKitMediaSource;
        }
      }, "./src/utils/mp4-tools.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "bin2str", function() {
          return A;
        }), e.d(T, "readUint16", function() {
          return L;
        }), e.d(T, "readUint32", function() {
          return b;
        }), e.d(T, "writeUint32", function() {
          return u;
        }), e.d(T, "findBox", function() {
          return g;
        }), e.d(T, "parseSegmentIndex", function() {
          return D;
        }), e.d(T, "parseInitSegment", function() {
          return E;
        }), e.d(T, "getStartDTS", function() {
          return S;
        }), e.d(T, "getDuration", function() {
          return d;
        }), e.d(T, "computeRawDurationFromSamples", function() {
          return t;
        }), e.d(T, "offsetStartDTS", function() {
          return r;
        }), e.d(T, "segmentValidRange", function() {
          return n;
        }), e.d(T, "appendUint8Array", function() {
          return h;
        });
        var R = e("./src/utils/typed-array.ts"), m = e("./src/loader/fragment.ts"), y = Math.pow(2, 32) - 1, w = [].push;
        function A(a) {
          return String.fromCharCode.apply(null, a);
        }
        function L(a, f) {
          "data" in a && (f += a.start, a = a.data);
          var v = a[f] << 8 | a[f + 1];
          return v < 0 ? 65536 + v : v;
        }
        function b(a, f) {
          "data" in a && (f += a.start, a = a.data);
          var v = a[f] << 24 | a[f + 1] << 16 | a[f + 2] << 8 | a[f + 3];
          return v < 0 ? 4294967296 + v : v;
        }
        function u(a, f, v) {
          "data" in a && (f += a.start, a = a.data), a[f] = v >> 24, a[f + 1] = v >> 16 & 255, a[f + 2] = v >> 8 & 255, a[f + 3] = v & 255;
        }
        function g(a, f) {
          var v = [];
          if (!f.length)
            return v;
          var _, p, o;
          "data" in a ? (_ = a.data, p = a.start, o = a.end) : (_ = a, p = 0, o = _.byteLength);
          for (var s = p; s < o; ) {
            var i = b(_, s), c = A(_.subarray(s + 4, s + 8)), l = i > 1 ? s + i : o;
            if (c === f[0])
              if (f.length === 1)
                v.push({ data: _, start: s + 8, end: l });
              else {
                var k = g({ data: _, start: s + 8, end: l }, f.slice(1));
                k.length && w.apply(v, k);
              }
            s = l;
          }
          return v;
        }
        function D(a) {
          var f = g(a, ["moov"]), v = f[0], _ = v ? v.end : null, p = g(a, ["sidx"]);
          if (!p || !p[0])
            return null;
          var o = [], s = p[0], i = s.data[0], c = i === 0 ? 8 : 16, l = b(s, c);
          c += 4;
          var k = 0, I = 0;
          i === 0 ? c += 8 : c += 16, c += 2;
          var C = s.end + I, P = L(s, c);
          c += 2;
          for (var N = 0; N < P; N++) {
            var B = c, F = b(s, B);
            B += 4;
            var U = F & 2147483647, j = (F & 2147483648) >>> 31;
            if (j === 1)
              return console.warn("SIDX has hierarchical references (not supported)"), null;
            var H = b(s, B);
            B += 4, o.push({ referenceSize: U, subsegmentDuration: H, info: { duration: H / l, start: C, end: C + U - 1 } }), C += U, B += 4, c = B;
          }
          return { earliestPresentationTime: k, timescale: l, version: i, referencesCount: P, references: o, moovEndOffset: _ };
        }
        function E(a) {
          for (var f = [], v = g(a, ["moov", "trak"]), _ = 0; _ < v.length; _++) {
            var p = v[_], o = g(p, ["tkhd"])[0];
            if (o) {
              var s = o.data[o.start], i = s === 0 ? 12 : 20, c = b(o, i), l = g(p, ["mdia", "mdhd"])[0];
              if (l) {
                s = l.data[l.start], i = s === 0 ? 12 : 20;
                var k = b(l, i), I = g(p, ["mdia", "hdlr"])[0];
                if (I) {
                  var C = A(I.data.subarray(I.start + 8, I.start + 12)), P = { soun: m.ElementaryStreamTypes.AUDIO, vide: m.ElementaryStreamTypes.VIDEO }[C];
                  if (P) {
                    var N = g(p, ["mdia", "minf", "stbl", "stsd"])[0], B = void 0;
                    N && (B = A(N.data.subarray(N.start + 12, N.start + 16))), f[c] = { timescale: k, type: P }, f[P] = { timescale: k, id: c, codec: B };
                  }
                }
              }
            }
          }
          var F = g(a, ["moov", "mvex", "trex"]);
          return F.forEach(function(U) {
            var j = b(U, 4), H = f[j];
            H && (H.default = { duration: b(U, 12), flags: b(U, 20) });
          }), f;
        }
        function S(a, f) {
          return g(f, ["moof", "traf"]).reduce(function(v, _) {
            var p = g(_, ["tfdt"])[0], o = p.data[p.start], s = g(_, ["tfhd"]).reduce(function(i, c) {
              var l = b(c, 4), k = a[l];
              if (k) {
                var I = b(p, 4);
                o === 1 && (I *= Math.pow(2, 32), I += b(p, 8));
                var C = k.timescale || 9e4, P = I / C;
                if (isFinite(P) && (i === null || P < i))
                  return P;
              }
              return i;
            }, null);
            return s !== null && isFinite(s) && (v === null || s < v) ? s : v;
          }, null) || 0;
        }
        function d(a, f) {
          for (var v = 0, _ = 0, p = 0, o = g(a, ["moof", "traf"]), s = 0; s < o.length; s++) {
            var i = o[s], c = g(i, ["tfhd"])[0], l = b(c, 4), k = f[l];
            if (k) {
              var I = k.default, C = b(c, 0) | (I == null ? void 0 : I.flags), P = I == null ? void 0 : I.duration;
              C & 8 && (C & 2 ? P = b(c, 12) : P = b(c, 8));
              for (var N = k.timescale || 9e4, B = g(i, ["trun"]), F = 0; F < B.length; F++) {
                if (P) {
                  var U = b(B[F], 4);
                  v = P * U;
                } else
                  v = t(B[F]);
                k.type === m.ElementaryStreamTypes.VIDEO ? _ += v / N : k.type === m.ElementaryStreamTypes.AUDIO && (p += v / N);
              }
            }
          }
          if (_ === 0 && p === 0) {
            var j = D(a);
            if (j != null && j.references)
              return j.references.reduce(function(H, V) {
                return H + V.info.duration || 0;
              }, 0);
          }
          return _ || p;
        }
        function t(a) {
          var f = b(a, 0), v = 8;
          f & 1 && (v += 4), f & 4 && (v += 4);
          for (var _ = 0, p = b(a, 4), o = 0; o < p; o++) {
            if (f & 256) {
              var s = b(a, v);
              _ += s, v += 4;
            }
            f & 512 && (v += 4), f & 1024 && (v += 4), f & 2048 && (v += 4);
          }
          return _;
        }
        function r(a, f, v) {
          g(f, ["moof", "traf"]).forEach(function(_) {
            g(_, ["tfhd"]).forEach(function(p) {
              var o = b(p, 4), s = a[o];
              if (s) {
                var i = s.timescale || 9e4;
                g(_, ["tfdt"]).forEach(function(c) {
                  var l = c.data[c.start], k = b(c, 4);
                  if (l === 0)
                    u(c, 4, k - v * i);
                  else {
                    k *= Math.pow(2, 32), k += b(c, 8), k -= v * i, k = Math.max(k, 0);
                    var I = Math.floor(k / (y + 1)), C = Math.floor(k % (y + 1));
                    u(c, 4, I), u(c, 8, C);
                  }
                });
              }
            });
          });
        }
        function n(a) {
          var f = { valid: null, remainder: null }, v = g(a, ["moof"]);
          if (v) {
            if (v.length < 2)
              return f.remainder = a, f;
          } else
            return f;
          var _ = v[v.length - 1];
          return f.valid = Object(R.sliceUint8)(a, 0, _.start - 8), f.remainder = Object(R.sliceUint8)(a, _.start - 8), f;
        }
        function h(a, f) {
          var v = new Uint8Array(a.length + f.length);
          return v.set(a), v.set(f, a.length), v;
        }
      }, "./src/utils/output-filter.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "default", function() {
          return R;
        });
        var R = function() {
          function m(w, A) {
            this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = w, this.trackName = A;
          }
          var y = m.prototype;
          return y.dispatchCue = function() {
            this.startTime !== null && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null);
          }, y.newCue = function(w, A, L) {
            (this.startTime === null || this.startTime > w) && (this.startTime = w), this.endTime = A, this.screen = L, this.timelineController.createCaptionsTrack(this.trackName);
          }, y.reset = function() {
            this.cueRanges = [];
          }, m;
        }();
      }, "./src/utils/texttrack-utils.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "sendAddTrackEvent", function() {
          return m;
        }), e.d(T, "addCueToTrack", function() {
          return y;
        }), e.d(T, "clearCurrentCues", function() {
          return w;
        }), e.d(T, "removeCuesInRange", function() {
          return A;
        }), e.d(T, "getCuesInRange", function() {
          return b;
        });
        var R = e("./src/utils/logger.ts");
        function m(u, g) {
          var D;
          try {
            D = new Event("addtrack");
          } catch {
            D = document.createEvent("Event"), D.initEvent("addtrack", false, false);
          }
          D.track = u, g.dispatchEvent(D);
        }
        function y(u, g) {
          var D = u.mode;
          if (D === "disabled" && (u.mode = "hidden"), u.cues && !u.cues.getCueById(g.id))
            try {
              if (u.addCue(g), !u.cues.getCueById(g.id))
                throw new Error("addCue is failed for: " + g);
            } catch (S) {
              R.logger.debug("[texttrack-utils]: " + S);
              var E = new self.TextTrackCue(g.startTime, g.endTime, g.text);
              E.id = g.id, u.addCue(E);
            }
          D === "disabled" && (u.mode = D);
        }
        function w(u) {
          var g = u.mode;
          if (g === "disabled" && (u.mode = "hidden"), u.cues)
            for (var D = u.cues.length; D--; )
              u.removeCue(u.cues[D]);
          g === "disabled" && (u.mode = g);
        }
        function A(u, g, D) {
          var E = u.mode;
          if (E === "disabled" && (u.mode = "hidden"), u.cues && u.cues.length > 0)
            for (var S = b(u.cues, g, D), d = 0; d < S.length; d++)
              u.removeCue(S[d]);
          E === "disabled" && (u.mode = E);
        }
        function L(u, g) {
          if (g < u[0].startTime)
            return 0;
          var D = u.length - 1;
          if (g > u[D].endTime)
            return -1;
          for (var E = 0, S = D; E <= S; ) {
            var d = Math.floor((S + E) / 2);
            if (g < u[d].startTime)
              S = d - 1;
            else if (g > u[d].startTime && E < D)
              E = d + 1;
            else
              return d;
          }
          return u[E].startTime - g < g - u[S].startTime ? E : S;
        }
        function b(u, g, D) {
          var E = [], S = L(u, g);
          if (S > -1)
            for (var d = S, t = u.length; d < t; d++) {
              var r = u[d];
              if (r.startTime >= g && r.endTime <= D)
                E.push(r);
              else if (r.startTime > D)
                return E;
            }
          return E;
        }
      }, "./src/utils/time-ranges.ts": function(x, T, e) {
        "use strict";
        e.r(T);
        var R = { toString: function(m) {
          for (var y = "", w = m.length, A = 0; A < w; A++)
            y += "[" + m.start(A).toFixed(3) + "," + m.end(A).toFixed(3) + "]";
          return y;
        } };
        T.default = R;
      }, "./src/utils/timescale-conversion.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "toTimescaleFromBase", function() {
          return m;
        }), e.d(T, "toTimescaleFromScale", function() {
          return y;
        }), e.d(T, "toMsFromMpegTsClock", function() {
          return w;
        }), e.d(T, "toMpegTsClockFromTimescale", function() {
          return A;
        });
        var R = 9e4;
        function m(L, b, u, g) {
          u === void 0 && (u = 1), g === void 0 && (g = false);
          var D = L * b * u;
          return g ? Math.round(D) : D;
        }
        function y(L, b, u, g) {
          return u === void 0 && (u = 1), g === void 0 && (g = false), m(L, b, 1 / u, g);
        }
        function w(L, b) {
          return b === void 0 && (b = false), m(L, 1e3, 1 / R, b);
        }
        function A(L, b) {
          return b === void 0 && (b = 1), m(L, R, 1 / b);
        }
      }, "./src/utils/typed-array.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "sliceUint8", function() {
          return R;
        });
        function R(m, y, w) {
          return Uint8Array.prototype.slice ? m.slice(y, w) : new Uint8Array(Array.prototype.slice.call(m, y, w));
        }
      }, "./src/utils/vttcue.ts": function(x, T, e) {
        "use strict";
        e.r(T), T.default = function() {
          if (typeof self != "undefined" && self.VTTCue)
            return self.VTTCue;
          var R = ["", "lr", "rl"], m = ["start", "middle", "end", "left", "right"];
          function y(u, g) {
            if (typeof g != "string" || !Array.isArray(u))
              return false;
            var D = g.toLowerCase();
            return ~u.indexOf(D) ? D : false;
          }
          function w(u) {
            return y(R, u);
          }
          function A(u) {
            return y(m, u);
          }
          function L(u) {
            for (var g = arguments.length, D = new Array(g > 1 ? g - 1 : 0), E = 1; E < g; E++)
              D[E - 1] = arguments[E];
            for (var S = 1; S < arguments.length; S++) {
              var d = arguments[S];
              for (var t in d)
                u[t] = d[t];
            }
            return u;
          }
          function b(u, g, D) {
            var E = this, S = { enumerable: true };
            E.hasBeenReset = false;
            var d = "", t = false, r = u, n = g, h = D, a = null, f = "", v = true, _ = "auto", p = "start", o = 50, s = "middle", i = 50, c = "middle";
            Object.defineProperty(E, "id", L({}, S, { get: function() {
              return d;
            }, set: function(l) {
              d = "" + l;
            } })), Object.defineProperty(E, "pauseOnExit", L({}, S, { get: function() {
              return t;
            }, set: function(l) {
              t = !!l;
            } })), Object.defineProperty(E, "startTime", L({}, S, { get: function() {
              return r;
            }, set: function(l) {
              if (typeof l != "number")
                throw new TypeError("Start time must be set to a number.");
              r = l, this.hasBeenReset = true;
            } })), Object.defineProperty(E, "endTime", L({}, S, { get: function() {
              return n;
            }, set: function(l) {
              if (typeof l != "number")
                throw new TypeError("End time must be set to a number.");
              n = l, this.hasBeenReset = true;
            } })), Object.defineProperty(E, "text", L({}, S, { get: function() {
              return h;
            }, set: function(l) {
              h = "" + l, this.hasBeenReset = true;
            } })), Object.defineProperty(E, "region", L({}, S, { get: function() {
              return a;
            }, set: function(l) {
              a = l, this.hasBeenReset = true;
            } })), Object.defineProperty(E, "vertical", L({}, S, { get: function() {
              return f;
            }, set: function(l) {
              var k = w(l);
              if (k === false)
                throw new SyntaxError("An invalid or illegal string was specified.");
              f = k, this.hasBeenReset = true;
            } })), Object.defineProperty(E, "snapToLines", L({}, S, { get: function() {
              return v;
            }, set: function(l) {
              v = !!l, this.hasBeenReset = true;
            } })), Object.defineProperty(E, "line", L({}, S, { get: function() {
              return _;
            }, set: function(l) {
              if (typeof l != "number" && l !== "auto")
                throw new SyntaxError("An invalid number or illegal string was specified.");
              _ = l, this.hasBeenReset = true;
            } })), Object.defineProperty(E, "lineAlign", L({}, S, { get: function() {
              return p;
            }, set: function(l) {
              var k = A(l);
              if (!k)
                throw new SyntaxError("An invalid or illegal string was specified.");
              p = k, this.hasBeenReset = true;
            } })), Object.defineProperty(E, "position", L({}, S, { get: function() {
              return o;
            }, set: function(l) {
              if (l < 0 || l > 100)
                throw new Error("Position must be between 0 and 100.");
              o = l, this.hasBeenReset = true;
            } })), Object.defineProperty(E, "positionAlign", L({}, S, { get: function() {
              return s;
            }, set: function(l) {
              var k = A(l);
              if (!k)
                throw new SyntaxError("An invalid or illegal string was specified.");
              s = k, this.hasBeenReset = true;
            } })), Object.defineProperty(E, "size", L({}, S, { get: function() {
              return i;
            }, set: function(l) {
              if (l < 0 || l > 100)
                throw new Error("Size must be between 0 and 100.");
              i = l, this.hasBeenReset = true;
            } })), Object.defineProperty(E, "align", L({}, S, { get: function() {
              return c;
            }, set: function(l) {
              var k = A(l);
              if (!k)
                throw new SyntaxError("An invalid or illegal string was specified.");
              c = k, this.hasBeenReset = true;
            } })), E.displayState = void 0;
          }
          return b.prototype.getCueAsHTML = function() {
            var u = self.WebVTT;
            return u.convertCueToDOMTree(self, this.text);
          }, b;
        }();
      }, "./src/utils/vttparser.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "parseTimeStamp", function() {
          return y;
        }), e.d(T, "fixLineBreaks", function() {
          return g;
        }), e.d(T, "VTTParser", function() {
          return D;
        });
        var R = e("./src/utils/vttcue.ts"), m = function() {
          function E() {
          }
          var S = E.prototype;
          return S.decode = function(d, t) {
            if (!d)
              return "";
            if (typeof d != "string")
              throw new Error("Error - expected string data.");
            return decodeURIComponent(encodeURIComponent(d));
          }, E;
        }();
        function y(E) {
          function S(t, r, n, h) {
            return (t | 0) * 3600 + (r | 0) * 60 + (n | 0) + parseFloat(h || 0);
          }
          var d = E.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
          return d ? parseFloat(d[2]) > 59 ? S(d[2], d[3], 0, d[4]) : S(d[1], d[2], d[3], d[4]) : null;
        }
        var w = function() {
          function E() {
            this.values = Object.create(null);
          }
          var S = E.prototype;
          return S.set = function(d, t) {
            !this.get(d) && t !== "" && (this.values[d] = t);
          }, S.get = function(d, t, r) {
            return r ? this.has(d) ? this.values[d] : t[r] : this.has(d) ? this.values[d] : t;
          }, S.has = function(d) {
            return d in this.values;
          }, S.alt = function(d, t, r) {
            for (var n = 0; n < r.length; ++n)
              if (t === r[n]) {
                this.set(d, t);
                break;
              }
          }, S.integer = function(d, t) {
            /^-?\d+$/.test(t) && this.set(d, parseInt(t, 10));
          }, S.percent = function(d, t) {
            if (/^([\d]{1,3})(\.[\d]*)?%$/.test(t)) {
              var r = parseFloat(t);
              if (r >= 0 && r <= 100)
                return this.set(d, r), true;
            }
            return false;
          }, E;
        }();
        function A(E, S, d, t) {
          var r = t ? E.split(t) : [E];
          for (var n in r)
            if (typeof r[n] == "string") {
              var h = r[n].split(d);
              if (h.length === 2) {
                var a = h[0], f = h[1];
                S(a, f);
              }
            }
        }
        var L = new R.default(0, 0, ""), b = L.align === "middle" ? "middle" : "center";
        function u(E, S, d) {
          var t = E;
          function r() {
            var a = y(E);
            if (a === null)
              throw new Error("Malformed timestamp: " + t);
            return E = E.replace(/^[^\sa-zA-Z-]+/, ""), a;
          }
          function n(a, f) {
            var v = new w();
            A(a, function(o, s) {
              var i;
              switch (o) {
                case "region":
                  for (var c = d.length - 1; c >= 0; c--)
                    if (d[c].id === s) {
                      v.set(o, d[c].region);
                      break;
                    }
                  break;
                case "vertical":
                  v.alt(o, s, ["rl", "lr"]);
                  break;
                case "line":
                  i = s.split(","), v.integer(o, i[0]), v.percent(o, i[0]) && v.set("snapToLines", false), v.alt(o, i[0], ["auto"]), i.length === 2 && v.alt("lineAlign", i[1], ["start", b, "end"]);
                  break;
                case "position":
                  i = s.split(","), v.percent(o, i[0]), i.length === 2 && v.alt("positionAlign", i[1], ["start", b, "end", "line-left", "line-right", "auto"]);
                  break;
                case "size":
                  v.percent(o, s);
                  break;
                case "align":
                  v.alt(o, s, ["start", b, "end", "left", "right"]);
                  break;
              }
            }, /:/, /\s/), f.region = v.get("region", null), f.vertical = v.get("vertical", "");
            var _ = v.get("line", "auto");
            _ === "auto" && L.line === -1 && (_ = -1), f.line = _, f.lineAlign = v.get("lineAlign", "start"), f.snapToLines = v.get("snapToLines", true), f.size = v.get("size", 100), f.align = v.get("align", b);
            var p = v.get("position", "auto");
            p === "auto" && L.position === 50 && (p = f.align === "start" || f.align === "left" ? 0 : f.align === "end" || f.align === "right" ? 100 : 50), f.position = p;
          }
          function h() {
            E = E.replace(/^\s+/, "");
          }
          if (h(), S.startTime = r(), h(), E.substr(0, 3) !== "-->")
            throw new Error("Malformed time stamp (time stamps must be separated by '-->'): " + t);
          E = E.substr(3), h(), S.endTime = r(), h(), n(E, S);
        }
        function g(E) {
          return E.replace(/<br(?: \/)?>/gi, `
`);
        }
        var D = function() {
          function E() {
            this.state = "INITIAL", this.buffer = "", this.decoder = new m(), this.regionList = [], this.cue = null, this.oncue = void 0, this.onparsingerror = void 0, this.onflush = void 0;
          }
          var S = E.prototype;
          return S.parse = function(d) {
            var t = this;
            d && (t.buffer += t.decoder.decode(d, { stream: true }));
            function r() {
              var _ = t.buffer, p = 0;
              for (_ = g(_); p < _.length && _[p] !== "\r" && _[p] !== `
`; )
                ++p;
              var o = _.substr(0, p);
              return _[p] === "\r" && ++p, _[p] === `
` && ++p, t.buffer = _.substr(p), o;
            }
            function n(_) {
              A(_, function(p, o) {
              }, /:/);
            }
            try {
              var h = "";
              if (t.state === "INITIAL") {
                if (!/\r\n|\n/.test(t.buffer))
                  return this;
                h = r();
                var a = h.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                if (!a || !a[0])
                  throw new Error("Malformed WebVTT signature.");
                t.state = "HEADER";
              }
              for (var f = false; t.buffer; ) {
                if (!/\r\n|\n/.test(t.buffer))
                  return this;
                switch (f ? f = false : h = r(), t.state) {
                  case "HEADER":
                    /:/.test(h) ? n(h) : h || (t.state = "ID");
                    continue;
                  case "NOTE":
                    h || (t.state = "ID");
                    continue;
                  case "ID":
                    if (/^NOTE($|[ \t])/.test(h)) {
                      t.state = "NOTE";
                      break;
                    }
                    if (!h)
                      continue;
                    if (t.cue = new R.default(0, 0, ""), t.state = "CUE", h.indexOf("-->") === -1) {
                      t.cue.id = h;
                      continue;
                    }
                  case "CUE":
                    if (!t.cue) {
                      t.state = "BADCUE";
                      continue;
                    }
                    try {
                      u(h, t.cue, t.regionList);
                    } catch {
                      t.cue = null, t.state = "BADCUE";
                      continue;
                    }
                    t.state = "CUETEXT";
                    continue;
                  case "CUETEXT":
                    {
                      var v = h.indexOf("-->") !== -1;
                      if (!h || v && (f = true)) {
                        t.oncue && t.cue && t.oncue(t.cue), t.cue = null, t.state = "ID";
                        continue;
                      }
                      if (t.cue === null)
                        continue;
                      t.cue.text && (t.cue.text += `
`), t.cue.text += h;
                    }
                    continue;
                  case "BADCUE":
                    h || (t.state = "ID");
                }
              }
            } catch {
              t.state === "CUETEXT" && t.cue && t.oncue && t.oncue(t.cue), t.cue = null, t.state = t.state === "INITIAL" ? "BADWEBVTT" : "BADCUE";
            }
            return this;
          }, S.flush = function() {
            var d = this;
            try {
              if ((d.cue || d.state === "HEADER") && (d.buffer += `

`, d.parse()), d.state === "INITIAL" || d.state === "BADWEBVTT")
                throw new Error("Malformed WebVTT signature.");
            } catch (t) {
              d.onparsingerror && d.onparsingerror(t);
            }
            return d.onflush && d.onflush(), this;
          }, E;
        }();
      }, "./src/utils/webvtt-parser.ts": function(x, T, e) {
        "use strict";
        e.r(T), e.d(T, "generateCueId", function() {
          return D;
        }), e.d(T, "parseWebVTT", function() {
          return S;
        });
        var R = e("./src/polyfills/number.ts"), m = e("./src/utils/vttparser.ts"), y = e("./src/demux/id3.ts"), w = e("./src/utils/timescale-conversion.ts"), A = e("./src/remux/mp4-remuxer.ts"), L = /\r\n|\n\r|\n|\r/g, b = function(d, t, r) {
          return r === void 0 && (r = 0), d.substr(r, t.length) === t;
        }, u = function(d) {
          var t = parseInt(d.substr(-3)), r = parseInt(d.substr(-6, 2)), n = parseInt(d.substr(-9, 2)), h = d.length > 9 ? parseInt(d.substr(0, d.indexOf(":"))) : 0;
          if (!Object(R.isFiniteNumber)(t) || !Object(R.isFiniteNumber)(r) || !Object(R.isFiniteNumber)(n) || !Object(R.isFiniteNumber)(h))
            throw Error("Malformed X-TIMESTAMP-MAP: Local:" + d);
          return t += 1e3 * r, t += 60 * 1e3 * n, t += 60 * 60 * 1e3 * h, t;
        }, g = function(d) {
          for (var t = 5381, r = d.length; r; )
            t = t * 33 ^ d.charCodeAt(--r);
          return (t >>> 0).toString();
        };
        function D(d, t, r) {
          return g(d.toString()) + g(t.toString()) + g(r);
        }
        var E = function(d, t, r) {
          var n = d[t], h = d[n.prevCC];
          if (!h || !h.new && n.new) {
            d.ccOffset = d.presentationOffset = n.start, n.new = false;
            return;
          }
          for (; (a = h) !== null && a !== void 0 && a.new; ) {
            var a;
            d.ccOffset += n.start - h.start, n.new = false, n = h, h = d[n.prevCC];
          }
          d.presentationOffset = r;
        };
        function S(d, t, r, n, h, a, f, v) {
          var _ = new m.VTTParser(), p = Object(y.utf8ArrayToStr)(new Uint8Array(d)).trim().replace(L, `
`).split(`
`), o = [], s = Object(w.toMpegTsClockFromTimescale)(t, r), i = "00:00.000", c = 0, l = 0, k, I = true, C = false;
          _.oncue = function(P) {
            var N = n[h], B = n.ccOffset, F = (c - s) / 9e4;
            if (N != null && N.new && (l !== void 0 ? B = n.ccOffset = N.start : E(n, h, F)), F && (B = F - n.presentationOffset), C) {
              var U = P.endTime - P.startTime, j = Object(A.normalizePts)((P.startTime + B - l) * 9e4, a * 9e4) / 9e4;
              P.startTime = j, P.endTime = j + U;
            }
            var H = P.text.trim();
            P.text = decodeURIComponent(encodeURIComponent(H)), P.id || (P.id = D(P.startTime, P.endTime, H)), P.endTime > 0 && o.push(P);
          }, _.onparsingerror = function(P) {
            k = P;
          }, _.onflush = function() {
            if (k) {
              v(k);
              return;
            }
            f(o);
          }, p.forEach(function(P) {
            if (I)
              if (b(P, "X-TIMESTAMP-MAP=")) {
                I = false, C = true, P.substr(16).split(",").forEach(function(N) {
                  b(N, "LOCAL:") ? i = N.substr(6) : b(N, "MPEGTS:") && (c = parseInt(N.substr(7)));
                });
                try {
                  l = u(i) / 1e3;
                } catch (N) {
                  C = false, k = N;
                }
                return;
              } else
                P === "" && (I = false);
            _.parse(P + `
`);
          }), _.flush();
        }
      }, "./src/utils/xhr-loader.ts": function(x, T, e) {
        "use strict";
        e.r(T);
        var R = e("./src/utils/logger.ts"), m = e("./src/loader/load-stats.ts"), y = /^age:\s*[\d.]+\s*$/m, w = function() {
          function A(b) {
            this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = void 0, this.loader = null, this.stats = void 0, this.xhrSetup = b ? b.xhrSetup : null, this.stats = new m.LoadStats(), this.retryDelay = 0;
          }
          var L = A.prototype;
          return L.destroy = function() {
            this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null;
          }, L.abortInternal = function() {
            var b = this.loader;
            self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), b && (b.onreadystatechange = null, b.onprogress = null, b.readyState !== 4 && (this.stats.aborted = true, b.abort()));
          }, L.abort = function() {
            var b;
            this.abortInternal(), (b = this.callbacks) !== null && b !== void 0 && b.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader);
          }, L.load = function(b, u, g) {
            if (this.stats.loading.start)
              throw new Error("Loader can only be used once.");
            this.stats.loading.start = self.performance.now(), this.context = b, this.config = u, this.callbacks = g, this.retryDelay = u.retryDelay, this.loadInternal();
          }, L.loadInternal = function() {
            var b = this.config, u = this.context;
            if (b) {
              var g = this.loader = new self.XMLHttpRequest(), D = this.stats;
              D.loading.first = 0, D.loaded = 0;
              var E = this.xhrSetup;
              try {
                if (E)
                  try {
                    E(g, u.url);
                  } catch {
                    g.open("GET", u.url, true), E(g, u.url);
                  }
                g.readyState || g.open("GET", u.url, true);
              } catch (S) {
                this.callbacks.onError({ code: g.status, text: S.message }, u, g);
                return;
              }
              u.rangeEnd && g.setRequestHeader("Range", "bytes=" + u.rangeStart + "-" + (u.rangeEnd - 1)), g.onreadystatechange = this.readystatechange.bind(this), g.onprogress = this.loadprogress.bind(this), g.responseType = u.responseType, self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), b.timeout), g.send();
            }
          }, L.readystatechange = function() {
            var b = this.context, u = this.loader, g = this.stats;
            if (!(!b || !u)) {
              var D = u.readyState, E = this.config;
              if (!g.aborted && D >= 2)
                if (self.clearTimeout(this.requestTimeout), g.loading.first === 0 && (g.loading.first = Math.max(self.performance.now(), g.loading.start)), D === 4) {
                  u.onreadystatechange = null, u.onprogress = null;
                  var S = u.status;
                  if (S >= 200 && S < 300) {
                    g.loading.end = Math.max(self.performance.now(), g.loading.first);
                    var d, t;
                    if (b.responseType === "arraybuffer" ? (d = u.response, t = d.byteLength) : (d = u.responseText, t = d.length), g.loaded = g.total = t, !this.callbacks)
                      return;
                    var r = this.callbacks.onProgress;
                    if (r && r(g, b, d, u), !this.callbacks)
                      return;
                    var n = { url: u.responseURL, data: d };
                    this.callbacks.onSuccess(n, g, b, u);
                  } else
                    g.retry >= E.maxRetry || S >= 400 && S < 499 ? (R.logger.error(S + " while loading " + b.url), this.callbacks.onError({ code: S, text: u.statusText }, b, u)) : (R.logger.warn(S + " while loading " + b.url + ", retrying in " + this.retryDelay + "..."), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, E.maxRetryDelay), g.retry++);
                } else
                  self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), E.timeout);
            }
          }, L.loadtimeout = function() {
            R.logger.warn("timeout while loading " + this.context.url);
            var b = this.callbacks;
            b && (this.abortInternal(), b.onTimeout(this.stats, this.context, this.loader));
          }, L.loadprogress = function(b) {
            var u = this.stats;
            u.loaded = b.loaded, b.lengthComputable && (u.total = b.total);
          }, L.getCacheAge = function() {
            var b = null;
            if (this.loader && y.test(this.loader.getAllResponseHeaders())) {
              var u = this.loader.getResponseHeader("age");
              b = u ? parseFloat(u) : null;
            }
            return b;
          }, A;
        }();
        T.default = w;
      } }).default;
    });
  }), Kn = ae((O) => {
    var M = Object.create, x = Object.defineProperty, T = Object.getOwnPropertyDescriptor, e = Object.getOwnPropertyNames, R = Object.getPrototypeOf, m = Object.prototype.hasOwnProperty, y = (i) => x(i, "__esModule", { value: true }), w = (i, c) => {
      y(i);
      for (var l in c)
        x(i, l, { get: c[l], enumerable: true });
    }, A = (i, c, l) => {
      if (c && typeof c == "object" || typeof c == "function")
        for (let k of e(c))
          !m.call(i, k) && k !== "default" && x(i, k, { get: () => c[k], enumerable: !(l = T(c, k)) || l.enumerable });
      return i;
    }, L = (i) => A(y(x(i != null ? M(R(i)) : {}, "default", i && i.__esModule && "default" in i ? { get: () => i.default, enumerable: true } : { value: i, enumerable: true })), i);
    w(O, { ExtensionMimeTypeMap: () => E, Hls: () => u.default, MimeTypeShorthandMap: () => S, StreamTypes: () => D, allMediaTypes: () => t, getStreamTypeConfig: () => f, getType: () => a, inferMimeTypeFromURL: () => h, initialize: () => s, loadMedia: () => o, mux: () => b.default, setupHls: () => _, setupMux: () => p, shorthandKeys: () => d, teardown: () => v, toMuxVideoURL: () => n, toPlaybackIdParts: () => r });
    var b = L(Gn()), u = L(Vn()), g = (i, c) => i in c, D = { VOD: "on-demand", LIVE: "live", LL_LIVE: "ll-live" }, E = { M3U8: "application/vnd.apple.mpegurl", MP4: "video/mp4" }, S = { HLS: E.M3U8 }, d = Object.keys(S), t = [...Object.values(E), ...d, ...d.map((i) => i.toUpperCase()), ...d.map((i) => i.toLowerCase())], r = (i) => {
      let c = i.indexOf("?");
      if (c < 0)
        return [i];
      let l = i.slice(0, c), k = i.slice(c);
      return [l, k];
    }, n = (i) => {
      if (!i)
        return;
      let [c, l = ""] = r(i);
      return `https://stream.mux.com/${c}.m3u8${l}`;
    }, h = (i) => {
      let c = "";
      try {
        c = new URL(i).pathname;
      } catch {
        console.error("invalid url");
      }
      let l = c.lastIndexOf(".");
      if (l < 0)
        return "";
      let k = c.slice(l + 1).toUpperCase();
      return g(k, E) ? E[k] : "";
    }, a = (i) => {
      let c = i.type;
      if (c) {
        let k = c.toUpperCase();
        return g(k, S) ? S[k] : c;
      }
      let { src: l } = i;
      return l ? h(l) : "";
    }, f = (i) => i === D.LL_LIVE ? { maxFragLookUpTolerance: 1e-3 } : {}, v = (i, c) => {
      c && (c.detachMedia(), c.destroy()), (i == null ? void 0 : i.mux) && (i.mux.destroy(), i.mux);
    }, _ = (i, c) => {
      var l;
      let { debug: k, preferMse: I, streamType: C, startTime: P = -1 } = i, N = a(i), B = N === E.M3U8, F = !N || ((l = c == null ? void 0 : c.canPlayType(N)) != null ? l : true), U = u.default.isSupported();
      if (B && !(!B || F && !(I && U)) && U) {
        let j = f(C);
        return new u.default({ debug: k, startPosition: P, ...j });
      }
    }, p = (i, c, l) => {
      let { envKey: k } = i;
      if (k && c) {
        let { playerInitTime: I, playerSoftwareName: C, playerSoftwareVersion: P, beaconDomain: N, metadata: B, debug: F } = i;
        b.default.monitor(c, { debug: F, beaconDomain: N, hlsjs: l, Hls: l ? u.default : void 0, data: { env_key: k, player_software_name: C, player_software_version: P, player_init_time: I, ...B } });
      }
    }, o = (i, c, l) => {
      var k;
      if (!c) {
        console.warn("attempting to load media before mediaEl exists");
        return;
      }
      let { preferMse: I } = i, C = a(i), P = C === E.M3U8, N = !C || ((k = c == null ? void 0 : c.canPlayType(C)) != null ? k : true), B = u.default.isSupported(), F = !P || N && !(I && B), { src: U } = i;
      if (c && N && F)
        if (typeof U == "string") {
          let { startTime: j } = i;
          if (c.setAttribute("src", U), j) {
            let H = ({ target: V }) => {
              V.currentTime = j, V.removeEventListener("loadedmetadata", H);
            };
            c.addEventListener("loadedmetadata", H);
          }
        } else
          c.removeAttribute("src");
      else
        l && U ? (l.on(u.default.Events.ERROR, (j, H) => {
          if (H.fatal)
            switch (H.type) {
              case u.default.ErrorTypes.NETWORK_ERROR:
                console.error("fatal network error encountered, try to recover"), l.startLoad();
                break;
              case u.default.ErrorTypes.MEDIA_ERROR:
                console.error("fatal media error encountered, try to recover"), l.recoverMediaError();
                break;
              default:
                console.error("unrecoverable fatal error encountered, cannot recover (check logs for more info)"), l.destroy();
                break;
            }
        }), l.loadSource(U), l.attachMedia(c)) : console.error("It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.");
    }, s = (i, c, l) => {
      v(c, l);
      let k = _(i, c);
      return p(i, c, k), o(i, c, k), k;
    };
  }), Pl = $r(Hn()), Yr = document.createElement("template");
  Yr.innerHTML = `
<style>
  :host {
    /* Supposed to reset styles. Need to understand the specific effects more */
    all: initial;

    /* display:inline (like the native el) makes it so you can't fill
      the container with the native el */
    display: inline-block;
    box-sizing: border-box;

    width: auto;
    height: auto;
  }

  video {
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
    min-height: 100%;
  }

</style>

<video crossorigin></video>
`;
  var te = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" }), this.shadowRoot.appendChild(Yr.content.cloneNode(true));
      let O = this.nativeEl = this.shadowRoot.querySelector("video");
      Array.prototype.forEach.call(this.attributes, (x) => {
        this.attributeChangedCallback(x.name, null, x.value);
      }), O.defaultMuted && (O.muted = true), this.querySelectorAll(":scope > track").forEach((x) => {
        this.nativeEl.appendChild(x.cloneNode());
      });
      let M = (x, T) => {
        for (let e of x)
          e.type === "childList" && (e.removedNodes.forEach((R) => {
            this.nativeEl.removeChild(this.nativeEl.querySelector(`track[src="${R.src}"]`));
          }), e.addedNodes.forEach((R) => {
            this.nativeEl.appendChild(R.cloneNode());
          }));
      };
      new MutationObserver(M).observe(this, { childList: true, subtree: true });
    }
    static get observedAttributes() {
      let O = [];
      Object.getOwnPropertyNames(this.prototype).forEach((x) => {
        let T = false;
        try {
          typeof this.prototype[x] == "function" && (T = true);
        } catch {
        }
        !T && x !== x.toUpperCase() && O.push(x.toLowerCase());
      });
      let M = Object.getPrototypeOf(this).observedAttributes;
      return M && (O = O.concat(M)), O;
    }
    attributeChangedCallback(O, M, x) {
      let T = Object.getOwnPropertyNames(Object.getPrototypeOf(this)), e = Wn(T, O), R = Object.getPrototypeOf(this.constructor).toString().indexOf("function HTMLElement") === 0;
      e && !R ? typeof this[e] == "boolean" ? x === null ? this[e] = false : this[e] = true : this[e] = x : x === null ? this.nativeEl.removeAttribute(O) : ["id", "class"].indexOf(O) === -1 && this.nativeEl.setAttribute(O, x);
    }
    connectedCallback() {
    }
  }, se = [], zr = document.createElement("video"), qn = ["webkitDisplayingFullscreen", "webkitSupportsFullscreen"];
  for (let O = Object.getPrototypeOf(zr); O && O !== HTMLElement.prototype; O = Object.getPrototypeOf(O))
    Object.keys(O).forEach((M) => {
      qn.indexOf(M) === -1 && se.push(M);
    });
  se = se.concat(Object.keys(EventTarget.prototype));
  se.forEach((O) => {
    if (typeof zr[O] == "function")
      te.prototype[O] = function() {
        return this.nativeEl[O].apply(this.nativeEl, arguments);
      };
    else {
      let M = { get() {
        return this.nativeEl[O];
      } };
      O !== O.toUpperCase() && (M.set = function(x) {
        this.nativeEl[O] = x;
      }), Object.defineProperty(te.prototype, O, M);
    }
  });
  function Wn(O, M) {
    let x = null;
    return O.forEach((T) => {
      T.toLowerCase() == M.toLowerCase() && (x = T);
    }), x;
  }
  globalThis.customElements.get("custom-video") || (globalThis.customElements.define("custom-video", te), globalThis.CustomVideoElement = te);
  var Qr = te, qt = $r(Kn()), $n = () => {
    try {
      return "0.2.0";
    } catch {
    }
    return "UNKNOWN";
  }, Yn = $n(), zn = () => Yn, ht = { ENV_KEY: "env-key", DEBUG: "debug", PLAYBACK_ID: "playback-id", METADATA_URL: "metadata-url", PREFER_MSE: "prefer-mse", METADATA_VIDEO_ID: "metadata-video-id", METADATA_VIDEO_TITLE: "metadata-video-title", METADATA_VIEWER_USER_ID: "metadata-viewer-user-id", BEACON_DOMAIN: "beacon-domain", TYPE: "type", STREAM_TYPE: "stream-type", START_TIME: "start-time" }, Qn = Object.values(ht), Xn = zn(), Zn = "mux-video", Xr = class extends Qr {
    constructor() {
      super();
      this.__metadata = {}, this.__muxPlayerInitTime = Date.now();
    }
    static get observedAttributes() {
      var O;
      return [...Qn, ...(O = Qr.observedAttributes) != null ? O : []];
    }
    get playerSoftwareName() {
      return Zn;
    }
    get playerSoftwareVersion() {
      return Xn;
    }
    get hls() {
      return this.__hls;
    }
    get mux() {
      return this.nativeEl.mux;
    }
    get src() {
      return this.getAttribute("src");
    }
    set src(O) {
      O !== this.src && (O == null ? this.removeAttribute("src") : this.setAttribute("src", O));
    }
    get debug() {
      return this.getAttribute(ht.DEBUG) != null;
    }
    set debug(O) {
      O !== this.debug && (O ? this.setAttribute(ht.DEBUG, "") : this.removeAttribute(ht.DEBUG));
    }
    get startTime() {
      let O = this.getAttribute(ht.START_TIME);
      if (O == null)
        return;
      let M = +O;
      return Number.isNaN(M) ? void 0 : M;
    }
    set startTime(O) {
      O !== this.startTime && (O == null ? this.removeAttribute(ht.START_TIME) : this.setAttribute(ht.START_TIME, `${O}`));
    }
    get playbackId() {
      var O;
      return (O = this.getAttribute(ht.PLAYBACK_ID)) != null ? O : void 0;
    }
    set playbackId(O) {
      O !== this.playbackId && (O ? this.setAttribute(ht.PLAYBACK_ID, O) : this.removeAttribute(ht.PLAYBACK_ID));
    }
    get envKey() {
      var O;
      return (O = this.getAttribute(ht.ENV_KEY)) != null ? O : void 0;
    }
    set envKey(O) {
      O !== this.envKey && (O ? this.setAttribute(ht.ENV_KEY, O) : this.removeAttribute(ht.ENV_KEY));
    }
    get beaconDomain() {
      var O;
      return (O = this.getAttribute(ht.BEACON_DOMAIN)) != null ? O : void 0;
    }
    set beaconDomain(O) {
      O !== this.beaconDomain && (O ? this.setAttribute(ht.BEACON_DOMAIN, O) : this.removeAttribute(ht.BEACON_DOMAIN));
    }
    get streamType() {
      var O;
      return (O = this.getAttribute(ht.STREAM_TYPE)) != null ? O : void 0;
    }
    set streamType(O) {
      O !== this.streamType && (O ? this.setAttribute(ht.STREAM_TYPE, O) : this.removeAttribute(ht.STREAM_TYPE));
    }
    get preferMSE() {
      return this.getAttribute(ht.PREFER_MSE) != null;
    }
    set preferMSE(O) {
      O ? this.setAttribute(ht.PREFER_MSE, "") : this.removeAttribute(ht.PREFER_MSE);
    }
    get metadata() {
      return this.__metadata;
    }
    set metadata(O) {
      this.__metadata = O != null ? O : {}, this.mux && this.mux.emit("hb", this.__metadata);
    }
    load() {
      let O = (0, qt.initialize)(this, this.nativeEl, this.__hls);
      this.__hls = O;
    }
    unload() {
      (0, qt.teardown)(this.nativeEl, this.__hls), this.__hls = void 0;
    }
    attributeChangedCallback(O, M, x) {
      switch (O) {
        case "src":
          let T = !!M, e = !!x;
          !T && e ? this.load() : T && !e ? this.unload() : T && e && (this.unload(), this.load());
          break;
        case ht.PLAYBACK_ID:
          this.src = (0, qt.toMuxVideoURL)(x != null ? x : void 0);
          break;
        case ht.DEBUG:
          let R = this.debug;
          this.mux && console.info("Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src."), this.hls && (this.hls.config.debug = R);
          break;
        case ht.METADATA_URL:
          x && fetch(x).then((m) => m.json()).then((m) => this.metadata = m).catch((m) => console.error(`Unable to load or parse metadata JSON from metadata-url ${x}!`));
          break;
        default:
          break;
      }
      super.attributeChangedCallback(O, M, x);
    }
    disconnectedCallback() {
      this.unload();
    }
    connectedCallback() {
      this.src && this.load();
    }
  };
  globalThis.customElements.get("mux-video") || (globalThis.customElements.define("mux-video", Xr), globalThis.MuxVideoElement = Xr);
  var Nl = qt.PlaybackEngine, Fl = qt.ExtensionMimeTypeMap, Ul = qt.PlaybackEngine;
  var Zr = ["autoplay", "crossorigin", "loop", "muted", "playsinline", "src", "poster"], Jr = ["loadstart", "loadedmetadata", "progress", "durationchange", "volumechange", "ratechange", "resize", "waiting", "play", "playing", "timeupdate", "pause", "seeking", "seeked", "ended"], ti = class extends HTMLElement {
    static get observedAttributes() {
      return [...Zr];
    }
    constructor() {
      super();
      this.querySelectorAll(":scope > track").forEach((T) => {
        var e;
        (e = this.video) == null || e.append(T.cloneNode());
      });
      let M = (T) => {
        for (let e of T)
          e.type === "childList" && (e.removedNodes.forEach((R) => {
            var y, w;
            let m = (y = this.video) == null ? void 0 : y.querySelector(`track[src="${R.src}"]`);
            m && ((w = this.video) == null || w.removeChild(m));
          }), e.addedNodes.forEach((R) => {
            var m;
            (m = this.video) == null || m.append(R.cloneNode());
          }));
      };
      new MutationObserver(M).observe(this, { childList: true, subtree: true });
    }
    attributeChangedCallback(M, x, T) {
      var e, R;
      Zr.includes(M) && ((e = this.video) == null ? void 0 : e.getAttribute(M)) != T && ((R = this.video) == null || R.setAttribute(M, T));
    }
    addEventListener(M, x, T) {
      var e;
      Jr.includes(M) && ((e = this.video) == null || e.addEventListener(M, x, T));
    }
    removeEventListener(M, x, T) {
      var e;
      Jr.includes(M) && ((e = this.video) == null || e.removeEventListener(M, x, T));
    }
    play() {
      var M;
      return (M = this.video) == null ? void 0 : M.play();
    }
    pause() {
      var M;
      (M = this.video) == null || M.pause();
    }
    get video() {
      var M;
      return (M = this.shadowRoot) == null ? void 0 : M.querySelector("mux-video");
    }
    get paused() {
      var M, x;
      return (x = (M = this.video) == null ? void 0 : M.paused) != null ? x : true;
    }
    get duration() {
      var M, x;
      return (x = (M = this.video) == null ? void 0 : M.duration) != null ? x : NaN;
    }
    get ended() {
      var M, x;
      return (x = (M = this.video) == null ? void 0 : M.ended) != null ? x : false;
    }
    get buffered() {
      var M;
      return (M = this.video) == null ? void 0 : M.buffered;
    }
    get readyState() {
      var M, x;
      return (x = (M = this.video) == null ? void 0 : M.readyState) != null ? x : 0;
    }
    get videoWidth() {
      var M;
      return (M = this.video) == null ? void 0 : M.videoWidth;
    }
    get videoHeight() {
      var M;
      return (M = this.video) == null ? void 0 : M.videoHeight;
    }
    get currentTime() {
      var M, x;
      return (x = (M = this.video) == null ? void 0 : M.currentTime) != null ? x : 0;
    }
    set currentTime(M) {
      this.video && (this.video.currentTime = Number(M));
    }
    get volume() {
      var M, x;
      return (x = (M = this.video) == null ? void 0 : M.volume) != null ? x : 1;
    }
    set volume(M) {
      this.video && (this.video.volume = Number(M));
    }
    get src() {
      return Wt(this, "src");
    }
    set src(M) {
      this.setAttribute("src", `${M}`);
    }
    get poster() {
      var M;
      return (M = Wt(this, "poster")) != null ? M : "";
    }
    set poster(M) {
      this.setAttribute("poster", `${M}`);
    }
    get playbackRate() {
      var M, x;
      return (x = (M = this.video) == null ? void 0 : M.playbackRate) != null ? x : 1;
    }
    set playbackRate(M) {
      this.video && (this.video.playbackRate = Number(M));
    }
    get crossOrigin() {
      return Wt(this, "crossorigin");
    }
    set crossOrigin(M) {
      this.setAttribute("crossorigin", `${M}`);
    }
    get autoplay() {
      return Wt(this, "autoplay") != null;
    }
    set autoplay(M) {
      M ? this.setAttribute("autoplay", "") : this.removeAttribute("autoplay");
    }
    get loop() {
      return Wt(this, "loop") != null;
    }
    set loop(M) {
      M ? this.setAttribute("loop", "") : this.removeAttribute("loop");
    }
    get muted() {
      return Wt(this, "muted") != null;
    }
    set muted(M) {
      M ? this.setAttribute("muted", "") : this.removeAttribute("muted");
    }
  };
  function Wt(O, M) {
    return O.video ? O.video.getAttribute(M) : O.getAttribute(M);
  }
  var Me = ti;
  function ei(O) {
    let M = "";
    return Object.entries(O).forEach(([x, T]) => {
      M += `${Jn(x)}: ${T};`;
    }), M;
  }
  function Jn(O) {
    return O.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  }
  var ta = 0;
  function ea(O) {
    var M = ++ta;
    return `${O}${M}`;
  }
  function st(O, ...M) {
    let x = ea(""), T = [];
    M = M.map((y) => y == null ? "" : y instanceof Node || y instanceof oe || y instanceof ee ? `<div id="_${x}${T.push(y)}"></div>` : y);
    let e = String.raw(O, ...M).replace(/>\n+/g, ">").replace(/\s+</g, "<").replace(/>\s+/g, ">"), R = document.createElement("template");
    R.innerHTML = e;
    let m = T.map((y, w) => {
      let { id: A, template: L, props: b } = y;
      if (y instanceof oe) {
        let u = L(b) || st``;
        y = new ri(u.childNodes, u.childFragments, L);
      }
      return y.id = A || w, y;
    });
    return m.forEach((y, w) => {
      var b;
      let A = new DocumentFragment();
      y instanceof ee ? A.append(...y.childNodes) : A.append(y);
      let L = R.content.querySelector(`#_${x}${w + 1}`);
      (b = L == null ? void 0 : L.parentNode) == null || b.replaceChild(A, L);
    }), new ee(R.content.childNodes, m);
  }
  var ee = class {
    constructor(M, x) {
      this.childFragments = x, this._cachedChildNodes = [...M], this._mark = new Text(), this.id = void 0;
    }
    get fragments() {
      let M = {};
      for (let x of this.childFragments)
        x.id && (M[x.id] = x);
      return M;
    }
    get childNodes() {
      return [this._mark, ...this._cachedChildNodes];
    }
    replaceChildren(...M) {
      let x = this._cachedChildNodes;
      this._cachedChildNodes = [...M], x.forEach((e) => {
        var R;
        return (R = e.parentNode) == null ? void 0 : R.removeChild(e);
      });
      let T = this._mark.nextSibling;
      M.forEach((e) => {
        var R, m;
        return (m = (R = this._mark) == null ? void 0 : R.parentNode) == null ? void 0 : m.insertBefore(e, T);
      });
    }
  }, ri = class extends ee {
    constructor(M, x, T) {
      super(M, x);
      this.template = T;
    }
    render(M) {
      let x = this.template(M) || st``;
      return this.childFragments = x.childFragments, this.replaceChildren(...x.childNodes), this;
    }
  };
  function St(O, M, x) {
    return new oe(O, M, x);
  }
  var oe = class {
    constructor(M, x, T) {
      this.id = M, this.template = x, this.props = T;
    }
  };
  var ra = () => {
    try {
      return "0.1.0";
    } catch {
    }
    return "UNKNOWN";
  }, ia = ra(), ii = () => ia, ni = (O) => `https://image.mux.com/${O}/thumbnail.jpg`, ai = (O) => `https://image.mux.com/${O}/storyboard.vtt`, le, na = (O = "video") => le || (typeof window != "undefined" && (le = document.createElement(O)), le), si = async (O = na()) => {
    if (!O)
      return false;
    let M = O.volume;
    return O.volume = M / 2 + 0.1, new Promise((x, T) => {
      setTimeout(() => {
        x(O.volume !== M);
      }, 0);
    });
  };
  function Ce(O) {
    return O.video ? Array.from(O.video.textTracks).filter(({ kind: M }) => M === "subtitles" || M === "captions") : [];
  }
  function oi(O) {
    let { primaryColor: M, secondaryColor: x, tertiaryColor: T } = O;
    return ei({ maxWidth: "100%", ...M ? { "--media-icon-color": M, "--media-range-thumb-background": M, "--media-range-bar-color": M, color: M } : {}, ...x ? { "--media-background-color": x, "--media-control-background": x, "--media-control-hover-background": x } : {} });
  }
  var li = (O) => st`
  <svg viewBox="0 0 20 18" slot="${O.slot}">
    <title>${O.title}</title>
    <path
      d="M10.19 11.22a.25.25 0 0 0-.38 0l-5.46 6.37a.25.25 0 0 0 .19.41h10.92a.25.25 0 0 0 .19-.41Z"
    />
    <path
      d="M19 0H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h2.94L5 13.75H1.25V1.25h17.5v12.5H15L16.06 15H19a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1Z"
    />
  </svg>
`, ui = (O) => st`
  <svg viewBox="0 0 20 18" slot="${O.slot}">
    <title>${O.title}</title>
    <path
      d="M19.83 2.68a2.58 2.58 0 0 0-2.3-2.5C15.72.06 12.86 0 10 0S4.28.06 2.47.18a2.58 2.58 0 0 0-2.3 2.5 115.86 115.86 0 0 0 0 12.64 2.58 2.58 0 0 0 2.3 2.5c1.81.12 4.67.18 7.53.18s5.72-.06 7.53-.18a2.58 2.58 0 0 0 2.3-2.5 115.86 115.86 0 0 0 0-12.64Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18s-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11 122.5 122.5 0 0 1 0-12.42 1.11 1.11 0 0 1 .91-1.11C4.24 1.57 7 1.5 10 1.5s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11 122.5 122.5 0 0 1 0 12.42ZM7.84 11a1.55 1.55 0 0 1-.76.18 1.57 1.57 0 0 1-.71-.18 1.69 1.69 0 0 1-.57-.42 2.1 2.1 0 0 1-.38-.58 2.47 2.47 0 0 1 0-1.64 2 2 0 0 1 .39-.66 1.73 1.73 0 0 1 .58-.42 1.81 1.81 0 0 1 .73-.16 1.68 1.68 0 0 1 .7.14 1.39 1.39 0 0 1 .51.39l1.08-.89a2.18 2.18 0 0 0-.47-.44A2.81 2.81 0 0 0 8.4 6a2.91 2.91 0 0 0-.58-.15 2.71 2.71 0 0 0-.56 0A4.08 4.08 0 0 0 5.88 6a3.27 3.27 0 0 0-1.09.67 3.14 3.14 0 0 0-.71 1.06 3.62 3.62 0 0 0-.26 1.39 3.57 3.57 0 0 0 .26 1.38 3 3 0 0 0 .71 1.06 3.27 3.27 0 0 0 1.09.67 3.85 3.85 0 0 0 1.38.23 3.2 3.2 0 0 0 1.28-.27 2.49 2.49 0 0 0 1-.83l-1.17-.88a1.42 1.42 0 0 1-.53.52Zm6.62 0a1.58 1.58 0 0 1-.76.18A1.54 1.54 0 0 1 13 11a1.69 1.69 0 0 1-.57-.42A2.12 2.12 0 0 1 12 10a2.29 2.29 0 0 1 .39-2.3 1.84 1.84 0 0 1 1.32-.58 1.71 1.71 0 0 1 .7.14 1.39 1.39 0 0 1 .51.39L16 6.73a2.43 2.43 0 0 0-.47-.44A3.22 3.22 0 0 0 15 6a3 3 0 0 0-.57-.15 2.87 2.87 0 0 0-.57 0A4.06 4.06 0 0 0 12.5 6a3.17 3.17 0 0 0-1.09.67 3 3 0 0 0-.72 1.06 3.62 3.62 0 0 0-.25 1.39 3.57 3.57 0 0 0 .25 1.38 2.93 2.93 0 0 0 .72 1.06 3.17 3.17 0 0 0 1.09.67 3.83 3.83 0 0 0 1.37.23 3.16 3.16 0 0 0 1.28-.27 2.45 2.45 0 0 0 1-.83L15 10.51a1.49 1.49 0 0 1-.54.49Z"
    />
  </svg>
`, di = (O) => st`
  <svg viewBox="0 0 20 18" slot="${O.slot}">
    <title>${O.title}</title>
    <path
      d="M19.83 2.68a2.58 2.58 0 0 0-2.3-2.5C13.91-.06 6.09-.06 2.47.18a2.58 2.58 0 0 0-2.3 2.5 115.86 115.86 0 0 0 0 12.64 2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5 115.86 115.86 0 0 0 0-12.64ZM8.42 12.78a3.63 3.63 0 0 1-1.51.32 4.76 4.76 0 0 1-1.63-.27A4 4 0 0 1 4 12a3.67 3.67 0 0 1-.84-1.26 4.23 4.23 0 0 1-.3-1.63 4.28 4.28 0 0 1 .3-1.64A3.53 3.53 0 0 1 4 6.26a3.89 3.89 0 0 1 1.29-.8 4.76 4.76 0 0 1 1.63-.27 4.06 4.06 0 0 1 .67.06 4.57 4.57 0 0 1 .68.18 3.59 3.59 0 0 1 .64.34 2.7 2.7 0 0 1 .55.52l-1.27 1a1.79 1.79 0 0 0-.6-.46 2 2 0 0 0-.83-.16 2 2 0 0 0-1.56.69 2.35 2.35 0 0 0-.46.77 2.78 2.78 0 0 0-.16 1 2.74 2.74 0 0 0 .16 1 2.39 2.39 0 0 0 .46.77 2.07 2.07 0 0 0 .67.5 2 2 0 0 0 .84.18 1.87 1.87 0 0 0 .9-.21 1.78 1.78 0 0 0 .65-.6l1.38 1a2.88 2.88 0 0 1-1.22 1.01Zm7.52 0a3.63 3.63 0 0 1-1.51.32 4.76 4.76 0 0 1-1.63-.27 3.89 3.89 0 0 1-1.28-.83 3.55 3.55 0 0 1-.85-1.26 4.23 4.23 0 0 1-.3-1.63 4.28 4.28 0 0 1 .3-1.64 3.43 3.43 0 0 1 .85-1.25 3.75 3.75 0 0 1 1.28-.8 4.76 4.76 0 0 1 1.63-.27 4 4 0 0 1 .67.06 4.27 4.27 0 0 1 .68.18 3.59 3.59 0 0 1 .64.34 2.46 2.46 0 0 1 .55.52l-1.27 1a1.79 1.79 0 0 0-.6-.46 2 2 0 0 0-.83-.16 2 2 0 0 0-1.56.69 2.35 2.35 0 0 0-.46.77 3 3 0 0 0-.16 1 3 3 0 0 0 .16 1 2.58 2.58 0 0 0 .46.77 2.07 2.07 0 0 0 .67.5 2 2 0 0 0 .84.18 1.87 1.87 0 0 0 .9-.21 1.78 1.78 0 0 0 .65-.6l1.38 1a2.82 2.82 0 0 1-1.21 1.05Z"
    />
  </svg>
`, ci = (O) => st`
  <svg viewBox="0 0 18 18" slot="${O.slot}">
    <title>${O.title}</title>
    <path
      d="M17.25 11.5h-5a.76.76 0 0 0-.75.75v5a.75.75 0 0 0 1.5 0V13h4.25a.75.75 0 0 0 0-1.5Zm-5-5h5a.75.75 0 0 0 0-1.5H13V.75a.75.75 0 0 0-1.5 0v5a.76.76 0 0 0 .75.75Zm-6.5 5h-5a.75.75 0 0 0 0 1.5H5v4.25a.75.75 0 0 0 1.5 0v-5a.76.76 0 0 0-.75-.75Zm0-11.5A.76.76 0 0 0 5 .75V5H.75a.75.75 0 0 0 0 1.5h5a.76.76 0 0 0 .75-.75v-5A.76.76 0 0 0 5.75 0Z"
    />
  </svg>
`, hi = (O) => st`
  <svg viewBox="0 0 18 18" slot="${O.slot}">
    <title>${O.title}</title>
    <path
      d="M17.25 11.5a.76.76 0 0 0-.75.75v4.25h-4.25a.75.75 0 0 0 0 1.5h5a.76.76 0 0 0 .75-.75v-5a.76.76 0 0 0-.75-.75Zm0-11.5h-5a.76.76 0 0 0-.75.75.76.76 0 0 0 .75.75h4.25v4.25a.75.75 0 0 0 1.5 0v-5a.76.76 0 0 0-.75-.75ZM5.75 16.5H1.5v-4.25a.76.76 0 0 0-.75-.75.76.76 0 0 0-.75.75v5a.76.76 0 0 0 .75.75h5a.75.75 0 0 0 0-1.5Zm0-16.5h-5A.76.76 0 0 0 0 .75v5a.76.76 0 0 0 .75.75.76.76 0 0 0 .75-.75V1.5h4.25A.76.76 0 0 0 6.5.75.76.76 0 0 0 5.75 0Z"
    />
  </svg>
`, fi = (O) => st`
  <svg viewBox="0 0 18 18" slot="${O.slot}">
    <title>${O.title}</title>
    <path
      d="M3 16.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v15ZM11.5 1a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5h-3Z"
    />
  </svg>
`, mi = (O) => st`
  <svg viewBox="0 0 18 18" slot="${O.slot}">
    <title>${O.title}</title>
    <path
      d="m3.73 17.93 14.05-8.54a.46.46 0 0 0 0-.78L3.73.07A.48.48 0 0 0 3 .46v17.07a.48.48 0 0 0 .73.4Z"
    />
  </svg>
`, xe = (O) => st`
  <svg viewBox="0 0 20 18" slot="${O.slot}">
    <title>${O.title}</title>
    <path
      d="M19 0H1a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h6.75v-1.25h-6.5V1.25h17.5v6.5H20V1a1 1 0 0 0-1-1Zm0 10h-8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Zm-.5 6.5h-7v-5h7Z"
    />
  </svg>
`, pi = (O) => st`
  <svg viewBox="0 0 16 18" slot="${O.slot}">
    <title>${O.title}</title>
    <path
      d="M8.75 3.42H4.68l2.14-2.14A.75.75 0 0 0 5.76.22L2.22 3.75a.77.77 0 0 0 0 1.07l3.54 3.53a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.06L4.45 4.92h4.3A5.75 5.75 0 0 1 11 16a.75.75 0 0 0 .29 1.44.72.72 0 0 0 .29-.06A7.25 7.25 0 0 0 8.75 3.42Z"
    />
    <text
      transform="translate(.6 17.8)"
      style="font-size: 8px; font-family: 'ArialMT', 'Arial'"
    >
      ${O.amount}
    </text>
    <path style="fill: none" d="M0 0h16v18H0z" />
  </svg>
`, vi = (O) => st`
  <svg viewBox="0 0 16 18" slot="${O.slot}">
    <title>${O.title}</title>
    <path
      d="M7.25 3.42h4.07L9.18 1.28A.75.75 0 0 1 10.24.22l3.54 3.53a.77.77 0 0 1 0 1.07l-3.54 3.53a.75.75 0 0 1-1.06 0 .75.75 0 0 1 0-1.06l2.37-2.37h-4.3A5.75 5.75 0 0 0 5 16a.75.75 0 0 1-.29 1.44.72.72 0 0 1-.29-.06A7.25 7.25 0 0 1 7.25 3.42Z"
    />
    <text
      transform="translate(6.5 17.8)"
      style="font-size: 8px; font-family: 'ArialMT', 'Arial'"
    >
      ${O.amount}
    </text>
    <path style="fill: none" d="M0 0h16v18H0z" />
  </svg>
`, gi = (O) => st`
  <svg viewBox="0 0 18 18" slot="${O.slot}">
    <title>${O.title}</title>
    <path
      d="m8.14 1.86-4 4a.49.49 0 0 1-.35.14H.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V2.21a.5.5 0 0 0-.86-.35ZM10.88.3v1.52A7.52 7.52 0 0 1 16.47 9a7.52 7.52 0 0 1-5.59 7.18v1.52A9 9 0 0 0 18 9 9 9 0 0 0 10.88.3ZM14.44 9a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66A5.49 5.49 0 0 0 14.44 9Z"
    />
    <path style="fill: none" d="M0 0h18v18H0z" />
  </svg>
`, Oe = (O) => st`
  <svg viewBox="0 0 18 18" slot="${O.slot}">
    <title>${O.title}</title>
    <path
      d="m8.14 1.86-4 4a.49.49 0 0 1-.35.14H.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.5.5 0 0 0 .85-.36V2.21a.5.5 0 0 0-.86-.35ZM14.44 9a5.49 5.49 0 0 0-3.56-5.1v1.66a3.93 3.93 0 0 1 0 6.88v1.66A5.49 5.49 0 0 0 14.44 9Z"
    />
    <path style="fill: none" d="M0 0h18v18H0z" />
  </svg>
`, yi = (O) => st`
  <svg viewBox="0 0 18 18" slot="${O.slot}">
    <title>${O.title}</title>
    <path
      d="m0 1.05 4.48 4.47-.33.33a.49.49 0 0 1-.36.15H.25a.25.25 0 0 0-.25.25v5.5a.25.25 0 0 0 .25.25h3.54a.49.49 0 0 1 .36.15l4 4a.48.48 0 0 0 .36.15.5.5 0 0 0 .5-.5v-5.75l4.67 4.66a7.71 7.71 0 0 1-2.79 1.47v1.52a9.32 9.32 0 0 0 3.87-1.91L17 18l1-1L1.06 0Zm5.36 5.36L7.75 8.8V14L5 11.26a1.74 1.74 0 0 0-1.24-.51H1.25v-3.5h2.54A1.74 1.74 0 0 0 5 6.74ZM16.47 9a7.19 7.19 0 0 1-.89 3.47l1.11 1.1A8.64 8.64 0 0 0 18 9 9 9 0 0 0 10.88.3v1.52A7.52 7.52 0 0 1 16.47 9ZM9 5.88V2.21a.5.5 0 0 0-.5-.5.48.48 0 0 0-.36.15L6.56 3.44ZM12.91 9a4.28 4.28 0 0 1-.07.72l1.22 1.22A5.2 5.2 0 0 0 14.44 9a5.49 5.49 0 0 0-3.56-5.1v1.66A4 4 0 0 1 12.91 9Z"
    />
    <path style="fill: none" d="M0 0h18v18H0z" />
  </svg>
`;
  var ue = { VOD: "on-demand", LIVE: "live", LL_LIVE: "ll-live" }, Ei = { LG: "large", SM: "small" }, bi = () => st`<div class="mxp-spacer"></div>`, _i = (O) => {
    var M, x, T, e;
    return st`
  <style>
    media-controller {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.5);
      --media-range-track-border-radius: 3px;
      --media-aspect-ratio: 16 / 9;
    }
    .mxp-spacer {
      flex-grow: 1;
      height: 100%;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }
    .mxp-center-controls {
      --media-background-color: transparent;
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }
    .mxp-center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      width: min(9%, 90px);
    }
    .mxp-center-controls media-seek-backward-button,
    .mxp-center-controls media-seek-forward-button {
      padding: 0;
      margin: 0 10%;
      width: min(7%, 70px);
    }
    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }
    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }
    media-loading-indicator[media-loading]:not([media-paused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }
    media-volume-range {
      width: min(100%, 100px);
    }
    media-time-display {
      white-space: nowrap;
    }
  </style>
  <media-controller style="${oi(O)}">
    <mux-video
      slot="media"
      crossorigin
      playsinline
      ${O.autoplay || O.streamType === ue.LIVE || O.streamType === ue.LL_LIVE ? "autoplay" : ""}
      ${O.muted ? "muted" : ""}
      ${O.debug ? "debug" : ""}
      ${O.preferMse ? "prefer-mse" : ""}
      ${O.startTime != null ? `start-time="${O.startTime}"` : ""}
      poster="${(M = O.poster) != null ? M : ni(O.playbackId)}"
      ${O.playbackId ? `playback-id="${O.playbackId}"` : ""}
      ${O.envKey ? `env-key="${O.envKey}"` : ""}
      ${O.streamType ? `stream-type="${O.streamType}"` : ""}
      ${((x = O.metadata) == null ? void 0 : x.video_id) ? `metadata-video-id="${O.metadata.video_id}"` : ""}
      ${((T = O.metadata) == null ? void 0 : T.video_title) ? `metadata-video-title="${O.metadata.video_title}"` : ""}
      ${((e = O.metadata) == null ? void 0 : e.viewer_user_id) ? `metadata-viewer-user-id="${O.metadata.viewer_user_id}"` : ""}
    >
      <track
        label="thumbnails"
        default
        kind="metadata"
        src=${ai(O.playbackId)}
      />
    </mux-video>
    ${St("chromeRenderer", aa, O)}
  </media-controller>
`;
  }, aa = (O) => {
    let { streamType: M, playerSize: x } = O;
    return M === ue.LIVE || M === ue.LL_LIVE ? x === Ei.LG ? ua(O) : la(O) : x === Ei.LG ? oa(O) : sa(O);
  }, $t = () => st`
  <media-play-button>
    ${mi({ slot: "play", title: "Play" })}
    ${fi({ slot: "pause", title: "Pause" })}
  </media-play-button>
`, Ti = () => st`
  <media-seek-backward-button>
    ${pi({ slot: "backward", amount: 30 })}
  </media-seek-backward-button>
`, Ai = () => st`
  <media-seek-forward-button>
    ${vi({ slot: "forward", amount: 30 })}
  </media-seek-forward-button>
`, de = () => st`
  <media-mute-button>
    ${gi({ slot: "high" })} ${Oe({ slot: "medium" })}
    ${Oe({ slot: "low" })} ${yi({ slot: "off" })}
  </media-mute-button>
`, ce = () => st` <media-captions-button>
  ${ui({ slot: "off" })} ${di({ slot: "on" })}
</media-captions-button>`, he = () => st`<media-airplay-button>
  ${li({ slot: "airplay" })}
</media-airplay-button>`, fe = () => st` <media-pip-button>
  ${xe({ slot: "enter", title: "Enter Picture-in-Picture" })}
  ${xe({ slot: "exit", title: "Exit Picture-in-Picture" })}
</media-pip-button>`, me = () => st` <media-fullscreen-button>
  ${hi({ slot: "enter", title: "Enter Fullscreen" })}
  ${ci({ slot: "exit", title: "Exit Fullscreen" })}
</media-fullscreen-button>`, sa = (O) => st`
  <media-loading-indicator
    slot="centered-chrome"
    no-auto-hide
  ></media-loading-indicator>
  <media-control-bar slot="top-chrome" style="justify-content: flex-end;">
    ${St("captionsButton", ({ hasCaptions: M }) => M && ce(), O)}
    ${St("airplayButton", ({ supportsAirPlay: M }) => M && he(), O)}
    ${fe()}
  </media-control-bar>
  <div slot="centered-chrome" class="mxp-center-controls">
    ${Ti()} ${$t()}
    ${Ai()}
  </div>
  <media-control-bar>
    <media-time-range></media-time-range>
    <media-time-display show-duration remaining></media-time-display>
    ${de()}
    ${St("volumeRange", ({ supportsVolume: M }) => M && st`<media-volume-range></media-volume-range>`, O)}
    <media-playback-rate-button></media-playback-rate-button>
    ${me()}
  </media-control-bar>
`, oa = (O) => st`
  <media-loading-indicator
    slot="centered-chrome"
    no-auto-hide
  ></media-loading-indicator>
  <div slot="centered-chrome" class="mxp-center-controls">
    ${$t()}
  </div>
  <media-control-bar>
    ${$t()} ${Ti()}
    ${Ai()}
    <media-time-range></media-time-range>
    <media-time-display show-duration remaining></media-time-display>
    ${de()}
    ${St("volumeRange", ({ supportsVolume: M }) => M && st`<media-volume-range></media-volume-range>`, O)}
    <media-playback-rate-button></media-playback-rate-button>
    ${St("captionsButton", ({ hasCaptions: M }) => M && ce(), O)}
    ${St("airplayButton", ({ supportsAirPlay: M }) => M && he(), O)}
    ${fe()} ${me()}
  </media-control-bar>
`, la = (O) => st`
  <media-loading-indicator
    slot="centered-chrome"
    no-auto-hide
  ></media-loading-indicator>
  <div slot="centered-chrome" class="mxp-center-controls">
    ${$t()}
  </div>
  <media-control-bar>
    ${de()}
    ${St("volumeRange", ({ supportsVolume: M }) => M && st`<media-volume-range></media-volume-range>`, O)}
    ${bi()}
    <media-time-display></media-time-display>
    ${St("captionsButton", ({ hasCaptions: M }) => M && ce(), O)}
    ${St("airplayButton", ({ supportsAirPlay: M }) => M && he(), O)}
    ${fe()} ${me()}
  </media-control-bar>
`, ua = (O) => st`
  <media-loading-indicator
    slot="centered-chrome"
    no-auto-hide
  ></media-loading-indicator>
  <div slot="centered-chrome" class="mxp-center-controls">
    ${$t()}
  </div>
  <media-control-bar>
    ${$t()} ${de()}
    ${St("volumeRange", ({ supportsVolume: M }) => M && st`<media-volume-range></media-volume-range>`, O)}
    ${bi()}
    <media-time-display></media-time-display>
    ${St("captionsButton", ({ hasCaptions: M }) => M && ce(), O)}
    ${St("airplayButton", ({ supportsAirPlay: M }) => M && he(), O)}
    ${fe()} ${me()}
  </media-control-bar>
`;
  var da = (O) => {
    var M, x, T;
    return !((M = O.video) == null ? void 0 : M.paused) && ((T = (x = O.video) == null ? void 0 : x.readyState) != null ? T : 0) < 3;
  }, Si = class {
    constructor(M) {
      this._asyncProps = {};
      var T, e;
      this.el = M;
      let x = _i(Li(M));
      this._chromeRenderer = x.fragments.chromeRenderer, this._captionsButton = this._chromeRenderer.fragments.captionsButton, this._airplayButton = this._chromeRenderer.fragments.airplayButton, this._volumeRange = this._chromeRenderer.fragments.volumeRange, M.attachShadow({ mode: "open" }), (T = M.shadowRoot) == null || T.append(...x.childNodes), M.querySelectorAll(":scope > track").forEach((R) => {
        var m;
        (m = M.video) == null || m.append(R.cloneNode());
      }), Array.prototype.forEach.call(M.attributes, (R) => {
        M.attributeChangedCallback(R.name, null, R.value);
      }), M.video && (M.video.muted = M.video.defaultMuted), ((e = M.video) == null ? void 0 : e.hls) && (M.video.hls.config.maxMaxBufferLength = 2), this._setUpMutedAutoplay(M), this._setUpCaptionsButton(M), this._setUpAirplayButton(M), this._setUpVolumeRange(M);
    }
    connectedCallback() {
      this._renderChrome(), this._initResizing();
    }
    disconnectedCallback() {
      this._deinitResizing();
    }
    _setUpMutedAutoplay(M) {
      var x;
      if ((x = M.video) == null ? void 0 : x.hls) {
        let T = M.video.hls.constructor;
        M.autoplay && M.video.hls.on(T.Events.MANIFEST_PARSED, () => {
          var R;
          var e = (R = M.video) == null ? void 0 : R.play();
          e && e.catch((m) => {
            var y;
            if (console.log(`${m.name} ${m.message}`), m.name === "NotAllowedError")
              return console.log("Attempting to play with video muted"), M.video && (M.video.muted = true), (y = M.video) == null ? void 0 : y.play();
          });
        });
      }
    }
    _setUpCaptionsButton(M) {
      var T, e, R, m;
      let x = () => {
        var w;
        let y = Ce(M);
        if (this._captionsButton.render({ hasCaptions: !!y.length }), M.defaultShowCaptions && y.length && M.video) {
          let [A] = y, L = A.kind === "captions" ? "mediashowcaptionsrequest" : "mediashowsubtitlesrequest", b = new CustomEvent(L, { composed: true, bubbles: true, detail: A });
          (w = M.video) == null || w.dispatchEvent(b);
        }
      };
      (e = (T = M.video) == null ? void 0 : T.textTracks) == null || e.addEventListener("addtrack", x), (m = (R = M.video) == null ? void 0 : R.textTracks) == null || m.addEventListener("removetrack", x);
    }
    _setUpAirplayButton(M) {
      var x;
      if (globalThis.WebKitPlaybackTargetAvailabilityEvent) {
        let T = (e) => {
          let R = e.availability === "available";
          this._airplayButton.render({ supportsAirPlay: R }), this._asyncProps.supportsAirPlay = R;
        };
        (x = M.video) == null || x.addEventListener("webkitplaybacktargetavailabilitychanged", T);
      }
    }
    async _setUpVolumeRange(M) {
      let x = await si();
      this._volumeRange.render({ supportsVolume: x }), this._asyncProps.supportsVolume = x;
    }
    _renderChrome() {
      this._playerSize != Pe(this.el) && (this._playerSize = Pe(this.el), this._chromeRenderer.render(Li(this.el, this._asyncProps)), this._captionsButton = this._chromeRenderer.fragments.captionsButton, this._airplayButton = this._chromeRenderer.fragments.airplayButton, this._volumeRange = this._chromeRenderer.fragments.volumeRange);
    }
    _initResizing() {
      this._resizeObserver = new ResizeObserver(() => this._renderChrome()), this._resizeObserver.observe(this.el);
    }
    _deinitResizing() {
      var M;
      (M = this._resizeObserver) == null || M.disconnect();
    }
  };
  function Li(O, M) {
    return { debug: O.debug, envKey: O.envKey, playbackId: O.playbackId, poster: O.poster, startTime: O.startTime, streamType: O.streamType, primaryColor: O.primaryColor, secondaryColor: O.secondaryColor, playerSize: Pe(O), hasCaptions: !!Ce(O).length, showLoading: da(O), supportsAirPlay: false, supportsVolume: false, ...M };
  }
  var ca = 700, Di = { LG: "large", SM: "small" };
  function Pe(O) {
    return O.getBoundingClientRect().width < ca ? Di.SM : Di.LG;
  }
  var Dt = { ENV_KEY: "env-key", DEBUG: "debug", PLAYBACK_ID: "playback-id", METADATA_URL: "metadata-url", PREFER_MSE: "prefer-mse", METADATA_VIDEO_ID: "metadata-video-id", METADATA_VIDEO_TITLE: "metadata-video-title", METADATA_VIEWER_USER_ID: "metadata-viewer-user-id", BEACON_DOMAIN: "beacon-domain", TYPE: "type", STREAM_TYPE: "stream-type", START_TIME: "start-time" }, pe = { DEFAULT_SHOW_CAPTIONS: "default-show-captions", PRIMARY_COLOR: "primary-color", SECONDARY_COLOR: "secondary-color" }, ki = Object.values(Dt), ha = Object.values(pe), fa = ii(), ma = "mux-player", Ne = new WeakMap(), ve = class extends Me {
    static get observedAttributes() {
      var M;
      return [...(M = Me.observedAttributes) != null ? M : [], ...ki, ...ha];
    }
    constructor() {
      super();
      Ne.set(this, new Si(this));
    }
    connectedCallback() {
      Ne.get(this).connectedCallback();
    }
    disconnectedCallback() {
      Ne.get(this).disconnectedCallback();
    }
    attributeChangedCallback(M, x, T) {
      var e;
      super.attributeChangedCallback(M, x, T), ki.includes(M) && ((e = this.video) == null || e.setAttribute(M, T));
    }
    get primaryColor() {
      return this.getAttribute(pe.PRIMARY_COLOR);
    }
    get secondaryColor() {
      return this.getAttribute(pe.SECONDARY_COLOR);
    }
    get defaultShowCaptions() {
      return this.getAttribute(pe.DEFAULT_SHOW_CAPTIONS) || true;
    }
    get playerSoftwareName() {
      return ma;
    }
    get playerSoftwareVersion() {
      return fa;
    }
    get hls() {
      var M;
      return (M = this.video) == null ? void 0 : M.hls;
    }
    get mux() {
      var M;
      return (M = this.video) == null ? void 0 : M.mux;
    }
    get playbackId() {
      return Yt(this, Dt.PLAYBACK_ID);
    }
    get envKey() {
      return Yt(this, Dt.ENV_KEY);
    }
    get debug() {
      return Yt(this, Dt.DEBUG) != null;
    }
    set debug(M) {
      M ? this.setAttribute(Dt.DEBUG, "") : this.removeAttribute(Dt.DEBUG);
    }
    get streamType() {
      return Yt(this, Dt.STREAM_TYPE);
    }
    set streamType(M) {
      this.setAttribute(Dt.STREAM_TYPE, `${M}`);
    }
    get startTime() {
      return Number(Yt(this, Dt.START_TIME));
    }
    set startTime(M) {
      this.setAttribute(Dt.START_TIME, `${M}`);
    }
    get preferMse() {
      return Yt(this, Dt.PREFER_MSE) != null;
    }
    set preferMse(M) {
      M ? this.setAttribute(Dt.PREFER_MSE, "") : this.removeAttribute(Dt.PREFER_MSE);
    }
    get metadata() {
      var M;
      return (M = this.video) == null ? void 0 : M.metadata;
    }
    set metadata(M) {
      this.video && (this.video.metadata = M);
    }
  };
  function Yt(O, M) {
    return O.video ? O.video.getAttribute(M) : O.getAttribute(M);
  }
  globalThis.customElements.get("mux-player") || (globalThis.customElements.define("mux-player", ve), globalThis.MuxPlayerElement = ve);
  var eu = ve;
})();
export {
  dist_exports as MuxPlayer
};
