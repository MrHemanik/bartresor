"use strict";(self.webpackChunkbartresor=self.webpackChunkbartresor||[]).push([[691,680],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,c=/[_.\- ]+/,s=new RegExp("^"+c.source),i=new RegExp(c.source+n.source,"gu"),l=new RegExp("\\d+"+n.source,"gu"),o=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const c=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),o=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?o(e):c(e);return e!==c(e)&&(e=((e,r,n)=>{let c=!1,s=!1,i=!1;for(let l=0;l<e.length;l++){const o=e[l];c&&t.test(o)?(e=e.slice(0,l)+"-"+e.slice(l),c=!1,i=s,s=!0,l++):s&&i&&a.test(o)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),i=s,s=!1,c=!0):(c=r(o)===o&&n(o)!==o,i=s,s=n(o)===o&&r(o)!==o)}return e})(e,c,o)),e=e.replace(s,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,c):c(e),n.pascalCase&&(e=o(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,l.lastIndex=0,e.replace(i,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,o)};e.exports=o,e.exports.default=o},8032:function(e,t,a){a.d(t,{L:function(){return m},M:function(){return E},P:function(){return k},S:function(){return A},_:function(){return i},a:function(){return s},b:function(){return d},g:function(){return b},h:function(){return l}});var r=a(7294),n=(a(3204),a(5697)),c=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)t.indexOf(a=c[r])>=0||(n[a]=e[a]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function o(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function b(e,t,a,r,n,c,i,l){const o={};c&&(o.backgroundColor=c,"fixed"===a?(o.width=r,o.height=n,o.backgroundColor=c,o.position="relative"):("constrained"===a||"fullWidth"===a)&&(o.position="absolute",o.top=0,o.left=0,o.bottom=0,o.right=0)),i&&(o.objectFit=i),l&&(o.objectPosition=l);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},o)});return d}const f=["children"],u=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,a=i(e,f);return r.createElement(r.Fragment,null,r.createElement(u,s({},a)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],p=["fallback","sources","shouldLoad"],w=function(e){let{src:t,srcSet:a,loading:n,alt:c="",shouldLoad:l}=e,o=i(e,g);return r.createElement("img",s({},o,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:c}))},x=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,c=i(e,p);const l=c.sizes||(null==t?void 0:t.sizes),o=r.createElement(w,s({},c,t,{sizes:l,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:c}=e;return r.createElement("source",{key:`${t}-${c}-${a}`,type:c,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:l})})),o):o};var h;w.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},x.displayName="Picture",x.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const y=["fallback"],k=function(e){let{fallback:t}=e,a=i(e,y);return t?r.createElement(x,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};k.displayName="Placeholder",k.propTypes={fallback:n.string,sources:null==(h=x.propTypes)?void 0:h.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const E=function(e){return r.createElement(r.Fragment,null,r.createElement(x,s({},e)),r.createElement("noscript",null,r.createElement(x,s({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=x.propTypes;const S=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],v=["style","className"],_=e=>e.replace(/\n/g,""),N=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?c().string.apply(c(),[e,t,a].concat(n)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},z={image:c().object.isRequired,alt:N},B=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],C=["style","className"],L=new Set;let j,O;const T=function(e){let{as:t="div",image:n,style:c,backgroundColor:d,className:b,class:f,onStartLoad:u,onLoad:m,onError:g}=e,p=i(e,B);const{width:w,height:x,layout:h}=n,y=o(w,x,h),{style:k,className:E}=y,S=i(y,C),v=(0,r.useRef)(),_=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);f&&(b=f);const N=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(h,w,x);return(0,r.useEffect)((()=>{j||(j=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return O=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=v.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==u||u({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==u||u({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void L.add(_);if(O&&L.has(_))return;let t,r;return j.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;v.current&&(v.current.innerHTML=a(s({isLoading:!0,isLoaded:L.has(_),image:n},p)),L.has(_)||(t=requestAnimationFrame((()=>{v.current&&(r=i(v.current,_,L,c,u,m,g))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{L.has(_)&&O&&(v.current.innerHTML=O(s({isLoading:L.has(_),isLoaded:L.has(_),image:n},p)),null==u||u({wasCached:!0}),null==m||m({wasCached:!0}))}),[n]),(0,r.createElement)(t,s({},S,{style:s({},k,c,{backgroundColor:d}),className:`${E}${b?` ${b}`:""}`,ref:v,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},I=(0,r.memo)((function(e){return e.image?(0,r.createElement)(T,e):null}));I.propTypes=z,I.displayName="GatsbyImage";const D=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function R(e){return function(t){let{src:a,__imageData:n,__error:c}=t,l=i(t,D);return c&&console.warn(c),n?r.createElement(e,s({image:n},l)):(console.warn("Image not loaded",a),null)}}const P=R((function(e){let{as:t="div",className:a,class:n,style:c,image:l,loading:f="lazy",imgClassName:u,imgStyle:g,backgroundColor:p,objectFit:w,objectPosition:x}=e,h=i(e,S);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),g=s({objectFit:w,objectPosition:x,backgroundColor:p},g);const{width:y,height:N,layout:z,images:B,placeholder:C,backgroundColor:L}=l,j=o(y,N,z),{style:O,className:T}=j,I=i(j,v),D={fallback:void 0,sources:[]};return B.fallback&&(D.fallback=s({},B.fallback,{srcSet:B.fallback.srcSet?_(B.fallback.srcSet):void 0})),B.sources&&(D.sources=B.sources.map((e=>s({},e,{srcSet:_(e.srcSet)})))),r.createElement(t,s({},I,{style:s({},O,c,{backgroundColor:p}),className:`${T}${a?` ${a}`:""}`}),r.createElement(m,{layout:z,width:y,height:N},r.createElement(k,s({},b(C,!1,z,y,N,L,w,x))),r.createElement(E,s({"data-gatsby-image-ssr":"",className:u},h,d("eager"===f,!1,D,f,g)))))})),$=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?c().number.apply(c(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},F=new Set(["fixed","fullWidth","constrained"]),M={src:c().string.isRequired,alt:N,width:$,height:$,sizes:c().string,layout:e=>{if(void 0!==e.layout&&!F.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};P.displayName="StaticImage",P.propTypes=M;const A=R(I);A.displayName="StaticImage",A.propTypes=M},7200:function(e,t,a){a.r(t);var r=a(7294),n=a(8032),c=a(8378);function s(e){let{children:t}=e;return r.createElement("div",{className:"flex flex-col items-center justify-center w-full pb-10"},r.createElement("div",{className:"flex flex-col items-center justify-center w-full h-full max-w-6xl"},r.createElement("div",{className:"flex flex-col items-center justify-center w-full h-full p-4 bg-gray-200 dark:bg-gray-800 rounded shadow"},t,r.createElement("div",null))))}function i(){return r.createElement("div",{className:"flex flex-col items-center justify-center w-full h-full p-4 bg-gray-100 dark:bg-gray-900 rounded shadow mt-5"},r.createElement("h2",{className:"mb-4 text-1xl md:text-2xl lg:text-3xl text-black dark:text-white"},"Bilder des Bartresors (Ohne Kompassrose)"),r.createElement("div",{className:"flex flex-col items-center justify-center w-full h-full max-w-6xl"},r.createElement("div",{className:"flex flex-col items-center justify-center w-full h-full p-4"},r.createElement("div",{className:"flex flex-row items-center justify-center w-full h-full"},r.createElement("table",null,r.createElement("thead",{className:" text-black  dark:text-white text-center"},r.createElement("tr",null,r.createElement("th",null,"Vorne Offen"),r.createElement("th",null,"Vorne Links"),r.createElement("th",null,"Vorne Rechts"))),r.createElement("tbody",{className:" text-black  dark:text-white text-center"},r.createElement("tr",null,r.createElement("td",null,r.createElement(n.S,{src:"../images/box1.png",alt:"Box Open",width:1500,__imageData:a(5925)})),r.createElement("td",null,r.createElement(n.S,{src:"../images/box2.png",alt:"Box Front Left",width:1500,__imageData:a(1543)})),r.createElement("td",null,r.createElement(n.S,{src:"../images/box3.png",alt:"Box Front Right",width:1500,__imageData:a(3278)}))),r.createElement("tr",null,r.createElement("td",null),r.createElement("td",null,"Hinten Links (Mit Kompassrose)"),r.createElement("td",null,"Unten Rechts")),r.createElement("tr",null,r.createElement("td",null),r.createElement("td",null,r.createElement(n.S,{src:"../images/box4.png",alt:"BoxBack Back Left",width:1500,__imageData:a(64)})),r.createElement("td",null,r.createElement(n.S,{src:"../images/box6.png",alt:"BoxBack Back Left",width:1500,__imageData:a(4952)})))))))))}function l(){return r.createElement("div",{className:"flex flex-col items-center justify-center w-full h-full p-4 bg-gray-100 dark:bg-gray-900 rounded shadow mt-5"},r.createElement("h2",{className:"mb-4 text-1xl md:text-2xl lg:text-3xl text-black dark:text-white"},"Seitenbilder des Bartresors"),r.createElement("div",{className:"flex flex-col items-center justify-center w-full h-full max-w-6xl"},r.createElement("div",{className:"flex flex-col items-center justify-center w-full h-full p-4"},r.createElement("div",{className:"flex flex-row items-center justify-center w-full h-full"},r.createElement("table",null,r.createElement("thead",{className:" text-black  dark:text-white text-center"},r.createElement("tr",null,r.createElement("th",null,"Oben"),r.createElement("th",null,"Unten"),r.createElement("th",null,"Links"),r.createElement("th",null,"Rechts"))),r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,r.createElement(n.S,{src:"../images/boxSide_top.png",alt:"Boxside Topview",width:1500,__imageData:a(7713)})),r.createElement("td",null,r.createElement(n.S,{src:"../images/boxSide_bottom.png",alt:"Boxside Bottomview",width:1500,__imageData:a(5606)})),r.createElement("td",null,r.createElement(n.S,{src:"../images/boxSide_left.png",alt:"Boxside Leftview",width:1500,__imageData:a(3323)})),r.createElement("td",null,r.createElement(n.S,{src:"../images/boxSide_right.png",alt:"Boxside Rightview",width:1500,__imageData:a(8265)})))))),r.createElement("div",{className:"flex flex-row items-center justify-center w-full h-full"},r.createElement("table",null,r.createElement("thead",{className:" text-black  dark:text-white text-center"},r.createElement("tr",null,r.createElement("th",null,"Vorne"),r.createElement("th",null,"Hinten (Geschlossen)"),r.createElement("th",null,"Hinten (Offen)"))),r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",null,r.createElement(n.S,{src:"../images/boxSide_front.png",alt:"Boxside Frontview",width:1500,__imageData:a(2069)})),r.createElement("td",null,r.createElement(n.S,{src:"../images/boxSide_back_close.png",alt:"Boxside Backview",width:1500,__imageData:a(9206)})),r.createElement("td",null,r.createElement(n.S,{src:"../images/boxSide_back_open.png",alt:"Boxside Backview",width:1500,__imageData:a(8619)})))))))))}t.default=function(e){const{0:t,1:o}=(0,r.useState)(!1);return r.createElement(r.Fragment,null,r.createElement("div",{className:"bg-white dark:bg-gray-700"},r.createElement("div",{className:"flex flex-col items-center justify-center w-full h-screen mb-10 bg-gray-100 dark:bg-gray-900"},r.createElement("div",{className:"flex flex-col items-center justify-center w-full h-full max-w-6xl"},r.createElement("div",{className:"flex flex-col items-center justify-center w-full h-full p-4 bg-gray-200 dark:bg-gray-800 rounded shadow"},r.createElement("h1",{className:"mb-4 text-7xl md:text-8xl lg:text-9xl font-extrabold leading-none tracking-tight text-black  dark:text-white"},"Bartresor"),r.createElement("div",{className:"flex-grow"},r.createElement(n.S,{src:"../images/box5.png",alt:"Puzzlebox",className:"h-full w-full",width:600,height:600,__imageData:a(2964)})),r.createElement("div",{className:"my-4 text-1xl md:text-2xl lg:text-3xl text-gray-800 dark:text-gray-200 text-center"},'Eine intelligente Puzzle-Box für Bars, entwickelt im Rahmen des "Mikrocontroller Programmierung"-Moduls an der Hochschule Flensburg')))),r.createElement(s,null,r.createElement("h1",{className:"mb-4 text-2xl md:text-3xl lg:text-4xl font-extrabold leading-none tracking-tight text-black  dark:text-white"},"Kurzes Vorstellungsvideo"),r.createElement(c.default,{embedId:"Suc7tpUJTD8"})),r.createElement(s,null,r.createElement("h1",{className:"mb-4 text-2xl md:text-3xl lg:text-4xl font-extrabold leading-none tracking-tight text-black  dark:text-white"},"Was ist der Bartresor?"),r.createElement("span",{className:"text-lg text-gray-800 dark:text-gray-200 text-center"},'Das "Bartresor"-Projekt, welches im Rahmen des Mikrocontroller-Moduls im Masterstudiengang Angewandte Informatik an der Hochschule Flensburg entstanden ist, präsentiert eine faszinierende Symbiose aus Escape-Room-Spielen und hochmoderner Mikrocontroller-Technologie. Mit besonderem Augenmerk auf Barumgebungen entwickelt, eröffnet dieses innovative Puzzle-Szenario eine völlig neue Dimension der Unterhaltung.',r.createElement("br",null),r.createElement("br",null),'Die anvisierte Zielgruppe des "Bartresors" erstreckt sich über Personen, die in Bars nach ansprechenden Unterhaltungsoptionen suchen. Der Fokus des Projekts liegt dabei auf der Förderung sozialer Interaktion und Gruppenerlebnissen. Insbesondere Erwachsene, die nach einer avantgardistischen Alternative zu herkömmlichen Freizeitaktivitäten suchen, finden im "Bartresor" nicht nur eine unterhaltsame Abwechslung, sondern auch eine Möglichkeit zur Stärkung von Teamarbeit und Förderung von Problemlösungsfähigkeiten. Die geschickte Gestaltung des Projekts schafft eine entspannte Umgebung, die informelle Gespräche und Networking fördert.',r.createElement("br",null),r.createElement("br",null),'Ein herausragendes Merkmal des "Bartresors" im Vergleich zu traditionellen "Escape Room"-Spielen ist die Integration von Mikrocontrollern. Die Verwendung sensorbasierter Technologie in Verbindung mit raffinierten Rätseln verleiht dem Spielerlebnis eine einzigartige Dimension. Der klare Spielverlauf des "Bartresors" erfolgt nach dem Einstecken einer Karte. Unterschiedliche Rätsel, die von Touchsensoren über akustische Elemente bis zur Neigung der Box reichen, müssen gemeistert werden. Bei erfolgreicher Bewältigung öffnet sich der Tresor, und die Spieler werden mit einer wohlverdienten Belohnung überrascht.',r.createElement("br",null),r.createElement("br",null),"Die Integration von Mikrocontrollern ermöglicht nicht nur eine technologisch anspruchsvolle Spielerfahrung, sondern bietet auch eine unterhaltsame Möglichkeit für Gruppen, ihre Teamfähigkeiten zu stärken. Die Anpassbarkeit der Herausforderungen an die individuellen Fähigkeiten der Teilnehmer trägt zur breiten Akzeptanz und Teilnahme an dem Projekt bei.",r.createElement("br",null),r.createElement("br",null),'Zusammenfassend trägt das "Bartresor"-Projekt nicht nur zur Unterhaltung in Barumgebungen bei, sondern fungiert auch als Wegbereiter für die Verschmelzung von Technologie und sozialen Erlebnissen. Die Kombination aus Innovation, Bildung und Unterhaltung macht den "Bartresor" zu einem wegweisenden Projekt im Bereich der angewandten Informatik, welches nicht nur die technologische Expertise fördert, sondern auch einen bedeutenden Beitrag zur zeitgemäßen Freizeitgestaltung leistet.',r.createElement("br",null),r.createElement("br",null))),r.createElement(s,null,r.createElement("h1",{className:"mb-4 text-2xl md:text-3xl lg:text-4xl font-extrabold leading-none tracking-tight text-black  dark:text-white"},"Kurze Demonstration der einfachen Schwierigkeit"),r.createElement(c.default,{embedId:"8OfQSVdoF7I"})),r.createElement(s,null,r.createElement("h1",{className:"mb-4 text-2xl md:text-3xl lg:text-4xl font-extrabold leading-none tracking-tight text-black  dark:text-white"},"Bilder"),r.createElement("div",{className:" text-gray-800 dark:text-gray-200"},"Eine kleine Galerie mit Bildern des Bartresors"),r.createElement(i,null),r.createElement(l,null))))}},8378:function(e,t,a){a.r(t);var r=a(7294);t.default=e=>{let{embedId:t}=e;return r.createElement("div",{className:"video-responsive"},r.createElement("iframe",{width:"853",height:"480",src:`https://www.youtube.com/embed/${t}`,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"}))}},3278:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/bartresor/static/d242972576cf6b2670e2a1bc5acdb31a/7649f/box3.png","srcSet":"/bartresor/static/d242972576cf6b2670e2a1bc5acdb31a/96b76/box3.png 375w,\\n/bartresor/static/d242972576cf6b2670e2a1bc5acdb31a/1daac/box3.png 750w,\\n/bartresor/static/d242972576cf6b2670e2a1bc5acdb31a/7649f/box3.png 1500w","sizes":"(min-width: 1500px) 1500px, 100vw"},"sources":[{"srcSet":"/bartresor/static/d242972576cf6b2670e2a1bc5acdb31a/954ae/box3.webp 375w,\\n/bartresor/static/d242972576cf6b2670e2a1bc5acdb31a/d7fb8/box3.webp 750w,\\n/bartresor/static/d242972576cf6b2670e2a1bc5acdb31a/5cdb5/box3.webp 1500w","type":"image/webp","sizes":"(min-width: 1500px) 1500px, 100vw"}]},"width":1500,"height":1752}')},7713:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8a8a8","images":{"fallback":{"src":"/bartresor/static/032f89f460f7f3d913d6b9ed20945c64/e0d20/boxSide_top.png","srcSet":"/bartresor/static/032f89f460f7f3d913d6b9ed20945c64/e7959/boxSide_top.png 375w,\\n/bartresor/static/032f89f460f7f3d913d6b9ed20945c64/73999/boxSide_top.png 750w,\\n/bartresor/static/032f89f460f7f3d913d6b9ed20945c64/e0d20/boxSide_top.png 1500w,\\n/bartresor/static/032f89f460f7f3d913d6b9ed20945c64/2b3b9/boxSide_top.png 3000w","sizes":"(min-width: 1500px) 1500px, 100vw"},"sources":[{"srcSet":"/bartresor/static/032f89f460f7f3d913d6b9ed20945c64/55dc4/boxSide_top.webp 375w,\\n/bartresor/static/032f89f460f7f3d913d6b9ed20945c64/fe764/boxSide_top.webp 750w,\\n/bartresor/static/032f89f460f7f3d913d6b9ed20945c64/d9994/boxSide_top.webp 1500w,\\n/bartresor/static/032f89f460f7f3d913d6b9ed20945c64/d76cb/boxSide_top.webp 3000w","type":"image/webp","sizes":"(min-width: 1500px) 1500px, 100vw"}]},"width":1500,"height":1176}')},8619:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/bartresor/static/e1c56ae8ba62d42a1d343c9a9f7b8dde/cb626/boxSide_back_open.png","srcSet":"/bartresor/static/e1c56ae8ba62d42a1d343c9a9f7b8dde/bb97e/boxSide_back_open.png 375w,\\n/bartresor/static/e1c56ae8ba62d42a1d343c9a9f7b8dde/76f6c/boxSide_back_open.png 750w,\\n/bartresor/static/e1c56ae8ba62d42a1d343c9a9f7b8dde/cb626/boxSide_back_open.png 1500w,\\n/bartresor/static/e1c56ae8ba62d42a1d343c9a9f7b8dde/b95d3/boxSide_back_open.png 3000w","sizes":"(min-width: 1500px) 1500px, 100vw"},"sources":[{"srcSet":"/bartresor/static/e1c56ae8ba62d42a1d343c9a9f7b8dde/22540/boxSide_back_open.webp 375w,\\n/bartresor/static/e1c56ae8ba62d42a1d343c9a9f7b8dde/4c1cf/boxSide_back_open.webp 750w,\\n/bartresor/static/e1c56ae8ba62d42a1d343c9a9f7b8dde/61a3a/boxSide_back_open.webp 1500w,\\n/bartresor/static/e1c56ae8ba62d42a1d343c9a9f7b8dde/142fa/boxSide_back_open.webp 3000w","type":"image/webp","sizes":"(min-width: 1500px) 1500px, 100vw"}]},"width":1500,"height":2000}')},2964:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/bartresor/static/dfb4caaf9d194b487db869afee584ed4/c7240/box5.png","srcSet":"/bartresor/static/dfb4caaf9d194b487db869afee584ed4/de3a1/box5.png 150w,\\n/bartresor/static/dfb4caaf9d194b487db869afee584ed4/30cdc/box5.png 300w,\\n/bartresor/static/dfb4caaf9d194b487db869afee584ed4/c7240/box5.png 600w,\\n/bartresor/static/dfb4caaf9d194b487db869afee584ed4/e8b76/box5.png 1200w","sizes":"(min-width: 600px) 600px, 100vw"},"sources":[{"srcSet":"/bartresor/static/dfb4caaf9d194b487db869afee584ed4/c65bc/box5.webp 150w,\\n/bartresor/static/dfb4caaf9d194b487db869afee584ed4/078c3/box5.webp 300w,\\n/bartresor/static/dfb4caaf9d194b487db869afee584ed4/6d09e/box5.webp 600w,\\n/bartresor/static/dfb4caaf9d194b487db869afee584ed4/83805/box5.webp 1200w","type":"image/webp","sizes":"(min-width: 600px) 600px, 100vw"}]},"width":600,"height":600}')},64:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/bartresor/static/169e40fda75f709c0cc393a7c2c5426e/77057/box4.png","srcSet":"/bartresor/static/169e40fda75f709c0cc393a7c2c5426e/cf747/box4.png 375w,\\n/bartresor/static/169e40fda75f709c0cc393a7c2c5426e/1e143/box4.png 750w,\\n/bartresor/static/169e40fda75f709c0cc393a7c2c5426e/77057/box4.png 1500w","sizes":"(min-width: 1500px) 1500px, 100vw"},"sources":[{"srcSet":"/bartresor/static/169e40fda75f709c0cc393a7c2c5426e/6b9a6/box4.webp 375w,\\n/bartresor/static/169e40fda75f709c0cc393a7c2c5426e/98787/box4.webp 750w,\\n/bartresor/static/169e40fda75f709c0cc393a7c2c5426e/0da72/box4.webp 1500w","type":"image/webp","sizes":"(min-width: 1500px) 1500px, 100vw"}]},"width":1500,"height":1760}')},3323:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#c8c8c8","images":{"fallback":{"src":"/bartresor/static/6fba7ad74b875c7116b0878bd77842d3/5724f/boxSide_left.png","srcSet":"/bartresor/static/6fba7ad74b875c7116b0878bd77842d3/5abe2/boxSide_left.png 375w,\\n/bartresor/static/6fba7ad74b875c7116b0878bd77842d3/8607b/boxSide_left.png 750w,\\n/bartresor/static/6fba7ad74b875c7116b0878bd77842d3/5724f/boxSide_left.png 1500w","sizes":"(min-width: 1500px) 1500px, 100vw"},"sources":[{"srcSet":"/bartresor/static/6fba7ad74b875c7116b0878bd77842d3/68f96/boxSide_left.webp 375w,\\n/bartresor/static/6fba7ad74b875c7116b0878bd77842d3/98e80/boxSide_left.webp 750w,\\n/bartresor/static/6fba7ad74b875c7116b0878bd77842d3/0cdfa/boxSide_left.webp 1500w","type":"image/webp","sizes":"(min-width: 1500px) 1500px, 100vw"}]},"width":1500,"height":2242}')},1543:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/bartresor/static/6dabc7ce7f85b77a8e35d89ba9216e15/6ba46/box2.png","srcSet":"/bartresor/static/6dabc7ce7f85b77a8e35d89ba9216e15/b0513/box2.png 375w,\\n/bartresor/static/6dabc7ce7f85b77a8e35d89ba9216e15/db30b/box2.png 750w,\\n/bartresor/static/6dabc7ce7f85b77a8e35d89ba9216e15/6ba46/box2.png 1500w","sizes":"(min-width: 1500px) 1500px, 100vw"},"sources":[{"srcSet":"/bartresor/static/6dabc7ce7f85b77a8e35d89ba9216e15/0fe55/box2.webp 375w,\\n/bartresor/static/6dabc7ce7f85b77a8e35d89ba9216e15/aee1b/box2.webp 750w,\\n/bartresor/static/6dabc7ce7f85b77a8e35d89ba9216e15/f6168/box2.webp 1500w","type":"image/webp","sizes":"(min-width: 1500px) 1500px, 100vw"}]},"width":1500,"height":1818}')},8265:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#b8b8b8","images":{"fallback":{"src":"/bartresor/static/63a1505ff87b88c640b40e9c73cdc74f/25c8f/boxSide_right.png","srcSet":"/bartresor/static/63a1505ff87b88c640b40e9c73cdc74f/6cbc1/boxSide_right.png 375w,\\n/bartresor/static/63a1505ff87b88c640b40e9c73cdc74f/71842/boxSide_right.png 750w,\\n/bartresor/static/63a1505ff87b88c640b40e9c73cdc74f/25c8f/boxSide_right.png 1500w","sizes":"(min-width: 1500px) 1500px, 100vw"},"sources":[{"srcSet":"/bartresor/static/63a1505ff87b88c640b40e9c73cdc74f/ec449/boxSide_right.webp 375w,\\n/bartresor/static/63a1505ff87b88c640b40e9c73cdc74f/cbc4a/boxSide_right.webp 750w,\\n/bartresor/static/63a1505ff87b88c640b40e9c73cdc74f/85e31/boxSide_right.webp 1500w","type":"image/webp","sizes":"(min-width: 1500px) 1500px, 100vw"}]},"width":1500,"height":2390}')},5606:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#d8d8d8","images":{"fallback":{"src":"/bartresor/static/1fc7688407054d634e96bf9c47071cdc/3f3b1/boxSide_bottom.png","srcSet":"/bartresor/static/1fc7688407054d634e96bf9c47071cdc/297a6/boxSide_bottom.png 375w,\\n/bartresor/static/1fc7688407054d634e96bf9c47071cdc/f4446/boxSide_bottom.png 750w,\\n/bartresor/static/1fc7688407054d634e96bf9c47071cdc/3f3b1/boxSide_bottom.png 1500w","sizes":"(min-width: 1500px) 1500px, 100vw"},"sources":[{"srcSet":"/bartresor/static/1fc7688407054d634e96bf9c47071cdc/99524/boxSide_bottom.webp 375w,\\n/bartresor/static/1fc7688407054d634e96bf9c47071cdc/0a6fb/boxSide_bottom.webp 750w,\\n/bartresor/static/1fc7688407054d634e96bf9c47071cdc/308ef/boxSide_bottom.webp 1500w","type":"image/webp","sizes":"(min-width: 1500px) 1500px, 100vw"}]},"width":1500,"height":1170}')},9206:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#787878","images":{"fallback":{"src":"/bartresor/static/2dceb978dde7ba84dacf55fb0eab6729/1318a/boxSide_back_close.png","srcSet":"/bartresor/static/2dceb978dde7ba84dacf55fb0eab6729/e5f01/boxSide_back_close.png 375w,\\n/bartresor/static/2dceb978dde7ba84dacf55fb0eab6729/6b7ac/boxSide_back_close.png 750w,\\n/bartresor/static/2dceb978dde7ba84dacf55fb0eab6729/1318a/boxSide_back_close.png 1500w","sizes":"(min-width: 1500px) 1500px, 100vw"},"sources":[{"srcSet":"/bartresor/static/2dceb978dde7ba84dacf55fb0eab6729/3ab9d/boxSide_back_close.webp 375w,\\n/bartresor/static/2dceb978dde7ba84dacf55fb0eab6729/7ea91/boxSide_back_close.webp 750w,\\n/bartresor/static/2dceb978dde7ba84dacf55fb0eab6729/c68f0/boxSide_back_close.webp 1500w","type":"image/webp","sizes":"(min-width: 1500px) 1500px, 100vw"}]},"width":1500,"height":1832}')},5925:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/bartresor/static/50b75381ccc4688c63c6b81c7562bfa1/117ea/box1.png","srcSet":"/bartresor/static/50b75381ccc4688c63c6b81c7562bfa1/f2980/box1.png 375w,\\n/bartresor/static/50b75381ccc4688c63c6b81c7562bfa1/97226/box1.png 750w,\\n/bartresor/static/50b75381ccc4688c63c6b81c7562bfa1/117ea/box1.png 1500w","sizes":"(min-width: 1500px) 1500px, 100vw"},"sources":[{"srcSet":"/bartresor/static/50b75381ccc4688c63c6b81c7562bfa1/deccb/box1.webp 375w,\\n/bartresor/static/50b75381ccc4688c63c6b81c7562bfa1/379db/box1.webp 750w,\\n/bartresor/static/50b75381ccc4688c63c6b81c7562bfa1/4b2e6/box1.webp 1500w","type":"image/webp","sizes":"(min-width: 1500px) 1500px, 100vw"}]},"width":1500,"height":1208}')},4952:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/bartresor/static/4391f82d3790cb2765d13acc2a17074a/83ab2/box6.png","srcSet":"/bartresor/static/4391f82d3790cb2765d13acc2a17074a/a4ec7/box6.png 375w,\\n/bartresor/static/4391f82d3790cb2765d13acc2a17074a/62860/box6.png 750w,\\n/bartresor/static/4391f82d3790cb2765d13acc2a17074a/83ab2/box6.png 1500w,\\n/bartresor/static/4391f82d3790cb2765d13acc2a17074a/c175c/box6.png 3000w","sizes":"(min-width: 1500px) 1500px, 100vw"},"sources":[{"srcSet":"/bartresor/static/4391f82d3790cb2765d13acc2a17074a/63433/box6.webp 375w,\\n/bartresor/static/4391f82d3790cb2765d13acc2a17074a/b1001/box6.webp 750w,\\n/bartresor/static/4391f82d3790cb2765d13acc2a17074a/84f07/box6.webp 1500w,\\n/bartresor/static/4391f82d3790cb2765d13acc2a17074a/b6374/box6.webp 3000w","type":"image/webp","sizes":"(min-width: 1500px) 1500px, 100vw"}]},"width":1500,"height":1153}')},2069:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#c8c8c8","images":{"fallback":{"src":"/bartresor/static/f9c76c87ef25f6c127afde896c91bc02/bb7a4/boxSide_front.png","srcSet":"/bartresor/static/f9c76c87ef25f6c127afde896c91bc02/4d3c0/boxSide_front.png 375w,\\n/bartresor/static/f9c76c87ef25f6c127afde896c91bc02/80594/boxSide_front.png 750w,\\n/bartresor/static/f9c76c87ef25f6c127afde896c91bc02/bb7a4/boxSide_front.png 1500w","sizes":"(min-width: 1500px) 1500px, 100vw"},"sources":[{"srcSet":"/bartresor/static/f9c76c87ef25f6c127afde896c91bc02/29fcc/boxSide_front.webp 375w,\\n/bartresor/static/f9c76c87ef25f6c127afde896c91bc02/eb588/boxSide_front.webp 750w,\\n/bartresor/static/f9c76c87ef25f6c127afde896c91bc02/cc3aa/boxSide_front.webp 1500w","type":"image/webp","sizes":"(min-width: 1500px) 1500px, 100vw"}]},"width":1500,"height":1729}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-c168cc2d764cdc70db04.js.map