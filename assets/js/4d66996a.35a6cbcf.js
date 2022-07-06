"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7805],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,k=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(k,s(s({ref:t},d),{},{components:a})):n.createElement(k,s({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8292:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),s=["components"],o={id:"releases",title:"Releases"},l=void 0,p={unversionedId:"releases",id:"releases",title:"Releases",description:"Release notes for Jitsi Meet are kept here.",source:"@site/docs/releases.md",sourceDirName:".",slug:"/releases",permalink:"/handbook/docs/releases",draft:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/releases.md",tags:[],version:"current",lastUpdatedAt:1657144183,formattedLastUpdatedAt:"7/6/2022",frontMatter:{id:"releases",title:"Releases"},sidebar:"releases-sidebar"},d={},c=[{value:"Mobile apps",id:"mobile-apps",level:2},{value:"Beta versions",id:"beta-versions",level:3},{value:"Desktop apps",id:"desktop-apps",level:2},{value:"Mobile SDKs",id:"mobile-sdks",level:2},{value:"Docker images",id:"docker-images",level:2},{value:"Debian/Ubuntu packages",id:"debianubuntu-packages",level:2},{value:"Web frontend",id:"web-frontend",level:2}],m={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Release notes for Jitsi Meet are kept ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet-release-notes"},"here"),"."))),(0,i.kt)("h2",{id:"mobile-apps"},"Mobile apps"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("i",{class:"fa-brands fa-android"})," Android"),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("i",{class:"fa-brands fa-android"})," Android (F-Droid)"),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("i",{class:"fa-brands fa-apple"})," iOS"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://play.google.com/store/apps/details?id=org.jitsi.meet"},(0,i.kt)("img",{src:"https://raw.githubusercontent.com/jitsi/handbook/master/docs/assets/google-play-badge.png",height:"50"}))),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://f-droid.org/en/packages/org.jitsi.meet/"},(0,i.kt)("img",{src:"https://raw.githubusercontent.com/jitsi/handbook/master/docs/assets/f-droid-badge.png",height:"50"}))),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://itunes.apple.com/us/app/jitsi-meet/id1165103905"},(0,i.kt)("img",{src:"https://raw.githubusercontent.com/jitsi/handbook/master/docs/assets/appstore-badge.png",height:"50"})))))),(0,i.kt)("h3",{id:"beta-versions"},"Beta versions"),(0,i.kt)("p",null,"If you are feeling adventurous and want to get an early scoop of the features as they are being\ndeveloped you can also sign up for our open beta testing here:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("i",{class:"fa-brands fa-android"})," [Android](https://play.google.com/apps/testing/org.jitsi.meet)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("i",{class:"fa-brands fa-apple"})," [iOS](https://testflight.apple.com/join/isy6ja7S)")),(0,i.kt)("h2",{id:"desktop-apps"},"Desktop apps"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("i",{class:"fa-brands fa-windows"})," Windows"),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("i",{class:"fa-brands fa-apple"})," macOS"),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("i",{class:"fa-brands fa-linux"})," GNU/Linux (AppImage)"),(0,i.kt)("th",{parentName:"tr",align:"center"},(0,i.kt)("i",{class:"fa-brands fa-linux"})," GNU/Linux (Deb)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/jitsi/jitsi-meet-electron/releases/latest/download/jitsi-meet.exe"},"Download")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/jitsi/jitsi-meet-electron/releases/latest/download/jitsi-meet.dmg"},"Download")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/jitsi/jitsi-meet-electron/releases/latest/download/jitsi-meet-x86_64.AppImage"},"Download")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/jitsi/jitsi-meet-electron/releases/latest/download/jitsi-meet-amd64.deb"},"Download"))))),(0,i.kt)("p",null,"The desktop applications are based on Electron. For macOS it is also available as a ",(0,i.kt)("inlineCode",{parentName:"p"},"brew")," cask which can be installed using ",(0,i.kt)("inlineCode",{parentName:"p"},"brew install jitsi-meet"),"."),(0,i.kt)("h2",{id:"mobile-sdks"},"Mobile SDKs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("i",{class:"fa-brands fa-android"})," [Android (Maven repository)](https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-android-sdk#use-pre-build-sdk-artifactsbinaries)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("i",{class:"fa-brands fa-apple"})," [iOS (CocoaPods)](https://cocoapods.org/pods/JitsiMeetSDK)")),(0,i.kt)("h2",{id:"docker-images"},"Docker images"),(0,i.kt)("p",null,"See the Docker image releases ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jitsi/docker-jitsi-meet/releases"},"here"),"."),(0,i.kt)("h2",{id:"debianubuntu-packages"},"Debian/Ubuntu packages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://download.jitsi.org/stable/"},(0,i.kt)("inlineCode",{parentName:"a"},"stable"))," (",(0,i.kt)("a",{parentName:"li",href:"https://jitsi.org/downloads/ubuntu-debian-installations-instructions/"},"instructions"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://download.jitsi.org/testing/"},(0,i.kt)("inlineCode",{parentName:"a"},"testing"))," (",(0,i.kt)("a",{parentName:"li",href:"https://jitsi.org/downloads/ubuntu-debian-installations-instructions-for-testing/"},"instructions"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://download.jitsi.org/unstable/"},(0,i.kt)("inlineCode",{parentName:"a"},"nightly"))," (",(0,i.kt)("a",{parentName:"li",href:"https://jitsi.org/downloads/ubuntu-debian-installations-instructions-nightly/"},"instructions"),")")),(0,i.kt)("h2",{id:"web-frontend"},"Web frontend"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Latest stable release"),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"th",href:"https://github.com/jitsi/jitsi-meet/releases/latest"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/release-latest-green.svg",alt:"release"})))))),(0,i.kt)("p",null,"Prebuilt ",(0,i.kt)("a",{parentName:"p",href:"https://download.jitsi.org/jitsi-meet/src/"},"source builds")," are also available."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Generally, you won't need to download this, as it's part of the Debian packages and Docker images already."))))}u.isMDXComponent=!0}}]);