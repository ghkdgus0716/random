sentences = [
'.',
'.',
'.',
'.',
'.',
'.',
'.',
'.',
'.',
'.',
'.',
'.',
'.',
'.',
'.',
'.',
'?',
'.',
'.',
'.',
'.',
'!',
',',
'!',
'?',
'.',
'-',
'이',
'이',
'가',
'가',
'저',
'그',
'꼭',
'책',
'집',
'밖',
'꿈',
'죄',
'꽃',
'왜.',
'의',
'그는',
'그는',
'그는',
'나는',
'나는',
'나는',
'아니',
'또는',
'기타',
'다른',
'잉크',
'편지',
'엄마',
'흥정',
'더미',
'홀로',
'오직',
'절대',
'둘이',
'검정',
'불꽃',
'밤과',
'사랑',
'푸른',
'붉은',
'가끔',
'종종',
'항상',
'눈물',
'백지',
'사막',
'향기',
'향수',
'시련',
'그림',
'화염',
'편견',
'갈피',
'한숨',
'위해',
'지워',
'거짓',
'예쁜',
'인형',
'그냥',
'희망',
'같이',
'맞다.',
'온다.',
'자체.',
'자체를',
'그리고',
'아파도',
'언젠가',
'그녀는',
'그녀는',
'캔버스',
'그것은',
'나에게',
'목소리',
'반드시',
'반듯이',
'불같이',
'올가미',
'절대로',
'어려운',
'그런데',
'불과해',
'5시에',
'교향시',
'깜깜한',
'모래성',
'로부터',
'까마귀',
'온전히',
'안녕히',
'오롯이',
'눈사람',
'소년이',
'소년의',
'눈동자',
'우아한',
'잔인함',
'무지개',
'오만한',
'오만함',
'추적자',
'어둠의',
'고양이',
'가랑비',
'사랑은',
'사상이',
'누구니',
'따위의',
'페이지',
'안녕은',
'무한한',
'추억은',
'빚어내',
'소나타',
'아니다.',
'널 위해',
'긴 여운',
'날 지워',
'새 천년',
'그럼에도',
'이미지에',
'하루종일',
'바보같이',
'촌스러운',
'지껄여봐',
'모르겠어',
'거울에다',
'담배연기',
'비극적인',
'잠겨갔다.',
'유사성이',
'생각하고',
'혼자서만',
'명령했다.',
'시려오는',
'사랑고백',
'유연하게',
'완벽하길',
'흐릿하다.',
'전부였다.',
'날아갔다.',
'사라졌다.',
'피어났다.',
'어떤가요',
'언덕 너머',
'예쁜 거짓',
'새하얀 빛',
'한 밤중에',
'아쉬운 건',
'넘치는 것',
'서로의 빛',
'그래도 난',
'고통스러운',
'고통스럽게',
'붕붕거렸다.',
'의도적으로',
'불확실성과',
'한여름밤의',
'그리워한다.',
'잊어버렸어.',
'살 수 있어',
'다정한 말투',
'그리워했다.',
'내 아픔 다',
'피 땀 눈물',
'넘치는 것.',
'기억합니다.',
'최후의 발악',
'낯설다 하네',
'아니라 하네',
'둘만의 비밀',
'외로운 마음',
'따스할 테니',
'입을 맞추고',
'별이 빛났다.',
'눈이 부시던',
'울려 퍼졌다.',
'나는 그대를',
'한 덩어리의',
'몸이 굳었다.',
'활짝 피었다.',
'떠있는 거품',
'문이 열렸다.',
'알 수 없었다.',
'알 수 있었다.',
'아무렇지않게',
'뒷걸음치면서',
'무너져내렸다.',
'흐느적 흐느적',
'널 위해서라면',
'자라나는 마음',
'멍청한 눈으로',
'참을성이 없어',
'동생의 가방이',
'불같이 살아나',
'당신은 가세요.',
'나는 유쾌하오.',
'버리지는 말고.',
'가당찮아보였다.',
'아, 괜찮을거야.',
'반짝이는 별빛들',
'보고싶은 얼굴들',
'잡생각이 섞여서',
'쉽게도 사라지지',
'떠오르지 않았다.',
'그렇게 살아갔다.',
'그리운 냄새였다.',
'그것만 고마웠다.',
'방아쇠를 당겼다.',
'새하얗게 바래지고',
'그게 뭐가 나쁘냐?',
'이해하고 싶었으나',
'증거를 발견하고서',
'사는 건 그런 거지',
'강렬한 무엇인가가',
'언젠가 꽃은 지겠지',
'채도 낮은 흑백 화면',
'자유롭게 태어났다.',
'나의 착각이었을까?',
'얼굴 들어 나를 보라',
'행복하게 살았습니다.',
'남은 건 볼 품 없지만',
'끈 하나를 잡아당기면',
'사막은 조금 외롭구나',
'뜨거운 여름밤은 가고',
'비틀거리던 내 발걸음',
'내가 너의 유령이었어.',
'사람들은 어디에 있어?',
'이제 너의 손을 놓을게',
'안녕히 계세요. 여러분.',
'빛은 어둠을 뚫고 나가',
'맹목적으로 따르는 결과',
'행복하고 화창했던 날의',
'그것은 이미지에 불과한',
'믿음은 산산조각이 났고',
'그런 자의식이 솟구쳤다.',
'아무도 알아주지 않지만,',
'허망감에 숨이 막혀왔다.',
'그저 창밖만 바라보았다.',
'심장이 마구 쿵쾅거렸다.',
'담담히 마침표를 찍었다.',
'나는 읽기 쉬운 마음이야',
'당신도 스윽 훑고 가셔요',
'생각하고 또 생각했습니다.',
'거북한 꿈에서 깨어나면서,',
'꿈나라는 별보다 따뜻하대',
'무지개가 떨어진 곳을 알아',
'두 눈은 나만을 바라보았다.',
'그 관심은 호의적인 것이었다.',
'그림이나 글로는 묘사 못 하는',
'엄마를 잃어버린지 일주일째다.',
'부디 나를 용서해 주기 바란다.',
'깊이를 알 수 없는 흑색이었다.',
'박제가 되어 버린 천재를 아시오?',
'나는 마음으로부터 축하해 주었다.',
'안다고 생각했는데 이젠 모르겠어.',
'할머니가 미안하다고 전해달랬어요.',
'얼다가 만 비가 추적추적 내리었다.',
'부끄러움이 많은 생애를 보냈습니다.',
'오늘 엄마가 죽었다. 아니 어쩌면 어제.',
'그럼에도 내 사랑은 또 같은 꿈을 꾸고',
'아쉬운 건 아쉬운 대로 다 의미가 있지',
'그것이 내가 심사숙고 끝에 내린 결론이다.',
'어떤 이들은 죽은 후에야 비로소 태어난다.',
'과거와 현재 대신 미래가 들어 있기 때문이다.',
'국경의 긴 터널을 빠져나오자, 눈의 고장이었다.',
'내가 심연을 들여다 보면 심연도 나를 들여다본다',
'새침하게 흐린 품이 눈이 올듯하더니 눈은 아니오고',
'저는 인간의 삶이라는 것을 도무지 이해할 수 없습니다.',
'바다는 크레파스보다 진한 푸르고 육중한 비늘을 무겁게 뒤채면서, 숨을 쉰다.',
'프리벳가 4번지에 살고있는 더즐리 부부는 자신들이 정상적이라는 것을 아주 자랑스럽게 여기는 사람들이었다.',





]

months = [

1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30
  ]

var days = [
1,2,3,4,5,6,7,8,9
	];


function generateEntry() {

numberOfLines = Math.floor(Math.random() * 10)+1   
             

 entry = ''
                           
for (i = 0; i < numberOfLines; i++) {    
                         
  
entryRef = Math.floor(Math.random() * sentences.length)

    entryText = (sentences[entryRef])

    entry = entry + entryText + ' '
  
  
}
 
month = Math.floor(Math.random() * 12)      
day = Math.floor(Math.random() * days[month])+1    

  
  document.getElementById("date").innerHTML =  day + ' ' + months[month]  
  
  document.getElementById("entry").innerHTML = entry;
  
}

generateEntry()