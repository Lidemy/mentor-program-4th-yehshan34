## 請以自己的話解釋 API 是什麼
應用程式介面(Application Programming Interface)，是雙方溝通的介面，透過 API 可以讓雙方交換資料。又可分為使用 API 跟提供 API，好比說若要跟別人要東西的時候，就要透過對方提供的 API 來索取資料，而提供資料的一方，就需要提供一個 API 讓對方存取資料，在 API 上可以選擇或定義哪一部分公開與否。



## 請找出三個課程沒教的 HTTP status code 並簡單介紹
1.	304 Not Modified：東西跟之前長一樣 。
2.	400 Bad Request：明顯的用戶端錯誤，伺服器無法處理這個 Request。
401 Unauthorized：未認證，可能需要登入或 Token。
403 Forbidden：沒有權限。（Client端）
3.	502 Bad Gateway：伺服器的某個服務沒有正確執行。
504 Gateway Timeout：伺服器上的服務沒有回應。（Server端）

參考來源：https://noob.tw/http-status-code/



## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。
Base URL: https://best-restaurants.com

| 說明     | Method | path       | 參數                   | 範例             |
|--------|--------|------------|----------------------|----------------|
| 回傳所有餐廳資料 | GET    | /restaurants     | _limit:限制回傳資料數量           | /restaurants?_limit=5 |
| 回傳單一餐廳資料 | GET    | /restaurants/:id | 無                    | /restaurants/10      |
| 刪除餐廳   | DELETE   | /restaurants/:id     | 無 | 無              |
| 新增餐廳   | POST   | /restaurants     | name：餐廳名稱 | 無              |
| 更改餐廳   | PATCH   | /restaurants/:id     | name: 餐廳名稱 | 無              |

