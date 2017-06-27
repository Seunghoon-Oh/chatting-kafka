var user;
$(function(){
  user = prompt("Please enter your name.", "steve");

  if(user != "steve" && user != "bread"){
   alert(user + " is an unauthorized user!!");
   window.close();
  }else{
   alert(user + "!! Wellcome!!");
  }
});

var $messages = $('.messages-content'),
    d, h, m,
    i = 0;


$(window).load(function() {
  $messages.mCustomScrollbar();
});

$( window ).ready(function() {
  // Handler for .ready() called.
  setInfo();
  connect();
});

var info = [
  'Brad Pitt|Bread|profile-80.jpg',
  'Seunghoon Oh|Steve|steve.jpg'
]

var userInfo;
var friendInfo;
var stompClient = null;

function setInfo() {
//  var user =  document.location.search.substr(1).split('&')[0].split('=')[1]

  if(user == "steve"){
    friendInfo = info[0].split('|');
    userInfo = info[1].split('|');
  }else{
    friendInfo = info[1].split('|');
    userInfo = info[0].split('|');
  }
  document.getElementById("full-name").innerHTML = friendInfo[0];
  document.getElementById("nick-name").innerHTML = friendInfo[1];
  document.getElementById('user-img').src="./img/"+friendInfo[2];
}

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
    scrollInertia: 10,
    timeout: 0
  });
}

function setDate(){
  d = new Date()
//  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
//  }
}

function insertMessage() {
  msg = $('.message-input').val();
  if ($.trim(msg) == '') {
    return false;
  }
  stompClient.send("/app/message", {}, JSON.stringify({ 'message': msg, 'user': userInfo[0] }));
  $('.message-input').val(null);
}

$('.message-submit').click(function() {
  insertMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
})

function getFile(){
   document.getElementById("upfile").click();
 }

function sub(){
  var file = document.getElementById('upfile').files[0];
  if(file.name != ""){
    var reader = new FileReader();
    var rawData = new ArrayBuffer();

    reader.loadend = function() {
    }
    reader.onload = function(e) {
        console.log("e",e)
        console.log("e.target",e.target)
        console.log("e.target.result",e.target.result)
        console.log("this.result",this.result)
        rawData = e.target.result;
        stompClient.send("/app/file", {},  JSON.stringify({'rawData': rawData, 'fileName': file.name, 'user': userInfo[0] }));
    }
    reader.readAsBinaryString(file);
  }
}

function connect() {
  var socket = new SockJS('/chatting');
  stompClient = Stomp.over(socket);
  stompClient.connect({}, function (frame) {
      stompClient.subscribe('/topic/chatting', function (greeting) {
          console.log(greeting);
          var data = JSON.parse(greeting.body);
          console.log(data);
          if(data.message != null){
            showMessage(data.user, data.message);
          } else {
            localStorage.setItem(data.fileName, data.rawData);
            showMessage2(data.user, data.fileName, data.rawData);
          }
       });
  });
}

function saveFile(fileName) {
   var arrayBuffer =  localStorage.getItem(fileName);
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    var parts = [];
    parts.push(arrayBuffer);
    url = window.URL.createObjectURL(new Blob(parts));
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
}

function showMessage(user, message) {
  if(user == userInfo[0]){
    $('<div class="message message-personal">' + message + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
  }else{
    var friendImgSrc = "img/"+friendInfo[2];
    $('<div class="message loading new"><figure class="avatar"><img src=\''+friendImgSrc+'\'/></figure><span></span></div>').appendTo($('.mCSB_container'));
    updateScrollbar();
    setTimeout(function() {
      $('.message.loading').remove();
      $('<div class="message new"><figure class="avatar"><img src=\''+friendImgSrc+'\' /></figure>' + message + '</div>').appendTo($('.mCSB_container')).addClass('new');
      setDate();
      updateScrollbar();
      i++;
      }, 1000 + (Math.random() * 20) * 100);
  }
}

function showMessage2(user, fileName, rawData) {
  if(user == userInfo[0]){
    $('<div class="message message-personal">' + fileName + '&nbsp;&nbsp;<img src="img/download.png" height="15px" width="15px" onclick="return saveFile(\''+fileName+'\')"/></div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    updateScrollbar();
  }else{
    var friendImgSrc = "img/"+friendInfo[2];
    $('<div class="message loading new"><figure class="avatar"><img src=\''+friendImgSrc+'\'/></figure><span></span></div>').appendTo($('.mCSB_container'));
    updateScrollbar();
    setTimeout(function() {
      $('.message.loading').remove();
      $('<div class="message new"><figure class="avatar"><img src=\''+friendImgSrc+'\' /></figure>' + fileName + '&nbsp;&nbsp;<img src="img/download.png" height="15px" width="15px" onclick="return saveFile(\''+fileName+'\')"/></div>').appendTo($('.mCSB_container')).addClass('new');
      setDate();
      updateScrollbar();
      i++;
      }, 1000 + (Math.random() * 20) * 100);
  }
}
//
//$(function () {
//    $("form").on('submit', function (e) {
//        e.preventDefault();
//    });
//    $( "#connect" ).click(function() { connect(); });
//    $( "#disconnect" ).click(function() { disconnect(); });
//    $( "#send" ).click(function() { sendName(); });
//});