const quotes = [
    {
        quote: '당신의 코드를 유지보수하게 될 친구가 당신이 어디에 사는지 아는 싸이코패스가 될 것이라고 여기면서 코드를 작성하라',
        source: '마틴 골딩 (Martin Golding)',
    },
    {
        quote: '좋은 프로그래머 대부분은 돈이나 대중에게 받을 찬사를 기대하고 프로그래밍을 하지 않고 프로그래밍이 재미 있어서 한다',
        source: '리누스 토르발스 (Linus Torvalds)',
    },
    {
        quote: '우리는 프로그래머 3대 미덕을 잘 알고 있다. 게으름, 괴팍함, 그리고 자만심',
        source: '래리 월 (Larry Wall)',
    },
    {
        quote: '먼저 컴퓨터 과학과 모든 이론을 배워라. 다음엔 프로그래밍 방식을 개발하라. 그러고 나선 모두 잊고 그냥 파헤쳐라',
        source: '조지 커렛 (George Carrette)',
    },
    {
        quote: '당신의 컴퓨터에서 돌아가는 건 중요하지 않다. 당신의 컴퓨터로 서비스하는 게 아니기 때문이다',
        source: '비디우 플라톤 (Vidiu Platon)',
    },
    {
        quote: '컴퓨터 시스템 분석은 아이 양육과 같다. 견딜 수 없는 피해를 줄 순 있어도 성공을 보장할 순 없다',
        source: '톰 드마르코 (Tom DeMarco)',
    },
    {
        quote: '위 코드의 버그를 조심하라. 올바르다고 증명하기만 하고 실행해 보지는 않았다',
        source: '도날드 E 크누스 (Donald E. Knuth)',
    },
    {
        quote: '훌륭한 개발팀 없이 훌륭한 소프트웨어를 만들 수는 없다. 그러나 대부분의 개발팀은 문제 있는 가족들처럼 행동한다',
        source: '짐 매카시 (Jim McCarthy)',
    },
    {
        quote: '프로그래머의 문제점은 일이 너무 늦어질 때까지, 뭘하고 있는지 절대 물어볼 수 없다는 점이다',
        source: '시모어 크레이 (Seymour Cray)',
    },
    {
        quote: '올바로 작동하지 않는다고 걱정하지 마라. 모든 게 잘 되었다면, 내가 할 일이 없어진다',
        source: '제럴드 마빈 와인버그 (Gerald Marvin Weinberg)',
    },
    {
        quote: '무료 소프트웨어를 두려워하는 사람들은 자신들의 제품이 그것보다 못하기 때문이다',
        source: '데이비드 에머리 (David Emery)',
    },
    {
        quote: '당신이 6개월 이상 한 번도 보지 않은 코드는 다른 사람이 다시 만드는 게 훨씬 더 나을 수 있다',
        source: '이글슨 (Eagleson)',
    },
    {
        quote: '디버깅은 코드를 새로 만드는 것보다 두 배 더 어렵다. 그래서 만일 당신이 현재 공들여서 코드를 짜고 있다면, 디버깅할만큼 똑똑하지 않다는 뜻이기도 하다',
        source: '브라이언 커니건 (Brian Kernighan)',
    },
    {
        quote: '발명될 수 있는 것은 모두 발명되었다',
        source: '찰스 H. 듀얼 (Charles H. Duell)',
    },
    {
        quote: '에러 없는 프로그램을 만드는 데는 두가지 방법이 있다. 그런데  세번째 것만 작동한다',
        source: '앨런 J. 펄리스 (Alan J. Perlis)',
    },
    {
        quote: '당신은 소프트웨어 품질을 추구할 수도 있고, 포인터 연산을 할 수도 있다. 그러나 두 개를 동시에 할 수는 없다',
        source: '베르트랑 마이어 (Bertrand Meyer)',
    },
    {
        quote: '좋은 프로그래머는 자기 두뇌를 사용한다. 그러나 좋은 가이드라인은 모든 케이스를 고려해야만 하는 노력을 줄여준다',
        source: '프랜시스 글래스보로우 (Francis Glassborow)',
    },
    {
        quote: '대부분의 프로젝트는 기술이 아니라 인적 자원과 프로젝트 관리의 문제로 실패한다',
        source: 'R. Thomsett (R. 톰셋)',
    },
    {
        quote: '초과근무 시간 증가는 생상성 감소 기법이다. 스트레스를 받는 사람들은 머리가 빨리 돌아가지 않는 법이다',
        source: 'Tom DeMarco (톰 드마르코)',
    },
    {
        quote: '이미 수백 만 개의 타자기 앞에 수백 만 원숭이들이 앉아있지만 유즈넷에는 세익스피어가 없다',
        source: 'Blair Houghton (블레어 휴튼)',
    },
    {
        quote: '좋은 디자인은 자연을 닮았다. 자연을 닮은 것이 본질적으로 좋은 이유는 자연이 이미 오랜 세월 동안 문제를 해결하기 위해서 노력해 왔기 때문이다. 그렇기 때문에 어떤 답이 자연을 닮았다면 그것은 항상 좋은 신호다',
        source: 'Paul Graham (폴 그레이엄)',
    },
    {
        quote: '새로운 프로그래밍 언어를 배우는 유일한 방법은 그 언어로 프로그램을 만드는 것이다',
        source: 'Dennis Ritchie (데니스 리치)',
    },
    {
        quote: '버그보고 놀란가슴 오타보고 놀란다',
        source: '개발자 속담 (Programmer’s Proverbs)',
    },
    {
        quote: '생각이야말로 진정한 힘이다. 생각은 에너지인 것이다',
        source: 'Andrew Matthews (앤드류 매튜스)',
    },
    {
        quote: '공포로 인해 타협하지 말 것이며, 남이 나에게 타협하는 것을 두려워하지도 말라',
        source: 'Kennedy (케네디)',
    },
    {
        quote: '백 권의 책에 쓰인 말보다, 한 가지 성실한 마음이 더 크게 사람을 움직인다',
        source: 'Franklin (프랭클린)',
    },
    {
        quote: '끝을 맺기를 처음과 같이 하면 실패가 없다',
        source: 'Laozi (노자)',
    },
    {
        quote: '오늘이라는 날은 두 번 다시 오지 않는다는 것을 잊지 말라',
        source: 'Dante (단테)',
    },
    {
        quote: '일이 재미있으면 인생은 낙원이다. 일이 의무라면 인생은 지옥이다',
        source: 'Gorky (고리키)',
    },
    {
        quote: '바쁘다는 것만으로는 충분치 않다. 문제는 ‘무엇 때문에 바쁜가’이다',
        source: 'Henry David Thoreau (헨리 데이비드 소로)',
    },
    {
        quote: '중요한 건 당신이 어떻게 시작했는가가 아니라 어떻게 끝내는가 이다',
        source: 'Andrew Matthews (앤드류 매튜스)',
    },
    {
        quote: '직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다',
        source: 'Elbert Hubbard (엘버트 허버드)',
    },
    {
        quote: '삶을 사는 데는 단 두가지 방법이 있다. 하나는 기적이 전혀 없다고 여기는 것이고 또 다른 하나는 모든 것이 기적이라고 여기는방식이다',
        source: 'Albert Einstein (알베르트 아인슈타인)',
    },
    {
        quote: '소프트웨어 산업의 가장 놀라운 성과는 하드웨어 산업이 꾸준히 이루고 있는 성과들을 착실하게 갉아 먹고 있다는 것이다',
        source: 'Henry Petroski (헨리 페트로스키)',
    },
    {
        quote: '진정한 혁신이란 시장을 만들 수는 있지만, 소유할 힘은 없는 작은 스타트업으로부터 일어난다',
        source: 'Timm Martin (팀 마틴)',
    },
    {
        quote: '위대한 과학은 거인의 어깨 위에 거인이 올라선 경우처럼 대단하게 비유된다. 하지만, 소프트웨어 산업은 난쟁이 발가락 위에 난쟁이가 서있는 것처럼 매우 쉽게 이야기 된다',
        source: 'Alan Cooper (앨런 쿠퍼)',
    },
    {
        quote: '소프트웨어 설계를 하는 두 가지 방법이 있다. 하나는 빠진 게 없는지 쉽게 확인할 수 있도록 최대한 단순하게 만드는 것이고, 또 한가지는 빠진 게 없는지 확인할 수 없도록 최대한 복잡하게 만드는 것이다',
        source: 'Tony Hoare (토니 호어)',
    },
    {
        quote: '좋은 소프트웨어의 기능이란 복잡한 것을 간단하게 보이도록 만드는 것이다',
        source: 'Grady Booch (그래디 부치)',
    },
    {
        quote: '책 보고 따라 해도 안된다고, 스스로 자책하지 마라. 진짜 멍청이들은 일반인들이 사용할 수 없도록 하드웨어와 소프트웨어를 만든 사람들이다. 사람들이 컴퓨터를 사주는데도 말이다. 우리는 그들을 컴퓨터 전문가라고 부른다',
        source: 'Walter Mossberg (월터 모스버그)',
    },
    {
        quote: '컴퓨터가 핸드폰과 비슷한 수준으로 쉬워지기를 바랐던 남자가 있었다. 그러자 휴대폰 사용법이 컴퓨터만큼 어려워지면서 그 소원이 자연스레 이루어지게 되었다',
        source: 'Bjarne Stroustrup (비야네 스트롭스트룹)',
    },
    {
        quote: '고객을 ‘유저’라고 부르는 산업은 딱 두 개가 있다. 마약 그리고 IT',
        source: 'Edward Tufte (에드워드 터프테)',
    },
    {
        quote: '해커란 7,8명의 개발자들이 1년 동안 어렵게 개발하는 것들을 단 몇달 만에 혼자서 개발할 수 있는 사람을 말한다. IBM은 어떤 프로그래머들은 다른 이들보다 100배 이상의 더 많은 일을 할 수 있다고 보고했었다',
        source: 'Peter Seebach (피터 시바흐)',
    },
    {
        quote: '훌륭한 기계공은 일반 기계공보다 몇배의 급여를 더 높이 받는다. 그러나 훌륭한 코드를 만들어내는 개발자는 일반적인 개발자보다 1만배 이상의 가치가 있다',
        source: 'Bill Gates (빌 게이츠)',
    },
    {
        quote: '코드의 90%는 개발 시간의 90%를 설명해준다. 나머지 10%는 그 시간에 일어났던 다른 일의  90%를 설명해준다',
        source: 'Tom Cargill (톰 카길)',
    },
    {
        quote: '에러 없는 프로그램을 만드는 데는 두가지 방법이 있다. 그런데 세번째 것만 작동한다',
        source: 'Alan J. Perlis (앨런 J. 펄리스)',
    },
    {
        quote: '자동차가 컴퓨터와 같은 개발공정을 따랐다면, 롤스로이스는 100달러쯤에 살 수 있고 연비도 백만마일 정도 될거다. 하지만 일년에 한 번씩 폭발해 버리는 살인머신이 되어버릴거다',
        source: 'Robert X. Cringely (로버트 X. 크링글리)',
    },
];

function randomQuote() {
    let random = quotes[Math.floor(Math.random() * quotes.length)];
    quotation.innerText = `“ ${random.quote}. ”`;
    source.innerText = ` ${random.source} `;
}
randomQuote();
document.querySelector('.bq-randomBtn').addEventListener('click', randomQuote);
