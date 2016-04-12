<?php if(isset($_POST) && !empty($_POST)){ echo '<pre>'; print_r($_POST); echo '</pre>'; } ?>
<form id="w0" action="/forms/create" method="post">
	<input type="hidden" name="_csrf" value="VzdWbTF4RGsaWwAfekEsJiZUGjdJOR0qGnZlNHULPB5ifCMFfDUVXA==">
	<div class="form-group field-forms-author required">
		<input type="hidden" id="forms-author" class="form-control" name="Forms[author]" value="9">
		<div class="help-block"></div>
	</div>
	<div class="form-group field-forms-title required">
		<label class="control-label" for="forms-title">Title</label>
		<input type="text" id="forms-title" class="form-control" name="Forms[title]" maxlength="255">
		<div class="help-block"></div>
	</div>
	<div class="all_sections">
		<section id="sectionq41tf" class="sectionq41tf">
			<input type="hidden" class="section_1" value="q41tf">
			<div class="input-group"> <span class="input-group-addon">Section</span>
				<input type="text" required="" class="form-control" name="section[q41tf][label]" placeholder=""> <span class="input-group-addon"><span title="Any Help for users about this section?" foo-id="sectionq41tf" class="help_u glyphicon glyphicon-question-sign"></span></span> <span class="input-group-addon"><span title="Assign to which user?" foo-id="sectionq41tf" class="show_u glyphicon glyphicon-user"></span></span> <span class="input-group-addon"><span title="Want to make this section duplicate?" foo-id="sectionq41tf" class="duplicate_u glyphicon glyphicon-duplicate"></span></span> <span class="input-group-addon"><span title="How many column you want in this section?" foo-id="sectionq41tf" class="column_u glyphicon glyphicon-th"></span></span> <span class="input-group-addon"><span title="Want to delete?" foo-id="sectionq41tf" class="dlt_sec glyphicon glyphicon-trash"></span></span>
			</div>
			<div class="hide_u column_u_sectionq41tf">
				<select class="form-control" name="section[q41tf][column]">
					<option value="0">Select Column</option>
					<option value="1">Column 1</option>
					<option value="2">Column 2</option>
					<option value="3">Column 3</option>
					<option value="4">Column 4</option>
				</select>
			</div>
			<div class="hide_u duplicate_u_sectionq41tf">
				<select class="form-control" name="section[q41tf][duplicate]">
					<option value="1">Yes</option>
					<option value="0" selected="">No</option>
				</select>
			</div>
			<div class="hide_u help_u_sectionq41tf">
				<input type="text" class="form-control" value="" placeholder="Help Text" name="section[q41tf][help]"> </div>
			<div class="pull-right hide_u u_sectionq41tf">
				<table>
					<tbody>
						<tr>
							<th></th>
							<th><span class="glyphicon glyphicon-eye-open"></span>
							</th>
							<th><span class="glyphicon glyphicon-pencil"></span>
							</th>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<th>CC</th>
							<td>
								<input name="section[q41tf][uacl][cc][v]" type="checkbox">
							</td>
							<td>
								<input name="section[q41tf][uacl][cc][e]" type="checkbox">
							</td>
						</tr>
						<tr>
							<th>CG</th>
							<td>
								<input name="section[q41tf][uacl][cg][v]" type="checkbox">
							</td>
							<td>
								<input name="section[q41tf][uacl][cg][e]" type="checkbox">
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<!-- /.col-lg-6 -->
			<br>
			<ul foo-class="q41tf" class="col-md-10 col-md-offset-1">
				<div class="subsectionldrlzs subsec">
					<input type="hidden" class="subsection_1" value="ldrlzs">
					<div class="input-group"> <span class="input-group-addon">Subsection</span>
						<input required="" type="text" class="form-control" name="section[q41tf][subsections][ldrlzs][label]" placeholder=""> <span class="input-group-addon"><span title="Any Help for users about this subsection?" foo-sec="sectionq41tf" foo-sub-sec="subsectionldrlzs" class="help_u_sb glyphicon glyphicon-question-sign"></span></span> <span class="input-group-addon"><span title="Assign to which user?" foo-sec="sectionq41tf" foo-sub-sec="subsectionldrlzs" class="show_u_sb glyphicon glyphicon-user"></span></span> <span class="input-group-addon"><span title="Want to make this subsection duplicate?" foo-sec="sectionq41tf" foo-sub-sec="subsectionldrlzs" class="duplicate_u_sb glyphicon glyphicon-duplicate"></span></span> <span class="input-group-addon"><span title="How many column you want in this subsection?" foo-sec="sectionq41tf" foo-sub-sec="subsectionldrlzs" class="column_u_sb glyphicon glyphicon-th"></span></span> <span class="input-group-addon"><span title="Want to delete?" foo-sec="sectionq41tf" foo-sub-sec="subsectionldrlzs" class="dlt_sub_sec glyphicon glyphicon-trash"></span></span>
					</div>
					<div class="hide_u column_u_sectionq41tf_subsectionldrlzs">
						<select class="form-control" name="section[q41tf][subsections][ldrlzs][column]">
							<option value="0">Select Column</option>
							<option value="1">Column 1</option>
							<option value="2">Column 2</option>
							<option value="3">Column 3</option>
							<option value="4">Column 4</option>
						</select>
					</div>
					<div class="hide_u duplicate_u_sectionq41tf_subsectionldrlzs">
						<select class="form-control" name="section[q41tf][subsections][ldrlzs][duplicate]">
							<option value="1">Yes</option>
							<option value="0" selected="">No</option>
						</select>
					</div>
					<div class="hide_u help_u_sub sectionq41tf_subsectionldrlzs">
						<input type="text" class="form-control" value="" placeholder="Help Text" name="section[q41tf][subsections][ldrlzs][help]"> </div>
					<div class="pull-right hide_u hide_u_sb u_sectionq41tf_subsectionldrlzs">
						<table>
							<tbody>
								<tr>
									<th></th>
									<th><span class="glyphicon glyphicon-eye-open"></span>
									</th>
									<th><span class="glyphicon glyphicon-pencil"></span>
									</th>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th>CC</th>
									<td>
										<input name="section[q41tf][subsections][ldrlzs][uacl][cc][v]" type="checkbox">
									</td>
									<td>
										<input name="section[q41tf][subsections][ldrlzs][uacl][cc][e]" type="checkbox">
									</td>
								</tr>
								<tr>
									<th>CG</th>
									<td>
										<input name="section[q41tf][subsections][ldrlzs][uacl][cg][v]" type="checkbox">
									</td>
									<td>
										<input name="section[q41tf][subsections][ldrlzs][uacl][cg][e]" type="checkbox">
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- /.col-lg-6 -->
					<ul id="q41tf_ldrlzs" subsection="subsectionldrlzs" section="sectionq41tf" class="list-group"></ul>
				</div>
				<button type="button" class="add_sub btn btn-danger">AddSub</button>
			</ul>
			<div class="clearfix"></div>
		</section>
		<button type="button" class="add_more btn btn-primary">AddMain</button>
	</div>
	<div class="clearfix"></div>
	<div class="form-group field-forms-content">
		<input type="hidden" id="forms-content" class="form-control" name="Forms[content]" rows="16">
		<div class="help-block"></div>
	</div>
	<div class="form-group field-forms-status required">
		<label class="control-label" for="forms-status">Status</label>
		<select id="forms-status" class="form-control" name="Forms[status]">
			<option value="1">Enable</option>
			<option value="0">Disable</option>
		</select>
		<div class="help-block"></div>
	</div>
	<div class="form-group field-forms-created_at required">
		<input type="hidden" id="forms-created_at" class="form-control" name="Forms[created_at]" value="1460106188">
		<div class="help-block"></div>
	</div>
	<div class="form-group field-forms-updated_at required">
		<input type="hidden" id="forms-updated_at" class="form-control" name="Forms[updated_at]" value="1460106188">
		<div class="help-block"></div>
	</div>
	<div class="form-group">
		<button type="button" id="crt" class="btn btn-success">Create</button> <a class="btn btn-primary" href="/forms/index">Cancel</a> </div>
</form>
<script type="text/javascript" src="/jquery.js"></script>
<script type="text/javascript">
$("#crt").click(function(){
	var aa = $("#w0").serialize()
	console.log('sss', aa)
	event.preventDefault();
})
</script>