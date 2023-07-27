"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8706],{414510:function(_,i,n){n.r(i);var u=n(502143),p=n(968521),m=n(720719),x=n(28840),j=n(759907),s=n(828089),h=n(825673),v=n(902068),C=n(574399),g=n(863942),f=n(316073),E=n(24628),b=n(719260),D=n(956140),o=n(127179),d=n(905388),P=n(245583),U=n(606965),O=n(268696),A=n(587302),r=n(424128),M=n(249706),R=n(795127),T=n(116846),w=n(212039),y=n(73024),I=n(553913),c=n(606641),L=n(667294),e=n(785893);function l(){var a=(0,c.eL)(),t=a.texts;return(0,e.jsx)(c.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:t[0].value}),(0,e.jsxs)("h2",{id:"when-to-use",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"When To Use"]}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:t[1].value}),(0,e.jsx)("li",{children:t[2].value})]}),(0,e.jsxs)("h2",{id:"examples",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Examples"]})]}),(0,e.jsx)(d.Z,{items:[{demo:{id:"components-statistic-demo-basic"},previewerProps:{title:"Basic",filename:"components/statistic/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, Col, Row, Statistic } from 'antd';
const App = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Active Users" value={112893} />
    </Col>
    <Col span={12}>
      <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
      <Button
        style={{
          marginTop: 16,
        }}
        type="primary"
      >
        Recharge
      </Button>
    </Col>
    <Col span={12}>
      <Statistic title="Active Users" value={112893} loading />
    </Col>
  </Row>
);
export default App;
`,description:"<p>Simplest Usage.</p>"}},{demo:{id:"components-statistic-demo-unit"},previewerProps:{title:"Unit",filename:"components/statistic/demo/unit.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { LikeOutlined } from '@ant-design/icons';
import { Col, Row, Statistic } from 'antd';
const App = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
    </Col>
    <Col span={12}>
      <Statistic title="Unmerged" value={93} suffix="/ 100" />
    </Col>
  </Row>
);
export default App;
`,description:"<p>Add unit through <code>prefix</code> and <code>suffix</code>.</p>"}},{demo:{id:"components-statistic-demo-animated"},previewerProps:{title:"Animated number",filename:"components/statistic/demo/animated.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Col, Row, Statistic } from 'antd';
import React from 'react';
import CountUp from 'react-countup';
const formatter = (value) => <CountUp end={value} separator="," />;
const App = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Active Users" value={112893} formatter={formatter} />
    </Col>
    <Col span={12}>
      <Statistic title="Account Balance (CNY)" value={112893} precision={2} formatter={formatter} />
    </Col>
  </Row>
);
export default App;
`,description:'<p>Animated number with <a href="https://www.npmjs.com/package/react-countup">react-countup</a>.</p>'}},{demo:{id:"components-statistic-demo-card"},previewerProps:{background:"grey",title:"In Card",filename:"components/statistic/demo/card.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
const App = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Active"
          value={11.28}
          precision={2}
          valueStyle={{
            color: '#3f8600',
          }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Idle"
          value={9.3}
          precision={2}
          valueStyle={{
            color: '#cf1322',
          }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
  </Row>
);
export default App;
`,description:"<p>Display statistic data in Card.</p>"}},{demo:{id:"components-statistic-demo-countdown"},previewerProps:{title:"Countdown",filename:"components/statistic/demo/countdown.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Col, Row, Statistic } from 'antd';
import React from 'react';
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK

const onFinish = () => {
  console.log('finished!');
};
const onChange = (val) => {
  if (typeof val === 'number' && 4.95 * 1000 < val && val < 5 * 1000) {
    console.log('changed!');
  }
};
const App = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
    </Col>
    <Col span={12}>
      <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
    </Col>
    <Col
      span={24}
      style={{
        marginTop: 32,
      }}
    >
      <Countdown title="Day Level" value={deadline} format="D \u5929 H \u65F6 m \u5206 s \u79D2" />
    </Col>
    <Col span={12}>
      <Countdown title="Countdown" value={Date.now() + 10 * 1000} onChange={onChange} />
    </Col>
  </Row>
);
export default App;
`,description:"<p>Countdown component.</p>"}},{demo:{id:"components-statistic-demo-component-token"},previewerProps:{debug:!0,title:"Component Token",filename:"components/statistic/demo/component-token.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Button, Col, ConfigProvider, Row, Statistic } from 'antd';
const App = () => (
  <ConfigProvider
    theme={{
      components: {
        Statistic: {
          titleFontSize: 20,
          contentFontSize: 20,
        },
      },
    }}
  >
    <Row gutter={16}>
      <Col span={12}>
        <Statistic title="Active Users" value={112893} />
      </Col>
      <Col span={12}>
        <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
        <Button
          style={{
            marginTop: 16,
          }}
          type="primary"
        >
          Recharge
        </Button>
      </Col>
      <Col span={12}>
        <Statistic title="Active Users" value={112893} loading />
      </Col>
    </Row>
  </ConfigProvider>
);
export default App;
`,description:"<p>Component Token Debug.</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)("h4",{id:"statistic",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#statistic",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Statistic"]}),(0,e.jsxs)(s.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:t[3].value}),(0,e.jsx)("th",{children:t[4].value}),(0,e.jsx)("th",{children:t[5].value}),(0,e.jsx)("th",{children:t[6].value}),(0,e.jsx)("th",{children:t[7].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[8].value}),(0,e.jsx)("td",{children:t[9].value}),(0,e.jsx)("td",{children:t[10].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:t[11].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[12].value}),(0,e.jsx)("td",{children:t[13].value}),(0,e.jsx)("td",{children:t[14].value}),(0,e.jsx)("td",{children:t[15].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[16].value}),(0,e.jsx)("td",{children:t[17].value}),(0,e.jsx)("td",{children:t[18].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:t[19].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[20].value}),(0,e.jsx)("td",{children:t[21].value}),(0,e.jsx)("td",{children:t[22].value}),(0,e.jsx)("td",{children:t[23].value}),(0,e.jsx)("td",{children:t[24].value})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[25].value}),(0,e.jsx)("td",{children:t[26].value}),(0,e.jsx)("td",{children:t[27].value}),(0,e.jsx)("td",{children:t[28].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[29].value}),(0,e.jsx)("td",{children:t[30].value}),(0,e.jsx)("td",{children:t[31].value}),(0,e.jsx)("td",{children:t[32].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[33].value}),(0,e.jsx)("td",{children:t[34].value}),(0,e.jsx)("td",{children:t[35].value}),(0,e.jsx)("td",{children:t[36].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[37].value}),(0,e.jsx)("td",{children:t[38].value}),(0,e.jsx)("td",{children:t[39].value}),(0,e.jsx)("td",{children:t[40].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[41].value}),(0,e.jsx)("td",{children:t[42].value}),(0,e.jsx)("td",{children:t[43].value}),(0,e.jsx)("td",{children:t[44].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[45].value}),(0,e.jsx)("td",{children:t[46].value}),(0,e.jsx)("td",{children:t[47].value}),(0,e.jsx)("td",{children:t[48].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h4",{id:"statisticcountdown",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#statisticcountdown",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Statistic.Countdown"]}),(0,e.jsxs)(s.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:t[49].value}),(0,e.jsx)("th",{children:t[50].value}),(0,e.jsx)("th",{children:t[51].value}),(0,e.jsx)("th",{children:t[52].value}),(0,e.jsx)("th",{children:t[53].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[54].value}),(0,e.jsxs)("td",{children:[t[55].value,(0,e.jsx)(r.Z,{href:"https://day.js.org/",sourceType:"a",children:t[56].value})]}),(0,e.jsx)("td",{children:t[57].value}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:t[58].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[59].value}),(0,e.jsx)("td",{children:t[60].value}),(0,e.jsx)("td",{children:t[61].value}),(0,e.jsx)("td",{children:t[62].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[63].value}),(0,e.jsx)("td",{children:t[64].value}),(0,e.jsx)("td",{children:t[65].value}),(0,e.jsx)("td",{children:t[66].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[67].value}),(0,e.jsx)("td",{children:t[68].value}),(0,e.jsx)("td",{children:t[69].value}),(0,e.jsx)("td",{children:t[70].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[71].value}),(0,e.jsx)("td",{children:t[72].value}),(0,e.jsx)("td",{children:t[73].value}),(0,e.jsx)("td",{children:t[74].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[75].value}),(0,e.jsx)("td",{children:t[76].value}),(0,e.jsx)("td",{children:t[77].value}),(0,e.jsx)("td",{children:t[78].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[79].value}),(0,e.jsx)("td",{children:t[80].value}),(0,e.jsx)("td",{children:t[81].value}),(0,e.jsx)("td",{children:t[82].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[83].value}),(0,e.jsx)("td",{children:t[84].value}),(0,e.jsx)("td",{children:t[85].value}),(0,e.jsx)("td",{children:t[86].value}),(0,e.jsx)("td",{children:t[87].value})]})]})]}),(0,e.jsxs)("h2",{id:"design-token",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Design Token"]})]}),(0,e.jsx)(o.Z,{component:"Statistic"})]})})}i.default=l}}]);
