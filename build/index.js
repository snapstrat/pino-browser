(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/pino-std-serializers-npm-4.0.0-391192ed8b-89d487729b.zip/node_modules/pino-std-serializers/lib/err.js
  var require_err = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/pino-std-serializers-npm-4.0.0-391192ed8b-89d487729b.zip/node_modules/pino-std-serializers/lib/err.js"(exports, module) {
      "use strict";
      module.exports = errSerializer;
      var { toString } = Object.prototype;
      var seen = Symbol("circular-ref-tag");
      var rawSymbol = Symbol("pino-raw-err-ref");
      var pinoErrProto = Object.create({}, {
        type: {
          enumerable: true,
          writable: true,
          value: void 0
        },
        message: {
          enumerable: true,
          writable: true,
          value: void 0
        },
        stack: {
          enumerable: true,
          writable: true,
          value: void 0
        },
        raw: {
          enumerable: false,
          get: function() {
            return this[rawSymbol];
          },
          set: function(val) {
            this[rawSymbol] = val;
          }
        }
      });
      Object.defineProperty(pinoErrProto, rawSymbol, {
        writable: true,
        value: {}
      });
      function errSerializer(err) {
        if (!(err instanceof Error)) {
          return err;
        }
        err[seen] = void 0;
        const _err = Object.create(pinoErrProto);
        _err.type = toString.call(err.constructor) === "[object Function]" ? err.constructor.name : err.name;
        _err.message = err.message;
        _err.stack = err.stack;
        for (const key in err) {
          if (_err[key] === void 0) {
            const val = err[key];
            if (val instanceof Error) {
              if (!val.hasOwnProperty(seen)) {
                _err[key] = errSerializer(val);
              }
            } else {
              _err[key] = val;
            }
          }
        }
        delete err[seen];
        _err.raw = err;
        return _err;
      }
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/pino-std-serializers-npm-4.0.0-391192ed8b-89d487729b.zip/node_modules/pino-std-serializers/lib/req.js
  var require_req = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/pino-std-serializers-npm-4.0.0-391192ed8b-89d487729b.zip/node_modules/pino-std-serializers/lib/req.js"(exports, module) {
      "use strict";
      module.exports = {
        mapHttpRequest,
        reqSerializer
      };
      var rawSymbol = Symbol("pino-raw-req-ref");
      var pinoReqProto = Object.create({}, {
        id: {
          enumerable: true,
          writable: true,
          value: ""
        },
        method: {
          enumerable: true,
          writable: true,
          value: ""
        },
        url: {
          enumerable: true,
          writable: true,
          value: ""
        },
        query: {
          enumerable: true,
          writable: true,
          value: ""
        },
        params: {
          enumerable: true,
          writable: true,
          value: ""
        },
        headers: {
          enumerable: true,
          writable: true,
          value: {}
        },
        remoteAddress: {
          enumerable: true,
          writable: true,
          value: ""
        },
        remotePort: {
          enumerable: true,
          writable: true,
          value: ""
        },
        raw: {
          enumerable: false,
          get: function() {
            return this[rawSymbol];
          },
          set: function(val) {
            this[rawSymbol] = val;
          }
        }
      });
      Object.defineProperty(pinoReqProto, rawSymbol, {
        writable: true,
        value: {}
      });
      function reqSerializer(req) {
        const connection = req.info || req.socket;
        const _req = Object.create(pinoReqProto);
        _req.id = typeof req.id === "function" ? req.id() : req.id || (req.info ? req.info.id : void 0);
        _req.method = req.method;
        if (req.originalUrl) {
          _req.url = req.originalUrl;
          _req.query = req.query;
          _req.params = req.params;
        } else {
          _req.url = req.path || (req.url ? req.url.path || req.url : void 0);
        }
        _req.headers = req.headers;
        _req.remoteAddress = connection && connection.remoteAddress;
        _req.remotePort = connection && connection.remotePort;
        _req.raw = req.raw || req;
        return _req;
      }
      function mapHttpRequest(req) {
        return {
          req: reqSerializer(req)
        };
      }
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/pino-std-serializers-npm-4.0.0-391192ed8b-89d487729b.zip/node_modules/pino-std-serializers/lib/res.js
  var require_res = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/pino-std-serializers-npm-4.0.0-391192ed8b-89d487729b.zip/node_modules/pino-std-serializers/lib/res.js"(exports, module) {
      "use strict";
      module.exports = {
        mapHttpResponse,
        resSerializer
      };
      var rawSymbol = Symbol("pino-raw-res-ref");
      var pinoResProto = Object.create({}, {
        statusCode: {
          enumerable: true,
          writable: true,
          value: 0
        },
        headers: {
          enumerable: true,
          writable: true,
          value: ""
        },
        raw: {
          enumerable: false,
          get: function() {
            return this[rawSymbol];
          },
          set: function(val) {
            this[rawSymbol] = val;
          }
        }
      });
      Object.defineProperty(pinoResProto, rawSymbol, {
        writable: true,
        value: {}
      });
      function resSerializer(res) {
        const _res = Object.create(pinoResProto);
        _res.statusCode = res.statusCode;
        _res.headers = res.getHeaders ? res.getHeaders() : res._headers;
        _res.raw = res;
        return _res;
      }
      function mapHttpResponse(res) {
        return {
          res: resSerializer(res)
        };
      }
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/pino-std-serializers-npm-4.0.0-391192ed8b-89d487729b.zip/node_modules/pino-std-serializers/index.js
  var require_pino_std_serializers = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/pino-std-serializers-npm-4.0.0-391192ed8b-89d487729b.zip/node_modules/pino-std-serializers/index.js"(exports, module) {
      "use strict";
      var errSerializer = require_err();
      var reqSerializers = require_req();
      var resSerializers = require_res();
      module.exports = {
        err: errSerializer,
        mapHttpRequest: reqSerializers.mapHttpRequest,
        mapHttpResponse: resSerializers.mapHttpResponse,
        req: reqSerializers.reqSerializer,
        res: resSerializers.resSerializer,
        wrapErrorSerializer: function wrapErrorSerializer(customSerializer) {
          if (customSerializer === errSerializer)
            return customSerializer;
          return function wrapErrSerializer(err) {
            return customSerializer(errSerializer(err));
          };
        },
        wrapRequestSerializer: function wrapRequestSerializer(customSerializer) {
          if (customSerializer === reqSerializers.reqSerializer)
            return customSerializer;
          return function wrappedReqSerializer(req) {
            return customSerializer(reqSerializers.reqSerializer(req));
          };
        },
        wrapResponseSerializer: function wrapResponseSerializer(customSerializer) {
          if (customSerializer === resSerializers.resSerializer)
            return customSerializer;
          return function wrappedResSerializer(res) {
            return customSerializer(resSerializers.resSerializer(res));
          };
        }
      };
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/unplugged/pino-npm-7.6.5-9eaea6e55b/node_modules/pino/lib/caller.js
  var require_caller = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/unplugged/pino-npm-7.6.5-9eaea6e55b/node_modules/pino/lib/caller.js"(exports, module) {
      "use strict";
      function noOpPrepareStackTrace(_, stack) {
        return stack;
      }
      module.exports = function getCallers() {
        const originalPrepare = Error.prepareStackTrace;
        Error.prepareStackTrace = noOpPrepareStackTrace;
        const stack = new Error().stack;
        Error.prepareStackTrace = originalPrepare;
        if (!Array.isArray(stack)) {
          return void 0;
        }
        const entries = stack.slice(2);
        const fileNames = [];
        for (const entry of entries) {
          if (!entry) {
            continue;
          }
          fileNames.push(entry.getFileName());
        }
        return fileNames;
      };
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/fast-redact-npm-3.1.0-44259132af-0d4d9386ae.zip/node_modules/fast-redact/lib/validator.js
  var require_validator = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/fast-redact-npm-3.1.0-44259132af-0d4d9386ae.zip/node_modules/fast-redact/lib/validator.js"(exports, module) {
      "use strict";
      var { createContext, runInContext } = __require("vm");
      module.exports = validator;
      function validator(opts = {}) {
        const {
          ERR_PATHS_MUST_BE_STRINGS = () => "fast-redact - Paths must be (non-empty) strings",
          ERR_INVALID_PATH = (s) => `fast-redact \u2013 Invalid path (${s})`
        } = opts;
        return function validate({ paths }) {
          paths.forEach((s) => {
            if (typeof s !== "string") {
              throw Error(ERR_PATHS_MUST_BE_STRINGS());
            }
            try {
              if (/〇/.test(s))
                throw Error();
              const proxy = new Proxy({}, { get: () => proxy, set: () => {
                throw Error();
              } });
              const expr = (s[0] === "[" ? "" : ".") + s.replace(/^\*/, "\u3007").replace(/\.\*/g, ".\u3007").replace(/\[\*\]/g, "[\u3007]");
              if (/\n|\r|;/.test(expr))
                throw Error();
              if (/\/\*/.test(expr))
                throw Error();
              runInContext(`
          (function () {
            'use strict'
            o${expr}
            if ([o${expr}].length !== 1) throw Error()
          })()
        `, createContext({ o: proxy, "\u3007": null }), {
                codeGeneration: { strings: false, wasm: false }
              });
            } catch (e) {
              throw Error(ERR_INVALID_PATH(s));
            }
          });
        };
      }
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/fast-redact-npm-3.1.0-44259132af-0d4d9386ae.zip/node_modules/fast-redact/lib/rx.js
  var require_rx = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/fast-redact-npm-3.1.0-44259132af-0d4d9386ae.zip/node_modules/fast-redact/lib/rx.js"(exports, module) {
      "use strict";
      module.exports = /[^.[\]]+|\[((?:.)*?)\]/g;
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/fast-redact-npm-3.1.0-44259132af-0d4d9386ae.zip/node_modules/fast-redact/lib/parse.js
  var require_parse = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/fast-redact-npm-3.1.0-44259132af-0d4d9386ae.zip/node_modules/fast-redact/lib/parse.js"(exports, module) {
      "use strict";
      var rx = require_rx();
      module.exports = parse;
      function parse({ paths }) {
        const wildcards = [];
        var wcLen = 0;
        const secret = paths.reduce(function(o, strPath, ix) {
          var path = strPath.match(rx).map((p) => p.replace(/'|"|`/g, ""));
          const leadingBracket = strPath[0] === "[";
          path = path.map((p) => {
            if (p[0] === "[")
              return p.substr(1, p.length - 2);
            else
              return p;
          });
          const star = path.indexOf("*");
          if (star > -1) {
            const before = path.slice(0, star);
            const beforeStr = before.join(".");
            const after = path.slice(star + 1, path.length);
            const nested = after.length > 0;
            wcLen++;
            wildcards.push({
              before,
              beforeStr,
              after,
              nested
            });
          } else {
            o[strPath] = {
              path,
              val: void 0,
              precensored: false,
              circle: "",
              escPath: JSON.stringify(strPath),
              leadingBracket
            };
          }
          return o;
        }, {});
        return { wildcards, wcLen, secret };
      }
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/fast-redact-npm-3.1.0-44259132af-0d4d9386ae.zip/node_modules/fast-redact/lib/redactor.js
  var require_redactor = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/fast-redact-npm-3.1.0-44259132af-0d4d9386ae.zip/node_modules/fast-redact/lib/redactor.js"(exports, module) {
      "use strict";
      var rx = require_rx();
      module.exports = redactor;
      function redactor({ secret, serialize, wcLen, strict, isCensorFct, censorFctTakesPath }, state) {
        const redact = Function("o", `
    if (typeof o !== 'object' || o == null) {
      ${strictImpl(strict, serialize)}
    }
    const { censor, secret } = this
    ${redactTmpl(secret, isCensorFct, censorFctTakesPath)}
    this.compileRestore()
    ${dynamicRedactTmpl(wcLen > 0, isCensorFct, censorFctTakesPath)}
    ${resultTmpl(serialize)}
  `).bind(state);
        if (serialize === false) {
          redact.restore = (o) => state.restore(o);
        }
        return redact;
      }
      function redactTmpl(secret, isCensorFct, censorFctTakesPath) {
        return Object.keys(secret).map((path) => {
          const { escPath, leadingBracket, path: arrPath } = secret[path];
          const skip = leadingBracket ? 1 : 0;
          const delim = leadingBracket ? "" : ".";
          const hops = [];
          var match;
          while ((match = rx.exec(path)) !== null) {
            const [, ix] = match;
            const { index, input } = match;
            if (index > skip)
              hops.push(input.substring(0, index - (ix ? 0 : 1)));
          }
          var existence = hops.map((p) => `o${delim}${p}`).join(" && ");
          if (existence.length === 0)
            existence += `o${delim}${path} != null`;
          else
            existence += ` && o${delim}${path} != null`;
          const circularDetection = `
      switch (true) {
        ${hops.reverse().map((p) => `
          case o${delim}${p} === censor:
            secret[${escPath}].circle = ${JSON.stringify(p)}
            break
        `).join("\n")}
      }
    `;
          const censorArgs = censorFctTakesPath ? `val, ${JSON.stringify(arrPath)}` : `val`;
          return `
      if (${existence}) {
        const val = o${delim}${path}
        if (val === censor) {
          secret[${escPath}].precensored = true
        } else {
          secret[${escPath}].val = val
          o${delim}${path} = ${isCensorFct ? `censor(${censorArgs})` : "censor"}
          ${circularDetection}
        }
      }
    `;
        }).join("\n");
      }
      function dynamicRedactTmpl(hasWildcards, isCensorFct, censorFctTakesPath) {
        return hasWildcards === true ? `
    {
      const { wildcards, wcLen, groupRedact, nestedRedact } = this
      for (var i = 0; i < wcLen; i++) {
        const { before, beforeStr, after, nested } = wildcards[i]
        if (nested === true) {
          secret[beforeStr] = secret[beforeStr] || []
          nestedRedact(secret[beforeStr], o, before, after, censor, ${isCensorFct}, ${censorFctTakesPath})
        } else secret[beforeStr] = groupRedact(o, before, censor, ${isCensorFct}, ${censorFctTakesPath})
      }
    }
  ` : "";
      }
      function resultTmpl(serialize) {
        return serialize === false ? `return o` : `
    var s = this.serialize(o)
    this.restore(o)
    return s
  `;
      }
      function strictImpl(strict, serialize) {
        return strict === true ? `throw Error('fast-redact: primitives cannot be redacted')` : serialize === false ? `return o` : `return this.serialize(o)`;
      }
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/fast-redact-npm-3.1.0-44259132af-0d4d9386ae.zip/node_modules/fast-redact/lib/modifiers.js
  var require_modifiers = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/fast-redact-npm-3.1.0-44259132af-0d4d9386ae.zip/node_modules/fast-redact/lib/modifiers.js"(exports, module) {
      "use strict";
      module.exports = {
        groupRedact,
        groupRestore,
        nestedRedact,
        nestedRestore
      };
      function groupRestore({ keys, values, target }) {
        if (target == null)
          return;
        const length = keys.length;
        for (var i = 0; i < length; i++) {
          const k = keys[i];
          target[k] = values[i];
        }
      }
      function groupRedact(o, path, censor, isCensorFct, censorFctTakesPath) {
        const target = get(o, path);
        if (target == null)
          return { keys: null, values: null, target: null, flat: true };
        const keys = Object.keys(target);
        const keysLength = keys.length;
        const pathLength = path.length;
        const pathWithKey = censorFctTakesPath ? [...path] : void 0;
        const values = new Array(keysLength);
        for (var i = 0; i < keysLength; i++) {
          const key = keys[i];
          values[i] = target[key];
          if (censorFctTakesPath) {
            pathWithKey[pathLength] = key;
            target[key] = censor(target[key], pathWithKey);
          } else if (isCensorFct) {
            target[key] = censor(target[key]);
          } else {
            target[key] = censor;
          }
        }
        return { keys, values, target, flat: true };
      }
      function nestedRestore(arr) {
        const length = arr.length;
        for (var i = 0; i < length; i++) {
          const { key, target, value } = arr[i];
          if (has(target, key)) {
            target[key] = value;
          }
          if (typeof target === "object") {
            const targetKeys = Object.keys(target);
            for (var j = 0; j < targetKeys.length; j++) {
              const tKey = targetKeys[j];
              const subTarget = target[tKey];
              if (has(subTarget, key)) {
                subTarget[key] = value;
              }
            }
          }
        }
      }
      function nestedRedact(store, o, path, ns, censor, isCensorFct, censorFctTakesPath) {
        const target = get(o, path);
        if (target == null)
          return;
        const keys = Object.keys(target);
        const keysLength = keys.length;
        for (var i = 0; i < keysLength; i++) {
          const key = keys[i];
          const { value, parent, exists } = specialSet(target, key, path, ns, censor, isCensorFct, censorFctTakesPath);
          if (exists === true && parent !== null) {
            store.push({ key: ns[ns.length - 1], target: parent, value });
          }
        }
        return store;
      }
      function has(obj, prop) {
        return obj !== void 0 && obj !== null ? "hasOwn" in Object ? Object.hasOwn(obj, prop) : Object.prototype.hasOwnProperty.call(obj, prop) : false;
      }
      function specialSet(o, k, path, afterPath, censor, isCensorFct, censorFctTakesPath) {
        const afterPathLen = afterPath.length;
        const lastPathIndex = afterPathLen - 1;
        const originalKey = k;
        var i = -1;
        var n;
        var nv;
        var ov;
        var oov = null;
        var exists = true;
        var wc = null;
        ov = n = o[k];
        if (typeof n !== "object")
          return { value: null, parent: null, exists };
        while (n != null && ++i < afterPathLen) {
          k = afterPath[i];
          oov = ov;
          if (k !== "*" && !wc && !(typeof n === "object" && k in n)) {
            exists = false;
            break;
          }
          if (k === "*") {
            wc = k;
            if (i !== lastPathIndex) {
              continue;
            }
          }
          if (wc) {
            const wcKeys = Object.keys(n);
            for (var j = 0; j < wcKeys.length; j++) {
              const wck = wcKeys[j];
              const wcov = n[wck];
              const kIsWc = k === "*";
              if (kIsWc || typeof wcov === "object" && k in wcov) {
                if (kIsWc) {
                  ov = wcov;
                } else {
                  ov = wcov[k];
                }
                nv = i !== lastPathIndex ? ov : isCensorFct ? censorFctTakesPath ? censor(ov, [...path, originalKey, ...afterPath]) : censor(ov) : censor;
                if (kIsWc) {
                  n[wck] = nv;
                } else {
                  wcov[k] = nv === void 0 && censor !== void 0 || has(wcov, k) && nv === ov ? wcov[k] : nv;
                }
              }
            }
            wc = null;
          } else {
            ov = n[k];
            nv = i !== lastPathIndex ? ov : isCensorFct ? censorFctTakesPath ? censor(ov, [...path, originalKey, ...afterPath]) : censor(ov) : censor;
            n[k] = has(n, k) && nv === ov || nv === void 0 && censor !== void 0 ? n[k] : nv;
            n = n[k];
          }
          if (typeof n !== "object")
            break;
        }
        return { value: ov, parent: oov, exists };
      }
      function get(o, p) {
        var i = -1;
        var l = p.length;
        var n = o;
        while (n != null && ++i < l) {
          n = n[p[i]];
        }
        return n;
      }
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/fast-redact-npm-3.1.0-44259132af-0d4d9386ae.zip/node_modules/fast-redact/lib/restorer.js
  var require_restorer = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/fast-redact-npm-3.1.0-44259132af-0d4d9386ae.zip/node_modules/fast-redact/lib/restorer.js"(exports, module) {
      "use strict";
      var { groupRestore, nestedRestore } = require_modifiers();
      module.exports = restorer;
      function restorer({ secret, wcLen }) {
        return function compileRestore() {
          if (this.restore)
            return;
          const paths = Object.keys(secret);
          const resetters = resetTmpl(secret, paths);
          const hasWildcards = wcLen > 0;
          const state = hasWildcards ? { secret, groupRestore, nestedRestore } : { secret };
          this.restore = Function("o", restoreTmpl(resetters, paths, hasWildcards)).bind(state);
        };
      }
      function resetTmpl(secret, paths) {
        return paths.map((path) => {
          const { circle, escPath, leadingBracket } = secret[path];
          const delim = leadingBracket ? "" : ".";
          const reset = circle ? `o.${circle} = secret[${escPath}].val` : `o${delim}${path} = secret[${escPath}].val`;
          const clear = `secret[${escPath}].val = undefined`;
          return `
      if (secret[${escPath}].val !== undefined) {
        try { ${reset} } catch (e) {}
        ${clear}
      }
    `;
        }).join("");
      }
      function restoreTmpl(resetters, paths, hasWildcards) {
        const dynamicReset = hasWildcards === true ? `
    const keys = Object.keys(secret)
    const len = keys.length
    for (var i = len - 1; i >= ${paths.length}; i--) {
      const k = keys[i]
      const o = secret[k]
      if (o.flat === true) this.groupRestore(o)
      else this.nestedRestore(o)
      secret[k] = null
    }
  ` : "";
        return `
    const secret = this.secret
    ${dynamicReset}
    ${resetters}
    return o
  `;
      }
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/fast-redact-npm-3.1.0-44259132af-0d4d9386ae.zip/node_modules/fast-redact/lib/state.js
  var require_state = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/fast-redact-npm-3.1.0-44259132af-0d4d9386ae.zip/node_modules/fast-redact/lib/state.js"(exports, module) {
      "use strict";
      module.exports = state;
      function state(o) {
        const {
          secret,
          censor,
          compileRestore,
          serialize,
          groupRedact,
          nestedRedact,
          wildcards,
          wcLen
        } = o;
        const builder = [{ secret, censor, compileRestore }];
        if (serialize !== false)
          builder.push({ serialize });
        if (wcLen > 0)
          builder.push({ groupRedact, nestedRedact, wildcards, wcLen });
        return Object.assign(...builder);
      }
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/fast-redact-npm-3.1.0-44259132af-0d4d9386ae.zip/node_modules/fast-redact/index.js
  var require_fast_redact = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/fast-redact-npm-3.1.0-44259132af-0d4d9386ae.zip/node_modules/fast-redact/index.js"(exports, module) {
      "use strict";
      var validator = require_validator();
      var parse = require_parse();
      var redactor = require_redactor();
      var restorer = require_restorer();
      var { groupRedact, nestedRedact } = require_modifiers();
      var state = require_state();
      var rx = require_rx();
      var validate = validator();
      var noop = (o) => o;
      noop.restore = noop;
      var DEFAULT_CENSOR = "[REDACTED]";
      fastRedact.rx = rx;
      fastRedact.validator = validator;
      module.exports = fastRedact;
      function fastRedact(opts = {}) {
        const paths = Array.from(new Set(opts.paths || []));
        const serialize = "serialize" in opts ? opts.serialize === false ? opts.serialize : typeof opts.serialize === "function" ? opts.serialize : JSON.stringify : JSON.stringify;
        const remove = opts.remove;
        if (remove === true && serialize !== JSON.stringify) {
          throw Error("fast-redact \u2013 remove option may only be set when serializer is JSON.stringify");
        }
        const censor = remove === true ? void 0 : "censor" in opts ? opts.censor : DEFAULT_CENSOR;
        const isCensorFct = typeof censor === "function";
        const censorFctTakesPath = isCensorFct && censor.length > 1;
        if (paths.length === 0)
          return serialize || noop;
        validate({ paths, serialize, censor });
        const { wildcards, wcLen, secret } = parse({ paths, censor });
        const compileRestore = restorer({ secret, wcLen });
        const strict = "strict" in opts ? opts.strict : true;
        return redactor({ secret, wcLen, serialize, strict, isCensorFct, censorFctTakesPath }, state({
          secret,
          censor,
          compileRestore,
          serialize,
          groupRedact,
          nestedRedact,
          wildcards,
          wcLen
        }));
      }
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/unplugged/pino-npm-7.6.5-9eaea6e55b/node_modules/pino/lib/symbols.js
  var require_symbols = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/unplugged/pino-npm-7.6.5-9eaea6e55b/node_modules/pino/lib/symbols.js"(exports, module) {
      "use strict";
      var setLevelSym = Symbol("pino.setLevel");
      var getLevelSym = Symbol("pino.getLevel");
      var levelValSym = Symbol("pino.levelVal");
      var useLevelLabelsSym = Symbol("pino.useLevelLabels");
      var useOnlyCustomLevelsSym = Symbol("pino.useOnlyCustomLevels");
      var mixinSym = Symbol("pino.mixin");
      var lsCacheSym = Symbol("pino.lsCache");
      var chindingsSym = Symbol("pino.chindings");
      var parsedChindingsSym = Symbol("pino.parsedChindings");
      var asJsonSym = Symbol("pino.asJson");
      var writeSym = Symbol("pino.write");
      var redactFmtSym = Symbol("pino.redactFmt");
      var timeSym = Symbol("pino.time");
      var timeSliceIndexSym = Symbol("pino.timeSliceIndex");
      var streamSym = Symbol("pino.stream");
      var stringifySym = Symbol("pino.stringify");
      var stringifySafeSym = Symbol("pino.stringifySafe");
      var stringifiersSym = Symbol("pino.stringifiers");
      var endSym = Symbol("pino.end");
      var formatOptsSym = Symbol("pino.formatOpts");
      var messageKeySym = Symbol("pino.messageKey");
      var nestedKeySym = Symbol("pino.nestedKey");
      var nestedKeyStrSym = Symbol("pino.nestedKeyStr");
      var wildcardFirstSym = Symbol("pino.wildcardFirst");
      var serializersSym = Symbol.for("pino.serializers");
      var formattersSym = Symbol.for("pino.formatters");
      var hooksSym = Symbol.for("pino.hooks");
      var needsMetadataGsym = Symbol.for("pino.metadata");
      module.exports = {
        setLevelSym,
        getLevelSym,
        levelValSym,
        useLevelLabelsSym,
        mixinSym,
        lsCacheSym,
        chindingsSym,
        parsedChindingsSym,
        asJsonSym,
        writeSym,
        serializersSym,
        redactFmtSym,
        timeSym,
        timeSliceIndexSym,
        streamSym,
        stringifySym,
        stringifySafeSym,
        stringifiersSym,
        endSym,
        formatOptsSym,
        messageKeySym,
        nestedKeySym,
        wildcardFirstSym,
        needsMetadataGsym,
        useOnlyCustomLevelsSym,
        formattersSym,
        hooksSym,
        nestedKeyStrSym
      };
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/unplugged/pino-npm-7.6.5-9eaea6e55b/node_modules/pino/lib/redaction.js
  var require_redaction = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/unplugged/pino-npm-7.6.5-9eaea6e55b/node_modules/pino/lib/redaction.js"(exports, module) {
      "use strict";
      var fastRedact = require_fast_redact();
      var { redactFmtSym, wildcardFirstSym } = require_symbols();
      var { rx, validator } = fastRedact;
      var validate = validator({
        ERR_PATHS_MUST_BE_STRINGS: () => "pino \u2013 redacted paths must be strings",
        ERR_INVALID_PATH: (s) => `pino \u2013 redact paths array contains an invalid path (${s})`
      });
      var CENSOR = "[Redacted]";
      var strict = false;
      function redaction(opts, serialize) {
        const { paths, censor } = handle(opts);
        const shape = paths.reduce((o, str) => {
          rx.lastIndex = 0;
          const first = rx.exec(str);
          const next = rx.exec(str);
          let ns = first[1] !== void 0 ? first[1].replace(/^(?:"|'|`)(.*)(?:"|'|`)$/, "$1") : first[0];
          if (ns === "*") {
            ns = wildcardFirstSym;
          }
          if (next === null) {
            o[ns] = null;
            return o;
          }
          if (o[ns] === null) {
            return o;
          }
          const { index } = next;
          const nextPath = `${str.substr(index, str.length - 1)}`;
          o[ns] = o[ns] || [];
          if (ns !== wildcardFirstSym && o[ns].length === 0) {
            o[ns].push(...o[wildcardFirstSym] || []);
          }
          if (ns === wildcardFirstSym) {
            Object.keys(o).forEach(function(k) {
              if (o[k]) {
                o[k].push(nextPath);
              }
            });
          }
          o[ns].push(nextPath);
          return o;
        }, {});
        const result = {
          [redactFmtSym]: fastRedact({ paths, censor, serialize, strict })
        };
        const topCensor = (...args) => {
          return typeof censor === "function" ? serialize(censor(...args)) : serialize(censor);
        };
        return [...Object.keys(shape), ...Object.getOwnPropertySymbols(shape)].reduce((o, k) => {
          if (shape[k] === null) {
            o[k] = (value) => topCensor(value, [k]);
          } else {
            const wrappedCensor = typeof censor === "function" ? (value, path) => {
              return censor(value, [k, ...path]);
            } : censor;
            o[k] = fastRedact({
              paths: shape[k],
              censor: wrappedCensor,
              serialize,
              strict
            });
          }
          return o;
        }, result);
      }
      function handle(opts) {
        if (Array.isArray(opts)) {
          opts = { paths: opts, censor: CENSOR };
          validate(opts);
          return opts;
        }
        let { paths, censor = CENSOR, remove } = opts;
        if (Array.isArray(paths) === false) {
          throw Error("pino \u2013 redact must contain an array of strings");
        }
        if (remove === true)
          censor = void 0;
        validate({ paths, censor });
        return { paths, censor };
      }
      module.exports = redaction;
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/unplugged/pino-npm-7.6.5-9eaea6e55b/node_modules/pino/lib/time.js
  var require_time = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/unplugged/pino-npm-7.6.5-9eaea6e55b/node_modules/pino/lib/time.js"(exports, module) {
      "use strict";
      var nullTime = () => "";
      var epochTime = () => `,"time":${Date.now()}`;
      var unixTime = () => `,"time":${Math.round(Date.now() / 1e3)}`;
      var isoTime = () => `,"time":"${new Date(Date.now()).toISOString()}"`;
      module.exports = { nullTime, epochTime, unixTime, isoTime };
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/quick-format-unescaped-npm-4.0.4-7e22c9b7dc-7bc32b9935.zip/node_modules/quick-format-unescaped/index.js
  var require_quick_format_unescaped = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/quick-format-unescaped-npm-4.0.4-7e22c9b7dc-7bc32b9935.zip/node_modules/quick-format-unescaped/index.js"(exports, module) {
      "use strict";
      function tryStringify(o) {
        try {
          return JSON.stringify(o);
        } catch (e) {
          return '"[Circular]"';
        }
      }
      module.exports = format;
      function format(f, args, opts) {
        var ss = opts && opts.stringify || tryStringify;
        var offset = 1;
        if (typeof f === "object" && f !== null) {
          var len = args.length + offset;
          if (len === 1)
            return f;
          var objects = new Array(len);
          objects[0] = ss(f);
          for (var index = 1; index < len; index++) {
            objects[index] = ss(args[index]);
          }
          return objects.join(" ");
        }
        if (typeof f !== "string") {
          return f;
        }
        var argLen = args.length;
        if (argLen === 0)
          return f;
        var str = "";
        var a = 1 - offset;
        var lastPos = -1;
        var flen = f && f.length || 0;
        for (var i = 0; i < flen; ) {
          if (f.charCodeAt(i) === 37 && i + 1 < flen) {
            lastPos = lastPos > -1 ? lastPos : 0;
            switch (f.charCodeAt(i + 1)) {
              case 100:
              case 102:
                if (a >= argLen)
                  break;
                if (args[a] == null)
                  break;
                if (lastPos < i)
                  str += f.slice(lastPos, i);
                str += Number(args[a]);
                lastPos = i + 2;
                i++;
                break;
              case 105:
                if (a >= argLen)
                  break;
                if (args[a] == null)
                  break;
                if (lastPos < i)
                  str += f.slice(lastPos, i);
                str += Math.floor(Number(args[a]));
                lastPos = i + 2;
                i++;
                break;
              case 79:
              case 111:
              case 106:
                if (a >= argLen)
                  break;
                if (args[a] === void 0)
                  break;
                if (lastPos < i)
                  str += f.slice(lastPos, i);
                var type = typeof args[a];
                if (type === "string") {
                  str += "'" + args[a] + "'";
                  lastPos = i + 2;
                  i++;
                  break;
                }
                if (type === "function") {
                  str += args[a].name || "<anonymous>";
                  lastPos = i + 2;
                  i++;
                  break;
                }
                str += ss(args[a]);
                lastPos = i + 2;
                i++;
                break;
              case 115:
                if (a >= argLen)
                  break;
                if (lastPos < i)
                  str += f.slice(lastPos, i);
                str += String(args[a]);
                lastPos = i + 2;
                i++;
                break;
              case 37:
                if (lastPos < i)
                  str += f.slice(lastPos, i);
                str += "%";
                lastPos = i + 2;
                i++;
                a--;
                break;
            }
            ++a;
          }
          ++i;
        }
        if (lastPos === -1)
          return f;
        else if (lastPos < flen) {
          str += f.slice(lastPos);
        }
        return str;
      }
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/atomic-sleep-npm-1.0.0-17d8a762a3-b95275afb2.zip/node_modules/atomic-sleep/index.js
  var require_atomic_sleep = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/atomic-sleep-npm-1.0.0-17d8a762a3-b95275afb2.zip/node_modules/atomic-sleep/index.js"(exports, module) {
      "use strict";
      if (typeof SharedArrayBuffer !== "undefined" && typeof Atomics !== "undefined") {
        let sleep = function(ms) {
          const valid = ms > 0 && ms < Infinity;
          if (valid === false) {
            if (typeof ms !== "number" && typeof ms !== "bigint") {
              throw TypeError("sleep: ms must be a number");
            }
            throw RangeError("sleep: ms must be a number that is greater than 0 but less than Infinity");
          }
          Atomics.wait(nil, 0, 0, Number(ms));
        };
        const nil = new Int32Array(new SharedArrayBuffer(4));
        module.exports = sleep;
      } else {
        let sleep = function(ms) {
          const valid = ms > 0 && ms < Infinity;
          if (valid === false) {
            if (typeof ms !== "number" && typeof ms !== "bigint") {
              throw TypeError("sleep: ms must be a number");
            }
            throw RangeError("sleep: ms must be a number that is greater than 0 but less than Infinity");
          }
          const target = Date.now() + Number(ms);
          while (target > Date.now()) {
          }
        };
        module.exports = sleep;
      }
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/sonic-boom-npm-2.6.0-ad9d859ac1-7d7e3de33c.zip/node_modules/sonic-boom/index.js
  var require_sonic_boom = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/sonic-boom-npm-2.6.0-ad9d859ac1-7d7e3de33c.zip/node_modules/sonic-boom/index.js"(exports, module) {
      "use strict";
      var fs = __require("fs");
      var EventEmitter = __require("events");
      var inherits = __require("util").inherits;
      var path = __require("path");
      var sleep = require_atomic_sleep();
      var BUSY_WRITE_TIMEOUT = 100;
      var MAX_WRITE = 64 * 1024;
      function openFile(file, sonic) {
        sonic._opening = true;
        sonic._writing = true;
        sonic._asyncDrainScheduled = false;
        function fileOpened(err, fd) {
          if (err) {
            sonic._reopening = false;
            sonic._writing = false;
            sonic._opening = false;
            if (sonic.sync) {
              process.nextTick(() => {
                if (sonic.listenerCount("error") > 0) {
                  sonic.emit("error", err);
                }
              });
            } else {
              sonic.emit("error", err);
            }
            return;
          }
          sonic.fd = fd;
          sonic.file = file;
          sonic._reopening = false;
          sonic._opening = false;
          sonic._writing = false;
          if (sonic.sync) {
            process.nextTick(() => sonic.emit("ready"));
          } else {
            sonic.emit("ready");
          }
          if (sonic._reopening) {
            return;
          }
          if (!sonic._writing && sonic._len > sonic.minLength && !sonic.destroyed) {
            actualWrite(sonic);
          }
        }
        const flags = sonic.append ? "a" : "w";
        const mode = sonic.mode;
        if (sonic.sync) {
          try {
            if (sonic.mkdir)
              fs.mkdirSync(path.dirname(file), { recursive: true });
            const fd = fs.openSync(file, flags, mode);
            fileOpened(null, fd);
          } catch (err) {
            fileOpened(err);
            throw err;
          }
        } else if (sonic.mkdir) {
          fs.mkdir(path.dirname(file), { recursive: true }, (err) => {
            if (err)
              return fileOpened(err);
            fs.open(file, flags, mode, fileOpened);
          });
        } else {
          fs.open(file, flags, mode, fileOpened);
        }
      }
      function SonicBoom(opts) {
        if (!(this instanceof SonicBoom)) {
          return new SonicBoom(opts);
        }
        let { fd, dest, minLength, maxLength, sync, append = true, mode, mkdir, retryEAGAIN } = opts || {};
        fd = fd || dest;
        this._bufs = [];
        this._len = 0;
        this.fd = -1;
        this._writing = false;
        this._writingBuf = "";
        this._ending = false;
        this._reopening = false;
        this._asyncDrainScheduled = false;
        this._hwm = Math.max(minLength || 0, 16387);
        this.file = null;
        this.destroyed = false;
        this.minLength = minLength || 0;
        this.maxLength = maxLength || 0;
        this.sync = sync || false;
        this.append = append || false;
        this.mode = mode;
        this.retryEAGAIN = retryEAGAIN || (() => true);
        this.mkdir = mkdir || false;
        if (typeof fd === "number") {
          this.fd = fd;
          process.nextTick(() => this.emit("ready"));
        } else if (typeof fd === "string") {
          openFile(fd, this);
        } else {
          throw new Error("SonicBoom supports only file descriptors and files");
        }
        if (this.minLength >= MAX_WRITE) {
          throw new Error(`minLength should be smaller than MAX_WRITE (${MAX_WRITE})`);
        }
        this.release = (err, n) => {
          if (err) {
            if (err.code === "EAGAIN" && this.retryEAGAIN(err, this._writingBuf.length, this._len - this._writingBuf.length)) {
              if (this.sync) {
                try {
                  sleep(BUSY_WRITE_TIMEOUT);
                  this.release(void 0, 0);
                } catch (err2) {
                  this.release(err2);
                }
              } else {
                setTimeout(() => {
                  fs.write(this.fd, this._writingBuf, "utf8", this.release);
                }, BUSY_WRITE_TIMEOUT);
              }
            } else {
              this._writing = false;
              this.emit("error", err);
            }
            return;
          }
          this._len -= n;
          this._writingBuf = this._writingBuf.slice(n);
          if (this._writingBuf.length) {
            if (!this.sync) {
              fs.write(this.fd, this._writingBuf, "utf8", this.release);
              return;
            }
            try {
              do {
                const n2 = fs.writeSync(this.fd, this._writingBuf, "utf8");
                this._len -= n2;
                this._writingBuf = this._writingBuf.slice(n2);
              } while (this._writingBuf);
            } catch (err2) {
              this.release(err2);
              return;
            }
          }
          const len = this._len;
          if (this._reopening) {
            this._writing = false;
            this._reopening = false;
            this.reopen();
          } else if (len > this.minLength) {
            actualWrite(this);
          } else if (this._ending) {
            if (len > 0) {
              actualWrite(this);
            } else {
              this._writing = false;
              actualClose(this);
            }
          } else {
            this._writing = false;
            if (this.sync) {
              if (!this._asyncDrainScheduled) {
                this._asyncDrainScheduled = true;
                process.nextTick(emitDrain, this);
              }
            } else {
              this.emit("drain");
            }
          }
        };
        this.on("newListener", function(name) {
          if (name === "drain") {
            this._asyncDrainScheduled = false;
          }
        });
      }
      function emitDrain(sonic) {
        const hasListeners = sonic.listenerCount("drain") > 0;
        if (!hasListeners)
          return;
        sonic._asyncDrainScheduled = false;
        sonic.emit("drain");
      }
      inherits(SonicBoom, EventEmitter);
      SonicBoom.prototype.write = function(data) {
        if (this.destroyed) {
          throw new Error("SonicBoom destroyed");
        }
        const len = this._len + data.length;
        const bufs = this._bufs;
        if (this.maxLength && len > this.maxLength) {
          this.emit("drop", data);
          return this._len < this._hwm;
        }
        if (bufs.length === 0 || bufs[bufs.length - 1].length + data.length > MAX_WRITE) {
          bufs.push("" + data);
        } else {
          bufs[bufs.length - 1] += data;
        }
        this._len = len;
        if (!this._writing && this._len >= this.minLength) {
          actualWrite(this);
        }
        return this._len < this._hwm;
      };
      SonicBoom.prototype.flush = function() {
        if (this.destroyed) {
          throw new Error("SonicBoom destroyed");
        }
        if (this._writing || this.minLength <= 0) {
          return;
        }
        if (this._bufs.length === 0) {
          this._bufs.push("");
        }
        actualWrite(this);
      };
      SonicBoom.prototype.reopen = function(file) {
        if (this.destroyed) {
          throw new Error("SonicBoom destroyed");
        }
        if (this._opening) {
          this.once("ready", () => {
            this.reopen(file);
          });
          return;
        }
        if (this._ending) {
          return;
        }
        if (!this.file) {
          throw new Error("Unable to reopen a file descriptor, you must pass a file to SonicBoom");
        }
        this._reopening = true;
        if (this._writing) {
          return;
        }
        const fd = this.fd;
        this.once("ready", () => {
          if (fd !== this.fd) {
            fs.close(fd, (err) => {
              if (err) {
                return this.emit("error", err);
              }
            });
          }
        });
        openFile(file || this.file, this);
      };
      SonicBoom.prototype.end = function() {
        if (this.destroyed) {
          throw new Error("SonicBoom destroyed");
        }
        if (this._opening) {
          this.once("ready", () => {
            this.end();
          });
          return;
        }
        if (this._ending) {
          return;
        }
        this._ending = true;
        if (this._writing) {
          return;
        }
        if (this._len > 0 && this.fd >= 0) {
          actualWrite(this);
        } else {
          actualClose(this);
        }
      };
      SonicBoom.prototype.flushSync = function() {
        if (this.destroyed) {
          throw new Error("SonicBoom destroyed");
        }
        if (this.fd < 0) {
          throw new Error("sonic boom is not ready yet");
        }
        if (!this._writing && this._writingBuf.length > 0) {
          this._bufs.unshift(this._writingBuf);
          this._writingBuf = "";
        }
        while (this._bufs.length) {
          const buf = this._bufs[0];
          try {
            this._len -= fs.writeSync(this.fd, buf, "utf8");
            this._bufs.shift();
          } catch (err) {
            if (err.code !== "EAGAIN" || !this.retryEAGAIN(err, buf.length, this._len - buf.length)) {
              throw err;
            }
            sleep(BUSY_WRITE_TIMEOUT);
          }
        }
      };
      SonicBoom.prototype.destroy = function() {
        if (this.destroyed) {
          return;
        }
        actualClose(this);
      };
      function actualWrite(sonic) {
        const release = sonic.release;
        sonic._writing = true;
        sonic._writingBuf = sonic._writingBuf || sonic._bufs.shift() || "";
        if (sonic.sync) {
          try {
            const written = fs.writeSync(sonic.fd, sonic._writingBuf, "utf8");
            release(null, written);
          } catch (err) {
            release(err);
          }
        } else {
          fs.write(sonic.fd, sonic._writingBuf, "utf8", release);
        }
      }
      function actualClose(sonic) {
        if (sonic.fd === -1) {
          sonic.once("ready", actualClose.bind(null, sonic));
          return;
        }
        sonic.destroyed = true;
        sonic._bufs = [];
        if (sonic.fd !== 1 && sonic.fd !== 2) {
          fs.close(sonic.fd, done);
        } else {
          setImmediate(done);
        }
        function done(err) {
          if (err) {
            sonic.emit("error", err);
            return;
          }
          if (sonic._ending && !sonic._writing) {
            sonic.emit("finish");
          }
          sonic.emit("close");
        }
      }
      SonicBoom.SonicBoom = SonicBoom;
      SonicBoom.default = SonicBoom;
      module.exports = SonicBoom;
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/process-warning-npm-1.0.0-8b886c4a9d-c708a03241.zip/node_modules/process-warning/index.js
  var require_process_warning = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/process-warning-npm-1.0.0-8b886c4a9d-c708a03241.zip/node_modules/process-warning/index.js"(exports, module) {
      "use strict";
      var { format } = __require("util");
      function build() {
        const codes = {};
        const emitted = /* @__PURE__ */ new Map();
        function create(name, code, message) {
          if (!name)
            throw new Error("Warning name must not be empty");
          if (!code)
            throw new Error("Warning code must not be empty");
          if (!message)
            throw new Error("Warning message must not be empty");
          code = code.toUpperCase();
          if (codes[code] !== void 0) {
            throw new Error(`The code '${code}' already exist`);
          }
          function buildWarnOpts(a, b, c) {
            let formatted;
            if (a && b && c) {
              formatted = format(message, a, b, c);
            } else if (a && b) {
              formatted = format(message, a, b);
            } else if (a) {
              formatted = format(message, a);
            } else {
              formatted = message;
            }
            return {
              code,
              name,
              message: formatted
            };
          }
          emitted.set(code, false);
          codes[code] = buildWarnOpts;
          return codes[code];
        }
        function emit(code, a, b, c) {
          if (codes[code] === void 0)
            throw new Error(`The code '${code}' does not exist`);
          if (emitted.get(code) === true)
            return;
          emitted.set(code, true);
          const warning = codes[code](a, b, c);
          process.emitWarning(warning.message, warning.name, warning.code);
        }
        return {
          create,
          emit,
          emitted
        };
      }
      module.exports = build;
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/unplugged/pino-npm-7.6.5-9eaea6e55b/node_modules/pino/lib/deprecations.js
  var require_deprecations = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/unplugged/pino-npm-7.6.5-9eaea6e55b/node_modules/pino/lib/deprecations.js"(exports, module) {
      "use strict";
      var warning = require_process_warning()();
      module.exports = warning;
      var warnName = "PinoWarning";
      warning.create(warnName, "PINODEP008", "prettyPrint is deprecated, look at https://github.com/pinojs/pino-pretty for alternatives.");
      warning.create(warnName, "PINODEP009", "The use of pino.final is discouraged in Node.js v14+ and not required. It will be removed in the next major version");
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/on-exit-leak-free-npm-0.2.0-58bc1e8da0-d22b0f0538.zip/node_modules/on-exit-leak-free/index.js
  var require_on_exit_leak_free = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/on-exit-leak-free-npm-0.2.0-58bc1e8da0-d22b0f0538.zip/node_modules/on-exit-leak-free/index.js"(exports, module) {
      "use strict";
      function genWrap(wraps, ref, fn, event) {
        function wrap() {
          const obj = ref.deref();
          if (obj !== void 0) {
            fn(obj, event);
          }
        }
        wraps[event] = wrap;
        process.once(event, wrap);
      }
      var registry = new FinalizationRegistry(clear);
      var map = /* @__PURE__ */ new WeakMap();
      function clear(wraps) {
        process.removeListener("exit", wraps.exit);
        process.removeListener("beforeExit", wraps.beforeExit);
      }
      function register(obj, fn) {
        if (obj === void 0) {
          throw new Error("the object can't be undefined");
        }
        const ref = new WeakRef(obj);
        const wraps = {};
        map.set(obj, wraps);
        registry.register(obj, wraps);
        genWrap(wraps, ref, fn, "exit");
        genWrap(wraps, ref, fn, "beforeExit");
      }
      function unregister(obj) {
        const wraps = map.get(obj);
        map.delete(obj);
        if (wraps) {
          clear(wraps);
        }
        registry.unregister(obj);
      }
      module.exports = {
        register,
        unregister
      };
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/thread-stream-npm-0.13.1-3209edfcff-d1f9ab2dda.zip/node_modules/thread-stream/lib/wait.js
  var require_wait = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/thread-stream-npm-0.13.1-3209edfcff-d1f9ab2dda.zip/node_modules/thread-stream/lib/wait.js"(exports, module) {
      "use strict";
      var MAX_TIMEOUT = 1e3;
      function wait(state, index, expected, timeout, done) {
        const max = Date.now() + timeout;
        let current = Atomics.load(state, index);
        if (current === expected) {
          done(null, "ok");
          return;
        }
        let prior = current;
        const check = (backoff) => {
          if (Date.now() > max) {
            done(null, "timed-out");
          } else {
            setTimeout(() => {
              prior = current;
              current = Atomics.load(state, index);
              if (current === prior) {
                check(backoff >= MAX_TIMEOUT ? MAX_TIMEOUT : backoff * 2);
              } else {
                if (current === expected)
                  done(null, "ok");
                else
                  done(null, "not-equal");
              }
            }, backoff);
          }
        };
        check(1);
      }
      function waitDiff(state, index, expected, timeout, done) {
        const max = Date.now() + timeout;
        let current = Atomics.load(state, index);
        if (current !== expected) {
          done(null, "ok");
          return;
        }
        const check = (backoff) => {
          if (Date.now() > max) {
            done(null, "timed-out");
          } else {
            setTimeout(() => {
              current = Atomics.load(state, index);
              if (current !== expected) {
                done(null, "ok");
              } else {
                check(backoff >= MAX_TIMEOUT ? MAX_TIMEOUT : backoff * 2);
              }
            }, backoff);
          }
        };
        check(1);
      }
      module.exports = { wait, waitDiff };
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/thread-stream-npm-0.13.1-3209edfcff-d1f9ab2dda.zip/node_modules/thread-stream/lib/indexes.js
  var require_indexes = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/thread-stream-npm-0.13.1-3209edfcff-d1f9ab2dda.zip/node_modules/thread-stream/lib/indexes.js"(exports, module) {
      "use strict";
      var WRITE_INDEX = 4;
      var READ_INDEX = 8;
      module.exports = {
        WRITE_INDEX,
        READ_INDEX
      };
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/thread-stream-npm-0.13.1-3209edfcff-d1f9ab2dda.zip/node_modules/thread-stream/index.js
  var require_thread_stream = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/thread-stream-npm-0.13.1-3209edfcff-d1f9ab2dda.zip/node_modules/thread-stream/index.js"(exports, module) {
      "use strict";
      var { EventEmitter } = __require("events");
      var { Worker } = __require("worker_threads");
      var { join } = __require("path");
      var { pathToFileURL } = __require("url");
      var { wait } = require_wait();
      var {
        WRITE_INDEX,
        READ_INDEX
      } = require_indexes();
      var buffer = __require("buffer");
      var assert = __require("assert");
      var kImpl = Symbol("kImpl");
      var MAX_STRING = buffer.constants.MAX_STRING_LENGTH;
      var FakeWeakRef = class {
        constructor(value) {
          this._value = value;
        }
        deref() {
          return this._value;
        }
      };
      var FinalizationRegistry2 = global.FinalizationRegistry || class FakeFinalizationRegistry {
        register() {
        }
        unregister() {
        }
      };
      var WeakRef2 = global.WeakRef || FakeWeakRef;
      var registry = new FinalizationRegistry2((worker) => {
        if (worker.exited) {
          return;
        }
        worker.terminate();
      });
      function createWorker(stream, opts) {
        const { filename, workerData } = opts;
        const bundlerOverrides = "__bundlerPathsOverrides" in globalThis ? globalThis.__bundlerPathsOverrides : {};
        const toExecute = bundlerOverrides["thread-stream-worker"] || join(__dirname, "lib", "worker.js");
        const worker = new Worker(toExecute, {
          ...opts.workerOpts,
          workerData: {
            filename: filename.indexOf("file://") === 0 ? filename : pathToFileURL(filename).href,
            dataBuf: stream[kImpl].dataBuf,
            stateBuf: stream[kImpl].stateBuf,
            workerData
          }
        });
        worker.stream = new FakeWeakRef(stream);
        worker.on("message", onWorkerMessage);
        worker.on("exit", onWorkerExit);
        registry.register(stream, worker);
        return worker;
      }
      function drain(stream) {
        assert(!stream[kImpl].sync);
        if (stream[kImpl].needDrain) {
          stream[kImpl].needDrain = false;
          stream.emit("drain");
        }
      }
      function nextFlush(stream) {
        const writeIndex = Atomics.load(stream[kImpl].state, WRITE_INDEX);
        let leftover = stream[kImpl].data.length - writeIndex;
        if (leftover > 0) {
          if (stream[kImpl].buf.length === 0) {
            stream[kImpl].flushing = false;
            if (stream[kImpl].ending) {
              end(stream);
            } else if (stream[kImpl].needDrain) {
              process.nextTick(drain, stream);
            }
            return;
          }
          let toWrite = stream[kImpl].buf.slice(0, leftover);
          let toWriteBytes = Buffer.byteLength(toWrite);
          if (toWriteBytes <= leftover) {
            stream[kImpl].buf = stream[kImpl].buf.slice(leftover);
            write(stream, toWrite, nextFlush.bind(null, stream));
          } else {
            stream.flush(() => {
              Atomics.store(stream[kImpl].state, READ_INDEX, 0);
              Atomics.store(stream[kImpl].state, WRITE_INDEX, 0);
              while (toWriteBytes > stream[kImpl].buf.length) {
                leftover = leftover / 2;
                toWrite = stream[kImpl].buf.slice(0, leftover);
                toWriteBytes = Buffer.byteLength(toWrite);
              }
              stream[kImpl].buf = stream[kImpl].buf.slice(leftover);
              write(stream, toWrite, nextFlush.bind(null, stream));
            });
          }
        } else if (leftover === 0) {
          if (writeIndex === 0 && stream[kImpl].buf.length === 0) {
            return;
          }
          stream.flush(() => {
            Atomics.store(stream[kImpl].state, READ_INDEX, 0);
            Atomics.store(stream[kImpl].state, WRITE_INDEX, 0);
            nextFlush(stream);
          });
        } else {
          throw new Error("overwritten");
        }
      }
      function onWorkerMessage(msg) {
        const stream = this.stream.deref();
        if (stream === void 0) {
          this.exited = true;
          this.terminate();
          return;
        }
        switch (msg.code) {
          case "READY":
            this.stream = new WeakRef2(stream);
            stream.flush(() => {
              stream[kImpl].ready = true;
              stream.emit("ready");
            });
            break;
          case "ERROR":
            destroy(stream, msg.err);
            break;
          default:
            throw new Error("this should not happen: " + msg.code);
        }
      }
      function onWorkerExit(code) {
        const stream = this.stream.deref();
        if (stream === void 0) {
          return;
        }
        registry.unregister(stream);
        stream.worker.exited = true;
        stream.worker.off("exit", onWorkerExit);
        destroy(stream, code !== 0 ? new Error("The worker thread exited") : null);
      }
      var ThreadStream = class extends EventEmitter {
        constructor(opts = {}) {
          super();
          if (opts.bufferSize < 4) {
            throw new Error("bufferSize must at least fit a 4-byte utf-8 char");
          }
          this[kImpl] = {};
          this[kImpl].stateBuf = new SharedArrayBuffer(128);
          this[kImpl].state = new Int32Array(this[kImpl].stateBuf);
          this[kImpl].dataBuf = new SharedArrayBuffer(opts.bufferSize || 4 * 1024 * 1024);
          this[kImpl].data = Buffer.from(this[kImpl].dataBuf);
          this[kImpl].sync = opts.sync || false;
          this[kImpl].ending = false;
          this[kImpl].ended = false;
          this[kImpl].needDrain = false;
          this[kImpl].destroyed = false;
          this[kImpl].flushing = false;
          this[kImpl].ready = false;
          this[kImpl].finished = false;
          this[kImpl].errored = null;
          this[kImpl].closed = false;
          this[kImpl].buf = "";
          this.worker = createWorker(this, opts);
        }
        write(data) {
          if (this[kImpl].destroyed) {
            throw new Error("the worker has exited");
          }
          if (this[kImpl].ending) {
            throw new Error("the worker is ending");
          }
          if (this[kImpl].flushing && this[kImpl].buf.length + data.length >= MAX_STRING) {
            try {
              writeSync(this);
              this[kImpl].flushing = true;
            } catch (err) {
              destroy(this, err);
              return false;
            }
          }
          this[kImpl].buf += data;
          if (this[kImpl].sync) {
            try {
              writeSync(this);
              return true;
            } catch (err) {
              destroy(this, err);
              return false;
            }
          }
          if (!this[kImpl].flushing) {
            this[kImpl].flushing = true;
            setImmediate(nextFlush, this);
          }
          this[kImpl].needDrain = this[kImpl].data.length - this[kImpl].buf.length - Atomics.load(this[kImpl].state, WRITE_INDEX) <= 0;
          return !this[kImpl].needDrain;
        }
        end() {
          if (this[kImpl].destroyed) {
            throw new Error("the worker has exited");
          }
          this[kImpl].ending = true;
          end(this);
        }
        flush(cb) {
          if (this[kImpl].destroyed) {
            throw new Error("the worker has exited");
          }
          const writeIndex = Atomics.load(this[kImpl].state, WRITE_INDEX);
          wait(this[kImpl].state, READ_INDEX, writeIndex, Infinity, (err, res) => {
            if (err) {
              destroy(this, err);
              process.nextTick(cb, err);
              return;
            }
            if (res === "not-equal") {
              this.flush(cb);
              return;
            }
            process.nextTick(cb);
          });
        }
        flushSync() {
          if (this[kImpl].destroyed) {
            throw new Error("the worker has exited");
          }
          writeSync(this);
          flushSync(this);
        }
        unref() {
          this.worker.unref();
        }
        ref() {
          this.worker.ref();
        }
        get ready() {
          return this[kImpl].ready;
        }
        get destroyed() {
          return this[kImpl].destroyed;
        }
        get closed() {
          return this[kImpl].closed;
        }
        get writable() {
          return !this[kImpl].destroyed && !this[kImpl].ending;
        }
        get writableEnded() {
          return this[kImpl].ending;
        }
        get writableFinished() {
          return this[kImpl].finished;
        }
        get writableNeedDrain() {
          return this[kImpl].needDrain;
        }
        get writableObjectMode() {
          return false;
        }
        get writableErrored() {
          return this[kImpl].errored;
        }
      };
      function destroy(stream, err) {
        if (stream[kImpl].destroyed) {
          return;
        }
        stream[kImpl].destroyed = true;
        if (err) {
          stream[kImpl].errored = err;
          stream.emit("error", err);
        }
        if (!stream.worker.exited) {
          stream.worker.terminate().catch(() => {
          }).then(() => {
            stream[kImpl].closed = true;
            stream.emit("close");
          });
        } else {
          setImmediate(() => {
            stream[kImpl].closed = true;
            stream.emit("close");
          });
        }
      }
      function write(stream, data, cb) {
        const current = Atomics.load(stream[kImpl].state, WRITE_INDEX);
        const length = Buffer.byteLength(data);
        stream[kImpl].data.write(data, current);
        Atomics.store(stream[kImpl].state, WRITE_INDEX, current + length);
        Atomics.notify(stream[kImpl].state, WRITE_INDEX);
        cb();
        return true;
      }
      function end(stream) {
        if (stream[kImpl].ended || !stream[kImpl].ending || stream[kImpl].flushing) {
          return;
        }
        stream[kImpl].ended = true;
        try {
          stream.flushSync();
          let readIndex = Atomics.load(stream[kImpl].state, READ_INDEX);
          Atomics.store(stream[kImpl].state, WRITE_INDEX, -1);
          Atomics.notify(stream[kImpl].state, WRITE_INDEX);
          let spins = 0;
          while (readIndex !== -1) {
            Atomics.wait(stream[kImpl].state, READ_INDEX, readIndex, 1e3);
            readIndex = Atomics.load(stream[kImpl].state, READ_INDEX);
            if (readIndex === -2) {
              throw new Error("end() failed");
            }
            if (++spins === 10) {
              throw new Error("end() took too long (10s)");
            }
          }
          process.nextTick(() => {
            stream[kImpl].finished = true;
            stream.emit("finish");
          });
        } catch (err) {
          destroy(stream, err);
        }
      }
      function writeSync(stream) {
        const cb = () => {
          if (stream[kImpl].ending) {
            end(stream);
          } else if (stream[kImpl].needDrain) {
            process.nextTick(drain, stream);
          }
        };
        stream[kImpl].flushing = false;
        while (stream[kImpl].buf.length !== 0) {
          const writeIndex = Atomics.load(stream[kImpl].state, WRITE_INDEX);
          let leftover = stream[kImpl].data.length - writeIndex;
          if (leftover === 0) {
            flushSync(stream);
            Atomics.store(stream[kImpl].state, READ_INDEX, 0);
            Atomics.store(stream[kImpl].state, WRITE_INDEX, 0);
            continue;
          } else if (leftover < 0) {
            throw new Error("overwritten");
          }
          let toWrite = stream[kImpl].buf.slice(0, leftover);
          let toWriteBytes = Buffer.byteLength(toWrite);
          if (toWriteBytes <= leftover) {
            stream[kImpl].buf = stream[kImpl].buf.slice(leftover);
            write(stream, toWrite, cb);
          } else {
            flushSync(stream);
            Atomics.store(stream[kImpl].state, READ_INDEX, 0);
            Atomics.store(stream[kImpl].state, WRITE_INDEX, 0);
            while (toWriteBytes > stream[kImpl].buf.length) {
              leftover = leftover / 2;
              toWrite = stream[kImpl].buf.slice(0, leftover);
              toWriteBytes = Buffer.byteLength(toWrite);
            }
            stream[kImpl].buf = stream[kImpl].buf.slice(leftover);
            write(stream, toWrite, cb);
          }
        }
      }
      function flushSync(stream) {
        if (stream[kImpl].flushing) {
          throw new Error("unable to flush while flushing");
        }
        const writeIndex = Atomics.load(stream[kImpl].state, WRITE_INDEX);
        let spins = 0;
        while (true) {
          const readIndex = Atomics.load(stream[kImpl].state, READ_INDEX);
          if (readIndex === -2) {
            throw new Error("_flushSync failed");
          }
          if (readIndex !== writeIndex) {
            Atomics.wait(stream[kImpl].state, READ_INDEX, readIndex, 1e3);
          } else {
            break;
          }
          if (++spins === 10) {
            throw new Error("_flushSync took too long (10s)");
          }
        }
      }
      module.exports = ThreadStream;
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/unplugged/pino-npm-7.6.5-9eaea6e55b/node_modules/pino/lib/transport.js
  var require_transport = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/unplugged/pino-npm-7.6.5-9eaea6e55b/node_modules/pino/lib/transport.js"(exports, module) {
      "use strict";
      var { createRequire } = __require("module");
      var getCallers = require_caller();
      var { join, isAbsolute } = __require("path");
      var onExit;
      if (global.WeakRef && global.WeakMap && global.FinalizationRegistry) {
        onExit = require_on_exit_leak_free();
      }
      var ThreadStream = require_thread_stream();
      function setupOnExit(stream) {
        if (onExit) {
          onExit.register(stream, autoEnd);
          stream.on("close", function() {
            onExit.unregister(stream);
          });
        } else {
          const fn = autoEnd.bind(null, stream);
          process.once("beforeExit", fn);
          process.once("exit", fn);
          stream.on("close", function() {
            process.removeListener("beforeExit", fn);
            process.removeListener("exit", fn);
          });
        }
      }
      function buildStream(filename, workerData, workerOpts) {
        const stream = new ThreadStream({
          filename,
          workerData,
          workerOpts
        });
        stream.on("ready", onReady);
        stream.on("close", function() {
          process.removeListener("exit", onExit2);
        });
        process.on("exit", onExit2);
        function onReady() {
          process.removeListener("exit", onExit2);
          stream.unref();
          if (workerOpts.autoEnd !== false) {
            setupOnExit(stream);
          }
        }
        function onExit2() {
          if (stream.closed) {
            return;
          }
          stream.flushSync();
          stream.end();
        }
        return stream;
      }
      function autoEnd(stream) {
        stream.ref();
        stream.flushSync();
        stream.end();
        stream.once("close", function() {
          stream.unref();
        });
      }
      function transport(fullOptions) {
        const { pipeline, targets, options = {}, worker = {}, caller = getCallers() } = fullOptions;
        const callers = typeof caller === "string" ? [caller] : caller;
        const bundlerOverrides = "__bundlerPathsOverrides" in globalThis ? globalThis.__bundlerPathsOverrides : {};
        let target = fullOptions.target;
        if (target && targets) {
          throw new Error("only one of target or targets can be specified");
        }
        if (targets) {
          target = bundlerOverrides["pino-worker"] || join(__dirname, "worker.js");
          options.targets = targets.map((dest) => {
            return {
              ...dest,
              target: fixTarget(dest.target)
            };
          });
        } else if (fullOptions.pipeline) {
          target = bundlerOverrides["pino-pipeline-worker"] || join(__dirname, "worker-pipeline.js");
          options.targets = pipeline.map((dest) => {
            return {
              ...dest,
              target: fixTarget(dest.target)
            };
          });
        }
        return buildStream(fixTarget(target), options, worker);
        function fixTarget(origin) {
          origin = bundlerOverrides[origin] || origin;
          if (isAbsolute(origin) || origin.indexOf("file://") === 0) {
            return origin;
          }
          if (origin === "pino/file") {
            return join(__dirname, "..", "file.js");
          }
          let fixTarget2;
          for (const filePath of callers) {
            try {
              fixTarget2 = createRequire(filePath).resolve(origin);
              break;
            } catch (err) {
              continue;
            }
          }
          if (!fixTarget2) {
            throw new Error(`unable to determine transport target for "${origin}"`);
          }
          return fixTarget2;
        }
      }
      module.exports = transport;
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/colorette-npm-2.0.16-7b996485d7-cd55596a3a.zip/node_modules/colorette/index.cjs
  var require_colorette = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/colorette-npm-2.0.16-7b996485d7-cd55596a3a.zip/node_modules/colorette/index.cjs"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var tty = __require("tty");
      function _interopNamespace(e) {
        if (e && e.__esModule)
          return e;
        var n = /* @__PURE__ */ Object.create(null);
        if (e) {
          Object.keys(e).forEach(function(k) {
            if (k !== "default") {
              var d = Object.getOwnPropertyDescriptor(e, k);
              Object.defineProperty(n, k, d.get ? d : {
                enumerable: true,
                get: function() {
                  return e[k];
                }
              });
            }
          });
        }
        n["default"] = e;
        return Object.freeze(n);
      }
      var tty__namespace = /* @__PURE__ */ _interopNamespace(tty);
      var env = process.env || {};
      var argv = process.argv || [];
      var isDisabled = "NO_COLOR" in env || argv.includes("--no-color");
      var isForced = "FORCE_COLOR" in env || argv.includes("--color");
      var isWindows = process.platform === "win32";
      var isCompatibleTerminal = tty__namespace && tty__namespace.isatty && tty__namespace.isatty(1) && env.TERM && env.TERM !== "dumb";
      var isCI = "CI" in env && ("GITHUB_ACTIONS" in env || "GITLAB_CI" in env || "CIRCLECI" in env);
      var isColorSupported = !isDisabled && (isForced || isWindows || isCompatibleTerminal || isCI);
      var replaceClose = (index, string, close, replace, head = string.substring(0, index) + replace, tail = string.substring(index + close.length), next = tail.indexOf(close)) => head + (next < 0 ? tail : replaceClose(next, tail, close, replace));
      var clearBleed = (index, string, open, close, replace) => index < 0 ? open + string + close : open + replaceClose(index, string, close, replace) + close;
      var filterEmpty = (open, close, replace = open, at = open.length + 1) => (string) => string || !(string === "" || string === void 0) ? clearBleed(("" + string).indexOf(close, at), string, open, close, replace) : "";
      var init = (open, close, replace) => filterEmpty(`\x1B[${open}m`, `\x1B[${close}m`, replace);
      var colors = {
        reset: init(0, 0),
        bold: init(1, 22, "\x1B[22m\x1B[1m"),
        dim: init(2, 22, "\x1B[22m\x1B[2m"),
        italic: init(3, 23),
        underline: init(4, 24),
        inverse: init(7, 27),
        hidden: init(8, 28),
        strikethrough: init(9, 29),
        black: init(30, 39),
        red: init(31, 39),
        green: init(32, 39),
        yellow: init(33, 39),
        blue: init(34, 39),
        magenta: init(35, 39),
        cyan: init(36, 39),
        white: init(37, 39),
        gray: init(90, 39),
        bgBlack: init(40, 49),
        bgRed: init(41, 49),
        bgGreen: init(42, 49),
        bgYellow: init(43, 49),
        bgBlue: init(44, 49),
        bgMagenta: init(45, 49),
        bgCyan: init(46, 49),
        bgWhite: init(47, 49),
        blackBright: init(90, 39),
        redBright: init(91, 39),
        greenBright: init(92, 39),
        yellowBright: init(93, 39),
        blueBright: init(94, 39),
        magentaBright: init(95, 39),
        cyanBright: init(96, 39),
        whiteBright: init(97, 39),
        bgBlackBright: init(100, 49),
        bgRedBright: init(101, 49),
        bgGreenBright: init(102, 49),
        bgYellowBright: init(103, 49),
        bgBlueBright: init(104, 49),
        bgMagentaBright: init(105, 49),
        bgCyanBright: init(106, 49),
        bgWhiteBright: init(107, 49)
      };
      var none = (any) => any;
      var createColors = ({ useColor = isColorSupported } = {}) => useColor ? colors : Object.keys(colors).reduce((colors2, key) => ({ ...colors2, [key]: none }), {});
      var {
        reset,
        bold,
        dim,
        italic,
        underline,
        inverse,
        hidden,
        strikethrough,
        black,
        red,
        green,
        yellow,
        blue,
        magenta,
        cyan,
        white,
        gray,
        bgBlack,
        bgRed,
        bgGreen,
        bgYellow,
        bgBlue,
        bgMagenta,
        bgCyan,
        bgWhite,
        blackBright,
        redBright,
        greenBright,
        yellowBright,
        blueBright,
        magentaBright,
        cyanBright,
        whiteBright,
        bgBlackBright,
        bgRedBright,
        bgGreenBright,
        bgYellowBright,
        bgBlueBright,
        bgMagentaBright,
        bgCyanBright,
        bgWhiteBright
      } = createColors();
      exports.bgBlack = bgBlack;
      exports.bgBlackBright = bgBlackBright;
      exports.bgBlue = bgBlue;
      exports.bgBlueBright = bgBlueBright;
      exports.bgCyan = bgCyan;
      exports.bgCyanBright = bgCyanBright;
      exports.bgGreen = bgGreen;
      exports.bgGreenBright = bgGreenBright;
      exports.bgMagenta = bgMagenta;
      exports.bgMagentaBright = bgMagentaBright;
      exports.bgRed = bgRed;
      exports.bgRedBright = bgRedBright;
      exports.bgWhite = bgWhite;
      exports.bgWhiteBright = bgWhiteBright;
      exports.bgYellow = bgYellow;
      exports.bgYellowBright = bgYellowBright;
      exports.black = black;
      exports.blackBright = blackBright;
      exports.blue = blue;
      exports.blueBright = blueBright;
      exports.bold = bold;
      exports.createColors = createColors;
      exports.cyan = cyan;
      exports.cyanBright = cyanBright;
      exports.dim = dim;
      exports.gray = gray;
      exports.green = green;
      exports.greenBright = greenBright;
      exports.hidden = hidden;
      exports.inverse = inverse;
      exports.isColorSupported = isColorSupported;
      exports.italic = italic;
      exports.magenta = magenta;
      exports.magentaBright = magentaBright;
      exports.red = red;
      exports.redBright = redBright;
      exports.reset = reset;
      exports.strikethrough = strikethrough;
      exports.underline = underline;
      exports.white = white;
      exports.whiteBright = whiteBright;
      exports.yellow = yellow;
      exports.yellowBright = yellowBright;
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/wrappy-npm-1.0.2-916de4d4b3-159da4805f.zip/node_modules/wrappy/wrappy.js
  var require_wrappy = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/wrappy-npm-1.0.2-916de4d4b3-159da4805f.zip/node_modules/wrappy/wrappy.js"(exports, module) {
      module.exports = wrappy;
      function wrappy(fn, cb) {
        if (fn && cb)
          return wrappy(fn)(cb);
        if (typeof fn !== "function")
          throw new TypeError("need wrapper function");
        Object.keys(fn).forEach(function(k) {
          wrapper[k] = fn[k];
        });
        return wrapper;
        function wrapper() {
          var args = new Array(arguments.length);
          for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i];
          }
          var ret = fn.apply(this, args);
          var cb2 = args[args.length - 1];
          if (typeof ret === "function" && ret !== cb2) {
            Object.keys(cb2).forEach(function(k) {
              ret[k] = cb2[k];
            });
          }
          return ret;
        }
      }
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/once-npm-1.4.0-ccf03ef07a-cd0a885013.zip/node_modules/once/once.js
  var require_once = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/once-npm-1.4.0-ccf03ef07a-cd0a885013.zip/node_modules/once/once.js"(exports, module) {
      var wrappy = require_wrappy();
      module.exports = wrappy(once);
      module.exports.strict = wrappy(onceStrict);
      once.proto = once(function() {
        Object.defineProperty(Function.prototype, "once", {
          value: function() {
            return once(this);
          },
          configurable: true
        });
        Object.defineProperty(Function.prototype, "onceStrict", {
          value: function() {
            return onceStrict(this);
          },
          configurable: true
        });
      });
      function once(fn) {
        var f = function() {
          if (f.called)
            return f.value;
          f.called = true;
          return f.value = fn.apply(this, arguments);
        };
        f.called = false;
        return f;
      }
      function onceStrict(fn) {
        var f = function() {
          if (f.called)
            throw new Error(f.onceError);
          f.called = true;
          return f.value = fn.apply(this, arguments);
        };
        var name = fn.name || "Function wrapped with `once`";
        f.onceError = name + " shouldn't be called more than once";
        f.called = false;
        return f;
      }
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/end-of-stream-npm-1.4.4-497fc6dee1-530a5a5a1e.zip/node_modules/end-of-stream/index.js
  var require_end_of_stream = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/end-of-stream-npm-1.4.4-497fc6dee1-530a5a5a1e.zip/node_modules/end-of-stream/index.js"(exports, module) {
      var once = require_once();
      var noop = function() {
      };
      var isRequest = function(stream) {
        return stream.setHeader && typeof stream.abort === "function";
      };
      var isChildProcess = function(stream) {
        return stream.stdio && Array.isArray(stream.stdio) && stream.stdio.length === 3;
      };
      var eos = function(stream, opts, callback) {
        if (typeof opts === "function")
          return eos(stream, null, opts);
        if (!opts)
          opts = {};
        callback = once(callback || noop);
        var ws = stream._writableState;
        var rs = stream._readableState;
        var readable = opts.readable || opts.readable !== false && stream.readable;
        var writable = opts.writable || opts.writable !== false && stream.writable;
        var cancelled = false;
        var onlegacyfinish = function() {
          if (!stream.writable)
            onfinish();
        };
        var onfinish = function() {
          writable = false;
          if (!readable)
            callback.call(stream);
        };
        var onend = function() {
          readable = false;
          if (!writable)
            callback.call(stream);
        };
        var onexit = function(exitCode) {
          callback.call(stream, exitCode ? new Error("exited with error code: " + exitCode) : null);
        };
        var onerror = function(err) {
          callback.call(stream, err);
        };
        var onclose = function() {
          process.nextTick(onclosenexttick);
        };
        var onclosenexttick = function() {
          if (cancelled)
            return;
          if (readable && !(rs && (rs.ended && !rs.destroyed)))
            return callback.call(stream, new Error("premature close"));
          if (writable && !(ws && (ws.ended && !ws.destroyed)))
            return callback.call(stream, new Error("premature close"));
        };
        var onrequest = function() {
          stream.req.on("finish", onfinish);
        };
        if (isRequest(stream)) {
          stream.on("complete", onfinish);
          stream.on("abort", onclose);
          if (stream.req)
            onrequest();
          else
            stream.on("request", onrequest);
        } else if (writable && !ws) {
          stream.on("end", onlegacyfinish);
          stream.on("close", onlegacyfinish);
        }
        if (isChildProcess(stream))
          stream.on("exit", onexit);
        stream.on("end", onend);
        stream.on("finish", onfinish);
        if (opts.error !== false)
          stream.on("error", onerror);
        stream.on("close", onclose);
        return function() {
          cancelled = true;
          stream.removeListener("complete", onfinish);
          stream.removeListener("abort", onclose);
          stream.removeListener("request", onrequest);
          if (stream.req)
            stream.req.removeListener("finish", onfinish);
          stream.removeListener("end", onlegacyfinish);
          stream.removeListener("close", onlegacyfinish);
          stream.removeListener("finish", onfinish);
          stream.removeListener("exit", onexit);
          stream.removeListener("end", onend);
          stream.removeListener("error", onerror);
          stream.removeListener("close", onclose);
        };
      };
      module.exports = eos;
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/pump-npm-3.0.0-0080bf6a7a-e42e9229fb.zip/node_modules/pump/index.js
  var require_pump = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/pump-npm-3.0.0-0080bf6a7a-e42e9229fb.zip/node_modules/pump/index.js"(exports, module) {
      var once = require_once();
      var eos = require_end_of_stream();
      var fs = __require("fs");
      var noop = function() {
      };
      var ancient = /^v?\.0/.test(process.version);
      var isFn = function(fn) {
        return typeof fn === "function";
      };
      var isFS = function(stream) {
        if (!ancient)
          return false;
        if (!fs)
          return false;
        return (stream instanceof (fs.ReadStream || noop) || stream instanceof (fs.WriteStream || noop)) && isFn(stream.close);
      };
      var isRequest = function(stream) {
        return stream.setHeader && isFn(stream.abort);
      };
      var destroyer = function(stream, reading, writing, callback) {
        callback = once(callback);
        var closed = false;
        stream.on("close", function() {
          closed = true;
        });
        eos(stream, { readable: reading, writable: writing }, function(err) {
          if (err)
            return callback(err);
          closed = true;
          callback();
        });
        var destroyed = false;
        return function(err) {
          if (closed)
            return;
          if (destroyed)
            return;
          destroyed = true;
          if (isFS(stream))
            return stream.close(noop);
          if (isRequest(stream))
            return stream.abort();
          if (isFn(stream.destroy))
            return stream.destroy();
          callback(err || new Error("stream was destroyed"));
        };
      };
      var call = function(fn) {
        fn();
      };
      var pipe = function(from, to) {
        return from.pipe(to);
      };
      var pump = function() {
        var streams = Array.prototype.slice.call(arguments);
        var callback = isFn(streams[streams.length - 1] || noop) && streams.pop() || noop;
        if (Array.isArray(streams[0]))
          streams = streams[0];
        if (streams.length < 2)
          throw new Error("pump requires two streams per minimum");
        var error;
        var destroys = streams.map(function(stream, i) {
          var reading = i < streams.length - 1;
          var writing = i > 0;
          return destroyer(stream, reading, writing, function(err) {
            if (!error)
              error = err;
            if (err)
              destroys.forEach(call);
            if (reading)
              return;
            destroys.forEach(call);
            callback(error);
          });
        });
        return streams.reduce(pipe);
      };
      module.exports = pump;
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/stream.js
  var require_stream = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/stream.js"(exports, module) {
      module.exports = __require("stream");
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/buffer_list.js
  var require_buffer_list = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/buffer_list.js"(exports, module) {
      "use strict";
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly)
            symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(Object(source), true).forEach(function(key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(Object(source)).forEach(function(key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var _require = __require("buffer");
      var Buffer2 = _require.Buffer;
      var _require2 = __require("util");
      var inspect = _require2.inspect;
      var custom = inspect && inspect.custom || "inspect";
      function copyBuffer(src, target, offset) {
        Buffer2.prototype.copy.call(src, target, offset);
      }
      module.exports = /* @__PURE__ */ function() {
        function BufferList() {
          _classCallCheck(this, BufferList);
          this.head = null;
          this.tail = null;
          this.length = 0;
        }
        _createClass(BufferList, [{
          key: "push",
          value: function push(v) {
            var entry = {
              data: v,
              next: null
            };
            if (this.length > 0)
              this.tail.next = entry;
            else
              this.head = entry;
            this.tail = entry;
            ++this.length;
          }
        }, {
          key: "unshift",
          value: function unshift(v) {
            var entry = {
              data: v,
              next: this.head
            };
            if (this.length === 0)
              this.tail = entry;
            this.head = entry;
            ++this.length;
          }
        }, {
          key: "shift",
          value: function shift() {
            if (this.length === 0)
              return;
            var ret = this.head.data;
            if (this.length === 1)
              this.head = this.tail = null;
            else
              this.head = this.head.next;
            --this.length;
            return ret;
          }
        }, {
          key: "clear",
          value: function clear() {
            this.head = this.tail = null;
            this.length = 0;
          }
        }, {
          key: "join",
          value: function join(s) {
            if (this.length === 0)
              return "";
            var p = this.head;
            var ret = "" + p.data;
            while (p = p.next) {
              ret += s + p.data;
            }
            return ret;
          }
        }, {
          key: "concat",
          value: function concat(n) {
            if (this.length === 0)
              return Buffer2.alloc(0);
            var ret = Buffer2.allocUnsafe(n >>> 0);
            var p = this.head;
            var i = 0;
            while (p) {
              copyBuffer(p.data, ret, i);
              i += p.data.length;
              p = p.next;
            }
            return ret;
          }
        }, {
          key: "consume",
          value: function consume(n, hasStrings) {
            var ret;
            if (n < this.head.data.length) {
              ret = this.head.data.slice(0, n);
              this.head.data = this.head.data.slice(n);
            } else if (n === this.head.data.length) {
              ret = this.shift();
            } else {
              ret = hasStrings ? this._getString(n) : this._getBuffer(n);
            }
            return ret;
          }
        }, {
          key: "first",
          value: function first() {
            return this.head.data;
          }
        }, {
          key: "_getString",
          value: function _getString(n) {
            var p = this.head;
            var c = 1;
            var ret = p.data;
            n -= ret.length;
            while (p = p.next) {
              var str = p.data;
              var nb = n > str.length ? str.length : n;
              if (nb === str.length)
                ret += str;
              else
                ret += str.slice(0, n);
              n -= nb;
              if (n === 0) {
                if (nb === str.length) {
                  ++c;
                  if (p.next)
                    this.head = p.next;
                  else
                    this.head = this.tail = null;
                } else {
                  this.head = p;
                  p.data = str.slice(nb);
                }
                break;
              }
              ++c;
            }
            this.length -= c;
            return ret;
          }
        }, {
          key: "_getBuffer",
          value: function _getBuffer(n) {
            var ret = Buffer2.allocUnsafe(n);
            var p = this.head;
            var c = 1;
            p.data.copy(ret);
            n -= p.data.length;
            while (p = p.next) {
              var buf = p.data;
              var nb = n > buf.length ? buf.length : n;
              buf.copy(ret, ret.length - n, 0, nb);
              n -= nb;
              if (n === 0) {
                if (nb === buf.length) {
                  ++c;
                  if (p.next)
                    this.head = p.next;
                  else
                    this.head = this.tail = null;
                } else {
                  this.head = p;
                  p.data = buf.slice(nb);
                }
                break;
              }
              ++c;
            }
            this.length -= c;
            return ret;
          }
        }, {
          key: custom,
          value: function value(_, options) {
            return inspect(this, _objectSpread({}, options, {
              depth: 0,
              customInspect: false
            }));
          }
        }]);
        return BufferList;
      }();
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/destroy.js
  var require_destroy = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/destroy.js"(exports, module) {
      "use strict";
      function destroy(err, cb) {
        var _this = this;
        var readableDestroyed = this._readableState && this._readableState.destroyed;
        var writableDestroyed = this._writableState && this._writableState.destroyed;
        if (readableDestroyed || writableDestroyed) {
          if (cb) {
            cb(err);
          } else if (err) {
            if (!this._writableState) {
              process.nextTick(emitErrorNT, this, err);
            } else if (!this._writableState.errorEmitted) {
              this._writableState.errorEmitted = true;
              process.nextTick(emitErrorNT, this, err);
            }
          }
          return this;
        }
        if (this._readableState) {
          this._readableState.destroyed = true;
        }
        if (this._writableState) {
          this._writableState.destroyed = true;
        }
        this._destroy(err || null, function(err2) {
          if (!cb && err2) {
            if (!_this._writableState) {
              process.nextTick(emitErrorAndCloseNT, _this, err2);
            } else if (!_this._writableState.errorEmitted) {
              _this._writableState.errorEmitted = true;
              process.nextTick(emitErrorAndCloseNT, _this, err2);
            } else {
              process.nextTick(emitCloseNT, _this);
            }
          } else if (cb) {
            process.nextTick(emitCloseNT, _this);
            cb(err2);
          } else {
            process.nextTick(emitCloseNT, _this);
          }
        });
        return this;
      }
      function emitErrorAndCloseNT(self, err) {
        emitErrorNT(self, err);
        emitCloseNT(self);
      }
      function emitCloseNT(self) {
        if (self._writableState && !self._writableState.emitClose)
          return;
        if (self._readableState && !self._readableState.emitClose)
          return;
        self.emit("close");
      }
      function undestroy() {
        if (this._readableState) {
          this._readableState.destroyed = false;
          this._readableState.reading = false;
          this._readableState.ended = false;
          this._readableState.endEmitted = false;
        }
        if (this._writableState) {
          this._writableState.destroyed = false;
          this._writableState.ended = false;
          this._writableState.ending = false;
          this._writableState.finalCalled = false;
          this._writableState.prefinished = false;
          this._writableState.finished = false;
          this._writableState.errorEmitted = false;
        }
      }
      function emitErrorNT(self, err) {
        self.emit("error", err);
      }
      function errorOrDestroy(stream, err) {
        var rState = stream._readableState;
        var wState = stream._writableState;
        if (rState && rState.autoDestroy || wState && wState.autoDestroy)
          stream.destroy(err);
        else
          stream.emit("error", err);
      }
      module.exports = {
        destroy,
        undestroy,
        errorOrDestroy
      };
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/errors.js
  var require_errors = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/errors.js"(exports, module) {
      "use strict";
      var codes = {};
      function createErrorType(code, message, Base) {
        if (!Base) {
          Base = Error;
        }
        function getMessage(arg1, arg2, arg3) {
          if (typeof message === "string") {
            return message;
          } else {
            return message(arg1, arg2, arg3);
          }
        }
        class NodeError extends Base {
          constructor(arg1, arg2, arg3) {
            super(getMessage(arg1, arg2, arg3));
          }
        }
        NodeError.prototype.name = Base.name;
        NodeError.prototype.code = code;
        codes[code] = NodeError;
      }
      function oneOf(expected, thing) {
        if (Array.isArray(expected)) {
          const len = expected.length;
          expected = expected.map((i) => String(i));
          if (len > 2) {
            return `one of ${thing} ${expected.slice(0, len - 1).join(", ")}, or ` + expected[len - 1];
          } else if (len === 2) {
            return `one of ${thing} ${expected[0]} or ${expected[1]}`;
          } else {
            return `of ${thing} ${expected[0]}`;
          }
        } else {
          return `of ${thing} ${String(expected)}`;
        }
      }
      function startsWith(str, search, pos) {
        return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
      }
      function endsWith(str, search, this_len) {
        if (this_len === void 0 || this_len > str.length) {
          this_len = str.length;
        }
        return str.substring(this_len - search.length, this_len) === search;
      }
      function includes(str, search, start) {
        if (typeof start !== "number") {
          start = 0;
        }
        if (start + search.length > str.length) {
          return false;
        } else {
          return str.indexOf(search, start) !== -1;
        }
      }
      createErrorType("ERR_INVALID_OPT_VALUE", function(name, value) {
        return 'The value "' + value + '" is invalid for option "' + name + '"';
      }, TypeError);
      createErrorType("ERR_INVALID_ARG_TYPE", function(name, expected, actual) {
        let determiner;
        if (typeof expected === "string" && startsWith(expected, "not ")) {
          determiner = "must not be";
          expected = expected.replace(/^not /, "");
        } else {
          determiner = "must be";
        }
        let msg;
        if (endsWith(name, " argument")) {
          msg = `The ${name} ${determiner} ${oneOf(expected, "type")}`;
        } else {
          const type = includes(name, ".") ? "property" : "argument";
          msg = `The "${name}" ${type} ${determiner} ${oneOf(expected, "type")}`;
        }
        msg += `. Received type ${typeof actual}`;
        return msg;
      }, TypeError);
      createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
      createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name) {
        return "The " + name + " method is not implemented";
      });
      createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
      createErrorType("ERR_STREAM_DESTROYED", function(name) {
        return "Cannot call " + name + " after a stream was destroyed";
      });
      createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
      createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
      createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
      createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
      createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
        return "Unknown encoding: " + arg;
      }, TypeError);
      createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
      module.exports.codes = codes;
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/state.js
  var require_state2 = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/state.js"(exports, module) {
      "use strict";
      var ERR_INVALID_OPT_VALUE = require_errors().codes.ERR_INVALID_OPT_VALUE;
      function highWaterMarkFrom(options, isDuplex, duplexKey) {
        return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
      }
      function getHighWaterMark(state, options, duplexKey, isDuplex) {
        var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
        if (hwm != null) {
          if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
            var name = isDuplex ? duplexKey : "highWaterMark";
            throw new ERR_INVALID_OPT_VALUE(name, hwm);
          }
          return Math.floor(hwm);
        }
        return state.objectMode ? 16 : 16 * 1024;
      }
      module.exports = {
        getHighWaterMark
      };
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/inherits-npm-2.0.4-c66b3957a0-4a48a73384.zip/node_modules/inherits/inherits_browser.js
  var require_inherits_browser = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/inherits-npm-2.0.4-c66b3957a0-4a48a73384.zip/node_modules/inherits/inherits_browser.js"(exports, module) {
      if (typeof Object.create === "function") {
        module.exports = function inherits(ctor, superCtor) {
          if (superCtor) {
            ctor.super_ = superCtor;
            ctor.prototype = Object.create(superCtor.prototype, {
              constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
          }
        };
      } else {
        module.exports = function inherits(ctor, superCtor) {
          if (superCtor) {
            ctor.super_ = superCtor;
            var TempCtor = function() {
            };
            TempCtor.prototype = superCtor.prototype;
            ctor.prototype = new TempCtor();
            ctor.prototype.constructor = ctor;
          }
        };
      }
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/inherits-npm-2.0.4-c66b3957a0-4a48a73384.zip/node_modules/inherits/inherits.js
  var require_inherits = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/inherits-npm-2.0.4-c66b3957a0-4a48a73384.zip/node_modules/inherits/inherits.js"(exports, module) {
      try {
        util = __require("util");
        if (typeof util.inherits !== "function")
          throw "";
        module.exports = util.inherits;
      } catch (e) {
        module.exports = require_inherits_browser();
      }
      var util;
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/util-deprecate-npm-1.0.2-e3fe1a219c-474acf1146.zip/node_modules/util-deprecate/node.js
  var require_node = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/util-deprecate-npm-1.0.2-e3fe1a219c-474acf1146.zip/node_modules/util-deprecate/node.js"(exports, module) {
      module.exports = __require("util").deprecate;
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/_stream_writable.js
  var require_stream_writable = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/_stream_writable.js"(exports, module) {
      "use strict";
      module.exports = Writable;
      function CorkedRequest(state) {
        var _this = this;
        this.next = null;
        this.entry = null;
        this.finish = function() {
          onCorkedFinish(_this, state);
        };
      }
      var Duplex;
      Writable.WritableState = WritableState;
      var internalUtil = {
        deprecate: require_node()
      };
      var Stream = require_stream();
      var Buffer2 = __require("buffer").Buffer;
      var OurUint8Array = global.Uint8Array || function() {
      };
      function _uint8ArrayToBuffer(chunk) {
        return Buffer2.from(chunk);
      }
      function _isUint8Array(obj) {
        return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
      }
      var destroyImpl = require_destroy();
      var _require = require_state2();
      var getHighWaterMark = _require.getHighWaterMark;
      var _require$codes = require_errors().codes;
      var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE;
      var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
      var ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK;
      var ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE;
      var ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
      var ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES;
      var ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END;
      var ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;
      var errorOrDestroy = destroyImpl.errorOrDestroy;
      require_inherits()(Writable, Stream);
      function nop() {
      }
      function WritableState(options, stream, isDuplex) {
        Duplex = Duplex || require_stream_duplex();
        options = options || {};
        if (typeof isDuplex !== "boolean")
          isDuplex = stream instanceof Duplex;
        this.objectMode = !!options.objectMode;
        if (isDuplex)
          this.objectMode = this.objectMode || !!options.writableObjectMode;
        this.highWaterMark = getHighWaterMark(this, options, "writableHighWaterMark", isDuplex);
        this.finalCalled = false;
        this.needDrain = false;
        this.ending = false;
        this.ended = false;
        this.finished = false;
        this.destroyed = false;
        var noDecode = options.decodeStrings === false;
        this.decodeStrings = !noDecode;
        this.defaultEncoding = options.defaultEncoding || "utf8";
        this.length = 0;
        this.writing = false;
        this.corked = 0;
        this.sync = true;
        this.bufferProcessing = false;
        this.onwrite = function(er) {
          onwrite(stream, er);
        };
        this.writecb = null;
        this.writelen = 0;
        this.bufferedRequest = null;
        this.lastBufferedRequest = null;
        this.pendingcb = 0;
        this.prefinished = false;
        this.errorEmitted = false;
        this.emitClose = options.emitClose !== false;
        this.autoDestroy = !!options.autoDestroy;
        this.bufferedRequestCount = 0;
        this.corkedRequestsFree = new CorkedRequest(this);
      }
      WritableState.prototype.getBuffer = function getBuffer() {
        var current = this.bufferedRequest;
        var out = [];
        while (current) {
          out.push(current);
          current = current.next;
        }
        return out;
      };
      (function() {
        try {
          Object.defineProperty(WritableState.prototype, "buffer", {
            get: internalUtil.deprecate(function writableStateBufferGetter() {
              return this.getBuffer();
            }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
          });
        } catch (_) {
        }
      })();
      var realHasInstance;
      if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
        realHasInstance = Function.prototype[Symbol.hasInstance];
        Object.defineProperty(Writable, Symbol.hasInstance, {
          value: function value(object) {
            if (realHasInstance.call(this, object))
              return true;
            if (this !== Writable)
              return false;
            return object && object._writableState instanceof WritableState;
          }
        });
      } else {
        realHasInstance = function realHasInstance2(object) {
          return object instanceof this;
        };
      }
      function Writable(options) {
        Duplex = Duplex || require_stream_duplex();
        var isDuplex = this instanceof Duplex;
        if (!isDuplex && !realHasInstance.call(Writable, this))
          return new Writable(options);
        this._writableState = new WritableState(options, this, isDuplex);
        this.writable = true;
        if (options) {
          if (typeof options.write === "function")
            this._write = options.write;
          if (typeof options.writev === "function")
            this._writev = options.writev;
          if (typeof options.destroy === "function")
            this._destroy = options.destroy;
          if (typeof options.final === "function")
            this._final = options.final;
        }
        Stream.call(this);
      }
      Writable.prototype.pipe = function() {
        errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
      };
      function writeAfterEnd(stream, cb) {
        var er = new ERR_STREAM_WRITE_AFTER_END();
        errorOrDestroy(stream, er);
        process.nextTick(cb, er);
      }
      function validChunk(stream, state, chunk, cb) {
        var er;
        if (chunk === null) {
          er = new ERR_STREAM_NULL_VALUES();
        } else if (typeof chunk !== "string" && !state.objectMode) {
          er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer"], chunk);
        }
        if (er) {
          errorOrDestroy(stream, er);
          process.nextTick(cb, er);
          return false;
        }
        return true;
      }
      Writable.prototype.write = function(chunk, encoding, cb) {
        var state = this._writableState;
        var ret = false;
        var isBuf = !state.objectMode && _isUint8Array(chunk);
        if (isBuf && !Buffer2.isBuffer(chunk)) {
          chunk = _uint8ArrayToBuffer(chunk);
        }
        if (typeof encoding === "function") {
          cb = encoding;
          encoding = null;
        }
        if (isBuf)
          encoding = "buffer";
        else if (!encoding)
          encoding = state.defaultEncoding;
        if (typeof cb !== "function")
          cb = nop;
        if (state.ending)
          writeAfterEnd(this, cb);
        else if (isBuf || validChunk(this, state, chunk, cb)) {
          state.pendingcb++;
          ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
        }
        return ret;
      };
      Writable.prototype.cork = function() {
        this._writableState.corked++;
      };
      Writable.prototype.uncork = function() {
        var state = this._writableState;
        if (state.corked) {
          state.corked--;
          if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest)
            clearBuffer(this, state);
        }
      };
      Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
        if (typeof encoding === "string")
          encoding = encoding.toLowerCase();
        if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1))
          throw new ERR_UNKNOWN_ENCODING(encoding);
        this._writableState.defaultEncoding = encoding;
        return this;
      };
      Object.defineProperty(Writable.prototype, "writableBuffer", {
        enumerable: false,
        get: function get() {
          return this._writableState && this._writableState.getBuffer();
        }
      });
      function decodeChunk(state, chunk, encoding) {
        if (!state.objectMode && state.decodeStrings !== false && typeof chunk === "string") {
          chunk = Buffer2.from(chunk, encoding);
        }
        return chunk;
      }
      Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
        enumerable: false,
        get: function get() {
          return this._writableState.highWaterMark;
        }
      });
      function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
        if (!isBuf) {
          var newChunk = decodeChunk(state, chunk, encoding);
          if (chunk !== newChunk) {
            isBuf = true;
            encoding = "buffer";
            chunk = newChunk;
          }
        }
        var len = state.objectMode ? 1 : chunk.length;
        state.length += len;
        var ret = state.length < state.highWaterMark;
        if (!ret)
          state.needDrain = true;
        if (state.writing || state.corked) {
          var last = state.lastBufferedRequest;
          state.lastBufferedRequest = {
            chunk,
            encoding,
            isBuf,
            callback: cb,
            next: null
          };
          if (last) {
            last.next = state.lastBufferedRequest;
          } else {
            state.bufferedRequest = state.lastBufferedRequest;
          }
          state.bufferedRequestCount += 1;
        } else {
          doWrite(stream, state, false, len, chunk, encoding, cb);
        }
        return ret;
      }
      function doWrite(stream, state, writev, len, chunk, encoding, cb) {
        state.writelen = len;
        state.writecb = cb;
        state.writing = true;
        state.sync = true;
        if (state.destroyed)
          state.onwrite(new ERR_STREAM_DESTROYED("write"));
        else if (writev)
          stream._writev(chunk, state.onwrite);
        else
          stream._write(chunk, encoding, state.onwrite);
        state.sync = false;
      }
      function onwriteError(stream, state, sync, er, cb) {
        --state.pendingcb;
        if (sync) {
          process.nextTick(cb, er);
          process.nextTick(finishMaybe, stream, state);
          stream._writableState.errorEmitted = true;
          errorOrDestroy(stream, er);
        } else {
          cb(er);
          stream._writableState.errorEmitted = true;
          errorOrDestroy(stream, er);
          finishMaybe(stream, state);
        }
      }
      function onwriteStateUpdate(state) {
        state.writing = false;
        state.writecb = null;
        state.length -= state.writelen;
        state.writelen = 0;
      }
      function onwrite(stream, er) {
        var state = stream._writableState;
        var sync = state.sync;
        var cb = state.writecb;
        if (typeof cb !== "function")
          throw new ERR_MULTIPLE_CALLBACK();
        onwriteStateUpdate(state);
        if (er)
          onwriteError(stream, state, sync, er, cb);
        else {
          var finished = needFinish(state) || stream.destroyed;
          if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
            clearBuffer(stream, state);
          }
          if (sync) {
            process.nextTick(afterWrite, stream, state, finished, cb);
          } else {
            afterWrite(stream, state, finished, cb);
          }
        }
      }
      function afterWrite(stream, state, finished, cb) {
        if (!finished)
          onwriteDrain(stream, state);
        state.pendingcb--;
        cb();
        finishMaybe(stream, state);
      }
      function onwriteDrain(stream, state) {
        if (state.length === 0 && state.needDrain) {
          state.needDrain = false;
          stream.emit("drain");
        }
      }
      function clearBuffer(stream, state) {
        state.bufferProcessing = true;
        var entry = state.bufferedRequest;
        if (stream._writev && entry && entry.next) {
          var l = state.bufferedRequestCount;
          var buffer = new Array(l);
          var holder = state.corkedRequestsFree;
          holder.entry = entry;
          var count = 0;
          var allBuffers = true;
          while (entry) {
            buffer[count] = entry;
            if (!entry.isBuf)
              allBuffers = false;
            entry = entry.next;
            count += 1;
          }
          buffer.allBuffers = allBuffers;
          doWrite(stream, state, true, state.length, buffer, "", holder.finish);
          state.pendingcb++;
          state.lastBufferedRequest = null;
          if (holder.next) {
            state.corkedRequestsFree = holder.next;
            holder.next = null;
          } else {
            state.corkedRequestsFree = new CorkedRequest(state);
          }
          state.bufferedRequestCount = 0;
        } else {
          while (entry) {
            var chunk = entry.chunk;
            var encoding = entry.encoding;
            var cb = entry.callback;
            var len = state.objectMode ? 1 : chunk.length;
            doWrite(stream, state, false, len, chunk, encoding, cb);
            entry = entry.next;
            state.bufferedRequestCount--;
            if (state.writing) {
              break;
            }
          }
          if (entry === null)
            state.lastBufferedRequest = null;
        }
        state.bufferedRequest = entry;
        state.bufferProcessing = false;
      }
      Writable.prototype._write = function(chunk, encoding, cb) {
        cb(new ERR_METHOD_NOT_IMPLEMENTED("_write()"));
      };
      Writable.prototype._writev = null;
      Writable.prototype.end = function(chunk, encoding, cb) {
        var state = this._writableState;
        if (typeof chunk === "function") {
          cb = chunk;
          chunk = null;
          encoding = null;
        } else if (typeof encoding === "function") {
          cb = encoding;
          encoding = null;
        }
        if (chunk !== null && chunk !== void 0)
          this.write(chunk, encoding);
        if (state.corked) {
          state.corked = 1;
          this.uncork();
        }
        if (!state.ending)
          endWritable(this, state, cb);
        return this;
      };
      Object.defineProperty(Writable.prototype, "writableLength", {
        enumerable: false,
        get: function get() {
          return this._writableState.length;
        }
      });
      function needFinish(state) {
        return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
      }
      function callFinal(stream, state) {
        stream._final(function(err) {
          state.pendingcb--;
          if (err) {
            errorOrDestroy(stream, err);
          }
          state.prefinished = true;
          stream.emit("prefinish");
          finishMaybe(stream, state);
        });
      }
      function prefinish(stream, state) {
        if (!state.prefinished && !state.finalCalled) {
          if (typeof stream._final === "function" && !state.destroyed) {
            state.pendingcb++;
            state.finalCalled = true;
            process.nextTick(callFinal, stream, state);
          } else {
            state.prefinished = true;
            stream.emit("prefinish");
          }
        }
      }
      function finishMaybe(stream, state) {
        var need = needFinish(state);
        if (need) {
          prefinish(stream, state);
          if (state.pendingcb === 0) {
            state.finished = true;
            stream.emit("finish");
            if (state.autoDestroy) {
              var rState = stream._readableState;
              if (!rState || rState.autoDestroy && rState.endEmitted) {
                stream.destroy();
              }
            }
          }
        }
        return need;
      }
      function endWritable(stream, state, cb) {
        state.ending = true;
        finishMaybe(stream, state);
        if (cb) {
          if (state.finished)
            process.nextTick(cb);
          else
            stream.once("finish", cb);
        }
        state.ended = true;
        stream.writable = false;
      }
      function onCorkedFinish(corkReq, state, err) {
        var entry = corkReq.entry;
        corkReq.entry = null;
        while (entry) {
          var cb = entry.callback;
          state.pendingcb--;
          cb(err);
          entry = entry.next;
        }
        state.corkedRequestsFree.next = corkReq;
      }
      Object.defineProperty(Writable.prototype, "destroyed", {
        enumerable: false,
        get: function get() {
          if (this._writableState === void 0) {
            return false;
          }
          return this._writableState.destroyed;
        },
        set: function set(value) {
          if (!this._writableState) {
            return;
          }
          this._writableState.destroyed = value;
        }
      });
      Writable.prototype.destroy = destroyImpl.destroy;
      Writable.prototype._undestroy = destroyImpl.undestroy;
      Writable.prototype._destroy = function(err, cb) {
        cb(err);
      };
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/_stream_duplex.js
  var require_stream_duplex = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/_stream_duplex.js"(exports, module) {
      "use strict";
      var objectKeys = Object.keys || function(obj) {
        var keys2 = [];
        for (var key in obj) {
          keys2.push(key);
        }
        return keys2;
      };
      module.exports = Duplex;
      var Readable = require_stream_readable();
      var Writable = require_stream_writable();
      require_inherits()(Duplex, Readable);
      {
        keys = objectKeys(Writable.prototype);
        for (v = 0; v < keys.length; v++) {
          method = keys[v];
          if (!Duplex.prototype[method])
            Duplex.prototype[method] = Writable.prototype[method];
        }
      }
      var keys;
      var method;
      var v;
      function Duplex(options) {
        if (!(this instanceof Duplex))
          return new Duplex(options);
        Readable.call(this, options);
        Writable.call(this, options);
        this.allowHalfOpen = true;
        if (options) {
          if (options.readable === false)
            this.readable = false;
          if (options.writable === false)
            this.writable = false;
          if (options.allowHalfOpen === false) {
            this.allowHalfOpen = false;
            this.once("end", onend);
          }
        }
      }
      Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
        enumerable: false,
        get: function get() {
          return this._writableState.highWaterMark;
        }
      });
      Object.defineProperty(Duplex.prototype, "writableBuffer", {
        enumerable: false,
        get: function get() {
          return this._writableState && this._writableState.getBuffer();
        }
      });
      Object.defineProperty(Duplex.prototype, "writableLength", {
        enumerable: false,
        get: function get() {
          return this._writableState.length;
        }
      });
      function onend() {
        if (this._writableState.ended)
          return;
        process.nextTick(onEndNT, this);
      }
      function onEndNT(self) {
        self.end();
      }
      Object.defineProperty(Duplex.prototype, "destroyed", {
        enumerable: false,
        get: function get() {
          if (this._readableState === void 0 || this._writableState === void 0) {
            return false;
          }
          return this._readableState.destroyed && this._writableState.destroyed;
        },
        set: function set(value) {
          if (this._readableState === void 0 || this._writableState === void 0) {
            return;
          }
          this._readableState.destroyed = value;
          this._writableState.destroyed = value;
        }
      });
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/safe-buffer-npm-5.2.1-3481c8aa9b-b99c4b41fd.zip/node_modules/safe-buffer/index.js
  var require_safe_buffer = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/safe-buffer-npm-5.2.1-3481c8aa9b-b99c4b41fd.zip/node_modules/safe-buffer/index.js"(exports, module) {
      var buffer = __require("buffer");
      var Buffer2 = buffer.Buffer;
      function copyProps(src, dst) {
        for (var key in src) {
          dst[key] = src[key];
        }
      }
      if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
        module.exports = buffer;
      } else {
        copyProps(buffer, exports);
        exports.Buffer = SafeBuffer;
      }
      function SafeBuffer(arg, encodingOrOffset, length) {
        return Buffer2(arg, encodingOrOffset, length);
      }
      SafeBuffer.prototype = Object.create(Buffer2.prototype);
      copyProps(Buffer2, SafeBuffer);
      SafeBuffer.from = function(arg, encodingOrOffset, length) {
        if (typeof arg === "number") {
          throw new TypeError("Argument must not be a number");
        }
        return Buffer2(arg, encodingOrOffset, length);
      };
      SafeBuffer.alloc = function(size, fill, encoding) {
        if (typeof size !== "number") {
          throw new TypeError("Argument must be a number");
        }
        var buf = Buffer2(size);
        if (fill !== void 0) {
          if (typeof encoding === "string") {
            buf.fill(fill, encoding);
          } else {
            buf.fill(fill);
          }
        } else {
          buf.fill(0);
        }
        return buf;
      };
      SafeBuffer.allocUnsafe = function(size) {
        if (typeof size !== "number") {
          throw new TypeError("Argument must be a number");
        }
        return Buffer2(size);
      };
      SafeBuffer.allocUnsafeSlow = function(size) {
        if (typeof size !== "number") {
          throw new TypeError("Argument must be a number");
        }
        return buffer.SlowBuffer(size);
      };
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/string_decoder-npm-1.3.0-2422117fd0-8417646695.zip/node_modules/string_decoder/lib/string_decoder.js
  var require_string_decoder = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/string_decoder-npm-1.3.0-2422117fd0-8417646695.zip/node_modules/string_decoder/lib/string_decoder.js"(exports) {
      "use strict";
      var Buffer2 = require_safe_buffer().Buffer;
      var isEncoding = Buffer2.isEncoding || function(encoding) {
        encoding = "" + encoding;
        switch (encoding && encoding.toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
          case "raw":
            return true;
          default:
            return false;
        }
      };
      function _normalizeEncoding(enc) {
        if (!enc)
          return "utf8";
        var retried;
        while (true) {
          switch (enc) {
            case "utf8":
            case "utf-8":
              return "utf8";
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return "utf16le";
            case "latin1":
            case "binary":
              return "latin1";
            case "base64":
            case "ascii":
            case "hex":
              return enc;
            default:
              if (retried)
                return;
              enc = ("" + enc).toLowerCase();
              retried = true;
          }
        }
      }
      function normalizeEncoding(enc) {
        var nenc = _normalizeEncoding(enc);
        if (typeof nenc !== "string" && (Buffer2.isEncoding === isEncoding || !isEncoding(enc)))
          throw new Error("Unknown encoding: " + enc);
        return nenc || enc;
      }
      exports.StringDecoder = StringDecoder;
      function StringDecoder(encoding) {
        this.encoding = normalizeEncoding(encoding);
        var nb;
        switch (this.encoding) {
          case "utf16le":
            this.text = utf16Text;
            this.end = utf16End;
            nb = 4;
            break;
          case "utf8":
            this.fillLast = utf8FillLast;
            nb = 4;
            break;
          case "base64":
            this.text = base64Text;
            this.end = base64End;
            nb = 3;
            break;
          default:
            this.write = simpleWrite;
            this.end = simpleEnd;
            return;
        }
        this.lastNeed = 0;
        this.lastTotal = 0;
        this.lastChar = Buffer2.allocUnsafe(nb);
      }
      StringDecoder.prototype.write = function(buf) {
        if (buf.length === 0)
          return "";
        var r;
        var i;
        if (this.lastNeed) {
          r = this.fillLast(buf);
          if (r === void 0)
            return "";
          i = this.lastNeed;
          this.lastNeed = 0;
        } else {
          i = 0;
        }
        if (i < buf.length)
          return r ? r + this.text(buf, i) : this.text(buf, i);
        return r || "";
      };
      StringDecoder.prototype.end = utf8End;
      StringDecoder.prototype.text = utf8Text;
      StringDecoder.prototype.fillLast = function(buf) {
        if (this.lastNeed <= buf.length) {
          buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
          return this.lastChar.toString(this.encoding, 0, this.lastTotal);
        }
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
        this.lastNeed -= buf.length;
      };
      function utf8CheckByte(byte) {
        if (byte <= 127)
          return 0;
        else if (byte >> 5 === 6)
          return 2;
        else if (byte >> 4 === 14)
          return 3;
        else if (byte >> 3 === 30)
          return 4;
        return byte >> 6 === 2 ? -1 : -2;
      }
      function utf8CheckIncomplete(self, buf, i) {
        var j = buf.length - 1;
        if (j < i)
          return 0;
        var nb = utf8CheckByte(buf[j]);
        if (nb >= 0) {
          if (nb > 0)
            self.lastNeed = nb - 1;
          return nb;
        }
        if (--j < i || nb === -2)
          return 0;
        nb = utf8CheckByte(buf[j]);
        if (nb >= 0) {
          if (nb > 0)
            self.lastNeed = nb - 2;
          return nb;
        }
        if (--j < i || nb === -2)
          return 0;
        nb = utf8CheckByte(buf[j]);
        if (nb >= 0) {
          if (nb > 0) {
            if (nb === 2)
              nb = 0;
            else
              self.lastNeed = nb - 3;
          }
          return nb;
        }
        return 0;
      }
      function utf8CheckExtraBytes(self, buf, p) {
        if ((buf[0] & 192) !== 128) {
          self.lastNeed = 0;
          return "\uFFFD";
        }
        if (self.lastNeed > 1 && buf.length > 1) {
          if ((buf[1] & 192) !== 128) {
            self.lastNeed = 1;
            return "\uFFFD";
          }
          if (self.lastNeed > 2 && buf.length > 2) {
            if ((buf[2] & 192) !== 128) {
              self.lastNeed = 2;
              return "\uFFFD";
            }
          }
        }
      }
      function utf8FillLast(buf) {
        var p = this.lastTotal - this.lastNeed;
        var r = utf8CheckExtraBytes(this, buf, p);
        if (r !== void 0)
          return r;
        if (this.lastNeed <= buf.length) {
          buf.copy(this.lastChar, p, 0, this.lastNeed);
          return this.lastChar.toString(this.encoding, 0, this.lastTotal);
        }
        buf.copy(this.lastChar, p, 0, buf.length);
        this.lastNeed -= buf.length;
      }
      function utf8Text(buf, i) {
        var total = utf8CheckIncomplete(this, buf, i);
        if (!this.lastNeed)
          return buf.toString("utf8", i);
        this.lastTotal = total;
        var end = buf.length - (total - this.lastNeed);
        buf.copy(this.lastChar, 0, end);
        return buf.toString("utf8", i, end);
      }
      function utf8End(buf) {
        var r = buf && buf.length ? this.write(buf) : "";
        if (this.lastNeed)
          return r + "\uFFFD";
        return r;
      }
      function utf16Text(buf, i) {
        if ((buf.length - i) % 2 === 0) {
          var r = buf.toString("utf16le", i);
          if (r) {
            var c = r.charCodeAt(r.length - 1);
            if (c >= 55296 && c <= 56319) {
              this.lastNeed = 2;
              this.lastTotal = 4;
              this.lastChar[0] = buf[buf.length - 2];
              this.lastChar[1] = buf[buf.length - 1];
              return r.slice(0, -1);
            }
          }
          return r;
        }
        this.lastNeed = 1;
        this.lastTotal = 2;
        this.lastChar[0] = buf[buf.length - 1];
        return buf.toString("utf16le", i, buf.length - 1);
      }
      function utf16End(buf) {
        var r = buf && buf.length ? this.write(buf) : "";
        if (this.lastNeed) {
          var end = this.lastTotal - this.lastNeed;
          return r + this.lastChar.toString("utf16le", 0, end);
        }
        return r;
      }
      function base64Text(buf, i) {
        var n = (buf.length - i) % 3;
        if (n === 0)
          return buf.toString("base64", i);
        this.lastNeed = 3 - n;
        this.lastTotal = 3;
        if (n === 1) {
          this.lastChar[0] = buf[buf.length - 1];
        } else {
          this.lastChar[0] = buf[buf.length - 2];
          this.lastChar[1] = buf[buf.length - 1];
        }
        return buf.toString("base64", i, buf.length - n);
      }
      function base64End(buf) {
        var r = buf && buf.length ? this.write(buf) : "";
        if (this.lastNeed)
          return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
        return r;
      }
      function simpleWrite(buf) {
        return buf.toString(this.encoding);
      }
      function simpleEnd(buf) {
        return buf && buf.length ? this.write(buf) : "";
      }
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/end-of-stream.js
  var require_end_of_stream2 = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/end-of-stream.js"(exports, module) {
      "use strict";
      var ERR_STREAM_PREMATURE_CLOSE = require_errors().codes.ERR_STREAM_PREMATURE_CLOSE;
      function once(callback) {
        var called = false;
        return function() {
          if (called)
            return;
          called = true;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          callback.apply(this, args);
        };
      }
      function noop() {
      }
      function isRequest(stream) {
        return stream.setHeader && typeof stream.abort === "function";
      }
      function eos(stream, opts, callback) {
        if (typeof opts === "function")
          return eos(stream, null, opts);
        if (!opts)
          opts = {};
        callback = once(callback || noop);
        var readable = opts.readable || opts.readable !== false && stream.readable;
        var writable = opts.writable || opts.writable !== false && stream.writable;
        var onlegacyfinish = function onlegacyfinish2() {
          if (!stream.writable)
            onfinish();
        };
        var writableEnded = stream._writableState && stream._writableState.finished;
        var onfinish = function onfinish2() {
          writable = false;
          writableEnded = true;
          if (!readable)
            callback.call(stream);
        };
        var readableEnded = stream._readableState && stream._readableState.endEmitted;
        var onend = function onend2() {
          readable = false;
          readableEnded = true;
          if (!writable)
            callback.call(stream);
        };
        var onerror = function onerror2(err) {
          callback.call(stream, err);
        };
        var onclose = function onclose2() {
          var err;
          if (readable && !readableEnded) {
            if (!stream._readableState || !stream._readableState.ended)
              err = new ERR_STREAM_PREMATURE_CLOSE();
            return callback.call(stream, err);
          }
          if (writable && !writableEnded) {
            if (!stream._writableState || !stream._writableState.ended)
              err = new ERR_STREAM_PREMATURE_CLOSE();
            return callback.call(stream, err);
          }
        };
        var onrequest = function onrequest2() {
          stream.req.on("finish", onfinish);
        };
        if (isRequest(stream)) {
          stream.on("complete", onfinish);
          stream.on("abort", onclose);
          if (stream.req)
            onrequest();
          else
            stream.on("request", onrequest);
        } else if (writable && !stream._writableState) {
          stream.on("end", onlegacyfinish);
          stream.on("close", onlegacyfinish);
        }
        stream.on("end", onend);
        stream.on("finish", onfinish);
        if (opts.error !== false)
          stream.on("error", onerror);
        stream.on("close", onclose);
        return function() {
          stream.removeListener("complete", onfinish);
          stream.removeListener("abort", onclose);
          stream.removeListener("request", onrequest);
          if (stream.req)
            stream.req.removeListener("finish", onfinish);
          stream.removeListener("end", onlegacyfinish);
          stream.removeListener("close", onlegacyfinish);
          stream.removeListener("finish", onfinish);
          stream.removeListener("end", onend);
          stream.removeListener("error", onerror);
          stream.removeListener("close", onclose);
        };
      }
      module.exports = eos;
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/async_iterator.js
  var require_async_iterator = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/async_iterator.js"(exports, module) {
      "use strict";
      var _Object$setPrototypeO;
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      var finished = require_end_of_stream2();
      var kLastResolve = Symbol("lastResolve");
      var kLastReject = Symbol("lastReject");
      var kError = Symbol("error");
      var kEnded = Symbol("ended");
      var kLastPromise = Symbol("lastPromise");
      var kHandlePromise = Symbol("handlePromise");
      var kStream = Symbol("stream");
      function createIterResult(value, done) {
        return {
          value,
          done
        };
      }
      function readAndResolve(iter) {
        var resolve = iter[kLastResolve];
        if (resolve !== null) {
          var data = iter[kStream].read();
          if (data !== null) {
            iter[kLastPromise] = null;
            iter[kLastResolve] = null;
            iter[kLastReject] = null;
            resolve(createIterResult(data, false));
          }
        }
      }
      function onReadable(iter) {
        process.nextTick(readAndResolve, iter);
      }
      function wrapForNext(lastPromise, iter) {
        return function(resolve, reject) {
          lastPromise.then(function() {
            if (iter[kEnded]) {
              resolve(createIterResult(void 0, true));
              return;
            }
            iter[kHandlePromise](resolve, reject);
          }, reject);
        };
      }
      var AsyncIteratorPrototype = Object.getPrototypeOf(function() {
      });
      var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
        get stream() {
          return this[kStream];
        },
        next: function next() {
          var _this = this;
          var error = this[kError];
          if (error !== null) {
            return Promise.reject(error);
          }
          if (this[kEnded]) {
            return Promise.resolve(createIterResult(void 0, true));
          }
          if (this[kStream].destroyed) {
            return new Promise(function(resolve, reject) {
              process.nextTick(function() {
                if (_this[kError]) {
                  reject(_this[kError]);
                } else {
                  resolve(createIterResult(void 0, true));
                }
              });
            });
          }
          var lastPromise = this[kLastPromise];
          var promise;
          if (lastPromise) {
            promise = new Promise(wrapForNext(lastPromise, this));
          } else {
            var data = this[kStream].read();
            if (data !== null) {
              return Promise.resolve(createIterResult(data, false));
            }
            promise = new Promise(this[kHandlePromise]);
          }
          this[kLastPromise] = promise;
          return promise;
        }
      }, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
        return this;
      }), _defineProperty(_Object$setPrototypeO, "return", function _return() {
        var _this2 = this;
        return new Promise(function(resolve, reject) {
          _this2[kStream].destroy(null, function(err) {
            if (err) {
              reject(err);
              return;
            }
            resolve(createIterResult(void 0, true));
          });
        });
      }), _Object$setPrototypeO), AsyncIteratorPrototype);
      var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator2(stream) {
        var _Object$create;
        var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
          value: stream,
          writable: true
        }), _defineProperty(_Object$create, kLastResolve, {
          value: null,
          writable: true
        }), _defineProperty(_Object$create, kLastReject, {
          value: null,
          writable: true
        }), _defineProperty(_Object$create, kError, {
          value: null,
          writable: true
        }), _defineProperty(_Object$create, kEnded, {
          value: stream._readableState.endEmitted,
          writable: true
        }), _defineProperty(_Object$create, kHandlePromise, {
          value: function value(resolve, reject) {
            var data = iterator[kStream].read();
            if (data) {
              iterator[kLastPromise] = null;
              iterator[kLastResolve] = null;
              iterator[kLastReject] = null;
              resolve(createIterResult(data, false));
            } else {
              iterator[kLastResolve] = resolve;
              iterator[kLastReject] = reject;
            }
          },
          writable: true
        }), _Object$create));
        iterator[kLastPromise] = null;
        finished(stream, function(err) {
          if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
            var reject = iterator[kLastReject];
            if (reject !== null) {
              iterator[kLastPromise] = null;
              iterator[kLastResolve] = null;
              iterator[kLastReject] = null;
              reject(err);
            }
            iterator[kError] = err;
            return;
          }
          var resolve = iterator[kLastResolve];
          if (resolve !== null) {
            iterator[kLastPromise] = null;
            iterator[kLastResolve] = null;
            iterator[kLastReject] = null;
            resolve(createIterResult(void 0, true));
          }
          iterator[kEnded] = true;
        });
        stream.on("readable", onReadable.bind(null, iterator));
        return iterator;
      };
      module.exports = createReadableStreamAsyncIterator;
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/from.js
  var require_from = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/from.js"(exports, module) {
      "use strict";
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }
      function _asyncToGenerator(fn) {
        return function() {
          var self = this, args = arguments;
          return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(void 0);
          });
        };
      }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly)
            symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(Object(source), true).forEach(function(key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(Object(source)).forEach(function(key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      var ERR_INVALID_ARG_TYPE = require_errors().codes.ERR_INVALID_ARG_TYPE;
      function from(Readable, iterable, opts) {
        var iterator;
        if (iterable && typeof iterable.next === "function") {
          iterator = iterable;
        } else if (iterable && iterable[Symbol.asyncIterator])
          iterator = iterable[Symbol.asyncIterator]();
        else if (iterable && iterable[Symbol.iterator])
          iterator = iterable[Symbol.iterator]();
        else
          throw new ERR_INVALID_ARG_TYPE("iterable", ["Iterable"], iterable);
        var readable = new Readable(_objectSpread({
          objectMode: true
        }, opts));
        var reading = false;
        readable._read = function() {
          if (!reading) {
            reading = true;
            next();
          }
        };
        function next() {
          return _next2.apply(this, arguments);
        }
        function _next2() {
          _next2 = _asyncToGenerator(function* () {
            try {
              var _ref = yield iterator.next(), value = _ref.value, done = _ref.done;
              if (done) {
                readable.push(null);
              } else if (readable.push(yield value)) {
                next();
              } else {
                reading = false;
              }
            } catch (err) {
              readable.destroy(err);
            }
          });
          return _next2.apply(this, arguments);
        }
        return readable;
      }
      module.exports = from;
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/_stream_readable.js
  var require_stream_readable = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/_stream_readable.js"(exports, module) {
      "use strict";
      module.exports = Readable;
      var Duplex;
      Readable.ReadableState = ReadableState;
      var EE = __require("events").EventEmitter;
      var EElistenerCount = function EElistenerCount2(emitter, type) {
        return emitter.listeners(type).length;
      };
      var Stream = require_stream();
      var Buffer2 = __require("buffer").Buffer;
      var OurUint8Array = global.Uint8Array || function() {
      };
      function _uint8ArrayToBuffer(chunk) {
        return Buffer2.from(chunk);
      }
      function _isUint8Array(obj) {
        return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
      }
      var debugUtil = __require("util");
      var debug;
      if (debugUtil && debugUtil.debuglog) {
        debug = debugUtil.debuglog("stream");
      } else {
        debug = function debug2() {
        };
      }
      var BufferList = require_buffer_list();
      var destroyImpl = require_destroy();
      var _require = require_state2();
      var getHighWaterMark = _require.getHighWaterMark;
      var _require$codes = require_errors().codes;
      var ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE;
      var ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF;
      var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
      var ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
      var StringDecoder;
      var createReadableStreamAsyncIterator;
      var from;
      require_inherits()(Readable, Stream);
      var errorOrDestroy = destroyImpl.errorOrDestroy;
      var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];
      function prependListener(emitter, event, fn) {
        if (typeof emitter.prependListener === "function")
          return emitter.prependListener(event, fn);
        if (!emitter._events || !emitter._events[event])
          emitter.on(event, fn);
        else if (Array.isArray(emitter._events[event]))
          emitter._events[event].unshift(fn);
        else
          emitter._events[event] = [fn, emitter._events[event]];
      }
      function ReadableState(options, stream, isDuplex) {
        Duplex = Duplex || require_stream_duplex();
        options = options || {};
        if (typeof isDuplex !== "boolean")
          isDuplex = stream instanceof Duplex;
        this.objectMode = !!options.objectMode;
        if (isDuplex)
          this.objectMode = this.objectMode || !!options.readableObjectMode;
        this.highWaterMark = getHighWaterMark(this, options, "readableHighWaterMark", isDuplex);
        this.buffer = new BufferList();
        this.length = 0;
        this.pipes = null;
        this.pipesCount = 0;
        this.flowing = null;
        this.ended = false;
        this.endEmitted = false;
        this.reading = false;
        this.sync = true;
        this.needReadable = false;
        this.emittedReadable = false;
        this.readableListening = false;
        this.resumeScheduled = false;
        this.paused = true;
        this.emitClose = options.emitClose !== false;
        this.autoDestroy = !!options.autoDestroy;
        this.destroyed = false;
        this.defaultEncoding = options.defaultEncoding || "utf8";
        this.awaitDrain = 0;
        this.readingMore = false;
        this.decoder = null;
        this.encoding = null;
        if (options.encoding) {
          if (!StringDecoder)
            StringDecoder = require_string_decoder().StringDecoder;
          this.decoder = new StringDecoder(options.encoding);
          this.encoding = options.encoding;
        }
      }
      function Readable(options) {
        Duplex = Duplex || require_stream_duplex();
        if (!(this instanceof Readable))
          return new Readable(options);
        var isDuplex = this instanceof Duplex;
        this._readableState = new ReadableState(options, this, isDuplex);
        this.readable = true;
        if (options) {
          if (typeof options.read === "function")
            this._read = options.read;
          if (typeof options.destroy === "function")
            this._destroy = options.destroy;
        }
        Stream.call(this);
      }
      Object.defineProperty(Readable.prototype, "destroyed", {
        enumerable: false,
        get: function get() {
          if (this._readableState === void 0) {
            return false;
          }
          return this._readableState.destroyed;
        },
        set: function set(value) {
          if (!this._readableState) {
            return;
          }
          this._readableState.destroyed = value;
        }
      });
      Readable.prototype.destroy = destroyImpl.destroy;
      Readable.prototype._undestroy = destroyImpl.undestroy;
      Readable.prototype._destroy = function(err, cb) {
        cb(err);
      };
      Readable.prototype.push = function(chunk, encoding) {
        var state = this._readableState;
        var skipChunkCheck;
        if (!state.objectMode) {
          if (typeof chunk === "string") {
            encoding = encoding || state.defaultEncoding;
            if (encoding !== state.encoding) {
              chunk = Buffer2.from(chunk, encoding);
              encoding = "";
            }
            skipChunkCheck = true;
          }
        } else {
          skipChunkCheck = true;
        }
        return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
      };
      Readable.prototype.unshift = function(chunk) {
        return readableAddChunk(this, chunk, null, true, false);
      };
      function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
        debug("readableAddChunk", chunk);
        var state = stream._readableState;
        if (chunk === null) {
          state.reading = false;
          onEofChunk(stream, state);
        } else {
          var er;
          if (!skipChunkCheck)
            er = chunkInvalid(state, chunk);
          if (er) {
            errorOrDestroy(stream, er);
          } else if (state.objectMode || chunk && chunk.length > 0) {
            if (typeof chunk !== "string" && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer2.prototype) {
              chunk = _uint8ArrayToBuffer(chunk);
            }
            if (addToFront) {
              if (state.endEmitted)
                errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
              else
                addChunk(stream, state, chunk, true);
            } else if (state.ended) {
              errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
            } else if (state.destroyed) {
              return false;
            } else {
              state.reading = false;
              if (state.decoder && !encoding) {
                chunk = state.decoder.write(chunk);
                if (state.objectMode || chunk.length !== 0)
                  addChunk(stream, state, chunk, false);
                else
                  maybeReadMore(stream, state);
              } else {
                addChunk(stream, state, chunk, false);
              }
            }
          } else if (!addToFront) {
            state.reading = false;
            maybeReadMore(stream, state);
          }
        }
        return !state.ended && (state.length < state.highWaterMark || state.length === 0);
      }
      function addChunk(stream, state, chunk, addToFront) {
        if (state.flowing && state.length === 0 && !state.sync) {
          state.awaitDrain = 0;
          stream.emit("data", chunk);
        } else {
          state.length += state.objectMode ? 1 : chunk.length;
          if (addToFront)
            state.buffer.unshift(chunk);
          else
            state.buffer.push(chunk);
          if (state.needReadable)
            emitReadable(stream);
        }
        maybeReadMore(stream, state);
      }
      function chunkInvalid(state, chunk) {
        var er;
        if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state.objectMode) {
          er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer", "Uint8Array"], chunk);
        }
        return er;
      }
      Readable.prototype.isPaused = function() {
        return this._readableState.flowing === false;
      };
      Readable.prototype.setEncoding = function(enc) {
        if (!StringDecoder)
          StringDecoder = require_string_decoder().StringDecoder;
        var decoder = new StringDecoder(enc);
        this._readableState.decoder = decoder;
        this._readableState.encoding = this._readableState.decoder.encoding;
        var p = this._readableState.buffer.head;
        var content = "";
        while (p !== null) {
          content += decoder.write(p.data);
          p = p.next;
        }
        this._readableState.buffer.clear();
        if (content !== "")
          this._readableState.buffer.push(content);
        this._readableState.length = content.length;
        return this;
      };
      var MAX_HWM = 1073741824;
      function computeNewHighWaterMark(n) {
        if (n >= MAX_HWM) {
          n = MAX_HWM;
        } else {
          n--;
          n |= n >>> 1;
          n |= n >>> 2;
          n |= n >>> 4;
          n |= n >>> 8;
          n |= n >>> 16;
          n++;
        }
        return n;
      }
      function howMuchToRead(n, state) {
        if (n <= 0 || state.length === 0 && state.ended)
          return 0;
        if (state.objectMode)
          return 1;
        if (n !== n) {
          if (state.flowing && state.length)
            return state.buffer.head.data.length;
          else
            return state.length;
        }
        if (n > state.highWaterMark)
          state.highWaterMark = computeNewHighWaterMark(n);
        if (n <= state.length)
          return n;
        if (!state.ended) {
          state.needReadable = true;
          return 0;
        }
        return state.length;
      }
      Readable.prototype.read = function(n) {
        debug("read", n);
        n = parseInt(n, 10);
        var state = this._readableState;
        var nOrig = n;
        if (n !== 0)
          state.emittedReadable = false;
        if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
          debug("read: emitReadable", state.length, state.ended);
          if (state.length === 0 && state.ended)
            endReadable(this);
          else
            emitReadable(this);
          return null;
        }
        n = howMuchToRead(n, state);
        if (n === 0 && state.ended) {
          if (state.length === 0)
            endReadable(this);
          return null;
        }
        var doRead = state.needReadable;
        debug("need readable", doRead);
        if (state.length === 0 || state.length - n < state.highWaterMark) {
          doRead = true;
          debug("length less than watermark", doRead);
        }
        if (state.ended || state.reading) {
          doRead = false;
          debug("reading or ended", doRead);
        } else if (doRead) {
          debug("do read");
          state.reading = true;
          state.sync = true;
          if (state.length === 0)
            state.needReadable = true;
          this._read(state.highWaterMark);
          state.sync = false;
          if (!state.reading)
            n = howMuchToRead(nOrig, state);
        }
        var ret;
        if (n > 0)
          ret = fromList(n, state);
        else
          ret = null;
        if (ret === null) {
          state.needReadable = state.length <= state.highWaterMark;
          n = 0;
        } else {
          state.length -= n;
          state.awaitDrain = 0;
        }
        if (state.length === 0) {
          if (!state.ended)
            state.needReadable = true;
          if (nOrig !== n && state.ended)
            endReadable(this);
        }
        if (ret !== null)
          this.emit("data", ret);
        return ret;
      };
      function onEofChunk(stream, state) {
        debug("onEofChunk");
        if (state.ended)
          return;
        if (state.decoder) {
          var chunk = state.decoder.end();
          if (chunk && chunk.length) {
            state.buffer.push(chunk);
            state.length += state.objectMode ? 1 : chunk.length;
          }
        }
        state.ended = true;
        if (state.sync) {
          emitReadable(stream);
        } else {
          state.needReadable = false;
          if (!state.emittedReadable) {
            state.emittedReadable = true;
            emitReadable_(stream);
          }
        }
      }
      function emitReadable(stream) {
        var state = stream._readableState;
        debug("emitReadable", state.needReadable, state.emittedReadable);
        state.needReadable = false;
        if (!state.emittedReadable) {
          debug("emitReadable", state.flowing);
          state.emittedReadable = true;
          process.nextTick(emitReadable_, stream);
        }
      }
      function emitReadable_(stream) {
        var state = stream._readableState;
        debug("emitReadable_", state.destroyed, state.length, state.ended);
        if (!state.destroyed && (state.length || state.ended)) {
          stream.emit("readable");
          state.emittedReadable = false;
        }
        state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
        flow(stream);
      }
      function maybeReadMore(stream, state) {
        if (!state.readingMore) {
          state.readingMore = true;
          process.nextTick(maybeReadMore_, stream, state);
        }
      }
      function maybeReadMore_(stream, state) {
        while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
          var len = state.length;
          debug("maybeReadMore read 0");
          stream.read(0);
          if (len === state.length)
            break;
        }
        state.readingMore = false;
      }
      Readable.prototype._read = function(n) {
        errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED("_read()"));
      };
      Readable.prototype.pipe = function(dest, pipeOpts) {
        var src = this;
        var state = this._readableState;
        switch (state.pipesCount) {
          case 0:
            state.pipes = dest;
            break;
          case 1:
            state.pipes = [state.pipes, dest];
            break;
          default:
            state.pipes.push(dest);
            break;
        }
        state.pipesCount += 1;
        debug("pipe count=%d opts=%j", state.pipesCount, pipeOpts);
        var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
        var endFn = doEnd ? onend : unpipe;
        if (state.endEmitted)
          process.nextTick(endFn);
        else
          src.once("end", endFn);
        dest.on("unpipe", onunpipe);
        function onunpipe(readable, unpipeInfo) {
          debug("onunpipe");
          if (readable === src) {
            if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
              unpipeInfo.hasUnpiped = true;
              cleanup();
            }
          }
        }
        function onend() {
          debug("onend");
          dest.end();
        }
        var ondrain = pipeOnDrain(src);
        dest.on("drain", ondrain);
        var cleanedUp = false;
        function cleanup() {
          debug("cleanup");
          dest.removeListener("close", onclose);
          dest.removeListener("finish", onfinish);
          dest.removeListener("drain", ondrain);
          dest.removeListener("error", onerror);
          dest.removeListener("unpipe", onunpipe);
          src.removeListener("end", onend);
          src.removeListener("end", unpipe);
          src.removeListener("data", ondata);
          cleanedUp = true;
          if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
            ondrain();
        }
        src.on("data", ondata);
        function ondata(chunk) {
          debug("ondata");
          var ret = dest.write(chunk);
          debug("dest.write", ret);
          if (ret === false) {
            if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
              debug("false write response, pause", state.awaitDrain);
              state.awaitDrain++;
            }
            src.pause();
          }
        }
        function onerror(er) {
          debug("onerror", er);
          unpipe();
          dest.removeListener("error", onerror);
          if (EElistenerCount(dest, "error") === 0)
            errorOrDestroy(dest, er);
        }
        prependListener(dest, "error", onerror);
        function onclose() {
          dest.removeListener("finish", onfinish);
          unpipe();
        }
        dest.once("close", onclose);
        function onfinish() {
          debug("onfinish");
          dest.removeListener("close", onclose);
          unpipe();
        }
        dest.once("finish", onfinish);
        function unpipe() {
          debug("unpipe");
          src.unpipe(dest);
        }
        dest.emit("pipe", src);
        if (!state.flowing) {
          debug("pipe resume");
          src.resume();
        }
        return dest;
      };
      function pipeOnDrain(src) {
        return function pipeOnDrainFunctionResult() {
          var state = src._readableState;
          debug("pipeOnDrain", state.awaitDrain);
          if (state.awaitDrain)
            state.awaitDrain--;
          if (state.awaitDrain === 0 && EElistenerCount(src, "data")) {
            state.flowing = true;
            flow(src);
          }
        };
      }
      Readable.prototype.unpipe = function(dest) {
        var state = this._readableState;
        var unpipeInfo = {
          hasUnpiped: false
        };
        if (state.pipesCount === 0)
          return this;
        if (state.pipesCount === 1) {
          if (dest && dest !== state.pipes)
            return this;
          if (!dest)
            dest = state.pipes;
          state.pipes = null;
          state.pipesCount = 0;
          state.flowing = false;
          if (dest)
            dest.emit("unpipe", this, unpipeInfo);
          return this;
        }
        if (!dest) {
          var dests = state.pipes;
          var len = state.pipesCount;
          state.pipes = null;
          state.pipesCount = 0;
          state.flowing = false;
          for (var i = 0; i < len; i++) {
            dests[i].emit("unpipe", this, {
              hasUnpiped: false
            });
          }
          return this;
        }
        var index = indexOf(state.pipes, dest);
        if (index === -1)
          return this;
        state.pipes.splice(index, 1);
        state.pipesCount -= 1;
        if (state.pipesCount === 1)
          state.pipes = state.pipes[0];
        dest.emit("unpipe", this, unpipeInfo);
        return this;
      };
      Readable.prototype.on = function(ev, fn) {
        var res = Stream.prototype.on.call(this, ev, fn);
        var state = this._readableState;
        if (ev === "data") {
          state.readableListening = this.listenerCount("readable") > 0;
          if (state.flowing !== false)
            this.resume();
        } else if (ev === "readable") {
          if (!state.endEmitted && !state.readableListening) {
            state.readableListening = state.needReadable = true;
            state.flowing = false;
            state.emittedReadable = false;
            debug("on readable", state.length, state.reading);
            if (state.length) {
              emitReadable(this);
            } else if (!state.reading) {
              process.nextTick(nReadingNextTick, this);
            }
          }
        }
        return res;
      };
      Readable.prototype.addListener = Readable.prototype.on;
      Readable.prototype.removeListener = function(ev, fn) {
        var res = Stream.prototype.removeListener.call(this, ev, fn);
        if (ev === "readable") {
          process.nextTick(updateReadableListening, this);
        }
        return res;
      };
      Readable.prototype.removeAllListeners = function(ev) {
        var res = Stream.prototype.removeAllListeners.apply(this, arguments);
        if (ev === "readable" || ev === void 0) {
          process.nextTick(updateReadableListening, this);
        }
        return res;
      };
      function updateReadableListening(self) {
        var state = self._readableState;
        state.readableListening = self.listenerCount("readable") > 0;
        if (state.resumeScheduled && !state.paused) {
          state.flowing = true;
        } else if (self.listenerCount("data") > 0) {
          self.resume();
        }
      }
      function nReadingNextTick(self) {
        debug("readable nexttick read 0");
        self.read(0);
      }
      Readable.prototype.resume = function() {
        var state = this._readableState;
        if (!state.flowing) {
          debug("resume");
          state.flowing = !state.readableListening;
          resume(this, state);
        }
        state.paused = false;
        return this;
      };
      function resume(stream, state) {
        if (!state.resumeScheduled) {
          state.resumeScheduled = true;
          process.nextTick(resume_, stream, state);
        }
      }
      function resume_(stream, state) {
        debug("resume", state.reading);
        if (!state.reading) {
          stream.read(0);
        }
        state.resumeScheduled = false;
        stream.emit("resume");
        flow(stream);
        if (state.flowing && !state.reading)
          stream.read(0);
      }
      Readable.prototype.pause = function() {
        debug("call pause flowing=%j", this._readableState.flowing);
        if (this._readableState.flowing !== false) {
          debug("pause");
          this._readableState.flowing = false;
          this.emit("pause");
        }
        this._readableState.paused = true;
        return this;
      };
      function flow(stream) {
        var state = stream._readableState;
        debug("flow", state.flowing);
        while (state.flowing && stream.read() !== null) {
          ;
        }
      }
      Readable.prototype.wrap = function(stream) {
        var _this = this;
        var state = this._readableState;
        var paused = false;
        stream.on("end", function() {
          debug("wrapped end");
          if (state.decoder && !state.ended) {
            var chunk = state.decoder.end();
            if (chunk && chunk.length)
              _this.push(chunk);
          }
          _this.push(null);
        });
        stream.on("data", function(chunk) {
          debug("wrapped data");
          if (state.decoder)
            chunk = state.decoder.write(chunk);
          if (state.objectMode && (chunk === null || chunk === void 0))
            return;
          else if (!state.objectMode && (!chunk || !chunk.length))
            return;
          var ret = _this.push(chunk);
          if (!ret) {
            paused = true;
            stream.pause();
          }
        });
        for (var i in stream) {
          if (this[i] === void 0 && typeof stream[i] === "function") {
            this[i] = function methodWrap(method) {
              return function methodWrapReturnFunction() {
                return stream[method].apply(stream, arguments);
              };
            }(i);
          }
        }
        for (var n = 0; n < kProxyEvents.length; n++) {
          stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
        }
        this._read = function(n2) {
          debug("wrapped _read", n2);
          if (paused) {
            paused = false;
            stream.resume();
          }
        };
        return this;
      };
      if (typeof Symbol === "function") {
        Readable.prototype[Symbol.asyncIterator] = function() {
          if (createReadableStreamAsyncIterator === void 0) {
            createReadableStreamAsyncIterator = require_async_iterator();
          }
          return createReadableStreamAsyncIterator(this);
        };
      }
      Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
        enumerable: false,
        get: function get() {
          return this._readableState.highWaterMark;
        }
      });
      Object.defineProperty(Readable.prototype, "readableBuffer", {
        enumerable: false,
        get: function get() {
          return this._readableState && this._readableState.buffer;
        }
      });
      Object.defineProperty(Readable.prototype, "readableFlowing", {
        enumerable: false,
        get: function get() {
          return this._readableState.flowing;
        },
        set: function set(state) {
          if (this._readableState) {
            this._readableState.flowing = state;
          }
        }
      });
      Readable._fromList = fromList;
      Object.defineProperty(Readable.prototype, "readableLength", {
        enumerable: false,
        get: function get() {
          return this._readableState.length;
        }
      });
      function fromList(n, state) {
        if (state.length === 0)
          return null;
        var ret;
        if (state.objectMode)
          ret = state.buffer.shift();
        else if (!n || n >= state.length) {
          if (state.decoder)
            ret = state.buffer.join("");
          else if (state.buffer.length === 1)
            ret = state.buffer.first();
          else
            ret = state.buffer.concat(state.length);
          state.buffer.clear();
        } else {
          ret = state.buffer.consume(n, state.decoder);
        }
        return ret;
      }
      function endReadable(stream) {
        var state = stream._readableState;
        debug("endReadable", state.endEmitted);
        if (!state.endEmitted) {
          state.ended = true;
          process.nextTick(endReadableNT, state, stream);
        }
      }
      function endReadableNT(state, stream) {
        debug("endReadableNT", state.endEmitted, state.length);
        if (!state.endEmitted && state.length === 0) {
          state.endEmitted = true;
          stream.readable = false;
          stream.emit("end");
          if (state.autoDestroy) {
            var wState = stream._writableState;
            if (!wState || wState.autoDestroy && wState.finished) {
              stream.destroy();
            }
          }
        }
      }
      if (typeof Symbol === "function") {
        Readable.from = function(iterable, opts) {
          if (from === void 0) {
            from = require_from();
          }
          return from(Readable, iterable, opts);
        };
      }
      function indexOf(xs, x) {
        for (var i = 0, l = xs.length; i < l; i++) {
          if (xs[i] === x)
            return i;
        }
        return -1;
      }
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/_stream_transform.js
  var require_stream_transform = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/_stream_transform.js"(exports, module) {
      "use strict";
      module.exports = Transform;
      var _require$codes = require_errors().codes;
      var ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED;
      var ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK;
      var ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING;
      var ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;
      var Duplex = require_stream_duplex();
      require_inherits()(Transform, Duplex);
      function afterTransform(er, data) {
        var ts = this._transformState;
        ts.transforming = false;
        var cb = ts.writecb;
        if (cb === null) {
          return this.emit("error", new ERR_MULTIPLE_CALLBACK());
        }
        ts.writechunk = null;
        ts.writecb = null;
        if (data != null)
          this.push(data);
        cb(er);
        var rs = this._readableState;
        rs.reading = false;
        if (rs.needReadable || rs.length < rs.highWaterMark) {
          this._read(rs.highWaterMark);
        }
      }
      function Transform(options) {
        if (!(this instanceof Transform))
          return new Transform(options);
        Duplex.call(this, options);
        this._transformState = {
          afterTransform: afterTransform.bind(this),
          needTransform: false,
          transforming: false,
          writecb: null,
          writechunk: null,
          writeencoding: null
        };
        this._readableState.needReadable = true;
        this._readableState.sync = false;
        if (options) {
          if (typeof options.transform === "function")
            this._transform = options.transform;
          if (typeof options.flush === "function")
            this._flush = options.flush;
        }
        this.on("prefinish", prefinish);
      }
      function prefinish() {
        var _this = this;
        if (typeof this._flush === "function" && !this._readableState.destroyed) {
          this._flush(function(er, data) {
            done(_this, er, data);
          });
        } else {
          done(this, null, null);
        }
      }
      Transform.prototype.push = function(chunk, encoding) {
        this._transformState.needTransform = false;
        return Duplex.prototype.push.call(this, chunk, encoding);
      };
      Transform.prototype._transform = function(chunk, encoding, cb) {
        cb(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
      };
      Transform.prototype._write = function(chunk, encoding, cb) {
        var ts = this._transformState;
        ts.writecb = cb;
        ts.writechunk = chunk;
        ts.writeencoding = encoding;
        if (!ts.transforming) {
          var rs = this._readableState;
          if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
            this._read(rs.highWaterMark);
        }
      };
      Transform.prototype._read = function(n) {
        var ts = this._transformState;
        if (ts.writechunk !== null && !ts.transforming) {
          ts.transforming = true;
          this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
        } else {
          ts.needTransform = true;
        }
      };
      Transform.prototype._destroy = function(err, cb) {
        Duplex.prototype._destroy.call(this, err, function(err2) {
          cb(err2);
        });
      };
      function done(stream, er, data) {
        if (er)
          return stream.emit("error", er);
        if (data != null)
          stream.push(data);
        if (stream._writableState.length)
          throw new ERR_TRANSFORM_WITH_LENGTH_0();
        if (stream._transformState.transforming)
          throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
        return stream.push(null);
      }
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/_stream_passthrough.js
  var require_stream_passthrough = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/_stream_passthrough.js"(exports, module) {
      "use strict";
      module.exports = PassThrough;
      var Transform = require_stream_transform();
      require_inherits()(PassThrough, Transform);
      function PassThrough(options) {
        if (!(this instanceof PassThrough))
          return new PassThrough(options);
        Transform.call(this, options);
      }
      PassThrough.prototype._transform = function(chunk, encoding, cb) {
        cb(null, chunk);
      };
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/pipeline.js
  var require_pipeline = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/lib/internal/streams/pipeline.js"(exports, module) {
      "use strict";
      var eos;
      function once(callback) {
        var called = false;
        return function() {
          if (called)
            return;
          called = true;
          callback.apply(void 0, arguments);
        };
      }
      var _require$codes = require_errors().codes;
      var ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS;
      var ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
      function noop(err) {
        if (err)
          throw err;
      }
      function isRequest(stream) {
        return stream.setHeader && typeof stream.abort === "function";
      }
      function destroyer(stream, reading, writing, callback) {
        callback = once(callback);
        var closed = false;
        stream.on("close", function() {
          closed = true;
        });
        if (eos === void 0)
          eos = require_end_of_stream2();
        eos(stream, {
          readable: reading,
          writable: writing
        }, function(err) {
          if (err)
            return callback(err);
          closed = true;
          callback();
        });
        var destroyed = false;
        return function(err) {
          if (closed)
            return;
          if (destroyed)
            return;
          destroyed = true;
          if (isRequest(stream))
            return stream.abort();
          if (typeof stream.destroy === "function")
            return stream.destroy();
          callback(err || new ERR_STREAM_DESTROYED("pipe"));
        };
      }
      function call(fn) {
        fn();
      }
      function pipe(from, to) {
        return from.pipe(to);
      }
      function popCallback(streams) {
        if (!streams.length)
          return noop;
        if (typeof streams[streams.length - 1] !== "function")
          return noop;
        return streams.pop();
      }
      function pipeline() {
        for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
          streams[_key] = arguments[_key];
        }
        var callback = popCallback(streams);
        if (Array.isArray(streams[0]))
          streams = streams[0];
        if (streams.length < 2) {
          throw new ERR_MISSING_ARGS("streams");
        }
        var error;
        var destroys = streams.map(function(stream, i) {
          var reading = i < streams.length - 1;
          var writing = i > 0;
          return destroyer(stream, reading, writing, function(err) {
            if (!error)
              error = err;
            if (err)
              destroys.forEach(call);
            if (reading)
              return;
            destroys.forEach(call);
            callback(error);
          });
        });
        return streams.reduce(pipe);
      }
      module.exports = pipeline;
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/readable.js
  var require_readable = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/readable-stream-npm-3.6.0-23a4a5eb56-d4ea81502d.zip/node_modules/readable-stream/readable.js"(exports, module) {
      var Stream = __require("stream");
      if (process.env.READABLE_STREAM === "disable" && Stream) {
        module.exports = Stream.Readable;
        Object.assign(module.exports, Stream);
        module.exports.Stream = Stream;
      } else {
        exports = module.exports = require_stream_readable();
        exports.Stream = Stream || exports;
        exports.Readable = exports;
        exports.Writable = require_stream_writable();
        exports.Duplex = require_stream_duplex();
        exports.Transform = require_stream_transform();
        exports.PassThrough = require_stream_passthrough();
        exports.finished = require_end_of_stream2();
        exports.pipeline = require_pipeline();
      }
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/split2-npm-4.1.0-1c1a4bd984-ec581597cb.zip/node_modules/split2/index.js
  var require_split2 = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/split2-npm-4.1.0-1c1a4bd984-ec581597cb.zip/node_modules/split2/index.js"(exports, module) {
      "use strict";
      var { Transform } = __require("stream");
      var { StringDecoder } = __require("string_decoder");
      var kLast = Symbol("last");
      var kDecoder = Symbol("decoder");
      function transform(chunk, enc, cb) {
        let list;
        if (this.overflow) {
          const buf = this[kDecoder].write(chunk);
          list = buf.split(this.matcher);
          if (list.length === 1)
            return cb();
          list.shift();
          this.overflow = false;
        } else {
          this[kLast] += this[kDecoder].write(chunk);
          list = this[kLast].split(this.matcher);
        }
        this[kLast] = list.pop();
        for (let i = 0; i < list.length; i++) {
          try {
            push(this, this.mapper(list[i]));
          } catch (error) {
            return cb(error);
          }
        }
        this.overflow = this[kLast].length > this.maxLength;
        if (this.overflow && !this.skipOverflow) {
          cb(new Error("maximum buffer reached"));
          return;
        }
        cb();
      }
      function flush(cb) {
        this[kLast] += this[kDecoder].end();
        if (this[kLast]) {
          try {
            push(this, this.mapper(this[kLast]));
          } catch (error) {
            return cb(error);
          }
        }
        cb();
      }
      function push(self, val) {
        if (val !== void 0) {
          self.push(val);
        }
      }
      function noop(incoming) {
        return incoming;
      }
      function split(matcher, mapper, options) {
        matcher = matcher || /\r?\n/;
        mapper = mapper || noop;
        options = options || {};
        switch (arguments.length) {
          case 1:
            if (typeof matcher === "function") {
              mapper = matcher;
              matcher = /\r?\n/;
            } else if (typeof matcher === "object" && !(matcher instanceof RegExp)) {
              options = matcher;
              matcher = /\r?\n/;
            }
            break;
          case 2:
            if (typeof matcher === "function") {
              options = mapper;
              mapper = matcher;
              matcher = /\r?\n/;
            } else if (typeof mapper === "object") {
              options = mapper;
              mapper = noop;
            }
        }
        options = Object.assign({}, options);
        options.autoDestroy = true;
        options.transform = transform;
        options.flush = flush;
        options.readableObjectMode = true;
        const stream = new Transform(options);
        stream[kLast] = "";
        stream[kDecoder] = new StringDecoder("utf8");
        stream.matcher = matcher;
        stream.mapper = mapper;
        stream.maxLength = options.maxLength;
        stream.skipOverflow = options.skipOverflow || false;
        stream.overflow = false;
        stream._destroy = function(err, cb) {
          this._writableState.errorEmitted = false;
          cb(err);
        };
        return stream;
      }
      module.exports = split;
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/stream-shift-npm-1.0.1-9526210fa7-59b82b44b2.zip/node_modules/stream-shift/index.js
  var require_stream_shift = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/stream-shift-npm-1.0.1-9526210fa7-59b82b44b2.zip/node_modules/stream-shift/index.js"(exports, module) {
      module.exports = shift;
      function shift(stream) {
        var rs = stream._readableState;
        if (!rs)
          return null;
        return rs.objectMode || typeof stream._duplexState === "number" ? stream.read() : stream.read(getStateLength(rs));
      }
      function getStateLength(state) {
        if (state.buffer.length) {
          if (state.buffer.head) {
            return state.buffer.head.data.length;
          }
          return state.buffer[0].length;
        }
        return state.length;
      }
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/duplexify-npm-4.1.2-7f2140a477-964376c61c.zip/node_modules/duplexify/index.js
  var require_duplexify = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/duplexify-npm-4.1.2-7f2140a477-964376c61c.zip/node_modules/duplexify/index.js"(exports, module) {
      var stream = require_readable();
      var eos = require_end_of_stream();
      var inherits = require_inherits();
      var shift = require_stream_shift();
      var SIGNAL_FLUSH = Buffer.from && Buffer.from !== Uint8Array.from ? Buffer.from([0]) : new Buffer([0]);
      var onuncork = function(self, fn) {
        if (self._corked)
          self.once("uncork", fn);
        else
          fn();
      };
      var autoDestroy = function(self, err) {
        if (self._autoDestroy)
          self.destroy(err);
      };
      var destroyer = function(self, end2) {
        return function(err) {
          if (err)
            autoDestroy(self, err.message === "premature close" ? null : err);
          else if (end2 && !self._ended)
            self.end();
        };
      };
      var end = function(ws, fn) {
        if (!ws)
          return fn();
        if (ws._writableState && ws._writableState.finished)
          return fn();
        if (ws._writableState)
          return ws.end(fn);
        ws.end();
        fn();
      };
      var noop = function() {
      };
      var toStreams2 = function(rs) {
        return new stream.Readable({ objectMode: true, highWaterMark: 16 }).wrap(rs);
      };
      var Duplexify = function(writable, readable, opts) {
        if (!(this instanceof Duplexify))
          return new Duplexify(writable, readable, opts);
        stream.Duplex.call(this, opts);
        this._writable = null;
        this._readable = null;
        this._readable2 = null;
        this._autoDestroy = !opts || opts.autoDestroy !== false;
        this._forwardDestroy = !opts || opts.destroy !== false;
        this._forwardEnd = !opts || opts.end !== false;
        this._corked = 1;
        this._ondrain = null;
        this._drained = false;
        this._forwarding = false;
        this._unwrite = null;
        this._unread = null;
        this._ended = false;
        this.destroyed = false;
        if (writable)
          this.setWritable(writable);
        if (readable)
          this.setReadable(readable);
      };
      inherits(Duplexify, stream.Duplex);
      Duplexify.obj = function(writable, readable, opts) {
        if (!opts)
          opts = {};
        opts.objectMode = true;
        opts.highWaterMark = 16;
        return new Duplexify(writable, readable, opts);
      };
      Duplexify.prototype.cork = function() {
        if (++this._corked === 1)
          this.emit("cork");
      };
      Duplexify.prototype.uncork = function() {
        if (this._corked && --this._corked === 0)
          this.emit("uncork");
      };
      Duplexify.prototype.setWritable = function(writable) {
        if (this._unwrite)
          this._unwrite();
        if (this.destroyed) {
          if (writable && writable.destroy)
            writable.destroy();
          return;
        }
        if (writable === null || writable === false) {
          this.end();
          return;
        }
        var self = this;
        var unend = eos(writable, { writable: true, readable: false }, destroyer(this, this._forwardEnd));
        var ondrain = function() {
          var ondrain2 = self._ondrain;
          self._ondrain = null;
          if (ondrain2)
            ondrain2();
        };
        var clear = function() {
          self._writable.removeListener("drain", ondrain);
          unend();
        };
        if (this._unwrite)
          process.nextTick(ondrain);
        this._writable = writable;
        this._writable.on("drain", ondrain);
        this._unwrite = clear;
        this.uncork();
      };
      Duplexify.prototype.setReadable = function(readable) {
        if (this._unread)
          this._unread();
        if (this.destroyed) {
          if (readable && readable.destroy)
            readable.destroy();
          return;
        }
        if (readable === null || readable === false) {
          this.push(null);
          this.resume();
          return;
        }
        var self = this;
        var unend = eos(readable, { writable: false, readable: true }, destroyer(this));
        var onreadable = function() {
          self._forward();
        };
        var onend = function() {
          self.push(null);
        };
        var clear = function() {
          self._readable2.removeListener("readable", onreadable);
          self._readable2.removeListener("end", onend);
          unend();
        };
        this._drained = true;
        this._readable = readable;
        this._readable2 = readable._readableState ? readable : toStreams2(readable);
        this._readable2.on("readable", onreadable);
        this._readable2.on("end", onend);
        this._unread = clear;
        this._forward();
      };
      Duplexify.prototype._read = function() {
        this._drained = true;
        this._forward();
      };
      Duplexify.prototype._forward = function() {
        if (this._forwarding || !this._readable2 || !this._drained)
          return;
        this._forwarding = true;
        var data;
        while (this._drained && (data = shift(this._readable2)) !== null) {
          if (this.destroyed)
            continue;
          this._drained = this.push(data);
        }
        this._forwarding = false;
      };
      Duplexify.prototype.destroy = function(err, cb) {
        if (!cb)
          cb = noop;
        if (this.destroyed)
          return cb(null);
        this.destroyed = true;
        var self = this;
        process.nextTick(function() {
          self._destroy(err);
          cb(null);
        });
      };
      Duplexify.prototype._destroy = function(err) {
        if (err) {
          var ondrain = this._ondrain;
          this._ondrain = null;
          if (ondrain)
            ondrain(err);
          else
            this.emit("error", err);
        }
        if (this._forwardDestroy) {
          if (this._readable && this._readable.destroy)
            this._readable.destroy();
          if (this._writable && this._writable.destroy)
            this._writable.destroy();
        }
        this.emit("close");
      };
      Duplexify.prototype._write = function(data, enc, cb) {
        if (this.destroyed)
          return;
        if (this._corked)
          return onuncork(this, this._write.bind(this, data, enc, cb));
        if (data === SIGNAL_FLUSH)
          return this._finish(cb);
        if (!this._writable)
          return cb();
        if (this._writable.write(data) === false)
          this._ondrain = cb;
        else if (!this.destroyed)
          cb();
      };
      Duplexify.prototype._finish = function(cb) {
        var self = this;
        this.emit("preend");
        onuncork(this, function() {
          end(self._forwardEnd && self._writable, function() {
            if (self._writableState.prefinished === false)
              self._writableState.prefinished = true;
            self.emit("prefinish");
            onuncork(self, cb);
          });
        });
      };
      Duplexify.prototype.end = function(data, enc, cb) {
        if (typeof data === "function")
          return this.end(null, null, data);
        if (typeof enc === "function")
          return this.end(data, null, enc);
        this._ended = true;
        if (data)
          this.write(data);
        if (!this._writableState.ending && !this._writableState.destroyed)
          this.write(SIGNAL_FLUSH);
        return stream.Writable.prototype.end.call(this, cb);
      };
      module.exports = Duplexify;
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/pino-abstract-transport-npm-0.5.0-2cfa907a2a-c503f867de.zip/node_modules/pino-abstract-transport/index.js
  var require_pino_abstract_transport = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/pino-abstract-transport-npm-0.5.0-2cfa907a2a-c503f867de.zip/node_modules/pino-abstract-transport/index.js"(exports, module) {
      "use strict";
      var metadata = Symbol.for("pino.metadata");
      var split = require_split2();
      var duplexify = require_duplexify();
      module.exports = function build(fn, opts = {}) {
        const parseLines = opts.parse === "lines";
        const parseLine = typeof opts.parseLine === "function" ? opts.parseLine : JSON.parse;
        const close = opts.close || defaultClose;
        const stream = split(function(line) {
          let value;
          try {
            value = parseLine(line);
          } catch (error) {
            this.emit("unknown", line, error);
            return;
          }
          if (value === null) {
            this.emit("unknown", line, "Null value ignored");
            return;
          }
          if (typeof value !== "object") {
            value = {
              data: value,
              time: Date.now()
            };
          }
          if (stream[metadata]) {
            stream.lastTime = value.time;
            stream.lastLevel = value.level;
            stream.lastObj = value;
          }
          if (parseLines) {
            return line;
          }
          return value;
        }, { autoDestroy: true });
        stream._destroy = function(err, cb) {
          const promise = close(err, cb);
          if (promise && typeof promise.then === "function") {
            promise.then(cb, cb);
          }
        };
        if (opts.metadata !== false) {
          stream[metadata] = true;
          stream.lastTime = 0;
          stream.lastLevel = 0;
          stream.lastObj = null;
        }
        let res = fn(stream);
        if (res && typeof res.catch === "function") {
          res.catch((err) => {
            stream.destroy(err);
          });
          res = null;
        } else if (opts.enablePipelining && res) {
          return duplexify(stream, res, {
            objectMode: true
          });
        }
        return stream;
      };
      function defaultClose(err, cb) {
        process.nextTick(cb, err);
      }
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/secure-json-parse-npm-2.4.0-161f104c50-efaafcaa08.zip/node_modules/secure-json-parse/index.js
  var require_secure_json_parse = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/secure-json-parse-npm-2.4.0-161f104c50-efaafcaa08.zip/node_modules/secure-json-parse/index.js"(exports, module) {
      "use strict";
      var hasBuffer = typeof Buffer !== "undefined";
      var suspectProtoRx = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/;
      var suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
      function parse(text, reviver, options) {
        if (options == null) {
          if (reviver !== null && typeof reviver === "object") {
            options = reviver;
            reviver = void 0;
          } else {
            options = {};
          }
        }
        const protoAction = options.protoAction || "error";
        const constructorAction = options.constructorAction || "error";
        if (hasBuffer && Buffer.isBuffer(text)) {
          text = text.toString();
        }
        if (text && text.charCodeAt(0) === 65279) {
          text = text.slice(1);
        }
        const obj = JSON.parse(text, reviver);
        if (protoAction === "ignore" && constructorAction === "ignore") {
          return obj;
        }
        if (obj === null || typeof obj !== "object") {
          return obj;
        }
        if (protoAction !== "ignore" && constructorAction !== "ignore") {
          if (suspectProtoRx.test(text) === false && suspectConstructorRx.test(text) === false) {
            return obj;
          }
        } else if (protoAction !== "ignore" && constructorAction === "ignore") {
          if (suspectProtoRx.test(text) === false) {
            return obj;
          }
        } else {
          if (suspectConstructorRx.test(text) === false) {
            return obj;
          }
        }
        scan(obj, { protoAction, constructorAction });
        return obj;
      }
      function scan(obj, { protoAction = "error", constructorAction = "error" } = {}) {
        let next = [obj];
        while (next.length) {
          const nodes = next;
          next = [];
          for (const node of nodes) {
            if (protoAction !== "ignore" && Object.prototype.hasOwnProperty.call(node, "__proto__")) {
              if (protoAction === "error") {
                throw new SyntaxError("Object contains forbidden prototype property");
              }
              delete node.__proto__;
            }
            if (constructorAction !== "ignore" && Object.prototype.hasOwnProperty.call(node, "constructor") && Object.prototype.hasOwnProperty.call(node.constructor, "prototype")) {
              if (constructorAction === "error") {
                throw new SyntaxError("Object contains forbidden prototype property");
              }
              delete node.constructor;
            }
            for (const key in node) {
              const value = node[key];
              if (value && typeof value === "object") {
                next.push(node[key]);
              }
            }
          }
        }
      }
      function safeParse(text, reviver) {
        try {
          return parse(text, reviver);
        } catch (ignoreError) {
          return null;
        }
      }
      module.exports = {
        parse,
        scan,
        safeParse
      };
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/pino-pretty-npm-7.5.1-a196571df1-4187449720.zip/node_modules/pino-pretty/lib/constants.js
  var require_constants = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/pino-pretty-npm-7.5.1-a196571df1-4187449720.zip/node_modules/pino-pretty/lib/constants.js"(exports, module) {
      "use strict";
      module.exports = {
        DATE_FORMAT: "yyyy-mm-dd HH:MM:ss.l o",
        ERROR_LIKE_KEYS: ["err", "error"],
        MESSAGE_KEY: "msg",
        LEVEL_KEY: "level",
        LEVEL_LABEL: "levelLabel",
        TIMESTAMP_KEY: "time",
        LEVELS: {
          default: "USERLVL",
          60: "FATAL",
          50: "ERROR",
          40: "WARN",
          30: "INFO",
          20: "DEBUG",
          10: "TRACE"
        },
        LEVEL_NAMES: {
          fatal: 60,
          error: 50,
          warn: 40,
          info: 30,
          debug: 20,
          trace: 10
        },
        LOGGER_KEYS: [
          "pid",
          "hostname",
          "name",
          "level",
          "time",
          "timestamp",
          "caller"
        ]
      };
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/pino-pretty-npm-7.5.1-a196571df1-4187449720.zip/node_modules/pino-pretty/lib/colors.js
  var require_colors = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/pino-pretty-npm-7.5.1-a196571df1-4187449720.zip/node_modules/pino-pretty/lib/colors.js"(exports, module) {
      "use strict";
      var { LEVELS, LEVEL_NAMES } = require_constants();
      var nocolor = (input) => input;
      var plain = {
        default: nocolor,
        60: nocolor,
        50: nocolor,
        40: nocolor,
        30: nocolor,
        20: nocolor,
        10: nocolor,
        message: nocolor,
        greyMessage: nocolor
      };
      var { createColors } = require_colorette();
      var availableColors = createColors({ useColor: true });
      var { white, bgRed, red, yellow, green, blue, gray, cyan } = availableColors;
      var colored = {
        default: white,
        60: bgRed,
        50: red,
        40: yellow,
        30: green,
        20: blue,
        10: gray,
        message: cyan,
        greyMessage: gray
      };
      function resolveCustomColoredColorizer(customColors) {
        return customColors.reduce(function(agg, [level, color]) {
          agg[level] = typeof availableColors[color] === "function" ? availableColors[color] : white;
          return agg;
        }, { default: white, message: cyan, greyMessage: gray });
      }
      function colorizeLevel(level, colorizer, { customLevels, customLevelNames } = {}) {
        const levels = customLevels || LEVELS;
        const levelNames = customLevelNames || LEVEL_NAMES;
        let levelNum = "default";
        if (Number.isInteger(+level)) {
          levelNum = Object.prototype.hasOwnProperty.call(levels, level) ? level : levelNum;
        } else {
          levelNum = Object.prototype.hasOwnProperty.call(levelNames, level.toLowerCase()) ? levelNames[level.toLowerCase()] : levelNum;
        }
        const levelStr = levels[levelNum];
        return Object.prototype.hasOwnProperty.call(colorizer, levelNum) ? colorizer[levelNum](levelStr) : colorizer.default(levelStr);
      }
      function plainColorizer(level, opts) {
        return colorizeLevel(level, plain, opts);
      }
      plainColorizer.message = plain.message;
      plainColorizer.greyMessage = plain.greyMessage;
      function coloredColorizer(level, opts) {
        return colorizeLevel(level, colored, opts);
      }
      coloredColorizer.message = colored.message;
      coloredColorizer.greyMessage = colored.greyMessage;
      function customColoredColorizerFactory(customColors) {
        const customColored = resolveCustomColoredColorizer(customColors);
        const customColoredColorizer = function(level, opts) {
          return colorizeLevel(level, customColored, opts);
        };
        customColoredColorizer.message = customColoredColorizer.message || customColored.message;
        customColoredColorizer.greyMessage = customColoredColorizer.greyMessage || customColored.greyMessage;
        return customColoredColorizer;
      }
      module.exports = function getColorizer(useColors = false, customColors) {
        if (useColors && customColors !== void 0) {
          return customColoredColorizerFactory(customColors);
        } else if (useColors) {
          return coloredColorizer;
        }
        return plainColorizer;
      };
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/rfdc-npm-1.3.0-272f288ad8-fb2ba8512e.zip/node_modules/rfdc/index.js
  var require_rfdc = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/rfdc-npm-1.3.0-272f288ad8-fb2ba8512e.zip/node_modules/rfdc/index.js"(exports, module) {
      "use strict";
      module.exports = rfdc;
      function copyBuffer(cur) {
        if (cur instanceof Buffer) {
          return Buffer.from(cur);
        }
        return new cur.constructor(cur.buffer.slice(), cur.byteOffset, cur.length);
      }
      function rfdc(opts) {
        opts = opts || {};
        if (opts.circles)
          return rfdcCircles(opts);
        return opts.proto ? cloneProto : clone;
        function cloneArray(a, fn) {
          var keys = Object.keys(a);
          var a2 = new Array(keys.length);
          for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            var cur = a[k];
            if (typeof cur !== "object" || cur === null) {
              a2[k] = cur;
            } else if (cur instanceof Date) {
              a2[k] = new Date(cur);
            } else if (ArrayBuffer.isView(cur)) {
              a2[k] = copyBuffer(cur);
            } else {
              a2[k] = fn(cur);
            }
          }
          return a2;
        }
        function clone(o) {
          if (typeof o !== "object" || o === null)
            return o;
          if (o instanceof Date)
            return new Date(o);
          if (Array.isArray(o))
            return cloneArray(o, clone);
          if (o instanceof Map)
            return new Map(cloneArray(Array.from(o), clone));
          if (o instanceof Set)
            return new Set(cloneArray(Array.from(o), clone));
          var o2 = {};
          for (var k in o) {
            if (Object.hasOwnProperty.call(o, k) === false)
              continue;
            var cur = o[k];
            if (typeof cur !== "object" || cur === null) {
              o2[k] = cur;
            } else if (cur instanceof Date) {
              o2[k] = new Date(cur);
            } else if (cur instanceof Map) {
              o2[k] = new Map(cloneArray(Array.from(cur), clone));
            } else if (cur instanceof Set) {
              o2[k] = new Set(cloneArray(Array.from(cur), clone));
            } else if (ArrayBuffer.isView(cur)) {
              o2[k] = copyBuffer(cur);
            } else {
              o2[k] = clone(cur);
            }
          }
          return o2;
        }
        function cloneProto(o) {
          if (typeof o !== "object" || o === null)
            return o;
          if (o instanceof Date)
            return new Date(o);
          if (Array.isArray(o))
            return cloneArray(o, cloneProto);
          if (o instanceof Map)
            return new Map(cloneArray(Array.from(o), cloneProto));
          if (o instanceof Set)
            return new Set(cloneArray(Array.from(o), cloneProto));
          var o2 = {};
          for (var k in o) {
            var cur = o[k];
            if (typeof cur !== "object" || cur === null) {
              o2[k] = cur;
            } else if (cur instanceof Date) {
              o2[k] = new Date(cur);
            } else if (cur instanceof Map) {
              o2[k] = new Map(cloneArray(Array.from(cur), cloneProto));
            } else if (cur instanceof Set) {
              o2[k] = new Set(cloneArray(Array.from(cur), cloneProto));
            } else if (ArrayBuffer.isView(cur)) {
              o2[k] = copyBuffer(cur);
            } else {
              o2[k] = cloneProto(cur);
            }
          }
          return o2;
        }
      }
      function rfdcCircles(opts) {
        var refs = [];
        var refsNew = [];
        return opts.proto ? cloneProto : clone;
        function cloneArray(a, fn) {
          var keys = Object.keys(a);
          var a2 = new Array(keys.length);
          for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            var cur = a[k];
            if (typeof cur !== "object" || cur === null) {
              a2[k] = cur;
            } else if (cur instanceof Date) {
              a2[k] = new Date(cur);
            } else if (ArrayBuffer.isView(cur)) {
              a2[k] = copyBuffer(cur);
            } else {
              var index = refs.indexOf(cur);
              if (index !== -1) {
                a2[k] = refsNew[index];
              } else {
                a2[k] = fn(cur);
              }
            }
          }
          return a2;
        }
        function clone(o) {
          if (typeof o !== "object" || o === null)
            return o;
          if (o instanceof Date)
            return new Date(o);
          if (Array.isArray(o))
            return cloneArray(o, clone);
          if (o instanceof Map)
            return new Map(cloneArray(Array.from(o), clone));
          if (o instanceof Set)
            return new Set(cloneArray(Array.from(o), clone));
          var o2 = {};
          refs.push(o);
          refsNew.push(o2);
          for (var k in o) {
            if (Object.hasOwnProperty.call(o, k) === false)
              continue;
            var cur = o[k];
            if (typeof cur !== "object" || cur === null) {
              o2[k] = cur;
            } else if (cur instanceof Date) {
              o2[k] = new Date(cur);
            } else if (cur instanceof Map) {
              o2[k] = new Map(cloneArray(Array.from(cur), clone));
            } else if (cur instanceof Set) {
              o2[k] = new Set(cloneArray(Array.from(cur), clone));
            } else if (ArrayBuffer.isView(cur)) {
              o2[k] = copyBuffer(cur);
            } else {
              var i = refs.indexOf(cur);
              if (i !== -1) {
                o2[k] = refsNew[i];
              } else {
                o2[k] = clone(cur);
              }
            }
          }
          refs.pop();
          refsNew.pop();
          return o2;
        }
        function cloneProto(o) {
          if (typeof o !== "object" || o === null)
            return o;
          if (o instanceof Date)
            return new Date(o);
          if (Array.isArray(o))
            return cloneArray(o, cloneProto);
          if (o instanceof Map)
            return new Map(cloneArray(Array.from(o), cloneProto));
          if (o instanceof Set)
            return new Set(cloneArray(Array.from(o), cloneProto));
          var o2 = {};
          refs.push(o);
          refsNew.push(o2);
          for (var k in o) {
            var cur = o[k];
            if (typeof cur !== "object" || cur === null) {
              o2[k] = cur;
            } else if (cur instanceof Date) {
              o2[k] = new Date(cur);
            } else if (cur instanceof Map) {
              o2[k] = new Map(cloneArray(Array.from(cur), cloneProto));
            } else if (cur instanceof Set) {
              o2[k] = new Set(cloneArray(Array.from(cur), cloneProto));
            } else if (ArrayBuffer.isView(cur)) {
              o2[k] = copyBuffer(cur);
            } else {
              var i = refs.indexOf(cur);
              if (i !== -1) {
                o2[k] = refsNew[i];
              } else {
                o2[k] = cloneProto(cur);
              }
            }
          }
          refs.pop();
          refsNew.pop();
          return o2;
        }
      }
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/dateformat-npm-4.6.3-aa1a4cb7f9-c3aa0617c0.zip/node_modules/dateformat/lib/dateformat.js
  var require_dateformat = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/dateformat-npm-4.6.3-aa1a4cb7f9-c3aa0617c0.zip/node_modules/dateformat/lib/dateformat.js"(exports, module) {
      "use strict";
      function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      (function(global2) {
        var _arguments = arguments;
        var dateFormat = function() {
          var token = /d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g;
          var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
          var timezoneClip = /[^-+\dA-Z]/g;
          return function(date, mask, utc, gmt) {
            if (_arguments.length === 1 && kindOf(date) === "string" && !/\d/.test(date)) {
              mask = date;
              date = void 0;
            }
            date = date || date === 0 ? date : new Date();
            if (!(date instanceof Date)) {
              date = new Date(date);
            }
            if (isNaN(date)) {
              throw TypeError("Invalid date");
            }
            mask = String(dateFormat.masks[mask] || mask || dateFormat.masks["default"]);
            var maskSlice = mask.slice(0, 4);
            if (maskSlice === "UTC:" || maskSlice === "GMT:") {
              mask = mask.slice(4);
              utc = true;
              if (maskSlice === "GMT:") {
                gmt = true;
              }
            }
            var _ = function _2() {
              return utc ? "getUTC" : "get";
            };
            var _d = function d() {
              return date[_() + "Date"]();
            };
            var D = function D2() {
              return date[_() + "Day"]();
            };
            var _m = function m() {
              return date[_() + "Month"]();
            };
            var y = function y2() {
              return date[_() + "FullYear"]();
            };
            var _H = function H() {
              return date[_() + "Hours"]();
            };
            var _M = function M() {
              return date[_() + "Minutes"]();
            };
            var _s = function s() {
              return date[_() + "Seconds"]();
            };
            var _L = function L() {
              return date[_() + "Milliseconds"]();
            };
            var _o = function o() {
              return utc ? 0 : date.getTimezoneOffset();
            };
            var _W = function W() {
              return getWeek(date);
            };
            var _N = function N() {
              return getDayOfWeek(date);
            };
            var flags = { d: function d() {
              return _d();
            }, dd: function dd() {
              return pad(_d());
            }, ddd: function ddd() {
              return dateFormat.i18n.dayNames[D()];
            }, DDD: function DDD() {
              return getDayName({ y: y(), m: _m(), d: _d(), _: _(), dayName: dateFormat.i18n.dayNames[D()], short: true });
            }, dddd: function dddd() {
              return dateFormat.i18n.dayNames[D() + 7];
            }, DDDD: function DDDD() {
              return getDayName({ y: y(), m: _m(), d: _d(), _: _(), dayName: dateFormat.i18n.dayNames[D() + 7] });
            }, m: function m() {
              return _m() + 1;
            }, mm: function mm() {
              return pad(_m() + 1);
            }, mmm: function mmm() {
              return dateFormat.i18n.monthNames[_m()];
            }, mmmm: function mmmm() {
              return dateFormat.i18n.monthNames[_m() + 12];
            }, yy: function yy() {
              return String(y()).slice(2);
            }, yyyy: function yyyy() {
              return pad(y(), 4);
            }, h: function h() {
              return _H() % 12 || 12;
            }, hh: function hh() {
              return pad(_H() % 12 || 12);
            }, H: function H() {
              return _H();
            }, HH: function HH() {
              return pad(_H());
            }, M: function M() {
              return _M();
            }, MM: function MM() {
              return pad(_M());
            }, s: function s() {
              return _s();
            }, ss: function ss() {
              return pad(_s());
            }, l: function l() {
              return pad(_L(), 3);
            }, L: function L() {
              return pad(Math.floor(_L() / 10));
            }, t: function t() {
              return _H() < 12 ? dateFormat.i18n.timeNames[0] : dateFormat.i18n.timeNames[1];
            }, tt: function tt() {
              return _H() < 12 ? dateFormat.i18n.timeNames[2] : dateFormat.i18n.timeNames[3];
            }, T: function T() {
              return _H() < 12 ? dateFormat.i18n.timeNames[4] : dateFormat.i18n.timeNames[5];
            }, TT: function TT() {
              return _H() < 12 ? dateFormat.i18n.timeNames[6] : dateFormat.i18n.timeNames[7];
            }, Z: function Z() {
              return gmt ? "GMT" : utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, "").replace(/GMT\+0000/g, "UTC");
            }, o: function o() {
              return (_o() > 0 ? "-" : "+") + pad(Math.floor(Math.abs(_o()) / 60) * 100 + Math.abs(_o()) % 60, 4);
            }, p: function p() {
              return (_o() > 0 ? "-" : "+") + pad(Math.floor(Math.abs(_o()) / 60), 2) + ":" + pad(Math.floor(Math.abs(_o()) % 60), 2);
            }, S: function S() {
              return ["th", "st", "nd", "rd"][_d() % 10 > 3 ? 0 : (_d() % 100 - _d() % 10 != 10) * _d() % 10];
            }, W: function W() {
              return _W();
            }, WW: function WW() {
              return pad(_W());
            }, N: function N() {
              return _N();
            } };
            return mask.replace(token, function(match) {
              if (match in flags) {
                return flags[match]();
              }
              return match.slice(1, match.length - 1);
            });
          };
        }();
        dateFormat.masks = { default: "ddd mmm dd yyyy HH:MM:ss", shortDate: "m/d/yy", paddedShortDate: "mm/dd/yyyy", mediumDate: "mmm d, yyyy", longDate: "mmmm d, yyyy", fullDate: "dddd, mmmm d, yyyy", shortTime: "h:MM TT", mediumTime: "h:MM:ss TT", longTime: "h:MM:ss TT Z", isoDate: "yyyy-mm-dd", isoTime: "HH:MM:ss", isoDateTime: "yyyy-mm-dd'T'HH:MM:sso", isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'", expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z" };
        dateFormat.i18n = { dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"] };
        var pad = function pad2(val, len) {
          val = String(val);
          len = len || 2;
          while (val.length < len) {
            val = "0" + val;
          }
          return val;
        };
        var getDayName = function getDayName2(_ref) {
          var y = _ref.y, m = _ref.m, d = _ref.d, _ = _ref._, dayName = _ref.dayName, _ref$short = _ref["short"], _short = _ref$short === void 0 ? false : _ref$short;
          var today = new Date();
          var yesterday = new Date();
          yesterday.setDate(yesterday[_ + "Date"]() - 1);
          var tomorrow = new Date();
          tomorrow.setDate(tomorrow[_ + "Date"]() + 1);
          var today_d = function today_d2() {
            return today[_ + "Date"]();
          };
          var today_m = function today_m2() {
            return today[_ + "Month"]();
          };
          var today_y = function today_y2() {
            return today[_ + "FullYear"]();
          };
          var yesterday_d = function yesterday_d2() {
            return yesterday[_ + "Date"]();
          };
          var yesterday_m = function yesterday_m2() {
            return yesterday[_ + "Month"]();
          };
          var yesterday_y = function yesterday_y2() {
            return yesterday[_ + "FullYear"]();
          };
          var tomorrow_d = function tomorrow_d2() {
            return tomorrow[_ + "Date"]();
          };
          var tomorrow_m = function tomorrow_m2() {
            return tomorrow[_ + "Month"]();
          };
          var tomorrow_y = function tomorrow_y2() {
            return tomorrow[_ + "FullYear"]();
          };
          if (today_y() === y && today_m() === m && today_d() === d) {
            return _short ? "Tdy" : "Today";
          } else if (yesterday_y() === y && yesterday_m() === m && yesterday_d() === d) {
            return _short ? "Ysd" : "Yesterday";
          } else if (tomorrow_y() === y && tomorrow_m() === m && tomorrow_d() === d) {
            return _short ? "Tmw" : "Tomorrow";
          }
          return dayName;
        };
        var getWeek = function getWeek2(date) {
          var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
          targetThursday.setDate(targetThursday.getDate() - (targetThursday.getDay() + 6) % 7 + 3);
          var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);
          firstThursday.setDate(firstThursday.getDate() - (firstThursday.getDay() + 6) % 7 + 3);
          var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
          targetThursday.setHours(targetThursday.getHours() - ds);
          var weekDiff = (targetThursday - firstThursday) / (864e5 * 7);
          return 1 + Math.floor(weekDiff);
        };
        var getDayOfWeek = function getDayOfWeek2(date) {
          var dow = date.getDay();
          if (dow === 0) {
            dow = 7;
          }
          return dow;
        };
        var kindOf = function kindOf2(val) {
          if (val === null) {
            return "null";
          }
          if (val === void 0) {
            return "undefined";
          }
          if (_typeof(val) !== "object") {
            return _typeof(val);
          }
          if (Array.isArray(val)) {
            return "array";
          }
          return {}.toString.call(val).slice(8, -1).toLowerCase();
        };
        if (typeof define === "function" && define.amd) {
          define(function() {
            return dateFormat;
          });
        } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object") {
          module.exports = dateFormat;
        } else {
          global2.dateFormat = dateFormat;
        }
      })(void 0);
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/fast-safe-stringify-npm-2.1.1-7ce89033ca-a851cbddc4.zip/node_modules/fast-safe-stringify/index.js
  var require_fast_safe_stringify = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/fast-safe-stringify-npm-2.1.1-7ce89033ca-a851cbddc4.zip/node_modules/fast-safe-stringify/index.js"(exports, module) {
      module.exports = stringify;
      stringify.default = stringify;
      stringify.stable = deterministicStringify;
      stringify.stableStringify = deterministicStringify;
      var LIMIT_REPLACE_NODE = "[...]";
      var CIRCULAR_REPLACE_NODE = "[Circular]";
      var arr = [];
      var replacerStack = [];
      function defaultOptions() {
        return {
          depthLimit: Number.MAX_SAFE_INTEGER,
          edgesLimit: Number.MAX_SAFE_INTEGER
        };
      }
      function stringify(obj, replacer, spacer, options) {
        if (typeof options === "undefined") {
          options = defaultOptions();
        }
        decirc(obj, "", 0, [], void 0, 0, options);
        var res;
        try {
          if (replacerStack.length === 0) {
            res = JSON.stringify(obj, replacer, spacer);
          } else {
            res = JSON.stringify(obj, replaceGetterValues(replacer), spacer);
          }
        } catch (_) {
          return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
        } finally {
          while (arr.length !== 0) {
            var part = arr.pop();
            if (part.length === 4) {
              Object.defineProperty(part[0], part[1], part[3]);
            } else {
              part[0][part[1]] = part[2];
            }
          }
        }
        return res;
      }
      function setReplace(replace, val, k, parent) {
        var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k);
        if (propertyDescriptor.get !== void 0) {
          if (propertyDescriptor.configurable) {
            Object.defineProperty(parent, k, { value: replace });
            arr.push([parent, k, val, propertyDescriptor]);
          } else {
            replacerStack.push([val, k, replace]);
          }
        } else {
          parent[k] = replace;
          arr.push([parent, k, val]);
        }
      }
      function decirc(val, k, edgeIndex, stack, parent, depth, options) {
        depth += 1;
        var i;
        if (typeof val === "object" && val !== null) {
          for (i = 0; i < stack.length; i++) {
            if (stack[i] === val) {
              setReplace(CIRCULAR_REPLACE_NODE, val, k, parent);
              return;
            }
          }
          if (typeof options.depthLimit !== "undefined" && depth > options.depthLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
          }
          if (typeof options.edgesLimit !== "undefined" && edgeIndex + 1 > options.edgesLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
          }
          stack.push(val);
          if (Array.isArray(val)) {
            for (i = 0; i < val.length; i++) {
              decirc(val[i], i, i, stack, val, depth, options);
            }
          } else {
            var keys = Object.keys(val);
            for (i = 0; i < keys.length; i++) {
              var key = keys[i];
              decirc(val[key], key, i, stack, val, depth, options);
            }
          }
          stack.pop();
        }
      }
      function compareFunction(a, b) {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      }
      function deterministicStringify(obj, replacer, spacer, options) {
        if (typeof options === "undefined") {
          options = defaultOptions();
        }
        var tmp = deterministicDecirc(obj, "", 0, [], void 0, 0, options) || obj;
        var res;
        try {
          if (replacerStack.length === 0) {
            res = JSON.stringify(tmp, replacer, spacer);
          } else {
            res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer);
          }
        } catch (_) {
          return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
        } finally {
          while (arr.length !== 0) {
            var part = arr.pop();
            if (part.length === 4) {
              Object.defineProperty(part[0], part[1], part[3]);
            } else {
              part[0][part[1]] = part[2];
            }
          }
        }
        return res;
      }
      function deterministicDecirc(val, k, edgeIndex, stack, parent, depth, options) {
        depth += 1;
        var i;
        if (typeof val === "object" && val !== null) {
          for (i = 0; i < stack.length; i++) {
            if (stack[i] === val) {
              setReplace(CIRCULAR_REPLACE_NODE, val, k, parent);
              return;
            }
          }
          try {
            if (typeof val.toJSON === "function") {
              return;
            }
          } catch (_) {
            return;
          }
          if (typeof options.depthLimit !== "undefined" && depth > options.depthLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
          }
          if (typeof options.edgesLimit !== "undefined" && edgeIndex + 1 > options.edgesLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
          }
          stack.push(val);
          if (Array.isArray(val)) {
            for (i = 0; i < val.length; i++) {
              deterministicDecirc(val[i], i, i, stack, val, depth, options);
            }
          } else {
            var tmp = {};
            var keys = Object.keys(val).sort(compareFunction);
            for (i = 0; i < keys.length; i++) {
              var key = keys[i];
              deterministicDecirc(val[key], key, i, stack, val, depth, options);
              tmp[key] = val[key];
            }
            if (typeof parent !== "undefined") {
              arr.push([parent, k, val]);
              parent[k] = tmp;
            } else {
              return tmp;
            }
          }
          stack.pop();
        }
      }
      function replaceGetterValues(replacer) {
        replacer = typeof replacer !== "undefined" ? replacer : function(k, v) {
          return v;
        };
        return function(key, val) {
          if (replacerStack.length > 0) {
            for (var i = 0; i < replacerStack.length; i++) {
              var part = replacerStack[i];
              if (part[1] === key && part[0] === val) {
                val = part[2];
                replacerStack.splice(i, 1);
                break;
              }
            }
          }
          return replacer.call(this, key, val);
        };
      }
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/pino-pretty-npm-7.5.1-a196571df1-4187449720.zip/node_modules/pino-pretty/lib/utils.js
  var require_utils = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/pino-pretty-npm-7.5.1-a196571df1-4187449720.zip/node_modules/pino-pretty/lib/utils.js"(exports, module) {
      "use strict";
      var clone = require_rfdc()({ circles: true });
      var dateformat = require_dateformat();
      var stringifySafe = require_fast_safe_stringify();
      var defaultColorizer = require_colors()();
      var {
        DATE_FORMAT,
        ERROR_LIKE_KEYS,
        MESSAGE_KEY,
        LEVEL_KEY,
        LEVEL_LABEL,
        TIMESTAMP_KEY,
        LOGGER_KEYS,
        LEVELS
      } = require_constants();
      module.exports = {
        isObject,
        prettifyErrorLog,
        prettifyLevel,
        prettifyMessage,
        prettifyMetadata,
        prettifyObject,
        prettifyTime,
        filterLog
      };
      module.exports.internals = {
        formatTime,
        joinLinesWithIndentation,
        prettifyError,
        deleteLogProperty,
        splitIgnoreKey,
        createDate,
        isValidDate
      };
      function formatTime(epoch, translateTime = false) {
        if (translateTime === false) {
          return epoch;
        }
        const instant = createDate(epoch);
        if (!isValidDate(instant)) {
          return epoch;
        }
        if (translateTime === true) {
          return dateformat(instant, "UTC:" + DATE_FORMAT);
        }
        const upperFormat = translateTime.toUpperCase();
        if (upperFormat === "SYS:STANDARD") {
          return dateformat(instant, DATE_FORMAT);
        }
        const prefix = upperFormat.substr(0, 4);
        if (prefix === "SYS:" || prefix === "UTC:") {
          if (prefix === "UTC:") {
            return dateformat(instant, translateTime);
          }
          return dateformat(instant, translateTime.slice(4));
        }
        return dateformat(instant, `UTC:${translateTime}`);
      }
      function createDate(epoch) {
        let date = new Date(epoch);
        if (isValidDate(date)) {
          return date;
        }
        date = new Date(+epoch);
        return date;
      }
      function isValidDate(date) {
        return date instanceof Date && !Number.isNaN(date.getTime());
      }
      function isObject(input) {
        return Object.prototype.toString.apply(input) === "[object Object]";
      }
      function joinLinesWithIndentation({ input, ident = "    ", eol = "\n" }) {
        const lines = input.split(/\r?\n/);
        for (let i = 1; i < lines.length; i += 1) {
          lines[i] = ident + lines[i];
        }
        return lines.join(eol);
      }
      function prettifyErrorLog({
        log,
        messageKey = MESSAGE_KEY,
        ident = "    ",
        eol = "\n",
        errorLikeKeys = ERROR_LIKE_KEYS,
        errorProperties = []
      }) {
        const stack = log.stack;
        const joinedLines = joinLinesWithIndentation({ input: stack, ident, eol });
        let result = `${ident}${joinedLines}${eol}`;
        if (errorProperties.length > 0) {
          const excludeProperties = LOGGER_KEYS.concat(messageKey, "type", "stack");
          let propertiesToPrint;
          if (errorProperties[0] === "*") {
            propertiesToPrint = Object.keys(log).filter((k) => excludeProperties.includes(k) === false);
          } else {
            propertiesToPrint = errorProperties.filter((k) => excludeProperties.includes(k) === false);
          }
          for (let i = 0; i < propertiesToPrint.length; i += 1) {
            const key = propertiesToPrint[i];
            if (key in log === false)
              continue;
            if (isObject(log[key])) {
              const prettifiedObject = prettifyObject({ input: log[key], errorLikeKeys, excludeLoggerKeys: false, eol, ident: ident + ident });
              result = `${result}${ident}${key}: {${eol}${prettifiedObject}${ident}}${eol}`;
              continue;
            }
            result = `${result}${ident}${key}: ${log[key]}${eol}`;
          }
        }
        return result;
      }
      function prettifyLevel({ log, colorizer = defaultColorizer, levelKey = LEVEL_KEY, prettifier, customLevels, customLevelNames }) {
        if (levelKey in log === false)
          return void 0;
        const output = log[levelKey];
        return prettifier ? prettifier(output) : colorizer(output, { customLevels, customLevelNames });
      }
      function prettifyMessage({ log, messageFormat, messageKey = MESSAGE_KEY, colorizer = defaultColorizer, levelLabel = LEVEL_LABEL, levelKey = LEVEL_KEY, customLevels }) {
        if (messageFormat && typeof messageFormat === "string") {
          const message = String(messageFormat).replace(/{([^{}]+)}/g, function(match, p1) {
            if (p1 === levelLabel && log[levelKey]) {
              return customLevels === void 0 ? LEVELS[log[levelKey]] : customLevels[log[levelKey]];
            }
            return p1.split(".").reduce(function(prev, curr) {
              if (prev && prev[curr]) {
                return prev[curr];
              }
              return "";
            }, log);
          });
          return colorizer.message(message);
        }
        if (messageFormat && typeof messageFormat === "function") {
          const msg = messageFormat(log, messageKey, levelLabel);
          return colorizer.message(msg);
        }
        if (messageKey in log === false)
          return void 0;
        if (typeof log[messageKey] !== "string")
          return void 0;
        return colorizer.message(log[messageKey]);
      }
      function prettifyMetadata({ log, prettifiers = {} }) {
        let line = "";
        if (log.name || log.pid || log.hostname) {
          line += "(";
          if (log.name) {
            line += prettifiers.name ? prettifiers.name(log.name) : log.name;
          }
          if (log.pid) {
            const prettyPid = prettifiers.pid ? prettifiers.pid(log.pid) : log.pid;
            if (log.name && log.pid) {
              line += "/" + prettyPid;
            } else {
              line += prettyPid;
            }
          }
          if (log.hostname) {
            line += `${line === "(" ? "on" : " on"} ${prettifiers.hostname ? prettifiers.hostname(log.hostname) : log.hostname}`;
          }
          line += ")";
        }
        if (log.caller) {
          line += `${line === "" ? "" : " "}<${prettifiers.caller ? prettifiers.caller(log.caller) : log.caller}>`;
        }
        if (line === "") {
          return void 0;
        } else {
          return line;
        }
      }
      function prettifyObject({
        input,
        ident = "    ",
        eol = "\n",
        skipKeys = [],
        customPrettifiers = {},
        errorLikeKeys = ERROR_LIKE_KEYS,
        excludeLoggerKeys = true,
        singleLine = false,
        colorizer = defaultColorizer
      }) {
        const keysToIgnore = [].concat(skipKeys);
        if (excludeLoggerKeys === true)
          Array.prototype.push.apply(keysToIgnore, LOGGER_KEYS);
        let result = "";
        const { plain, errors } = Object.entries(input).reduce(({ plain: plain2, errors: errors2 }, [k, v]) => {
          if (keysToIgnore.includes(k) === false) {
            const pretty = typeof customPrettifiers[k] === "function" ? customPrettifiers[k](v, k, input) : v;
            if (errorLikeKeys.includes(k)) {
              errors2[k] = pretty;
            } else {
              plain2[k] = pretty;
            }
          }
          return { plain: plain2, errors: errors2 };
        }, { plain: {}, errors: {} });
        if (singleLine) {
          if (Object.keys(plain).length > 0) {
            result += colorizer.greyMessage(stringifySafe(plain));
          }
          result += eol;
        } else {
          Object.entries(plain).forEach(([keyName, keyValue]) => {
            const lines = typeof customPrettifiers[keyName] === "function" ? keyValue : stringifySafe(keyValue, null, 2);
            if (lines === void 0)
              return;
            const joinedLines = joinLinesWithIndentation({ input: lines, ident, eol });
            result += `${ident}${keyName}:${joinedLines.startsWith(eol) ? "" : " "}${joinedLines}${eol}`;
          });
        }
        Object.entries(errors).forEach(([keyName, keyValue]) => {
          const lines = typeof customPrettifiers[keyName] === "function" ? keyValue : stringifySafe(keyValue, null, 2);
          if (lines === void 0)
            return;
          result += prettifyError({ keyName, lines, eol, ident });
        });
        return result;
      }
      function prettifyTime({ log, timestampKey = TIMESTAMP_KEY, translateFormat = void 0, prettifier }) {
        let time = null;
        if (timestampKey in log) {
          time = log[timestampKey];
        } else if ("timestamp" in log) {
          time = log.timestamp;
        }
        if (time === null)
          return void 0;
        const output = translateFormat ? formatTime(time, translateFormat) : time;
        return prettifier ? prettifier(output) : `[${output}]`;
      }
      function prettifyError({ keyName, lines, eol, ident }) {
        let result = "";
        const joinedLines = joinLinesWithIndentation({ input: lines, ident, eol });
        const splitLines = `${ident}${keyName}: ${joinedLines}${eol}`.split(eol);
        for (let j = 0; j < splitLines.length; j += 1) {
          if (j !== 0)
            result += eol;
          const line = splitLines[j];
          if (/^\s*"stack"/.test(line)) {
            const matches = /^(\s*"stack":)\s*(".*"),?$/.exec(line);
            if (matches && matches.length === 3) {
              const indentSize = /^\s*/.exec(line)[0].length + 4;
              const indentation = " ".repeat(indentSize);
              const stackMessage = matches[2];
              result += matches[1] + eol + indentation + JSON.parse(stackMessage).replace(/\n/g, eol + indentation);
            } else {
              result += line;
            }
          } else {
            result += line;
          }
        }
        return result;
      }
      function splitIgnoreKey(key) {
        const result = [];
        let backslash = false;
        let segment = "";
        for (let i = 0; i < key.length; i++) {
          const c = key.charAt(i);
          if (c === "\\") {
            backslash = true;
            continue;
          }
          if (backslash) {
            backslash = false;
            segment += c;
            continue;
          }
          if (c === ".") {
            result.push(segment);
            segment = "";
            continue;
          }
          segment += c;
        }
        if (segment.length) {
          result.push(segment);
        }
        return result;
      }
      function deleteLogProperty(log, property) {
        const props = splitIgnoreKey(property);
        const propToDelete = props.pop();
        props.forEach((prop) => {
          if (!Object.prototype.hasOwnProperty.call(log, prop)) {
            return;
          }
          log = log[prop];
        });
        delete log[propToDelete];
      }
      function filterLog(log, ignoreKeys) {
        const logCopy = clone(log);
        ignoreKeys.forEach((ignoreKey) => {
          deleteLogProperty(logCopy, ignoreKey);
        });
        return logCopy;
      }
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/pino-pretty-npm-7.5.1-a196571df1-4187449720.zip/node_modules/pino-pretty/index.js
  var require_pino_pretty = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/pino-pretty-npm-7.5.1-a196571df1-4187449720.zip/node_modules/pino-pretty/index.js"(exports, module) {
      "use strict";
      var { isColorSupported } = require_colorette();
      var pump = require_pump();
      var { Transform } = require_readable();
      var abstractTransport = require_pino_abstract_transport();
      var sonic = require_sonic_boom();
      var sjs = require_secure_json_parse();
      var colors = require_colors();
      var { ERROR_LIKE_KEYS, MESSAGE_KEY, TIMESTAMP_KEY, LEVEL_KEY, LEVEL_NAMES } = require_constants();
      var {
        isObject,
        prettifyErrorLog,
        prettifyLevel,
        prettifyMessage,
        prettifyMetadata,
        prettifyObject,
        prettifyTime,
        filterLog
      } = require_utils();
      var jsonParser = (input) => {
        try {
          return { value: sjs.parse(input, { protoAction: "remove" }) };
        } catch (err) {
          return { err };
        }
      };
      var defaultOptions = {
        colorize: isColorSupported,
        crlf: false,
        errorLikeObjectKeys: ERROR_LIKE_KEYS,
        errorProps: "",
        customLevels: null,
        customColors: null,
        levelFirst: false,
        messageKey: MESSAGE_KEY,
        messageFormat: false,
        timestampKey: TIMESTAMP_KEY,
        translateTime: false,
        useMetadata: false,
        outputStream: process.stdout,
        customPrettifiers: {},
        hideObject: false,
        singleLine: false
      };
      function prettyFactory(options) {
        const opts = Object.assign({}, defaultOptions, options);
        const EOL = opts.crlf ? "\r\n" : "\n";
        const IDENT = "    ";
        const messageKey = opts.messageKey;
        const levelKey = opts.levelKey;
        const levelLabel = opts.levelLabel;
        const minimumLevel = opts.minimumLevel;
        const messageFormat = opts.messageFormat;
        const timestampKey = opts.timestampKey;
        const errorLikeObjectKeys = opts.errorLikeObjectKeys;
        const errorProps = opts.errorProps.split(",");
        const customLevels = opts.customLevels ? opts.customLevels.split(",").reduce((agg, value, idx) => {
          const [levelName, levelIdx = idx] = value.split(":");
          agg[levelIdx] = levelName.toUpperCase();
          return agg;
        }, { default: "USERLVL" }) : void 0;
        const customLevelNames = opts.customLevels ? opts.customLevels.split(",").reduce((agg, value, idx) => {
          const [levelName, levelIdx = idx] = value.split(":");
          agg[levelName] = levelIdx;
          return agg;
        }, {}) : void 0;
        const customColors = opts.customColors ? opts.customColors.split(",").reduce((agg, value) => {
          const [level, color] = value.split(":");
          const levelNum = customLevelNames !== void 0 ? customLevelNames[level] : LEVEL_NAMES[level];
          const colorIdx = levelNum !== void 0 ? levelNum : level;
          agg.push([colorIdx, color]);
          return agg;
        }, []) : void 0;
        const customPrettifiers = opts.customPrettifiers;
        const ignoreKeys = opts.ignore ? new Set(opts.ignore.split(",")) : void 0;
        const hideObject = opts.hideObject;
        const singleLine = opts.singleLine;
        const colorizer = colors(opts.colorize, customColors);
        return pretty;
        function pretty(inputData) {
          let log;
          if (!isObject(inputData)) {
            const parsed = jsonParser(inputData);
            if (parsed.err || !isObject(parsed.value)) {
              return inputData + EOL;
            }
            log = parsed.value;
          } else {
            log = inputData;
          }
          if (minimumLevel) {
            const minimum = (customLevelNames === void 0 ? LEVEL_NAMES[minimumLevel] : customLevelNames[minimumLevel]) || Number(minimumLevel);
            const level = log[levelKey === void 0 ? LEVEL_KEY : levelKey];
            if (level < minimum)
              return;
          }
          const prettifiedMessage = prettifyMessage({ log, messageKey, colorizer, messageFormat, levelLabel });
          if (ignoreKeys) {
            log = filterLog(log, ignoreKeys);
          }
          const prettifiedLevel = prettifyLevel({ log, colorizer, levelKey, prettifier: customPrettifiers.level, customLevels, customLevelNames });
          const prettifiedMetadata = prettifyMetadata({ log, prettifiers: customPrettifiers });
          const prettifiedTime = prettifyTime({ log, translateFormat: opts.translateTime, timestampKey, prettifier: customPrettifiers.time });
          let line = "";
          if (opts.levelFirst && prettifiedLevel) {
            line = `${prettifiedLevel}`;
          }
          if (prettifiedTime && line === "") {
            line = `${prettifiedTime}`;
          } else if (prettifiedTime) {
            line = `${line} ${prettifiedTime}`;
          }
          if (!opts.levelFirst && prettifiedLevel) {
            if (line.length > 0) {
              line = `${line} ${prettifiedLevel}`;
            } else {
              line = prettifiedLevel;
            }
          }
          if (prettifiedMetadata) {
            if (line.length > 0) {
              line = `${line} ${prettifiedMetadata}:`;
            } else {
              line = prettifiedMetadata;
            }
          }
          if (line.endsWith(":") === false && line !== "") {
            line += ":";
          }
          if (prettifiedMessage) {
            if (line.length > 0) {
              line = `${line} ${prettifiedMessage}`;
            } else {
              line = prettifiedMessage;
            }
          }
          if (line.length > 0 && !singleLine) {
            line += EOL;
          }
          if (log.type === "Error" && log.stack) {
            const prettifiedErrorLog = prettifyErrorLog({
              log,
              errorLikeKeys: errorLikeObjectKeys,
              errorProperties: errorProps,
              ident: IDENT,
              eol: EOL
            });
            if (singleLine)
              line += EOL;
            line += prettifiedErrorLog;
          } else if (!hideObject) {
            const skipKeys = [messageKey, levelKey, timestampKey].filter((key) => typeof log[key] === "string" || typeof log[key] === "number");
            const prettifiedObject = prettifyObject({
              input: log,
              skipKeys,
              customPrettifiers,
              errorLikeKeys: errorLikeObjectKeys,
              eol: EOL,
              ident: IDENT,
              singleLine,
              colorizer
            });
            if (singleLine && !/^\s$/.test(prettifiedObject)) {
              line += " ";
            }
            line += prettifiedObject;
          }
          return line;
        }
      }
      function build(opts = {}) {
        const pretty = prettyFactory(opts);
        return abstractTransport(function(source) {
          const stream = new Transform({
            objectMode: true,
            autoDestroy: true,
            transform(chunk, enc, cb) {
              const line = pretty(chunk);
              cb(null, line);
            }
          });
          let destination;
          if (typeof opts.destination === "object" && typeof opts.destination.write === "function") {
            destination = opts.destination;
          } else {
            destination = sonic({
              dest: opts.destination || 1,
              append: opts.append,
              mkdir: opts.mkdir,
              sync: opts.sync
            });
          }
          source.on("unknown", function(line) {
            destination.write(line + "\n");
          });
          pump(source, stream, destination);
          return stream;
        }, { parse: "lines" });
      }
      module.exports = build;
      module.exports.prettyFactory = prettyFactory;
      module.exports.colorizerFactory = colors;
      module.exports.default = build;
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/unplugged/pino-npm-7.6.5-9eaea6e55b/node_modules/pino/lib/tools.js
  var require_tools = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/unplugged/pino-npm-7.6.5-9eaea6e55b/node_modules/pino/lib/tools.js"(exports, module) {
      "use strict";
      var format = require_quick_format_unescaped();
      var { mapHttpRequest, mapHttpResponse } = require_pino_std_serializers();
      var SonicBoom = require_sonic_boom();
      var warning = require_deprecations();
      var {
        lsCacheSym,
        chindingsSym,
        parsedChindingsSym,
        writeSym,
        serializersSym,
        formatOptsSym,
        endSym,
        stringifiersSym,
        stringifySym,
        stringifySafeSym,
        wildcardFirstSym,
        needsMetadataGsym,
        redactFmtSym,
        streamSym,
        nestedKeySym,
        formattersSym,
        messageKeySym,
        nestedKeyStrSym
      } = require_symbols();
      var { isMainThread } = __require("worker_threads");
      var transport = require_transport();
      function noop() {
      }
      function genLog(level, hook) {
        if (!hook)
          return LOG;
        return function hookWrappedLog(...args) {
          hook.call(this, args, LOG, level);
        };
        function LOG(o, ...n) {
          if (typeof o === "object") {
            let msg = o;
            if (o !== null) {
              if (o.method && o.headers && o.socket) {
                o = mapHttpRequest(o);
              } else if (typeof o.setHeader === "function") {
                o = mapHttpResponse(o);
              }
            }
            let formatParams;
            if (msg === null && n.length === 0) {
              formatParams = [null];
            } else {
              msg = n.shift();
              formatParams = n;
            }
            this[writeSym](o, format(msg, formatParams, this[formatOptsSym]), level);
          } else {
            this[writeSym](null, format(o, n, this[formatOptsSym]), level);
          }
        }
      }
      function asString(str) {
        let result = "";
        let last = 0;
        let found = false;
        let point = 255;
        const l = str.length;
        if (l > 100) {
          return JSON.stringify(str);
        }
        for (var i = 0; i < l && point >= 32; i++) {
          point = str.charCodeAt(i);
          if (point === 34 || point === 92) {
            result += str.slice(last, i) + "\\";
            last = i;
            found = true;
          }
        }
        if (!found) {
          result = str;
        } else {
          result += str.slice(last);
        }
        return point < 32 ? JSON.stringify(str) : '"' + result + '"';
      }
      function asJson(obj, msg, num, time) {
        const stringify2 = this[stringifySym];
        const stringifySafe = this[stringifySafeSym];
        const stringifiers = this[stringifiersSym];
        const end = this[endSym];
        const chindings = this[chindingsSym];
        const serializers = this[serializersSym];
        const formatters = this[formattersSym];
        const messageKey = this[messageKeySym];
        let data = this[lsCacheSym][num] + time;
        data = data + chindings;
        let value;
        const notHasOwnProperty = obj.hasOwnProperty === void 0;
        if (formatters.log) {
          obj = formatters.log(obj);
        }
        const wildcardStringifier = stringifiers[wildcardFirstSym];
        let propStr = "";
        for (const key in obj) {
          value = obj[key];
          if ((notHasOwnProperty || obj.hasOwnProperty(key)) && value !== void 0) {
            value = serializers[key] ? serializers[key](value) : value;
            const stringifier = stringifiers[key] || wildcardStringifier;
            switch (typeof value) {
              case "undefined":
              case "function":
                continue;
              case "number":
                if (Number.isFinite(value) === false) {
                  value = null;
                }
              case "boolean":
                if (stringifier)
                  value = stringifier(value);
                break;
              case "string":
                value = (stringifier || asString)(value);
                break;
              default:
                value = (stringifier || stringify2)(value, stringifySafe);
            }
            if (value === void 0)
              continue;
            propStr += ',"' + key + '":' + value;
          }
        }
        let msgStr = "";
        if (msg !== void 0) {
          value = serializers[messageKey] ? serializers[messageKey](msg) : msg;
          const stringifier = stringifiers[messageKey] || wildcardStringifier;
          switch (typeof value) {
            case "function":
              break;
            case "number":
              if (Number.isFinite(value) === false) {
                value = null;
              }
            case "boolean":
              if (stringifier)
                value = stringifier(value);
              msgStr = ',"' + messageKey + '":' + value;
              break;
            case "string":
              value = (stringifier || asString)(value);
              msgStr = ',"' + messageKey + '":' + value;
              break;
            default:
              value = (stringifier || stringify2)(value, stringifySafe);
              msgStr = ',"' + messageKey + '":' + value;
          }
        }
        if (this[nestedKeySym] && propStr) {
          return data + this[nestedKeyStrSym] + propStr.slice(1) + "}" + msgStr + end;
        } else {
          return data + propStr + msgStr + end;
        }
      }
      function asChindings(instance, bindings) {
        let value;
        let data = instance[chindingsSym];
        const stringify2 = instance[stringifySym];
        const stringifySafe = instance[stringifySafeSym];
        const stringifiers = instance[stringifiersSym];
        const wildcardStringifier = stringifiers[wildcardFirstSym];
        const serializers = instance[serializersSym];
        const formatter = instance[formattersSym].bindings;
        bindings = formatter(bindings);
        for (const key in bindings) {
          value = bindings[key];
          const valid = key !== "level" && key !== "serializers" && key !== "formatters" && key !== "customLevels" && bindings.hasOwnProperty(key) && value !== void 0;
          if (valid === true) {
            value = serializers[key] ? serializers[key](value) : value;
            value = (stringifiers[key] || wildcardStringifier || stringify2)(value, stringifySafe);
            if (value === void 0)
              continue;
            data += ',"' + key + '":' + value;
          }
        }
        return data;
      }
      function getPrettyStream(opts, prettifier, dest, instance) {
        if (prettifier && typeof prettifier === "function") {
          prettifier = prettifier.bind(instance);
          return prettifierMetaWrapper(prettifier(opts), dest, opts);
        }
        try {
          const prettyFactory = require_pino_pretty().prettyFactory;
          prettyFactory.asMetaWrapper = prettifierMetaWrapper;
          return prettifierMetaWrapper(prettyFactory(opts), dest, opts);
        } catch (e) {
          if (e.message.startsWith("Cannot find module 'pino-pretty'")) {
            throw Error("Missing `pino-pretty` module: `pino-pretty` must be installed separately");
          }
          ;
          throw e;
        }
      }
      function prettifierMetaWrapper(pretty, dest, opts) {
        opts = Object.assign({ suppressFlushSyncWarning: false }, opts);
        let warned = false;
        return {
          [needsMetadataGsym]: true,
          lastLevel: 0,
          lastMsg: null,
          lastObj: null,
          lastLogger: null,
          flushSync() {
            if (opts.suppressFlushSyncWarning || warned) {
              return;
            }
            warned = true;
            setMetadataProps(dest, this);
            dest.write(pretty(Object.assign({
              level: 40,
              msg: "pino.final with prettyPrint does not support flushing",
              time: Date.now()
            }, this.chindings())));
          },
          chindings() {
            const lastLogger = this.lastLogger;
            let chindings = null;
            if (!lastLogger) {
              return null;
            }
            if (lastLogger.hasOwnProperty(parsedChindingsSym)) {
              chindings = lastLogger[parsedChindingsSym];
            } else {
              chindings = JSON.parse("{" + lastLogger[chindingsSym].substr(1) + "}");
              lastLogger[parsedChindingsSym] = chindings;
            }
            return chindings;
          },
          write(chunk) {
            const lastLogger = this.lastLogger;
            const chindings = this.chindings();
            let time = this.lastTime;
            if (typeof time === "number") {
            } else if (time.match(/^\d+/)) {
              time = parseInt(time);
            } else {
              time = time.slice(1, -1);
            }
            const lastObj = this.lastObj;
            const lastMsg = this.lastMsg;
            const errorProps = null;
            const formatters = lastLogger[formattersSym];
            const formattedObj = formatters.log ? formatters.log(lastObj) : lastObj;
            const messageKey = lastLogger[messageKeySym];
            if (lastMsg && formattedObj && !formattedObj.hasOwnProperty(messageKey)) {
              formattedObj[messageKey] = lastMsg;
            }
            const obj = Object.assign({
              level: this.lastLevel,
              time
            }, formattedObj, errorProps);
            const serializers = lastLogger[serializersSym];
            const keys = Object.keys(serializers);
            for (var i = 0; i < keys.length; i++) {
              const key = keys[i];
              if (obj[key] !== void 0) {
                obj[key] = serializers[key](obj[key]);
              }
            }
            for (const key in chindings) {
              if (!obj.hasOwnProperty(key)) {
                obj[key] = chindings[key];
              }
            }
            const stringifiers = lastLogger[stringifiersSym];
            const redact = stringifiers[redactFmtSym];
            const formatted = pretty(typeof redact === "function" ? redact(obj) : obj);
            if (formatted === void 0)
              return;
            setMetadataProps(dest, this);
            dest.write(formatted);
          }
        };
      }
      function hasBeenTampered(stream) {
        return stream.write !== stream.constructor.prototype.write;
      }
      function buildSafeSonicBoom(opts) {
        const stream = new SonicBoom(opts);
        stream.on("error", filterBrokenPipe);
        if (!opts.sync && isMainThread) {
          setupOnExit(stream);
        }
        return stream;
        function filterBrokenPipe(err) {
          if (err.code === "EPIPE") {
            stream.write = noop;
            stream.end = noop;
            stream.flushSync = noop;
            stream.destroy = noop;
            return;
          }
          stream.removeListener("error", filterBrokenPipe);
          stream.emit("error", err);
        }
      }
      function setupOnExit(stream) {
        if (global.WeakRef && global.WeakMap && global.FinalizationRegistry) {
          const onExit = require_on_exit_leak_free();
          onExit.register(stream, autoEnd);
          stream.on("close", function() {
            onExit.unregister(stream);
          });
        }
      }
      function autoEnd(stream, eventName) {
        if (stream.destroyed) {
          return;
        }
        if (eventName === "beforeExit") {
          stream.flush();
          stream.on("drain", function() {
            stream.end();
          });
        } else {
          stream.flushSync();
        }
      }
      function createArgsNormalizer(defaultOptions) {
        return function normalizeArgs(instance, caller, opts = {}, stream) {
          if (typeof opts === "string") {
            stream = buildSafeSonicBoom({ dest: opts, sync: true });
            opts = {};
          } else if (typeof stream === "string") {
            if (opts && opts.transport) {
              throw Error("only one of option.transport or stream can be specified");
            }
            stream = buildSafeSonicBoom({ dest: stream, sync: true });
          } else if (opts instanceof SonicBoom || opts.writable || opts._writableState) {
            stream = opts;
            opts = {};
          } else if (opts.transport) {
            if (opts.transport instanceof SonicBoom || opts.transport.writable || opts.transport._writableState) {
              throw Error("option.transport do not allow stream, please pass to option directly. e.g. pino(transport)");
            }
            stream = transport({ caller, ...opts.transport });
          }
          opts = Object.assign({}, defaultOptions, opts);
          opts.serializers = Object.assign({}, defaultOptions.serializers, opts.serializers);
          opts.formatters = Object.assign({}, defaultOptions.formatters, opts.formatters);
          if ("onTerminated" in opts) {
            throw Error("The onTerminated option has been removed, use pino.final instead");
          }
          if ("changeLevelName" in opts) {
            process.emitWarning("The changeLevelName option is deprecated and will be removed in v7. Use levelKey instead.", { code: "changeLevelName_deprecation" });
            opts.levelKey = opts.changeLevelName;
            delete opts.changeLevelName;
          }
          const { enabled, prettyPrint, prettifier, messageKey } = opts;
          if (enabled === false)
            opts.level = "silent";
          stream = stream || process.stdout;
          if (stream === process.stdout && stream.fd >= 0 && !hasBeenTampered(stream)) {
            stream = buildSafeSonicBoom({ fd: stream.fd, sync: true });
          }
          if (prettyPrint) {
            warning.emit("PINODEP008");
            const prettyOpts = Object.assign({ messageKey }, prettyPrint);
            stream = getPrettyStream(prettyOpts, prettifier, stream, instance);
          }
          return { opts, stream };
        };
      }
      function final(logger2, handler) {
        const major = Number(process.versions.node.split(".")[0]);
        if (major >= 14)
          warning.emit("PINODEP009");
        if (typeof logger2 === "undefined" || typeof logger2.child !== "function") {
          throw Error("expected a pino logger instance");
        }
        const hasHandler = typeof handler !== "undefined";
        if (hasHandler && typeof handler !== "function") {
          throw Error("if supplied, the handler parameter should be a function");
        }
        const stream = logger2[streamSym];
        if (typeof stream.flushSync !== "function") {
          throw Error("final requires a stream that has a flushSync method, such as pino.destination");
        }
        const finalLogger = new Proxy(logger2, {
          get: (logger3, key) => {
            if (key in logger3.levels.values) {
              return (...args) => {
                logger3[key](...args);
                stream.flushSync();
              };
            }
            return logger3[key];
          }
        });
        if (!hasHandler) {
          try {
            stream.flushSync();
          } catch {
          }
          return finalLogger;
        }
        return (err = null, ...args) => {
          try {
            stream.flushSync();
          } catch (e) {
          }
          return handler(err, finalLogger, ...args);
        };
      }
      function stringify(obj, stringifySafeFn) {
        try {
          return JSON.stringify(obj);
        } catch (_) {
          try {
            const stringify2 = stringifySafeFn || this[stringifySafeSym];
            return stringify2(obj);
          } catch (_2) {
            return '"[unable to serialize, circular reference is too complex to analyze]"';
          }
        }
      }
      function buildFormatters(level, bindings, log) {
        return {
          level,
          bindings,
          log
        };
      }
      function setMetadataProps(dest, that) {
        if (dest[needsMetadataGsym] === true) {
          dest.lastLevel = that.lastLevel;
          dest.lastMsg = that.lastMsg;
          dest.lastObj = that.lastObj;
          dest.lastTime = that.lastTime;
          dest.lastLogger = that.lastLogger;
        }
      }
      function normalizeDestFileDescriptor(destination) {
        const fd = Number(destination);
        if (typeof destination === "string" && Number.isFinite(fd)) {
          return fd;
        }
        return destination;
      }
      module.exports = {
        noop,
        buildSafeSonicBoom,
        getPrettyStream,
        asChindings,
        asJson,
        genLog,
        createArgsNormalizer,
        final,
        stringify,
        buildFormatters,
        normalizeDestFileDescriptor
      };
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/unplugged/pino-npm-7.6.5-9eaea6e55b/node_modules/pino/lib/levels.js
  var require_levels = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/unplugged/pino-npm-7.6.5-9eaea6e55b/node_modules/pino/lib/levels.js"(exports, module) {
      "use strict";
      var {
        lsCacheSym,
        levelValSym,
        useOnlyCustomLevelsSym,
        streamSym,
        formattersSym,
        hooksSym
      } = require_symbols();
      var { noop, genLog } = require_tools();
      var levels = {
        trace: 10,
        debug: 20,
        info: 30,
        warn: 40,
        error: 50,
        fatal: 60
      };
      var levelMethods = {
        fatal: (hook) => {
          const logFatal = genLog(levels.fatal, hook);
          return function(...args) {
            const stream = this[streamSym];
            logFatal.call(this, ...args);
            if (typeof stream.flushSync === "function") {
              try {
                stream.flushSync();
              } catch (e) {
              }
            }
          };
        },
        error: (hook) => genLog(levels.error, hook),
        warn: (hook) => genLog(levels.warn, hook),
        info: (hook) => genLog(levels.info, hook),
        debug: (hook) => genLog(levels.debug, hook),
        trace: (hook) => genLog(levels.trace, hook)
      };
      var nums = Object.keys(levels).reduce((o, k) => {
        o[levels[k]] = k;
        return o;
      }, {});
      var initialLsCache = Object.keys(nums).reduce((o, k) => {
        o[k] = '{"level":' + Number(k);
        return o;
      }, {});
      function genLsCache(instance) {
        const formatter = instance[formattersSym].level;
        const { labels } = instance.levels;
        const cache = {};
        for (const label in labels) {
          const level = formatter(labels[label], Number(label));
          cache[label] = JSON.stringify(level).slice(0, -1);
        }
        instance[lsCacheSym] = cache;
        return instance;
      }
      function isStandardLevel(level, useOnlyCustomLevels) {
        if (useOnlyCustomLevels) {
          return false;
        }
        switch (level) {
          case "fatal":
          case "error":
          case "warn":
          case "info":
          case "debug":
          case "trace":
            return true;
          default:
            return false;
        }
      }
      function setLevel(level) {
        const { labels, values } = this.levels;
        if (typeof level === "number") {
          if (labels[level] === void 0)
            throw Error("unknown level value" + level);
          level = labels[level];
        }
        if (values[level] === void 0)
          throw Error("unknown level " + level);
        const preLevelVal = this[levelValSym];
        const levelVal = this[levelValSym] = values[level];
        const useOnlyCustomLevelsVal = this[useOnlyCustomLevelsSym];
        const hook = this[hooksSym].logMethod;
        for (const key in values) {
          if (levelVal > values[key]) {
            this[key] = noop;
            continue;
          }
          this[key] = isStandardLevel(key, useOnlyCustomLevelsVal) ? levelMethods[key](hook) : genLog(values[key], hook);
        }
        this.emit("level-change", level, levelVal, labels[preLevelVal], preLevelVal);
      }
      function getLevel(level) {
        const { levels: levels2, levelVal } = this;
        return levels2 && levels2.labels ? levels2.labels[levelVal] : "";
      }
      function isLevelEnabled(logLevel) {
        const { values } = this.levels;
        const logLevelVal = values[logLevel];
        return logLevelVal !== void 0 && logLevelVal >= this[levelValSym];
      }
      function mappings(customLevels = null, useOnlyCustomLevels = false) {
        const customNums = customLevels ? Object.keys(customLevels).reduce((o, k) => {
          o[customLevels[k]] = k;
          return o;
        }, {}) : null;
        const labels = Object.assign(Object.create(Object.prototype, { Infinity: { value: "silent" } }), useOnlyCustomLevels ? null : nums, customNums);
        const values = Object.assign(Object.create(Object.prototype, { silent: { value: Infinity } }), useOnlyCustomLevels ? null : levels, customLevels);
        return { labels, values };
      }
      function assertDefaultLevelFound(defaultLevel, customLevels, useOnlyCustomLevels) {
        if (typeof defaultLevel === "number") {
          const values = [].concat(Object.keys(customLevels || {}).map((key) => customLevels[key]), useOnlyCustomLevels ? [] : Object.keys(nums).map((level) => +level), Infinity);
          if (!values.includes(defaultLevel)) {
            throw Error(`default level:${defaultLevel} must be included in custom levels`);
          }
          return;
        }
        const labels = Object.assign(Object.create(Object.prototype, { silent: { value: Infinity } }), useOnlyCustomLevels ? null : levels, customLevels);
        if (!(defaultLevel in labels)) {
          throw Error(`default level:${defaultLevel} must be included in custom levels`);
        }
      }
      function assertNoLevelCollisions(levels2, customLevels) {
        const { labels, values } = levels2;
        for (const k in customLevels) {
          if (k in values) {
            throw Error("levels cannot be overridden");
          }
          if (customLevels[k] in labels) {
            throw Error("pre-existing level values cannot be used for new levels");
          }
        }
      }
      module.exports = {
        initialLsCache,
        genLsCache,
        levelMethods,
        getLevel,
        setLevel,
        isLevelEnabled,
        mappings,
        levels,
        assertNoLevelCollisions,
        assertDefaultLevelFound
      };
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/unplugged/pino-npm-7.6.5-9eaea6e55b/node_modules/pino/package.json
  var require_package = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/unplugged/pino-npm-7.6.5-9eaea6e55b/node_modules/pino/package.json"(exports, module) {
      module.exports = {
        name: "pino",
        version: "7.6.5",
        description: "super fast, all natural json logger",
        main: "pino.js",
        type: "commonjs",
        types: "pino.d.ts",
        browser: "./browser.js",
        files: [
          "pino.js",
          "file.js",
          "pino.d.ts",
          "bin.js",
          "browser.js",
          "pretty.js",
          "usage.txt",
          "test",
          "docs",
          "example.js",
          "lib"
        ],
        scripts: {
          docs: "docsify serve",
          "browser-test": "airtap --local 8080 test/browser*test.js",
          lint: "eslint .",
          test: "npm run lint && tap test/*test.js test/*/*test.js && jest test/jest && npm run test-types",
          "test-ci": "npm run lint && tap --no-check-coverage test/*test.js test/*/*test.js --coverage-report=lcovonly && npm run test-types",
          "test-ci-pnpm": "pnpm run lint && tap --no-coverage --no-check-coverage test/*test.js test/*/*test.js && pnpm run test-types",
          "test-ci-yarn-pnp": "yarn run lint && tap --no-check-coverage test/*test.js test/*/*test.js --coverage-report=lcovonly",
          "test-types": "tsc && tsd && ts-node test/types/pino.ts",
          "cov-ui": "tap --coverage-report=html test/*test.js test/*/*test.js",
          bench: "node benchmarks/utils/runbench all",
          "bench-basic": "node benchmarks/utils/runbench basic",
          "bench-object": "node benchmarks/utils/runbench object",
          "bench-deep-object": "node benchmarks/utils/runbench deep-object",
          "bench-multi-arg": "node benchmarks/utils/runbench multi-arg",
          "bench-longs-tring": "node benchmarks/utils/runbench long-string",
          "bench-child": "node benchmarks/utils/runbench child",
          "bench-child-child": "node benchmarks/utils/runbench child-child",
          "bench-child-creation": "node benchmarks/utils/runbench child-creation",
          "bench-formatters": "node benchmarks/utils/runbench formatters",
          "update-bench-doc": "node benchmarks/utils/generate-benchmark-doc > docs/benchmarks.md"
        },
        bin: {
          pino: "./bin.js"
        },
        precommit: "test",
        repository: {
          type: "git",
          url: "git+https://github.com/pinojs/pino.git"
        },
        keywords: [
          "fast",
          "logger",
          "stream",
          "json"
        ],
        author: "Matteo Collina <hello@matteocollina.com>",
        contributors: [
          "David Mark Clements <huperekchuno@googlemail.com>",
          "James Sumners <james.sumners@gmail.com>",
          "Thomas Watson Steen <w@tson.dk> (https://twitter.com/wa7son)"
        ],
        license: "MIT",
        bugs: {
          url: "https://github.com/pinojs/pino/issues"
        },
        homepage: "http://getpino.io",
        devDependencies: {
          "@types/node": "^17.0.0",
          airtap: "4.0.4",
          benchmark: "^2.1.4",
          bole: "^4.0.0",
          bunyan: "^1.8.14",
          "docsify-cli": "^4.4.1",
          eslint: "^7.17.0",
          "eslint-config-standard": "^16.0.3",
          "eslint-plugin-import": "^2.22.1",
          "eslint-plugin-node": "^11.1.0",
          "eslint-plugin-promise": "^5.1.0",
          execa: "^5.0.0",
          fastbench: "^1.0.1",
          "flush-write-stream": "^2.0.0",
          "import-fresh": "^3.2.1",
          jest: "^27.3.1",
          log: "^6.0.0",
          loglevel: "^1.6.7",
          "pino-pretty": "^v7.5.1",
          "pre-commit": "^1.2.2",
          proxyquire: "^2.1.3",
          pump: "^3.0.0",
          semver: "^7.0.0",
          split2: "^4.0.0",
          steed: "^1.1.3",
          "strip-ansi": "^6.0.0",
          tap: "^15.0.1",
          tape: "^5.0.0",
          through2: "^4.0.0",
          "ts-node": "^10.3.0",
          tsd: "^0.19.0",
          typescript: "^4.4.4",
          winston: "^3.3.3"
        },
        dependencies: {
          "fast-redact": "^3.0.0",
          "process-warning": "^1.0.0",
          "on-exit-leak-free": "^0.2.0",
          "pino-abstract-transport": "v0.5.0",
          "pino-std-serializers": "^4.0.0",
          "quick-format-unescaped": "^4.0.3",
          "real-require": "^0.1.0",
          "safe-stable-stringify": "^2.1.0",
          "sonic-boom": "^2.2.1",
          "thread-stream": "^0.13.0"
        },
        tsd: {
          directory: "test/types"
        }
      };
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/unplugged/pino-npm-7.6.5-9eaea6e55b/node_modules/pino/lib/meta.js
  var require_meta = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/unplugged/pino-npm-7.6.5-9eaea6e55b/node_modules/pino/lib/meta.js"(exports, module) {
      "use strict";
      var { version } = require_package();
      module.exports = { version };
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/unplugged/pino-npm-7.6.5-9eaea6e55b/node_modules/pino/lib/proto.js
  var require_proto = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/unplugged/pino-npm-7.6.5-9eaea6e55b/node_modules/pino/lib/proto.js"(exports, module) {
      "use strict";
      var { EventEmitter } = __require("events");
      var {
        lsCacheSym,
        levelValSym,
        setLevelSym,
        getLevelSym,
        chindingsSym,
        parsedChindingsSym,
        mixinSym,
        asJsonSym,
        writeSym,
        timeSym,
        timeSliceIndexSym,
        streamSym,
        serializersSym,
        formattersSym,
        useOnlyCustomLevelsSym,
        needsMetadataGsym,
        redactFmtSym,
        stringifySym,
        formatOptsSym,
        stringifiersSym
      } = require_symbols();
      var {
        getLevel,
        setLevel,
        isLevelEnabled,
        mappings,
        initialLsCache,
        genLsCache,
        assertNoLevelCollisions
      } = require_levels();
      var {
        asChindings,
        asJson,
        buildFormatters,
        stringify
      } = require_tools();
      var {
        version
      } = require_meta();
      var redaction = require_redaction();
      var constructor = class Pino {
      };
      var prototype = {
        constructor,
        child,
        bindings,
        setBindings,
        flush,
        isLevelEnabled,
        version,
        get level() {
          return this[getLevelSym]();
        },
        set level(lvl) {
          this[setLevelSym](lvl);
        },
        get levelVal() {
          return this[levelValSym];
        },
        set levelVal(n) {
          throw Error("levelVal is read-only");
        },
        [lsCacheSym]: initialLsCache,
        [writeSym]: write,
        [asJsonSym]: asJson,
        [getLevelSym]: getLevel,
        [setLevelSym]: setLevel
      };
      Object.setPrototypeOf(prototype, EventEmitter.prototype);
      module.exports = function() {
        return Object.create(prototype);
      };
      var resetChildingsFormatter = (bindings2) => bindings2;
      function child(bindings2, options) {
        if (!bindings2) {
          throw Error("missing bindings for child Pino");
        }
        options = options || {};
        const serializers = this[serializersSym];
        const formatters = this[formattersSym];
        const instance = Object.create(this);
        if (options.hasOwnProperty("serializers") === true) {
          instance[serializersSym] = /* @__PURE__ */ Object.create(null);
          for (const k in serializers) {
            instance[serializersSym][k] = serializers[k];
          }
          const parentSymbols = Object.getOwnPropertySymbols(serializers);
          for (var i = 0; i < parentSymbols.length; i++) {
            const ks = parentSymbols[i];
            instance[serializersSym][ks] = serializers[ks];
          }
          for (const bk in options.serializers) {
            instance[serializersSym][bk] = options.serializers[bk];
          }
          const bindingsSymbols = Object.getOwnPropertySymbols(options.serializers);
          for (var bi = 0; bi < bindingsSymbols.length; bi++) {
            const bks = bindingsSymbols[bi];
            instance[serializersSym][bks] = options.serializers[bks];
          }
        } else
          instance[serializersSym] = serializers;
        if (options.hasOwnProperty("formatters")) {
          const { level, bindings: chindings, log } = options.formatters;
          instance[formattersSym] = buildFormatters(level || formatters.level, chindings || resetChildingsFormatter, log || formatters.log);
        } else {
          instance[formattersSym] = buildFormatters(formatters.level, resetChildingsFormatter, formatters.log);
        }
        if (options.hasOwnProperty("customLevels") === true) {
          assertNoLevelCollisions(this.levels, options.customLevels);
          instance.levels = mappings(options.customLevels, instance[useOnlyCustomLevelsSym]);
          genLsCache(instance);
        }
        if (typeof options.redact === "object" && options.redact !== null || Array.isArray(options.redact)) {
          instance.redact = options.redact;
          const stringifiers = redaction(instance.redact, stringify);
          const formatOpts = { stringify: stringifiers[redactFmtSym] };
          instance[stringifySym] = stringify;
          instance[stringifiersSym] = stringifiers;
          instance[formatOptsSym] = formatOpts;
        }
        instance[chindingsSym] = asChindings(instance, bindings2);
        const childLevel = options.level || this.level;
        instance[setLevelSym](childLevel);
        return instance;
      }
      function bindings() {
        const chindings = this[chindingsSym];
        const chindingsJson = `{${chindings.substr(1)}}`;
        const bindingsFromJson = JSON.parse(chindingsJson);
        delete bindingsFromJson.pid;
        delete bindingsFromJson.hostname;
        return bindingsFromJson;
      }
      function setBindings(newBindings) {
        const chindings = asChindings(this, newBindings);
        this[chindingsSym] = chindings;
        delete this[parsedChindingsSym];
      }
      function write(_obj, msg, num) {
        const t = this[timeSym]();
        const mixin = this[mixinSym];
        let obj;
        if (_obj === void 0 || _obj === null) {
          obj = mixin ? mixin({}) : {};
        } else if (_obj instanceof Error) {
          obj = Object.assign(mixin ? mixin({}) : {}, { err: _obj });
          if (msg === void 0) {
            msg = _obj.message;
          }
        } else {
          obj = Object.assign(mixin ? mixin({}) : {}, _obj);
          if (msg === void 0 && _obj.err) {
            msg = _obj.err.message;
          }
        }
        const s = this[asJsonSym](obj, msg, num, t);
        const stream = this[streamSym];
        if (stream[needsMetadataGsym] === true) {
          stream.lastLevel = num;
          stream.lastObj = obj;
          stream.lastMsg = msg;
          stream.lastTime = t.slice(this[timeSliceIndexSym]);
          stream.lastLogger = this;
        }
        stream.write(s);
      }
      function noop() {
      }
      function flush() {
        const stream = this[streamSym];
        if ("flush" in stream)
          stream.flush(noop);
      }
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/safe-stable-stringify-npm-2.3.1-5e1888c3a7-a0a0bad029.zip/node_modules/safe-stable-stringify/index.js
  var require_safe_stable_stringify = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/cache/safe-stable-stringify-npm-2.3.1-5e1888c3a7-a0a0bad029.zip/node_modules/safe-stable-stringify/index.js"(exports, module) {
      "use strict";
      var stringify = configure();
      stringify.configure = configure;
      stringify.stringify = stringify;
      stringify.default = stringify;
      exports.stringify = stringify;
      exports.configure = configure;
      module.exports = stringify;
      var strEscapeSequencesRegExp = /[\u0000-\u001f\u0022\u005c\ud800-\udfff]|[\ud800-\udbff](?![\udc00-\udfff])|(?:[^\ud800-\udbff]|^)[\udc00-\udfff]/;
      var strEscapeSequencesReplacer = /[\u0000-\u001f\u0022\u005c\ud800-\udfff]|[\ud800-\udbff](?![\udc00-\udfff])|(?:[^\ud800-\udbff]|^)[\udc00-\udfff]/g;
      var meta = [
        "\\u0000",
        "\\u0001",
        "\\u0002",
        "\\u0003",
        "\\u0004",
        "\\u0005",
        "\\u0006",
        "\\u0007",
        "\\b",
        "\\t",
        "\\n",
        "\\u000b",
        "\\f",
        "\\r",
        "\\u000e",
        "\\u000f",
        "\\u0010",
        "\\u0011",
        "\\u0012",
        "\\u0013",
        "\\u0014",
        "\\u0015",
        "\\u0016",
        "\\u0017",
        "\\u0018",
        "\\u0019",
        "\\u001a",
        "\\u001b",
        "\\u001c",
        "\\u001d",
        "\\u001e",
        "\\u001f",
        "",
        "",
        '\\"',
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "\\\\"
      ];
      function escapeFn(str) {
        if (str.length === 2) {
          const charCode2 = str.charCodeAt(1);
          return `${str[0]}\\u${charCode2.toString(16)}`;
        }
        const charCode = str.charCodeAt(0);
        return meta.length > charCode ? meta[charCode] : `\\u${charCode.toString(16)}`;
      }
      function strEscape(str) {
        if (str.length < 5e3 && !strEscapeSequencesRegExp.test(str)) {
          return str;
        }
        if (str.length > 100) {
          return str.replace(strEscapeSequencesReplacer, escapeFn);
        }
        let result = "";
        let last = 0;
        for (let i = 0; i < str.length; i++) {
          const point = str.charCodeAt(i);
          if (point === 34 || point === 92 || point < 32) {
            result += `${str.slice(last, i)}${meta[point]}`;
            last = i + 1;
          } else if (point >= 55296 && point <= 57343) {
            if (point <= 56319 && i + 1 < str.length) {
              const point2 = str.charCodeAt(i + 1);
              if (point2 >= 56320 && point2 <= 57343) {
                i++;
                continue;
              }
            }
            result += `${str.slice(last, i)}${`\\u${point.toString(16)}`}`;
            last = i + 1;
          }
        }
        result += str.slice(last);
        return result;
      }
      function insertSort(array) {
        if (array.length > 200) {
          return array.sort();
        }
        for (let i = 1; i < array.length; i++) {
          const currentValue = array[i];
          let position = i;
          while (position !== 0 && array[position - 1] > currentValue) {
            array[position] = array[position - 1];
            position--;
          }
          array[position] = currentValue;
        }
        return array;
      }
      var typedArrayPrototypeGetSymbolToStringTag = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Object.getPrototypeOf(new Uint8Array())), Symbol.toStringTag).get;
      function isTypedArrayWithEntries(value) {
        return typedArrayPrototypeGetSymbolToStringTag.call(value) !== void 0 && value.length !== 0;
      }
      function stringifyTypedArray(array, separator, maximumBreadth) {
        if (array.length < maximumBreadth) {
          maximumBreadth = array.length;
        }
        const whitespace = separator === "," ? "" : " ";
        let res = `"0":${whitespace}${array[0]}`;
        for (let i = 1; i < maximumBreadth; i++) {
          res += `${separator}"${i}":${whitespace}${array[i]}`;
        }
        return res;
      }
      function getCircularValueOption(options) {
        if (options && Object.prototype.hasOwnProperty.call(options, "circularValue")) {
          var circularValue = options.circularValue;
          if (typeof circularValue === "string") {
            return `"${circularValue}"`;
          }
          if (circularValue == null) {
            return circularValue;
          }
          if (circularValue === Error || circularValue === TypeError) {
            return {
              toString() {
                throw new TypeError("Converting circular structure to JSON");
              }
            };
          }
          throw new TypeError('The "circularValue" argument must be of type string or the value null or undefined');
        }
        return '"[Circular]"';
      }
      function getBooleanOption(options, key) {
        if (options && Object.prototype.hasOwnProperty.call(options, key)) {
          var value = options[key];
          if (typeof value !== "boolean") {
            throw new TypeError(`The "${key}" argument must be of type boolean`);
          }
        }
        return value === void 0 ? true : value;
      }
      function getPositiveIntegerOption(options, key) {
        if (options && Object.prototype.hasOwnProperty.call(options, key)) {
          var value = options[key];
          if (typeof value !== "number") {
            throw new TypeError(`The "${key}" argument must be of type number`);
          }
          if (!Number.isInteger(value)) {
            throw new TypeError(`The "${key}" argument must be an integer`);
          }
          if (value < 1) {
            throw new RangeError(`The "${key}" argument must be >= 1`);
          }
        }
        return value === void 0 ? Infinity : value;
      }
      function getItemCount(number) {
        if (number === 1) {
          return "1 item";
        }
        return `${number} items`;
      }
      function getUniqueReplacerSet(replacerArray) {
        const replacerSet = /* @__PURE__ */ new Set();
        for (const value of replacerArray) {
          if (typeof value === "string") {
            replacerSet.add(value);
          } else if (typeof value === "number") {
            replacerSet.add(String(value));
          }
        }
        return replacerSet;
      }
      function configure(options) {
        const circularValue = getCircularValueOption(options);
        const bigint = getBooleanOption(options, "bigint");
        const deterministic = getBooleanOption(options, "deterministic");
        const maximumDepth = getPositiveIntegerOption(options, "maximumDepth");
        const maximumBreadth = getPositiveIntegerOption(options, "maximumBreadth");
        function stringifyFnReplacer(key, parent, stack, replacer, spacer, indentation) {
          let value = parent[key];
          if (typeof value === "object" && value !== null && typeof value.toJSON === "function") {
            value = value.toJSON(key);
          }
          value = replacer.call(parent, key, value);
          switch (typeof value) {
            case "string":
              return `"${strEscape(value)}"`;
            case "object": {
              if (value === null) {
                return "null";
              }
              if (stack.indexOf(value) !== -1) {
                return circularValue;
              }
              let res = "";
              let join = ",";
              const originalIndentation = indentation;
              if (Array.isArray(value)) {
                if (value.length === 0) {
                  return "[]";
                }
                if (maximumDepth < stack.length + 1) {
                  return '"[Array]"';
                }
                stack.push(value);
                if (spacer !== "") {
                  indentation += spacer;
                  res += `
${indentation}`;
                  join = `,
${indentation}`;
                }
                const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
                let i = 0;
                for (; i < maximumValuesToStringify - 1; i++) {
                  const tmp2 = stringifyFnReplacer(i, value, stack, replacer, spacer, indentation);
                  res += tmp2 !== void 0 ? tmp2 : "null";
                  res += join;
                }
                const tmp = stringifyFnReplacer(i, value, stack, replacer, spacer, indentation);
                res += tmp !== void 0 ? tmp : "null";
                if (value.length - 1 > maximumBreadth) {
                  const removedKeys = value.length - maximumBreadth - 1;
                  res += `${join}"... ${getItemCount(removedKeys)} not stringified"`;
                }
                if (spacer !== "") {
                  res += `
${originalIndentation}`;
                }
                stack.pop();
                return `[${res}]`;
              }
              let keys = Object.keys(value);
              const keyLength = keys.length;
              if (keyLength === 0) {
                return "{}";
              }
              if (maximumDepth < stack.length + 1) {
                return '"[Object]"';
              }
              let whitespace = "";
              let separator = "";
              if (spacer !== "") {
                indentation += spacer;
                join = `,
${indentation}`;
                whitespace = " ";
              }
              let maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth);
              if (isTypedArrayWithEntries(value)) {
                res += stringifyTypedArray(value, join, maximumBreadth);
                keys = keys.slice(value.length);
                maximumPropertiesToStringify -= value.length;
                separator = join;
              }
              if (deterministic) {
                keys = insertSort(keys);
              }
              stack.push(value);
              for (let i = 0; i < maximumPropertiesToStringify; i++) {
                const key2 = keys[i];
                const tmp = stringifyFnReplacer(key2, value, stack, replacer, spacer, indentation);
                if (tmp !== void 0) {
                  res += `${separator}"${strEscape(key2)}":${whitespace}${tmp}`;
                  separator = join;
                }
              }
              if (keyLength > maximumBreadth) {
                const removedKeys = keyLength - maximumBreadth;
                res += `${separator}"...":${whitespace}"${getItemCount(removedKeys)} not stringified"`;
                separator = join;
              }
              if (spacer !== "" && separator.length > 1) {
                res = `
${indentation}${res}
${originalIndentation}`;
              }
              stack.pop();
              return `{${res}}`;
            }
            case "number":
              return isFinite(value) ? String(value) : "null";
            case "boolean":
              return value === true ? "true" : "false";
            case "bigint":
              return bigint ? String(value) : void 0;
          }
        }
        function stringifyArrayReplacer(key, value, stack, replacer, spacer, indentation) {
          if (typeof value === "object" && value !== null && typeof value.toJSON === "function") {
            value = value.toJSON(key);
          }
          switch (typeof value) {
            case "string":
              return `"${strEscape(value)}"`;
            case "object": {
              if (value === null) {
                return "null";
              }
              if (stack.indexOf(value) !== -1) {
                return circularValue;
              }
              const originalIndentation = indentation;
              let res = "";
              let join = ",";
              if (Array.isArray(value)) {
                if (value.length === 0) {
                  return "[]";
                }
                if (maximumDepth < stack.length + 1) {
                  return '"[Array]"';
                }
                stack.push(value);
                if (spacer !== "") {
                  indentation += spacer;
                  res += `
${indentation}`;
                  join = `,
${indentation}`;
                }
                const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
                let i = 0;
                for (; i < maximumValuesToStringify - 1; i++) {
                  const tmp2 = stringifyArrayReplacer(i, value[i], stack, replacer, spacer, indentation);
                  res += tmp2 !== void 0 ? tmp2 : "null";
                  res += join;
                }
                const tmp = stringifyArrayReplacer(i, value[i], stack, replacer, spacer, indentation);
                res += tmp !== void 0 ? tmp : "null";
                if (value.length - 1 > maximumBreadth) {
                  const removedKeys = value.length - maximumBreadth - 1;
                  res += `${join}"... ${getItemCount(removedKeys)} not stringified"`;
                }
                if (spacer !== "") {
                  res += `
${originalIndentation}`;
                }
                stack.pop();
                return `[${res}]`;
              }
              if (replacer.size === 0) {
                return "{}";
              }
              stack.push(value);
              let whitespace = "";
              if (spacer !== "") {
                indentation += spacer;
                join = `,
${indentation}`;
                whitespace = " ";
              }
              let separator = "";
              for (const key2 of replacer) {
                const tmp = stringifyArrayReplacer(key2, value[key2], stack, replacer, spacer, indentation);
                if (tmp !== void 0) {
                  res += `${separator}"${strEscape(key2)}":${whitespace}${tmp}`;
                  separator = join;
                }
              }
              if (spacer !== "" && separator.length > 1) {
                res = `
${indentation}${res}
${originalIndentation}`;
              }
              stack.pop();
              return `{${res}}`;
            }
            case "number":
              return isFinite(value) ? String(value) : "null";
            case "boolean":
              return value === true ? "true" : "false";
            case "bigint":
              return bigint ? String(value) : void 0;
          }
        }
        function stringifyIndent(key, value, stack, spacer, indentation) {
          switch (typeof value) {
            case "string":
              return `"${strEscape(value)}"`;
            case "object": {
              if (value === null) {
                return "null";
              }
              if (typeof value.toJSON === "function") {
                value = value.toJSON(key);
                if (typeof value !== "object") {
                  return stringifyIndent(key, value, stack, spacer, indentation);
                }
                if (value === null) {
                  return "null";
                }
              }
              if (stack.indexOf(value) !== -1) {
                return circularValue;
              }
              const originalIndentation = indentation;
              if (Array.isArray(value)) {
                if (value.length === 0) {
                  return "[]";
                }
                if (maximumDepth < stack.length + 1) {
                  return '"[Array]"';
                }
                stack.push(value);
                indentation += spacer;
                let res2 = `
${indentation}`;
                const join2 = `,
${indentation}`;
                const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
                let i = 0;
                for (; i < maximumValuesToStringify - 1; i++) {
                  const tmp2 = stringifyIndent(i, value[i], stack, spacer, indentation);
                  res2 += tmp2 !== void 0 ? tmp2 : "null";
                  res2 += join2;
                }
                const tmp = stringifyIndent(i, value[i], stack, spacer, indentation);
                res2 += tmp !== void 0 ? tmp : "null";
                if (value.length - 1 > maximumBreadth) {
                  const removedKeys = value.length - maximumBreadth - 1;
                  res2 += `${join2}"... ${getItemCount(removedKeys)} not stringified"`;
                }
                res2 += `
${originalIndentation}`;
                stack.pop();
                return `[${res2}]`;
              }
              let keys = Object.keys(value);
              const keyLength = keys.length;
              if (keyLength === 0) {
                return "{}";
              }
              if (maximumDepth < stack.length + 1) {
                return '"[Object]"';
              }
              indentation += spacer;
              const join = `,
${indentation}`;
              let res = "";
              let separator = "";
              let maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth);
              if (isTypedArrayWithEntries(value)) {
                res += stringifyTypedArray(value, join, maximumBreadth);
                keys = keys.slice(value.length);
                maximumPropertiesToStringify -= value.length;
                separator = join;
              }
              if (deterministic) {
                keys = insertSort(keys);
              }
              stack.push(value);
              for (let i = 0; i < maximumPropertiesToStringify; i++) {
                const key2 = keys[i];
                const tmp = stringifyIndent(key2, value[key2], stack, spacer, indentation);
                if (tmp !== void 0) {
                  res += `${separator}"${strEscape(key2)}": ${tmp}`;
                  separator = join;
                }
              }
              if (keyLength > maximumBreadth) {
                const removedKeys = keyLength - maximumBreadth;
                res += `${separator}"...": "${getItemCount(removedKeys)} not stringified"`;
                separator = join;
              }
              if (separator !== "") {
                res = `
${indentation}${res}
${originalIndentation}`;
              }
              stack.pop();
              return `{${res}}`;
            }
            case "number":
              return isFinite(value) ? String(value) : "null";
            case "boolean":
              return value === true ? "true" : "false";
            case "bigint":
              return bigint ? String(value) : void 0;
          }
        }
        function stringifySimple(key, value, stack) {
          switch (typeof value) {
            case "string":
              return `"${strEscape(value)}"`;
            case "object": {
              if (value === null) {
                return "null";
              }
              if (typeof value.toJSON === "function") {
                value = value.toJSON(key);
                if (typeof value !== "object") {
                  return stringifySimple(key, value, stack);
                }
                if (value === null) {
                  return "null";
                }
              }
              if (stack.indexOf(value) !== -1) {
                return circularValue;
              }
              let res = "";
              if (Array.isArray(value)) {
                if (value.length === 0) {
                  return "[]";
                }
                if (maximumDepth < stack.length + 1) {
                  return '"[Array]"';
                }
                stack.push(value);
                const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
                let i = 0;
                for (; i < maximumValuesToStringify - 1; i++) {
                  const tmp2 = stringifySimple(i, value[i], stack);
                  res += tmp2 !== void 0 ? tmp2 : "null";
                  res += ",";
                }
                const tmp = stringifySimple(i, value[i], stack);
                res += tmp !== void 0 ? tmp : "null";
                if (value.length - 1 > maximumBreadth) {
                  const removedKeys = value.length - maximumBreadth - 1;
                  res += `,"... ${getItemCount(removedKeys)} not stringified"`;
                }
                stack.pop();
                return `[${res}]`;
              }
              let keys = Object.keys(value);
              const keyLength = keys.length;
              if (keyLength === 0) {
                return "{}";
              }
              if (maximumDepth < stack.length + 1) {
                return '"[Object]"';
              }
              let separator = "";
              let maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth);
              if (isTypedArrayWithEntries(value)) {
                res += stringifyTypedArray(value, ",", maximumBreadth);
                keys = keys.slice(value.length);
                maximumPropertiesToStringify -= value.length;
                separator = ",";
              }
              if (deterministic) {
                keys = insertSort(keys);
              }
              stack.push(value);
              for (let i = 0; i < maximumPropertiesToStringify; i++) {
                const key2 = keys[i];
                const tmp = stringifySimple(key2, value[key2], stack);
                if (tmp !== void 0) {
                  res += `${separator}"${strEscape(key2)}":${tmp}`;
                  separator = ",";
                }
              }
              if (keyLength > maximumBreadth) {
                const removedKeys = keyLength - maximumBreadth;
                res += `${separator}"...":"${getItemCount(removedKeys)} not stringified"`;
              }
              stack.pop();
              return `{${res}}`;
            }
            case "number":
              return isFinite(value) ? String(value) : "null";
            case "boolean":
              return value === true ? "true" : "false";
            case "bigint":
              return bigint ? String(value) : void 0;
          }
        }
        function stringify2(value, replacer, space) {
          if (arguments.length > 1) {
            let spacer = "";
            if (typeof space === "number") {
              spacer = " ".repeat(Math.min(space, 10));
            } else if (typeof space === "string") {
              spacer = space.slice(0, 10);
            }
            if (replacer != null) {
              if (typeof replacer === "function") {
                return stringifyFnReplacer("", { "": value }, [], replacer, spacer, "");
              }
              if (Array.isArray(replacer)) {
                return stringifyArrayReplacer("", value, [], getUniqueReplacerSet(replacer), spacer, "");
              }
            }
            if (spacer.length !== 0) {
              return stringifyIndent("", value, [], spacer, "");
            }
          }
          return stringifySimple("", value, []);
        }
        return stringify2;
      }
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/unplugged/pino-npm-7.6.5-9eaea6e55b/node_modules/pino/lib/multistream.js
  var require_multistream = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/unplugged/pino-npm-7.6.5-9eaea6e55b/node_modules/pino/lib/multistream.js"(exports, module) {
      "use strict";
      var metadata = Symbol.for("pino.metadata");
      var { levels } = require_levels();
      var defaultLevels = Object.create(levels);
      defaultLevels.silent = Infinity;
      function multistream(streamsArray, opts) {
        let counter = 0;
        streamsArray = streamsArray || [];
        opts = opts || { dedupe: false };
        let levels2 = defaultLevels;
        if (opts.levels && typeof opts.levels === "object") {
          levels2 = opts.levels;
        }
        const res = {
          write,
          add,
          flushSync,
          end,
          minLevel: 0,
          streams: [],
          clone,
          [metadata]: true
        };
        if (Array.isArray(streamsArray)) {
          streamsArray.forEach(add, res);
        } else {
          add.call(res, streamsArray);
        }
        streamsArray = null;
        return res;
        function write(data) {
          let dest;
          const level = this.lastLevel;
          const { streams } = this;
          let stream;
          for (let i = 0; i < streams.length; i++) {
            dest = streams[i];
            if (dest.level <= level) {
              stream = dest.stream;
              if (stream[metadata]) {
                const { lastTime, lastMsg, lastObj, lastLogger } = this;
                stream.lastLevel = level;
                stream.lastTime = lastTime;
                stream.lastMsg = lastMsg;
                stream.lastObj = lastObj;
                stream.lastLogger = lastLogger;
              }
              if (!opts.dedupe || dest.level === level) {
                stream.write(data);
              }
            } else {
              break;
            }
          }
        }
        function flushSync() {
          for (const { stream } of this.streams) {
            if (typeof stream.flushSync === "function") {
              stream.flushSync();
            }
          }
        }
        function add(dest) {
          const { streams } = this;
          if (typeof dest.write === "function") {
            return add.call(this, { stream: dest });
          } else if (typeof dest.levelVal === "number") {
            return add.call(this, Object.assign({}, dest, { level: dest.levelVal, levelVal: void 0 }));
          } else if (typeof dest.level === "string") {
            return add.call(this, Object.assign({}, dest, { level: levels2[dest.level] }));
          } else if (typeof dest.level !== "number") {
            dest = Object.assign({}, dest, { level: 30 });
          } else {
            dest = Object.assign({}, dest);
          }
          dest.id = counter++;
          streams.unshift(dest);
          streams.sort(compareByLevel);
          this.minLevel = streams[0].level;
          return res;
        }
        function end() {
          for (const { stream } of this.streams) {
            if (typeof stream.flushSync === "function") {
              stream.flushSync();
            }
            stream.end();
          }
        }
        function clone(level) {
          const streams = new Array(this.streams.length);
          for (let i = 0; i < streams.length; i++) {
            streams[i] = {
              level,
              stream: this.streams[i].stream
            };
          }
          return {
            write,
            add,
            minLevel: level,
            streams,
            clone,
            flushSync,
            [metadata]: true
          };
        }
      }
      function compareByLevel(a, b) {
        return a.level - b.level;
      }
      module.exports = multistream;
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/unplugged/pino-npm-7.6.5-9eaea6e55b/node_modules/pino/pino.js
  var require_pino = __commonJS({
    "pnp:/Users/francis/d/IdeaProjects/pino-browser/.yarn/unplugged/pino-npm-7.6.5-9eaea6e55b/node_modules/pino/pino.js"(exports, module) {
      "use strict";
      var os = __require("os");
      var stdSerializers = require_pino_std_serializers();
      var caller = require_caller();
      var redaction = require_redaction();
      var time = require_time();
      var proto = require_proto();
      var symbols = require_symbols();
      var { configure } = require_safe_stable_stringify();
      var { assertDefaultLevelFound, mappings, genLsCache } = require_levels();
      var {
        createArgsNormalizer,
        asChindings,
        final,
        buildSafeSonicBoom,
        buildFormatters,
        stringify,
        normalizeDestFileDescriptor,
        noop
      } = require_tools();
      var { version } = require_meta();
      var {
        chindingsSym,
        redactFmtSym,
        serializersSym,
        timeSym,
        timeSliceIndexSym,
        streamSym,
        stringifySym,
        stringifySafeSym,
        stringifiersSym,
        setLevelSym,
        endSym,
        formatOptsSym,
        messageKeySym,
        nestedKeySym,
        mixinSym,
        useOnlyCustomLevelsSym,
        formattersSym,
        hooksSym,
        nestedKeyStrSym
      } = symbols;
      var { epochTime, nullTime } = time;
      var { pid } = process;
      var hostname = os.hostname();
      var defaultErrorSerializer = stdSerializers.err;
      var defaultOptions = {
        level: "info",
        messageKey: "msg",
        nestedKey: null,
        enabled: true,
        prettyPrint: false,
        base: { pid, hostname },
        serializers: Object.assign(/* @__PURE__ */ Object.create(null), {
          err: defaultErrorSerializer
        }),
        formatters: Object.assign(/* @__PURE__ */ Object.create(null), {
          bindings(bindings) {
            return bindings;
          },
          level(label, number) {
            return { level: number };
          }
        }),
        hooks: {
          logMethod: void 0
        },
        timestamp: epochTime,
        name: void 0,
        redact: null,
        customLevels: null,
        useOnlyCustomLevels: false,
        depthLimit: 5,
        edgeLimit: 100
      };
      var normalize = createArgsNormalizer(defaultOptions);
      var serializers = Object.assign(/* @__PURE__ */ Object.create(null), stdSerializers);
      function pino2(...args) {
        const instance = {};
        const { opts, stream } = normalize(instance, caller(), ...args);
        const {
          redact,
          crlf,
          serializers: serializers2,
          timestamp,
          messageKey,
          nestedKey,
          base,
          name,
          level,
          customLevels,
          mixin,
          useOnlyCustomLevels,
          formatters,
          hooks,
          depthLimit,
          edgeLimit
        } = opts;
        const stringifySafe = configure({
          maximumDepth: depthLimit,
          maximumBreadth: edgeLimit
        });
        const allFormatters = buildFormatters(formatters.level, formatters.bindings, formatters.log);
        const stringifiers = redact ? redaction(redact, stringify) : {};
        const stringifyFn = stringify.bind({
          [stringifySafeSym]: stringifySafe
        });
        const formatOpts = redact ? { stringify: stringifiers[redactFmtSym] } : { stringify: stringifyFn };
        const end = "}" + (crlf ? "\r\n" : "\n");
        const coreChindings = asChindings.bind(null, {
          [chindingsSym]: "",
          [serializersSym]: serializers2,
          [stringifiersSym]: stringifiers,
          [stringifySym]: stringify,
          [stringifySafeSym]: stringifySafe,
          [formattersSym]: allFormatters
        });
        let chindings = "";
        if (base !== null) {
          if (name === void 0) {
            chindings = coreChindings(base);
          } else {
            chindings = coreChindings(Object.assign({}, base, { name }));
          }
        }
        const time2 = timestamp instanceof Function ? timestamp : timestamp ? epochTime : nullTime;
        const timeSliceIndex = time2().indexOf(":") + 1;
        if (useOnlyCustomLevels && !customLevels)
          throw Error("customLevels is required if useOnlyCustomLevels is set true");
        if (mixin && typeof mixin !== "function")
          throw Error(`Unknown mixin type "${typeof mixin}" - expected "function"`);
        assertDefaultLevelFound(level, customLevels, useOnlyCustomLevels);
        const levels = mappings(customLevels, useOnlyCustomLevels);
        Object.assign(instance, {
          levels,
          [useOnlyCustomLevelsSym]: useOnlyCustomLevels,
          [streamSym]: stream,
          [timeSym]: time2,
          [timeSliceIndexSym]: timeSliceIndex,
          [stringifySym]: stringify,
          [stringifySafeSym]: stringifySafe,
          [stringifiersSym]: stringifiers,
          [endSym]: end,
          [formatOptsSym]: formatOpts,
          [messageKeySym]: messageKey,
          [nestedKeySym]: nestedKey,
          [nestedKeyStrSym]: nestedKey ? `,${JSON.stringify(nestedKey)}:{` : "",
          [serializersSym]: serializers2,
          [mixinSym]: mixin,
          [chindingsSym]: chindings,
          [formattersSym]: allFormatters,
          [hooksSym]: hooks,
          silent: noop
        });
        Object.setPrototypeOf(instance, proto());
        genLsCache(instance);
        instance[setLevelSym](level);
        return instance;
      }
      module.exports = pino2;
      module.exports.destination = (dest = process.stdout.fd) => {
        if (typeof dest === "object") {
          dest.dest = normalizeDestFileDescriptor(dest.dest || process.stdout.fd);
          return buildSafeSonicBoom(dest);
        } else {
          return buildSafeSonicBoom({ dest: normalizeDestFileDescriptor(dest), minLength: 0, sync: true });
        }
      };
      module.exports.transport = require_transport();
      module.exports.multistream = require_multistream();
      module.exports.final = final;
      module.exports.levels = mappings();
      module.exports.stdSerializers = serializers;
      module.exports.stdTimeFunctions = Object.assign({}, time);
      module.exports.symbols = symbols;
      module.exports.version = version;
      module.exports.default = pino2;
      module.exports.pino = pino2;
    }
  });

  // pnp:/Users/francis/d/IdeaProjects/pino-browser/index.js
  var import_pino = __toESM(require_pino());
  var logger = (0, import_pino.default)();
})();
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
//# sourceMappingURL=index.js.map
