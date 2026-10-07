# 你需要依次完成的事项

## 1. 钱包和个人信息

- 准备电脑 EVM 钱包或钱包内置浏览器。
- 只提供公开钱包地址，勿发送私钥或助记词。
- 准备申请人姓名、角色（例如开发者）、Telegram 或微信账号、队名和成员。

## 2. 测试网

在 Demo 选择 BOT 测试网 968，点击连接钱包并确认添加/切换网络。
RPC：https://rpc.bohr.life
浏览器：https://scan.bohr.life
测试币：https://faucet.botchain.ai/zh/basic
Faucet 若失败，联系现场 BOT Chain 技术联系人提供测试币。
展开页面下方“首次部署与申请 Gas”，部署合约并在钱包签名。成功后存证一次，再核验原文和修改后的文本。
导出测试网证据，保留合约链接及交易链接。

## 3. 申请主网 Gas

申请表：https://forms.gle/7WJNKfcyJLQ4vujt7
项目名称：AgentProof
Demo URL：使用本次提供的在线 Demo。
测试网合约或交易链接：使用上一步生成的真实链接。
收款钱包：刚才使用的钱包公开地址。
姓名/角色、Telegram/Wechat：填写参赛者本人信息。
每个项目只提交一次。表单说明每个符合要求的项目可申请 1 BOT。

## 4. 主网

Gas 到账后选择 BOT 主网 677，RPC https://rpc.botchain.ai，浏览器 https://scan.botchain.ai。
重新部署并执行一次存证。导出 mainnet 证据。测试网合约不能直接当作主网合约。

## 5. GitHub 与提交

下载源码压缩包，解压后将源码上传到自己的 GitHub 仓库。勿上传钱包秘密。
项目介绍：AgentProof 为 AI 报告和 Agent 输出提供内容完整性存证。原文在浏览器本地生成 SHA-256 哈希，BOT Chain 保存提交地址与时间。用户可核验原文或检测篡改。当前版本不调用模型、不证明报告事实正确。
本次新增：整个前端、Solidity 合约、证据导出和本地 EVM 测试。
提交：项目介绍、可交互 Demo、GitHub、主网合约/应用地址、主网交易/区块浏览器链接、PPT 与演示材料。
最终提交入口请向选手群确认，Gas 表单不是最终作品提交入口。

## 6. 三分钟演示

0:00–0:30 说明 AI 报告交接时需要验证版本是否变化。
0:30–1:30 展示报告生成哈希、钱包存证和交易确认。
1:30–2:15 用原文验证成功，修改一个字后查询失败。
2:15–2:45 展示 BOT 主网合约及交易证据。
2:45–3:00 说明存证的边界和未来 Agent 自动提交接口。

规则来源：https://tokenark.feishu.cn/docx/Vn3hdD7s6okrftx9583cYgganMg
