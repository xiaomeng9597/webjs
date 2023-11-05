function jumpok() {
    var getbody = getnull($("#jsbody").text()).replace(/(^\s*)|(\s*$)/g,"");
    if (getbody) {
        try {
            api.removePrefs({
                key: "jsbody"
            });
            api.setPrefs({
                key: "jsbody",
                value: getbody
            });
        /*跳转页面*/
        api.openWin({
            name: "postweb2",
            url: "https://qsth520.gitee.io/webjs/htmlcode/jump.html",
            bgColor: "#ffffff",
            bounces: false,
            allowEdit: true,
            scaleEnabled: false,
            animation: {
                type: "movein",
                subType: "from_right",
                duration: 150
            }
        });
        /*跳转页面*/
        } catch (e) {};
        js_close();
    } else {
        api.toast({
            msg: "Body结果显示框无内容，跳转页面失败！",
            duration: 2000,
            location: "middle"
        });
        js_close();
    }
    js_close();
};



try{
$(".go").html('<div class="post-html" id="post-html"><div class="getcookie" onclick="cookie2();">复制Cookie</div><div class="post-datadiv" id="post-datadiv">Body结果</div></div><div id="jsbody"></div><div class="app_close" id="app_close"><div style="width:50%;float:left;background-color:#f9f9f9;border-bottom-left-radius:5px;border-right:1px solid #eeeeee;" onclick="jumpok()">查看Text结果</div><div style="width:50%;float:left;background-color:#f9f9f9;border-bottom-right-radius:5px;" onclick="js_close();">关闭</div></div>');
}catch(err){};