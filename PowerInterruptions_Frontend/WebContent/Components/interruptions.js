$(document).on("click", "#btnSave", function(event) {
	// Clear alerts---------------------
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();

	var status = validateInterruptionForm();
	if (status != true) {
		$("#alertError").text(status);
		$("#alertError").show();
		return;
	}
	// If valid------------------------
	var type = ($("#hidInterruptionIDSave").val() == "") ? "POST" : "PUT";
	$.ajax({
		url : "InterruptionAPI",
		type : type,
		data : $("#frmInterruption").serialize(),
		dataType : "text",
		complete : function(response, status) {
			onInterruptionSaveComplete(response.responseText, status);
		}
	});
});

function onInterruptionSaveComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully saved.");
			$("#alertSuccess").show();
			$("#divInterruptionsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while saving.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while saving..");
		$("#alertError").show();
	}
	$("#hidInterruptionIDSave").val("");
	$("#frmInterruption")[0].reset();
}

$(document).on("click", ".btnUpdate", function(event) {
	$("#hidInterruptionIDSave").val($(this).data("interruptionid")); //change
	$("#date").val($(this).closest("tr").find('td:eq(0)').text()); 
	$("#timeSlot").val($(this).closest("tr").find('td:eq(1)').text()); 
	$("#locationID").val($(this).closest("tr").find('td:eq(2)').text());
	$("#area").val($(this).closest("tr").find('td:eq(3)').text()); 
	$("#reason").val($(this).closest("tr").find('td:eq(4)').text()); 
	$("#status").val($(this).closest("tr").find('td:eq(5)').text());
});

$(document).on("click", ".btnRemove", function(event) {
	$.ajax({
		url : "InterruptionAPI",
		type : "DELETE",
		data : "interruptionID=" + $(this).data("interruptionid"),  //change
		dataType : "text",
		complete : function(response, status) {
			onInterruptionDeleteComplete(response.responseText, status);
		}
	});
});

function onInterruptionDeleteComplete(response, status) {
	if (status == "success") {
		var resultSet = JSON.parse(response);
		if (resultSet.status.trim() == "success") {
			$("#alertSuccess").text("Successfully deleted.");
			$("#alertSuccess").show();
			$("#divInterruptionsGrid").html(resultSet.data);
		} else if (resultSet.status.trim() == "error") {
			$("#alertError").text(resultSet.data);
			$("#alertError").show();
		}
	} else if (status == "error") {
		$("#alertError").text("Error while deleting.");
		$("#alertError").show();
	} else {
		$("#alertError").text("Unknown error while deleting..");
		$("#alertError").show();
	}
}

// CLIENT-MODEL================================================================
function validateInterruptionForm() {
	// Date
	if ($("#date").val().trim() == "") {
		return "Insert Interruption Date.";
	}
	// Time Slot
	if ($("#timeSlot").val().trim() == "") {
		return "Insert Time Slot.";
	}
	// Location ID-------------------------------
	if ($("#locationID").val().trim() == "") {
		return "Insert LocationID.";
	}
	// Area-------------------------------
	if ($("#area").val().trim() == "") {
		return "Insert Area.";
	}
	// Reason-------------------------------
	if ($("#reason").val().trim() == "") {
		return "Insert Reason.";
	}
	// Status-------------------------------
	if ($("#status").val().trim() == "") {
		return "Insert Status.";
	}
	
	return true;
}
