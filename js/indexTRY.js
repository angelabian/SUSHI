var video1;
var video2;
var video3;
var video4;
var playPoem = document.getElementById('playPoem'); /** 跑馬燈文字區 */
var youtubeSRC; /** 紀錄當前影片網址，前往YouTube觀看用 */
var marquee; /** 跑馬燈，播放/暫停用 */
var player; /** 現正播放video */
var nowStatus; /** 播放模式，1播放、0暫停 */
var modeStatus = document.getElementById('modeStatus'); /** 預覽/編輯 切換 */
var baseIMG = document.getElementById('baseIMG'); /** 底圖 */
var updateBlock = document.getElementById('updateBlock'); /** 編輯區，visibility：visible/hidden */
var updateIMG; /** 當前編輯圖片，放大縮小用 */

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

function play(playID) {
    stopAll();
    var wishDelay = '85';
    if (document.getElementById('baseIMG').offsetHeight < 485) {
        wishDelay = '130';
    }
    var poemContent = "<marquee id='Marquee' direction='up' scrolldelay='" + wishDelay + "' scrollamount='1' behavior='scroll' loop=1 >";
    if (playID == 'chibi1') {
        video1.playVideo();
        playPoem.innerHTML = poemContent + poem1;
        youtubeSRC = 'https://youtu.be/D50nzA0qZLE';
        player = video1;
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

function stopAll() {
    document.getElementById('playBar').style.visibility = 'hidden';
    playPoem.innerHTML = '';
    video1.stopVideo();
    video2.stopVideo();
    video3.stopVideo();
    video4.stopVideo();
    youtubeSRC = '';
}

function gotoYouTube() {
    window.open(youtubeSRC);
}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

/** 預覽/編輯 切換 */
function modeChange() {
    if (modeStatus.innerText == 'Edit') {
        modeStatus.innerText = 'View';
        modeStatus.style.backgroundColor = '#3C232A';
        stopAll();
        modeStatus.title = '退出編輯';
        updateBlock.style.visibility = 'visible';
    } else if (modeStatus.innerText == 'View') {
        modeStatus.innerText = 'Edit';
        modeStatus.style.backgroundColor = 'rgba(60, 35, 42, .6)';
        modeStatus.title = '進行編輯';
        updateBlock.style.visibility = 'hidden';
        checkAllIMGs();
        document.getElementById('updateIMG').style.visibility = 'hidden';
    }
}

/** 上傳圖片 PHP處理 */
$(document).ready(function (e) {
    /** 底圖 */
    $("#uploadMain").on('submit', (function (e) {
        e.preventDefault();
        $.ajax({
            url: "php/uploadMain.php",
            type: "POST",
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function (data) {
                if (data.substring(0, 5) == 'Sorry') {
                    alert(data);
                } else {
                    $("#baseIMG").html(data);
                }
            },
            error: function () {
            }
        });
    }));
    /** 圖案 */
    $("#uploadImages").on('submit', (function (e) {
        e.preventDefault();
        $.ajax({
            url: "php/uploadIMG.php",
            type: "POST",
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function (data) {
                if (data.substring(0, 5) == 'Sorry') {
                    alert(data);
                } else {
                    $("#images").append(data);
                }
            },
            error: function () {
            }
        });
    }));
});

/** 啟動該圖案編輯模式 */
function editIMG(e) {
    checkAllIMGs();
    e.className += ' editIMG';
    document.getElementById('updateIMG').style.visibility = 'visible';
    updateIMG = e;
}

/** 檢查所有圖片，拿掉editIMG類別(class)*/
function checkAllIMGs() {
    var images = document.getElementById('images').getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        if ((' ' + images[i].className + ' ').indexOf(' editIMG ') > -1) {
            images[i].className = images[i].className.replace(" editIMG", "");
        }
    }
}

/** 圖案放大，不可大過底圖 */
function magnify() {
    if (updateIMG.offsetWidth < baseIMG.offsetWidth && updateIMG.offsetHeight < baseIMG.offsetHeight) {
        updateIMG.style.height = updateIMG.height * 1.1 / document.documentElement.clientHeight * 100 + 'vh';
    }
}

/** 圖案縮小，不可小過視窗的3% */
function minify() {
    if (updateIMG.offsetWidth > screen.width * 0.03 && updateIMG.offsetHeight > screen.height * 0.03) {
        updateIMG.style.height = updateIMG.height * 0.9 / document.documentElement.clientHeight * 100 + 'vh';
    }
}

/** 拖曳圖案 */
function draDIV(elmnt) {
    console.log(elmnt);
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + 'px';
        elmnt.style.left = (elmnt.offsetLeft - pos1) + 'px';
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}