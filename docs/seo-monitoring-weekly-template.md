# SEO 每周监测短报模板

本模板用于每周固定检查 `taxadeimportacao.com` 的 SEO 进度。核心目标不是每天改页面，而是确认 Google 是否发现、抓取、收录并开始给页面展示机会。

## 1. Google Search Console

检查周期：每周 1 次，建议周一或周二中午。

需要记录：

| 指标 | 本周数字 | 上周数字 | 判断 |
| --- | --- | --- | --- |
| Sitemap 状态 |  |  | 成功 / 有错误 |
| Sitemap 已发现 URL |  |  | 目标：182 |
| 已编入索引页面 |  |  | 越多越好 |
| 已抓取但未编入索引 |  |  | 观察是否下降 |
| 已发现但未抓取 |  |  | 新站早期常见 |
| 自然点击 |  |  | 看趋势 |
| 自然展示 |  |  | 看趋势 |
| 平均 CTR |  |  | 低于 1% 要看标题 |
| 平均排名 |  |  | 新站初期波动正常 |

优先观察页面：

- `/`
- `/guias/regras-importacao`
- `/guias/lojas-internacionais`
- `/guias/icms-por-estado`
- `/imposto-aliexpress-brasil`
- `/imposto-shein-brasil`
- `/imposto-shopee-brasil`
- `/imposto-temu-brasil`
- `/imposto-amazon-internacional-brasil`
- `/icms-importacao-sao-paulo`
- `/icms-importacao-rio-de-janeiro`
- `/icms-importacao-minas-gerais`
- `/icms-importacao-parana`
- `/icms-importacao-santa-catarina`

## 2. 页面行为指标

如果 GA4 已接入，重点看这些事件：

| 事件 | 含义 | 判断 |
| --- | --- | --- |
| `calculator_started` | 用户开始填写计算器 | 首页吸引力 |
| `calculator_completed` | 用户完成一次计算 | 核心功能完成率 |
| `result_copied` | 用户复制结果 | 分享/保存意图 |
| `result_shared` | 用户分享文字或图片 | 传播潜力 |

建议组合指标：

| 指标 | 计算方式 | 目标 |
| --- | --- | --- |
| 计算器开始率 | `calculator_started / 首页访问` | 越高越好 |
| 计算完成率 | `calculator_completed / calculator_started` | 初期目标 30%+ |
| 分享率 | `result_shared / calculator_completed` | 初期目标 3%-8% |
| 内容页到首页点击 | 内容页访问后进入 `/` | 判断内容是否导流 |

## 3. 本周结论

填写格式：

- 本周 Google 是否继续发现页面：
- 已编入索引页面是否增加：
- 哪些页面开始有展示：
- 哪些页面 CTR 低，需要改标题或描述：
- 哪些页面有展示但没有点击：
- 哪些页面有点击，值得继续加厚：

## 4. 下周动作

只选 1-3 件最重要的事：

- 继续等待 Google 抓取和收录。
- 对有展示但 CTR 低的页面改标题和描述。
- 对有展示但排名低的页面补内容、例子和 FAQ。
- 对能带来计算器使用的页面增加内部链接和 CTA。
- 如果新增或大改页面，去 GSC 请求索引。
