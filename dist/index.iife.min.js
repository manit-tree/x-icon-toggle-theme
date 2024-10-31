(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode("x-icon-toggle-theme{width:var(--icon-width,24px);height:var(--icon-height,24px);display:inline-block;position:absolute;top:10px;right:10px}x-icon-toggle-theme [data-role=toggle-theme]{width:var(--icon-width,24px);height:var(--icon-height,24px);cursor:pointer;place-content:center;display:grid}x-icon-toggle-theme [data-role=toggle-theme] svg{pointer-events:none;width:var(--icon-width,24px);height:var(--icon-height,24px);position:absolute}.light .hide-on-light,.dark .hide-on-dark{display:none}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var n=Object.defineProperty;var o=(e,t,i)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var h=(e,t,i)=>o(e,typeof t!="symbol"?t+"":t,i);(function(){"use strict";(()=>{class e extends HTMLElement{constructor(){super(...arguments);h(this,"update",()=>{if(this.querySelector("a")){let s=this.getAttribute("width")??"24",d=this.getAttribute("height")??"24";this.style.setProperty("--icon-width",s+"px"),this.style.setProperty("--icon-height",d+"px")}})}connectedCallback(){if(!this.querySelector("a")){let a=document.createElement("a");a.setAttribute("data-role","toggle-theme"),a.innerHTML=`
                    <svg data-svg="" class="hide-on-light shrink-0 size-3 md:size-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M12 2v2"></path>
                      <path d="M12 20v2"></path>
                      <path d="m4.93 4.93 1.41 1.41"></path>
                      <path d="m17.66 17.66 1.41 1.41"></path>
                      <path d="M2 12h2"></path>
                      <path d="M20 12h2"></path>
                      <path d="m6.34 17.66-1.41 1.41"></path>
                      <path d="m19.07 4.93-1.41 1.41"></path>
                    </svg>
                    <svg data-svg="" class="hide-on-dark shrink-0 size-3 md:size-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    </svg>                    
                `,a.addEventListener("click",()=>{let s=document.documentElement;s.classList.contains("dark")?(s.classList.remove("dark"),s.classList.add("light")):(s.classList.remove("light"),s.classList.add("dark"))}),this.append(a)}this.update()}static get observedAttributes(){return["width","height"]}attributeChangedCallback(){this.update()}}customElements.define("x-icon-toggle-theme",e)})()})();
