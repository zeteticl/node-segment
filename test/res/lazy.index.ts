/**
 * Created by user on 2019/4/12.
 */

import { lazyMatch, lazyMatch002, lazyMatchNot, lazyMatchSynonym001, sortTests } from '../lib/util';

export const tests_lazy_base: [string, Parameters<typeof lazyMatch>['1'], Parameters<typeof lazyMatch>['2']?][] = [

	[
		'胡锦涛出席APEC领导人会议后回京',
		[
			'会议',
			'回京',
		],
	],

	[
		'两个中国',
		[
			'两个',
			'中国',
		],
	],

	[
		'全部都有',
		[
			'全部',
			'都有',
		],
	],

	[
		'從位在下方的湖面',
		[
			'位在',
			'下方',
		],
	],

	[
		'將那叫燕麥茶的玩意兒一口氣倒入口中。',
		[
			'一口氣',
			'倒入',
			'口中',
		],
	],

	[
		'我就順便在你臉上涂鴉吧',
		[
			'塗鴉',
		],
	],

	[
		'手指著岩地',
		[
			'手',
			'指著',
		],
	],

	[
		'疲憊不堪的強尼癱坐在岩石上',
		[
			'癱坐',
		],
	],

	[
		'「这是什么啊？是特別好的樹木的樹干吗？」',
		[
			'樹幹',
		],
	],

	[
		'由於領民間產生不小的騷動',
		[
			['領民', '領民間'],
			'產生',
		],
	],

	[
		'爲了收集有能力對術文獻上祈禱的人',
		[
			'收集',
			'獻上',
			'祈禱',
		],
	],

	[
		'賽拉正站在馬車的貨台上',
		[
			'馬車',
			'貨台',
		],
	],

	[
		'平均比重為一點七',
		[
			'一點七',
		],
	],

	[
		'正因為不知道明天會是如何',
		[
			'不知道',
			'明天',
		],
	],

	[
		'坐在倒塌樹幹上的安格斯站起了身子',
		[
			'倒塌',
			['樹幹', '樹幹上'],
		],
	],

	[
		'在操縱席的彼得開啟動力之後',
		[
			'操縱席',
			'彼得',
			'開啟',
			'動力',
		],
	],

	[
		'風壓擠機體',
		[
			'風',
			'壓擠',
			'機體',
		],
	],

	[
		'因此需要分成數趟往返搬運',
		[
			'因此',
			'需要',
			'分成',
			'數趟',
			'往返',
			'搬運',
		],
	],

	[
		'我打發了不少時間',
		[
			['打發', '打發了'],
		],
	],

	[
		'在農地外面則有大片可牧養牛羊的牧草地',
		[
			'牧養',
		],
	],

	[
		'就連個人影都找不著',
		[
			'人影',
		],
	],

	[
		'我发自內心表示感謝',
		[
			['發自', '發自內心'],
			'表示',
			'感謝',
		],
	],

	[
		'她把荷包蛋擺在像是印度烤餅的面包上',
		[
			'麵包',
		],
	],

	[
		'米爾琪特將嘴放在面包上',
		[
			'麵包',
		],
	],

	[
		'这并不是要吞并卡拉萨斯领的计划吗',
		[
			'並不是',
			'吞併',
		],
	],

	[
		'世间独一无二的标志才行',
		[
			'标誌',
		],
	],

	[
		'而是縷了一下前发',
		[
			'前髮',
		],
	],

	[
		'但是明天會在利得亞港上岸然后從陸路向王都瑪露提那前進',
		[
			'然後',
		],
	],

	[
		'把靈魂轉移到其他容器後就會完全切斷與原本身體的联系',
		[
			'联繫',
		],
	],

	[
		'作為父親后妻的女人是和親生母親不變的存在',
		[
			'後妻',
			['親生母親', '親生'],
		],
	],

	[
		'女性的雇傭兵中她那樣強的人還有沒有艾蓮娜不知道',
		[
			['雇傭兵', '僱傭兵'],
		],
	],

	[
		'在倫巴達確認自己的貨船裝滿貨物和完成出航手續后預定馬上趕到萊斯沃斯',
		[
			['手續', '出航手續',],
		],
	],

	[
		'但是果然世間對同性愛侶的看法一般都不怎麼友好',
		[
			['同性', '同性愛侶',],
		],
	],

	[
		'眼前的建筑物像教堂一样',
		[
			'建筑物',
		],
	],

	[
		'職業上也相當的平衡是非常理想的隊伍',
		[
			'非常',
			'理想',
		],
	],

	[
		'該如何反制',
		[
			'如何',
			'反制',
		],
	],

	[
		'從重要的血管到各種肌腱',
		[
			['重要', '重要的',]
		],
	],

	[
		'於名于實都成為勝負服的巫女服包裹全身',
		[
			'於名於實',
		],
	],

	[
		'把沙利叶強奸了',
		[
			['強奸', '強姦',]
		],
	],

];

export const tests_lazy_base_not: [string, Parameters<typeof lazyMatchNot>['1'], Parameters<typeof lazyMatchNot>['2']?][] = [

	[
		'這份毫不守舊的率直',
		[
			'份毫',
		],
	],

	[
		'在外面放哨的大概有十來人',
		[
			'在外',
		]
	],

	[
		'正是這份工作的不二人選',
		[
			'份工',
		],
	],


	[
		'好像是有商人為了攬客正大聲吆喝著',
		[
			'正大',
		],
	],

	[
		'比起《水月迷宮》中出現的哥布林身體能力有若干的提高',
		[
			'體能',
			['干的', '幹的', '乾的'],
		],
	],

	[
		'所以来办一场上梁仪式吧',
		[
			'以来',
		],
	],

	[
		'莉法娜发出沒力的聲音',
		[
			'出沒',
		],
	],

	[
		'伯納士坐在馬車的御馬台上緊緊攥著繮繩',
		[
			'上緊',
		],
	],

	[
		'每個桌子邊都有數名手拿酒翁的女性等候在一旁',
		[
			'名手',
		],
	],

	[
		'舌头互相交缠的淫秽声响静静地传了出来',
		[
			'相交',
		],
	],

	[
		'《寂靜領域》的發動和操作最好不要依賴聲音',
		[
			'好不',
		],
	],

	[
		'卻奇怪的很講義氣',
		[
			'講義',
		],
	],

	[
		'N在抵達異世界的數天后',
		[
			'天后',
		],
	],


	[
		'只要用對方法說不定就能無人犧牲',
		[
			'對方',
		],
	],

	[
		'在學院潛心于古今魔術的研究',
		[
			'在學',
		],
	],

	[
		'如果說卡麗婭各處所營造出的舉止和氛圍是高貴的話',
		[
			'處所',
		],
	],

	[
		'被占領了',
		[
			['被占', '被佔'],
		],
	],

	[
		'兩個人像浮屍一樣浮上了水面時競技也已經結束了',
		[
			['人像'],
		],
	],

	[
		'我用手里長劍與哥布林交手',
		[
			['里長'],
		],
	],

];

export const tests_lazy_array: [string, Parameters<typeof lazyMatch002>['1'], Parameters<typeof lazyMatch002>['2']?][] = [

	[
		'胡锦涛出席APEC领导人会议后回京',
		[
			[
				'会议',
				'回京',
			],
		],
	],

	[
		'在這裡有兩具自動人偶隨侍在側的烏列爾',
		[
			[
				'兩具',
				'自動',
				'人偶',
				'隨侍',
			],
			[
				'兩具',
				'自動人偶',
				'隨侍',
			],
		],
	],

	[
		'我摀住嘴',
		[
			[
				'我',
				'摀住',
				'嘴',
			],
			[
				'我',
				'摀住嘴',
			],
		],
	],

	[
		'世間萬物終歸于虛無',
		[
			[
				'世間',
				'萬物',
				'終歸',
				'於',
				'虛無',
			],
			[
				'世間',
				'萬物',
				'終歸於',
				'虛無',
			],
		],
	],

];

export const tests_lazy_indexof: [string, Parameters<typeof lazyMatchSynonym001>['1'], Parameters<typeof lazyMatchSynonym001>['2']?][] = [

	[
		'大家干的好',
		[
			'幹',
		],
	],

	[
		'至今為止他對自己所干的事',
		[
			'幹',
		],
	],

	[
		'反正會被拼命干的吧',
		[
			'幹',
		],
	],

	[
		'雖然要干的事也增加了',
		[
			'幹',
		],
	],

	[
		'你好好干的話',
		[
			'幹',
		],
	],

	[
		'奧莉薇婭率領的騎兵聯隊將作為第二批部隊于一周後出發',
		[
			'於',
		],
	],

	[
		'完全沒有注意的我們都因為這下冲擊摔倒在地',
		[
			'衝',
		],
	],

	[
		'而且我希望能一直就這麼干下去',
		[
			'幹',
		],
	],

	[
		'從旁邊看來肯定是一副相當恶心的畫面',
		[
			'噁',
		],
	],

	[
		'這票干成之後我們就要發財了',
		[
			'幹',
		],
	],

	[
		'但是想要干一番能改變世界的大事',
		[
			'幹',
		],
	],

	[
		'看來真有把臉捏丑一點的必要了',
		[
			'醜',
		],
	],

	[
		'除了里長烏拉諾斯之外',
		[
			'里',
		],
	],

	[
		'少女的右手如云霧般消失',
		[
			'雲',
		],
	],

	[
		'緊貼著濕发的前額',
		[
			'髮',
		],
	],

	[
		'不遜色于阿尼艾絲的美麗女人',
		[
			'於',
		],
	],

	[
		'毀于蟻穴',
		[
			'於',
		],
	],

	[
		'放心后男人們發呆地凝視著',
		[
			'後',
		],
	],

	[
		'這個書信是在早上发放到所有公會的',
		[
			'發',
		],
	],

	[
		'任何國家都對騎士和士兵的征用表現積極態度',
		[
			'徵',
		],
	],

	[
		'而這些是起因于強烈的嫉妒心',
		[
			'於',
		],
	],

	[
		'就這樣真正的為余效力如何',
		[
			'余',
		],
	],

	[
		'為什麼要拒絶余的邀請',
		[
			'余',
		],
	],

	[
		'我終于成為了魔法使',
		[
			'於',
		],
	],

	[
		'嗯，余滿足了。',
		[
			'余',
		],
	],

	[
		'我也正想要放開手腳大干一場',
		[
			'幹',
		],
	],

	[
		'反正也是沒事干',
		[
			'幹',
		],
	],

	[
		'对方提出单方面于己方有利的交易',
		[
			'於',
		],
	],

	[
		'血什么的一滴都沒喝',
		[
			'麼',
		],
	],

	[
		'以奧蘭多王国為例子的話就是准騎士團',
		[
			'準',
		],
	],

	[
		'但什麼都不需要就能好好干事是不可能的',
		[
			'幹',
		],
	],

	[
		'這個時間點雷里歐和伊莉娜一樣',
		[
			'里',
		],
	],


	[
		'他拿起几粒稻谷进行鉴定后',
		[
			'穀',
		],
	],

	[
		'居然敢干出这种勾当',
		[
			'幹',
		],
	],

	[
		'可是加上兽人王后难度便大幅向上提升',
		[
			'后',
		],
	],

	[
		'乌尔娜将魔法术式刻划在潜意识内后',
		[
			'後',
		],
	],

	[
		'而且超恶心',
		[
			'噁',
		],
	],

	[
		'「那個，叫什麼來著⋯⋯烏賊干嗎？」',
		[
			'乾',
		],
	],

	[
		'「烏賊干嗎？沾上蛋黃醬可是十分美味啊」',
		[
			'乾',
		],
	],

	[
		'到头来，连衣服都自己缝制了',
		[
			'製',
		],
	],

	[
		'然後把干蘑菇和湯汁混合',
		[
			'乾',
		],
	],

	[
		'野兽的脂肪与锅炒用的干货一同在锅里交融',
		[
			'乾',
		],
	],

	[
		'喂我要實現你的願望讓你實體化咯',
		[
			'喂',
		],
	],

	[
		'當叫做里卡多先生的他與她說話的時候',
		[
			'里',
		],
	],

	[
		'而她却被对黒乃桑抱有的不纯想法冲昏了脑袋',
		[
			'沖',
		],
	],

	[
		'雖然還有著只是發射便有著讓人昏倒程度的后座力問題',
		[
			'後',
		],
	],

	[
		'本來蛇王禁縛是和莉莉合體后',
		[
			'後',
		],
	],

	[
		'艾梅莉亞將軍的第二隊【暴風】作為后備役待機',
		[
			'後',
		],
	],

	[
		'這麼一聲響街道的石板與血沫一起四濺后觸手斷裂了',
		[
			'後',
		],
	],

	[
		'最後對方感到無趣后自行退場了',
		[
			'後',
		],
	],

	[
		'然后又不知從哪裡掏出了一個',
		[
			'後',
		],
	],

	[
		'就這樣約好后',
		[
			'後',
		],
	],

	[
		'明明是友情關係雨過天晴后的可喜可賀的瞬間',
		[
			'後',
		],
	],

	[
		'穿過像藝術品一樣的雪白正門后',
		[
			'後',
		],
	],

	[
		'在打了個帶有血液腥臭味的嗝后',
		[
			'後',
		],
	],

	[
		'從前代惡政后踏踏實實重建國家的實績',
		[
			'後',
		],
	],

	[
		'僅僅一上午就干完了所有事情',
		[
			'幹',
		],
	],

	[
		'这位少女的银发被粗暴地抓起',
		[
			'髮',
		],
	],

	[
		'從背後伸來的血手拉扯著少女美麗的銀髮',
		[
			'髮',
		],
	],

	[
		'壽命長的精靈從在外表上看可能差了十几二十年',
		[
			'幾',
		],
	],

	[
		'小柩意外的干的很好',
		[
			'幹',
		],
	],

	[
		'被帶過來的是流淌著墨黑光亮的艷发加上雪白無瑕肌膚的人類女性',
		[
			'髮',
		],
	],

	[
		'多是偏于某原色魔力',
		[
			'於',
		],
	],

	[
		'有長于謀策的人在統管',
		[
			'於',
		],
	],

	[
		'外觀也破爛的連一片白色涂飾也沒留下',
		[
			'塗',
		],
	],

	[
		'對家里人也要保密哦',
		[
			'裡',
		],
	],

	[
		'還有缺什么的話不用客氣直接說出來就行了',
		[
			'麼',
		],
	],

	[
		'對于平日在大圖書室搜集書籍看書',
		[
			'於',
		],
	],

	[
		'以前是被歸為准男爵的騎士家的家族',
		[
			'準',
		],
	],

	[
		'但是與氣流相反的方向准沒錯',
		[
			'準',
		],
	],

	[
		'「干吧」',
		[
			'幹',
		],
	],

	[
		'快干趴那種傢伙',
		[
			'幹',
		],
	],

	[
		'雖然大概沒機會再干一次了」',
		[
			'幹',
		],
	],

	[
		'反正在船上什麼也干不了吧',
		[
			'幹',
		],
	],

	[
		'她不會干那種下流的事',
		[
			'幹',
		],
	],

	[
		'為你們擦屁股的活會由我來干',
		[
			'幹',
		],
	],

	[
		'“鬼知道啊!你去干呀!”',
		[
			'幹',
		],
	],

	[
		'自己上就不干',
		[
			'幹',
		],
	],

	[
		'媽媽和伯父不是都想干就幹嗎',
		[
			'幹',
		],
	],

	[
		'一定會跟我說「再落力地去干」',
		[
			'幹',
		],
	],

	[
		'就算是我都不會這樣干',
		[
			'幹',
		],
	],

	[
		'黑頭发的女性和那兩位也想一起去',
		[
			'髮',
		],
	],

	[
		'克萊曼濯发畢',
		[
			'髮',
		],
	],

	[
		'我在故鄉有发小在',
		[
			'髮',
		],
	],

	[
		'帶刺的紅色中長发很獨特',
		[
			'髮',
		],
	],

	[
		'帶刺的紅色中長发是其特徵',
		[
			'髮',
		],
	],

	[
		'明明還會給我发些安潔的內衣照',
		[
			'發',
		],
	],

	[
		'科林发著牢騷',
		[
			'發',
		],
	],

	[
		'里昂靠賭博发橫財時的照片',
		[
			'發',
		],
	],

	[
		'島上的港口擠滿了來送出发去留學的我的人',
		[
			'發',
		],
	],

	[
		'跳上茶几跨過手槍打了埃里克一巴掌',
		[
			'几',
		],
	],

	[
		'防範叛亂于未然',
		[
			'於',
		],
	],

	[
		'有发自真心的笑容',
		[
			'發',
		],
	],

	[
		'啊~！你们的选手重复了！好好的听人说话！',
		[
			'複',
		],
	],

	[
		'第一天就从轻松地跑3千公尺的地方开始吧！',
		[
			'鬆',
		],
	],

	[
		'第一天就從輕松地跑3千公尺的地方開始吧！',
		[
			'鬆',
		],
	],

	[
		'前世自从上了中学后身高就停止长高了，',
		[
			'後',
		],
	],

	[
		'回头一看，呆头鹅桂木和一个中长发的梦幻般的女孩子站在那里裡。',
		[
			'髮',
		],
	],

	[
		'天鹅绒的盒子打开后，银色的心型珍珠项链像泪水一样从里裡溢出了。',
		[
			'後',
		],
	],

	[
		'那是米拉沉迷于安心呼吸面罩不能自拔的時候',
		[
			'於',
		],
	],

	[
		'還是想有空余走走',
		[
			'餘',
		],
	],

	[
		'原來如此啊。曾于救世之旅中同行的',
		[
			'於',
		],
	],

	[
		'于這個陰險者而言',
		[
			'於',
		],
	],

	[
		'勾划著軌跡再度襲來',
		[
			'劃',
		],
	],

	[
		'將某種傳令或指示傳達給科里登堡的命令書',
		[
			'里',
		],
	],

	[
		'不這麼做就無法向其他人起到示范作用',
		[
			'範',
		],
	],

	[
		'頭盔男拿起被紅色涂染的信',
		[
			'塗',
		],
	],

	[
		'以西北部的鄉村都市西弗魯・特里克薩為中心',
		[
			'里',
		],
	],

	[
		'現在雖然甘于騎士階級',
		[
			'於',
		],
	],

	[
		'于帕多利克家而言',
		[
			'於',
		],
	],

	[
		'艷麗的黑髮攏于腦後',
		[
			'於',
		],
	],

	[
		'在學院潛心于古今魔術的研究',
		[
			'於',
		],
	],

	[
		'這個世界上有為了一片面包出賣尊嚴的人',
		[
			'麵',
		],
	],

	[
		'所有的感情，就像要把脏腑翻過來一樣瘋狂著。',
		[
			'臟',
		],
	],

	[
		'這麼說著，青年指向了機庫里擺放著的',
		[
			'裡',
		],
	],

	[
		'莫希干的平泽',
		[
			'干',
		],
	],

	[
		'姐妹倆充分地理解了亮真发惱騷的理由。',
		[
			'發',
		],
	],

	[
		'一边吸着面条,一边偷偷互相使眼色的五人组。',
		[
			'麵',
		],
	],

	[
		'“就交给我吧。一发胜负!”',
		[
			'發',
		],
	],

	[
		'所以取出事先「收納」好的固體肥皂，在溫水里弄出泡沫',
		[
			'裡',
		],
	],

	[
		'嗅著鋪滿干稻草的地面四腳著地到處爬來爬去的少女',
		[
			'乾',
		],
	],

	[
		'他朝我遞出了一把傘和一片面包。',
		[
			'麵',
		],
	],

	[
		'啊啊，脏死了。',
		[
			'髒',
		],
	],

	[
		'如果在這裡因為猶豫而什麼都沒干的話',
		[
			'幹',
		],
	],

	[
		'娜莎在胸前用手比划著大致的大小',
		[
			'劃',
		],
	],

	[
		'要想出发的話需要等待十五天',
		[
			'發',
		],
	],

	[
		'這個老爺子，不管怎麼樣，老爺子的國家那邊關于【魔帝】【勇者】【大賢者】這些稱號出現的事毫無疑問是已經暴露了的樣子',
		[
			'於',
		],
	],

	[
		'精靈是存在于自然的生物',
		[
			'於',
		],
	],

	[
		'這讓貝魯发自內心笑了出來',
		[
			'發',
		],
	],

	[
		'「澤斯大人，關于剛才“回憶雙轉移”的條件，請用我的記憶交換吧」',
		[
			'於',
		],
	],

	[
		'所以最需要擔心的是每個村莊都儲存著的干木柴',
		[
			'乾',
		],
	],

	[
		'他有著長而美麗的披肩发',
		[
			'髮',
		],
	],

	[
		'都是发源自阿蒙諾爾黑山脈的融雪水',
		[
			'發',
		],
	],

	[
		'鞋里的泥很滑，我半摔的抓住了槍柄。',
		[
			'裡',
		],
	],

	[
		'這是今天的第二发，也就是最後一發了。',
		[
			'發',
		],
	],


	[
		'我也不會吝于給予幫助',
		[
			'於',
		],
	],

	[
		'只有鐵制小刀和布衣',
		[
			'製',
		],
	],

	[
		'而且食材都是新鮮現采',
		[
			'採',
		],
	],

	[
		'我們走了一小段后',
		[
			'後',
		],
	],

	[
		'我也非常喜欢纤细但不干瘪的双脚',
		[
			'乾',
		],
	],

	[
		'不知道這聲嘆息是為誰而发',
		[
			'發',
		],
	],

	[
		'必須用這過于強大的力量打倒魔神',
		[
			'於',
		],
	],

	[
		'但于討伐魔神之際',
		[
			'於',
		],
	],

	[
		'雖然我認為後者應該占多數',
		[
			'佔',
		],
	],

	[
		'魔物經過物競天擇后',
		[
			'後',
		],
	],

	[
		'但似乎亦適用于伊姆內几亞大陸。',
		[
			'於',
		],
	],

	[
		'消逝於夕陽余照空中的嘆息',
		[
			'餘',
		],
	],

	[
		'我發現那裡的人數遠多于其他集團',
		[
			'於',
		],
	],

	[
		'彌生身后的女孩也紛紛向芙蘭榭絲卡行禮。',
		[
			'後',
		],
	],

	[
		'每天都曝露于與死亡比鄰的危險之中',
		[
			'於',
		],
	],

	[
		'过于强劲的外挂能力也不是那么好用呢',
		[
			'於',
		],
	],

	[
		'而且魔族又因魔神被討伐而隠蔽于阿貝艾爾姆大陸',
		[
			'於',
		],
	],

	[
		'沉重的氣氛與空氣彷佛黏附于肌膚之上',
		[
			'於',
		],
	],

	[
		'她怀中抱着两个皮制水袋',
		[
			'製',
		],
	],

	[
		'向芙蘭榭絲卡謝過后',
		[
			'後',
		],
	],

	[
		'雖然略矮于周圍樹木',
		[
			'於',
		],
	],

	[
		'就像當年他佇足于緋色月夜中',
		[
			'於',
		],
	],

	[
		'倘若一對一戰斗',
		[
			'鬥',
		],
	],

	[
		'立刻就開始用手拍掉頭发或衣服上的泥',
		[
			'髮',
		],
	],

	[
		'在夢幻世界裡蹭得累什么的不要說啊',
		[
			'麼',
		],
	],

	[
		'臨近于持有『死之平原』名號的同魔神眷屬戰鬥的決戰場',
		[
			'於',
		],
	],

	[
		'由於訓練身體发漲',
		[
			'發',
		],
	],


	[
		'一边久久无法平复呼吸的凉音',
		[
			'復',
		],
	],

	[
		'平時都是買面包之類的在教室裡吃，但今天卻不能待在教室裡。',
		[
			'麵',
		],
	],

	[
		'「２８號，有里牡丹拒絕了！」',
		[
			'里',
		],
	],

];

sortTests(tests_lazy_base);
sortTests(tests_lazy_base_not);
sortTests(tests_lazy_array);
sortTests(tests_lazy_indexof);

export default exports as typeof import('./lazy.index');
