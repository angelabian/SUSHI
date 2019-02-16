var video1;
var video2;
var video3;
var video4;
var playPoem = document.getElementById('playPoem'); /** 跑馬燈文字區 */
var youtubeSRC; /** 紀錄當前影片網址，前往YouTube觀看用 */
var marquee; /** 跑馬燈，播放/暫停用 */
var player; /** 現正播放video */
var nowStatus; /** 播放模式，1播放、0暫停 */
var poemIMG = document.getElementById('poemIMG'); /** 播放圖案 */

var poem1 = "春望  杜甫<br><br>國破山河在，城春草木深。<br><br>感時花濺淚，恨別鳥驚心。<br><br>峰火連三月，家書抵萬金。<br><br>白頭搔更短，渾欲不勝簪。</marquee>";
var poem2 = "後赤壁賦　　蘇軾<br><br>是歲十月之望，步自雪堂，將歸于臨皋。<br><br>二客從予過黃泥之坂。<br><br>霜露既降，木葉盡脫；人影在地，仰見明月。<br><br>顧而樂之，行歌相答。已而嘆曰︰<br><br>「有客無酒，有酒無肴，月白風清，如此良夜何？」<br><br>客曰︰「今者薄暮，舉網得魚，<br><br>巨口細鱗，狀如松江之鱸。顧安所得酒乎？」<br><br>歸而謀諸婦。<br><br>婦曰︰「我有斗酒，藏之久矣，以待子不時之需 。」<br><br><br>於是攜酒與魚，復遊於赤壁之下。<br><br> 江流有聲，斷岸千尺，山高月小，水落石出。<br><br>曾日月之幾何，而江山不可復識矣。<br><br>予乃攝衣而上，履巉岩，披蒙茸，踞虎豹，登虬龍，<br><br>攀栖鶻之危巢，俯馮夷之幽宮。<br><br>蓋二客不能從焉。<br><br>劃然長嘯，草木震動，山鳴谷應，風起水湧。<br><br>予亦悄然而悲，肅然而恐，凜乎其不可留也。<br><br>反而登舟，放乎中流，聽其所止而休焉。<br><br><br>時夜將半，四顧寂寥。<br><br>適有孤鶴，橫江東來，<br><br>翅如車輪，玄裳縞衣，戛然長鳴，掠予舟而西也。<br><br>須臾客去，予亦就睡。<br><br>夢一道士，羽衣蹁躚，<br><br>過臨皋之下，揖予而言曰︰「赤壁之遊樂乎？」<br><br>問其姓名，俛而不答。<br><br>「嗚呼！噫嘻！我知之矣。<br><br>疇昔之夜，飛鳴而過我者 ，非子也耶？」<br><br>道士顧笑，予亦驚悟。開戶視之，不見其處。</marquee>";
var poem3 = "<br>念奴嬌 赤壁懷古　　蘇軾<br><br><br><br><br>大江東去，浪淘盡、千古風流人物。<br><br>故壘西邊，人道是：三國周郎赤壁。<br><br>亂石穿空，驚濤拍岸，捲起千堆雪。<br><br>江山如畫，一時多少豪傑。<br><br><br>遙想公瑾當年，小喬初嫁了，雄姿英發。<br><br>羽扇綸巾，談笑間、強虜灰飛煙滅。<br><br>故國神遊，多情應笑我，早生華髮。<br><br>人生如夢，一尊還酹江月。<br><br><br><br><br><br><br><br><br>大江東去，浪淘盡、千古風流人物。<br><br>故壘西邊，人道是：三國周郎赤壁。<br><br>亂石穿空，驚濤拍岸，捲起千堆雪。<br><br>江山如畫，一時多少豪傑。<br><br><br>遙想公瑾當年，小喬初嫁了，雄姿英發。<br><br>羽扇綸巾，談笑間、強虜灰飛煙滅。<br><br>故國神遊，多情應笑我，早生華髮。<br><br>人生如夢，一尊還酹江月。<br><br><br><br><br><br><br><br><br><br><br><br><br><br>遙想公瑾當年，小喬初嫁了，雄姿英發。<br><br>羽扇綸巾，談笑間、強虜灰飛煙滅。<br><br>故國神遊，多情應笑我，早生華髮。<br><br>人生如夢，一尊還酹江月。<br><br><br><br>人生如夢，一尊還酹江月。";
var poem4 = "<br>水調歌頭　　蘇軾<br><br><br><br><br><br>明月幾時有？<br><br>把酒問青天。<br><br>不知天上宮闕，<br><br>今夕是何年？<br><br><br>我欲乘風歸去，<br><br>唯恐瓊樓玉宇，<br><br>高處不勝寒。<br><br>起舞弄清影，<br><br>何似在人間？<br><br><br>轉朱閣，低綺戶，照無眠。<br><br>不應有恨，<br><br>何事長向別時圓？<br><br><br>人有悲歡離合，<br><br>月有陰晴圓缺，<br><br>此事古難全。<br><br>但願人長久，<br><br>千里共嬋娟。<br><br><br><br><br><br><br><br><br><br>轉朱閣，低綺戶，照無眠。<br><br>不應有恨，<br><br>何事長向別時圓？<br><br><br><br><br>人有悲歡離合，<br><br>月有陰晴圓缺，<br><br>此事古難全。<br><br>但願人長久，<br><br>千里共嬋娟。";

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)
    video1 = new YT.Player('video1', {
        events: {
            // call this function when player is ready to use
            'onReady': play
        }
    });
    video2 = new YT.Player('video2', {
        events: {
            'onReady': play
        }
    });
    video3 = new YT.Player('video3', {
        events: {
            'onReady': play
        }
    });
    video4 = new YT.Player('video4', {
        events: {
            'onReady': play
        }
    });
}

/** 點擊圖案，啟動播放 */
function play(playID) {
    stopAll();
    var wishDelay = '85';
    if (document.getElementById('baseIMG').offsetHeight < 485) {
        wishDelay = '130';
    }
    var poemContent = "<marquee id='Marquee' direction='up' scrolldelay='" + wishDelay + "' scrollamount='1' behavior='scroll' loop=1 >";
    if (playID == 'footprint') {
        video1.playVideo();
        playPoem.innerHTML = poemContent + poem1;
        youtubeSRC = 'https://youtu.be/iCwKqC8vJNU';
        player = video1;
        poemIMG.src = 'img/chang an city.jpg';
    } else if (playID == 'chibi2') {
        video2.playVideo();
        playPoem.innerHTML = poemContent + poem2;
        youtubeSRC = 'https://youtu.be/bBMN_gOuPk8';
        player = video2;
    } else if (playID == 'chibi3') {
        video3.playVideo();
        poemContent = "<marquee id='Marquee' direction='up' scrolldelay='130' scrollamount='2' behavior='scroll' loop=1 >"
        if (document.getElementById('baseIMG').offsetHeight < 485) {
            poemContent = "<marquee id='Marquee' direction='up' scrolldelay='100' scrollamount='1' behavior='scroll' loop=1 >"
        }
        playPoem.innerHTML = poemContent + poem3;
        youtubeSRC = 'https://youtu.be/ctMp0Wccc8s';
        player = video3;
    } else if (playID == 'sushi1') {
        video4.playVideo();
        playPoem.innerHTML = poemContent + poem4;
        youtubeSRC = 'https://youtu.be/CQlt3-6N1P8';
        player = video4;
    }
    if (playID != undefined && playID.length > 0) {
        document.getElementById('playBar').style.visibility = 'visible';
        document.getElementById('Marquee').style.height = (document.getElementById('baseIMG').offsetHeight * 0.55).toString() + 'px';
    }
    marquee = document.getElementById('Marquee');
    nowStatus = 1;
}

/** 暫停/播放 → 按鍵轉換、跑馬燈文字、影片(聲音) */
function playPause() {
    if (nowStatus == 1) {
        document.getElementById('playPause').style.cssText = 'height: 2vw;border-style: solid;border-width: 1vw 0 1vw 1.6vw;border-color: transparent transparent transparent #3C232A;cursor: pointer;margin-right: .5vw;';
        nowStatus = 0;
        player.pauseVideo();
        marquee.stop();
    } else if (nowStatus == 0) {
        document.getElementById('playPause').style.cssText = 'width: 2vw;height: 2vw;border-style: double;border-width: 0 0 0 1vw;border-color: #3C232A;cursor: pointer;margin-right: .5vw;';
        nowStatus = 1;
        player.playVideo();
        marquee.start();
    }
}

/** 停止影片播放、隱藏播放控制區、清空相關欄位 */
function stopAll() {
    document.getElementById('playBar').style.visibility = 'hidden';
    playPoem.innerHTML = '';
    video1.stopVideo();
    video2.stopVideo();
    video3.stopVideo();
    video4.stopVideo();
    youtubeSRC = '';
    poemIMG.src = '';
}

/** 前往YouTube觀看 */
function gotoYouTube() {
    window.open(youtubeSRC);
}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);