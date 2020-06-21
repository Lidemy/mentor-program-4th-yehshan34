## 請解釋後端與前端的差異。
前端是網頁的前台，負責接受使用者的指令並呈現使用者所看到的內容，包括 HTML 網頁內文、CSS 網頁美觀樣式以及 JavaScript 網頁的功能與互動。後端則是網頁的後台，負責接收前端的要求、處理前端的指令以及管理前端的資料庫，並提供所需要相對應的資訊給前端呈現。


## 假設我今天去 Google 首頁搜尋框打上：JavaScri[t 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
按下 enter，電腦透過網路卡發出 request 請求到 DNS Server 找 ID 位置，找到確定ID位置後，進入後端處理後，再進入 Google Database 搜尋關於 JavaScript 的資料，解析之後再傳 response 回應結果至硬體（電腦）、作業系統、網路卡、回到原本的瀏覽器上，在透過前端（HTML,CSS,JS）顯示出搜尋結果給使用者。



## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用
1.  date: 印出現在時間
2.  top(table of processes) ：印出所有 processes。可以顯示即時的系統負載狀態，而它也可以用於指令稿中，輸出各種系統資訊
3.  tail：印出檔案的最後幾行。變化型：tail –f 用於 web server 查看 log debug 的時候
4.  cat（catenate）：將檔案內容顯示在 Terminal 面板
5.  less：將檔案內容以分頁顯示在 Terminal 面板
