function backPlans(){
    window.location.href="./plans.html";
}
var data_list=[];
function createData(){
    var str2="";

    data_list.forEach((data,index)=>{
        str2+=`
            <div class="day_data">
                <h2>DAY ${index+1}</h2>
                <p>${data.formattedDate}</p>
                `;
        data.data_list.forEach(now_data=>{
            str2+=`
                <div class="address_data"style="margin-bottom: 12px;">
                    <div class="img_box">
                        <img src="./image/dd.png"/>
                    </div>
                    <div class="tt_box">
                        <h2>${now_data}</h2>
                        <p>########</p>
                    </div>
                </div>
            `;
        });
        if( data.data_list.length==0){
            str2+=`
                <h2 class="black">None</h2>
            `;
        }
        str2+=`
            </div>
        `;
    });
    $("#day_data_list").html(str2);
}

$(function(){
    var now_day=window.localStorage.getItem("day");
    if(now_day){
        now_day=JSON.parse(now_day);
        console.log(now_day);
        data_list=now_day;
        createData();
    }
});