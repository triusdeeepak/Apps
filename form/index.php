<?php
if(isset($_POST) && !empty($_POST)){
	echo '<pre>';
	print_r(array_multisort($_POST));
	print_r($_POST);
	echo '</pre>';
}
?>
<form action="#" method="POST">
	<div>
		<input type="text" name="fields[0][label]" value="">
		<input type="hidden" name="fields[0][type]" value="text">
		<input type="hidden" name="fields[0][section]" value="1">
		<input type="hidden" name="fields[0][subsection]" value="1">
	</div>
	<div>
		<input type="text" name="fields[1][label]" value="">
		<input type="hidden" name="fields[1][type]" value="text">
		<input type="hidden" name="fields[1][section]" value="2">
		<input type="hidden" name="fields[1][subsection]" value="1">
	</div>
	<div>
		<input type="text" name="fields[2][label]" value="">
		<input type="hidden" name="fields[2][type]" value="text">
		<input type="hidden" name="fields[2][section]" value="1">
		<input type="hidden" name="fields[2][subsection]" value="2">
	</div>
	<div>
		<input type="text" name="fields[3][label]" value="">
		<input type="hidden" name="fields[3][type]" value="text">
		<input type="hidden" name="fields[3][section]" value="2">
		<input type="hidden" name="fields[3][subsection]" value="1">
	</div>
	<div>
		<input type="text" name="fields[4][label]" value="">
		<input type="hidden" name="fields[4][type]" value="text">
		<input type="hidden" name="fields[4][section]" value="1">
		<input type="hidden" name="fields[4][subsection]" value="2">
	</div>
	<input type="submit" value="Submit">
</form>