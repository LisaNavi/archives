//教室等の座標を記録しています。教室番号は原則そのまま、各階の番号の80番台は階段の割り当てに使用しています。
data={'101': [1451,63,1548,170], // 左から順に 左上のx座標、y座標。右下のx座標、y座標、説明
  '102': [1451,205,1546,276, "ジャズバンド部が活動しています。\n"],
  '103': [1230,38,1454,171, "視聴覚室です。\n学年全体で集まるときに使います。また、LBT部、演劇部が活動しています。\n軽音楽部LBT部がライブを行っていることもあります。\n"],
  '104': [974,86,1073,171, "保健室です。\n"],
  '105': [946,87,977,153],
  '106': [878,88,930,171],
  '107': [807,87,877,171],
  '108': [734,87,809,171],
  '109': [687,106,736,171],
  '110': [591,88,690,171],
  '111': [543,87,596,171],
  '112': [448,87,547,171],
  '113': [400,87,450,171],
  '114': [351,87,403,171],
  '115': [257,108,306,171],
  '116': [112,87,259,171, "工学系の教室です。\n旋盤やフライス盤といった特別な機械を使い作業ができます。\n"],
  '117': [256,252,354,443],
  '118': [378,341,477,452],
  '119': [449,191,546,276],
  '120': [544,191,594,254],
  '121': [591,191,690,277],
  '122':[733,191,930,277, "会議室です。\n様々な会議で使用します。\n"],
  '123':[946, 190, 1013, 247],
  '124':[1008, 190, 1073, 247],
  '125':[926, 264, 994, 323],
  '126':[990, 265, 1046, 333],
  '127':[1070, 264, 1150, 343],
  '128':[819, 560, 1063, 647, "食堂です。\n営業時間は9:00 ~ 17:00です。\n昼食の他にもお菓子や飲み物、軽食などを買うことができます。\n"],
  '129':[771, 561, 823, 646],
  '130':[636, 561, 689, 648, "1階の薬品室になります。\n様々な微生物や食品を扱うバイオ系の授業を支える重要な薬品室です。\n微生物を増やし、観察するための培地をはじめ、基礎実験の薬品等も置いてあります。\n"],
  '131':[540, 561, 641, 648, "バイオサイエンスC、応用微生物学習室の授業で使用します。\n微生物の働きを利用した発酵の授業や、イカの解剖を軸にした解剖学の基礎などを学びます。\n"],
  '132':[493,562,544,647],
  '133':[444, 561, 497, 649],
  '134':[395, 561, 450, 649],
  '135':[204, 561, 257, 648],
  '136':[108, 561, 208, 648],
  '137':[108, 561, 208, 648],
  '138':[109, 668, 258, 755],
  '139':[109, 668, 258, 755],
  '140':[252, 669, 305, 755],
  '141':[397, 668, 448, 754, "化学工学部が活動しています。\n"],
  '142':[445, 668, 545, 754, "バイオテクノロジー入門の授業で使用します。\nヨーグルトを用いた乳酸菌の培養や、納豆づくり、落下細菌を培養し空気中の菌の分析をおこないます。\nバイオ関係に興味がある生徒の初めの1歩となります。\n"],
  '143':[541, 669, 593, 755], 
  '144':[590, 669, 689, 756, "雑菌などが混入することを防ぐ「クリーンベンチ」という機会が設置されている通称''無菌室''\nバイオ入門やバイオサイエンスの授業などで使用します。\n培地などの分注や菌の培養など活用方法は多岐に渡ります。\n"],
  '145':[824, 673, 849, 733],
  '146':[849, 696, 871, 734],
  '147':[866, 696, 895, 734],
  '148':[891, 696, 918, 734],
  '149':[962, 696, 989, 734],
  '150':[984, 696, 1012, 733],
  '151':[1007, 696, 1036, 733],
  '152':[1031, 673, 1063, 734],
  '153':[1059, 668, 1144, 733],
  '180':[1150, 88, 1230, 137],
  '181':[690, 193, 712, 230],
  '182':[330, 133, 351, 170],
  '183':[1144, 704, 1169, 751],
  '184':[689, 608, 734, 645],
  '185':[305, 672, 351, 708],
  '186':[391, 869, 418, 946],
  '201':[1141, 191, 1218, 270],
  '202':[1141, 266, 1219, 347],
  '203':[1141, 342, 1219, 421],
  '204':[1141, 418, 1218, 498],
  '205':[1141, 493, 1218, 572],
  '206':[1141, 569, 1219, 649],
  '207':[1069, 272, 1119, 342],
  '208':[1069, 489, 1121, 565],
  '209':[1449, 65, 1549, 277, "図書室です。\n全日制の営業時間は9:00 ~ 17:00までです。\n本の貸し出しなどが行えます。\n"],
  '210':[1229, 37, 1261, 145],
  '211':[973, 87, 1073, 172, "東棟1階職員室です。\n3年次の担任、副担任の先生がいます。\n"],
  '212':[925, 87, 977, 172],
  '213':[782, 87, 930, 172],
  '214':[685, 87,  783, 172],
  '215':[637, 87, 688, 172],
  '216':[543, 87, 642, 172],
  '217':[445, 87, 546, 172],
  '218':[398, 87, 451, 172],
  '219':[255, 101, 308, 172],
  '220':[160, 87, 261, 172],
  '221':[160, 190, 261, 277],
  '222':[446, 191, 596, 277, "アルゴリズム基礎や総合産業実習の情報系などで使用します。\nプログラムを考える上で基礎となるアルゴリズムについて学ぶことが出来ます。\nまた、簡単にC言語についても学ぶことができます。\n"],
  '223':[591, 190, 643, 277],
  '224':[638, 190, 690, 278],
  '225':[973, 190, 1025, 277],
  '226':[733, 561, 800, 647],
  '227':[588, 561, 689, 649, "1年生の共通教科でも総合産業実習(環境バイオ系)で使用します。\n視覚と嗅覚の関係性や旨味が人間に与える影響、大気圧や電気料金についての身近な実習についても学ぶことが出来ます。\n"],
  '228':[540, 561, 593, 649],
  '229':[445, 561, 545, 649],
  '230':[205, 582, 257, 649],
  '231':[109, 561, 209, 649, "環境一般実習室や、ウェザーワークショップの授業で使用します。\nミニ地球づくりをはじめ、酸性雨発生実験などを通して地球の成り立ちと今後の変貌を考える授業をおこないます。\nまた、天気図や気象予報の勉強を実習を通して楽しく学ベます。\n"],
  '232':[156, 670, 209, 755],
  '233':[207, 669, 305, 755, "リサイクル工学実習室やエネルギーサイエンスの授業で使用します。\n古紙や廃油、ガラスのリサイクル法を学ぶことや、電気エネルギーや火力エネルギー、化学エネルギーを、実習を通して学ぶことが出来ます。\n"],
  '234':[398, 669, 497, 755, "西棟2階職員室です。\n職員室の前には落とし物が保管されています。\n"],
  '235':[492, 669, 593, 756],
  '236':[492, 669, 593, 756, "白衣を借りられる部屋です。\n1～3年生の実習で環境バイオ系を履修してくれた生徒は白衣を部屋から借りることが出来ます。\n白衣に関しては半年間貸し代を行いますので返却していただくことが必要です。\n"],
  '237':[587, 669, 689, 755],
  '238':[685, 669, 737, 736],
  '239':[733, 669, 800, 755],
  '280':[1150, 88, 1230, 137],
  '281':[690, 193, 712, 230],
  '282':[330, 133, 351, 170],
  '283':[1144, 704, 1169, 751],
  '284':[689, 608, 734, 645],
  '285':[305, 672, 351, 708],
  '286':[391, 869, 418, 946],
  '301':[1142, 192, 1220, 270],
  '302':[1142, 268, 1218, 347],
  '303':[1142, 343, 1218, 421,"2年3組の人たちがSHRで使う一般教室です。\n"],
  '304':[1141, 418, 1218, 497],
  '305':[1142, 494, 1218, 571],
  '306':[1142, 568, 1218, 649],
  '307':[1071, 275, 1119, 344],
  '308':[1071, 491, 1119, 565],
  '309':[1450, 89, 1507, 172],
  '310':[1342, 89, 1454, 172],
  '311':[1233, 89, 1345, 172, "情報Ⅰの授業で使用します。\n座学やパソコンを使ってExcelの実習などをすることができます。\n"],
  '312':[974, 89, 1073, 172, "東棟3階職員室です。\n2年次の担任、副担任の先生がいます。"],
  '313':[900, 89, 977, 172],
  '314':[729, 89, 904, 172, "進路指導室1です。\n一部の先生がいます。\n"],
  '315':[685, 105, 734, 172],
  '316':[589, 89, 691, 172],
  '317':[490, 89, 548, 172],
  '318':[421, 105, 494, 172],
  '319':[160, 192, 260, 278],
  '320':[448, 192, 546, 277],
  '321':[541, 192, 596, 277],
  '322':[592, 192, 690, 277],
  '323':[734, 192, 786, 254],
  '324':[782, 192, 836, 254],
  '325':[829, 585, 880, 648],
  '326':[732, 572, 833, 649, "公共やツーリズム等の授業で使用します。\n生徒が主体となった活動が多く活気に溢れた授業が行われています。\nまた、漫画研究部の活動場所としても利用されることがあります。\n"],
  '327':[589, 562, 690, 649, "物理の基礎的な学習を行うことが出来る。\n力の実習でも使われる。/n"],
  '328':[540, 583, 593, 649],
  '329':[445, 562, 545, 649],
  '330':[159, 562, 256, 649],
  '331':[157, 670, 209, 734],
  '332':[204, 671, 305, 755],
  '333':[493, 671, 593, 755],
  '334':[590, 671, 689, 755, "化学の基礎的な学習を行うことが出来る。滴定等の実験が可能。\n"],
  '335':[685, 671, 736, 735],
  '336':[733, 671, 822, 755, "生物の基礎的な学習を行うことが出来る。\n顕微鏡や、解剖で使われます。\n"],
  '337':[820, 671, 870, 732],
  '338':[917, 671,1014,755, "美術の授業で使用します。また、美術部が活動しています。\n"],
  '380':[1150, 88, 1230, 137],
  '381':[690, 193, 712, 230],
  '382':[330, 133, 351, 170],
  '383':[1144, 704, 1169, 751],
  '384':[689, 608, 734, 645],
  '385':[305, 672, 351, 708],
  '401':[1141,191,1218,270],
  '402':[1141,268,1218,345],
  '403':[1141,343,1218,421],
  '404':[1141,418,1218,498],
  '405':[1141,494,1218,574],
  '406':[1141,570,1218,647],
  '407':[1068,275,1121,345],
  '408':[1070,490,1121,564],
  '409':[973,87,1093,176, "東棟4階職員室です。\n1年次の担任、副担任の先生がいます。\n"],
  '410':[877,87,978,173],
  '411':[767,87,881,173, "情報Ⅱの授業や課題研究情報系などで使用します。\n"],
  '412':[644,87,771,173],
  '413':[535,87,650,173,"プログラミング技術やソフトウェア技術などの授業や課題研究で使用します。\nまた、エレクトロニクス部、ロボメック研究部が活動しています。\n"],
  '414':[467,104,539,173, "夜間中学の職員室です。\n"],
  '415':[208,127,307,173],
  '416':[254,85,307,130],
  '417':[207,88,258,129],
  '418':[445,192,497,277],
  '419':[494,192,545,277],
  '420':[540,192,594,277],
  '421':[590,192,688,277, "アコースティックギター部が活動しています。\n"],
  '422':[734,192,834,277],
  '423':[831,192,881,277],
  '424':[734,572,832,646],
  '425':[632,563,688,647],
  '426':[541,562,636,650],
  '427':[541,671,687,756],
  '428':[684,670,736,732],
  '429':[732,671,821,755, "被服室です。\n家庭基礎の授業で使用します。裁縫などができます。\n"],
  '430':[916,669,1015,755, "音楽の授業で使用します。また、軽音楽部が活動しています。\n"],
  '431':[1011,670,1064,755],
  '480':[1150, 88, 1230, 137],
  '481':[690, 193, 712, 230],
  '482':[330, 133, 351, 170],
  '483':[1144, 704, 1169, 751],
  '484':[689, 608, 734, 645],
  //ここから教室名
  '多目的室': [1451,63,1548,170],
  '記念室': [1451,205,1546,276, "ジャズバンド部が活動しています。\n"],
  '視聴覚室': [1230,38,1454,171, "視聴覚室です。\n学年全体で集まるときに使います。また、LBT部、演劇部が活動しています。\n軽音楽部LBT部がライブを行っていることもあります。\n"],
  '保健室': [974,86,1073,171, "保健室です。\n"],
  'カウンセリングルーム': [946,87,977,153],
  '技能陰湿': [878,88,930,171],
  '職員更衣休養室': [807,87,877,171],
  '職員更衣休養室': [734,87,809,171],
  '写真暗室': [687,106,736,171],
  '鋳造実習室': [591,88,690,171],
  '溶接工具室': [543,87,596,171],
  '手仕上げ工具室': [543,87,596,171],
  '手仕上げ実習室': [448,87,547,171],
  '板金加工実習室': [448,87,547,171],
  'ガス溶接実習室': [400,87,450,171],
  'アーク溶接実習室': [400,87,450,171],
  '材料倉庫': [351,87,403,171],
  '機械工具室': [257,108,306,171],
  '旋盤実習室': [112,87,259,171, "工学系の教室です。\n旋盤やフライス盤といった特別な機械を使い作業ができます。\n"],
  '精密加工実習室': [112,87,259,171, "工学系の教室です。\n旋盤やフライス盤といった特別な機械を使い作業ができます。\n"],
  '汎用機実習室': [112,87,259,171, "工学系の教室です。\n旋盤やフライス盤といった特別な機械を使い作業ができます。\n"],
  '数値制御工作機械実習室': [256,252,354,443],
  'CAM実習室': [256,252,354,443],
  '課題実習室': [378,341,477,452],
  '材料試験室': [449,191,546,276],
  '材料準備室': [544,191,594,254],
  '流体力学実習室': [591,191,690,277],
  '流体準備室': [591,191,690,277],
  '原動機実習室': [591,191,690,277],
  '会議室':[733,191,930,277, "会議室です。\n様々な会議で使用します。\n"],
  '書庫':[946, 190, 1013, 247],
  '給湯室':[1008, 190, 1073, 247],
  '応援室':[926, 264, 994, 323],
  '校長室':[990, 265, 1046, 333],
  '事務室':[1070, 264, 1150, 343],
  '食堂':[819, 560, 1063, 647, "食堂です。\n営業時間は9:00 ~ 17:00です。\n昼食の他にもお菓子や飲み物、軽食などを買うことができます。\n"],
  '厨房':[771, 561, 823, 646],
  '薬品室':[636, 561, 689, 648, "1階の薬品室になります。\n様々な微生物や食品を扱うバイオ系の授業を支える重要な薬品室です。\n微生物を増やし、観察するための培地をはじめ、基礎実験の薬品等も置いてあります。\n"],
  '微生物実験室':[540, 561, 641, 648, "バイオサイエンスC、応用微生物学習室の授業で使用します。\n微生物の働きを利用した発酵の授業や、イカの解剖を軸にした解剖学の基礎などを学びます。\n"],
  '微生物実験準備室':[493,562,544,647],
  '菌株保存室':[493,562,544,647],
  '画像解析室':[444, 561, 497, 649],
  '資料閲覧室':[395, 561, 450, 649],
  '材料倉庫':[204, 561, 257, 648],
  '工作室資材室':[108, 561, 208, 648],
  '工具類置場':[108, 561, 208, 648],
  'プラント':[109, 668, 258, 755],
  'プラント計器室':[109, 668, 258, 755],
  '廃液処理室':[252, 669, 305, 755],
  '機器分析実習室':[397, 668, 448, 754, "化学工学部が活動しています。\n"],
  '分析化学準備室':[445, 668, 545, 754, "バイオテクノロジー入門の授業で使用します。\nヨーグルトを用いた乳酸菌の培養や、納豆づくり、落下細菌を培養し空気中の菌の分析をおこないます。\nバイオ関係に興味がある生徒の初めの1歩となります。\n"],
  '分析化学実験室':[445, 668, 545, 754, "バイオテクノロジー入門の授業で使用します。\nヨーグルトを用いた乳酸菌の培養や、納豆づくり、落下細菌を培養し空気中の菌の分析をおこないます。\nバイオ関係に興味がある生徒の初めの1歩となります。\n"],
  '生物工学実験準備室':[541, 669, 593, 755], 
  '生物工学実験室':[590, 669, 689, 756, "雑菌などが混入することを防ぐ「クリーンベンチ」という機会が設置されている通称''無菌室''\nバイオ入門やバイオサイエンスの授業などで使用します。\n培地などの分注や菌の培養など活用方法は多岐に渡ります。\n"],
  '収納1':[824, 673, 849, 733],
  '146':[849, 696, 871, 734],
  '147':[866, 696, 895, 734],
  '148':[891, 696, 918, 734],
  '149':[962, 696, 989, 734],
  '150':[984, 696, 1012, 733],
  '151':[1007, 696, 1036, 733],
  '152':[1031, 673, 1063, 734],
  '153':[1059, 668, 1144, 733],
  '201':[1141, 191, 1218, 270],
  '202':[1141, 266, 1219, 347],
  '203':[1141, 342, 1219, 421],
  '204':[1141, 418, 1218, 498],
  '205':[1141, 493, 1218, 572],
  '206':[1141, 569, 1219, 649],
  '207':[1069, 272, 1119, 342],
  '208':[1069, 489, 1121, 565],
  '209':[1449, 65, 1549, 277, "図書室です。\n全日制の営業時間は9:00 ~ 17:00までです。\n本の貸し出しなどが行えます。\n"],
  '210':[1229, 37, 1261, 145],
  '211':[973, 87, 1073, 172, "東棟1階職員室です。\n3年次の担任、副担任の先生がいます。/n"],
  '212':[925, 87, 977, 172],
  '213':[782, 87, 930, 172],
  '214':[685, 87,  783, 172],
  '215':[637, 87, 688, 172],
  '216':[543, 87, 642, 172],
  '217':[445, 87, 546, 172],
  '218':[398, 87, 451, 172],
  '219':[255, 101, 308, 172],
  '220':[160, 87, 261, 172],
  '221':[160, 190, 261, 277],
  '222':[446, 191, 596, 277, "アルゴリズム基礎や総合産業実習の情報系などで使用します。\nプログラムを考える上で基礎となるアルゴリズムについて学ぶことが出来ます。\nまた、簡単にC言語についても学ぶことができます。\n"],
  '223':[591, 190, 643, 277],
  '224':[638, 190, 690, 278],
  '225':[973, 190, 1025, 277],
  '226':[733, 561, 800, 647],
  '227':[588, 561, 689, 649, "1年生の共通教科でも総合産業実習(環境バイオ系)で使用します。\n視覚と嗅覚の関係性や旨味が人間に与える影響、大気圧や電気料金についての身近な実習についても学ぶことが出来ます。\n"],
  '228':[540, 561, 593, 649],
  '229':[445, 561, 545, 649],
  '230':[205, 582, 257, 649],
  '231':[109, 561, 209, 649, "環境一般実習室や、ウェザーワークショップの授業で使用します。\nミニ地球づくりをはじめ、酸性雨発生実験などを通して地球の成り立ちと今後の変貌を考える授業をおこないます。\nまた、天気図や気象予報の勉強を実習を通して楽しく学ベます。\n"],
  '232':[156, 670, 209, 755],
  '233':[207, 669, 305, 755, "リサイクル工学実習室やエネルギーサイエンスの授業で使用します。\n古紙や廃油、ガラスのリサイクル法を学ぶことや、電気エネルギーや火力エネルギー、化学エネルギーを、実習を通して学ぶことが出来ます。\n"],
  '234':[398, 669, 497, 755, "西棟2階職員室です。\n職員室の前には落とし物が保管されています。\n"],
  '235':[492, 669, 593, 756],
  '236':[492, 669, 593, 756, "白衣を借りられる部屋です。\n1～3年生の実習で環境バイオ系を履修してくれた生徒は白衣を部屋から借りることが出来ます。\n白衣に関しては半年間貸し代を行いますので返却していただくことが必要です。\n"],
  '237':[587, 669, 689, 755],
  '238':[685, 669, 737, 736],
  '239':[733, 669, 800, 755],
  '301':[1142, 192, 1220, 270],
  '302':[1142, 268, 1218, 347],
  '303':[1142, 343, 1218, 421,"2年3組の人たちがSHRで使う一般教室です。\n"],
  '304':[1141, 418, 1218, 497],
  '305':[1142, 494, 1218, 571],
  '306':[1142, 568, 1218, 649],
  '307':[1071, 275, 1119, 344],
  '308':[1071, 491, 1119, 565],
  '309':[1450, 89, 1507, 172],
  '310':[1342, 89, 1454, 172],
  '311':[1233, 89, 1345, 172, "情報Ⅰの授業で使用します。\n座学やパソコンを使ってExcelの実習などをすることができます。\n"],
  '312':[974, 89, 1073, 172, "東棟3階職員室です。\n2年次の担任、副担任の先生がいます。"],
  '313':[900, 89, 977, 172],
  '314':[729, 89, 904, 172, "進路指導室1です。\n一部の先生がいます。\n"],
  '315':[685, 105, 734, 172],
  '316':[589, 89, 691, 172],
  '317':[490, 89, 548, 172],
  '318':[421, 105, 494, 172],
  '319':[160, 192, 260, 278],
  '320':[448, 192, 546, 277],
  '321':[541, 192, 596, 277],
  '322':[592, 192, 690, 277],
  '323':[734, 192, 786, 254],
  '324':[782, 192, 836, 254],
  '325':[829, 585, 880, 648],
  '326':[732, 572, 833, 649, "公共やツーリズム等の授業で使用します。\n生徒が主体となった活動が多く活気に溢れた授業が行われています。\nまた、漫画研究部の活動場所としても利用されることがあります。\n"],
  '327':[589, 562, 690, 649, "物理の基礎的な学習を行うことが出来る。\n力の実習でも使われる。/n"],
  '328':[540, 583, 593, 649],
  '329':[445, 562, 545, 649],
  '330':[159, 562, 256, 649],
  '331':[157, 670, 209, 734],
  '332':[204, 671, 305, 755],
  '333':[493, 671, 593, 755],
  '334':[590, 671, 689, 755, "化学の基礎的な学習を行うことが出来る。滴定等の実験が可能。\n"],
  '335':[685, 671, 736, 735],
  '336':[733, 671, 822, 755, "生物の基礎的な学習を行うことが出来る。\n顕微鏡や、解剖で使われます。\n"],
  '337':[820, 671, 870, 732],
  '338':[917, 671,1014,755, "美術の授業で使用します。また、美術部が活動しています。\n"],
  '401':[1141,191,1218,270],
  '402':[1141,268,1218,345],
  '403':[1141,343,1218,421],
  '404':[1141,418,1218,498],
  '405':[1141,494,1218,574],
  '406':[1141,570,1218,647],
  '407':[1068,275,1121,345],
  '408':[1070,490,1121,564],
  '409':[973,87,1093,176, "東棟4階職員室です。\n1年次の担任、副担任の先生がいます。\n"],
  '410':[877,87,978,173],
  '411':[767,87,881,173, "情報Ⅱの授業や課題研究情報系などで使用します。\n"],
  '412':[644,87,771,173],
  '413':[535,87,650,173,"プログラミング技術やソフトウェア技術などの授業や課題研究で使用します。\nまた、エレクトロニクス部、ロボメック研究部が活動しています。\n"],
  '414':[467,104,539,173, "夜間中学の職員室です。\n"],
  '415':[208,127,307,173],
  '416':[254,85,307,130],
  '417':[207,88,258,129],
  '418':[445,192,497,277],
  '419':[494,192,545,277],
  '420':[540,192,594,277],
  '421':[590,192,688,277, "アコースティックギター部が活動しています。\n"],
  '422':[734,192,834,277],
  '423':[831,192,881,277],
  '424':[734,572,832,646],
  '425':[632,563,688,647],
  '426':[541,562,636,650],
  '427':[541,671,687,756],
  '428':[684,670,736,732],
  '429':[732,671,821,755, "被服室です。\n家庭基礎の授業で使用します。裁縫などができます。\n"],
  '430':[916,669,1015,755, "音楽の授業で使用します。また、軽音楽部が活動しています。\n"],
  '431':[1011,670,1064,755]};