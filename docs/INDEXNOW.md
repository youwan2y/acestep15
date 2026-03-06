# IndexNow 集成说明

## 概述

本项目已成功集成 [IndexNow](https://www.indexnow.org/) 协议,可以即时通知搜索引擎网站内容的更新。

## 已完成配置

### 1. API Key 验证文件
- 文件位置: `public/3b57909572374345e27c74b08c224ccb.txt`
- API Key: `3b57909572374345e27c74b08c224ccb`

### 2. 提交脚本
- 文件位置: `scripts/submit-to-indexnow.mjs`
- NPM 命令: `npm run submit:indexnow`

### 3. API 路由
- 路由地址: `/api/indexnow`
- 支持方法: POST (推荐), GET (测试用)

## 使用方法

### 方法一: 使用 NPM 脚本 (推荐)

```bash
npm run submit:indexnow
```

这将自动提交网站的所有 URL 到 IndexNow。

### 方法二: 使用 API 路由

#### POST 请求 (需要认证)
```bash
curl -X POST https://ace-step15.top/api/indexnow \
  -H "Authorization: Bearer 3b57909572374345e27c74b08c224ccb" \
  -H "Content-Type: application/json"
```

#### GET 请求 (仅用于测试)
```bash
curl https://ace-step15.top/api/indexnow?test=true
```

## 支持的搜索引擎

IndexNow 协议被以下搜索引擎支持:
- ✅ Bing (Microsoft)
- ✅ Yandex
- ✅ Seznam.cz
- ✅ Naver
- ✅ Yep
- ✅ DuckDuckGo (通过 Bing)
- ❌ Google (使用 Google Search Console)
- ❌ Baidu (有自己的提交系统)

## 提交的 URL 列表

当前配置会自动提交以下 URL:
1. https://ace-step15.top (首页)
2. https://ace-step15.top/free (免费页面)
3. https://ace-step15.top/tutorial/text-to-music (教程页面)
4. https://ace-step15.top/#features (功能区块)
5. https://ace-step15.top/#examples (案例区块)
6. https://ace-step15.top/#pricing (定价区块)
7. https://ace-step15.top/#faq (常见问题区块)

## 何时提交

建议在以下情况下运行 IndexNow 提交:
- ✅ 发布新页面时
- ✅ 更新重要内容时
- ✅ 修复重大错误时
- ✅ 网站重新部署后

## 注意事项

1. **不要过度提交**: IndexNow 允许每天最多提交 10,000 个 URL,但请不要频繁提交相同的内容
2. **202 状态码**: 收到 202 状态码表示请求已接受,搜索引擎会异步处理
3. **不保证索引**: 提交 URL 不保证一定会被索引,搜索引擎仍会评估内容质量
4. **Google 索引**: 对于 Google,请继续使用 [Google Search Console](https://search.google.com/search-console)

## 验证配置

### 验证 API Key 文件
访问: https://ace-step15.top/3b57909572374345e27c74b08c224ccb.txt

应该显示: `3b57909572374345e27c74b08c224ccb`

### 验证 Sitemap
访问: https://ace-step15.top/sitemap.xml

## 监控和调试

### Bing Webmaster Tools
1. 访问 [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. 添加你的网站
3. 查看 IndexNow 提交历史和索引状态

### Yandex Webmaster
1. 访问 [Yandex Webmaster](https://webmaster.yandex.com)
2. 添加你的网站
3. 监控索引状态

## 相关链接

- [IndexNow 官网](https://www.indexnow.org/)
- [IndexNow 文档](https://www.indexnow.org/documentation)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [Yandex Webmaster](https://webmaster.yandex.com)

## 故障排查

### 问题: 提交失败
**解决方案**:
1. 检查 API Key 文件是否可访问
2. 验证 URL 格式是否正确
3. 确认服务器可以访问外部 API

### 问题: 返回 403 错误
**解决方案**:
1. 检查 API Key 是否正确
2. 确认 API Key 文件内容匹配

### 问题: 页面未被索引
**解决方案**:
1. 等待几天让搜索引擎处理
2. 检查页面质量是否符合搜索引擎标准
3. 使用 Webmaster Tools 查看具体问题
