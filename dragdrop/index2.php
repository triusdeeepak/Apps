<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  
  <script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
  
	<style>
  
  .dropable {
	  border:1px solid;
	  min-height: 500px;
	  width: 500px;
  }
  
  .sortable{min-height: 30px;}
  
  .ui-state-default { margin: 10px; padding: 5px; width: 150px; }
  
  .dropable .row.test{ border:1px dotted;min-height:50px;}
  .sortinner{ border:1px dotted;min-height:30px;}
  </style>
  <script>
  $(function() {
    $( "#drag2 div" ).draggable({
		helper: 'clone',
	});	
    $( "#drag1 div" ).draggable({
		helper: 'clone',	
	});	
	function drop_me(){
		console.log('009')
		$( ".testsort div").droppable({
			greedy: true,
			revert:true,						
			drop: function( event, ui ) {
				if(ui.draggable.hasClass('field')){
					console.log('55')
					var main_row2 = document.createElement('div');
					main_row2.innerHTML ="fhduhf";
					$(main_row2).appendTo($(this).children(".sortinner"));
					$( ".sortinner").sortable({ helper: "clone",connectWith: ".sortinner",dropOnEmpty: true });
				}
				console.log('66')
			}
		});							
	}
	function g_dropable(){		
	    $( ".dropable" ).droppable({
			greedy: true,
			//accept: '#drag1 li',
			revert: true,
			drop: function( event, ui ) {
	    		console.log('000');
				//var drag_id = $(ui.draggable).html();
				//console.log(ui.draggable.attr('nos'));
				x = ui.helper.clone();
				ui.helper.remove();
				if(ui.draggable.hasClass('sec')){
					console.log('111')
					var main_row = document.createElement('div');
					$(main_row).addClass('row test');
					var sort_row = document.createElement('div');
					$(sort_row).addClass('testsort');
					for(i=0;i<ui.draggable.attr('nos');i++){
						var inner_col = document.createElement('div')
						var inner_sort = document.createElement('div')
						$(inner_sort).addClass('sortinner')
						$(inner_col).addClass('col-sm-'+ui.draggable.attr('data-class')).html('Drop Field Here');
						$(inner_sort).appendTo(inner_col);
						$(inner_col).appendTo(sort_row);
						console.log('2222')
					}
						console.log('333')
					$(sort_row).appendTo(main_row);
					$(main_row).appendTo($(this).children(".sortable"));					
					console.log('444')
					drop_me()					
				}
			}			
		});	
	}	
	g_dropable();	
	drop_me()
	$( ".sortable").sortable({ helper: "clone",connectWith: ".sortable" });
	$( ".sec-sortable").sortable({ helper: "clone",connectWith: ".sec-sortable" });	
  });
  </script>
</head>
<body>

<div class="container">
<div class="row"> 
<div class="col-sm-6 " id="canvas">
	<div class="sec-sortable">
		<div class="dropable">
			<div class="sortable">
				<div class="row test">
					<div class="testsort">
						<div class="col-sm-12 ui-droppable">Drop Field Here
							<div class="sortinner ui-droppable ui-sortable">
								<div class="field ui-droppable ui-sortable-handle" style="display: block;">fhduhf</div>
								<div class="field ui-droppable ui-sortable-handle" style="display: block;">fhduhf</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="col-sm-3">
	<button class="btn btn-primary secmain" nos="1" data-class="12">Add Main</button>
	<div id="drag1">
		<div class="ui-state-default sec" nos="1" data-class="12">1 col</div>
		<div class="ui-state-default sec" nos="2" data-class="6">2 col</div>
		<div class="ui-state-default sec" nos="3" data-class="4">3 col</div>
		<div class="ui-state-default sec" nos="4" data-class="3">4 col</div>
	</div>
</div>
<div class="col-sm-3">
	<div id="drag2">
		<div class="ui-state-default field">Field1</div>
		<div class="ui-state-default field">Field2</div>
		<div class="ui-state-default field">Field3</div>
		<div class="ui-state-default field">Field4</div>
	</div>
</div>
</div>
</div>
</body>
</html>
