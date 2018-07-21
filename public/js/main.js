$(document).ready(function(){
	var data = "";
	$.ajax({ 
             type: "GET",
             dataType: "json",
             url: "api/",
             success: success
         });
	function success(data) {
		var trHTML = '';
		$.each(data, function (i, item) {
			trHTML += '<tr><td>' + data[i].name + '</td><td>' + data[i].word + '</td><td>' + data[i].result + '</td></tr>';
		});
		$('#messages').append(trHTML);
	}
});