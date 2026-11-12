# colinchenxx-ai 的个人网站

面向 GitHub Pages 的中英文个人主页，默认英文，右上角切换中文。无需安装依赖、购买域名或服务器。

首页包含随滚动渐隐、上移的整屏开场，点击向下箭头也可直接进入正文；支持鼠标、触屏和键盘。系统开启「减少动态效果」时，自动取消运动并缩短开场。

## 修改内容

只需要编辑 `content.js` 中的文字。`en` 内填写英文，`zh` 内填写中文；两种语言需分别填写。所有 `[To add]` 和【待填写】均为占位内容，请在正式分享前替换为你自己的资料。邮箱与 GitHub 链接位于最外层，为两种语言共用。

首次访问默认英文；访客主动切换后，会在当前浏览器记住选择。语言按钮不会改变滚动位置。开屏文字位于 `site.js` 的 `translations.en` / `translations.zh` 中，可编辑 `openingOne`、`openingTwo`、`openingThree` 和 `openingCaption`。

- `name`：姓名；`headline`：一句话介绍；`about`：个人简介。
- `skills`：技能或兴趣列表。
- `education`：教育背景；`experience`：工作经历。
- `projects`：项目作品。`url` 留空时不显示项目链接。
- `contactNote`：联系说明；`email`：公开邮箱，留空不显示。
- 复制数组里的 `{ ... }` 可以增加条目，条目之间用英文逗号分隔。
- 将教育、工作或项目数组设为 `[]` 时，该栏目和导航会自动隐藏。
- 文字放在英文双引号内；文字中的英文双引号需写成 `\"`，换行用 `\n`。

## 首次发布

1. 登录 GitHub，以 `colinchenxx-ai` 为所有者创建一个 **Public** 仓库，名称必须是 **colinchenxx-ai.github.io**。
2. 将本目录内的 `index.html`、`styles.css`、`content.js`、`site.js` 上传到仓库根目录；也建议添加空文件 `.nojekyll` 和本说明。不要将整个外层文件夹作为一层子目录上传，也不要上传 ZIP 本身。
3. 打开仓库 **Settings → Pages**。
4. 在 **Build and deployment → Source** 选择 **Deploy from a branch**。
5. 选择 **main** 分支、**/(root)** 文件夹，点击 **Save**。
6. 等待 GitHub 部署完成，在 Pages 设置页点击 **Visit site**。

部署成功后的地址为 https://colinchenxx-ai.github.io/ 。本地文件生成不代表已经发布。

官方说明：https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## 以后如何更新

在 GitHub 仓库点击 `content.js` → 编辑（铅笔图标）→ 修改文字 → **Commit changes**。GitHub Pages 会重新发布。内容在公开仓库中，请只填愿意公开的信息。

## 本地预览

直接双击 `index.html` 即可预览，不需要启动服务。样式和脚本全部使用相对路径，没有第三方字体、分析服务或外部代码依赖。
