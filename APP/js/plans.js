var data_list=[];
var i=1;
function backIndex(){
    window.location.href="./index.html";
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    return date.toLocaleDateString('en-US', options);
}

function openMap(){
    window.location.href="./map.html";
}

function createData(){
    var str="";
    var str2="";

    data_list.forEach((data,index)=>{
       
        str+=`
            <div class="details_row">
                <h3>DAY ${index+1}</h3>
                <p>${data.formattedDate}</p>
            </div>
        `;
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
       
        str2+=`
                <div class="day_data_add">
                    <img onclick="openAddress('${index+1}')" src="./image/di_add.png"/>
                </div>
                
            </div>
        `;
    });
    $("#details_list").html(str);
    $("#day_data_list").html(str2);
}

function openAddress(day){
    window.localStorage.setItem("day",JSON.stringify(data_list));
    window.location.href="explore.html?day="+day;
}

//新增(socket)
function add(){
    var currentDate = new Date();
    currentDate.setMinutes(currentDate.getMinutes() + (i*1440));
    const formattedDate = formatDate(currentDate);
    data_list.push({"formattedDate":formattedDate,"data_list":[]});
    createData();
    i=i+1;
}

$(function(){
    var now_day=window.localStorage.getItem("day");
    if(now_day){
        now_day=JSON.parse(now_day);
        console.log(now_day);
        data_list=now_day;
    }else{
        const currentDate = new Date();
        const formattedDate = formatDate(currentDate);
        data_list.push({"formattedDate":formattedDate,"data_list":[]});
    }
    createData();
});

