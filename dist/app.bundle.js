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

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n/* harmony import */ var _examples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./examples */ \"./examples.js\");\n\n\nconst autocorrectLib = __webpack_require__.e(/*! import() */ \"node_modules_huacnlee_autocorrect_autocorrect_js\").then(__webpack_require__.bind(__webpack_require__, /*! @huacnlee/autocorrect */ \"./node_modules/@huacnlee/autocorrect/autocorrect.js\"));\n\n\nlet autocorrect;\nlet currentFileType = 'text';\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  autocorrectLib.then((ac) => {\n    autocorrect = ac;\n    window.autocorrect = ac;\n  });\n\n  const input = document.getElementById('input');\n  const btn = document.querySelector('#btn');\n  const btnLint = document.querySelector('#btn-lint');\n  const preview = document.querySelector('.preview');\n  const message = document.querySelector('.message');\n  const select = document.querySelector('#filetype');\n  const output = document.querySelector('#output');\n  const filename = document.querySelector('#filename');\n\n  const options = [];\n  Object.keys(_examples__WEBPACK_IMPORTED_MODULE_1__.default).forEach((key) => {\n    options.push(\n      \"<option value='\" + key + \"'>\" + _examples__WEBPACK_IMPORTED_MODULE_1__.default[key].title + '</option>'\n    );\n  });\n  select.innerHTML = options.join('');\n  select.value = 'html';\n\n  select.addEventListener('change', (e) => {\n    currentFileType = e.target.value;\n    const example = _examples__WEBPACK_IMPORTED_MODULE_1__.default[currentFileType];\n    input.value = example.raw;\n    filename.innerHTML = `FileType: ${currentFileType}`;\n  });\n\n  const formatText = (e) => {\n    e.preventDefault();\n\n    const start = new Date();\n    const result = autocorrect.formatFor(input.value, currentFileType);\n    const duration = new Date() - start;\n    message.innerHTML = `Speed time: ${duration}ms`;\n    preview.value = result.out;\n\n    return false;\n  };\n\n  const lintText = (e) => {\n    e.preventDefault();\n\n    const start = new Date();\n    const result = autocorrect.lintFor(input.value, currentFileType);\n    const duration = new Date() - start;\n    message.innerHTML = `Speed time: ${duration}ms`;\n    preview.value = JSON.stringify(result, null, 2);\n\n    return false;\n  };\n\n  // input.addEventListener('keyup', formatText);\n  btn.addEventListener('click', formatText);\n  btnLint.addEventListener('click', lintText);\n});\n\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./examples.js":
/*!*********************!*\
  !*** ./examples.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// autocorrect: false\n{\n  /* <option selected value=\"html\">HTML</option>\n<option value=\"js\">JavaScript</option>\n<option value=\"ts\">TypeScript</option>\n<option value=\"css\">CSS / SCSS</option>\n<option value=\"json\">JSON</option>\n<option value=\"yml\">YAML</option>\n<option value=\"go\">Go</option>\n<option value=\"rs\">Rust</option>\n<option value=\"rb\">Ruby</option>\n<option value=\"py\">Python</option>\n<option value=\"java\">Java</option>\n<option value=\"php\">PHP</option>\n<option value=\"sql\">SQL</option>\n<option value=\"objective_c\">Objective-C</option>\n<option value=\"swift\">Swift</option>\n<option value=\"scala\">Scala</option>\n<option value=\"kt\">Kotlin</option>\n<option value=\"dart\">Dart</option>\n<option value=\"ex\">Elixir</option>\n<option value=\"csharp\">C#</option>\n<option value=\"md\">Markdown</option>\n<option value=\"plain\">Plain Text</option> */\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  html: {\n    title: 'HTML',\n    raw: `<h1>编译Rust为WebAssembly</h1>\n<div></div>\n<p class=\"summary\">如果你写了一些Rust代码，你可以把它编译成WebAssembly！这份教程将带你编译Rust项目为wasm并在一个现存的web应用中使用它。</p></div>\n<h2 id=\"rust_和_webassembly_用例\"><a href=\"#rust_和_webassembly_用例\" title=\"Permalink to Rust和WebAssembly用例\">Rust和WebAssembly用例</a></h2>\n<div><p>Rust和WebAssembly有两大主要用例：</p>\n<ul>\n<li>构建完整应用 —— 整个Web应用都基于Rust开发！</li>\n<li>构建应用的组成部分 —— 在现存的JavaScript前端中使用Rust。</li>\n</ul>\n\n<p>目前，Rust团队正专注于第二种用例，因此我们也将着重介绍它。对于第一种用例，可以参阅<code><a href=\"https://github.com/DenisKolodin/yew\" class=\"external\" rel=\" noopener\">yew</a></code>这类项目。</p>\n\n<p>在本教程中，我们将使用Rust的npm包构建工具<code>wasm-pack</code>来构建一个NPM包。这个包只包含WebAssembly和JavaScript代码，以便包的用户无需安装Rust就能使用。他们甚至不需要知道这里包含WebAssembly！</p></div>\n`,\n  },\n  js: {\n    title: 'JavaScript',\n    raw: `/**\n* Hello你好\n* 这是第2行\n*/\nfunction application() {\n  let example = \"这是single line单行注释\";\n  console.log(\\`这是string第1行\n  这是string第2行\n  \\`)\n\n  // autocorrect-disable\n  const disable_1 = \"这行将会disable掉\";\n  const disable_2 = \"这行将也会disable掉\";\n  // autocorrect-enable\n\n  const c = \"这是string第3行\";\n}\n    `,\n  },\n  css: {\n    title: 'CSS / SCSS',\n    raw: `\n/* \n  这是多行CSS第1行\n  这是第2行\n*/\n.btn {\n  .strong { font-weight: bold; }\n  padding: 10px; // comment在属性后面\n  // 这是comment单行\n  font: Helvetica, sans-serif;\n}\n`,\n  },\n  md: {\n    title: 'Markdown',\n    raw: `# 这是Heading 1大标题\n\n**加粗** \n*倾斜*\n~~删除线~~\n这是**Bold加粗**在1个段落中，这端会correct掉，如果是inline code，例如\\`Rust语言\\`，也可以应该处理。\n\n> 引用文本：Quote也是可以的。\n\n\\`\\`\\`rust\n// Codeblock里面也会处理\nlet a = \"你好hello\";\n\\`\\`\\`\n\n- ![img图片](https://google.com/a/b/url不处理)\n- [link链接](https://google.com/a/b/url不处理)`,\n  },\n  rust: {\n    title: 'Rust',\n    raw: `fn main() {\nlet number_list = vec![34, 50, 25, 100, 65];\n\nlet mut largest = number_list[0];\n\nlet regexp = %r\"包含#regexp测试\";\n\n// 1第一行Single line注释\n// 2第二行注释\nfor number in number_list {\n    if number > largest {\n        largest = number;\n    }\n}\n\n// autocorrect: false\nlet disable_1 = \"这行将会disable掉\";\nlet disable_2 = \"这行将也会disable掉\";\n// autocorrect: true\n\nlet a = r#\"\n这是第1行\n这是第2行\n\"#;\n\nlet b = r##\"\n这是第 3 行\n这是第 4 行\n\"##;\n\n/**\n * 多行Rust注释\n * 第二行Rust注释\n*/\nprintln!(\"最大的数字number是{}\", largest);\n}`,\n  },\n  go: {\n    title: 'Go',\n    raw: `// WithContext创建基于ctx的db\n// 第2行注释\nfunc (d *Dao) WithContext(ctx context.Context) (db *gorm.DB) {\n  a := \"第1个\"\n  b := \\`\n  多行string\n  第2行\n  \\`\n\n  re := regexp.MustCompile(\\`regexp不处理\\`)\n  re1 := regexp.Compile(\"regexp不处理\")\n  t := time.Parse(\"2006年01月02日 15:04\", t)\n\n  fmt.Println(a + b + \"go语言\")\n  fmt.Println(\"%s链接的内容不会空格%d也不处理，保守\", \"格式\", 100)\n  db = d.DB.WithContext(ctx)\n  return\n}`,\n  },\n  rb: {\n    title: 'Ruby',\n    raw: `# 第1行注释\n# 第2行注释\ndef hello(a, b: \"第1个参数\")\n  re = /hello你好/\n  re1 = %r{hello你好}\n  re2 = Regexp.new('hello你好' )\n  re3 = Regexp.new( \"hello你好\")\n\n  a = \"hello世界#{a}\"\n  b = '你好hello世界'\nend`,\n  },\n  py: {\n    title: 'Python',\n    raw: `'''\n这是多行1注释\n这是多行2注释\n这是多行3注释\n'''\ndef hello(a):\n  multi_str = \"\"\"\n  第1行多行字符串\n  第2行多行字符串\n  \"\"\"\n\n  re = r'包含#regexp测试'\n  re1 = r\"\"\"\n    包含re0测试\n    包含re1测试\n  \"\"\"\n  re2 = re.compile( \"hello你\" + \"world好\")\n\n  # 第4个注释\n  print(\"你好hello世界\")\n  print('你好hello世界')`,\n  },\n  objective_c: {\n    title: 'Objective-C',\n    raw: `// 第1行注释\n// 第2行注释\n- (void) helloWorld {\n  // 第3行注释\n  NSString *geotestUrl = @\"第1个字符串string\";\n\n  NSRegularExpression* re0 = [NSRegularExpression regularExpressionWithPattern:  @\"re正则\" options:0 error:&err];\n}`,\n  },\n  java: {\n    title: 'Java',\n    raw: `// 第1行注释\n// 第2行注释\npublic String helloWorld() {\n  // 第3行注释\n  String singleLineString = \"第1个字符串string\"\n\n  Pattern re0 = Pattern.compile(\"re正则\" );\n  Pattern.matches( \"re1正则\" , \"foobar你好\");\n\n  /**\n   * 第4行注释\n   * 第5行注释\n   */\n  String quotation = \"\"\"\n  这是多行string里面包含\"双引号\"\n  \"Begin at the beginning,\" the King said gravely.\n  \"\"\"\n}`,\n  },\n  swift: {\n    title: 'Swift',\n    raw: `// 第1行注释\n// 第2行注释\nfunc helloWorld(name: String) -> String {\n  // 第3行注释\n  let singleLineString = \"第1个字符串string\"\n\n  let quotation = \"\"\"\n这是多行string里面包含\"双引号\"\n\"Begin at the beginning,\" the King said gravely.\n\"\"\"\n\n  let re = try! NSRegularExpression(pattern:    \"re正则\")\n}`,\n  },\n  kt: {\n    title: 'Kotlin',\n    raw: `/** \n* 第1行注释\n* 第2行注释\n*/\nfun helloWorld(name: String) {\n  // 第3行注释\n  var singleLineString = \"第1个字符串string\"\n\n  var quotation = \"\"\"\n  这是多行string里面包含\"双引号\"\n  \"Begin at the beginning,\" the King said gravely.\n  \"\"\"\n\n  var re0 = Regex(\"re正则\" )\n  var re1 = \"re正则\".toRegex()\n}`,\n  },\n  php: {\n    title: 'PHP',\n    raw: `<div class=\"container\">\n<p>目前html tag里的无法处理</p>\n<?php\n  /** \n   * 第1行注释\n   * 第2行注释\n   */\n  class HelloWorld {\n      // 这是第3行注释\n      var singleLineString: String = \"单行string测试\"\n      var multilineString: String = \"多行string测试\n      第2行字符串\"\n\n      var re0 = preg_match( \"re1正则\", singleLineString )\n      var re1 = preg_match_all(\"re2正则\" ,  multilineString )\n  }\n?>\n</div>`,\n  },\n  cs: {\n    title: 'C#',\n    raw: `/**\n* 第1行注释\n* 第2行注释\n*/\npublic String helloWorld(stirng name) {\n  // 第3行注释\n  string singleLineString = \"第1个字符串string\";\n  string stringLiteral = $\"这是stringLiteral {name}!\";\n\n  string quotation = @\"\n  这是多行string第1行\n  这是多行string第2行\n  \";\n\n  Regex rx = new Regex( @\"re正则\", RegexOptions.Compiled  | RegexOptions.IgnoreCase);\n}`,\n  },\n  ex: {\n    title: 'Elixir',\n    raw: `defmodule Test do\n@moduledoc \"\"\"\n多行注释第1行\nmultiline comment第2行\n\"\"\"\n\ndef hello do\n  # 单行comment注释\n  str1 = \"hello你好双引号\"\n  str2 = 'hello你好单引号'\n  str3 = ~s(hello你好)\n  str4 = ~c(hello你好)\n\n  multiline_str = ~S\"\"\"\n  多行字符串第1行\n  多行string第2行\n  \"\"\"\n\n  pattern1 = ~r/hello正则/\n  pattern2 = Regex.compile(\"hello正则\")\nend\nend`,\n  },\n  dart: {\n    title: 'Dart',\n    raw: `/** \n* 第1行注释\n* 第2行注释\n*/\nString helloWorld(String name) {\n  // 第3行注释\n  var singleLineString = \"第1个字符串string\";\n  var singleLineString = '第2个字符串string';\n\n  var quotation = \"\"\"\n  这是第3行字符串\n  这是第4行\n  \"\"\";\n\n  let quotation = '''\n  这是第5行字符串\n  这是第6行\n  ''';\n\n  let re0 = r\"re正则\"\n  let re1 = r're正则'\n}`,\n  },\n  sql: {\n    title: 'SQL',\n    raw: `SELECT * FROM \"topics\" WHERE \"id\" = ?;\nCOMMENT ON COLUMN \"topics\".\"user_id\" IS 'topic创建者';\n-- Comment注释信息\nCOMMENT ON COLUMN \"topics\".\"status\" IS '3屏蔽 1审核中 2已发布';\n/* \n  多行，且带有换行\n  注释comment信息 \n*/\nCOMMENT ON COLUMN \"topics\".\"kind\" IS '0普通 1转发';`,\n  },\n  yml: {\n    title: 'YAML',\n    raw: `# this is comment line\nfoo: 'hello世界'\nregion:\n  cn-north-1\n\"en\":\n  name: \"你好Hello世界\"\n  foo: Bar\n  dar:\n    - foo: 1\n    - bar: \"数字2\"\n  \"abc字段\": abc字段`,\n  },\n  json: {\n    title: 'JSON',\n    raw: `{\n  \"name\": \"你好hello世界\",\n  \"displayName\": \"JSON格式测试\",\n  \"publisher\": \"huacnlee\",\n  \"meta\": {\n    // 第1行注释\n    \"title\": \"第1个meta\", \n    /** \n     * 第2行注释\n     * 第3行注释\n     */\n    \"description\": \"第2个meta\", \n    \"测试key不格式化\": false\n  }\n}`,\n  },\n  strings: {\n    title: 'Strings',\n    raw: `/* \n  InfoPlist.strings测试\n  Created by某某\n*/\n\n\"CFBundleDisplayName\" = \"App名称\";//app中文名称\n\"CFBundleIdentifier\" = \"huacnlee.autocorrect\";\n\n\"NSCameraUsageDescription\" = \"开启Wi-Fi后继续使用\";\n// 单行comment\n\"中文key测试\" = \"开启定位权限\";`,\n  },\n  txt: {\n    title: 'Plain Text',\n    raw: `苹果「最强促销」开启,最高可省4446元!但这些细节值得注意\n\n在7月16日–9月27日期间,只要你符合教育优惠的条件,便能以低价购买指定的Mac或iPad,并收获一副免费的AirPods 2耳机（官方售价1246元）.\n\n你可以加312元，换成无线充电盒款,也可以加753元，换成AirPods Pro?`,\n  },\n});\n\n\n//# sourceURL=webpack:///./examples.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./style.css":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./style.css ***!
  \******************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e */ \"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\n! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com\\n*/\\n/*\\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\\n*/\\n*,\\n::before,\\n::after {\\n  box-sizing: border-box;\\n  /* 1 */\\n  border-width: 0;\\n  /* 2 */\\n  border-style: solid;\\n  /* 2 */\\n  border-color: #e5e7eb;\\n  /* 2 */\\n}\\n\\n::before,\\n::after {\\n  --tw-content: \\\"\\\";\\n}\\n\\n/*\\n1. Use a consistent sensible line-height in all browsers.\\n2. Prevent adjustments of font size after orientation changes in iOS.\\n3. Use a more readable tab size.\\n4. Use the user's configured `sans` font-family by default.\\n*/\\nhtml {\\n  line-height: 1.5;\\n  /* 1 */\\n  -webkit-text-size-adjust: 100%;\\n  /* 2 */\\n  -moz-tab-size: 4;\\n  /* 3 */\\n  -o-tab-size: 4;\\n  tab-size: 4;\\n  /* 3 */\\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, \\\"Helvetica Neue\\\", Arial, \\\"Noto Sans\\\", sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\", \\\"Noto Color Emoji\\\";\\n  /* 4 */\\n}\\n\\n/*\\n1. Remove the margin in all browsers.\\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\\n*/\\nbody {\\n  margin: 0;\\n  /* 1 */\\n  line-height: inherit;\\n  /* 2 */\\n}\\n\\n/*\\n1. Add the correct height in Firefox.\\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\\n3. Ensure horizontal rules are visible by default.\\n*/\\nhr {\\n  height: 0;\\n  /* 1 */\\n  color: inherit;\\n  /* 2 */\\n  border-top-width: 1px;\\n  /* 3 */\\n}\\n\\n/*\\nAdd the correct text decoration in Chrome, Edge, and Safari.\\n*/\\nabbr:where([title]) {\\n  -webkit-text-decoration: underline dotted;\\n  text-decoration: underline dotted;\\n}\\n\\n/*\\nRemove the default font size and weight for headings.\\n*/\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  font-size: inherit;\\n  font-weight: inherit;\\n}\\n\\n/*\\nReset links to optimize for opt-in styling instead of opt-out.\\n*/\\na {\\n  color: inherit;\\n  text-decoration: inherit;\\n}\\n\\n/*\\nAdd the correct font weight in Edge and Safari.\\n*/\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/*\\n1. Use the user's configured `mono` font family by default.\\n2. Correct the odd `em` font sizing in all browsers.\\n*/\\ncode,\\nkbd,\\nsamp,\\npre {\\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \\\"Liberation Mono\\\", \\\"Courier New\\\", monospace;\\n  /* 1 */\\n  font-size: 1em;\\n  /* 2 */\\n}\\n\\n/*\\nAdd the correct font size in all browsers.\\n*/\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/*\\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\\n*/\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/*\\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\\n3. Remove gaps between table borders by default.\\n*/\\ntable {\\n  text-indent: 0;\\n  /* 1 */\\n  border-color: inherit;\\n  /* 2 */\\n  border-collapse: collapse;\\n  /* 3 */\\n}\\n\\n/*\\n1. Change the font styles in all browsers.\\n2. Remove the margin in Firefox and Safari.\\n3. Remove default padding in all browsers.\\n*/\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit;\\n  /* 1 */\\n  font-size: 100%;\\n  /* 1 */\\n  line-height: inherit;\\n  /* 1 */\\n  color: inherit;\\n  /* 1 */\\n  margin: 0;\\n  /* 2 */\\n  padding: 0;\\n  /* 3 */\\n}\\n\\n/*\\nRemove the inheritance of text transform in Edge and Firefox.\\n*/\\nbutton,\\nselect {\\n  text-transform: none;\\n}\\n\\n/*\\n1. Correct the inability to style clickable types in iOS and Safari.\\n2. Remove default button styles.\\n*/\\nbutton,\\n[type=button],\\n[type=reset],\\n[type=submit] {\\n  -webkit-appearance: button;\\n  /* 1 */\\n  background-color: transparent;\\n  /* 2 */\\n  background-image: none;\\n  /* 2 */\\n}\\n\\n/*\\nUse the modern Firefox focus style for all focusable elements.\\n*/\\n:-moz-focusring {\\n  outline: auto;\\n}\\n\\n/*\\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\\n*/\\n:-moz-ui-invalid {\\n  box-shadow: none;\\n}\\n\\n/*\\nAdd the correct vertical alignment in Chrome and Firefox.\\n*/\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/*\\nCorrect the cursor style of increment and decrement buttons in Safari.\\n*/\\n::-webkit-inner-spin-button,\\n::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/*\\n1. Correct the odd appearance in Chrome and Safari.\\n2. Correct the outline style in Safari.\\n*/\\n[type=search] {\\n  -webkit-appearance: textfield;\\n  /* 1 */\\n  outline-offset: -2px;\\n  /* 2 */\\n}\\n\\n/*\\nRemove the inner padding in Chrome and Safari on macOS.\\n*/\\n::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/*\\n1. Correct the inability to style clickable types in iOS and Safari.\\n2. Change font properties to `inherit` in Safari.\\n*/\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button;\\n  /* 1 */\\n  font: inherit;\\n  /* 2 */\\n}\\n\\n/*\\nAdd the correct display in Chrome and Safari.\\n*/\\nsummary {\\n  display: list-item;\\n}\\n\\n/*\\nRemoves the default spacing and border for appropriate elements.\\n*/\\nblockquote,\\ndl,\\ndd,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\nhr,\\nfigure,\\np,\\npre {\\n  margin: 0;\\n}\\n\\nfieldset {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nlegend {\\n  padding: 0;\\n}\\n\\nol,\\nul,\\nmenu {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n/*\\nPrevent resizing textareas horizontally by default.\\n*/\\ntextarea {\\n  resize: vertical;\\n}\\n\\n/*\\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\\n2. Set the default placeholder color to the user's configured gray 400 color.\\n*/\\ninput::-moz-placeholder, textarea::-moz-placeholder {\\n  opacity: 1;\\n  /* 1 */\\n  color: #9ca3af;\\n  /* 2 */\\n}\\n\\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\\n  opacity: 1;\\n  /* 1 */\\n  color: #9ca3af;\\n  /* 2 */\\n}\\n\\ninput::placeholder,\\ntextarea::placeholder {\\n  opacity: 1;\\n  /* 1 */\\n  color: #9ca3af;\\n  /* 2 */\\n}\\n\\n/*\\nSet the default cursor for buttons.\\n*/\\nbutton,\\n[role=button] {\\n  cursor: pointer;\\n}\\n\\n/*\\nMake sure disabled buttons don't get the pointer cursor.\\n*/\\n:disabled {\\n  cursor: default;\\n}\\n\\n/*\\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\\n   This can trigger a poorly considered lint error in some tools but is included by design.\\n*/\\nimg,\\nsvg,\\nvideo,\\ncanvas,\\naudio,\\niframe,\\nembed,\\nobject {\\n  display: block;\\n  /* 1 */\\n  vertical-align: middle;\\n  /* 2 */\\n}\\n\\n/*\\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\\n*/\\nimg,\\nvideo {\\n  max-width: 100%;\\n  height: auto;\\n}\\n\\n/*\\nEnsure the default browser behavior of the `hidden` attribute.\\n*/\\n[hidden] {\\n  display: none;\\n}\\n\\n*, ::before, ::after {\\n  --tw-translate-x: 0;\\n  --tw-translate-y: 0;\\n  --tw-rotate: 0;\\n  --tw-skew-x: 0;\\n  --tw-skew-y: 0;\\n  --tw-scale-x: 1;\\n  --tw-scale-y: 1;\\n  --tw-pan-x: ;\\n  --tw-pan-y: ;\\n  --tw-pinch-zoom: ;\\n  --tw-scroll-snap-strictness: proximity;\\n  --tw-ordinal: ;\\n  --tw-slashed-zero: ;\\n  --tw-numeric-figure: ;\\n  --tw-numeric-spacing: ;\\n  --tw-numeric-fraction: ;\\n  --tw-ring-inset: ;\\n  --tw-ring-offset-width: 0px;\\n  --tw-ring-offset-color: #fff;\\n  --tw-ring-color: rgb(59 130 246 / 0.5);\\n  --tw-ring-offset-shadow: 0 0 #0000;\\n  --tw-ring-shadow: 0 0 #0000;\\n  --tw-shadow: 0 0 #0000;\\n  --tw-shadow-colored: 0 0 #0000;\\n  --tw-blur: ;\\n  --tw-brightness: ;\\n  --tw-contrast: ;\\n  --tw-grayscale: ;\\n  --tw-hue-rotate: ;\\n  --tw-invert: ;\\n  --tw-saturate: ;\\n  --tw-sepia: ;\\n  --tw-drop-shadow: ;\\n  --tw-backdrop-blur: ;\\n  --tw-backdrop-brightness: ;\\n  --tw-backdrop-contrast: ;\\n  --tw-backdrop-grayscale: ;\\n  --tw-backdrop-hue-rotate: ;\\n  --tw-backdrop-invert: ;\\n  --tw-backdrop-opacity: ;\\n  --tw-backdrop-saturate: ;\\n  --tw-backdrop-sepia: ;\\n}\\n\\n.container {\\n  width: 100%;\\n}\\n\\n@media (min-width: 640px) {\\n  .container {\\n    max-width: 640px;\\n  }\\n}\\n@media (min-width: 768px) {\\n  .container {\\n    max-width: 768px;\\n  }\\n}\\n@media (min-width: 1024px) {\\n  .container {\\n    max-width: 1024px;\\n  }\\n}\\n@media (min-width: 1280px) {\\n  .container {\\n    max-width: 1280px;\\n  }\\n}\\n@media (min-width: 1536px) {\\n  .container {\\n    max-width: 1536px;\\n  }\\n}\\n.absolute {\\n  position: absolute;\\n}\\n\\n.relative {\\n  position: relative;\\n}\\n\\n.mx-auto {\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n\\n.mx-2 {\\n  margin-left: 0.5rem;\\n  margin-right: 0.5rem;\\n}\\n\\n.mb-10 {\\n  margin-bottom: 2.5rem;\\n}\\n\\n.mb-6 {\\n  margin-bottom: 1.5rem;\\n}\\n\\n.mb-4 {\\n  margin-bottom: 1rem;\\n}\\n\\n.flex {\\n  display: flex;\\n}\\n\\n.table {\\n  display: table;\\n}\\n\\n.contents {\\n  display: contents;\\n}\\n\\n.w-full {\\n  width: 100%;\\n}\\n\\n.min-w-\\\\[250px\\\\] {\\n  min-width: 250px;\\n}\\n\\n.max-w-3xl {\\n  max-width: 48rem;\\n}\\n\\n.max-w-\\\\[720px\\\\] {\\n  max-width: 720px;\\n}\\n\\n.border-collapse {\\n  border-collapse: collapse;\\n}\\n\\n.flex-col {\\n  flex-direction: column;\\n}\\n\\n.flex-wrap {\\n  flex-wrap: wrap;\\n}\\n\\n.items-center {\\n  align-items: center;\\n}\\n\\n.justify-center {\\n  justify-content: center;\\n}\\n\\n.justify-between {\\n  justify-content: space-between;\\n}\\n\\n.space-y-6 > :not([hidden]) ~ :not([hidden]) {\\n  --tw-space-y-reverse: 0;\\n  margin-top: calc(1.5rem * (1 - var(--tw-space-y-reverse)));\\n  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));\\n}\\n\\n.space-y-3 > :not([hidden]) ~ :not([hidden]) {\\n  --tw-space-y-reverse: 0;\\n  margin-top: calc(0.75rem * (1 - var(--tw-space-y-reverse)));\\n  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));\\n}\\n\\n.space-y-2 > :not([hidden]) ~ :not([hidden]) {\\n  --tw-space-y-reverse: 0;\\n  margin-top: calc(0.5rem * (1 - var(--tw-space-y-reverse)));\\n  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\\n}\\n\\n.border {\\n  border-width: 1px;\\n}\\n\\n.text-center {\\n  text-align: center;\\n}\\n\\n.text-3xl {\\n  font-size: 1.875rem;\\n  line-height: 2.25rem;\\n}\\n\\n.text-lg {\\n  font-size: 1.125rem;\\n  line-height: 1.75rem;\\n}\\n\\n.text-xs {\\n  font-size: 0.75rem;\\n  line-height: 1rem;\\n}\\n\\n.text-2xl {\\n  font-size: 1.5rem;\\n  line-height: 2rem;\\n}\\n\\n.text-gray-200 {\\n  --tw-text-opacity: 1;\\n  color: rgb(229 231 235/var(--tw-text-opacity));\\n}\\n\\n.filter {\\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\\n}\\n\\nbody {\\n  padding-left: 1.5rem;\\n  padding-right: 1.5rem;\\n  text-align: center;\\n  font-size: 0.875rem;\\n  line-height: 1.25rem;\\n}\\n\\n@media (min-width: 1024px) {\\n  body {\\n    padding-left: 0px;\\n    padding-right: 0px;\\n  }\\n}\\n.container {\\n  margin-top: 2rem;\\n  margin-bottom: 2rem;\\n  margin-left: auto;\\n  margin-right: auto;\\n  width: 100%;\\n  max-width: 64rem;\\n  text-align: left;\\n}\\n\\n.navbar {\\n  font-size: 1.125rem;\\n  line-height: 1.75rem;\\n  --tw-text-opacity: 1;\\n  color: rgb(209 213 219/var(--tw-text-opacity));\\n}\\n.navbar a {\\n  padding-left: 0.5rem;\\n  padding-right: 0.5rem;\\n}\\n.navbar a {\\n  --tw-text-opacity: 1;\\n  color: rgb(37 99 235/var(--tw-text-opacity));\\n}\\n\\n.sub-navbar {\\n  font-size: 1rem;\\n  line-height: 1.5rem;\\n  --tw-text-opacity: 1;\\n  color: rgb(209 213 219/var(--tw-text-opacity));\\n}\\n.sub-navbar a {\\n  padding-left: 0.5rem;\\n  padding-right: 0.5rem;\\n}\\n.sub-navbar a {\\n  --tw-text-opacity: 1;\\n  color: rgb(75 85 99/var(--tw-text-opacity));\\n}\\n\\n.intro {\\n  text-align: left;\\n  font-size: 1rem;\\n  line-height: 1.5rem;\\n}\\n.intro p {\\n  margin-bottom: 1.25rem;\\n}\\n.intro p {\\n  text-align: justify;\\n}\\n\\n.preview, textarea {\\n  display: block;\\n  width: 100%;\\n  border-radius: 0.375rem;\\n  border-width: 1px;\\n  --tw-border-opacity: 1;\\n  border-color: rgb(209 213 219/var(--tw-border-opacity));\\n  padding: 1rem;\\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-shadow);\\n}\\n\\n.preview:focus, textarea:focus {\\n  --tw-border-opacity: 1;\\n  border-color: rgb(59 130 246/var(--tw-border-opacity));\\n  --tw-ring-opacity: 1;\\n  --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity));\\n}\\n\\n@media (min-width: 640px) {\\n  .preview, textarea {\\n    font-size: 0.875rem;\\n    line-height: 1.25rem;\\n  }\\n}\\n.preview, textarea {\\n  height: 250px;\\n}\\n\\n@media (min-width: 1024px) {\\n  .preview, textarea {\\n    height: 570px;\\n  }\\n}\\ntextarea[readonly] {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(249 250 251/var(--tw-bg-opacity));\\n}\\n\\ntextarea[readonly]:focus {\\n  --tw-border-opacity: 1;\\n  border-color: rgb(209 213 219/var(--tw-border-opacity));\\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0, 0, 0, 0));\\n}\\n\\nselect {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-position: right 0.5rem center;\\n  background-repeat: no-repeat;\\n  background-size: 1.5em 1.5em;\\n  -webkit-print-color-adjust: exact;\\n  color-adjust: exact;\\n  -webkit-appearance: none;\\n  -moz-appearance: none;\\n  appearance: none;\\n  display: block;\\n  border-radius: 0.375rem;\\n  border-width: 1px;\\n  --tw-border-opacity: 1;\\n  border-color: rgb(209 213 219/var(--tw-border-opacity));\\n  padding-top: 0.5rem;\\n  padding-bottom: 0.5rem;\\n  padding-left: 0.75rem;\\n  padding-right: 2.5rem;\\n  font-size: 1rem;\\n  line-height: 1.5rem;\\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-shadow);\\n}\\n\\nselect:focus {\\n  --tw-border-opacity: 1;\\n  border-color: rgb(59 130 246/var(--tw-border-opacity));\\n  outline: 2px solid transparent;\\n  outline-offset: 2px;\\n  --tw-ring-opacity: 1;\\n  --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity));\\n}\\n\\n@media (min-width: 640px) {\\n  select {\\n    font-size: 0.875rem;\\n    line-height: 1.25rem;\\n  }\\n}\\nbutton {\\n  border-radius: 0.375rem;\\n  border-width: 0px;\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(17 24 39/var(--tw-bg-opacity));\\n  padding-top: 0.75rem;\\n  padding-bottom: 0.75rem;\\n  padding-left: 2.5rem;\\n  padding-right: 2.5rem;\\n  line-height: 1rem;\\n  --tw-text-opacity: 1;\\n  color: rgb(255 255 255/var(--tw-text-opacity));\\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-shadow);\\n}\\nbutton:active {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(0 0 0/var(--tw-bg-opacity));\\n}\\n\\n.btn {\\n  display: block;\\n  white-space: nowrap;\\n  border-radius: 0.375rem;\\n  border-width: 0px;\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(55 65 81/var(--tw-bg-opacity));\\n  padding-top: 0.5rem;\\n  padding-bottom: 0.5rem;\\n  padding-left: 1.5rem;\\n  padding-right: 1.5rem;\\n  font-size: 1.125rem;\\n  line-height: 1.75rem;\\n  line-height: 1;\\n  --tw-text-opacity: 1;\\n  color: rgb(255 255 255/var(--tw-text-opacity));\\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-shadow);\\n}\\n\\n@media (min-width: 1024px) {\\n  .btn {\\n    padding-top: 0.75rem;\\n    padding-bottom: 0.75rem;\\n    padding-left: 3rem;\\n    padding-right: 3rem;\\n  }\\n}\\n.btn-install {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(37 99 235/var(--tw-bg-opacity));\\n}\\n\\n.btn-download {\\n  --tw-bg-opacity: 1;\\n  background-color: rgb(22 163 74/var(--tw-bg-opacity));\\n}\\n\\n.message {\\n  margin-left: 0.75rem;\\n  --tw-text-opacity: 1;\\n  color: rgb(22 163 74/var(--tw-text-opacity));\\n}\\n\\n@media (min-width: 768px) {\\n  .md\\\\:flex-row {\\n    flex-direction: row;\\n  }\\n\\n  .md\\\\:space-y-0 > :not([hidden]) ~ :not([hidden]) {\\n    --tw-space-y-reverse: 0;\\n    margin-top: calc(0px * (1 - var(--tw-space-y-reverse)));\\n    margin-bottom: calc(0px * var(--tw-space-y-reverse));\\n  }\\n\\n  .md\\\\:space-x-6 > :not([hidden]) ~ :not([hidden]) {\\n    --tw-space-x-reverse: 0;\\n    margin-right: calc(1.5rem * var(--tw-space-x-reverse));\\n    margin-left: calc(1.5rem * (1 - var(--tw-space-x-reverse)));\\n  }\\n}\\n@media (min-width: 1024px) {\\n  .lg\\\\:flex-nowrap {\\n    flex-wrap: nowrap;\\n  }\\n\\n  .lg\\\\:space-x-6 > :not([hidden]) ~ :not([hidden]) {\\n    --tw-space-x-reverse: 0;\\n    margin-right: calc(1.5rem * var(--tw-space-x-reverse));\\n    margin-left: calc(1.5rem * (1 - var(--tw-space-x-reverse)));\\n  }\\n\\n  .lg\\\\:space-y-0 > :not([hidden]) ~ :not([hidden]) {\\n    --tw-space-y-reverse: 0;\\n    margin-top: calc(0px * (1 - var(--tw-space-y-reverse)));\\n    margin-bottom: calc(0px * var(--tw-space-y-reverse));\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./style.css?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack:///./style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

eval("module.exports = \"data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3e%3cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3e%3c/svg%3e\";\n\n//# sourceURL=webpack:///data:image/svg+xml,%253csvg_xmlns=%2527http://www.w3.org/2000/svg%2527_fill=%2527none%2527_viewBox=%25270_0_20_20%2527%253e%253cpath_stroke=%2527%25236b7280%2527_stroke-linecap=%2527round%2527_stroke-linejoin=%2527round%2527_stroke-width=%25271.5%2527_d=%2527M6_8l4_4_4-4%2527/%253e%253c/svg%253e?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 			return "" + chunkId + ".app.bundle.js";
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
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
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
/******/ 		var wasmImportedFuncCache1;
/******/ 		var wasmImportObjects = {
/******/ 			"./node_modules/@huacnlee/autocorrect/autocorrect_bg.wasm": function() {
/******/ 				return {
/******/ 					"./autocorrect_bg.js": {
/******/ 						"__wbindgen_json_parse": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache0 === undefined) wasmImportedFuncCache0 = __webpack_require__.c["./node_modules/@huacnlee/autocorrect/autocorrect_bg.js"].exports;
/******/ 							return wasmImportedFuncCache0["__wbindgen_json_parse"](p0i32,p1i32);
/******/ 						},
/******/ 						"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 							if(wasmImportedFuncCache1 === undefined) wasmImportedFuncCache1 = __webpack_require__.c["./node_modules/@huacnlee/autocorrect/autocorrect_bg.js"].exports;
/******/ 							return wasmImportedFuncCache1["__wbindgen_throw"](p0i32,p1i32);
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
/******/ 					var req = fetch(__webpack_require__.p + "" + {"node_modules_huacnlee_autocorrect_autocorrect_js":{"./node_modules/@huacnlee/autocorrect/autocorrect_bg.wasm":"f61b1c3c64664bddffca"}}[chunkId][wasmModuleId] + ".module.wasm");
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
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;