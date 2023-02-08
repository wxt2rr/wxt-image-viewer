function submit(){
    var data = $('#input').val();
    var searchDatas = data.split(" ");

    var $searchList = $("#gallery");
    var sHtml = "";
    for(var i in searchDatas){
        var searchData = searchDatas[i];
w
        var arr = searchData.split("	");
        var url = arr[0];
        var suggestion = arr[1];
        var SubLabel = arr[2];
        var Score = arr[3];
        var type = arr[4];

        sHtml += "<a href='"+ arr[0] +"' class='image'><img src='"+ arr[0] +"' alt='' /></a><h4>Suggestion:"+suggestion+"|SubLabel:"+SubLabel+"|Score:"+Score+"|原始机审类别(EvilType):"+type+"</h4>";
    };

    console.log(sHtml);
    $searchList.html(sHtml); 
}