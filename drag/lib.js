var dj_data = []; 
$(function () {
    $("#sortable1.droptrue1").sortable({
        connectWith: 'ul.droptrue',        
        remove:function(e, ui){
            ui.item.clone().appendTo('#sortable1');            
        },
        update: updatePostOrder
    });
    $("#sortable2.droptrue, #sortable3.droptrue").sortable({
        receive: function (e, ui) {
            ui.item.before(ui.item.data('items'));            
        },
    });
    updatePostOrder();
});




$(".inp_txt_lbl").keydown(function(){    
    setTimeout(function(){        
        updatePostOrder();
    }, 2000);
})
$(".inp_chk_lbl").click(function(){    
    setTimeout(function(){
        updatePostOrder();    
    }, 2000);    
})
function updatePostOrder() {
    console.log("asdas");/*
    var arr = [];
    $("#sortable2 li").each(function (){        
        arr['field_type'] = $(this).attr('id');
        arr['label'] = $(this).find('.inp_txt_lbl').val();
        if ($('.inp_chk_lbl').is(":checked")){
            arr['required'] = true;          
        }*/
    //});    
    //console.log(arr);
}
$("#sortable1 li span").click(function(){
    $("."+$(this).attr('class')+'_').toggle();
})
var one_opt = $(".opt1").html();
var cc = 1;
function pp(){
    var nxt = cc+1;
    $(".opt"+cc).after('<p class="opt'+nxt+'">'+one_opt+'</p>'); cc+=1;
}
function mm(){    
    $(this).parent().remove();
}