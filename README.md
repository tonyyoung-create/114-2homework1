# 114-2homework1 — YUN YUN YANG 個人頁面

這個專案是一個簡單的靜態個人頁面示範，實作內容包含：

- 網頁：`index.html`（顯示使用者名稱、簡介、作品圖片與 DEMO 區塊）
- 樣式：`style.css`（響應式配色與佈局）
- 互動 DEMO：`script.js`（Canvas 粒子效果，滑鼠吸引、點擊改變主題顏色、暫停）
- 圖像資源：`assets/avatar.svg`, `assets/demo1.svg`, `assets/demo2.svg`（三張不同的 SVG）

Live Demo（已部署）
---------------------

已將此專案推至 GitHub：

https://github.com/tonyyoung-create/114-2homework1

你可以透過 GitHub Pages 立即查看 Live Demo：

https://tonyyoung-create.github.io/114-2homework1/

（若你無法立刻看到變更，請等待 1–2 分鐘讓 GitHub Actions 完成部署，或於 repo 的 Actions 頁面查看部署日誌。）

如何在本機執行（快速示範）
--------------------------------

1. 在 PowerShell 中打開專案資料夾：

```powershell
Set-Location "C:\Users\user\Desktop\深度強化學習\homework1_site"
```

2a. 最簡單（直接開啟檔案）：

```powershell
Start-Process index.html
```

2b. 建議（使用本機伺服器以避免 file:// 的限制）：

```powershell
# 使用 Python 內建的 server
py -3 -m http.server 8000
# 或使用 Node.js 的 http-server（若已安裝）
npx http-server -p 8000
```

然後在瀏覽器打開： http://localhost:8000

如何示範 DEMO（建議流程）
--------------------------------

1. 開啟頁面後捲到 DEMO 區塊：
	- 將滑鼠移向畫布（canvas）可看到粒子被吸引移動。
	- 點擊畫布或按「重新產生顏色」按鈕會隨機變換粒子主題顏色。
	- 按「暫停」按鈕可以暫停/繼續動畫效果。

2. 若想展示如何修改：在 `script.js` 或 `style.css` 做小幅調整並保存，然後刷新頁面（或使用 Live Server 自動重新載入）。

部署到 GitHub Pages（如果你想重做）
--------------------------------------

我已在專案中加入 GitHub Actions workflow（`.github/workflows/pages.yml`），部署方式如下：

1. 在 GitHub 建立 public repository（已使用你的 repo：`tonyyoung-create/114-2homework1`）。
2. 將本地專案推上去（已完成）：

```powershell
git init
git add .
git commit -m "Initial site with GitHub Pages workflow"
git remote add origin https://github.com/tonyyoung-create/114-2homework1.git
git branch -M main
git push -u origin main
```

3. 推送後，workflow 會自動把 repo 根目錄內容部署到 GitHub Pages。部署成功後，Pages 網址會顯示在 repo 的 Settings → Pages。

故障排查
---------

- 若 Live Demo 無法載入或顯示錯誤，請打開瀏覽器 devtools（F12）檢查 Console 錯誤，或到 GitHub Actions 查看部署日誌。把錯誤訊息貼給我，我會幫你修正。 
- 如果要使用自訂網域（CNAME），我可以幫你加入 `CNAME` 檔案並設定 GitHub Pages。 

聯絡與下一步
----------------

如果你希望我：

- 把 avatar 換成你提供的照片，請上傳圖片到 `assets/`（或拖到此 workspace）並告訴我檔名；我會替換並調整樣式。 
- 調整樣式或把頁面內容翻成英文/雙語，我可以直接修改並提交一個 pull request。 

歡迎告訴我下一個要做的修改，我會馬上處理。

