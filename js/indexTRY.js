var playPoem = document.getElementById('playPoem'); /** 跑馬燈文字區 */
var youtubeSRC; /** 紀錄當前影片網址，前往YouTube觀看用 */
var player1; /** 現正播放voice */
var nowStatus; /** 播放模式，1播放、0暫停 */
var modeStatus = document.getElementById('modeStatus'); /** 預覽/編輯 切換 */
var baseIMG = document.getElementById('baseIMG'); /** 底圖 */
var updateBlock = document.getElementById('updateBlock'); /** 編輯區，visibility：visible/hidden */
var updateIMG; /** 當前編輯圖片，放大縮小用 */
var editArray = JSON.parse('[]'); /** {image:圖片名稱,voive:音源網址,video:網址,words:說明文字,marquee:跑馬燈文字} */
var nowVoice = document.getElementById('voiceURL'); /** 現正編輯圖案的音源網址 */
var nowIndex; /** 現正編輯圖案的影片index */
var videoFrame = document.getElementById('videoFrame'); /** 影片區(隱藏) */
var nowVideo = document.getElementById('videoURL'); /** 現正編輯圖案的影片網址 */
var videoShow = document.getElementById('videoShow') /** 影片，編輯/預覽 切換 */
var player2; /** 現正播放video */
var prePosition = document.getElementById('prePosition'); /** 編輯影片 */
var youtube = document.getElementById('youtube'); /** 預覽影片 */
youtube.style.width = prePosition.offsetWidth + 'px';
youtube.style.height = prePosition.offsetHeight + 'px';
var nowDescription = document.getElementById('description'); /** 說明文字(輸入) */
var desShow = document.getElementById('desShow'); /** 說明文字，編輯/預覽 切換 */
var desPosition = document.getElementById('desPosition'); /** 編輯說明文字 */
var nowMarquee = document.getElementById('marqueeDes'); /** 跑馬燈(輸入) */
var marqueeShow = document.getElementById('marqueeShow'); /** 跑馬燈，編輯/預覽 切換 */
var marqPosition = document.getElementById('marqPosition'); /** 編輯跑馬燈 */
var marquee = document.getElementById('marquee'); /** 預覽跑馬燈 */


// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)
    player1 = new YT.Player('videoFrame', {
        events: {
            'onReady': play
        }
    });
    player2 = new YT.Player('youtube', {
        events: {
            'onReady': play
        }
    });
}

/** 取得影片ID */
function getVideoID(videoHere) {
    var videoID;
    if (videoHere.startsWith("https://www.youtube.com/watch?")) {
        videoID = videoHere.substr(videoHere.indexOf("v=") + 2, 11);
    } else if (videoHere.startsWith("https://www.youtube.com/embed/")) {
        videoID = videoHere.replace("https://www.youtube.com/embed/", "");
        videoID = videoID.substring(0, 11);
    } else if (videoHere.startsWith("https://youtu.be/")) {
        videoID = videoHere.replace("https://youtu.be/", "");
        videoID = videoID.substring(0, 11);
    } else {
        videoID = '';
    }
    return videoID;
}

/** 點擊圖案，即播放 */
function play(e) {
    stopAll();
    var imgName = e.src.replace(window.location.origin + '/SUSHI/img/customer/', ''); /** 取得圖片名稱.格式 */
    var position = imgName.indexOf('.');
    var nowIMG = imgName.substring(0, position);
    var indexHere;
    for (var i = 0; i < editArray.length; i++) {
        if (editArray[i].image == nowIMG) {
            indexHere = i;
            break;
        }
    }
    var thisVoiceID = getVideoID(editArray[indexHere].voice);
    var thisVideoID = getVideoID(editArray[indexHere].video);
    if (thisVoiceID != '') {
        player1.loadVideoById(thisVoiceID);
        youtubeSRC = "https://youtu.be/" + thisVoiceID;
        document.getElementById('playBar').style.visibility = 'visible';
        nowStatus = 1;
        document.getElementById('playPause').style.cssText = 'width: 2vw;height: 2vw;border-style: double;border-width: 0 0 0 1vw;border-color: #3C232A;cursor: pointer;margin-right: .5vw;';
        player1.playVideo();
    }
    if (thisVideoID != '') {
        player2.loadVideoById(thisVideoID);
        videoShow.style.visibility = 'visible';
        player2.playVideo();
    }
    if (editArray[indexHere].words != '') {
        desShow.style.visibility = 'visible';
        desPosition.innerText = editArray[indexHere].words;
    }
    if (editArray[indexHere].marquee != '') {
        marqPosition.innerHTML = "<marquee class='image' id='marquee' direction='up' scrolldelay='100' scrollamount='1' behavior='scroll' loop=1>跑馬燈測試<br>跑馬燈測試<br>" + editArray[indexHere].marquee + "</marquee>";
        marqueeShow.style.visibility = 'visible';
    }
}

/** 0-暫停/1-播放 → 按鍵轉換、跑馬燈文字、影片(聲音) */
function playPause() {
    if (nowStatus == 1) {
        document.getElementById('playPause').style.cssText = 'height: 2vw;border-style: solid;border-width: 1vw 0 1vw 1.6vw;border-color: transparent transparent transparent #3C232A;cursor: pointer;margin-right: .5vw;';
        nowStatus = 0;
        player1.pauseVideo();
        marquee.stop();
    } else if (nowStatus == 0) {
        document.getElementById('playPause').style.cssText = 'width: 2vw;height: 2vw;border-style: double;border-width: 0 0 0 1vw;border-color: #3C232A;cursor: pointer;margin-right: .5vw;';
        nowStatus = 1;
        player1.playVideo();
        marquee.start();
    }
}

/** 停止播放，清空相關變數 */
function stopAll() {
    document.getElementById('playBar').style.visibility = 'hidden';
    player1.stopVideo();
    youtubeSRC = '';
    videoShow.style.visibility = 'hidden';
    player2.stopVideo();
    desShow.style.visibility = 'hidden';
    desPosition.innerText = '';
    marqueeShow.style.visibility = 'hidden';
    marqPosition.innerHTML = '';
}

/** 前往網址觀賞 */
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
    if (modeStatus.innerText == '編輯') {
        stopAll();
        modeStatus.innerText = '預覽';
        modeStatus.style.backgroundColor = '#3C232A';
        modeStatus.title = '退出編輯';
        updateBlock.style.visibility = 'visible';
        document.getElementById('playBar').style.visibility = 'hidden';
        editView(1);
        videoShow.style.visibility = 'hidden';
        prePosition.style.display = 'initial';
        youtube.style.display = 'none';
        desShow.style.visibility = 'hidden';
        marqueeShow.style.visibility = 'hidden';
    } else if (modeStatus.innerText == '預覽') {
        modeStatus.innerText = '編輯';
        modeStatus.style.backgroundColor = 'rgba(60, 35, 42, .6)';
        modeStatus.title = '進行編輯';
        updateBlock.style.visibility = 'hidden';
        checkAllIMGs();
        document.getElementById('updateIMG').style.visibility = 'hidden';
        editView(0);
        videoShow.style.visibility = 'hidden';
        prePosition.style.display = 'none';
        youtube.style.display = 'initial';
        desShow.style.visibility = 'hidden';
        marqPosition.innerHTML = "";
        marqueeShow.style.visibility = 'hidden';
    }
}

/** 圖案觸發程式切換 */
function editView(status) {
    var originEles = document.getElementById("images").innerHTML;
    var originEles1 = document.getElementById('desShow').innerHTML;
    var originEles2 = document.getElementById('marqueeShow').innerHTML;
    if (status == 0) {
        var newEles = originEles.replace(/onclick="draDIV\(this\)"/g, 'onclick=""');
        newEles = newEles.replace(/onclick="editIMG\(this\)"/g, 'onclick="play(this)"');
        var newEles1 = originEles1.replace(/onclick="draDIV\(this\)"/g, 'onclick=""');
        newEles1 = newEles1.replace(/class="image" id="desPosition"/g, 'class="" id="desPosition"')
        var newEles2 = originEles2.replace(/onclick="draDIV\(this\)"/g, 'onclick=""');
        newEles2 = newEles2.replace(/class="image" id="marqPosition"/g, 'class="" id="marqPosition"')
    } else if (status == 1) {
        var newEles = originEles.replace(/onclick=""/g, 'onclick="draDIV(this)"');
        newEles = newEles.replace(/onclick="play\(this\)"/g, 'onclick="editIMG(this)"');
        var newEles1 = originEles1.replace(/onclick=""/g, 'onclick="draDIV(this)"');
        newEles1 = newEles1.replace(/class="" id="desPosition"/g, 'class="image" id="desPosition"')
        var newEles2 = originEles2.replace(/onclick=""/g, 'onclick="draDIV(this)"');
        newEles2 = newEles2.replace(/class="" id="marqPosition"/g, 'class="image" id="marqPosition"')
    }
    document.getElementById("images").innerHTML = newEles;
    document.getElementById('desShow').innerHTML = newEles1;
    document.getElementById('marqueeShow').innerHTML = newEles2;
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
    updateIMG = e;
    checkAll();
    checkAllIMGs();
    updateIMG.className += ' editIMG';
    document.getElementById('updateIMG').style.visibility = 'visible';
    var imgName = updateIMG.src.replace(window.location.origin + '/SUSHI/img/customer/', ''); /** 取得圖片名稱 */
    var position = imgName.indexOf('.');
    var nowIMG = imgName.substring(0, position);
    var hasValue = 0;
    for (var i = 0; i < editArray.length; i++) {
        if (editArray[i].image == nowIMG) {
            nowVoice.value = editArray[i].voice;
            nowVideo.value = editArray[i].video;
            nowDescription.value = editArray[i].words;
            nowMarquee.value = editArray[i].marquee;
            if (nowVideo.value != '') {
                videoShow.style.visibility = 'visible';
            }
            if (nowDescription.value != '') {
                desShow.style.visibility = 'visible';
                desPosition.innerText = editArray[i].words;
            }
            if (nowMarquee.value != '') {
                marqPosition.innerHTML = nowMarquee.value;
                marqueeShow.style.visibility = 'visible';
            }
            hasValue++;
            nowIndex = i;
            break;
        }
    }
    if (hasValue == 0) {
        editArray.push({ image: nowIMG, voice: '', video: '', words: '', marquee: '' });
        nowIndex = editArray.length - 1;
        nowVoice.value = '';
        nowVideo.value = '';
        nowDescription.value = '';
        nowMarquee.value = '';
    }
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

/** 清空編輯區 */
function checkAll() {
    nowVoice.value = '';
    nowVideo.value = '';
    nowDescription.value = '';
    nowMarquee.value = '';
    videoShow.style.visibility = 'hidden';
    desPosition.innerText = '';
    desShow.style.visibility = 'hidden';
    marqPosition.innerHTML = '';
    marqueeShow.style.visibility = 'hidden';
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

/** 儲存音源網址至Array */
function saveURL() {
    if (nowVoice.value == '') {
        editArray[nowIndex].voice = '';
    } else if (nowVoice.value.startsWith("https://www.youtube.com/watch?") || nowVoice.value.startsWith("https://www.youtube.com/embed/") || nowVoice.value.startsWith("https://youtu.be/")) {
        editArray[nowIndex].voice = nowVoice.value;
    } else {
        alert('請確認Youtube網址是否正確');
    }
}

/** 儲存影片網址至Array */
function uploadURL() {
    if (nowVideo.value == '') {
        editArray[nowIndex].video = '';
        videoShow.style.visibility = 'hidden';
    } else if (nowVideo.value.startsWith("https://www.youtube.com/watch?") || nowVideo.value.startsWith("https://www.youtube.com/embed/") || nowVideo.value.startsWith("https://youtu.be/")) {
        editArray[nowIndex].video = nowVideo.value;
        videoShow.style.visibility = 'visible';
    } else {
        alert('請確認Youtube網址是否正確');
    }
}

/** 儲存說明文字至Array */
function uploadDes() {
    if (nowDescription.value == '') {
        editArray[nowIndex].words = '';
        desPosition.innerText = '';
        desShow.style.visibility = 'hidden';
    } else {
        editArray[nowIndex].words = nowDescription.value;
        desPosition.innerText = nowDescription.value;
        desShow.style.visibility = 'visible';
    }
}

/** 儲存跑馬燈文字至Array */
function uploadMarq() {
    if (nowMarquee.value == '') {
        editArray[nowIndex].marquee = '';
        marqPosition.innerHTML = '';
        marqueeShow.style.visibility = 'hidden';
    } else {
        editArray[nowIndex].marquee = nowMarquee.value;
        marqPosition.innerHTML = nowMarquee.value;
        marqueeShow.style.visibility = 'visible';
    }
}