(()=>{var e={151:e=>{function t(e){return Array.isArray(e)?e:[e]}const r=/^\s+$/,n=/^\\!/,o=/^\\#/,i=/\r?\n/g,s=/^\.*\/|^\.+$/,a="undefined"!=typeof Symbol?Symbol.for("node-ignore"):"node-ignore",c=/([0-z])-([0-z])/g,l=[[/\\?\s+$/,e=>0===e.indexOf("\\")?" ":""],[/\\\s/g,()=>" "],[/[\\$.|*+(){^]/g,e=>`\\${e}`],[/(?!\\)\?/g,()=>"[^/]"],[/^\//,()=>"^"],[/\//g,()=>"\\/"],[/^\^*\\\*\\\*\\\//,()=>"^(?:.*\\/)?"],[/^(?=[^^])/,function(){return/\/(?!$)/.test(this)?"^":"(?:^|\\/)"}],[/\\\/\\\*\\\*(?=\\\/|$)/g,(e,t,r)=>t+6<r.length?"(?:\\/[^\\/]+)*":"\\/.+"],[/(^|[^\\]+)\\\*(?=.+)/g,(e,t)=>`${t}[^\\/]*`],[/\\\\\\(?=[$.|*+(){^])/g,()=>"\\"],[/\\\\/g,()=>"\\"],[/(\\)?\[([^\]/]*?)(\\*)($|\])/g,(e,t,r,n,o)=>"\\"===t?`\\[${r}${(e=>{const{length:t}=e;return e.slice(0,t-t%2)})(n)}${o}`:"]"===o&&n.length%2==0?`[${(e=>e.replace(c,((e,t,r)=>t.charCodeAt(0)<=r.charCodeAt(0)?e:"")))(r)}${n}]`:"[]"],[/(?:[^*])$/,e=>/\/$/.test(e)?`${e}$`:`${e}(?=$|\\/$)`],[/(\^|\\\/)?\\\*$/,(e,t)=>(t?`${t}[^/]+`:"[^/]*")+"(?=$|\\/$)"]],u=Object.create(null),d=e=>"string"==typeof e;class h{constructor(e,t,r,n){this.origin=e,this.pattern=t,this.negative=r,this.regex=n}}const f=(e,t)=>{throw new t(e)},p=(e,t,r)=>d(e)?e?!p.isNotRelative(e)||r(`path should be a \`path.relative()\`d string, but got "${t}"`,RangeError):r("path must not be empty",TypeError):r(`path must be a string, but got \`${t}\``,TypeError),g=e=>s.test(e);p.isNotRelative=g,p.convert=e=>e;class w{constructor({ignorecase:e=!0}={}){var t;this._rules=[],this._ignorecase=e,t=a,Object.defineProperty(this,t,{value:true}),this._initCache()}_initCache(){this._ignoreCache=Object.create(null),this._testCache=Object.create(null)}_addPattern(e){if(e&&e[a])return this._rules=this._rules.concat(e._rules),void(this._added=!0);if((e=>e&&d(e)&&!r.test(e)&&0!==e.indexOf("#"))(e)){const t=((e,t)=>{const r=e;let i=!1;0===e.indexOf("!")&&(i=!0,e=e.substr(1));const s=((e,t,r)=>{const n=u[e];if(n)return n;const o=l.reduce(((t,r)=>t.replace(r[0],r[1].bind(e))),e);return u[e]=r?new RegExp(o,"i"):new RegExp(o)})(e=e.replace(n,"!").replace(o,"#"),0,t);return new h(r,e,i,s)})(e,this._ignorecase);this._added=!0,this._rules.push(t)}}add(e){return this._added=!1,t(d(e)?(e=>e.split(i))(e):e).forEach(this._addPattern,this),this._added&&this._initCache(),this}addPattern(e){return this.add(e)}_testOne(e,t){let r=!1,n=!1;return this._rules.forEach((o=>{const{negative:i}=o;n===i&&r!==n||i&&!r&&!n&&!t||o.regex.test(e)&&(r=!i,n=i)})),{ignored:r,unignored:n}}_test(e,t,r,n){const o=e&&p.convert(e);return p(o,e,f),this._t(o,t,r,n)}_t(e,t,r,n){if(e in t)return t[e];if(n||(n=e.split("/")),n.pop(),!n.length)return t[e]=this._testOne(e,r);const o=this._t(n.join("/")+"/",t,r,n);return t[e]=o.ignored?o:this._testOne(e,r)}ignores(e){return this._test(e,this._ignoreCache,!1).ignored}createFilter(){return e=>!this.ignores(e)}filter(e){return t(e).filter(this.createFilter())}test(e){return this._test(e,this._testCache,!0)}}const m=e=>new w(e),v=()=>!1;if(m.isPathValid=e=>p(e&&p.convert(e),e,v),m.default=m,e.exports=m,"undefined"!=typeof process&&(process.env&&process.env.IGNORE_TEST_WIN32||"win32"===process.platform)){const e=e=>/^\\\\\?\\/.test(e)||/["<>|\u0000-\u001F]+/u.test(e)?e:e.replace(/\\/g,"/");p.convert=e;const t=/^[a-z]:\//i;p.isNotRelative=e=>t.test(e)||g(e)}},741:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.findMatchingBracket=t.parseBrackets=void 0;const n=r(496);function o(e,t,r){let c,l=!1;t[e.line]=t[e.line].slice(e.character);for(let u=e.line;u<t.length;u++){let d=t[u];if(0==d.length)continue;const h=d.indexOf("//"),f=d.indexOf("/*"),p=d.indexOf('"'),g=d.indexOf("'"),w=d.indexOf("{");let m=h;(f>0&&f<m||m<0)&&(m=f),(p>0&&p<m||m<0)&&(m=p),(g>0&&g<m||m<0)&&(m=g),l&&(w>0&&w<m||m<0)&&(m=w);let v=l?d.indexOf("}"):w;if(m>=0&&(m<v||v<0)){let e=null;const c=new n.Position(u,m);if(m==h)continue;if(m==f?e=i(c,t):m==p?e=s(c,t):m==g?e=a(c,t):m==w&&(e=o(new n.Position(u,w),t,r)),null==e)break;t[e.line]=d.slice(e.character),u=e.line-1}else if(v>=0){if(u==e.line&&(v+=e.character),l)return r.push(new n.Range(c,new n.Position(u,v))),new n.Position(u,v+1);c=new n.Position(u,v),l=!0}}return null}function i(e,t){let r=t[e.line].slice(e.character+2).indexOf("*/");if(r>=0)return new n.Position(e.line,e.character+2+r+2);for(let o=e.line+1;o<t.length;o++)if(r=t[o].indexOf("*/"),r>=0)return new n.Position(o,r+2);return null}function s(e,t){const r=c('"',e.translate(0,1),t);return null==r?null:r.translate(0,1)}function a(e,t){const r=c("'",e.translate(0,1),t);return null==r?null:r.translate(0,1)}function c(e,t,r){let o=-1,i=t.character;do{i+=o+1,o=r[t.line].slice(i).indexOf(e)}while(o>=0&&"\\"==r[t.line][i+o-1]&&"\\"!=r[t.line][i+o-2]);if(o>=0)return new n.Position(t.line,o+i);for(let i=t.line+1;i<r.length;i++)if(o=r[i].indexOf(e),o>=0)return new n.Position(i,o);return null}t.parseBrackets=function(e){e instanceof Buffer&&(e=e.toString());const t=e.split("\n"),r=[];let i=new n.Position(0,0);for(;null!=i;)i=o(i,t,r);return r},t.findMatchingBracket=function(e,t){for(const r of t){if(r.start.isEqual(e))return r.end;if(r.end.isEqual(e))return r.start}}},613:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.clearDecorations=t.applyDecorations=t.updateDecorationColor=void 0;const n=r(496),o=r(741),i={errors:n.window.createTextEditorDecorationType({overviewRulerColor:"red",overviewRulerLane:n.OverviewRulerLane.Right,backgroundColor:s()}),wholeLine:n.window.createTextEditorDecorationType({overviewRulerColor:"red",overviewRulerLane:n.OverviewRulerLane.Right,backgroundColor:s(),isWholeLine:!0})};function s(){const e=n.workspace.getConfiguration("codam-norminette-3").get("highlight-color");return e.startsWith("#")||e.startsWith("rgb")?e:new n.ThemeColor(e)}t.updateDecorationColor=function(){i.errors=n.window.createTextEditorDecorationType({overviewRulerColor:"red",overviewRulerLane:n.OverviewRulerLane.Right,backgroundColor:s()}),i.wholeLine=n.window.createTextEditorDecorationType({overviewRulerColor:"red",overviewRulerLane:n.OverviewRulerLane.Right,backgroundColor:s()})},t.applyDecorations=function(e,t,r,s){const a=[],c=[];e[Object.keys(e)[0]].forEach((e=>{if(r.includes(e.error))return;const i={range:null,hoverMessage:`**Error: ${e.errorText}${s?` *(${e.error})*`:""}**`},l=t.document.lineAt(e.line),u=function(e,t){const r=e.split("\t");let n=0,o=0;for(const e of r){if(n+=e.length,n+o>=t)return o;if(o+=4-n%4,n+o>=t)return o}return o}(l.text,e.col),d=t.document.getWordRangeAtPosition(new n.Position(e.line,e.col-u));if("TOO_MANY_LINES"===e.error){const r=o.findMatchingBracket(new n.Position(e.line,e.col),o.parseBrackets(t.document.getText()));i.range=t.document.lineAt(r.line-1).range,c.push(i)}else!function(e){const t=["SPACE_EMPTY_LINE","EMPTY_LINE_FUNCTION","EMPTY_LINE_FILE_START","EMPTY_LINE_FUNCTION","EMPTY_LINE_EOF","CONSECUTIVE_NEWLINES","LINE_TOO_LONG","UNRECOGNIZED_TOKEN"];for(const r of t)if(e.includes(r))return!0;return!1}(e.error)?e.col&&d?(i.range=d,a.push(i)):(i.range=l.range,a.push(i)):(i.range=l.range,c.push(i))})),t.setDecorations(i.errors,a),t.setDecorations(i.wholeLine,c)},t.clearDecorations=function(e){e.setDecorations(i.errors,[]),e.setDecorations(i.wholeLine,[])}},112:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.activate=t.log=void 0;const o=r(496),i=r(837),s=r(37),a=r(613),c=r(237),l=r(515),u=r(859),d=r(526);let h;function f(...e){h||(h=o.window.createOutputChannel("codam-norminette-3")),h.appendLine(e.map((e=>i.inspect(e,!1,null,!1))).join(" "))}function p(e,t,r){return n(this,void 0,void 0,(function*(){if("file"!=e.document.uri.scheme)return;let n=e.document.uri.path;"win32"==s.platform()&&(n=n.slice(1),r.wsl&&(n=n.replace(/^.:/,(e=>`/mnt/${e.slice(0,-1).toLowerCase()}`))));const o=n.replace(/^.*[\\\/]/,"");if(!r.regex.test(o))return;if(t&&c.isIgnored(e.document.uri,t))return;f("Executing norminette on:",n);const i=yield l.execNorminette(n,r.command);i?a.applyDecorations(i,e,r.ignoreErrors,r.displayErrorName):a.clearDecorations(e)}))}t.log=f,t.activate=function(e){f("Extension activated");let t=!0,r=u.getEnvironmentVariables();if(!r)return;const n=c.initNormignore(),i={enable:()=>{t=!0;for(const e of o.window.visibleTextEditors)p(e,n,r)},disable:()=>{t=!1;for(const e of o.window.visibleTextEditors)a.clearDecorations(e)},toggle:()=>{t?i.disable():i.enable()},"refresh-tree":()=>{}},s=new d.NorminetteProvider(o.workspace.workspaceFolders,n);let l;function h(e){"file"==e.document.uri.scheme&&(l&&clearTimeout(l),l=setTimeout((()=>{s.updateTreeItem(e),t?p(e,n,r):a.clearDecorations(e)}),500))}o.window.createTreeView("normTree",{treeDataProvider:s}),i["refresh-tree"]=()=>{f(o.workspace.workspaceFolders.map((e=>e.uri.path))),s.updateEntireTree()},o.window.onDidChangeActiveTextEditor((e=>{e&&h(e)}),null,e.subscriptions),o.workspace.onDidSaveTextDocument((e=>{const t=o.window.visibleTextEditors.find((t=>t.document===e));t&&h(t)}),null,e.subscriptions),o.workspace.onDidChangeConfiguration((e=>{e.affectsConfiguration("codam-norminette-3")&&(r=u.getEnvironmentVariables()),a.updateDecorationColor()}),null,e.subscriptions),o.workspace.onDidChangeWorkspaceFolders((()=>{s.setWorkspaceFolders(o.workspace.workspaceFolders)}),null,e.subscriptions);for(const t in i)e.subscriptions.push(o.commands.registerCommand(`codam-norminette-3.${t}`,i[t]));for(const e of o.window.visibleTextEditors)p(e,n,r)}},859:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getEnvironmentVariables=void 0;const n=r(496),o=r(81),i=r(37);t.getEnvironmentVariables=function(){const e=n.workspace.getConfiguration("codam-norminette-3"),t=function(e){try{const t=o.execSync(`${e} -v`).toString();if(!/3\.\d+\.\d+\s*$/.test(t))return n.window.showErrorMessage(`Nominette: wrong version: ${t}, must be 3.x.x.`),null}catch(t){if("win32"==i.platform())try{const t=o.execSync(`wsl ${e} -v`).toString();return/3\.\d+\.\d+\s*$/.test(t)||n.window.showErrorMessage(`Nominette: wrong version: ${t}, must be 3.x.x.`),{command:`wsl ${e}`,wsl:!0}}catch(e){}return n.window.showErrorMessage(`Norminette: \`${e}' not found, see https://github.com/42School/norminette for installation instructions.`),null}return{command:e,wsl:e.startsWith("wsl ")}}(e.get("command"));return t?{command:t.command,wsl:t.wsl,regex:new RegExp(e.get("regex")),ignoreErrors:e.get("ignoreErrors"),displayErrorName:e.get("displayErrorName")}:null}},237:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.isIgnored=t.initNormignore=void 0;const o=r(151),i=r(147),s=r(17),a=r(496),c=r(112);t.initNormignore=function(){const e={ignored:[],notIgnored:[],workspaces:{},onChange:new a.EventEmitter};function t(t,r,s){return n(this,void 0,void 0,(function*(){e.workspaces[r]||(e.workspaces[r]={}),c.log("created / changed:",t);const n=(yield i.promises.readFile(t)).toString();e.workspaces[r][s]=o.default().add(n)}))}function r(e){const t=a.workspace.getWorkspaceFolder(e).uri.path;return t?{workspace:t,ignorePath:s.dirname(s.relative(t,e.path))}:{workspace:null,ignorePath:null}}function l(o){return n(this,void 0,void 0,(function*(){const{workspace:n,ignorePath:i}=r(o);e.ignored=[],e.notIgnored=[],n&&t(o.fsPath,n,i),e.onChange.fire()}))}a.workspace.findFiles("**/.normignore").then((e=>n(this,void 0,void 0,(function*(){for(const n of e){const{workspace:e,ignorePath:o}=r(n);e&&t(n.fsPath,e,o)}}))));const u=a.workspace.createFileSystemWatcher("**/.normignore");return u.onDidCreate(l),u.onDidChange(l),u.onDidDelete((t=>{const{workspace:n,ignorePath:o}=r(t);e.ignored=[],e.notIgnored=[],c.log("deleted:",t.fsPath),n&&e.workspaces[n]&&e.workspaces[n][o]&&delete e.workspaces[n][o],e.onChange.fire()})),e},t.isIgnored=function(e,t){const r=a.workspace.getWorkspaceFolder(e).uri.path;if(!r||!t.workspaces[r])return!1;const n=s.relative(r,e.path);if(t.ignored.includes(n))return!0;if(t.notIgnored.includes(n))return!1;const o=n.split("/");let i;for(let e=1;e<=o.length;e++){const n=s.dirname(o.slice(0,e).join("/"));if(t.workspaces[r][n]){if(i&&t.workspaces[r][i].ignores(s.relative(i,n)+"/"))break;i=n}}if(!i)return!1;let c=t.workspaces[r][i].test(s.relative(i,n));for(;"."!=i&&!c.ignored&&!c.unignored;)i=s.dirname(i),t.workspaces[r][i]&&(c=t.workspaces[r][i].test(s.relative(i,n)));return c.ignored}},515:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.execNorminette=void 0;const o=r(81);function i(e){try{const[t,r,n,o,i,s]=e.match(/(Error|Notice):\s*([A-Z_]*)\s*\(line:\s*(\d*),\s*col:\s*(\d+)\):\s*(.*)/);return t&&n&&o&&i&&s?{fullText:t,error:n,isNotice:"Notice"==r,line:parseInt(o)-1,col:parseInt(i)-1,errorText:s[0].toUpperCase()+s.slice(1)}:null}catch(a){try{const[a,c]=e.match(/(?:\s|\033\[.*m)*Error: Unrecognized (token|line) .*/);if("token"===c)var[t,r,n,o]=e.match(/.* (Unrecognized token) line (\d+), col (\d+)/),i=parseInt(n)-1,s=parseInt(o)-2;else if("line"===c){const[t,n,o,a,c]=e.match(/.* (Unrecognized line )\((\d+), (\d+)\) (while parsing line)/);var r=n+c;i=parseInt(o)-1,s=parseInt(a)-1}return{fullText:a,error:"UNRECOGNIZED_TOKEN",isNotice:!1,line:i,col:s,errorText:r}}catch(e){return null}}}t.execNorminette=function(e,t){return n(this,void 0,void 0,(function*(){const{stdout:r}=yield function(e){return n(this,void 0,void 0,(function*(){return new Promise(((t,r)=>{o.exec(`${e}`,((e,r,n)=>{t({stdout:r,stderr:n})}))}))}))}(`${t} '${e}'`),s=r.split("\n").slice(0,-1),a={};let c;for(const e of s)if(/(Error|Notice):/.test(e)){if(e.endsWith("is not valid C or C header file"))continue;const t=i(e);t&&(a[c]||(a[c]=[]),a[c].push(t))}else{const[t,r,n]=e.match(/(.*): (Error|OK)!$/);c=r}return 0==Object.keys(a).length?null:a}))}},526:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{c(n.next(e))}catch(e){i(e)}}function a(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}c((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.NorminetteProvider=void 0;const o=r(17),i=r(496),s=r(859),a=r(237),c=r(515);var l;!function(e){e[e.ROOT=0]="ROOT",e[e.FOLDER=1]="FOLDER",e[e.FILE=2]="FILE",e[e.NORM_ERROR=3]="NORM_ERROR"}(l||(l={})),t.NorminetteProvider=class{constructor(e,t){this.workspaceFolders=e,this.ignores=t,this.data={},this._onDidChangeTreeData=new i.EventEmitter,this.onDidChangeTreeData=this._onDidChangeTreeData.event,t.onChange.event((()=>this.updateEntireTree(!0))),this.updateEntireTree(!1)}getTreeItem(e){return e}getChildren(e){return this.workspaceFolders?e?Promise.resolve(this.getData(null,e)):Promise.all(this.workspaceFolders.map((e=>n(this,void 0,void 0,(function*(){const t=yield this.getData(e,null);return void 0===t?null:t[0]}))))):Promise.resolve([])}setWorkspaceFolders(e){const t=this.workspaceFolders.slice();this.workspaceFolders=e;for(const e of t)this.workspaceFolders.includes(e)||delete this.data[e.uri.path];this.refresh()}getUnignoredNormData(e){return new Promise((t=>{c.execNorminette(e,s.getEnvironmentVariables().command).then((e=>{if(null==e)return void t(null);const r={};for(const t in e)a.isIgnored(i.Uri.parse(t),this.ignores)||(r[t]=e[t]);t(r)}))}))}updateEntireTree(e=!0){this.data={};for(const e of this.workspaceFolders)this.data[e.uri.path]=this.getUnignoredNormData(e.uri.path);e&&this.refresh()}updateTreeItem(e){return n(this,void 0,void 0,(function*(){if("file"!=e.document.uri.scheme)return;const t=e.document.uri.path,r=yield this.getUnignoredNormData(t),n=JSON.stringify(r);let o=!1;for(const e in this.data){const i=yield this.data[e];t in i?null==r||"{}"==n?(o=!0,delete i[t]):(o||JSON.stringify(i[t])!=n)&&(o=!0,i[t]=r[t]):null!=r&&"{}"!=n&&t.startsWith(e)&&(o=!0,i[t]=r[t])}o&&this.refresh()}))}refresh(){this.data||this.updateEntireTree(),this._onDidChangeTreeData.fire()}getData(e,t){return n(this,void 0,void 0,(function*(){if(null!=e){const t=(yield this.data[e.uri.path])||{};return[new u(e.name,{type:l.ROOT,path:e.uri.path,normData:t})]}if(t.data.type==l.NORM_ERROR)return[];if(t.data.type==l.FILE){const e=t.data.path;return t.data.normData[e].map(((t,r)=>new u(t.errorText,{type:l.NORM_ERROR,errorData:t,file:e,errorId:r})))}const r=t.data.normData,[n,i]=this.getContents(t.data.path,Object.keys(r));return[...n.map((e=>new u(o.basename(e),{type:l.FOLDER,path:e,normData:this.getNormData(e,r)}))),...i.map((e=>new u(o.basename(e),{type:l.FILE,path:e,normData:this.getNormData(e,r)})))]}))}getContents(e,t){const r=new Set,n=new Set;for(const i of t){if(o.relative(e,i).startsWith("../"))continue;const t=o.relative(e,i),s=t.split(o.sep)[0];t==s?n.add(i):r.add(o.resolve(e,s))}return[[...r],[...n]]}getNormData(e,t){const r={};return Object.keys(t).forEach((n=>{n.startsWith(e)&&(r[n]=t[n])})),r}};class u extends i.TreeItem{constructor(e,t){if(super(e,t.type==l.NORM_ERROR?i.TreeItemCollapsibleState.None:i.TreeItemCollapsibleState.Collapsed),this.label=e,this.data=t,this.tooltip=e,t.type==l.NORM_ERROR){this.id=`${t.file} ${t.errorData.fullText} ${t.errorId}`,this.description=`line: ${t.errorData.line+1}`,this.tooltip=t.errorData.fullText;const e=new i.Position(t.errorData.line,t.errorData.col);this.command={command:"vscode.open",title:"Open File",arguments:[i.Uri.file(t.file),{selection:new i.Range(e,e)}]}}else{this.id=`${t.path}`;const e=Object.keys(t.normData).reduce(((e,r)=>null==t.normData[r]?e:e+t.normData[r].length),0);if(this.description=`${e} error${1==e?"":"s"}`,t.type==l.FILE)this.resourceUri=i.Uri.file(t.path),this.iconPath=i.ThemeIcon.File;else{const e=Object.keys(t.normData).length;this.description+=` in ${e} file${1==e?"":"s"}`}}}}},496:e=>{"use strict";e.exports=require("vscode")},81:e=>{"use strict";e.exports=require("child_process")},147:e=>{"use strict";e.exports=require("fs")},37:e=>{"use strict";e.exports=require("os")},17:e=>{"use strict";e.exports=require("path")},837:e=>{"use strict";e.exports=require("util")}},t={},r=function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}(112);module.exports=r})();