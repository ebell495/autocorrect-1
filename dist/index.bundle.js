/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./examples.js":
/*!*********************!*\
  !*** ./examples.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// autocorrect: false\n{\n  /* <option selected value=\"html\">HTML</option>\n<option value=\"js\">JavaScript</option>\n<option value=\"ts\">TypeScript</option>\n<option value=\"css\">CSS / SCSS</option>\n<option value=\"json\">JSON</option>\n<option value=\"yml\">YAML</option>\n<option value=\"go\">Go</option>\n<option value=\"rs\">Rust</option>\n<option value=\"rb\">Ruby</option>\n<option value=\"py\">Python</option>\n<option value=\"java\">Java</option>\n<option value=\"php\">PHP</option>\n<option value=\"sql\">SQL</option>\n<option value=\"objective_c\">Objective-C</option>\n<option value=\"swift\">Swift</option>\n<option value=\"scala\">Scala</option>\n<option value=\"kt\">Kotlin</option>\n<option value=\"dart\">Dart</option>\n<option value=\"ex\">Elixir</option>\n<option value=\"csharp\">C#</option>\n<option value=\"md\">Markdown</option>\n<option value=\"plain\">Plain Text</option> */\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  html: {\n    title: 'HTML',\n    raw: `<h1>编译Rust为WebAssembly</h1>\n<div></div>\n<p class=\"summary\">如果你写了一些Rust代码，你可以把它编译成WebAssembly！这份教程将带你编译Rust项目为wasm并在一个现存的web应用中使用它。</p></div>\n<h2 id=\"rust_和_webassembly_用例\"><a href=\"#rust_和_webassembly_用例\" title=\"Permalink to Rust和WebAssembly用例\">Rust和WebAssembly用例</a></h2>\n<div><p>Rust和WebAssembly有两大主要用例：</p>\n<ul>\n<li>构建完整应用 —— 整个Web应用都基于Rust开发！</li>\n<li>构建应用的组成部分 —— 在现存的JavaScript前端中使用Rust。</li>\n</ul>\n\n<p>目前，Rust团队正专注于第二种用例，因此我们也将着重介绍它。对于第一种用例，可以参阅<code><a href=\"https://github.com/DenisKolodin/yew\" class=\"external\" rel=\" noopener\">yew</a></code>这类项目。</p>\n\n<p>在本教程中，我们将使用Rust的npm包构建工具<code>wasm-pack</code>来构建一个NPM包。这个包只包含WebAssembly和JavaScript代码，以便包的用户无需安装Rust就能使用。他们甚至不需要知道这里包含WebAssembly！</p></div>\n`,\n  },\n  js: {\n    title: 'JavaScript',\n    raw: `/**\n* Hello你好\n* 这是第2行\n*/\nfunction application() {\n  let example = \"这是single line单行注释\";\n  console.log(\\`这是string第1行\n  这是string第2行\n  \\`)\n\n  // autocorrect-disable\n  const disable_1 = \"这行将会disable掉\";\n  const disable_2 = \"这行将也会disable掉\";\n  // autocorrect-enable\n\n  const c = \"这是string第3行\";\n}\n    `,\n  },\n  css: {\n    title: 'CSS / SCSS',\n    raw: `\n/* \n  这是多行CSS第1行\n  这是第2行\n*/\n.btn {\n  .strong { font-weight: bold; }\n  padding: 10px; // comment在属性后面\n  // 这是comment单行\n  font: Helvetica, sans-serif;\n}\n`,\n  },\n  md: {\n    title: 'Markdown',\n    raw: `# 这是Heading 1大标题\n\n**加粗** \n*倾斜*\n~~删除线~~\n这是**Bold加粗**在1个段落中，这端会correct掉，如果是inline code，例如\\`Rust语言\\`，也可以应该处理。\n\n> 引用文本：Quote也是可以的。\n\n\\`\\`\\`rust\n// Codeblock里面也会处理\nlet a = \"你好hello\";\n\\`\\`\\`\n\n- ![img图片](https://google.com/a/b/url不处理)\n- [link链接](https://google.com/a/b/url不处理)`,\n  },\n  rust: {\n    title: 'Rust',\n    raw: `fn main() {\nlet number_list = vec![34, 50, 25, 100, 65];\n\nlet mut largest = number_list[0];\n\nlet regexp = %r\"包含#regexp测试\";\n\n// 1第一行Single line注释\n// 2第二行注释\nfor number in number_list {\n    if number > largest {\n        largest = number;\n    }\n}\n\n// autocorrect: false\nlet disable_1 = \"这行将会disable掉\";\nlet disable_2 = \"这行将也会disable掉\";\n// autocorrect: true\n\nlet a = r#\"\n这是第1行\n这是第2行\n\"#;\n\nlet b = r##\"\n这是第 3 行\n这是第 4 行\n\"##;\n\n/**\n * 多行Rust注释\n * 第二行Rust注释\n*/\nprintln!(\"最大的数字number是{}\", largest);\n}`,\n  },\n  go: {\n    title: 'Go',\n    raw: `// WithContext创建基于ctx的db\n// 第2行注释\nfunc (d *Dao) WithContext(ctx context.Context) (db *gorm.DB) {\n  a := \"第1个\"\n  b := \\`\n  多行string\n  第2行\n  \\`\n\n  re := regexp.MustCompile(\\`regexp不处理\\`)\n  re1 := regexp.Compile(\"regexp不处理\")\n  t := time.Parse(\"2006年01月02日 15:04\", t)\n\n  fmt.Println(a + b + \"go语言\")\n  fmt.Println(\"%s链接的内容不会空格%d也不处理，保守\", \"格式\", 100)\n  db = d.DB.WithContext(ctx)\n  return\n}`,\n  },\n  rb: {\n    title: 'Ruby',\n    raw: `# 第1行注释\n# 第2行注释\ndef hello(a, b: \"第1个参数\")\n  re = /hello你好/\n  re1 = %r{hello你好}\n  re2 = Regexp.new('hello你好' )\n  re3 = Regexp.new( \"hello你好\")\n\n  a = \"hello世界#{a}\"\n  b = '你好hello世界'\nend`,\n  },\n  py: {\n    title: 'Python',\n    raw: `'''\n这是多行1注释\n这是多行2注释\n这是多行3注释\n'''\ndef hello(a):\n  multi_str = \"\"\"\n  第1行多行字符串\n  第2行多行字符串\n  \"\"\"\n\n  re = r'包含#regexp测试'\n  re1 = r\"\"\"\n    包含re0测试\n    包含re1测试\n  \"\"\"\n  re2 = re.compile( \"hello你\" + \"world好\")\n\n  # 第4个注释\n  print(\"你好hello世界\")\n  print('你好hello世界')`,\n  },\n  objective_c: {\n    title: 'Objective-C',\n    raw: `// 第1行注释\n// 第2行注释\n- (void) helloWorld {\n  // 第3行注释\n  NSString *geotestUrl = @\"第1个字符串string\";\n\n  NSRegularExpression* re0 = [NSRegularExpression regularExpressionWithPattern:  @\"re正则\" options:0 error:&err];\n}`,\n  },\n  java: {\n    title: 'Java',\n    raw: `// 第1行注释\n// 第2行注释\npublic String helloWorld() {\n  // 第3行注释\n  String singleLineString = \"第1个字符串string\"\n\n  Pattern re0 = Pattern.compile(\"re正则\" );\n  Pattern.matches( \"re1正则\" , \"foobar你好\");\n\n  /**\n   * 第4行注释\n   * 第5行注释\n   */\n  String quotation = \"\"\"\n  这是多行string里面包含\"双引号\"\n  \"Begin at the beginning,\" the King said gravely.\n  \"\"\"\n}`,\n  },\n  swift: {\n    title: 'Swift',\n    raw: `// 第1行注释\n// 第2行注释\nfunc helloWorld(name: String) -> String {\n  // 第3行注释\n  let singleLineString = \"第1个字符串string\"\n\n  let quotation = \"\"\"\n这是多行string里面包含\"双引号\"\n\"Begin at the beginning,\" the King said gravely.\n\"\"\"\n\n  let re = try! NSRegularExpression(pattern:    \"re正则\")\n}`,\n  },\n  kt: {\n    title: 'Kotlin',\n    raw: `/** \n* 第1行注释\n* 第2行注释\n*/\nfun helloWorld(name: String) {\n  // 第3行注释\n  var singleLineString = \"第1个字符串string\"\n\n  var quotation = \"\"\"\n  这是多行string里面包含\"双引号\"\n  \"Begin at the beginning,\" the King said gravely.\n  \"\"\"\n\n  var re0 = Regex(\"re正则\" )\n  var re1 = \"re正则\".toRegex()\n}`,\n  },\n  php: {\n    title: 'PHP',\n    raw: `<div class=\"container\">\n<p>目前html tag里的无法处理</p>\n<?php\n  /** \n   * 第1行注释\n   * 第2行注释\n   */\n  class HelloWorld {\n      // 这是第3行注释\n      var singleLineString: String = \"单行string测试\"\n      var multilineString: String = \"多行string测试\n      第2行字符串\"\n\n      var re0 = preg_match( \"re1正则\", singleLineString )\n      var re1 = preg_match_all(\"re2正则\" ,  multilineString )\n  }\n?>\n</div>`,\n  },\n  cs: {\n    title: 'C#',\n    raw: `/**\n* 第1行注释\n* 第2行注释\n*/\npublic String helloWorld(stirng name) {\n  // 第3行注释\n  string singleLineString = \"第1个字符串string\";\n  string stringLiteral = $\"这是stringLiteral {name}!\";\n\n  string quotation = @\"\n  这是多行string第1行\n  这是多行string第2行\n  \";\n\n  Regex rx = new Regex( @\"re正则\", RegexOptions.Compiled  | RegexOptions.IgnoreCase);\n}`,\n  },\n  ex: {\n    title: 'Elixir',\n    raw: `defmodule Test do\n@moduledoc \"\"\"\n多行注释第1行\nmultiline comment第2行\n\"\"\"\n\ndef hello do\n  # 单行comment注释\n  str1 = \"hello你好双引号\"\n  str2 = 'hello你好单引号'\n  str3 = ~s(hello你好)\n  str4 = ~c(hello你好)\n\n  multiline_str = ~S\"\"\"\n  多行字符串第1行\n  多行string第2行\n  \"\"\"\n\n  pattern1 = ~r/hello正则/\n  pattern2 = Regex.compile(\"hello正则\")\nend\nend`,\n  },\n  dart: {\n    title: 'Dart',\n    raw: `/** \n* 第1行注释\n* 第2行注释\n*/\nString helloWorld(String name) {\n  // 第3行注释\n  var singleLineString = \"第1个字符串string\";\n  var singleLineString = '第2个字符串string';\n\n  var quotation = \"\"\"\n  这是第3行字符串\n  这是第4行\n  \"\"\";\n\n  let quotation = '''\n  这是第5行字符串\n  这是第6行\n  ''';\n\n  let re0 = r\"re正则\"\n  let re1 = r're正则'\n}`,\n  },\n  sql: {\n    title: 'SQL',\n    raw: `SELECT * FROM \"topics\" WHERE \"id\" = ?;\nCOMMENT ON COLUMN \"topics\".\"user_id\" IS 'topic创建者';\n-- Comment注释信息\nCOMMENT ON COLUMN \"topics\".\"status\" IS '3屏蔽 1审核中 2已发布';\n/* \n  多行，且带有换行\n  注释comment信息 \n*/\nCOMMENT ON COLUMN \"topics\".\"kind\" IS '0普通 1转发';`,\n  },\n  yml: {\n    title: 'YAML',\n    raw: `# this is comment line\nfoo: 'hello世界'\nregion:\n  cn-north-1\n\"en\":\n  name: \"你好Hello世界\"\n  foo: Bar\n  dar:\n    - foo: 1\n    - bar: \"数字2\"\n  \"abc字段\": abc字段`,\n  },\n  json: {\n    title: 'JSON',\n    raw: `{\n  \"name\": \"你好hello世界\",\n  \"displayName\": \"JSON格式测试\",\n  \"publisher\": \"huacnlee\",\n  \"meta\": {\n    // 第1行注释\n    \"title\": \"第1个meta\", \n    /** \n     * 第2行注释\n     * 第3行注释\n     */\n    \"description\": \"第2个meta\", \n    \"测试key不格式化\": false\n  }\n}`,\n  },\n  strings: {\n    title: 'Strings',\n    raw: `/* \n  InfoPlist.strings测试\n  Created by某某\n*/\n\n\"CFBundleDisplayName\" = \"App名称\";//app中文名称\n\"CFBundleIdentifier\" = \"huacnlee.autocorrect\";\n\n\"NSCameraUsageDescription\" = \"开启Wi-Fi后继续使用\";\n// 单行comment\n\"中文key测试\" = \"开启定位权限\";`,\n  },\n  txt: {\n    title: 'Plain Text',\n    raw: `苹果「最强促销」开启,最高可省4446元!但这些细节值得注意\n\n在7月16日–9月27日期间,只要你符合教育优惠的条件,便能以低价购买指定的Mac或iPad,并收获一副免费的AirPods 2耳机（官方售价1246元）.\n\n你可以加312元，换成无线充电盒款,也可以加753元，换成AirPods Pro?`,\n  },\n});\n\n\n//# sourceURL=webpack:///./examples.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _examples__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./examples */ \"./examples.js\");\nconst autocorrectLib = __webpack_require__.e(/*! import() */ \"node_modules_huacnlee_autocorrect_autocorrect_js\").then(__webpack_require__.bind(__webpack_require__, /*! @huacnlee/autocorrect */ \"./node_modules/@huacnlee/autocorrect/autocorrect.js\"));\n\n\nlet autocorrect;\nlet currentFileType = 'text';\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  autocorrectLib.then((ac) => {\n    autocorrect = ac;\n    window.autocorrect = ac;\n  });\n\n  const input = document.getElementById('input');\n  const btn = document.querySelector('#btn');\n  const btnLint = document.querySelector('#btn-lint');\n  const preview = document.querySelector('.preview');\n  const message = document.querySelector('.message');\n  const select = document.querySelector('#filetype');\n  const output = document.querySelector('#output');\n  const filename = document.querySelector('#filename');\n\n  const options = [];\n  Object.keys(_examples__WEBPACK_IMPORTED_MODULE_0__.default).forEach((key) => {\n    options.push(\n      \"<option value='\" + key + \"'>\" + _examples__WEBPACK_IMPORTED_MODULE_0__.default[key].title + '</option>'\n    );\n  });\n  select.innerHTML = options.join('');\n  select.value = 'html';\n\n  select.addEventListener('change', (e) => {\n    currentFileType = e.target.value;\n    const example = _examples__WEBPACK_IMPORTED_MODULE_0__.default[currentFileType];\n    input.value = example.raw;\n    filename.innerHTML = `FileType: ${currentFileType}`;\n  });\n\n  const formatText = (e) => {\n    e.preventDefault();\n\n    const start = new Date();\n    const result = autocorrect.formatFor(input.value, currentFileType);\n    const duration = new Date() - start;\n    message.innerHTML = `Speed time: ${duration}ms`;\n    preview.value = result.out;\n\n    return false;\n  };\n\n  const lintText = (e) => {\n    e.preventDefault();\n\n    const start = new Date();\n    const result = autocorrect.lintFor(input.value, currentFileType);\n    const duration = new Date() - start;\n    message.innerHTML = `Speed time: ${duration}ms`;\n    preview.value = JSON.stringify(result, null, 2);\n\n    return false;\n  };\n\n  // input.addEventListener('keyup', formatText);\n  btn.addEventListener('click', formatText);\n  btnLint.addEventListener('click', lintText);\n});\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".index.bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/wasm chunk loading */
/******/ 	(() => {
/******/ 		// object to store loaded and loading wasm modules
/******/ 		var installedWasmModules = {};
/******/ 		
/******/ 		function promiseResolve() { return Promise.resolve(); }
/******/ 		
/******/ 		var wasmImportedFuncCache0;
/******/ 		var wasmImportObjects = {
/******/ 			"./node_modules/@huacnlee/autocorrect/autocorrect_bg.wasm": function() {
/******/ 				return {
/******/ 					"./autocorrect_bg.js": {
/******/ 						"__wbindgen_json_parse": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache0 === undefined) wasmImportedFuncCache0 = __webpack_require__.c["./node_modules/@huacnlee/autocorrect/autocorrect_bg.js"].exports;
/******/ 							return wasmImportedFuncCache0["__wbindgen_json_parse"](p0i32,p1i32);
/******/ 						}
/******/ 					}
/******/ 				};
/******/ 			},
/******/ 		};
/******/ 		
/******/ 		var wasmModuleMap = {
/******/ 			"node_modules_huacnlee_autocorrect_autocorrect_js": [
/******/ 				"./node_modules/@huacnlee/autocorrect/autocorrect_bg.wasm"
/******/ 			]
/******/ 		};
/******/ 		
/******/ 		// object with all WebAssembly.instance exports
/******/ 		__webpack_require__.w = {};
/******/ 		
/******/ 		// Fetch + compile chunk loading for webassembly
/******/ 		__webpack_require__.f.wasm = function(chunkId, promises) {
/******/ 		
/******/ 			var wasmModules = wasmModuleMap[chunkId] || [];
/******/ 		
/******/ 			wasmModules.forEach(function(wasmModuleId, idx) {
/******/ 				var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/ 		
/******/ 				// a Promise means "currently loading" or "already loaded".
/******/ 				if(installedWasmModuleData)
/******/ 					promises.push(installedWasmModuleData);
/******/ 				else {
/******/ 					var importObject = wasmImportObjects[wasmModuleId]();
/******/ 					var req = fetch(__webpack_require__.p + "" + {"node_modules_huacnlee_autocorrect_autocorrect_js":{"./node_modules/@huacnlee/autocorrect/autocorrect_bg.wasm":"3f263bd7387e632bd6a3"}}[chunkId][wasmModuleId] + ".module.wasm");
/******/ 					var promise;
/******/ 					if(importObject && typeof importObject.then === 'function' && typeof WebAssembly.compileStreaming === 'function') {
/******/ 						promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 							return WebAssembly.instantiate(items[0], items[1]);
/******/ 						});
/******/ 					} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 						promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 					} else {
/******/ 						var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 						promise = bytesPromise.then(function(bytes) {
/******/ 							return WebAssembly.instantiate(bytes, importObject);
/******/ 						});
/******/ 					}
/******/ 					promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 						return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 					}));
/******/ 				}
/******/ 			});
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;