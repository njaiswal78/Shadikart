var frameModule = require("ui/frame");
var socialShare = require("nativescript-social-share");
exports.logout=function(){
    var topmost = frameModule.topmost();
    topmost.navigate("views/login/login");
};
exports.items=function(){
    alert("App dev is in progress !!");
};
exports.share = function() {
    socialShare.shareText("Hello World");
};
