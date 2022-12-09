var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = '再看看呗，不要走嘛(´。＿。｀) ' + OriginTitile;
        clearTimeout(titleTime);
    }
    else {
        document.title = '你终于回来啦(づ￣ 3￣)づ ' + OriginTitile;
        titleTime = setTimeout(function() {
            document.title = OriginTitile;
        }, 2000);
    }
});

