var player; /** 現正播放video */
var videoFrame = document.getElementById('youtube'); /** 影片 */
var baseIMG = document.getElementById('baseIMG'); /** 底圖 */
var description = document.getElementById('description') /** 說明文字 */
var url = ['', '10615', '10748', '10844', '10878', '10666', '11306', '10158', '10967','10163']

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
        youtubeSRC = 'https://youtu.be/iCwKqC8vJNU';
        player.loadVideoById('iCwKqC8vJNU');
        description.innerHTML = "這是一首五言律詩，作於唐肅宗至德二年（757）。當時長安被安史叛軍焚掠一空，滿目淒涼。杜甫眼見山河依舊而國破家亡，春回大地卻滿城荒涼，在此身歷逆境、思家情切之際，不禁觸景傷情，發出深重的憂傷和無限的感慨。<a onclick='goto(1)' >原文網址</a>";
    } else if (playID == 'footprint2') {
        youtubeSRC = 'https://youtu.be/-QS7ffWxKWg?t=10';
        player.loadVideoById({
            'videoId': '-QS7ffWxKWg',
            'startSeconds': 10
        });
        description.innerHTML = "這首詩寫於761年（上元二年）春。杜甫在經過一段時間的流離轉徙的生活後，終因陝西旱災而來到四川成都定居，開始了在蜀中的一段較為安定的生活。作此詩時，他已在成都草堂定居兩年。他親自耕作，種菜養花，與農民交往，對春雨之情很深，因而寫下了這首描寫春夜降雨、潤澤萬物的美景詩作。<a onclick='goto(2)' >原文網址</a>";
    } else if (playID == 'footprint3') {
        youtubeSRC = 'https://youtu.be/N7-JNjaCBUc';
        player.loadVideoById('N7-JNjaCBUc');
        description.innerHTML = "作於公元763年（廣德元年）春天，持續七年多的「安史之亂」宣告結束。杜甫是一個熱愛祖國而又飽經喪亂的詩人，當時正流落在四川。他聽聞消息後，欣喜若狂，恨不得馬上回到和平、安定的家鄉。<a onclick='goto(3)' >原文網址</a>";
    } else if (playID == 'footprint4') {
        youtubeSRC = 'https://youtu.be/K7Jv4CMmjs0';
        player.loadVideoById('K7Jv4CMmjs0');
        description.innerHTML = "這首詩作於公元767年（唐代宗大曆二年）秋天，安史之亂已經結束四年了，但地方軍閥又乘時而起，相互爭奪地盤。杜甫獨自登上夔州白帝城外的高臺，登高臨眺，百感交集。望中所見，激起意中所觸；蕭瑟的秋江景色，引發了他身世飄零的感慨，滲入了他老病孤愁的悲哀。<a onclick='goto(4)' >原文網址</a>";
    } else if (playID == 'footprint5') {
        youtubeSRC = 'https://youtu.be/Q-EaCHKwXwE';
        player.loadVideoById('Q-EaCHKwXwE');
        description.innerHTML = "這首詩是759年（乾元二年）秋杜甫在秦州所作。這年九月，安史之亂，安祿山、史思明從范陽引兵南下，攻陷汴州，西進洛陽，山東、河南都處於戰亂之中。當時，杜甫的幾個弟弟正分散在這一帶，由於戰事阻隔，音信不通，引起他強烈的憂慮和思念。詩中寫兄弟因戰亂而離散，杳無音信。在異鄉的戍鼓和孤雁聲中觀賞秋夜月露，只能倍增思鄉憶弟之情。顛沛流離中的詩人杜甫，看到山河破碎，思念不知生死的兄弟，更為國家而悲痛。<a onclick='goto(5)' >原文網址</a>";
    } else if (playID == 'footprint6') {
        youtubeSRC = 'https://youtu.be/-erKdyU0o7I';
        player.loadVideoById('-erKdyU0o7I');
        description.innerHTML = "此詩大概作於公元770年（大曆五年）杜甫在長沙的時候。安史之亂後，杜甫漂泊到江南一帶，和流落的宮廷歌唱家李龜年重逢，回憶起在岐王和崔九的府第頻繁相見和聽歌的情景而感慨萬千寫下這首詩。<a onclick='goto(6)' >原文網址</a>";
    } else if (playID == 'footprint7') {
        youtubeSRC = 'https://youtu.be/3w3auuxnpLo';
        player.loadVideoById('3w3auuxnpLo');
        description.innerHTML = "《陪李北海宴歷下亭》東藩駐皂蓋，北渚凌清河。海右此亭古，濟南名士多。雲山已發興，玉佩仍當歌，修竹不受暑，交流空湧波。蘊真愜所遇，落日將如何。貴賤俱物役，從公難重過。<a onclick='goto(7)' >原文網址</a>";
    } else if (playID == 'footprint8') {
        youtubeSRC = 'https://youtu.be/BlK8UtYZ8p0';
        player.loadVideoById('BlK8UtYZ8p0');
        description.innerHTML = "這首詩是杜甫乘舟行經渝州（今重慶）、忠軸(今重慶市忠州)時寫下的。當時的杜甫已53歲，且常年有病，國家時局不穩，自己生活沒有着落，又無定蹤，因此一路上他心情十分沉重，這首詩集中表現了他的這種心情。 <a onclick='goto(8)' >原文網址</a>";
    } else if (playID == 'footprint9') {
        youtubeSRC = 'https://youtu.be/nKU3AulK-Bo';
        player.loadVideoById('nKU3AulK-Bo');
        description.innerHTML = "唐玄宗天寶年間，朝廷對邊疆少數民族頻繁發動進攻。八載（749），哥舒翰奉命進攻吐蕃石堡城（在今青海省境內），久攻不下，後雖僥倖取勝，但所部六萬三千人損失大半；到這年冬天，所派駐龍駒島（在青海湖中）的二千戍卒也全軍覆沒。十載（751）四月，劍南節度使鮮于仲通又奉命進攻南詔（主要轄境在今雲南省），結果大敗，士卒死者六萬人，仲通僅以身免。 <a onclick='goto(9)' >原文網址</a>";
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
    window.open("https://fanti.dugushici.com/ancient_proses/" + url[thisPage]);
}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);