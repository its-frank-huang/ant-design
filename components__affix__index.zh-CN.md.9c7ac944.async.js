"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8273],{703165:function(l,i,n){n.r(i);var u=n(502143),p=n(968521),m=n(720719),x=n(28840),c=n(759907),o=n(828089),h=n(825673),j=n(902068),f=n(574399),v=n(863942),E=n(316073),g=n(24628),D=n(719260),A=n(956140),P=n(127179),_=n(905388),b=n(245583),B=n(606965),M=n(268696),O=n(587302),r=n(424128),T=n(249706),U=n(795127),C=n(116846),I=n(212039),y=n(73024),R=n(553913),s=n(606641),L=n(667294),e=n(785893);function d(){var a=(0,s.eL)(),t=a.texts;return(0,e.jsx)(s.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:t[0].value}),(0,e.jsxs)("h2",{id:"\u4F55\u65F6\u4F7F\u7528",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4F55\u65F6\u4F7F\u7528"]}),(0,e.jsx)("p",{children:t[1].value}),(0,e.jsx)("p",{children:t[2].value}),(0,e.jsxs)("h2",{id:"\u4EE3\u7801\u6F14\u793A",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4EE3\u7801\u6F14\u793A"]})]}),(0,e.jsx)(_.Z,{items:[{demo:{id:"components-affix-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/affix/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Affix, Button } from 'antd';
const App = () => {
  const [top, setTop] = useState(10);
  const [bottom, setBottom] = useState(10);
  return (
    <>
      <Affix offsetTop={top}>
        <Button type="primary" onClick={() => setTop(top + 10)}>
          Affix top
        </Button>
      </Affix>
      <br />
      <Affix offsetBottom={bottom}>
        <Button type="primary" onClick={() => setBottom(bottom + 10)}>
          Affix bottom
        </Button>
      </Affix>
    </>
  );
};
export default App;
`,description:"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>"}},{demo:{id:"components-affix-demo-on-change"},previewerProps:{title:"\u56FA\u5B9A\u72B6\u6001\u6539\u53D8\u7684\u56DE\u8C03",filename:"components/affix/demo/on-change.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Affix, Button } from 'antd';
const App = () => (
  <Affix offsetTop={120} onChange={(affixed) => console.log(affixed)}>
    <Button>120px to affix top</Button>
  </Affix>
);
export default App;
`,description:"<p>\u53EF\u4EE5\u83B7\u5F97\u662F\u5426\u56FA\u5B9A\u7684\u72B6\u6001\u3002</p>"}},{demo:{id:"components-affix-demo-target"},previewerProps:{title:"\u6EDA\u52A8\u5BB9\u5668",filename:"components/affix/demo/target.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Affix, Button } from 'antd';
const App = () => {
  const [container, setContainer] = useState(null);
  return (
    <div className="scrollable-container" ref={setContainer}>
      <div className="background">
        <Affix target={() => container}>
          <Button type="primary">Fixed at the top of container</Button>
        </Affix>
      </div>
    </div>
  );
};
export default App;
`,description:"<p>\u7528 <code>target</code> \u8BBE\u7F6E <code>Affix</code> \u9700\u8981\u76D1\u542C\u5176\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5143\u7D20\uFF0C\u9ED8\u8BA4\u4E3A <code>window</code>\u3002</p>",style:`#components-affix-demo-target .scrollable-container {
  height: 100px;
  overflow-y: scroll;
}
#components-affix-demo-target .background {
  padding-top: 60px;
  height: 300px;
  background-image: url('https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg');
}`}},{demo:{id:"components-affix-demo-debug"},previewerProps:{debug:!0,title:"\u8C03\u6574\u6D4F\u89C8\u5668\u5927\u5C0F\uFF0C\u89C2\u5BDF Affix \u5BB9\u5668\u662F\u5426\u53D1\u751F\u53D8\u5316\u3002\u8DDF\u968F\u53D8\u5316\u4E3A\u6B63\u5E38\u3002#17678",filename:"components/affix/demo/debug.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
import { Affix, Button } from 'antd';
const App = () => {
  const [top, setTop] = useState(10);
  return (
    <div
      style={{
        height: 10000,
      }}
    >
      <div>Top</div>
      <Affix offsetTop={top}>
        <div
          style={{
            background: 'red',
          }}
        >
          <Button type="primary" onClick={() => setTop(top + 10)}>
            Affix top
          </Button>
        </div>
      </Affix>
      <div>Bottom</div>
    </div>
  );
};
export default App;
`,description:"<p>DEBUG</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)(o.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:t[3].value}),(0,e.jsx)("th",{children:t[4].value}),(0,e.jsx)("th",{children:t[5].value}),(0,e.jsx)("th",{children:t[6].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[7].value}),(0,e.jsx)("td",{children:t[8].value}),(0,e.jsx)("td",{children:t[9].value}),(0,e.jsx)("td",{children:t[10].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[11].value}),(0,e.jsx)("td",{children:t[12].value}),(0,e.jsx)("td",{children:t[13].value}),(0,e.jsx)("td",{children:t[14].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[15].value}),(0,e.jsxs)("td",{children:[t[16].value,(0,e.jsx)("code",{children:t[17].value}),t[18].value]}),(0,e.jsx)("td",{children:t[19].value}),(0,e.jsx)("td",{children:t[20].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[21].value}),(0,e.jsx)("td",{children:t[22].value}),(0,e.jsx)("td",{children:t[23].value}),(0,e.jsx)("td",{children:t[24].value})]})]})]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("strong",{children:t[25].value}),(0,e.jsx)("code",{children:t[26].value}),t[27].value,(0,e.jsx)("code",{children:t[28].value}),t[29].value]}),(0,e.jsx)(c.Z,{lang:"jsx",children:t[30].value}),(0,e.jsxs)("h2",{id:"faq",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"FAQ"]}),(0,e.jsxs)("h3",{id:"affix-\u4F7F\u7528-target-\u7ED1\u5B9A\u5BB9\u5668\u65F6\u5143\u7D20\u4F1A\u8DD1\u5230\u5BB9\u5668\u5916",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#affix-\u4F7F\u7528-target-\u7ED1\u5B9A\u5BB9\u5668\u65F6\u5143\u7D20\u4F1A\u8DD1\u5230\u5BB9\u5668\u5916",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Affix \u4F7F\u7528 ",(0,e.jsx)("code",{children:t[31].value})," \u7ED1\u5B9A\u5BB9\u5668\u65F6\uFF0C\u5143\u7D20\u4F1A\u8DD1\u5230\u5BB9\u5668\u5916\u3002"]}),(0,e.jsxs)("p",{children:[t[32].value,(0,e.jsx)(r.Z,{href:"https://codesandbox.io/s/stupefied-maxwell-ophqnm?file=/index.js",sourceType:"a",children:t[33].value})]}),(0,e.jsxs)("p",{children:[t[34].value,(0,e.jsx)(r.Z,{href:"https://github.com/ant-design/ant-design/issues/3938",sourceType:"a",children:t[35].value}),t[36].value,(0,e.jsx)(r.Z,{href:"https://github.com/ant-design/ant-design/issues/5642",sourceType:"a",children:t[37].value}),t[38].value,(0,e.jsx)(r.Z,{href:"https://github.com/ant-design/ant-design/issues/16120",sourceType:"a",children:t[39].value})]}),(0,e.jsxs)("h3",{id:"affix-\u5728\u6C34\u5E73\u6EDA\u52A8\u5BB9\u5668\u4E2D\u4F7F\u7528\u65F6-\u5143\u7D20-left-\u4F4D\u7F6E\u4E0D\u6B63\u786E",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#affix-\u5728\u6C34\u5E73\u6EDA\u52A8\u5BB9\u5668\u4E2D\u4F7F\u7528\u65F6-\u5143\u7D20-left-\u4F4D\u7F6E\u4E0D\u6B63\u786E",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Affix \u5728\u6C34\u5E73\u6EDA\u52A8\u5BB9\u5668\u4E2D\u4F7F\u7528\u65F6\uFF0C \u5143\u7D20 ",(0,e.jsx)("code",{children:t[40].value})," \u4F4D\u7F6E\u4E0D\u6B63\u786E\u3002"]}),(0,e.jsxs)("p",{children:[t[41].value,(0,e.jsx)("code",{children:t[42].value}),t[43].value]}),(0,e.jsxs)("p",{children:[t[44].value,(0,e.jsx)(r.Z,{href:"https://github.com/ant-design/ant-design/issues/29108",sourceType:"a",children:t[45].value})]})]})]})})}i.default=d}}]);
