/**
 * 显示点击方格周围没有地雷的方格
 * Created by jinshiyan on 2016/7/21.
 */
function showNoLandMine(mines,clickTile,level,tileState){
    var row = Math.floor(clickTile/level);//目前点击tile所在行
    var coloum = clickTile%level==0?10:clickTile%level; //目前点击tile所在列
    console.log("clickTile="+clickTile+",row="+row+",coloum="+coloum);
    //计算变化的上下限,向前一个单位，向后两个单位
    var rowU = row+2<=level ? (row+3<=level?row+2:row+1) : row;
    var rowL = row-1>=0 ? (row-1) : 0;
    var coloumU = coloum+1<=level ? (coloum+2<=level?coloum+2:coloum+1) : coloum;
    var coloumL = coloum-1>=1 ? (coloum-1) : 1;
    //console.log("rowU="+rowU+",rowL="+rowL);
    //console.log("coloumU="+coloumU+",coloumL="+coloumL);

    for(var i=rowL;i<rowU;i++){
        for(var j=coloumL;j<coloumU;j++){
            //console.log("i="+i+",j="+j);
            var selectedID = i * level + j; //可以改变的tile ID
            //console.log("selectedID="+selectedID);
            if(selectedID!=clickTile){
                //不是当前点击的tile
                var isMine = isEquelToMine(selectedID,mines);//判断是否为地雷所在位置
               // console.log("isMine="+isMine);
                if(!isMine){
                    var mineCount = countMines(mines,selectedID,level);//计算周围雷的个数
                    //console.log("mineCount="+mineCount);
                    if(!mineCount){
                        //地雷个数为0，将该tile背景设为白色
                        $("#tile"+selectedID).css("backgroundColor","white");
                        if(tileState[selectedID - 1]){
                            tileState[selectedID - 1] = 0;//标记变化的tile为已点击
                        }
                    }//if(!mineCount)
                }//if(!isMine)
            }
        }//for(j)
    }//for(i)
}