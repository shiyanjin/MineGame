/**
 * 计算目前点击tile周围雷的数量
 * tileState：目前方格的状态
 * mine：雷所在位置
 * clickTile：目前被点击的方格编号
 * level：难度等级
 *
 * Created by jinshiyan on 2016/7/20.
 */
function countMines(mine,clickTile,level) {
    var mineCount = 0;
    //创建数组，代表与目前点击tile的相邻位置
    var arrClose = new Array();
    arrClose = createCloseArr(clickTile,level,arrClose);//创建clickTile相邻位置方格编号数组
    //console.log("点击位置："+clickTile+"，相邻位置数组："+arrClose);
    mineCount = count(arrClose,mine);//计算雷的数量
    //console.log("雷的数量："+mineCount);
    return mineCount;
}
/*
*计算雷的数量
*/
function count(arrClose,mine){
    var count = 0;//每次将雷的个数设为0
    for(var arr=0;arr<arrClose.length;arr++){
        for(var mineI=0;mineI<mine.length;mineI++){
            if(arrClose[arr]==mine[mineI]){
                count += 1;
                break;
            }
        }
    }
    return count;
}