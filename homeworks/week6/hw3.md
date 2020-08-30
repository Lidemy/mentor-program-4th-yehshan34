## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
1.	<blockquote> 表示引用文本，當引用外界文字時，可用此標記。
2.	<em> - emphasis用斜體表示，語意上表示強調。  
<strong> - strong/stronger emphasis用粗體表示，語意上表示特別重要及特別強調。
3.	<hr> 分隔線。


## 請問什麼是盒模型（box modal）
盒模型包含了 width/height/padding/border/margin。而Box-sizing為控制盒模型的計算模式。預設為：box-sizing: content-box，若將屬性改為 box-sizing: border-box，瀏覽器在計算 width 和 height時，就會算入 content、padding、border 這三層。


## 請問 display: inline, block 跟 inline-block 的差別是什麼？
1. Inline（行內元素）：與大家排在一起，無法控制尺寸，不可單獨設定寬與高。例如：<a>、<span> 等等。
2. Block（區塊元素）：自己佔掉一列，並且可設定寬與高，有面積的尺寸。例如：<h1>、<p>、<li>、<ul>、<div>、<form> 等等。
3. Inline-block：元素會像 inline 一樣保持流動狀態、緊鄰在一起，但可以控制元素的實際佔用空間，具有 Inline 和 Block 兩者混搭的特質。


## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
Static：網頁預設定位排版方式。例：按照順序排版。
Relative（相對定位）：在資料中的位置做偏移。例：想要改某一個東西上下左右跟原本的點有所偏移的位置。
Absolute（絕對定位）：只訂一次，需要有個參考點，往父層去找定位。例：針對 box 找定位，往上一層去找不是 static 的定位。
Fixed（固定定位）：從資料當中脫離，依據視窗 / viewport / 瀏覽器做定位。例：當想要某個東西定位在視窗上同樣的位置。

