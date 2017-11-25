var frameModule = require("ui/frame");
exports.logout=function(){
    var topmost = frameModule.topmost();
    topmost.navigate("views/login/login");
};
exports.items=function(){
    alert("App dev is in progress !!");
};

