/**
 * 初始化游戏面板，按照用户选择的难度等级生成相应的tile数量
 *level：难度等级，对应生成雷的个数
 *
 * Created by jinshiyan on 2016/7/19.
 */
function init(level){
    var tileNum = 0;//id编号
    //var level = $("input[type='radio']:checked").val();//获取选中等级值
    var widthHeight = 600/level - 2;//每个方格的宽、高
    //console.log("level="+level+",widthHeight="+widthHeight);
    //生成level*level个方格
    for(var row=0;row<level;row++){
        for(var coloum=0;coloum<level;coloum++){
            tileNum += 1;
            var id = "tile" + tileNum;//tile的id
            //console.log("id"+id);
            $(".gameBox").append("<div class='tile' id='"+id+"'></div>");
        }
    }
    //设置方格宽高样式
    $(".tile").css({"width":widthHeight+"px","height":widthHeight+"px",
                   /* "border-top":(widthHeight-10)+"px solid #536bac",
                    "border-right":(widthHeight-10)+"px solid #536bac",
                    "border-bottom":(widthHeight-10)+"px solid #536bac",
                    "border-left":(widthHeight-10)+"px solid #536bac"*/
                    });
    //$("#"+"tile" + tileNum).css("background-color","red");
}