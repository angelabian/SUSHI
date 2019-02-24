var player; /** 現正播放video */
var videoFrame = document.getElementById('youtube'); /** 影片 */
var baseIMG = document.getElementById('baseIMG'); /** 底圖 */
var description = document.getElementById('description') /** 說明文字 */

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)
    player = new YT.Player('youtube', {
        events: {
            // call this function when player is ready to use
            'onReady': play
        }
    });
}

/** 點擊圖案，啟動播放 */
function play(playID) {
    stopAll();
    if (playID == 'footprint1') {
        youtubeSRC = 'https://youtu.be/pypnl8QA4BE';
        player.loadVideoById('pypnl8QA4BE');
        description.innerHTML = "天寶十四年（755）十一月，安祿山起兵叛唐。次年六月，叛軍攻陷潼關，唐玄宗匆忙逃往四川。七月，太子李亨即位於靈武（今寧夏）。杜甫聞訊，即將家屬安頓在都州，隻身一人投奔肅宗朝廷，結果不幸在途中被叛軍俘獲，解送至長安，後因官職卑微才未被囚禁。至德二年春，身處淪陷區的杜甫目睹了長安城一片蕭條零落的景象，百感交集，便寫下了這首傳誦千古的名作。<a onclick='goto(1)' >原文網址</a>";
    } else if (playID == 'footprint2') {
        youtubeSRC = 'https://youtu.be/-QS7ffWxKWg?t=10';
        player.loadVideoById({
            'videoId': '-QS7ffWxKWg',
            'startSeconds': 10
        });
        description.innerHTML = "這首詩寫於761年（上元二年）春。杜甫在經過一段時間的流離轉徙的生活後，終因陝西旱災而來到四川成都定居，開始了在蜀中的一段較為安定的生活。作此詩時，他已在成都草堂定居兩年。他親自耕作，種菜養花，與農民交往，對春雨之情很深，因而寫下了這首描寫春夜降雨、潤澤萬物的美景詩作。<a onclick='goto(1)' >原文網址</a>";
    } else if (playID == 'footprint3') {
        youtubeSRC = 'https://youtu.be/95GcANELXik';
        player.loadVideoById('95GcANELXik');
        description.innerHTML = "《聞官軍收河南河北》作於廣德元年（公元763年）春天，那時杜甫52歲。寶應元年（公元762年）冬季，唐軍在洛陽附近的衡水打了一個大勝仗，收復了洛陽和鄭（今河南鄭州）、汴（今河南開封）等州，叛軍頭領薛嵩、張忠志等紛紛投降。第二年，史思明的兒子史朝義兵敗自縊，其部將田承嗣、李懷仙等相繼投降，至此，持續七年多的「安史之亂」宣告結束。杜甫是一個熱愛祖國而又飽經喪亂的詩人，當時正流落在四川。他聽聞消息後，欣喜若狂，恨不得馬上回到和平、安定的家鄉。<a onclick='goto(1)' >原文網址</a>";
    } else if (playID == 'footprint4') {
        youtubeSRC = 'https://youtu.be/K7Jv4CMmjs0';
        player.loadVideoById('K7Jv4CMmjs0');
        description.innerHTML = "此詩作於唐代宗大曆二年（767年）秋天，杜甫時在夔州。這是五十六歲的老詩人在極端困窘的情況下寫成的。當時安史之亂已經結束四年了，但地方軍閥又乘時而起，相互爭奪地盤。杜甫本入嚴武幕府，依託嚴武。不久嚴武病逝，杜甫失去依靠，只好離開經營了五六年的成都草堂，買舟南下。本想直達夔門，卻因病魔纏身，在雲安待了幾個月後才到夔州。如不是當地都督的照顧，他也不可能在此一住就是三個年頭。而就在這三年里，他的生活依然很困苦，身體也非常不好。一天他獨自登上夔州白帝城外的高台，登高臨眺，百感交集。望中所見，激起意中所觸；蕭瑟的秋江景色，引發了他身世飄零的感慨，滲入了他老病孤愁的悲哀。於是，就有了這首被譽為「七律之冠」的《登高》。<a onclick='goto(1)' >原文網址</a>";
    } else if (playID == 'footprint5') {
        youtubeSRC = 'https://youtu.be/Q-EaCHKwXwE';
        player.loadVideoById('Q-EaCHKwXwE');
        description.innerHTML = "這首詩是759年（乾元二年）秋杜甫在秦州所作。這年九月，安史之亂，安祿山、史思明從范陽引兵南下，攻陷汴州，西進洛陽，山東、河南都處於戰亂之中。當時，杜甫的幾個弟弟正分散在這一帶，由於戰事阻隔，音信不通，引起他強烈的憂慮和思念。詩中寫兄弟因戰亂而離散，杳無音信。在異鄉的戍鼓和孤雁聲中觀賞秋夜月露，只能倍增思鄉憶弟之情。顛沛流離中的詩人杜甫，看到山河破碎，思念不知生死的兄弟，更為國家而悲痛。<a onclick='goto(1)' >原文網址</a>";
    } else if (playID == 'footprint6') {
        youtubeSRC = 'https://youtu.be/eKxza5mdmDU?t=19';
        player.loadVideoById({
            'videoId': 'eKxza5mdmDU',
            'startSeconds': 19
        });
        description.innerHTML = "此詩大概作於公元770年（大曆五年）杜甫在長沙的時候。安史之亂後，杜甫漂泊到江南一帶，和流落的宮廷歌唱家李龜年重逢，回憶起在岐王和崔九的府第頻繁相見和聽歌的情景而感慨萬千寫下這首詩。<a onclick='goto(1)' >原文網址</a>";
    } else if (playID == 'footprint7') {
        youtubeSRC = 'https://youtu.be/3w3auuxnpLo';
        player.loadVideoById('3w3auuxnpLo');
        description.innerHTML = "歷下亭歷史悠久，久經滄桑，位置多有變遷。北魏時在五龍潭處，酈道元《水經注》稱「客亭」，是官家為迎賓接使所建。唐初始稱「歷下亭」。天寶四年杜甫到臨邑看望其弟杜穎，路經濟南，適逢北海太守李邕至濟南，在此亭宴請杜甫及濟南名士，杜甫當即賦《陪李北海宴歷下亭》詩一首：「 東藩駐皂蓋，北渚凌清河。海右此亭古，濟南名士多。 雲山已發興，玉佩仍當歌，修竹不受暑，交流空湧波。 蘊真愜所遇，落日將如何。貴賤俱物役，從公難重過。」 <a onclick='goto(2)' >原文網址</a>";
    } else if (playID == 'footprint8') {
        youtubeSRC = 'https://youtu.be/BlK8UtYZ8p0';
        player.loadVideoById('BlK8UtYZ8p0');
        description.innerHTML = "這首詩是杜甫乘舟行經渝州（今重慶）、忠軸(今重慶市忠州)時寫下的。當時的杜甫已53歲，且常年有病，國家時局不穩，自己生活沒有着落，又無定蹤，因此一路上他心情十分沉重，這首詩集中表現了他的這種心情。 <a onclick='goto(3)' >原文網址</a>";
    } else if (playID == 'footprint9') {
        youtubeSRC = 'https://youtu.be/nKU3AulK-Bo';
        player.loadVideoById('nKU3AulK-Bo');
        description.innerHTML = "唐玄宗天寶年間，朝廷對邊疆少數民族頻繁發動進攻。八載（749），哥舒翰奉命進攻吐蕃石堡城（在今青海省境內），久攻不下，後雖僥倖取勝，但所部六萬三千人損失大半；到這年冬天，所派駐龍駒島（在青海湖中）的二千戍卒也全軍覆沒。十載（751）四月，劍南節度使鮮于仲通又奉命進攻南詔（主要轄境在今雲南省），結果大敗，士卒死者六萬人，仲通僅以身免。 <a onclick='goto(3)' >原文網址</a>";
    }
    if (playID != undefined && playID.length > 0) {
        player.playVideo();
        videoFrame.height = baseIMG.offsetHeight / 2;
        videoFrame.style.visibility = 'visible';
    }
}

/** 停止影片播放 */
function stopAll() {
    description.innerHTML = "";
    player.stopVideo();
}

/** 文字參考網址 */
function goto(thisPage) {
    var thisSRC;
    if (thisPage == 1) {
        thisSRC = 'https://kknews.cc/zh-tw/history/jrybqol.html?fbclid=IwAR3sHm43IOakUgD8B-_JWcYAWWMcylLI3JDfH3Bl1fGm42uhj3BnuebPEBo';
    } else if (thisPage == 2) {
        thisSRC = 'http://rthk9.rthk.hk/elearning/travel/articles/12/f12_01_02_02_01.htm';
    } else if (thisPage == 3) {
        thisSRC = 'https://fanti.dugushici.com/ancient_proses/10967';
    }
    window.open(thisSRC);
}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);