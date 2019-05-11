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

];

sortTests(tests_lazy_base);
sortTests(tests_lazy_base_not);
sortTests(tests_lazy_array);
sortTests(tests_lazy_indexof);

export default exports as typeof import('./lazy.index');
