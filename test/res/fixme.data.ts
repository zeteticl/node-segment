/**
 * Created by user on 2019/4/12.
 *
 * 現存 因為算法或者字典優先權之類的問題導致 可能還無法去修正處理的
 * (有部分可能已經修正 但因為惰性問題 沒有確認)
 */

import tests_lazy_index from './lazy.index';
import { sortTests, lazyMatchSynonym001Not } from '../lib/util';

export const tests_fixme_base: typeof tests_lazy_index['tests_lazy_base'] = [

	[
		'被大人版的月大人以公主抱抱著',
		[
			'公主抱',
			'抱著',
		]
	],

	[
		'然後是境界山脈內部全體表示范達魯擁有影響力的地區全區的國名',
		[
			['全體表示', '表示',],
		]
	],

	[
		'在山國里長大的男生三人大概沒見過吧',
		[
			'長大',
		]
	],

	[
		'仍有几處在几小時後繼續施工的工程',
		[
			'幾處',
			'幾小時',
		]
	],

	[
		'但也有普通的日子里表现出气冲冲样子的时候',
		[
			'气沖沖',
		]
	],

	[
		'想要将一切饮干的贪慾的恶意',
		[
			'饮乾',
		]
	],

	[
		'于錯綜複雜的基礎上誕生出現在的羅迪斯王家',
		[
			'現在',
		]
	],

	[
		'才发现自己最不想见到的人现身了',
		[
			'自己',
		]
	],

	[
		'一年生的代表里出場的吉爾克',
		[
			'代表',
		]
	],

	[
		'我依然將視線專注于哥布林與狗頭人身上。',
		[
			'視線',
		]
	],

	[
		'女形演員──日本歌舞伎中模仿女性形態的男舞者',
		[
			'演員',
		]
	],

	[
		'她就只是忠于自己',
		[
			'自己',
		]
	],

	[
		'尽力抗衡自己身为王族的一切而已',
		[
			'自己',
		]
	],

	[
		'我覺得算是把啪啪啪和跑劇情平衡得最好的一章了',
		[
			'覺得',
		]
	],

	[
		'新的勇者後宮',
		[
			'後宮',
		]
	],

];

export const tests_fixme_base_not: typeof tests_lazy_index['tests_lazy_base_not'] = [

	[
		'由於領民間產生不小的騷動',
		[
			'民間',
		]
	],

	[
		'到湖中間后手終於能休息了',
		[
			['后手', '後手'],
		],
	],

	[
		'被卷入山崩的人中沒有發現生存者',
		[
			'人中',
		],
	],

	[
		'你的待遇是以后再做決定的事情',
		[
			'是以',
		]
	],


	[
		'艾蓮娜有時間的話不要值班准備料理嗎',
		[
			'備料',
		]
	],

	[
		'說出來只會被當做無稽之談',
		[
			'會被',
		]
	],


	[
		'民兵團團長和其他托魯森的男人都明里暗里露出了不滿的表情',
		[
			'團團',
		]
	],

	[
		'他们继续往回宿舍的路上走著',
		[
			'往回',
		]
	],

	[
		'最近的学生都觉得只要能在后方使用魔法就好了',
		[
			'在後',
		]
	],

	[
		'久居于此的人多半是些流浪汉',
		[
			['居于', '居於'],
		]
	],

	[
		'这种豆子会长成大树',
		[
			'会长',
		]
	],

	[
		'四个人和三只鸡搭上了船',
		[
			'人和',
		]
	],

	[
		'是活在少年时的回忆中的女人',
		[
			'年时',
		]
	],

	[
		'少年时',
		[
			'年时',
		]
	],

	[
		'不过也有传闻说「闪光」的名号是来自于他可以将许多男人瞬间带上床而来的',
		[
			'上床',
		]
	],

	[
		'守护符和戒指',
		[
			'护符',
		]
	],

	[
		'可是他们只是生下来便带著具有缺陷的魔法',
		[
			'下来',
		]
	],

	[
		'托瓦哈迪可以在資訊絶對不洩露的環境下生產卵磷脂',
		[
			'下生',
			'產卵',
		]
	],

	[
		'你想說的就只有這句話嗎',
		[
			'說的',
		]
	],

	[
		'奪走了塞利斯的唇瓣',
		[
			'走了',
		]
	],

	[
		'從前代惡政后踏踏實實重建國家的實績',
		[
			'從前',
		],
	],

	[
		'看老師批准後面對著克莉絲塔',
		[
			'後面',
		],
	],

	[
		'飄著好聞到令人吃驚的',
		[
			'聞到',
		],
	],

	[
		'森林里長著高大的樹木',
		[
			'里長',
		],
	],

	[
		'已經見不到用土制作出的靶子的踪影了。',
		[
			['土製', '土制',],
		],
	],

	[
		'如果這個對象是平民的話',
		[
			['象是',],
		],
	],

	[
		'盆栽裡的植物是要制成藥的藥草和樹苗，與咒術師工會在城裡所栽培的，是同一類的東西。',
		[
			['成藥',],
		],
	],

	[
		'照常理想，我會死在這裡。',
		[
			['照常',],
			['理想',],
		],
	],

	[
		'卻從敵人本陣发了出來',
		[
			['陣发','陣發'],
		],
	],

	[
		'大小遠超標准馬車',
		[
			['超標准','超標準'],
		],
	],

	[
		'在正妻室降靈的時候經常被看到',
		[
			['妻室'],
		],
	],

	[
		'「这就是所谓的天才吗……趁现在赶紧吐几口口水吧。」',
		[
			['水吧'],
		],
	],

	[
		'「吾辈乃是地狱的斗士多尔奥格。」',
		[
			['士多'],
		],
	],

	[
		'就正正是因為看不到表情語氣',
		[
			['正是', '就正'],
		],
	],

	[
		'为什么自己会在这种地方打仗啊？',
		[
			['种地'],
		],
	],

	[
		'并特别针对需行使战斗的事态以及其方式进行详细规范',
		[
			['及其'],
		],
	],

];

export const tests_fixme_array: typeof tests_lazy_index['tests_lazy_array'] = [

	[
		'漸漸變大的光源占滿整個視野……',
		[
			['視野'],
		],
	],

];

export const tests_fixme_indexof: typeof tests_lazy_index['tests_lazy_indexof'] = [

	[
		'在看到他的身影后',
		[
			'後',
		],
	],

	[
		'溫室里長大',
		[
			'裡',
		],
	],

	[
		'月光灑落在一把長長的黑发上',
		[
			'髮',
		],
	],

	[
		'他對于月',
		[
			'於',
		],
	],

	[
		'是看起來很困的愛莉絲',
		[
			'睏',
		],
	],

	[
		'亞歷山大把髒了的下巴用脏的餐巾擦了起來',
		[
			'用髒的',
		],
	],

	[
		'只會落到后手',
		[
			'後',
		],
	],

	[
		'就這麼干吧',
		[
			'幹',
		],
	],

	[
		'好像剛到學園的時候我就開始干著鐵匠活了',
		[
			'幹',
		],
	],


	[
		'當然這都是后話了',
		[
			'後',
		],
	],

	[
		'只是照他們要求的干而已',
		[
			'幹',
		],
	],

	[
		'看到她沒干的頭髮粘在她鎖骨上的光景',
		[
			'乾',
		],
	],

	[
		'說不定會被里伊氏族察覺到',
		[
			'里',
		],
	],

	[
		'至于武器',
		[
			'於',
		],
	],

	[
		'干她就對了',
		[
			'幹',
		],
	],

	[
		'干這一行的基本都是大公會的人',
		[
			'幹',
		],
	],

	[
		'本來行會不會發佈這種任務',
		[
			'公會',
		],
	],

	[
		'伊莉娜凝視那樣的夏倫的后影',
		[
			'後',
		],
	],

	[
		'作為父親后妻的女人是和親生母親不變的存在',
		[
			'後',
		],
	],

	[
		'那些注入全身的力量還是讓它的身體略微往后傾',
		[
			'後',
		],
	],


	[
		'夏倫甚麼牢騷都沒发也沒把伊莉娜的手撥開',
		[
			'發',
		],
	],

	[
		'七人里有五人和遙遠的回廊有關聯',
		[
			'裡',
		],
	],

	[
		'男人穿著有點脏的皮甲從中露出的衣服也絕對說不上好',
		[
			'髒',
		],
	],

	[
		'這些都是后話了',
		[
			'後',
		],
	],

	[
		'但手中的雙劍在他松手後掉在地上',
		[
			'鬆',
		],
	],

	[
		'會有益于加華特商的莫大利潤和南部地區巨大信用的話',
		[
			'於',
		],
	],

	[
		'上次大會的准優勝者',
		[
			'準',
		],
	],

	[
		'但是轉過頭來卻发現眼前站著的人和那些男人不同',
		[
			'發',
		],
	],

	[
		'之後的第四場比賽也沒有发生意外',
		[
			'發',
		],
	],

	[
		'不要发小孩子脾氣',
		[
			'發',
		],
	],

	[
		'在伯納士知道的人里恐怕只有伊莉娜能完全躲開了',
		[
			'裡',
		],
	],

	[
		'眼前的屍體已經變成了像干物一樣乾巴巴的',
		[
			'乾物',
		],
	],

	[
		'那就干給你看吧',
		[
			'幹',
		],
	],

	[
		'血什么的一滴都沒喝',
		[
			'麼',
		],
	],

	[
		'如果后半天潛伏在森林裡',
		[
			'後',
		],
	],

	[
		'最近的学生都觉得只要能在后方使用魔法就好了',
		[
			'後',
		],
	],

	[
		'而且还是用钱强逼人家就范的',
		[
			'範',
		],
	],

	[
		'在对方心中划下了永远不会抹灭的伤痕这点也十分有名',
		[
			'劃',
		],
	],

	[
		'而大叔也因为这样没事可干',
		[
			'幹',
		],
	],

	[
		'托里和多瓦夫也誕生了',
		[
			'里',
		],
	],

	[
		'目里奈就像是等候多时了一样露出胜利的笑容冲我打起了招呼',
		[
			'里',
		],
	],

	[
		'也能夠理解這几點了',
		[
			'幾',
		],
	],

	[
		'何必干這種愚蠢的行為',
		[
			'幹',
		],
	],

	[
		'就算只是干這一件事',
		[
			'幹',
		],
	],

	[
		'我想先試著干一件事',
		[
			'幹',
		],
	],

	[
		'集中精力于打倒那傢伙',
		[
			'於',
		],
	],

	[
		'看老师批准后面对着克莉丝塔',
		[
			'後',
		],
	],

	[
		'翹課多出來的時間就可以干別的事吧',
		[
			'幹',
		],
	],

	[
		'弘橋高中于二○一五年的四月迎接了一百五十二名新生入學',
		[
			'於',
		],
	],

	[
		'像我這種看不出願望到底有沒有實現的人其實占多數',
		[
			'佔',
		],
	],

	[
		'小學生時為了采竹筍而曾在竹林中迷路的洋和小林',
		[
			'採',
		],
	],

	[
		'早知道不干這詭異的打工了',
		[
			'幹',
		],
	],

	[
		'五個人聚在機庫里忙著',
		[
			'裡',
		],
	],

	[
		'有勇氣首先跳入不知道有什麼危險的大海里找魚吃的企鵝',
		[
			'裡',
		],
	],

	[
		'難道說買這種奴隷是想在房間裡干那些事嗎',
		[
			'幹',
		],
	],

	[
		'雖然我認為後者應該占多數',
		[
			'佔',
		],
	],

	[
		'已經不想再繼續干別的事情了',
		[
			'幹',
		],
	],

	[
		'乾脆別干冒険者',
		[
			'幹',
		],
	],

	[
		'領主有发補助金哦',
		[
			'發',
		],
	],

	[
		'成年牛般大小的如狼獸類──烏利波──自人影后現出了身姿。',
		[
			'後',
		],
	],

	[
		'５天后的馬車可以麼',
		[
			'後',
		],
	],

	[
		'我們出發3天后還沒有發生什麼',
		[
			'後',
		],
	],

	[
		'但為了魔石熱潮不得不干。',
		[
			'幹',
		],
	],

	[
		'但希絲哈也說會陪我一起干',
		[
			'幹',
		],
	],

	[
		'但莉莉好象也一樣。',
		[
			'好像',
		],
	],

	[
		'我再也不會干這事了',
		[
			'幹',
		],
	],

	[
		'“所以，別拿我當借口。”',
		[
			'藉',
		]
	],

	[
		'“是借口吧。因為，無論何時我詢問你，你都在辯解吧。”',
		[
			'藉',
		]
	],

	[
		'肉烤焦的味道和打雷后特有的刺激性怪味在周圍瀰漫開來',
		[
			'後',
		]
	],

	[
		'春雪才發現叫聲是发自站在他身旁的黑雪公主。',
		[
			'發',
		]
	],

	[
		'外表看起來20几歲或這上下',
		[
			'幾',
		]
	],

	[
		'接敵后，兩秒。被彈開了劍，連同盾被斬崩了。',
		[
			'後',
		]
	],

	[
		'不僅有發戰爭財的人和專門干見不得光的行當的人',
		[
			'幹',
		]
	],

	[
		'加上她對我們人類非常善意。只要不用力量威脅或者干失禮的事',
		[
			'幹',
		]
	],

	[
		'『啊，雖然無所謂，但請趕快干呢』',
		[
			'幹',
		]
	],

	[
		'「你們老是干些無聊的事情呢。」',
		[
			'幹',
		]
	],

	[
		'「哼⋯⋯還真是干了不得了的事情呢。」',
		[
			'幹',
		]
	],

	[
		'據說青眼龍死后身體會溶解',
		[
			'後',
		]
	],

	[
		'现在已经放下来变成长发了。',
		[
			'髮',
		]
	],

	[
		'百合連綳帶都扎不好',
		[
			'紮',
		]
	],

	[
		'對於變得完全沉迷于千草的梨梨花，不得不露出苦笑。',
		[
			'於',
		]
	],

	[
		'當門關上的余聲停止時，臉上失去了力量，自然的閉上了眼睛。',
		[
			'餘',
		]
	],

	[
		'应该是头部上的几只复眼看向了这边。',
		[
			'複',
		]
	],

	[
		'液体，却被笼罩著绿光的圣剑余热蒸发。',
		[
			'餘',
		]
	],

];

/**
 * 分析轉換後不應該具有以下字詞
 */
export const tests_fixme_indexof_not: [string, Parameters<typeof lazyMatchSynonym001Not>['1'], Parameters<typeof lazyMatchSynonym001Not>['2']?][] = [

	[
		'「你想想看，他可是讓阿諾斯大人把手插進肚子里耶。我也想被插啊！」',
		[
			'里',
		]
	],

	[
		'脖子里长有一颗肿瘤',
		[
			'里',
		]
	],

	[
		'庭院里长有一种草',
		[
			'里',
		]
	],

	[
		'角落里长着',
		[
			'里',
		],
	],

];

sortTests(tests_fixme_base);
sortTests(tests_fixme_base_not);
sortTests(tests_fixme_array);
sortTests(tests_fixme_indexof);
sortTests(tests_fixme_indexof_not);

export default exports as typeof import('./fixme.data');
