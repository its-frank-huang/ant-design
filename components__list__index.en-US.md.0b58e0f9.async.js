"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8059],{438966:function(p,s,n){n.r(s);var m=n(502143),u=n(968521),h=n(720719),x=n(28840),_=n(759907),i=n(828089),v=n(825673),j=n(902068),g=n(574399),f=n(863942),b=n(316073),L=n(24628),D=n(719260),y=n(956140),c=n(127179),o=n(905388),I=n(245583),T=n(606965),E=n(268696),A=n(587302),r=n(424128),k=n(249706),P=n(795127),M=n(116846),C=n(212039),S=n(73024),O=n(553913),a=n(606641),U=n(667294),e=n(785893);function d(){var l=(0,a.eL)(),t=l.texts;return(0,e.jsx)(a.dY,{children:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsx)("p",{children:t[0].value}),(0,e.jsxs)("h2",{id:"when-to-use",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"When To Use"]}),(0,e.jsx)("p",{children:t[1].value}),(0,e.jsxs)("h2",{id:"examples",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Examples"]})]}),(0,e.jsx)(o.Z,{items:[{demo:{id:"components-list-demo-simple"},previewerProps:{title:"Simple list",filename:"components/list/demo/simple.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Divider, List, Typography } from 'antd';
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];
const App = () => (
  <>
    <Divider orientation="left">Default Size</Divider>
    <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text mark>[ITEM]</Typography.Text> {item}
        </List.Item>
      )}
    />
    <Divider orientation="left">Small Size</Divider>
    <List
      size="small"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
    <Divider orientation="left">Large Size</Divider>
    <List
      size="large"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  </>
);
export default App;
`,description:`<p>Ant Design supports a default list size as well as a large and small size.</p>
<p>If a large or small list is desired, set the size property to either large or small respectively. Omit the size property for a list with the default size.</p>
<p>Customizing the header and footer of list by setting <code>header</code> and <code>footer</code> property.</p>`}},{demo:{id:"components-list-demo-basic"},previewerProps:{title:"Basic list",filename:"components/list/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Avatar, List } from 'antd';
import React from 'react';
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
const App = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={\`https://xsgames.co/randomusers/avatar.php?g=pixel&key=\${index}\`} />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
);
export default App;
`,description:"<p>Basic list.</p>"}},{demo:{id:"components-list-demo-loadmore"},previewerProps:{title:"Load more",filename:"components/list/demo/loadmore.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton } from 'antd';
const count = 3;
const fakeDataUrl = \`https://randomuser.me/api/?results=\${count}&inc=name,gender,email,nat,picture&noinfo\`;
const App = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);
  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        })),
      ),
    );
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results);
        setData(newData);
        setList(newData);
        setLoading(false);
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event('resize'));
      });
  };
  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;
  return (
    <List
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={<Avatar src={item.picture.large} />}
              title={<a href="https://ant.design">{item.name?.last}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <div>content</div>
          </Skeleton>
        </List.Item>
      )}
    />
  );
};
export default App;
`,description:"<p>Load more list with <code>loadMore</code> property.</p>",style:`.demo-loadmore-list {
  min-height: 350px;
}`}},{demo:{id:"components-list-demo-vertical"},previewerProps:{title:"Vertical",filename:"components/list/demo/vertical.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';
import React from 'react';
const data = Array.from({
  length: 23,
}).map((_, i) => ({
  href: 'https://ant.design',
  title: \`ant design part \${i}\`,
  avatar: \`https://xsgames.co/randomusers/avatar.php?g=pixel&key=\${i}\`,
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const App = () => (
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={data}
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={(item) => (
      <List.Item
        key={item.title}
        actions={[
          <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
          <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
          <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
);
export default App;
`,description:"<p>Set the <code>itemLayout</code> property to <code>vertical</code> to create a vertical list.</p>"}},{demo:{id:"components-list-demo-pagination"},previewerProps:{title:"Pagination Settings",filename:"components/list/demo/pagination.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Avatar, List, Radio, Space } from 'antd';
import React, { useState } from 'react';
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
const positionOptions = ['top', 'bottom', 'both'];
const alignOptions = ['start', 'center', 'end'];
const App = () => {
  const [position, setPosition] = useState('bottom');
  const [align, setAlign] = useState('center');
  return (
    <>
      <Space
        direction="vertical"
        style={{
          marginBottom: '20px',
        }}
        size="middle"
      >
        <Space>
          <span>Pagination Position:</span>
          <Radio.Group
            optionType="button"
            value={position}
            onChange={(e) => {
              setPosition(e.target.value);
            }}
          >
            {positionOptions.map((item) => (
              <Radio.Button key={item} value={item}>
                {item}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Space>
        <Space>
          <span>Pagination Align:</span>
          <Radio.Group
            optionType="button"
            value={align}
            onChange={(e) => {
              setAlign(e.target.value);
            }}
          >
            {alignOptions.map((item) => (
              <Radio.Button key={item} value={item}>
                {item}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Space>
      </Space>
      <List
        pagination={{
          position,
          align,
        }}
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src={\`https://xsgames.co/randomusers/avatar.php?g=pixel&key=\${index}\`} />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </>
  );
};
export default App;
`,description:"<p>List pagination can be used and set through the <code>pagination</code> property.</p>"}},{demo:{id:"components-list-demo-grid"},previewerProps:{title:"Grid",filename:"components/list/demo/grid.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Card, List } from 'antd';
const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];
const App = () => (
  <List
    grid={{
      gutter: 16,
      column: 4,
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <Card title={item.title}>Card content</Card>
      </List.Item>
    )}
  />
);
export default App;
`,description:"<p>Create a grid layout by setting the <code>grid</code> property of List.</p>"}},{demo:{id:"components-list-demo-grid-test"},previewerProps:{debug:!0,title:"Test Grid",filename:"components/list/demo/grid-test.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Card, List } from 'antd';
const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];
const ListItem = () => (
  <List.Item>
    <Card title="title">Card content</Card>
  </List.Item>
);
const App = () => (
  <>
    <List
      grid={{
        gutter: 16,
        column: 4,
      }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Card title={item.title}>Card content</Card>
        </List.Item>
      )}
    />
    <List
      grid={{
        gutter: 16,
        column: 4,
      }}
      dataSource={data}
      renderItem={() => <ListItem />}
    />
    <List
      grid={{
        gutter: 16,
        column: 4,
      }}
      dataSource={data}
      renderItem={() => (
        <>
          <ListItem />
          <div />
        </>
      )}
    />
  </>
);
export default App;
`,description:"<p>Test List <code>grid</code> for some edge cases.</p>"}},{demo:{id:"components-list-demo-responsive"},previewerProps:{title:"Responsive grid list",filename:"components/list/demo/responsive.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React from 'react';
import { Card, List } from 'antd';
const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];
const App = () => (
  <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3,
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <Card title={item.title}>Card content</Card>
      </List.Item>
    )}
  />
);
export default App;
`,description:'<p>Responsive grid list. The size property the is as same as <a href="/components/grid/#col">Layout Grid</a>.</p>'}},{demo:{id:"components-list-demo-infinite-load"},previewerProps:{title:"Scrolling loaded",filename:"components/list/demo/infinite-load.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useEffect, useState } from 'react';
import { Avatar, Divider, List, Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    loadMoreData();
  }, []);
  return (
    <div
      id="scrollableDiv"
      style={{
        height: 400,
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        loader={
          <Skeleton
            avatar
            paragraph={{
              rows: 1,
            }}
            active
          />
        }
        endMessage={<Divider plain>It is all, nothing more \u{1F910}</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.email}>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name.last}</a>}
                description={item.email}
              />
              <div>Content</div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};
export default App;
`,description:'<p>The example of infinite load with <a href="https://github.com/ankeetmaini/react-infinite-scroll-component">react-infinite-scroll-component</a>.</p>'}},{demo:{id:"components-list-demo-virtual-list"},previewerProps:{title:"virtual list",filename:"components/list/demo/virtual-list.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import React, { useEffect, useState } from 'react';
import { Avatar, List, message } from 'antd';
import VirtualList from 'rc-virtual-list';
const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = 400;
const App = () => {
  const [data, setData] = useState([]);
  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results));
        message.success(\`\${body.results.length} more items loaded!\`);
      });
  };
  useEffect(() => {
    appendData();
  }, []);
  const onScroll = (e) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
      appendData();
    }
  };
  return (
    <List>
      <VirtualList
        data={data}
        height={ContainerHeight}
        itemHeight={47}
        itemKey="email"
        onScroll={onScroll}
      >
        {(item) => (
          <List.Item key={item.email}>
            <List.Item.Meta
              avatar={<Avatar src={item.picture.large} />}
              title={<a href="https://ant.design">{item.name.last}</a>}
              description={item.email}
            />
            <div>Content</div>
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};
export default App;
`,description:'<p>An example of infinite &#x26; virtualized list via using <a href="https://github.com/react-component/virtual-list">rc-virtual-list</a>.</p>'}},{demo:{id:"components-list-demo-component-token"},previewerProps:{debug:!0,title:"custom component token",filename:"components/list/demo/component-token.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.16.0","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.4.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.1","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.1.0","rc-collapse":"~3.7.0","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.34.0","rc-image":"~7.0.0","rc-input":"~1.1.0","rc-input-number":"~8.0.2","rc-mentions":"~2.5.0","rc-menu":"~9.10.0","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.5.0","rc-picker":"~3.10.0","rc-progress":"~3.4.1","rc-rate":"~2.12.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.1","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.9.0","rc-textarea":"~1.3.3","rc-tooltip":"~6.0.0","rc-tree":"~5.7.6","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Avatar, ConfigProvider, Divider, List, Typography } from 'antd';
import React from 'react';
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];
const data1 = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
const App = () => (
  <ConfigProvider
    theme={{
      components: {
        List: {
          headerBg: 'pink',
          footerBg: 'pink',
          emptyTextPadding: 32,
          itemPadding: '26px',
          itemPaddingSM: '16px',
          itemPaddingLG: '36px',
          metaMarginBottom: 20,
          avatarMarginRight: 20,
          titleMarginBottom: 10,
          descriptionFontSize: 20,
        },
      },
    }}
  >
    <Divider orientation="left">Default Size</Divider>
    <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text mark>[ITEM]</Typography.Text> {item}
        </List.Item>
      )}
    />
    <Divider orientation="left">Small Size</Divider>
    <List
      size="small"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
    <Divider orientation="left">Large Size</Divider>
    <List
      size="large"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
    <Divider orientation="left">Meta</Divider>
    <List
      itemLayout="horizontal"
      dataSource={data1}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar src={\`https://xsgames.co/randomusers/avatar.php?g=pixel&key=\${index}\`} />
            }
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
    />
    <Divider orientation="left">Vertical</Divider>
    <List
      itemLayout="vertical"
      dataSource={data1}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar src={\`https://xsgames.co/randomusers/avatar.php?g=pixel&key=\${index}\`} />
            }
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
    />
    <Divider orientation="left">Empty Text</Divider>
    <List />
  </ConfigProvider>
);
export default App;
`,description:"<p>Custom component token.</p>"}}]}),(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"api",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"API"]}),(0,e.jsxs)("h3",{id:"list",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#list",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"List"]}),(0,e.jsxs)(i.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:t[2].value}),(0,e.jsx)("th",{children:t[3].value}),(0,e.jsx)("th",{children:t[4].value}),(0,e.jsx)("th",{children:t[5].value}),(0,e.jsx)("th",{children:t[6].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[7].value}),(0,e.jsx)("td",{children:t[8].value}),(0,e.jsx)("td",{children:t[9].value}),(0,e.jsx)("td",{children:t[10].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[11].value}),(0,e.jsx)("td",{children:t[12].value}),(0,e.jsx)("td",{children:t[13].value}),(0,e.jsx)("td",{children:t[14].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[15].value}),(0,e.jsx)("td",{children:t[16].value}),(0,e.jsx)("td",{children:t[17].value}),(0,e.jsx)("td",{children:t[18].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[19].value}),(0,e.jsx)("td",{children:t[20].value}),(0,e.jsx)("td",{children:(0,e.jsx)(r.Z,{to:"#list-grid-props",sourceType:"Link",children:t[21].value})}),(0,e.jsx)("td",{children:t[22].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[23].value}),(0,e.jsx)("td",{children:t[24].value}),(0,e.jsx)("td",{children:t[25].value}),(0,e.jsx)("td",{children:t[26].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[27].value}),(0,e.jsx)("td",{children:t[28].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:t[29].value}),t[30].value,(0,e.jsx)("code",{children:t[31].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:t[32].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[33].value}),(0,e.jsx)("td",{children:t[34].value}),(0,e.jsxs)("td",{children:[t[35].value,(0,e.jsx)(r.Z,{to:"/components/spin/#api",sourceType:"Link",children:t[36].value}),t[37].value,(0,e.jsx)(r.Z,{href:"https://github.com/ant-design/ant-design/issues/8659",sourceType:"a",children:t[38].value}),t[39].value]}),(0,e.jsx)("td",{children:t[40].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[41].value}),(0,e.jsx)("td",{children:t[42].value}),(0,e.jsx)("td",{children:t[43].value}),(0,e.jsx)("td",{children:t[44].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[45].value}),(0,e.jsx)("td",{children:t[46].value}),(0,e.jsx)("td",{children:t[47].value}),(0,e.jsxs)("td",{children:[t[48].value,(0,e.jsx)("code",{children:t[49].value}),t[50].value]}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[51].value}),(0,e.jsxs)("td",{children:[t[52].value,(0,e.jsx)(r.Z,{to:"/components/pagination/",sourceType:"Link",children:t[53].value}),t[54].value]}),(0,e.jsx)("td",{children:t[55].value}),(0,e.jsx)("td",{children:t[56].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[57].value}),(0,e.jsxs)("td",{children:[t[58].value,(0,e.jsx)("code",{children:t[59].value})]}),(0,e.jsx)("td",{children:t[60].value}),(0,e.jsx)("td",{children:t[61].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[62].value}),(0,e.jsxs)("td",{children:[t[63].value,(0,e.jsx)("code",{children:t[64].value}),t[65].value,(0,e.jsx)("code",{children:t[66].value})]}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:t[67].value}),t[68].value,(0,e.jsx)("code",{children:t[69].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:t[70].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[71].value}),(0,e.jsx)("td",{children:t[72].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:t[73].value}),t[74].value,(0,e.jsx)("code",{children:t[75].value}),t[76].value,(0,e.jsx)("code",{children:t[77].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:t[78].value})}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[79].value}),(0,e.jsx)("td",{children:t[80].value}),(0,e.jsx)("td",{children:t[81].value}),(0,e.jsx)("td",{children:t[82].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"pagination",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#pagination",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"pagination"]}),(0,e.jsx)("p",{children:t[83].value}),(0,e.jsxs)(i.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:t[84].value}),(0,e.jsx)("th",{children:t[85].value}),(0,e.jsx)("th",{children:t[86].value}),(0,e.jsx)("th",{children:t[87].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[88].value}),(0,e.jsxs)("td",{children:[t[89].value,(0,e.jsx)("code",{children:t[90].value})]}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:t[91].value}),t[92].value,(0,e.jsx)("code",{children:t[93].value}),t[94].value,(0,e.jsx)("code",{children:t[95].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:t[96].value})})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[97].value}),(0,e.jsxs)("td",{children:[t[98].value,(0,e.jsx)("code",{children:t[99].value})]}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:t[100].value}),t[101].value,(0,e.jsx)("code",{children:t[102].value}),t[103].value,(0,e.jsx)("code",{children:t[104].value})]}),(0,e.jsx)("td",{children:(0,e.jsx)("code",{children:t[105].value})})]})]})]}),(0,e.jsxs)("p",{children:[t[106].value,(0,e.jsx)(r.Z,{to:"/components/pagination/",sourceType:"Link",children:(0,e.jsx)("code",{children:t[107].value})}),t[108].value]}),(0,e.jsxs)("h3",{id:"list-grid-props",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#list-grid-props",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"List grid props"]}),(0,e.jsxs)(i.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:t[109].value}),(0,e.jsx)("th",{children:t[110].value}),(0,e.jsx)("th",{children:t[111].value}),(0,e.jsx)("th",{children:t[112].value}),(0,e.jsx)("th",{children:t[113].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[114].value}),(0,e.jsx)("td",{children:t[115].value}),(0,e.jsx)("td",{children:t[116].value}),(0,e.jsx)("td",{children:t[117].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[118].value}),(0,e.jsx)("td",{children:t[119].value}),(0,e.jsx)("td",{children:t[120].value}),(0,e.jsx)("td",{children:t[121].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[122].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:t[123].value}),t[124].value]}),(0,e.jsx)("td",{children:t[125].value}),(0,e.jsx)("td",{children:t[126].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[127].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:t[128].value}),t[129].value]}),(0,e.jsx)("td",{children:t[130].value}),(0,e.jsx)("td",{children:t[131].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[132].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:t[133].value}),t[134].value]}),(0,e.jsx)("td",{children:t[135].value}),(0,e.jsx)("td",{children:t[136].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[137].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:t[138].value}),t[139].value]}),(0,e.jsx)("td",{children:t[140].value}),(0,e.jsx)("td",{children:t[141].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[142].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:t[143].value}),t[144].value]}),(0,e.jsx)("td",{children:t[145].value}),(0,e.jsx)("td",{children:t[146].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[147].value}),(0,e.jsxs)("td",{children:[(0,e.jsx)("code",{children:t[148].value}),t[149].value]}),(0,e.jsx)("td",{children:t[150].value}),(0,e.jsx)("td",{children:t[151].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"listitem",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#listitem",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"List.Item"]}),(0,e.jsxs)(i.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:t[152].value}),(0,e.jsx)("th",{children:t[153].value}),(0,e.jsx)("th",{children:t[154].value}),(0,e.jsx)("th",{children:t[155].value}),(0,e.jsx)("th",{children:t[156].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[157].value}),(0,e.jsxs)("td",{children:[t[158].value,(0,e.jsx)("code",{children:t[159].value}),t[160].value,(0,e.jsx)("code",{children:t[161].value}),t[162].value]}),(0,e.jsx)("td",{children:t[163].value}),(0,e.jsx)("td",{children:t[164].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[165].value}),(0,e.jsxs)("td",{children:[t[166].value,(0,e.jsx)("code",{children:t[167].value}),t[168].value,(0,e.jsx)("code",{children:t[169].value}),t[170].value]}),(0,e.jsx)("td",{children:t[171].value}),(0,e.jsx)("td",{children:t[172].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h3",{id:"listitemmeta",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#listitemmeta",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"List.Item.Meta"]}),(0,e.jsxs)(i.Z,{className:"component-api-table",children:[(0,e.jsx)("thead",{children:(0,e.jsxs)("tr",{children:[(0,e.jsx)("th",{children:t[173].value}),(0,e.jsx)("th",{children:t[174].value}),(0,e.jsx)("th",{children:t[175].value}),(0,e.jsx)("th",{children:t[176].value}),(0,e.jsx)("th",{children:t[177].value})]})}),(0,e.jsxs)("tbody",{children:[(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[178].value}),(0,e.jsx)("td",{children:t[179].value}),(0,e.jsx)("td",{children:t[180].value}),(0,e.jsx)("td",{children:t[181].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[182].value}),(0,e.jsx)("td",{children:t[183].value}),(0,e.jsx)("td",{children:t[184].value}),(0,e.jsx)("td",{children:t[185].value}),(0,e.jsx)("td",{})]}),(0,e.jsxs)("tr",{children:[(0,e.jsx)("td",{children:t[186].value}),(0,e.jsx)("td",{children:t[187].value}),(0,e.jsx)("td",{children:t[188].value}),(0,e.jsx)("td",{children:t[189].value}),(0,e.jsx)("td",{})]})]})]}),(0,e.jsxs)("h2",{id:"design-token",children:[(0,e.jsx)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Design Token"]})]}),(0,e.jsx)(c.Z,{component:"List"})]})})}s.default=d}}]);
