"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[5096],{803195:function(je,Sn,i){i.r(Sn),i.d(Sn,{default:function(){return xr}});var hn=i(805574),w=i.n(hn),_=i(634577),O=i(715778),Xn=i(294184),nn=i.n(Xn),On=i(727484),gn=i.n(On),le=i(533852),l=i(606641),m=i(667294),E=i(302559),Rn=i(438746),ke=i(168400),u=i.n(ke),S=i(370917),z=i(65630),n=i(785893),Kn,xn={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},Ce=function(){var e=(0,z.Fg)(),t=function a(c){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return p<=10?`
.palette-`.concat(c,"-").concat(p,` {
  background: `).concat(e["".concat(c,"-").concat(p)],`;
}
`).concat(a(c,p+1),`
    `):""},o=function a(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return c<=13?`
.palette-gray-`.concat(c,` {
  background: `).concat(xn[c],`;
}
`).concat(a(c+1),`
    `):""};return(0,n.jsx)(S.xB,{styles:(0,S.iv)(Kn||(Kn=u()([`
        .color-palettes {
          margin: 0 1%;

          &-dark {
            margin: 0;
            padding: 0 28px;
            background-color: #141414;

            .color-title {
              color: rgba(255, 255, 255, 0.85);
            }

            .color-description {
              color: rgba(255, 255, 255, 0.45);
            }

            .color-palette {
              margin: 45px 3.5% 45px 0;

              &:nth-of-type(3n) {
                margin-right: 0;
              }

              .main-color-item {
                margin-right: 0;

                &:hover {
                  margin-right: -8px;
                }
              }
            }
          }
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 20px;
            font-size: 20px;
            text-align: center;
          }

          &-picker {
            margin: 24px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-left: 16px;
              font-size: 14px;
              font-family: Consolas, sans-serif;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-left: 16px;
              color: `,`;
              font-size: 13px;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }

              &-dark {
                margin-left: 0;
              }
            }
          }
        }

        .main-color {
          `,`
          `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-right: 4px;
            padding: 0 12px;
            font-size: 14px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all 0.2s;

            &:first-child {
              border-radius: 4px 4px 0 0;
            }

            &:last-child {
              border-radius: 0 0 4px 4px;
            }

            &:hover {
              margin-right: -8px;
              border-radius: 0 4px 4px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all 0.3s;
          }

          &-item &-value {
            position: relative;
            left: 3px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all 0.3s;
          }
        }

        .color-title {
          margin: 0 0 24px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: 14px;
        }

        .main-color:hover {
          .main-color-value {
            left: 0;
            opacity: 0.7;
          }
        }

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: 32px 28px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-right: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: 4px 4px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: 8px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `])),e.colorError,t("blue"),t("purple"),t("cyan"),t("green"),t("magenta"),t("red"),t("volcano"),t("orange"),t("gold"),t("yellow"),t("lime"),t("geekblue"),o())})},se=Ce,Jn,Se=function(){return(0,n.jsx)(S.xB,{styles:(0,S.iv)(Jn||(Jn=u()([`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-child {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          font-size: 0;
          line-height: inherit;
          text-align: right;
          padding-inline-end: 4px;
          margin-inline-start: -24px;

          [data-direction='rtl'] & {
            float: right;
          }

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            font-size: 20px;
            content: '#';
          }
        }

        &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
          visibility: hidden;
        }
      }
    `])))})},ce,ze=function(){var r=(0,z.Fg)();return(0,n.jsx)(S.xB,{styles:(0,S.iv)(ce||(ce=u()([`
        @font-face {
          font-weight: normal;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        @font-face {
          font-weight: bold;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_exesdog9toj.ttf')
              format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        // \u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982\u5B9A\u5236\u4E3B\u9898\u968F\u5FC3\u6240\u6B32\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B61234567890 QWERTYUIOPLKJHGFDSAZXCVBNM,.mnbvcxzasdfghjklpoiuytrewq
        /* CDN \u670D\u52A1\u4EC5\u4F9B\u5E73\u53F0\u4F53\u9A8C\u548C\u8C03\u8BD5\u4F7F\u7528\uFF0C\u5E73\u53F0\u4E0D\u627F\u8BFA\u670D\u52A1\u7684\u7A33\u5B9A\u6027\uFF0C\u4F01\u4E1A\u5BA2\u6237\u9700\u4E0B\u8F7D\u5B57\u4F53\u5305\u81EA\u884C\u53D1\u5E03\u4F7F\u7528\u5E76\u505A\u597D\u5907\u4EFD\u3002 */
        @font-face {
          font-weight: 900;
          font-family: 'AliPuHui';
          src: url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2')
              format('woff2'),
            url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
          font-display: swap;
        }

        html {
          direction: initial;

          &.rtl {
            direction: rtl;
          }
        }

        body {
          overflow-x: hidden;
          color: `,`;
          font-size: `,`px;
          font-family: `,`;
          line-height: `,`;
          background: `,`;
          transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      `])),r.colorText,r.fontSize,r.fontFamily,r.lineHeight,r.colorBgContainer)})},de,Le=function(){return(0,n.jsx)(S.xB,{styles:(0,S.iv)(de||(de=u()([`
      body,
      div,
      dl,
      dt,
      dd,
      ul,
      ol,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      pre,
      code,
      form,
      fieldset,
      legend,
      input,
      textarea,
      p,
      blockquote,
      th,
      td,
      hr,
      button,
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        margin: 0;
        padding: 0;
      }

      ul,
      ol {
        list-style: none;
      }

      img {
        vertical-align: middle;
        border-style: none;
      }
    `])))})},En=i(510274),Yn,pe=function(){var e=(0,z.Fg)(),t=e.antCls,o=e.colorPrimary;return(0,n.jsx)(S.xB,{styles:(0,S.iv)(Yn||(Yn=u()([`
        .markdown {
          color: `,`;
          font-size: 14px;
          line-height: 2;
        }

        .highlight {
          line-height: 1.5;
        }

        .markdown img {
          max-width: calc(100% - 32px);
          max-height: 100%;
        }

        .markdown p > img {
          margin: 34px 0;
          box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
        }

        .markdown p > img.markdown-inline-image {
          margin: 0;
          box-shadow: none;
        }

        .markdown h1 {
          margin-top: 8px;
          margin-bottom: 20px;
          color: `,`;
          font-weight: 500;
          font-size: 30px;
          font-family: Avenir, `,`, sans-serif;
          line-height: 38px;

          .subtitle {
            margin-left: 12px;
          }
        }

        .markdown h2 {
          font-size: 24px;
          line-height: 32px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          clear: both;
          margin: 1.6em 0 0.6em;
          color: `,`;
          font-weight: 500;
          font-family: Avenir, `,`, sans-serif;
        }

        .markdown h3 {
          font-size: 18px;
        }

        .markdown h4 {
          font-size: 16px;
        }

        .markdown h5 {
          font-size: 14px;
        }

        .markdown h6 {
          font-size: 12px;
        }

        .markdown hr {
          clear: both;
          height: 1px;
          margin: 24px 0;
          background: `,`;
          border: 0;
        }

        .markdown p,
        .markdown pre {
          margin: 1em 0;

          `,`-row-rtl & {
            direction: rtl;
            text-align: right;
          }
        }

        .markdown ul > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: circle;

          .rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }

          &:empty {
            display: none;
          }
        }

        .markdown ol > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: decimal;

          `,`-row-rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }
        }

        .markdown ul > li > p,
        .markdown ol > li > p {
          margin: 0.2em 0;
        }

        .markdown code {
          margin: 0 1px;
          padding: 0.2em 0.4em;
          font-size: 0.9em;
          background: `,`;
          border: 1px solid `,`;
          border-radius: 3px;
        }

        .markdown pre {
          font-family: `,`;
          background: `,`;
          border-radius: `,`px;
        }

        .markdown pre code {
          margin: 0;
          padding: 0;
          overflow: auto;
          color: `,`;
          font-size: `,`px;
          direction: ltr;
          text-align: left;
          background: #f5f5f5;
          border: none;
        }

        .markdown strong,
        .markdown b {
          font-weight: 500;
        }

        .markdown .dumi-default-source-code {
          margin: 1em 0;
          background-color: `,`;
          border-radius: `,`px;
          > pre.prism-code {
            padding: 12px 20px;
            font-size: 13px;
            line-height: 2;
          }
        }
        .pic-plus {
          & > * {
            display: inline-block !important;
            vertical-align: middle;
          }
          span {
            margin: 0 20px;
            color: #aaa;
            font-size: 30px;
          }
        }
        .antd-site-snippet {
          .ant-tabs-tab {
            .snippet-label {
              display: flex;
              align-items: center;
              justify-content: center;
              svg {
                margin-inline-end: 8px;
              }
            }
          }
          .dumi-default-source-code {
            margin: 0 auto;
            background-color: `,`;
            border-radius: `,`px;
            > pre.prism-code {
              padding: 12px 20px;
              font-size: 13px;
              line-height: 2;
            }
          }
        }

        .markdown table td > a:not(:last-child) {
          margin-right: 0 !important;

          &::after {
            position: relative !important;
          }
        }

        .markdown blockquote {
          margin: 1em 0;
          padding-left: 0.8em;
          color: `,`;
          font-size: 90%;
          border-left: 4px solid `,`;

          .rtl & {
            padding-right: 0.8em;
            padding-left: 0;
            border-right: 4px solid `,`;
            border-left: none;
          }
        }

        .markdown blockquote p {
          margin: 0;
        }

        .markdown .anchor {
          margin-left: 8px;
          opacity: 0;
          transition: opacity 0.3s;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
          }
        }

        .markdown .waiting {
          color: #ccc;
          cursor: not-allowed;
        }

        .markdown a.edit-button {
          display: inline-block;
          margin-left: 8px;
          text-decoration: none;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
            transform: rotateY(180deg);
          }

          `,`icon {
            display: block;
            color: `,`;
            font-size: 16px;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .markdown h1:hover .anchor,
        .markdown h2:hover .anchor,
        .markdown h3:hover .anchor,
        .markdown h4:hover .anchor,
        .markdown h5:hover .anchor,
        .markdown h6:hover .anchor {
          display: inline-block;
          opacity: 1;
        }

        .markdown > br,
        .markdown > p > br {
          clear: both;
        }

        .markdown .dumi-default-table {
          table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            direction: ltr;
            empty-cells: show;
            border: 1px solid `,`;
            border-collapse: collapse;
            border-spacing: 0;

            th,
            td {
              padding: 12px 24px;
              text-align: left;
              border: 1px solid `,`;

              &:first-child {
                border-left: 1px solid `,`;
              }

              &:last-child {
                border-right: 1px solid `,`;
              }

              img {
                max-width: unset;
              }
            }

            th {
              color: #5c6b77;
              font-weight: 500;
              white-space: nowrap;
              background: rgba(0, 0, 0, 0.02);
              border-width: 1px 1px 2px;
            }

            tbody tr {
              transition: all 0.3s;

              &:hover {
                background: rgba(60, 90, 100, 0.04);
              }
            }
          }

          table.component-api-table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            font-size: `,`px;
            font-family: `,`;
            line-height: `,`;
            border: 1px solid `,`;
            border-width: 0 1px;

            th {
              border-width: 1px 0 2px;
            }

            td {
              border-width: 1px 0;
              &:first-child {
                width: 18%;
                min-width: 58px;
                color: #595959;
                font-weight: 600;
                white-space: nowrap;
              }

              &:nth-child(2) {
                width: 55%;
                min-width: 160px;
              }

              &:nth-child(3) {
                width: 22%;
                color: `,`;
                font-size: `,`px;
              }

              &:nth-child(4) {
                width: 15%;
                font-size: `,`px;
              }

              &:nth-child(5) {
                width: 8%;
                font-size: `,`px;
              }

              &:nth-last-child(3):first-child {
                width: 38%;
              }

              &:nth-last-child(3):first-child ~ td:nth-last-child(2) {
                width: 70%;
              }
            }
          }
        }

        .grid-demo,
        [id^='components-grid-demo-'] {
          `,`-row > div,
            .code-box-demo `,`-row > div {
            min-height: 30px;
            margin-top: 8px;
            margin-bottom: 8px;
            color: #fff;
            text-align: center;
            border-radius: 0;
          }

          .code-box-demo `,`-row > div:not(.gutter-row) {
            padding: 16px 0;
            background: `,`;

            &:nth-child(2n + 1) {
              background: `,`;
            }
          }

          `,`-row .demo-col,
            .code-box-demo `,`-row .demo-col {
            margin-top: 0;
            margin-bottom: 0;
            padding: 30px 0;
            color: `,`;
            font-size: 18px;
            text-align: center;
            border: none;
          }

          `,`-row .demo-col-1 {
            background: `,`;
          }

          `,`-row .demo-col-2,
            .code-box-demo `,`-row .demo-col-2 {
            background: `,`;
          }

          `,`-row .demo-col-3,
            .code-box-demo `,`-row .demo-col-3 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          `,`-row .demo-col-4,
            .code-box-demo `,`-row .demo-col-4 {
            background: `,`;
          }

          `,`-row .demo-col-5,
            .code-box-demo `,`-row .demo-col-5 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          .code-box-demo .height-100 {
            height: 100px;
            line-height: 100px;
          }

          .code-box-demo .height-50 {
            height: 50px;
            line-height: 50px;
          }

          .code-box-demo .height-120 {
            height: 120px;
            line-height: 120px;
          }

          .code-box-demo .height-80 {
            height: 80px;
            line-height: 80px;
          }
        }

        [id='components-grid-demo-playground'],
        [id='components-grid-demo-gutter'] {
          > .code-box-demo `,`-row > div {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `])),e.colorText,e.colorTextHeading,e.fontFamily,e.colorTextHeading,e.fontFamily,e.colorSplit,t,t,e.siteMarkdownCodeBg,e.colorSplit,e.codeFamily,e.siteMarkdownCodeBg,e.borderRadius,e.colorText,Math.max(e.fontSize-1,12),e.siteMarkdownCodeBg,e.borderRadius,e.siteMarkdownCodeBg,e.borderRadius,e.colorTextSecondary,e.colorSplit,e.colorSplit,t,e.colorTextSecondary,e.colorText,e.colorSplit,e.colorSplit,e.colorSplit,e.colorSplit,Math.max(e.fontSize-1,12),e.codeFamily,e.lineHeight,e.colorSplit,e.magenta7,Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),t,t,t,o,new En.C(o).setAlpha(.75).toHex8String(),t,t,e.colorWhite,t,new En.C(o).setAlpha(.75).toHexString(),t,t,new En.C(o).setAlpha(.75).toHexString(),t,t,t,t,new En.C(o).setAlpha(.6).toHexString(),t,t,t)})},Ae=pe,ue,Ne=function(){var r=(0,z.Fg)();return(0,n.jsx)(S.xB,{styles:(0,S.iv)(ue||(ue=u()([`
        /**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/

        pre code {
          display: block;
          padding: 16px 32px;
          color: `,`;
          font-size: `,`px;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 2;
          white-space: pre;
          background: white;
          border: 1px solid #e9e9e9;
          border-radius: `,`px;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: black;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 1.5;
          direction: ltr;
          white-space: pre;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          word-spacing: normal;
          tab-size: 4;
          hyphens: none;
          background: none;
        }

        code[class*='css'] {
          direction: ltr;
        }

        pre[class*='language-'] ::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          code[class*='language-'],
          pre[class*='language-'] {
            text-shadow: none;
          }
        }

        /* Code blocks */
        pre[class*='language-'] {
          margin: 16px 0;
          padding: 12px 20px;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: #f5f5f5;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          white-space: normal;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .namespace {
          opacity: 0.7;
        }

        .markdown {
          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #f81d22;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #0b8235;
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #0b8235;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #008dff;
          }

          .token.function {
            color: #f81d22;
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: #e90;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }
        }
      `])),r.colorText,r.fontSize,r.borderRadius)})},Qn,Te=function(){var e=(0,z.Fg)(),t=e.antCls,o=e.iconCls;return(0,n.jsx)(S.xB,{styles:(0,S.iv)(Qn||(Qn=u()([`
        .code-boxes-col-1-1 {
          width: 100%;
        }

        .code-boxes-col-2-1 {
          display: inline-block;
          vertical-align: top;
        }

        .code-box {
          position: relative;
          display: inline-block;
          width: 100%;
          margin: 0 0 16px;
          background-color: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
          transition: all 0.2s;

          .code-box-title {
            &,
            a {
              color: `,` !important;
              background: `,`;
            }
          }

          .code-box-demo {
            background-color: `,`;
            border-radius: `,"px ",`px 0 0;
          }

          .markdown {
            pre {
              margin: 0.5em 0;
              padding: 6px 12px;
            }

            pre code {
              margin: 0;
              background: #f5f5f5;
            }
          }

          &:target {
            border: 1px solid `,`;
          }

          &-expand-trigger {
            position: relative;
            color: #3b4357;
            font-size: 20px;
            cursor: pointer;
            opacity: 0.75;
            transition: all 0.3s;
            margin-inline-start: 12px;

            &:hover {
              opacity: 1;
            }
          }

          &-title {
            position: absolute;
            top: -14px;
            padding: 1px 8px;
            color: #777;
            background: `,`;
            border-radius: `,"px ",`px 0 0;
            transition: background-color 0.4s;
            margin-inline-start: 16px;

            `,`-row-rtl & {
              border-radius: `,"px 0 0 ",`px;
            }

            a,
            a:hover {
              color: `,`;
              font-weight: 500;
              font-size: `,`px;
            }
          }

          &-description {
            padding: 18px 24px 12px;
          }

          a.edit-button {
            position: absolute;
            top: 7px;
            right: -16px;
            font-size: 12px;
            text-decoration: none;
            background: inherit;
            transform: scale(0.9);
            padding-inline-end: 6px;

            `,` {
              color: `,`;
              transition: all 0.3s;

              &:hover {
                color: `,`;
              }
            }

            `,"-row",`-row-rtl & {
              right: auto;
              left: -22px;
            }
          }

          &-demo {
            padding: 42px 24px 50px;
            color: `,`;
            border-bottom: 1px solid `,`;
          }

          iframe {
            width: 100%;
            border: 0;
          }

          &-meta {
            &.markdown {
              position: relative;
              width: 100%;
              font-size: `,`px;
              border-radius: 0 0 `,"px ",`px;
              transition: background-color 0.4s;
            }

            blockquote {
              line-height: 1.5;
            }

            h4,
            section& p {
              margin: 0;
            }

            > p {
              width: 100%;
              margin: 0.5em 0;
              font-size: 12px;
              word-break: break-word;
              padding-inline-end: 25px;
            }
          }

          &.expand &-meta {
            border-bottom: 1px dashed `,`;
            border-radius: 0;
          }

          .code-expand-icon {
            position: relative;
            width: 16px;
            height: 16px;
            cursor: pointer;
          }

          .code-expand-icon-show,
          .code-expand-icon-hide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            margin: 0;
            box-shadow: none;
            transition: all 0.4s;
            user-select: none;

            `,`-row-rtl & {
              right: 0;
              left: auto;
            }
          }

          .code-expand-icon-show {
            opacity: 0.55;
            pointer-events: auto;

            &:hover {
              opacity: 1;
            }
          }

          .code-expand-icon`,`-tooltip-open .code-expand-icon-show {
            opacity: 1;
          }

          .code-expand-icon-hide {
            opacity: 0;
            pointer-events: none;
          }

          .highlight-wrapper {
            display: none;
            overflow: auto;
            border-radius: 0 0 `,"px ",`px;

            &-expand {
              display: block;
            }
          }

          .highlight {
            position: relative;

            pre {
              margin: 0;
              padding: 0;
              background: `,`;
            }

            &:not(:first-child) {
              border-top: 1px dashed `,`;
            }
          }

          &-actions {
            display: flex;
            justify-content: center;
            padding: 12px 0;
            border-top: 1px dashed `,`;
            opacity: 0.7;
            transition: opacity 0.3s;

            &:hover {
              opacity: 1;
            }
          }

          &-actions &-code-action {
            position: relative;
            display: flex;
            align-items: center;
            width: 16px;
            height: 16px;
            color: `,`;
            cursor: pointer;
            transition: all 0.24s;

            &:hover {
              color: `,`;
            }

            `,` {
              display: block;
            }
          }

          &-code-copy {
            width: 14px;
            height: 14px;
            font-size: 14px;
            text-align: center;
            background: `,`;
            cursor: pointer;
            transition: transform 0.24s;

            &`,`-check {
              color: `,` !important;
              font-weight: bold;
            }
          }

          &-codepen {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-riddle {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-codesandbox {
            width: 16px;
            height: 16px;
            overflow: hidden;
            border: 0;
            cursor: pointer;

            &:hover {
              opacity: 1;
            }
          }

          .highlight-wrapper:hover &-code-copy,
          .highlight-wrapper:hover &-codepen,
          .highlight-wrapper:hover &-codesandbox,
          .highlight-wrapper:hover &-riddle {
            opacity: 1;
          }

          pre {
            width: auto;
            margin: 0;

            code {
              background: `,`;
              border: none;
              box-shadow: unset;
            }
          }

          &-debug {
            border-color: `,`;
          }

          &-debug &-title a {
            color: `,`;
          }
        }

        .demo-wrapper {
          position: relative;
        }

        .all-code-box-controls {
          position: absolute;
          top: -32px;
          inset-inline-end: 0;
        }

        `,`-row-rtl {
          #components-tooltip-demo-placement,
          #components-popover-demo-placement,
          #components-popconfirm-demo-placement {
            .code-box-demo {
              direction: ltr;
            }
          }
        }
      `])),e.colorBgContainer,e.colorSplit,e.borderRadius,e.colorText,e.colorBgContainer,e.colorBgContainer,e.borderRadius,e.borderRadius,e.colorPrimary,e.colorBgContainer,e.borderRadius,e.borderRadius,t,e.borderRadius,e.borderRadius,e.colorText,e.fontSize,o,e.colorTextSecondary,e.colorText,t,t,e.colorText,e.colorSplit,e.fontSize,e.borderRadius,e.borderRadius,e.colorSplit,t,t,e.borderRadius,e.borderRadius,e.colorBgContainer,e.colorSplit,e.colorSplit,e.colorTextSecondary,e.colorText,o,e.colorBgContainer,o,e.green6,e.colorBgContainer,e.purple3,e.purple6,t)})},V=Te,d,k=function(){var r=(0,z.Fg)(),e=r.antCls,t=r.iconCls;return(0,n.jsx)(S.xB,{styles:(0,S.iv)(d||(d=u()([`
        ul.anticons-list {
          margin: 10px 0;
          overflow: hidden;
          direction: ltr;
          list-style: none;

          li {
            position: relative;
            float: left;
            width: 16.66%;
            height: 100px;
            margin: 3px 0;
            padding: 10px 0 0;
            overflow: hidden;
            color: #555;
            text-align: center;
            list-style: none;
            background-color: inherit;
            border-radius: 4px;
            cursor: pointer;
            transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

            .rtl & {
              margin: 3px 0;
              padding: 10px 0 0;
            }

            `,` {
              margin: 12px 0 8px;
              font-size: 36px;
              transition: transform 0.3s ease-in-out;
              will-change: transform;
            }

            .anticon-class {
              display: block;
              font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
              white-space: nowrap;
              text-align: center;
              transform: scale(0.83);

              `,`-badge {
                transition: color 0.3s ease-in-out;
              }
            }

            &:hover {
              color: #fff;
              background-color: `,`;

              `,` {
                transform: scale(1.4);
              }

              `,`-badge {
                color: #fff;
              }
            }

            &.TwoTone:hover {
              background-color: #8ecafe;
            }

            &.copied:hover {
              color: rgba(255, 255, 255, 0.2);
            }

            &::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: #fff;
              line-height: 110px;
              text-align: center;
              background: #1677ff;
              opacity: 0;
              transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
              content: 'Copied!';
            }

            &.copied::after {
              opacity: 1;
            }
          }
        }

        .copied-code {
          padding: 2px 4px;
          font-size: 12px;
          background: #f5f5f5;
          border-radius: 2px;
        }
      `])),t,e,r.colorPrimary,t,e)})},M,H=function(){var r=(0,z.Fg)(),e=r.iconCls;return(0,n.jsx)(S.xB,{styles:(0,S.iv)(M||(M=u()([`
        .icon-pic-searcher {
          display: inline-block;
          margin: 0 8px;

          .icon-pic-btn {
            color: `,`;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .icon-pic-preview {
          width: 66px;
          height: 66px;
          margin-top: 10px;
          padding: 8px;
          text-align: center;
          border: 1px solid `,`;
          border-radius: 4px;

          > img {
            max-width: 50px;
            max-height: 50px;
          }
        }

        .icon-pic-search-result {
          min-height: 50px;
          padding: 0 10px;

          > .result-tip {
            padding: 10px 0;
            color: `,`;
          }

          > table {
            width: 100%;

            .col-icon {
              width: 80px;
              padding: 10px 0;

              > `,` {
                font-size: 30px;

                :hover {
                  color: `,`;
                }
              }
            }
          }
        }
      `])),r.colorIcon,r.colorIconHover,r.colorBorder,r.colorTextSecondary,e,r.colorLinkHover)})},$,on=function(){return(0,n.jsx)(S.xB,{styles:(0,S.iv)($||($=u()([`
      /* Browser mockup code
 * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
 * Live example: https://updown.io
 */

      .browser-mockup {
        position: relative;
        border-top: 2em solid rgba(230, 230, 230, 0.7);
        border-radius: 3px 3px 0 0;
        box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
      }

      .browser-mockup::before {
        position: absolute;
        top: -1.25em;
        left: 1em;
        display: block;
        width: 0.5em;
        height: 0.5em;
        background-color: #f44;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
        content: '';
      }

      .browser-mockup.with-tab::after {
        position: absolute;
        top: -2em;
        left: 5.5em;
        display: block;
        width: 20%;
        height: 0;
        border-right: 0.8em solid transparent;
        border-bottom: 2em solid white;
        border-left: 0.8em solid transparent;
        content: '';
      }

      .browser-mockup.with-url::after {
        position: absolute;
        top: -1.6em;
        left: 5.5em;
        display: block;
        width: calc(100% - 6em);
        height: 1.2em;
        background-color: white;
        border-radius: 2px;
        content: '';
      }

      .browser-mockup > * {
        display: block;
      }
    `])))})},rn,Y=function(){var r=(0,z.Fg)();return(0,n.jsx)(S.xB,{styles:(0,S.iv)(rn||(rn=u()([`
        .nav-phone-icon {
          position: absolute;
          top: 25px;
          right: 30px;
          z-index: 1;
          display: none;
          width: 16px;
          height: 22px;
          cursor: pointer;
        }

        @media only screen and (max-width: `,`px) {
          .code-boxes-col-2-1,
          .code-boxes-col-1-1 {
            float: none;
            width: 100%;
            max-width: unset;
          }
        }

        @media only screen and (max-width: 767.99px) {
          .preview-image-boxes {
            float: none;
            width: 100%;
            margin: 0 !important;
          }

          .preview-image-box {
            width: 100%;
            margin: 10px 0;
            padding: 0;
          }

          .image-wrapper {
            display: none;
          }

          div.version {
            display: block;
            margin: 29px auto 16px;
          }

          .toc {
            display: none;
          }

          .nav-phone-icon {
            display: block;
          }

          .main {
            height: calc(100% - 86px);
          }

          .aside-container {
            float: none;
            width: auto;
            padding-bottom: 30px;
            border-right: 0;
          }

          .ant-row-rtl {
            margin-right: 0;
            margin-left: 0;
            padding-right: 16px;
            padding-left: 16px;

            > .markdown > * {
              width: 100% !important;
            }
          }

          .main-wrapper {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .prev-next-nav {
            width: calc(100% - 32px);
            margin-left: 16px;

            .ant-row-rtl & {
              margin-right: 16px;
              margin-left: 64px;
            }
          }

          .drawer {
            .ant-menu-inline .ant-menu-item::after,
            .ant-menu-vertical .ant-menu-item::after {
              right: auto;
              left: 0;
            }
          }

          /** home \u533A\u5757 **/
          .home-page-wrapper {
            .page {
              h2 {
                margin: 80px auto 64px;
              }
            }

            .parallax-bg {
              display: none;
            }
          }

          .banner {
            display: block;
            height: 632px;

            &-bg-wrapper {
              display: none;
            }

            .img-wrapper,
            .text-wrapper {
              display: inline-block;
              width: 100%;
              min-width: unset;
              max-width: unset;
              margin: auto;
              text-align: center;
            }

            .img-wrapper {
              position: initial;
              margin-top: 20px;
              text-align: center;

              svg {
                width: 100%;
                max-width: 260px;
                height: auto;
                margin: 0 auto;
              }
            }

            .text-wrapper {
              min-height: 200px;
              margin-top: 32px;
              padding: 0;

              h1 {
                display: none;
              }

              p {
                color: #314659;
                font-size: 14px;
                line-height: 28px;
              }

              .banner-btns {
                display: block;
                min-width: 100%;
                white-space: nowrap;
                text-align: center;

                .banner-btn {
                  padding: 0 20px;
                  font-size: 14px;
                }
              }

              .banner-promote {
                min-width: 100%;
                margin-top: 32px;

                .ant-divider {
                  display: none;
                }

                a {
                  font-size: 14px;
                  white-space: nowrap;

                  img {
                    width: 20px;
                  }
                }
              }
            }
          }

          .page1 {
            min-height: 1300px;

            .ant-row {
              margin: 24px auto 64px;

              > div {
                margin-bottom: 48px;
              }
            }
          }

          .page2 {
            min-height: 840px;
            background: `,`;

            &-content {
              box-shadow: none;
            }

            &-components {
              display: none;
            }

            &-product {
              min-height: auto;
              padding: 0 16px;

              .product-block {
                margin-bottom: 34px;
                padding-bottom: 35px;
                border-bottom: 1px solid `,`;

                &:last-child {
                  margin-bottom: 32px;
                  border-bottom: none;

                  .block-text-wrapper {
                    height: auto;
                  }
                }

                .block-image-wrapper {
                  height: 88px;

                  img {
                    height: 100%;
                  }
                }

                .block-text-wrapper {
                  padding-bottom: 0;
                  border-bottom: none;

                  h4 {
                    margin-bottom: 4px;
                    font-size: 18px;
                    line-height: 24px;
                  }

                  p {
                    margin-bottom: 8px;
                    font-size: 12px;
                    line-height: 20px;
                  }

                  a {
                    line-height: 20px;
                  }

                  .components-button-wrapper {
                    margin-top: 16px;
                    font-size: 12px;

                    a {
                      display: block;
                    }
                  }

                  a.more-mobile-react,
                  a.more-mobile-angular {
                    margin-top: 0;
                    color: `,`;
                  }

                  a.more-mobile-react:hover,
                  a.more-mobile-angular:hover {
                    color: #40a9ff;
                  }
                }
              }
            }
          }

          .page3 {
            min-height: 688px;
            background: url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg')
              no-repeat;
            background-size: cover;

            .ant-row {
              margin: 0 8px;
            }

            .page3-block {
              margin-bottom: 32px;
              padding: 24px;
              background: `,`;
              border-radius: 4px;
              box-shadow: 0 8px 16px rgba(174, 185, 193, 0.3);

              &:nth-child(2) {
                .page3-img-wrapper img {
                  display: block;
                  width: 70%;
                  margin: auto;
                }
              }

              p {
                font-size: 12px;
              }

              .page3-img-wrapper {
                width: 20%;

                img {
                  width: 100%;
                }
              }

              .page3-text-wrapper {
                width: 80%;
                max-width: initial;
                margin: 0;
                padding-left: 16px;
              }
            }
          }
        }
      `])),r.screenLG,r.colorBgContainer,r.colorSplit,r.colorLink,r.colorBgContainer)})},sn,Q=function(){var r=(0,z.Fg)();return(0,n.jsx)(S.xB,{styles:(0,S.iv)(sn||(sn=u()([`
        #nprogress {
          .bar {
            background: `,`;
          }

          .peg {
            box-shadow: 0 0 10px `,", 0 0 5px ",`;
          }

          .spinner-icon {
            border-top-color: `,`;
            border-left-color: `,`;
          }
        }
      `])),r.colorPrimary,r.colorPrimary,r.colorPrimary,r.colorPrimary,r.colorPrimary)})},yn,Mn=function(){var r=(0,z.Fg)();return(0,n.jsx)(S.xB,{styles:(0,S.iv)(yn||(yn=u()([`
        .preview-image-boxes {
          display: flex;
          float: right;
          clear: both;
          width: 496px;
          margin: 0 0 70px 64px;

          &-with-carousel {
            width: 420px;

            .preview-image-box img {
              padding: 0;
            }
          }

          .ant-row-rtl & {
            float: left;
            margin: 0 64px 70px 0;
          }
        }

        .preview-image-boxes + .preview-image-boxes {
          margin-top: -35px;
        }

        .preview-image-box {
          float: left;
          width: 100%;
        }

        .preview-image-box + .preview-image-box {
          margin-left: 24px;

          .ant-row-rtl & {
            margin-right: 24px;
            margin-left: 0;
          }
        }

        .preview-image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          padding: 16px;
          text-align: center;
          background: #f2f4f5;
          box-sizing: border-box;
        }

        .preview-image-wrapper.video {
          display: block;
          padding: 0;
          background: 0;
        }

        .preview-image-wrapper video {
          display: block;
          width: 100%;

          + svg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .preview-image-wrapper.good::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-wrapper.bad::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-title {
          margin-top: 20px;
          color: `,`;
          font-size: 12px;
        }

        .preview-image-description {
          margin-top: 2px;
          color: `,`;
          font-size: 12px;
          line-height: 1.5;
        }

        .preview-image-description hr {
          margin: 2px 0;
          background: none;
          border: 0;
        }

        .preview-image-box img {
          box-sizing: border-box;
          max-width: 100%;
          padding: 12px;
          background: `,`;
          border-radius: `,`px;
          cursor: pointer;
          transition: all 0.3s;

          &.no-padding {
            padding: 0;
            background: none;
          }
        }

        .preview-image-boxes.preview-image-boxes-with-carousel img {
          padding: 0;
          box-shadow: 0 1px 0 0 #ddd, 0 3px 0 0 `,`, 0 4px 0 0 #ddd,
            0 6px 0 0 `,`, 0 7px 0 0 #ddd;
        }

        .preview-image-box img:hover {
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
        }

        .transition-video-player,
        .motion-video-min {
          float: right;
          width: 600px;
          padding: 0 0 70px 20px;

          .preview-image-wrapper {
            padding: 0;
          }

          .ant-row-rtl & {
            float: left;
          }
        }

        .motion-video-min {
          width: 390px;
        }

        .motion-principle-wrapper {
          width: 100%;
          max-width: 900px;
          margin: 48px 0 24px;
        }

        .principle-wrapper {
          width: 100%;

          .principle {
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            min-height: 180px;
            margin-right: 12.5%;
            margin-bottom: 24px;
            padding: 24px;
            font-size: 24px;
            text-align: center;
            border: 1px solid #e8e8e8;
            border-radius: 4px;

            &:last-child {
              margin-right: 0;
            }

            h4 {
              margin: 16px 0 8px;
            }

            p {
              font-size: 12px;
              line-height: 24px;
            }
          }
        }
      `])),r.colorPrimary,r.colorError,r.colorText,r.colorTextSecondary,r.colorBgContainer,r.borderRadius,r.colorBgContainer,r.colorBgContainer)})},zn,wn="dumi-default-",Fn=function(){var r=(0,z.Fg)();return(0,n.jsx)(S.xB,{styles:(0,S.iv)(zn||(zn=u()([`
        html {
          .`,`search-bar {
            &-input {
              color: `,`;
              background: `,`;
              &:focus {
                background: `,`;
              }
              &::placeholder {
                color: `,` !important;
              }
            }
          }
          .`,`search-popover {
            background-color: `,` !important;
            &::before {
              border-bottom-color: `,` !important;
            }
          }
          .`,`search-result {
            dl {
              dt {
                background-color: `,` !important;
              }
              dd {
                a {
                  &:hover {
                    background-color: `,`;
                    h4,
                    p {
                      color: `,` !important;
                    }
                    svg {
                      fill: `,` !important;
                    }
                  }
                }
              }
            }
          }
        }
      `])),wn,r.colorText,r.colorBgContainer,r.colorBgContainer,r.colorTextPlaceholder,wn,r.colorBgElevated,r.colorBgElevated,wn,r.controlItemBgActive,r.controlItemBgHover,r.colorText,r.colorText)})},cn,qn=function(){return(0,n.jsx)(S.xB,{styles:(0,S.iv)(cn||(cn=u()([`
      .design-inline-cards {
        display: flex;
        margin: 0 -20px;
      }
      .design-inline-cards > * {
        flex: 10%;
        margin: 0 20px;
      }
      .design-inline-cards img {
        width: 100%;
        max-width: 100%;
      }
      .design-inline-cards h4 {
        margin-bottom: 0;
      }
    `])))})},fn=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ze,{}),(0,n.jsx)(Le,{}),(0,n.jsx)(Ae,{}),(0,n.jsx)(Ne,{}),(0,n.jsx)(V,{}),(0,n.jsx)(k,{}),(0,n.jsx)(H,{}),(0,n.jsx)(on,{}),(0,n.jsx)(Y,{}),(0,n.jsx)(Q,{}),(0,n.jsx)(Mn,{}),(0,n.jsx)(qn,{}),(0,n.jsx)(se,{}),(0,n.jsx)(Se,{}),(0,n.jsx)(Fn,{})]})},$n=fn,vn=i(857278),Ln=i(430932),dn=i(985093),An=i(115668),me=i(642207),Nn=i(301210),Wn=i(13923),Un=i(263783),Be=i(937993),he=i(448118),Dn=i(938545),Ee=i(173224),_n=i(630770),ge=i(391298),jn=i(438199),Gn=i(693399),Tn="ant-where-checker",Me={cn:{whereNotSupport:"\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u73B0\u4EE3 CSS Selector\uFF0C\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08\u5982 Chrome\u3001Firefox \u7B49\u7B49\uFF09\u67E5\u770B\u5B98\u7F51\u3002\u5982\u679C\u9700\u8981\u5BF9\u65E7\u7248\u6D4F\u89C8\u5668\u8FDB\u884C\u6837\u5F0F\u652F\u6301\uFF0C\u6B22\u8FCE\u67E5\u9605\u914D\u7F6E\u6587\u6863\uFF1A",whereDocTitle:"\u517C\u5BB9\u6027\u8C03\u6574\uFF08\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF09",whereDocUrl:"/docs/react/customize-theme-cn#\u517C\u5BB9\u6027\u8C03\u6574"},en:{whereNotSupport:"Your browser not support modern CSS Selector. Please use modern browser to view (e.g. Chrome, Firefox, etc). If you want to compatible style with legacy browser, please refer to the configuration document:",whereDocTitle:"Compatible adjustment (Please use modern browser to visit)",whereDocUrl:"/docs/react/customize-theme#compatible-adjustment"}};function De(){var r=(0,E.Z)(Me),e=w()(r,1),t=e[0],o=m.useState(!0),a=w()(o,2),c=a[0],p=a[1];return m.useEffect(function(){var h=document.createElement("p");h.className=Tn,h.style.position="fixed",h.style.pointerEvents="none",h.style.visibility="hidden",h.style.width="0",document.body.appendChild(h),(0,Gn.updateCSS)(`
:where(.`.concat(Tn,`) {
  content: "__CHECK__";
}
    `),Tn);var s=getComputedStyle(h),x=s.content;p(String(x).includes("CHECK")),document.body.removeChild(h),(0,Gn.removeCSS)(Tn)},[]),c?null:(0,n.jsx)("div",{style:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:99999999,background:"rgba(0,0,0,0.65)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsxs)("div",{style:{border:"1px solid #ffe58f",background:"#fffbe6",color:"rgba(0,0,0,0.88)",padding:"8px 12px",borderRadius:"8px",zIndex:9999999999,lineHeight:"22px",width:520},children:[t.whereNotSupport," ",(0,n.jsx)("a",{style:{color:"#1677ff",textDecoration:"none"},href:t.whereDocUrl,children:t.whereDocTitle})]})})}var kn,Bn,ne={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},Pe=function(){var e=(0,m.useContext)(jn.Z),t=e.isMobile;return(0,z.kc)(function(o){var a=o.token,c=o.css,p=new En.C((0,_n.Z)("#f0f3fa","#fff")).onBackground(a.colorBgContainer).toHexString();return{holder:c(kn||(kn=u()([`
      background: `,`;
    `])),p),footer:c(Bn||(Bn=u()([`
      background: `,`;
      color: `,`;
      box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

      * {
        box-sizing: border-box;
      }

      h2,
      a {
        color: `,`;
      }

      .rc-footer-column {
        margin-bottom: `,`px;
        :last-child {
          margin-bottom: `,`px;
        }
      }

      .rc-footer-item-icon {
        top: -1.5px;
      }

      .rc-footer-container {
        max-width: 1208px;
        margin-inline: auto;
        padding-inline: `,`px;
      }

      .rc-footer-bottom {
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
        .rc-footer-bottom-container {
          font-size: `,`px;
        }
      }
    `])),p,a.colorTextSecondary,a.colorText,t?60:0,t?20:0,a.marginXXL,a.fontSize)}})()},Ze=function(){var e=(0,Rn.Z)(),t=(0,E.Z)(ne),o=w()(t,2),a=o[0],c=o[1],p=Pe(),h=p.styles,s=e.getLink,x=m.useMemo(function(){var A=c==="cn",I={title:(0,n.jsx)(l._H,{id:"app.footer.resources"}),items:[{title:"Ant Design Charts",url:"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:"https://mini.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,n.jsx)(l._H,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,n.jsx)(l._H,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,n.jsx)(l._H,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,n.jsx)(l._H,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,n.jsx)(l._H,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"ahooks",description:(0,n.jsx)(l._H,{id:"app.footer.hooks"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:"Ant Motion",description:(0,n.jsx)(l._H,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,n.jsx)(l._H,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},b={title:(0,n.jsx)(l._H,{id:"app.footer.community"}),items:[{icon:(0,n.jsx)(vn.Z,{}),title:(0,n.jsx)(l._H,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,n.jsx)(Ln.Z,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,n.jsx)(dn.Z,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(l._H,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(An.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(l._H,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,n.jsx)(An.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(l._H,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf"}),title:"SEE Conf",description:(0,n.jsx)(l._H,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};A&&b.items.push({icon:(0,n.jsx)(me.Z,{}),title:(0,n.jsx)(l._H,{id:"app.footer.work_with_us"}),url:s("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:l.rU});var v={title:(0,n.jsx)(l._H,{id:"app.footer.help"}),items:[{icon:(0,n.jsx)(Nn.Z,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(Wn.Z,{}),title:(0,n.jsx)(l._H,{id:"app.footer.change-log"}),url:s("/changelog"),LinkComponent:l.rU},{icon:(0,n.jsx)(Un.Z,{}),title:(0,n.jsx)(l._H,{id:"app.footer.faq"}),url:s("/docs/react/faq"),LinkComponent:l.rU},{icon:(0,n.jsx)(Be.Z,{}),title:(0,n.jsx)(l._H,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,n.jsx)(he.Z,{}),title:(0,n.jsx)(l._H,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,n.jsx)(Dn.Z,{}),title:(0,n.jsx)(l._H,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,n.jsx)(Un.Z,{}),title:(0,n.jsx)(l._H,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,n.jsx)(Un.Z,{}),title:(0,n.jsx)(l._H,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},T={icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech"}),title:(0,n.jsx)(l._H,{id:"app.footer.more-product"}),items:[{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(l._H,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,n.jsx)(l._H,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV"}),title:"AntV",url:"https://antv.vision",description:(0,n.jsx)(l._H,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,n.jsx)(l._H,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"kitchen"}),title:"Kitchen",description:(0,n.jsx)(l._H,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech"}),title:(0,n.jsx)(l._H,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,n.jsx)(Ee.Z,{}),title:(0,n.jsx)(l._H,{id:"app.footer.theme"}),url:s("/theme-editor"),LinkComponent:l.rU}]};return[I,b,v,T]},[c,e.search]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ge.Z,{columns:x,className:h.footer,bottom:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,n.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,n.jsx)("div",{children:a.owner})]})}),(0,n.jsx)(De,{})]})},ee=Ze,He=i(97857),L=i.n(He),te=i(9783),oe=i.n(te),xe=i(660532),Ie=i(98651),Oe=i(469181),Re=i(344682),Fe=i(664095),Pn=i(883458),$e=i(39199),D=i(316165),W="M448 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM64 448l256 224-256 224z",U="M256 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM960 896l-256-224 256-224z",pn=function(e){return(0,n.jsx)(D.Z,L()(L()({},e),{},{children:(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,n.jsx)("path",{d:e.direction==="ltr"?W:U})})}))},en=pn,K=i(373638),Zn,un,Hn=(0,z.kc)(function(r){var e=r.token,t=r.css,o=e.headerHeight,a=e.colorTextHeading,c=e.fontFamily,p=e.mobileMaxWidth;return{logo:t(Zn||(Zn=u()([`
      height: `,`px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: `,`;
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi, `,`, sans-serif;
      line-height: `,`px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: `,`;
      }

      img {
        height: 32px;
        vertical-align: middle;
        margin-inline-end: 12px;
      }

      @media only screen and (max-width: `,`px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `])),o,a,c,o,a,p),title:t(un||(un=u()([`
      line-height: 32px;
    `])))}}),fe=function(e){var t=e.isZhCN,o=(0,l.TH)(),a=o.search,c=Hn(),p=c.styles;return(0,n.jsx)("h1",{children:(0,n.jsxs)(l.rU,{to:K.J1("/",t,a),className:p.logo,children:[(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",height:32,width:32,alt:"logo"}),(0,n.jsx)("span",{className:p.title,children:"Ant Design"})]})})},ve=fe,ao=i(534804),lo=i(963918),In=i(905303),Ye,Qe,qe,_e=(0,z.kc)(function(r){var e=r.css;return{smallStyle:e(Ye||(Ye=u()([`
    font-size: 12px;
    color: #777;
    margin-left: 0.3em;
  `]))),downOutlined:e(Qe||(Qe=u()([`
    font-size: 9px;
    margin: -1px 0 0 2px;
    vertical-align: middle;
  `]))),downOutlinedRTL:e(qe||(qe=u()([`
    font-size: 9px;
    margin: -1px 2px 0 0;
    vertical-align: middle;
  `])))}}),nt=function(){var e=_e(),t=e.styles;return(0,n.jsxs)("span",{className:t.smallStyle,children:["(",(0,n.jsx)(l._H,{id:"app.implementation.community"}),")"]})},et=function(){return[{label:(0,n.jsx)("a",{href:"https://charts.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(l._H,{id:"app.header.menu.charts"})}),key:"charts"},{label:(0,n.jsx)("a",{href:"http://pro.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(l._H,{id:"app.header.menu.pro.v4"})}),key:"pro"},{label:(0,n.jsx)("a",{href:"http://procomponents.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(l._H,{id:"app.header.menu.pro.components"})}),key:"procomponents"},{label:(0,n.jsxs)("a",{href:"http://ng.ant.design",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Angular",(0,n.jsx)(nt,{})]}),key:"ng"},{label:(0,n.jsxs)("a",{href:"http://antdv.com",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Vue",(0,n.jsx)(nt,{})]}),key:"vue"}]},so=function(e){var t=e.isRTL,o=_e(),a=o.styles;return(0,n.jsx)(lo.Z,{menu:{items:et()},placement:"bottomRight",children:(0,n.jsxs)(In.ZP,{size:"small",children:[(0,n.jsx)(l._H,{id:"app.header.menu.more"}),(0,n.jsx)(ao.Z,{className:t?a.downOutlinedRTL:a.downOutlined})]})})},co=so,po=i(719632),Cn=i.n(po),tt=i(923232),ot,rt,uo={cn:{design:"\u8BBE\u8BA1",development:"\u7814\u53D1",components:"\u7EC4\u4EF6",resources:"\u8D44\u6E90",blog:"\u535A\u5BA2"},en:{design:"Design",development:"Development",components:"Components",resources:"Resources",blog:"Blog"}},mo=(0,z.kc)(function(r){var e=r.token,t=e.antCls,o=e.iconCls,a=e.fontFamily,c=e.headerHeight,p=e.menuItemBorder,h=e.colorPrimary;return{nav:(0,z.iv)(ot||(ot=u()([`
      height: 100%;
      font-size: 14px;
      font-family: Avenir, `,`, sans-serif;
      border: 0;

      &`,`-menu-horizontal {
        border-bottom: none;

        & > `,"-menu-item, & > ",`-menu-submenu {
          min-width: `,`px;
          height: `,`px;
          padding-right: 12px;
          padding-left: 12px;
          line-height: `,`px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: `,`px;
          }
        }

        & `,"-menu-submenu-title ",` {
          margin: 0;
        }

        & > `,`-menu-item-selected {
          a {
            color: `,`;
          }
        }
      }

      & > `,"-menu-item, & > ",`-menu-submenu {
        text-align: center;
      }
    `])),a,t,t,t,40+12*2,c,c,p,t,o,t,h,t,t),popoverMenuNav:(0,z.iv)(rt||(rt=u()([`
      `,`-menu-item,
      `,`-menu-submenu {
        text-align: left;
      }

      `,`-menu-item-group-title {
        padding-left: 24px;
      }

      `,`-menu-item-group-list {
        padding: 0 16px;
      }

      `,`-menu-item,
      a {
        color: #333;
      }
    `])),t,t,t,t,t)}}),ho=function(r){var e,t,o,a=r.isZhCN,c=r.isClient,p=r.isMobile,h=r.responsive,s=r.directionText,x=r.onLangChange,A=r.onDirectionChange,I=(0,l.TH)(),b=I.pathname,v=I.search,T=(0,E.Z)(uo),N=w()(T,1),g=N[0],P=(0,l.yh)(),B=((e=P["/docs/blog"])===null||e===void 0||(t=e[0])===null||t===void 0?void 0:t.children)||[],Z=mo(),y=Z.styles,G=p?"inline":"horizontal",q=b.split("/").filter(function(f){return f}).slice(0,-1).join("/"),tn=q||"home";b.startsWith("/changelog")?tn="docs/react":b.startsWith("/docs/resources")&&(tn="docs/resources");var F,an=[{label:(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),key:"github"},{label:(0,n.jsx)(l._H,{id:"app.header.lang"}),onClick:x,key:"switch-lang"},{label:s,onClick:A,key:"switch-direction"}].concat(Cn()(et()));p?F=an:h==="crowded"&&(F=[{label:(0,n.jsx)(xe.Z,{}),key:"additional",children:Cn()(an)}]);var mn=[{label:(0,n.jsx)(l.rU,{to:K.J1("/docs/spec/introduce",a,v),children:g.design}),key:"docs/spec"},{label:(0,n.jsx)(l.rU,{to:K.J1("/docs/react/introduce",a,v),children:g.development}),key:"docs/react"},{label:(0,n.jsx)(l.rU,{to:K.J1("/components/overview/",a,v),children:g.components}),key:"components"},B.length?{label:(0,n.jsx)(l.rU,{to:K.J1(B.sort(function(f,X){return f.frontmatter.date>X.frontmatter.date?-1:1})[0].link,a,v),children:g.blog}),key:"docs/blog"}:null,{label:(0,n.jsx)(l.rU,{to:K.J1("/docs/resources",a,v),children:g.resources}),key:"docs/resources"},a&&c&&window.location.host!=="ant-design.antgroup.com"&&window.location.host!=="ant-design.gitee.io"?{label:"\u56FD\u5185\u955C\u50CF",key:"mirror",children:[{label:(0,n.jsx)("a",{href:"https://ant-design.antgroup.com",children:"\u5B98\u65B9\u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"antgroup"},{label:(0,n.jsx)("a",{href:"https://ant-design.gitee.io",children:"Gitee \u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"gitee",src:"https://gw.alipayobjects.com/zos/bmw-prod/9e91e124-9bab-4113-b500-301412f6b370.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"gitee"}]}:null].concat(Cn()((o=F)!==null&&o!==void 0?o:[]));return(0,n.jsx)(tt.Z,{mode:G,selectedKeys:[tn],className:y.nav,disabledOverflow:!0,items:mn,style:{borderRight:0}})},it=i(879587),at,lt,st,ct,dt,Vn="1.2em",go=(0,z.kc)(function(r){var e=r.token,t=r.css,o=e.colorText,a=e.colorBorder,c=e.colorBgContainer,p=e.colorBgTextHover,h=e.borderRadius,s=e.controlHeight,x=e.motionDurationMid;return{btn:t(at||(at=u()([`
      color: `,`;
      border-color: `,`;
      padding: 0 !important;
      width: `,`px;
      height: `,`px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: `,`px;
      transition: all `,`;
      cursor: pointer;
      .btn-inner {
        transition: all `,`;
      }
      &:hover {
        background: `,`;
      }
      img {
        width: `,`;
        height: `,`;
      }
      .anticon {
        font-size: `,`;
      }
    `])),o,a,s,s,h,x,x,p,Vn,Vn,Vn),innerDiv:t(lt||(lt=u()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),Vn,Vn),labelStyle:t(st||(st=u()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),Vn,o,o),label1Style:t(ct||(ct=u()([`
      left: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),o,c),label2Style:t(dt||(dt=u()([`
      right: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),xo=function(e){var t=e.label1,o=e.label2,a=e.tooltip1,c=e.tooltip2,p=e.value,h=e.pure,s=e.onClick,x=go(),A=x.styles,I=A.btn,b=A.innerDiv,v=A.labelStyle,T=A.label1Style,N=A.label2Style,g=(0,n.jsx)("button",{onClick:s,className:I,"aria-label":e["aria-label"],children:(0,n.jsxs)("div",{className:"btn-inner",children:[h&&(p===1?t:o),!h&&(0,n.jsxs)("div",{className:b,children:[(0,n.jsx)("span",{className:nn()(v,p===1?T:N),children:t}),(0,n.jsx)("span",{className:nn()(v,p===1?N:T),children:o})]})]})},"lang-button");return a||c?(0,n.jsx)(it.Z,{title:p===1?a:c,children:g}):g},We=xo,pt,ut,mt,ht=1120,gt=1200,fo=(0,z.kc)(function(r){var e=r.token,t=r.css,o="#ced4d9";return{header:t(pt||(pt=u()([`
      position: relative;
      z-index: 10;
      max-width: 100%;
      background: `,`;
      box-shadow: `,`;

      @media only screen and (max-width: `,`px) {
        text-align: center;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: `,`;
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: `,`;
          }
        }

        .dumi-default-search-shortcut {
          color: `,`;
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: 4px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `])),e.colorBgContainer,e.boxShadowTertiary,e.mobileMaxWidth,o,o,o),menuRow:t(ut||(ut=u()([`
      display: flex;
      align-items: center;
      margin: 0;

      > * {
        flex: none;
        margin: 0;
        margin-inline-end: 12px;

        &:last-child {
          margin-inline-end: 40px;
        }
      }
    `]))),dataDirectionIcon:t(mt||(mt=u()([`
      width: 16px;
    `]))),popoverMenu:oe()({width:300},"".concat(e.antCls,"-popover-inner-content"),{padding:0})}}),xt="ANT_DESIGN_DO_NOT_OPEN_MIRROR_MODAL";function ft(){window.localStorage.setItem(xt,"true")}function vo(){return!window.localStorage.getItem(xt)}var bo=function(){var e=m.useState(!1),t=w()(e,2),o=t[0],a=t[1],c=(0,E.Z)(),p=w()(c,2),h=p[1],s=(0,l.WF)(),x=s.pkg,A=(0,K.Is)(),I=(0,m.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),b=w()(I,2),v=b[0],T=b[1],N=(0,m.useContext)(jn.Z),g=N.direction,P=N.isMobile,B=N.updateSiteConfig,Z=(0,m.useRef)(null),y=(0,l.TH)(),G=y.pathname,q=y.search,tn=fo(),F=tn.styles,an=(0,m.useCallback)(function(){T(function(R){return L()(L()({},R),{},{menuVisible:!1})})},[]),mn=(0,m.useCallback)(function(){T(function(R){return L()(L()({},R),{},{windowWidth:window.innerWidth})})},[]),f=(0,m.useCallback)(function(){T(function(R){return L()(L()({},R),{},{menuVisible:!0})})},[]),X=(0,m.useCallback)(function(R){T(function(bn){return L()(L()({},bn),{},{menuVisible:R})})},[]),ln=function(){B({direction:g!=="rtl"?"rtl":"ltr"})};(0,m.useEffect)(function(){an()},[y]),(0,m.useEffect)(function(){return a(typeof window!="undefined"),mn(),window.addEventListener("resize",mn),Z.current=(0,K.qE)(function(R){R!=="timeout"&&R!=="error"&&window.location.host!=="ant-design.antgroup.com"&&vo()&&Ie.Z.confirm({title:"\u63D0\u793A",content:"\u5185\u7F51\u7528\u6237\u63A8\u8350\u8BBF\u95EE\u56FD\u5185\u955C\u50CF\u4EE5\u83B7\u5F97\u6781\u901F\u4F53\u9A8C\uFF5E",okText:"\u{1F680} \u7ACB\u523B\u524D\u5F80",cancelText:"\u4E0D\u518D\u5F39\u51FA",closable:!0,zIndex:99999,onOk:function(){window.open("https://ant-design.antgroup.com","_self"),ft()},onCancel:function(){ft()}})}),function(){window.removeEventListener("resize",mn),Z.current&&clearTimeout(Z.current)}},[]);var j=(0,m.useCallback)(function(R){var bn=window.location.href,jr=window.location.pathname;if(/overview/.test(jr)&&/0?[1-39][0-3]?x/.test(R)){window.location.href=bn.replace(window.location.origin,R).replace(/\/components\/overview/,"/docs".concat(/0(9|10)x/.test(R)?"":"/react","/introduce")).replace(/\/$/,"");return}var Je=new URL(bn.replace(window.location.origin,R));Je.host.includes("antgroup")&&(window.location.href="".concat(Je.href.replace(/\/$/,""),"/")),window.location.href=Je.href.replace(/\/$/,"")},[]),C=(0,m.useCallback)(function(){var R="".concat(window.location.protocol,"//"),bn=window.location.href.slice(R.length);K.Fy()&&localStorage.setItem("locale",K.KE(G)?"en-US":"zh-CN"),window.location.href=R+bn.replace(window.location.pathname,K.J1(G,!K.KE(G),q).pathname)},[y]),J=(0,m.useMemo)(function(){return g!=="rtl"?"RTL":"LTR"},[g]),ie=(0,m.useMemo)(function(){return g==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[g]),fr=v.menuVisible,we=v.windowWidth,eo=v.searching,to=L()(oe()({},x.version,x.version),A==null?void 0:A.docVersions),vr=Object.keys(to).map(function(R){return{value:to[R],label:R}}),oo=["","index","index-cn"].includes(G),br=h==="cn",yr=g==="rtl",Xe=null;we<ht?Xe="crowded":we<gt&&(Xe="narrow");var wr=nn()(F.header,"clearfix",{"home-header":oo}),Ke={isZhCN:br,isRTL:yr,isClient:o},ro=(0,n.jsx)(ho,L()(L()({},Ke),{},{responsive:Xe,isMobile:P,directionText:J,onLangChange:C,onDirectionChange:ln}),"nav"),ae=[ro,(0,n.jsx)(Oe.Z,{className:"version",size:"small",defaultValue:x.version,onChange:j,dropdownStyle:ie,popupMatchSelectWidth:!1,getPopupContainer:function(bn){return bn.parentNode},options:vr},"version"),(0,n.jsx)(co,L()({},Ke),"more"),(0,n.jsx)(We,{onClick:C,value:K.KE(G)?1:2,label1:"\u4E2D",label2:"En",tooltip1:"\u4E2D\u6587 / English",tooltip2:"English / \u4E2D\u6587"},"lang"),(0,n.jsx)(We,{onClick:ln,value:g==="rtl"?2:1,label1:(0,n.jsx)(en,{className:F.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,n.jsx)(en,{className:F.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"},"direction"),(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noreferrer",children:(0,n.jsx)(We,{value:1,label1:(0,n.jsx)(Nn.Z,{}),tooltip1:"Github",label2:null,pure:!0})},"github")];we<ht?ae=eo?[]:[ro]:we<gt&&(ae=eo?[]:ae);var io=oo?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,n.jsxs)("header",{className:wr,children:[P&&(0,n.jsx)(Re.Z,{overlayClassName:F.popoverMenu,placement:"bottomRight",content:ae,trigger:"click",open:fr,arrow:{arrowPointAtCenter:!0},onOpenChange:X,children:(0,n.jsx)(xe.Z,{className:"nav-phone-icon",onClick:f})}),(0,n.jsxs)(Fe.Z,{style:{flexFlow:"nowrap",height:64},children:[(0,n.jsx)(Pn.Z,L()(L()({},io[0]),{},{children:(0,n.jsx)(ve,L()(L()({},Ke),{},{location:y}))})),(0,n.jsxs)(Pn.Z,L()(L()({},io[1]),{},{className:F.menuRow,children:[(0,n.jsx)("div",{className:"nav-search-wrapper",children:(0,n.jsx)($e.ZP,{})}),!P&&ae]}))]})]})},yo=bo,kr=i(945462),wo=i(377376),Ue=i(185209),jo=function(){var e=(0,l.eL)(),t=(0,m.useMemo)(function(){var p;if(!e.frontmatter.subtitle&&!e.frontmatter.title)p="404 Not Found - Ant Design";else{var h;p="".concat(e.frontmatter.subtitle||""," ").concat(((h=e.frontmatter)===null||h===void 0?void 0:h.title)||""," - Ant Design")}var s=e.frontmatter.description||"";return[p,s]},[e]),o=w()(t,2),a=o[0],c=o[1];return(0,n.jsxs)(l.ql,{children:[(0,n.jsx)("title",{children:a}),(0,n.jsx)("meta",{property:"og:title",content:a}),c&&(0,n.jsx)("meta",{name:"description",content:c})]})},vt=jo,bt=i(148050),ko=i(517951),Co=i(823493),So=i.n(Co),zo=i(658192),yt,wt,jt,kt=["scroll","resize"],Lo=(0,z.kc)(function(r){var e=r.token,t=r.css,o=e.boxShadowSecondary,a=e.antCls;return{affixTabs:t(yt||(yt=u()([`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 11;
      padding: 0 40px;
      background: #fff;
      box-shadow: `,`;
      transform: translate3d(0, -100%, 0);
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;

      `,`-tabs {
        max-width: 1208px;
        margin: 0 auto;

        `,`-tabs-nav {
          margin: 0;

          &::before {
            border-bottom-color: transparent;
          }

          `,`-tabs-tab {
            padding: 21px 0;
          }
        }
      }
    `])),o,a,a,a),affixTabsFixed:t(wt||(wt=u()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:t(jt||(jt=u()([`
      text-transform: capitalize;
    `])))}}),Ct=32,Ao=function(){var e=m.useRef(null),t=m.useRef([]),o=m.useState(!1),a=w()(o,2),c=a[0],p=a[1],h=m.useState(null),s=w()(h,2),x=s[0],A=s[1],I=Lo(),b=I.styles,v=b.affixTabs,T=b.affixTabsFixed,N=b.span;function g(B){var Z=document.getElementById(B);if(Z){var y=Z.offsetTop-e.current.offsetHeight-Ct;(0,zo.Z)(y)}}m.useEffect(function(){t.current=Array.from(document.querySelectorAll("h2[id]")).map(function(B){var Z=B.id;return Z}),p(!0)},[]),m.useEffect(function(){var B=decodeURIComponent((location.hash||"").slice(1));B&&g(B)},[c]);var P=m.useMemo(function(){function B(){for(var Z=window,y=Z.scrollY,G=e.current.offsetHeight,q=t.current.length-1;q>=0;q-=1){var tn=t.current[q],F=document.getElementById(tn),an=F.offsetTop-G-Ct;if(an<=y){A(tn);return}}A(null)}return So()(B)},[]);return m.useEffect(function(){return kt.forEach(function(B){return window.addEventListener(B,P)}),P(),function(){kt.forEach(function(B){return window.removeEventListener(B,P)})}},[]),(0,n.jsx)("div",{className:nn()(v,x&&T),ref:e,children:(0,n.jsx)(ko.Z,{activeKey:x,onChange:g,items:t.current.map(function(B){return{key:B,label:(0,n.jsx)("span",{className:N,children:B.replace(/-/g," ")})}})})})},No=Ao,St,zt,Lt,At=40,be=1208,Ge=24,To=(0,z.kc)(function(r){var e=r.token,t=r.css,o=e.antCls;return{resourcePage:t(St||(St=u()([`
      footer {
        margin-top: 176px;

        .rc-footer-container {
          max-width: `,`px;
          margin: 0 auto;
          padding-right: 0;
          padding-left: 0;
        }
      }
    `])),be),resourceContent:t(zt||(zt=u()([`
      padding: 0 `,`px;
      max-width: `,`px;
      margin: 0 auto;
      box-sizing: content-box;
      min-height: 100vh;

      > .markdown {
        > p {
          margin-bottom: 56px;
        }

        h2 {
          margin-top: 124px;
          color: #314659;
          font-weight: lighter;
          font-size: 30px;
          line-height: 38px;

          &:first-child {
            margin-top: 88px;
          }
        }

        h3 {
          margin-top: 56px;
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
        }

        p {
          color: #697b8c;
        }
      }

      @media only screen and (max-width: 767.99px) {
        & {
          article {
            padding: 0 `,`px;
          }

          `,`-col {
            padding-top: 16px !important;
            padding-bottom: 16px !important;
          }
        }
      }
    `])),At,be,Ge,o),banner:t(Lt||(Lt=u()([`
      padding: 0 `,`px;
      overflow: hidden;
      background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');
      background-size: cover;

      h1 {
        box-sizing: content-box;
        max-width: `,`px;
        margin: 56px auto 16px;
      }

      section {
        max-width: `,`px;
        margin: 0 auto 56px;
        font-weight: 200;
        font-size: 16px;
        line-height: 24px;
      }

      @media only screen and (max-width: 767.99px) {
        & {
          margin: 0 -`,`px;
          padding: 0 `,`px;
        }
      }
    `])),At,be,be,Ge,Ge)}}),Bo=function(e){var t,o=e.children,a=To(),c=a.styles,p=(0,l.eL)();return(0,n.jsx)(_.ZP,{theme:{token:{colorBgLayout:"#fff"}},children:(0,n.jsxs)(wo.Z,{children:[(0,n.jsx)(vt,{}),(0,n.jsxs)("div",{id:"resources-page",className:c.resourcePage,children:[(0,n.jsx)(No,{}),(0,n.jsxs)("div",{className:c.banner,children:[(0,n.jsxs)(Ue.Z.Title,{style:{fontSize:30},children:[(t=p.frontmatter)===null||t===void 0?void 0:t.title,(0,n.jsx)(bt.Z,{title:(0,n.jsx)(l._H,{id:"app.content.edit-page"}),filename:p.frontmatter.filename})]}),(0,n.jsx)("section",{children:p.frontmatter.description})]}),(0,n.jsx)("div",{className:c.resourceContent,children:o}),(0,n.jsx)(ee,{})]})]})})},Eo=Bo,Mo=i(720841),Do=i(538294),Nt=i(575054),Tt=i(554847),Po=i(252901),Zo=i(605071),Bt=i(945016),Ho=i(217187),re=i(743929),Et=i(206171),Io=i(965516),Oo=i(899242),Ro=i(513769),Fo=i.n(Ro),$o=["to","children"],Wo=(0,m.forwardRef)(function(r,e){var t=r.to,o=r.children,a=Fo()(r,$o),c=(0,l.s0)(),p=function(s){t.startsWith("http")||!s.metaKey&&!s.ctrlKey&&!s.shiftKey&&(s.preventDefault(),(0,m.startTransition)(function(){c(t)}))};return(0,n.jsx)("a",L()(L()({ref:e,href:t,onClick:p},a),{},{children:o}))}),ye=Wo,Uo=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=(0,l.yh)(),o=(0,Rn.Z)(),a=o.pathname,c=o.search,p=(0,l.tx)(),h=e.before,s=e.after,x=Io.Z.useToken(),A=x.token,I=(0,m.useMemo)(function(){var b,v=Cn()(p!=null?p:[]);if(a.startsWith("/docs/spec")){var T=v.splice(0,1);v.push.apply(v,Cn()(T))}if(a.startsWith("/docs/react")){var N,g=(N=Object.entries(t).find(function(Z){var y=w()(Z,1),G=y[0];return G.startsWith("/changelog")}))===null||N===void 0?void 0:N[1];g&&v.push.apply(v,Cn()(g))}if(a.startsWith("/changelog")){var P,B=(P=Object.entries(t).find(function(Z){var y=w()(Z,1),G=y[0];return G.startsWith("/docs/react")}))===null||P===void 0?void 0:P[1];B&&v.unshift.apply(v,Cn()(B))}return(b=v==null?void 0:v.reduce(function(Z,y){if(y!=null&&y.title)if(a.startsWith("/docs/spec")){var G,q,tn=y.children.reduce(function(f,X){var ln,j=(ln=X.frontmatter.type)!==null&&ln!==void 0?ln:"default";return f[j]||(f[j]=[]),f[j].push(X),f},{}),F=[];F.push.apply(F,Cn()((G=(q=tn.default)===null||q===void 0?void 0:q.map(function(f){return{label:(0,n.jsxs)(ye,{to:"".concat(f.link).concat(c),children:[h,f==null?void 0:f.title,s]}),key:f.link.replace(/(-cn$)/g,"")}}))!==null&&G!==void 0?G:[])),Object.entries(tn).forEach(function(f){var X=w()(f,2),ln=X[0],j=X[1];ln!=="default"&&F.push({type:"group",label:ln,key:ln,children:j==null?void 0:j.map(function(C){return{label:(0,n.jsxs)(ye,{to:"".concat(C.link).concat(c),children:[h,C==null?void 0:C.title,s]}),key:C.link.replace(/(-cn$)/g,"")}})})}),Z.push({label:y==null?void 0:y.title,key:y==null?void 0:y.title,children:F})}else{var an;Z.push({type:"group",label:y==null?void 0:y.title,key:y==null?void 0:y.title,children:(an=y.children)===null||an===void 0?void 0:an.map(function(f){return{label:(0,n.jsxs)(ye,{to:"".concat(f.link).concat(c),children:[h,(0,n.jsx)("span",{children:f==null?void 0:f.title},"english"),(0,n.jsx)("span",{className:"chinese",children:f.frontmatter.subtitle},"chinese"),f.frontmatter.tag&&(0,n.jsx)(Oo.Z,{color:"warning",style:{marginInlineStart:A.marginXS},children:f.frontmatter.tag}),s]}),key:f.link.replace(/(-cn$)/g,"")}})})}else{var mn=y.children||[];mn.every(function(f){var X;return f==null||(X=f.frontmatter)===null||X===void 0?void 0:X.date})&&mn.sort(function(f,X){return f.frontmatter.date>X.frontmatter.date?-1:1}),Z.push.apply(Z,Cn()(mn.map(function(f){return{label:(0,n.jsxs)(ye,{to:"".concat(f.link).concat(c),children:[h,f==null?void 0:f.title,s]}),key:f.link.replace(/(-cn$)/g,"")}})))}return Z},[]))!==null&&b!==void 0?b:[]},[p,t,a,c,e]);return[I,a]},Mt=Uo,Dt,Pt,Zt,Ht,Go=(0,z.kc)(function(r){var e=r.token,t=r.css,o=e.colorSplit,a=e.iconCls,c=e.fontSizeIcon;return{prevNextNav:t(Dt||(Dt=u()([`
      width: calc(100% - 234px);
      margin-inline-end: 170px;
      margin-inline-start: 64px;
      overflow: hidden;
      font-size: 14px;
      border-top: 1px solid `,`;
      display: flex;
    `])),o),pageNav:t(Pt||(Pt=u()([`
      flex: 1;
      height: 72px;
      line-height: 72px;
      text-decoration: none;

      `,` {
        color: #999;
        font-size: `,`px;
        transition: all 0.3s;
      }

      .chinese {
        margin-inline-start: 4px;
      }
    `])),a,c),prevNav:t(Zt||(Zt=u()([`
      text-align: start;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .footer-nav-icon-after {
        display: none;
      }

      .footer-nav-icon-before {
        position: relative;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-end 0.3s;
        margin-inline-end: 1em;
        inset-inline-end: 0;
      }

      &:hover .footer-nav-icon-before {
        inset-inline-end: 0.2em;
      }
    `]))),nextNav:t(Ht||(Ht=u()([`
      text-align: end;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .footer-nav-icon-before {
        display: none;
      }

      .footer-nav-icon-after {
        position: relative;
        margin-bottom: 1px;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-start 0.3s;
        margin-inline-start: 1em;
        inset-inline-start: 0;
      }

      &:hover .footer-nav-icon-after {
        inset-inline-start: 0.2em;
      }
    `])))}}),Vo=function r(e){return Array.isArray(e)?e.reduce(function(t,o){if(!o)return t;if("children"in o&&o.children){var a;return t.concat((a=r(o.children))!==null&&a!==void 0?a:[])}return t.concat(o)},[]):null},Xo=function(e){var t=e.rtl,o=Go(),a=o.styles,c={className:"footer-nav-icon-before"},p={className:"footer-nav-icon-after"},h=t?(0,n.jsx)(re.Z,L()({},c)):(0,n.jsx)(Et.Z,L()({},c)),s=t?(0,n.jsx)(Et.Z,L()({},p)):(0,n.jsx)(re.Z,L()({},p)),x=Mt({before:h,after:s}),A=w()(x,2),I=A[0],b=A[1],v=(0,m.useMemo)(function(){var P=Vo(I);if(!P)return[null,null];var B=-1;return P.forEach(function(Z,y){Z&&Z.key===b&&(B=y)}),[P[B-1],P[B+1]]},[I,b]),T=w()(v,2),N=T[0],g=T[1];return(0,n.jsxs)("section",{className:a.prevNextNav,children:[N&&m.cloneElement(N.label,{className:nn()(a.pageNav,a.prevNav,N.className)}),g&&m.cloneElement(g.label,{className:nn()(a.pageNav,a.nextNav,g.className)})]})},Ko=Xo,Jo=i(524229),It=i(211646),Yo=i(294047),Ot=i(315816),Qo=function(e){var t=e.className,o=e.style;return(0,n.jsx)("svg",{className:t,style:o,xmlns:"http://www.w3.org/2000/svg",width:"36",height:"28",viewBox:"0 0 36 28",fill:"none",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z",fill:"currentColor"})})},Rt=Qo,Ft,$t,Wt,Ut,Gt,Vt,Xt,Ve="https://picx.zhimg.com/v2-3b2bca09c2771e7a82a81562e806be4d.jpg?source=d16d100b",qo=(0,z.kc)(function(r){var e=r.token,t=r.css;return{card:t(Ft||(Ft=u()([`
      width: 100%;
      margin: 40px 0;
      transition: all 0.2s;
      background-color: `,`;
    `])),e.colorFillQuaternary),bigTitle:t($t||($t=u()([`
      font-size: 16px;
      color: #121212;
      margin-bottom: 24px;
      font-weight: 600;
    `]))),cardBody:t(Wt||(Wt=u()([`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `]))),left:t(Ut||(Ut=u()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 200px;
        margin-right: 24px;
        overflow: hidden;
        border-radius: 8px;
      }
    `]))),title:t(Gt||(Gt=u()([`
      color: #444;
      font-size: 16px;
      font-weight: 600;
    `]))),subTitle:t(Vt||(Vt=u()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #646464;
      font-size: 14px;
      font-weight: 400;
      margin-top: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .logo {
        width: 24px;
        height: 24px;
        font-size: 24px;
        &.zhihu-logo {
          color: #056de8;
        }
        &.yuque-logo {
          color: #00b96b;
        }
        &.juejin-logo {
          color: #1e80ff;
        }
      }
      .arrowIcon {
        margin: 0 8px;
        color: #8a8f8d;
        font-size: 12px;
      }
      .zl-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        color: #646464;
      }
    `]))),btn:t(Xt||(Xt=u()([`
      display: flex;
      justify-content: center;
      align-items: center;
    `])))}}),_o={cn:{bigTitle:"\u6587\u7AE0\u88AB\u4EE5\u4E0B\u4E13\u680F\u6536\u5F55\uFF1A",zhiHu:"\u4E00\u4E2A UI \u8BBE\u8BA1\u4F53\u7CFB",yuQue:"Ant Design \u5B98\u65B9\u4E13\u680F",junjin:"Ant Design \u5F00\u6E90\u4E13\u680F",buttonText:"\u6211\u6709\u60F3\u6CD5\uFF0C\u53BB\u53C2\u4E0E\u8BA8\u8BBA"},en:{bigTitle:"Articles are included in the column:",zhiHu:"A UI design system",yuQue:"Ant Design official column",junjin:"Ant Design Open Source Column",buttonText:"Go to discuss"}},nr=function(e){var t=e.zhihuLink,o=e.yuqueLink,a=e.juejinLink,c=(0,E.Z)(_o),p=w()(c,1),h=p[0],s=qo(),x=s.styles,A=x.card,I=x.bigTitle,b=x.cardBody,v=x.left,T=x.title,N=x.subTitle,g=x.btn;return!t&&!o&&!a?null:(0,n.jsxs)(Yo.Z,{className:A,bordered:!1,children:[(0,n.jsx)("h3",{className:I,children:h.bigTitle}),t&&(0,n.jsxs)("div",{className:b,children:[(0,n.jsxs)("div",{className:v,children:[(0,n.jsx)("img",{src:Ve,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:T,children:"Ant Design"}),(0,n.jsxs)("div",{className:N,children:[(0,n.jsx)(An.Z,{className:"logo zhihu-logo"}),(0,n.jsx)(re.Z,{className:"arrowIcon"}),(0,n.jsx)(In.ZP,{target:"_blank",href:"https://www.zhihu.com/column/c_1564262000561106944",className:"zl-btn",type:"link",children:h.zhiHu})]})]})]}),(0,n.jsx)(In.ZP,{type:"primary",className:g,icon:(0,n.jsx)(An.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:t,children:h.buttonText})]}),o&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Ot.Z,{}),(0,n.jsxs)("div",{className:b,children:[(0,n.jsxs)("div",{className:v,children:[(0,n.jsx)("img",{src:Ve,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:T,children:"Ant Design"}),(0,n.jsxs)("div",{className:N,children:[(0,n.jsx)(It.Z,{className:"logo yuque-logo"}),(0,n.jsx)(re.Z,{className:"arrowIcon"}),(0,n.jsx)(In.ZP,{target:"_blank",href:"https://www.yuque.com/ant-design/ant-design",className:"zl-btn",type:"link",children:h.yuQue})]})]})]}),(0,n.jsx)(In.ZP,{type:"primary",className:g,icon:(0,n.jsx)(It.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:o,children:h.buttonText})]})]}),a&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Ot.Z,{}),(0,n.jsxs)("div",{className:b,children:[(0,n.jsxs)("div",{className:v,children:[(0,n.jsx)("img",{src:Ve,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:T,children:"Ant Design"}),(0,n.jsxs)("div",{className:N,children:[(0,n.jsx)(Rt,{className:"logo juejin-logo"}),(0,n.jsx)(re.Z,{className:"arrowIcon"}),(0,n.jsx)(In.ZP,{target:"_blank",href:"https://juejin.cn/column/7247354308258054200",className:"zl-btn",type:"link",children:h.junjin})]})]})]}),(0,n.jsx)(In.ZP,{type:"primary",className:g,icon:(0,n.jsx)(Rt,{style:{fontSize:16,width:16,height:16}}),ghost:!0,target:"_blank",href:a,children:h.buttonText})]})]})]})},er=nr,Kt,Jt,Yt,Qt,tr=(0,z.kc)(function(r){var e=r.token,t=r.css,o=e.antCls;return{contributorsList:t(Kt||(Kt=u()([`
      display: flex;
      flex-wrap: wrap;
      margin-top: 120px !important;
      clear: both;

      li {
        height: 24px;
      }

      li,
      `,"-avatar + ",`-avatar {
        transition: all `,`;
        margin-inline-end: -8px;
      }
      &:hover {
        li,
        `,`-avatar {
          margin-inline-end: 0;
        }
      }
    `])),o,o,e.motionDurationSlow,o),toc:t(Jt||(Jt=u()([`
      `,`-anchor {
        `,`-anchor-link-title {
          font-size: 12px;
        }
      }
    `])),o,o),tocWrapper:t(Yt||(Yt=u()([`
      position: absolute;
      top: 8px;
      inset-inline-end: 0;
      width: 160px;
      margin: 12px 0;
      padding: 8px 0;
      padding-inline: 4px 8px;
      backdrop-filter: blur(8px);
      border-radius: `,`px;
      box-sizing: border-box;

      .toc-debug {
        color: `,`;

        &:hover {
          color: `,`;
        }
      }

      > div {
        box-sizing: border-box;
        width: 100%;
        max-height: calc(100vh - 40px) !important;
        margin: 0 auto;
        overflow: auto;
        padding-inline: 4px;
      }

      @media only screen and (max-width: `,`px) {
        display: none;
      }
    `])),e.borderRadius,e.purple6,e.purple5,e.screenLG),articleWrapper:t(Qt||(Qt=u()([`
      padding: 0 170px 32px 64px;

      &.rtl {
        padding: 0 64px 144px 170px;
      }

      @media only screen and (max-width: `,`px) {
        &,
        &.rtl {
          padding: 0 48px;
        }
      }
    `])),e.screenLG)}}),or=function(e){var t=e.num,o=t===void 0?3:t;return(0,n.jsx)("li",{children:Array.from({length:o}).map(function(a,c){return(0,n.jsx)(Nt.Z.Avatar,{size:"small",active:!0,style:{marginLeft:c===0?0:-8}},c)})})},rr=function(e){var t=e.name,o=e.avatar,a=(0,m.useState)(!0),c=w()(a,2),p=c[0],h=c[1],s=(0,m.useState)(!1),x=w()(s,2),A=x[0],I=x[1];return(0,m.useLayoutEffect)(function(){var b=new Image;b.src=o,b.onload=function(){return h(!1)},b.onerror=function(){return I(!0)}},[]),A?null:p?(0,n.jsx)(Nt.Z.Avatar,{size:"small",active:!0}):(0,n.jsx)(Tt.C,{size:"small",src:o,alt:t,children:t})},ir=function(e){var t,o,a,c,p,h=e.children,s=(0,l.eL)(),x=(0,l.zh)(),A=(0,Rn.Z)(),I=A.pathname,b=A.hash,v=(0,l.YB)(),T=v.formatMessage,N=tr(),g=N.styles,P=(0,z.Fg)(),B=(0,m.useContext)(jn.Z),Z=B.direction,y=(0,Ho.Z)(!1),G=w()(y,2),q=G[0],tn=G[1],F=(0,m.useMemo)(function(){var j;return((j=s.toc)===null||j===void 0?void 0:j.filter(function(C){return C._debug_demo}).map(function(C){return C.id}))||[]},[s]),an=F.includes(b.slice(1));(0,m.useLayoutEffect)(function(){tn(an)},[]);var mn=(0,m.useMemo)(function(){return{showDebug:q,setShowDebug:tn}},[q,F]),f=(0,m.useMemo)(function(){return((x==null?void 0:x.toc)||s.toc).reduce(function(j,C){if(C.depth===2)j.push(L()({},C));else if(C.depth===3){var J=j[j.length-1];J&&(J.children=J.children||[],J.children.push(L()({},C)))}return j},[])},[x==null?void 0:x.toc,s.toc]),X=Z==="rtl",ln=(0,m.useMemo)(function(){var j=s.frontmatter.author;return j?typeof j=="string"?j.split(",").map(function(C){return{name:C,avatar:"https://github.com/".concat(C,".png")}}):Array.isArray(j)?j:[]:[]},[s.frontmatter.author]);return(0,n.jsx)(Jo.Z.Provider,{value:mn,children:(0,n.jsxs)(Pn.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,children:[(0,n.jsx)(Po.Z,{children:(0,n.jsx)("section",{className:g.tocWrapper,children:(0,n.jsx)(Zo.Z,{className:g.toc,affix:!1,targetOffset:P.marginXXL,showInkInFixed:!0,items:f.map(function(j){var C;return{href:"#".concat(j.id),title:j.title,key:j.id,children:(C=j.children)===null||C===void 0?void 0:C.filter(function(J){return q||!F.includes(J.id)}).map(function(J){return{key:J.id,href:"#".concat(J.id),title:(0,n.jsx)("span",{className:nn()(F.includes(J.id)&&"toc-debug"),children:J==null?void 0:J.title})}})}})})})}),(0,n.jsxs)("article",{className:nn()(g.articleWrapper,{rtl:X}),children:[(t=s.frontmatter)!==null&&t!==void 0&&t.title?(0,n.jsxs)(Ue.Z.Title,{style:{fontSize:30},children:[(o=s.frontmatter)===null||o===void 0?void 0:o.title,s.frontmatter.subtitle&&(0,n.jsx)("span",{style:{marginLeft:12},children:s.frontmatter.subtitle}),!I.startsWith("/components/overview")&&(0,n.jsx)(bt.Z,{title:(0,n.jsx)(l._H,{id:"app.content.edit-page"}),filename:s.frontmatter.filename})]}):null,s.frontmatter.date||s.frontmatter.author?(0,n.jsx)(Ue.Z.Paragraph,{children:(0,n.jsxs)(Bt.Z,{children:[s.frontmatter.date&&(0,n.jsxs)("span",{style:{opacity:.65},children:[(0,n.jsx)(Mo.Z,{})," ",gn()(s.frontmatter.date).format("YYYY-MM-DD")]}),ln.map(function(j){return(0,n.jsx)("a",{href:"https://github.com/".concat(j.name),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsxs)(Bt.Z,{size:3,children:[(0,n.jsx)(rr,{name:j.name,avatar:j.avatar}),(0,n.jsxs)("span",{style:{opacity:.65},children:["@",j.name]})]})},j.name)})]})}):null,!s.frontmatter.__autoDescription&&s.frontmatter.description,(0,n.jsx)("div",{style:{minHeight:"calc(100vh - 64px)"},children:h}),(((a=s.frontmatter)===null||a===void 0?void 0:a.zhihu_url)||((c=s.frontmatter)===null||c===void 0?void 0:c.yuque_url)||((p=s.frontmatter)===null||p===void 0?void 0:p.juejin_url))&&(0,n.jsx)(er,{zhihuLink:s.frontmatter.zhihu_url,yuqueLink:s.frontmatter.yuque_url,juejinLink:s.frontmatter.juejin_url}),s.frontmatter.filename&&(0,n.jsx)(Do.Z,{repo:"ant-design",owner:"ant-design",className:g.contributorsList,cache:!0,fileName:s.frontmatter.filename,renderItem:function(C,J){var ie;return!C||J?(0,n.jsx)(or,{}):(ie=C.username)!==null&&ie!==void 0&&ie.includes("github-actions")?null:(0,n.jsx)(it.Z,{mouseEnterDelay:.3,title:"".concat(T({id:"app.content.contributors"}),": ").concat(C.username),children:(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://github.com/".concat(C.username),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(Tt.C,{size:"small",src:C.url,alt:C.username,children:C.username})})})},C.username)}})]}),(0,n.jsx)(Ko,{rtl:X}),(0,n.jsx)(ee,{})]})})},ar=ir,lr=i(650010),qt,_t,sr=(0,z.kc)(function(r){var e=r.token,t=r.css,o=e.antCls,a=e.fontFamily,c=e.colorSplit;return{asideContainer:t(qt||(qt=u()([`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, `,`, sans-serif;

      &`,`-menu-inline {
        `,`-menu-submenu-title h4,
        > `,`-menu-item,
        `,`-menu-item a {
          overflow: hidden;
          font-size: 14px;
          text-overflow: ellipsis;
        }

        > `,"-menu-item-group > ",`-menu-item-group-title {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 13px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: `,`;
            content: '';
          }
        }

        > `,`-menu-item,
        > `,`-menu-submenu
        > `,`-menu-submenu-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item,
        &`,`-menu-inline
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item {
          padding-left: 40px !important;

          `,`-row-rtl & {
            padding-right: 40px !important;
            padding-left: 16px !important;
          }
        }

        // Nest Category > Type > Article
        &`,`-menu-inline {
          `,`-menu-item-group-title {
            margin-left: 4px;
            padding-left: 60px;

            `,`-row-rtl & {
              padding-right: 60px;
              padding-left: 16px;
            }
          }

          `,"-menu-item-group-list > ",`-menu-item {
            padding-left: 80px !important;

            `,`-row-rtl & {
              padding-right: 80px !important;
              padding-left: 16px !important;
            }
          }
        }

        `,`-menu-item-group:first-child {
          `,`-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }

      .chinese {
        margin-left: 6px;
        font-weight: normal;
        font-size: 12px;
        opacity: 0.67;
      }
    `])),a,o,o,o,o,o,o,c,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),mainMenu:t(_t||(_t=u()([`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: 0;
        width: 100%;
        height: 100%;
        max-height: 100vh;
        overflow: hidden;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `])))}}),cr=function(){var e=(0,l.tx)(),t=(0,m.useContext)(jn.Z),o=t.isMobile,a=t.theme,c=sr(),p=c.styles,h=Mt(),s=w()(h,2),x=s[0],A=s[1],I=a.includes("dark"),b=(0,z.Fg)(),v=b.colorBgContainer,T=(0,n.jsx)(_.ZP,{theme:{components:{Menu:{itemBg:v,darkItemBg:v}}},children:(0,n.jsx)(tt.Z,{items:x,inlineIndent:30,className:p.asideContainer,mode:"inline",theme:I?"dark":"light",selectedKeys:[A],defaultOpenKeys:e==null?void 0:e.map(function(N){var g=N.title;return g}).filter(function(N){return N})})});return o?(0,n.jsx)(lr.Z,{children:T},"Mobile-menu"):(0,n.jsx)(Pn.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:p.mainMenu,children:(0,n.jsx)("section",{className:"main-menu-inner",children:T})})},dr=cr,no,pr=(0,z.kc)(function(r){var e=r.css;return{main:e(no||(no=u()([`
    display: flex;
    margin-top: 40px;
  `])))}}),ur=function(e){var t=e.children,o=pr(),a=o.styles;return(0,n.jsxs)("main",{className:a.main,children:[(0,n.jsx)(vt,{}),(0,n.jsx)(dr,{}),(0,n.jsx)(ar,{children:t})]})},mr=ur,hr={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}},gr=function(){var e=(0,l.pC)(),t=(0,Rn.Z)(),o=t.pathname,a=t.search,c=t.hash,p=(0,E.Z)(hr),h=w()(p,2),s=h[0],x=h[1],A=(0,m.useRef)(null),I=(0,m.useContext)(jn.Z),b=I.direction,v=(0,l.WF)(),T=v.loading;(0,m.useLayoutEffect)(function(){x==="cn"?gn().locale("zh-cn"):gn().locale("en")},[]),(0,m.useEffect)(function(){var g=document.getElementById("nprogress-style");g&&(A.current=setTimeout(function(){var P;(P=g.parentNode)===null||P===void 0||P.removeChild(g)},0))},[]),(0,m.useEffect)(function(){var g,P=c.replace("#","");P&&((g=document.getElementById(decodeURIComponent(P)))===null||g===void 0||g.scrollIntoView())},[T,c]),m.useEffect(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",o+a),typeof window._hmt!="undefined"&&window._hmt.push(["_trackPageview",o+a])},[t]);var N=(0,m.useMemo)(function(){return["","/"].some(function(g){return g===o})||["/index"].some(function(g){return o.startsWith(g)})?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{minHeight:"100vh"},children:e}),(0,n.jsx)(ee,{})]}):o.startsWith("/docs/resource")?(0,n.jsx)(Eo,{children:e}):o.startsWith("/theme-editor")?e:(0,n.jsx)(mr,{children:e})},[o,e]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.ql,{encodeSpecialCharacters:!1,children:[(0,n.jsx)("html",{lang:x==="cn"?"zh-CN":x,"data-direction":b,className:nn()({rtl:b==="rtl"})}),(0,n.jsx)("title",{children:s==null?void 0:s.title}),(0,n.jsx)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,n.jsx)("meta",{name:"description",content:s.description}),(0,n.jsx)("meta",{property:"og:title",content:s==null?void 0:s.title}),(0,n.jsx)("meta",{property:"og:description",content:s.description}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,n.jsxs)(_.ZP,{direction:b,locale:x==="cn"?O.Z:void 0,children:[(0,n.jsx)($n,{}),(0,n.jsx)(yo,{}),N]})]})},xr=gr},605071:function(je,Sn,i){i.d(Sn,{Z:function(){return Te}});var hn=i(97857),w=i.n(hn),_=i(9783),O=i.n(_),Xn=i(719632),nn=i.n(Xn),On=i(805574),gn=i.n(On),le=i(294184),l=i.n(le),m=i(318545),E=i(667294),Rn=i(517423),ke=i(982673),u=i(658192),S=i(252901),z=i(73287),n=E.createContext(void 0),Kn=n,xn=i(785893),Ce=function(d){var k=d.href,M=d.title,H=d.prefixCls,$=d.children,on=d.className,rn=d.target,Y=d.replace,sn=E.useContext(Kn),Q=sn||{},yn=Q.registerLink,Mn=Q.unregisterLink,zn=Q.scrollTo,wn=Q.onClick,Fn=Q.activeLink,cn=Q.direction;E.useEffect(function(){return yn==null||yn(k),function(){Mn==null||Mn(k)}},[k]);var qn=function(Nn){Y&&(Nn.preventDefault(),window.location.replace(k)),wn==null||wn(Nn,{title:M,href:k}),zn==null||zn(k)},fn=E.useContext(z.E_),$n=fn.getPrefixCls,vn=$n("anchor",H),Ln=Fn===k,dn=l()("".concat(vn,"-link"),on,O()({},"".concat(vn,"-link-active"),Ln)),An=l()("".concat(vn,"-link-title"),O()({},"".concat(vn,"-link-title-active"),Ln));return(0,xn.jsxs)("div",{className:dn,children:[(0,xn.jsx)("a",{className:An,href:k,title:typeof M=="string"?M:"",target:rn,onClick:qn,children:M}),cn!=="horizontal"?$:null]})},se=Ce,Jn=i(548073),Se=i(141035),ce=i(986943),ze=function(d){var k,M,H=d.componentCls,$=d.holderOffsetBlock,on=d.motionDurationSlow,rn=d.lineWidthBold,Y=d.colorPrimary,sn=d.lineType,Q=d.colorSplit;return O()({},"".concat(H,"-wrapper"),(M={marginBlockStart:-$,paddingBlockStart:$},O()(M,H,w()(w()({},(0,Jn.Wf)(d)),{},O()({position:"relative",paddingInlineStart:rn},"".concat(H,"-link"),(k={paddingBlock:d.linkPaddingBlock,paddingInline:"".concat(d.linkPaddingInlineStart,"px 0"),"&-title":w()(w()({},Jn.vS),{},{position:"relative",display:"block",marginBlockEnd:d.anchorTitleBlock,color:d.colorText,transition:"all ".concat(d.motionDurationSlow),"&:only-child":{marginBlockEnd:0}})},O()(k,"&-active > ".concat(H,"-link-title"),{color:d.colorPrimary}),O()(k,"".concat(H,"-link"),{paddingBlock:d.anchorPaddingBlockSecondary}),k)))),O()(M,"&:not(".concat(H,"-wrapper-horizontal)"),O()({},H,O()({"&::before":{position:"absolute",insetInlineStart:0,top:0,height:"100%",borderInlineStart:"".concat(rn,"px ").concat(sn," ").concat(Q),content:'" "'}},"".concat(H,"-ink"),O()({position:"absolute",insetInlineStart:0,display:"none",transform:"translateY(-50%)",transition:"top ".concat(on," ease-in-out"),width:rn,backgroundColor:Y},"&".concat(H,"-ink-visible"),{display:"inline-block"})))),O()(M,"".concat(H,"-fixed ").concat(H,"-ink ").concat(H,"-ink"),{display:"none"}),M))},de=function(d){var k,M=d.componentCls,H=d.motionDurationSlow,$=d.lineWidthBold,on=d.colorPrimary;return O()({},"".concat(M,"-wrapper-horizontal"),O()({position:"relative","&::before":{position:"absolute",left:{_skip_check_:!0,value:0},right:{_skip_check_:!0,value:0},bottom:0,borderBottom:"1px ".concat(d.lineType," ").concat(d.colorSplit),content:'" "'}},M,(k={overflowX:"scroll",position:"relative",display:"flex",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},O()(k,"".concat(M,"-link:first-of-type"),{paddingInline:0}),O()(k,"".concat(M,"-ink"),{position:"absolute",bottom:0,transition:"left ".concat(H," ease-in-out, width ").concat(H," ease-in-out"),height:$,backgroundColor:on}),k)))},Le=(0,Se.Z)("Anchor",function(V){var d=V.fontSize,k=V.fontSizeLG,M=V.paddingXXS,H=(0,ce.TS)(V,{holderOffsetBlock:M,anchorPaddingBlockSecondary:M/2,anchorTitleBlock:d/14*3,anchorBallSize:k/2});return[ze(H),de(H)]},function(V){return{linkPaddingBlock:V.paddingXXS,linkPaddingInlineStart:V.padding}});function En(){return window}function Yn(V,d){if(!V.getClientRects().length)return 0;var k=V.getBoundingClientRect();return k.width||k.height?d===window?(d=V.ownerDocument.documentElement,k.top-d.clientTop):k.top-d.getBoundingClientRect().top:k.top}var pe=/#([\S ]+)$/,Ae=function(d){var k,M,H=d.rootClassName,$=d.anchorPrefixCls,on=d.className,rn=d.style,Y=d.offsetTop,sn=d.affix,Q=sn===void 0?!0:sn,yn=d.showInkInFixed,Mn=yn===void 0?!1:yn,zn=d.children,wn=d.items,Fn=d.direction,cn=Fn===void 0?"vertical":Fn,qn=d.bounds,fn=d.targetOffset,$n=d.onClick,vn=d.onChange,Ln=d.getContainer,dn=d.getCurrentAnchor,An=d.replace,me=E.useState([]),Nn=gn()(me,2),Wn=Nn[0],Un=Nn[1],Be=E.useState(null),he=gn()(Be,2),Dn=he[0],Ee=he[1],_n=E.useRef(Dn),ge=E.useRef(null),jn=E.useRef(null),Gn=E.useRef(!1),Tn=E.useContext(z.E_),Me=Tn.direction,De=Tn.getTargetContainer,kn=Tn.anchor,Bn=(k=Ln!=null?Ln:De)!==null&&k!==void 0?k:En,ne=JSON.stringify(Wn),Pe=(0,m.default)(function(D){Wn.includes(D)||Un(function(W){return[].concat(nn()(W),[D])})}),Ze=(0,m.default)(function(D){Wn.includes(D)&&Un(function(W){return W.filter(function(U){return U!==D})})}),ee=function(){var W,U=(W=ge.current)===null||W===void 0?void 0:W.querySelector(".".concat($,"-link-title-active"));if(U&&jn.current){var pn=jn.current.style,en=cn==="horizontal";pn.top=en?"":"".concat(U.offsetTop+U.clientHeight/2,"px"),pn.height=en?"":"".concat(U.clientHeight,"px"),pn.left=en?"".concat(U.offsetLeft,"px"):"",pn.width=en?"".concat(U.clientWidth,"px"):"",en&&(0,Rn.Z)(U,{scrollMode:"if-needed",block:"nearest"})}},He=function(W){var U=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,pn=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5,en=[],K=Bn();if(W.forEach(function(un){var Hn=pe.exec(un==null?void 0:un.toString());if(Hn){var fe=document.getElementById(Hn[1]);if(fe){var ve=Yn(fe,K);ve<U+pn&&en.push({link:un,top:ve})}}}),en.length){var Zn=en.reduce(function(un,Hn){return Hn.top>un.top?Hn:un});return Zn.link}return""},L=(0,m.default)(function(D){if(_n.current!==D){var W=typeof dn=="function"?dn(D):D;Ee(W),_n.current=W,vn==null||vn(D)}}),te=E.useCallback(function(){if(!Gn.current&&typeof dn!="function"){var D=He(Wn,fn!==void 0?fn:Y||0,qn);L(D)}},[ne,fn,Y]),oe=E.useCallback(function(D){L(D);var W=pe.exec(D);if(W){var U=document.getElementById(W[1]);if(U){var pn=Bn(),en=(0,ke.Z)(pn,!0),K=Yn(U,pn),Zn=en+K;Zn-=fn!==void 0?fn:Y||0,Gn.current=!0,(0,u.Z)(Zn,{getContainer:Bn,callback:function(){Gn.current=!1}})}}},[fn,Y]),xe=l()(H,"".concat($,"-wrapper"),(M={},O()(M,"".concat($,"-wrapper-horizontal"),cn==="horizontal"),O()(M,"".concat($,"-rtl"),Me==="rtl"),M),on,kn==null?void 0:kn.className),Ie=l()($,O()({},"".concat($,"-fixed"),!Q&&!Mn)),Oe=l()("".concat($,"-ink"),O()({},"".concat($,"-ink-visible"),Dn)),Re=w()(w()({maxHeight:Y?"calc(100vh - ".concat(Y,"px)"):"100vh"},kn==null?void 0:kn.style),rn),Fe=function D(W){return Array.isArray(W)?W.map(function(U){return(0,E.createElement)(se,w()(w()({replace:An},U),{},{key:U.key}),cn==="vertical"&&D(U.children))}):null},Pn=(0,xn.jsx)("div",{ref:ge,className:xe,style:Re,children:(0,xn.jsxs)("div",{className:Ie,children:[(0,xn.jsx)("span",{className:Oe,ref:jn}),"items"in d?Fe(wn):zn]})});E.useEffect(function(){var D=Bn();return te(),D==null||D.addEventListener("scroll",te),function(){D==null||D.removeEventListener("scroll",te)}},[ne]),E.useEffect(function(){typeof dn=="function"&&L(dn(_n.current||""))},[dn]),E.useEffect(function(){ee()},[cn,dn,ne,Dn]);var $e=E.useMemo(function(){return{registerLink:Pe,unregisterLink:Ze,scrollTo:oe,activeLink:Dn,onClick:$n,direction:cn}},[Dn,$n,oe,cn]);return(0,xn.jsx)(Kn.Provider,{value:$e,children:Q?(0,xn.jsx)(S.Z,{offsetTop:Y,target:Bn,children:Pn}):Pn})},ue=function(d){var k=d.prefixCls,M=d.rootClassName,H=E.useContext(z.E_),$=H.getPrefixCls,on=$("anchor",k),rn=Le(on),Y=gn()(rn,2),sn=Y[0],Q=Y[1];return sn((0,xn.jsx)(Ae,w()(w()({},d),{},{rootClassName:l()(Q,M),anchorPrefixCls:on})))},Ne=ue,Qn=Ne;Qn.Link=se;var Te=Qn},377376:function(je,Sn,i){var hn=i(83996),w=i(296708),_=hn.ZP;_.Header=hn.h4,_.Footer=hn.$_,_.Content=hn.VY,_.Sider=w.Z,Sn.Z=_},715778:function(je,Sn,i){i.d(Sn,{Z:function(){return E}});var hn=i(174219),w=i(97857),_=i.n(w),O=i(585369),Xn={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},nn=Xn,On={lang:_()({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},O.Z),timePickerLocale:_()({},nn)};On.lang.ok="\u786E\u5B9A";var gn=On,le=gn,l="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",m={locale:"zh-cn",Pagination:hn.Z,DatePicker:gn,TimePicker:nn,Calendar:le,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},PageHeader:{back:"\u8FD4\u56DE"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:l,method:l,array:l,object:l,number:l,date:l,boolean:l,integer:l,float:l,regexp:l,email:l,url:l,hex:l},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0"},ColorPicker:{presetEmpty:"\u6682\u65E0"}},E=m}}]);
