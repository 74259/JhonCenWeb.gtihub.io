window.onload = function() {
  var door = true;
  var body = document.getElementsByTagName("body")[0];
  var google = document.getElementById("google");
  var google_btn = document.getElementById("google_btn");
  var magi = document.getElementById("magi");
  var magi_btn = document.getElementById("magi_btn");
  var baidu = document.getElementById("baidu");
  var baidu_btn = document.getElementById("baidu_btn");
  var qihu = document.getElementById("qihu");
  var qihu_btn = document.getElementById("qihu_btn");
  var sougou = document.getElementById("sougou");
  var sougou_btn = document.getElementById("sougou_btn");
  var bing = document.getElementById("bing");
  var bing_btn = document.getElementById("bing_btn");
  var yahoo = document.getElementById("yahoo");
  var yahoo_btn = document.getElementById("yahoo_btn");
  var dialog = document.getElementById("dialog");
  var searchValue = "";

  body.addEventListener("click", e => {
    select_img.style.transform = "rotateX(" + 0 + "deg)";
    dialog.style.display = "none";
    door = true;
  })
  select.addEventListener("click", e => {
    e.stopPropagation();
    if (door) {
      select_img.style.transform = "rotateX(" + 180 + "deg)";
      dialog.style.display = "block";
      door = false;
    } else {
      select_img.style.transform = "rotateX(" + 0 + "deg)";
      dialog.style.display = "none";
      door = true;
    }
  });
  dialog.onclick = () => {
    select_img.style.transform = "rotate(" + 0 + "deg)";
    dialog.style.display = "none";
    door = true;
  };
  baidu_btn.addEventListener("click", () => {
    baidu.style.display = "block";
    google.style.display = "none";
    magi.style.display = "none";
    qihu.style.display = "none";
    sougou.style.display = "none";
    bing.style.display = "none";
    yahoo.style.display = "none";
    baidu.value = searchValue;
  });
  google_btn.addEventListener("click", () => {
    baidu.style.display = "none";
    google.style.display = "block";
    magi.style.display = "none";
    qihu.style.display = "none";
    sougou.style.display = "none";
    bing.style.display = "none";
    yahoo.style.display = "none";
    google.value = searchValue;
  });
  magi_btn.addEventListener("click", () => {
    baidu.style.display = "none";
    google.style.display = "none";
    magi.style.display = "block";
    qihu.style.display = "none";
    sougou.style.display = "none";
    bing.style.display = "none";
    yahoo.style.display = "none";
    magi.value = searchValue;
  });
  qihu_btn.addEventListener("click", () => {
    baidu.style.display = "none";
    google.style.display = "none";
    qihu.style.display = "block";
    magi.style.display = "none";
    sougou.style.display = "none";
    bing.style.display = "none";
    yahoo.style.display = "none";
    qihu.value = searchValue;
  });
  sougou_btn.addEventListener("click", () => {
    baidu.style.display = "none";
    google.style.display = "none";
    qihu.style.display = "none";
    magi.style.display = "none";
    sougou.style.display = "block";
    bing.style.display = "none";
    yahoo.style.display = "none";
    sougou.value = searchValue;
  });
  bing_btn.addEventListener("click", () => {
    baidu.style.display = "none";
    google.style.display = "none";
    magi.style.display = "none";
    qihu.style.display = "none";
    sougou.style.display = "none";
    bing.style.display = "block";
    yahoo.style.display = "none";
    bing.value = searchValue;
  });
  yahoo_btn.addEventListener("click", () => {
    baidu.style.display = "none";
    google.style.display = "none";
    qihu.style.display = "none";
    magi.style.display = "none";
    sougou.style.display = "none";
    bing.style.display = "none";
    yahoo.style.display = "block";
    yahoo.value = searchValue;
  });
  function search(name, api) {
    name.onkeyup = function(ev) {
      if (ev.keyCode === 13) {
        window.open(`${api}${this.value}&${new Date().getTime()}`, "_blank");
      }
      searchValue = name.value;
    };
  }
  window.onblur = function() {
    document.title = "快回来";
  };
  window.onfocus = function() {
    document.title = "我的首页";
  };
  search(google, "https://www.google.com/search?q=");
  search(magi, "https://magi.com/search?q=");
  search(baidu, "https://www.baidu.com/s?wd=");
  search(qihu, "https://www.so.com/s?q=");
  search(sougou, "https://www.sogou.com/sogou?query=");
  search(bing, "https://cn.bing.com/search?q=");
  search(yahoo, "https://search.yahoo.com/search?q=");
  search(google, "https://www.google.com/search?q=");
};
