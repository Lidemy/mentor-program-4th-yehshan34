## 前四週心得與解題心得
前四週心得：
1. Command line 的使用：
現在超級習慣用 command line，每次開啟終端機，都有一種我逐漸成為會寫 code 的錯覺（明明不是在寫 code XD）但不用滑鼠的感覺真的不賴，有種學會一種新技能的感覺！
2. Git 的基本操作：
現在從不知道什麼是 git，到會 pull, commit, push, 開新的 branch 等等等等，突然覺得很偉大，雖然有時候還是會卡住，需要回去看老師的影片複習。
3. JavaScript 基本語法及程式思維：
基礎語法目前還 OK，希望可以多做一些 leetcode 和 LIOJ 的題目，但隨著進度越來越落後，我發現我沒有時間和精力回頭複習，啊啊啊啊～ （崩潰）
4. 網路基本概念：
很後悔大學怎麼沒有去修計算機概論，現在只能乖乖惡補，對 request 和 response、以及 client 跟 server 傳送方式有越來越清晰的了解，雖然在更複雜的解釋有時候還是會愣住，但相信只要持續繼續學習，都會往更好的方向前進。

回去看了前四週的作業，對我來說比較難的是 LIOJ 上面的題目，以及 node.js 串連 API 文件的細節寫法。
邏輯思考上有時候會卡住，一時找不到解答或是拖很久，加上自己不習慣發問（我只敢私訊人很 nice 的同學）、又怕問這麼基礎的問題很丟臉，大腦會很慣性地決定先放棄、不想去面對這件事，接著拖延症開始發作，後來回來解題的時候可能已經是好幾小或是好幾天後，像是這個作業拖了整整五個月我終於決定好好完成它，終於寫完可以交出去了，只能說我的學習效率真的不是一般地慢。
意識到問題後，我的改善方法，就是逼迫自己心中默數完 321 後就要立馬打開電腦和 ipad 開始放影片＋學習，雖然偶爾很是會分心，但總比不開始好，踏出學習的第一步就對了，持續學習、並好好把課程跟完（即使非常緩慢嗚嗚）是我對自己的期許。

解題心得：
解題挑戰很有趣，很像柯南解謎欸好好玩。第一關直接有提示 /lv1?token={GOGOGO}，第二關 lv2 成功找到 id=56 的書本。但開始卡關卡在第三關：request.post：「把書籍的 id 用 GET 告訴我」這一步大約 20 分鐘，我知道新增資料是用 POST 且 path 是 /books 但是就寫不出來，後來成功跑出 {"message":"新增成功","id":"1989"}，非常感動。接著第四關：request.get 並帶入文件範例上的參數：/books?q=世界，但「世界」讀取不出來，使用 const string = encodeURI('世界'); 將中文字串轉為 UTF-8 編碼，才把問題解決，跑出來的結果為：{"id":79,"name":"世界末日與冷酷異境","author":"村上春樹","ISBN":"9571313408"}，id 為 79。接著來到第五關：request.delete，印出結果：{"message":"\n咦...是刪掉了沒錯，但總覺得哪裡怪怪的，算了，先這樣吧！下一關的 token 為 {CHICKENCUTLET}\n"}。第六關之後看似變困難了，因為有新的 API 文件、帳號密碼要去 encode，寫成這樣才能 encode: admin:admin123，後來又去查 Authorization 的範例，才知道原來一定要加上 Basic，不然無法會 invalid authorization，語法為：Authorization: <type> <credentials>。第七關刪除比較簡單，把 /books/89 帶上去 url 即可，跑出 {"id":89,"name":"跟著月亮走：韓國瑜的夜襲精神與奮進人生","author":"韓國瑜","ISBN":"9789571376882"}，瞬間發現怪怪的怎麼沒有下一關的 token，原來是我最後面忘記加上 request.delete(option, callback)，難怪只印出書名卻沒有刪除掉它。第八關：先用 request.get 印出全部的書
名，然後找到 {"id":72,"name":"日日好日：茶道教我的幸福15味【電影書腰版】","author":"森下典子","ISBN":"9981835427"} 符合「我」、作者四個字、ISBN 最尾數為 7 的書本，接著 request.patch 更新資訊，帶入 form: { ISBN：要更改成為的資訊}，得出 {"message":"\n希望之後他們能引進語音輸入系統，我就只要講講話就好。下一關的 token 為 {NeuN}\n"}。第九關我真的看不懂，第一點 key: value => 'X-Library-Number': '20'，第二點我完全不懂在講什麼，直接去看解答惹，才發現要找出 IE6 的 user-agent，全部貼上: 'user-agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322)'，得出結果：{"message":"success","version":"1A4938Jl7","owner":"lib","createdAt":"121290329301"}。拿到進入第十關的token 真的痛哭流涕到不行，看到四碼的猜數字遊戲，竟然覺得很熟悉 XD 以前跟朋友有玩過，但是是用雞跟牛去代替 A 和 B，哈哈哈，第十題最好玩了，有賭博的快感，雖然我在 1369 這四個數字無限 try，但最後解出來的感覺很棒。題目很好玩，謝謝老師出這麼有趣的題目，關關難過關關過，之前進度跳過都沒有闖完，這次終於完成十關了！第 11 關後要跟菲律賓圖書館串連...看起來很高難度... 等我之後若戰鬥力提升後再回來玩。

＊ 以上附上兩篇我覺得寫得很詳細的闖關講解：
1. Derek: https://derek.coderbridge.io/2020/07/09/lidemy-HTTP-Challenge/
2. Dylan: https://dylan237.github.io/http-game.html

＊ 附上共十關的闖關 token：
第一關：
https://lidemy-http-challenge.herokuapp.com/lv1?token={GOGOGO}
https://lidemy-http-challenge.herokuapp.com/lv1?token={GOGOGO}&name=sunny
第二關：
https://lidemy-http-challenge.herokuapp.com/lv2?token={HellOWOrld}&name=sunny
https://lidemy-http-challenge.herokuapp.com/lv2?token={HellOWOrld}&id=56
第三關：
https://lidemy-http-challenge.herokuapp.com/lv3?token={5566NO1}
https://lidemy-http-challenge.herokuapp.com/lv3?token={5566NO1}&id=1989
第四關：
https://lidemy-http-challenge.herokuapp.com/lv4?token={LEarnHOWtoLeArn}
https://lidemy-http-challenge.herokuapp.com/lv4?token={LEarnHOWtoLeArn}&id=79
第五關：
https://lidemy-http-challenge.herokuapp.com/lv5?token={HarukiMurakami}
第六關：
https://lidemy-http-challenge.herokuapp.com/lv6?token={CHICKENCUTLET}
https://lidemy-http-challenge.herokuapp.com/lv6?token={CHICKENCUTLET}&email=lib@lidemy.com
第七關：
https://lidemy-http-challenge.herokuapp.com/lv7?token={SECurityIsImPORTant}
第八關：
https://lidemy-http-challenge.herokuapp.com/lv8?token={HsifnAerok}
第九關：
https://lidemy-http-challenge.herokuapp.com/lv9?token={NeuN}
https://lidemy-http-challenge.herokuapp.com/lv9?token={NeuN}&version=1A4938Jl7
第十關：
https://lidemy-http-challenge.herokuapp.com/lv10?token={duZDsG3tvoA}
https://lidemy-http-challenge.herokuapp.com/lv10?token={duZDsG3tvoA}&num=9613
第十一關：
https://lidemy-http-challenge.herokuapp.com/lv11?token={IhateCORS}



