/**
 * 开始游戏，完成游戏面板、雷所在位置以及方格是否被点击状态的初始化
 * 点击触发事件
 * Created by jinshiyan on 2016/7/19.
 */
function gameStart(){
    var level = $("input[name='radio']:checked").val();//获取代表难度等级的值（10/15/20）
    var minesNum = level*level/5;//设置游戏中雷的数量,总量的1/5为地雷的数量
    //console.log(level);
    init(level); //初始化游戏面板，按照用户选择的难度等级生成相应的tile数量
    var mines = createMine(level,minesNum);//随机产生雷所在的位置，个数为对应的难度等级

    var initTileState = initState(level,"1");//初始状态initTileState设为1
    var finishedState = initState(level,"0");//完成状态finishedState设为0
    //console.log("initTileState="+initTileState);

    var flag = false;//游戏完成的标志，初始化为未完成
    var liftMines = minesNum;//剩余雷的数量
    $("#livednumber").html(liftMines);//显示剩余地雷的数量
    //点击触发事件
    for(var i=1;i<level*level+1;i++){
        var element=document.getElementById("tile"+i);
        element.onmousedown=function(aevent) {
            //if(!flag){
            flag = isFinshed(initTileState,finishedState,flag);//判断是否已经完成
            var _thisI = this.id.split("e")[1];//获取目前点击方格的编号

            //alert(_thisI);
            if(flag){
                alert("Congratulation!");
            }else{
                //当目前点击的方格第一次被点击时，执行后续游戏步骤
                if(initTileState[_thisI-1]!=0) {
                    var isMine = isEquelToMine(_thisI,mines);//判断点击tile是否为地雷所在位置
                    if(isMine){
                        //点击的tile位置为雷所在位置
                        liftMines -= 1;//剩余雷的数量
                        $("#livednumber").html(liftMines);
                        mouseclick(liftMines,_thisI,level);
                        initTileState[_thisI-1] = 0;//更新状态信息，数组下标从0开始，tile id从1开始
                    }else {
                        //如果点击的方格不是雷所在位置，计算该方格周围雷的数量
                        if (aevent.button == 0){
                            //计算clickTile方格周围雷的数量
                            var mineCount = countMines(mines,_thisI,level);
                            if(mineCount){
                                //如果地雷个数不为0，将雷数量显示在方格中
                                $("#tile"+_thisI).append("<p id='mineCount'>"+mineCount+"</p>");
                            }else {
                                $("#tile"+_thisI).css("backgroundColor","white");
                            }
                            initTileState[_thisI-1] = 0;//更新状态信息，数组下标从0开始，tile id从1开始
                            //如果点击tile周围为空，标记为白色背景
                            showNoLandMine(mines,_thisI,level,initTileState);
                        }
                    }
                    //initTileState[_thisI-1] = 0;//更新状态信息，数组下标从0开始，tile id从1开始
                   // console.log(initTileState+","+initTileState.length);
                    flag = isFinshed(initTileState,finishedState,flag);//判断是否已经完成
                    if(flag){
                        if (confirm("Congratulation!再玩一次？")) {
                            reStart(level);
                        } else {
                            window.close();
                        }
                    }
                }//当目前点击的方格第一次被点击时
            }//if(flag)
        }//click
    }//for(i)
}
