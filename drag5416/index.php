<link rel="stylesheet" type="text/css" href="/bootstrap.css">
<style type="text/css">
	body{
		background: pink
	}
	.all{
		width: 400px;		
		margin: 0 auto;
		min-height: 100px;
	}
	.a1{
		width: 100%;
		min-height: 100px;
		border: 1px solid #fff;
		padding: 50px 10px;
		margin: 0px 40px;
		background: darkblue
	}
	.b1{
		min-height: 100px;
		width: 90%;
		margin: 0 auto;
		padding: 2px;
		background: skyblue;
		border: 1px solid		
	}
	.c1{
		min-height: 10px;
		width: 90%;
		margin: 10px;
		padding: 2px;
		border: 1px solid brown;
	}
</style>
<div class="all">
	<div foo-section="1" class="a1">
		<div foo-subsection="1" class="b1">
			<div class="c1">11</div>
			<div class="c1">22</div>
			<div class="c1">33</div>
			<div class="c1">44</div>
		</div>
		<div foo-subsection="2" class="b1">
			<div class="c1">11</div>
			<div class="c1">22</div>
			<div class="c1">33</div>
			<div class="c1">44</div>
		</div>
		<div foo-subsection="3" class="b1">
			<div class="c1">11</div>
			<div class="c1">22</div>
			<div class="c1">33</div>
			<div class="c1">44</div>
		</div>
	</div>
	<div foo-section="2" class="a1">
		<div foo-subsection="1" class="b1">
			<div class="c1">11</div>
			<div class="c1">22</div>
			<div class="c1">33</div>
			<div class="c1">44</div>
		</div>
		<div foo-subsection="2" class="b1">
			<div class="c1">11</div>
			<div class="c1">22</div>
			<div class="c1">33</div>
			<div class="c1">44</div>
		</div>
		<div foo-subsection="3" class="b1">
			<div class="c1">11</div>
			<div class="c1">22</div>
			<div class="c1">33</div>
			<div class="c1">44</div>
		</div>
	</div>
</div>
<script type="text/javascript" src="/jquery.js"></script>
<script type="text/javascript" src="/jquery-ui.js"></script>
<script type="text/javascript">
$(".a1").sortable({
    connectWith: ".a1",
    receive: function( event, ui ) {
        console.log('a1 : ', ui)
    }
});
$(".b1").sortable({
    connectWith: ".b1",
    receive: function( event, ui ) {
        console.log('b1 : ', ui)
    }
});
$(".all").sortable({
    connectWith: ".all",    
});
</script>