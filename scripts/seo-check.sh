#!/bin/bash

# Google SEO 提交前检查脚本
# 用于验证网站是否准备好提交到 Google

echo "🔍 Ace-Step 1.5 - Google SEO 提交前检查"
echo "=========================================="
echo ""

# 颜色代码
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 计数器
PASS=0
FAIL=0
WARN=0

# 检查函数
check_pass() {
    echo -e "${GREEN}✓${NC} $1"
    ((PASS++))
}

check_fail() {
    echo -e "${RED}✗${NC} $1"
    ((FAIL++))
}

check_warn() {
    echo -e "${YELLOW}⚠${NC} $1"
    ((WARN++))
}

# 1. 检查网站是否在线
echo "📡 检查网站在线状态..."
if curl -s -o /dev/null -w "%{http_code}" https://ace-step15.top | grep -q "200"; then
    check_pass "网站在线 (200 OK)"
else
    check_fail "网站无法访问"
fi
echo ""

# 2. 检查 sitemap.xml
echo "🗺️  检查 Sitemap..."
if curl -s https://ace-step15.top/sitemap.xml | grep -q "urlset"; then
    check_pass "sitemap.xml 可访问"
    URL_COUNT=$(curl -s https://ace-step15.top/sitemap.xml | grep -o "<url>" | wc -l)
    echo "  - 包含 $URL_COUNT 个 URL"
else
    check_fail "sitemap.xml 无法访问或格式错误"
fi
echo ""

# 3. 检查 robots.txt
echo "🤖 检查 Robots.txt..."
if curl -s https://ace-step15.top/robots.txt | grep -q "User-agent"; then
    check_pass "robots.txt 存在"
    if curl -s https://ace-step15.top/robots.txt | grep -q "Allow: /"; then
        check_pass "允许爬虫访问"
    else
        check_warn "可能阻止了某些爬虫"
    fi
else
    check_fail "robots.txt 不存在"
fi
echo ""

# 4. 检查关键文件
echo "📁 检查关键文件..."

# manifest.json
if curl -s https://ace-step15.top/manifest.json | grep -q "name"; then
    check_pass "manifest.json 存在"
else
    check_fail "manifest.json 不存在"
fi

# icon.svg
if curl -s -o /dev/null -w "%{http_code}" https://ace-step15.top/icon.svg | grep -q "200"; then
    check_pass "icon.svg 存在"
else
    check_fail "icon.svg 不存在"
fi

# PNG icons
if curl -s -o /dev/null -w "%{http_code}" https://ace-step15.top/icon-192.png | grep -q "200"; then
    check_pass "icon-192.png 存在"
else
    check_warn "icon-192.png 不存在 (需要创建)"
fi

if curl -s -o /dev/null -w "%{http_code}" https://ace-step15.top/icon-512.png | grep -q "200"; then
    check_pass "icon-512.png 存在"
else
    check_warn "icon-512.png 不存在 (需要创建)"
fi
echo ""

# 5. 检查 Meta 标签
echo "🏷️  检查 Meta 标签..."
HTML=$(curl -s https://ace-step15.top)

# Title
if echo "$HTML" | grep -q "<title>"; then
    TITLE=$(echo "$HTML" | grep -o "<title>.*</title>" | sed 's/<[^>]*>//g')
    check_pass "Title 标签: $TITLE"
else
    check_fail "缺少 Title 标签"
fi

# Meta Description
if echo "$HTML" | grep -q "meta name=\"description\""; then
    check_pass "Meta Description 存在"
else
    check_fail "缺少 Meta Description"
fi

# Open Graph
if echo "$HTML" | grep -q "og:title"; then
    check_pass "Open Graph 标签存在"
else
    check_fail "缺少 Open Graph 标签"
fi

# Twitter Card
if echo "$HTML" | grep -q "twitter:card"; then
    check_pass "Twitter Card 标签存在"
else
    check_fail "缺少 Twitter Card 标签"
fi
echo ""

# 6. 检查结构化数据
echo "📊 检查结构化数据..."
if echo "$HTML" | grep -q "application/ld+json"; then
    check_pass "JSON-LD 结构化数据存在"
    SCHEMA_COUNT=$(echo "$HTML" | grep -o "application/ld+json" | wc -l)
    echo "  - 发现 $SCHEMA_COUNT 个 schema"
else
    check_warn "未找到 JSON-LD 结构化数据"
fi
echo ""

# 7. 检查 HTTPS
echo "🔒 检查安全性..."
if curl -s -I https://ace-step15.top | grep -q "HTTP/2"; then
    check_pass "使用 HTTPS 和 HTTP/2"
else
    check_warn "未使用 HTTP/2"
fi
echo ""

# 8. 检查移动端友好性
echo "📱 检查移动端优化..."
if echo "$HTML" | grep -q "viewport"; then
    check_pass "Viewport meta 标签存在"
else
    check_fail "缺少 Viewport 标签"
fi
echo ""

# 9. 性能检查
echo "⚡ 检查性能..."
RESPONSE_TIME=$(curl -o /dev/null -s -w '%{time_total}\n' https://ace-step15.top)
if (( $(echo "$RESPONSE_TIME < 3.0" | bc -l) )); then
    check_pass "响应时间: ${RESPONSE_TIME}s (良好)"
elif (( $(echo "$RESPONSE_TIME < 5.0" | bc -l) )); then
    check_warn "响应时间: ${RESPONSE_TIME}s (一般)"
else
    check_fail "响应时间: ${RESPONSE_TIME}s (需要优化)"
fi
echo ""

# 10. 检查页面内容
echo "📄 检查页面内容..."
WORD_COUNT=$(echo "$HTML" | sed 's/<[^>]*>//g' | wc -w)
if [ $WORD_COUNT -gt 300 ]; then
    check_pass "页面内容丰富 ($WORD_COUNT 词)"
else
    check_warn "页面内容较少 ($WORD_COUNT 词)"
fi
echo ""

# 总结
echo "=========================================="
echo "📊 检查结果总结"
echo "=========================================="
echo -e "${GREEN}通过: $PASS${NC}"
echo -e "${RED}失败: $FAIL${NC}"
echo -e "${YELLOW}警告: $WARN${NC}"
echo ""

# 建议
if [ $FAIL -gt 0 ]; then
    echo "❌ 发现 $FAIL 个关键问题，建议修复后再提交到 Google"
    echo ""
    echo "常见修复方法:"
    echo "1. 确保网站已部署到生产环境"
    echo "2. 检查 DNS 配置是否正确"
    echo "3. 确认所有文件已正确上传"
    exit 1
elif [ $WARN -gt 0 ]; then
    echo "⚠️  发现 $WARN 个警告，建议优化以获得更好的 SEO 效果"
    echo ""
    echo "优化建议:"
    echo "1. 创建缺失的 PNG 图标文件"
    echo "2. 添加 OG 和 Twitter 图片"
    echo "3. 增加页面内容深度"
else
    echo "✅ 所有检查通过！网站已准备好提交到 Google"
    echo ""
    echo "下一步操作:"
    echo "1. 访问 Google Search Console: https://search.google.com/search-console"
    echo "2. 添加并验证网站"
    echo "3. 提交 sitemap: sitemap.xml"
    echo "4. 等待 Google 索引 (通常需要 1-2 周)"
fi
echo ""

echo "📚 查看完整指南: GOOGLE_SEO_CHECKLIST.md"
echo ""

exit 0
