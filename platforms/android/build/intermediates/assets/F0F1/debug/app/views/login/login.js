/*
exports.loaded=function(){
    console.log('Hello Banquet hall provider');
};
exports.register=function(){
    alert("Please register to create your profile");
};
*/
exports.loaded = function(args) {
    page = args.object;
    page.bindingContext = user;
    
};
var UserViewModel = require("../../shared/view-models/user-view-model");
var user = new UserViewModel();
var frameModule = require("ui/frame");
var dialogsModule = require("ui/dialogs");
exports.register = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/register/register");
};

exports.signIn = function() {
    user.login()
        .catch(function(error) {
            console.log(error);
            dialogsModule.alert({
                message: "Unfortunately we could not find your account.",
                okButtonText: "OK"
            });
            return Promise.reject();
        })
        .then(function() {
            frameModule.topmost().navigate("views/list/list");
        });
};
/*
exports.signIn=function(){
    var topmost = frameModule.topmost();
    topmost.navigate("views/welcome/welcome");
};
*/


