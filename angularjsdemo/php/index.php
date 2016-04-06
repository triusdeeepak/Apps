<!DOCTYPE html>
<html>

<head>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.26/angular.min.js"></script>
</head>

<body>

 <div ng-app="" ng-controller="formController">
 <form name="form" method="POST" action="">
<table>
	<tr>
		<td><label>Firstname:</label></td>
		<td><input type="text" ng-module="fname"></td>
	</tr>
	<tr>
		<td><label>Lastname:</label></td>
		<td><input type="text" ng-module="lname"></td>
	</tr>
	<tr>
		<td><label>Gender:</label></td>
		<td><input type="radio" ng-model="user.gender" value="male" />Male
    		<input type="radio" ng-model="user.gender" value="female" />Female</td>
	</tr>
	<tr>
		<td><label>Dob:</label></td>
 		<td><input type="text" ng-module="dob"></td>
	</tr>
	<tr>
		<td><label>Email:</label></td>
		<td><input type="email" ng-module="email"></td>
	</tr>
	<tr>
		<td><label>Password:</label></td>
		<td><input type="text" ng-module="pswd"></td>
	</tr>
	<tr>
		<td><button ng-click="reset()">RESET</button></td>
    	<td><button ng-click="update(user)">SAVE</button></td>
	</tr>
</table>
</form>
</div>



</body>
</html>