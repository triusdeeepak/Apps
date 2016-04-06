$(function() {
    $(".list-group").sortable({
        connectWith: ".list-group",
        receive:function(event, ui){
            console.log('dddd')
        }
    });
    $(".list-group").disableSelection();
    
    $("section ul.col-md-10").sortable({
        connectWith: "section ul.col-md-10",
        receive: function( event, ui ) {
            console.log('Source : '+$(this).find('ul.list-group').attr('id'))            
        }
    });
    
    $(".list-group").droppable({
        activate:function(event, ui){            
            var ss = ui.draggable.context.innerHTML;
            //console.log(ss)
        },
        drop: function( event, ui ) {
            var itm_html = ui.draggable[0].innerHTML;
            console.log('sssaas')
            console.log($(this).find('ul').context.id)
            //replace_name(itm_html, )
        }
    })
    $("section ul.col-md-10").draggable({
        connectWith: ".subsec",
        drag: function( event, ui ) {
            console.log("section drag")
        }
    })
});

function replace_name(itm_html, tid, sid){
    console.log('src : '+sid, 'tid : '+tid )
    trg_id = tid.split('_');
    src_id = sid.split('_');
    var src_sec = 'section['+[src_id[0]]+']'
    var src_sub = '[subsections]['+[src_id[1]]+']'    
    var trg_sec = 'section['+[trg_id[0]]+']'
    var trg_sub = '[subsections]['+[trg_id[1]]+']'    
    var inputs = $(itm_html).find('input');
    inputs.each(function(w, e){
        var ss = e.name.replace(src_sec, trg_sec).replace(src_sub, trg_sub)
        e.name = ss
    })
    return itm_html;
}
$(document).ready(function(){   
    /*--ADD DRAG & DROP SECTION--*/
    function get_sections(){
        var all_sections = $("form#w0").find('section').length;        
        var sec_html = '';
        for (var i = 0; i < all_sections; i++) {            
            var q = parseInt(i)+1;
            sec_html +='<option value="'+q+'">Section'+q+'</option>';
        };        
        $("#section_").html(sec_html)        
    }
    function get_subsections(sid){
        var all_subs = $("#section"+sid).find('.subsec').length;        
        var sub_html = '';
        for (var i = 0; i < all_subs; i++) {
            var q = parseInt(i)+1;
            sub_html +='<option value="'+q+'">Subsection'+q+'</option>';            
        };        
        $("#subsection_").html(sub_html)
    }    
    
    var sec_id = 1;
    get_sections();
    get_subsections(sec_id);
    $("#section_").change(function(){
        sec_id = $(this).val();
        get_subsections(sec_id)  
    })
    /*--ADD MAIN SECTION--*/
    $(document).on('click', '.add_more', function(){
        var cc0 = $("form").find('section').length;    
        var cc1 = parseInt(cc0) + 1;
        console.log(cc0)
        var section_html = '<section id="section'+cc1+'" class="section'+cc1+'">'+
                        '<div class="input-group">'+
                            '<span class="input-group-addon">Section'+cc1+'</span>'+
                            '<input type="text" required class="form-control" name="section['+cc1+'][label]" placeholder="" />'+
                            '<span class="input-group-addon"><span foo-id="section'+cc1+'" class="help_u glyphicon glyphicon-question-sign"></span></span>'+
                            '<span class="input-group-addon"><span foo-id="section'+cc1+'" class="show_u glyphicon glyphicon-user"></span></span>'+
                            '<span class="input-group-addon"><span foo-id="section'+cc1+'" class="duplicate_u glyphicon glyphicon-duplicate"></span></span>'+
                            '<span class="input-group-addon"><span foo-id="section'+cc1+'" class="dlt_sec glyphicon glyphicon-trash"></span></span>'+
                        '</div>'+
                        '<div class="hide_u duplicate_u_section'+cc1+'">'+
                            '<select class="form-control" name="section['+cc1+'][duplicate]">'+
                                '<option value="1">Yes</option>'+
                                '<option value="0">No</option>'+
                            '</select>'+
                        '</div>'+
                        '<div class="hide_u help_u_section'+cc1+'">'+
                            '<input type="text" class="form-control" value="" placeholder="Help Text" name="section['+cc1+'][help]">'+
                        '</div>'+
                        '<div class="pull-right hide_u u_section'+cc1+'">'+
                            '<table>'+
                                '<tr>'+
                                    '<th></th>'+
                                    '<th><span class="glyphicon glyphicon-eye-open"></span></th>'+
                                    '<th><span class="glyphicon glyphicon-pencil"></span></th>'+
                                '</tr>'+
                                '<tbody>'+
                                    '<tr>'+
                                        '<th>CC</th>'+
                                        '<td><input name="section['+cc1+'][uacl][cc][v]" type="checkbox"></td>'+
                                        '<td><input name="section['+cc1+'][uacl][cc][e]" type="checkbox"></td>'+
                                    '</tr>'+
                                    '<tr>'+
                                        '<th>CG</th>'+
                                        '<td><input name="section['+cc1+'][uacl][cg][v]" type="checkbox"></td>'+
                                        '<td><input name="section['+cc1+'][uacl][cg][e]" type="checkbox"></td>'+
                                    '</tr>'+
                                '</tbody>'+
                            '</table>'+
                        '</div><!-- /.col-lg-6 --><br>'+
                        '<ul foo-class="'+cc1+'" class="col-md-10 col-md-offset-2">'+
                            '<div class="subsection1 subsec">'+
                                '<div class="input-group">'+
                                    '<span class="input-group-addon">Subsection1</span>'+
                                    '<input type="text" required class="form-control" name="section['+cc1+'][subsections][1][label]" placeholder="" />'+
                                    '<span class="input-group-addon"><span foo-sec="section'+cc1+'" foo-sub-sec="subsection1" class="help_u_sb glyphicon glyphicon-question-sign"></span></span>'+
                                    '<span class="input-group-addon"><span foo-sec="section'+cc1+'" foo-sub-sec="subsection1" class="show_u_sb glyphicon glyphicon-user"></span></span>'+                                    
                                    '<span class="input-group-addon"><span foo-sec="section'+cc1+'" foo-sub-sec="subsection1" class="duplicate_u_sb glyphicon glyphicon-duplicate"></span></span>'+
                                    '<span class="input-group-addon"><span foo-sec="section'+cc1+'" foo-sub-sec="subsection1" class="dlt_sub_sec glyphicon glyphicon-trash"></span></span>'+
                                '</div>'+
                                '<div class="hide_u duplicate_u_section'+cc1+'_subsection1">'+
                                    '<select class="form-control" name="section[1][subsections][1][duplicate]">'+
                                        '<option value="1">Yes</option>'+
                                        '<option value="0">No</option>'+
                                    '</select>'+
                                '</div>'+
                                '<div class="hide_u help_u_sub section'+cc1+'_subsection1"> <input type="text" class="form-control" value="" placeholder="Help Text" name="section['+cc1+'][subsections][1][help]"> </div>'+
                                '<div class="pull-right hide_u hide_u_sb u_section'+cc1+'_subsection1">'+
                                    '<table>'+
                                        '<tr>'+
                                            '<th></th>'+
                                            '<th><span class="glyphicon glyphicon-eye-open"></span></th>'+
                                            '<th><span class="glyphicon glyphicon-pencil"></span></th>'+
                                        '</tr>'+
                                        '<tbody>'+
                                            '<tr>'+
                                                '<th>CC</th>'+
                                                '<td><input name="section['+cc1+'][subsections][1][uacl][cc][v]" type="checkbox"></td>'+
                                                '<td><input name="section['+cc1+'][subsections][1][uacl][cc][e]" type="checkbox"></td>'+
                                            '</tr>'+
                                            '<tr>'+
                                                '<th>CG</th>'+
                                                '<td><input name="section['+cc1+'][subsections][1][uacl][cg][v]" type="checkbox"></td>'+
                                                '<td><input name="section['+cc1+'][subsections][1][uacl][cg][e]" type="checkbox"></td>'+
                                            '</tr>'+
                                        '</tbody>'+
                                    '</table>'+
                                '</div><!-- /.col-lg-6 -->'+
                                '<ul id="'+cc1+'_1" subsection="subsection1" section="section'+cc1+'" class="list-group">Drag Here</ul>'+
                            '</div>'+
                            '<button type="button" class="add_sub btn btn-danger">AddSub</button>'+
                        '</ul>'+
                    '</section>';
        $(".section"+cc0).after(section_html)        
        get_sections();
    })

    /*--ADD SUB SECTION--*/
    $(document).on('click', '.add_sub', function(){
        var prv_id = $(this).prev().find('ul.list-group').attr('id');
        var sec_sub = prv_id.split('_');
        //var cc2 = $(this).parent('ul').find('div.subsec').length+1;     //subsection
        var cc2 = parseInt(sec_sub[1]) + 1;
        var cc3 = $(this).parent('ul').attr('foo-class');   //section
        console.log(cc2, cc3);
        var data_b = '<div class="subsection'+cc2+' subsec ui-sortable-handle">'+
                        '<div class="input-group">'+
                            '<span class="input-group-addon">subsection'+cc2+'</span>'+
                            '<input type="text" required class="form-control" name="section['+cc3+'][subsections]['+cc2+'][label]" placeholder="subsection'+cc2+'" />'+
                            '<span class="input-group-addon">'+
                                '<span foo-sec="section'+cc3+'" foo-sub-sec="subsection'+cc2+'" class="help_u_sb glyphicon glyphicon-question-sign"></span>'+
                            '</span>'+
                        '<span class="input-group-addon">'+
                            '<span foo-sec="section'+cc3+'" foo-sub-sec="subsection'+cc2+'" class="show_u_sb glyphicon glyphicon-user"></span>'+
                        '</span>'+
                        '<span class="input-group-addon">'+
                            '<span foo-sec="section'+cc3+'" foo-sub-sec="subsection'+cc2+'" class="duplicate_u_sb glyphicon glyphicon-duplicate"></span>'+
                        '</span>'+
                        ' <span class="input-group-addon">'+
                            ' <span foo-sec="section' + cc3 + '" foo-sub-sec="subsection' + cc2 + '" class="dlt_sub_sec glyphicon glyphicon-trash"></span>'+
                        ' </span>'+
                    ' </div>'+
                    ' <div class="pull-right hide_u_sb u_section'+cc3+'_subsection'+cc2+'">'+
                        ' <table>'+
                            ' <tr>'+
                                ' <th></th>'+
                                ' <th><span class="glyphicon glyphicon-eye-open"></span></th>'+
                                ' <th><span class="glyphicon glyphicon-pencil"></span></th>'+
                            ' </tr>'+
                            ' <tbody>'+
                                ' <tr>'+
                                    ' <th>CC</th>'+
                                    ' <td><input name="section['+cc3+'][subsections]['+cc2+'][uacl][cc][v]" type="checkbox"></td>'+
                                    ' <td><input name="section['+cc3+'][subsections]['+cc2+'][uacl][cc][e]" type="checkbox"></td>'+
                                ' </tr>'+
                                ' <tr>'+
                                    ' <th>CG</th>'+
                                        ' <td><input name="section['+cc3+'][subsections]['+cc2+'][uacl][cg][v]" type="checkbox"></td>'+
                                        ' <td><input name="section['+cc3+'][subsections]['+cc2+'][uacl][cg][e]" type="checkbox"></td>'+
                                ' </tr>'+
                                ' </tbody>'+
                            ' </table>'+
                        ' </div><!-- /.col-lg-6 -->'+
                        ' <div class="hide_u duplicate_u_section'+cc3+'_subsection'+cc2+'">'+
                            ' <select class="form-control" name="section['+cc3+'][subsections]['+cc2+'][duplicate]">'+
                                ' <option value="1" selected="">Yes</option>'+
                                ' <option value="0" selected="">No</option>'+
                            ' </select>'+
                        ' </div>'+
                        ' <div class="hide_u help_u_sub section'+cc3+'_subsection'+cc2+'">'+
                            ' <input type="text" class="form-control" value="" placeholder="Help Text" name="section['+cc3+'][subsections]['+cc2+'][help]">'+
                        ' </div>'+
                        ' <ul data-draggable="target" id="'+cc3+'_'+cc2+'" subsection="subsection'+cc2+'" section="'+cc3+'" class="list-group"></ul>'+
                    ' </div>';
        $('.section'+cc3+' .add_sub').before(data_b);
        get_subsections(cc3);
     });
        
    /*--DELETE SUBSECTION--*/
    /*--subsection options--*/
    $(document).on('click', '.dlt_sub_sec', function(){        
        var sec = $(this).attr('foo-sec');        
        var sub = $(this).attr('foo-sub-sec');        
        var result = confirm("Want to delete the Subsection.?");
        if(result){
            $("."+sec+" ."+sub+".subsec").remove()
        }
    })     
    $(document).on('click', '.help_u_sb', function(){
        var sec = $(this).attr('foo-sec');        
        var sub = $(this).attr('foo-sub-sec');
        console.log(sec, sub)
        $(".help_u_sub."+sec+"_"+sub).toggle();        
    })
    $(document).on('click', '.show_u_sb', function(){
        $(".hide_u_sb.u_"+$(this).attr("foo-sec")+'_'+$(this).attr("foo-sub-sec")).toggle();
    })
    $(document).on('click', '.duplicate_u_sb', function(){
        console.log("asd");
        $(".duplicate_u_"+$(this).attr("foo-sec")+'_'+$(this).attr("foo-sub-sec")).toggle();
    })

    /*--Main Section Options--*/
    /*--DELETE SECTION--*/
    $(document).on('click', '.dlt_sec', function(){        
        var foo_lbl = $(this).attr('foo-id');        
        var result = confirm("Want to delete the Section.?");
        if(result){            
            $("section."+foo_lbl).remove()
        }
    })
    $(document).on('click', '.help_u', function(){        
        $(".help_u_"+$(this).attr("foo-id")).toggle();
    })
    $(document).on('click', '.duplicate_u', function(){        
        $(".duplicate_u_"+$(this).attr("foo-id")).toggle();
    })
    $(document).on('click', '.show_u', function(){
        console.log($(this).attr("foo-id"))
        $(".hide_u.u_"+$(this).attr("foo-id")).toggle();
    })

    /*--Fields Options--*/
    /*--DELETE FIELDS--*/
    $(document).on('click', '.dlt_me', function(){
        var result = confirm("Want to delete the field.?");
        if(result){
            $(this).parent().closest('li').remove();
        }
    })

    $("span.v_duplicate_u_sub").click(function(){    
        var sec = $(this).attr("foo-sec");
        var sub = $(this).attr("foo-sub-sec");
        console.log("."+sec+' .'+sub)
        $("."+sec+" ul ."+sub).after('<div class="'+sub+'">'+$("."+sec+" ul ."+sub).html()+'</div>')
    })

    $(".view_help_u").hover(function(){        
        $(".view_help_u_"+$(this).attr('foo-id')).toggle();
    })    
    $(".show_help").hover(function(){        
        $(".show_help_"+$(this).attr('foo-li')).toggle();
    })
    $(".view_help_u_sub").hover(function(){        
        $(".view_help_u_"+$(this).attr('foo-sec')+'_'+$(this).attr('foo-sub-sec')).toggle();
    })
    

    $(window).scroll(function() {
        if ($(this).scrollTop() > 400){  
            $('#dj_form .fields_').addClass("sticky");
        }
        else{
            $('#dj_form .fields_').removeClass("sticky");
        }
    });
    $(function() {
        /*--DATE--*/
        $( ".dj_date" ).datepicker();        
    });
})
/*--new js--*/
$(".addfield").click(function(){
    var sec_ = $("#section_").val();
    var subsec_ = $("#subsection_").val();
    var field = $("#field_").val();
    var fieldtype = $("#fieldtype").val();
    var li_ = $.now();
    console.log(sec_, subsec_, field, fieldtype)
    $("#field_ option[value="+field+"]").remove();    
    var fields = '<li data-draggable="item" class="list-group-item" draggable="true">';
    fields += '<label>'+field+'('+fieldtype+')</label>';
    fields += '<div foo-li="'+li_+'" class="glyphicon glyphicon-cog pull-right show"></div>';
    fields += '<div foo-li="'+li_+'" class="glyphicon glyphicon-trash pull-right dlt_me"></div>';    
    fields += '<div class="hide_me show_'+li_+'">';
        fields += '<div class="input-group">';
            fields += '<span class="input-group-addon">Label</span>';
            if(fieldtype == 'text' || fieldtype == 'radio' || fieldtype == 'number'){
                fields += '<input class="form-control" type="'+fieldtype+'" name="section['+sec_+'][subsections]['+subsec_+'][fields]['+li_+'][label]" value="'+field+'">';
            }else if(fieldtype == 'checkbox'){
                fields += '<input class="form-control" type="text" name="section['+sec_+'][subsections]['+subsec_+'][fields]['+li_+'][label]" value="'+field+'">';
            }else if(fieldtype == 'textarea'){
                fields += '<textarea class="form-control" name="section['+sec_+'][subsections]['+subsec_+'][fields]['+li_+'][label]" placeholder="'+field+'">'+field+'</textarea>';
            }else{
                fields += '<select class="form-control" name="section['+sec_+'][subsections]['+subsec_+'][fields]['+li_+'][label]" placeholder="'+field+'"></select>';
            }
        fields += '</div>';
        fields += '<div class="input-group">';
            fields += '<span class="input-group-addon">HelpText</span>';
            fields += '<input type="text" class="form-control" name="section['+sec_+'][subsections]['+subsec_+'][fields]['+li_+'][help]" value="">';
        fields += '</div>';
        fields += '<input type="hidden" name="section['+sec_+'][subsections]['+subsec_+'][fields]['+li_+'][type]" value="'+fieldtype+'">';
    fields += '</div></li>';
    $('#'+sec_+'_'+subsec_).append(fields);    
})
/*--show-hide--*/
$(document).on('click', '.show', function(){    
    //$(".hide_me").hide();
    $('.show_'+$(this).attr('foo-li')).toggle();    
})
jQuery("#alltables_").change(function(){
    $("#field_, #fieldtype, #section_, #subsection_").attr('disabled', 'disabled');
    var request = jQuery.ajax({
      url: "getfields",
      method: "GEt",
      data: { tbl : jQuery(this).val() },
      dataType: "html"
    });     
    request.done(function( flds ) {
        $("#field_, #fieldtype, #section_, #subsection_").removeAttr('disabled');
        $("#field_").html(flds)
    });
     
    request.fail(function( jqXHR, textStatus ) {
      alert( "Request failed: " + textStatus );
    });
})