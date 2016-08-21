/**
 * 重新开始
 * level：难度等级
 *
 * Created by jinshiyan on 2016/7/20.
 */
function reStart(){
    /*清除游戏区的方格以及“失败”字样*/
    var level = $("input[name='radio']:checked").val();//获取选中等级值
    for (var i = 1; i < level*level+1; i++) {
        $("#tile"+i).remove();
        $("#over").remove();
    }
    gameStart();//重新开始游戏
    if(timeCount){
        //清除定时器
        clearTimeout(timeCount);
        //开启新的计时器
        time = 0;
        timer();
    }
}