/**
 * 计时器
 * Created by jinshiyan on 2016/7/20.
 */
var time = 0;
function timer(){
    time ++;
    $("#time").html(time);
    timeCount = setTimeout("timer()",1000);
}