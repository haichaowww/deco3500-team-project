var data_list=['Brisbane City Hall','Brisbane sign','Queensland Museum','Story Bridge','University of Queensland'];

function changeLocal(){
    var searchText=$("#searchText").val();
    var now_data_list=[];
    data_list.forEach(data=>{
        if(data.toLowerCase().includes(searchText.toLowerCase())){
            now_data_list.push(data);
        }
    });
    createData(now_data_list);
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function add(data){
    var day_list=JSON.parse(window.localStorage.getItem("day"));
    const day = getQueryParam('day'); 
    var now_data=day_list[day-1];
    var now_data_list=now_data.data_list;
    now_data_list.push(data);
    window.localStorage.setItem("day",JSON.stringify(day_list));
    window.location.href="./plans.html";
}

function createData(now_data_list){
    var str="";
    now_data_list.forEach(data=>{
        str+=`
            <div class="address_data">
                <div class="img_box">
                    <img src="./image/dd.png"/>
                </div>
                <div class="tt_box">
                    <h2>${data}</h2>
                    <p>########</p>
                    <div class="address_add_box">
                        <span class="address_add" onclick="add('${data}')">+</span>
                        <span class="address_add_plan" onclick="add('${data}')">Add to plan</span>
                    </div>
                </div>
            </div>
        `;
    });
    $("#address_data_list").html(str);
}

$(function(){
    createData(data_list);
});