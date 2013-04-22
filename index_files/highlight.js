var hljs=new function(){function a(a){return a.replace(/&/gm,"&amp;").replace(/</gm,"&lt;")}function b(a,e,i){return RegExp(e,"m"+(a.case_insensitive?"i":"")+(i?"g":""))}function g(a,e){for(var i="",m=0;m<a.childNodes.length;m++)if(a.childNodes[m].nodeType==3){var f=a.childNodes[m].nodeValue;e&&(f=f.replace(/\n/g,""));i+=f}else i+=a.childNodes[m].nodeName=="BR"?"\n":g(a.childNodes[m]);t&&(i=i.replace(/\r/g,"\n"));return i}function h(a){var e=[];(function m(a,d){for(var b=0;b<a.childNodes.length;b++)a.childNodes[b].nodeType==
3?d+=a.childNodes[b].nodeValue.length:a.childNodes[b].nodeName=="BR"?d+=1:a.childNodes[b].nodeType==1&&(e.push({event:"start",offset:d,node:a.childNodes[b]}),d=m(a.childNodes[b],d),e.push({event:"stop",offset:d,node:a.childNodes[b]}));return d})(a,0);return e}function c(d,e,i){function b(i){for(var d="<"+i.nodeName.toLowerCase(),f=0;f<i.attributes.length;f++){var e=i.attributes[f];d+=" "+e.nodeName.toLowerCase();e.value!==void 0&&e.value!==!1&&e.value!==null&&(d+='="'+a(e.value)+'"')}return d+">"}
for(var f=0,k="",c=[];d.length||e.length;){var g=(d.length&&e.length?d[0].offset!=e[0].offset?d[0].offset<e[0].offset?d:e:e[0].event=="start"?d:e:d.length?d:e).splice(0,1)[0];k+=a(i.substr(f,g.offset-f));f=g.offset;if(g.event=="start")k+=b(g.node),c.push(g.node);else if(g.event=="stop"){var j,h=c.length;do h--,j=c[h],k+="</"+j.nodeName.toLowerCase()+">";while(j!=g.node);for(c.splice(h,1);h<c.length;)k+=b(c[h]),h++}}return k+a(i.substr(f))}function n(a){function e(a,d,f){if(!a.compiled){var c=[];if(a.keywords){var g=
{},h=function(a,d){for(var f=d.split(" "),e=0;e<f.length;e++){var b=f[e].split("|");g[b[0]]=[a,b[1]?Number(b[1]):1];c.push(b[0])}};a.lexemsRe=b(d,a.lexems||hljs.IDENT_RE,!0);if(typeof a.keywords=="string")h("keyword",a.keywords);else for(var j in a.keywords)a.keywords.hasOwnProperty(j)&&h(j,a.keywords[j]);a.keywords=g}if(!f){if(a.beginWithKeyword)a.begin="\\b("+c.join("|")+")\\s";a.beginRe=b(d,a.begin?a.begin:"\\B|\\b");if(!a.end&&!a.endsWithParent)a.end="\\B|\\b";if(a.end)a.endRe=b(d,a.end)}if(a.illegal)a.illegalRe=
b(d,a.illegal);if(a.relevance===void 0)a.relevance=1;if(!a.contains)a.contains=[];a.compiled=!0;for(f=0;f<a.contains.length;f++)a.contains[f]=="self"&&(a.contains[f]=a),e(a.contains[f],d,!1);a.starts&&e(a.starts,d,!1)}}e(q[a].defaultMode,q[a],!0)}function o(d,e){function i(a,d){if(j[a].end&&j[a].endRe.test(d))return 1;if(j[a].endsWithParent){var e=i(a-1,d);return e?e+1:0}return 0}function c(a,d){var e=j[j.length-1];if(e.terminators===void 0){var f;f=l;for(var i=[],g=0;g<e.contains.length;g++)i.push(e.contains[g].begin);
g=j.length-1;do j[g].end&&i.push(j[g].end),g--;while(j[g+1].endsWithParent);e.illegal&&i.push(e.illegal);f=i.length?b(f,i.join("|"),!0):null;e.terminators=f}var h;if(e.terminators)e.terminators.lastIndex=d,h=e.terminators.exec(a);return h?[a.substr(d,h.index-d),h[0],!1]:[a.substr(d),"",!0]}function f(e,d){var f;if(d.subLanguage&&q[d.subLanguage]||d.subLanguage=="")f=d.subLanguage==""?x(e):o(d.subLanguage,e),d.relevance>0&&(u+=f.keyword_count,w+=f.relevance),f='<span class="'+f.language+'">'+f.value+
"</span>";else if(f=a(e),d.keywords){var b="",i=0;d.lexemsRe.lastIndex=0;for(var g=d.lexemsRe.exec(f);g;){b+=f.substr(i,g.index-i);var i=d,c=g,c=l.case_insensitive?c[0].toLowerCase():c[0],i=(i=i.keywords[c])&&i instanceof Array?i:!1;i?(u+=i[1],b+='<span class="'+i[0]+'">'+g[0]+"</span>"):b+=g[0];i=d.lexemsRe.lastIndex;g=d.lexemsRe.exec(f)}f=b+f.substr(i)}return f}function g(d,f){var e=d.className?'<span class="'+d.className+'">':"";d.returnBegin?(p+=e,d.buffer=""):d.excludeBegin?(p+=a(f)+e,d.buffer=
""):(p+=e,d.buffer=f);j.push(d);w+=d.relevance}function h(d,e,b){var c=j[j.length-1];if(b)return p+=f(c.buffer+d,c),!1;a:{for(b=0;b<c.contains.length;b++){var m=c.contains[b].beginRe.exec(e);if(m&&m.index==0){b=c.contains[b];break a}}b=void 0}if(b)return p+=f(c.buffer+d,c),g(b,e),b.returnBegin;if(b=i(j.length-1,e)){m=c.className?"</span>":"";for(p+=c.returnEnd?f(c.buffer+d,c)+m:c.excludeEnd?f(c.buffer+d,c)+m+a(e):f(c.buffer+d+e,c)+m;b>1;)m=j[j.length-2].className?"</span>":"",p+=m,b--,j.length--;
d=j[j.length-1];j.length--;j[j.length-1].buffer="";d.starts&&g(d.starts,"");return c.returnEnd}if(c.illegal&&c.illegalRe.test(e))throw"Illegal";}y[d]||(n(d),y[d]=!0);var l=q[d],j=[l.defaultMode],w=0,u=0,p="";try{var r,v=0;l.defaultMode.buffer="";do{r=c(e,v);var t=h(r[0],r[1],r[2]);v+=r[0].length;t||(v+=r[1].length)}while(!r[2]);return{relevance:w,keyword_count:u,value:p,language:d}}catch(s){if(s=="Illegal")return{relevance:0,keyword_count:0,value:a(e)};else throw s;}}function x(d){var e={keyword_count:0,
relevance:0,value:a(d)},b=e,c;for(c in q)if(q.hasOwnProperty(c)){var f=o(c,d);f.language=c;f.keyword_count+f.relevance>b.keyword_count+b.relevance&&(b=f);f.keyword_count+f.relevance>e.keyword_count+e.relevance&&(b=e,e=f)}if(b.language)e.second_best=b;return e}function s(a,e,b){e&&(a=a.replace(/^((<[^>]+>|\t)+)/gm,function(a,d){return d.replace(/\t/g,e)}));b&&(a=a.replace(/\n/g,"<br>"));return a}function z(a,e,b){var m=g(a,b),f;a:{var k=a;f=k.className.split(/\s+/);f=f.concat(k.parentNode.className.split(/\s+/));
for(k=0;k<f.length;k++){var l=f[k].replace(/^language-/,"");if(q[l]||l=="no-highlight"){f=l;break a}}f=void 0}if(f!="no-highlight"){f?k=o(f,m):(k=x(m),f=k.language);var n=h(a);if(n.length)l=document.createElement("pre"),l.innerHTML=k.value,k.value=c(n,h(l),m);k.value=s(k.value,e,b);e=a.className;e.match("(\\s|^)(language-)?"+f+"(\\s|$)")||(e=e?e+" "+f:f);t&&a.tagName=="CODE"&&a.parentNode.tagName=="PRE"?(l=a.parentNode,b=document.createElement("div"),b.innerHTML="<pre><code>"+k.value+"</code></pre>",
a=b.firstChild.firstChild,b.firstChild.className=l.className,l.parentNode.replaceChild(b.firstChild,l)):a.innerHTML=k.value;a.className=e;a.result={language:f,kw:k.keyword_count,re:k.relevance};if(k.second_best)a.second_best={language:k.second_best.language,kw:k.second_best.keyword_count,re:k.second_best.relevance}}}function l(){if(!l.called){l.called=!0;for(var a=document.getElementsByTagName("pre"),b=0;b<a.length;b++){var c;a:{c=a[b];for(var g=0;g<c.childNodes.length;g++){var f=c.childNodes[g];
if(f.nodeName=="CODE"){c=f;break a}if(!(f.nodeType==3&&f.nodeValue.match(/\s+/)))break}c=void 0}c&&z(c,hljs.tabReplace)}}}var t=typeof navigator!=="undefined"&&/MSIE [678]/.test(navigator.userAgent),y={},q={};this.LANGUAGES=q;this.highlight=o;this.highlightAuto=x;this.fixMarkup=s;this.highlightBlock=z;this.initHighlighting=l;this.initHighlightingOnLoad=function(){window.addEventListener?(window.addEventListener("DOMContentLoaded",l,!1),window.addEventListener("load",l,!1)):window.attachEvent?window.attachEvent("onload",
l):window.onload=l};this.IDENT_RE="[a-zA-Z][a-zA-Z0-9_]*";this.UNDERSCORE_IDENT_RE="[a-zA-Z_][a-zA-Z0-9_]*";this.NUMBER_RE="\\b\\d+(\\.\\d+)?";this.C_NUMBER_RE="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";this.BINARY_NUMBER_RE="\\b(0b[01]+)";this.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0};this.APOS_STRING_MODE=
{className:"string",begin:"'",end:"'",illegal:"\\n",contains:[this.BACKSLASH_ESCAPE],relevance:0};this.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[this.BACKSLASH_ESCAPE],relevance:0};this.C_LINE_COMMENT_MODE={className:"comment",begin:"//",end:"$"};this.C_BLOCK_COMMENT_MODE={className:"comment",begin:"/\\*",end:"\\*/"};this.HASH_COMMENT_MODE={className:"comment",begin:"#",end:"$"};this.NUMBER_MODE={className:"number",begin:this.NUMBER_RE,relevance:0};this.C_NUMBER_MODE=
{className:"number",begin:this.C_NUMBER_RE,relevance:0};this.BINARY_NUMBER_MODE={className:"number",begin:this.BINARY_NUMBER_RE,relevance:0};this.inherit=function(a,b){var c={},g;for(g in a)c[g]=a[g];if(b)for(g in b)c[g]=b[g];return c}};
hljs.LANGUAGES.bash=function(a){var b={className:"variable",begin:"\\$[a-zA-Z0-9_]+\\b"},g={className:"variable",begin:"\\${([^}]|\\\\})+}"},h={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[a.BACKSLASH_ESCAPE,b,g],relevance:0},c={className:"string",begin:"'",end:"'",contains:[{begin:"''"}],relevance:0},n={className:"test_condition",begin:"",end:"",contains:[h,c,b,g],keywords:{literal:"true false"},relevance:0};return{defaultMode:{keywords:{keyword:"if then else fi for break continue while in do done echo exit return set declare",
literal:"true false"},contains:[{className:"shebang",begin:"(#!\\/bin\\/bash)|(#!\\/bin\\/sh)",relevance:10},b,g,a.HASH_COMMENT_MODE,h,c,a.inherit(n,{begin:"\\[ ",end:" \\]",relevance:0}),a.inherit(n,{begin:"\\[\\[ ",end:" \\]\\]"})]}}}(hljs);
hljs.LANGUAGES.cpp=function(a){var b={keyword:"false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long throw volatile static protected bool template mutable if public friend do return goto auto void enum else break new extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex",built_in:"std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr"};
return{defaultMode:{keywords:b,illegal:"</",contains:[a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,a.QUOTE_STRING_MODE,{className:"string",begin:"'\\\\?.",end:"'",illegal:"."},{className:"number",begin:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},a.C_NUMBER_MODE,{className:"preprocessor",begin:"#",end:"$"},{className:"stl_container",begin:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",end:">",
keywords:b,relevance:10,contains:["self"]}]}}}(hljs);
hljs.LANGUAGES.cs=function(a){return{defaultMode:{keywords:"abstract as base bool break byte case catch char checked class const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long namespace new null object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while ascending descending from get group into join let orderby partial select set value var where yield",contains:[{className:"comment",
begin:"///",end:"$",returnBegin:!0,contains:[{className:"xmlDocTag",begin:"///|<\!--|--\>"},{className:"xmlDocTag",begin:"</?",end:">"}]},a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,{className:"preprocessor",begin:"#",end:"$",keywords:"if else elif endif define undef warning error line region endregion pragma checksum"},{className:"string",begin:'@"',end:'"',contains:[{begin:'""'}]},a.APOS_STRING_MODE,a.QUOTE_STRING_MODE,a.C_NUMBER_MODE]}}}(hljs);
hljs.LANGUAGES.css=function(a){var b={className:"function",begin:a.IDENT_RE+"\\(",end:"\\)",contains:[a.NUMBER_MODE,a.APOS_STRING_MODE,a.QUOTE_STRING_MODE]};return{case_insensitive:!0,defaultMode:{illegal:"[=/|']",contains:[a.C_BLOCK_COMMENT_MODE,{className:"id",begin:"\\#[A-Za-z0-9_-]+"},{className:"class",begin:"\\.[A-Za-z0-9_-]+",relevance:0},{className:"attr_selector",begin:"\\[",end:"\\]",illegal:"$"},{className:"pseudo",begin:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{className:"at_rule",begin:"@(font-face|page)",
lexems:"[a-z-]+",keywords:"font-face page"},{className:"at_rule",begin:"@",end:"[{;]",excludeEnd:!0,keywords:"import page media charset",contains:[b,a.APOS_STRING_MODE,a.QUOTE_STRING_MODE,a.NUMBER_MODE]},{className:"tag",begin:a.IDENT_RE,relevance:0},{className:"rules",begin:"{",end:"}",illegal:"[^\\s]",relevance:0,contains:[a.C_BLOCK_COMMENT_MODE,{className:"rule",begin:"[^\\s]",returnBegin:!0,end:";",endsWithParent:!0,contains:[{className:"attribute",begin:"[A-Z\\_\\.\\-]+",end:":",excludeEnd:!0,
illegal:"[^\\s]",starts:{className:"value",endsWithParent:!0,excludeEnd:!0,contains:[b,a.NUMBER_MODE,a.QUOTE_STRING_MODE,a.APOS_STRING_MODE,a.C_BLOCK_COMMENT_MODE,{className:"hexcolor",begin:"\\#[0-9A-F]+"},{className:"important",begin:"!important"}]}}]}]}]}}}(hljs);
hljs.LANGUAGES.diff=function(){return{case_insensitive:!0,defaultMode:{contains:[{className:"chunk",begin:"^\\@\\@ +\\-\\d+,\\d+ +\\+\\d+,\\d+ +\\@\\@$",relevance:10},{className:"chunk",begin:"^\\*\\*\\* +\\d+,\\d+ +\\*\\*\\*\\*$",relevance:10},{className:"chunk",begin:"^\\-\\-\\- +\\d+,\\d+ +\\-\\-\\-\\-$",relevance:10},{className:"header",begin:"Index: ",end:"$"},{className:"header",begin:"=====",end:"=====$"},{className:"header",begin:"^\\-\\-\\-",end:"$"},{className:"header",begin:"^\\*{3} ",
end:"$"},{className:"header",begin:"^\\+\\+\\+",end:"$"},{className:"header",begin:"\\*{5}",end:"\\*{5}$"},{className:"addition",begin:"^\\+",end:"$"},{className:"deletion",begin:"^\\-",end:"$"},{className:"change",begin:"^\\!",end:"$"}]}}}(hljs);
hljs.LANGUAGES.http=function(){return{defaultMode:{illegal:"\\S",contains:[{className:"status",begin:"^HTTP/[0-9\\.]+",end:"$",contains:[{className:"number",begin:"\\b\\d{3}\\b"}]},{className:"request",begin:"^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",returnBegin:!0,end:"$",contains:[{className:"string",begin:" ",end:" ",excludeBegin:!0,excludeEnd:!0}]},{className:"attribute",begin:"^\\w",end:": ",excludeEnd:!0,illegal:"\\n",starts:{className:"string",end:"$"}},{begin:"\\n\\n",starts:{subLanguage:"",endsWithParent:!0}}]}}}(hljs);
hljs.LANGUAGES.ini=function(a){return{case_insensitive:!0,defaultMode:{illegal:"[^\\s]",contains:[{className:"comment",begin:";",end:"$"},{className:"title",begin:"^\\[",end:"\\]"},{className:"setting",begin:"^[a-z0-9_\\[\\]]+[ \\t]*=[ \\t]*",end:"$",contains:[{className:"value",endsWithParent:!0,keywords:"on off true false yes no",contains:[a.QUOTE_STRING_MODE,a.NUMBER_MODE]}]}]}}}(hljs);
hljs.LANGUAGES.java=function(a){return{defaultMode:{keywords:"false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws",contains:[{className:"javadoc",begin:"/\\*\\*",end:"\\*/",contains:[{className:"javadoctag",begin:"@[A-Za-z]+"}],relevance:10},
a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,a.APOS_STRING_MODE,a.QUOTE_STRING_MODE,{className:"class",beginWithKeyword:!0,end:"{",keywords:"class interface",illegal:":",contains:[{beginWithKeyword:!0,keywords:"extends implements",relevance:10},{className:"title",begin:a.UNDERSCORE_IDENT_RE}]},a.C_NUMBER_MODE,{className:"annotation",begin:"@[A-Za-z]+"}]}}}(hljs);
hljs.LANGUAGES.javascript=function(a){return{defaultMode:{keywords:{keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield",literal:"true false null undefined NaN Infinity"},contains:[a.APOS_STRING_MODE,a.QUOTE_STRING_MODE,a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE,a.C_NUMBER_MODE,{begin:"("+a.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[a.C_LINE_COMMENT_MODE,
a.C_BLOCK_COMMENT_MODE,{className:"regexp",begin:"/",end:"/[gim]*",contains:[{begin:"\\\\/"}]}],relevance:0},{className:"function",beginWithKeyword:!0,end:"{",keywords:"function",contains:[{className:"title",begin:"[A-Za-z$_][0-9A-Za-z$_]*"},{className:"params",begin:"\\(",end:"\\)",contains:[a.C_LINE_COMMENT_MODE,a.C_BLOCK_COMMENT_MODE],illegal:"[\"'\\(]"}],illegal:"\\[|%"}]}}}(hljs);
hljs.LANGUAGES.json=function(a){var b={literal:"true false null"},g=[a.QUOTE_STRING_MODE,a.C_NUMBER_MODE],h={className:"value",end:",",endsWithParent:!0,excludeEnd:!0,contains:g,keywords:b},c={begin:"{",end:"}",contains:[{className:"attribute",begin:'\\s*"',end:'"\\s*:\\s*',excludeBegin:!0,excludeEnd:!0,contains:[a.BACKSLASH_ESCAPE],illegal:"\\n",starts:h}],illegal:"\\S"},a={begin:"\\[",end:"\\]",contains:[a.inherit(h,{className:null})],illegal:"\\S"};g.splice(g.length,0,c,a);return{defaultMode:{contains:g,
keywords:b,illegal:"\\S"}}}(hljs);
hljs.LANGUAGES.perl=function(a){var b={className:"subst",begin:"[$@]\\{",end:"\\}",keywords:"getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0",relevance:10},
g={className:"variable",begin:"\\$\\d"},h={className:"variable",begin:"[\\$\\%\\@\\*](\\^\\w\\b|#\\w+(\\:\\:\\w+)*|[^\\s\\w{]|{\\w+}|\\w+(\\:\\:\\w*)*)"},c=[a.BACKSLASH_ESCAPE,b,g,h],n={begin:"->",contains:[{begin:a.IDENT_RE},{begin:"{",end:"}"}]},o={className:"comment",begin:"^(__END__|__DATA__)",end:"\\n$",relevance:5},a=[g,h,a.HASH_COMMENT_MODE,o,{className:"comment",begin:"^\\=\\w",end:"\\=cut",endsWithParent:!0},n,{className:"string",begin:"q[qwxr]?\\s*\\(",end:"\\)",contains:c,relevance:5},
{className:"string",begin:"q[qwxr]?\\s*\\[",end:"\\]",contains:c,relevance:5},{className:"string",begin:"q[qwxr]?\\s*\\{",end:"\\}",contains:c,relevance:5},{className:"string",begin:"q[qwxr]?\\s*\\|",end:"\\|",contains:c,relevance:5},{className:"string",begin:"q[qwxr]?\\s*\\<",end:"\\>",contains:c,relevance:5},{className:"string",begin:"qw\\s+q",end:"q",contains:c,relevance:5},{className:"string",begin:"'",end:"'",contains:[a.BACKSLASH_ESCAPE],relevance:0},{className:"string",begin:'"',end:'"',contains:c,
relevance:0},{className:"string",begin:"`",end:"`",contains:[a.BACKSLASH_ESCAPE]},{className:"string",begin:"{\\w+}",relevance:0},{className:"string",begin:"-?\\w+\\s*\\=\\>",relevance:0},{className:"number",begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",relevance:0},{begin:"("+a.RE_STARTERS_RE+"|\\b(split|return|print|reverse|grep)\\b)\\s*",keywords:"split return print reverse grep",relevance:0,contains:[a.HASH_COMMENT_MODE,o,{className:"regexp",begin:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
relevance:10},{className:"regexp",begin:"(m|qr)?/",end:"/[a-z]*",contains:[a.BACKSLASH_ESCAPE],relevance:0}]},{className:"sub",beginWithKeyword:!0,end:"(\\s*\\(.*?\\))?[;{]",keywords:"sub",relevance:5},{className:"operator",begin:"-\\w\\b",relevance:0}];b.contains=a;n.contains[1].contains=a;return{defaultMode:{keywords:"getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0",
contains:a}}}(hljs);
hljs.LANGUAGES.php=function(a){var b={className:"variable",begin:"\\$+[a-zA-Z_\u007f-\u00ff][a-zA-Z0-9_\u007f-\u00ff]*"},g=[a.inherit(a.APOS_STRING_MODE,{illegal:null}),a.inherit(a.QUOTE_STRING_MODE,{illegal:null}),{className:"string",begin:'b"',end:'"',contains:[a.BACKSLASH_ESCAPE]},{className:"string",begin:"b'",end:"'",contains:[a.BACKSLASH_ESCAPE]}],h=[a.C_NUMBER_MODE,a.BINARY_NUMBER_MODE],c={className:"title",begin:a.UNDERSCORE_IDENT_RE};return{case_insensitive:!0,defaultMode:{keywords:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return implements parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception php_user_filter default die require __FUNCTION__ enddeclare final try this switch continue endfor endif declare unset true false namespace trait goto instanceof insteadof __DIR__ __NAMESPACE__ __halt_compiler",contains:[a.C_LINE_COMMENT_MODE,
a.HASH_COMMENT_MODE,{className:"comment",begin:"/\\*",end:"\\*/",contains:[{className:"phpdoc",begin:"\\s@[A-Za-z]+"}]},{className:"comment",excludeBegin:!0,begin:"__halt_compiler.+?;",endsWithParent:!0},{className:"string",begin:"<<<['\"]?\\w+['\"]?$",end:"^\\w+;",contains:[a.BACKSLASH_ESCAPE]},{className:"preprocessor",begin:"<\\?php",relevance:10},{className:"preprocessor",begin:"\\?>"},b,{className:"function",beginWithKeyword:!0,end:"{",keywords:"function",illegal:"\\$|\\[|%",contains:[c,{className:"params",
begin:"\\(",end:"\\)",contains:["self",b,a.C_BLOCK_COMMENT_MODE].concat(g).concat(h)}]},{className:"class",beginWithKeyword:!0,end:"{",keywords:"class",illegal:"[:\\(\\$]",contains:[{beginWithKeyword:!0,endsWithParent:!0,keywords:"extends",contains:[c]},c]},{begin:"=>"}].concat(g).concat(h)}}}(hljs);
hljs.LANGUAGES.python=function(a){var b=[{className:"string",begin:"(u|b)?r?'''",end:"'''",relevance:10},{className:"string",begin:'(u|b)?r?"""',end:'"""',relevance:10},{className:"string",begin:"(u|r|ur)'",end:"'",contains:[a.BACKSLASH_ESCAPE],relevance:10},{className:"string",begin:'(u|r|ur)"',end:'"',contains:[a.BACKSLASH_ESCAPE],relevance:10},{className:"string",begin:"(b|br)'",end:"'",contains:[a.BACKSLASH_ESCAPE]},{className:"string",begin:'(b|br)"',end:'"',contains:[a.BACKSLASH_ESCAPE]}].concat([a.APOS_STRING_MODE,
a.QUOTE_STRING_MODE]),g={className:"title",begin:a.UNDERSCORE_IDENT_RE},h={className:"params",begin:"\\(",end:"\\)",contains:["self",a.C_NUMBER_MODE].concat(b)},g={beginWithKeyword:!0,end:":",illegal:"[${=;\\n]",contains:[g,h],relevance:10};return{defaultMode:{keywords:{keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10",built_in:"None True False Ellipsis NotImplemented"},
illegal:"(</|->|\\?)",contains:b.concat([a.HASH_COMMENT_MODE,a.inherit(g,{className:"function",keywords:"def"}),a.inherit(g,{className:"class",keywords:"class"}),a.C_NUMBER_MODE,{className:"decorator",begin:"@",end:"$"},{begin:"\\b(print|exec)\\("}])}}}(hljs);
hljs.LANGUAGES.ruby=function(a){var b={keyword:"and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or def",keymethods:"__id__ __send__ abort abs all? allocate ancestors any? arity assoc at at_exit autoload autoload? between? binding binmode block_given? call callcc caller capitalize capitalize! casecmp catch ceil center chomp chomp! chop chop! chr class class_eval class_variable_defined? class_variables clear clone close close_read close_write closed? coerce collect collect! compact compact! concat const_defined? const_get const_missing const_set constants count crypt default default_proc delete delete! delete_at delete_if detect display div divmod downcase downcase! downto dump dup each each_byte each_index each_key each_line each_pair each_value each_with_index empty? entries eof eof? eql? equal? eval exec exit exit! extend fail fcntl fetch fileno fill find find_all first flatten flatten! floor flush for_fd foreach fork format freeze frozen? fsync getc gets global_variables grep gsub gsub! has_key? has_value? hash hex id include include? included_modules index indexes indices induced_from inject insert inspect instance_eval instance_method instance_methods instance_of? instance_variable_defined? instance_variable_get instance_variable_set instance_variables integer? intern invert ioctl is_a? isatty iterator? join key? keys kind_of? lambda last length lineno ljust load local_variables loop lstrip lstrip! map map! match max member? merge merge! method method_defined? method_missing methods min module_eval modulo name nesting new next next! nil? nitems nonzero? object_id oct open pack partition pid pipe pop popen pos prec prec_f prec_i print printf private_class_method private_instance_methods private_method_defined? private_methods proc protected_instance_methods protected_method_defined? protected_methods public_class_method public_instance_methods public_method_defined? public_methods push putc puts quo raise rand rassoc read read_nonblock readchar readline readlines readpartial rehash reject reject! remainder reopen replace require respond_to? reverse reverse! reverse_each rewind rindex rjust round rstrip rstrip! scan seek select send set_trace_func shift singleton_method_added singleton_methods size sleep slice slice! sort sort! sort_by split sprintf squeeze squeeze! srand stat step store strip strip! sub sub! succ succ! sum superclass swapcase swapcase! sync syscall sysopen sysread sysseek system syswrite taint tainted? tell test throw times to_a to_ary to_f to_hash to_i to_int to_io to_proc to_s to_str to_sym tr tr! tr_s tr_s! trace_var transpose trap truncate tty? type ungetc uniq uniq! unpack unshift untaint untrace_var upcase upcase! update upto value? values values_at warn write write_nonblock zero? zip"},
g={className:"yardoctag",begin:"@[A-Za-z]+"},h=[{className:"comment",begin:"#",end:"$",contains:[g]},{className:"comment",begin:"^\\=begin",end:"^\\=end",contains:[g],relevance:10},{className:"comment",begin:"^__END__",end:"\\n$"}],g={className:"subst",begin:"#\\{",end:"}",lexems:"[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?",keywords:b},c=[a.BACKSLASH_ESCAPE,g],n=[{className:"string",begin:"'",end:"'",contains:c,relevance:0},{className:"string",begin:'"',end:'"',contains:c,relevance:0},{className:"string",begin:"%[qw]?\\(",
end:"\\)",contains:c},{className:"string",begin:"%[qw]?\\[",end:"\\]",contains:c},{className:"string",begin:"%[qw]?{",end:"}",contains:c},{className:"string",begin:"%[qw]?<",end:">",contains:c,relevance:10},{className:"string",begin:"%[qw]?/",end:"/",contains:c,relevance:10},{className:"string",begin:"%[qw]?%",end:"%",contains:c,relevance:10},{className:"string",begin:"%[qw]?-",end:"-",contains:c,relevance:10},{className:"string",begin:"%[qw]?\\|",end:"\\|",contains:c,relevance:10}],c={className:"function",
begin:"\\bdef\\s+",end:" |$|;",lexems:"[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?",keywords:b,contains:[{className:"title",begin:"[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",lexems:"[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?",keywords:b},{className:"params",begin:"\\(",end:"\\)",lexems:"[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?",keywords:b}].concat(h)},o={className:"identifier",begin:"[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?",lexems:"[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?",keywords:b,relevance:0},a=
h.concat(n.concat([{className:"class",beginWithKeyword:!0,end:"$|;",keywords:"class module",contains:[{className:"title",begin:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?",relevance:0},{className:"inheritance",begin:"<\\s*",contains:[{className:"parent",begin:"("+a.IDENT_RE+"::)?"+a.IDENT_RE}]}].concat(h)},c,{className:"constant",begin:"(::)?([A-Z]\\w*(::)?)+",relevance:0},{className:"symbol",begin:":",contains:n.concat([o]),relevance:0},{className:"number",begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
relevance:0},{className:"number",begin:"\\?\\w"},{className:"variable",begin:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},o,{begin:"("+a.RE_STARTERS_RE+")\\s*",contains:h.concat([{className:"regexp",begin:"/",end:"/[a-z]*",illegal:"\\n",contains:[a.BACKSLASH_ESCAPE]}]),relevance:0}]));g.contains=a;c.contains[1].contains=a;return{defaultMode:{lexems:"[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?",keywords:b,contains:a}}}(hljs);
hljs.LANGUAGES.sql=function(a){return{case_insensitive:!0,defaultMode:{illegal:"[^\\s]",contains:[{className:"operator",begin:"(begin|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma|grant)\\b",end:";",endsWithParent:!0,keywords:{keyword:"all partial global month current_timestamp using go revoke smallint indicator end-exec disconnect zone with character assertion to add current_user usage input local alter match collate real then rollback get read timestamp session_user not integer bit unique day minute desc insert execute like ilike|2 level decimal drop continue isolation found where constraints domain right national some module transaction relative second connect escape close system_user for deferred section cast current sqlstate allocate intersect deallocate numeric public preserve full goto initially asc no key output collation group by union session both last language constraint column of space foreign deferrable prior connection unknown action commit view or first into float year primary cascaded except restrict set references names table outer open select size are rows from prepare distinct leading create only next inner authorization schema corresponding option declare precision immediate else timezone_minute external varying translation true case exception join hour default double scroll value cursor descriptor values dec fetch procedure delete and false int is describe char as at in varchar null trailing any absolute current_time end grant privileges when cross check write current_date pad begin temporary exec time update catalog user sql date on identity timezone_hour natural whenever interval work order cascade diagnostics nchar having left call do handler load replace truncate start lock show pragma",
aggregate:"count sum min max avg"},contains:[{className:"string",begin:"'",end:"'",contains:[a.BACKSLASH_ESCAPE,{begin:"''"}],relevance:0},{className:"string",begin:'"',end:'"',contains:[a.BACKSLASH_ESCAPE,{begin:'""'}],relevance:0},{className:"string",begin:"`",end:"`",contains:[a.BACKSLASH_ESCAPE]},a.C_NUMBER_MODE]},a.C_BLOCK_COMMENT_MODE,{className:"comment",begin:"--",end:"$"}]}}}(hljs);
hljs.LANGUAGES.xml=function(){var a={endsWithParent:!0,contains:[{className:"attribute",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:'="',returnBegin:!0,end:'"',contains:[{className:"value",begin:'"',endsWithParent:!0}]},{begin:"='",returnBegin:!0,end:"'",contains:[{className:"value",begin:"'",endsWithParent:!0}]},{begin:"=",contains:[{className:"value",begin:"[^\\s/>]+"}]}]};return{case_insensitive:!0,defaultMode:{contains:[{className:"pi",begin:"<\\?",end:"\\?>",relevance:10},{className:"doctype",
begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},{className:"comment",begin:"<\!--",end:"--\>",relevance:10},{className:"cdata",begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{title:"style"},contains:[a],starts:{end:"</style>",returnEnd:!0,subLanguage:"css"}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{title:"script"},contains:[a],starts:{end:"<\/script>",returnEnd:!0,subLanguage:"javascript"}},
{begin:"<%",end:"%>",subLanguage:"vbscript"},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"title",begin:"[^ />]+"},a]}]}}}(hljs);