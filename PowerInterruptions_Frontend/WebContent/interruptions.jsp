<%@page import="com.Interruption"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Power Interruption Management System</title>
<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/interruptions.js"></script> 
<link rel="stylesheet" href="//cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css">
</head>
<body>
	<!-- As a heading -->
	<nav class="navbar navbar-dark" style="background: #990000;">
		<h3 style="color: white">Power Interruption Management System</h3>
	</nav>


	<div class="container">

		<form id="frmInterruption" name="frmInterruption"
			style="margin-top: 20px; margin-left: 25%; width: 500px;">

			<div class="form-group">
				<label>Date</label> <input type="text" name="date" id="date"
					style="margin-bottom:15px;" class="form-control" placeholder="Date" size="30px" required>
			</div>

			<div class="form-group">
				<label>Time</label> <input type="text" name="time"
					id="time" style="margin-bottom:15px;" class="form-control" placeholder="Time"
					size="30px" required>
			</div>

			<div class="form-group">
				<label>Premises Id</label> <input type="text" name="premisesID"
					id="premisesID" style="margin-bottom:15px;" class="form-control" placeholder="Premises Id"
					size="30px" required>
			</div>

			<div class="form-group">
				<label>Area</label> <input type="text" name="area" id="area"
					style="margin-bottom:15px;" class="form-control" placeholder="Area" size="30px" required>
			</div>

			<div class="form-group">
				<label>Reason</label> <input type="text" name="reason" id="reason"
					style="margin-bottom:15px;" class="form-control" placeholder="Reason" size="30px" required>
			</div>

			<div class="form-group">
				<label>Status</label> <input type="text" name="status" id="status"
					style="margin-bottom:15px;" class="form-control" placeholder="Status" size="30px" required>
			</div>
 
			<div class="form-group" align="right">
				<input id="btnSave" name="btnSave" type="button" value="Save" style="margin-bottom:15px;" class="btn btn-primary">
				<input type="hidden" id="hidInterruptionIDSave" name="hidInterruptionIDSave" value="">
			</div>

		</form>
		<div id="alertSuccess" class="alert alert-success"></div>
		<div id="alertError" class="alert alert-danger"></div>
		<br>
		<div id="divInterruptionsGrid">
		<%
			Interruption interruptionObj = new Interruption();
			out.print(interruptionObj.readInterruptions());
		%>
		</div>
	</div>

</body>
</html>




