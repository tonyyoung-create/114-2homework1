# YUN YUN YANG — 個人頁面

這是一個簡單的個人頁面範例，放在 `homework1_site` 資料夾內。頁面包含：

- 名稱：YUN YUN YANG
- 不重複的三張圖片（avatar.svg、demo1.svg、demo2.svg）
- 一個互動 DEMO（`script.js`：canvas 粒子效果，滑鼠吸引，點擊改變顏色）

如何查看：

1. 開啟資料夾 `homework1_site`
2. 用瀏覽器打開 `index.html`（在 Windows PowerShell 中可以執行：`Start-Process index.html`）

若要修改：直接編輯 `index.html`, `style.css`, `script.js` 或 `assets` 中的 SVG 圖檔。

範例參考自公開範例佈局並做了簡化與風格調整。

部署成 Live Demo（GitHub Pages）
---------------------------------

下面是把此專案部署為 GitHub Pages 的推薦流程（PowerShell 範例）：

1. 在 GitHub 上建立一個新的 public repository（例如：`homework1_site`）。
2. 在本機 `homework1_site` 資料夾執行下列指令：

```powershell
Set-Location "C:\Users\user\Desktop\深度強化學習\homework1_site"
git init
git add .
git commit -m "Initial site"
# 把 <YOUR-REMOTE-URL> 換成你在 GitHub 新建立 repo 的 HTTPS 或 SSH URL，例如:
# https://github.com/your-username/homework1_site.git
git remote add origin <YOUR-REMOTE-URL>
git branch -M main
git push -u origin main
```

3. 我在此專案中已加入一個 GitHub Actions workflow (`.github/workflows/pages.yml`)：
	- 當你 push 到 `main` 分支時，Actions 會把 repo 根目錄的檔案發佈到 GitHub Pages。 
	- 部署完成後，GitHub 會在 repo 的 Settings → Pages 顯示你的 site URL（通常會是 `https://<your-username>.github.io/<repo>/`）。

4. 若要立刻更新：修改檔案後再次 `git add` / `commit` / `push`，workflow 會自動部署最新內容。

注意：
- workflow 使用官方 Actions（`actions/upload-pages-artifact` 與 `actions/deploy-pages`），不需要額外的 personal access token；只要 repo 設為 public 並 push 到 `main`，即可自動部署。
- 若你希望使用自訂網域或其他進階設定，可再告訴我，我會幫你加入 `CNAME` 或其他設定檔。

