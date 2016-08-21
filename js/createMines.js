/**
 * 随机产生雷所在的位置，个数为对应的难度等级
 * 初级：10*10/5个
 * 中级：15*15/5个
 * 高级：20*20/5个
 *
 * Created by jinshiyan on 2016/7/19.
 */
function createMine(level,minesNum) {
    //var level = $("input[name='radio']:checked").val();//获取选中等级值
    var mine = new Array();//用于存放雷所在位置的数组
    while(mine.length<minesNum){
        var nextMine = Math.ceil(Math.random()*level*level);
        for(var j=0;j<mine.length;j++){
            if(nextMine==mine[j]){
                var nextMine = Math.ceil(Math.random()*level*level);
            }
        }
        mine.push(nextMine);
        //$("#tile"+nextMine).css("background-color","red");
    }
    //console.log("mine="+mine);
    return mine;
}