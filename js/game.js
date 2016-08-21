/**
 * 当点击的tile为地雷所在位置时，左键点击提示结束游戏
 * 右键点击表示将该位置标记为地雷
 * clickTile：被点击的tile编号
 * level：难度等级
 * liftMines：剩余雷数量
 *
 * Created by jinshiyan on 2016/7/19.
 */
//function mouseclick(elementID,tileState,liftMines,clickTile,level){
function mouseclick(liftMines,clickTile,level){
    var width = 600/level - 2;//插入雷或标志雷的图片宽高
    if (window.event)aevent = window.event;      //解决兼容性
    if (aevent.button == 2) {
        //当事件属性button的值为2时，表用户按下了右键
        document.oncontextmenu = function (aevent) {
            if (window.event) {
                aevent = window.event;
                aevent.returnValue = false;         //对IE 中断 默认点击右键事件处理函数
            } else {
                aevent.preventDefault();          //对标准DOM 中断 默认点击右键事件处理函数
            }
        };
        $("#tile"+clickTile).append("<img src='../images/flag.jpg'/>");
        $("img").css({"width":width+"px","height":width+"px"});//设置图片大小
        //tileState[clickTile] = 0;//更新状态信息
    } else if (aevent.button == 0) {
        //var width = 600 / level - 2;//插入雷或标志雷的图片宽高
        $("#tile" + clickTile).append("<img src='../images/mine2.jpg'/>");//插入地雷背景图
        $("img").css({"width": width + "px", "height": width + "px"});//设置图片大小
        $("#gamebox").append("<p id='over'><b>失 败!</b></p>");//插入结束提示
        if (confirm("再玩一次？")) {
            reStart(level);
        } else {
            window.close();
        }
    }
}

/*
 *将每个tile的初始状态initTileState设为1，表示未被点击*
 *每个tile的完成状态finishedState设为0，表示已经被点击
 * state：目前所有tile的状态
 * level：难度等级
 */
function initState(level,state){
    var initState = new Array();
    for(var i=0;i<level*level;i++){
        initState.push(state);
    }
    return initState;
}

/*判断是否所有tile都被点击
* initTileState：初始状态/目前tile的状态
* finishedState：已经完成的状态
*/
function isFinshed(initTileState,finishedState,flag){
    if(initTileState.toString()==finishedState.toString()){
        flag = true;
    }
    return flag;
}

/*判断点击的tile是否为雷所在位置，是则返回true
* mine：tile中有雷的位置
*/
function isEquelToMine(clickTile,mine) {
    var flag;
    for (var i = 0; i < mine.length; i++) {
        //console.log("clickTile="+clickTile+","+mine[i]);
        if (clickTile == mine[i]) {
            flag = true;
            break;
        } else {
            flag = false;
        }
    }
    //console.log(flag);
    return flag;
}