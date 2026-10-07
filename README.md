# AgentProof

在线 Demo：https://agentproof-aliar.aliar202517.chatgpt.site

[线上审核提交文案与评审核验流程](SUBMISSION.md) · [已确认的测试网证据](dist/agentproof-testnet-evidence.json)

测试网合约：`0x0556476064e9532DCC1C66eEbe1Cc24384d46878`。部署与存证均已确认成功，原文查询匹配、追加一个字符查询不匹配。主网部署、存证和原文／改字核验也已完成，见下方主网证据。

AI 输出内容存证与核验工具。用户粘贴报告，在浏览器本地生成 SHA-256 摘要，将摘要通过钱包签名提交到 BOT Chain。任何人可用报告原文、提交者地址及合约地址查询匹配记录。

## 运行

Node.js 20+。执行 `npm ci`、`npm run build`。使用任意静态服务器托管 `dist`，例如 `python -m http.server 8000 --directory dist`，然后打开 http://localhost:8000。HTTPS 或 localhost 用于钱包接入。执行 `npm test` 验证本地 EVM 上的合约行为。

## 网络

| 网络 | Chain ID | RPC | 浏览器 |
| --- | --- | --- | --- |
| BOT 测试网 | 968 | https://rpc.bohr.life | https://scan.bohr.life |
| BOT 主网 | 677 | https://rpc.botchain.ai | https://scan.botchain.ai |

配置来源：https://dev-docs.botchain.ai/docs/Developers/quick-guide/

## 参赛操作

1. 使用钱包内置浏览器或带钱包扩展的电脑浏览器连接 Demo，选择测试网，领取测试币。
2. 展开“首次部署与申请 Gas”，点击部署并在钱包确认。记录合约与部署交易链接。
3. 载入示例或粘贴报告，生成哈希，点击提交存证并在钱包确认。
4. 将报告复制到核验区，查询匹配记录。修改一个字后再次查询，应显示未找到匹配存证。
5. 导出测试网证据，申请 Gas：https://forms.gle/7WJNKfcyJLQ4vujt7 。申请表要求项目名、Demo、测试网合约/交易链接、收款地址、姓名及角色、Telegram/微信。每个项目只申请一次，符合条件可申请 1 BOT。
6. 主网 Gas 到账后，选择主网，重新部署和存证，再导出主网证据。
7. 提交 Demo、GitHub 仓库、项目介绍、主网证据和演示材料。比赛截止为北京时间 2026-10-08 12:00。

## 已实现与边界

已实现：钱包网络接入、合约部署、内容哈希存证、独立查询、篡改检测、证据导出。
浏览器页面内保存本次会话的部署与交易信息，请及时导出证据。刷新后可重新粘贴合约地址进行查询。
原文不上链。链上存证只证明某地址提交过指定摘要，不证明内容准确、原作者身份、知识产权或 AI 来源。示例是演示文本。本项目不调用模型 API，不提供自动审计功能。
重复摘要按钱包地址隔离。核验要求文本字节完全一致，包括空格和换行。网页不保存或索取私钥。
公网 RPC 及测试网 Faucet 的可用性由 BOT Chain 提供，需要在用户实际网络下验证。

## 比赛期间新增

本项目在本次会话中从零创建。前端、合约及运行说明为本次新增。没有沿用用户的赛前项目。
第三方依赖：ethers (MIT)、solc (GPL-3.0)、esbuild (MIT)、Ganache (MIT)。Ganache 仅用于开发测试，不包含在浏览器产物中。具体许可以各依赖包 LICENSE 为准。

## 主网证据

网络：BOT Chain Mainnet（677）。部署与存证回执均已确认成功。

- 合约：https://scan.botchain.ai/address/0x0556476064e9532DCC1C66eEbe1Cc24384d46878
- 部署交易：https://scan.botchain.ai/tx/0xd5cee9ab97a21e180fd70ce1cee8c950cc9b98fed5226a1461da3a50e147fa54
- 存证交易：https://scan.botchain.ai/tx/0x203e9a3f2f05fba2a91fb2f27289e3a9a9f3a479259c0d330caa6077f0f2cce2
- [主网证据 JSON](agentproof-mainnet-evidence.json)。

原文查询返回时间戳 1791380550；追加一个句号后返回零。主网与测试网地址相同，但属于独立部署，请按 Chain ID 和浏览器区分。
