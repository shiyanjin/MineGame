/**
 * 创建数组，代表与目前点击tile的相邻位置
 * clickTile：目前点击方格编号
 * level：难度等级
 * arrClose：目前点击方格相邻位置编号
 *
 * Created by jinshiyan on 2016/7/20.
 */
function createCloseArr(clickTile,level,arrClose){
    //为了后续的数学计算，将clickTile、level转换成整型
    clickTile = parseInt(clickTile);
    level = parseInt(level);
    if(clickTile==1){
        arrClose = [2,clickTile + level,clickTile+level+1];
    }else if(clickTile==level){
        arrClose = [level-1,level*2-1,level*2];
    }else if(clickTile==level*(level-1)+1){
        arrClose = [clickTile-level,clickTile-level+1,clickTile+1];
    }else if(clickTile==level*level){
        arrClose = [clickTile-level,clickTile-level-1,clickTile-1];
    }else if(clickTile<level){
        arrClose = [clickTile-1,clickTile+1,clickTile+level-1,clickTile+level,clickTile+level+1];
    }else if(clickTile>level*(level-1)){
        arrClose = [clickTile-level-1,clickTile-level,clickTile-level+1,clickTile-1,clickTile+1];
    }else if(clickTile%level==1){
        arrClose = [clickTile-level,clickTile-level+1,clickTile+1,clickTile+level,clickTile+level+1];
    }else if(clickTile%level==0){
        arrClose = [clickTile-level-1,clickTile-level,clickTile-1,clickTile+level-1,clickTile+level];
    }else{
        arrClose = [clickTile-level-1,clickTile-level,clickTile-level+1,
            clickTile-1,clickTile+1,
            clickTile+level-1,clickTile+level,clickTile+level+1];
    }
    return arrClose;
}