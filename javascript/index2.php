<script type="text/javascript" src="/jquery.js"></script>
<script type="text/javascript">
var aaa = '<label>date(text)</label><div foo-li="1459511454829" class="glyphicon glyphicon-cog pull-right show"></div><div foo-li="1459511454829" class="glyphicon glyphicon-trash pull-right dlt_me"></div><div class="hide_me show_1459511454829"><div class="input-group"><span class="input-group-addon">Label</span><input class="form-control" type="text" name="section[hab50][subsections][3rsrf6][fields][1459511454829][label]" placeholder="label" value="date"></div><div class="input-group"><span class="input-group-addon">IsRequired</span><select class="form-control" name="section[hab50][subsections][vju2zo][fields][1459511454829][isrequired]" placeholder="isrequired"><option value="">Select</option><option value="yes">Yes</option><option value="no">No</option></select></div><div class="input-group"><span class="input-group-addon">HelpText</span><input type="text" class="form-control" name="section[hab50][subsections][vju2zo][fields][1459511454829][help]" placeholder="help" value=""></div><input type="hidden" name="section[hab50][subsections][vju2zo][fields][1459511454829][type]" value="text" placeholder="type"><input type="hidden" name="section[hab50][subsections][vju2zo][fields][1459511454829][table]" value="billing" placeholder="table"></div>';
$(aaa).find('input').each(function(q, w){	
	var aa = $(w).attr('name').replace('vju2zo', '3rsrf6')
	$(w).attr('name', aa)
	console.log(w)
		
})
</script>