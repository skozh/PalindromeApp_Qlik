$(document).ready(function(){
	var data = "";
	$.ajax({ 
             type: "GET",
             dataType: "json",
             url: "api/list/",
             success: success
         });
	function success(data) {
		var trHTML = '';
		$.each(data, function (i, item) {
			trHTML += '<tr><td>' + data[i].name + '</td><td>' + data[i].word + '</td><td>' + data[i].result + '</td></tr>';
		});
		$('#messages').append(trHTML);
	}
	
	$("#submit").click(function(){
		var nameVal = $("#name").val();
		var messageVal = $("#message").val();
		
		if (nameVal != "" && messageVal != ""){
			var info = { name:nameVal , message:messageVal}
			$.ajax({ 
             type: "POST",
			 data: info,
			 datatype: 'json',
             url: "/api/list",
             success: postsuccess,
			 error: postfailed
         });
			
			function postsuccess() {
				location.reload();
			}
			function postfailed() {
				alert('Server Error. Try again later');
			}
			
		}
		else{
			alert("Values empty");
		}
	});
	
	$("#delete").click(function(){
		var nameVal = $("#deletename").val();
		var posturl = "/api/user/"+nameVal;
		
		if (nameVal != ""){
			
			$.ajax({ 
             type: "DELETE",
			 datatype: 'json',
             url: posturl,
             success: postsuccess,
			 error: postfailed
         });
			
			function postsuccess() {
				location.reload();
			}
			function postfailed() {
				alert('Server Error. Try again later');
			}
			
		}
		else{
			alert("Name empty");
		}
	});
	
	
	
	
	
});