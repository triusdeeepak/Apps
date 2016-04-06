$(document).ready(function(){
    glob();    
    /*--ADD DRAG & DROP SECTION--*/
    function glob(){
        $( ".list-group" ).sortable({
            cursor:"move",
            connectWith: ".list-group",
            items: 'li[class!=list-group]',
            receive: function( event, ui ){
                if($(ui.sender).attr('id') == "sort"){
                    console.log($(this).parent().attr('class'));
                    var section_id = $(this).closest('ul').attr('section');
                    //$(this).closest('ul').find('.more').show();
                    var subsection_id = $(this).closest('ul').attr('subsection');              
                    ui.item.clone().appendTo('.class_b .list-group');                                        
                    var dj_name = 'section['+section_id+'][subsections]['+subsection_id+'][fields]['+$.now()+'][label]';
                    var dj_opt = 'section['+section_id+'][subsections]['+subsection_id+'][fields]['+$.now()+'][options][]';
                    var dj_typ = 'section['+section_id+'][subsections]['+subsection_id+'][fields]['+$.now()+'][type]';
                    ui.item.find('.dj_lbl').attr('name', dj_name);
                    ui.item.find('.dj_options').attr('name', dj_opt);
                    ui.item.find('.dj_type').attr('name', dj_typ);
                }
            },            
        }); 
        $( ".subsec" ).draggable();
        $( "section" ).droppable();
        //$( "ul.list-group" ).sortable();
    }
    /*--ADD MAIN SECTION--*/
    $(document).on('click', '.add_more', function(){
        var cc0 = $(".class_a").find('section').last().attr('class');    
        newId = cc0 .replace(/(\d+)+/g, function(match, number) {
            return parseInt(number)+1;
        });
        var cc1 = newId;
        console.log(newId+'==')
        var section_html = '<section class="' + cc1 + '">     <div class="input-group"> <span class="input-group-addon">' + cc1 + '</span> <input type="text" class="form-control" name="section[' + cc1 + '][label]" placeholder="' + cc1 + '" /> <span class="input-group-addon"><span foo-id="' + cc1 + '" class="help_u glyphicon glyphicon-question-sign"></span></span><span class="input-group-addon"><span foo-id="' + cc1 + '" class="show_u glyphicon glyphicon-user"></span></span> <span class="input-group-addon"><span foo-id="' + cc1 + '" class="duplicate_u glyphicon glyphicon-duplicate"></span></span><span class="input-group-addon"><span foo-id="' + cc1 + '" class="dlt_sec glyphicon glyphicon-trash"></span></span>     </div>   <div class="hide_u duplicate_u_' + cc1 + '">         <select class="form-control" name="section[' + cc1 + '][duplicate]">             <option value="1">Yes</option>          <option value="0">No</option>       </select>   </div>     <div class="hide_u help_u_' + cc1 + '"><input type="text" class="form-control" value="" placeholder="Help Text" name="section[' + cc1 + '][help]"></div>     <div class="pull-right hide_u u_' + cc1 + '">         <table>             <tr>                 <th></th>                 <th><span class="glyphicon glyphicon-eye-open"></span></th>                 <th><span class="glyphicon glyphicon-pencil"></span></th>             </tr>             <tbody>                 <tr>                     <th>CC</th>                     <td><input name="section[' + cc1 + '][uacl][cc][v]" type="checkbox"></td>                     <td><input name="section[' + cc1 + '][uacl][cc][e]" type="checkbox"></td>                 </tr>                 <tr>                     <th>CG</th>                     <td><input name="section[' + cc1 + '][uacl][cg][v]" type="checkbox"></td>                     <td><input name="section[' + cc1 + '][uacl][cg][e]" type="checkbox"></td>                 </tr>             </tbody>         </table>     </div>     <!-- /.col-lg-6 --><br>     <ul foo-class="' + cc1 + '" class="list-group col-md-10 col-md-offset-2">         <div class="subsection1 subsec">             <div class="input-group"> <span class="input-group-addon">subsection1</span> <input type="text" required class="form-control" name="section[' + cc1 + '][subsections][subsection1][label]" placeholder="subsection1" /> <span class="input-group-addon"><span foo-sec="' + cc1 + '" foo-sub-sec="subsection' + cc1 + '" class="show_u_sb glyphicon glyphicon-user"></span></span> <span class="input-group-addon"><span foo-sec="' + cc1 + '" foo-sub-sec="subsection' + cc1 + '" class="sm glyphicon glyphicon-th-list"></span></span><span class="input-group-addon"><span foo-sec="' + cc1 + '" foo-sub-sec="subsection' + cc1 + '" class="dlt_sub_sec glyphicon glyphicon-trash"></span></span>             </div>             <div class="pull-right hide_u_sb u_' + cc1 + '_subsection' + cc1 + '">                 <table>                     <tr>                         <th></th>                         <th><span class="glyphicon glyphicon-eye-open"></span></th>                         <th><span class="glyphicon glyphicon-pencil"></span></th>                     </tr>                     <tbody>                         <tr>                             <th>CC</th>                             <td><input name="section[' + cc1 + '][subsections][subsection1][uacl][cc][v]" type="checkbox"></td>                             <td><input name="section[' + cc1 + '][subsections][subsection1][uacl][cc][e]" type="checkbox"></td>                         </tr>                         <tr>                             <th>CG</th>                             <td><input name="section[' + cc1 + '][subsections][subsection1][uacl][cg][v]" type="checkbox"></td>                             <td><input name="section[' + cc1 + '][subsections][subsection1][uacl][cg][e]" type="checkbox"></td>                         </tr>                     </tbody>                 </table>             </div>             <!-- /.col-lg-6 -->             <ul subsection="subsection1" section="' + cc1 + '" class="list-group"></ul>         </div> <button type="button" class="add_sub btn btn-danger">AddSub</button> </ul> </section>';        
        $("."+cc0).after(section_html)
        cc1++;
        glob();
    })
    /*--SHOW HIDE SUB SECTION--*/
    $(document).on('click', '.sm', function(){
        if (  $( this ).parent().css( "transform" ) == 'none' ){
            $(this).parent().css("transform","rotate(180deg)");
        } else {
            $(this).parent().css("transform","" );
        }
        $("ul.sub_"+$(this).attr('foo-id')).toggle();
        glob();
    })
    /*--SHOW-HIDE MAIN SECTION--*/
    $(document).on('click', '.mm', function(){
        $(this).parent().find('ul>ul, button').toggle();    
        glob();
    })
    /*--ADD SUB SECTION--*/
    $(document).on('click', '.add_sub', function(){        
        var cc2 = $(this).parent('ul').find('div.subsec').length+1; //subsection
        var cc3 = $(this).parent('ul').attr('foo-class'); //section
        console.log(cc2)
        var data_b = '<div class="subsection'+cc2+' subsec ui-sortable-handle"> <div class="input-group"> <span class="input-group-addon">subsection'+cc2+'</span> <input type="text" required class="form-control" name="section['+cc3+'][subsections][subsection'+cc2+'][label]" placeholder="subsection'+cc2+'" /> <span class="input-group-addon"><span foo-sec="'+cc3+'" foo-sub-sec="subsection'+cc2+'" class="show_u_sb glyphicon glyphicon-user"></span></span> <span class="input-group-addon"><span foo-sec="'+cc3+'" foo-sub-sec="subsection'+cc2+'" class="sm glyphicon glyphicon-th-list"></span></span> <span class="input-group-addon"><span foo-sec="' + cc3 + '" foo-sub-sec="subsection' + cc2 + '" class="dlt_sub_sec glyphicon glyphicon-trash"></span></span></div> <div class="pull-right hide_u_sb u_'+cc3+'_subsection'+cc2+'"> <table> <tr> <th></th> <th><span class="glyphicon glyphicon-eye-open"></span></th> <th><span class="glyphicon glyphicon-pencil"></span></th> </tr> <tbody> <tr> <th>CC</th> <td><input name="section['+cc3+'][subsections][subsection'+cc2+'][uacl][cc][v]" type="checkbox"></td> <td><input name="section['+cc3+'][subsections][subsection'+cc2+'][uacl][cc][e]" type="checkbox"></td> </tr> <tr> <th>CG</th> <td><input name="section['+cc3+'][subsections][subsection'+cc2+'][uacl][cg][v]" type="checkbox"></td> <td><input name="section['+cc3+'][subsections][subsection'+cc2+'][uacl][cg][e]" type="checkbox"></td> </tr> </tbody> </table> </div><!-- /.col-lg-6 --> <ul subsection="subsection'+cc2+'" section="'+cc3+'" class="list-group"></ul> </div>';
        $('.'+cc3+' .add_sub').before(data_b);
        glob();
     });
    /*--SUBSECTION FIELDS SETTING--*/
    $(document).on('click', '.class_a .hd.glyphicon-cog', function(){
        $(this).parent().find(".dlt").toggle();        
        $(this).parent().find('div.more').toggle();    
    })
    $(document).on('click', '.class_a .hd.glyphicon-floppy-disk', function(){
        $(this).parent().find(".dlt").toggle();        
        $(this).parent().find('div.more').toggle();
        glob();
    })
    /*--ADD DROP DOWN OPTION--*/
    $(document).on('click', '.pls', function(){
        var full_div = $(this).parent().html();    
        $(this).parent().after('<div class="form-group">'+full_div+'</div>');
        $(this).parent().next().find('input').val('');
        show_json();
        glob();
    })
    /*--REMOVE DROP DOWN OPTION--*/
    $(document).on('click', '.mns', function(){
        $(this).parent().remove();
        show_json();
        glob();
    })
    /*--DELETE FIELDS--*/
    $(document).on('click', '.dlt', function(){
        var result = confirm("Want to delete?");
        var par_id = $(this).parent().attr('id');
        var sec_lbl = $(this).parent().attr('sec');
        var sub_id = $(this).parent().attr('subsection');        
        var this_sub = "subsection1";
        console.log(par_id, sec_lbl)
        if (result) {            
            delete my_data[sec_lbl].subsections[this_sub].fields[par_id]                        
        }
        $(this).parent().remove();        
        show_json(my_data);
        glob();
    })

    /*--DELETE SECTION--*/
    $(document).on('click', '.dlt_sec', function(){        
        var foo_lbl = $(this).attr('foo-id');        
        var result = confirm("Want to delete the Section.?");
        if(result){            
            $("section."+foo_lbl).remove()
        }        
        glob();
    })
    /*--DELETE SUBSECTION--*/
    $(document).on('click', '.dlt_sub_sec', function(){        
        var sec = $(this).attr('foo-sec');        
        var sub = $(this).attr('foo-sub-sec');        
        var result = confirm("Want to delete the Subsection.?");
        if(result){            
            $("."+sec+" ."+sub+".subsec").remove()
        }        
        glob();
    })
    $(document).on('click', '.show_u_sb', function(){
        $(".hide_u_sb.u_"+$(this).attr("foo-sec")+'_'+$(this).attr("foo-sub-sec")).toggle();
    })
    $(document).on('click', '.help_u', function(){        
        $(".help_u_"+$(this).attr("foo-id")).toggle();
    })
    $(document).on('click', '.show_u', function(){
        $(".hide_u.u_"+$(this).attr("foo-id")).toggle();
    })
    /*--COPY SECTION--*/
    $("span.duplicate_u").click(function(){
        var this_id = $(this).attr('foo-id')        
        var next_id = parseInt(this_id)+1
        var txtString = $("section."+this_id);
        txtString = txtString.prop('outerHTML');
        var txtString2 = $.trim(txtString);
        newId = this_id .replace(/(\d+)+/g, function(match, number) {
            return parseInt(number)+1;
        });
        /*$('#id1 p').each(function() {
            var text = $(this).text();
            $(this).text(text.replace('dog', 'doll')); 
        });*/
        $("."+this_id).after(txtString2)
        console.log(newId)
    })
    $("input#tbl_cols").bind('keyup mouseup', function () {        
        console.log($(this).val())        
    })
    $("input#tbl_rows").bind('keyup mouseup', function () {
        $('tbody').append('<tr>'+$(".table tr:last-child").html()+'</tr>')
    })
    $("input#tbl_rows").bind('keydown mousedown', function () {        
        $(".table tr:last-child").remove();
    })
    $(window).scroll(function() {
        if ($(this).scrollTop() > 600){  
            $('.class_b.col-md-4').addClass("sticky");
        }
        else{
            $('.class_b.col-md-4').removeClass("sticky");
        }
    });
    $(function() {
        /*--DATE--*/
        $( ".dj_date" ).datepicker();
        /*--SECTION-UACL--*/
        $(".show_u").click(function(){        
            $(".hide_u.u_"+$(this).attr("foo-id")).toggle();
        })
        /*--SECTION-SUB-UACL--*/
        $(".show_u_sb").click(function(){
        })        
        /*--COPY SUB SECTION--*/
        $(".copy_sub").click(function(){
            /*var this_id = $(this).attr('foo-class')
            var next_id = parseInt(this_id)+1
            var $clone = $("section.section_"+this_id).clone();        
            $clone.find("#someElement").attr("id","someElement_2");        
            $().clone().appendTo($("section.section_"+this_id)).prop('class', 'section_'+next_id );;*/
            
        })
    });

})