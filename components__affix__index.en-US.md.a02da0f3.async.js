"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[3154],{470030:function(l,s,n){n.r(s);var m=n(502143),u=n(968521),p=n(720719),x=n(28840),o=n(759907),c=n(828089),h=n(825673),f=n(902068),j=n(574399),v=n(863942),g=n(316073),E=n(24628),b=n(719260),P=n(956140),D=n(127179),a=n(905388),A=n(245583),M=n(606965),T=n(268696),O=n(587302),i=n(424128),U=n(249706),C=n(795127),B=n(116846),I=n(212039),y=n(73024),R=n(553913),r=n(606641),L=n(667294),e=n(785893);function _(){var d=(0,r.eL)(),t=d.texts;return(0,e.jsx)(r.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:t[0].value}),(0,e.jsxs)("h2",{id:"when-to-use",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"When To Use"]}),(0,e.jsx)("p",{children:t[1].value}),(0,e.jsx)("p",{children:t[2].value}),(0,e.jsxs)("h2",{id:"examples",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Examples"]})]}),(0,e.jsx)(a.Z,{items:[{demo:{id:"components-affix-demo-basic"},previewerProps:{title:"Basic",filename:"components/affix/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
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
`,description:"<p>The simplest usage.</p>"}},{demo:{id:"components-affix-demo-on-change"},previewerProps:{title:"Callback",filename:"components/affix/demo/on-change.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Affix, Button } from 'antd';
const App = () => (
  <Affix offsetTop={120} onChange={(affixed) => console.log(affixed)}>
    <Button>120px to affix top</Button>
  </Affix>
);
export default App;
`,description:"<p>Callback with affixed state.</p>"}},{demo:{id:"components-affix-demo-target"},previewerProps:{title:"Container to scroll.",filename:"components/affix/demo/target.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
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
`,description:"<p>Set a <code>target</code> for 'Affix', which is listen to scroll event of target element (default is <code>window</code>).</p>",style:`#components-affix-demo-target .scrollable-container {
  height: 100px;
  overflow-y: scroll;
}
#components-affix-demo-target .background {
  padding-top: 60px;
  height: 300px;
  background-image: url('https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg');
}`}},{demo:{id:"components-affix-demo-debug"},previewerProps:{debug:!0,title:"debug",filename:"components/affix/demo/debug.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useState } from 'react';
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
`,description:"<p>DEBUG</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)(c.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:t[3].value}),(0,e.jsx)("th",{children:t[4].value}),(0,e.jsx)("th",{children:t[5].value}),(0,e.jsx)("th",{children:t[6].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[7].value}),(0,e.jsx)("td",{children:t[8].value}),(0,e.jsx)("td",{children:t[9].value}),(0,e.jsx)("td",{children:t[10].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[11].value}),(0,e.jsx)("td",{children:t[12].value}),(0,e.jsx)("td",{children:t[13].value}),(0,e.jsx)("td",{children:t[14].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[15].value}),(0,e.jsx)("td",{children:t[16].value}),(0,e.jsx)("td",{children:t[17].value}),(0,e.jsx)("td",{children:t[18].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[19].value}),(0,e.jsx)("td",{children:t[20].value}),(0,e.jsx)("td",{children:t[21].value}),(0,e.jsx)("td",{children:t[22].value})]})]})]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("strong",{children:t[23].value}),t[24].value,(0,e.jsx)("code",{children:t[25].value}),t[26].value,(0,e.jsx)("code",{children:t[27].value}),t[28].value,(0,e.jsx)("code",{children:t[29].value}),t[30].value,(0,e.jsx)("code",{children:t[31].value}),t[32].value]}),(0,e.jsx)(o.Z,{lang:"jsx",children:t[33].value}),(0,e.jsxs)("h2",{id:"faq",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"FAQ"]}),(0,e.jsxs)("h3",{id:"when-binding-container-with-target-in-affix-elements-sometimes-move-out-of-the-container",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-binding-container-with-target-in-affix-elements-sometimes-move-out-of-the-container",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"When binding container with ",(0,e.jsx)("code",{children:t[34].value})," in Affix, elements sometimes move out of the container."]}),(0,e.jsxs)("p",{children:[t[35].value,(0,e.jsx)(i.Z,{href:"https://codesandbox.io/s/stupefied-maxwell-ophqnm?file=/index.js",sourceType:"a",children:t[36].value})]}),(0,e.jsxs)("p",{children:[t[37].value,(0,e.jsx)(i.Z,{href:"https://github.com/ant-design/ant-design/issues/3938",sourceType:"a",children:t[38].value}),t[39].value,(0,e.jsx)(i.Z,{href:"https://github.com/ant-design/ant-design/issues/5642",sourceType:"a",children:t[40].value}),t[41].value,(0,e.jsx)(i.Z,{href:"https://github.com/ant-design/ant-design/issues/16120",sourceType:"a",children:t[42].value})]}),(0,e.jsxs)("h3",{id:"when-affix-is-used-in-a-horizontal-scroll-container-the-position-of-the-element-left-is-incorrect",children:[(0,e.jsx)(i.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-affix-is-used-in-a-horizontal-scroll-container-the-position-of-the-element-left-is-incorrect",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"When Affix is \u200B\u200Bused in a horizontal scroll container, the position of the element ",(0,e.jsx)("code",{children:t[43].value})," is incorrect."]}),(0,e.jsxs)("p",{children:[t[44].value,(0,e.jsx)("code",{children:t[45].value}),t[46].value]}),(0,e.jsxs)("p",{children:[t[47].value,(0,e.jsx)(i.Z,{href:"https://github.com/ant-design/ant-design/issues/29108",sourceType:"a",children:t[48].value})]})]})]})})}s.default=_}}]);
