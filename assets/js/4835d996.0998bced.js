"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[133],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),u=a,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||r;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],p={id:"dev-guide-react-sdk",title:"React SDK"},l=void 0,s={unversionedId:"dev-guide/dev-guide-react-sdk",id:"dev-guide/dev-guide-react-sdk",title:"React SDK",description:"The Jitsi Meet React SDK provides the same user experience as the Jitsi Meet app, in a customizable way which you can embed in your apps.",source:"@site/docs/dev-guide/react-sdk.md",sourceDirName:"dev-guide",slug:"/dev-guide/dev-guide-react-sdk",permalink:"/handbook/docs/dev-guide/dev-guide-react-sdk",draft:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/dev-guide/react-sdk.md",tags:[],version:"current",lastUpdatedAt:1691738371,formattedLastUpdatedAt:"Aug 11, 2023",frontMatter:{id:"dev-guide-react-sdk",title:"React SDK"},sidebar:"docs",previous:{title:"lib-jitsi-meet API (low level)",permalink:"/handbook/docs/dev-guide/dev-guide-ljm-api"},next:{title:"Android SDK",permalink:"/handbook/docs/dev-guide/dev-guide-android-sdk"}},d={},m=[{value:"Sample application using the SDK",id:"sample-application-using-the-sdk",level:2},{value:"Installation",id:"installation",level:2},{value:"Modules",id:"modules",level:2},{value:"JitsiMeeting",id:"jitsimeeting",level:3},{value:"Properties specific to the <code>JitsiMeeting</code> component",id:"properties-specific-to-the-jitsimeeting-component",level:4},{value:"JaaSMeeting",id:"jaasmeeting",level:3},{value:"Properties specific to the <code>JaaSMeeting</code> component",id:"properties-specific-to-the-jaasmeeting-component",level:4},{value:"Common properties",id:"common-properties",level:2}],c={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Jitsi Meet React SDK provides the same user experience as the Jitsi Meet app, in a customizable way which you can embed in your apps."),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"React 16 or higher is required.")),(0,r.kt)("h2",{id:"sample-application-using-the-sdk"},"Sample application using the SDK"),(0,r.kt)("p",null,"If you want to see how easy integrating the Jitsi Meet React SDK into a React application is, take a look at our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet-react-sdk/tree/main/example"},"example"),"."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"To access the React SDK modules in your application you need to install it as a dependency:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @jitsi/react-sdk\n")),(0,r.kt)("h2",{id:"modules"},"Modules"),(0,r.kt)("p",null,"The SDK exposes two components with similar properties, intended for different use-cases."),(0,r.kt)("h3",{id:"jitsimeeting"},"JitsiMeeting"),(0,r.kt)("p",null,"To be used with custom domains as-it-is in React projects:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<JitsiMeeting\n    domain = { YOUR_DOMAIN }\n    roomName = \"PleaseUseAGoodRoomName\"\n    configOverwrite = {{\n        startWithAudioMuted: true,\n        disableModeratorIndicator: true,\n        startScreenSharing: true,\n        enableEmailInStats: false\n    }}\n    interfaceConfigOverwrite = {{\n        DISABLE_JOIN_LEAVE_NOTIFICATIONS: true\n    }}\n    userInfo = {{\n        displayName: 'YOUR_USERNAME'\n    }}\n    onApiReady = { (externalApi) => {\n        // here you can attach custom event listeners to the Jitsi Meet External API\n        // you can also store it locally to execute commands\n    } }\n    getIFrameRef = { (iframeRef) => { iframeRef.style.height = '400px'; } }\n/>\n")),(0,r.kt)("h4",{id:"properties-specific-to-the-jitsimeeting-component"},"Properties specific to the ",(0,r.kt)("inlineCode",{parentName:"h4"},"JitsiMeeting")," component"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"domain"),": Optional. Field used to retrieve the external_api.js file that initializes the IFrame. If omitted, defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"meet.jit.si"),".")),(0,r.kt)("h3",{id:"jaasmeeting"},"JaaSMeeting"),(0,r.kt)("p",null,"To be used with the ",(0,r.kt)("inlineCode",{parentName:"p"},"8x8.vc")," domain as-it-is in React projects:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<JaaSMeeting\n    appId = { YOUR_APP_ID }\n    roomName = \"PleaseUseAGoodRoomName\"\n    jwt = { YOUR_VALID_JWT }\n    configOverwrite = {{\n        disableThirdPartyRequests: true,\n        disableLocalVideoFlip: true,\n        backgroundAlpha: 0.5\n    }}\n    interfaceConfigOverwrite = {{\n        VIDEO_LAYOUT_FIT: 'nocrop',\n        MOBILE_APP_PROMO: false,\n        TILE_VIEW_MAX_COLUMNS: 4\n    }}\n    spinner = { SpinnerView }\n    onApiReady = { (externalApi) => { ... } }\n/>\n")),(0,r.kt)("p",null,"...or with the ",(0,r.kt)("inlineCode",{parentName:"p"},"stage.8x8.vc")," domain:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'<JaaSMeeting\n    appId = { YOUR_APP_ID }\n    roomName = "PleaseUseAGoodRoomName"\n    ...\n    useStaging = { true }\n/>\n')),(0,r.kt)("h4",{id:"properties-specific-to-the-jaasmeeting-component"},"Properties specific to the ",(0,r.kt)("inlineCode",{parentName:"h4"},"JaaSMeeting")," component"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"appId"),": Required. Provides an isolated context and prefixes the room name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useStaging"),": Optional. Tells whether to use the staging environment or not.")),(0,r.kt)("h2",{id:"common-properties"},"Common properties"),(0,r.kt)("p",null,"The component modules support a similar kind of customization to the Jitsi Meet IFrame. The following properties can be passed down to your instances of ",(0,r.kt)("inlineCode",{parentName:"p"},"JitsiMeeting")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"JaaSMeeting"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"roomName"),": Required. The name of the room to join.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"configOverwrite"),": Optional. The JS object with overrides for options defined in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet/blob/master/config.js"},"config.js")," file.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"interfaceConfigOverwrite"),": Optional. The JS object with overrides for options defined in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jitsi/jitsi-meet/blob/master/interface_config.js"},"interface_config.js")," file.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"jwt"),": Optional. The ",(0,r.kt)("a",{parentName:"p",href:"https://jwt.io/"},"JWT")," token.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"invitees"),": Optional. Object arrays that contain information about participants invited to a call.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"devices"),": Optional. Information map about the devices used in a call.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"userInfo"),": Optional. The JS object that contains information about the participant starting the meeting (e.g., email).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"release"),": Optional. Information regarding the ",(0,r.kt)("inlineCode",{parentName:"p"},"stage.8x8.vc")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"8x8.vc")," release version. Expects the following format: ",(0,r.kt)("inlineCode",{parentName:"p"},"release-1234"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"spinner"),": Optional. The custom spinner to be displayed while the IFrame is loading.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"onApiReady"),": Optional. The external API reference for events and commands.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"onReadyToClose"),": Optional. The callback for when the meeting is ready to be closed.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"getIFrameRef"),": Optional. The parent node used by the IFrame."))))}u.isMDXComponent=!0}}]);