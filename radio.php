<form action="" method="POST">
<label for="firstName">First Name</label><input type="text" id="firstName" />
<label for="lastName">Last Name</label><input type="text" id="lastName" />

  <legend>Gender</legend>
  <input type="radio" name="sex" value="m">
  <label for="sex-m">Male</label>
  <input type="radio" name="sex" value="f">
  <label for="sex-f">Female</label>

<input type="submit" value="Submit" >
</form>
<?php if(isset($_POST)){ print_r($_POST); } ?>