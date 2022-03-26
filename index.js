var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/home/runner/work/remix-blog-manager/remix-blog-manager/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());

// app/styles/app.css
var app_default = "/build/_assets/app-RO5IEQX2.css";

// route:/home/runner/work/remix-blog-manager/remix-blog-manager/app/root.tsx
var links = () => {
  return [
    { rel: "stylesheet", href: app_default }
  ];
};
var meta = () => {
  return { title: "Lexmin0412 Blog" };
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route:/home/runner/work/remix-blog-manager/remix-blog-manager/app/routes/admin.tsx
var admin_exports = {};
__export(admin_exports, {
  default: () => admin
});
init_react();
function admin() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex text-white bg-purple-sidebar h-screen text-center w-screen"
  }, "\u7BA1\u7406\u540E\u53F0\u5F00\u53D1\u4E2D\uFF0C\u656C\u8BF7\u671F\u5F85...");
}

// route:/home/runner/work/remix-blog-manager/remix-blog-manager/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();
var import_remix3 = __toESM(require_remix());
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col overflow-auto leaing-6 w-full h-screen bg-gradient-to-r from-violet-400 to-pink-400"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "flex items-center px-10 h-14"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("a", {
    href: "/",
    className: "text-2xl text-white"
  }, "Lexmin")), /* @__PURE__ */ React.createElement("div", {
    className: "flex grow justify-end items-center"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "flex",
    href: "https://github.com/lexmin0412"
  }, /* @__PURE__ */ React.createElement("svg", {
    height: "32",
    "aria-hidden": "true",
    viewBox: "0 0 16 16",
    version: "1.1",
    width: "32",
    "data-view-component": "true",
    className: "octicon octicon-mark-github v-align-middle"
  }, /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
  }))))), /* @__PURE__ */ React.createElement("main", {
    className: "flex grow pt-[35vh] justify-start items-center flex-col"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-center text-white text-5xl"
  }, "Welcome to Lexmin's Space"), /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center items-center"
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    className: "text-white rounded-lg ml-4 bg-zinc-700/20 h-12 leading-12 px-4 mt-8",
    to: "/posts"
  }, "\u5F00\u59CB\u63A2\u7D22"), /* @__PURE__ */ React.createElement(import_remix3.Link, {
    className: "text-white rounded-lg ml-4 bg-zinc-700 h-12 leading-12 px-4 mt-8",
    to: "/admin"
  }, "\u4F5C\u8005\u901A\u9053"))));
}

// route:/home/runner/work/remix-blog-manager/remix-blog-manager/app/routes/posts.tsx
var posts_exports = {};
__export(posts_exports, {
  default: () => Posts,
  loader: () => loader
});
init_react();
var import_remix4 = __toESM(require_remix());

// app/post.ts
init_react();
var import_path = __toESM(require("path"));
var import_promises = __toESM(require("fs/promises"));
var import_front_matter = __toESM(require("front-matter"));
var import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/utils/git.ts
init_react();
var { spawnSync } = require("child_process");
var syncCode = (msg) => {
  spawnSync("git", ["add", "."]);
  spawnSync("git", ["commit", "-m", msg]);
  spawnSync("git", ["pull"]);
  spawnSync("git", ["push"]);
};

// app/utils/md-renderer.ts
init_react();
var import_marked = require("marked");
var transformMarkdown = (markdown) => {
  const renderer = {
    heading(text, level) {
      const escapedText = text.toLowerCase().replace(/[^\w]+/g, "-");
      const levelFontSizeMap = {
        1: "text-2xl",
        2: "text-xl",
        3: "text-lg",
        4: "text-md"
      };
      return `
            <a name="${escapedText}" class="anchor" href="#${escapedText}">
              <h${level} class="${levelFontSizeMap[level]} font-bold h-12 leading-12">
                ${text}
              </h${level}>
            <a></a>
            `;
    },
    code(code, infostring, escaped) {
      console.log("code", code);
      console.log("infostring", infostring);
      console.log("escaped", escaped);
      return `<pre class="bg-[#1f134e] my-4 px-4 py-4 rounded-xl"><code class="language-${infostring}">${code}</code></pre>`;
    },
    table(header, body) {
      console.log("header", header);
      header = header.replace(/<tr>/g, '<div class="flex border-b py-2 border-b border-gray-600 text-sm">').replace(/<\/tr>/g, "</div>").replace(/<th>/g, '<div class="text-left font-bold flex-1">').replace(/<\/th>/g, "</div>");
      console.log("\u66FF\u6362\u540E\u7684header", header);
      body = body.replace(/<tr>/g, '<div class="flex py-2 border-b border-gray-600">').replace(/<\/tr>/g, "</div>").replace(/<\/td>/g, "</div>").replace(/<td>/g, '<div class="text-left flex-1 text-sm">');
      console.log("body", body);
      return `<div class="mb-4">${header}${body}</div>`;
    }
  };
  import_marked.marked.use({ renderer });
  const html = (0, import_marked.marked)(markdown);
  return html;
};

// app/post.ts
var postsPath = import_path.default.join(__dirname, "..", "posts");
function isValidPostAttributes(attributes) {
  return attributes == null ? void 0 : attributes.title;
}
async function getPosts() {
  const dir = await import_promises.default.readdir(postsPath);
  return Promise.all(dir.map(async (filename) => {
    const file = await import_promises.default.readFile(import_path.default.join(postsPath, filename));
    const { attributes } = (0, import_front_matter.default)(file.toString());
    (0, import_tiny_invariant.default)(isValidPostAttributes(attributes), `${filename} has bad meta data!`);
    return {
      slug: filename.replace(/\.md$/, ""),
      title: attributes.title
    };
  }));
}
async function getPost(slug) {
  const filepath = import_path.default.join(postsPath, slug + ".md");
  const file = await import_promises.default.readFile(filepath);
  const { attributes, body } = (0, import_front_matter.default)(file.toString());
  (0, import_tiny_invariant.default)(isValidPostAttributes(attributes), `Post ${filepath} is missing attributes`);
  const html = transformMarkdown(body);
  return { slug, html, title: attributes.title, markdown: body };
}
async function createPost(post) {
  const md = `---
title: ${post.title}
---

${post.markdown}`;
  await import_promises.default.writeFile(import_path.default.join(postsPath, post.slug + ".md"), md);
  syncCode(`create post ${post.slug}`);
  return getPost(post.slug);
}
async function updatePost(post) {
  const md = `---
title: ${post.title}
---

${post.markdown}`;
  await import_promises.default.writeFile(import_path.default.join(postsPath, post.slug + ".md"), md);
  syncCode(`Update post ${post.slug}`);
  return getPost(post.slug);
}
async function deletePost(slug) {
  try {
    await import_promises.default.unlink(import_path.default.join(postsPath, slug + ".md"));
  } catch (error) {
    return error;
  }
  syncCode(`Delete post ${slug}`);
  return getPost(slug);
}

// route:/home/runner/work/remix-blog-manager/remix-blog-manager/app/routes/posts.tsx
var import_react = require("react");
var loader = async () => {
  return getPosts();
};
function Posts() {
  const posts = (0, import_remix4.useLoaderData)();
  const [collapsed, setCollapsed] = (0, import_react.useState)(false);
  const handleCollapseToggle = () => setCollapsed(!collapsed);
  const location = (0, import_remix4.useLocation)();
  console.log("lcatin", decodeURIComponent(location.pathname.slice(location.pathname.lastIndexOf("/") + 1)));
  const currentPost = decodeURIComponent(location.pathname.slice(location.pathname.lastIndexOf("/") + 1));
  return /* @__PURE__ */ React.createElement("main", {
    className: "flex text-white"
  }, collapsed ? /* @__PURE__ */ React.createElement("div", {
    className: "fixed cursor-pointer bottom-4 left-4",
    onClick: handleCollapseToggle
  }, "\u5C55\u5F00 \u300B") : /* @__PURE__ */ React.createElement("aside", {
    className: "w-80 bg-purple-sidebar flex h-screen flex-col px-5 box-border"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "h-14 leading-14 text-2xl"
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    className: "text-white",
    to: "/"
  }, "Lexmin Blog")), /* @__PURE__ */ React.createElement("ul", {
    className: "grow"
  }, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug,
    className: `w-full h-9 overflow-auto leading-9 truncate hover:bg-gray-700 px-3 rounded-md${currentPost === post.slug ? " bg-pink-500" : ""}`
  }, /* @__PURE__ */ React.createElement(import_remix4.Link, {
    className: "text-white text-sm",
    to: `/posts/${post.slug}`
  }, post.title)))), /* @__PURE__ */ React.createElement("div", {
    className: "h-10 leading-10 text-center cursor-pointer",
    onClick: handleCollapseToggle
  }, "\u300A \u6298\u53E0")), /* @__PURE__ */ React.createElement("main", {
    className: "grow h-screen bg-purple-main px-6 overflow-auto"
  }, /* @__PURE__ */ React.createElement(import_remix4.Outlet, null)));
}

// route:/home/runner/work/remix-blog-manager/remix-blog-manager/app/routes/posts/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  action: () => action,
  default: () => PostSlug,
  loader: () => loader2
});
init_react();
var import_remix5 = __toESM(require_remix());
var import_tiny_invariant2 = __toESM(require("tiny-invariant"));
var loader2 = async ({
  params
}) => {
  (0, import_tiny_invariant2.default)(params.slug, "expected params.slug");
  return getPost(params.slug);
};
var action = async ({ request, context, params }) => {
  const { method } = request;
  console.log("method in action", method);
  console.log("params in action", params);
  (0, import_tiny_invariant2.default)(typeof params.slug === "string");
  console.log("method", method);
  try {
    await deletePost(params.slug);
  } catch (error) {
    console.log("error", error);
  }
  return (0, import_remix5.redirect)("/posts");
};
function PostSlug() {
  const post = (0, import_remix5.useLoaderData)();
  const errors = (0, import_remix5.useActionData)();
  const transition = (0, import_remix5.useTransition)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex"
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: `/posts/new`,
    className: "bg-pink-500 px-3 py-3 rounded-md mr-4"
  }, "\u65B0\u5EFA"), /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: `/posts/edit/${post.slug}`,
    className: "bg-pink-500 px-3 py-3 rounded-md mr-4"
  }, "\u7F16\u8F91"), /* @__PURE__ */ React.createElement(import_remix5.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: " bg-pink-500 px-3 py-3 rounded-md"
  }, transition.submission ? "\u6B63\u5728\u5220\u9664..." : "\u5220\u9664"))), /* @__PURE__ */ React.createElement("main", {
    className: "py-4",
    dangerouslySetInnerHTML: { __html: post.html }
  }));
}

// route:/home/runner/work/remix-blog-manager/remix-blog-manager/app/routes/posts/index.tsx
var posts_exports2 = {};
__export(posts_exports2, {
  default: () => Posts2,
  loader: () => loader3
});
init_react();
var import_remix6 = __toESM(require_remix());
var loader3 = async () => {
  return getPosts();
};
function Posts2() {
  const posts = (0, import_remix6.useLoaderData)();
  console.log(posts);
  return /* @__PURE__ */ React.createElement("main", {
    className: "pt-4"
  }, "\u70B9\u51FB\u5DE6\u4FA7\u5217\u8868\u53EF\u4EE5\u8DF3\u8F6C\u5230\u5BF9\u5E94\u7684\u6587\u7AE0");
}

// route:/home/runner/work/remix-blog-manager/remix-blog-manager/app/routes/posts/edit.tsx
var edit_exports = {};
__export(edit_exports, {
  action: () => action2,
  default: () => EditPost,
  loader: () => loader4
});
init_react();
var import_remix7 = __toESM(require_remix());
var loader4 = async ({ request, params }) => {
  const url = new URL(request.url);
  console.log("request", request);
  return getPost(params.slug);
};
var action2 = async ({ request, context }) => {
  const { method, params } = request;
  console.log("method in action", method);
  const url = new URL(request.url);
  await new Promise((res) => setTimeout(res, 1e3));
  const formData = await request.formData();
  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");
  const errors = {};
  if (!title)
    errors.title = true;
  if (!slug)
    errors.slug = true;
  if (!markdown)
    errors.markdown = true;
  if (Object.keys(errors).length) {
    return errors;
  }
  console.log("method", method);
  if (method === "DELETE") {
    try {
      await deletePost(slug);
    } catch (error) {
      console.log("delete post error", error);
    }
  } else {
    try {
      await updatePost({ title, slug, markdown, originalSlug: url.searchParams.get("slug") });
    } catch (error) {
      console.log("updatePost post error", error);
    }
  }
  console.log("action end");
  return (0, import_remix7.redirect)("/");
};
function EditPost() {
  const post = (0, import_remix7.useLoaderData)();
  const errors = (0, import_remix7.useActionData)();
  const transition = (0, import_remix7.useTransition)();
  console.log("post in render", post.markdown);
  const submit = (0, import_remix7.useSubmit)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_remix7.Outlet, null));
}

// route:/home/runner/work/remix-blog-manager/remix-blog-manager/app/routes/posts/edit/$slug.tsx
var slug_exports2 = {};
__export(slug_exports2, {
  action: () => action3,
  default: () => EditPost2,
  loader: () => loader5
});
init_react();
var import_remix8 = __toESM(require_remix());
var import_tiny_invariant3 = __toESM(require("tiny-invariant"));
var loader5 = async ({ request, params }) => {
  (0, import_tiny_invariant3.default)(params.slug, "expected params.slug");
  return getPost(params.slug);
};
var action3 = async ({ request, context }) => {
  const { method, params } = request;
  console.log("method in action", method);
  const url = new URL(request.url);
  await new Promise((res) => setTimeout(res, 1e3));
  const formData = await request.formData();
  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");
  const errors = {};
  if (!title)
    errors.title = true;
  if (!slug)
    errors.slug = true;
  if (!markdown)
    errors.markdown = true;
  if (Object.keys(errors).length) {
    return errors;
  }
  (0, import_tiny_invariant3.default)(typeof title === "string");
  (0, import_tiny_invariant3.default)(typeof slug === "string");
  (0, import_tiny_invariant3.default)(typeof markdown === "string");
  console.log("method", method);
  if (method === "DELETE") {
    try {
      await deletePost(slug);
    } catch (error) {
      console.log("delete post error", error);
    }
  } else {
    try {
      await updatePost({ title, slug, markdown, originalSlug: url.searchParams.get("slug") });
    } catch (error) {
      console.log("updatePost post error", error);
    }
  }
  console.log("action end");
  return (0, import_remix8.redirect)("/");
};
function EditPost2() {
  const post = (0, import_remix8.useLoaderData)();
  const errors = (0, import_remix8.useActionData)();
  const transition = (0, import_remix8.useTransition)();
  return /* @__PURE__ */ React.createElement(import_remix8.Form, {
    method: "post",
    className: "pt-4"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", null, "Post Title:", " ", (errors == null ? void 0 : errors.title) ? /* @__PURE__ */ React.createElement("em", null, "Title is required") : null, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    className: "bg-[#1f134e] px-3 ml-2 rounded-md text-sm h-7 leading-7",
    name: "title",
    defaultValue: post.title
  }))), /* @__PURE__ */ React.createElement("p", {
    className: "my-4"
  }, /* @__PURE__ */ React.createElement("label", null, "Post Slug:", " ", (errors == null ? void 0 : errors.slug) ? /* @__PURE__ */ React.createElement("em", null, "Slug is required") : null, /* @__PURE__ */ React.createElement("input", {
    className: "bg-[#1f134e] px-3 ml-2 rounded-md text-sm h-7 leading-7",
    type: "text",
    name: "slug",
    defaultValue: post.slug
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", null, "Markdown:"), " ", (errors == null ? void 0 : errors.markdown) ? /* @__PURE__ */ React.createElement("em", null, "Markdown is required") : null, /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("textarea", {
    key: post.markdown,
    rows: 40,
    name: "markdown",
    defaultValue: post.markdown,
    className: "bg-[#1f134e] my-4 rounded-md px-4 py-4 w-full h-96  box-border"
  })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", {
    className: " bg-pink-500 px-3 py-3 rounded-md"
  }, transition.submission ? "Updating..." : "Update Post")));
}

// route:/home/runner/work/remix-blog-manager/remix-blog-manager/app/routes/posts/edit/index.tsx
var edit_exports2 = {};
__export(edit_exports2, {
  default: () => index
});
init_react();
function index() {
  return /* @__PURE__ */ React.createElement("div", null, "edit index");
}

// route:/home/runner/work/remix-blog-manager/remix-blog-manager/app/routes/posts/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action4,
  default: () => NewPost
});
init_react();
var import_remix9 = __toESM(require_remix());
var import_tiny_invariant4 = __toESM(require("tiny-invariant"));
var action4 = async ({ request }) => {
  await new Promise((res) => setTimeout(res, 1e3));
  const formData = await request.formData();
  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");
  const errors = {};
  if (!title)
    errors.title = true;
  if (!slug)
    errors.slug = true;
  if (!markdown)
    errors.markdown = true;
  if (Object.keys(errors).length) {
    return errors;
  }
  (0, import_tiny_invariant4.default)(typeof title === "string");
  (0, import_tiny_invariant4.default)(typeof slug === "string");
  (0, import_tiny_invariant4.default)(typeof markdown === "string");
  await createPost({ title, slug, markdown });
  return (0, import_remix9.redirect)(`/posts/${slug}`);
};
function NewPost() {
  const errors = (0, import_remix9.useActionData)();
  const transition = (0, import_remix9.useTransition)();
  return /* @__PURE__ */ React.createElement(import_remix9.Form, {
    method: "post",
    className: "pt-4"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", null, "Post Title:", " ", (errors == null ? void 0 : errors.title) ? /* @__PURE__ */ React.createElement("em", null, "Title is required") : null, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    className: "bg-[#1f134e] px-3 ml-2 rounded-md text-sm h-7 leading-7"
  }))), /* @__PURE__ */ React.createElement("p", {
    className: "my-4"
  }, /* @__PURE__ */ React.createElement("label", null, "Post Slug:", " ", (errors == null ? void 0 : errors.slug) ? /* @__PURE__ */ React.createElement("em", null, "Slug is required") : null, /* @__PURE__ */ React.createElement("input", {
    className: "bg-[#1f134e] px-3 ml-2 rounded-md text-sm h-7 leading-7",
    type: "text",
    name: "slug"
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "markdown"
  }, "Markdown:"), " ", (errors == null ? void 0 : errors.markdown) ? /* @__PURE__ */ React.createElement("em", null, "Markdown is required") : null, /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("textarea", {
    id: "markdown",
    rows: 20,
    name: "markdown",
    className: "bg-[#1f134e] my-4 rounded-md px-4 py-4 w-full h-96  box-border"
  })), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("button", {
    className: " bg-pink-500 px-3 py-3 rounded-md",
    type: "submit"
  }, transition.submission ? "Creating..." : "Create Post")));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "1daa1fff", "entry": { "module": "/build/entry.client-DUXNJFPW.js", "imports": ["/build/_shared/chunk-XGWA5BPR.js", "/build/_shared/chunk-TOAMQMCD.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-ASQJUGFY.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/admin": { "id": "routes/admin", "parentId": "root", "path": "admin", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/admin-XGLVAZ4C.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-LS2XJ35G.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts": { "id": "routes/posts", "parentId": "root", "path": "posts", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts-TPASX5NC.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/$slug": { "id": "routes/posts/$slug", "parentId": "routes/posts", "path": ":slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/$slug-N356TGL7.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/edit": { "id": "routes/posts/edit", "parentId": "routes/posts", "path": "edit", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/edit-BY4D5X4Z.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/edit/$slug": { "id": "routes/posts/edit/$slug", "parentId": "routes/posts/edit", "path": ":slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/edit/$slug-6NCR7GPE.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/edit/index": { "id": "routes/posts/edit/index", "parentId": "routes/posts/edit", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/posts/edit/index-YND7IOO6.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/index": { "id": "routes/posts/index", "parentId": "routes/posts", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/posts/index-PXQFWQSB.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/posts/new": { "id": "routes/posts/new", "parentId": "routes/posts", "path": "new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/posts/new-63IZZKH3.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-1DAA1FFF.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/admin": {
    id: "routes/admin",
    parentId: "root",
    path: "admin",
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/posts": {
    id: "routes/posts",
    parentId: "root",
    path: "posts",
    index: void 0,
    caseSensitive: void 0,
    module: posts_exports
  },
  "routes/posts/$slug": {
    id: "routes/posts/$slug",
    parentId: "routes/posts",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/posts/index": {
    id: "routes/posts/index",
    parentId: "routes/posts",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: posts_exports2
  },
  "routes/posts/edit": {
    id: "routes/posts/edit",
    parentId: "routes/posts",
    path: "edit",
    index: void 0,
    caseSensitive: void 0,
    module: edit_exports
  },
  "routes/posts/edit/$slug": {
    id: "routes/posts/edit/$slug",
    parentId: "routes/posts/edit",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports2
  },
  "routes/posts/edit/index": {
    id: "routes/posts/edit/index",
    parentId: "routes/posts/edit",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: edit_exports2
  },
  "routes/posts/new": {
    id: "routes/posts/new",
    parentId: "routes/posts",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
